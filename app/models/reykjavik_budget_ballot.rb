# coding: utf-8

# Copyright (C) 2010,2011,2012 Íbúar ses
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

class ReykjavikBudgetBallot
#  attr_reader :construction_priorities
#  attr_reader :maintenance_priorities
  attr_reader :neighborhoods

  def construction_priorities(neighborhood_id)
    @neighborhoods[neighborhood_id][:construction_priorities]
  end

  def maintenance_priorities(neighborhood_id)
    @neighborhoods[neighborhood_id][:maintenance_priorities]
  end

  def initialize(neighborhood_id=1)
    # Setup the neighborhoods for the ballot
    @neighborhoods=Hash.new
    @neighborhoods[1] = { :id=>1 ,:name=>"Árbær",                       :budget_amount=>"13.534.046", :construction_priorities=>[], :maintenance_priorities=>[] }
    @neighborhoods[2] = { :id=>2 ,:name=>"Breiðholt",                   :budget_amount=>"23.209.940", :construction_priorities=>[], :maintenance_priorities=>[]  }
    @neighborhoods[3] = { :id=>3 ,:name=>"Grafarholt",                  :budget_amount=>"9.083.648", :construction_priorities=>[], :maintenance_priorities=>[]  }
    @neighborhoods[4] = { :id=>4 ,:name=>"Grafarvogur",                 :budget_amount=>"20.768.909", :construction_priorities=>[], :maintenance_priorities=>[] }
    @neighborhoods[5] = { :id=>5 ,:name=>"Háaleiti og Bústaðir",        :budget_amount=>"16.983.556", :construction_priorities=>[], :maintenance_priorities=>[]  }
    @neighborhoods[6] = { :id=>6 ,:name=>"Hlíðar",                      :budget_amount=>"12.905.052", :construction_priorities=>[], :maintenance_priorities=>[]  }
    @neighborhoods[7] = { :id=>7 ,:name=>"Kjalarnes",                   :budget_amount=>"4.543.122", :construction_priorities=>[], :maintenance_priorities=>[]  }
    @neighborhoods[8] = { :id=>8 ,:name=>"Laugardalur",                 :budget_amount=>"18.308.904", :construction_priorities=>[], :maintenance_priorities=>[]  }
    @neighborhoods[9] = { :id=>9 ,:name=>"Miðborg",                     :budget_amount=>"12.019.905", :construction_priorities=>[], :maintenance_priorities=>[] }
    @neighborhoods[10] ={ :id=>10,:name=>"Vesturbær",                   :budget_amount=>"18.640.952", :construction_priorities=>[], :maintenance_priorities=>[]  }

    @neighborhoods[1][:construction_priorities] << {:id=>1, :letter=>"a", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/921-hundagerdi-i-arbaenordlingaholt", :description=>I18n.t(:new_project_description_id_1), :name=>I18n.t(:new_project_name_id_1), :price=>3.0}
    @neighborhoods[1][:construction_priorities] << {:id=>2, :letter=>"b", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/735-mengunarvorn-vid-hofdaakka", :description=>I18n.t(:new_project_description_id_2), :name=>I18n.t(:new_project_name_id_2), :price=>2.5}
    @neighborhoods[1][:construction_priorities] << {:id=>3, :letter=>"c", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/828-grodursetja-runna-medfram-selasbraut-a-mots-vid-suduras", :description=>I18n.t(:new_project_description_id_3), :name=>I18n.t(:new_project_name_id_3), :price=>1.0}
    @neighborhoods[1][:construction_priorities] << {:id=>4, :letter=>"d", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/962-merkja-hvar-leikskolar-eru-i-hverfinu", :description=>I18n.t(:new_project_description_id_4), :name=>I18n.t(:new_project_name_id_4), :price=>2.0}
    @neighborhoods[1][:construction_priorities] << {:id=>5, :letter=>"e", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/759-oryggishindrun-vegna-barna-kringum-budatorg-nordlingaholti", :description=>I18n.t(:new_project_description_id_5), :name=>I18n.t(:new_project_name_id_5), :price=>0.3}
    @neighborhoods[1][:construction_priorities] << {:id=>6, :letter=>"f", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/760-hljodvarnir-gagnvart-umferdaraedum", :description=>I18n.t(:new_project_description_id_6), :name=>I18n.t(:new_project_name_id_6), :price=>1.0}
    @neighborhoods[1][:construction_priorities] << {:id=>7, :letter=>"g", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/842-notalegur-aningarstadur-vid-sundlaug-arbaejar", :description=>I18n.t(:new_project_description_id_7), :name=>I18n.t(:new_project_name_id_7), :price=>1.5}
    @neighborhoods[1][:construction_priorities] << {:id=>8, :letter=>"h", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/784-merkingar-i-ellidaardalnum", :description=>I18n.t(:new_project_description_id_8), :name=>I18n.t(:new_project_name_id_8), :price=>4.0}
    @neighborhoods[1][:construction_priorities] << {:id=>9, :letter=>"i", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/840-fjolskyldusvaedi-i-ellidaardalnum", :description=>I18n.t(:new_project_description_id_9), :name=>I18n.t(:new_project_name_id_9), :price=>0.3}
    @neighborhoods[1][:construction_priorities] << {:id=>10, :letter=>"j", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/1009-fleiri-vatnsbrunna-i-ellidardalnum", :description=>I18n.t(:new_project_description_id_10), :name=>I18n.t(:new_project_name_id_10), :price=>2.0}
    @neighborhoods[1][:construction_priorities] << {:id=>11, :letter=>"k", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_11), :name=>I18n.t(:new_project_name_id_11), :price=>4.0}

    @neighborhoods[1][:maintenance_priorities] << {:id=>12, :letter=>"a", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/743-fjolga-ruslatunnum-i-nordlingaholti", :description=>I18n.t(:new_project_description_id_12), :name=>I18n.t(:new_project_name_id_12), :price=>2.5}
    @neighborhoods[1][:maintenance_priorities] << {:id=>13, :letter=>"b", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/797-lagfaera-skidabrekku-i-artunsholti", :description=>I18n.t(:new_project_description_id_13), :name=>I18n.t(:new_project_name_id_13), :price=>0.5}
    @neighborhoods[1][:maintenance_priorities] << {:id=>14, :letter=>"c", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/736-lagfaera-korfuboltavollinn-a-milli-leikskblasala-og-vikurass", :description=>I18n.t(:new_project_description_id_14), :name=>I18n.t(:new_project_name_id_14), :price=>3.0}
    @neighborhoods[1][:maintenance_priorities] << {:id=>15, :letter=>"d", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/783-baeta-adstodu-til-utivistar-i-ellidaardalnum-", :description=>I18n.t(:new_project_description_id_15), :name=>I18n.t(:new_project_name_id_15), :price=>0.5}
    @neighborhoods[1][:maintenance_priorities] << {:id=>16, :letter=>"e", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/825-lagfaera-sparkvelli-i-hverfinu", :description=>I18n.t(:new_project_description_id_16), :name=>I18n.t(:new_project_name_id_16), :price=>2.5}
    @neighborhoods[1][:maintenance_priorities] << {:id=>17, :letter=>"f", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/858-lagfaeringar-a-lod-arbaejarskola", :description=>I18n.t(:new_project_description_id_17), :name=>I18n.t(:new_project_name_id_17), :price=>0.8}
    @neighborhoods[1][:maintenance_priorities] << {:id=>18, :letter=>"g", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/763-fjolgun-ruslatunna-i-arbae", :description=>I18n.t(:new_project_description_id_18), :name=>I18n.t(:new_project_name_id_18), :price=>1.0}
    @neighborhoods[1][:maintenance_priorities] << {:id=>19, :letter=>"h", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/781-virkjun-arbaejartorgs", :description=>I18n.t(:new_project_description_id_19), :name=>I18n.t(:new_project_name_id_19), :price=>0.5}
    @neighborhoods[1][:maintenance_priorities] << {:id=>20, :letter=>"i", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/1117-betri-lysingu-a-gongustiga-vid-ellidaarvoginn", :description=>I18n.t(:new_project_description_id_20), :name=>I18n.t(:new_project_name_id_20), :price=>1.0}
    @neighborhoods[1][:maintenance_priorities] << {:id=>21, :letter=>"j", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/1114-baeta-adgengi-gangandi-medal-annarrs-med-fjolgun-bekkja", :description=>I18n.t(:new_project_description_id_21), :name=>I18n.t(:new_project_name_id_21), :price=>2.0}
    @neighborhoods[1][:maintenance_priorities] << {:id=>22, :letter=>"k", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_22), :name=>I18n.t(:new_project_name_id_22), :price=>3.0}
    @neighborhoods[1][:maintenance_priorities] << {:id=>23, :letter=>"l", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_23), :name=>I18n.t(:new_project_name_id_23), :price=>0.3}

    @neighborhoods[2][:construction_priorities] << {:id=>24, :letter=>"a", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/935-fuglaskilti-i-ellidaardal", :description=>I18n.t(:new_project_description_id_24), :name=>I18n.t(:new_project_name_id_24), :price=>2.5}
    @neighborhoods[2][:construction_priorities] << {:id=>25, :letter=>"b", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/1027-nattturulegan-leikvoll-vid-andapollinn-i-seljahverfi", :description=>I18n.t(:new_project_description_id_25), :name=>I18n.t(:new_project_name_id_25), :price=>1.0}
    @neighborhoods[2][:construction_priorities] << {:id=>26, :letter=>"c", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/860-torg-og-bilastaedi-a-audri-lod-milli-heidarsels-og-seljakirkj", :description=>I18n.t(:new_project_description_id_26), :name=>I18n.t(:new_project_name_id_26), :price=>1.0}
    @neighborhoods[2][:construction_priorities] << {:id=>27, :letter=>"d", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/880--gonguleid-medfram-arnarbakka-fra-ferjubakka-ad-blondubakka", :description=>I18n.t(:new_project_description_id_27), :name=>I18n.t(:new_project_name_id_27), :price=>1.0}
    @neighborhoods[2][:construction_priorities] << {:id=>28, :letter=>"e", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/884-lata-bidskyldur-og-gonguleidir-medfram-arnabakka-stangast-a", :description=>I18n.t(:new_project_description_id_28), :name=>I18n.t(:new_project_name_id_28), :price=>11.0}
    @neighborhoods[2][:construction_priorities] << {:id=>29, :letter=>"f", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/903-aefingataeki-i-bakkahverfi", :description=>I18n.t(:new_project_description_id_29), :name=>I18n.t(:new_project_name_id_29), :price=>0.25}
    @neighborhoods[2][:construction_priorities] << {:id=>30, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_30), :name=>I18n.t(:new_project_name_id_30), :price=>2.0}
    @neighborhoods[2][:construction_priorities] << {:id=>31, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_31), :name=>I18n.t(:new_project_name_id_31), :price=>10.0}
    @neighborhoods[2][:construction_priorities] << {:id=>32, :letter=>"i", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_32), :name=>I18n.t(:new_project_name_id_32), :price=>2.0}
    @neighborhoods[2][:construction_priorities] << {:id=>33, :letter=>"j", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_33), :name=>I18n.t(:new_project_name_id_33), :price=>5.0}

    @neighborhoods[2][:maintenance_priorities] << {:id=>34, :letter=>"a", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/998-ruslatunnurutivistarsvaedi", :description=>I18n.t(:new_project_description_id_34), :name=>I18n.t(:new_project_name_id_34), :price=>0.25}
    @neighborhoods[2][:maintenance_priorities] << {:id=>35, :letter=>"b", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/882-merkja-um-1-km-hlaupahring-um-bakkana", :description=>I18n.t(:new_project_description_id_35), :name=>I18n.t(:new_project_name_id_35), :price=>1.0}
    @neighborhoods[2][:maintenance_priorities] << {:id=>36, :letter=>"c", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/987-raesi-til-ad-losna-vid-klaka-a-stig-ofan-ellidaarstiflu", :description=>I18n.t(:new_project_description_id_36), :name=>I18n.t(:new_project_name_id_36), :price=>10.0}
    @neighborhoods[2][:maintenance_priorities] << {:id=>37, :letter=>"d", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/885-merkja-undirgong-undir-breidholtsbraut-betur-vid-leirubakka-", :description=>I18n.t(:new_project_description_id_37), :name=>I18n.t(:new_project_name_id_37), :price=>1.0}
    @neighborhoods[2][:maintenance_priorities] << {:id=>38, :letter=>"e", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/1016-leiktaeki-a-skolalod-olduselsskola", :description=>I18n.t(:new_project_description_id_38), :name=>I18n.t(:new_project_name_id_38), :price=>0.1}
    @neighborhoods[2][:maintenance_priorities] << {:id=>39, :letter=>"f", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/1098-leiksvaedi-fyrir-alla-aldurshopa-i-engjaseli", :description=>I18n.t(:new_project_description_id_39), :name=>I18n.t(:new_project_name_id_39), :price=>5.0}
    @neighborhoods[2][:maintenance_priorities] << {:id=>40, :letter=>"g", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/priorities/824-lagfaera-leikvelli-i-seljahverfi-fjolga-ruslastompum", :description=>I18n.t(:new_project_description_id_40), :name=>I18n.t(:new_project_name_id_40), :price=>5.0}
    @neighborhoods[2][:maintenance_priorities] << {:id=>41, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_41), :name=>I18n.t(:new_project_name_id_41), :price=>5.0}

    @neighborhoods[3][:construction_priorities] << {:id=>42, :letter=>"a", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/priorities/1046-tengja-gongustig-vid-nonas-vid-gongustig-kringum-reynisvatn", :description=>I18n.t(:new_project_description_id_42), :name=>I18n.t(:new_project_name_id_42), :price=>3.0}
    @neighborhoods[3][:construction_priorities] << {:id=>43, :letter=>"b", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/priorities/892-baett-adstada-vid-dalskola", :description=>I18n.t(:new_project_description_id_43), :name=>I18n.t(:new_project_name_id_43), :price=>7.0}
    @neighborhoods[3][:construction_priorities] << {:id=>44, :letter=>"c", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_44), :name=>I18n.t(:new_project_name_id_44), :price=>4.0}
    @neighborhoods[3][:construction_priorities] << {:id=>45, :letter=>"d", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_45), :name=>I18n.t(:new_project_name_id_45), :price=>9.0}
    @neighborhoods[3][:construction_priorities] << {:id=>46, :letter=>"e", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_46), :name=>I18n.t(:new_project_name_id_46), :price=>0.5}

    @neighborhoods[3][:maintenance_priorities] << {:id=>47, :letter=>"a", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/priorities/1044-setja-bekki-a-23-stadi-vid-gongustig-umhverfis-reynisvatnid", :description=>I18n.t(:new_project_description_id_47), :name=>I18n.t(:new_project_name_id_47), :price=>2.0}
    @neighborhoods[3][:maintenance_priorities] << {:id=>48, :letter=>"b", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/priorities/669-ganga-fra-lodarblettum-sem-eru-i-oraekt-i-eigu-borgarinnar-", :description=>I18n.t(:new_project_description_id_48), :name=>I18n.t(:new_project_name_id_48), :price=>1.5}
    @neighborhoods[3][:maintenance_priorities] << {:id=>49, :letter=>"c", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/priorities/665-bekkur-vid-leikvollin-a-milli-kirkjustettar-og-olafsgeisla", :description=>I18n.t(:new_project_description_id_49), :name=>I18n.t(:new_project_name_id_49), :price=>1.0}
    @neighborhoods[3][:maintenance_priorities] << {:id=>50, :letter=>"d", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/priorities/670-grodursetja-skjolgard-kringum-matjurgargarda-", :description=>I18n.t(:new_project_description_id_50), :name=>I18n.t(:new_project_name_id_50), :price=>0.6}
    @neighborhoods[3][:maintenance_priorities] << {:id=>51, :letter=>"e", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/priorities/1049-setja-baedi-ruslafotur-og-borgarbekki-i-austurhlutann-", :description=>I18n.t(:new_project_description_id_51), :name=>I18n.t(:new_project_name_id_51), :price=>2.0}
    @neighborhoods[3][:maintenance_priorities] << {:id=>52, :letter=>"f", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/priorities/1120-ganga-fra-opnum-svaedum-i-ulfarsardal", :description=>I18n.t(:new_project_description_id_52), :name=>I18n.t(:new_project_name_id_52), :price=>2.5}
    @neighborhoods[3][:maintenance_priorities] << {:id=>53, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_53), :name=>I18n.t(:new_project_name_id_53), :price=>3.0}

    @neighborhoods[4][:construction_priorities] << {:id=>54, :letter=>"a", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/893-malbika-gongustiginn-fra-hamrahverfi-ad-gufunesbae", :description=>I18n.t(:new_project_description_id_54), :name=>I18n.t(:new_project_name_id_54), :price=>2.5}
    @neighborhoods[4][:construction_priorities] << {:id=>55, :letter=>"b", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/837-parkour-leikvollur", :description=>I18n.t(:new_project_description_id_55), :name=>I18n.t(:new_project_name_id_55), :price=>8.0}
    @neighborhoods[4][:construction_priorities] << {:id=>56, :letter=>"c", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/939-leiksvaedi-fyrir-alla-born-og-fullordna", :description=>I18n.t(:new_project_description_id_56), :name=>I18n.t(:new_project_name_id_56), :price=>10.0}
    @neighborhoods[4][:construction_priorities] << {:id=>57, :letter=>"d", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/873-vaeri-gott-ad-fa-einhverja-vatnshana-a-gongustiga-i-grafarvog", :description=>I18n.t(:new_project_description_id_57), :name=>I18n.t(:new_project_name_id_57), :price=>5.0}
    @neighborhoods[4][:construction_priorities] << {:id=>58, :letter=>"e", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/988-byr-ad-bardastodum-25-svaedid-vid-hlidina-a-husinu-er-autt-", :description=>I18n.t(:new_project_description_id_58), :name=>I18n.t(:new_project_name_id_58), :price=>4.0}
    @neighborhoods[4][:construction_priorities] << {:id=>59, :letter=>"f", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/971-malbika-gongustig-fra-grafarvogsbotni-og-upp-ad-vogi", :description=>I18n.t(:new_project_description_id_59), :name=>I18n.t(:new_project_name_id_59), :price=>1.0}
    @neighborhoods[4][:construction_priorities] << {:id=>60, :letter=>"g", :link=>"http://betrireykjavik.is/priorities/789-stigagerd-ithrottabrautirtir-og-tengingar-vid-gufunesbae", :description=>I18n.t(:new_project_description_id_60), :name=>I18n.t(:new_project_name_id_60), :price=>12.0}
    @neighborhoods[4][:construction_priorities] << {:id=>61, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_61), :name=>I18n.t(:new_project_name_id_61), :price=>3.0}
    @neighborhoods[4][:construction_priorities] << {:id=>62, :letter=>"i", :link=>"http://www.betrireykjavik.is/points/2075-gongustigur-fra-grafarvogi-yfir-i-korputorg", :description=>I18n.t(:new_project_description_id_62), :name=>I18n.t(:new_project_name_id_62), :price=>3.5}
    @neighborhoods[4][:construction_priorities] << {:id=>63, :letter=>"j", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_63), :name=>I18n.t(:new_project_name_id_63), :price=>12.0}

    @neighborhoods[4][:maintenance_priorities] << {:id=>64, :letter=>"a", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/600-lysingu-a-gangstig-a-bakvid-korpuskola-", :description=>I18n.t(:new_project_description_id_64), :name=>I18n.t(:new_project_name_id_64), :price=>4.0}
    @neighborhoods[4][:maintenance_priorities] << {:id=>65, :letter=>"b", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/872-thad-vantar-fleiri-ruslafotur-medfram-gongustigum-i-grafarvog", :description=>I18n.t(:new_project_description_id_65), :name=>I18n.t(:new_project_name_id_65), :price=>2.0}
    @neighborhoods[4][:maintenance_priorities] << {:id=>66, :letter=>"c", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/875-grodursetja-fleiri-tre-nidur-hofda-ad-gullinbru-", :description=>I18n.t(:new_project_description_id_66), :name=>I18n.t(:new_project_name_id_66), :price=>0.5}
    @neighborhoods[4][:maintenance_priorities] << {:id=>67, :letter=>"d", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/985-hreinsa-til-a-leiksvaedum-i-stadahverfi", :description=>I18n.t(:new_project_description_id_67), :name=>I18n.t(:new_project_name_id_67), :price=>3.0}
    @neighborhoods[4][:maintenance_priorities] << {:id=>68, :letter=>"e", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/983-raesi-til-ad-losna-vid-klakasvaedi-a-stig-nedan-stadahverfis", :description=>I18n.t(:new_project_description_id_68), :name=>I18n.t(:new_project_name_id_68), :price=>3.0}
    @neighborhoods[4][:maintenance_priorities] << {:id=>69, :letter=>"f", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/1110-umbaetur-a-eldri-leiksvaedum-ss-i-foldahverfi", :description=>I18n.t(:new_project_description_id_69), :name=>I18n.t(:new_project_name_id_69), :price=>1.0}
    @neighborhoods[4][:maintenance_priorities] << {:id=>70, :letter=>"g", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/997-endurbaeta-leiksvaedi-vid-husaskola", :description=>I18n.t(:new_project_description_id_70), :name=>I18n.t(:new_project_name_id_70), :price=>10.0}
    @neighborhoods[4][:maintenance_priorities] << {:id=>71, :letter=>"h", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/973-thad-vantar-lysingu-vid-gognustig-a-bakvid-rimaskola", :description=>I18n.t(:new_project_description_id_71), :name=>I18n.t(:new_project_name_id_71), :price=>5.0}
    @neighborhoods[4][:maintenance_priorities] << {:id=>72, :letter=>"i", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/1062-setja-grodurtre-medfram-langarima", :description=>I18n.t(:new_project_description_id_72), :name=>I18n.t(:new_project_name_id_72), :price=>3.0}
    @neighborhoods[4][:maintenance_priorities] << {:id=>73, :letter=>"j", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_73), :name=>I18n.t(:new_project_name_id_73), :price=>2.5}
    @neighborhoods[4][:maintenance_priorities] << {:id=>74, :letter=>"k", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_74), :name=>I18n.t(:new_project_name_id_74), :price=>1.0}
    @neighborhoods[4][:maintenance_priorities] << {:id=>75, :letter=>"l", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_75), :name=>I18n.t(:new_project_name_id_75), :price=>0.5}

    @neighborhoods[5][:construction_priorities] << {:id=>76, :letter=>"a", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/priorities/989-laga-austanverdan-fossvogsdal", :description=>I18n.t(:new_project_description_id_76), :name=>I18n.t(:new_project_name_id_76), :price=>2.0}
    @neighborhoods[5][:construction_priorities] << {:id=>77, :letter=>"b", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/priorities/630-utikennslustofu-i-grundargerdisgard", :description=>I18n.t(:new_project_description_id_77), :name=>I18n.t(:new_project_name_id_77), :price=>2.0}
    @neighborhoods[5][:construction_priorities] << {:id=>78, :letter=>"c", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/priorities/833-malbikun-gongustigs", :description=>I18n.t(:new_project_description_id_78), :name=>I18n.t(:new_project_name_id_78), :price=>1.5}
    @neighborhoods[5][:construction_priorities] << {:id=>79, :letter=>"d", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_79), :name=>I18n.t(:new_project_name_id_79), :price=>1.5}
    @neighborhoods[5][:construction_priorities] << {:id=>80, :letter=>"e", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_80), :name=>I18n.t(:new_project_name_id_80), :price=>1.0}
    @neighborhoods[5][:construction_priorities] << {:id=>81, :letter=>"f", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_81), :name=>I18n.t(:new_project_name_id_81), :price=>5.0}
    @neighborhoods[5][:construction_priorities] << {:id=>82, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_82), :name=>I18n.t(:new_project_name_id_82), :price=>3.5}
    @neighborhoods[5][:construction_priorities] << {:id=>83, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_83), :name=>I18n.t(:new_project_name_id_83), :price=>5.0}

    @neighborhoods[5][:maintenance_priorities] << {:id=>84, :letter=>"a", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/priorities/614-ljuka-vid-grodursetningu-a-nedri-hluta-haaleitisbrautar-", :description=>I18n.t(:new_project_description_id_84), :name=>I18n.t(:new_project_name_id_84), :price=>1.5}
    @neighborhoods[5][:maintenance_priorities] << {:id=>85, :letter=>"b", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/priorities/945-endurnleiktaeki-og-lod-hja-haaleitisskola-alftamyri", :description=>I18n.t(:new_project_description_id_85), :name=>I18n.t(:new_project_name_id_85), :price=>5.0}
    @neighborhoods[5][:maintenance_priorities] << {:id=>86, :letter=>"c", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/priorities/960-endurnyjun-korfuboltavallar-vid-haaleitisskola-alftamyri", :description=>I18n.t(:new_project_description_id_86), :name=>I18n.t(:new_project_name_id_86), :price=>1.5}
    @neighborhoods[5][:maintenance_priorities] << {:id=>87, :letter=>"d", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/priorities/936-laga-gongustiga-og-leiksvaedi-fyrir-ofan-kvistaborg", :description=>I18n.t(:new_project_description_id_87), :name=>I18n.t(:new_project_name_id_87), :price=>1.2}
    @neighborhoods[5][:maintenance_priorities] << {:id=>88, :letter=>"e", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/priorities/1002-laga-korfuboltavoll-vid-fossvogsveg", :description=>I18n.t(:new_project_description_id_88), :name=>I18n.t(:new_project_name_id_88), :price=>3.0}
    @neighborhoods[5][:maintenance_priorities] << {:id=>89, :letter=>"f", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_89), :name=>I18n.t(:new_project_name_id_89), :price=>3.0}
    @neighborhoods[5][:maintenance_priorities] << {:id=>90, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_90), :name=>I18n.t(:new_project_name_id_90), :price=>6.0}
    @neighborhoods[5][:maintenance_priorities] << {:id=>91, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_91), :name=>I18n.t(:new_project_name_id_91), :price=>0.5}
    @neighborhoods[5][:maintenance_priorities] << {:id=>92, :letter=>"i", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_92), :name=>I18n.t(:new_project_name_id_92), :price=>0.5}
    @neighborhoods[5][:maintenance_priorities] << {:id=>93, :letter=>"j", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_93), :name=>I18n.t(:new_project_name_id_93), :price=>1.5}

    @neighborhoods[6][:construction_priorities] << {:id=>94, :letter=>"a", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/priorities/925-hundagerdi-a-klambratuni", :description=>I18n.t(:new_project_description_id_94), :name=>I18n.t(:new_project_name_id_94), :price=>6.0}
    @neighborhoods[6][:construction_priorities] << {:id=>95, :letter=>"b", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_95), :name=>I18n.t(:new_project_name_id_95), :price=>2.5}
    @neighborhoods[6][:construction_priorities] << {:id=>96, :letter=>"c", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_96), :name=>I18n.t(:new_project_name_id_96), :price=>4.0}
    @neighborhoods[6][:construction_priorities] << {:id=>97, :letter=>"d", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_97), :name=>I18n.t(:new_project_name_id_97), :price=>2.0}
    @neighborhoods[6][:construction_priorities] << {:id=>98, :letter=>"e", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_98), :name=>I18n.t(:new_project_name_id_98), :price=>7.0}

    @neighborhoods[6][:maintenance_priorities] << {:id=>99, :letter=>"a", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/priorities/922-grodursetja-tre-og-runna-a-leiksvaedi-leikskolans-klambra", :description=>I18n.t(:new_project_description_id_99), :name=>I18n.t(:new_project_name_id_99), :price=>10.0}
    @neighborhoods[6][:maintenance_priorities] << {:id=>100, :letter=>"b", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/priorities/1023-leikskolinn-hlid-gardur-vid-solhlid", :description=>I18n.t(:new_project_description_id_100), :name=>I18n.t(:new_project_name_id_100), :price=>1.0}
    @neighborhoods[6][:maintenance_priorities] << {:id=>101, :letter=>"c", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_101), :name=>I18n.t(:new_project_name_id_101), :price=>2.5}
    @neighborhoods[6][:maintenance_priorities] << {:id=>102, :letter=>"d", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_102), :name=>I18n.t(:new_project_name_id_102), :price=>1.5}
    @neighborhoods[6][:maintenance_priorities] << {:id=>103, :letter=>"e", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_103), :name=>I18n.t(:new_project_name_id_103), :price=>1.0}

    @neighborhoods[7][:construction_priorities] << {:id=>104, :letter=>"a", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_104), :name=>I18n.t(:new_project_name_id_104), :price=>1.5}
    @neighborhoods[7][:construction_priorities] << {:id=>105, :letter=>"b", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_105), :name=>I18n.t(:new_project_name_id_105), :price=>1.0}
    @neighborhoods[7][:construction_priorities] << {:id=>106, :letter=>"c", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_106), :name=>I18n.t(:new_project_name_id_106), :price=>0.5}
    @neighborhoods[7][:construction_priorities] << {:id=>107, :letter=>"d", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_107), :name=>I18n.t(:new_project_name_id_107), :price=>0.5}
    @neighborhoods[7][:construction_priorities] << {:id=>108, :letter=>"e", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_108), :name=>I18n.t(:new_project_name_id_108), :price=>4.0}
    @neighborhoods[7][:construction_priorities] << {:id=>109, :letter=>"f", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_109), :name=>I18n.t(:new_project_name_id_109), :price=>1.0}
    @neighborhoods[7][:construction_priorities] << {:id=>110, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_110), :name=>I18n.t(:new_project_name_id_110), :price=>2.5}
    @neighborhoods[7][:construction_priorities] << {:id=>111, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_111), :name=>I18n.t(:new_project_name_id_111), :price=>0.3}

    @neighborhoods[7][:maintenance_priorities] << {:id=>112, :letter=>"a", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/priorities/849-endurbaetur-a-sundlauginni-", :description=>I18n.t(:new_project_description_id_112), :name=>I18n.t(:new_project_name_id_112), :price=>1.0}
    @neighborhoods[7][:maintenance_priorities] << {:id=>113, :letter=>"b", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/priorities/870-betri-lysing-a-gonguleidum-i-hverfinu", :description=>I18n.t(:new_project_description_id_113), :name=>I18n.t(:new_project_name_id_113), :price=>2.0}
    @neighborhoods[7][:maintenance_priorities] << {:id=>114, :letter=>"c", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/priorities/1132-lagfaera-gongustig-medfram-sjo-vid-grundarhverfi", :description=>I18n.t(:new_project_description_id_114), :name=>I18n.t(:new_project_name_id_114), :price=>0.4}
    @neighborhoods[7][:maintenance_priorities] << {:id=>115, :letter=>"d", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_115), :name=>I18n.t(:new_project_name_id_115), :price=>1.0}
    @neighborhoods[7][:maintenance_priorities] << {:id=>116, :letter=>"e", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_116), :name=>I18n.t(:new_project_name_id_116), :price=>1.5}
    @neighborhoods[7][:maintenance_priorities] << {:id=>117, :letter=>"f", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_117), :name=>I18n.t(:new_project_name_id_117), :price=>0.3}
    @neighborhoods[7][:maintenance_priorities] << {:id=>118, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_118), :name=>I18n.t(:new_project_name_id_118), :price=>2.0}
    @neighborhoods[7][:maintenance_priorities] << {:id=>119, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_119), :name=>I18n.t(:new_project_name_id_119), :price=>0.5}

    @neighborhoods[8][:construction_priorities] << {:id=>120, :letter=>"a", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/843-hundagerdi-i-laugardalnum", :description=>I18n.t(:new_project_description_id_120), :name=>I18n.t(:new_project_name_id_120), :price=>1.0}
    @neighborhoods[8][:construction_priorities] << {:id=>121, :letter=>"b", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1125-utiadstada-fyrir-alla-fjolskylduna-i-laugardalinn", :description=>I18n.t(:new_project_description_id_121), :name=>I18n.t(:new_project_name_id_121), :price=>2.5}
    @neighborhoods[8][:construction_priorities] << {:id=>122, :letter=>"c", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/914-gonguljos-vid-gatnamotin-a-hofteig-og-reykjaveg", :description=>I18n.t(:new_project_description_id_122), :name=>I18n.t(:new_project_name_id_122), :price=>2.5}
    @neighborhoods[8][:construction_priorities] << {:id=>123, :letter=>"d", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1119-baeta-tengingu-langholtsvegar-vid-hjolreidastigin-vid-saebraut", :description=>I18n.t(:new_project_description_id_123), :name=>I18n.t(:new_project_name_id_123), :price=>11.0}
    @neighborhoods[8][:construction_priorities] << {:id=>124, :letter=>"e", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1010-gonguljos-og-lysing-vid-gatnamot-kirkjuteigs-og-reykjavegar", :description=>I18n.t(:new_project_description_id_124), :name=>I18n.t(:new_project_name_id_124), :price=>1.5}
    @neighborhoods[8][:construction_priorities] << {:id=>125, :letter=>"f", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/812-setja-upp-korfur-a-malbikudum-velli-sem-er-a-bakvid-drekavog", :description=>I18n.t(:new_project_description_id_125), :name=>I18n.t(:new_project_name_id_125), :price=>11.0}
    @neighborhoods[8][:construction_priorities] << {:id=>126, :letter=>"g", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1102-honnunarsmidja-vegna-torgs-a-motum-skeidarvogs-og-gnodarvogs", :description=>I18n.t(:new_project_description_id_126), :name=>I18n.t(:new_project_name_id_126), :price=>0.5}
    @neighborhoods[8][:construction_priorities] << {:id=>127, :letter=>"h", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1034-baett-lysing-a-horni-skeidarvogs-og-solheima", :description=>I18n.t(:new_project_description_id_127), :name=>I18n.t(:new_project_name_id_127), :price=>1.0}
    @neighborhoods[8][:construction_priorities] << {:id=>128, :letter=>"i", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_128), :name=>I18n.t(:new_project_name_id_128), :price=>0.3}
    @neighborhoods[8][:construction_priorities] << {:id=>129, :letter=>"j", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_129), :name=>I18n.t(:new_project_name_id_129), :price=>1.0}
    @neighborhoods[8][:construction_priorities] << {:id=>130, :letter=>"k", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_130), :name=>I18n.t(:new_project_name_id_130), :price=>3.5}
    @neighborhoods[8][:construction_priorities] << {:id=>131, :letter=>"l", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_131), :name=>I18n.t(:new_project_name_id_131), :price=>2.5}
    @neighborhoods[8][:construction_priorities] << {:id=>132, :letter=>"m", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_132), :name=>I18n.t(:new_project_name_id_132), :price=>5.0}

    @neighborhoods[8][:maintenance_priorities] << {:id=>133, :letter=>"a", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1047-fleiri-og-staerri-ruslafotur-allt-fra-laugardalslaug-glaesibae", :description=>I18n.t(:new_project_description_id_133), :name=>I18n.t(:new_project_name_id_133), :price=>1.0}
    @neighborhoods[8][:maintenance_priorities] << {:id=>134, :letter=>"b", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/591-fleiri-bekkir-i-hverfid-her-er-margt-um-eldra-folk-", :description=>I18n.t(:new_project_description_id_134), :name=>I18n.t(:new_project_name_id_134), :price=>0.5}
    @neighborhoods[8][:maintenance_priorities] << {:id=>135, :letter=>"c", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1085-endurbaetur-a-leikvelli-milli-austurbrunar-og-kambsvegs", :description=>I18n.t(:new_project_description_id_135), :name=>I18n.t(:new_project_name_id_135), :price=>5.0}
    @neighborhoods[8][:maintenance_priorities] << {:id=>136, :letter=>"d", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1069-leiksvaedi-a-tuninu-fyrir-framan-laugarneskirkju", :description=>I18n.t(:new_project_description_id_136), :name=>I18n.t(:new_project_name_id_136), :price=>5.0}
    @neighborhoods[8][:maintenance_priorities] << {:id=>137, :letter=>"e", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1100-laga-stofnstig-fra-skeidarvogi-ad-sudurlandsbraut-", :description=>I18n.t(:new_project_description_id_137), :name=>I18n.t(:new_project_name_id_137), :price=>5.0}
    @neighborhoods[8][:maintenance_priorities] << {:id=>138, :letter=>"f", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1101-honnunarsmidja-vegna-torgs-a-snekkjuvogi-og-langholtsv-", :description=>I18n.t(:new_project_description_id_138), :name=>I18n.t(:new_project_name_id_138), :price=>4.0}
    @neighborhoods[8][:maintenance_priorities] << {:id=>139, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_139), :name=>I18n.t(:new_project_name_id_139), :price=>1.0}
    @neighborhoods[8][:maintenance_priorities] << {:id=>140, :letter=>"h", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1148-mala-aftur-hjolavisar-i-hverfinu", :description=>I18n.t(:new_project_description_id_140), :name=>I18n.t(:new_project_name_id_140), :price=>4.5}
    @neighborhoods[8][:maintenance_priorities] << {:id=>141, :letter=>"i", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1148-mala-aftur-hjolavisar-i-hverfinu", :description=>I18n.t(:new_project_description_id_141), :name=>I18n.t(:new_project_name_id_141), :price=>5.0}
    @neighborhoods[8][:maintenance_priorities] << {:id=>142, :letter=>"j", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_142), :name=>I18n.t(:new_project_name_id_142), :price=>2.0}
    @neighborhoods[8][:maintenance_priorities] << {:id=>143, :letter=>"k", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_143), :name=>I18n.t(:new_project_name_id_143), :price=>1.5}
    @neighborhoods[8][:maintenance_priorities] << {:id=>144, :letter=>"l", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_144), :name=>I18n.t(:new_project_name_id_144), :price=>1.5}
    @neighborhoods[8][:maintenance_priorities] << {:id=>145, :letter=>"m", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_145), :name=>I18n.t(:new_project_name_id_145), :price=>3.0}

    @neighborhoods[9][:construction_priorities] << {:id=>146, :letter=>"a", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/priorities/1113-gangstettir-nedst-a-frakkastig-og-klapparstig", :description=>I18n.t(:new_project_description_id_146), :name=>I18n.t(:new_project_name_id_146), :price=>2.5}
    @neighborhoods[9][:construction_priorities] << {:id=>147, :letter=>"b", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_147), :name=>I18n.t(:new_project_name_id_147), :price=>2.5}
    @neighborhoods[9][:construction_priorities] << {:id=>148, :letter=>"c", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_148), :name=>I18n.t(:new_project_name_id_148), :price=>2.0}
    @neighborhoods[9][:construction_priorities] << {:id=>149, :letter=>"d", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_149), :name=>I18n.t(:new_project_name_id_149), :price=>7.5}

    @neighborhoods[9][:maintenance_priorities] << {:id=>150, :letter=>"a", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/priorities/1067-fleiri-ruslafotur-i-midbaeinn", :description=>I18n.t(:new_project_description_id_150), :name=>I18n.t(:new_project_name_id_150), :price=>1.0}
    @neighborhoods[9][:maintenance_priorities] << {:id=>151, :letter=>"b", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/priorities/1068-fleiri-hjolagrindur", :description=>I18n.t(:new_project_description_id_151), :name=>I18n.t(:new_project_name_id_151), :price=>1.0}
    @neighborhoods[9][:maintenance_priorities] << {:id=>152, :letter=>"c", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/priorities/928-ad-steinhledslur-vid-tjarnarkantinn-verdi-lagfaerdar", :description=>I18n.t(:new_project_description_id_152), :name=>I18n.t(:new_project_name_id_152), :price=>2.0}
    @neighborhoods[9][:maintenance_priorities] << {:id=>153, :letter=>"d", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/priorities/1071-meiri-grodur-a-laekjartorg-og-i-austurstraeti", :description=>I18n.t(:new_project_description_id_153), :name=>I18n.t(:new_project_name_id_153), :price=>5.0}
    @neighborhoods[9][:maintenance_priorities] << {:id=>154, :letter=>"e", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/priorities/953-ad-fyrirbaerid-torg-eitthvad-vid-3-frakka-verdi-lagfaert", :description=>I18n.t(:new_project_description_id_154), :name=>I18n.t(:new_project_name_id_154), :price=>2.0}
    @neighborhoods[9][:maintenance_priorities] << {:id=>155, :letter=>"f", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_155), :name=>I18n.t(:new_project_name_id_155), :price=>1.0}
    @neighborhoods[9][:maintenance_priorities] << {:id=>156, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_156), :name=>I18n.t(:new_project_name_id_156), :price=>0.5}
    @neighborhoods[9][:maintenance_priorities] << {:id=>157, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_157), :name=>I18n.t(:new_project_name_id_157), :price=>1.0}
    @neighborhoods[9][:maintenance_priorities] << {:id=>158, :letter=>"i", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_158), :name=>I18n.t(:new_project_name_id_158), :price=>0.5}
    @neighborhoods[9][:maintenance_priorities] << {:id=>159, :letter=>"j", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_159), :name=>I18n.t(:new_project_name_id_159), :price=>2.0}

    @neighborhoods[10][:construction_priorities] << {:id=>160, :letter=>"a", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/priorities/733-threp-mhandridi-nidur-i-fjoru-a-23-stodum-veidisgranda", :description=>I18n.t(:new_project_description_id_160), :name=>I18n.t(:new_project_name_id_160), :price=>4.0}
    @neighborhoods[10][:construction_priorities] << {:id=>161, :letter=>"b", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/priorities/717-bua-til-threp-nidur-i-fjoru-i-skerjafirdi-vid-shell-itr-", :description=>I18n.t(:new_project_description_id_161), :name=>I18n.t(:new_project_name_id_161), :price=>2.0}
    @neighborhoods[10][:construction_priorities] << {:id=>162, :letter=>"c", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/priorities/597-betri-adgangur-gangandi-og-hjolandi-yfir-a-fiskislod", :description=>I18n.t(:new_project_description_id_162), :name=>I18n.t(:new_project_name_id_162), :price=>1.0}
    @neighborhoods[10][:construction_priorities] << {:id=>163, :letter=>"d", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_163), :name=>I18n.t(:new_project_name_id_163), :price=>3.0}
    @neighborhoods[10][:construction_priorities] << {:id=>164, :letter=>"e", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_164), :name=>I18n.t(:new_project_name_id_164), :price=>5.0}
    @neighborhoods[10][:construction_priorities] << {:id=>165, :letter=>"f", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_165), :name=>I18n.t(:new_project_name_id_165), :price=>1.0}
    @neighborhoods[10][:construction_priorities] << {:id=>166, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_166), :name=>I18n.t(:new_project_name_id_166), :price=>5.0}
    @neighborhoods[10][:construction_priorities] << {:id=>167, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_167), :name=>I18n.t(:new_project_name_id_167), :price=>1.0}
    @neighborhoods[10][:construction_priorities] << {:id=>168, :letter=>"i", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_168), :name=>I18n.t(:new_project_name_id_168), :price=>1.5}
    @neighborhoods[10][:construction_priorities] << {:id=>169, :letter=>"j", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_169), :name=>I18n.t(:new_project_name_id_169), :price=>2.0}

    @neighborhoods[10][:maintenance_priorities] << {:id=>170, :letter=>"a", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/priorities/1065-endurgera-rolo-a-milli-nylendugotu-og-vesturgotu", :description=>I18n.t(:new_project_description_id_170), :name=>I18n.t(:new_project_name_id_170), :price=>2.5}
    @neighborhoods[10][:maintenance_priorities] << {:id=>171, :letter=>"b", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/priorities/1143-leiksvaedi-fyrir-born-a-graenu-svaedi-vid-aflagranda-40", :description=>I18n.t(:new_project_description_id_171), :name=>I18n.t(:new_project_name_id_171), :price=>2.0}
    @neighborhoods[10][:maintenance_priorities] << {:id=>172, :letter=>"c", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/priorities/869-staerri-ruslakassi-vid-straetoskylid-vid-haskolann", :description=>I18n.t(:new_project_description_id_172), :name=>I18n.t(:new_project_name_id_172), :price=>5.0}
    @neighborhoods[10][:maintenance_priorities] << {:id=>173, :letter=>"d", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/priorities/1007-laga-fotboltavoll-og-leiksvaedi-vid-reynimel-6874", :description=>I18n.t(:new_project_description_id_173), :name=>I18n.t(:new_project_name_id_173), :price=>0.2}
    @neighborhoods[10][:maintenance_priorities] << {:id=>174, :letter=>"e", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/priorities/761-lysing-a-leikvoll-vid-bauganes", :description=>I18n.t(:new_project_description_id_174), :name=>I18n.t(:new_project_name_id_174), :price=>2.0}
    @neighborhoods[10][:maintenance_priorities] << {:id=>175, :letter=>"f", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_175), :name=>I18n.t(:new_project_name_id_175), :price=>0.5}
    @neighborhoods[10][:maintenance_priorities] << {:id=>176, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_176), :name=>I18n.t(:new_project_name_id_176), :price=>1.5}
    @neighborhoods[10][:maintenance_priorities] << {:id=>177, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_177), :name=>I18n.t(:new_project_name_id_177), :price=>1.5}
    @neighborhoods[10][:maintenance_priorities] << {:id=>178, :letter=>"i", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_178), :name=>I18n.t(:new_project_name_id_178), :price=>1.0}
    @neighborhoods[10][:maintenance_priorities] << {:id=>179, :letter=>"j", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_179), :name=>I18n.t(:new_project_name_id_179), :price=>2.0}
    @neighborhoods[10][:maintenance_priorities] << {:id=>180, :letter=>"k", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_180), :name=>I18n.t(:new_project_name_id_180), :price=>3.0}
  end

  def get_neighborhood_budget(neighborhood_id)
    # Get the given neighborhood budget
    Rails.logger.debug("The id: #{neighborhood_id} #{@neighborhoods.inspect} XXXX #{@neighborhoods[neighborhood_id]}")
    (@neighborhoods[neighborhood_id][:budget_amount].gsub(".","").to_f/"1.000.000".gsub(".","").to_f).round(1)
  end

  def get_neighborhood_name(neighborhood_id)
    # Get the given neighborhood budget
    @neighborhoods[neighborhood_id][:name]
  end

  def get_priority_name(neighborhood_id, priority_id)
    # Get the given priority name
    Rails.logger.info("BLAH:#{neighborhood_id} #{priority_id}")
    name = nil
    all = @neighborhoods[neighborhood_id][:construction_priorities]+@neighborhoods[neighborhood_id][:maintenance_priorities]
    all.each do |p|
      if p[:id]==priority_id
        name = p[:name]
        break
      end
    end
    name
  end

  def get_priority_description(neighborhood_id, priority_id)
    # Get the given priority description
    description = nil
    all = @neighborhoods[neighborhood_id][:construction_priorities]+@neighborhoods[neighborhood_id][:maintenance_priorities]
    all.each do |p|
      if p[:id]==priority_id
        description = p[:description]
        break
      end
    end
    description
  end

  def get_priority_link(neighborhood_id, priority_id)
    # Get the given priority description
    link = nil
    all = @neighborhoods[neighborhood_id][:construction_priorities]+@neighborhoods[neighborhood_id][:maintenance_priorities]
    all.each do |p|
      if p[:id]==priority_id
        link = p[:link]
        break
      end
    end
    link
  end

  def get_priority_price(neighborhood_id, priority_id)
    # Get the given priority price
    name = nil
    all = @neighborhoods[neighborhood_id][:construction_priorities]+@neighborhoods[neighborhood_id][:maintenance_priorities]
    all.each do |p|
      if p[:id]==priority_id
        name = p[:price]
        break
      end
    end
    name
  end
end