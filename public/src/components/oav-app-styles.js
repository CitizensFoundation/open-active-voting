/**
@license
Copyright (c) 2010-2019 Citizens Foundation
*/

import { css } from 'lit-element';

export const OavAppStyles = css`
  h1 {
    color: #F00;
  }

  :host {
    display: block;
    box-sizing: border-box;
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
    --app-primary-color: #F00;
    --app-secondary-color: black;
    --app-main-backround-color: #e0e0e0;
    --app-accent-color: var(--paper-orange-a700);
    --app-accent-color-light: var(--paper-orange-a200);
    --app-kopavogur-green-grass: #f0f0f0;
    --app-text-color: #ffffff;

    --paper-tabs-selection-bar-color: var(--paper-orange-a700);
    --paper-tabs-selection-bar: {
      color:var(--paper-orange-a700);
      border-bottom: 3px solid !important;
      border-bottom-color: var(--paper-orange-a700);
    };

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
    padding-top: 128px;
    min-height: 100vh;
  }
  .page {
    display: none;
  }
  .page[active] {
    display: block;
  }


  @media (min-width: 460px) {
    .toolbar-list {
      display: block;
    }
    .menu-btn {
      display: none;
    }
    .main-content {
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

  @media (max-width: 1000px) {
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

  .helpIconInBudget  {
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
  }

  #favoriteIcon {
    color: var(--app-facvorite-icon-color, rgb(255,215,0));
    background-color: transparent;
    width: 50px;
    height: 50px;
    z-index: 2720;
    -webkit-filter: drop-shadow( 1px 1px 10px #5f5f5f );
    filter: drop-shadow( 1px 1px 10px #5f5f5f );
  }


  @media (max-width: 640px) {
    #favoriteIcon {
      width: 40px;
      height: 40px;
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
`;
