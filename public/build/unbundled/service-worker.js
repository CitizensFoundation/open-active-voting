/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","df7848e8df60dfc3ddaef86845914e37"],["/bower_components/app-layout/app-drawer/app-drawer.html","5f00d3d4ef46df22c5c3dc6e361ab15d"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","893a47cb8cb722eebdc22c4cc8007d05"],["/bower_components/app-layout/app-header/app-header.html","e5b01aeb8a13089154a3e5b340868086"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","350fc37d1d1c7044c213567b6039da09"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","1eaa9e05144414be49e4ee23e16ceca2"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","3929482c600a21680def557965850501"],["/bower_components/app-layout/app-scroll-effects/effects/material.html","271fe6e745f1a9581a6e01cb3aadce21"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","21886b073d93530ccaf667163fccf8ba"],["/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","e78249dd83abc97d40411e4032250c77"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","a21d6a2fc019eb59d10586aada74313e"],["/bower_components/app-layout/app-scrollpos-control/app-scrollpos-control.html","fc6e43fcaa077177aba1981bd9428e76"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","bf8d516030e7d6a31d8b7fc4a7c22051"],["/bower_components/app-layout/helpers/helpers.html","95b52c0c05f77b65bc1b5dc0715d2495"],["/bower_components/app-localize-behavior/app-localize-behavior.html","9f3c59ea36dcb0bfb560dd6adf3d1372"],["/bower_components/app-route/app-location.html","52b3d8b5ecbb838b41bd9bd0ae556cca"],["/bower_components/app-route/app-route-converter-behavior.html","0e5b36ae9988a88bb30729fdb99a5d94"],["/bower_components/app-route/app-route.html","624ca199d36389f3db04597a593548ec"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/google-apis/google-maps-api.html","e4eb1641cec251f631cec2f569e8a551"],["/bower_components/google-map/google-map-marker.html","d4432d8c2b75325d455c0f975d76107a"],["/bower_components/google-map/google-map.html","534168cabc1c04eb05da60af3b687a10"],["/bower_components/google-streetview-pano/google-streetview-pano.html","c0a8c0b455152e111244117a45c4d0b1"],["/bower_components/intl-messageformat/dist/intl-messageformat.min.js","6d09d1bd7317183aaa17fc78c1a8edd0"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","a3bd031e39dde38cb8e619f670ee50f7"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","b9a8e766d0ab03a5d13e275754ec3d54"],["/bower_components/iron-ajax/iron-ajax.html","d606b330d7bd040660a53a5cda7f8acf"],["/bower_components/iron-ajax/iron-request.html","c2d289c4b20653353cff315cf247a45e"],["/bower_components/iron-autogrow-textarea/iron-autogrow-textarea.html","d4e3d1fbafdabe66a7b95e1048b711ce"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","8d3799ca2f619ed4f31261bb03284671"],["/bower_components/iron-flex-layout/classes/iron-flex-layout.html","97fcf4e52b1c44a78f360d436bd4e1e0"],["/bower_components/iron-flex-layout/classes/iron-shadow-flex-layout.html","8d36ab2f6e4b1d1373be99ac0f3a4980"],["/bower_components/iron-flex-layout/iron-flex-layout-classes.html","90471c0acb830c41b01e02a2507bed3c"],["/bower_components/iron-flex-layout/iron-flex-layout.html","3987521c615734e4fe403f9acecfea54"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-icon/iron-icon.html","5da6bac1d18d267691395cdc75820761"],["/bower_components/iron-icons/av-icons.html","b69fba5107077e3c4448351591a7cef5"],["/bower_components/iron-icons/communication-icons.html","d6bbe1fe8badd9faaee6344e0b0da330"],["/bower_components/iron-icons/hardware-icons.html","ff29c05b924ec665bd07449d0a8bc762"],["/bower_components/iron-icons/image-icons.html","30ef0224c9cf6acd66c506818396ccf7"],["/bower_components/iron-icons/iron-icons.html","c8f9154ae89b94e658e4a52eee690a16"],["/bower_components/iron-icons/maps-icons.html","071389c5d61ac4ab2f39dc1d784ece94"],["/bower_components/iron-icons/notification-icons.html","ea39ef4c42e134cb11e7832334d05022"],["/bower_components/iron-icons/social-icons.html","7c0d7482ea9c4ff9b2b76dac1198d9a9"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8fb45b1b4668dae069f5efb5004c2af4"],["/bower_components/iron-image/iron-image.html","72175f3ce2bc8e6bf3436ab8749b470e"],["/bower_components/iron-input/iron-input.html","3e393eda6c241be2817ce0acc512bcf6"],["/bower_components/iron-jsonp-library/iron-jsonp-library.html","2278dab473da8287511ea8f8eb30144d"],["/bower_components/iron-list/iron-list.html","0186f9177a96a750e08a0b2bf3363b5a"],["/bower_components/iron-location/iron-location.html","b999e8754a2e8fdde266884e47cefa04"],["/bower_components/iron-location/iron-query-params.html","065a00285a46f8483c74e363945499c9"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","ebd9e4f4121fe7691f20f0656cb24e5d"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","a0cc6674fc6d9d7ba0b68ff680b4e56b"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","35013b4b97041ed6b63cf95dbb9fbcb4"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","d7b9e877877c2ca1156c4c9fdd775e16"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","7f741ba06ffd837bf1697e8778b94731"],["/bower_components/iron-pages/iron-pages.html","5872a2ad58225c94b14ddea747f67cbd"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","0185cbe8d7139c9e92af3a9af67feb17"],["/bower_components/iron-selector/iron-multi-selectable.html","46d6620acd7bad986d81097d9ca91692"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/iron-signals/iron-signals.html","ccf3900a308223d95e33deec42dabe5f"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/lodash-import/lodash.js.html","b5aa8c9d5d51dc9e72df89a9d13f8c78"],["/bower_components/lodash/dist/lodash.js","1503c0f34a37d841a2955a84a6e16d8e"],["/bower_components/moment/min/moment-with-locales.min.js","211e1de00663a2fae643ae1adf111d18"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","782cac67e6cb5661d36fb32d9129ff03"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","3f061a077ee938fac479622156071296"],["/bower_components/paper-card/paper-card.html","c057c1a99e521f817eab9af733ce2471"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","b9cf5384b29cd12a724965080916b6f1"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","8fb5282b6149bc429b6baef5c077a285"],["/bower_components/paper-dialog-scrollable/paper-dialog-scrollable.html","49e3023a68129496c360dc9613f34bfc"],["/bower_components/paper-dialog/paper-dialog.html","7a8d86ed89c215baf8cc42e4d7335271"],["/bower_components/paper-fab/paper-fab.html","b3ad1553b61ad0996a0371b94efe2164"],["/bower_components/paper-icon-button/paper-icon-button.html","2a75de00f858ae1e894ab21344464787"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","3960579058d3ba0a74ae7b67b78f53c2"],["/bower_components/paper-input/paper-input-char-counter.html","94c2003f281325951e3bf5b927a326bb"],["/bower_components/paper-input/paper-input-container.html","e3c61b8a6e35b134c99c09381ef48067"],["/bower_components/paper-input/paper-input-error.html","b90f3a86d797f1bdbbb4d158aeae06ab"],["/bower_components/paper-input/paper-input.html","3385511052db3467ca6ec155faa619ad"],["/bower_components/paper-input/paper-textarea.html","09c6a70de5536115a75527f415070ac8"],["/bower_components/paper-map-info/paper-map-info.html","95d15db8a2d1cfcf648a0ad758a5e050"],["/bower_components/paper-map-info/paper-map-info.js","6e5f7679b4e5d986f986c702833880e9"],["/bower_components/paper-material/paper-material-shared-styles.html","d0eeeb696e55702f3a38ef1ad0058f59"],["/bower_components/paper-material/paper-material.html","47301784c93c3d9989abfbab68ec9859"],["/bower_components/paper-ripple/paper-ripple.html","e22bc21b61184cb28125d16f9d80fb59"],["/bower_components/paper-spinner/paper-spinner-behavior.html","82e814c4460e8803f6f57cc457658adf"],["/bower_components/paper-spinner/paper-spinner-styles.html","a2122d2c0f3ac98e6911160d8886d31a"],["/bower_components/paper-spinner/paper-spinner.html","940e64bbde54dad918d0f5c0e247a8bd"],["/bower_components/paper-styles/color.html","430305db311431da78c0a6e1236f9ebe"],["/bower_components/paper-styles/default-theme.html","c910188e898624eb890898418de20ee0"],["/bower_components/paper-styles/shadow.html","7fd97f2613eb356e1bb901e37c3e8980"],["/bower_components/paper-styles/typography.html","bdd7f31bb85f116ce97061c4135b74c9"],["/bower_components/paper-tabs/paper-tab.html","395fdc6be051eb7218b1c77a94eff726"],["/bower_components/paper-tabs/paper-tabs-icons.html","9fb57777c667562392afe684d85ddbe2"],["/bower_components/paper-tabs/paper-tabs.html","2bf908cedd6ff6e67c18dbf337787bcc"],["/bower_components/paper-toast/paper-toast.html","f64d10724104f3751cae8b764aef56ff"],["/bower_components/polymer-ts/polymer-ts.html","5cf7bbebd7a6ff361bd7b12b63efa632"],["/bower_components/polymer-ts/polymer-ts.js","fe02a4c3385c74d331353f8db50fce88"],["/bower_components/polymer/polymer-micro.html","7739e37db5581472b91925e5fa9bde55"],["/bower_components/polymer/polymer-mini.html","9e9dfb157eae29a59c98343288d4d120"],["/bower_components/polymer/polymer.html","2dce719d53b7ea549067d3d21a2b2c29"],["/bower_components/promise-polyfill/Promise.js","5afb14fd81497aca81bf25929d65b02d"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/underscore/underscore.js","62e1072e30b08f7104fcacf88dd7c17a"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","b0f32ad3c7749c40d486603f31c9d8b1"],["/index.html","187d06fc6b8026f46114d54a1740a147"],["/src/oav-ajax/oav-ajax-error-dialog.html","64d358107436538dac94befec3283155"],["/src/oav-ajax/oav-ajax.html","eb9692a985dc559feb2fdeb5f1e7a6af"],["/src/oav-app-globals/oav-app-globals.html","132c0a68324dfb147767568711a0ae4c"],["/src/oav-app.html","e4d6855e761d1709090ebe8f8830f1b1"],["/src/oav-area-ballot/encryption/asn1_c.js","41a99dbd65ec0bb35edd15769f466a6f"],["/src/oav-area-ballot/encryption/ballot-encryption-behavior.html","eb62e99453d585bd21daf3cf08f5ed35"],["/src/oav-area-ballot/encryption/jsbn_c.js","03fc434ac0a394dedf0ef8aa48a25e23"],["/src/oav-area-ballot/encryption/pidcrypt_c.js","80deeb82a7a05b14feda77b9b2403907"],["/src/oav-area-ballot/encryption/pidcrypt_util_c.js","f3bb163e4414c82086b1a07a66b9ca8b"],["/src/oav-area-ballot/encryption/prng4_c.js","d872b00ca98abd2109b7c65ca106cec5"],["/src/oav-area-ballot/encryption/rng_c.js","c53edfbd49f913e958d0db1c9111a9a3"],["/src/oav-area-ballot/encryption/rsa_c.js","58e1cfedd1f9c5b99965ecc41c03bfa6"],["/src/oav-area-ballot/oav-area-ballot-item.html","85e09efaaa1c935e4c1ac0f2922172d2"],["/src/oav-area-ballot/oav-area-ballot.html","ae30cb7de02741617e1889014d3799b1"],["/src/oav-area-ballot/oav-area-budget.html","4f2bf95c002cd927092b3f21e80890eb"],["/src/oav-area-ballot/oav-items-map.html","f2bcb8bb063d9ee9f0db82a0616ef5a7"],["/src/oav-behaviors/app-helpers.html","e4ad32c50e6103b1065b9f112e29de30"],["/src/oav-dialog-container/oav-dialog-container.html","a2f8ec565c7e96d3f7da3163a4ba3252"],["/src/oav-page/oav-page-dialog.html","db714854ecbdc5fa70fa68f19520a375"],["/src/oav-select-voting-area/oav-select-voting-area.html","18f8a12cb310546954dddf1d81e98a5d"],["/src/oav-voting-completed/oav-voting-completed.html","6ae48a5f02ebdc4130876a778ab43f16"],["/src/yp-point/yp-point-actions.html","954e2bdaca81eb3c006f1963f2c3dfe9"],["/src/yp-point/yp-point.html","d869549ab6f441208182b6c19b9935f4"],["/src/yp-post/yp-post-actions.html","ee81f7c82a683a67f7788517ddabfbdd"],["/src/yp-post/yp-post-behaviors.html","7abccb3ce2a0d71cbefba6d3e74e86b1"],["/src/yp-post/yp-post-card.html","093cbbfd71c75d6c4e14a0649fc4f53b"],["/src/yp-post/yp-post-cover-media.html","f62b372838cf9551cad527b03eb5580d"],["/src/yp-post/yp-post-points.html","a0f5122c00ae42275e824586e911da7e"],["/src/yp-post/yp-post.html","f245ba8ce90228424a01260669c45baa"],["/src/yp-user/yp-user-image.html","2f396ff30f8ff744c82bd952ab55ddd1"],["/src/yp-user/yp-user-with-organization.html","5434f0258f7ba3549ab3cd0f8f6c19e4"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




