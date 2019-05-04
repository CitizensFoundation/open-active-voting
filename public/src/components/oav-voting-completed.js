import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { OavShadowStyles } from './oav-shadow-styles.js';
import { OavAreaVotingCompletedStyles } from './oav-voting-completed-styles';
import { OavFlexLayout } from './oav-flex-layout.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

class OavVotingCompleted extends PageViewElement {
  static get properties() {
    return {
      configFromServer: { type: Object }
    }
  }

  static get styles() {
    return [ OavShadowStyles, OavFlexLayout, OavAreaVotingCompletedStyles ]
  }

  render() {
    return html`
      ${ this.configFromServer ?  html`
        <div class="layout vertical center-center mainContainer">
          <paper-icon-button class="helpIcon" alt="${this.localize('help')}" icon="help-outline" @click="${() => { this.fire("oav-open-help") }}"></paper-icon-button>
          <paper-icon-button class="exitIcon" alt="${this.localize('close')}" icon="closeExit" @click="${() => { window.location='' }}"></paper-icon-button>

          <div class="topMaterial shadow-elevation-8dp vertical center-center">
            <div>
              <img class="desktopLogo self-center" src="${this.configFromServer.client_config.votingCompleteConfig.logo}"/>
            </div>
            <div class="completedText">
              <div>${this.localize('thank_you_1')}</div>
              <div class="smaller">${this.localize('thank_you_2')}</div>
              <div class="smaller">${this.localize('thank_you_3')}</div>
              <div class="center-center textSharingContainer" ?hidden="${!this.configFromServer.client_config.votingCompleteConfig.shareUrl}">
                <div class="textSharing">
                  ${this.localize('share_vote_by_pressing')}
                </div>
                <div class="shareIconButton">
                  <paper-share-button raised on-share-tap="_shareTap" class="shareIconFinal"
                                      horizontal-align="left" id="shareButton"
                                      title="${this.localize('share_vote_by_pressing')}"
                                      facebook twitter popup url="${this.configFromServer.client_config.votingCompleteConfig.shareUrl}">
                  </paper-share-button>
                </div>
              </div>
              <div class="smaller footerText" ?hidden="${!this.configFromServer.client_config.votingCompleteConfig.showFooterText}">${this.localize('thank_you_4')}</div>
            </div>
          </div>
        </div>
      ` : html`` }
    `
  }
}

window.customElements.define('oav-voting-completed', OavVotingCompleted);
