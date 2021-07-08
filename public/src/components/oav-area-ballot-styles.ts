/**
@license
Copyright (c) 2010-2021 Citizens Foundation
*/

import { css } from "lit-element";

export const OavAreaBallotStyles = css`
  :host {
  }

  iron-list {
    margin-top: 24px;
    padding-bottom: 16px;
    background-color: var(--app-main-background-color);
  }

  .name {
    font-size: 19px;
    padding: 8px;
  }

  .description {
    padding-left: 8px;
  }

  .price {
    font-size: 20px;
    position: absolute;
    bottom: 4px;
    left: 8px;
  }

  #itemContainer {
    margin-top: 8px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  oav-area-ballot-item {
    outline: 0px;
  }

  paper-button.addButton {
    position: absolute;
    bottom: 16px;
    outline: 0px;
    right: 8px;
    background-color: var(--app-ballot-add-button-background-color, #f00);
    color: var(--app-ballot-add-button-color, #fff);
  }

  .budgetContainer {
  }

  .votingButtonContainer {
    position: absolute;
    bottom: 16px;
  }

  .topContainer {
    background-color: var(--app-main-background-color);
    color: var(--app-ballot-color, #333);
  }

  paper-tabs {
    margin: 8px;
    margin-right: 16px;
    margin-left: 16px;
  }

  paper-tab {
    font-family: var(--app-tabs-font-family, Roboto);
    font-size: 21px !important;
    margin-left: 24px;
    margin-right: 24px;
    width: 320px;
  }

  @media (max-width: 1024px) {
    paper-tab {
      font-size: 15px !important;
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  @media (max-width: 360px) {
    paper-tab {
      font-size: 14px !important;
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  [hidden] {
    display: none !important;
  }
`;
