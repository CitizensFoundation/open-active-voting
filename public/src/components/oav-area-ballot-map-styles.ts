/**
@license
Copyright (c) 2010-2021 Citizens Foundation
*/

import { css } from "lit";

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
  }

  #map {
  }

  a {
    color: var(--md-sys-color-on-surface);
  }

  h1 {
    padding: 24px;
  }

  #myInfoCard {
    padding: 0;
    margin: 0 !important;
    --paper-map-info-mixin: {
      padding: 0;
      margin: 0 !important;
      background-color: var(--md-sys-color-surface-variant);
      color: var(--md-sys-color-on-surface);
      max-width: 100%;
      max-height: 100%;
    }
    --paper-map-info-beak-mixin: {
      color: var(--md-sys-color-on-surface);
    }
  }

  .ballotItem {
    margin: 0;
    padding: 0;
  }
`;
