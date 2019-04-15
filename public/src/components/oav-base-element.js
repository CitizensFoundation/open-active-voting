// Locale implementation inspired by https://github.com/PolymerElements/app-localize-behavior

import IntlMessageFormat from 'intl-messageformat/src/main.js';
window.IntlMessageFormat = IntlMessageFormat;

import { LitElement } from 'lit-element';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';

export class OavBaseElement extends LitElement {

  static get properties() {
    return {
      wide: {
        type: Boolean,
        value: false
      },
      language: { type: String }
    }
  }

  constructor() {
    super();
  }

  activity(type, object) {
    this.sendToGoogleAnalytics('send', 'event', object, type);
  }

  sendToGoogleAnalytics(type, parameterA, parameterB, parameterC) {
    if (typeof ga == 'function') {
      if (parameterB && parameterC) {
        ga(type,parameterA,parameterB,parameterC);
      } else {
        ga(type, parameterA);
      }
    } else {
      console.warn("Google analytics message not sent for type:"+type+" parameterA:"+parameterA+" parameterB:"+parameterB+" parameterC:"+parameterC);
    }
  }

  localize() {
    var key = arguments[0];
    if (!key || !window.localeResources || !(this.language && window.language) || !window.localeResources[this.language])
      return key;

    var translatedValue = window.localeResources[this.language || window.language][key];

    if (!translatedValue) {
      return key;
    }

    var messageKey = key + translatedValue;
    var translatedMessage = window.__localizationCache.messages[messageKey];

    if (!translatedMessage) {
      translatedMessage =
          new IntlMessageFormat(translatedValue, this.language, {});
      window.__localizationCache.messages[messageKey] = translatedMessage;
    }

    var args = {};
    for (var i = 1; i < arguments.length; i += 2) {
      args[arguments[i]] = arguments[i + 1];
    }

    return translatedMessage.format(args);
  }

  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('language')) {
      //this.requestUpdate();
    }
  }

  $$(id) {
    return this.shadowRoot.querySelector(id);
  }

  fire(eventName, data) {
    const event = new CustomEvent(eventName, { detail: data, bubbles: true, composed: true });
    this.dispatchEvent(event);
  }
}
