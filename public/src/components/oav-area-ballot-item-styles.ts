/**
@license
Copyright (c) 2010-2021 Citizens Foundation
*/

import { css } from "lit";

export const OavAreaBallotItemStyles = css`
  .itemContent {
    position: relative;
    width: 300px !important;
    height: 324px;
    margin: 16px;
  }

  .itemContent[small] {
    width: 260px !important;
    height: 277px;
    margin: 0;
  }

  .itemContent[small][tiny] {
    width: 220px !important;
    height: 220px;
  }

  .itemSelectedFrame {
    background: transparent;
    border: none;
    width: 296px;
    height: 316px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
  }

  .itemSelectedFrame[small] {
    width: 254px;
    height: 271px;
  }

  .itemSelectedFrame[small][tiny] {
    width: 214px;
    height: 214px;
  }

  .buttons {
    z-index: 5;
  }

  .itemSelectedFrame[selected] {
    background: transparent;
    border: solid 2px;
    border-color: var(--md-sys-color-primary);
  }

  .itemImage {
    cursor: pointer;
  }

  iron-image {
    height: 169px;
    width: 300px;
  }

  iron-image[small] {
    width: 260px;
    height: 146px;
  }

  iron-image[small][tiny] {
    width: 220px;
    height: 124px;
  }

  google-map {
    height: 169px;
    width: 300px;
    margin-bottom: 7px;
  }

  google-map[small] {
    width: 260px;
    height: 146px;
    z-index: 0 !important;
  }

  google-map[small][tiny] {
    width: 220px;
    height: 124px;
  }

  .descriptionContainer {
    cursor: pointer;
    height: 168px;
    width: 300px;
    margin: 0;
    overflow: hidden;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    background-color: var(--md-sys-color-surface-variant);
    margin-bottom: 7px;
  }

  .descriptionContainer[small] {
    width: 260px;
    height: 146px;
    font-size: 16px;
    text-align: left;
  }

  .descriptionContainer[small][tiny] {
    width: 220px;
    height: 124px;
    font-size: 15px;
  }

  .description {
    padding: 8px;
    padding-top: 16px;
    font-size: 16px;
    margin-top: 42px;

  }

  .name {
    font-size: var(--app-item-name-font-size, 20px);
    padding: 8px;
    padding-top: 4px;
  }

  .name[small] {
    font-size: var(--app-item-name-font-size-small, 17px);
    padding-top: 2px;
    padding-right: 4px;
    padding-top: 4px;
  }

  .name[small][tiny] {
    font-size: 14px;
  }

  .price {
    font-size: 24px;
    position: absolute;
    bottom: 14px;
    left: 92px;
  }

  .price[no-millions] {
    left: 108px;
  }

  .price[small] {
    left: 70px;
  }

  .price[no-millions][small] {
    left: 95px;
  }

  .price[small][tiny] {
    left: 42px;
  }

  .priceCurrency {
    font-size: 24px;
  }

  md-filled-icon-button.addRemoveButton {
    position: absolute;
    bottom: 12px;
    right: 12px;
  }

  md-filled-icon-button.removeButton {
  }

  md-filled-icon-button.addFavoriteButton {
    position: absolute;
    bottom: 12px;
    left: 12px;
    padding: 0;
  }

  md-filled-icon-button.removeFavoriteButton {
    position: absolute;
    bottom: 12px;
    left: 12px;
    padding: 0;
  }

  md-filled-icon-button[disabled] {
    background-color: #b7b7b7;
  }

  .shareIcon {
    position: absolute;
    top: 6px;
    left: 0;
    --paper-share-button-icon-color: var(--md-sys-color-primary);
    --paper-share-button-icon-height: 46px;
    --paper-share-button-icon-width: 46px;
  }

  .shareIcon[small] {
    display: none;
  }

  .budgetContainer {
  }

  .itemContent {
  }

  .addRemoveButton {
  }

  .infoIcon {
    width: 32px;
    height: 32px;
    padding: 0;
    margin-right: 4px;
  }

  .infoLinks {
    position: absolute;
    top: 118px;
    right: 0px;
    z-index: 2;
  }

  .stateDropdown {
    position: absolute;
    top: 60px;
    right: 0;
    z-index: 2;
    padding-right: 0;
    margin-right: 0;
  }

  .dropdownMenuButton {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .dropdownButton {
    padding: 2px;
    width: 32px;
    height: 26px;
  }

  .infoLinks[small] {
    top: 98px;
  }

  .infoLinks[small][tiny] {
    top: 78px;
  }

  .externalInfoIcon {
    width: 45px;
    height: 45px;
  }

  .externalIconContainer {
    position: absolute;
    bottom: 4px;
    left: 0px;
    z-index: 2;
  }

  google-map {
    z-index: 5;
  }

  md-filled-icon-button {
    z-index: 5;
  }

  .favoriteButtons {
  }

  [hidden] {
    display: none !important;
  }
`;
