define(["./oav-app.js"],function(_oavApp){"use strict";class OavSelectVotingArea extends _oavApp.PageViewElement{static get properties(){return{configFromServer:{type:Object},hasLoadedCss:Boolean}}static get styles(){return[_oavApp.OavShadowStyles,_oavApp.OavFlexLayout]}b64DecodeUnicode(str){return decodeURIComponent(atob(str).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join(""))}renderX(){if(this.hasLoadedCss){return _oavApp.html$1`${this.wide?_oavApp.html$1`${(0,_oavApp.unsafeHTML)(this.setupHTMLText(this.configFromServer.client_config.selectVotingAreaDesktopHTML))}`:_oavApp.html$1`${(0,_oavApp.unsafeHTML)(this.setupHTMLText(this.configFromServer.client_config.selectVotingAreaMobileHTML))}`}`}else{return _oavApp.html$1``}}render(){if(this.hasLoadedCss){return _oavApp.html$1`${this.wide?_oavApp.html$1`${(0,_oavApp.unsafeHTML)(this.replaceInHTMLText(this.testHtml()))}`:_oavApp.html$1`${(0,_oavApp.unsafeHTML)(this.setupHTMLText(this.configFromServer.client_config.selectVotingAreaMobileHTML))}`}`}else{return _oavApp.html$1``}}testHtml(){return`
    <style>
  .selectedLanguage {
    text-decoration: underline;
  }

  @media (max-width: 940px) {
    .infoImageContainer {
      display: none;
    }
  }

  .topMaterial {
    width: 400px;
    height: 225px;
    background-color: #fff;
    margin: 16px 32px 16px 16px;
    display: block;
    position: relative;
  }

  .imageContainer {
    width: 100%;
    background-size: 1920px 280px;
    background-repeat: repeat;
    background-position: center;
    background-position-y: top;
    background-image: url("https://yrpri-eu-direct-assets.s3-eu-west-1.amazonaws.com/hm2021/hm2018-1920x300-bg-2xV5.png");
  }

  @media (max-width: 800px) {
    .imageContainer {
      background-image: none;
      background-color: #f0f0f0;
    }
  }

  .selectInfoTextSmaller {
    font-size: 17px;
    padding: 8px;
    padding-bottom: 8px;
    padding-top: 12px;
    margin-top: 0;
    color: #222;
  }

  .areaOptions {
    margin-top: 32px;
    background-color: #fff;
    display: block;
    position: relative;
    max-width: 882px;
    margin-left: auto;
    margin-right: auto;
  }

  .voteNumberForVesturbaer {
    position: absolute;
    top: 244px;
    right: 746px;
    color: #727477;
  }

  .voteNumberForMidborg {
    position: absolute;
    top: 356px;
    right: 662px;
    color: #296d80;
  }

  .voteNumberForHlidar {
    position: absolute;
    top: 196px;
    right: 516px;
    color: #806b2c;
  }

  .voteNumberForHaaleiti {
    position: absolute;
    top: 332px;
    left: 546px;
    color: #80475a;
  }

  .voteNumberForLaugardalur {
    position: absolute;
    top: 160px;
    right: 444px;
    color: #013b70;
  }

  .voteNumberForBreidholt {
    position: absolute;
    bottom: 22px;
    left: 648px;
    color: #6c1118;
  }

  .voteNumberForArbaer {
    position: absolute;
    bottom: 110px;
    left: 728px;
    color: #0a662b;
  }

  .voteNumberForGrafarvogur {
    position: absolute;
    top: 175px;
    left: 620px;
    color: #d8222f;
    direction: ltr;
  }

  .voteNumberForGrafarholt {
    position: absolute;
    bottom: 138px;
    left: 765px;
    color: #805737;
  }

  .voteNumberForKjalarnes {
    position: absolute;
    top: 32px;
    right: 358px;
    color: #525e7f;
  }

  .voteNumberGeneral {
    padding-left: 4px;
    font-size: 15px;
    font-family: Esja;
  }

  .checkIcon {
    width: 40px;
    height: 40px;
  }

  .checkIconMain {
    width: 33px;
    height: 33px;
  }

  @media (max-width: 1023px) {
    .selectInfoTextSmaller {
      font-size: 18px;
    }
  }

  .totalVoters {
    position: absolute;
    bottom: 4px;
    right: 8px;
    color: #888;
  }

  .totalVoterIcon {
    width: 32px;
    height: 32px;
  }

  .totalVoterCount {
    font-size: 19px;
    padding-top: 2px;
    padding-left: 2px;
  }

  .langSelection {
    position: absolute;
    bottom: 8px;
    left: 8px;
    cursor: pointer;
    font-style: italic;
    font-size: 15px;
  }

  .language {
    padding-right: 6px;
  }

  .desktopLogo {
    width: 100%;
    height: 120px;
  }

  .logoHolder {
    background-color: #013b70;
  }

  .areaOptions a {
    text-decoration: none;
  }

  .language {
    text-decoration: underline;
  }
</style>

<div style="display: block">
  <div class="layout vertical imageContainer" style="">
    <div
      class="layout horizontal center-center"
      style="width: 882px; margin-left: auto; margin-right: auto"
    >
      <div
        class="shadow-elevation-3dp topMaterial"
        style="width: 400px !important"
      >
        <div
          class="logoHolder layout horizontal center-center"
          style="width: 400px !important"
        >
          <img
            sizing="contain"
            class="desktopLogo"
            src="https://yrpri-eu-direct-assets.s3-eu-west-1.amazonaws.com/hm2018-400x120-logo-2xV3.png"
          />
        </div>
        <div class="selectInfoTextSmaller">ZZZchoose_a_neighbourhood_2ZZZ</div>
        <div
          class="langSelection layout horizontal"
          id="languageSelection"
          style="color: #000"
        >
          <div class="language" id="isLanguage">Íslenska</div>
          <div class="language" id="enLanguage">English</div>
          <div class="language" id="plLanguage">Polska</div>
        </div>
        <div
          title$="ZZZnumber_of_votersZZZ"
          class="totalVoters layout horizontal"
        >
          <iron-icon class="totalVoterIcon" icon="verified-user"></iron-icon>
          <div class="totalVoterCount">ZZZtotalVoterCountZZZ</div>
        </div>
      </div>

      <div class="shadow-elevation-3dp topMaterial infoImageContainer">
        <video
          id="video"
          width="400"
          height="225"
          controls
          style="outline: none"
        >
          <source
            src="https://efni.hvitahusid.is/Reykjavik/hverfidMitt/hverfakosning_2019/video/rvk-hverfidmitt-hverfakosning2019-1920x1080-19sek-01.mp4"
            type="video/mp4"
          />
          Þinn vafri styður ekki myndbönd.
        </video>
      </div>
    </div>
  </div>

  <div class="areaOptions shadow-elevation-6dp layout vertical center-center">
    <img
      id="imageMap"
      src="https://yrpri-eu-direct-assets.s3-eu-west-1.amazonaws.com/hm2021/Rvik_kort_9b.png"
      border="0"
      width="882"
      height="597"
      orgWidth="686"
      orgHeight="550"
      usemap="#image-maps-2016-08-04-135857"
      alt=""
    />
    <map
      name="image-maps-2016-08-04-135857"
      id="ImageMapsCom-image-maps-2016-08-04-135857"
    >
      <area
        alt="Árbær"
        title="Árbær"
        href="/area-ballot/1"
        shape="poly"
        coords="555,376,580,368,607,363,623,364,634,364,644,370,694,404,697,427,698,442,700,463,703,473,712,484,729,502,733,515,735,527,701,543,686,543,670,533,668,522,667,512,666,493,661,479,643,460,629,454,621,449,598,437,584,434,569,430,557,425,549,421,541,416,541,404,541,389"
        style="outline: none"
        target="_self"
      />
      <area
        alt="Breiðholt"
        title="Breiðholt"
        href="/area-ballot/2"
        shape="poly"
        coords="530,429,516,482,506,493,495,500,485,505,479,509,477,518,481,529,487,543,496,554,509,567,523,577,535,582,549,582,558,579,566,575,573,571,581,567,586,564,597,559,608,557,615,553,617,548,621,537,625,527,629,520,632,513,640,506,645,498,650,488,650,477,647,467,634,461,613,448,585,438,560,431,545,425"
        style="outline: none"
        target="_self"
      />
      <area
        alt="Grafarholt og Úlfarsdalur"
        title="Grafarholt og Úlfarsdalur"
        href="/area-ballot/3"
        shape="poly"
        coords="773,268,766,285,762,299,758,309,754,320,748,334,744,345,736,355,727,363,719,367,716,372,715,382,722,391,730,401,741,403,750,406,760,407,781,408,788,409,817,423,831,424,845,423,851,415,857,407,863,396,866,386,865,371,863,358,856,346,844,333,838,322,827,310,821,295,812,282,802,271,794,267,784,265"
        style="outline: none"
        target="_self"
      />
      <area
        alt="Grafarvogur"
        title="Grafarvogur"
        href="/area-ballot/4"
        shape="poly"
        coords="596,259,590,239,594,226,604,217,614,213,625,211,642,209,656,205,675,199,688,199,700,202,712,207,731,213,772,188,787,189,786,209,766,257,763,278,761,289,744,332,727,355,707,368,697,371,679,369,648,358,595,325,589,316,584,306,581,291"
        style="outline: none"
        target="_self"
      />
      <area
        alt="Háaleiti og Bústaðir"
        title="Háaleiti og Bústaðir"
        href="/area-ballot/5"
        shape="poly"
        coords="411,299,405,306,402,315,397,327,394,337,391,349,390,359,389,371,390,384,390,398,388,411,391,420,400,422,486,445,511,444,524,435,530,420,534,396,533,384,529,377,485,356,468,339,446,307,440,298,426,296"
        style="outline: none"
        target="_self"
      />
      <area
        alt="Hlíðar"
        title="Hlíðar"
        href="/area-ballot/6"
        shape="poly"
        coords="353,247,364,243,375,241,388,240,402,240,411,246,412,257,413,270,412,285,410,290,408,299,404,303,399,311,395,318,391,327,389,336,389,347,387,355,388,366,386,377,386,391,386,411,383,415,315,403,318,395,324,384,325,372,324,359,321,348,320,328,321,318,328,307,335,298,342,291,340,279"
        style="outline: none"
        target="_self"
      />
      <area
        alt="Kjalarnes"
        title="Kjalarnes"
        href="/area-ballot/7"
        shape="poly"
        coords="526,1,525,12,533,20,543,20,556,23,564,28,571,39,567,53,570,70,583,76,596,68,630,38,661,39,676,24,684,0"
        style="outline: none"
        target="_self"
      />
      <area
        alt="Laugardalur"
        title="Laugardalur"
        href="/area-ballot/8"
        shape="poly"
        coords="414,290,415,283,416,276,416,263,414,251,411,238,421,212,430,206,443,202,483,196,494,200,509,222,503,233,512,239,521,234,533,234,553,254,556,272,557,291,553,309,548,328,540,341,531,349,520,357,504,358,489,354,476,343,463,326,455,313,448,303,433,294"
        style="outline: none"
        target="_self"
      />
      <area
        alt="Miðborg"
        title="Miðborg"
        href="/area-ballot/9"
        shape="poly"
        coords="281,215,270,249,272,278,276,293,276,305,271,318,262,330,255,342,245,349,240,357,245,366,258,376,269,380,283,397,298,402,313,397,319,392,320,380,317,354,315,334,317,316,321,309,332,298,342,283,347,263,347,254,346,250,311,218,295,220"
        style="outline: none"
        target="_self"
      />
      <area
        alt="Vesturbær"
        title="Vesturbær"
        href="/area-ballot/10"
        shape="poly"
        coords="153,227,177,205,213,213,238,209,249,199,244,189,246,181,254,174,261,171,267,166,275,159,279,153,290,152,301,158,298,184,271,204,281,213,276,222,270,238,269,261,273,286,273,305,268,315,259,328,249,339,241,350,235,352,231,349,229,334,222,318,217,303,212,284,188,260"
        style="outline: none"
        target="_self"
      />
    </map>
    <a href="/area-ballot/1" class="voteNumberForArbaer">
      <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
        <div class="voteNumberGeneral">ZZZareaCount1ZZZ</div>
      </div>
    </a>
    <a href="/area-ballot/2" class="voteNumberForBreidholt">
      <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
        <div class="voteNumberGeneral">ZZZareaCount2ZZZ</div>
      </div>
    </a>
    <a href="/area-ballot/3" class="voteNumberForGrafarholt">
      <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
        <div class="voteNumberGeneral">ZZZareaCount3ZZZ</div>
      </div>
    </a>
    <a href="/area-ballot/4" class="voteNumberForGrafarvogur">
      <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
        <div class="voteNumberGeneral">ZZZareaCount4ZZZ</div>
      </div>
    </a>
    <a href="/area-ballot/5" class="voteNumberForHaaleiti">
      <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
        <div class="voteNumberGeneral">ZZZareaCount5ZZZ</div>
      </div>
    </a>
    <a href="/area-ballot/6" class="voteNumberForHlidar">
      <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
        <div class="voteNumberGeneral">ZZZareaCount6ZZZ</div>
      </div>
    </a>
    <a href="/area-ballot/7" class="voteNumberForKjalarnes">
      <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
        <div class="voteNumberGeneral">ZZZareaCount7ZZZ</div>
      </div>
    </a>
    <a href="/area-ballot/8" class="voteNumberForLaugardalur">
      <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
        <div class="voteNumberGeneral">ZZZareaCount8ZZZ</div>
      </div>
    </a>
    <a href="/area-ballot/9" class="voteNumberForMidborg">
      <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
        <div class="voteNumberGeneral">ZZZareaCount9ZZZ</div>
      </div>
    </a>
    <a href="/area-ballot/10" class="voteNumberForVesturbaer">
      <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
        <div class="voteNumberGeneral" style="direction: rtl">
          ZZZareaCount10ZZZ
        </div>
      </div>
    </a>
  </div>
  <div
    class="layout horizontal center-center"
    style="width: 32px; margin-left: auto; margin-right: auto"
  >
    <paper-share-button
      style="margin-top: 16px; color: #fff; text-align: center"
      class="shareIcon"
      horizontal-align="left"
      id="shareButton"
      url="https://kosning2021.reykjavik.is/"
      title="Share"
      facebook
      twitter
      popup
      .url="/"
    >
    </paper-share-button>
  </div>
</div>



    `}renderText(){if(this.hasLoadedCss){return _oavApp.html$1`${(0,_oavApp.unsafeHTML)(this.setupHTMLText(this.getText()))}`}else{return _oavApp.html$1``}}getText(){return`


    `}setupHTMLText(text){text=this.b64DecodeUnicode(text);return this.replaceInHTMLText(text)}replaceInHTMLText(text){var _Mathfloor=Math.floor;this.configFromServer.areas.forEach(area=>{let voterCount=0;if(this.configFromServer.area_voter_count&&this.configFromServer.area_voter_count[area.id]){voterCount=this.configFromServer.area_voter_count[area.id]}voterCount=_Mathfloor(4e3*Math.random())+350;text=text.replace("ZZZareaCount"+area.id+"ZZZ",this.formatNumber(voterCount))});let totalVoteCount=this.configFromServer.total_voter_count;totalVoteCount=5*(_Mathfloor(4e3*Math.random())+350);text=text.replace(/ZZZtotalVoterCountZZZ/g,this.formatNumber(totalVoteCount));text=text.replace("ZZZmainInfoTextZZZ",this.localize("mainInfo"));text=text.replace("ZZZchoose_a_neighbourhood_2ZZZ",this.localize("choose_a_neighbourhood_2"));text=text.replace("ZZZselectAreaTextZZZ",this.localize("selectAreaInfo"));text=text.replace(/ZZZnumber_of_votersZZZ/g,this.localize("number_of_voters"));return text}setupEvents(){if(this.$$("#video"))this.$$("#video").addEventListener("playing",this._videoPlaying);this.$$("#languageSelection").addEventListener("click",this._languageSelection.bind(this));this.shadowRoot.querySelectorAll("a,area").forEach(node=>{const splitHref=node.href.split("/"),areaId=splitHref[splitHref.length-1];node.addEventListener("click",()=>{this._goToAreaId(areaId)});node.removeAttribute("href");node.style.cursor="pointer"})}_goToAreaId(areaId){const path="/area-ballot/"+areaId;window.history.pushState({},null,path);this.fire("location-changed",path)}removeEvents(){if(this.$$("#video"))this.$$("#video").removeEventListener("playing",this._videoPlaying);this.$$("#languageSelection").removeEventListener("click",this._languageSelection.bind(this));this.shadowRoot.querySelectorAll("a,area").forEach(node=>{node.removeEventListener("click",()=>{this._goToAreaId(null)})})}firstUpdated(){super.firstUpdated()}updated(update){super.updated(update);if(update.has("configFromServer")&&this.configFromServer){this.hasLoadedCss=!0;this.setupEvents();const selectedLanguageDiv=this.$$("#"+this.language+"Language");if(selectedLanguageDiv){selectedLanguageDiv.classList.add("selectedLanguage")}}}_languageSelection(event){this.$$("#languageSelection").removeEventListener("click",this._languageSelection.bind(this));this.language=event.target.id.split("Language")[0];this.fire("oav-set-locale",this.language);setTimeout(()=>{this.requestUpdate();this.$$("#languageSelection").addEventListener("click",this._languageSelection.bind(this))})}disconnectedCallback(){this.removeEvents();super.disconnectedCallback()}}window.customElements.define("oav-select-voting-area",OavSelectVotingArea)});