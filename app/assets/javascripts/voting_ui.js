// Copyright (C) 2010-2013 Íbúar ses
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

var selected = [];

var curtotal = 0;

var total = 0;

var voteswidth = 960;

var locale;

var test_mode;

// Add a method to array to indicate if that array "has" a member
Array.prototype.has=function(v){
    for (i=0;i<this.length;i++){
        if (this[i]==v) return true;
    }
    return false;
}

var moo;

function gsub(source, pattern, replacement) {
  var match, result;
  if (!((pattern != null) && (replacement != null))) {
    return source;
  }
  result = '';
  while (source.length > 0) {
    if ((match = source.match(pattern))) {
      result += source.slice(0, match.index);
      result += replacement;
      source = source.slice(match.index + match[0].length);
    } else {
      result += source;
      source = '';
    }
  }
  return result;
};

function setLocalisedTexts(locale_set,test_mode_set,select_projects_below_set, no_need_to_empty_text_set, used_text_set, left_text_set) {
    locale = locale_set;
    test_mode = test_mode_set;
    select_projects_below = select_projects_below_set;
    no_need_to_empty_text = no_need_to_empty_text_set;
    used_text = used_text_set;
    left_text = left_text_set;
}

function setTotals(total_to_set) {
    total = total_to_set;
    $("#curtotal").html(parseLocalNum((0.0).toFixed(1))+" "+used_text+", "+(parseLocalNum((total).toFixed(1)))+" "+left_text);
    total = parseFloat(total).toFixed(1);
}

function parseLocalNum(num) {
    return num.replace(".", ",");
}

function select(item,selected,curtotalold,total,curTotalDiv,optionsDiv,votesDiv) {
    var id = item.id.split("_")[1];
    if ($(item).hasClass("disabled")) {
        return;
    }
    optprice = parseFloat($(item).attr("price"));
    optwidth = parseInt(voteswidth * (optprice / total))-2;
    optname = $(item).attr("name");
    optletter = $(item).attr("letter");
    if (selected.has(id)) {
        for (var i = 0; i < selected.length; i++) {
            if (selected[i] == id) {
                delete selected[i];
                $(item).removeClass("selected");
                $("#opt_"+id).remove();
            }
        }
       curtotal -= optprice;

    } else {
        selected.push(id);
        $(item).addClass("selected");
        $(votesDiv).append("<div title=\""+optname+"\" id=\"opt_" + id + "\" style=\"text-align: center;width: " + optwidth + "px;\" class=\""+"vote_class\">" + optletter + "");
        curtotal += optprice;
    }

    var alloptsL = $(optionsDiv+"_left").children();
    var alloptsR = $(optionsDiv+"_right").children();

//    alert(alloptsL.length);
//    alert(alloptsR.length);

//    alert(total);
//    alert(curtotal);

    var allopts = jQuery.merge(alloptsL,alloptsR);

    for (var i = 0; i < allopts.length; i++) {
        opt = allopts[i];
        if ($(opt).hasClass("selected")) {
            continue;
        }
        oprice = parseFloat($(opt).attr("price"));
        //alert('oprice: '+oprice+" total: "+total+" curtotal: "+curtotal);
        if (oprice > total-curtotal) {
            $(opt).addClass("disabled");
        } else {
            $(opt).removeClass("disabled");
        }
    }

    if (curtotal>0) {
      $('#total_text').text(no_need_to_empty_text);
    } else {
      $('#total_text').text(select_projects_below);
    }
    $(curTotalDiv).html(parseLocalNum(curtotal.toFixed(1))+" "+used_text+", "+(parseLocalNum((total-curtotal).toFixed(1)))+" "+left_text);
    if (curtotal>0) {
        $(".button").attr("disabled", false);
        $("#submit_btn").attr({src: "/assets/vote_"+locale+test_mode+".png"});
    } else {
        $(".button").attr("disabled", true);
        $("#submit_btn").attr({src: "/assets/vote_"+locale+"_grey"+test_mode+".png"});
    }
}
