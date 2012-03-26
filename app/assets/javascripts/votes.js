// Copyright (C) 2010,2011,2012 Íbúar ses
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

var public_key_2048 = '-----BEGIN PUBLIC KEY-----\n\
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArmVQC8A6jgN4Tll98ygi\n\
KXGrhWPgUNtCa0qgbV/ts6GTOgHOIWyMXb8PP1HsDCNlpfk6QDDtpxZINlqyQZPM\n\
1hRZr52EXOhsthg1+7QzdQLMbc4umiYtMtXFyY05FnskigcQK1YJqFd9ap437GIz\n\
gesWPLaAbHAtYf7bqTs7hEDrRfsFXB8YhVftwG+btsIfa9yAbQLXtNyjXl+0F/kP\n\
zs5OMA3WvkGtR5aM2JXMHNT8m5NXm0tkWbs0p1odmYfhECo6vVVmfak+1GEvBlj6\n\
0ZGzEi33EbjuGyqgtWCDyPi/KkVjE7voN4QJItdONfP+TViWnp/cuR66cq7Ff9Dl\n\
PQIDAQAB\n\
-----END PUBLIC KEY-----';

function certParser(cert){
  var lines = cert.split('\n');
  var read = false;
  var b64 = false;
  var end = false;
  var flag = '';
  var retObj = {};
  retObj.info = '';
  retObj.salt = '';
  retObj.iv;
  retObj.b64 = '';
  retObj.aes = false;
  retObj.mode = '';
  retObj.bits = 0;
  for(var i=0; i< lines.length; i++){
    flag = lines[i].substr(0,9);
    if(i==1 && flag != 'Proc-Type' && flag.indexOf('M') == 0)//unencrypted cert?
      b64 = true;
    switch(flag){
      case '-----BEGI':
        read = true;
        break;
      case 'Proc-Type':
        if(read)
          retObj.info = lines[i];
        break;
      case 'DEK-Info:':
        if(read){
          var tmp = lines[i].split(',');
          var dek = tmp[0].split(': ');
          var aes = dek[1].split('-');
          retObj.aes = (aes[0] == 'AES')?true:false;
          retObj.mode = aes[2];
          retObj.bits = parseInt(aes[1]);
          retObj.salt = tmp[1].substr(0,16);
          retObj.iv = tmp[1];
        }
        break;
      case '':
        if(read)
          b64 = true;
        break;
      case '-----END ':
        if(read){
          b64 = false;
          read = false;
        }
      break;
      default:
        if(read && b64)
          retObj.b64 += pidCryptUtil.stripLineFeeds(lines[i]);
    }
  }
  return retObj;
}

function pausecomp(millis)
 {
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while(curDate-date < millis);
}

function parseVotesFromList(ul_name) {
    votes = "";
    $(ul_name).each(function(index) {
        $(this).find('li').each(function(){
            if ($(this).hasClass("selected")) {
                //alert($(this).attr('id') + ': ' + $(this).text());
                votes += $(this).attr('id').split("_")[1];
                votes += ",";
            }
        });
    });
    return votes;
}

function packVote() {
    var encryptedVote;
    // Read vote selection directly from the UL list, to ensure that they are sent to the server the same way as the user sees them
    construction_votes = parseVotesFromList('#options_construction');
    maintenance_votes = parseVotesFromList('#options_maintenance');

    var vote = "["+"["+construction_votes+"]"+","+"["+maintenance_votes+"]"+"]";
    //alert(vote);

    var params = certParser(public_key_2048);
    //alert(params);
    if(params.b64) {
        var key = pidCryptUtil.decodeBase64(params.b64);
        //new RSA instance
        var rsa = new pidCrypt.RSA();
        //RSA encryption
        //ASN1 parsing
        //alert(key);
        //alert(rsa);
        var asn = pidCrypt.ASN1.decode(pidCryptUtil.toByteArray(key));
        //alert(asn);
        var tree = asn.toHexTree();
        //alert("tree");
        //setting the public key for encryption
        rsa.setPublicKeyFromASN(tree);
        //alert("rsa set");
        //alert(vote);
        crypted = rsa.encrypt(vote);
        //alert("encrypt");
        encryptedVote = pidCryptUtil.fragment(pidCryptUtil.encodeBase64(pidCryptUtil.convertFromHex(crypted)),64);
        //alert(encryptedVote);
        return encryptedVote;
     } else {
        alert('Could not find public key.');
        return "";
    }
};
$(function() {
    // Disable vote button until something has been selected
    $(".button").attr("disabled", true);
    $("#submit_btn").attr({src: "/assets/vote_"+locale+"_grey.png"});

    // Behavior of the submit button
    $(".button").click(function() {
        $(".button").attr("disabled", true);
        $("#submit_btn").attr({src: "/assets/vote_"+locale+"_grey.png"});
        var dataString = packVote();
        $.ajax({
          type: "POST",
          url: "/votes/post_vote",
          data: { vote : dataString, neighborhood_id : $('input:hidden').val() },
          dataType: "json",
          success: function(response) {
            if (response[0] && response[0].vote_ok==true) {
              $('#content').html("<div id='success_message'> </div><div id='message'></div>");
              $('#vote_count').html(response[0].vote_count);
              $('#message').html(response[0].message)
            } else if (response[0] && response[0].message) {
              $('#content').html("<div id='success_message'> </div><div id='message'></div>");
              $('#message').html(response[0].message)
            }
          }
         });
        return false;
    });
});