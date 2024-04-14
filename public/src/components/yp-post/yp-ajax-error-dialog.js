import "@polymer/polymer/polymer-legacy.js";
import "@material/web/dialog/dialog.js";
import "@material/web/button/text-button.js";
import { Polymer } from "@polymer/polymer/lib/legacy/polymer-fn.js";
import { html } from "@polymer/polymer/lib/utils/html-tag.js";

Polymer({
  _template: html`
    <md-dialog id="error">
      <div slot="content">
        <p id="errorText">${this.errorText}</p>
      </div>
      <div slot="actions">
        <md-text-button
          dialogAction="confirm"
          autofocus
          @click="${this.resetErrorText}"
          >OK</md-text-button
        >
      </div>
    </md-dialog>
  `,

  is: "yp-ajax-error-dialog",

  properties: {
    errorText: {
      type: String,
      value: "",
    },
  },

  showErrorDialog: function (errorText) {
    this.errorText = errorText;
    this.$$("#error").open();
    var errorDialog = this.$$("#error");
  },

  resetErrorText: function (event) {
    this.$.error.close();
    this.$.errorText = "";
  },
});
