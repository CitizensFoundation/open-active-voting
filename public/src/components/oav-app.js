/**
@license
Copyright (c) 2010-2019 Citizens Foundation. AGPL License. All rights reserved.
*/

import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import 'whatwg-fetch';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-spinner/paper-spinner.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';
import './oav-icons.js';
import './snack-bar.js';
import './oav-area-ballot';
import './oav-area-budget';
import './oav-voting-completed';

import { OavAppStyles } from './oav-app-styles.js';
import { OavBaseElement } from './oav-base-element.js';
import { OavFlexLayout } from './oav-flex-layout.js';

class OavApp extends OavBaseElement {
  static get properties() {
    return {
      appTitle: { type: String },
      _page: { type: String },
      _drawerOpened: { type: Boolean },
      _snackbarOpened: { type: Boolean },

      _offline: { type: Boolean },
      _subPath: {
        type: String,
      },

      favoriteIcon: {
        type: String,
        value: 'star'
      },

      dialogHeading: {
        type: String,
        value: ''
      },

      activityHost: {
        type: String,
        value: ""
      },

      setupDefaults: {
        type: Boolean,
        value: false
      },

      votePublicKey: {
        type: String
      },

      configFromServer: {
        type: Object,
        value: null
      },

      requestInProgress: {
       type: Boolean,
       value: false
      },

      title: {
        type: String
      },

      showExit: {
        type: Boolean,
        value: false
      },

      hideBudget: {
        type: Boolean,
        value: true
      },

      areaName: String,

      budgetElement: Object,

      currentBallot: Object,

      totalBudget: Number,

      haveSetLanguage: {
        type: Boolean,
        value: false
      },

      resizeTimer: Object,

      postsHost: String,

      welcomeHeading: String,

      welcomeText: String,

      helpContent: String,

      wideAndBallot: Boolean,

      errorText: String
    };
  }

  static get styles() {
    return [
      OavAppStyles,
      OavFlexLayout
    ];
  }

  render() {
    let errorDialog = html`
      <paper-dialog id="errorDialog">
        <p id="errorText">${this.errorText}</p>
        <div class="buttons">
          <paper-button class="generalButton" dialog-confirm autofocus @click="${this.resetErrorText}">OK</paper-button>
        </div>
      </paper-dialog>
    `
    return  html`${this.configFromServer ?
      html`
        ${errorDialog}
        <paper-dialog id="helpDialog">
          <paper-dialog-scrollable>
            <div id="helpContent">
              ${unsafeHTML(this.helpContent)}
            </div>
          </paper-dialog-scrollable>
          <div class="buttons">
            <paper-button class="closeButton generalButton" dialog-dismiss>${this.localize('close')}</paper-button>
          </div>
        </paper-dialog>

        <paper-dialog id="welcomeDialog" with-backdrop>
          <div class="vertical center-center">
            <div class="welcomeLogoContainer center-center">
              <img class="welcomeLogo" src="${this.configFromServer.client_config.ballotBudgetLogo}"></img>
            </div>
            <div class="vertical center-center welcomeDialog">
              <div class="heading">${this.welcomeHeading}</div>
                <div class="horizontal welcomeText">
                  ${this.welcomeText}
                </div>
              <div class="langSelectionText">
                ${this.configFromServer.client_config.localeSetup.map((lang) => {
                  return html`
                    <span class="langSelect" data-locale="${lang.locale}" ?is-selected="${lang.locale===this.language}"
                      @click="${this.selectLocale}">${lang.language}</span>
                  `
                })}
              </div>
              <div class="buttons center-center">
                <paper-button raised class="continueButton" @click="${this.closeWelcome}" dialog-dismiss autofocus>${this.localize('start')}</paper-button>
              </div>
            </div>
          </div>
        </paper-dialog>

        <app-header fixed effects="waterfall" ?wide-and-ballot="${this.wideAndBallot}" ?hidden="${this._page !== 'area-ballot'}">
          <app-toolbar class="toolbar-top">
            <div ?hidden="${!this.showExit}" class="layout horizontal exitIconInBudget">
              <paper-icon-button class="closeButton" icon="close" @click="${this._exit}"></paper-icon-button>
            </div>
            <div class="helpIconInBudget">
              <paper-icon-button icon="help-outline" @click="${this._help}}"></paper-icon-button>
            </div>
            <div class="budgetConstainer layout horizontal center-center" ?hidden="${this.hideBudget}">
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
          <iron-icon id="favoriteIcon" icon="${this.favoriteIcon}" hidden></iron-icon>
        </app-header>

        <main role="main" class="main-content" ?has-ballot="${this._page == 'area-ballot'}">
          <oav-select-voting-area
            id="selectVotingArea"
            .language="${this.language}"
            ?active="${this._page === 'select-voting-area'}">
          </oav-select-voting-area>
          <oav-area-ballot id="budgetBallot"
            .budgetElement="${this.budgetElement}"
            .language="${this.language}"
            .areaIdRoutePath="${this._subPath}"
            .configFromServer="${this.configFromServer}"
            ?hidden="${this._page !== 'area-ballot'}"
            .votePublicKey="${this.votePublicKey}"
            ?active="${this._page === 'area-ballot'}">
          </oav-area-ballot>
          <oav-voting-completed
            .configFromServer="${this.configFromServer}"
            .language="${this.language}"
            ?active="${this._page === 'voting-completed'}">
          </oav-voting-completed>
          <yp-post
            .id="post"
            .budgetElement="${this.budgetElement}"
            .language="${this.language}"
            .postId="${this._subPath}"
            .host="${this.postsHost}"
            ?hidden="${this._page !== 'post'}">
          </yp-post>
          <oav-view404 class="page" ?active="${this._page === 'view404'}"></oav-view404>
        </main>

        <snack-bar ?active="${this._snackbarOpened}">
          You are now ${this._offline ? 'offline' : 'online'}.
        </snack-bar>
      `
      :
      html`${errorDialog}<paper-spinner active class="largeSpinner"></paper-spinner>`
      }
    `;
  }

  constructor() {
    window.__localizationCache = {
      messages: {},
    }
    super();
    setPassiveTouchGestures(true);
    this._boot();
  }

  _setupCustomCss(config) {
    if (config.cssProperties) {
      config.cssProperties.forEach(property => {
        const propName = Object.keys(property)[0];
        const propValue = Object.values(property)[0];
        this.shadowRoot.host.style.setProperty(propName, propValue);
      });
    }
  }

  selectLocale(event) {
    if (this.language != event.target.dataset.locale) {
      this.language = event.target.dataset.locale;
      if (this._page==="area-ballot" && this.currentBallot) {
        setTimeout( () => {
          this.currentBallot.loadArea();
        }, 10);
      }
    }
  }

  _boot() {
    fetch("/votes/boot")
      .then(res => res.json())
      .then(response => {
        this.requestInProgress= false;
        this.language = 'en';
        this.votePublicKey = response.public_key;
        this._setupCustomCss(response.config.client_config);
        window.localeResources = response.config.client_config.locales;
        this.configFromServer = response.config;
        this.updateAppMeta(this.configFromServer.client_config.shareMetaData);
        ga('create',this.configFromServer.client_config.googleAnalyticsId, 'auto');
        this.postsHost = "https://yrpri.org";
        this.favoriteIcon = "heart";
        this.oneBallotId = 1;
        if (this.configFromServer.client_config.defaultLanguage) {
          this.language = this.configFromServer.client_config.defaultLanguage;
          this.setupLocaleTexts();
        }
        if (this.configFromServer.client_config.favoriteIcon) {
          this.favoriteIcon = this.configFromServer.client_config.favoriteIcon;
        }

        debugger;

        if (!(location.href.indexOf("completePostingOfVoteAfterRedirect") > -1)) {
          const path = "/area-ballot/"+this.oneBallotId;
          window.history.pushState({}, null, path);
          this.fire('location-changed', path);

          if (this.configFromServer.client_config.welcomeLocales) {
            setTimeout( () => {
              if (!localStorage.getItem("haveClsosedWelcome")) {
                this.$$("#welcomeDialog").open();
              }
            });
          }
        }

        window.language = this.language;
        window.localize = this.localize;
      })
      .catch(error => {
        console.error('Error:', error);
        this.fire('oav-error', 'unknown_error');
      });
  }

  disconnectedCallback() {
    this._removeListeners();
  }

  b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  _setupListeners() {
    this.addEventListener("app-resources-loaded", this._translationLoaded);
    this.addEventListener("oav-set-title", this._setTitle);
    this.addEventListener("oav-error", this._errorHandler);
    this.addEventListener("oav-set-area", this._setArea);
    this.addEventListener("oav-clear-area", this._clearArea);
    this.addEventListener("oav-set-favorite-item-in-budget", this._toggleFavoriteItem);
    this.addEventListener("oav-hide-favorite-item", this._hideFavoriteItem);
    this.addEventListener("oav-reset-favorite-icon-position", this.resetFavoriteIconPosition);
    this.addEventListener("oav-exit", this._exit);
    this.addEventListener("oav-open-help", this._help);
    this.addEventListener("oav-set-ballot-element", this._setBallotElement);
    this.addEventListener("oav-set-budget-element", this._setBudgetElement);
    this.addEventListener("oav-scroll-item-into-view", this._scrollItemIntoView);
    this.addEventListener("location-changed", this._locationChanged);
    window.addEventListener("resize", this.resetSizeWithDelay.bind(this));
  }

  _setBallotElement(event) {
    this.currentBallot = event.detail;
  }

  _setBudgetElement(event) {
    this.budgetElement = event.detail;
  }

  _removeListeners() {
    this.removeEventListener("app-resources-loaded", this._translationLoaded);
    this.removeEventListener("oav-set-title", this._setTitle);
    this.removeEventListener("oav-error", this._errorHandler);
    this.removeEventListener("oav-set-area", this._setArea);
    this.removeEventListener("oav-clear-area", this._clearArea);
    this.removeEventListener("oav-set-area", this._setArea);
    this.removeEventListener("location-changed", this._locationChanged);
    this.removeEventListener("oav-set-favorite-item-in-budget", this._toggleFavoriteItem);
    this.removeEventListener("oav-hide-favorite-item", this._hideFavoriteItem);
    this.removeEventListener("oav-reset-favorite-icon-position", this.resetFavoriteIconPosition);
    this.removeEventListener("oav-exit", this._exit);
    this.removeEventListener("oav-set-ballot-element", this._setBallotElement);
    this.removeEventListener("oav-set-budget-element", this._setBudgetElement);
    this.removeEventListener("oav-open-help", this._help);
    this.removeEventListener("oav-scroll-item-into-view", this._scrollItemIntoView);
    window.removeEventListener("resize", this.resetSizeWithDelay);
  }

  _scrollItemIntoView(event) {
    this.$$("#budgetBallot")._scrollItemIntoView(event.detail);
  }

  _hideFavoriteItem() {
    this.$$("#favoriteIcon").hidden = true;
  }

  _toggleFavoriteItem(event) {
    const detail = event.detail;

    if (detail.item) {
      setTimeout(() => {
        var transformLeft, transformTop;

        if (this.$$("#favoriteIcon").hidden===true) {
          this.$$("#favoriteIcon").style.position = "absolute";
          this.$$("#favoriteIcon").style.left = detail.orgAnimPos.left+"px";
          this.$$("#favoriteIcon").style.top = detail.orgAnimPos.top+"px";

          transformLeft = detail.orgAnimPos.left-detail.budgetAnimPos.left;
          transformTop = detail.orgAnimPos.top-detail.budgetAnimPos.top;
        } else {
          var oldBudgetAnimPos = this.currentBallot.oldFavoriteItem ? this.budgetElement.getItemLeftTop(this.currentBallot.oldFavoriteItem) : null;
          if (oldBudgetAnimPos) {
            transformLeft = oldBudgetAnimPos.left-detail.budgetAnimPos.left;
            transformTop = oldBudgetAnimPos.top-detail.budgetAnimPos.top;
          } else {
            console.warn("Can't find old item");
            transformLeft = detail.orgAnimPos.left-detail.budgetAnimPos.left;
            transformTop = detail.orgAnimPos.top-detail.budgetAnimPos.top;
          }
        }

        this.$$("#favoriteIcon").hidden = false;

        this.$$("#favoriteIcon").style.position = "absolute";
        this.$$("#favoriteIcon").style.left = detail.budgetAnimPos.left+"px";
        this.$$("#favoriteIcon").style.top = detail.budgetAnimPos.top+"px";
        var animation = this.$$("#favoriteIcon").animate([
          {
            transform: "translateY("+transformTop+"px) translateX("+transformLeft+"px)",
            easing: 'ease-out'
          },
          { transform: "scale(3)",  easing: 'ease-in' },
          { transform: "scale(1)", easing: 'ease-out' }
        ], {
          duration: 720,
          iterations: 1
        });

        animation.onfinish = function () {
          this.$$("#favoriteIcon").style.position = "absolute";
          this.$$("#favoriteIcon").style.left = detail.budgetAnimPos.left+"px";
          this.$$("#favoriteIcon").style.top = detail.budgetAnimPos.top+"px";
        }.bind(this);
      });
    }
  }

  resetFavoriteIconPosition() {
    if (this.$$("#budgetBallot").favoriteItem) {
      const pos = this.$$("#budget").getItemLeftTop(this.$$("#budgetBallot").favoriteItem);
      if (pos) {
        this.$$("#favoriteIcon").style.left = pos.left+"px";
        this.$$("#favoriteIcon").style.top = pos.top+"px";
      } else {
        console.error("Can't find position of favorite item");
      }
    }
  }

  _help() {
    this.$$("#helpDialog").open();
  }

  _setArea(event) {
    this.areaName = event.detail.areaName;
    this.totalBudget = event.detail.totalBudget;
  }

  _clearArea() {
    this.areaName = null;
    this.totalBudget = null;
  }

  _errorHandler(event) {
    this.errorText = this.localize(event.detail);
    this.$$("#errorDialog").open();
  }

  _exit () {
    if (this._page==='post' && window.appLastArea) {
      window.history.pushState({}, null, window.appLastArea);
      this.fire('location-changed', window.appLastArea);
      window.appLastArea = null;
    } else {
      window.history.pushState({}, null, "/");
      this.fire('location-changed', '/');
    }
  }

  _setTitle(event, detail) {
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
      if (typeof(Storage) !== "undefined") {
        var selectedLanguage = localStorage.getItem("selectedLanguage");
        if (selectedLanguage) {
          this.fire('iron-signal', {name: 'set-language', data: selectedLanguage});
        }
      }
    }
  }

  closeWelcome() {
    localStorage.setItem("haveClosedWelcome", true);
  }

  getDialog(name) {
    return this.$$("#"+name);
  }

  firstUpdated() {
    this._setupListeners();
    installRouter((location) => this._locationChanged(location));
    installOfflineWatcher((offline) => this._offlineChanged(offline));
    installMediaQueryWatcher(`(min-width: 460px)`,
        (matches) => this._layoutChanged(matches));
    installMediaQueryWatcher(`(min-width: 1000px)`,
        (matches) => {
          if (matches)
            this.wide = true;
          else
            this.wide = false;
        });

  }

  getHelpContent() {
    if (this.configFromServer.client_config.helpPageLocales[this.language]) {
      return this.b64DecodeUnicode(this.configFromServer.client_config.helpPageLocales[this.language].b64text);
    } else if (this.configFromServer.client_config.helpPageLocales["en"]) {
      return this.b64DecodeUnicode(this.configFromServer.client_config.helpPageLocales["en"].b64text)
    } else {
      return "No help page found for selected language!"
    }
  }

  getWelcomeHeading() {
    if (this.configFromServer.client_config.welcomeLocales[this.language]) {
      return this.configFromServer.client_config.welcomeLocales[this.language].heading;
    } else if (this.configFromServer.client_config.welcomeLocales["en"]) {
      return this.configFromServer.client_config.welcomeLocales["en"].heading
    } else {
      return "No heading found"
    }
  }

  getWelcomeText() {
    if (this.configFromServer.client_config.welcomeLocales[this.language]) {
      return this.configFromServer.client_config.welcomeLocales[this.language].text;
    } else if (this.configFromServer.client_config.welcomeLocales["en"]) {
      return this.configFromServer.client_config.welcomeLocales["en"].text
    } else {
      return "No heading found"
    }
  }

  setupLocaleTexts() {
    this.welcomeHeading = this.getWelcomeHeading();
    this.welcomeText = this.getWelcomeText();
    this.helpContent = this.getHelpContent();
  }

  updateAppMeta(meta) {
    document.title = meta.title;
    updateMetadata({
      title: meta.title,
      description: meta.description,
      image: meta.shareImageUrl
      // This object also takes an image property, that points to an img src.
    });

    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = meta.faviconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  updated(changedProps) {
    if (changedProps.has('language')) {
      this.setupLocaleTexts();
    }

    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;

      const page = this._page;
      const oldPage = changedProps.get('_page');

      if (this.configFromServer && this.configFromServer.client_config.landingPageData && page && page!='select-voting-area') {
        this.showExit = true;
      } else {
        this.showExit = false;
      }

      // Setup top ballot if needed
      if (page && page=='area-ballot') {
        this.hideBudget = false;
      } else {
        this.hideBudget = true;
      }

      // Reset post if needed
      if (oldPage=='post' && this.$$("#post")) {
        this.$$("#post").reset();
      }

      // Refresh list when returning back to a ballot
      if (page=='area-ballot' && this.$$("#budgetBallot") && this.$$("#budgetBallot").refreshList) {
        this.$$("#budgetBallot").refreshList();
      }

      // Reset ballot tab view to list
      if (oldPage=='area-ballot' && this.$$("#budgetBallot") && page!='post') {
        this.$$("#budgetBallot").selectedView = 0;
      }

      // Cancel login polling if needed
      if (oldPage=='area-ballot' && this.$$("#budgetBallot")) {
        this._hideFavoriteItem();
      }

      setTimeout(() => {
        if (page=='area-ballot' && this.currentBallot && this.currentBallot.favoriteItem) {
          this.$$("#favoriteIcon").hidden = false;
          this.resetFavoriteIconPosition();
        }
      });

      // Do not allow access to voting-completed from a reload
      if (page=='voting-completed' && oldPage!='area-ballot') {
        window.location = "/";
      }

      // Refresh counts if coming from voting-completed
      if (oldPage=='voting-completed' && this.$$("#selectVotingArea")) {
        this.$$("#selectVotingArea").refreshAreaCounters();
      }

      // Send page info to Google Analytics
      if (page && typeof ga == 'function') {
        ga('send', 'pageview', {
          'page': location.pathname + location.search  + location.hash
        });
      }

      if (this.wide && page==='area-ballot') {
        this.wideAndBallot = true;
      } else {
        this.wideAndBallot = false;
      }
    }
  }

  _layoutChanged(isWideLayout) {
  }

  _offlineChanged(offline) {
    const previousOffline = this._offline;
    this._offline = offline;

    // Don't show the snackbar on the first load of the page.
    if (previousOffline === undefined) {
      return;
    }

    clearTimeout(this.__snackbarTimer);
    this._snackbarOpened = true;
    this.__snackbarTimer = setTimeout(() => { this._snackbarOpened = false }, 3000);
  }

  _locationChanged(location) {
    if (location instanceof CustomEvent)
      location = { pathname: location.detail };

    if (location.pathname==="/" && this.oneBallotId) {
      const path = '/area-ballot/'+this.oneBallotId;
      window.history.pushState({}, null, path);
      location = { pathname: path };
    }

    const path = window.decodeURIComponent(location.pathname);
    const page = path === '/' ? '/' : path.slice(1).split("/")[0];

    this._loadPage(page);
    // Any other info you might want to extract from the path (like page type),
    // you can do here.
    if (path.slice(1).split('/')[1]) {
      this._subPath = path.slice(1).split('/')[1];
    }
  }

  _loadPage(page) {
    switch(page) {
      case 'post':
        import('./yp-post/yp-post.js');
        break;
      case 'area-ballot':
      case 'voting-completed':
      case 'select-voting-area':
      case '/':
        break;
      default:
        page = 'view404';
        import('./oav-view404.js');
    }

    this._page = page;
  }

  _menuButtonClicked() {
    this._updateDrawerState(true);
  }

  _drawerOpenedChanged(e) {
    this._updateDrawerState(e.target.opened);
  }
}

window.customElements.define('oav-app', OavApp);
