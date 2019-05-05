import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/iron-media-query/iron-media-query.js';
import '@polymer/paper-material/paper-material.js';
import { ypMediaFormatsBehavior } from './yp-media-formats-behavior.js';
import { ypNumberFormatBehavior } from './yp-number-format-behavior.js';
import { ypTruncateBehavior } from './yp-truncate-behavior.js';
import './yp-post-header.js';
import './yp-post-points.js';
import './yp-ajax.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
import { ypLocalizationBridgeBehavior } from './yp-localization-bridge-behavior.js';

Polymer({
  _template: html`
    <style include="iron-flex iron-flex-alignment">
      :host {
      }

      .container {
        padding-top: 0;
        margin-top: -70px;
        height: 100%;
      }

      .flex {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      .centerContainer {
        @apply --layout-center-center;
      }

      .postHeader {
        padding: 16px;
        background-color: #fefefe;
        width: 940px;
      }

      .statusHeader {
        padding: 16px;
        background-color: #fefefe;
        width: 940px;
        margin-top: 16px;
        height: 48px;
      }

      .description {
        width: 510px;
        padding-left: 24px;
      }

      ac-activities {
        padding-top: 8px;
      }

      .statusColumn {
        width: 670px;
        padding-bottom: 16px;
      }

      .mainPage {
        background-color: #FFF;
      }

      yp-post-user-images {
        padding-top: 32px;
      }

      @media (max-width: 961px) {
        .postHeader {
          width: 600px;
        }
      }

      @media (max-width: 600px) {
        .postHeader {
          width: 400px;
        }
      }

      .createFab {
        position: fixed;
        bottom: 24px;
        right: 28px;
        background-color: var(--accent-color);
        color: #FFF;

        --paper-fab-iron-icon: {
          color: var(--icon-general-color, #FFF);
          height: 40px;
          width: 40px;
        }
      }

      .createFab[wide-layout] {
        width: 72px;
        height: 72px;
        --paper-fab-iron-icon: {
          color: var(--icon-general-color, #FFF);
          width: 72px;
          height: 72px;
        }
      }

      @media (max-width: 360px) {

        .centerContainer {
          @apply --layout-vertical;
        }

        .postHeader {
          height: 100%;
          width: 360px;
          padding: 0;
        }

        .tabsMaterial {
          width: 360px;
        }

        .statusHeader {
          width: 360px;
          height: 120px;
          padding: 0px;
          padding-left: 20px;
        }

        .statusColumn {
          height: 60px;
          padding: 0px;
        }

        .description {
          width: 320px;
          padding: 8px;
          padding-left: 20px;
          padding-bottom: 16px;
        }

        .statusColumn {
          width: 320px;
        }
      }

      yp-ajax {
        background-color: var(--primary-background-color);
      }

      .mapContainer {
        margin: 24px;
        width: 960px;
        height: 500px;
      }

      .counterInfo {
        font-size: 11px;
      }

      .topContainer {
        padding-top: 24px;
        background-image: var(--app-other-background-image);
        background-size: var(--app-other-background-size, 1920px 238px);
        background-repeat: no-repeat;
      }

      @media (max-width: 1048px) {
        .topContainer {
          padding-top: 60px;
        }
      }

      .tabs {
        margin-top: 24px;
      }

      @media (max-width: 934px) {
        .mapContainer {
          margin: 16px;
          width: 800px;
          height: 400px;
        }

        .topContainer {
          padding-top: 48px;
          background-image: none;
        }
      }

      @media (max-width: 832px) {
        .mapContainer {
          margin: 8px;
          width: 600px;
          height: 340px;
        }
      }

      @media (max-width: 632px) {
        .mapContainer {
          margin: 8px;
          width: 400px;
          height: 300px;
        }
      }

      @media (max-width: 420px) {
        .mapContainer {
          margin: 8px;
          width: 330px;
          height: 250px;
        }
      }

      @media (max-width: 360px) {
        .mapContainer {
          margin: 8px;
          width: 280px;
          height: 200px;
        }
      }


      .tabs {
        width: 1100px;
        padding-top: 8px;
        padding-bottom: 8px;
      }

      .tab {
        width: 250px;
      }

      @media (max-width: 1000px) {
        .tabs {
          width: 100%;
        }

        .tab {
          width: 200px;
        }
      }

      @media (max-width: 900px) {
        .tabs {
          max-width: 100%;
          font-size: 14px !important;
          word-wrap: break-word !important;
          margin-top: 8px;
          width: 100%;
          margin-bottom: 16px;
        }

        .tabs .tab {
          width: 100%;
          word-wrap: break-word !important;
          margin-left: 8px;
          margin-right: 8px;
        }

        .topArea {
          height: 300px;
        }

        .topArea[is-post] {
          min-height: 470px;
        }
      }

      @media (max-width: 380px) {
        .tabs {
          font-size: 12px !important;
        }

        .topArea[is-post] {
          min-height: 530px;
        }

        ac-activities {
          min-height: 600px !important;
        }
      }

      @media (max-width: 360px) {
        .tabs {
          font-size: 10px !important;
        }
      }

      .minHeightSection {
        min-height: 450px;
      }

      [hidden] {
        display: none !important;
      }

      paper-icon-button.closeButton {
        width: 58px;
        height: 58px;
        position: absolute;
        top: 8px;
        left: 8px;
      }

      @media (max-width: 640px) {
        paper-icon-button {
          width: 40px;
          height: 40px;
        }

        paper-icon-button.closeButton {
          width: 46px;
          height: 46px;
          top: 4px;
          left: 4px;
        }

        yp-post-points  {
          margin-top: 16px;
        }
      }
    </style>

    <div class="topContainer layout vertical center-center" is-post="" create-fab-title="[[t('point.add')]]" on-yp-create-fab-tap="_newPoint">
      <paper-icon-button class="closeButton" icon="closeExit" on-tap="_close"></paper-icon-button>
      <yp-post-header id="postCard" class="largeCard" post="[[post]]" on-refresh="_refreshAjax" header-mode=""></yp-post-header>

      <yp-post-points host="[[host]]" id="pointsSection" post="[[post]]" scroll-to-id\$="[[scrollToPointId]]"></yp-post-points>
    </div>

    <div class="layout horizontal center-center">
      <yp-ajax id="ajax" on-response="_handleIncomingPostResponse"></yp-ajax>
    </div>
    <iron-media-query query="(min-width: 1024px)" query-matches="{{wideWidth}}"></iron-media-query>
`,

  is: 'yp-post',

  behaviors: [
    ypMediaFormatsBehavior,
    ypNumberFormatBehavior,
    ypTruncateBehavior,
    ypLocalizationBridgeBehavior
  ],

  properties: {

    idRoute: Object,
    tabRoute: Object,
    idRouteData: Object,
    tabRouteData: Object,

    postId: {
      type: Number,
      value: null,
      observer: "_postIdChanged"
    },

    host: String,

    post: {
      type: Object,
      value: null,
      notify: true,
      observer: "_postChanged"
    },

    selectedTab: {
      type: String,
      value: 'debate',
      observer: '_selectedTabChanged'
    },

    small: {
      type: Boolean
    },

    method: {
      type: String
    },

    mapActive: {
      type: Boolean,
      value: false
    },

    wideWidth: {
      type: Boolean,
      value: false
    },

    createFabIcon: {
      type: String,
      value: "lightbulb-outline"
    },

    disableNewPosts: {
      type: Boolean,
      value: false
    },

    scrollToPointId: {
      type: String,
      value: null
    },

    locationHidden: {
      type: Boolean,
      value: false
    }
  },

  observers: [
    '_routeIdChanged(idRouteData.id)',
    '_routeTabChanged(tabRouteData.tabName)'
  ],

  _routeIdChanged: function (newId) {
    if (newId) {
      this.set('postId', newId);
    }
  },

  _routeTabChanged: function (newTabName) {
    if (newTabName && !this._isNumber(newTabName)) {
      this.set('selectedTab', newTabName);
    } else if (newTabName && this._isNumber(newTabName)) {
      this.set('scrollToPointId', newTabName);
      this.set('selectedTab', 'debate');
    }
  },

  _isNumber: function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },

  _selectedTabChanged: function (tabName) {
    if (this.post) {
      this.redirectTo("/post/" + this.post.id + '/' + tabName);
    }

    if (tabName == "location") {
      this.set('mapActive', true);
    } else {
      this.set('mapActive', false);
    }

    if (tabName && window.appGlobals) {
      window.appGlobals.activity('open', 'post_tab_' + tabName, '', { id: this.postId, modelType: "post" });
    }

    this.async(function () {
      var news = this.$$("#postNews");
      if (news) {
        news.fireResize();
      }
    }, 300);
  },

  listeners: {
    'yp-debate-info': '_updateDebateInfo',
    'yp-post-image-count': '_updatePostImageCount'
  },

  _updatePostImageCount: function (event, imageCount) {
    var tabCounter = this.$$('#tabCountPhotos');
    if (tabCounter) {
      tabCounter.innerHTML = this.formatNumber(imageCount);
    }
  },

  _close: function () {
    window.history.back();
  },

  _updateDebateInfo: function (event, detail) {
    var tabCounter = this.$$('#tabCountDebate');
    if (tabCounter) {
      tabCounter.innerHTML = this.formatNumber(detail.count);
    }
    if (detail.firstPoint) {
      this.$.postCard.updateDescriptionIfEmpty(detail.firstPoint.content);
    }
  },

  _mainContainerClasses: function(small) {
    if (small) {
      return "layout horizontal wrap";
    } else {
      return "layout horizontal center-center";
    }
  },

  _headerClasses: function(small) {
    if (small) {
      return "layout vertical postHeader wrap";
    } else {
      return "layout horizontal postHeader";
    }
  },

  postName: function (post) {
    if (post && post.name) {
      return this.truncate(this.trim(post.name), 200);
    } else if (post) {
      return post.short_name;
    }
  },

  postDescription: function (post) {
    if (post && post.description) {
      return this.truncate(this.trim(post.description), 10000, '...');
    } else {
      return "";
    }
  },

  _refreshAjax: function () {
    this.$.ajax.generateRequest();
  },

  _postChanged: function (newValue, oldValue) {
  },

  _postIdChanged: function (postId) {
    var cachedItem = null;
    if (cachedItem && cachedItem.id==postId) {
      this._setupAjaxUrl();
      this._handleIncomingPostResponse(null, { response: cachedItem });
      console.log("Got post from item cache");
    } else if (false) {
      this._setupAjaxUrl();
      this._handleIncomingPostResponse(null, { response: window.appGlobals.getPostFromCache(postId), fromCache: true });
      console.log("Got post from cache possibly from recommendations");
    } else {
      console.log("Got post from server not cache");
      this.set("post",null);
      if (postId) {
        this._getPost();
        this.set('selectedTab', 'debate');
      }
    }
  },

  _setupAjaxUrl: function () {
    if (this.host) {
      this.$.ajax.url = this.host+'/api/posts/' + this.postId;
    } else {
      this.$.ajax.url = '/api/posts/' + this.postId;
    }
  },

  _pagesResponse: function (event, detail) {
    this.fire('yp-set-pages', detail.response);
  },

  _getPost: function () {
    this._setupAjaxUrl();
    this.$$('#ajax').retryMethodAfter401Login = this._getPost.bind(this);
    this.$.ajax.generateRequest();
  },

  _handleIncomingPostResponse: function (event, detail) {
    this.set("post", detail.response);

    this.refresh();

    if (this.post.Group.configuration && this.post.Group.configuration.canAddNewPosts!=undefined) {
      if (this.post.Group.configuration.canAddNewPosts===true) {
        this.set('disableNewPosts', false);
      } else {
        this.set('disableNewPosts', true);
      }
    } else {
      this.set('disableNewPosts', false);
    }

  },

  _processRecommendation: function (recommendedPost) {
     if (recommendedPost && this.post) {
       var postName = recommendedPost.name;
       if (this.wideWidth) {
         postName = this.truncate(postName, 60);
       } else {
         postName = this.truncate(postName, 30);
       }

       this.fire("yp-set-next-post", {
         currentPostId: this.post.id,
         goForwardToPostId: recommendedPost.id,
         goForwardPostName: postName
       });
     } else {
       this.fire("yp-set-next-post", {
         currentPostId: this.post.id,
         goForwardToPostId: null,
         goForwardPostName: null
       });
       console.log("Not recommended post");
     }
  },

  refresh: function () {
    if (this.post) {
      if (this.post.Group.theme_id!=null ||
        (this.post.Group.configuration && this.post.Group.configuration.themeOverrideColorPrimary!=null)) {
      } else if (this.post.Group.Community &&
                (this.post.Group.Community.theme_id!=null ||
                  (this.post.Group.Community.configuration && this.post.Group.Community.configuration.themeOverrideColorPrimary))) {
      }

      if (!this.post.Group.Community) {
        console.error("No community!");
        debugger;
      }

      /*
      if (this.post.Group.GroupHeaderImages && this.post.Group.GroupHeaderImages.length>0) {
        this.setupTopHeaderImage(this.post.Group.GroupHeaderImages);
      } else  if (this.post.Group.Community.CommunityHeaderImages && this.post.Group.Community.CommunityHeaderImages.length>0) {
        this.setupTopHeaderImage(this.post.Group.Community.CommunityHeaderImage);
      }
      */
    }
  },

  setupTopHeaderImage: function (image) {
    var url = 'url(' + this.getImageFormatUrl(image, 0) + ')';
    this.updateStyles({ '--top-area-background-image': url });
  },

  computeUrl: function (post_id) {
    return '/api/posts/' + post_id;
  }
});
