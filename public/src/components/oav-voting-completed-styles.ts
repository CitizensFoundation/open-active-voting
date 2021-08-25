/**
@license
Copyright (c) 2010-2021 Citizens Foundation
*/

import { css } from 'lit-element';

export const OavAreaVotingCompletedStyles = css`
  .topMaterial {
    background-color: var(--app-voting-completed-top-material-background-color, #fbfbfb);
    color: var(--app-voting-completed-top-material-color, #222);
    font-size: 26px;
    margin: 48px;
    margin-top: 0;
    text-align: center;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .smaller {
    font-size: 20px;
    padding-top: 16px;
  }

  .helpIcon {
    color: #fff;
    width: 48px;
    height: 48px;
    position: absolute;
    top: 6px;
    right: 6px;
    color: #fff;
  }

  .exitIcon {
    color: #fff;
    width: 48px;
    height: 48px;
    position: absolute;
    top: 6px;
    left: 6px;
    color: #fff;
  }

  @media (max-width: 1000px) {
    .topMaterial {
      font-size: 20px;
    }

    .smaller {
      font-size: 16px;
    }
  }

  .mainContainer {
    width: 100%;
    background-size: 1920px 238px;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: top;
    background-image: var(--app-voting-completed-image-url, url("https://s3-eu-west-1.amazonaws.com/oav-direct-assets/hm2018/hm2018-1920x300-bg-2x.png"));
    background-repeat: repeat-x;
    padding-top: 48px;
  }

  @media (max-width: 4600px) {
    .mainContainer {
      background-image: none;
      background-color: var(--app-voting-completed-main-background-color, #e0e0e0);
      padding-top: 48px;
      padding-bottom: 450px;
    }

    :host {
      height: 100%;
    }

    .topMaterial {
    }
  }

  @media (max-width: 320px) {
    .mainContainer {
      padding-right: 16px;
    }
  }

  .textSharing {
    width: 380px;
    max-width: 380px;
  }

  .desktopLogo {
    max-width: var(--app-voting-completed-desktop-logo-size, 360px);
  }

  @media (max-width: 600px) {

    .textSharing {
      max-width: 290px;
      width: 290px;
    }

    .desktopLogo {
      width: 320px;
      margin-top: 0;
    }

    .topMaterial {
      max-width: 320px;
      margin-bottom: 16px;
      margin-top: 40px;
    }
  }


  .logoHolder {
    background-color: var(--app-voting-completed-logo-holder-background-color, #213158);
    padding-bottom: 8px;
    padding-top: 8px;
  }

  .completedText {
    padding: 16px;
    text-align: center;
  }

  .fb-like {
    padding-top: 16px;
    color: #eee;
  }

  .shareIconFinal {
    --paper-share-button-icon-color: var(--app-accent-color);
    --paper-share-button-icon-height: 60px;
    --paper-share-button-icon-width: 60px;
    margin-left: 8px;
  }

  .textSharingContainer {
    padding-top: 12px;
    padding-bottom: 4px;
  }

  .shareIconButton {
    height: 62px;
    min-height: 62px;
  }
`;