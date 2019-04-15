import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-spinner/paper-spinner.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
import { ypLocalizationBridgeBehavior } from './yp-localization-bridge-behavior.js';

Polymer({
  _template: html`
    <style include="iron-flex iron-flex-alignment">
      :host {
        background: transparent;
      }

      .large {
        height: 64px !important;
        width: 64px !important;
        --paper-spinner-stroke-width: 7px;
      }

      paper-spinner {
        background: transparent;
      }

      paper-spinner[active] {
        display: block;
      }

      paper-spinner {
        margin-top: 8px;
        display: none;
      }

      [hidden] {
        display: none !important;
      }
    </style>

    <paper-spinner id="spinner" hidden\$="[[!useSpinner]]"></paper-spinner>

    <iron-ajax id="ajax" url="[[url]]" params="[[params]]" auto="[[auto]]" method="[[method]]" body="[[body]]" bubbles="" handle-as="json" content-type="application/json" on-error="_error" on-response="_response" loading="{{loading}}">
    </iron-ajax>
`,

  is: 'yp-ajax',

  behaviors: [
    ypLocalizationBridgeBehavior
  ],

  properties: {

    url: {
      type: String,
      value: ""
    },

    method: {
      type: String,
      value: "GET"
    },

    loading: {
      type: Boolean
    },

    params: {
      type: Object,
      value: {}
    },

    body: {
      type: Object,
      notify: true
    },

    auto: {
      type: Boolean,
      value: false
    },

    errorText: {
      type: String,
      value: ""
    },

    useDialog: {
      type: Boolean,
      value: true,
      notify: true
    },

    useSpinner: {
      type: Boolean,
      value: true
    },

    largeSpinner: {
      type: Boolean,
      value: false
    },

    dispatchError: {
      type: Boolean,
      value: false
    },

    retryMethodAfter401Login: {
      type: Function,
      value: null
    },

    active: {
      type: Boolean,
      reflectToAttribute: true,
      notify: true
    },

    disableUserError: {
      type: Boolean,
      value: false
    }
  },

  _response: function (event) {
    this._setActive(false);
  },

  ready: function() {
    if (this.auto) {
      this._setActive(true);
    }
    if (this.largeSpinner) {
      this.$.spinner.toggleClass('large',true);
    }
  },

  _setActive: function (active) {
    this.set('active', active);
    this.$.spinner.active = active;
  },

  _error: function (event) {
    this._setActive(false);
    if (this.dispatchError) {
      event.stopPropagation();
      if (event.detail.request.xhr.response && event.detail.request.xhr.response.error) {
        this.fire("error", event.detail.request.xhr.response.error);
      } else if (event.detail.request.xhr.response && event.detail.request.xhr.response.message) {
        this.fire("error", event.detail.request.xhr.response.message);
      } else if (event.detail.request.xhr.statusText) {
        this.fire("error", event.detail.request.xhr.statusText);
      } else {
        this.fire("error", event.detail.error);
      }
    } else if (event.detail.error && event.detail.error.message &&
               this._is401(event.detail.error.message) && !window.appUser.user &&
               this.retryMethodAfter401Login) {
      window.appUser.loginFor401(this.retryMethodAfter401Login);
    } else if (this.useDialog && !this.disableUserError) {
      this.showErrorDialog(event.detail.error);
    }
  },

  _is401: function (error) {
    return (error && error.indexOf('status code: 401') > -1)
  },

  generateRequest: function () {
    this._setActive(true);
    this.$.ajax.generateRequest();
  },

  setBody: function(body) {
    this.$.ajax.body = body;
  },

  _transformErrorText: function (errorText) {
    console.log(errorText);
    if (typeof errorText === 'string') {
      if (errorText && errorText.indexOf('status code: 404') > -1) {
        return this.t('errorNotFound');
      } else if (errorText && errorText.indexOf('status code: 500') > -1) {
        return this.t('generalError');
      } else if (errorText && errorText.indexOf('status code: 401') > -1) {
        return this.t('errorNotAuthorized');
      } else if (errorText && errorText.indexOf('503') > -1) {
        return this.t('errorCantConnect');
      } else {
        return errorText;
      }
    } else {
      return this.t('generalError');
    }
  },

  showErrorDialog: function(errorText) {
    var text;
    if (errorText.message) {
      text = errorText.message;
    } else {
      text = errorText;
    }
    dom(document).querySelector('yp-app').getDialogAsync("errorDialog", function (dialog) {
      dialog.showErrorDialog(this._transformErrorText(text));
    }.bind(this));
  },

  _resetErrorText: function(event) {
    dom(document).querySelector('yp-app').getDialogAsync("errorDialog", function (dialog) {
      dialog.resetErrorText();
    });
  }
})
