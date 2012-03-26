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

var construction_selected = [];
var maintenance_selected = [];

var construction_curtotal = 0;
var maintenance_curtotal = 0;

var construction_total = 0;
var maintenance_total = 0;

var voteswidth = 450;

var locale;

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

function setLocalisedTexts(locale_set,select_projects_below_set, no_need_to_empty_text_set, used_text_set, left_text_set) {
    locale = locale_set;
    select_projects_below = select_projects_below_set;
    no_need_to_empty_text = no_need_to_empty_text_set;
    used_text = used_text_set;
    left_text = left_text_set;
}

function setTotals(construction_total_to_set, maintenance_total_to_set) {
    construction_total = construction_total_to_set;
    maintenance_total = maintenance_total_to_set;
    $("#construction_curtotal").html(parseLocalNum((0.0).toFixed(1))+" "+used_text+", "+(parseLocalNum((construction_total).toFixed(1)))+" "+left_text);
    $("#maintenance_curtotal").html(parseLocalNum((0.0).toFixed(1))+" "+used_text+", "+(parseLocalNum((maintenance_total).toFixed(1)))+" "+left_text);
    construction_total = parseFloat(construction_total).toFixed(1);
    maintenance_total = parseFloat(maintenance_total).toFixed(1);
}

function parseLocalNum(num) {
    return num.replace(".", ",");
}

function select(item,selected,the_type,curtotal,total,curTotalDiv,optionsDiv,votesDiv) {
    var id = item.id.split("_")[1];
    if ($(item).hasClass("disabled")) {
        return;
    }
    //alert(id);
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
        if (the_type=="construction") {
          construction_curtotal -= optprice;
          curtotal=construction_curtotal;
        } else {
          maintenance_curtotal -= optprice;
          curtotal=maintenance_curtotal;
        }
    } else {
        selected.push(id);
        $(item).addClass("selected");
        $(votesDiv).append("<div title=\""+optname+"\" id=\"opt_" + id + "\" style=\"text-align: center;width: " + optwidth + "px;\" class=\""+the_type+"_vote_class\">" + optletter + "");
        if (the_type=="construction") {
          construction_curtotal += optprice;
          curtotal=construction_curtotal;
        } else {
          maintenance_curtotal += optprice;
          curtotal=maintenance_curtotal;
        }
    }
    var allopts = $(optionsDiv).children();
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
    if (the_type=="construction") {
        if (construction_curtotal>0) {
          $('#construction_total_text').text(no_need_to_empty_text);
        } else {
          $('#construction_total_text').text(select_projects_below);
        }
        $(curTotalDiv).html(parseLocalNum(construction_curtotal.toFixed(1))+" "+used_text+", "+(parseLocalNum((construction_total-construction_curtotal).toFixed(1)))+" "+left_text);
    } else {
        if (maintenance_curtotal>0) {
          $('#maintenance_total_text').text(no_need_to_empty_text);
        } else {
          $('#maintenance_total_text').text(select_projects_below);
        }
        $(curTotalDiv).html(parseLocalNum(maintenance_curtotal.toFixed(1))+" "+used_text+", "+(parseLocalNum((maintenance_total-maintenance_curtotal).toFixed(1)))+" "+left_text);
    }
    if (construction_curtotal>0 || maintenance_curtotal>0) {
        $(".button").attr("disabled", false);
        $("#submit_btn").attr({src: "/assets/vote_"+locale+".png"});
    } else {
        $(".button").attr("disabled", true);
        $("#submit_btn").attr({src: "/assets/vote_"+locale+"_grey.png"});
    }
}
