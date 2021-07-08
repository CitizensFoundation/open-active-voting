import { customElement, html, property } from "lit-element";
import { OavInsecureEmailLoginStyles } from "./oav-insecure-email-login-styles.js";
import { OavBaseElement } from "./oav-base-element";

import "@polymer/paper-dialog/paper-dialog";
import "@polymer/paper-button/paper-button";
import "@polymer/paper-input/paper-input";
import "@polymer/paper-checkbox/paper-checkbox";
import { PaperDialogElement } from "@polymer/paper-dialog/paper-dialog";
import { PaperInputElement } from "@polymer/paper-input/paper-input";
import { PaperCheckboxElement } from "@polymer/paper-checkbox/paper-checkbox";

@customElement("oav-insecure-email-login")
export class OavInsecureEmailLogin extends OavBaseElement {
  @property({ type: Object })
  configFromServer!: OavConfigFromServer;

  @property({ type: Number })
  correctAreaId: number | undefined;

  @property({ type: String })
  areaName: string | undefined;

  @property({ type: String })
  correctAreaName: string | undefined;

  @property({ type: String })
  postCode: string | undefined;

  @property({ type: Boolean })
  userSpinner = false;

  @property({ type: Boolean })
  confirmedAge = false;

  @property({ type: String })
  postCodeValidationPattern: string | undefined;

  @property({ type: String })
  emailValidationPattern =
    "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  @property({ type: String })
  emailErrorMessage: string | undefined;

  @property({ type: String })
  passwordErrorMessage: string | undefined;

  @property({ type: String })
  name: string | undefined;

  @property({ type: String })
  email: string | undefined;

  @property({ type: String })
  submitText: string | undefined;

  @property({ type: Object })
  onLoginFunction: Function | undefined;

  @property({ type: Number })
  areaId: number | undefined;

  @property({ type: Object })
  postCodes: Record<string, string> = {};

  @property({ type: Object })
  postCodesAreas: Record<string, number> = {};

  @property({ type: Object })
  postCodesAreasNames: Record<string, string> = {};

  @property({ type: Boolean })
  opened = false;

  static get styles() {
    return [OavInsecureEmailLoginStyles];
  }

  render() {
    return html`
      <paper-dialog id="dialog" with-backdrop>
        <div class="layout horizontal center-center">
          <h2>${this.localize("loginWithEmailAndPostCode")}</h2>
        </div>

        <form is="iron-form" id="form">
          <paper-input
            id="email"
            type="text"
            label="${this.localize("userEmail")}"
            .value="${this.email}"
            minlength="5"
            .error-message="${this.emailErrorMessage}"
          >
          </paper-input>

          <paper-input
            id="postCode"
            type="text"
            label="${this.localize("postCode")}"
            .value="${this.postCode}"
            maxlength="${this.configFromServer.client_config
              .insecureEmailPostcodeMaxLength}"
          >
          </paper-input>

          <div class="postcodeWrongWard" ?hidden="${!this.correctAreaId}">
            ${this.localize("thisPostCodeDoesNotBelongTo")} ${this.areaName}.<br /><br />
            ${this.localize("forThisCodeYouCanVoteHere")}
            <a
              href="/area-ballot/${this.correctAreaId}"
              @click="${this._resetCorrectArea}"
              >${this.correctAreaName}</a
            >
            ${this.localize("orEnterApostCodeThatBelongsTo")} ${this.areaName}.
          </div>

          ${this.configFromServer.client_config.insecureEmailAgeLimit
            ? html`
                <paper-checkbox
                  id="confirmedAge"
                  class="checkBox"
                  name="confirmedAge"
                >
                  ${this.localize("confirmAge")}
                </paper-checkbox>
              `
            : html``}
        </form>
        <div class="buttons layout vertical">
          <paper-button autofocus @tap="${this._validateAndSend}"
            >${this.localize("authenticateAndVote")}</paper-button
          >
        </div>
      </paper-dialog>
    `;
  }

  firstUpdated(updates: Map<string | number | symbol, unknown>) {
    super.firstUpdated(updates);
    Object.entries(
      this.configFromServer.client_config.insecureEmailLoginPostCodes
    ).forEach((entry) => {
      let areaId: number = parseInt(entry[0]);
      let postCodes = entry[1];
      postCodes.forEach((postCode) => {
        this.postCodesAreas[postCode] = areaId;
        this.postCodesAreasNames[postCode] =
          this.configFromServer.client_config.insecureEmailLoginAreaNames[
            areaId
          ];
      });
    });
  }

  constructor() {
    super();
    this.confirmedAge = false;
  }

  _resetCorrectArea() {
    setTimeout(() => {
      this.correctAreaId = undefined;
      this.correctAreaName = undefined;
      this.close();
    }, 100);
  }

  _loginCompleted() {
    this.onLoginFunction!();
    this.close();
  }

  isValidPostcode(areaId: number, postCode: string) {
    postCode = postCode.replace(/\s/g, "").toUpperCase();
    return (
      this.configFromServer.client_config.insecureEmailLoginPostCodes[
        areaId
      ].indexOf(postCode) > -1
    );
  }

  getAreaForPostCode(postCode: string) {
    postCode = postCode.replace(/\s/g, "").toUpperCase();
    if (this.postCodesAreas[postCode] && this.postCodesAreasNames[postCode]) {
      return {
        id: this.postCodesAreas[postCode],
        name: this.postCodesAreasNames[postCode],
      } as OavAreaForPostcodes;
    } else {
      return null;
    }
  }

  open(areaId: number, areaName: string, onLoginFunction: Function) {
    this.onLoginFunction = onLoginFunction;
    this.areaId = areaId;
    this.areaName = areaName;
    this.userSpinner = false;
    this.opened = false;
    this.postCode = "";
    this.confirmedAge = false;
    this.email = "";
    (this.$$("#dialog") as PaperDialogElement).open();
  }

  _validateAndSend(e: CustomEvent) {
    this.email = (this.$$("#email") as PaperInputElement).value!;
    this.postCode = (this.$$("#postCode") as PaperInputElement).value!;
    if (
      this.email &&
      this.postCode &&
      (this.$$("#confirmedAge") as PaperCheckboxElement).checked
    ) {
      const re = new RegExp(this.emailValidationPattern);
      if (re.test(this.email)) {
        if (this.isValidPostcode(this.areaId!, this.postCode)) {
          fetch("/votes/insecure_email_login", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              insecure_email: this.email.toLowerCase(),
              postCode: this.postCode,
            }),
          })
            .then((response) => response.json())
            .then((response) => {
              if (response && response.ok === true) {
                this._loginCompleted();
              } else {
                this.fire("oav-error", this.localize("error_not_authorized"));
              }
            })
            .catch(() => {
              this.fire("oav-error", this.localize("general_error"));
            });
          return true;
        } else if (this.getAreaForPostCode(this.postCode)) {
          var areaInfo = this.getAreaForPostCode(this.postCode);
          this.correctAreaId = areaInfo!["id"];
          this.correctAreaName = areaInfo!["name"];
        } else {
          this.fire("oav-error", this.localize("enterValidPostcode"));
        }
      } else {
        this.fire("oav-error", this.localize("enterValidEmail"));
      }
    } else {
      this.fire("oav-error", this.localize("completeForm"));
      return false;
    }
  }

  close() {
    var dialog = this.$$("#dialog") as PaperDialogElement;
    if (dialog) {
      dialog.close();
    }
    this.opened = false;
    this.userSpinner = false;
  }
}
