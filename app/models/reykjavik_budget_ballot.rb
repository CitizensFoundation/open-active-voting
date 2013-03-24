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
  ALLOWED_BALLOT_CHARACTERS = ('a'..'z').to_a+['0','1','2','3','4','5','6','7','8','9']

  attr_accessor :neighborhoods

  def self.current
    ReykjavikBudgetBallot.new
  end

  def priorities(neighborhood_id)
    self.neighborhoods[neighborhood_id][:priorities]
  end

  def initialize(neighborhood_id=1)
    # Setup the neighborhoods for the ballot
    self.neighborhoods=Hash.new
    self.neighborhoods[1] = { :id=>1 ,:name=>"Árbær",                       :budget_amount=>"27.232.046", :priorities=>[] }
    self.neighborhoods[2] = { :id=>2 ,:name=>"Breiðholt",                   :budget_amount=>"46.416.346", :priorities=>[]  }
    self.neighborhoods[3] = { :id=>3 ,:name=>"Grafarholt",                  :budget_amount=>"18.710.919", :priorities=>[]  }
    self.neighborhoods[4] = { :id=>4 ,:name=>"Grafarvogur",                 :budget_amount=>"41.262.636", :priorities=>[] }
    self.neighborhoods[5] = { :id=>5 ,:name=>"Háaleiti og Bústaðir",        :budget_amount=>"34.143.815", :priorities=>[]  }
    self.neighborhoods[6] = { :id=>6 ,:name=>"Hlíðar",                      :budget_amount=>"25.765.742", :priorities=>[]  }
    self.neighborhoods[7] = { :id=>7 ,:name=>"Kjalarnes",                   :budget_amount=>"9.028.419", :priorities=>[]  }
    self.neighborhoods[8] = { :id=>8 ,:name=>"Laugardalur",                 :budget_amount=>"36.888.194", :priorities=>[]  }
    self.neighborhoods[9] = { :id=>9 ,:name=>"Miðborg",                     :budget_amount=>"23.463.701", :priorities=>[] }
    self.neighborhoods[10] ={ :id=>10,:name=>"Vesturbær",                   :budget_amount=>"37.087.717", :priorities=>[]  }

    @neighborhoods[1][:priorities] << {:id=>1, :letter=>"a", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/1726-endurnyjun-leikvalla", :description=>I18n.t(:new_project_description_id_1), :name=>I18n.t(:new_project_name_id_1), :price=>7.0}
    @neighborhoods[1][:priorities] << {:id=>2, :letter=>"b", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/1758-lysing-a-gongustig-fra-arbaejarlaug-ad-ogurhvarfi", :description=>I18n.t(:new_project_description_id_2), :name=>I18n.t(:new_project_name_id_2), :price=>15.0}
    @neighborhoods[1][:priorities] << {:id=>3, :letter=>"c", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/1806-baeta-hljodmon-sem-er-medfram-sudurlandsvegi-vid-raudavatn", :description=>I18n.t(:new_project_description_id_3), :name=>I18n.t(:new_project_name_id_3), :price=>9.0}
    @neighborhoods[1][:priorities] << {:id=>4, :letter=>"d", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/1808-threnging-fremst-i-gotu-i-thingas-23-37", :description=>I18n.t(:new_project_description_id_4), :name=>I18n.t(:new_project_name_id_4), :price=>2.0}
    @neighborhoods[1][:priorities] << {:id=>5, :letter=>"e", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/1809-akvegur-medfram-raudavatni-mjog-lelegur", :description=>I18n.t(:new_project_description_id_5), :name=>I18n.t(:new_project_name_id_5), :price=>3.0}
    @neighborhoods[1][:priorities] << {:id=>6, :letter=>"f", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/1867-raudavatn-gongustigar", :description=>I18n.t(:new_project_description_id_6), :name=>I18n.t(:new_project_name_id_6), :price=>3.0}
    @neighborhoods[1][:priorities] << {:id=>7, :letter=>"g", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/1868-hringtorg-vid-baejarhalshraunbaer-", :description=>I18n.t(:new_project_description_id_7), :name=>I18n.t(:new_project_name_id_7), :price=>15.0}
    @neighborhoods[1][:priorities] << {:id=>8, :letter=>"h", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/1908-minni-hljodmengun-fra-breidholtsbraut-til-mots-vid-nordlingaholt", :description=>I18n.t(:new_project_description_id_8), :name=>I18n.t(:new_project_name_id_8), :price=>2.0}
    @neighborhoods[1][:priorities] << {:id=>9, :letter=>"i", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/1911-hundagerdi-i-arbaenordlingaholt", :description=>I18n.t(:new_project_description_id_9), :name=>I18n.t(:new_project_name_id_9), :price=>3.5}
    @neighborhoods[1][:priorities] << {:id=>10, :letter=>"j", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/1965-hradahindrun-med-gangbraut-yfir-i-skogarlundfotboltavoll-vid-bugdu", :description=>I18n.t(:new_project_description_id_10), :name=>I18n.t(:new_project_name_id_10), :price=>3.0}
    @neighborhoods[1][:priorities] << {:id=>11, :letter=>"k", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/2133-ljos-fra-gongustignum-vid-bjornslund-nidur-ad-undirgongunum-ad-hesthusunum", :description=>I18n.t(:new_project_description_id_11), :name=>I18n.t(:new_project_name_id_11), :price=>4.5}
    @neighborhoods[1][:priorities] << {:id=>12, :letter=>"l", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/2134-lagfaering-a-gongustig-vegna-halku-a-stifluhring-ad-vetri", :description=>I18n.t(:new_project_description_id_12), :name=>I18n.t(:new_project_name_id_12), :price=>0.5}
    @neighborhoods[1][:priorities] << {:id=>13, :letter=>"m", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/2201-hradahindranir-i-undirgongum-undir-breidholtsbraut-og-sudurlandsveg", :description=>I18n.t(:new_project_description_id_13), :name=>I18n.t(:new_project_name_id_13), :price=>1.0}
    @neighborhoods[1][:priorities] << {:id=>14, :letter=>"n", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/2202-yfirbordslagfaeringar-a-hjolastigum-i-ellidaardal-og-arbae", :description=>I18n.t(:new_project_description_id_14), :name=>I18n.t(:new_project_name_id_14), :price=>2.0}
    @neighborhoods[1][:priorities] << {:id=>15, :letter=>"o", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/2205-gongustigar-vid-thingtorg-bagaleg-honnum", :description=>I18n.t(:new_project_description_id_15), :name=>I18n.t(:new_project_name_id_15), :price=>2.5}
    @neighborhoods[1][:priorities] << {:id=>16, :letter=>"p", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/2224-utryming-alaskalupinu-ur-hverfisfridlandinu-vid-bugdu", :description=>I18n.t(:new_project_description_id_16), :name=>I18n.t(:new_project_name_id_16), :price=>0.5}
    @neighborhoods[1][:priorities] << {:id=>17, :letter=>"q", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/2241-lysing-gongustigs-fra-nordlingaholti-ad-hesthusahverfi", :description=>I18n.t(:new_project_description_id_17), :name=>I18n.t(:new_project_name_id_17), :price=>6.5}
    @neighborhoods[1][:priorities] << {:id=>18, :letter=>"r", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/ideas/2246-bjornslundur-klara-framkvaemdir-i-lundinum", :description=>I18n.t(:new_project_description_id_18), :name=>I18n.t(:new_project_name_id_18), :price=>3.0}
    @neighborhoods[1][:priorities] << {:id=>19, :letter=>"s", :link=>"http://betrireykjavik.is/ideas/2209-merkja-vegalengdir-i-ellidaardal", :description=>I18n.t(:new_project_description_id_19), :name=>I18n.t(:new_project_name_id_19), :price=>1.0}
    @neighborhoods[1][:priorities] << {:id=>20, :letter=>"t", :link=>"http://betrireykjavik.is/ideas/2210-upplysingaskilti-i-ellidaardalinn", :description=>I18n.t(:new_project_description_id_20), :name=>I18n.t(:new_project_name_id_20), :price=>1.0}
    @neighborhoods[1][:priorities] << {:id=>21, :letter=>"u", :link=>"http://betrireykjavik.is/ideas/2211-skautaadstada-vid-raudavatn", :description=>I18n.t(:new_project_description_id_21), :name=>I18n.t(:new_project_name_id_21), :price=>0.5}
    @neighborhoods[1][:priorities] << {:id=>22, :letter=>"v", :link=>"http://betrireykjavik.is/ideas/2214-leggja-gongustig-fra-budavadi-yfir-a-gongustig-vid-bjornslund", :description=>I18n.t(:new_project_description_id_22), :name=>I18n.t(:new_project_name_id_22), :price=>3.0}
    @neighborhoods[1][:priorities] << {:id=>23, :letter=>"w", :link=>"http://betrireykjavik.is/ideas/2236-fleiri-vatnsbrunna-i-ellidaardalinn", :description=>I18n.t(:new_project_description_id_23), :name=>I18n.t(:new_project_name_id_23), :price=>5.0}
    @neighborhoods[1][:priorities] << {:id=>24, :letter=>"x", :link=>"http://betrireykjavik.is/ideas/2260-strandblakvellir-i-arbaeinn", :description=>I18n.t(:new_project_description_id_24), :name=>I18n.t(:new_project_name_id_24), :price=>4.0}
    @neighborhoods[1][:priorities] << {:id=>25, :letter=>"y", :link=>"http://betrireykjavik.is/ideas/2332-hradahindrun-med-gangbraut-a-ellidabraut-i-nordlingaholti", :description=>I18n.t(:new_project_description_id_25), :name=>I18n.t(:new_project_name_id_25), :price=>1.5}

    @neighborhoods[2][:priorities] << {:id=>26, :letter=>"a", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/1818-lagfaera-gongustiga-i-holahverfi", :description=>I18n.t(:new_project_description_id_26), :name=>I18n.t(:new_project_name_id_26), :price=>10.0}
    @neighborhoods[2][:priorities] << {:id=>27, :letter=>"b", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/1886-leiksvaedi-nedan-fella-og-holakirkju", :description=>I18n.t(:new_project_description_id_27), :name=>I18n.t(:new_project_name_id_27), :price=>3.0}
    @neighborhoods[2][:priorities] << {:id=>28, :letter=>"c", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2011-threnging-a-seljabraut", :description=>I18n.t(:new_project_description_id_28), :name=>I18n.t(:new_project_name_id_28), :price=>7.0}
    @neighborhoods[2][:priorities] << {:id=>29, :letter=>"d", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2012-laga-breidholtsskola", :description=>I18n.t(:new_project_description_id_29), :name=>I18n.t(:new_project_name_id_29), :price=>5.0}
    @neighborhoods[2][:priorities] << {:id=>30, :letter=>"e", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2034-lagfaera-gongustiga-i-bakkahverfi", :description=>I18n.t(:new_project_description_id_30), :name=>I18n.t(:new_project_name_id_30), :price=>10.0}
    @neighborhoods[2][:priorities] << {:id=>31, :letter=>"f", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2035-baeta-adgengi-fatladra-ad-tjarnarsvaedi-i-midju-seljahverfi", :description=>I18n.t(:new_project_description_id_31), :name=>I18n.t(:new_project_name_id_31), :price=>4.0}
    @neighborhoods[2][:priorities] << {:id=>32, :letter=>"g", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2036-meiri-trjagrodur-a-opnum-svaedum-i-bakkahverfi", :description=>I18n.t(:new_project_description_id_32), :name=>I18n.t(:new_project_name_id_32), :price=>3.0}
    @neighborhoods[2][:priorities] << {:id=>33, :letter=>"h", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2046-fjolbreyttari-uti-afthreyingu", :description=>I18n.t(:new_project_description_id_33), :name=>I18n.t(:new_project_name_id_33), :price=>4.0}
    @neighborhoods[2][:priorities] << {:id=>34, :letter=>"i", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2049-grindur-fyrir-gongustigum", :description=>I18n.t(:new_project_description_id_34), :name=>I18n.t(:new_project_name_id_34), :price=>1.0}
    @neighborhoods[2][:priorities] << {:id=>35, :letter=>"j", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2065-hundagerdi-fyrir-ofan-ir-vollinn-i-seljahverfi", :description=>I18n.t(:new_project_description_id_35), :name=>I18n.t(:new_project_name_id_35), :price=>2.5}
    @neighborhoods[2][:priorities] << {:id=>36, :letter=>"k", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2073-hringtorg-a-gatnamot-jadarsels-og-seljabrautar", :description=>I18n.t(:new_project_description_id_36), :name=>I18n.t(:new_project_name_id_36), :price=>30.0}
    @neighborhoods[2][:priorities] << {:id=>37, :letter=>"l", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2076-snjobraedslu-i-efsta-hluta-hofdabakkans", :description=>I18n.t(:new_project_description_id_37), :name=>I18n.t(:new_project_name_id_37), :price=>30.0}
    @neighborhoods[2][:priorities] << {:id=>38, :letter=>"m", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2103-gonguleid-skolaleikskolabarna", :description=>I18n.t(:new_project_description_id_38), :name=>I18n.t(:new_project_name_id_38), :price=>1.5}
    @neighborhoods[2][:priorities] << {:id=>39, :letter=>"n", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2151-minnka-vatn-i-tjorn-vid-holmasel-um-vetur-til-ad-auka-oryggi-barna-a-is", :description=>I18n.t(:new_project_description_id_39), :name=>I18n.t(:new_project_name_id_39), :price=>1.0}
    @neighborhoods[2][:priorities] << {:id=>40, :letter=>"o", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2184-endurnyjun-gongustigsstubbs-medfram-brunastekk-1", :description=>I18n.t(:new_project_description_id_40), :name=>I18n.t(:new_project_name_id_40), :price=>2.0}
    @neighborhoods[2][:priorities] << {:id=>41, :letter=>"p", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2187-fjarlaegja-hindrun-fyrir-gangandi-hjolandi", :description=>I18n.t(:new_project_description_id_41), :name=>I18n.t(:new_project_name_id_41), :price=>1.0}
    @neighborhoods[2][:priorities] << {:id=>42, :letter=>"q", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2223-leiksvaedi-vid-fremristekk", :description=>I18n.t(:new_project_description_id_42), :name=>I18n.t(:new_project_name_id_42), :price=>10.0}
    @neighborhoods[2][:priorities] << {:id=>43, :letter=>"r", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2234-ruslatunnur", :description=>I18n.t(:new_project_description_id_43), :name=>I18n.t(:new_project_name_id_43), :price=>2.0}
    @neighborhoods[2][:priorities] << {:id=>44, :letter=>"s", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2257-bekkir-vid-gongustig-i-skogarhlid-berg-hola-og-vesturbergs", :description=>I18n.t(:new_project_description_id_44), :name=>I18n.t(:new_project_name_id_44), :price=>4.0}
    @neighborhoods[2][:priorities] << {:id=>45, :letter=>"t", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2265-breidholtsbaer-vid-skogarsel-umhverfi-og-vidhald", :description=>I18n.t(:new_project_description_id_45), :name=>I18n.t(:new_project_name_id_45), :price=>2.0}
    @neighborhoods[2][:priorities] << {:id=>46, :letter=>"u", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2277-gangbrautarljos-yfir-arnarbakka-gagnast-skolabornum-i-hverfinu", :description=>I18n.t(:new_project_description_id_46), :name=>I18n.t(:new_project_name_id_46), :price=>12.0}
    @neighborhoods[2][:priorities] << {:id=>47, :letter=>"v", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2301-baett-skidaadstada-i-seljahverfi", :description=>I18n.t(:new_project_description_id_47), :name=>I18n.t(:new_project_name_id_47), :price=>5.0}
    @neighborhoods[2][:priorities] << {:id=>48, :letter=>"w", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/ideas/2323-gangbraut-yfir-hraunberg-vid-leikskolann-hraunborg", :description=>I18n.t(:new_project_description_id_48), :name=>I18n.t(:new_project_name_id_48), :price=>3.0}
    @neighborhoods[2][:priorities] << {:id=>49, :letter=>"x", :link=>"http://betrireykjavik.is/ideas/1819-hol-i-holana", :description=>I18n.t(:new_project_description_id_49), :name=>I18n.t(:new_project_name_id_49), :price=>7.5}
    @neighborhoods[2][:priorities] << {:id=>50, :letter=>"y", :link=>"http://betrireykjavik.is/ideas/2001-gangstettar-i-nedra-breidholti", :description=>I18n.t(:new_project_description_id_50), :name=>I18n.t(:new_project_name_id_50), :price=>10.0}
    @neighborhoods[2][:priorities] << {:id=>51, :letter=>"z", :link=>"http://betrireykjavik.is/ideas/2175-o-borg-min-borg", :description=>I18n.t(:new_project_description_id_51), :name=>I18n.t(:new_project_name_id_51), :price=>5.0}
    @neighborhoods[2][:priorities] << {:id=>52, :letter=>"0", :link=>"", :description=>I18n.t(:new_project_description_id_52), :name=>I18n.t(:new_project_name_id_52), :price=>2.0}

    @neighborhoods[3][:priorities] << {:id=>53, :letter=>"a", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/ideas/1781-merking-a-ornefnum-i-ulvarsardal", :description=>I18n.t(:new_project_description_id_53), :name=>I18n.t(:new_project_name_id_53), :price=>2.0}
    @neighborhoods[3][:priorities] << {:id=>54, :letter=>"b", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/ideas/1814-betri-rolo-vid-enda-olafsgeisla", :description=>I18n.t(:new_project_description_id_54), :name=>I18n.t(:new_project_name_id_54), :price=>2.0}
    @neighborhoods[3][:priorities] << {:id=>55, :letter=>"c", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/ideas/1992-graeda-upp-ulfarsardal", :description=>I18n.t(:new_project_description_id_55), :name=>I18n.t(:new_project_name_id_55), :price=>2.0}
    @neighborhoods[3][:priorities] << {:id=>56, :letter=>"d", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/ideas/1995-hamarkshradaskilti", :description=>I18n.t(:new_project_description_id_56), :name=>I18n.t(:new_project_name_id_56), :price=>4.0}
    @neighborhoods[3][:priorities] << {:id=>57, :letter=>"e", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/ideas/1996-staedi-vid-leirtjorn", :description=>I18n.t(:new_project_description_id_57), :name=>I18n.t(:new_project_name_id_57), :price=>5.0}
    @neighborhoods[3][:priorities] << {:id=>58, :letter=>"f", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/ideas/2093-grodursetning-trjaa-i-grafarholt-a-opnum-svaedum-og-medfram-gotum-og-stigum", :description=>I18n.t(:new_project_description_id_58), :name=>I18n.t(:new_project_name_id_58), :price=>3.0}
    @neighborhoods[3][:priorities] << {:id=>59, :letter=>"g", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/ideas/2102-hundagerdi", :description=>I18n.t(:new_project_description_id_59), :name=>I18n.t(:new_project_name_id_59), :price=>3.5}
    @neighborhoods[3][:priorities] << {:id=>60, :letter=>"h", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/ideas/2114-planta-fleiri-trjam-i-ulfarsardalshverfid", :description=>I18n.t(:new_project_description_id_60), :name=>I18n.t(:new_project_name_id_60), :price=>3.0}
    @neighborhoods[3][:priorities] << {:id=>61, :letter=>"i", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/ideas/2280-gongustig-upp-i-dalinn-sem-kalladur-er-paradisardalur-fyrir-ofan-golfvollinn", :description=>I18n.t(:new_project_description_id_61), :name=>I18n.t(:new_project_name_id_61), :price=>3.0}
    @neighborhoods[3][:priorities] << {:id=>62, :letter=>"j", :link=>"http://betrireykjavik.is/ideas/2087-trjagrodur-til-skjolmyndunar-vid-ingunnarskola-og-mariuborg", :description=>I18n.t(:new_project_description_id_62), :name=>I18n.t(:new_project_name_id_62), :price=>2.0}
    @neighborhoods[3][:priorities] << {:id=>63, :letter=>"k", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/2119-fjolbreytan-trjagrodur-fyrir-ofan-vesturlandsveg-fra-grafarholti-og-ad-skograektinni-vid-hamragarda-med-aherslu-a-svaedid-fra-akveginum-og-ad-nyja-gongustignum-", :description=>I18n.t(:new_project_description_id_63), :name=>I18n.t(:new_project_name_id_63), :price=>2.0}
    @neighborhoods[3][:priorities] << {:id=>64, :letter=>"l", :link=>"", :description=>I18n.t(:new_project_description_id_64), :name=>I18n.t(:new_project_name_id_64), :price=>3.5}
    @neighborhoods[3][:priorities] << {:id=>65, :letter=>"m", :link=>"", :description=>I18n.t(:new_project_description_id_65), :name=>I18n.t(:new_project_name_id_65), :price=>1.0}
    @neighborhoods[3][:priorities] << {:id=>66, :letter=>"n", :link=>"", :description=>I18n.t(:new_project_description_id_66), :name=>I18n.t(:new_project_name_id_66), :price=>1.5}
    @neighborhoods[3][:priorities] << {:id=>67, :letter=>"o", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/1761-fleiri-tre-vid-gongustig-sem-liggur-fyrir-ofan-gylfaflot-og-nedan-langarima", :description=>I18n.t(:new_project_description_id_67), :name=>I18n.t(:new_project_name_id_67), :price=>2.0}
    @neighborhoods[3][:priorities] << {:id=>68, :letter=>"p", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/1800-gongustigur-medfram-kirkjugardinum-vid-borgarveg", :description=>I18n.t(:new_project_description_id_68), :name=>I18n.t(:new_project_name_id_68), :price=>14.0}
    @neighborhoods[3][:priorities] << {:id=>69, :letter=>"q", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/1912-umferdarspegill", :description=>I18n.t(:new_project_description_id_69), :name=>I18n.t(:new_project_name_id_69), :price=>0.5}
    @neighborhoods[3][:priorities] << {:id=>70, :letter=>"r", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/1918-ljuka-vid-grodurbelti-medfram-ithrottasvaedi-fjolnis-vid-logafold-og-reykjafold-", :description=>I18n.t(:new_project_description_id_70), :name=>I18n.t(:new_project_name_id_70), :price=>2.0}
    @neighborhoods[3][:priorities] << {:id=>71, :letter=>"s", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/1947-umhirda-a-graenu-svaedi-nedst-i-gotu-a-milli-fletturima-og-berjarima", :description=>I18n.t(:new_project_description_id_71), :name=>I18n.t(:new_project_name_id_71), :price=>4.0}
    @neighborhoods[3][:priorities] << {:id=>72, :letter=>"t", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/1967-trjagrodur-til-skjolmyndunar-gegn-naatt-i-grafarvogshverfi", :description=>I18n.t(:new_project_description_id_72), :name=>I18n.t(:new_project_name_id_72), :price=>3.0}
    @neighborhoods[3][:priorities] << {:id=>73, :letter=>"u", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/1968-endurnyjun-skolalodar-husaskola", :description=>I18n.t(:new_project_description_id_73), :name=>I18n.t(:new_project_name_id_73), :price=>10.0}
    @neighborhoods[3][:priorities] << {:id=>74, :letter=>"v", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/1969-fegra-umhverfi-grafarvogslaugar", :description=>I18n.t(:new_project_description_id_74), :name=>I18n.t(:new_project_name_id_74), :price=>1.0}
    @neighborhoods[3][:priorities] << {:id=>75, :letter=>"w", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/1985-utitafl-vid-rimaskola", :description=>I18n.t(:new_project_description_id_75), :name=>I18n.t(:new_project_name_id_75), :price=>3.0}
    @neighborhoods[3][:priorities] << {:id=>76, :letter=>"x", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/1990-vantar-ljos-vid-gonguhjolastig", :description=>I18n.t(:new_project_description_id_76), :name=>I18n.t(:new_project_name_id_76), :price=>10.0}
    @neighborhoods[3][:priorities] << {:id=>77, :letter=>"y", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/2068-gonguljos-vid-olis-fjallkonuveg", :description=>I18n.t(:new_project_description_id_77), :name=>I18n.t(:new_project_name_id_77), :price=>12.0}
    @neighborhoods[3][:priorities] << {:id=>78, :letter=>"z", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/2147-grodursetja-tre-vid-strandstig-nedan-stadahverfis", :description=>I18n.t(:new_project_description_id_78), :name=>I18n.t(:new_project_name_id_78), :price=>2.0}
    @neighborhoods[3][:priorities] << {:id=>79, :letter=>"0", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/2213-merkingar-og-grodur-hja-styttugardinum", :description=>I18n.t(:new_project_description_id_79), :name=>I18n.t(:new_project_name_id_79), :price=>2.0}
    @neighborhoods[3][:priorities] << {:id=>80, :letter=>"1", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/2221-hundagerdi-i-grafarvoginn-og-thad-strax", :description=>I18n.t(:new_project_description_id_80), :name=>I18n.t(:new_project_name_id_80), :price=>3.5}
    @neighborhoods[3][:priorities] << {:id=>81, :letter=>"2", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/2261-vatnshani-innst-i-grafarvogi", :description=>I18n.t(:new_project_description_id_81), :name=>I18n.t(:new_project_name_id_81), :price=>5.0}
    @neighborhoods[3][:priorities] << {:id=>82, :letter=>"3", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/2287-auka-oryggi-gangandi-a-gongustigum-i-stadarhverfi-vid-golfvoll", :description=>I18n.t(:new_project_description_id_82), :name=>I18n.t(:new_project_name_id_82), :price=>3.0}
    @neighborhoods[3][:priorities] << {:id=>83, :letter=>"4", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/ideas/2290-lagfaeringar-a-geirsnefi", :description=>I18n.t(:new_project_description_id_83), :name=>I18n.t(:new_project_name_id_83), :price=>5.0}
    @neighborhoods[3][:priorities] << {:id=>84, :letter=>"5", :link=>"http://betrireykjavik.is/ideas/1801-gangbrautarljos-a-fjallkonuveg-vid-joklafold", :description=>I18n.t(:new_project_description_id_84), :name=>I18n.t(:new_project_name_id_84), :price=>12.0}
    @neighborhoods[3][:priorities] << {:id=>85, :letter=>"6", :link=>"http://betrireykjavik.is/ideas/1862-setja-upp-hlid-a-gongustig-a-milli-rimaskola-og-midgardslangarima-vegna-mikillar-motorhjolaumferdar-um-gangstiginn", :description=>I18n.t(:new_project_description_id_85), :name=>I18n.t(:new_project_name_id_85), :price=>0.7}
    @neighborhoods[3][:priorities] << {:id=>86, :letter=>"7", :link=>"http://betrireykjavik.is/ideas/1944-gangbrautarljos-vid-gagnveg-i-grafarvogi", :description=>I18n.t(:new_project_description_id_86), :name=>I18n.t(:new_project_name_id_86), :price=>12.0}
    @neighborhoods[3][:priorities] << {:id=>87, :letter=>"8", :link=>"http://betrireykjavik.is/ideas/2157-malbika-malarstig-milli-hamrahverfis-ad-gufunesbaejar", :description=>I18n.t(:new_project_description_id_87), :name=>I18n.t(:new_project_name_id_87), :price=>10.0}
    @neighborhoods[3][:priorities] << {:id=>88, :letter=>"9", :link=>"http://betrireykjavik.is/ideas/2174-haekkun-hljodmanar-milli-stakkhamra-og-gullinbruarstrandvegar", :description=>I18n.t(:new_project_description_id_88), :name=>I18n.t(:new_project_name_id_88), :price=>6.0}

    @neighborhoods[5][:priorities] << {:id=>89, :letter=>"a", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1829-kruttlegt-svaedi", :description=>I18n.t(:new_project_description_id_89), :name=>I18n.t(:new_project_name_id_89), :price=>1.5}
    @neighborhoods[5][:priorities] << {:id=>90, :letter=>"b", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1831-endurnyjun-a-gangstett", :description=>I18n.t(:new_project_description_id_90), :name=>I18n.t(:new_project_name_id_90), :price=>15.0}
    @neighborhoods[5][:priorities] << {:id=>91, :letter=>"c", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1832-malbikahelluleggja-oskastig-sem-liggur-fra-rettarholtsvegi-yfir-i-haagerdi", :description=>I18n.t(:new_project_description_id_91), :name=>I18n.t(:new_project_name_id_91), :price=>2.5}
    @neighborhoods[5][:priorities] << {:id=>92, :letter=>"d", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1842-draumaleikvollur-i-grundargerdisgardihttp://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1831-endurnyjun-a-gangstett", :description=>I18n.t(:new_project_description_id_92), :name=>I18n.t(:new_project_name_id_92), :price=>8.0}
    @neighborhoods[5][:priorities] << {:id=>93, :letter=>"e", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1843-endurnyjun-gangstetta", :description=>I18n.t(:new_project_description_id_93), :name=>I18n.t(:new_project_name_id_93), :price=>5.0}
    @neighborhoods[5][:priorities] << {:id=>94, :letter=>"f", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1844-gardur-austan-vid-ithrottahus-rettarholtsskola", :description=>I18n.t(:new_project_description_id_94), :name=>I18n.t(:new_project_name_id_94), :price=>3.0}
    @neighborhoods[5][:priorities] << {:id=>95, :letter=>"g", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1847-ruslastampar-vid-gongubru-ad-skeifunni", :description=>I18n.t(:new_project_description_id_95), :name=>I18n.t(:new_project_name_id_95), :price=>0.5}
    @neighborhoods[5][:priorities] << {:id=>96, :letter=>"h", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1853-hefjum-gardaflotina-til-vegs-og-virdingar-aftur", :description=>I18n.t(:new_project_description_id_96), :name=>I18n.t(:new_project_name_id_96), :price=>2.0}
    @neighborhoods[5][:priorities] << {:id=>97, :letter=>"i", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1855-hradahindrun-i-alftamyri-", :description=>I18n.t(:new_project_description_id_97), :name=>I18n.t(:new_project_name_id_97), :price=>1.5}
    @neighborhoods[5][:priorities] << {:id=>98, :letter=>"j", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1858-hundagerdi-vid-sprengisand", :description=>I18n.t(:new_project_description_id_98), :name=>I18n.t(:new_project_name_id_98), :price=>3.5}
    @neighborhoods[5][:priorities] << {:id=>99, :letter=>"k", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1859-lysing-a-stig-vid-miklubrautina-sunnanverda-a-milli-kringlu-og-haaleitisbrautar", :description=>I18n.t(:new_project_description_id_99), :name=>I18n.t(:new_project_name_id_99), :price=>3.5}
    @neighborhoods[5][:priorities] << {:id=>100, :letter=>"l", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1863-bekkir-vid-hitaveitustokkana", :description=>I18n.t(:new_project_description_id_100), :name=>I18n.t(:new_project_name_id_100), :price=>2.0}
    @neighborhoods[5][:priorities] << {:id=>101, :letter=>"m", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1914-lagfaera-korfuboltavollinn-vid-fossvogsveg", :description=>I18n.t(:new_project_description_id_101), :name=>I18n.t(:new_project_name_id_101), :price=>30.0}
    @neighborhoods[5][:priorities] << {:id=>102, :letter=>"n", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/1982-berja-og-avaxtatrjaagard-i-fossvog-utbua-aningarstad", :description=>I18n.t(:new_project_description_id_102), :name=>I18n.t(:new_project_name_id_102), :price=>3.0}
    @neighborhoods[5][:priorities] << {:id=>103, :letter=>"o", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/2041-lagfaera-sleda-og-skidabrekku-milli-bulands-og-giljalands", :description=>I18n.t(:new_project_description_id_103), :name=>I18n.t(:new_project_name_id_103), :price=>5.0}
    @neighborhoods[5][:priorities] << {:id=>104, :letter=>"p", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/2106-ruslafata-vid-rettarholtsveg", :description=>I18n.t(:new_project_description_id_104), :name=>I18n.t(:new_project_name_id_104), :price=>0.3}
    @neighborhoods[5][:priorities] << {:id=>105, :letter=>"q", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/2146-endurnyja-gonguleid-vid-haaleitisbraut-fra-grensaskirkju-ad-hvassaleiti", :description=>I18n.t(:new_project_description_id_105), :name=>I18n.t(:new_project_name_id_105), :price=>3.0}
    @neighborhoods[5][:priorities] << {:id=>106, :letter=>"r", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/2186-tre-medfram-bustadvegi", :description=>I18n.t(:new_project_description_id_106), :name=>I18n.t(:new_project_name_id_106), :price=>3.0}
    @neighborhoods[5][:priorities] << {:id=>107, :letter=>"s", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/2191-gangstett-vid-haaleitisbraut-hja-n1-storagerdi-tharfnast-lagfaeringar", :description=>I18n.t(:new_project_description_id_107), :name=>I18n.t(:new_project_name_id_107), :price=>15.0}
    @neighborhoods[5][:priorities] << {:id=>108, :letter=>"t", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/2217-beturbaeta-hradahindranir-ogeda-threngja-haedargard-setja-upp-hradaljosaskilti", :description=>I18n.t(:new_project_description_id_108), :name=>I18n.t(:new_project_name_id_108), :price=>4.0}
    @neighborhoods[5][:priorities] << {:id=>109, :letter=>"u", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/2239-bekkir-bekkir-bekkir", :description=>I18n.t(:new_project_description_id_109), :name=>I18n.t(:new_project_name_id_109), :price=>1.5}
    @neighborhoods[5][:priorities] << {:id=>110, :letter=>"v", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/2240-laekkun-umferdahrada-i-almgerdi-a-milli-grensasdeildar-og-furugerdis-1", :description=>I18n.t(:new_project_description_id_110), :name=>I18n.t(:new_project_name_id_110), :price=>1.5}
    @neighborhoods[5][:priorities] << {:id=>111, :letter=>"w", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/2289-fjolga-ruslafotum-um-allt-hverfid", :description=>I18n.t(:new_project_description_id_111), :name=>I18n.t(:new_project_name_id_111), :price=>1.0}
    @neighborhoods[5][:priorities] << {:id=>112, :letter=>"x", :link=>"", :description=>I18n.t(:new_project_description_id_112), :name=>I18n.t(:new_project_name_id_112), :price=>1.0}
    @neighborhoods[5][:priorities] << {:id=>113, :letter=>"y", :link=>"", :description=>I18n.t(:new_project_description_id_113), :name=>I18n.t(:new_project_name_id_113), :price=>6.0}
    @neighborhoods[5][:priorities] << {:id=>114, :letter=>"z", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/ideas/2342-lifgun-leikvallar", :description=>I18n.t(:new_project_description_id_114), :name=>I18n.t(:new_project_name_id_114), :price=>2.0}
    @neighborhoods[5][:priorities] << {:id=>115, :letter=>"0", :link=>"http://betrireykjavik.is/ideas/1923-lagfaera-gongustig-med-fossvogsvegi", :description=>I18n.t(:new_project_description_id_115), :name=>I18n.t(:new_project_name_id_115), :price=>7.0}
    @neighborhoods[5][:priorities] << {:id=>116, :letter=>"1", :link=>"http://betrireykjavik.is/ideas/1715-varnir-nedst-i-krummabrekku-sledabrekka-fra-heidagerdi-og-nidur-a-miklubraut", :description=>I18n.t(:new_project_description_id_116), :name=>I18n.t(:new_project_name_id_116), :price=>0.5}
    @neighborhoods[5][:priorities] << {:id=>117, :letter=>"2", :link=>"", :description=>I18n.t(:new_project_description_id_117), :name=>I18n.t(:new_project_name_id_117), :price=>5.0}
    @neighborhoods[5][:priorities] << {:id=>118, :letter=>"3", :link=>"", :description=>I18n.t(:new_project_description_id_118), :name=>I18n.t(:new_project_name_id_118), :price=>0.5}

    @neighborhoods[6][:priorities] << {:id=>119, :letter=>"a", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/1799-lagfaera-gongustig", :description=>I18n.t(:new_project_description_id_119), :name=>I18n.t(:new_project_name_id_119), :price=>1.0}
    @neighborhoods[6][:priorities] << {:id=>120, :letter=>"b", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/1823-endurnyjun-gangstettar-sem-er-oll-brotin-skokk-og-bjogud-og-mjog-mishaedott-eftir-fyrri-uppgroft-vegna-linulagnar-er-beinlinis-mjog-varasom", :description=>I18n.t(:new_project_description_id_120), :name=>I18n.t(:new_project_name_id_120), :price=>7.5}
    @neighborhoods[6][:priorities] << {:id=>121, :letter=>"c", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/1931-graenna-klambratun", :description=>I18n.t(:new_project_description_id_121), :name=>I18n.t(:new_project_name_id_121), :price=>0.3}
    @neighborhoods[6][:priorities] << {:id=>122, :letter=>"d", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/1932-gangstett-vid-sunnanverda-flokagotu-", :description=>I18n.t(:new_project_description_id_122), :name=>I18n.t(:new_project_name_id_122), :price=>7.0}
    @neighborhoods[6][:priorities] << {:id=>123, :letter=>"e", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/1976-smanar-blettir", :description=>I18n.t(:new_project_description_id_123), :name=>I18n.t(:new_project_name_id_123), :price=>3.0}
    @neighborhoods[6][:priorities] << {:id=>124, :letter=>"f", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/2141-ljoskastarar-yfir-gangbrautir-vid-hringtorg-i-longuhlid-vegna-skolabarna", :description=>I18n.t(:new_project_description_id_124), :name=>I18n.t(:new_project_name_id_124), :price=>2.0}
    @neighborhoods[6][:priorities] << {:id=>125, :letter=>"g", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/2156-jolaljosskammdegisljos-a-klambratun-og-nagrenni", :description=>I18n.t(:new_project_description_id_125), :name=>I18n.t(:new_project_name_id_125), :price=>3.0}
    @neighborhoods[6][:priorities] << {:id=>126, :letter=>"h", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/2159-orugg-gonguleid-yfir-raudararstig-vid-hrefnugotuklambratun", :description=>I18n.t(:new_project_description_id_126), :name=>I18n.t(:new_project_name_id_126), :price=>1.5}
    @neighborhoods[6][:priorities] << {:id=>127, :letter=>"i", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/2163-gonguljos-yfir-longuhlid-vid-bolstadarhlid", :description=>I18n.t(:new_project_description_id_127), :name=>I18n.t(:new_project_name_id_127), :price=>15.0}
    @neighborhoods[6][:priorities] << {:id=>128, :letter=>"j", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/2226-klara-malbikun-gongustiga-a-klambratuni", :description=>I18n.t(:new_project_description_id_128), :name=>I18n.t(:new_project_name_id_128), :price=>8.0}
    @neighborhoods[6][:priorities] << {:id=>129, :letter=>"k", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/2230-gangstett-i-reykjahlid-milli-hateigsvegar-og-flokagotu-er-haettuleg", :description=>I18n.t(:new_project_description_id_129), :name=>I18n.t(:new_project_name_id_129), :price=>3.0}
    @neighborhoods[6][:priorities] << {:id=>130, :letter=>"l", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/2254-fjolskyldugardur-a-klambratun", :description=>I18n.t(:new_project_description_id_130), :name=>I18n.t(:new_project_name_id_130), :price=>8.0}
    @neighborhoods[6][:priorities] << {:id=>131, :letter=>"m", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/2312-gonguleidir-ad-bidstod-hlidar-sudur", :description=>I18n.t(:new_project_description_id_131), :name=>I18n.t(:new_project_name_id_131), :price=>5.0}
    @neighborhoods[6][:priorities] << {:id=>132, :letter=>"n", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/2331-blom-og-blomaker-i-hverfid", :description=>I18n.t(:new_project_description_id_132), :name=>I18n.t(:new_project_name_id_132), :price=>0.8}
    @neighborhoods[6][:priorities] << {:id=>133, :letter=>"o", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/2333-hradahindrun-vid-njalsgoturolo-aftan-vid-austurbae", :description=>I18n.t(:new_project_description_id_133), :name=>I18n.t(:new_project_name_id_133), :price=>2.0}
    @neighborhoods[6][:priorities] << {:id=>134, :letter=>"p", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/ideas/2338-jolaljos-a-snorrabraut", :description=>I18n.t(:new_project_description_id_134), :name=>I18n.t(:new_project_name_id_134), :price=>3.0}
    @neighborhoods[6][:priorities] << {:id=>135, :letter=>"q", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/1727-endurnyjun-og-honnun-leikvallar-a-milli-medalholt-og-einholts", :description=>I18n.t(:new_project_description_id_135), :name=>I18n.t(:new_project_name_id_135), :price=>10.0}
    @neighborhoods[6][:priorities] << {:id=>136, :letter=>"r", :link=>"http://betrireykjavik.is/ideas/2079-boule-boccia-vellir-a-klambaratuni-og-i-laugardal", :description=>I18n.t(:new_project_description_id_136), :name=>I18n.t(:new_project_name_id_136), :price=>4.0}
    @neighborhoods[6][:priorities] << {:id=>137, :letter=>"s", :link=>"http://betrireykjavik.is/ideas/2283-skemmtilegri-bollagoturolo-fyrir-bornin-i-hverfinu", :description=>I18n.t(:new_project_description_id_137), :name=>I18n.t(:new_project_name_id_137), :price=>10.0}
    @neighborhoods[6][:priorities] << {:id=>138, :letter=>"t", :link=>"", :description=>I18n.t(:new_project_description_id_138), :name=>I18n.t(:new_project_name_id_138), :price=>4.0}

    @neighborhoods[7][:priorities] << {:id=>139, :letter=>"a", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/1817-aparola", :description=>I18n.t(:new_project_description_id_139), :name=>I18n.t(:new_project_name_id_139), :price=>4.0}
    @neighborhoods[7][:priorities] << {:id=>140, :letter=>"b", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/1822-nyjan-heitapott-i-sundlaugina", :description=>I18n.t(:new_project_description_id_140), :name=>I18n.t(:new_project_name_id_140), :price=>3.0}
    @neighborhoods[7][:priorities] << {:id=>141, :letter=>"c", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/1892-vidhald-a-klebergslaug-setja-plexigler-girdingu", :description=>I18n.t(:new_project_description_id_141), :name=>I18n.t(:new_project_name_id_141), :price=>2.0}
    @neighborhoods[7][:priorities] << {:id=>142, :letter=>"d", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/1901-fegrun-bergvikurlaekjar", :description=>I18n.t(:new_project_description_id_142), :name=>I18n.t(:new_project_name_id_142), :price=>2.5}
    @neighborhoods[7][:priorities] << {:id=>143, :letter=>"e", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/1902-fegrun-svaedisins-ofan-helgugrundar-24-og-6", :description=>I18n.t(:new_project_description_id_143), :name=>I18n.t(:new_project_name_id_143), :price=>2.0}
    @neighborhoods[7][:priorities] << {:id=>144, :letter=>"f", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/1903-lagfaera-innkeyrslu-ad-klebergsskola", :description=>I18n.t(:new_project_description_id_144), :name=>I18n.t(:new_project_name_id_144), :price=>1.5}
    @neighborhoods[7][:priorities] << {:id=>145, :letter=>"g", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/1905-graenir-ruslastampar", :description=>I18n.t(:new_project_description_id_145), :name=>I18n.t(:new_project_name_id_145), :price=>0.5}
    @neighborhoods[7][:priorities] << {:id=>146, :letter=>"h", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/1920-skilti-vida-um-hverfid-sem-segir-hafid-hundana-i-bandi-og-takid-upp-eftir-hundinn-", :description=>I18n.t(:new_project_description_id_146), :name=>I18n.t(:new_project_name_id_146), :price=>0.5}
    @neighborhoods[7][:priorities] << {:id=>147, :letter=>"i", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/1977-thad-vantar-gangstett-a-milli-helgugrundar-og-jorfagrundar-fra-hringtorgi", :description=>I18n.t(:new_project_description_id_147), :name=>I18n.t(:new_project_name_id_147), :price=>4.0}
    @neighborhoods[7][:priorities] << {:id=>148, :letter=>"j", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/2122-halda-afram-vid-uppbyggingu-sjosundsadstodu-i-hofsvikinni", :description=>I18n.t(:new_project_description_id_148), :name=>I18n.t(:new_project_name_id_148), :price=>2.0}
    @neighborhoods[7][:priorities] << {:id=>149, :letter=>"k", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/2219-fleiri-leiktaeki-a-skolalod", :description=>I18n.t(:new_project_description_id_149), :name=>I18n.t(:new_project_name_id_149), :price=>3.0}
    @neighborhoods[7][:priorities] << {:id=>150, :letter=>"l", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/2220-strandblakvollur", :description=>I18n.t(:new_project_description_id_150), :name=>I18n.t(:new_project_name_id_150), :price=>4.0}
    @neighborhoods[7][:priorities] << {:id=>151, :letter=>"m", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/2225-samkeppni-um-utilistaverk-a-kjalarnesi", :description=>I18n.t(:new_project_description_id_151), :name=>I18n.t(:new_project_name_id_151), :price=>1.0}
    @neighborhoods[7][:priorities] << {:id=>152, :letter=>"n", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/2272-skilti-a-klebergid", :description=>I18n.t(:new_project_description_id_152), :name=>I18n.t(:new_project_name_id_152), :price=>1.0}
    @neighborhoods[7][:priorities] << {:id=>153, :letter=>"o", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/2311-fegra-fyrir-framan-folkvang-med-stett-eda-palli", :description=>I18n.t(:new_project_description_id_153), :name=>I18n.t(:new_project_name_id_153), :price=>4.0}
    @neighborhoods[7][:priorities] << {:id=>154, :letter=>"p", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/2317-jolatre-i-midju-hverfisins", :description=>I18n.t(:new_project_description_id_154), :name=>I18n.t(:new_project_name_id_154), :price=>0.5}
    @neighborhoods[7][:priorities] << {:id=>155, :letter=>"q", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/2320-grodursetning-vid-vallarlaek-austan-folkvangs", :description=>I18n.t(:new_project_description_id_155), :name=>I18n.t(:new_project_name_id_155), :price=>1.5}
    @neighborhoods[7][:priorities] << {:id=>156, :letter=>"r", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/2322-fanastong-vid-folkvang", :description=>I18n.t(:new_project_description_id_156), :name=>I18n.t(:new_project_name_id_156), :price=>0.3}
    @neighborhoods[7][:priorities] << {:id=>157, :letter=>"s", :link=>"http://betri-hverfi-kjalarnes.betrireykjavik.is/ideas/2325-varudarskilti-fra-thjodvegi-ad-sundlaug", :description=>I18n.t(:new_project_description_id_157), :name=>I18n.t(:new_project_name_id_157), :price=>0.1}

    @neighborhoods[8][:priorities] << {:id=>158, :letter=>"a", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/1730-laugarnestangi-til-utivistar-", :description=>I18n.t(:new_project_description_id_158), :name=>I18n.t(:new_project_name_id_158), :price=>2.0}
    @neighborhoods[8][:priorities] << {:id=>159, :letter=>"b", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/1731-mannlifstorg-efst-i-alfheimum", :description=>I18n.t(:new_project_description_id_159), :name=>I18n.t(:new_project_name_id_159), :price=>2.0}
    @neighborhoods[8][:priorities] << {:id=>160, :letter=>"c", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/1732-samgonguhjolreidagatnamot", :description=>I18n.t(:new_project_description_id_160), :name=>I18n.t(:new_project_name_id_160), :price=>1.0}
    @neighborhoods[8][:priorities] << {:id=>161, :letter=>"d", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/1734-upphitadir-gongustigar-i-lagardalnum", :description=>I18n.t(:new_project_description_id_161), :name=>I18n.t(:new_project_name_id_161), :price=>20.0}
    @neighborhoods[8][:priorities] << {:id=>162, :letter=>"e", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/1738-graen-utras", :description=>I18n.t(:new_project_description_id_162), :name=>I18n.t(:new_project_name_id_162), :price=>4.0}
    @neighborhoods[8][:priorities] << {:id=>163, :letter=>"f", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/1739-fjolgun-hjolastaeda", :description=>I18n.t(:new_project_description_id_163), :name=>I18n.t(:new_project_name_id_163), :price=>4.0}
    @neighborhoods[8][:priorities] << {:id=>164, :letter=>"g", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/1743-heilsustigur-i-laugardal", :description=>I18n.t(:new_project_description_id_164), :name=>I18n.t(:new_project_name_id_164), :price=>3.0}
    @neighborhoods[8][:priorities] << {:id=>165, :letter=>"h", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/1744-gongustigur-fra-sundlaugavegi-og-inn-i-laugardal-milli-laugardalslaugar-og-tjaldstaedis", :description=>I18n.t(:new_project_description_id_165), :name=>I18n.t(:new_project_name_id_165), :price=>6.0}
    @neighborhoods[8][:priorities] << {:id=>166, :letter=>"i", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/1821-graenir-umferdarveggir", :description=>I18n.t(:new_project_description_id_166), :name=>I18n.t(:new_project_name_id_166), :price=>3.0}
    @neighborhoods[8][:priorities] << {:id=>167, :letter=>"j", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/1836-fjolgum-gotutrjam", :description=>I18n.t(:new_project_description_id_167), :name=>I18n.t(:new_project_name_id_167), :price=>4.0}
    @neighborhoods[8][:priorities] << {:id=>168, :letter=>"k", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/2039-vernda-stig-skeifu-glaesibae-fyrir-agengni-bilaleigubila", :description=>I18n.t(:new_project_description_id_168), :name=>I18n.t(:new_project_name_id_168), :price=>1.0}
    @neighborhoods[8][:priorities] << {:id=>169, :letter=>"l", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/2040-hlua-ad-stad-thar-sem-gott-er-ad-horfa-a-stjornurnar", :description=>I18n.t(:new_project_description_id_169), :name=>I18n.t(:new_project_name_id_169), :price=>0.3}
    @neighborhoods[8][:priorities] << {:id=>170, :letter=>"m", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/2111-leiktaeki-fyrir-eldri-born-og-unglinga-a-leikvoll-vid-ljosheima", :description=>I18n.t(:new_project_description_id_170), :name=>I18n.t(:new_project_name_id_170), :price=>4.0}
    @neighborhoods[8][:priorities] << {:id=>171, :letter=>"n", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/2327-vatnshanar-i-hverfinu", :description=>I18n.t(:new_project_description_id_171), :name=>I18n.t(:new_project_name_id_171), :price=>5.0}
    @neighborhoods[8][:priorities] << {:id=>172, :letter=>"o", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/2330-berjarunnur-lifja-upp-a-umhverfinu", :description=>I18n.t(:new_project_description_id_172), :name=>I18n.t(:new_project_name_id_172), :price=>3.0}
    @neighborhoods[8][:priorities] << {:id=>173, :letter=>"p", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/2341-breyting-a-godheima-til-ad-haegja-a-umferd-og-baeta-oryggi-barna", :description=>I18n.t(:new_project_description_id_173), :name=>I18n.t(:new_project_name_id_173), :price=>1.5}
    @neighborhoods[8][:priorities] << {:id=>174, :letter=>"q", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/ideas/2345-tre-og-runnar-a-steypusvaedum", :description=>I18n.t(:new_project_description_id_174), :name=>I18n.t(:new_project_name_id_174), :price=>2.0}
    @neighborhoods[8][:priorities] << {:id=>175, :letter=>"r", :link=>"http://betrireykjavik.is/ideas/1816-blakvoll-i-laugardalinn", :description=>I18n.t(:new_project_description_id_175), :name=>I18n.t(:new_project_name_id_175), :price=>5.0}
    @neighborhoods[8][:priorities] << {:id=>176, :letter=>"s", :link=>"http://betrireykjavik.is/ideas/1860-laga-stig-fra-holtavegi-ad-engjavegi-thar-er-lagpunktur-sem-safnar-vatni-og-is-", :description=>I18n.t(:new_project_description_id_176), :name=>I18n.t(:new_project_name_id_176), :price=>5.0}
    @neighborhoods[8][:priorities] << {:id=>177, :letter=>"t", :link=>"http://betrireykjavik.is/ideas/1928-gongustig-fra-langholtskirkju-ad-leikskolanum-langholti", :description=>I18n.t(:new_project_description_id_177), :name=>I18n.t(:new_project_name_id_177), :price=>1.0}
    @neighborhoods[8][:priorities] << {:id=>178, :letter=>"u", :link=>"http://betrireykjavik.is/ideas/2043-reidhjolastanda-fyrir-utan-leikskolann-langholt-og-reyndar-alla-leikskola", :description=>I18n.t(:new_project_description_id_178), :name=>I18n.t(:new_project_name_id_178), :price=>2.0}
    @neighborhoods[8][:priorities] << {:id=>179, :letter=>"v", :link=>"http://betrireykjavik.is/ideas/2255-utigrill-i-laugardalinn", :description=>I18n.t(:new_project_description_id_179), :name=>I18n.t(:new_project_name_id_179), :price=>3.0}
    @neighborhoods[8][:priorities] << {:id=>180, :letter=>"w", :link=>"", :description=>I18n.t(:new_project_description_id_180), :name=>I18n.t(:new_project_name_id_180), :price=>2.0}
    @neighborhoods[8][:priorities] << {:id=>181, :letter=>"x", :link=>"", :description=>I18n.t(:new_project_description_id_181), :name=>I18n.t(:new_project_name_id_181), :price=>4.5}
    @neighborhoods[8][:priorities] << {:id=>182, :letter=>"y", :link=>"", :description=>I18n.t(:new_project_description_id_182), :name=>I18n.t(:new_project_name_id_182), :price=>2.0}
    @neighborhoods[8][:priorities] << {:id=>183, :letter=>"z", :link=>"", :description=>I18n.t(:new_project_description_id_183), :name=>I18n.t(:new_project_name_id_183), :price=>1.0}

    @neighborhoods[9][:priorities] << {:id=>184, :letter=>"a", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/1717-lagfaeringar-a-horni-bergstadastraetis-og-njardargotu", :description=>I18n.t(:new_project_description_id_184), :name=>I18n.t(:new_project_name_id_184), :price=>0.5}
    @neighborhoods[9][:priorities] << {:id=>185, :letter=>"b", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/1835-lagfaera-gatnamot-bergstadastraetis-og-spitalastigs", :description=>I18n.t(:new_project_description_id_185), :name=>I18n.t(:new_project_name_id_185), :price=>3.0}
    @neighborhoods[9][:priorities] << {:id=>186, :letter=>"c", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/1849-skreyttir-brandgaflar", :description=>I18n.t(:new_project_description_id_186), :name=>I18n.t(:new_project_name_id_186), :price=>2.0}
    @neighborhoods[9][:priorities] << {:id=>187, :letter=>"d", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/1871-frakkland", :description=>I18n.t(:new_project_description_id_187), :name=>I18n.t(:new_project_name_id_187), :price=>3.0}
    @neighborhoods[9][:priorities] << {:id=>188, :letter=>"e", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/1884-gangbraut-yfir-baronsstig-vid-enda-leifsgotu", :description=>I18n.t(:new_project_description_id_188), :name=>I18n.t(:new_project_name_id_188), :price=>3.0}
    @neighborhoods[9][:priorities] << {:id=>189, :letter=>"f", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/2054-gonguljos-a-baronsstig-vid-austurbaejarskola", :description=>I18n.t(:new_project_description_id_189), :name=>I18n.t(:new_project_name_id_189), :price=>12.0}
    @neighborhoods[9][:priorities] << {:id=>190, :letter=>"g", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/2055-aevintyraleikvoll-i-hljomskalagardinn", :description=>I18n.t(:new_project_description_id_190), :name=>I18n.t(:new_project_name_id_190), :price=>10.0}
    @neighborhoods[9][:priorities] << {:id=>191, :letter=>"h", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/2070-aparolu-hlaupakottur-a-skolalod-austurbaejarskola", :description=>I18n.t(:new_project_description_id_191), :name=>I18n.t(:new_project_name_id_191), :price=>4.0}
    @neighborhoods[9][:priorities] << {:id=>192, :letter=>"i", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/2083-betri-lysingu-a-gongustiginn-vid-innkeyrslubilastaedi-austurbaejarskola", :description=>I18n.t(:new_project_description_id_192), :name=>I18n.t(:new_project_name_id_192), :price=>2.0}
    @neighborhoods[9][:priorities] << {:id=>193, :letter=>"j", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/2140-setja-upp-girdingu-sem-skarast-vid-austurbaejarskola-bergthorugotumegin", :description=>I18n.t(:new_project_description_id_193), :name=>I18n.t(:new_project_name_id_193), :price=>1.0}
    @neighborhoods[9][:priorities] << {:id=>194, :letter=>"k", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/2192-almenningsklosett-i-hljomskalagardinn", :description=>I18n.t(:new_project_description_id_194), :name=>I18n.t(:new_project_name_id_194), :price=>3.0}
    @neighborhoods[9][:priorities] << {:id=>195, :letter=>"l", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/2279-gangbraut-hja-borgarbokasafninu-adalsafni", :description=>I18n.t(:new_project_description_id_195), :name=>I18n.t(:new_project_name_id_195), :price=>2.0}
    @neighborhoods[9][:priorities] << {:id=>196, :letter=>"m", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/ideas/2288-gera-litla-gardinn-fyrir-nedan-thorfinnsgotu-ad-notalegum-samverustad", :description=>I18n.t(:new_project_description_id_196), :name=>I18n.t(:new_project_name_id_196), :price=>4.0}
    @neighborhoods[9][:priorities] << {:id=>197, :letter=>"n", :link=>"http://betrireykjavik.is/ideas/1850-fleiri-ruslatunnur-i-101", :description=>I18n.t(:new_project_description_id_197), :name=>I18n.t(:new_project_name_id_197), :price=>2.0}
    @neighborhoods[9][:priorities] << {:id=>198, :letter=>"o", :link=>"http://betrireykjavik.is/ideas/2059-hljomskalagadur-nedan-bjarkargotu-endurreisn", :description=>I18n.t(:new_project_description_id_198), :name=>I18n.t(:new_project_name_id_198), :price=>3.0}
    @neighborhoods[9][:priorities] << {:id=>199, :letter=>"p", :link=>"", :description=>I18n.t(:new_project_description_id_199), :name=>I18n.t(:new_project_name_id_199), :price=>0.5}

    @neighborhoods[10][:priorities] << {:id=>200, :letter=>"a", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1725-likamsraekt-an-kostnadar", :description=>I18n.t(:new_project_description_id_200), :name=>I18n.t(:new_project_name_id_200), :price=>1.0}
    @neighborhoods[10][:priorities] << {:id=>201, :letter=>"b", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1746-endurbaeta-leikvollinn-blaa-rolo-a-horni-braedraborgarstigs-og-havallagotu", :description=>I18n.t(:new_project_description_id_201), :name=>I18n.t(:new_project_name_id_201), :price=>7.0}
    @neighborhoods[10][:priorities] << {:id=>202, :letter=>"c", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1751-setja-gonguljos-a-milli-seljavegs-vid-hedinshus-og-myrargotu", :description=>I18n.t(:new_project_description_id_202), :name=>I18n.t(:new_project_name_id_202), :price=>12.0}
    @neighborhoods[10][:priorities] << {:id=>203, :letter=>"d", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1769-korfuboltavollur", :description=>I18n.t(:new_project_description_id_203), :name=>I18n.t(:new_project_name_id_203), :price=>2.0}
    @neighborhoods[10][:priorities] << {:id=>204, :letter=>"e", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1774-gongustigur-fjallhagamilli-hagaborgar-og-brekkunar-vid-hjardarhaga", :description=>I18n.t(:new_project_description_id_204), :name=>I18n.t(:new_project_name_id_204), :price=>10.0}
    @neighborhoods[10][:priorities] << {:id=>205, :letter=>"f", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1775-endurnyjun-aspareits", :description=>I18n.t(:new_project_description_id_205), :name=>I18n.t(:new_project_name_id_205), :price=>1.0}
    @neighborhoods[10][:priorities] << {:id=>206, :letter=>"g", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1789-hreystivoll-i-vesturbaeinn-a-skolalod-hagaskola", :description=>I18n.t(:new_project_description_id_206), :name=>I18n.t(:new_project_name_id_206), :price=>5.0}
    @neighborhoods[10][:priorities] << {:id=>207, :letter=>"h", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1824-koma-upp-bekkjum-a-gatnamotum-furumels-og-hinna-melanna", :description=>I18n.t(:new_project_description_id_207), :name=>I18n.t(:new_project_name_id_207), :price=>0.5}
    @neighborhoods[10][:priorities] << {:id=>208, :letter=>"i", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1894-laga-leikvoll-a-milli-melhaga-og-neshaga-", :description=>I18n.t(:new_project_description_id_208), :name=>I18n.t(:new_project_name_id_208), :price=>8.0}
    @neighborhoods[10][:priorities] << {:id=>209, :letter=>"j", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1922-takmorkun-a-umferd-hunda-i-moa-og-fjoru-vid-aegisiduna", :description=>I18n.t(:new_project_description_id_209), :name=>I18n.t(:new_project_name_id_209), :price=>0.5}
    @neighborhoods[10][:priorities] << {:id=>210, :letter=>"k", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1925-ad-laga-gongustiginn-a-milli-solvallagotu-og-asvallagotu-", :description=>I18n.t(:new_project_description_id_210), :name=>I18n.t(:new_project_name_id_210), :price=>1.0}
    @neighborhoods[10][:priorities] << {:id=>211, :letter=>"l", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1949-malbika-stig-milli-tomasarhaga-og-lynghaga-vid-lynghagarolo", :description=>I18n.t(:new_project_description_id_211), :name=>I18n.t(:new_project_name_id_211), :price=>5.0}
    @neighborhoods[10][:priorities] << {:id=>212, :letter=>"m", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1952-birkimelur-gerdur-ad-30-km-hrada-gotu", :description=>I18n.t(:new_project_description_id_212), :name=>I18n.t(:new_project_name_id_212), :price=>20.0}
    @neighborhoods[10][:priorities] << {:id=>213, :letter=>"n", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1953-hradatakmarkanir-a-hjardarhaga", :description=>I18n.t(:new_project_description_id_213), :name=>I18n.t(:new_project_name_id_213), :price=>2.0}
    @neighborhoods[10][:priorities] << {:id=>214, :letter=>"o", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1956-snjobraedsla-vid-straetoskyli", :description=>I18n.t(:new_project_description_id_214), :name=>I18n.t(:new_project_name_id_214), :price=>3.0}
    @neighborhoods[10][:priorities] << {:id=>215, :letter=>"p", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1961-jolaskraut-i-vesturbae", :description=>I18n.t(:new_project_description_id_215), :name=>I18n.t(:new_project_name_id_215), :price=>3.0}
    @neighborhoods[10][:priorities] << {:id=>216, :letter=>"q", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/1962-sumarblom", :description=>I18n.t(:new_project_description_id_216), :name=>I18n.t(:new_project_name_id_216), :price=>0.8}
    @neighborhoods[10][:priorities] << {:id=>217, :letter=>"r", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/2030-fleiri-gangbrautir-og-hradahindranir-a-aegisgotu", :description=>I18n.t(:new_project_description_id_217), :name=>I18n.t(:new_project_name_id_217), :price=>3.0}
    @neighborhoods[10][:priorities] << {:id=>218, :letter=>"s", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/2057-ny-gangstett-vid-grandaveg", :description=>I18n.t(:new_project_description_id_218), :name=>I18n.t(:new_project_name_id_218), :price=>5.0}
    @neighborhoods[10][:priorities] << {:id=>219, :letter=>"t", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/2058-laga-gangstett-vestan-megin-a-kaplaskjolsvegi", :description=>I18n.t(:new_project_description_id_219), :name=>I18n.t(:new_project_name_id_219), :price=>10.0}
    @neighborhoods[10][:priorities] << {:id=>220, :letter=>"u", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/2077-lagfaera-gongustig-leiksvaedi-og-baeta-lysingu-milli-granaskjols-og-frostaskjols", :description=>I18n.t(:new_project_description_id_220), :name=>I18n.t(:new_project_name_id_220), :price=>10.0}
    @neighborhoods[10][:priorities] << {:id=>221, :letter=>"v", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/2081-halda-afram-uppbyggingu-a-lynghagaleikvellinum", :description=>I18n.t(:new_project_description_id_221), :name=>I18n.t(:new_project_name_id_221), :price=>3.0}
    @neighborhoods[10][:priorities] << {:id=>222, :letter=>"w", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/2108-lagfaera-utileiksvaedid-vid-keilugranda-1-grytuhusid-bodagranda-og-setja-upp-ljosastaura-a-svaedid-sem-er-i-gonguleid-barna-i-grandaskola", :description=>I18n.t(:new_project_description_id_222), :name=>I18n.t(:new_project_name_id_222), :price=>2.0}
    @neighborhoods[10][:priorities] << {:id=>223, :letter=>"x", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/2138-umferdarljos-yfir-ananaust", :description=>I18n.t(:new_project_description_id_223), :name=>I18n.t(:new_project_name_id_223), :price=>12.0}
    @neighborhoods[10][:priorities] << {:id=>224, :letter=>"y", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/2176-lysing-a-leikvelli-vid-bauganes-", :description=>I18n.t(:new_project_description_id_224), :name=>I18n.t(:new_project_name_id_224), :price=>1.0}
    @neighborhoods[10][:priorities] << {:id=>225, :letter=>"z", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/ideas/2178-litskrudugan-sjalfbaeran-grodur-i-vesturbaeinn", :description=>I18n.t(:new_project_description_id_225), :name=>I18n.t(:new_project_name_id_225), :price=>4.0}
    @neighborhoods[10][:priorities] << {:id=>226, :letter=>"0", :link=>"http://betrireykjavik.is/ideas/1767-sudurgatagangstett", :description=>I18n.t(:new_project_description_id_226), :name=>I18n.t(:new_project_name_id_226), :price=>15.0}
    @neighborhoods[10][:priorities] << {:id=>227, :letter=>"1", :link=>"http://betrireykjavik.is/ideas/1765-grasleppuskurar", :description=>I18n.t(:new_project_description_id_227), :name=>I18n.t(:new_project_name_id_227), :price=>2.0}
    @neighborhoods[10][:priorities] << {:id=>228, :letter=>"2", :link=>"http://betrireykjavik.is/ideas/2164-hradahindrun-a-furumel", :description=>I18n.t(:new_project_description_id_228), :name=>I18n.t(:new_project_name_id_228), :price=>3.0}
    @neighborhoods[10][:priorities] << {:id=>229, :letter=>"3", :link=>"http://betrireykjavik.is/ideas/2308-vistleg-gongleid-of-afdrep-i-kringum-landakotsspitala", :description=>I18n.t(:new_project_description_id_229), :name=>I18n.t(:new_project_name_id_229), :price=>3.0}
  end

  def get_neighborhood_budget(neighborhood_id)
    # Get the given neighborhood budget
    Rails.logger.debug("The id: #{neighborhood_id} #{self.neighborhoods.inspect} XXXX #{self.neighborhoods[neighborhood_id]}")
    (self.neighborhoods[neighborhood_id][:budget_amount].gsub(".","").to_f/"1.000.000".gsub(".","").to_f).round(1)
  end

  def get_neighborhood_name(neighborhood_id)
    # Get the given neighborhood budget
    self.neighborhoods[neighborhood_id][:name]
  end

  def get_priority_name(neighborhood_id, priority_id)
    # Get the given priority name
    Rails.logger.info("BLAH:#{neighborhood_id} #{priority_id}")
    name = nil
    all = self.neighborhoods[neighborhood_id][:priorities]
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
    all = self.neighborhoods[neighborhood_id][:priorities]
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
    all = self.neighborhoods[neighborhood_id][:priorities]
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
    all = self.neighborhoods[neighborhood_id][:priorities]
    all.each do |p|
      if p[:id]==priority_id
        name = p[:price]
        break
      end
    end
    name
  end
end