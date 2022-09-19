import { customElement, html, property } from "lit-element";
import { OavLowSecuritySmsLoginStyles } from "./oav-low-security-sms-login-styles.js";
import { OavBaseElement } from "./oav-base-element";

import "@polymer/paper-dialog/paper-dialog";
import "@polymer/paper-button/paper-button";
import "@polymer/paper-input/paper-input";
import "@polymer/paper-checkbox/paper-checkbox";
import { PaperDialogElement } from "@polymer/paper-dialog/paper-dialog";
import { PaperInputElement } from "@polymer/paper-input/paper-input";
import { PaperCheckboxElement } from "@polymer/paper-checkbox/paper-checkbox";
import { NumberFormatInternal } from "@formatjs/ecma402-abstract";

@customElement("oav-low-security-sms-login")
export class OavLowSecuritySmsLogin extends OavBaseElement {
  @property({ type: Object })
  configFromServer!: OavConfigFromServer;

  @property({ type: Number })
  correctAreaId: number | undefined;

  @property({ type: String })
  areaName: string | undefined;

  @property({ type: String })
  correctAreaName: string | undefined;

  @property({ type: String })
  smsNumber: string | undefined;

  @property({ type: Boolean })
  userSpinner = false;

  @property({ type: String })
  smsErrorMessage: string | undefined;

  @property({ type: String })
  smsCodeErrorMessage: string | undefined;

  @property({ type: String })
  submitText: string | undefined;

  @property({ type: Object })
  onLoginFunction: Function | undefined;

  @property({ type: Number })
  areaId: number | undefined;

  @property({ type: String })
  smsCode: string | undefined;

  @property({ type: Boolean })
  opened = false;

  @property({ type: Boolean })
  smsCodeSent = false;

  //TODO: Add better reset the process code
  //TODO: Fix errors

  static get styles() {
    return [OavLowSecuritySmsLoginStyles];
  }

  render() {
    return html`
      <paper-dialog id="dialog" with-backdrop>
        <div class="layout horizontal center-center">
          ${this.smsCodeSent
            ? html`<h2>${this.localize("enterSmsCode")}</h2> `
            : html`<h2>${this.localize("enterYourMobileNumber")}</h2>`}
        </div>

        ${this.smsCodeSent
          ? html`<div>${this.localize("enterSmsCodeDescription")}</div>`
          : html`<div>
              ${this.localize("enterYourMobileNumberDescription")}
            </div>`}

        <form is="iron-form" id="form">
          ${this.smsCodeSent
            ? html`
                <paper-input
                  id="smsCode"
                  type="text"
                  label="${this.localize("smsCode")}"
                  .value="${this.smsCode}"
                  minlength="4"
                  allowed-pattern="[0-9]"
                  .error-message="${this.smsCodeErrorMessage}"
                >
                </paper-input>
              `
            : html`
                <paper-input
                  id="yearOfBirth"
                  type="text"
                  minlength="4"
                  maxlength="4"
                  allowed-pattern="[0-9]"
                  label="${this.localize("lowSecuritySmsLoginYearOfBirth")}"
                >
                </paper-input>
                <paper-input
                  id="smsNumber"
                  type="text"
                  allowed-pattern="[0-9]"
                  label="${this.localize("mobileNumber")}"
                  .value="${this.smsNumber}"
                  minlength="6"
                  .error-message="${this.smsErrorMessage}"
                >
                </paper-input>
              `}
        </form>
        <div class="buttons layout vertical">
          <paper-button dialog-dismiss
            >${this.localize('cancel')}</paper-button
          >
          <paper-button autofocus @tap="${this._validateAndSend}"
            >${this.smsCodeSent
              ? html`${this.localize("sendSmsCode")}`
              : html`${this.localize("sendPhoneNumber")}`}</paper-button
          >
        </div>
      </paper-dialog>
    `;
  }

  firstUpdated(updates: Map<string | number | symbol, unknown>) {
    super.firstUpdated(updates);
  }

  constructor() {
    super();
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

  open(areaId: number, areaName: string, onLoginFunction: Function) {
    this.onLoginFunction = onLoginFunction;
    this.areaId = areaId;
    this.areaName = areaName;
    this.userSpinner = false;
    this.opened = false;
    this.smsNumber = "";
    (this.$$("#dialog") as PaperDialogElement).open();
  }

  _validateAndSend(e: CustomEvent) {
    if (this.smsCodeSent) {
      this.smsCode = (this.$$("#smsCode") as PaperInputElement).value!;
      if (this.smsCode) {
        //TODO: Better validation
        if (true) {
          fetch("/votes/sms_login", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              smsCode: this.smsCode,
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
        } else {
          this.fire("oav-error", this.localize("completeForm"));
          return false;
        }
      } else {
        this.fire("oav-error", this.localize("completeForm"));
        return false;
      }
    } else {
      this.smsNumber = (this.$$("#smsNumber") as PaperInputElement).value!;
      const yearOfBirth = (this.$$("#yearOfBirth") as PaperInputElement).value!;
      let yearOfBirthInt;
      //@ts-ignore
      if (yearOfBirth && !isNaN(yearOfBirth)) {
        yearOfBirthInt = parseInt(yearOfBirth);
      }
      if (!yearOfBirthInt ||
        yearOfBirthInt < this.configFromServer.client_config.lowSecuritySmsLoginMinYearOfBirth! ||
        yearOfBirthInt > this.configFromServer.client_config.lowSecuritySmsLoginMaxYearOfBirth!) {
          this.fire("oav-error", this.localize("lowSecuritySmsLoginAgeError"));
          return false;
      } else if (this.smsNumber) {
        if (this.smsNumber.length>6) {
          fetch("/votes/send_sms_login_code", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              smsNumber: this.smsNumber,
            }),
          })
            .then((response) => response.json())
            .then((response) => {
              if (response && response.ok === true) {
                this.smsCodeSent = true;
              } else {
                this.fire("oav-error", this.localize("error_not_authorized"));
              }
            })
            .catch(() => {
              this.fire("oav-error", this.localize("general_error"));
            });
          return true;
        } else {
          this.fire("oav-error", this.localize("enterValidPhoneNumber"));
          return false;
        }
      } else {
        this.fire("oav-error", this.localize("completeForm"));
        return false;
      }
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
