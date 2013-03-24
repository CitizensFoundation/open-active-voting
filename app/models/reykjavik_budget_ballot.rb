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
    self.neighborhoods[1] = { :id=>1 ,:name=>"Árbær",                       :budget_amount=>"13.534.046", :priorities=>[] }
    self.neighborhoods[2] = { :id=>2 ,:name=>"Breiðholt",                   :budget_amount=>"23.209.940", :priorities=>[]  }
    self.neighborhoods[3] = { :id=>3 ,:name=>"Grafarholt",                  :budget_amount=>"9.083.648", :priorities=>[]  }
    self.neighborhoods[4] = { :id=>4 ,:name=>"Grafarvogur",                 :budget_amount=>"20.768.909", :priorities=>[] }
    self.neighborhoods[5] = { :id=>5 ,:name=>"Háaleiti og Bústaðir",        :budget_amount=>"16.983.556", :priorities=>[]  }
    self.neighborhoods[6] = { :id=>6 ,:name=>"Hlíðar",                      :budget_amount=>"12.905.052", :priorities=>[]  }
    self.neighborhoods[7] = { :id=>7 ,:name=>"Kjalarnes",                   :budget_amount=>"4.543.122", :priorities=>[]  }
    self.neighborhoods[8] = { :id=>8 ,:name=>"Laugardalur",                 :budget_amount=>"18.308.904", :priorities=>[]  }
    self.neighborhoods[9] = { :id=>9 ,:name=>"Miðborg",                     :budget_amount=>"12.019.905", :priorities=>[] }
    self.neighborhoods[10] ={ :id=>10,:name=>"Vesturbær",                   :budget_amount=>"18.640.952", :priorities=>[]  }

    self.neighborhoods[1][:priorities] << {:id=>1, :letter=>"a", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/758-fleiri-minni-trjalundi-a-opnum-svaedum-nordlingaholti", :description=>I18n.t(:new_project_description_id_1), :name=>I18n.t(:new_project_name_id_1), :price=>3.0}
    self.neighborhoods[1][:priorities] << {:id=>2, :letter=>"b", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/921-hundagerdi-i-arbaenordlingaholt", :description=>I18n.t(:new_project_description_id_2), :name=>I18n.t(:new_project_name_id_2), :price=>2.5}
    self.neighborhoods[1][:priorities] << {:id=>3, :letter=>"c", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/735-mengunarvorn-vid-hofdaakka", :description=>I18n.t(:new_project_description_id_3), :name=>I18n.t(:new_project_name_id_3), :price=>1.0}
    self.neighborhoods[1][:priorities] << {:id=>4, :letter=>"d", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/828-grodursetja-runna-medfram-selasbraut-a-mots-vid-suduras", :description=>I18n.t(:new_project_description_id_4), :name=>I18n.t(:new_project_name_id_4), :price=>2.0}
    self.neighborhoods[1][:priorities] << {:id=>5, :letter=>"e", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/962-merkja-hvar-leikskolar-eru-i-hverfinu", :description=>I18n.t(:new_project_description_id_5), :name=>I18n.t(:new_project_name_id_5), :price=>0.3}
    self.neighborhoods[1][:priorities] << {:id=>6, :letter=>"f", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/759-oryggishindrun-vegna-barna-kringum-budatorg-nordlingaholti", :description=>I18n.t(:new_project_description_id_6), :name=>I18n.t(:new_project_name_id_6), :price=>1.0}
    self.neighborhoods[1][:priorities] << {:id=>7, :letter=>"g", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/760-hljodvarnir-gagnvart-umferdaraedum", :description=>I18n.t(:new_project_description_id_7), :name=>I18n.t(:new_project_name_id_7), :price=>1.5}
    self.neighborhoods[1][:priorities] << {:id=>8, :letter=>"h", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/842-notalegur-aningarstadur-vid-sundlaug-arbaejar", :description=>I18n.t(:new_project_description_id_8), :name=>I18n.t(:new_project_name_id_8), :price=>4.0}
    self.neighborhoods[1][:priorities] << {:id=>9, :letter=>"i", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/784-merkingar-i-ellidaardalnum", :description=>I18n.t(:new_project_description_id_9), :name=>I18n.t(:new_project_name_id_9), :price=>0.3}
    self.neighborhoods[1][:priorities] << {:id=>10, :letter=>"j", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/840-fjolskyldusvaedi-i-ellidaardalnum", :description=>I18n.t(:new_project_description_id_10), :name=>I18n.t(:new_project_name_id_10), :price=>2.0}
    self.neighborhoods[1][:priorities] << {:id=>11, :letter=>"k", :link=>"http://betri-hverfi-arbaer.betrireykjavik.is/priorities/1009-fleiri-vatnsbrunna-i-ellidardalnum", :description=>I18n.t(:new_project_description_id_11), :name=>I18n.t(:new_project_name_id_11), :price=>4.0}

    self.neighborhoods[2][:priorities] << {:id=>24, :letter=>"a", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/596-hundasvaedi", :description=>I18n.t(:new_project_description_id_24), :name=>I18n.t(:new_project_name_id_24), :price=>2.5}
    self.neighborhoods[2][:priorities] << {:id=>25, :letter=>"b", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/935-fuglaskilti-i-ellidaardal", :description=>I18n.t(:new_project_description_id_25), :name=>I18n.t(:new_project_name_id_25), :price=>1.0}
    self.neighborhoods[2][:priorities] << {:id=>26, :letter=>"c", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/1027-nattturulegan-leikvoll-vid-andapollinn-i-seljahverfi", :description=>I18n.t(:new_project_description_id_26), :name=>I18n.t(:new_project_name_id_26), :price=>1.0}
    self.neighborhoods[2][:priorities] << {:id=>27, :letter=>"d", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/860-torg-og-bilastaedi-a-audri-lod-milli-heidarsels-og-seljakirkj", :description=>I18n.t(:new_project_description_id_27), :name=>I18n.t(:new_project_name_id_27), :price=>1.0}
    self.neighborhoods[2][:priorities] << {:id=>28, :letter=>"e", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/880--gonguleid-medfram-arnarbakka-fra-ferjubakka-ad-blondubakka", :description=>I18n.t(:new_project_description_id_28), :name=>I18n.t(:new_project_name_id_28), :price=>11.0}
    self.neighborhoods[2][:priorities] << {:id=>29, :letter=>"f", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/884-lata-bidskyldur-og-gonguleidir-medfram-arnabakka-stangast-a", :description=>I18n.t(:new_project_description_id_29), :name=>I18n.t(:new_project_name_id_29), :price=>0.25}
    self.neighborhoods[2][:priorities] << {:id=>30, :letter=>"g", :link=>"http://betri-hverfi-breidholt.betrireykjavik.is/priorities/903-aefingataeki-i-bakkahverfi", :description=>I18n.t(:new_project_description_id_30), :name=>I18n.t(:new_project_name_id_30), :price=>2.0}
    self.neighborhoods[2][:priorities] << {:id=>31, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_31), :name=>I18n.t(:new_project_name_id_31), :price=>10.0}
    self.neighborhoods[2][:priorities] << {:id=>32, :letter=>"i", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_32), :name=>I18n.t(:new_project_name_id_32), :price=>2.0}
    self.neighborhoods[2][:priorities] << {:id=>33, :letter=>"j", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_33), :name=>I18n.t(:new_project_name_id_33), :price=>5.0}

    self.neighborhoods[3][:priorities] << {:id=>42, :letter=>"a", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/priorities/636-planta-trjam-a-opin-svaedi-i-hverfinu", :description=>I18n.t(:new_project_description_id_42), :name=>I18n.t(:new_project_name_id_42), :price=>3.0}
    self.neighborhoods[3][:priorities] << {:id=>43, :letter=>"b", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/priorities/1046-tengja-gongustig-vid-nonas-vid-gongustig-kringum-reynisvatn", :description=>I18n.t(:new_project_description_id_43), :name=>I18n.t(:new_project_name_id_43), :price=>7.0}
    self.neighborhoods[3][:priorities] << {:id=>44, :letter=>"c", :link=>"http://betri-hverfi-grafarholt.betrireykjavik.is/priorities/892-baett-adstada-vid-dalskola", :description=>I18n.t(:new_project_description_id_44), :name=>I18n.t(:new_project_name_id_44), :price=>4.0}
    self.neighborhoods[3][:priorities] << {:id=>45, :letter=>"d", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_45), :name=>I18n.t(:new_project_name_id_45), :price=>9.0}
    self.neighborhoods[3][:priorities] << {:id=>46, :letter=>"e", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_46), :name=>I18n.t(:new_project_name_id_46), :price=>0.5}

    self.neighborhoods[4][:priorities] << {:id=>54, :letter=>"a", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/612-slysahaetta-a-gongustigum-i-stadarhverfi-vid-golfbrautir-", :description=>I18n.t(:new_project_description_id_54), :name=>I18n.t(:new_project_name_id_54), :price=>2.5}
    self.neighborhoods[4][:priorities] << {:id=>55, :letter=>"b", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/893-malbika-gongustiginn-fra-hamrahverfi-ad-gufunesbae", :description=>I18n.t(:new_project_description_id_55), :name=>I18n.t(:new_project_name_id_55), :price=>8.0}
    self.neighborhoods[4][:priorities] << {:id=>56, :letter=>"c", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/837-parkour-leikvollur", :description=>I18n.t(:new_project_description_id_56), :name=>I18n.t(:new_project_name_id_56), :price=>10.0}
    self.neighborhoods[4][:priorities] << {:id=>57, :letter=>"d", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/939-leiksvaedi-fyrir-alla-born-og-fullordna", :description=>I18n.t(:new_project_description_id_57), :name=>I18n.t(:new_project_name_id_57), :price=>5.0}
    self.neighborhoods[4][:priorities] << {:id=>58, :letter=>"e", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/873-vaeri-gott-ad-fa-einhverja-vatnshana-a-gongustiga-i-grafarvog", :description=>I18n.t(:new_project_description_id_58), :name=>I18n.t(:new_project_name_id_58), :price=>4.0}
    self.neighborhoods[4][:priorities] << {:id=>59, :letter=>"f", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/988-byr-ad-bardastodum-25-svaedid-vid-hlidina-a-husinu-er-autt-", :description=>I18n.t(:new_project_description_id_59), :name=>I18n.t(:new_project_name_id_59), :price=>1.0}
    self.neighborhoods[4][:priorities] << {:id=>60, :letter=>"g", :link=>"http://betri-hverfi-grafarvogur.betrireykjavik.is/priorities/971-malbika-gongustig-fra-grafarvogsbotni-og-upp-ad-vogi", :description=>I18n.t(:new_project_description_id_60), :name=>I18n.t(:new_project_name_id_60), :price=>12.0}
    self.neighborhoods[4][:priorities] << {:id=>61, :letter=>"h", :link=>"http://betrireykjavik.is/priorities/789-stigagerd-ithrottabrautirtir-og-tengingar-vid-gufunesbae", :description=>I18n.t(:new_project_description_id_61), :name=>I18n.t(:new_project_name_id_61), :price=>3.0}
    self.neighborhoods[4][:priorities] << {:id=>62, :letter=>"i", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_62), :name=>I18n.t(:new_project_name_id_62), :price=>3.5}
    self.neighborhoods[4][:priorities] << {:id=>63, :letter=>"j", :link=>"http://www.betrireykjavik.is/points/2075-gongustigur-fra-grafarvogi-yfir-i-korputorg", :description=>I18n.t(:new_project_description_id_63), :name=>I18n.t(:new_project_name_id_63), :price=>12.0}

    self.neighborhoods[5][:priorities] << {:id=>76, :letter=>"a", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/priorities/879-gangbrautgangbrautarmerki-i-breidagerdid", :description=>I18n.t(:new_project_description_id_76), :name=>I18n.t(:new_project_name_id_76), :price=>2.0}
    self.neighborhoods[5][:priorities] << {:id=>77, :letter=>"b", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/priorities/989-laga-austanverdan-fossvogsdal", :description=>I18n.t(:new_project_description_id_77), :name=>I18n.t(:new_project_name_id_77), :price=>2.0}
    self.neighborhoods[5][:priorities] << {:id=>78, :letter=>"c", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/priorities/630-utikennslustofu-i-grundargerdisgard", :description=>I18n.t(:new_project_description_id_78), :name=>I18n.t(:new_project_name_id_78), :price=>1.5}
    self.neighborhoods[5][:priorities] << {:id=>79, :letter=>"d", :link=>"http://betri-hverfi-haaleiti.betrireykjavik.is/priorities/833-malbikun-gongustigs", :description=>I18n.t(:new_project_description_id_79), :name=>I18n.t(:new_project_name_id_79), :price=>1.5}
    self.neighborhoods[5][:priorities] << {:id=>80, :letter=>"e", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_80), :name=>I18n.t(:new_project_name_id_80), :price=>1.0}
    self.neighborhoods[5][:priorities] << {:id=>81, :letter=>"f", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_81), :name=>I18n.t(:new_project_name_id_81), :price=>5.0}
    self.neighborhoods[5][:priorities] << {:id=>82, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_82), :name=>I18n.t(:new_project_name_id_82), :price=>3.5}
    self.neighborhoods[5][:priorities] << {:id=>83, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_83), :name=>I18n.t(:new_project_name_id_83), :price=>5.0}

    self.neighborhoods[6][:priorities] << {:id=>95, :letter=>"a", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/priorities/820-fallegan-og-skjolgodan-leikvoll-a-klambratun", :description=>I18n.t(:new_project_description_id_95), :name=>I18n.t(:new_project_name_id_95), :price=>6.0}
    self.neighborhoods[6][:priorities] << {:id=>96, :letter=>"b", :link=>"http://betri-hverfi-hlidar.betrireykjavik.is/priorities/925-hundagerdi-a-klambratuni", :description=>I18n.t(:new_project_description_id_96), :name=>I18n.t(:new_project_name_id_96), :price=>2.5}
    self.neighborhoods[6][:priorities] << {:id=>97, :letter=>"c", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_97), :name=>I18n.t(:new_project_name_id_97), :price=>4.0}
    self.neighborhoods[6][:priorities] << {:id=>98, :letter=>"d", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_98), :name=>I18n.t(:new_project_name_id_98), :price=>2.0}
    self.neighborhoods[6][:priorities] << {:id=>99, :letter=>"e", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_99), :name=>I18n.t(:new_project_name_id_99), :price=>7.0}

    self.neighborhoods[7][:priorities] << {:id=>105, :letter=>"a", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_105), :name=>I18n.t(:new_project_name_id_105), :price=>1.5}
    self.neighborhoods[7][:priorities] << {:id=>106, :letter=>"b", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_106), :name=>I18n.t(:new_project_name_id_106), :price=>1.0}
    self.neighborhoods[7][:priorities] << {:id=>107, :letter=>"c", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_107), :name=>I18n.t(:new_project_name_id_107), :price=>0.5}
    self.neighborhoods[7][:priorities] << {:id=>108, :letter=>"d", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_108), :name=>I18n.t(:new_project_name_id_108), :price=>0.5}
    self.neighborhoods[7][:priorities] << {:id=>109, :letter=>"e", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_109), :name=>I18n.t(:new_project_name_id_109), :price=>4.0}
    self.neighborhoods[7][:priorities] << {:id=>110, :letter=>"f", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_110), :name=>I18n.t(:new_project_name_id_110), :price=>1.0}
    self.neighborhoods[7][:priorities] << {:id=>111, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_111), :name=>I18n.t(:new_project_name_id_111), :price=>2.5}
    self.neighborhoods[7][:priorities] << {:id=>112, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_112), :name=>I18n.t(:new_project_name_id_112), :price=>0.3}

    self.neighborhoods[8][:priorities] << {:id=>121, :letter=>"a", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/862-matjurtagard-vid-gamla-throttaravollinn-saevidarsundi", :description=>I18n.t(:new_project_description_id_121), :name=>I18n.t(:new_project_name_id_121), :price=>1.0}
    self.neighborhoods[8][:priorities] << {:id=>122, :letter=>"b", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/843-hundagerdi-i-laugardalnum", :description=>I18n.t(:new_project_description_id_122), :name=>I18n.t(:new_project_name_id_122), :price=>2.5}
    self.neighborhoods[8][:priorities] << {:id=>123, :letter=>"c", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1125-utiadstada-fyrir-alla-fjolskylduna-i-laugardalinn", :description=>I18n.t(:new_project_description_id_123), :name=>I18n.t(:new_project_name_id_123), :price=>2.5}
    self.neighborhoods[8][:priorities] << {:id=>124, :letter=>"d", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/914-gonguljos-vid-gatnamotin-a-hofteig-og-reykjaveg", :description=>I18n.t(:new_project_description_id_124), :name=>I18n.t(:new_project_name_id_124), :price=>11.0}
    self.neighborhoods[8][:priorities] << {:id=>125, :letter=>"e", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1119-baeta-tengingu-langholtsvegar-vid-hjolreidastigin-vid-saebraut", :description=>I18n.t(:new_project_description_id_125), :name=>I18n.t(:new_project_name_id_125), :price=>1.5}
    self.neighborhoods[8][:priorities] << {:id=>126, :letter=>"f", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1010-gonguljos-og-lysing-vid-gatnamot-kirkjuteigs-og-reykjavegar", :description=>I18n.t(:new_project_description_id_126), :name=>I18n.t(:new_project_name_id_126), :price=>11.0}
    self.neighborhoods[8][:priorities] << {:id=>127, :letter=>"g", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/812-setja-upp-korfur-a-malbikudum-velli-sem-er-a-bakvid-drekavog", :description=>I18n.t(:new_project_description_id_127), :name=>I18n.t(:new_project_name_id_127), :price=>0.5}
    self.neighborhoods[8][:priorities] << {:id=>128, :letter=>"h", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1102-honnunarsmidja-vegna-torgs-a-motum-skeidarvogs-og-gnodarvogs", :description=>I18n.t(:new_project_description_id_128), :name=>I18n.t(:new_project_name_id_128), :price=>1.0}
    self.neighborhoods[8][:priorities] << {:id=>129, :letter=>"i", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1034-baett-lysing-a-horni-skeidarvogs-og-solheima", :description=>I18n.t(:new_project_description_id_129), :name=>I18n.t(:new_project_name_id_129), :price=>0.3}
    self.neighborhoods[8][:priorities] << {:id=>130, :letter=>"j", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_130), :name=>I18n.t(:new_project_name_id_130), :price=>1.0}
    self.neighborhoods[8][:priorities] << {:id=>131, :letter=>"k", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_131), :name=>I18n.t(:new_project_name_id_131), :price=>3.5}
    self.neighborhoods[8][:priorities] << {:id=>132, :letter=>"l", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_132), :name=>I18n.t(:new_project_name_id_132), :price=>2.5}
    self.neighborhoods[8][:priorities] << {:id=>133, :letter=>"m", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_133), :name=>I18n.t(:new_project_name_id_133), :price=>5.0}
    self.neighborhoods[8][:priorities] << {:id=>134, :letter=>"n", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/862-matjurtagard-vid-gamla-throttaravollinn-saevidarsundi", :description=>I18n.t(:new_project_description_id_121), :name=>I18n.t(:new_project_name_id_121), :price=>1.0}
    self.neighborhoods[8][:priorities] << {:id=>135, :letter=>"o", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/843-hundagerdi-i-laugardalnum", :description=>I18n.t(:new_project_description_id_122), :name=>I18n.t(:new_project_name_id_122), :price=>2.5}
    self.neighborhoods[8][:priorities] << {:id=>136, :letter=>"p", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1125-utiadstada-fyrir-alla-fjolskylduna-i-laugardalinn", :description=>I18n.t(:new_project_description_id_123), :name=>I18n.t(:new_project_name_id_123), :price=>2.5}
    self.neighborhoods[8][:priorities] << {:id=>137, :letter=>"q", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/914-gonguljos-vid-gatnamotin-a-hofteig-og-reykjaveg", :description=>I18n.t(:new_project_description_id_124), :name=>I18n.t(:new_project_name_id_124), :price=>11.0}
    self.neighborhoods[8][:priorities] << {:id=>135, :letter=>"r", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/843-hundagerdi-i-laugardalnum", :description=>I18n.t(:new_project_description_id_122), :name=>I18n.t(:new_project_name_id_122), :price=>2.5}
    self.neighborhoods[8][:priorities] << {:id=>136, :letter=>"s", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1125-utiadstada-fyrir-alla-fjolskylduna-i-laugardalinn", :description=>I18n.t(:new_project_description_id_123), :name=>I18n.t(:new_project_name_id_123), :price=>2.5}
    self.neighborhoods[8][:priorities] << {:id=>137, :letter=>"t", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/914-gonguljos-vid-gatnamotin-a-hofteig-og-reykjaveg", :description=>I18n.t(:new_project_description_id_124), :name=>I18n.t(:new_project_name_id_124), :price=>11.0}
    self.neighborhoods[8][:priorities] << {:id=>139, :letter=>"u", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1119-baeta-tengingu-langholtsvegar-vid-hjolreidastigin-vid-saebraut", :description=>I18n.t(:new_project_description_id_125), :name=>I18n.t(:new_project_name_id_125), :price=>1.5}
    self.neighborhoods[8][:priorities] << {:id=>140, :letter=>"v", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1010-gonguljos-og-lysing-vid-gatnamot-kirkjuteigs-og-reykjavegar", :description=>I18n.t(:new_project_description_id_126), :name=>I18n.t(:new_project_name_id_126), :price=>11.0}
    self.neighborhoods[8][:priorities] << {:id=>141, :letter=>"w", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/812-setja-upp-korfur-a-malbikudum-velli-sem-er-a-bakvid-drekavog", :description=>I18n.t(:new_project_description_id_127), :name=>I18n.t(:new_project_name_id_127), :price=>0.5}
    self.neighborhoods[8][:priorities] << {:id=>142, :letter=>"x", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1102-honnunarsmidja-vegna-torgs-a-motum-skeidarvogs-og-gnodarvogs", :description=>I18n.t(:new_project_description_id_128), :name=>I18n.t(:new_project_name_id_128), :price=>1.0}
    self.neighborhoods[8][:priorities] << {:id=>143, :letter=>"z", :link=>"http://betri-hverfi-laugardalur.betrireykjavik.is/priorities/1034-baett-lysing-a-horni-skeidarvogs-og-solheima", :description=>I18n.t(:new_project_description_id_129), :name=>I18n.t(:new_project_name_id_129), :price=>0.3}
    self.neighborhoods[8][:priorities] << {:id=>143, :letter=>"0", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_130), :name=>I18n.t(:new_project_name_id_130), :price=>1.0}
    self.neighborhoods[8][:priorities] << {:id=>144, :letter=>"1", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_131), :name=>I18n.t(:new_project_name_id_131), :price=>3.5}
    self.neighborhoods[8][:priorities] << {:id=>145, :letter=>"2", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_132), :name=>I18n.t(:new_project_name_id_132), :price=>2.5}
    self.neighborhoods[8][:priorities] << {:id=>146, :letter=>"3", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_133), :name=>I18n.t(:new_project_name_id_133), :price=>5.0}

    self.neighborhoods[9][:priorities] << {:id=>147, :letter=>"a", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/priorities/714-hundaleiksvaedi-i-nagrenni-vid-midbaeinn", :description=>I18n.t(:new_project_description_id_147), :name=>I18n.t(:new_project_name_id_147), :price=>2.5}
    self.neighborhoods[9][:priorities] << {:id=>148, :letter=>"b", :link=>"http://betri-hverfi-midborg.betrireykjavik.is/priorities/1113-gangstettir-nedst-a-frakkastig-og-klapparstig", :description=>I18n.t(:new_project_description_id_148), :name=>I18n.t(:new_project_name_id_148), :price=>2.5}
    self.neighborhoods[9][:priorities] << {:id=>149, :letter=>"c", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_149), :name=>I18n.t(:new_project_name_id_149), :price=>2.0}
    self.neighborhoods[9][:priorities] << {:id=>150, :letter=>"d", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_150), :name=>I18n.t(:new_project_name_id_150), :price=>7.5}

    self.neighborhoods[10][:priorities] << {:id=>161, :letter=>"a", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/priorities/619-nyta-gardinn-vid-vesturbaejarsundlaug", :description=>I18n.t(:new_project_description_id_161), :name=>I18n.t(:new_project_name_id_161), :price=>4.0}
    self.neighborhoods[10][:priorities] << {:id=>162, :letter=>"b", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/priorities/733-threp-mhandridi-nidur-i-fjoru-a-23-stodum-veidisgranda", :description=>I18n.t(:new_project_description_id_162), :name=>I18n.t(:new_project_name_id_162), :price=>2.0}
    self.neighborhoods[10][:priorities] << {:id=>163, :letter=>"c", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/priorities/717-bua-til-threp-nidur-i-fjoru-i-skerjafirdi-vid-shell-itr-", :description=>I18n.t(:new_project_description_id_163), :name=>I18n.t(:new_project_name_id_163), :price=>1.0}
    self.neighborhoods[10][:priorities] << {:id=>164, :letter=>"d", :link=>"http://betri-hverfi-vesturbaer.betrireykjavik.is/priorities/597-betri-adgangur-gangandi-og-hjolandi-yfir-a-fiskislod", :description=>I18n.t(:new_project_description_id_164), :name=>I18n.t(:new_project_name_id_164), :price=>3.0}
    self.neighborhoods[10][:priorities] << {:id=>165, :letter=>"e", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_165), :name=>I18n.t(:new_project_name_id_165), :price=>5.0}
    self.neighborhoods[10][:priorities] << {:id=>166, :letter=>"f", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_166), :name=>I18n.t(:new_project_name_id_166), :price=>1.0}
    self.neighborhoods[10][:priorities] << {:id=>167, :letter=>"g", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_167), :name=>I18n.t(:new_project_name_id_167), :price=>5.0}
    self.neighborhoods[10][:priorities] << {:id=>168, :letter=>"h", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_168), :name=>I18n.t(:new_project_name_id_168), :price=>1.0}
    self.neighborhoods[10][:priorities] << {:id=>169, :letter=>"i", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_169), :name=>I18n.t(:new_project_name_id_169), :price=>1.5}
    self.neighborhoods[10][:priorities] << {:id=>170, :letter=>"j", :link=>"-- no Hyperlink --", :description=>I18n.t(:new_project_description_id_170), :name=>I18n.t(:new_project_name_id_170), :price=>2.0}
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