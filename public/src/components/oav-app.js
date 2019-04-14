/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './oav-icons.js';
import './snack-bar.js';
import './oav-area-ballot';
import './oav-area-budget';

import { OavAppStyles } from './oav-app-styles.js';
import { OavBaseElement } from './oav-base-element.js';
import { OavFlexLayout } from './oav-flex-layout.js';
import { DevOavConfig } from './dev-oav-config.js';

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

      resizeTimer: Object
    };
  }

  static get styles() {
    return [
      OavAppStyles,
      OavFlexLayout
    ];
  }

  render() {
    return  html`${this.configFromServer ?
      html`
        <app-header fixed effects="waterfall">
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
                .totalBudget="${this.totalBudget}"
                .currentBallot="${this.currentBallot}">
              </oav-area-budget>
            </div>
          </app-toolbar>
          <iron-icon id="favoriteIcon" icon="${this.favoriteIcon}" hidden></iron-icon>
        </app-header>

        <main role="main" class="main-content">
          <oav-select-voting-area
            id="selectVotingArea"
            .language="${this.language}"
            ?active="${this._page === 'select-voting-area'}">
          </oav-select-voting-area>
          <oav-area-ballot id="budgetBallot"
            .budgetElement="${this.budgetElement}"
            .language="${this.language}"
            .areaIdRoutePath="${this._subPath}"
            .votePublicKey="${this.votePublicKey}"
            ?active="${this._page === 'area-ballot'}">
          </oav-area-ballot>
          <oav-voting-completed ?active="${this._page === 'voting-completed'}"></oav-voting-completed>
          <yp-post id="post"
            .budgetElement="${this.budgetElement}"
            .language="${this.language}"
            .postIdRoutePath="${this._subPath}"
            ?active="${this._page === 'post'}">
          </yp-post>
          <oav-view404 class="page" ?active="${this._page === 'view404'}"></oav-view404>
        </main>

        <snack-bar ?active="${this._snackbarOpened}">
          You are now ${this._offline ? 'offline' : 'online'}.
        </snack-bar>
      `
      :
      html`<paper-spinner class="largeSpinner"></paper-spinner>)`}`;
  }

  constructor() {
    window.__localizationCache = {
      messages: {}, /* Unique localized strings. Invalidated when the language */
    }
    super();
    setPassiveTouchGestures(true);
    this._page = "budget-ballot";
    this._subPage = "1";
    this._boot();
  }

  _setupCustomCss(config) {
    if (config.cssProperties) {
      config.cssProperties.forEach(property => {
        this.shadowRoot.style.setProperty(property.key, property.value);
      });
    }
  }

  _boot() {
    fetch("/votes/boot")
      .then(res => res.json())
      .then(response => {
        console.log('Success:', JSON.stringify(response));
        this.requestInProgress= false;
        this.language = 'en';
        this.votePublicKey = response.public_key;
        response.config = DevOavConfig;
        this._setupCustomCss(response.config);
        window.localeResources = response.config.locales;
        this.configFromServer = response.config;
      })
      .catch(error => {
        console.error('Error:', error);
        this.fire('oav-error', 'unknown_error');
      });
  }

  disconnectedCallback() {
    this._removeListeners();
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
    this.addEventListener("oav-scroll-item-into-view", this._scrollItemIntoView);
    window.addEventListener("resize", this.resetSizeWithDelay.bind(this));
  }

  _removeListeners() {
    this.removeEventListener("app-resources-loaded", this._translationLoaded);
    this.removeEventListener("oav-set-title", this._setTitle);
    this.removeEventListener("oav-error", this._errorHandler);
    this.removeEventListener("oav-set-area", this._setArea);
    this.removeEventListener("oav-clear-area", this._clearArea);
    this.removeEventListener("oav-set-favorite-item-in-budget", this._toggleFavoriteItem);
    this.removeEventListener("oav-hide-favorite-item", this._hideFavoriteItem);
    this.removeEventListener("oav-reset-favorite-icon-position", this.resetFavoriteIconPosition);
    this.removeEventListener("oav-exit", this._exit);
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
      var transformLeft, transformTop;

      if (this.$$("#favoriteIcon").hidden===true) {
        this.$$("#favoriteIcon").style.position = "absolute";
        this.$$("#favoriteIcon").style.left = detail.orgAnimPos.left+"px";
        this.$$("#favoriteIcon").style.top = detail.orgAnimPos.top+"px";

        transformLeft = detail.orgAnimPos.left-detail.budgetAnimPos.left;
        transformTop = detail.orgAnimPos.top-detail.budgetAnimPos.top;
      } else {
        var oldBudgetAnimPos = this.$.budget.getItemLeftTop(this.$$("#budgetBallot").oldFavoriteItem);
        if (oldBudgetAnimPos) {
          transformLeft = oldBudgetAnimPos.left-detail.budgetAnimPos.left;
          transformTop = oldBudgetAnimPos.top-detail.budgetAnimPos.top;
        } else {
          console.error("Can't find old item");
          transformLeft = detail.orgAnimPos.left-detail.budgetAnimPos.left;
          transformTop = detail.orgAnimPos.top-detail.budgetAnimPos.top;
        }
      }

      this.$$("#favoriteIcon").hidden = false;

      setTimeout(function () {
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
      }.bind(this));
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
    this.getDialog("page").open();
  }

  _setArea(event) {
    this.areaName = event.detail.areaName;
    this.totalBudget = event.detail.totalBudget;
  }

  _clearArea() {
    this.areaName = null;
    this.totalBudget = null;
  }

  _errorHandler(event, detail) {
    var dialog = this.getDialog("errorDialog");
    dialog.showErrorDialog(detail);
  }

  _exit() {
    if (this._page==='post' && window.appLastArea) {
      window.location = window.appLastArea;
      window.appLastArea = null;
    } else {
      window.location = "/#/";
    }
  }

  _setTitle(event, detail) {
    //this.set('title', detail);
  }

  resetSizeWithDelay() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(function() {
      this.resetFavoriteIconPosition();
    }.bind(this), 250);
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

  getDialog(name) {
    return this.$$("#dialogContainer").getDialog(name);
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

  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });

      const page = this._page;
      const oldPage = changedProps.get('_page');

      if (page && page!='select-voting-area') {
        this.showExit = true;
      } else {
        this.showExit = false;
      }

      // Setup top ballot if needed
      if (page && page=='area-ballot') {
        setTimeout(() => {
          this.currentBallot = this.$$("#budgetBallot");
          this.budgetElement = this.$$("#budget");
        });
        this.hideBudget = false;
      } else {
        this.hideBudget = true;
      }

      // Set background color
      if (page=='select-voting-area' || page=='voting-completed') {
        document.body.style.backgroundColor = "#e0e0e0";
      } else {
        document.body.style.backgroundColor = "#e0e0e0";
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
    const path = window.decodeURIComponent(location.pathname);
    const page = path === '/' ? 'view1' : path.slice(1).split("/")[0];

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
     //   import('./yp-post/yp-post.js');
        break;
      case 'area-ballot':
      case 'voting-completed':
      case 'select-voting-area':
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
