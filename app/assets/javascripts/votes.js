var public_key_2048 = '-----BEGIN PUBLIC KEY-----\n\
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2A2gctqsQkGSa9fnA7B/\n\
LEG7rX4b1UUOwxNg1tHeOTweU769ulttEdXbdUhbDqfzYev2LCfASeOfkXdD/OKe\n\
O0FGAS9sAwIHGsyr1ocU2RANDhd2Mm6Qfwjg0rNggF0fAdkBAkDnj3q3+nnAJl8I\n\
KIFFCjwls9rURSCZtZsEDxMnBtyfqj1toO8N5In6RL5pLLY86iBARhgVoD6k6lJL\n\
uUF570KuX2G6UWhsqDQcBJtBTsIMCgPyDzmKcBRaTYRfsrf1zgxFgl6S4wsHqzQ7\n\
ZsiFJYrTj2ifAZPqDLT+1F8KlHZNHhrjAIdAiHK0nASi/bzjq3f/RhEY1EaiQe2s\n\
KQIDAQAB\n\
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

function packVote() {
    var encryptedVote;
    var construction_priorities_ids = "[";
    $("#left_column :checked").each(function() {
      construction_priorities_ids += $(this).val();
      construction_priorities_ids += ",";
    });
    construction_priorities_ids += "]";

    var maintenance_priorities_ids = "[";
    $("#right_column :checked").each(function() {
      maintenance_priorities_ids += $(this).val();
      maintenance_priorities_ids += ",";
    });
    maintenance_priorities_ids += "]";

    var vote = "["+construction_priorities_ids+","+maintenance_priorities_ids+"]"

    params = certParser(public_key_2048);
    if(params.b64) {
        var key = pidCryptUtil.decodeBase64(params.b64);
        //new RSA instance
        var rsa = new pidCrypt.RSA();
        //RSA encryption
        //ASN1 parsing
        var asn = pidCrypt.ASN1.decode(pidCryptUtil.toByteArray(key));
        var tree = asn.toHexTree();
        //setting the public key for encryption
        rsa.setPublicKeyFromASN(tree);
        crypted = rsa.encrypt(input);
        encryptedVote = pidCryptUtil.fragment(pidCryptUtil.encodeBase64(pidCryptUtil.convertFromHex(crypted)),64);
        return encryptedVote;
     } else {
        alert('Could not find public key.');
        return "";
    }
};
