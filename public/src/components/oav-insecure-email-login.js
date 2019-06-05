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
    this.postCodesAreas = {};
    this.postCodesAreasNames = {};
    Object.entries(this.confirFromServer.insecureEmailLoginPostCodes).forEach(entry => {
      let areaId = entry[0];
      let postCodes = entry[1];
      postCodes.forEach(postCode => {
        this.postCodesAreas[postCode] = areaId;
        this.postCodesAreasNames[postCode] = this.confirFromServer.insecureEmailLoginAreaNames[areaId];
      })
    });
  }

  _resetCorrectArea() {
    setTimeout(() => {
      this.correctAreaId = null;
      this.correctAreaName = null;
      this.close();
    }, 100);
  }

  _loginCompleted() {
    this.onLoginFunction();
    this.close();
  }

  isValidPostcode(areaId, postCode) {
    postCode = postCode.replace(/\s/g, "").toUpperCase();
    return (this.confirFromServer.insecureEmailLoginPostCodes[areaId].indexOf(postCode) > -1)
  }

  getAreaForPostCode(postCode) {
    postCode = postCode.replace(/\s/g, "").toUpperCase();
    return { id: this.postCodesAreas[postCode], name: this.postCodesAreasNames[postCode] };
  }

  open(areaId, areaName, onLoginFunction) {
    this.onLoginFunction = onLoginFunction;
    this.areaId = areaId;
    this.areaName = areaName;
    this.userSpinner = false;
    this.opened = false;
    this.postCode = "";
    this.confirmedAge = false;
    this.email = "";
    this.$$("#dialog").open();
  }

  _validateAndSend(e) {
    if (this.$$("#form").checkValidity() && this.email && this.postCode && this.$$("#confirmedAge").checked) {
      if (this.isValidPostcode(this.areaId, this.postCode)) {
        fetch('/votes/insecure_email_login', {
          method: "POST",
          cache: "no-cache",
          credentials: 'same-origin',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({email: this.email.toLowerCase(), postCode: this.postCode})
        })
        .then(response => response.json())
        .then(response => {
          if (response && response.loggedIn === true) {
            this._loginCompleted();
          } else {
            this.fire('oav-error', this.localize('error_not_authorized'));
          }
        })
        return true;
      } else if (this.getAreaForPostCode(this.postCode)) {
        var areaInfo = this.getAreaForPostCode(this.postCode);
        this.correctAreaId = areaInfo["id"];
        this.correctAreaName = areaInfo["name"];
      } else {
        this.fire("oav-error", this.localize('enterValidPostcode'));
      }
    } else {
      this.fire("oav-error", this.localize('completeForm'));
      return false;
    }
  }

  close() {
    var dialog = this.$$("#dialog");
    if (dialog) {
      dialog.close();
    }
    this.opened = false;
    this.userSpinner = false;
  }
}

window.customElements.define('oav-insecure-email-login', OavInsecureEmailLogin);
