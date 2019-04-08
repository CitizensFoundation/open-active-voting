// Locale implementation inspired by https://github.com/PolymerElements/app-localize-behavior

import IntlMessageFormat from 'intl-messageformat/src/main.js';
window.IntlMessageFormat = IntlMessageFormat;

import { LitElement } from 'lit-element';
import { OavBaseElement } from './oav-base-element';

export class PageViewElement extends OavBaseElement {

  shouldUpdate() {
    return this.active;
  }

  static get properties() {
    return {
      active: { type: Boolean },
    }
  }
}
