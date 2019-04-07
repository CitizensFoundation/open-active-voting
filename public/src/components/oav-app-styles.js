/**
@license
Copyright (c) 2010-2019 Citizens Foundation
*/

import { css } from 'lit-element';

export const OavAppStyles = css`
  :host {
    display: block;
    --app-primary-color: #777;
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
  }

  app-header {
    background-color: var(--app-primary-color);
    color: #fff;
  }

  app-header paper-icon-button {
    --paper-icon-button-ink-color: white;
  }

  .drawer-list {
    margin: 0 20px;
  }

  .drawer-list a {
    display: block;
    padding: 0 16px;
    line-height: 40px;
    text-decoration: none;
    color: var(--app-secondary-color);
  }

  .drawer-list a.iron-selected {
    color: black;
    font-weight: bold;
  }

  .drawer-list a.subroute {
    padding-left: 32px;
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

  .largeSpinner {
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
  }
`;
