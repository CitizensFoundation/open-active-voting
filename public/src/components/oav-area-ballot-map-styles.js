/**
@license
Copyright (c) 2010-2019 Citizens Foundation
*/

import { css } from 'lit-element';

export const OavBallotMapStyles = css`
  :host {
    display: block;
    width: 100% !important;
    height: 100% !important;
  }

  .topMapContainer {
    width: 100% !important;
    height: 100% !important;
  }

  .mapContainer {
    width: 100% !important;
    height: 100% !important;
    margin-top: 16px;
  }

  .noMapContainer {
    padding: 8px;
    margin: 16px;
    background-color: #FFF;
  }

  #map {
  }

  a {
    color: var(--primary-color-700);
  }

  h1 {
    padding: 24px;
  }


  #myInfoCard {
    background-color: #000;
    padding: 0;
    margin: 0 !important;
    --paper-map-info-mixin: {
      padding: 0;
      margin: 0 !important;
      background-color: #fbfbfb;
      color: var(--app-accent-color);
      max-width: 100%;
      max-height: 100%;
    };
    --paper-map-info-beak-mixin: {
      color: var(--app-accent-color);
    };
  }

  .ballotItem {
    margin: 0;
    padding: 0;
    color: #FFF;
  }
`;
