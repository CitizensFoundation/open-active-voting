import { html } from 'lit-element';
import { OavInsecureEmailLoginStyles } from './oav-insecure-email-login-styles';
import { OavBaseElement } from './oav-base-element';

import '@polymer/paper-dialog';
import '@polymer/paper-input';
import '@polymer/paper-checkbox';
import '@polymer/paper-button';

class OavInsecureEmailLogin extends OavBaseElement {
  static get properties() {
    return {
      correctAreaId: {
        type: String
      },

      areaName: {
        type: String
      },

      correctAreaName: {
        type: String
      },

      postCode: {
        type: String
      },

      userSpinner: {
        type: Boolean
      },

      confirmedAge: {
        type: Boolean
      },

      postCodeValidationPattern: {
        type: String
      },

      emailValidationPattern: {
        type: String
      },

      emailErrorMessage: {
        type: String
      },

      passwordErrorMessage: {
        type: String
      },

      name: {
        type: String
      },

      email: {
        type: String
      },

      submitText: {
        type: String
      },

      onLoginFunction: {
        type: Function
      },

      areaId: String,

      configFromServer: String,

      postCodes: {
        type: Object
      },

      postCodesAreas: {
        type: Object
      },

      postCodesAreasNames: {
        type: Object
      }
    };
  }

  static get styles() {
    return [
      OavInsecureEmailLoginStyles
    ];
  }

  render() {
    return html`
      <paper-dialog id="dialog" with-backdrop>
        <div class="layout horizontal center-center">
          <h2>${this.localize('loginWithEmailAndPostCode')}</h2>
        </div>

        <form is="iron-form" id="form">
          <paper-input id="email"
                        type="text"
                        label="${this.localize('userEmail')}"
                        value="${this.email}"
                        minlength="5"
                        pattern="${thio.emailValidationPattern}"
                        error-message="${this.emailErrorMessage}">
          </paper-input>

          <paper-input id="postCode"
                        type="text"
                        label="${this.localize('postCode')}"
                        value="${this.postCode}"
                        maxlength="${this.configFromServer.insecureEmailPostcodeMaxLength}">
          </paper-input>

          <div class="postcodeWrongWard" hidden?="${!this.correctAreaId}">
            ${this.localize("thisPostCodeDoesNotBelongTo")} ${this.areaName}.<br><br>
            ${this.localize("forThisCodeYouCanVoteHere")} <a href="/area-ballot/${this.correctAreaId}" @tap="${this._resetCorrectArea()}">${this.correctAreaName}</a>
            ${this.localize("orEnterApostCodeThatBelongsTo")} ${this.areaName}.
          </div>

          ${this.configFromServer.insecureEmailAgeLimit ? html`
            <paper-checkbox id="confirmedAge" class="checkBox" name="confirmedAge">
              ${this.localize('confirmedAge')}
            </paper-checkbox>
          `
          : html`` }


        </form>
        <div class="buttons layout vertical">
          <oav-ajax id="loginAjax" method="POST" url="/votes/insecure_email_login" on-response="_loginResponse"></oav-ajax>
          <paper-button autofocus on-tap="_validateAndSend">${this.localize('authenticateAndVote')}</paper-button>
        </div>
      </paper-dialog>
    `;
  }

  updated(changedProps) {
    super.updated(changedProps);
  }

  constructor() {
    super();
    this.emailValidationPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
    this.confirmedAge = false;


  }

  _resetCorrectArea() {
    setTimeout(() => {
      this.correctAreaId = null;
      this.correctAreaName = null;
      this.close();
    }, 100);
  }

  isValidPostcode(areaId, postCode) {
    postCode = postCode.replace(/\s/g, "").toUpperCase();
    return (this.confirFromServer.insecureEmailPostCodes[areaId].indexOf(postCode) > -1)
  }
}

window.customElements.define('oav-area-ballot-item', OavAreaBallotItem);
