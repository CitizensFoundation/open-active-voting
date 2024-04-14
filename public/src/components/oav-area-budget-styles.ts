/**
@license
Copyright (c) 2010-2021 Citizens Foundation
*/

import { css } from "lit";

export const OavAreaBudgetStyles = css`
  :host {
    width: 100%;
    display: block;
  }

  .topLevel[wide] {
  }

  .budgetContainer {
  }

  .budgetContainer[wide] {
  }

  @media (max-width: 1100px) {
    .budgetContainer {
    }
  }

  .headerContainer {
  }

  .budgetMaterial {
    background-color: var(--md-sys-color-surface-variant);
    color: var(--md-sys-color-on-surface);
    height: 139px;
    margin: 0px 0px 0px 0px;
    margin-right: auto;
    margin-left: auto;
  }

  .budgetMaterial[wide] {
    width: 940px;
    height: 184px;
    margin-top: 24px;
  }

  #votes {
    background-color: var(--md-sys-color-surface-variant);
    color: var(--md-sys-color-on-surface);
    height: 81px;
  }

  #votes[wide] {
    width: 940px;
    height: 100px;
  }

  .budgetRuler {
    background-color: var(--md-sys-color-surface-variant);
    color: var(--md-sys-color-on-surface);
    font-size: 14px;
    padding: 4px;
    padding-right: 8x;
    padding-left: 8px;
  }

  .budgetRuler[wide] {
    font-size: 18px;
    padding: 8px;
    padding-right: 16px;
    padding-left: 16px;
  }

  .budgetHeader {
    font-size: 26px;
    padding: 12px;
  }

  .info {
    background-color: var(--md-sys-color-surface-variant);
    color: var(--md-sys-color-on-surface);
    padding: 4px;
    font-size: 12px;
  }

  .info[wide] {
    padding: 8px;
    font-size: 19px;
  }

  md-filled-button.voteButton {
    margin: 8px;
    margin-right: 4px;
    font-family: var(--app-vote-button-font-family, Roboto);
  }

  .selectedInfo {
    font-size: 12px;
  }

  .selectedInfo[wide] {
    font-size: 19px;
  }

  #budgetLeftInfo {
    font-size: 13px;
    font-weight: bold;
  }

  #budgetLeftInfo[wide] {
    font-size: 19px;
    font-weight: bold;
    z-index: 100000;
  }

  .noItemsInfo {
    font-size: 14px;
    padding-left: 8px;
    padding-right: 8px;
    margin-left: auto;
    margin-right: auto;
  }

  .noItemsInfo[wide] {
    font-size: 24px;
  }

  .itemInBudget {
    border-left: solid 3px;
    border-left-color: var(--md-sys-color-primary);
  }

  .headerLogo {
    width: 220px;
    height: 66px;
    padding: 0;
    margin: 0;
    margin-left: 4px;
    margin-top: 2px;
  }

  @media (max-width: 1024px) {
    .headerLogo {
      width: 160px;
      height: 48px;
      margin-left: 4px;
    }
  }

  .headerContainer {
    background-color: var(--md-sys-color-surface-variant);
  }

  .demoButton {
    width: 30px;
    height: 30px;
    padding: 5px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 4px;
  }

  @media (max-width: 1024px) {
    .demoButton {
      margin-top: -4px;
    }
  }

  .onOfferText {
    color: var(--app-accent-color);
    margin-right: 12px;
    font-weight: bold;
  }

  .mobileActionIcons {
    width: 42px;
    height: 42px;
    margin: 0;
    padding: 0;
    margin-top: 5px;
    margin-right: 5px;
  }

  .closeButton {
    width: 32px;
    height: 32px;
  }

  [hidden] {
    display: none !important;
  }

  .mobileBudgetText {
    margin-top: 6px;
  }

  .budgetText {
    margin-top: 4px;
  }
`;
