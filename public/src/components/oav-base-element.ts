// Locale implementation inspired by https://github.com/PolymerElements/app-localize-behavior

declare global {
  interface Window {
    IntlMessageFormat: any;
    localeResources: any;
    language: string;
    __localizationCache: any;
    appBallot: OavAreaBallot;
    appLastArea: string | undefined;
    ShadyCSS: any;
    localize: any;
  }
}

import IntlMessageFormat from "intl-messageformat";
window.IntlMessageFormat = IntlMessageFormat;

import { customElement, LitElement, property } from "lit-element";
import { OavAreaBallot } from "./oav-area-ballot";

export class OavBaseElement extends LitElement {
  @property({ type: Boolean })
  wide = false;

  @property({ type: String })
  language: string | undefined;

  constructor() {
    super();
  }

  activity(type: string, object: any) {
    this.sendToGoogleAnalytics("send", "event", object, type);
  }

  sendToGoogleAnalytics(
    type: string,
    parameterA: any,
    parameterB: any,
    parameterC: any
  ) {
    //@ts-ignore
    if (typeof ga == "function") {
      if (parameterB && parameterC) {
        //@ts-ignore
        ga(type, parameterA, parameterB, parameterC);
      } else {
        //@ts-ignore
        ga(type, parameterA);
      }
    } else {
      console.warn(
        "Google analytics message not sent for type:" +
          type +
          " parameterA:" +
          parameterA +
          " parameterB:" +
          parameterB +
          " parameterC:" +
          parameterC
      );
    }
  }

  formatNumber(
    value: number,
    currencyIcon: string | undefined,
    numberSeperator: string | undefined = undefined
  ) {
    if (!currencyIcon) currencyIcon = "";

    if (!numberSeperator) numberSeperator = ",";

    if (value) {
      return (
        currencyIcon +
        value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, numberSeperator)
      );
    } else {
      return currencyIcon + "0";
    }
  }

  localize(...localizeArgs: any[]) {
    var key = localizeArgs[0];
    if (
      !key ||
      !window.localeResources ||
      !(this.language && window.language) ||
      !window.localeResources[this.language]
    )
      return key;

    var translatedValue =
      window.localeResources[this.language || window.language][key];

    if (!translatedValue) {
      return key;
    }

    var messageKey = key + translatedValue;
    var translatedMessage = window.__localizationCache.messages[messageKey];

    if (!translatedMessage) {
      translatedMessage = new IntlMessageFormat(
        translatedValue,
        this.language,
        {}
      );
      window.__localizationCache.messages[messageKey] = translatedMessage;
    }

    var args: any = {};
    for (var i = 1; i < arguments.length; i += 2) {
      args[arguments[i]] = arguments[i + 1];
    }

    return translatedMessage.format(args);
  }

  updated(changedProps: Map<string | number | symbol, unknown>) {
    super.updated(changedProps);
  }

  $$(id: string) {
    return this.shadowRoot!.querySelector(id);
  }

  fire(eventName: string, data: any | undefined = undefined) {
    const event = new CustomEvent(eventName, {
      detail: data,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}
