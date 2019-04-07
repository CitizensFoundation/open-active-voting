import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

class OavSelectVotingArea extends PageViewElement {

  static get properties() {
    return {
      configFromServer: { type: Object }
    }
  }

  static get styles() {
    return [
      css`${unsafeHTML(this.configFromServer.selectVotingAreaCSS)}`
    ];
  }

  render() {
    return html`${this.wide ?
      html`${unsafeHTML(this.setupText(this.configFromServer.selectVotingAreaMobileHTML))}` :
      html`${unsafeHTML(this.setupText(this.configFromServerselectVotingAreaDesktopHTML))}`}`;
  }

  setupText(text) {
    this.configFromServer.areas.forEach( (area) => {
      text = text.replace('$$areaCount'+area.id+'$$$', area.voter_count);
    });

    text = text.replace('$$$totalVoterCount$$$', this.configFromServer.voter_count);
    text = text.replace('$$$mainInfoText$$$', this.localize('mainInfo'));
    text = text.replace('$$$selectArea$$$', this.localize('selectAreaInfo'));

    return text;
  }

  updated(changedProps) {
    super(changedProps)
  }

  firstUpdated() {
    super();
  }
}

window.customElements.define('oav-select-voting-area', OavSelectVotingArea);
