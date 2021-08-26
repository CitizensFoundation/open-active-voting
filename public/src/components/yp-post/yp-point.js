import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './yp-app-icons.js';
import { ypMediaFormatsBehavior } from './yp-media-formats-behavior.js';
import './yp-magic-text.js';
import './yp-point-actions.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
import { ypLocalizationBridgeBehavior } from './yp-localization-bridge-behavior.js';

Polymer({
  _template: html`
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
        @apply --layout-vertical;
        color: #333;
      }

      .point-content {
        @apply --layout-vertical;
        padding-right: 16px;
        padding-left: 16px;
        margin-top: 16px;
      }

      #pointContentTranscript, #pointContent {
        cursor: default;
      }

      #pointContentTranscript, #pointContent[link-point] {
        cursor: pointer;
      }

      @media (max-width: 320px) {
        .user-image {
          display: none;
        }
      }

      .userInfoContainer {
        border-bottom: solid 4px;
        width: 100%;
        padding-bottom: 16px;
      }

      .userInfoContainer[up-vote] {
        border-bottom-color:  var(--master-point-up-color);
      }

      .userInfoContainer[down-vote] {
        border-bottom-color: var(--master-point-down-color);
      }

      paper-icon-button {
        color: #ccc;
      }

      #reportPointIconButton {
        color: #ddd;
        width: 36px;
        height: 36px;
      }

      .thumbsIcon {
        padding-left: 16px;
      }

      @media (min-width: 985px) {
        .thumbsIcon {
          display: none;
        }
      }

      iron-icon.thumbsIconUp {
        color: var(--master-point-up-color);
      }

      iron-icon.thumbsIconDown {
        color: var(--master-point-down-color);
      }

      yp-user-with-organization {
        padding-left: 16px;
      }

      .actionContainer {
        margin-top: 8px;
      }

      [hidden] {
        display: none !important;
      }

      .pointer {
        cursor: pointer;
      }

      iron-image, video {
        width: 398px;
        height: 224px;
        margin: 0;
        padding: 0;
      }

      @media (max-width: 600px) {
        iron-image, video {
          width: 100%;
          margin: 0 !important;
          padding: 0;
          height: initial;
          vertical-align: top;
        }

        .actionContainer {
          margin-left: 12px;
        }

        #videoPlayer[portrait] {
          width: 50% !important;
        }
      }


      .topContainer[portrait] {
        background-color: #777;
      }

      #pointContentEditor {
        padding-left: 8px;
        padding-right: 8px;
      }

      .transcriptError {
        margin-top: 8px;
        color: #F00;
      }

      paper-spinner {
        margin-top: 4px;
      }

      .checkTranscript {
        margin-top: 8px;
        padding: 8px;
      }

      .transcriptText {
        margin-top: 0;
        padding: 8px;
        color: #444;
        padding-bottom: 0;
        font-style: italic;
      }

      .transcriptHeader {
        color: #222;
        margin-bottom: 2px;
        font-style: normal;
      }

      audio {
        margin-top: 16px;
        margin-bottom: 16px;
      }

      video {
        background-color: #777;
      }
    </style>

    <lite-signal on-lite-signal-got-admin-rights="_gotAdminRights"></lite-signal>
    <lite-signal on-lite-signal-logged-in="_userLoggedIn"></lite-signal>
    <lite-signal on-lite-signal-yp-language="_languageEvent"></lite-signal>
    <lite-signal on-lite-signal-yp-pause-media-playback="_pauseMediaPlayback"></lite-signal>

    <div class="layout vertical">

      <div class="userInfoContainer layout horizontal" up-vote\$="[[upVote(point)]]" down-vote\$="[[downVote(point)]]" hidden\$="[[hideUser]]">
        <div class="layout horizontal" hidden\$="[[point.Post.Group.configuration.hidePointAuthor]]">
          <yp-user-with-organization title-date="[[point.created_at]]" inverted="" user\$="[[user]]"></yp-user-with-organization>
        </div>
      </div>

      <div class="layout vertical">
        <div class="topContainer" portrait\$="[[portraitVideo]]">
          <template is="dom-if" if="[[videoActive]]" restamp="">
            <div class="layout horizontal center-center">
              <video id="videoPlayer" portrait\$="[[portraitVideo]]" data-id\$="[[pointVideoId]]" controls="" preload="none" class="video" src="[[pointVideoPath]]" playsinline="" poster="[[pointImageVideoPath]]"></video>
            </div>
          </template>
        </div>

        <template is="dom-if" if="[[audioActive]]" restamp="">
          <div class="layout vertical center-center">
            <audio id="audioPlayer" data-id\$="[[pointAudioId]]" controls="" preload="meta" class="audio" src="[[pointAudioPath]]" playsinline=""></audio>
          </div>
        </template>

        <template is="dom-if" if="[[videoOrAudioActive]]">
          <template is="dom-if" if="[[checkingTranscript]]">
            <div class="layout vertical center-center checkTranscript">
              <div>[[t('checkingForTranscript')]]</div>
              <paper-spinner active=""></paper-spinner>
            </div>
          </template>
          <div class="transcriptError layout horizontal center-center" hidden\$="[[!checkTranscriptError]]">
            [[t('checkTranscriptError')]]
          </div>
          <template is="dom-if" if="[[point.latestContent]]">
            <div class="transcriptText layout vertical center-center">
              <div class="transcriptHeader">[[t('automaticTranscript')]]</div>
              <div id="pointContentTranscript" link-point\$="[[linkPoint]]" hidden\$="[[isEditing]]" on-tap="_linkIfNeeded">
                <yp-magic-text simple-format="" text-type="pointContent" content-language="[[point.language]]" content="[[point.latestContent]]" content-id="[[point.id]]">
                </yp-magic-text>
              </div>
            </div>
          </template>
        </template>

        <template is="dom-if" if="[[!videoOrAudioActive]]">
          <div class="point-content">
            <span hidden\$="[[!point.name]]">
              <span>[[point.name]]</span>.
            </span>
            <div id="pointContent" link-point\$="[[linkPoint]]" hidden\$="[[isEditing]]" on-tap="_linkIfNeeded">
              <yp-magic-text simple-format="" text-type="pointContent" content-language="[[point.language]]" content="[[point.latestContent]]" content-id="[[point.id]]">
              </yp-magic-text>
            </div>
          </div>
        </template>
        <template is="dom-if" if="[[isEditing]]" restamp="">
          <div class="layout vertical">
            <paper-textarea id="pointContentEditor" char-counter="" maxlength="500" value="{{editText}}"></paper-textarea>
            <div class="horizontal end-justified layout">
              <emoji-selector id="pointEmojiSelector"></emoji-selector>
            </div>
            <div class="layout horizontal self-end">
              <paper-button on-tap="_cancelEdit">[[t('cancel')]]</paper-button>
              <paper-button on-tap="_saveEdit">[[t('update')]]</paper-button>
            </div>
          </div>
        </template>
        <div class="layout horizontal actionContainer" hidden\$="[[hideActions]]" style="padding-bottom:8px;">
          <yp-point-actions hidden point="[[point]]" point-url\$="[[pointUrl]]"></yp-point-actions>
          <paper-icon-button hidden title\$="[[t('point.report')]]" id="reportPointIconButton" icon="warning" on-tap="_reportPoint"></paper-icon-button>
          <div class="flex"></div>
          <template is="dom-if" if="[[hasPointAccess]]">
            <div class="layout horizontal self-end" hidden\$="">
              <yp-ajax id="editPointAjax" method="PUT" on-response="_editResponse"></yp-ajax>
              <yp-ajax id="deletePointAjax" method="DELETE" on-response="_deleteResponse"></yp-ajax>
              <paper-icon-button title\$="[[t('edit')]]" hidden\$="[[!canEditPoint]]" icon="create" on-tap="_editPoint"></paper-icon-button>
              <paper-icon-button title\$="[[t('delete')]]" icon="clear" on-tap="_deletePoint"></paper-icon-button>
            </div>
          </template>
          <yp-ajax hidden="" id="checkTranscriptStatusAjax" on-response="_transcriptStatusResponse"></yp-ajax>
        </div>
      </div>
    </div>
`,

  is: 'yp-point',

  properties: {

    point: {
      type: Object,
      notify: true,
      observer: "_pointChanged"
    },

    linkPoint: {
      type: Boolean,
      value: false
    },

    hasPointAccess: {
      type: Boolean,
      computed: '_hasPointAccess(point, gotAdminRights, loggedInUser)'
    },

    canEditPoint: {
      type: Boolean,
      computed: '_canEditPoint(point, gotAdminRights, loggedInUser)'
    },

    user: {
      type: Object,
      value: null
    },

    hideUser: {
      type: Boolean,
      value: false
    },

    hideActions: {
      type: Boolean,
      value: false
    },

    isEditing: {
      type: Boolean,
      value: false,
      observer: '_isEditingChanged'
    },

    maxNumberOfPointsBeforeEditFrozen: {
      type: Number,
      value: 5
    },

    pointValueUp: {
      type: Boolean,
      computed: 'upVote(point)'
    },

    pointUrl: {
      type: String,
      computed: '_pointUrl(point)'
    },

    editText: String,

    videoActive: {
      type: Boolean,
      value: false
    },

    pointVideoPath: String,

    pointImageVideoPath: String,

    pointVideoId: Number,

    audioActive: {
      type: Boolean,
      value: false
    },

    pointAudioPath: String,

    pointAudioId: Number,

    videoOrAudioActive: {
      type: Boolean,
      computed: '_videoOrAudioActive(videoActive, audioActive)'
    },

    checkingTranscript: {
      type: Boolean,
      value: false
    },

    portraitVideo: {
      type: Boolean,
      value: false
    }
  },

  behaviors: [
    ypMediaFormatsBehavior,
    ypLocalizationBridgeBehavior
  ],

  _videoOrAudioActive: function (videoActive, audioActive) {
    return videoActive || audioActive;
  },

  _isEditingChanged: function (value) {
    this._updateEmojiBindings(value);
    this.async(function () {
      this.fire('iron-resize');
    });
  },

  _shareTap: function (event, detail) {
    window.appGlobals.activity('pointShareOpen', detail.brand, this.point.id);
  },

  _pointUrl: function (point) {
    if (point && point.Post) {
      return window.location.protocol+"//"+window.location.hostname+"/post/"+point.Post.id+"/"+point.id;
    }
  },

  _linkIfNeeded: function () {
    if (this.linkPoint) {
      this.goToPost(this.point.Post.id, this.point.id);
    }
  },

  _updateEmojiBindings: function (isEditing) {
    if (isEditing) {
      this.async(function () {
        var point = this.$$("#pointContentEditor");
        var emoji = this.$$("#pointEmojiSelector");
        if (point && emoji) {
          emoji.inputTarget = point;
        } else {
          console.error("Wide: Can't bind point edit emojis :(");
        }
      }.bind(this), 500);
    }
  },

  _cancelEdit: function () {
    //this._setlatestContent(this.point);
    this.set('isEditing', false);
  },

  _saveEdit: function () {
    this.$$("#editPointAjax").url = "/api/points/"+this.point.id;
    this.$$("#editPointAjax").body = { content: this.editText };
    this.$$("#editPointAjax").generateRequest();
  },

  _deletePoint: function () {
    dom(document).querySelector('yp-app').getDialogAsync("confirmationDialog", function (dialog) {
      dialog.open(this.t('point.confirmDelete'), this._reallyDeletePoint.bind(this));
    }.bind(this));
  },

  _reallyDeletePoint: function () {
    this.$$("#deletePointAjax").url = "/api/points/"+this.point.id;
    this.$$("#deletePointAjax").body = {};
    this.$$("#deletePointAjax").generateRequest();
  },

  _editResponse: function (event, detail) {
    if (detail.response) {
      var point = detail.response;
      point.latestContent = point.PointRevisions[point.PointRevisions.length-1].content;
      this.set('point', point);
    }
    this.set('isEditing', false);
  },

  _deleteResponse: function () {
    this.fire("yp-point-deleted", { pointId: this.point.id });
    this.set('point', null);

  },

  _reportPoint: function () {
    window.appGlobals.activity('open', 'point.report');
    dom(document).querySelector('yp-app').getDialogAsync("apiActionDialog", function (dialog) {
      dialog.setup('/api/points/' + this.point.id + '/report',
        this.t('reportConfirmation'),
        this._onReport.bind(this),
        this.t('point.report'),
        'PUT');
      dialog.open();
    }.bind(this));
  },

  _onReport: function () {
    window.appGlobals.notifyUserViaToast(this.t('point.report')+': '+this.point.content);
  },

  _editPoint: function () {
    if (this._hasPointAccess(this.point)) {
      this.set('editText', this.point.PointRevisions[this.point.PointRevisions.length-1].content);
      this.set('isEditing', true);
    }
  },

  _hasPointAccess: function (point) {
    return false;
  },

  _canEditPoint: function (point) {
    var isEligible = (point && (point.counter_quality_up + point.counter_quality_down) <= this.maxNumberOfPointsBeforeEditFrozen);
    return isEligible && window.appUser && window.appUser.user && window.appUser.user.id==point.user_id;
  },

  _pointChanged: function(point, previousPoint) {
    this.setupMediaEventListeners(point, previousPoint);
    this._resetMedia();
    if (point) {
      this.set('user', this.point.User);
      var videoURL = this._getVideoURL(point.PointVideos);
      var videoPosterURL = this._getVideoPosterURL(point.PointVideos);
      this.set('portraitVideo', this._isPortraitVideo(point.PointVideos));
      if (videoURL && videoPosterURL) {
        this.set('videoActive', true);
        this.set('pointVideoPath', videoURL);
        this.set('pointImageVideoPath', videoPosterURL);
        this.set('pointVideoId', point.PointVideos[0].id);
        this.set('checkTranscriptError', false);
        if (point.checkTranscriptFor==="video" && window.appGlobals.hasTranscriptSupport===true) {
          this.$.checkTranscriptStatusAjax.url = "/api/points/"+point.id+'/videoTranscriptStatus';
          this.$.checkTranscriptStatusAjax.generateRequest();
          this.set('checkingTranscript', true);
          point.checkTranscriptFor = null;
        }
      } else {
        var audioURL = this._getAudioURL(point.PointAudios);
        if (audioURL) {
          this.set('audioActive', true);
          this.set('pointAudioPath', audioURL);
          this.set('pointAudioId', point.PointAudios[0].id);
          this.set('checkTranscriptError', false);
          if (point.checkTranscriptFor==="audio" && window.appGlobals.hasTranscriptSupport===true) {
            this.$.checkTranscriptStatusAjax.url = "/api/points/"+point.id+'/audioTranscriptStatus';
            this.$.checkTranscriptStatusAjax.generateRequest();
            this.set('checkingTranscript', true);
            point.checkTranscriptFor = null;
          }
        }
      }
    } else {
      this.set('user', null);
      this.set('checkTranscriptError', false);
    }
  },

  _transcriptStatusResponse: function (event, detail) {
    detail = detail.response;
    if (detail && detail.point) {
      var point = detail.point;
      this.set('checkingTranscript', false);
      point.latestContent = point.PointRevisions[point.PointRevisions.length-1].content;
      this.set('point', point);
      this.fire('yp-update-point-in-list', point);
      if (this._hasPointAccess(point)) {
        this.set('editText',  point.latestContent);
        this.set('isEditing', true);
      }
      this.async(function () {
        this.fire('iron-resize');
      });
    } else if (detail && detail.inProgress) {
      this.async(function () {
        this.$.checkTranscriptStatusAjax.generateRequest();
      }, 2000);
    } else if (detail && detail.error) {
      this.set('checkingTranscript', false);
      this.set('checkTranscriptError', true);
    } else {
      this.set('checkingTranscript', false);
    }
  },

  _resetMedia: function () {
    this.set('videoActive', false);
    this.set('pointVideoPath', null);
    this.set('pointImageVideoPath', null);
    this.set('pointVideoId', null);
    this.set('audioActive', false);
    this.set('pointAudioPath', null);
    this.set('pointAudioId', null);
  },

  loginName: function () {
    return this.point.User.name;
  },

  upVote: function(point) {
    if (point) {
      if (point.value == 0) {
        return true;
      } else {
        return point.value>0;
      }
    } else {
      console.warn("Can't find point for upVote");
      return false;
    }
  },

  downVote: function(point) {
    if (point) {
      if (point.value == 0) {
        return true;
      } else {
        return point.value<0;
      }
    } else {
      console.warn("Can't find point for upVote");
      return false;
    }
  },

  computeClass: function (point) {
    var ret = 'description ';
    if (point) {
      if (point.value>0)
        ret += 'for';
      else
        ret += 'against';
      return ret;
    } else {
      console.warn("Can't find point for upVote");
      return ret;
    }
  }
});
