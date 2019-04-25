/**
@license
Copyright (c) 2010-2019 Citizens Foundation
*/

import { css } from 'lit-element';

export const OavAreaBudgetStyles = css`
  :host {
    width: 100%;
    display: block;
  }

  .budgetContainer {
  }

  .budgetContainer[wide] {
    height: var(--app-budget-container-height, 238px);
    width: 100%;
    background-size: 1920px 238px;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: top;
    background-image: var(--app-budget-container-background-image, url(https://s3-eu-west-1.amazonaws.com/oav-direct-assets/hm2018/hm2018-1920x238-bg-2x.png));
  }

  @media (max-width: 1100px) {
    .budgetContainer {
      background-color: var(--app-budget-container-background-color, #213158);
    }
  }

  .budgetMaterial {
    background-color: var(--app-budget-material-background-color, rgba(249,249,249,1.0));
    height: 139px;
    margin-top: 16px;
    margin: 0px 0px 0px 0px;
    margin-right: auto;
    margin-left: auto;
  }

  .budgetMaterial[wide] {
    width: 940px;
    height: 184px;
  }

  #votes {
    background-color: var(--app-budget-votes-background-color, #e0e0e0);
    height: 81px;
  }

  #votes[wide] {
    width: 940px;
    height: 102px;
  }

  .budgetRuler {
    background-color: var(--app-budget-ruler-background-color, #f0f0f0);
    color: var(--app-budget-ruler-color, #111);
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
    background-color: var(--app-budget-header-background-color, #FFF);
    color: var(--app-budget-header-color, #000);
    font-size: 26px;
    padding: 12px;
  }

  .info {
    background-color: var(--app-budget-info-background-color, rgba(249,249,249,1.0));
    color: var(--app-budget-info-color, #111);
    padding: 4px;
    font-size: 12px;
  }

  .info[wide] {
    padding: 8px;
    font-size: 19px;
  }

  paper-button.voteButton {
    background-color: var(--app-accent-color);
    color: var(--app-budget-vote-button-color, #FFF);
    margin: 8px;
    margin-right: 4px;
  }

  paper-button[disabled] {
    background-color: #bbb;
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
    color: var(--app-budget-noitemsinfo-color, #555);
    font-size: 14px;
    padding-left: 8px;
    padding-right: 8px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 32px
  }

  .noItemsInfo[wide] {
    font-size: 24px;
  }

  .itemInBudget {
    border-left: solid 3px;
    border-left-color: var(--app-accent-color);
  }

  .headerLogo {
    width: 220px;
    height: 66px;
    padding: 0;
    margin: 0;
    margin-left: 4px;
  }

  @media (max-width: 1045px) {
    .headerLogo {
      width: 160px;
      height: 48px;
      margin-left: 4px;
    }
  }

  .headerContainer {
    background-color: var(--app-budget-header-container-background-color, #f0f0f0);
    color: var(--app-budget-vote-button-color, #444)
  }

  .demoButton {
    background-color: var(--app-accent-color);
    color: #fff;
    width: 30px;
    height: 30px;
    padding: 5px;
    margin-left: 8px;
    margin-right: 8px;
  }

  .onOfferText {
    color: var(--app-accent-color);
    margin-right: 12px;
    font-weight: bold;
  }

  paper-toast {
    font-size: 17px;
    height: 80px;
    padding-bottom: 8px;
  }

  paper-toast[wide] {
    font-size: 25px;
    height: 108px;
  }

  .mobileActionIcons {
    color: #555;
  }

  [hidden] {
    display: none !important;
  }
`;
