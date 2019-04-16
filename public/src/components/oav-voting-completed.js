import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { OavShadowStyles } from './oav-shadow-styles.js';

class OavVotingCompleted extends PageViewElement {
  static get properties() {
    return {
      votingCompleteConfig: { type: Object }
    }
  }

  static get styles() {
    return [ OavShadowStyles ]
  }

  render() {
    return html`
      <div class="layout vertical center-center mainContainer">
        <div  class="topMaterial">
          <img class="desktopLogo" src="${this.votingCompleteConfig.logo}"/>
          <div class="completedText">
            <div>${this.localize('thank_you_1')}</div>
            <div class="smaller">${this.localize('thank_you_2')}</div>
            <div class="smaller">${this.localize('thank_you_3')}</div>
            <div class="layout vertical center-center textSharingContainer" ?hidden="${!this.votingCompleteConfig.shareUrl}">
              <div class="textSharing">
                ${this.localize('share_vote_by_pressing')}
              </div>
              <div class="shareIconButton">
                <paper-share-button raised on-share-tap="_shareTap" class="shareIconFinal"
                                    horizontal-align="left" id="shareButton"
                                    title="${this.localize('share_vote_by_pressing')}"
                                    facebook twitter popup url$="${this.votingCompleteConfig.shareUrl}">
                </paper-share-button>
              </div>
            </div>
            <div class="smaller footerText" ?hidden="${this.votingCompleteConfig.showFooterText}">${this.localize('thank_you_4')}</div>
          </div>
       </div>
      </div>
    `
  }
}

window.customElements.define('oav-view404', OavView404);
