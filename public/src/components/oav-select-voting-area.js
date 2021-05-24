import { html, css } from "lit-element";
import { PageViewElement } from "./page-view-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { OavShadowStyles } from "./oav-shadow-styles";
import { OavFlexLayout } from "./oav-flex-layout";

class OavSelectVotingArea extends PageViewElement {
  static get properties() {
    return {
      configFromServer: { type: Object },
      hasLoadedCss: Boolean,
    };
  }

  static get styles() {
    return [OavShadowStyles, OavFlexLayout];
  }

  b64DecodeUnicode(str) {
    return decodeURIComponent(
      atob(str)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  }

  render() {
    if (this.hasLoadedCss) {
      return html`${this.wide
        ? html`${unsafeHTML(
            this.setupHTMLText(
              this.configFromServer.client_config.selectVotingAreaDesktopHTML
            )
          )}`
        : //        html`${unsafeHTML(this.setupHTMLText(this.configFromServer.client_config.selectVotingAreaMobileHTML))}`}`;
          html`${unsafeHTML(this.replaceInHTMLText(this.testHtml()))}`}`;
    } else {
      return html``;
    }
  }

  testHtml() {
    return `
      <style>
        #area_options {
          background-color: var(--app-main-backround-color);
        }

        .selectedLanguage {
          text-decoration: underline;
        }

        h3 {
          font-size: 18px;
          padding: 16px;
        }

        paper-fab {
          padding: 32px;
          color: #fff;
        }

        paper-fab.label {
          font-size: 30px;
          color: #fff;
        }

        .infoImage {
          width: 320px;
          height: 96px;
        }

        @media (max-width: 940px) {
          .infoImageContainer {
            display: none;
          }
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

        .mainContainer {
          background-color: var(--app-main-backround-color);
          width: 100%;
          height: 100%;
        }

        .imageContainer {
          width: 100%;
          background-size: 1920px 280px;
          background-repeat: no-repeat;
          background-position: center;
          background-position-y: top;
          background-image: url("https://s3-eu-west-1.amazonaws.com/oav-direct-assets/hm2018/hm2018-1920x300-bg-2x.png");
        }

        .topTwoContainer {
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 800px) {
          .imageContainer {
            background-image: none;
            background-color: #f0f0f0;
          }
        }

        .selectInfoText {
          font-size: 21px;
          padding: 8px;
          background-color: var(--app-primary-color);
          color: #fff;
          margin: 0;
        }

        .selectInfoTextSmaller {
          font-size: 17px;
          padding: 8px;
          color: #222;
        }

        .areaOptions {
          margin-top: 48px;
          background-color: #fff;
          display: block;
          position: relative;
          max-width: 882px;
          margin-left: auto;
          margin-right: auto;
        }

        .voteNumberGeneral {
          padding-left: 4px;
          font-size: 15px;
        }

        .checkIcon {
          width: 40px;
          height: 40px;
        }

        .voteNumberGeneralMobile {
          font-size: 24px;
          margin-left: 4px;
        }

        .checkIconMobile {
          width: 35px;
          height: 35px;
        }

        .checkIconMain {
          width: 33px;
          height: 33px;
        }

        @media (max-width: 1023px) {
          .selectInfoText {
            font-size: 18px;
          }

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

        .langImage {
          cursor: pointer;
          margin-right: 8px;
          margin-left: 8px;
        }

        .mobileLogo {
          width: 100%;
          height: auto;
          margin-left: auto;
          margin-right: auto;
          margin-top: 4px;
        }

        .logoHolder {
          padding-bottom: 8px;
          padding-top: 8px;
          background-color: #213158;
        }

        @media (max-width: 320px) {
          .topMaterial {
            max-width: 300px;
            max-height: 130px;
            margin-top: 16px;
          }

          .mobileMaterial {
            width: 270px;
            font-size: 26px;
          }
        }

        .mobileIronImage {
          padding-bottom: 12px;
        }

        .areaOptions a {
          text-decoration: none;
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
          margin-top: 16px;
          margin-bottom: 16px;
          color: #fff;
          font-size: 28px;
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
          text-align: center;
        }

        .totalIcon {
          font-family: Esja;
          margin-top: 4px;
        }
      </style>

      <div class="layout vertical center-center" style="display:block">
      <div
      style="background-color: #213158"
    >
      <img
        sizing="contain"
        class="mobileLogo"
        src="https://s3-eu-west-1.amazonaws.com/oav-direct-assets/hm2018/hm2018-400x120-logo-2x.png"
      /></div>
        <div
          style="width:320px;margin-top:38px;margin-left:auto;margin-right:auto;"
        >
          <div>
            <div class="topMaterial shadow-elevation-3dp ">
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
            style="display:block"
          >
            <a href="/area-ballot/1">
              <div
                class="mobileMaterial mobileArbaerMaterial shadow-elevation-3dp layout vertical center-center "
              >
                <div class="mobileDistrict layout horizontal">
                  <div class="mobileDistrictText">Árbær</div>
                  <div
                    class="flex"
                    style="width: 100%;vertical-align: middle;"
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
                    style="width: 100%;vertical-align: middle;"
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
                    style="width: 100%;vertical-align: middle;"
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
                    style="width: 100%;vertical-align: middle;"
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
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center voteNumberForHaaleitiMobile"
              >
                <div style="width: 250px;padding-left: 8px;">
                  Háaleiti og Bústaðir
                </div>
                <div class="flex" style="vertical-align: middle;"></div>
                <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
                  <iron-icon
                    class="checkIconMobile"
                    icon="verified-user"
                  ></iron-icon>
                  <div class="voteNumberGeneralMobile">ZZZareaCount5ZZZ</div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/6">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center voteNumberForHlidarMobile"
              >
                <div>Hlíðar</div>
                <div
                  class="flex"
                  style="width: 100%;vertical-align: middle;"
                ></div>
                <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
                  <iron-icon
                    class="checkIconMobile"
                    icon="verified-user"
                  ></iron-icon>
                  <div class="voteNumberGeneralMobile">ZZZareaCount6ZZZ</div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/7">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center voteNumberForKjalarnesMobile"
              >
                <div>Kjalarnes</div>
                <div
                  class="flex"
                  style="width: 100%;vertical-align: middle;"
                ></div>
                <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
                  <iron-icon
                    class="checkIconMobile"
                    icon="verified-user"
                  ></iron-icon>
                  <div class="voteNumberGeneralMobile">ZZZareaCount7ZZZ</div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/8">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center voteNumberForLaugardalurMobile"
              >
                <div>Laugardalur</div>
                <div
                  class="flex"
                  style="width: 100%;vertical-align: middle;"
                ></div>
                <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
                  <iron-icon
                    class="checkIconMobile"
                    icon="verified-user"
                  ></iron-icon>
                  <div class="voteNumberGeneralMobile">ZZZareaCount8ZZZ</div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/9">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center voteNumberForMidborgMobile"
              >
                <div>Miðborg</div>
                <div
                  class="flex"
                  style="width: 100%;vertical-align: middle;"
                ></div>
                <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
                  <iron-icon
                    class="checkIconMobile"
                    icon="verified-user"
                  ></iron-icon>
                  <div class="voteNumberGeneralMobile">ZZZareaCount9ZZZ</div>
                </div>
              </div>
            </a>

            <a href="/area-ballot/10">
              <div
                class="mobileMaterial shadow-elevation-3dp layout horizontal center-center voteNumberForVesturbaerMobile"
              >
                <div>Vesturbær</div>
                <div
                  class="flex"
                  style="width: 100%;vertical-align: middle;"
                ></div>
                <div title$="ZZZnumber_of_votersZZZ" class="layout horizontal">
                  <iron-icon
                    class="checkIconMobile"
                    icon="verified-user"
                  ></iron-icon>
                  <div class="voteNumberGeneralMobile">ZZZareaCount10ZZZ</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  renderText() {
    if (this.hasLoadedCss) {
      return html`${unsafeHTML(this.setupHTMLText(this.getText()))}`;
    } else {
      return html``;
    }
  }

  getText() {
    return `
      `;
  }

  setupHTMLText(text) {
    text = this.b64DecodeUnicode(text);
    return this.replaceInHTMLText(text);
  }

  replaceInHTMLText(text) {
    this.configFromServer.areas.forEach((area) => {
      let voterCount = 0;
      if (
        this.configFromServer.area_voter_count &&
        this.configFromServer.area_voter_count[area.id]
      ) {
        voterCount = this.configFromServer.area_voter_count[area.id];
      }

      voterCount = Math.floor(Math.random() * 4000) + 350;
      text = text.replace(
        "ZZZareaCount" + area.id + "ZZZ",
        this.formatNumber(voterCount)
      );
    });

    text = text.replace(
      /ZZZtotalVoterCountZZZ/g,
      this.formatNumber(this.configFromServer.total_voter_count)
    );
    text = text.replace("ZZZmainInfoTextZZZ", this.localize("mainInfo"));
    text = text.replace(
      "ZZZchoose_a_neighbourhood_2ZZZ",
      this.localize("choose_a_neighbourhood_2")
    );
    text = text.replace(
      "ZZZselectAreaTextZZZ",
      this.localize("selectAreaInfo")
    );
    text = text.replace(
      /ZZZnumber_of_votersZZZ/g,
      this.localize("number_of_voters")
    );
    return text;
  }

  setupEvents() {
    if (this.$$("#video"))
      this.$$("#video").addEventListener("playing", this._videoPlaying);
    this.$$("#languageSelection").addEventListener(
      "click",
      this._languageSelection.bind(this)
    );
    this.shadowRoot.querySelectorAll("a,area").forEach((node) => {
      const splitHref = node.href.split("/");
      const areaId = splitHref[splitHref.length - 1];
      node.addEventListener("click", () => {
        this._goToAreaId(areaId);
      });
      node.removeAttribute("href");
      node.style.cursor = "pointer";
    });
  }

  _goToAreaId(areaId) {
    const path = "/area-ballot/" + areaId;
    window.history.pushState({}, null, path);
    this.fire("location-changed", path);
  }

  removeEvents() {
    if (this.$$("#video"))
      this.$$("#video").removeEventListener("playing", this._videoPlaying);
    this.$$("#languageSelection").removeEventListener(
      "click",
      this._languageSelection.bind(this)
    );
    this.shadowRoot.querySelectorAll("a,area").forEach((node) => {
      node.removeEventListener("click", () => {
        this._goToAreaId(null);
      });
    });
  }

  firstUpdated() {
    super.firstUpdated();
  }

  updated(update) {
    super.updated(update);
    if (update.has("configFromServer") && this.configFromServer) {
      //const sheet = document.createElement('style');
      //sheet.innerHTML = this.b64DecodeUnicode(this.configFromServer.client_config.selectVotingAreaCSS);
      //   this.shadowRoot.appendChild(sheet);
      this.hasLoadedCss = true;
      setTimeout(() => {
        this.setupEvents();
        const selectedLanguageDiv = this.$$("#" + this.language + "Language");
        if (selectedLanguageDiv) {
          selectedLanguageDiv.classList.add("selectedLanguage");
        }
        setTimeout(() => {
          this.requestUpdate();
        }, 1000);
      });
    }
  }

  _languageSelection(event) {
    this.$$("#languageSelection").removeEventListener(
      "click",
      this._languageSelection.bind(this)
    );
    this.language = event.target.id.split("Language")[0];
    this.fire("oav-set-locale", this.language);
    setTimeout(() => {
      this.requestUpdate();
      this.$$("#languageSelection").addEventListener(
        "click",
        this._languageSelection.bind(this)
      );
    });
  }

  disconnectedCallback() {
    this.removeEvents();
    super.disconnectedCallback();
  }
}

window.customElements.define("oav-select-voting-area", OavSelectVotingArea);
