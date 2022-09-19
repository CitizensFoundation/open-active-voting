import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './yp-app-icons.js';
import { ypTruncateBehavior } from './yp-truncate-behavior.js';
import { ypMediaFormatsBehavior } from './yp-media-formats-behavior.js';
import './yp-user-with-organization.js';
import './yp-magic-text.js';
import './yp-post-actions.js';
import './yp-post-cover-media.js';
import { YpPostBehavior } from './yp-post-behaviors.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
import { ypLocalizationBridgeBehavior } from './yp-localization-bridge-behavior.js';

Polymer({
  _template: html`
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
      }

      .infoContainer {
        @apply --layout-vertical;
        color: var(--primary-color-more-darker, #252525);
        line-height: var(--description-line-height, 1.3);
        width: 540px;
        padding: 0px;
        padding-bottom: 16px;
        padding-top: 16px;
      }

      .voting {
        @apply --layout-horizontal;
        @apply --layout-center;
        text-align: center;
        padding-left: 16px;
        padding-right: 24px;
      }

      .card-actions {
      }

      yp-post-actions {
        position: absolute;
        right: 8px;
        bottom: 0px;
      }

      .edit {
        color: #eee;
        position: absolute;
        top: 0;
        right: 0;
        padding-right: 0;
        margin-right: 0;
      }

      .post-name {
        margin: 0;
        font-size: var(--extra-large-heading-size, 28px);
        background-color: var(--app-primary-color);
        color: var(--app-text-color, #FFF);
        padding: 16px;
        cursor: pointer;
        font-weight: bold;
        min-height: 33px;
      }

      .category-icon {
        width: 100px;
        height: 100px;
      }

      .category-image-container {
        text-align: right;
        margin-top: -52px;
      }

      .postCardCursor {
        cursor: pointer;
      }

      yp-post-cover-media {
        position: relative;
        width: 420px;
        height: 236px;
      }

      yp-post-cover-media[audio-cover] {
        height: 90px;
      }

      .transcriptContainer {
        width: 420px;
        max-width: 420px;
      }

      .postCard {
        width: 960px;
        background-color: var(--app-post-card-background-color, #fff);
        color: var(--app-post-card-color, #000);
        @apply --layout-horizontal;
        position: relative;
      }

      .description {
        padding-bottom: 2px;
        padding-left: 8px;
        padding-right: 8px;
        color: var(--app-post-card-color, #000);
        margin-bottom: 42px;
      }

      paper-icon-button.moreVert {
        position: absolute;
        top: 0;
        right: 0;
      }

      .userInfo {
        color: #ddd;
        font-size: 17px;
      }

      @media (max-width: 960px) {
        :host {
          max-width: 600px;
        }

        .postCard {
          width: 100%;
          @apply --layout-wrap;
        }

        yp-post-cover-media {
          width: 100% !important;
        }

        .coverContainer {
          width: 100%;
        }

        .transcriptContainer {
          width: 100%;
          max-width: 100%;
        }

        .voting {
          padding-left: 0;
          padding-right: 0;
        }

        .card-actions {
          left: 24px;
          right: 0;
          width: 320px;
        }

        .card-content {
          width: 100% !important;
          padding-bottom: 16px;
        }

        .infoContainer {
          width: 100%;
        }

        .description[no-user-info] {
          padding-bottom: 32px;
        }

        .description {
          margin-bottom: 8px;
        }

        .userInfo {
          font-size: 14px;
        }

        .mediaAndInfoContainer {
          @apply --layout-center-center;
        }
      }

      @media (max-width: 800px) {
        .post-name {
          font-size: 22px;
          min-height: 21px;
        }

        :host {
          max-width: 423px;
          width: 100%;
        }

        yp-post-cover-media {
          height: 230px;
        }

      }

      @media (max-width: 430px) {
        :host {
          width: 100%;
        }

        .postCard {
          width: 100% !important;
          margin: 8px;
          margin-top: 4px;
        }

        yp-post-cover-media {
          height: 225px;
        }

        .card-actions {
          left: 0;
          width: 280px;
        }

        .post-name {
          font-size: 18px;
        }

        .post-name[logged-in] {
          padding-right: 24px;
        }

        .headerTopLevel {
          width: 100%;
        }

        .description {
          padding-bottom: 32px;
        }
      }

      @media (max-width: 375px) {
        yp-post-cover-media[header-mode] {
          height: 207px;
        }
        yp-post-cover-media[audio-cover] {
          height: 80px;
        }
      }

      @media (max-width: 360px) {
        yp-post-cover-media[header-mode] {
          height: 200px;
        }
        yp-post-cover-media[audio-cover] {
          height: 90px;
        }
      }

      @media (max-width: 320px) {
        yp-post-cover-media[header-mode] {
          height: 180px;
        }
        yp-post-cover-media[audio-cover] {
          height: 90px;
        }
      }

      .userWithOrg {
        --ak-user-name-color: #555555;
      }

      [hidden] {
        display: none !important;
      }


      #postTranscriptionEditor {
        padding-left: 8px;
        padding-right: 8px;
      }

      .transcriptError {
        margin-top: 8px;
        margin-bottom: 8px;
        color: #F00;
      }

      paper-spinner {
        margin-top: 8px;
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
        margin-bottom: 8px;
      }

      .transcriptHeader {
        color: #222;
        margin-bottom: 2px;
        font-style: normal;
      }

      .editIcon {
        color: #656565;
      }

      @media (min-width: 960px) {
        yp-post-cover-media[has-transcript][audio-cover] {
          margin-bottom: 16px;
        }
      }
    </style>
    <lite-signal on-lite-signal-yp-language="_languageEvent"></lite-signal>
    <lite-signal on-lite-signal-logged-in="_userLoggedIn"></lite-signal>

    <div class="layout horizontal center-center">
      <paper-material class="postCard" elevation="[[elevation]]" animated="">
        <div class="layout vertical headerTopLevel">
          <div class="post-name layout vertical" on-tap="goToPostIfNotHeader" logged-in\$="[[loggedInUser]]">
            <div>
              <yp-magic-text text-type="postName" content-language="[[post.language]]" content="[[postName]]" content-id="[[post.id]]">
              </yp-magic-text>
            </div>
            <template is="dom-if" if="[[post.Group.configuration.showWhoPostedPosts]]">
              <div class="layout horizontal userInfo">
                <yp-user-with-organization class="userWithOrg" hide-image="" title-date="[[post.user.name]]" user\$="[[post.User]]"></yp-user-with-organization>
              </div>
            </template>
          </div>
          <div class="layout horizontal wrap mediaAndInfoContainer">
            <div class="layout vertical center-center self-start coverContainer">
              <yp-post-cover-media show-video="" show-audio="" has-transcript\$="[[post.public_data.transcript.text]]" audio-cover\$="[[isAudioCover]]" header-mode\$="[[headerMode]]" post="[[post]]"></yp-post-cover-media>
              <div class="transcriptContainer">
                <template is="dom-if" if="[[checkingTranscript]]">
                  <div class="layout vertical center-center checkTranscript">
                    <div>[[t('checkingForTranscript')]]</div>
                    <paper-spinner active=""></paper-spinner>
                  </div>
                </template>
                <div class="transcriptError layout horizontal center-center" hidden\$="[[!checkTranscriptError]]">
                  [[t('checkTranscriptError')]]
                </div>
                <template is="dom-if" if="[[post.public_data.transcript.text]]">
                  <div class="transcriptText layout vertical center-center">
                    <div class="transcriptHeader" hidden\$="[[post.public_data.transcript.noMachineTranslation]]">[[t('automaticTranscript')]]
                      <span hidden\$="[[!post.public_data.transcript.userEdited]]">
                        ([[t('edited')]])
                      </span>
                    </div>
                    <div id="postContentTranscript" hidden\$="[[isEditing]]">
                      <yp-magic-text text-type="postTranscriptContent" content-language="[[post.public_data.transcript.language]]" content="[[post.public_data.transcript.text]]" content-id="[[post.id]]">
                      </yp-magic-text>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="layout vertical">
              <div class="infoContainer">
                <yp-magic-text id="description" simple-format text-type="postContent" content-language="[[post.language]]" content="[[post.description]]" no-user-info\$="[[!post.Group.configuration.showWhoPostedPosts]]" structured-questions-config="[[post.Group.configuration.structuredQuestions]]" content-id="[[post.id]]" class="description" truncate="500" more-text="{{t('readMore')}}" close-dialog-text="[[t('close')]]">
                </yp-magic-text>
              </div>
              <div class="card-actions" hidden>
                <yp-post-actions hidden\$="[[hideActions]]" floating="" header-mode="[[headerMode]]" elevation="-1" endorse-mode="[[endorseMode]]" class="voting" post="[[post]]"></yp-post-actions>
              </div>
            </div>
          </div>
        </div>
      </paper-material>
    </div>
    <lite-signal on-lite-signal-got-admin-rights="_gotAdminRights"></lite-signal>
`,

  is: 'yp-post-header',

  behaviors: [
    YpPostBehavior,
    ypTruncateBehavior,
    ypMediaFormatsBehavior,
    ypLocalizationBridgeBehavior
  ],

  properties: {

    selectedMenuItem: {
      type: String
    },

    headerMode: {
      type: Boolean,
      value: false
    },

    elevation: {
      type: Number,
      value: 2
    },

    post: {
      type: Object,
      observer: '_postChanged'
    },

    hasPostAccess: {
      type: Boolean,
      value: false,
      notify: true,
      computed: '_hasPostAccess(post, gotAdminRights)'
    },

    isEditing: {
      type: Boolean,
      value: false,
      observer: '_isEditingChanged'
    },

    editText: String,

    checkingTranscript: {
      type: Boolean,
      value: false
    },

    checkTranscriptError: {
      type: Boolean,
      value: false
    },

    isAudioCover: {
      type: Boolean,
      value: false
    },

    hideActions: {
      type: Boolean,
      value: false
    }
  },

  _isEditingChanged: function (value) {
    this._updateEmojiBindings(value);
    this.async(function () {
      this.fire('iron-resize');
    });
  },

  _updateEmojiBindings: function (isEditing) {
    if (isEditing) {
      this.async(function () {
        var point = this.$$("#postTranscriptionEditor");
        var emoji = this.$$("#postTranscriptEmojiSelector");
        if (point && emoji) {
          emoji.inputTarget = point;
        } else {
          console.error("Wide: Can't bind post edit emojis :(");
        }
      }.bind(this), 500);
    }
  },

  _cancelEdit: function () {
    //this._setlatestContent(this.point);
    this.set('isEditing', false);
  },

  _saveEdit: function () {
    this.$$("#editPostTranscriptAjax").url = "/api/posts/"+this.post.id+'/editTranscript';
    this.$$("#editPostTranscriptAjax").body = { content: this.editText };
    this.$$("#editPostTranscriptAjax").generateRequest();
  },

  _editPostTranscriptResponse: function (event, detail) {
    this.set('post.public_data.transcript.text', this.editText);
    this.set('post.public_data.transcript.userEdited', true);
    this.set('isEditing', false);
  },

  _editPostTranscript: function () {
    if (this.hasPostAccess) {
      this.set('editText', this.post.public_data.transcript.text);
      this.set('isEditing', true);
    }
  },

  _transcriptStatusResponse: function (event, detail) {
    if (detail.response && detail.response.text) {
      this.set('post.public_data.transcript.text', detail.response.text);
      if (this.hasPostAccess) {
        this.set('editText',  detail.response.text);
        this.set('isEditing', true);
      }
      this.set('checkingTranscript', false);
      this.async(function () {
        this.fire('iron-resize');
      });
    } else if (detail.response && detail.response.inProgress) {
      this.async(function () {
        this.$$("#checkTranscriptStatusAjax").generateRequest();
      }, 2000);
    } else if (detail.response && detail.response.error) {
      this.set('checkingTranscript', false);
      this.set('checkTranscriptError', true);
    } else {
      this.set('checkingTranscript', false);
    }
  },

  _hasPostAccess: function(post, gotAdminRights) {
    if (post && gotAdminRights) {
      if (this.checkPostAccess(post)!=null) {
        return true
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  goToPostIfNotHeader: function () {
    if (!this.headerMode) {
      this.goToPost();
    }
  },

  _postChanged: function (post) {
    this.set("checkingTranscript", false);
    this.set('checkTranscriptError', false);
    if (post && post.description) {
      this.async(function () {
        var description = this.$$("#description");
        if (description) {
          // Special case for law Issue from a parliement
          if (post.data && post.data.dataType==='lawIssue' && post.data.issueStatus) {
            description.content += " - "+post.data.issueStatus;
          }
        } else {
          console.error("Can't find description element");
        }
      });

      if (this.hasPostAccess && window.appGlobals.hasTranscriptSupport===true) {
        if (post.public_data && post.public_data.transcript && post.public_data.transcript.inProgress) {
          if (post.cover_media_type==="audio") {
            this.$$("#checkTranscriptStatusAjax").url = "/api/posts/"+post.id+'/audioTranscriptStatus';
            this.$$("#checkTranscriptStatusAjax").generateRequest();
            this.set('checkingTranscript', true);
          } else if (post.cover_media_type==="video") {
            this.$$("#checkTranscriptStatusAjax").url = "/api/posts/"+post.id+'/videoTranscriptStatus';
            this.$$("#checkTranscriptStatusAjax").generateRequest();
            this.set('checkingTranscript', true);
          }
        }
      }
    }
    if (post) {
      if (post.cover_media_type==='audio') {
        this.set('isAudioCover', true);
      } else {
        this.set('isAudioCover', false);
      }
    }
  },

  updateDescriptionIfEmpty: function (description) {
    if (this.post && (!this.post.description || this.post.description=='')) {
      this.set('post.description', description);
    }
  },

  _refresh: function () {
    dom(document).querySelector('yp-app').getDialogAsync("postEdit", function (dialog) {
      dialog.selected = 0;
      this.fire('refresh');
    }.bind(this));
  },

  _menuSelection: function (event, detail) {
    if (detail.item.id=="editMenuItem")
      this._openEdit();
    else if (detail.item.id=="deleteMenuItem")
      this._openDelete();
    else if (detail.item.id=="statusChangeMenuItem")
      this._openPostStatusChange();
    else if (detail.item.id=="moveMenuItem")
      this._openMovePost();
    else if (detail.item.id=="anonymizeMenuItem")
      this._openAnonymizeContent();
    else if (detail.item.id=="deleteContentMenuItem")
      this._openDeleteContent();
    else if (detail.item.id=="reportMenuItem")
      this._openReport();
    this.$$("paper-listbox").select(null);
  },

  _openMovePost: function () {
    dom(document).querySelector('yp-app').getDialogAsync("postMove", function (dialog) {
      dialog.setupAndOpen(this.post, this._refresh.bind(this));
    }.bind(this));
  },

  _openPostStatusChange: function () {
    dom(document).querySelector('yp-app').getDialogAsync("postStatusChangeEdit", function (dialog) {
      dialog.setup(this.post, null, this._refresh.bind(this));
      dialog.open('new', {postId: this.post.id, statusChange: true});
    }.bind(this));
  },

  _openEdit: function () {
    window.appGlobals.activity('open', 'post.edit');
    dom(document).querySelector('yp-app').getDialogAsync("postEdit", function (dialog) {
      dialog.setup(this.post, false, this._refresh.bind(this), this.post.Group);
      dialog.open('edit', {postId: this.post.id });
    }.bind(this));
  },

  _openReport: function () {
    window.appGlobals.activity('open', 'post.report');
    dom(document).querySelector('yp-app').getDialogAsync("apiActionDialog", function (dialog) {
      dialog.setup('/api/posts/' + this.post.id + '/report',
        this.t('reportConfirmation'),
        this._onReport.bind(this),
        this.t('post.report'),
        'PUT');
      dialog.open();
    }.bind(this));
  },

  _openDelete: function () {
    window.appGlobals.activity('open', 'post.delete');
    dom(document).querySelector('yp-app').getDialogAsync("apiActionDialog", function (dialog) {
      dialog.setup('/api/posts/' + this.post.id,
        this.t('post.deleteConfirmation'),
        this._onDeleted.bind(this));
      dialog.open();
    }.bind(this));
  },

  _openDeleteContent: function () {
    window.appGlobals.activity('open', 'postDeleteContent');
    dom(document).querySelector('yp-app').getDialogAsync("apiActionDialog", function (dialog) {
      dialog.setup('/api/posts/' + this.post.id + '/delete_content',
        this.t('postDeleteContentConfirmation'));
      dialog.open();
    }.bind(this));
  },

  _openAnonymizeContent: function () {
    window.appGlobals.activity('open', 'postAnonymizeContent');
    dom(document).querySelector('yp-app').getDialogAsync("apiActionDialog", function (dialog) {
      dialog.setup('/api/posts/' + this.post.id + '/anonymize_content',
        this.t('postAnonymizeContentConfirmation'));
      dialog.open();
    }.bind(this));
  },

  _onReport: function () {
    window.appGlobals.notifyUserViaToast(this.t('post.report')+': '+this.post.name);
  },

  _onDeleted: function () {
    this.dispatchEvent(new CustomEvent('yp-refresh-group', {bubbles: true, composed: true}));
    this.redirectTo("/group/"+this.post.group_id);
  }
});
