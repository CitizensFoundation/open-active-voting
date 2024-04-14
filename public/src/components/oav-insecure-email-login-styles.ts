/**
@license
Copyright (c) 2010-2021 Citizens Foundation
*/

import { css } from "lit";

export const OavInsecureEmailLoginStyles = css`
  md-dialog {
    padding-left: 8px;
    padding-right: 8px;
    width: 440px;
  }

  md-dialog {
    z-index: 9999;
  }

  @media (max-width: 480px) {
    md-dialog {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
    }
  }

  md-circular-progress {
    padding: 0;
    margin: 0;
  }

  .buttons {
    margin-left: 0;
    padding-left: 0;
    font-size: 18px;
    padding-top: 8px;
  }

  .checkBox {
    margin-top: 16px;
  }

  md-outlined-text-field {
  }

  md-checkbox {
    padding-top: 8px;
  }

  .postcodeWrongWard {
    color: var(md-sys-color-error);
  }
`;
