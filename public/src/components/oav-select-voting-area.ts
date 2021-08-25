import { html, css, property, customElement } from "lit-element";
import { PageViewElement } from "./page-view-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { OavShadowStyles } from "./oav-shadow-styles";
import { OavFlexLayout } from "./oav-flex-layout.js";

@customElement("oav-select-voting-area")
export class OavSelectVotingArea extends PageViewElement {
  @property({ type: Boolean })
  hasLoadedCss = false;

  @property({ type: Object })
  configFromServer!: OavConfigFromServer;

  static get styles() {
    return [OavShadowStyles, OavFlexLayout];
  }

  b64DecodeUnicode(str: string) {
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
        : html`${unsafeHTML(
            this.setupHTMLText(
              this.configFromServer.client_config.selectVotingAreaMobileHTML
            )
          )}`}`;
    } else {
      return html``;
    }
  }

  renderTEST() {
    if (this.hasLoadedCss) {
      return html`${this.wide
        ? html`${unsafeHTML(this.replaceInHTMLText(this.testHtmlDesktop()))}`
        : html`${unsafeHTML(this.replaceInHTMLText(this.testHtmlMobile()))}`}`;
    } else {
      return html``;
    }
  }

  testHtmlMobile() {
    return ``;
  }

  testHtmlDesktop() {
    return ``;
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

  refreshAreaCounters() {
    this.requestUpdate();
  }

  setupHTMLText(text: string) {
    text = this.b64DecodeUnicode(text);
    return this.replaceInHTMLText(text);
  }

  replaceInHTMLText(text: string) {
    this.configFromServer.areas.forEach((area) => {
      let voterCount = 0;
      if (
        this.configFromServer.area_voter_count &&
        this.configFromServer.area_voter_count[area.id]
      ) {
        voterCount = this.configFromServer.area_voter_count[area.id];
      }

      //voterCount = Math.floor(Math.random() * 4000) + 50;
      text = text.replace(
        "ZZZareaCount" + area.id + "ZZZ",
        this.formatNumber(voterCount, undefined, ".")
      );
    });

    let totalVoteCount = this.configFromServer.total_voter_count;

    //totalVoteCount = 5 * (Math.floor(Math.random() * 4000) + 400);

    text = text.replace(
      /ZZZtotalVoterCountZZZ/g,
      this.formatNumber(totalVoteCount, undefined, ".")
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
    (this.$$("#languageSelection") as HTMLElement).addEventListener(
      "click",
      this._languageSelection.bind(this)
    );

    this.shadowRoot!.querySelectorAll("a,area").forEach((node) => {
      const splitHref = (node as HTMLAnchorElement).href.split("/");
      const areaId = splitHref[splitHref.length - 1];
      node.addEventListener("click", () => {
        this._goToAreaId(parseInt(areaId));
      });
      node.removeAttribute("href");
      (node as HTMLAnchorElement).style.cursor = "pointer";
    });
  }

  _goToAreaId(areaId: number) {
    const path = "/area-ballot/" + areaId;
    window.history.pushState({}, "", path);
    this.fire("location-changed", path);
  }

  removeEvents() {
    (this.$$("#languageSelection") as HTMLElement).removeEventListener(
      "click",
      this._languageSelection.bind(this)
    );

    this.shadowRoot!.querySelectorAll("a,area").forEach((node) => {
      node.removeEventListener("click", () => {
        this._goToAreaId(-1);
      });
    });
  }

  firstUpdated(changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated(changedProperties);
  }

  updated(update: Map<string | number | symbol, unknown>) {
    super.updated(update);
    if (update.has("configFromServer") && this.configFromServer) {
      this.hasLoadedCss = true;
      setTimeout(() => {
        this.setupEvents();
        const selectedLanguageDiv = this.$$("#" + this.language + "Language");
        if (selectedLanguageDiv) {
          selectedLanguageDiv.classList.add("selectedLanguage");
        }
      });
    }
  }

  _languageSelection(event: any) {
    this.language = (event.target as HTMLElement).id.split("Language")[0];
    this.fire("oav-set-locale", this.language);
    setTimeout(()=>{
      (this.$$("#languageSelection") as HTMLElement).addEventListener(
        "click",
        this._languageSelection.bind(this)
      );
    },100)
  }

  disconnectedCallback() {
    this.removeEvents();
    super.disconnectedCallback();
  }
}
