/**
@license
Copyright (c) 2010-2021 Citizens Foundation. AGPL License. All rights reserved.
*/

import { LitElement, html, css, customElement, property } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import { setPassiveTouchGestures } from "@polymer/polymer/lib/utils/settings.js";
import { installMediaQueryWatcher } from "pwa-helpers/media-query.js";
import { installOfflineWatcher } from "pwa-helpers/network.js";
import { installRouter } from "pwa-helpers/router.js";
import { updateMetadata } from "pwa-helpers/metadata.js";
import "whatwg-fetch";

// These are the elements needed by this element.
import "@polymer/app-layout/app-drawer/app-drawer.js";
import "@polymer/app-layout/app-header/app-header.js";
import "@polymer/app-layout/app-scroll-effects/effects/waterfall.js";
import "@polymer/paper-icon-button/paper-icon-button.js";
import "@polymer/paper-dialog/paper-dialog.js";
import "@polymer/paper-spinner/paper-spinner.js";
import "@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js";
import "@polymer/paper-toast/paper-toast.js";
import "./oav-icons.js";
import "./oav-area-ballot";
import "./oav-area-budget";
import "./oav-voting-completed";

import { OavAppStyles } from "./oav-app-styles.js";
import { OavBaseElement } from "./oav-base-element.js";
import { OavFlexLayout } from "./oav-flex-layout.js";
import { OavAreaBudget } from "./oav-area-budget";
import { OavAreaBallot } from "./oav-area-ballot";
import { PaperDialogElement } from "@polymer/paper-dialog/paper-dialog.js";
import { OavSelectVotingArea } from "./oav-select-voting-area.js";
import { PaperToastElement } from "@polymer/paper-toast/paper-toast.js";
import { OavInsecureEmailLogin } from "./oav-insecure-email-login.js";
import { OavLowSecuritySmsLogin } from "./oav-low-security-sms-login.js";

@customElement("oav-app")
export class OavApp extends OavBaseElement {
  @property({ type: String })
  appTitle: string | undefined;

  @property({ type: String })
  _page:
    | "select-voting-area"
    | "area-ballot"
    | "voting-completed"
    | "post"
    | "view404"
    | undefined;

  @property({ type: Boolean })
  _drawerOpened = false;

  @property({ type: Boolean })
  _snackbarOpened = false;

  @property({ type: Boolean })
  _offline = false;

  @property({ type: String })
  _subPath: string | undefined;

  @property({ type: String })
  favoriteIcon = "star";

  @property({ type: String })
  dialogHeading = "";

  @property({ type: String })
  activityHost = "";

  @property({ type: Boolean })
  setupDefaults = false;

  @property({ type: String })
  votePublicKey: string | undefined;

  @property({ type: Object })
  configFromServer!: OavConfigFromServer;

  @property({ type: Boolean })
  requestInProgress = false;

  @property({ type: String })
  title!: string;

  @property({ type: Boolean })
  showExit = false;

  @property({ type: Boolean })
  hideBudget = true;

  @property({ type: String })
  areaName: string | undefined;

  @property({ type: Object })
  budgetElement: OavAreaBudget | undefined;

  @property({ type: Object })
  currentBallot: OavAreaBallot | undefined;

  @property({ type: Number })
  totalBudget: number | undefined;

  @property({ type: Boolean })
  haveSetLanguage = true;

  @property({ type: Boolean })
  haveOpenedWelcome = false;

  @property({ type: Object })
  resizeTimer: any | undefined;

  @property({ type: String })
  postsHost: string | undefined;

  @property({ type: String })
  welcomeHeading: string | undefined;

  @property({ type: String })
  welcomeText: string | undefined;

  @property({ type: String })
  helpContent: string | undefined;

  @property({ type: String })
  errorText: string | undefined;

  @property({ type: String })
  languageOveride: string | undefined;

  @property({ type: Boolean })
  wideAndBallot = true;

  @property({ type: Number })
  oneBallotId: number | undefined;

  __snackbarTimer: any;

  haveClosedWelcome = false;

  static get styles() {
    return [OavAppStyles, OavFlexLayout];
  }

  resetErrorText() {
    this.errorText = undefined;
  }

  render() {
    let errorDialog = html`
      <paper-dialog id="errorDialog">
        <p id="errorText">${this.errorText}</p>
        <div class="buttons">
          <paper-button
            class="generalButton"
            dialog-confirm
            autofocus
            @click="${this.resetErrorText}"
            >OK</paper-button
          >
        </div>
      </paper-dialog>
    `;
    return html`${this.configFromServer
      ? html`
        ${errorDialog}

        ${
          this.configFromServer.client_config.insecureEmailLoginEnabled === true
            ? html`
                <oav-insecure-email-login
                  .language="${this.language}"
                  .configFromServer="${this.configFromServer}"
                  id="insecureEmailLogin"
                >
                </oav-insecure-email-login>
              `
            : html``
        }

        ${
          this.configFromServer.client_config.lowSecuritySmsLoginEnabled === true
            ? html`
                <oav-low-security-sms-login
                  .language="${this.language}"
                  .configFromServer="${this.configFromServer}"
                  id="lowSecuritySmsLogin"
                >
                </oav-low-security-sms-login>
              `
            : html``
        }
        <paper-dialog id="helpDialog">
          <paper-dialog-scrollable>
            <div id="helpContent">
              ${unsafeHTML(this.helpContent)}
            </div>
          </paper-dialog-scrollable>
          <div class="buttons">
            <paper-button raised class="closeButton generalButton" dialog-dismiss>${this.localize(
              "close"
            )}</paper-button>
          </div>
        </paper-dialog>

        <paper-dialog id="welcomeDialog" with-backdrop>
          <paper-dialog-scrollable>
            <div class="vertical center-center">
              <div class="welcomeLogoContainer center-center">
                <img aria-label="welcome/velkomin" class="welcomeLogo" src="${
                  this.configFromServer.client_config.welcomeLogo ||
                  this.configFromServer.client_config.ballotBudgetLogo
                }"></img>
              </div>
              <div class="vertical center-center welcomeDialog">
                <div class="heading">${this.welcomeHeading}</div>
                  <div class="horizontal welcomeText" ?hidden="${!this
                    .welcomeText}"
                    style="text-align: left;"
                  >
                    ${
                      this.configFromServer.client_config.welcomeLocalesByArea
                        ? html`
                            <div class="layout vertical">
                              <div>${unsafeHTML(this.welcomeText)}</div>
                            </div>
                          `
                        : html` <span>${this.welcomeText}</span> `
                    }
                  </div>
                 </div>
                <div class="buttons layout horizontal center-center">
                  <paper-button raised class="continueButton" @click="${
                    this.closeWelcome
                  }" dialog-dismiss autofocus>${this.localize(
          "start"
        )}</paper-button>
                </div>
              </div>
            </div>
          </paper-dialog-scrollable>
        </paper-dialog>

        <app-header fixed effects="waterfall" ?wide-and-ballot="${
          this.wideAndBallot
        }" ?hidden="${
          this._page !== "area-ballot" && this._page !== "select-voting-area"
        }">
          <app-toolbar class="toolbar-top">
            <div ?hidden="${
              !this.showExit || !this.wide
            }" class="layout horizontal exitIconInBudget">
              <paper-icon-button class="closeButton" alt="${this.localize(
                "close"
              )}" icon="closeExit" @click="${this._exit}"></paper-icon-button>
            </div>
            <div class="helpIconInBudget" ?is-wide="${
              this.wide
            }" ?select-voting-area="${
          this._page == "select-voting-area"
        }" ?hidden="${this._page == "area-ballot" && !this.wide}">
              <paper-icon-button icon="help-outline" alt="${this.localize(
                "help"
              )}" @click="${this._help}}"></paper-icon-button>
            </div>
            <div class="budgetConstainer layout horizontal center-center" ?hidden="${
              this.hideBudget
            }">
              <oav-area-budget
                id="budget"
                .areaName="${this.areaName}"
                .language="${this.language}"
                .showExit="${this.showExit}"
                .totalBudget="${this.totalBudget}"
                .configFromServer="${this.configFromServer}"
                .currentBallot="${this.currentBallot}">
              </oav-area-budget>
            </div>
          </app-toolbar>
          <iron-icon id="favoriteIcon" icon="${
            this.favoriteIcon
          }" hidden></iron-icon>
        </app-header>

        <main role="main" class="main-content" ?has-ballot="${
          this._page == "area-ballot"
        }">
          ${
            this._page === "select-voting-area" && this.configFromServer
              ? html`
                  <oav-select-voting-area
                    id="selectVotingArea"
                    .language="${this.language}"
                    .wide="${this.wide}"
                    .configFromServer="${this.configFromServer}"
                    ?active="${this._page === "select-voting-area"}"
                  >
                  </oav-select-voting-area>
                `
              : html``
          }
          <oav-area-ballot id="budgetBallot"
            .budgetElement="${this.budgetElement}"
            .language="${this.language}"
            .areaIdRoutePath="${this._subPath}"
            .configFromServer="${this.configFromServer}"
            ?hidden="${this._page !== "area-ballot"}"
            .votePublicKey="${this.votePublicKey}"
            ?active="${this._page === "area-ballot"}">
          </oav-area-ballot>
          <oav-voting-completed
            .configFromServer="${this.configFromServer}"
            .language="${this.language}"
            ?active="${this._page === "voting-completed"}">
          </oav-voting-completed>
          ${
            this._page === "post"
              ? html`
                  <yp-post
                    id="post"
                    .budgetElement="${this.budgetElement}"
                    .language="${this.language}"
                    .postId="${this._subPath}"
                    .host="${this.postsHost}"
                  >
                  </yp-post>
                `
              : html``
          }
          <oav-view404 class="page" ?active="${
            this._page === "view404"
          }"></oav-view404>
        </main>

        <paper-toast
          horizontal-align="center"
          horizontal-offset="-12"
          ?wide="${this.wide}" duration="4500" .text="${this.localize(
          "favorite_info"
        )}" id="toast" @click="${this._closeToast}">
        </paper-toast>>
      `
      : html`${errorDialog}<paper-spinner
            active
            class="largeSpinner"
          ></paper-spinner>`} `;
  }

  constructor() {
    super();
    window.__localizationCache = {
      messages: {},
    };
    setPassiveTouchGestures(true);
    this._boot();
    var name = "locale".replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    var language =
      results === null
        ? null
        : decodeURIComponent(results[1].replace(/\+/g, " "));
    if (language) {
      this.language = language;
      localStorage.setItem("languageOverride", language);
    }
  }

  _setupCustomCss(config: OavConfigFromServer) {
    if (config.cssProperties) {
      config.cssProperties.forEach((property) => {
        const propName = Object.keys(property)[0];
        const values = Object.keys(property).map(function (e) {
          return property[e];
        });
        const propValue = values[0];
        (this.shadowRoot!.host as HTMLElement).style.setProperty(
          propName,
          propValue
        );
        if (window.ShadyCSS) {
          window.ShadyCSS.styleSubtree(this, property);
        }
      });
    }
  }

  setLocale(event: CustomEvent | any) {
    this.language = event.detail;
    localStorage.setItem("languageOverride", this.language!);
  }

  selectLocale(event: CustomEvent) {
    if (this.language != (event.target as HTMLElement).dataset.locale) {
      this.language = (event.target as HTMLElement).dataset.locale;
      localStorage.setItem("languageOverride", this.language!);
      if (this._page === "area-ballot" && this.currentBallot) {
        setTimeout(() => {
          this.currentBallot!.loadArea();
        }, 10);
      }
    }
  }

  _boot() {
    fetch("/votes/boot", { credentials: "same-origin" })
      .then((res) => res.json())
      .then((response) => {
        this.requestInProgress = false;
        this.language = "en";
        this.votePublicKey = response.public_key;
        this._setupCustomCss(response.config.client_config);
        window.localeResources = response.config.client_config.locales;
        this.configFromServer = response.config;
        this.configFromServer.areas = response.areas;
        this.configFromServer.area_voter_count = response.area_voter_count;
        this.configFromServer.total_voter_count = response.total_voter_count;

        if (this.configFromServer.client_config.defaultLanguage) {
          if (localStorage.getItem("languageOverride")) {
            this.language = localStorage.getItem("languageOverride")!;
          } else {
            this.language = this.configFromServer.client_config.defaultLanguage;
          }
          this.setupLocaleTexts();
        }

        import("./oav-select-voting-area");
        this.updateAppMeta(this.configFromServer.client_config.shareMetaData);
        if (this.configFromServer.client_config.pageTitle) {
          document.title = this.configFromServer.client_config.pageTitle;
        }

        if (
          this.configFromServer.client_config.welcomeLocales &&
          this.configFromServer.client_config.ballotBudgetLogo
        ) {
          const tempImg = new Image();
          tempImg.src = this.configFromServer.client_config.ballotBudgetLogo;
        }

        //@ts-ignore
        ga(
          "create",
          this.configFromServer.client_config.googleAnalyticsId,
          "auto"
        );
        this.postsHost = this.configFromServer.client_config.postsHost || "https://yrpri.org";
        this.favoriteIcon = "heart";
        this.oneBallotId = this.configFromServer.client_config.oneBallotId;

        if (this.configFromServer.client_config.favoriteIcon) {
          this.favoriteIcon = this.configFromServer.client_config.favoriteIcon;
        }

        if (
          !(location.href.indexOf("completePostingOfVoteAfterRedirect") > -1)
        ) {
          if (this._page !== "area-ballot") {
            let path;
            if (this.oneBallotId) {
              path = "/area-ballot/" + this.oneBallotId;
            } else {
              path = "/select-voting-area";
            }
            window.history.pushState({}, "", path);
            this.fire("location-changed", path);
          }

          this.openWelcomeIfNeeded();
        }

        window.language = this.language;
        window.localize = this.localize;
        if (
          this.configFromServer &&
          this.configFromServer.client_config.selectVotingAreaDesktopHTML &&
          this._page &&
          this._page != "select-voting-area"
        ) {
          this.showExit = true;
        } else {
          this.showExit = false;
        }

        if (
          this.configFromServer.client_config.insecureEmailLoginEnabled === true
        ) {
          import("./oav-insecure-email-login.js");
        }

        if (
          this.configFromServer.client_config.lowSecuritySmsLoginEnabled === true
        ) {
          import("./oav-low-security-sms-login.js");
        }

      })
      .catch((error) => {
        debugger;
        console.error("Error:", error);
        this.fire("oav-error", "unknown_error");
      });
  }

  openWelcomeIfNeeded() {
    if (
      (this.configFromServer.client_config.welcomeLocales ||
        this.configFromServer.client_config.welcomeLocalesByArea) &&
      this._page !== "select-voting-area"
    ) {
      setTimeout(() => {
        if (!this.haveClosedWelcome) {
          (this.$$("#welcomeDialog") as PaperDialogElement).open();
          this.activity("opened", "welcome");
        }
      });
    }
  }

  disconnectedCallback() {
    this._removeListeners();
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

  _setupListeners() {
    //    this.addEventListener("app-resources-loaded", this._transinsecationLoaded);
    this.addEventListener("oav-set-title", this._setTitle);
    this.addEventListener("oav-error", this._errorHandler);
    this.addEventListener("oav-set-area", this._setArea);
    this.addEventListener("oav-clear-area", this._clearArea);
    this.addEventListener(
      "oav-set-favorite-item-in-budget",
      this._toggleFavoriteItem
    );
    this.addEventListener("oav-hide-favorite-item", this._hideFavoriteItem);
    this.addEventListener(
      "oav-reset-favorite-icon-position",
      this.resetFavoriteIconPosition
    );
    this.addEventListener("oav-open-favorite-toast", this._openFavoriteToast);
    this.addEventListener("oav-exit", this._exit);
    this.addEventListener("oav-open-help", this._help);
    this.addEventListener("oav-set-locale", this.setLocale);
    this.addEventListener("oav-set-ballot-element", this._setBallotElement);
    this.addEventListener("oav-set-budget-element", this._setBudgetElement);
    this.addEventListener("oav-update-locale-text", this.setupLocaleTexts);
    this.addEventListener(
      "oav-scroll-item-into-view",
      this._scrollItemIntoView
    );
    this.addEventListener("oav-insecure-email-login", this._insecureEmailLogin);
    this.addEventListener("oav-low-security-sms-login", this._lowSecuritySmsLogin);

    this.addEventListener("location-changed", this._locationChanged);
    window.addEventListener("resize", this.resetSizeWithDelay.bind(this));
  }

  _setBallotElement(event: CustomEvent | any) {
    this.currentBallot = event.detail;
  }

  _setBudgetElement(event: CustomEvent | any) {
    this.budgetElement = event.detail;
  }

  _removeListeners() {
    this.removeEventListener("app-resources-loaded", this._translationLoaded);
    this.removeEventListener("oav-set-title", this._setTitle);
    this.removeEventListener("oav-error", this._errorHandler);
    this.removeEventListener("oav-set-area", this._setArea);
    this.removeEventListener("oav-clear-area", this._clearArea);
    this.removeEventListener("location-changed", this._locationChanged);
    this.removeEventListener("oav-update-locale-text", this.setupLocaleTexts);
    this.removeEventListener(
      "oav-open-favorite-toast",
      this._openFavoriteToast
    );
    this.removeEventListener(
      "oav-set-favorite-item-in-budget",
      this._toggleFavoriteItem
    );
    this.removeEventListener("oav-hide-favorite-item", this._hideFavoriteItem);
    this.removeEventListener(
      "oav-reset-favorite-icon-position",
      this.resetFavoriteIconPosition
    );
    this.removeEventListener("oav-exit", this._exit);
    this.removeEventListener("oav-set-locale", this.setLocale);
    this.removeEventListener("oav-set-ballot-element", this._setBallotElement);
    this.removeEventListener("oav-set-budget-element", this._setBudgetElement);
    this.removeEventListener("oav-open-help", this._help);
    this.removeEventListener(
      "oav-scroll-item-into-view",
      this._scrollItemIntoView
    );
    window.removeEventListener("resize", this.resetSizeWithDelay);
    this.removeEventListener(
      "oav-insecure-email-login",
      this._insecureEmailLogin
    );
    this.removeEventListener("oav-low-security-sms-login", this._lowSecuritySmsLogin);
  }

  _closeToast() {
    const toast = this.$$("#toast") as PaperToastElement;
    toast.close();
  }

  _openFavoriteToast() {
    if (!this.configFromServer.client_config.hideFavoriteButton) {
      const toast = this.$$("#toast") as PaperToastElement;
      toast.open();
    }
  }

  _scrollItemIntoView(event: CustomEvent | any) {
    (this.$$("#budgetBallot") as OavAreaBallot)._scrollItemIntoView(
      event.detail as number
    );
  }

  _hideFavoriteItem() {
    (this.$$("#favoriteIcon") as HTMLElement).hidden = true;
  }

  _insecureEmailLogin(event: CustomEvent | any) {
    (this.$$("#insecureEmailLogin") as OavInsecureEmailLogin).open(
      event.detail.areaId,
      event.detail.areaName,
      event.detail.onLoginFunction
    );
  }

  _lowSecuritySmsLogin(event: CustomEvent | any) {
    (this.$$("#lowSecuritySmsLogin") as OavLowSecuritySmsLogin).open(
      event.detail.areaId,
      event.detail.areaName,
      event.detail.onLoginFunction
    );
  }

  _toggleFavoriteItem(event: CustomEvent | any) {
    setTimeout(() => {
      this._closeToast();
    }, 1000);

    const detail = event.detail;

    if (detail.item) {
      setTimeout(() => {
        var transformLeft, transformTop;

        const favoriteIcon = this.$$("#favoriteIcon") as HTMLElement;

        if (favoriteIcon.hidden === true) {
          favoriteIcon.style.position = "absolute";
          //TODO: Review
          favoriteIcon.style.left = detail.orgAnimPos.left + "px";
          favoriteIcon.style.top = detail.orgAnimPos.top + "px";

          transformLeft = detail.orgAnimPos.left - detail.budgetAnimPos.left;
          transformTop = detail.orgAnimPos.top - detail.budgetAnimPos.top;
        } else {
          var oldBudgetAnimPos = this.currentBallot!.oldFavoriteItem
            ? this.budgetElement!.getItemLeftTop(
                this.currentBallot!.oldFavoriteItem
              )
            : null;
          if (oldBudgetAnimPos) {
            transformLeft = oldBudgetAnimPos.left - detail.budgetAnimPos.left;
            transformTop = oldBudgetAnimPos.top - detail.budgetAnimPos.top;
          } else {
            console.warn("Can't find old item");
            transformLeft = detail.orgAnimPos.left - detail.budgetAnimPos.left;
            transformTop = detail.orgAnimPos.top - detail.budgetAnimPos.top;
          }
        }

        favoriteIcon.hidden = false;

        favoriteIcon.style.position = "absolute";
        favoriteIcon.style.left = detail.budgetAnimPos.left + "px";
        favoriteIcon.style.top = detail.budgetAnimPos.top + "px";
        var animation = favoriteIcon.animate(
          [
            {
              transform:
                "translateY(" +
                transformTop +
                "px) translateX(" +
                transformLeft +
                "px)",
              easing: "ease-out",
            },
            { transform: "scale(3)", easing: "ease-in" },
            { transform: "scale(1)", easing: "ease-out" },
          ],
          {
            duration: 720,
            iterations: 1,
          }
        );

        animation.onfinish = function () {
          favoriteIcon.style.position = "absolute";
          favoriteIcon.style.left = detail.budgetAnimPos.left + "px";
          favoriteIcon.style.top = detail.budgetAnimPos.top + "px";
        }.bind(this);
      });
    }
  }

  resetFavoriteIconPosition() {
    const budgetBallot = this.$$("#budgetBallot") as OavAreaBallot;
    if (budgetBallot.favoriteItem) {
      const pos = budgetBallot.budgetElement!.getItemLeftTop(
        budgetBallot.favoriteItem
      );
      const favoriteIcon = this.$$("#favoriteIcon") as HTMLElement;
      if (pos) {
        favoriteIcon.style.left = pos.left + "px";
        favoriteIcon.style.top = pos.top + "px";
      } else {
        console.error("Can't find position of favorite item");
      }
    }
  }

  _help() {
    (this.$$("#helpDialog") as PaperDialogElement).open();
  }

  _setArea(event: CustomEvent | any) {
    this.areaName = event.detail.areaName;
    this.totalBudget = event.detail.totalBudget;
  }

  _clearArea() {
    this.areaName = undefined;
    this.totalBudget = undefined;
  }

  _errorHandler(event: CustomEvent | any) {
    this.errorText = this.localize(event.detail);
    (this.$$("#errorDialog") as PaperDialogElement).open();
  }

  _exit() {
    if (this._page === "post" && window.appLastArea) {
      window.history.pushState({}, "", window.appLastArea);
      this.fire("location-changed", window.appLastArea);
      window.appLastArea = undefined;
    } else {
      window.history.pushState({}, "", "/");

      if (
        this.configFromServer &&
        this.configFromServer.client_config.selectVotingAreaDesktopHTML
      ) {
        this.fire("location-changed", "/select-voting-area");
      } else {
        window.location.href = "/";
      }
    }
  }

  _setTitle() {
    //this.set('title', detail);
  }

  resetSizeWithDelay() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.resetFavoriteIconPosition();
    }, 250);
  }

  _translationLoaded() {
    if (!this.haveSetLanguage) {
      this.haveSetLanguage = true;
      if (typeof Storage !== "undefined") {
        var selectedLanguage = localStorage.getItem("selectedLanguage");
        if (selectedLanguage) {
          this.fire("iron-signal", {
            name: "set-language",
            data: selectedLanguage,
          });
        }
      }
    }
  }

  closeWelcome() {
    this.haveClosedWelcome = true;
    this.activity("click", "welcomeClose");
  }

  getDialog(name: string) {
    return this.$$("#" + name);
  }

  firstUpdated() {
    this._setupListeners();
    installRouter((location) => this._locationChanged(location));
    installOfflineWatcher((offline) => this._offlineChanged(offline));
    installMediaQueryWatcher(`(min-width: 1024px)`, (matches) => {
      this.wide = matches;
      this.wideAndBallot = this.wide && this._page === "area-ballot";
    });
  }

  getHelpContent() {
    if (this.configFromServer.client_config.helpPageLocales[this.language!]) {
      return this.b64DecodeUnicode(
        this.configFromServer.client_config.helpPageLocales[this.language!]
          .b64text
      );
    } else if (this.configFromServer.client_config.helpPageLocales["en"]) {
      return this.b64DecodeUnicode(
        this.configFromServer.client_config.helpPageLocales["en"].b64text
      );
    } else {
      return "No help page found for selected language!";
    }
  }

  getWelcomeHeading() {
    if (this.configFromServer.client_config.welcomeLocales[this.language!]) {
      return this.configFromServer.client_config.welcomeLocales[this.language!]
        .heading;
    } else if (this.configFromServer.client_config.welcomeLocales["en"]) {
      return this.configFromServer.client_config.welcomeLocales["en"].heading;
    } else {
      return "No heading found";
    }
  }

  getWelcomeText() {
    if (this.configFromServer.client_config.welcomeLocales[this.language!]) {
      return this.configFromServer.client_config.welcomeLocales[this.language!]
        .text;
    } else if (this.configFromServer.client_config.welcomeLocales["en"]) {
      return this.configFromServer.client_config.welcomeLocales["en"].text;
    } else {
      return "No heading found";
    }
  }

  setupLocaleTexts() {
    if (
      this.configFromServer.client_config.welcomeLocalesByArea &&
      this.currentBallot &&
      this.language &&
      this.currentBallot.areaId
    ) {
      this.welcomeText = this.b64DecodeUnicode(
        this.configFromServer.client_config.welcomeLocalesByArea[
          this.currentBallot.areaId!
        ][this.language!]["content"]
      );
    } else if (this.configFromServer.client_config.welcomeLocales) {
      this.welcomeHeading = this.getWelcomeHeading();
      this.welcomeText = this.getWelcomeText();
    }
    this.helpContent = this.getHelpContent();
  }

  updateAppMeta(meta: OavConfigMetaInformation) {
    document.title = meta.title;
    updateMetadata({
      title: meta.title,
      description: meta.description,
      image: meta.shareImageUrl,
      // This object also takes an image property, that points to an img src.
    });

    var link = (document.querySelector("link[rel*='icon']") ||
      document.createElement("link")) as HTMLAnchorElement;
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = meta.faviconUrl;
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  updated(changedProps: Map<string | number | symbol, unknown>) {
    if (changedProps.has("language")) {
      this.setupLocaleTexts();
    }

    if (changedProps.has("_page")) {
      const pageTitle = this.appTitle + " - " + this._page;

      if (
        this.configFromServer &&
        this.configFromServer.client_config.selectVotingAreaDesktopHTML &&
        this._page &&
        this._page != "select-voting-area"
      ) {
        this.showExit = true;
      } else {
        this.showExit = false;
      }

      const page = this._page;
      const oldPage = changedProps.get("_page");

      // Setup top ballot if needed
      if (page && page == "area-ballot") {
        this.hideBudget = false;
      } else {
        this.hideBudget = true;
      }

      // Reset post if needed
      if (oldPage == "post" && this.$$("#post")) {
        (this.$$("#post") as any).reset();
      }

      const budgetBallot = this.$$("#budgetBallot") as OavAreaBallot;

      if (page == "area-ballot") {
        if (!this.haveOpenedWelcome) {
          this.openWelcomeIfNeeded();
          this.haveOpenedWelcome = true;
        }
      }

      // Reset ballot tab view to list
      if (oldPage == "area-ballot" && budgetBallot && page != "post") {
        budgetBallot.selectedView = 0;
      }

      // Cancel login polling if needed
      if (oldPage == "area-ballot" && budgetBallot) {
        this._hideFavoriteItem();
      }

      setTimeout(() => {
        if (
          page == "area-ballot" &&
          this.currentBallot &&
          this.currentBallot.favoriteItem
        ) {
          (this.$$("#favoriteIcon") as HTMLElement).hidden = false;
          this.resetFavoriteIconPosition();
        }
      });

      // Do not allow access to voting-completed from a reload
      if (page == "voting-completed" && oldPage != "area-ballot") {
        window.location.href = "/";
      }

      // Refresh counts if coming from voting-completed
      if (oldPage == "voting-completed" && this.$$("#selectVotingArea")) {
        (
          this.$$("#selectVotingArea") as OavSelectVotingArea
        ).refreshAreaCounters();
      }

      // Send page info to Google Analytics
      //@ts-ignore
      if (page && typeof ga == "function") {
        //@ts-ignore
        ga("send", "pageview", {
          page: location.pathname + location.search + location.hash,
        });
      }

      this.wideAndBallot = this.wide && page === "area-ballot";

      if (page == "voting-completed") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  _offlineChanged(offline: boolean) {
    const previousOffline = this._offline;
    this._offline = offline;

    // Don't show the snackbar on the first load of the page.
    if (previousOffline === undefined) {
      return;
    }

    clearTimeout(this.__snackbarTimer);
    this._snackbarOpened = true;
    this.__snackbarTimer = setTimeout(() => {
      this._snackbarOpened = false;
    }, 3000);
  }

  _locationChanged(location: CustomEvent | any) {
    if (location instanceof CustomEvent)
      location = { pathname: location.detail };

    if (location.pathname === "/" && this.oneBallotId) {
      const path = "/area-ballot/" + this.oneBallotId;
      window.history.pushState({}, "", path);
      location = { pathname: path };
    }

    const path = window.decodeURIComponent(location.pathname);
    const page = path === "/" ? "/" : path.slice(1).split("/")[0];

    this._loadPage(page);
    // Any other info you might want to extract from the path (like page type),
    // you can do here.
    if (path.slice(1).split("/")[1]) {
      this._subPath = path.slice(1).split("/")[1];
    }
  }

  _loadPage(page: string) {
    switch (page) {
      case "post":
        import("./yp-post/yp-post.js");
        break;
      case "area-ballot":
      case "voting-completed":
      case "select-voting-area":
      case "/":
        break;
      default:
        page = "view404";
        import("./oav-view404.js");
    }

    this._page = page as any;
  }
}
