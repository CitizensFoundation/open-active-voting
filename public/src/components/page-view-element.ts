// Locale implementation inspired by https://github.com/PolymerElements/app-localize-behavior

import { customElement, property } from "lit/decorators.js";
import { OavBaseElement } from './oav-base-element.js';

export class PageViewElement extends OavBaseElement {
  @property({ type: Boolean })
  active = false;

  shouldUpdate() {
    return this.active;
  }
}
