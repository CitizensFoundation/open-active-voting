import merge from "deepmerge";
// use createSpaConfig for bundling a Single Page App
import { createSpaConfig } from "@open-wc/building-rollup";
import copy from "rollup-plugin-copy";

// use createBasicConfig to do regular JS to JS bundling
// import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
  // use the outputdir option to modify where files are output
  // outputDir: 'dist',

  plugins: {
    workbox: false,
  },

  workbox: false,

  // if you need to support older browsers, such as IE11, set the legacyBuild
  // option to generate an additional build just for this browser
  legacyBuild: true,

  // development mode creates a non-minified build for debugging or development
  developmentMode: process.env.ROLLUP_WATCH === "true",

  // set to true to inject the service worker registration into your index.html
  injectServiceWorker: false,
});

export default merge(baseConfig, {
  // if you use createSpaConfig, you can use your index.html as entrypoint,
  // any <script type="module"> inside will be bundled by rollup
  input: "./index.html",
  plugins: [
    copy({
      targets: [
        {
          src: "node_modules/@webcomponents/webcomponentsjs/*",
          dest: "dist/node_modules/@webcomponents/webcomponentsjs/",
        },
        {
          src: "node_modules/web-animations-js/web-animations*",
          dest: "dist/node_modules/web-animations-js/",
        },
        { src: "fonts/*", dest: "dist/fonts/" },
      ],
    }),
  ],
});
