/**
@license
Copyright (c) 2010-2021 Citizens Foundation
*/

import { css } from "lit";

export const OavAreaBallotStyles = css`
  :host {
  }

  iron-list {
    margin-top: 24px;
    padding-bottom: 16px;
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

  md-filled-button.voteButton {
    position: absolute;
    bottom: 16px;
    outline: 0px;
    right: 8px;
  }

  .budgetContainer {
  }

  .votingButtonContainer {
    position: absolute;
    bottom: 16px;
  }

  .topContainer {
  }

  md-tabs {
    margin: 8px;
    margin-right: 16px;
    margin-left: 16px;
  }

  md-tab-primary {
    font-family: var(--app-tabs-font-family, Roboto);
    font-size: 21px !important;
    margin-left: 24px;
    margin-right: 24px;
    width: 320px;
  }

  @media (max-width: 1024px) {
    md-tab-primary {
      font-size: 15px !important;
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  @media (max-width: 360px) {
    md-tab-primary {
      font-size: 14px !important;
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  [hidden] {
    display: none !important;
  }
`;
