// Locale implementation inspired by https://github.com/PolymerElements/app-localize-behavior

import IntlMessageFormat from 'intl-messageformat/src/main.js';
window.IntlMessageFormat = IntlMessageFormat;

import { LitElement } from 'lit-element';

export class PageViewElement extends LitElement {

  shouldUpdate() {
    return this.active;
  }

  static get properties() {
    return {
      active: { type: Boolean },
      wide: {
        type: Boolean,
        value: false
      },
      language: { type: String },
      __localizationCache: { type: Object },
      localeResources: { type: Object },
      formats: { type: Object }
    }
  }

  constructor() {
    super();
    this.__localizationCache = {
      messages: {}, /* Unique localized strings. Invalidated when the language */
    }

    this.formats = {};
  }

  localize() {
    var key = arguments[0];
    if (!key || !this.localeResources || !this.language || !this.localeResources[this.language])
      return;

    var translatedValue = this.localeResources[this.language][key];

    if (!translatedValue) {
      return key;
    }

    var messageKey = key + translatedValue;
    var translatedMessage = this.__localizationCache.messages[messageKey];

    if (!translatedMessage) {
      translatedMessage =
          new IntlMessageFormat(translatedValue, this.language, this.formats);
      this.__localizationCache.messages[messageKey] = translatedMessage;
    }

    var args = {};
    for (var i = 1; i < arguments.length; i += 2) {
      args[arguments[i]] = arguments[i + 1];
    }

    return translatedMessage.format(args);
  }

  updated(changedProps) {
    if (changedProps.has('language')) {
      this.requestUpdate();
    }
  }

  $$(id) {
    return this.shadowRoot.getElementById(id);
  }

  fire(eventName, data) {
    const event = new CustomEvent(eventName, data);
    this.dispatchEvent(event);
  }

  firstUpdated() {
    installMediaQueryWatcher(`(min-width: 1000px)`,
      (matches) => {
        if (matches)
          this.wide = true;
        else
          this.wide = false;
      });
  }
}
