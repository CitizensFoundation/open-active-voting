/**
@license
Copyright (c) 2010-2021 Citizens Foundation
*/

import { css } from "lit";

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
  }

  section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
  }

  app-header {
    z-index: 5000;
  }

  :host {
    display: block;
      border-bottom: 3px solid !important;
      border-bottom-color: var(--md-sys-color-primary);
    }


  app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: var(--md-sys-color-surface-variant);
    border-bottom: 1px solid var(--md-sys-color-primary);
  }

  app-header[wide-and-ballot] {
    height: var(--app-budget-container-height, 238px);
    width: 100%;
    background-size: var(--app-budget-background-size, 1920px 238px);
    background-repeat: var(--app-budget-container-background-repeat, no-repeat);
    background-position: center;
    background-position-y: var(--app-budget-background-pos-y, top);
    background-image: var(--app-budget-container-background-image);
  }

  @media (max-width: 1024px) and (min-width: 604px) {
    app-header[wide-and-ballot] {
      background: var(--app-budget-votes-background-color, var(--md-sys-color-surface));
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
    background-color: var(--md-sys-color-surface-variant);
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

  md-filled-icon-button {
    width: 50px;
    height: 50px;
  }

  md-filled-icon-button.closeButton {
    width: 58px;
    height: 58px;
  }

  @media (max-width: 640px) {
    md-filled-icon-button {
      width: 40px;
      height: 40px;
    }

    md-filled-icon-button.closeButton {
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
  }

  .helpIconInBudget {
    position: absolute;
    top: 6px;
    right: 0;
  }

  @media (max-width: 1024px) and (min-width: 640px) {
    .exitIconInBudget {
      left: -4px;
      top: -4px;
    }

    md-filled-icon-button {
      width: 40px;
      height: 40px;
    }

    md-filled-icon-button.closeButton {
      width: 46px;
      height: 46px;
    }

    .helpIconInBudget {
      right: -2px;
      top: 0px;
    }
  }

  .helpIconInBudget {
  }

  .helpIconInBudget[select-voting-area] {
  }

  .helpIconInBudget[select-voting-area][is-wide] {
  }

  #helpContent h1 {
    line-height: 1em;
    font-size: 1.5em;
  }

  #favoriteIcon {
    width: 50px;
    height: 50px;
    z-index: 2720;
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

  md-dialog {
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

  md-filled-button.continueButton {
    margin: 8px;
    margin-bottom: 8px;
    font-size: 18px;
    font-family: var(--app-main-font-family, "Roboto", Arial, sans-serif);
  }

  md-filled-button.generalButton {
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

    md-dialog {
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
    md-filled-button.continueButton {
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
    md-filled-button.continueButton {
      font-size: 16px;
    }
    .welcomeLogo {
      margin-left: 16px;
      display: none;
    }
    .welcomeLogologoContainer {
      display: none;
    }
    md-filled-button.continueButton {
      margin-top: 0;
    }
  }

  .welcomeLogoContainer {
  }

  md-dialog {
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
