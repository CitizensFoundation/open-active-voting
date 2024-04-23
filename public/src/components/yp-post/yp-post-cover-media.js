import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/iron-image/iron-image.js';
import './yp-app-icons.js';
import { ypMediaFormatsBehavior } from './yp-media-formats-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { ypLocalizationBridgeBehavior } from './yp-localization-bridge-behavior.js';

Polymer({
  _template: html`
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
      }

      google-streetview-pano {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      google-map {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      .main-image, video {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      .mapCanvas {
        width: 100%;
        height: 100%;
      }

      .category-icon {
        width: 200px;
        height: 200px;
        padding-top: 32px;
      }

      .category-icon[tiny] {
        width: 100px;
        height: 100px;
        padding-top: 24px;
      }

      .category-icon[large] {
        width: 100%;
        height: 100%;
        margin: 0 !important;
        padding: 0 !important;
      }

      @media (max-width: 600px) {
        .category-icon {
          width: 130px;
          height: 130px;
        }

        .category-icon[large] {
          width: 100%;
          height: 100%;
          margin: 0 !important;
          padding: 0 !important;
        }

        .main-image[header-mode] {
          height: 100%;
        }

        video {
          height: 100%;
        }
      }

      .pointer {
        cursor: pointer;
      }

      .pointer[header-mode] {
        cursor: default;
      }

      [hidden] {
        display: none !important;
      }

      .videoCamStatic {
        width: 32px;
        height: 32px;
        color: var(--primary-background-color);
        margin-top: -68px;
        margin-left: 8px;
      }

      .voiceIcon {
        height: 42px;
        width: 42px;
        color: #333;
        margin-top: 96px;
      }

      @media (max-width: 600px) {
        .voiceIcon {
          height: 42px;
          width: 42px;
          color: #333;
          margin-top: 35px;
        }
      }

      audio {
        margin-top: 16px;
        margin-bottom: 8px;
      }

      .playInfo {
        font-style: italic;
      }

      @media (max-width: 960px) {
        .voiceIcon {
          margin-top: 35px;
        }
      }

      @media (max-width: 430px) {
        .voiceIcon {
          margin-top: 28px;
        }
      }

      video {
        background-color: #777;
      }

      #videoPlayer[portrait] {
        width: 100% !important;
        height: 100%;
      }

      .mapCanvas[portrait] {
        background-color: #777;
      }

      #videoPreviewImage[portrait] {
        width: 40%;
        @apply --layout-self-center;
      }

      .videoPreviewContainer {
        width: 100%;
        height: 100%;
      }

      .videoPreviewContainer[portrait] {
        background-color: #777;
      }
    </style>

    <div class="mapCanvas">
      <template is="dom-if" if="[[noneActive]]">
        <iron-image header-mode\$="[[headerMode]]" sizing="cover" hidden\$="[[defaultPostImageEnabled]]" class="main-image pointer" src="https://i.imgur.com/sdsFAoT.png" on-tap="_goToPost"></iron-image>

        <template is="dom-if" if="[[activeDefaultImageUrl]]" restamp="">
          <iron-image header-mode\$="[[headerMode]]" sizing="cover" class="main-image pointer" src="[[activeDefaultImageUrl]]" on-tap="_goToPost"></iron-image>
        </template>
      </template>

      <template is="dom-if" if="[[categoryActive]]">
        <div id="categoryImageId" class="layout horizontal center-center">
          <iron-image header-mode\$="[[headerMode]]" tiny\$="[[tiny]]" on-tap="_goToPost" class="category-icon pointer" title="[[post.Category.name]]" sizing="contain" src\$="[[getCategoryImagePath]]"></iron-image>
        </div>
      </template>

      <template is="dom-if" if="[[categoryLargeActive]]">
        <iron-image header-mode\$="[[headerMode]]" large="" on-tap="_goToPost" class="category-icon pointer" title="[[post.Category.name]]" sizing="cover" src\$="[[getCategoryImagePath]]"></iron-image>
      </template>

      <template is="dom-if" if="[[imageActive]]">
        <iron-image header-mode\$="[[headerMode]]" on-tap="_goToPost" sizing="cover" class="main-image pointer" src="[[postImagePath]]"></iron-image>
      </template>

      <template is="dom-if" if="[[videoActive]]" restamp="">
        <template is="dom-if" if="[[showVideo]]" restamp="">
          <video id="videoPlayer" portrait\$="[[portraitVideo]]" data-id\$="[[postVideoId]]" header-mode\$="[[headerMode]]" controls="" on-tap="_goToPost" preload="meta" class="pointer" src="[[postVideoPath]]" playsinline="" poster="[[postVideoPosterPath]]"></video>
        </template>
        <template is="dom-if" if="[[!showVideo]]">
          <div class="layout vertical center-center videoPreviewContainer" portrait\$="[[portraitVideo]]">
            <iron-image id="videoPreviewImage" portrait\$="[[portraitVideo]]" header-mode\$="[[headerMode]]" on-tap="_goToPost" sizing="cover" class="main-image pointer" src="[[postVideoPosterPath]]"></iron-image>
          </div>
          <iron-icon icon="videocam" class="videoCamStatic"></iron-icon>
        </template>
      </template>

      <template is="dom-if" if="[[audioActive]]" restamp="">
        <template is="dom-if" if="[[showAudio]]">
          <div class="layout vertical center-center">
            <audio id="audioPlayer" data-id\$="[[postAudioId]]" header-mode\$="[[headerMode]]" controls="" preload="meta" class="pointer" src="[[postAudioPath]]" hidden\$="[[!postAudioPath]]" playsinline=""></audio>
          </div>
        </template>
        <div hidden\$="[[showAudio]]" class="layout horizontal center-center pointer" on-tap="_goToPost">
          <iron-icon icon="keyboard-voice" class="voiceIcon"></iron-icon>
        </div>
      </template>

      <template is="dom-if" if="[[!disableMaps]]">

        <template is="dom-if" if="[[streetViewActive]]">
          <iron-image on-tap="_goToPost" class="main-image pointer" sizing="cover" src="https://maps.googleapis.com/maps/api/staticmap?center=[[latitude]],[[longitude]]&amp;zoom=[[zoomLevel]]&amp;size=432x243&amp;maptype=hybrid&amp;markers=color:red%7Clabel:%7C[[latitude]],[[longitude]]&amp;key=[[staticMapsApiKey]]" hidden\$="[[streetViewActivated]]"></iron-image>

          <template is="dom-if" if="[[streetViewActivated]]">
            <google-streetview-pano position\$="[[mapPosition]]" heading="330" api-key="AIzaSyDkF_kak8BVZA5zfp5R4xRnrX8HP3hjiL0" pitch="2" zoom="0.8" disable-default-ui="">
            </google-streetview-pano>
          </template>

        </template>

        <template is="dom-if" if="[[mapActive]]">
          <iron-image on-tap="_goToPost" class="main-image pointer" hidden\$="[[mapActivated]]" sizing="cover" src="https://maps.googleapis.com/maps/api/staticmap?center=[[latitude]],[[longitude]]&amp;size=432x243&amp;zoom=[[zoomLevel]]&amp;maptype=[[mapType]]&amp;markers=color:red%7Clabel:%7C[[latitude]],[[longitude]]&amp;key=[[staticMapsApiKey]]"></iron-image>

          <template is="dom-if" if="[[mapActivated]]">
            <google-map additional-map-options="{&quot;keyboardShortcuts&quot;:false}" id="coverMediaMap" class="map" libraries="places" fit-to-markers="" zoom\$="[[zoomLevel]]" map-type\$="[[mapType]]" api-key="AIzaSyDkF_kak8BVZA5zfp5R4xRnrX8HP3hjiL0">
              <google-map-marker slot="markers" latitude="[[latitude]]" longitude="[[longitude]]"></google-map-marker>
            </google-map>
          </template>
        </template>
      </template>
    </div>
    <lite-signal on-lite-signal-yp-language="_languageEvent"></lite-signal>
    <lite-signal on-lite-signal-yp-pause-media-playback="_pauseMediaPlayback"></lite-signal>
`,

  is: 'yp-post-cover-media',

  behaviors: [
    ypMediaFormatsBehavior,
    ypLocalizationBridgeBehavior
  ],

  properties: {


    post: {
      type: Object,
      notify: true,
      observer: "_postChanged"
    },

    noneActive: {
      type: Boolean,
      value: false,
      computed: '_isNoneActive(post)'
    },

    categoryActive: {
      type: Boolean,
      value: false,
      computed: '_isCategoryActive(post)'
    },

    categoryLargeActive: {
      type: Boolean,
      value: false,
      computed: '_isCategoryLargeActive(post)'
    },

    imageActive: {
      type: Boolean,
      value: false,
      computed: '_isImageActive(post)'
    },

    videoActive: {
      type: Boolean,
      value: false,
      computed: '_isVideoActive(post)'
    },

    audioActive: {
      type: Boolean,
      value: false,
      computed: '_isAudioActive(post)'
    },

    mapActive: {
      type: Boolean,
      value: false,
      computed: '_isMapActive(post)'
    },

    streetViewActive: {
      type: Boolean,
      value: false,
      computed: '_isStreetViewActive(post)'
    },

    mapType: {
      type: String,
      computed: '_mapType(post.location)'
    },

    zoomLevel: {
      type: String,
      computed: '_zoomLevel(post.location)'
    },

    latitude: {
      type: Number,
      computed: '_getLatitute(post.location.latitude)'
    },

    longitude: {
      type: Number,
      computed: '_getLongitude(post.location.longitude)'
    },

    mapPosition: {
      type: Object,
      computed: '_getMapPosition(post.location)'
    },

    getCategoryImagePath: {
      type: String,
      computed: '_getCategoryImagePath(post)'
    },

    postImagePath: {
      type: String,
      computed: '_postImagePath(post)'
    },

    postVideoPath: {
      type: String,
      computed: '_postVideoPath(post)'
    },

    postVideoPosterPath: {
      type: String,
      computed: '_postVideoPosterPath(post)'
    },

    postVideoId: Number,

    postAudioPath: {
      type: String,
      computed: '_postAudioPath(post)'
    },

    postAudioId: Number,

    headerMode: {
      type: Boolean,
      value: false,
      observer: '_headerModeChanged'
    },

    disableMaps: {
      type: Boolean,
      value: false
    },

    mapActivated: {
      type: Boolean,
      value: false
    },

    streetViewActivated: {
      type: Boolean,
      value: false
    },

    staticMapsApiKey: {
      type: String,
      value: "AIzaSyBYy8UvdDD650mz7k1pY0j2hBFQmCPVnxA"
    },

    tiny: {
      type: Boolean,
      value: false
    },

    uploadedDefaultPostImageId: {
      type: String,
      value: null
    },

    defaultImageGroupId: {
      type: String,
      value: null
    },

    defaultPostImageEnabled: {
      type: Boolean,
      value: false
    },

    showVideo: {
      type: Boolean,
      value: false
    },

    showAudio: {
      type: Boolean,
      value: false
    },

    portraitVideo: {
      type: Boolean,
      value: false
    },

    activeDefaultImageUrl: {
      type: String,
      computed: '_activeDefaultImageUrl(defaultPostImageEnabled, defaultImageGroupId, uploadedDefaultPostImageId)',
      value: null
    }
  },

  _activeDefaultImageUrl: function (defaultPostImageEnabled, defaultImageGroupId, uploadedDefaultPostImageId) {
    if (defaultPostImageEnabled && defaultImageGroupId && uploadedDefaultPostImageId) {
      return "/api/groups/"+defaultImageGroupId+"/default_post_image/"+uploadedDefaultPostImageId;
    } else {
      return null;
    }
  },

  _goToPost: function () {
    if (this.post) {
      if (this.headerMode) {
        this.goToPost(this.post.id)
      } else {
        this.goToPost(this.post.id, null, null, this.post);
      }
    } else {
      console.error("No post in post cover media on goToPost");
    }
  },

  _headerModeChanged: function (headerMode) {
    if (headerMode===true) {
      this.async(function () {
        this.set('mapActivated', true);
        this.set('streetViewActivated', true);
      });
    }
  },

  _getLatitute: function (latitude) {
    if (latitude)
      return latitude;
    else
      return 0.0;
  },

  _getLongitude: function (longitude) {
    if (longitude)
      return longitude;
    else
      return 0.0;
  },

  _isNoneActive: function (post) {
    if (this._withCoverMediaType(post, 'none'))
      return true;
    else
      return false
  },

  _isCategoryActive: function (post) {
    if (post && this._withCoverMediaType(post, 'category') && (post.id<=11000 && this._isDomainWithOldCategories()))
      return true;
    else
      return false
  },

  _isDomainWithOldCategories: function () {
    // Workaround to support old square category images on Citizens Foundation websites running since 2010
    var hostname = window.location.hostname;
    return (hostname.indexOf("betrireykjavik.is") >-1 ||
            hostname.indexOf("betraisland.is") >-1 ||
            hostname.indexOf("yrpri.org") >-1)
  },

  _isCategoryLargeActive: function (post) {
    if (post && this._withCoverMediaType(post, 'category') && (post.id>11000 || !this._isDomainWithOldCategories()))
      return true;
    else
      return false
  },

  _isImageActive: function (post) {
    if (this._withCoverMediaType(post,'image')) {
      return true;
    } else {
      return false;
    }
  },

  _isVideoActive: function (post) {
    if (this._withCoverMediaType(post,'video')) {
      return true;
    } else {
      return false;
    }
  },

  _isAudioActive: function (post) {
    if (this._withCoverMediaType(post,'audio')) {
      return true;
    } else {
      return false;
    }
  },

  _isMapActive: function (post) {
    if (post && post.location && post.location.latitude && this._withCoverMediaType(post,'map'))
      return true;
    else
      return false
  },

  _isStreetViewActive: function (post) {
    if (post && post.location && post.location.latitude && this._withCoverMediaType(post,'streetView')) {
      return true;
    }
    else
      return false;
  },

  _postChanged: function(post, previousPost) {
    if (post && post.Group && post.Group.configuration && post.Group.configuration.uploadedDefaultPostImageId && post.Group.configuration.uploadedDefaultPostImageId!="") {
      this.set('uploadedDefaultPostImageId', post.Group.configuration.uploadedDefaultPostImageId);
      this.set('defaultImageGroupId', post.Group.id);
      this.set('defaultPostImageEnabled', true);
    } else {
      this.set('defaultPostImageEnabled', false);
      this.set('defaultImageGroupId', null);
      this.set('uploadedDefaultPostImageId', null);
    }

    if (this.headerMode) {
      this.setupMediaEventListeners(post, previousPost);
    }
  },

  _zoomLevel: function (location) {
    if (location && location.map_zoom && location.map_zoom!="") {
      return location.map_zoom;
    }
    else
      return "10";
  },

  _mapType: function (location) {
    if (location && location.mapType && location.mapType != "")
      return location.mapType;
    else
      return "roadmap";
  },

  _withCoverMediaType: function (post, mediaType) {
    if (!post) {
      console.info("No post for "+mediaType);
      return false;
    } else {
      if (mediaType == 'none') {
        return (!post.Category && (!post.cover_media_type || post.cover_media_type == 'none'));
      } else  if ((mediaType=='category' && post.Category) && (!post.cover_media_type || post.cover_media_type == 'none')) {
        return true;
      } else {
        return (post && post.cover_media_type == mediaType);
      }
    }
  },

  _getMapPosition: function (location) {
    if (location) {
      return { lat: location.latitude, lng: location.longitude }
    } else {
      return { lat: 0, lng: 0 }
    }
  },

  _postImagePath: function (post) {
    if (post) {
      return this.getImageFormatUrl(post.PostHeaderImages, 0);
    } else {
      return "";
    }
  },

  _postVideoPath: function (post) {
    if (post && post.PostVideos) {
      var videoURL = this._getVideoURL(post.PostVideos);
      this.set('portraitVideo', this._isPortraitVideo(post.PostVideos))
      if (videoURL) {
        this.set('postVideoId', post.PostVideos[0].id);
        return videoURL;
      } else {
        return null;
      }
    } else {
      return null;
    }
  },

  _postAudioPath: function (post) {
    if (post && post.PostAudios) {
      var audioURL = this._getAudioURL(post.PostAudios);
      if (audioURL) {
        this.set('postAudioId', post.PostAudios[0].id);
        return audioURL;
      } else {
        return null;
      }
    } else {
      return null;
    }
  },

  _postVideoPosterPath: function (post) {
    if (post && post.PostVideos) {
      var videoPosterURL;
      if ((post.Group &&
          post.Group.configuration &&
          post.Group.configuration.useVideoCover) ||
          !this._postImagePath(post)) {
        videoPosterURL = this._getVideoPosterURL(post.PostVideos);
      } else {
        videoPosterURL = this._postImagePath(post);
      }
      if (videoPosterURL) {
        return videoPosterURL;
      } else {
        return null;
      }
    } else {
      return null;
    }
  },

  _getCategoryImagePath: function (post) {
    if (post && post.Category && post.Category.CategoryIconImages) {
      return this.getImageFormatUrl(post.Category.CategoryIconImages, 0);
    } else {
      return "";
    }
  }
});
