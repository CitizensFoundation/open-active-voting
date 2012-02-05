var construction_selected = [];
var maintenance_selected = [];

var construction_curtotal = 0;
var maintenance_curtotal = 0;

var construction_total = 0;
var maintenance_total = 0;

var voteswidth = 450;

// Add a method to array to indicate if that array "has" a member
Array.prototype.has=function(v){
    for (i=0;i<this.length;i++){
        if (this[i]==v) return true;
    }
    return false;
}

var moo;

function setTotals(construction_total_to_set, maintenance_total_to_set) {
    construction_total = construction_total_to_set;
    maintenance_total = maintenance_total_to_set;
}

function select(item,selected,the_type,curtotal,total,curTotalDiv,optionsDiv,votesDiv) {
    var id = item.id.split("_")[1];
    if ($(item).hasClass("disabled")) {
        return;
    }
    //alert(id);
    optprice = parseInt($(item).attr("price"));
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
        $(votesDiv).append("<div title=\""+optname+"\" id=\"opt_" + id + "\" style=\"text-align: center;width: " + optwidth + "px;\" class=\""+the_type+"_vote_class\"><br>" + optletter + "<br><br>" + optprice + "<div>");
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
        oprice = parseInt($(opt).attr("price"));
        //alert('oprice: '+oprice+" total: "+total+" curtotal: "+curtotal);
        if (oprice > total-curtotal) {
            $(opt).addClass("disabled");
        } else {
            $(opt).removeClass("disabled");
        }
    }
    if (the_type=="construction") {
        $(curTotalDiv).html(construction_total.toFixed(1)+" alls "+construction_curtotal.toFixed(1)+" notad "+(construction_total-construction_curtotal).toFixed(1)+" eftir ");
    } else {
        $(curTotalDiv).html(maintenance_total.toFixed(1)+" alls "+maintenance_curtotal.toFixed(1)+" notad "+(maintenance_total-maintenance_curtotal).toFixed(1)+" eftir ");
    }
}
