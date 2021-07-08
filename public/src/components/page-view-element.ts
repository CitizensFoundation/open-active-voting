// Locale implementation inspired by https://github.com/PolymerElements/app-localize-behavior

import {  property, customElement } from 'lit-element';
import { OavBaseElement } from './oav-base-element.js';

export class PageViewElement extends OavBaseElement {
  @property({ type: Boolean })
  active = false;

  shouldUpdate() {
    return this.active;
  }
}
