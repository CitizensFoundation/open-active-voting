/**
@license
Copyright (c) 2010-2021 Citizens Foundation
*/

import { css } from "lit-element";

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
    border-color: var(--app-accent-color);
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
    height: 169px;
    width: 300px;
    margin: 0;
    overflow: hidden;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    background-color: var(--app-ballot-item-description-background-color, #333);
    color: var(--app-ballot-item-description-color, #fff);
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
    color: var(--app-ballot-item-name-color, #222);
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
    color: var(--app-accent-color);
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
    color: var(--app-accent-color);
  }

  paper-fab.addRemoveButton {
    position: absolute;
    bottom: 12px;
    right: 12px;
    background-color: var(--app-accent-color);
    color: var(--app-ballot-item-button-color, #fff);
  }

  paper-fab.removeButton {
    background-color: #fff !important;
    color: var(--app-accent-color) !important;
  }

  paper-fab.addFavoriteButton {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background-color: var(
      --app-favorite-button-background-color,
      var(--app-accent-color, #f00)
    );
    color: var(--app-favorite-ballot-item-button-color, #fff);
    --paper-fab-iron-icon: {
      height: 29px;
      width: 29px;
    }
    padding: 0;
  }

  paper-fab.removeFavoriteButton {
    position: absolute;
    bottom: 12px;
    left: 12px;
    color: var(--app-ballot-item-remove-fav-button-color, rgb(255, 215, 0));
    background-color: var(
      --app-ballot-item-remove-fav-button-background-color,
      #fff
    );
    --paper-fab-iron-icon: {
      height: 29px;
      width: 29px;
    }
    padding: 0;
  }

  paper-fab[disabled] {
    background-color: #b7b7b7;
  }

  .shareIcon {
    position: absolute;
    top: 6px;
    left: 0;
    --paper-share-button-icon-color: var(--app-accent-color-light);
    --paper-share-button-icon-height: 46px;
    --paper-share-button-icon-width: 46px;
    -webkit-filter: drop-shadow(1px 1px 10px var(--app-share-dropshadow, #555));
    filter: drop-shadow(1px 1px 10pxvar (--app-share-dropshadow, #555));
  }

  .shareIcon[small] {
    display: none;
  }

  .budgetContainer {
  }

  .itemContent {
    color: var(--app-ballot-item-content-color, #222);
    background-color: var(--app-ballot-item-content-background-color, #fbfbfb);
  }

  .addRemoveButton {
  }

  .infoIcon {
    color: var(--app-accent-color-light);
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
    color: var(--app-accent-color-light);
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
    background-color: var(--app-accent-color);
    opacity: 0.8;
    color: var(--app-ballot-item-button-color, #fff);
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
    color: var(--app-ballot-item-extinfo-icon-color, #999);
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

  paper-fab {
    z-index: 5;
  }

  .favoriteButtons {
  }

  [hidden] {
    display: none !important;
  }
`;
