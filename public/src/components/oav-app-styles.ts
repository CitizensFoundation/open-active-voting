/**
@license
Copyright (c) 2010-2021 Citizens Foundation
*/

import { css } from "lit-element";

export const OavAppStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  :host {
    font-family: var(--app-main-font-family, "Roboto", Arial, sans-serif);
  }
  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  app-header {
    z-index: 5000;
  }

  :host {
    display: block;
    --app-primary-color: #333;
    --app-secondary-color: black;
    --app-main-backround-color: #e0e0e0;
    --app-accent-color: var(--paper-orange-a700);
    --app-accent-color-light: var(--paper-orange-a200);
    --app-text-color: #ffffff;

    --paper-tabs-selection-bar-color: var(--paper-orange-a700);
    --paper-tabs-selection-bar: {
      color: var(--paper-orange-a700);
      border-bottom: 3px solid !important;
      border-bottom-color: var(--paper-orange-a700);
    }

    --primary-color-more-darker: var(--app-main-backround-color, #333);
    --primary-color: var(--app-main-backround-color, #333);

    color: var(--app-text-color);

    --app-header-background-color: var(--app-primary-color);
    --app-header-text-color: var(--app-text-color);
    --app-header-selected-color: var(--app-primary-color);
    --paper-icon-button-ink-color: var(--app-text-color);
  }

  app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: var(--app-header-background-color);
    color: var(--app-header-text-color);
    border-bottom: 1px solid #eee;
  }

  app-header[wide-and-ballot] {
    height: var(--app-budget-container-height, 238px);
    width: 100%;
    background-size: var(--app-budget-background-size, 1920px 238px);
    background-repeat: var(--app-budget-container-background-repeat, no-repeat);
    background-position: center;
    background-position-y: var(--app-budget-background-pos-y, top);
    background-color: #fff;
    background-image: var(--app-budget-container-background-image);
  }

  @media (max-width: 1024px) and (min-width: 604px) {
    app-header[wide-and-ballot] {
      background: var(--app-budget-votes-background-color, #e0e0e0);
    }
  }

  [main-title] {
    font-size: 30px;
    /* In the narrow layout, the toolbar is offset by the width of the
    drawer button, and the text looks not centered. Add a padding to
    match that button */
    padding-right: 44px;
  }

  main {
    display: block;
  }

  .main-content {
  }

  .main-content[has-ballot] {
    padding-top: 150px;
  }

  .page {
    display: none;
  }

  .page[active] {
    display: block;
  }

  @media (min-width: 1024px) {
    .toolbar-list {
      display: block;
    }
    .menu-btn {
      display: none;
    }

    .main-content[has-ballot] {
      padding-top: 240px;
    }

    /* The drawer button isn't shown in the wide layout, so we don't
    need to offset the title */
    [main-title] {
      padding-right: 0px;
    }
  }

  .toolbar-top {
    background-color: var(--app-header-background-color);
  }

  app-toolbar {
  }

  paper-toast {
    font-size: 16px;
    text-align: center;
    padding: 16px;
  }

  paper-toast[wide] {
    font-size: 18px;
    text-align: center;
  }

  .title {
    font-size: 24px;
  }

  paper-icon-button {
    width: 50px;
    height: 50px;
  }

  paper-icon-button.closeButton {
    width: 58px;
    height: 58px;
    color: var(--app-close-button-color, #fff);
  }

  @media (max-width: 640px) {
    paper-icon-button {
      width: 40px;
      height: 40px;
    }

    paper-icon-button.closeButton {
      width: 46px;
      height: 46px;
    }
  }

  @media (max-width: 1024px) {
    .title {
      font-size: 17px;
    }
  }

  .exitIconInBudget {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
  }

  .helpIconInBudget {
    position: absolute;
    top: 6px;
    right: 0;
    color: #fff;
  }

  @media (max-width: 1024px) and (min-width: 640px) {
    .exitIconInBudget {
      left: -4px;
      top: -4px;
    }

    paper-icon-button {
      width: 40px;
      height: 40px;
    }

    paper-icon-button.closeButton {
      width: 46px;
      height: 46px;
    }

    .helpIconInBudget {
      right: -2px;
      top: 0px;
    }
  }

  .helpIconInBudget {
    color: var(--app-help-icon-color, #fff);
  }

  .helpIconInBudget[select-voting-area] {
    color: var(--app-help-icon-select-area, #000);
  }

  .helpIconInBudget[select-voting-area][is-wide] {
    color: var(--app-help-icon-select-area-desktop, #000);
  }

  #helpContent h1 {
    line-height: 1em;
    font-size: 1.5em;
  }

  #favoriteIcon {
    color: var(--app-facvorite-icon-color, rgb(255, 215, 0));
    background-color: transparent;
    width: 50px;
    height: 50px;
    z-index: 2720;
    -webkit-filter: drop-shadow(1px 1px 10px #5f5f5f);
    filter: drop-shadow(1px 1px 10px #5f5f5f);
  }

  @media (max-width: 640px) {
    #favoriteIcon {
      width: 40px;
      height: 40px;
    }

    .helpIconInBudget {
      top: 2px;
    }
  }

  .budgetContainer {
  }

  .largeSpinner {
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
  }

  [hidden] {
    display: none !important;
  }

  paper-dialog {
    background-color: var(--primary-background-color);
  }

  .welcomeDialog {
    font-size: 22px;
    max-width: 420px;
    width: 420px;
    padding: 8px;
    padding-top: 0;
    line-height: 1.3;
    margin: 8px;
    text-align: center;
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
    font-family: var(--app-main-font-family, "Roboto", Arial, sans-serif);
  }

  .welcomeText {
    width: 420px;
    max-width: 420px;
    font-size: 15px;
    margin-top: 8px;
    font-family: var(--app-main-font-family, "Roboto", Arial, sans-serif);
  }

  .welcomeLogo {
    padding: 0;
    margin: 0;
    margin-top: 8px;
    max-width: var(--app-welcome-logo-max-width, 280px);
    width: var(--app-welcome-logo-width, 280px);
    height: var(--app-welcome-logo-height, 116px);
    margin-bottom: -4px;
  }

  .welcomeLogoContainer {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  paper-button.continueButton {
    background-color: var(--app-continue-button-color, var(--app-accent-color));
    color: #fff;
    margin: 8px;
    margin-bottom: 8px;
    font-size: 18px;
    font-family: var(--app-main-font-family, "Roboto", Arial, sans-serif);
  }

  paper-button.generalButton {
    color: var(--app-accent-color);
    background-color: #fff;
    margin: 8px;
  }

  .closeButton {
    font-weight: bold;;
  }

  @media (max-width: 1024px) {
    .welcomeDialog {
      font-size: 16px;
      padding: 8px;
      padding-top: 0;
      text-align: center;
    }

    #helpDialog {
      max-width: 100%;
      margin: 0 !important;
    }

    paper-dialog {
      padding: 0;
      margin: 0;
      margin-left: 24px;
      margin-right: 24px;
    }

    .heading {
      font-size: 24px;
    }

    .welcomeText {
      width: 100%;
    }
    paper-button.continueButton {
      font-size: 16px;
    }

    .welcomeLogo {
      width: var(--app-welcome-logo-mobile-width, 200px);
      height: var(--app-welcome-logo-mobile-height, 83px);
    }
  }

  @media (max-width: 340px) {
    .welcomeDialog {
      font-size: 13px;
    }
    .heading {
      font-size: 19px;
    }
    paper-button.continueButton {
      font-size: 16px;
    }
    .welcomeLogo {
      margin-left: 16px;
      display: none;
    }
    .welcomeLogologoContainer {
      display: none;
    }
    paper-button.continueButton {
      margin-top: 0;
    }
  }

  .welcomeLogoContainer {
  }

  paper-dialog {
    z-index: 1000000;
  }

  .langSelectionText {
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .langSelect {
    cursor: pointer;
    margin-left: 4px;
  }

  .langSelect[is-selected] {
    text-decoration: underline;
  }
`;
