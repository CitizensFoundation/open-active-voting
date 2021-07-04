import{html$1 as html,PageViewElement,unsafeHTML,OavShadowStyles,OavFlexLayout}from"./oav-app.js";class OavSelectVotingArea extends PageViewElement{static get properties(){return{configFromServer:{type:Object},hasLoadedCss:Boolean}}static get styles(){return[OavShadowStyles,OavFlexLayout]}b64DecodeUnicode(str){return decodeURIComponent(atob(str).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join(""))}renderX(){if(this.hasLoadedCss){return html`${this.wide?html`${unsafeHTML(this.setupHTMLText(this.configFromServer.client_config.selectVotingAreaDesktopHTML))}`:html`${unsafeHTML(this.setupHTMLText(this.configFromServer.client_config.selectVotingAreaMobileHTML))}`}`}else{return html``}}render(){if(this.hasLoadedCss){return html`${this.wide?html`${unsafeHTML(this.replaceInHTMLText(this.testHtmlDesktop()))}`:html`${unsafeHTML(this.replaceInHTMLText(this.testHtmlMobile()))}`}`}else{return html``}}testHtmlMobile(){return`
      <style>
        .selectedLanguage {
          text-decoration: underline;
        }

        .topMaterial {
          width: 320px;
          height: auto;
          background-color: #fff;
          margin: 24px;
          margin-top: 16px;
          margin-bottom: 24px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          padding-bottom: 32px;
        }

        .mobileMaterial {
          display: block;
          position: relative;
        }

        .mobileBackground {
          display: block;
          position: relative;
        }

        .selectInfoTextSmaller {
          font-size: 17px;
          padding: 8px;
          color: #222;
          padding-left: 12px;
          padding-right: 12px;
        }

        .voteNumberGeneralMobile {
          font-size: 24px;
          margin-left: 4px;
        }

        .checkIconMobile {
          width: 32px;
          height: 32px;
          margin-top: 3px;
        }

        @media (max-width: 1024px) {
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

        .mobileLogo {
          width: 280px;
          height: auto;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 0;
          padding-bottom: 0;
          margin-top: 16px;
        }

        @media (max-width: 320px) {
          .topMaterial {
            max-width: 320px;
            max-height: 130px;
            margin: 0;
            margin-top: 16px;
          }

          .mobileMaterial {
            width: 300px;
            font-size: 26px;
          }
        }

        .mobileBackground a {
          text-decoration: none;
        }

        .mapContainerMain {
          position: relative;
        }

        .language {
          text-decoration: underline;
        }

        hidden {
          display: none !important;
        }

        .mobileMaterial {
          margin-right: auto;
          margin-left: auto;
          margin-top: 22px;
          margin-bottom: 16px;
          color: #fff;
          font-size: 29px;
          font-family: Esja Bold;
          vertical-align: middle;
          cursor: pointer !important;
          height: 160px;
        }

        .language {
          color: #000;
        }

        .mobileImage {
          width: 200px;
        }

        .mobileArbaerMaterial {
          background: url("https://yrpri6-production.s3.amazonaws.com/b0650295-a8e7-4518-bc8d-dfbb5bd0ee1d-retina.png");
          background-size: cover;
        }

        .mobileBreidholtMaterial {
          background: url("https://yrpri6-production.s3.amazonaws.com/9fb84323-a07d-41f9-9b1c-0016aa07ff84-retina.png");
          background-size: cover;
        }

        .mobileGrafarholtMaterial {
          background: url("https://yrpri6-production.s3.amazonaws.com/292c79e1-6934-41b3-870b-a4d16ef7f718-retina.png");
          background-size: cover;
        }

        .mobileGrafarvogurMaterial {
          background: url("https://yrpri6-production.s3.amazonaws.com/4cfd1f22-72b8-4c14-95a8-75f46eeef222-retina.png");
          background-size: cover;
        }

        .mobileHaaleitiMaterial {
          background: url("https://yrpri6-production.s3.amazonaws.com/b54aec4e-ee01-42bf-963a-965a832708bd-retina.png");
          background-size: cover;
        }

        .mobileHlidarMaterial {
          background: url("https://yrpri6-production.s3.amazonaws.com/2321d88f-2517-4189-84d0-00bd982155f1-retina.png");
          background-size: cover;
        }

        .mobileKjalarnesMaterial {
          background: url("https://yrpri6-production.s3.amazonaws.com/839ab7e7-e039-41e3-9551-adb603bda602-retina.png");
          background-size: cover;
        }

        .mobileLaugardalurMaterial {
          background: url("https://yrpri6-production.s3.amazonaws.com/7c36a742-b630-47ae-a0c9-e5edbbfbec8d-retina.png");
          background-size: cover;
        }

        .mobileMidborgMaterial {
          background: url("https://yrpri6-production.s3.amazonaws.com/20f2c7a9-514b-4d71-ab09-6cf123728c19-retina.png");
          background-size: cover;
        }

        .mobileVesturbaerMaterial {
          background: url("https://yrpri6-production.s3.amazonaws.com/0e3be2dc-5129-40f8-a095-911fd3e71e99-retina.png");
          background-size: cover;
        }

        .mobileDistrict {
          color: #fff;
          width: 100%;
          height: 100%;
          background: rgb(0, 0, 0, 0.25);
        }

        .mobileDistrictText,
        .totalIcon {
          padding: 16px;
          padding-bottom: 14px;
        }

        .mobileDistrictText {
          position: absolute;
          left: 0;
          bottom: 0;
          max-width: 150px;
          text-align: center;
        }

        .totalIcon {
          font-family: Esja;
          position: absolute;
          bottom: 0;
          right: 0;
        }

        @media (max-width: 320px) {
          .totalIcon {
            font-size: 16px;
          }

          .mobileMaterial {
            font-size: 26px;
          }

          .totalVoterIcon {
            width: 24px;
            height: 24px;
          }
        }

        .merki {
          width: 320px;
          margin-top: 8px;
          margin-left: 0;
          margin-right: 0;
          padding: 0;
          margin-bottom: 8px;
        }
      </style>

      <div class="layout vertical center-center" style="display: block">
        <div class="layout vertical center-center">
          <img
            class="mobileLogo"
            src="https://yrpri-eu-direct-assets.s3-eu-west-1.amazonaws.com/hverfakosning-logo-800x533-01%402x.png"
          />
        </div>

        <div
          style="
      width: 320px;
      margin-top: 0;
      margin-left: auto;
      margin-right: auto;
    "
        >
          <div class="topMaterial shadow-elevation-3dp">
            <div>
              <div class="layout horizontal center-center">
                <img
                  class="merki"
                  src="https://yrpri-eu-direct-assets.s3-eu-west-1.amazonaws.com/rvkWaves2.png"
                />
              </div>

              <div class="selectInfoTextSmaller">
                ZZZchoose_a_neighbourhood_2ZZZ
              </div>
              <div
                class="langSelection layout horizontal"
                id="languageSelection"
              >
                <div class="language" id="isLanguage">Íslenska</div>
                <div class="language" id="enLanguage">English</div>
                <div class="language" id="plLanguage">Polska</div>
              </div>
              <div
                title$="ZZZnumber_of_votersZZZ"
                class="totalVoters layout horizontal"
              >
                <iron-icon
                  class="totalVoterIcon"
                  icon="verified-user"
                ></iron-icon>
                <div class="totalVoterCount">ZZZtotalVoterCountZZZ</div>
              </div>
            </div>
          </div>

          <div
            class="layout vertical center-center mobileBackground"
            style="display: block"
          >
            <a href="/area-ballot/1">
              <div
                class="mobileMaterial mobileArbaerMaterial shadow-elevation-3dp layout vertical center-center"
              >
                <div class="mobileDistrict layout horizontal">
                  <div class="mobileDistrictText">Árbær</div>
                  <div
                    class="flex"
                    style="width: 100%; vertical-align: middle"
                  ></div>
                  <div
                    title$="ZZZnumber_of_votersZZZ"
                    class="layout horizontal totalIcon"
                  >
                    <iron-icon
                      class="checkIconMobile"
                      icon="verified-user"
                    ></iron-icon>
                    <div class="voteNumberGeneralMobile">ZZZareaCount1ZZZ</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/2">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center mobileBreidholtMaterial mobileBackgroundCommon"
              >
                <div class="mobileDistrict layout horizontal">
                  <div class="mobileDistrictText">Breiðholt</div>
                  <div
                    class="flex"
                    style="width: 100%; vertical-align: middle"
                  ></div>
                  <div
                    title$="ZZZnumber_of_votersZZZ"
                    class="layout horizontal totalIcon"
                  >
                    <iron-icon
                      class="checkIconMobile"
                      icon="verified-user"
                    ></iron-icon>
                    <div class="voteNumberGeneralMobile">ZZZareaCount2ZZZ</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/3">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center mobileGrafarholtMaterial mobileBackgroundCommon"
              >
                <div class="mobileDistrict layout horizontal">
                  <div class="mobileDistrictText">
                    Grafarholt og Úlfarsdalur
                  </div>
                  <div
                    class="flex"
                    style="width: 100%; vertical-align: middle"
                  ></div>
                  <div
                    title$="ZZZnumber_of_votersZZZ"
                    class="layout horizontal totalIcon"
                  >
                    <iron-icon
                      class="checkIconMobile"
                      icon="verified-user"
                    ></iron-icon>
                    <div class="voteNumberGeneralMobile">ZZZareaCount3ZZZ</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/4">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center mobileGrafarvogurMaterial mobileBackgroundCommon"
              >
                <div class="mobileDistrict layout horizontal">
                  <div class="mobileDistrictText">Grafarvogur</div>
                  <div
                    class="flex"
                    style="width: 100%; vertical-align: middle"
                  ></div>
                  <div
                    title$="ZZZnumber_of_votersZZZ"
                    class="layout horizontal totalIcon"
                  >
                    <iron-icon
                      class="checkIconMobile"
                      icon="verified-user"
                    ></iron-icon>
                    <div class="voteNumberGeneralMobile">ZZZareaCount4ZZZ</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/5">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center mobileHaaleitiMaterial mobileBackgroundCommon"
              >
                <div class="mobileDistrict layout horizontal">
                  <div class="mobileDistrictText">Háaleiti og Bústaðir</div>
                  <div
                    class="flex"
                    style="width: 100%; vertical-align: middle"
                  ></div>
                  <div
                    title$="ZZZnumber_of_votersZZZ"
                    class="layout horizontal totalIcon"
                  >
                    <iron-icon
                      class="checkIconMobile"
                      icon="verified-user"
                    ></iron-icon>
                    <div class="voteNumberGeneralMobile">ZZZareaCount5ZZZ</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/6">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center mobileHlidarMaterial mobileBackgroundCommon"
              >
                <div class="mobileDistrict layout horizontal">
                  <div class="mobileDistrictText">Hlíðar</div>
                  <div
                    class="flex"
                    style="width: 100%; vertical-align: middle"
                  ></div>
                  <div
                    title$="ZZZnumber_of_votersZZZ"
                    class="layout horizontal totalIcon"
                  >
                    <iron-icon
                      class="checkIconMobile"
                      icon="verified-user"
                    ></iron-icon>
                    <div class="voteNumberGeneralMobile">ZZZareaCount6ZZZ</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/7">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center mobileKjalarnesMaterial mobileBackgroundCommon"
              >
                <div class="mobileDistrict layout horizontal">
                  <div class="mobileDistrictText">Kjalarnes</div>
                  <div
                    class="flex"
                    style="width: 100%; vertical-align: middle"
                  ></div>
                  <div
                    title$="ZZZnumber_of_votersZZZ"
                    class="layout horizontal totalIcon"
                  >
                    <iron-icon
                      class="checkIconMobile"
                      icon="verified-user"
                    ></iron-icon>
                    <div class="voteNumberGeneralMobile">ZZZareaCount7ZZZ</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/8">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center mobileLaugardalurMaterial mobileBackgroundCommon"
              >
                <div class="mobileDistrict layout horizontal">
                  <div class="mobileDistrictText">Laugardalur</div>
                  <div
                    class="flex"
                    style="width: 100%; vertical-align: middle"
                  ></div>
                  <div
                    title$="ZZZnumber_of_votersZZZ"
                    class="layout horizontal totalIcon"
                  >
                    <iron-icon
                      class="checkIconMobile"
                      icon="verified-user"
                    ></iron-icon>
                    <div class="voteNumberGeneralMobile">ZZZareaCount8ZZZ</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/9">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center mobileMidborgMaterial mobileBackgroundCommon"
              >
                <div class="mobileDistrict layout horizontal">
                  <div class="mobileDistrictText">Miðborg</div>
                  <div
                    class="flex"
                    style="width: 100%; vertical-align: middle"
                  ></div>
                  <div
                    title$="ZZZnumber_of_votersZZZ"
                    class="layout horizontal totalIcon"
                  >
                    <iron-icon
                      class="checkIconMobile"
                      icon="verified-user"
                    ></iron-icon>
                    <div class="voteNumberGeneralMobile">ZZZareaCount9ZZZ</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/10">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center mobileVesturbaerMaterial mobileBackgroundCommon"
              >
                <div class="mobileDistrict layout horizontal">
                  <div class="mobileDistrictText">Vesturbær</div>
                  <div
                    class="flex"
                    style="width: 100%; vertical-align: middle"
                  ></div>
                  <div
                    title$="ZZZnumber_of_votersZZZ"
                    class="layout horizontal totalIcon"
                  >
                    <iron-icon
                      class="checkIconMobile"
                      icon="verified-user"
                    ></iron-icon>
                    <div class="voteNumberGeneralMobile">ZZZareaCount10ZZZ</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    `}testHtmlDesktop(){return`
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
          margin: 16px 16px 16px 16px;
          display: block;
          position: relative;
          margin-left: 16px;
        }

        .infoImageContainer {
          padding: 0;
          margin: 16px;
          height: 225px;
          margin-left: 32px;
        }

        .imageContainer {
          width: 100%;
          background-size: 1920px 280px;
          background-repeat: repeat;
          background-position: center;
          background-position-y: top;
          margin-top: 16px;
          margin-bottom: 0;
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
          margin-top: 16px;
          background-color: #fff;
          display: block;
          position: relative;
          max-width: 882px;
          margin-left: auto;
          margin-right: auto;
        }

        .voteNumberForVesturbaer {
          position: absolute;
          top: 308px;
          right: 800px;
          color: #103d6b;
        }

        .voteNumberForMidborg {
          position: absolute;
          top: 406px;
          left: 133px;
          color: #1a6eb5;
        }

        .voteNumberForHlidar {
          position: absolute;
          top: 426px;
          left: 245px;
          color: #1c6f82;
        }

        .voteNumberForHaaleiti {
          position: absolute;
          top: 457px;
          left: 373px;
          color: #ea6044;
        }

        .voteNumberForLaugardalur {
          position: absolute;
          top: 124px;
          left: 279px;
          color: #82495c;
        }

        .voteNumberForBreidholt {
          position: absolute;
          bottom: 44px;
          left: 370px;
          color: #1a6eb5;
        }

        .voteNumberForArbaer {
          position: absolute;
          bottom: 55px;
          left: 710px;
          color: #103d6b;
        }

        .voteNumberForGrafarvogur {
          position: absolute;
          top: 75px;
          left: 600px;
          color: #1c6f82;
          direction: ltr;
        }

        .voteNumberForGrafarholt {
          position: absolute;
          bottom: 105px;
          left: 795px;
          color: #82495c;
          text-align: right;
        }

        .voteNumberForKjalarnes {
          position: absolute;
          top: 30px;
          right: 392px;
          color: #ea6044;
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
          width: 24px;
          height: 24px;
          padding-top: 1px;
        }

        .totalVoterCount {
          font-size: 17px;
          padding-bottom: 2px;
          padding-left: 3px;
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
          background-color: #fff;
          padding-top: 4px;
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
              class="shadow-elevation-2dp topMaterial"
              style="width: 400px !important"
            >
              <div
                class="logoHolder layout horizontal center-center"
                style="width: 400px !important"
              >
                <img
                  sizing="contain"
                  class="desktopLogo"
                  src="https://yrpri-eu-direct-assets.s3-eu-west-1.amazonaws.com/rvkWaves2.png"
                />
              </div>
              <div class="selectInfoTextSmaller">
                ZZZchoose_a_neighbourhood_2ZZZ
              </div>
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
                <iron-icon
                  class="totalVoterIcon"
                  icon="verified-user"
                ></iron-icon>
                <div class="totalVoterCount">ZZZtotalVoterCountZZZ</div>
              </div>
            </div>

            <div
              class="shadow-elevation-2dp infoImageContainer layout horizonal"
              style=""
            >
              <img
                height="225"
                class="wavesImage"
                src="https://yrpri-eu-direct-assets.s3-eu-west-1.amazonaws.com/logoThin.png"
              />
            </div>
          </div>
        </div>

        <div
          class="areaOptions shadow-elevation-6dp layout vertical center-center"
        >
          <img
            src="https://yrpri-eu-direct-assets.s3.eu-west-1.amazonaws.com/Reykjavik_hverfi_5litir_1764px.png"
            width="882"
            height="602"
            usemap="#image-map"
          />

          <map name="image-map">
            <area
              target=""
              alt="Árbær"
              title="Árbær"
              href="/area-ballot/1"
              coords="483,379,488,335,508,314,572,315,648,332,672,348,678,366,676,386,672,434,676,455,691,475,706,490,712,502,714,515,708,527,698,532,661,539,637,529,630,504,632,473,610,441,575,422,533,410,498,397,487,389"
              shape="poly"
            />
            <area
              target=""
              alt="Breiðholt"
              title="Breiðholt"
              href="/area-ballot/2"
              coords="482,402,462,426,456,449,444,477,428,488,410,498,405,515,415,536,456,579,484,588,510,580,528,564,576,544,585,516,612,476,613,460,596,444,562,426"
              shape="poly"
            />
            <area
              target=""
              alt="Grafarholt og Úlfarsdalur"
              title="Grafarholt og Úlfarsdalur"
              href="/area-ballot/3"
              coords="688,336,714,318,728,299,760,220,776,214,790,222,818,262,827,276,861,320,870,342,860,380,856,393,850,424,839,434,817,438,790,424,757,418,696,426,687,421,692,388"
              shape="poly"
            />
            <area
              target=""
              alt="Grafarvogur"
              title="Grafarvogur"
              href="/area-ballot/4"
              coords="711,142,756,115,772,111,775,131,750,180,746,201,743,226,730,266,716,293,703,312,678,323,648,324,625,317,603,309,572,309,536,305,520,298,509,276,510,254,519,232,546,199,539,170,554,148,575,137,594,138,640,121,672,125,687,139"
              shape="poly"
            />
            <area
              target=""
              alt="Háaleiti og Bústaðir"
              title="Háaleiti og Bústaðir"
              href="/area-ballot/5"
              coords="303,388,306,301,312,272,322,258,336,247,348,247,358,252,368,260,380,274,394,297,408,315,466,338,471,347,472,367,466,397,459,410,440,420,415,420,355,406"
              shape="poly"
            />
            <area
              target=""
              alt="Hlíðar"
              title="Hlíðar"
              href="/area-ballot/6"
              coords="211,367,222,351,218,319,214,294,219,275,228,260,236,248,244,236,249,224,258,225,315,248,313,254,305,264,300,282,295,302,294,315,294,352,296,388,277,388,229,381"
              shape="poly"
            />
            <area
              target=""
              alt="Kjalarnes"
              title="Kjalarnes"
              href="/area-ballot/7"
              coords="466,2,461,17,475,24,499,30,516,38,521,53,519,73,521,88,529,97,542,94,552,82,562,70,579,54,594,44,608,46,624,45,636,46,650,34,660,16,664,0"
              shape="poly"
            />
            <area
              target=""
              alt="Laugardalur"
              title="Laugardalur"
              href="/area-ballot/8"
              coords="253,188,307,193,319,190,333,178,336,164,338,149,347,134,377,129,403,122,427,131,439,144,439,158,437,168,439,179,455,171,472,167,489,180,501,206,499,240,491,265,485,287,471,309,461,314,445,314,433,312,419,310,409,298,382,262,361,240,346,237,332,237,321,239,302,228,282,222,264,218,250,212"
              shape="poly"
            />
            <area
              target=""
              alt="Miðborg"
              title="Miðborg"
              href="/area-ballot/9"
              coords="124,314,148,290,161,261,162,241,155,222,157,196,162,169,167,150,178,152,187,159,192,150,204,152,216,164,242,192,244,206,240,220,236,233,230,244,221,250,213,260,207,272,206,279,205,296,208,318,212,354,205,363,188,368,176,369,166,358,156,338,140,341,128,334,120,323"
              shape="poly"
            />
            <area
              target=""
              alt="Vesturbær"
              title="Vesturbær"
              href="/area-ballot/10"
              coords="16,159,41,133,62,140,102,144,130,126,125,114,130,99,152,92,156,80,169,72,187,76,187,107,151,133,164,136,158,159,148,177,148,196,148,217,152,242,152,263,138,285,122,300,114,312,104,294,104,278,90,252,88,230,81,216,66,212,56,194,34,188,17,181"
              shape="poly"
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
    `}renderText(){if(this.hasLoadedCss){return html`${unsafeHTML(this.setupHTMLText(this.getText()))}`}else{return html``}}getText(){return`


    `}setupHTMLText(text){text=this.b64DecodeUnicode(text);return this.replaceInHTMLText(text)}replaceInHTMLText(text){var _Mathfloor=Math.floor;this.configFromServer.areas.forEach(area=>{let voterCount=0;if(this.configFromServer.area_voter_count&&this.configFromServer.area_voter_count[area.id]){voterCount=this.configFromServer.area_voter_count[area.id]}voterCount=_Mathfloor(4e3*Math.random())+50;text=text.replace("ZZZareaCount"+area.id+"ZZZ",this.formatNumber(voterCount,null,"."))});let totalVoteCount=this.configFromServer.total_voter_count;totalVoteCount=5*(_Mathfloor(4e3*Math.random())+400);text=text.replace(/ZZZtotalVoterCountZZZ/g,this.formatNumber(totalVoteCount,null,"."));text=text.replace("ZZZmainInfoTextZZZ",this.localize("mainInfo"));text=text.replace("ZZZchoose_a_neighbourhood_2ZZZ",this.localize("choose_a_neighbourhood_2"));text=text.replace("ZZZselectAreaTextZZZ",this.localize("selectAreaInfo"));text=text.replace(/ZZZnumber_of_votersZZZ/g,this.localize("number_of_voters"));return text}setupEvents(){if(this.$$("#video"))this.$$("#video").addEventListener("playing",this._videoPlaying);this.$$("#languageSelection").addEventListener("click",this._languageSelection.bind(this));this.shadowRoot.querySelectorAll("a,area").forEach(node=>{const splitHref=node.href.split("/"),areaId=splitHref[splitHref.length-1];node.addEventListener("click",()=>{this._goToAreaId(areaId)});node.removeAttribute("href");node.style.cursor="pointer"})}_goToAreaId(areaId){const path="/area-ballot/"+areaId;window.history.pushState({},null,path);this.fire("location-changed",path)}removeEvents(){if(this.$$("#video"))this.$$("#video").removeEventListener("playing",this._videoPlaying);this.$$("#languageSelection").removeEventListener("click",this._languageSelection.bind(this));this.shadowRoot.querySelectorAll("a,area").forEach(node=>{node.removeEventListener("click",()=>{this._goToAreaId(null)})})}firstUpdated(){super.firstUpdated()}updated(update){super.updated(update);if(update.has("configFromServer")&&this.configFromServer){this.hasLoadedCss=!0;this.setupEvents();const selectedLanguageDiv=this.$$("#"+this.language+"Language");if(selectedLanguageDiv){selectedLanguageDiv.classList.add("selectedLanguage")}}}_languageSelection(event){this.$$("#languageSelection").removeEventListener("click",this._languageSelection.bind(this));this.language=event.target.id.split("Language")[0];this.fire("oav-set-locale",this.language);setTimeout(()=>{this.requestUpdate();this.$$("#languageSelection").addEventListener("click",this._languageSelection.bind(this))})}disconnectedCallback(){this.removeEvents();super.disconnectedCallback()}}window.customElements.define("oav-select-voting-area",OavSelectVotingArea);