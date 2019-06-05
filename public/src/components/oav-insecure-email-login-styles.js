/**
@license
Copyright (c) 2010-2019 Citizens Foundation
*/

import { css } from 'lit-element';

export const OavInsecureEmailLoginStyles = css`
  paper-dialog {
    padding-left: 8px;
    padding-right: 8px;
    width: 440px;
    background-color: #fff;
  }

  paper-dialog {
    z-index: 9999;
  }

  @media (max-width: 480px) {
    paper-dialog {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
    }
  }

  paper-spinner {
    padding:0;
    margin:0;
  }

  .buttons {
    margin-left: 0;
    padding-left: 0;
    color: var(--app-accent-color);
    font-size: 18px;
    padding-top: 8px;
  }

  .checkBox {
    margin-top: 16px;
  }

  paper-input {
    --paper-input-container-focus-color: var(--app-accent-color);
  }

  paper-checkbox {
    --paper-checkbox-checked-color: var(--app-accent-color);
    padding-top: 8px;
  }

  .postcodeWrongWard {
    color: var(--paper-red-a400);
  }
`;
