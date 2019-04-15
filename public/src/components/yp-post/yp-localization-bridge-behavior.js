import '@polymer/polymer/polymer-legacy.js';

/** @polymerBehavior Polymer.ypLocalizationBridgeBehavior */
export const ypLocalizationBridgeBehavior = {

  t: function (value) {
    if (window.localize) {
      return window.localize(value);
    } else {
      return value;
    }
  }
};
