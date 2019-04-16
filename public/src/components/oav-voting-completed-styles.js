/**
@license
Copyright (c) 2010-2019 Citizens Foundation
*/

import { css } from 'lit-element';

export const OavAreaBudgetStyles = css`
  .topMaterial {
    background-color: var(--app-voting-completed-top-material-background-color, #fbfbfb);
    color: var(--app-voting-completed-top-material-color, #222);
    font-size: 26px;
    margin: 48px;
    max-width: 400px;
  }

  .smaller {
    font-size: 20px;
    padding-top: 16px;
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
    height: 100%;
    background-size: 1920px 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: top;
    background-image: var(--app-voting-completed-image-url, url("https://s3-eu-west-1.amazonaws.com/oav-direct-assets/hm2018/hm2018-1920x300-bg-2x.png"));
    background-repeat: repeat-x;
  }

  @media (max-width: 600px) {
    .mainContainer {
      background-image: none;
      background-color: var(--app-voting-completed-main-background-color, #e0e0e0);
    }
  }

  .textSharing {
    width: 380px;
    max-width: 380px;
  }

  .desktopLogo {
    width: 400px;
    height: 120px;
  }

  @media (max-width: 600px) {

    .textSharing {
      max-width: 290px;
      width: 290px;
    }

    .desktopLogo {
      width: 320px;
      height: 96px;
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