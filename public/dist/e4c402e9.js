import{t,s as e,f as i,e as n,B as o,l as r,g as s,m as a,v as d,w as l,x as u,y as c,z as p,A as h,C as f,D as g,E as m,F as _,G as y,H as b,J as v,K as x}from"./0148e6d4.js";import{P as w}from"./09fab2e1.js";const S={templatize(e,i){this._templatizerTemplate=e,this.ctor=t(e,this,{mutableData:Boolean(i),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(t){return new this.ctor(t)},modelForElement(t){return e(this._templatizerTemplate,t)}};let P;const A=i(P||(P=(t=>t)`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`));A.setAttribute("style","display: none;"),document.head.appendChild(A.content),n({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var t=this.query;t&&(this.full||"("===t[0]||(t="("+t+")"),this._mq=window.matchMedia(t),this._add(),this.queryHandler(this._mq))},queryHandler:function(t){this._setQueryMatches(t.matches)}});const I={properties:{playStartedAt:{type:Date,value:null}},_checkVideoLongPlayTimeAndReset(t){var e=t.getAttribute("data-id");if(this.playStartedAt&&e){var i=((new Date).getTime()-this.playStartedAt.getTime())/1e3;i>5&&window.appGlobals.sendLongVideoView(e),window.appGlobals.activity("completed","video",i),this.playStartedAt=null}else this.playStartedAt&&(console.error("Got long view check without id"),this.playStartedAt=null)},_checkAudioLongPlayTimeAndReset(t){var e=t.getAttribute("data-id");if(this.playStartedAt&&e){var i=((new Date).getTime()-this.playStartedAt.getTime())/1e3;i>5&&window.appGlobals.sendLongAudioListen(e),window.appGlobals.activity("completed","audio",i),this.playStartedAt=null}else this.playStartedAt&&(console.error("Got long view check without audio id"),this.playStartedAt=null)},getImageFormatUrl:function(t,e){if(!(t&&t.length>0))return"";var i=JSON.parse(t[t.length-1].formats);return i&&i.length>0?i[e]:void 0},setupMediaEventListeners:function(t,e){e&&t?(this.detachMediaListeners(),this.attachMediaListeners()):t?this.attachMediaListeners():!t&&e&&this.detachMediaListeners()},attachMediaListeners:function(){this.async((function(){var t=this.$$("#videoPlayer"),e=this.$$("#audioPlayer");if(t){var i=t.getAttribute("data-id");i&&(this.videoPlayListener=function(){this.set("playStartedAt",new Date),window.appGlobals.sendVideoView(i)}.bind(this),this.videoPauseListener=function(){this._checkVideoLongPlayTimeAndReset(t)}.bind(this),this.videoEndedListener=function(){this._checkVideoLongPlayTimeAndReset(t)}.bind(this),t.addEventListener("play",this.videoPlayListener),t.addEventListener("pause",this.videoPauseListener),t.addEventListener("ended",this.videoEndedListener))}if(e){var n=e.getAttribute("data-id");n&&(this.audioPlayListener=function(){this.set("playStartedAt",new Date),window.appGlobals.sendAudioListen(n)}.bind(this),this.audioPauseListener=function(){this._checkAudioLongPlayTimeAndReset(e)}.bind(this),this.audioEndedListener=function(){this._checkAudioLongPlayTimeAndReset(e)}.bind(this),e.addEventListener("play",this.audioPlayListener),e.addEventListener("pause",this.audioPauseListener),e.addEventListener("ended",this.audioEndedListener))}}),200)},detachMediaListeners:function(){var t=this.$$("#videoPlayer"),e=this.$$("#audioPlayer");t&&(this.videoPlayListener&&(t.removeEventListener("play",this.videoPlayListener),this.videoPlayListener=null),this.videoPauseListener&&(t.removeEventListener("pause",this.videoPauseListener),this.videoPauseListener=null),this.videoEndedListener&&(t.removeEventListener("ended",this.videoEndedListener),this.videoEndedListener=null),this._checkVideoLongPlayTimeAndReset(t)),e&&(this.audioPlayListener&&(e.removeEventListener("play",this.audioPlayListener),this.audioPlayListener=null),this.audioPauseListener&&(e.removeEventListener("pause",this.audioPauseListener),this.audioPauseListener=null),this.audioEndedListener&&(e.removeEventListener("ended",this.audioEndedListener),this.audioEndedListener=null),this._checkVideoLongPlayTimeAndReset(e))},_pauseMediaPlayback:function(){var t=this.$$("#videoPlayer"),e=this.$$("#audioPlayer");t&&t.pause(),e&&e.pause()},_getVideoURL:function(t){return t&&t.length>0&&t[0].formats&&t[0].formats.length>0?t[0].formats[0]:null},_isPortraitVideo:function(t){return!!(t&&t.length>0&&t[0].formats&&t[0].formats.length>0)&&!(!t[0].public_meta||!t[0].public_meta.aspect||"portrait"!==t[0].public_meta.aspect)},_getAudioURL:function(t){return t&&t.length>0&&t[0].formats&&t[0].formats.length>0?t[0].formats[0]:null},_getVideoPosterURL:function(t,e){return t&&t.length>0&&t[0].VideoImages&&t[0].VideoImages.length>0?(e||(e=0),t[0].public_meta&&t[0].public_meta.selectedVideoFrameIndex&&(e=parseInt(t[0].public_meta.selectedVideoFrameIndex)),e>t[0].VideoImages.length-1&&(e=0),JSON.parse(t[0].VideoImages[e].formats)[0]):null}},T={formatNumber:function(t){return t?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"0"}},C={truncate:function(t,e,i,n){if(e=e||255,t.length<=e)return t;if(i)t=t.substring(0,e);else{var o=t.lastIndexOf(" ",e);-1===o&&(o=e),t=t.substring(0,o)}return t+=null!=n?n:"..."},trim:function(t){return t.replace(/^\s*|\s*$/g,"")}},E=document.createElement("template");document.head.appendChild(E.content);const k={t:function(t){return window.localize?window.localize(t):t}};let R;n({_template:i(R||(R=(t=>t)`
    <style include="iron-flex iron-flex-alignment">
      iron-image {
        display: block;
        vertical-align: text-top;
        height: 48px;
        width: 48px;
      }

      .small {
        height: 30px;
        width: 30px;
        background-color: var(--primary-color-lighter,#434343);
      }

      .large {
        height: 90px;
        width: 90px;
        background-color: var(--primary-color-lighter,#434343);
      }

      .veryLarge {
        height: 200px;
        width: 200px;
        background-color: var(--primary-color-lighter,#434343);
      }

      .medium {
        height: 48px;
        width: 48px;
        background-color: var(--primary-color-lighter,#434343);
      }

      .rounded {
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
        display: block;
        -webkit-transform-style: preserve-3d;
      }

      .rounded-more {
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        display: block;
        vertical-align: top;
        align: top;
        -webkit-transform-style: preserve-3d;
      }

      .rounded-even-more {
        -webkit-border-radius: 115px;
        -moz-border-radius: 125px;
        border-radius: 125px;
        display: block;
        vertical-align: top;
        align: top;
        -webkit-transform-style: preserve-3d;
      }

      .rounded img { opacity: 0; }

      .rounded-more img { opacity: 0; }

      [hidden] {
        display: none !important;
      }
    </style>

    <template restamp="" is="dom-if" if="[[user]]">
      <template is="dom-if" if="[[profileImageUrl]]">
        <iron-image sizing="cover" title="[[userTitle]]" preload="" src="[[profileImageUrl]]" class\$="[[computeClass(small)]]"></iron-image>
      </template>

      <template is="dom-if" if="[[noProfileImage]]" restamp="">
        <template is="dom-if" if="[[user.facebook_id]]">
          <iron-image sizing="cover" hidden\$="[[profileImageUrl]]" title="[[userTitle]]" preload="" src\$="[[computeFacebookSrc]]" class\$="[[computeClass(small)]]"></iron-image>
        </template>

        <template is="dom-if" if="[[!noDefault]]">
          <template is="dom-if" if="[[!user.facebook_id]]">
            <iron-image sizing="cover" title="[[userTitle]]" preload="" src="https://s3.amazonaws.com/better-reykjavik-paperclip-production/instances/buddy_icons/000/000/001/icon_50/default_profile.png" class\$="[[computeClass(small)]]"></iron-image>
          </template>
        </template>

      </template>

    </template>
`)),is:"yp-user-image",behaviors:[I,k],properties:{small:{type:Boolean,value:!1},large:{type:Boolean,value:!1},veryLarge:{type:Boolean,value:!1},titleFromUser:{type:String},userTitle:{type:String,computed:"_computeUserTitle(user, title)"},user:{type:Object},profileImageUrl:{type:String,computed:"_profileImageUrl(user)"},noDefault:{type:Boolean,value:!1},computeFacebookSrc:{type:String,computed:"_computeFacebookSrc(user)"},noProfileImage:{type:Boolean,value:!1}},_computeUserTitle:function(t,e){return t?e||t.name:""},_profileImageUrl:function(t){if(t&&t.UserProfileImages&&t.UserProfileImages.length>0){var e=this.getImageFormatUrl(t.UserProfileImages,0);return e&&""!==e?(this.set("noProfileImage",!1),e):(this.set("noProfileImage",!0),null)}return this.set("noProfileImage",!0),null},computeIf:function(t){return!1},computeClass:function(t){return this.small?"small rounded":this.large?"large rounded-more":this.veryLarge?"veryLarge rounded-even-more":"medium rounded"},_computeFacebookSrc:function(t){return t&&t.facebook_id?"https://graph.facebook.com/"+t.facebook_id+"/picture":null},usePlaceHolderImage:function(t){null==this.profileImageUrl&&t.facebook_id},ready:function(){}});let L;n({_template:i(L||(L=(t=>t)`
    <style include="iron-flex iron-flex-alignment">
      yp-user-image {
        padding-right: 16px;
      }

      .name {
        padding-top: 4px;
        font-weight: bold;
        text-align: left;
      }

      .name[inverted] {
        color: var(--ak-user-name-color, #444);
      }

      .orgImage {
        margin-left: 8px;
        width: 48px;
        min-width: 48px;
        height: 48px;
      }

      .rousnded {
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
        display: block;
      }

      .organizationName {
        color: #eee;
        text-align: left;
      }

      .organizationName[inverted] {
        color: #676767;
      }

      @media (max-width: 600px) {
        .orgImage {
          margin-right: 8px;
          margin-left: 4px;
        }
      }

      [hidden] {
        display: none !important;
      }

      .mainArea {
        padding-right: 8px;
      }
    </style>

    <template is="dom-if" if="[[user]]">
      <div class="layout horizontal mainArea" title="[[userTitle]]">
        <yp-user-image titlefromuser="[[userTitle]]" user="[[user]]" hidden\$="[[hideImage]]"></yp-user-image>
        <div class="layout vertical">
          <div class="name" inverted\$="[[inverted]]">
            [[user.name]]
          </div>
          <div class="organizationName" inverted\$="[[inverted]]" hidden\$="[[!organizationName]]">
            [[organizationName]]
          </div>
        </div>
        <template is="dom-if" if="[[organizationImageUrl]]">
          <img width="48" height="48" sizing="cover" hidden\$="[[hideImage]]" class="orgImage" src\$="[[organizationImageUrl]]">
        </template>
      </div>
    </template>
`)),is:"yp-user-with-organization",behaviors:[I,k],properties:{user:{type:Object},titleDate:{type:Date},hideImage:{type:Boolean,value:!1},userTitle:{type:String,computed:"_computeUserTitle(user, titleDate)"},inverted:{type:Boolean,value:!1},organizationName:{type:String,computed:"_organizationName(user)"},organizationImageUrl:{type:String,computed:"_organizationImageUrl(user)"}},_computeUserTitle:function(t,e){return null},_organizationName:function(t){return t&&t.OrganizationUsers&&t.OrganizationUsers.length>0&&t.OrganizationUsers[0].name?t.OrganizationUsers[0].name:null},_organizationImageUrl:function(t){return t&&t.OrganizationUsers&&t.OrganizationUsers.length>0&&t.OrganizationUsers[0].OrganizationLogoImages&&t.OrganizationUsers[0].OrganizationLogoImages.length>0&&t.OrganizationUsers[0].OrganizationLogoImages[0].formats?this.getImageFormatUrl(t.OrganizationUsers[0].OrganizationLogoImages,2):null}}),n({is:"iron-request",hostAttributes:{hidden:!0},properties:{xhr:{type:Object,notify:!0,readOnly:!0,value:function(){return new XMLHttpRequest}},response:{type:Object,notify:!0,readOnly:!0,value:function(){return null}},status:{type:Number,notify:!0,readOnly:!0,value:0},statusText:{type:String,notify:!0,readOnly:!0,value:""},completes:{type:Object,readOnly:!0,notify:!0,value:function(){return new Promise(function(t,e){this.resolveCompletes=t,this.rejectCompletes=e}.bind(this))}},progress:{type:Object,notify:!0,readOnly:!0,value:function(){return{}}},aborted:{type:Boolean,notify:!0,readOnly:!0,value:!1},errored:{type:Boolean,notify:!0,readOnly:!0,value:!1},timedOut:{type:Boolean,notify:!0,readOnly:!0,value:!1}},get succeeded(){if(this.errored||this.aborted||this.timedOut)return!1;var t=this.xhr.status||0;return 0===t||t>=200&&t<300},send:function(t){var e=this.xhr;if(e.readyState>0)return null;e.addEventListener("progress",function(t){this._setProgress({lengthComputable:t.lengthComputable,loaded:t.loaded,total:t.total}),this.fire("iron-request-progress-changed",{value:this.progress})}.bind(this)),e.addEventListener("error",function(e){this._setErrored(!0),this._updateStatus();var i=t.rejectWithRequest?{error:e,request:this}:e;this.rejectCompletes(i)}.bind(this)),e.addEventListener("timeout",function(e){this._setTimedOut(!0),this._updateStatus();var i=t.rejectWithRequest?{error:e,request:this}:e;this.rejectCompletes(i)}.bind(this)),e.addEventListener("abort",function(){this._setAborted(!0),this._updateStatus();var e=new Error("Request aborted."),i=t.rejectWithRequest?{error:e,request:this}:e;this.rejectCompletes(i)}.bind(this)),e.addEventListener("loadend",function(){if(this._updateStatus(),this._setResponse(this.parseResponse()),this.succeeded)this.resolveCompletes(this);else{var e=new Error("The request failed with status code: "+this.xhr.status),i=t.rejectWithRequest?{error:e,request:this}:e;this.rejectCompletes(i)}}.bind(this)),this.url=t.url;var i=!1!==t.async;e.open(t.method||"GET",t.url,i);var n={json:"application/json",text:"text/plain",html:"text/html",xml:"application/xml",arraybuffer:"application/octet-stream"}[t.handleAs],r=t.headers||Object.create(null),s=Object.create(null);for(var a in r)s[a.toLowerCase()]=r[a];if(r=s,n&&!r.accept&&(r.accept=n),Object.keys(r).forEach((function(t){/[A-Z]/.test(t)&&o._error("Headers must be lower case, got",t),e.setRequestHeader(t,r[t])}),this),i){e.timeout=t.timeout;var d=t.handleAs;!t.jsonPrefix&&d||(d="text"),e.responseType=e._responseType=d,t.jsonPrefix&&(e._jsonPrefix=t.jsonPrefix)}e.withCredentials=!!t.withCredentials;var l=this._encodeBodyObject(t.body,r["content-type"]);return e.send(l),this.completes},parseResponse:function(){var t=this.xhr,e=t.responseType||t._responseType,i=!this.xhr.responseType,n=t._jsonPrefix&&t._jsonPrefix.length||0;try{switch(e){case"json":if(i||void 0===t.response)try{return JSON.parse(t.responseText)}catch(e){return console.warn("Failed to parse JSON sent from "+t.responseURL),null}return t.response;case"xml":return t.responseXML;case"blob":case"document":case"arraybuffer":return t.response;case"text":default:if(n)try{return JSON.parse(t.responseText.substring(n))}catch(e){return console.warn("Failed to parse JSON sent from "+t.responseURL),null}return t.responseText}}catch(t){this.rejectCompletes(new Error("Could not parse response. "+t.message))}},abort:function(){this._setAborted(!0),this.xhr.abort()},_encodeBodyObject:function(t,e){if("string"==typeof t)return t;var i=t;switch(e){case"application/json":return JSON.stringify(i);case"application/x-www-form-urlencoded":return this._wwwFormUrlEncode(i)}return t},_wwwFormUrlEncode:function(t){if(!t)return"";var e=[];return Object.keys(t).forEach((function(i){e.push(this._wwwFormUrlEncodePiece(i)+"="+this._wwwFormUrlEncodePiece(t[i]))}),this),e.join("&")},_wwwFormUrlEncodePiece:function(t){return null!=t&&t.toString?encodeURIComponent(t.toString().replace(/\r?\n/g,"\r\n")).replace(/%20/g,"+"):""},_updateStatus:function(){this._setStatus(this.xhr.status),this._setStatusText(void 0===this.xhr.statusText?"":this.xhr.statusText)}}),n({is:"iron-ajax",hostAttributes:{hidden:!0},properties:{url:{type:String},params:{type:Object,value:function(){return{}}},method:{type:String,value:"GET"},headers:{type:Object,value:function(){return{}}},contentType:{type:String,value:null},body:{type:Object,value:null},sync:{type:Boolean,value:!1},handleAs:{type:String,value:"json"},withCredentials:{type:Boolean,value:!1},timeout:{type:Number,value:0},auto:{type:Boolean,value:!1},verbose:{type:Boolean,value:!1},lastRequest:{type:Object,notify:!0,readOnly:!0},lastProgress:{type:Object,notify:!0,readOnly:!0},loading:{type:Boolean,notify:!0,readOnly:!0},lastResponse:{type:Object,notify:!0,readOnly:!0},lastError:{type:Object,notify:!0,readOnly:!0},activeRequests:{type:Array,notify:!0,readOnly:!0,value:function(){return[]}},debounceDuration:{type:Number,value:0,notify:!0},jsonPrefix:{type:String,value:""},bubbles:{type:Boolean,value:!1},rejectWithRequest:{type:Boolean,value:!1},_boundHandleResponse:{type:Function,value:function(){return this._handleResponse.bind(this)}}},observers:["_requestOptionsChanged(url, method, params.*, headers, contentType, body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)"],created:function(){this._boundOnProgressChanged=this._onProgressChanged.bind(this)},get queryString(){var t,e,i=[];for(t in this.params)if(e=this.params[t],t=window.encodeURIComponent(t),Array.isArray(e))for(var n=0;n<e.length;n++)i.push(t+"="+window.encodeURIComponent(e[n]));else null!==e?i.push(t+"="+window.encodeURIComponent(e)):i.push(t);return i.join("&")},get requestUrl(){var t=this.queryString,e=this.url||"";if(t){var i=e.indexOf("?")>=0?"&":"?";return e+i+t}return e},get requestHeaders(){var t,e={},i=this.contentType;if(null==i&&"string"==typeof this.body&&(i="application/x-www-form-urlencoded"),i&&(e["content-type"]=i),"object"==typeof this.headers)for(t in this.headers)e[t]=this.headers[t].toString();return e},_onProgressChanged:function(t){this._setLastProgress(t.detail.value)},toRequestOptions:function(){return{url:this.requestUrl||"",method:this.method,headers:this.requestHeaders,body:this.body,async:!this.sync,handleAs:this.handleAs,jsonPrefix:this.jsonPrefix,withCredentials:this.withCredentials,timeout:this.timeout,rejectWithRequest:this.rejectWithRequest}},generateRequest:function(){var t=document.createElement("iron-request"),e=this.toRequestOptions();return this.push("activeRequests",t),t.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this,t)).then(this._discardRequest.bind(this,t)),this.fire("iron-ajax-presend",{request:t,options:e},{bubbles:this.bubbles,cancelable:!0}).defaultPrevented?(t.abort(),t.rejectCompletes(t),t):(this.lastRequest&&this.lastRequest.removeEventListener("iron-request-progress-changed",this._boundOnProgressChanged),t.addEventListener("iron-request-progress-changed",this._boundOnProgressChanged),t.send(e),this._setLastProgress(null),this._setLastRequest(t),this._setLoading(!0),this.fire("request",{request:t,options:e},{bubbles:this.bubbles,composed:!0}),this.fire("iron-ajax-request",{request:t,options:e},{bubbles:this.bubbles,composed:!0}),t)},_handleResponse:function(t){t===this.lastRequest&&(this._setLastResponse(t.response),this._setLastError(null),this._setLoading(!1)),this.fire("response",t,{bubbles:this.bubbles,composed:!0}),this.fire("iron-ajax-response",t,{bubbles:this.bubbles,composed:!0})},_handleError:function(t,e){this.verbose&&o._error(e),t===this.lastRequest&&(this._setLastError({request:t,error:e,status:t.xhr.status,statusText:t.xhr.statusText,response:t.xhr.response}),this._setLastResponse(null),this._setLoading(!1)),this.fire("iron-ajax-error",{request:t,error:e},{bubbles:this.bubbles,composed:!0}),this.fire("error",{request:t,error:e},{bubbles:this.bubbles,composed:!0})},_discardRequest:function(t){var e=this.activeRequests.indexOf(t);e>-1&&this.splice("activeRequests",e,1)},_requestOptionsChanged:function(){this.debounce("generate-request",(function(){null!=this.url&&this.auto&&this.generateRequest()}),this.debounceDuration)}});var D=function(){var t={base:"https://twemoji.maxcdn.com/2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(t){var e="string"==typeof t?parseInt(t,16):t;if(e<65536)return a(e);return a(55296+((e-=65536)>>10),56320+(1023&e))},toCodePoint:_},onerror:function(){this.parentNode&&this.parentNode.replaceChild(d(this.alt,!1),this)},parse:function(e,i){i&&"function"!=typeof i||(i={callback:i});return("string"==typeof e?h:p)(e,{callback:i.callback||l,attributes:"function"==typeof i.attributes?i.attributes:g,base:"string"==typeof i.base?i.base:t.base,ext:i.ext||t.ext,size:i.folder||(n=i.size||t.size,"number"==typeof n?n+"x"+n:n),className:i.className||t.className,onerror:i.onerror||t.onerror});var n},replace:m,test:function(t){i.lastIndex=0;var e=i.test(t);return i.lastIndex=0,e}},e={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},i=/(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddb0-\uddb3])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[\u0023\u002a\u0030-\u0039]\ufe0f?\u20e3|(?:[\u00a9\u00ae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\udeeb\udeec\udef4-\udef9]|\ud83e[\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd40-\udd45\udd47-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb4\uddb7\uddc0-\uddc2\uddd0\uddde-\uddff]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,n=/\uFE0F/g,o=String.fromCharCode(8205),r=/[&<>'"]/g,s=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,a=String.fromCharCode;return t;function d(t,e){return document.createTextNode(e?t.replace(n,""):t)}function l(t,e){return"".concat(e.base,e.size,"/",t,e.ext)}function u(t,e){for(var i,n,o=t.childNodes,r=o.length;r--;)3===(n=(i=o[r]).nodeType)?e.push(i):1!==n||"ownerSVGElement"in i||s.test(i.nodeName.toLowerCase())||u(i,e);return e}function c(t){return _(t.indexOf(o)<0?t.replace(n,""):t)}function p(t,e){for(var n,o,r,s,a,l,p,h,f,g,m,_,y,b=u(t,[]),v=b.length;v--;){for(r=!1,s=document.createDocumentFragment(),l=(a=b[v]).nodeValue,h=0;p=i.exec(l);){if((f=p.index)!==h&&s.appendChild(d(l.slice(h,f),!0)),_=c(m=p[0]),h=f+m.length,y=e.callback(_,e),_&&y){for(o in(g=new Image).onerror=e.onerror,g.setAttribute("draggable","false"),n=e.attributes(m,_))n.hasOwnProperty(o)&&0!==o.indexOf("on")&&!g.hasAttribute(o)&&g.setAttribute(o,n[o]);g.className=e.className,g.alt=m,g.src=y,r=!0,s.appendChild(g)}g||s.appendChild(d(m,!1)),g=null}r&&(h<l.length&&s.appendChild(d(l.slice(h),!0)),a.parentNode.replaceChild(s,a))}return t}function h(t,e){return m(t,(function(t){var i,n,o=t,s=c(t),a=e.callback(s,e);if(s&&a){for(n in o="<img ".concat('class="',e.className,'" ','draggable="false" ','alt="',t,'"',' src="',a,'"'),i=e.attributes(t,s))i.hasOwnProperty(n)&&0!==n.indexOf("on")&&-1===o.indexOf(" "+n+"=")&&(o=o.concat(" ",n,'="',i[n].replace(r,f),'"'));o=o.concat("/>")}return o}))}function f(t){return e[t]}function g(){return null}function m(t,e){return String(t).replace(i,e)}function _(t,e){for(var i=[],n=0,o=0,r=0;r<t.length;)n=t.charCodeAt(r++),o?(i.push((65536+(o-55296<<10)+(n-56320)).toString(16)),o=0):55296<=n&&n<=56319?o=n:i.push(n.toString(16));return i.join(e||"-")}}();let q,j,B=t=>t;!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).sanitizeHtml=t()}}((function(){return function t(e,i,n){function o(s,a){if(!i[s]){if(!e[s]){var d="function"==typeof require&&require;if(!a&&d)return d(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=i[s]={exports:{}};e[s][0].call(u.exports,(function(t){var i=e[s][1][t];return o(i||t)}),u,u.exports,t,e,i,n)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,e,i){var n=t("htmlparser2"),o=t("xtend"),r=t("regexp-quote");function s(t,e){t&&Object.keys(t).forEach((function(i){e(t[i],i)}))}function a(t,e){return{}.hasOwnProperty.call(t,e)}function d(t,e,i){var u="";function c(t,e){var i=this;this.tag=t,this.attribs=e||{},this.tagPosition=u.length,this.text="",this.updateParentNodeText=function(){b.length&&(b[b.length-1].text+=i.text)}}e?(e=o(d.defaults,e)).parser?e.parser=o(l,e.parser):e.parser=l:(e=d.defaults).parser=l;var p,h,f=e.nonTextTags||["script","style","textarea"];e.allowedAttributes&&(p={},h={},s(e.allowedAttributes,(function(t,e){p[e]=[];var i=[];t.forEach((function(t){t.indexOf("*")>=0?i.push(r(t).replace(/\\\*/g,".*")):p[e].push(t)})),h[e]=new RegExp("^("+i.join("|")+")$")})));var g={};s(e.allowedClasses,(function(t,e){p&&(a(p,e)||(p[e]=[]),p[e].push("class")),g[e]=t}));var m,_={};s(e.transformTags,(function(t,e){var i;"function"==typeof t?i=t:"string"==typeof t&&(i=d.simpleTransform(t)),"*"===e?m=i:_[e]=i}));var y=0,b=[],v={},x={},w=!1,S=0,P=new n.Parser({onopentag:function(t,i){if(w)S++;else{var n=new c(t,i);b.push(n);var o,r=!1,d=!!n.text;a(_,t)&&(o=_[t](t,i),n.attribs=i=o.attribs,void 0!==o.text&&(n.innerText=o.text),t!==o.tagName&&(n.name=t=o.tagName,x[y]=o.tagName)),m&&(o=m(t,i),n.attribs=i=o.attribs,t!==o.tagName&&(n.name=t=o.tagName,x[y]=o.tagName)),e.allowedTags&&-1===e.allowedTags.indexOf(t)&&(r=!0,-1!==f.indexOf(t)&&(w=!0,S=1),v[y]=!0),y++,r||(u+="<"+t,(!p||a(p,t)||p["*"])&&s(i,(function(i,o){if(!p||a(p,t)&&-1!==p[t].indexOf(o)||p["*"]&&-1!==p["*"].indexOf(o)||a(h,t)&&h[t].test(o)||h["*"]&&h["*"].test(o)){if(("href"===o||"src"===o)&&function(t,i){var n=(i=(i=i.replace(/[\x00-\x20]+/g,"")).replace(/<\!\-\-.*?\-\-\>/g,"")).match(/^([a-zA-Z]+)\:/);if(!n)return!1;var o=n[1].toLowerCase();if(a(e.allowedSchemesByTag,t))return-1===e.allowedSchemesByTag[t].indexOf(o);return!e.allowedSchemes||-1===e.allowedSchemes.indexOf(o)}(t,i))return void delete n.attribs[o];if("class"===o&&!(i=function(t,e){if(!e)return t;return(t=t.split(/\s+/)).filter((function(t){return-1!==e.indexOf(t)})).join(" ")}(i,g[t])).length)return void delete n.attribs[o];u+=" "+o,i.length&&(u+='="'+A(i)+'"')}else delete n.attribs[o]})),-1!==e.selfClosing.indexOf(t)?u+=" />":(u+=">",!n.innerText||d||e.textFilter||(u+=n.innerText)))}},ontext:function(t){if(!w){var i,n=b[b.length-1];if(n&&(i=n.tag,t=void 0!==n.innerText?n.innerText:t),"script"===i||"style"===i)u+=t;else{var o=A(t);e.textFilter?u+=e.textFilter(o):u+=o}if(b.length)b[b.length-1].text+=t}},onclosetag:function(t){if(w){if(--S)return;w=!1}var i=b.pop();if(i){if(w=!1,y--,v[y])return delete v[y],void i.updateParentNodeText();x[y]&&(t=x[y],delete x[y]),e.exclusiveFilter&&e.exclusiveFilter(i)?u=u.substr(0,i.tagPosition):(i.updateParentNodeText(),-1===e.selfClosing.indexOf(t)&&(u+="</"+t+">"))}}},e.parser);return P.write(t),P.end(),u;function A(t){return"string"!=typeof t&&(t+=""),t.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;")}}e.exports=d;var l={decodeEntities:!0};d.defaults={allowedTags:["h3","h4","h5","h6","blockquote","p","a","ul","ol","nl","li","b","i","strong","em","strike","code","hr","br","div","table","thead","caption","tbody","tr","th","td","pre"],allowedAttributes:{a:["href","name","target"],img:["src"]},selfClosing:["img","br","hr","area","base","basefont","input","link","meta"],allowedSchemes:["http","https","ftp","mailto"],allowedSchemesByTag:{}},d.simpleTransform=function(t,e,i){return i=void 0===i||i,e=e||{},function(n,o){var r;if(i)for(r in e)o[r]=e[r];else o=e;return{tagName:t,attribs:o}}}},{htmlparser2:36,"regexp-quote":59,xtend:60}],2:[function(t,e,i){},{}],3:[function(t,e,i){(function(e){var n=t("base64-js"),o=t("ieee754"),r=t("isarray");function s(){return d.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return d.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=d.prototype:(null===t&&(t=new d(e)),t.length=e),t}function d(t,e,i){if(!(d.TYPED_ARRAY_SUPPORT||this instanceof d))return new d(t,e,i);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return l(this,t,e,i)}function l(t,e,i,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,i,n){if(e.byteLength,i<0||e.byteLength<i)throw new RangeError("'offset' is out of bounds");if(e.byteLength<i+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===i&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,i):new Uint8Array(e,i,n);d.TYPED_ARRAY_SUPPORT?(t=e).__proto__=d.prototype:t=p(t,e);return t}(t,e,i,n):"string"==typeof e?function(t,e,i){"string"==typeof i&&""!==i||(i="utf8");if(!d.isEncoding(i))throw new TypeError('"encoding" must be a valid string encoding');var n=0|f(e,i),o=(t=a(t,n)).write(e,i);o!==n&&(t=t.slice(0,o));return t}(t,e,i):function(t,e){if(d.isBuffer(e)){var i=0|h(e.length);return 0===(t=a(t,i)).length||e.copy(t,0,0,i),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?a(t,0):p(t,e);if("Buffer"===e.type&&r(e.data))return p(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function c(t,e){if(u(e),t=a(t,e<0?0:0|h(e)),!d.TYPED_ARRAY_SUPPORT)for(var i=0;i<e;++i)t[i]=0;return t}function p(t,e){var i=e.length<0?0:0|h(e.length);t=a(t,i);for(var n=0;n<i;n+=1)t[n]=255&e[n];return t}function h(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function f(t,e){if(d.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var i=t.length;if(0===i)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":case void 0:return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return z(t).length;default:if(n)return N(t).length;e=(""+e).toLowerCase(),n=!0}}function g(t,e,i){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===i||i>this.length)&&(i=this.length),i<=0)return"";if((i>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return k(this,e,i);case"utf8":case"utf-8":return I(this,e,i);case"ascii":return C(this,e,i);case"latin1":case"binary":return E(this,e,i);case"base64":return A(this,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,e,i);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function m(t,e,i){var n=t[e];t[e]=t[i],t[i]=n}function _(t,e,i,n,o){if(0===t.length)return-1;if("string"==typeof i?(n=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),i=+i,isNaN(i)&&(i=o?0:t.length-1),i<0&&(i=t.length+i),i>=t.length){if(o)return-1;i=t.length-1}else if(i<0){if(!o)return-1;i=0}if("string"==typeof e&&(e=d.from(e,n)),d.isBuffer(e))return 0===e.length?-1:y(t,e,i,n,o);if("number"==typeof e)return e&=255,d.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,i):Uint8Array.prototype.lastIndexOf.call(t,e,i):y(t,[e],i,n,o);throw new TypeError("val must be string, number or Buffer")}function y(t,e,i,n,o){var r,s=1,a=t.length,d=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,d/=2,i/=2}function l(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var u=-1;for(r=i;r<a;r++)if(l(t,r)===l(e,-1===u?0:r-u)){if(-1===u&&(u=r),r-u+1===d)return u*s}else-1!==u&&(r-=r-u),u=-1}else for(i+d>a&&(i=a-d),r=i;r>=0;r--){for(var c=!0,p=0;p<d;p++)if(l(t,r+p)!==l(e,p)){c=!1;break}if(c)return r}return-1}function b(t,e,i,n){i=Number(i)||0;var o=t.length-i;n?(n=Number(n))>o&&(n=o):n=o;var r=e.length;if(r%2!=0)throw new TypeError("Invalid hex string");n>r/2&&(n=r/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[i+s]=a}return s}function v(t,e,i,n){return $(N(e,t.length-i),t,i,n)}function x(t,e,i,n){return $(function(t){for(var e=[],i=0;i<t.length;++i)e.push(255&t.charCodeAt(i));return e}(e),t,i,n)}function w(t,e,i,n){return x(t,e,i,n)}function S(t,e,i,n){return $(z(e),t,i,n)}function P(t,e,i,n){return $(function(t,e){for(var i,n,o,r=[],s=0;s<t.length&&!((e-=2)<0);++s)n=(i=t.charCodeAt(s))>>8,o=i%256,r.push(o),r.push(n);return r}(e,t.length-i),t,i,n)}function A(t,e,i){return 0===e&&i===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,i))}function I(t,e,i){i=Math.min(t.length,i);for(var n=[],o=e;o<i;){var r,s,a,d,l=t[o],u=null,c=l>239?4:l>223?3:l>191?2:1;if(o+c<=i)switch(c){case 1:l<128&&(u=l);break;case 2:128==(192&(r=t[o+1]))&&(d=(31&l)<<6|63&r)>127&&(u=d);break;case 3:r=t[o+1],s=t[o+2],128==(192&r)&&128==(192&s)&&(d=(15&l)<<12|(63&r)<<6|63&s)>2047&&(d<55296||d>57343)&&(u=d);break;case 4:r=t[o+1],s=t[o+2],a=t[o+3],128==(192&r)&&128==(192&s)&&128==(192&a)&&(d=(15&l)<<18|(63&r)<<12|(63&s)<<6|63&a)>65535&&d<1114112&&(u=d)}null===u?(u=65533,c=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),o+=c}return function(t){var e=t.length;if(e<=T)return String.fromCharCode.apply(String,t);var i="",n=0;for(;n<e;)i+=String.fromCharCode.apply(String,t.slice(n,n+=T));return i}(n)}i.Buffer=d,i.SlowBuffer=function(t){+t!=t&&(t=0);return d.alloc(+t)},i.INSPECT_MAX_BYTES=50,d.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),i.kMaxLength=s(),d.poolSize=8192,d._augment=function(t){return t.__proto__=d.prototype,t},d.from=function(t,e,i){return l(null,t,e,i)},d.TYPED_ARRAY_SUPPORT&&(d.prototype.__proto__=Uint8Array.prototype,d.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&d[Symbol.species]===d&&Object.defineProperty(d,Symbol.species,{value:null,configurable:!0})),d.alloc=function(t,e,i){return function(t,e,i,n){return u(e),e<=0?a(t,e):void 0!==i?"string"==typeof n?a(t,e).fill(i,n):a(t,e).fill(i):a(t,e)}(null,t,e,i)},d.allocUnsafe=function(t){return c(null,t)},d.allocUnsafeSlow=function(t){return c(null,t)},d.isBuffer=function(t){return!(null==t||!t._isBuffer)},d.compare=function(t,e){if(!d.isBuffer(t)||!d.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var i=t.length,n=e.length,o=0,r=Math.min(i,n);o<r;++o)if(t[o]!==e[o]){i=t[o],n=e[o];break}return i<n?-1:n<i?1:0},d.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(t,e){if(!r(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return d.alloc(0);var i;if(void 0===e)for(e=0,i=0;i<t.length;++i)e+=t[i].length;var n=d.allocUnsafe(e),o=0;for(i=0;i<t.length;++i){var s=t[i];if(!d.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,o),o+=s.length}return n},d.byteLength=f,d.prototype._isBuffer=!0,d.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},d.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},d.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},d.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?I(this,0,t):g.apply(this,arguments)},d.prototype.equals=function(t){if(!d.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===d.compare(this,t)},d.prototype.inspect=function(){var t="",e=i.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},d.prototype.compare=function(t,e,i,n,o){if(!d.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===i&&(i=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||i>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=i)return 0;if(n>=o)return-1;if(e>=i)return 1;if(this===t)return 0;for(var r=(o>>>=0)-(n>>>=0),s=(i>>>=0)-(e>>>=0),a=Math.min(r,s),l=this.slice(n,o),u=t.slice(e,i),c=0;c<a;++c)if(l[c]!==u[c]){r=l[c],s=u[c];break}return r<s?-1:s<r?1:0},d.prototype.includes=function(t,e,i){return-1!==this.indexOf(t,e,i)},d.prototype.indexOf=function(t,e,i){return _(this,t,e,i,!0)},d.prototype.lastIndexOf=function(t,e,i){return _(this,t,e,i,!1)},d.prototype.write=function(t,e,i,n){if(void 0===e)n="utf8",i=this.length,e=0;else if(void 0===i&&"string"==typeof e)n=e,i=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(i)?(i|=0,void 0===n&&(n="utf8")):(n=i,i=void 0)}var o=this.length-e;if((void 0===i||i>o)&&(i=o),t.length>0&&(i<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var r=!1;;)switch(n){case"hex":return b(this,t,e,i);case"utf8":case"utf-8":return v(this,t,e,i);case"ascii":return x(this,t,e,i);case"latin1":case"binary":return w(this,t,e,i);case"base64":return S(this,t,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,e,i);default:if(r)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),r=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var T=4096;function C(t,e,i){var n="";i=Math.min(t.length,i);for(var o=e;o<i;++o)n+=String.fromCharCode(127&t[o]);return n}function E(t,e,i){var n="";i=Math.min(t.length,i);for(var o=e;o<i;++o)n+=String.fromCharCode(t[o]);return n}function k(t,e,i){var n=t.length;(!e||e<0)&&(e=0),(!i||i<0||i>n)&&(i=n);for(var o="",r=e;r<i;++r)o+=O(t[r]);return o}function R(t,e,i){for(var n=t.slice(e,i),o="",r=0;r<n.length;r+=2)o+=String.fromCharCode(n[r]+256*n[r+1]);return o}function L(t,e,i){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>i)throw new RangeError("Trying to access beyond buffer length")}function D(t,e,i,n,o,r){if(!d.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<r)throw new RangeError('"value" argument is out of bounds');if(i+n>t.length)throw new RangeError("Index out of range")}function q(t,e,i,n){e<0&&(e=65535+e+1);for(var o=0,r=Math.min(t.length-i,2);o<r;++o)t[i+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function j(t,e,i,n){e<0&&(e=4294967295+e+1);for(var o=0,r=Math.min(t.length-i,4);o<r;++o)t[i+o]=e>>>8*(n?o:3-o)&255}function B(t,e,i,n,o,r){if(i+n>t.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function U(t,e,i,n,r){return r||B(t,0,i,4),o.write(t,e,i,n,23,4),i+4}function M(t,e,i,n,r){return r||B(t,0,i,8),o.write(t,e,i,n,52,8),i+8}d.prototype.slice=function(t,e){var i,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),d.TYPED_ARRAY_SUPPORT)(i=this.subarray(t,e)).__proto__=d.prototype;else{var o=e-t;i=new d(o,void 0);for(var r=0;r<o;++r)i[r]=this[r+t]}return i},d.prototype.readUIntLE=function(t,e,i){t|=0,e|=0,i||L(t,e,this.length);for(var n=this[t],o=1,r=0;++r<e&&(o*=256);)n+=this[t+r]*o;return n},d.prototype.readUIntBE=function(t,e,i){t|=0,e|=0,i||L(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},d.prototype.readUInt8=function(t,e){return e||L(t,1,this.length),this[t]},d.prototype.readUInt16LE=function(t,e){return e||L(t,2,this.length),this[t]|this[t+1]<<8},d.prototype.readUInt16BE=function(t,e){return e||L(t,2,this.length),this[t]<<8|this[t+1]},d.prototype.readUInt32LE=function(t,e){return e||L(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},d.prototype.readUInt32BE=function(t,e){return e||L(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},d.prototype.readIntLE=function(t,e,i){t|=0,e|=0,i||L(t,e,this.length);for(var n=this[t],o=1,r=0;++r<e&&(o*=256);)n+=this[t+r]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},d.prototype.readIntBE=function(t,e,i){t|=0,e|=0,i||L(t,e,this.length);for(var n=e,o=1,r=this[t+--n];n>0&&(o*=256);)r+=this[t+--n]*o;return r>=(o*=128)&&(r-=Math.pow(2,8*e)),r},d.prototype.readInt8=function(t,e){return e||L(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},d.prototype.readInt16LE=function(t,e){e||L(t,2,this.length);var i=this[t]|this[t+1]<<8;return 32768&i?4294901760|i:i},d.prototype.readInt16BE=function(t,e){e||L(t,2,this.length);var i=this[t+1]|this[t]<<8;return 32768&i?4294901760|i:i},d.prototype.readInt32LE=function(t,e){return e||L(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},d.prototype.readInt32BE=function(t,e){return e||L(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},d.prototype.readFloatLE=function(t,e){return e||L(t,4,this.length),o.read(this,t,!0,23,4)},d.prototype.readFloatBE=function(t,e){return e||L(t,4,this.length),o.read(this,t,!1,23,4)},d.prototype.readDoubleLE=function(t,e){return e||L(t,8,this.length),o.read(this,t,!0,52,8)},d.prototype.readDoubleBE=function(t,e){return e||L(t,8,this.length),o.read(this,t,!1,52,8)},d.prototype.writeUIntLE=function(t,e,i,n){(t=+t,e|=0,i|=0,n)||D(this,t,e,i,Math.pow(2,8*i)-1,0);var o=1,r=0;for(this[e]=255&t;++r<i&&(o*=256);)this[e+r]=t/o&255;return e+i},d.prototype.writeUIntBE=function(t,e,i,n){(t=+t,e|=0,i|=0,n)||D(this,t,e,i,Math.pow(2,8*i)-1,0);var o=i-1,r=1;for(this[e+o]=255&t;--o>=0&&(r*=256);)this[e+o]=t/r&255;return e+i},d.prototype.writeUInt8=function(t,e,i){return t=+t,e|=0,i||D(this,t,e,1,255,0),d.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},d.prototype.writeUInt16LE=function(t,e,i){return t=+t,e|=0,i||D(this,t,e,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):q(this,t,e,!0),e+2},d.prototype.writeUInt16BE=function(t,e,i){return t=+t,e|=0,i||D(this,t,e,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):q(this,t,e,!1),e+2},d.prototype.writeUInt32LE=function(t,e,i){return t=+t,e|=0,i||D(this,t,e,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):j(this,t,e,!0),e+4},d.prototype.writeUInt32BE=function(t,e,i){return t=+t,e|=0,i||D(this,t,e,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):j(this,t,e,!1),e+4},d.prototype.writeIntLE=function(t,e,i,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*i-1);D(this,t,e,i,o-1,-o)}var r=0,s=1,a=0;for(this[e]=255&t;++r<i&&(s*=256);)t<0&&0===a&&0!==this[e+r-1]&&(a=1),this[e+r]=(t/s>>0)-a&255;return e+i},d.prototype.writeIntBE=function(t,e,i,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*i-1);D(this,t,e,i,o-1,-o)}var r=i-1,s=1,a=0;for(this[e+r]=255&t;--r>=0&&(s*=256);)t<0&&0===a&&0!==this[e+r+1]&&(a=1),this[e+r]=(t/s>>0)-a&255;return e+i},d.prototype.writeInt8=function(t,e,i){return t=+t,e|=0,i||D(this,t,e,1,127,-128),d.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},d.prototype.writeInt16LE=function(t,e,i){return t=+t,e|=0,i||D(this,t,e,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):q(this,t,e,!0),e+2},d.prototype.writeInt16BE=function(t,e,i){return t=+t,e|=0,i||D(this,t,e,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):q(this,t,e,!1),e+2},d.prototype.writeInt32LE=function(t,e,i){return t=+t,e|=0,i||D(this,t,e,4,2147483647,-2147483648),d.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):j(this,t,e,!0),e+4},d.prototype.writeInt32BE=function(t,e,i){return t=+t,e|=0,i||D(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),d.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):j(this,t,e,!1),e+4},d.prototype.writeFloatLE=function(t,e,i){return U(this,t,e,!0,i)},d.prototype.writeFloatBE=function(t,e,i){return U(this,t,e,!1,i)},d.prototype.writeDoubleLE=function(t,e,i){return M(this,t,e,!0,i)},d.prototype.writeDoubleBE=function(t,e,i){return M(this,t,e,!1,i)},d.prototype.copy=function(t,e,i,n){if(i||(i=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<i&&(n=i),n===i)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-i&&(n=t.length-e+i);var o,r=n-i;if(this===t&&i<e&&e<n)for(o=r-1;o>=0;--o)t[o+e]=this[o+i];else if(r<1e3||!d.TYPED_ARRAY_SUPPORT)for(o=0;o<r;++o)t[o+e]=this[o+i];else Uint8Array.prototype.set.call(t,this.subarray(i,i+r),e);return r},d.prototype.fill=function(t,e,i,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,i=this.length):"string"==typeof i&&(n=i,i=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!d.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<i)throw new RangeError("Out of range index");if(i<=e)return this;var r;if(e>>>=0,i=void 0===i?this.length:i>>>0,t||(t=0),"number"==typeof t)for(r=e;r<i;++r)this[r]=t;else{var s=d.isBuffer(t)?t:N(new d(t,n).toString()),a=s.length;for(r=0;r<i-e;++r)this[r+e]=s[r%a]}return this};var V=/[^+\/0-9A-Za-z-_]/g;function O(t){return t<16?"0"+t.toString(16):t.toString(16)}function N(t,e){var i;e=e||1/0;for(var n=t.length,o=null,r=[],s=0;s<n;++s){if((i=t.charCodeAt(s))>55295&&i<57344){if(!o){if(i>56319){(e-=3)>-1&&r.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&r.push(239,191,189);continue}o=i;continue}if(i<56320){(e-=3)>-1&&r.push(239,191,189),o=i;continue}i=65536+(o-55296<<10|i-56320)}else o&&(e-=3)>-1&&r.push(239,191,189);if(o=null,i<128){if((e-=1)<0)break;r.push(i)}else if(i<2048){if((e-=2)<0)break;r.push(i>>6|192,63&i|128)}else if(i<65536){if((e-=3)<0)break;r.push(i>>12|224,i>>6&63|128,63&i|128)}else{if(!(i<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;r.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}}return r}function z(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(V,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function $(t,e,i,n){for(var o=0;o<n&&!(o+i>=e.length||o>=t.length);++o)e[o+i]=t[o];return o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":4,ieee754:5,isarray:6}],4:[function(t,e,i){i.toByteArray=function(t){var e,i,n,s,a,d,l=t.length;if(l%4>0)throw new Error("Invalid string. Length must be a multiple of 4");a="="===t[l-2]?2:"="===t[l-1]?1:0,d=new r(3*l/4-a),n=a>0?l-4:l;var u=0;for(e=0,i=0;e<n;e+=4,i+=3)s=o[t.charCodeAt(e)]<<18|o[t.charCodeAt(e+1)]<<12|o[t.charCodeAt(e+2)]<<6|o[t.charCodeAt(e+3)],d[u++]=s>>16&255,d[u++]=s>>8&255,d[u++]=255&s;2===a?(s=o[t.charCodeAt(e)]<<2|o[t.charCodeAt(e+1)]>>4,d[u++]=255&s):1===a&&(s=o[t.charCodeAt(e)]<<10|o[t.charCodeAt(e+1)]<<4|o[t.charCodeAt(e+2)]>>2,d[u++]=s>>8&255,d[u++]=255&s);return d},i.fromByteArray=function(t){for(var e,i=t.length,o=i%3,r="",a=[],d=16383,l=0,u=i-o;l<u;l+=d)a.push(s(t,l,l+d>u?u:l+d));1===o?(e=t[i-1],r+=n[e>>2],r+=n[e<<4&63],r+="=="):2===o&&(e=(t[i-2]<<8)+t[i-1],r+=n[e>>10],r+=n[e>>4&63],r+=n[e<<2&63],r+="=");return a.push(r),a.join("")};var n=[],o=[],r="undefined"!=typeof Uint8Array?Uint8Array:Array;function s(t,e,i){for(var o,r,s=[],a=e;a<i;a+=3)o=(t[a]<<16)+(t[a+1]<<8)+t[a+2],s.push(n[(r=o)>>18&63]+n[r>>12&63]+n[r>>6&63]+n[63&r]);return s.join("")}!function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=0,i=t.length;e<i;++e)n[e]=t[e],o[t.charCodeAt(e)]=e;o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63}()},{}],5:[function(t,e,i){i.read=function(t,e,i,n,o){var r,s,a=8*o-n-1,d=(1<<a)-1,l=d>>1,u=-7,c=i?o-1:0,p=i?-1:1,h=t[e+c];for(c+=p,r=h&(1<<-u)-1,h>>=-u,u+=a;u>0;r=256*r+t[e+c],c+=p,u-=8);for(s=r&(1<<-u)-1,r>>=-u,u+=n;u>0;s=256*s+t[e+c],c+=p,u-=8);if(0===r)r=1-l;else{if(r===d)return s?NaN:1/0*(h?-1:1);s+=Math.pow(2,n),r-=l}return(h?-1:1)*s*Math.pow(2,r-n)},i.write=function(t,e,i,n,o,r){var s,a,d,l=8*r-o-1,u=(1<<l)-1,c=u>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:r-1,f=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-s))<1&&(s--,d*=2),(e+=s+c>=1?p/d:p*Math.pow(2,1-c))*d>=2&&(s++,d/=2),s+c>=u?(a=0,s=u):s+c>=1?(a=(e*d-1)*Math.pow(2,o),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;t[i+h]=255&a,h+=f,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;t[i+h]=255&s,h+=f,s/=256,l-=8);t[i+h-f]|=128*g}},{}],6:[function(t,e,i){var n={}.toString;e.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},{}],7:[function(t,e,i){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(t){return"function"==typeof t}function r(t){return"object"==typeof t&&null!==t}function s(t){return void 0===t}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},n.prototype.emit=function(t){var e,i,n,a,d,l;if(this._events||(this._events={}),"error"===t&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var u=new Error('Uncaught, unspecified "error" event. ('+e+")");throw u.context=e,u}if(s(i=this._events[t]))return!1;if(o(i))switch(arguments.length){case 1:i.call(this);break;case 2:i.call(this,arguments[1]);break;case 3:i.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),i.apply(this,a)}else if(r(i))for(a=Array.prototype.slice.call(arguments,1),n=(l=i.slice()).length,d=0;d<n;d++)l[d].apply(this,a);return!0},n.prototype.addListener=function(t,e){var i;if(!o(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,o(e.listener)?e.listener:e),this._events[t]?r(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,r(this._events[t])&&!this._events[t].warned&&(i=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&i>0&&this._events[t].length>i&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){if(!o(e))throw TypeError("listener must be a function");var i=!1;function n(){this.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}return n.listener=e,this.on(t,n),this},n.prototype.removeListener=function(t,e){var i,n,s,a;if(!o(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(s=(i=this._events[t]).length,n=-1,i===e||o(i.listener)&&i.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(r(i)){for(a=s;a-- >0;)if(i[a]===e||i[a].listener&&i[a].listener===e){n=a;break}if(n<0)return this;1===i.length?(i.length=0,delete this._events[t]):i.splice(n,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,i;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(o(i=this._events[t]))this.removeListener(t,i);else if(i)for(;i.length;)this.removeListener(t,i[i.length-1]);return delete this._events[t],this},n.prototype.listeners=function(t){return this._events&&this._events[t]?o(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(o(e))return 1;if(e)return e.length}return 0},n.listenerCount=function(t,e){return t.listenerCount(e)}},{}],8:[function(t,e,i){"function"==typeof Object.create?e.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(t,e){t.super_=e;var i=function(){};i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t}},{}],9:[function(t,e,i){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}e.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},{}],10:[function(t,e,i){var n,o,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function d(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();var l,u=[],c=!1,p=-1;function h(){c&&l&&(c=!1,l.length?u=l.concat(u):p=-1,u.length&&f())}function f(){if(!c){var t=d(h);c=!0;for(var e=u.length;e;){for(l=u,u=[];++p<e;)l&&l[p].run();p=-1,e=u.length}l=null,c=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function m(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];u.push(new g(t,e)),1!==u.length||c||d(f)},g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},{}],11:[function(t,e,i){e.exports=t("./lib/_stream_duplex.js")},{"./lib/_stream_duplex.js":12}],12:[function(t,e,i){var n=Object.keys||function(t){var e=[];for(var i in t)e.push(i);return e};e.exports=c;var o=t("process-nextick-args"),r=t("core-util-is");r.inherits=t("inherits");var s=t("./_stream_readable"),a=t("./_stream_writable");r.inherits(c,s);for(var d=n(a.prototype),l=0;l<d.length;l++){var u=d[l];c.prototype[u]||(c.prototype[u]=a.prototype[u])}function c(t){if(!(this instanceof c))return new c(t);s.call(this,t),a.call(this,t),t&&!1===t.readable&&(this.readable=!1),t&&!1===t.writable&&(this.writable=!1),this.allowHalfOpen=!0,t&&!1===t.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",p)}function p(){this.allowHalfOpen||this._writableState.ended||o(h,this)}function h(t){t.end()}},{"./_stream_readable":14,"./_stream_writable":16,"core-util-is":19,inherits:8,"process-nextick-args":21}],13:[function(t,e,i){e.exports=r;var n=t("./_stream_transform"),o=t("core-util-is");function r(t){if(!(this instanceof r))return new r(t);n.call(this,t)}o.inherits=t("inherits"),o.inherits(r,n),r.prototype._transform=function(t,e,i){i(null,t)}},{"./_stream_transform":15,"core-util-is":19,inherits:8}],14:[function(t,e,i){(function(i){e.exports=m;var n=t("process-nextick-args"),o=t("isarray");m.ReadableState=g,t("events").EventEmitter;var r,s=function(t,e){return t.listeners(e).length};!function(){try{r=t("stream")}catch(t){}finally{r||(r=t("events").EventEmitter)}}();var a=t("buffer").Buffer,d=t("buffer-shims"),l=t("core-util-is");l.inherits=t("inherits");var u=t("util"),c=void 0;c=u&&u.debuglog?u.debuglog("stream"):function(){};var p,h,f=t("./internal/streams/BufferList");function g(e,i){h=h||t("./_stream_duplex"),e=e||{},this.objectMode=!!e.objectMode,i instanceof h&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var n=e.highWaterMark,o=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:o,this.highWaterMark=~~this.highWaterMark,this.buffer=new f,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(p||(p=t("client_app/src/yp-magic-text/sanitize-html.min").StringDecoder),this.decoder=new p(e.encoding),this.encoding=e.encoding)}function m(e){if(h=h||t("./_stream_duplex"),!(this instanceof m))return new m(e);this._readableState=new g(e,this),this.readable=!0,e&&"function"==typeof e.read&&(this._read=e.read),r.call(this)}function _(t,e,i,o,r){var s=function(t,e){var i=null;a.isBuffer(e)||"string"==typeof e||null==e||t.objectMode||(i=new TypeError("Invalid non-string/buffer chunk"));return i}(e,i);if(s)t.emit("error",s);else if(null===i)e.reading=!1,function(t,e){if(e.ended)return;if(e.decoder){var i=e.decoder.end();i&&i.length&&(e.buffer.push(i),e.length+=e.objectMode?1:i.length)}e.ended=!0,v(t)}(t,e);else if(e.objectMode||i&&i.length>0)if(e.ended&&!r){var d=new Error("stream.push() after EOF");t.emit("error",d)}else if(e.endEmitted&&r){var l=new Error("stream.unshift() after end event");t.emit("error",l)}else{var u;!e.decoder||r||o||(i=e.decoder.write(i),u=!e.objectMode&&0===i.length),r||(e.reading=!1),u||(e.flowing&&0===e.length&&!e.sync?(t.emit("data",i),t.read(0)):(e.length+=e.objectMode?1:i.length,r?e.buffer.unshift(i):e.buffer.push(i),e.needReadable&&v(t))),function(t,e){e.readingMore||(e.readingMore=!0,n(w,t,e))}(t,e)}else r||(e.reading=!1);return function(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}(e)}l.inherits(m,r),m.prototype.push=function(t,e){var i=this._readableState;return i.objectMode||"string"!=typeof t||(e=e||i.defaultEncoding)!==i.encoding&&(t=d.from(t,e),e=""),_(this,i,t,e,!1)},m.prototype.unshift=function(t){return _(this,this._readableState,t,"",!0)},m.prototype.isPaused=function(){return!1===this._readableState.flowing},m.prototype.setEncoding=function(e){return p||(p=t("client_app/src/yp-magic-text/sanitize-html.min").StringDecoder),this._readableState.decoder=new p(e),this._readableState.encoding=e,this};var y=8388608;function b(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!=t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=function(t){return t>=y?t=y:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function v(t){var e=t._readableState;e.needReadable=!1,e.emittedReadable||(c("emitReadable",e.flowing),e.emittedReadable=!0,e.sync?n(x,t):x(t))}function x(t){c("emit readable"),t.emit("readable"),A(t)}function w(t,e){for(var i=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(c("maybeReadMore read 0"),t.read(0),i!==e.length);)i=e.length;e.readingMore=!1}function S(t){c("readable nexttick read 0"),t.read(0)}function P(t,e){e.reading||(c("resume read 0"),t.read(0)),e.resumeScheduled=!1,e.awaitDrain=0,t.emit("resume"),A(t),e.flowing&&!e.reading&&t.read(0)}function A(t){var e=t._readableState;for(c("flow",e.flowing);e.flowing&&null!==t.read(););}function I(t,e){return 0===e.length?null:(e.objectMode?i=e.buffer.shift():!t||t>=e.length?(i=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.head.data:e.buffer.concat(e.length),e.buffer.clear()):i=function(t,e,i){var n;t<e.head.data.length?(n=e.head.data.slice(0,t),e.head.data=e.head.data.slice(t)):n=t===e.head.data.length?e.shift():i?function(t,e){var i=e.head,n=1,o=i.data;t-=o.length;for(;i=i.next;){var r=i.data,s=t>r.length?r.length:t;if(s===r.length?o+=r:o+=r.slice(0,t),0===(t-=s)){s===r.length?(++n,i.next?e.head=i.next:e.head=e.tail=null):(e.head=i,i.data=r.slice(s));break}++n}return e.length-=n,o}(t,e):function(t,e){var i=d.allocUnsafe(t),n=e.head,o=1;n.data.copy(i),t-=n.data.length;for(;n=n.next;){var r=n.data,s=t>r.length?r.length:t;if(r.copy(i,i.length-t,0,s),0===(t-=s)){s===r.length?(++o,n.next?e.head=n.next:e.head=e.tail=null):(e.head=n,n.data=r.slice(s));break}++o}return e.length-=o,i}(t,e);return n}(t,e.buffer,e.decoder),i);var i}function T(t){var e=t._readableState;if(e.length>0)throw new Error('"endReadable()" called on non-empty stream');e.endEmitted||(e.ended=!0,n(C,e,t))}function C(t,e){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}function E(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1}m.prototype.read=function(t){c("read",t),t=parseInt(t,10);var e=this._readableState,i=t;if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return c("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?T(this):v(this),null;if(0===(t=b(t,e))&&e.ended)return 0===e.length&&T(this),null;var n,o=e.needReadable;return c("need readable",o),(0===e.length||e.length-t<e.highWaterMark)&&c("length less than watermark",o=!0),e.ended||e.reading?c("reading or ended",o=!1):o&&(c("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=b(i,e))),null===(n=t>0?I(t,e):null)?(e.needReadable=!0,t=0):e.length-=t,0===e.length&&(e.ended||(e.needReadable=!0),i!==t&&e.ended&&T(this)),null!==n&&this.emit("data",n),n},m.prototype._read=function(t){this.emit("error",new Error("not implemented"))},m.prototype.pipe=function(t,e){var r=this,a=this._readableState;switch(a.pipesCount){case 0:a.pipes=t;break;case 1:a.pipes=[a.pipes,t];break;default:a.pipes.push(t)}a.pipesCount+=1,c("pipe count=%d opts=%j",a.pipesCount,e);var d=(!e||!1!==e.end)&&t!==i.stdout&&t!==i.stderr?u:f;function l(t){c("onunpipe"),t===r&&f()}function u(){c("onend"),t.end()}a.endEmitted?n(d):r.once("end",d),t.on("unpipe",l);var p=function(t){return function(){var e=t._readableState;c("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&s(t,"data")&&(e.flowing=!0,A(t))}}(r);t.on("drain",p);var h=!1;function f(){c("cleanup"),t.removeListener("close",y),t.removeListener("finish",b),t.removeListener("drain",p),t.removeListener("error",_),t.removeListener("unpipe",l),r.removeListener("end",u),r.removeListener("end",f),r.removeListener("data",m),h=!0,!a.awaitDrain||t._writableState&&!t._writableState.needDrain||p()}var g=!1;function m(e){c("ondata"),g=!1,!1!==t.write(e)||g||((1===a.pipesCount&&a.pipes===t||a.pipesCount>1&&-1!==E(a.pipes,t))&&!h&&(c("false write response, pause",r._readableState.awaitDrain),r._readableState.awaitDrain++,g=!0),r.pause())}function _(e){c("onerror",e),v(),t.removeListener("error",_),0===s(t,"error")&&t.emit("error",e)}function y(){t.removeListener("finish",b),v()}function b(){c("onfinish"),t.removeListener("close",y),v()}function v(){c("unpipe"),r.unpipe(t)}return r.on("data",m),function(t,e,i){if("function"==typeof t.prependListener)return t.prependListener(e,i);t._events&&t._events[e]?o(t._events[e])?t._events[e].unshift(i):t._events[e]=[i,t._events[e]]:t.on(e,i)}(t,"error",_),t.once("close",y),t.once("finish",b),t.emit("pipe",r),a.flowing||(c("pipe resume"),r.resume()),t},m.prototype.unpipe=function(t){var e=this._readableState;if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes||(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this)),this;if(!t){var i=e.pipes,n=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var o=0;o<n;o++)i[o].emit("unpipe",this);return this}var r=E(e.pipes,t);return-1===r||(e.pipes.splice(r,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this)),this},m.prototype.on=function(t,e){var i=r.prototype.on.call(this,t,e);if("data"===t)!1!==this._readableState.flowing&&this.resume();else if("readable"===t){var o=this._readableState;o.endEmitted||o.readableListening||(o.readableListening=o.needReadable=!0,o.emittedReadable=!1,o.reading?o.length&&v(this):n(S,this))}return i},m.prototype.addListener=m.prototype.on,m.prototype.resume=function(){var t=this._readableState;return t.flowing||(c("resume"),t.flowing=!0,function(t,e){e.resumeScheduled||(e.resumeScheduled=!0,n(P,t,e))}(this,t)),this},m.prototype.pause=function(){return c("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(c("pause"),this._readableState.flowing=!1,this.emit("pause")),this},m.prototype.wrap=function(t){var e=this._readableState,i=!1,n=this;for(var o in t.on("end",(function(){if(c("wrapped end"),e.decoder&&!e.ended){var t=e.decoder.end();t&&t.length&&n.push(t)}n.push(null)})),t.on("data",(function(o){(c("wrapped data"),e.decoder&&(o=e.decoder.write(o)),e.objectMode&&null==o)||(e.objectMode||o&&o.length)&&(n.push(o)||(i=!0,t.pause()))})),t)void 0===this[o]&&"function"==typeof t[o]&&(this[o]=function(e){return function(){return t[e].apply(t,arguments)}}(o));return function(t,e){for(var i=0,n=t.length;i<n;i++)e(t[i],i)}(["error","close","destroy","pause","resume"],(function(e){t.on(e,n.emit.bind(n,e))})),n._read=function(e){c("wrapped _read",e),i&&(i=!1,t.resume())},n},m._fromList=I}).call(this,t("_process"))},{"./_stream_duplex":12,"./internal/streams/BufferList":17,_process:10,buffer:3,"buffer-shims":18,"core-util-is":19,events:7,inherits:8,isarray:20,"process-nextick-args":21,"string_decoder/":28,util:2}],15:[function(t,e,i){e.exports=s;var n=t("./_stream_duplex"),o=t("core-util-is");function r(t){this.afterTransform=function(e,i){return function(t,e,i){var n=t._transformState;n.transforming=!1;var o=n.writecb;if(!o)return t.emit("error",new Error("no writecb in Transform class"));n.writechunk=null,n.writecb=null,null!=i&&t.push(i);o(e);var r=t._readableState;r.reading=!1,(r.needReadable||r.length<r.highWaterMark)&&t._read(r.highWaterMark)}(t,e,i)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null,this.writeencoding=null}function s(t){if(!(this instanceof s))return new s(t);n.call(this,t),this._transformState=new r(this);var e=this;this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.once("prefinish",(function(){"function"==typeof this._flush?this._flush((function(t){a(e,t)})):a(e)}))}function a(t,e){if(e)return t.emit("error",e);var i=t._writableState,n=t._transformState;if(i.length)throw new Error("Calling transform done when ws.length != 0");if(n.transforming)throw new Error("Calling transform done when still transforming");return t.push(null)}o.inherits=t("inherits"),o.inherits(s,n),s.prototype.push=function(t,e){return this._transformState.needTransform=!1,n.prototype.push.call(this,t,e)},s.prototype._transform=function(t,e,i){throw new Error("Not implemented")},s.prototype._write=function(t,e,i){var n=this._transformState;if(n.writecb=i,n.writechunk=t,n.writeencoding=e,!n.transforming){var o=this._readableState;(n.needTransform||o.needReadable||o.length<o.highWaterMark)&&this._read(o.highWaterMark)}},s.prototype._read=function(t){var e=this._transformState;null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0}},{"./_stream_duplex":12,"core-util-is":19,inherits:8}],16:[function(t,e,i){(function(i){e.exports=f;var n=t("process-nextick-args"),o=!i.browser&&["v0.10","v0.9."].indexOf(i.version.slice(0,5))>-1?setImmediate:n;f.WritableState=h;var r=t("core-util-is");r.inherits=t("inherits");var s,a={deprecate:t("util-deprecate")};!function(){try{s=t("stream")}catch(t){}finally{s||(s=t("events").EventEmitter)}}();var d,l=t("buffer").Buffer,u=t("buffer-shims");function c(){}function p(t,e,i){this.chunk=t,this.encoding=e,this.callback=i,this.next=null}function h(e,i){d=d||t("./_stream_duplex"),e=e||{},this.objectMode=!!e.objectMode,i instanceof d&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var r=e.highWaterMark,s=this.objectMode?16:16384;this.highWaterMark=r||0===r?r:s,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var a=!1===e.decodeStrings;this.decodeStrings=!a,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var i=t._writableState,r=i.sync,s=i.writecb;if(function(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}(i),e)!function(t,e,i,o,r){--e.pendingcb,i?n(r,o):r(o);t._writableState.errorEmitted=!0,t.emit("error",o)}(t,i,r,e,s);else{var a=y(i);a||i.corked||i.bufferProcessing||!i.bufferedRequest||_(t,i),r?o(m,t,i,a,s):m(t,i,a,s)}}(i,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new x(this)}function f(e){if(d=d||t("./_stream_duplex"),!(this instanceof f||this instanceof d))return new f(e);this._writableState=new h(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev)),s.call(this)}function g(t,e,i,n,o,r,s){e.writelen=n,e.writecb=s,e.writing=!0,e.sync=!0,i?t._writev(o,e.onwrite):t._write(o,r,e.onwrite),e.sync=!1}function m(t,e,i,n){i||function(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}(t,e),e.pendingcb--,n(),v(t,e)}function _(t,e){e.bufferProcessing=!0;var i=e.bufferedRequest;if(t._writev&&i&&i.next){var n=e.bufferedRequestCount,o=new Array(n),r=e.corkedRequestsFree;r.entry=i;for(var s=0;i;)o[s]=i,i=i.next,s+=1;g(t,e,!0,e.length,o,"",r.finish),e.pendingcb++,e.lastBufferedRequest=null,r.next?(e.corkedRequestsFree=r.next,r.next=null):e.corkedRequestsFree=new x(e)}else{for(;i;){var a=i.chunk,d=i.encoding,l=i.callback;if(g(t,e,!1,e.objectMode?1:a.length,a,d,l),i=i.next,e.writing)break}null===i&&(e.lastBufferedRequest=null)}e.bufferedRequestCount=0,e.bufferedRequest=i,e.bufferProcessing=!1}function y(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function b(t,e){e.prefinished||(e.prefinished=!0,t.emit("prefinish"))}function v(t,e){var i=y(e);return i&&(0===e.pendingcb?(b(t,e),e.finished=!0,t.emit("finish")):b(t,e)),i}function x(t){var e=this;this.next=null,this.entry=null,this.finish=function(i){var n=e.entry;for(e.entry=null;n;){var o=n.callback;t.pendingcb--,o(i),n=n.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}}r.inherits(f,s),h.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next;return e},function(){try{Object.defineProperty(h.prototype,"buffer",{get:a.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")})}catch(t){}}(),f.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},f.prototype.write=function(t,e,i){var o=this._writableState,r=!1;return"function"==typeof e&&(i=e,e=null),l.isBuffer(t)?e="buffer":e||(e=o.defaultEncoding),"function"!=typeof i&&(i=c),o.ended?function(t,e){var i=new Error("write after end");t.emit("error",i),n(e,i)}(this,i):function(t,e,i,o){var r=!0,s=!1;return null===i?s=new TypeError("May not write null values to stream"):l.isBuffer(i)||"string"==typeof i||void 0===i||e.objectMode||(s=new TypeError("Invalid non-string/buffer chunk")),s&&(t.emit("error",s),n(o,s),r=!1),r}(this,o,t,i)&&(o.pendingcb++,r=function(t,e,i,n,o){i=function(t,e,i){t.objectMode||!1===t.decodeStrings||"string"!=typeof e||(e=u.from(e,i));return e}(e,i,n),l.isBuffer(i)&&(n="buffer");var r=e.objectMode?1:i.length;e.length+=r;var s=e.length<e.highWaterMark;s||(e.needDrain=!0);if(e.writing||e.corked){var a=e.lastBufferedRequest;e.lastBufferedRequest=new p(i,n,o),a?a.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else g(t,e,!1,r,i,n,o);return s}(this,o,t,e,i)),r},f.prototype.cork=function(){this._writableState.corked++},f.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.finished||t.bufferProcessing||!t.bufferedRequest||_(this,t))},f.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+t);return this._writableState.defaultEncoding=t,this},f.prototype._write=function(t,e,i){i(new Error("not implemented"))},f.prototype._writev=null,f.prototype.end=function(t,e,i){var o=this._writableState;"function"==typeof t?(i=t,t=null,e=null):"function"==typeof e&&(i=e,e=null),null!=t&&this.write(t,e),o.corked&&(o.corked=1,this.uncork()),o.ending||o.finished||function(t,e,i){e.ending=!0,v(t,e),i&&(e.finished?n(i):t.once("finish",i));e.ended=!0,t.writable=!1}(this,o,i)}}).call(this,t("_process"))},{"./_stream_duplex":12,_process:10,buffer:3,"buffer-shims":18,"core-util-is":19,events:7,inherits:8,"process-nextick-args":21,"util-deprecate":22}],17:[function(t,e,i){t("buffer").Buffer;var n=t("buffer-shims");function o(){this.head=null,this.tail=null,this.length=0}e.exports=o,o.prototype.push=function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length},o.prototype.unshift=function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length},o.prototype.shift=function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}},o.prototype.clear=function(){this.head=this.tail=null,this.length=0},o.prototype.join=function(t){if(0===this.length)return"";for(var e=this.head,i=""+e.data;e=e.next;)i+=t+e.data;return i},o.prototype.concat=function(t){if(0===this.length)return n.alloc(0);if(1===this.length)return this.head.data;for(var e=n.allocUnsafe(t>>>0),i=this.head,o=0;i;)i.data.copy(e,o),o+=i.data.length,i=i.next;return e}},{buffer:3,"buffer-shims":18}],18:[function(t,e,i){(function(e){var n=t("buffer"),o=n.Buffer,r=n.SlowBuffer,s=n.kMaxLength||2147483647;i.alloc=function(t,e,i){if("function"==typeof o.alloc)return o.alloc(t,e,i);if("number"==typeof i)throw new TypeError("encoding must not be number");if("number"!=typeof t)throw new TypeError("size must be a number");if(t>s)throw new RangeError("size is too large");var n=i,r=e;void 0===r&&(n=void 0,r=0);var a=new o(t);if("string"==typeof r)for(var d=new o(r,n),l=d.length,u=-1;++u<t;)a[u]=d[u%l];else a.fill(r);return a},i.allocUnsafe=function(t){if("function"==typeof o.allocUnsafe)return o.allocUnsafe(t);if("number"!=typeof t)throw new TypeError("size must be a number");if(t>s)throw new RangeError("size is too large");return new o(t)},i.from=function(t,i,n){if("function"==typeof o.from&&(!e.Uint8Array||Uint8Array.from!==o.from))return o.from(t,i,n);if("number"==typeof t)throw new TypeError('"value" argument must not be a number');if("string"==typeof t)return new o(t,i);if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer){var r=i;if(1===arguments.length)return new o(t);void 0===r&&(r=0);var s=n;if(void 0===s&&(s=t.byteLength-r),r>=t.byteLength)throw new RangeError("'offset' is out of bounds");if(s>t.byteLength-r)throw new RangeError("'length' is out of bounds");return new o(t.slice(r,r+s))}if(o.isBuffer(t)){var a=new o(t.length);return t.copy(a,0,0,t.length),a}if(t){if(Array.isArray(t)||"undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return new o(t);if("Buffer"===t.type&&Array.isArray(t.data))return new o(t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")},i.allocUnsafeSlow=function(t){if("function"==typeof o.allocUnsafeSlow)return o.allocUnsafeSlow(t);if("number"!=typeof t)throw new TypeError("size must be a number");if(t>=s)throw new RangeError("size is too large");return new r(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{buffer:3}],19:[function(t,e,i){(function(t){function e(t){return Object.prototype.toString.call(t)}i.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===e(t)},i.isBoolean=function(t){return"boolean"==typeof t},i.isNull=function(t){return null===t},i.isNullOrUndefined=function(t){return null==t},i.isNumber=function(t){return"number"==typeof t},i.isString=function(t){return"string"==typeof t},i.isSymbol=function(t){return"symbol"==typeof t},i.isUndefined=function(t){return void 0===t},i.isRegExp=function(t){return"[object RegExp]"===e(t)},i.isObject=function(t){return"object"==typeof t&&null!==t},i.isDate=function(t){return"[object Date]"===e(t)},i.isError=function(t){return"[object Error]"===e(t)||t instanceof Error},i.isFunction=function(t){return"function"==typeof t},i.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},i.isBuffer=t.isBuffer}).call(this,{isBuffer:t("../../../../insert-module-globals/node_modules/is-buffer/index.js")})},{"../../../../insert-module-globals/node_modules/is-buffer/index.js":9}],20:[function(t,e,i){arguments[4][6][0].apply(i,arguments)},{dup:6}],21:[function(t,e,i){(function(t){!t.version||0===t.version.indexOf("v0.")||0===t.version.indexOf("v1.")&&0!==t.version.indexOf("v1.8.")?e.exports=function(e,i,n,o){if("function"!=typeof e)throw new TypeError('"callback" argument must be a function');var r,s,a=arguments.length;switch(a){case 0:case 1:return t.nextTick(e);case 2:return t.nextTick((function(){e.call(null,i)}));case 3:return t.nextTick((function(){e.call(null,i,n)}));case 4:return t.nextTick((function(){e.call(null,i,n,o)}));default:for(r=new Array(a-1),s=0;s<r.length;)r[s++]=arguments[s];return t.nextTick((function(){e.apply(null,r)}))}}:e.exports=t.nextTick}).call(this,t("_process"))},{_process:10}],22:[function(t,e,i){(function(t){function i(e){try{if(!t.localStorage)return!1}catch(t){return!1}var i=t.localStorage[e];return null!=i&&"true"===String(i).toLowerCase()}e.exports=function(t,e){if(i("noDeprecation"))return t;var n=!1;return function(){if(!n){if(i("throwDeprecation"))throw new Error(e);i("traceDeprecation")?console.trace(e):console.warn(e),n=!0}return t.apply(this,arguments)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],23:[function(t,e,i){e.exports=t("./lib/_stream_passthrough.js")},{"./lib/_stream_passthrough.js":13}],24:[function(t,e,i){(function(n){var o=function(){try{return t("stream")}catch(t){}}();(i=e.exports=t("./lib/_stream_readable.js")).Stream=o||i,i.Readable=i,i.Writable=t("./lib/_stream_writable.js"),i.Duplex=t("./lib/_stream_duplex.js"),i.Transform=t("./lib/_stream_transform.js"),i.PassThrough=t("./lib/_stream_passthrough.js"),!n.browser&&"disable"===n.env.READABLE_STREAM&&o&&(e.exports=o)}).call(this,t("_process"))},{"./lib/_stream_duplex.js":12,"./lib/_stream_passthrough.js":13,"./lib/_stream_readable.js":14,"./lib/_stream_transform.js":15,"./lib/_stream_writable.js":16,_process:10}],25:[function(t,e,i){e.exports=t("./lib/_stream_transform.js")},{"./lib/_stream_transform.js":15}],26:[function(t,e,i){e.exports=t("./lib/_stream_writable.js")},{"./lib/_stream_writable.js":16}],27:[function(t,e,i){e.exports=o;var n=t("events").EventEmitter;function o(){n.call(this)}t("inherits")(o,n),o.Readable=t("readable-stream/readable.js"),o.Writable=t("readable-stream/writable.js"),o.Duplex=t("readable-stream/duplex.js"),o.Transform=t("readable-stream/transform.js"),o.PassThrough=t("readable-stream/passthrough.js"),o.Stream=o,o.prototype.pipe=function(t,e){var i=this;function o(e){t.writable&&!1===t.write(e)&&i.pause&&i.pause()}function r(){i.readable&&i.resume&&i.resume()}i.on("data",o),t.on("drain",r),t._isStdio||e&&!1===e.end||(i.on("end",a),i.on("close",d));var s=!1;function a(){s||(s=!0,t.end())}function d(){s||(s=!0,"function"==typeof t.destroy&&t.destroy())}function l(t){if(u(),0===n.listenerCount(this,"error"))throw t}function u(){i.removeListener("data",o),t.removeListener("drain",r),i.removeListener("end",a),i.removeListener("close",d),i.removeListener("error",l),t.removeListener("error",l),i.removeListener("end",u),i.removeListener("close",u),t.removeListener("close",u)}return i.on("error",l),t.on("error",l),i.on("end",u),i.on("close",u),t.on("close",u),t.emit("pipe",i),t}},{events:7,inherits:8,"readable-stream/duplex.js":11,"readable-stream/passthrough.js":23,"readable-stream/readable.js":24,"readable-stream/transform.js":25,"readable-stream/writable.js":26}],28:[function(t,e,i){var n=t("buffer").Buffer,o=n.isEncoding||function(t){switch(t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};var r=i.StringDecoder=function(t){switch(this.encoding=(t||"utf8").toLowerCase().replace(/[-_]/,""),function(t){if(t&&!o(t))throw new Error("Unknown encoding: "+t)}(t),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=a;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=d;break;default:return void(this.write=s)}this.charBuffer=new n(6),this.charReceived=0,this.charLength=0};function s(t){return t.toString(this.encoding)}function a(t){this.charReceived=t.length%2,this.charLength=this.charReceived?2:0}function d(t){this.charReceived=t.length%3,this.charLength=this.charReceived?3:0}r.prototype.write=function(t){for(var e="";this.charLength;){var i=t.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:t.length;if(t.copy(this.charBuffer,this.charReceived,0,i),this.charReceived+=i,this.charReceived<this.charLength)return"";if(t=t.slice(i,t.length),!((o=(e=this.charBuffer.slice(0,this.charLength).toString(this.encoding)).charCodeAt(e.length-1))>=55296&&o<=56319)){if(this.charReceived=this.charLength=0,0===t.length)return e;break}this.charLength+=this.surrogateSize,e=""}this.detectIncompleteChar(t);var n=t.length;this.charLength&&(t.copy(this.charBuffer,0,t.length-this.charReceived,n),n-=this.charReceived);var o;n=(e+=t.toString(this.encoding,0,n)).length-1;if((o=e.charCodeAt(n))>=55296&&o<=56319){var r=this.surrogateSize;return this.charLength+=r,this.charReceived+=r,this.charBuffer.copy(this.charBuffer,r,0,r),t.copy(this.charBuffer,0,0,r),e.substring(0,n)}return e},r.prototype.detectIncompleteChar=function(t){for(var e=t.length>=3?3:t.length;e>0;e--){var i=t[t.length-e];if(1==e&&i>>5==6){this.charLength=2;break}if(e<=2&&i>>4==14){this.charLength=3;break}if(e<=3&&i>>3==30){this.charLength=4;break}}this.charReceived=e},r.prototype.end=function(t){var e="";if(t&&t.length&&(e=this.write(t)),this.charReceived){var i=this.charReceived,n=this.charBuffer,o=this.encoding;e+=n.slice(0,i).toString(o)}return e}},{buffer:3}],29:[function(t,e,i){function n(t){this._cbs=t||{},this.events=[]}e.exports=n;var o=t("../yp-behaviors").EVENTS;Object.keys(o).forEach((function(t){if(0===o[t])t="on"+t,n.prototype[t]=function(){this.events.push([t]),this._cbs[t]&&this._cbs[t]()};else if(1===o[t])t="on"+t,n.prototype[t]=function(e){this.events.push([t,e]),this._cbs[t]&&this._cbs[t](e)};else{if(2!==o[t])throw Error("wrong number of arguments");t="on"+t,n.prototype[t]=function(e,i){this.events.push([t,e,i]),this._cbs[t]&&this._cbs[t](e,i)}}})),n.prototype.onreset=function(){this.events=[],this._cbs.onreset&&this._cbs.onreset()},n.prototype.restart=function(){this._cbs.onreset&&this._cbs.onreset();for(var t=0,e=this.events.length;t<e;t++)if(this._cbs[this.events[t][0]]){var i=this.events[t].length;1===i?this._cbs[this.events[t][0]]():2===i?this._cbs[this.events[t][0]](this.events[t][1]):this._cbs[this.events[t][0]](this.events[t][1],this.events[t][2])}}},{"./":36}],30:[function(t,e,i){var n=t("./index.js"),o=n.DomHandler,r=n.DomUtils;function s(t,e){this.init(t,e)}function a(t,e){return r.getElementsByTagName(t,e,!0)}function d(t,e){return r.getElementsByTagName(t,e,!0,1)[0]}function l(t,e,i){return r.getText(r.getElementsByTagName(t,e,i,1)).trim()}function u(t,e,i,n,o){var r=l(i,n,o);r&&(t[e]=r)}t("inherits")(s,o),s.prototype.init=o;var c=function(t){return"rss"===t||"feed"===t||"rdf:RDF"===t};s.prototype.onend=function(){var t,e,i={},n=d(c,this.dom);n&&("feed"===n.name?(e=n.children,i.type="atom",u(i,"id","id",e),u(i,"title","title",e),(t=d("link",e))&&(t=t.attribs)&&(t=t.href)&&(i.link=t),u(i,"description","subtitle",e),(t=l("updated",e))&&(i.updated=new Date(t)),u(i,"author","email",e,!0),i.items=a("entry",e).map((function(t){var e,i={};return u(i,"id","id",t=t.children),u(i,"title","title",t),(e=d("link",t))&&(e=e.attribs)&&(e=e.href)&&(i.link=e),(e=l("summary",t)||l("content",t))&&(i.description=e),(e=l("updated",t))&&(i.pubDate=new Date(e)),i}))):(e=d("channel",n.children).children,i.type=n.name.substr(0,3),i.id="",u(i,"title","title",e),u(i,"link","link",e),u(i,"description","description",e),(t=l("lastBuildDate",e))&&(i.updated=new Date(t)),u(i,"author","managingEditor",e,!0),i.items=a("item",n.children).map((function(t){var e,i={};return u(i,"id","guid",t=t.children),u(i,"title","title",t),u(i,"link","link",t),u(i,"description","description",t),(e=l("pubDate",t))&&(i.pubDate=new Date(e)),i})))),this.dom=i,o.prototype._handleCallback.call(this,n?null:Error("couldn't find root of feed"))},e.exports=s},{"./index.js":36,inherits:58}],31:[function(t,e,i){var n=t("./Tokenizer.js"),o={input:!0,option:!0,optgroup:!0,select:!0,button:!0,datalist:!0,textarea:!0},r={tr:{tr:!0,th:!0,td:!0},th:{th:!0},td:{thead:!0,th:!0,td:!0},body:{head:!0,link:!0,script:!0},li:{li:!0},p:{p:!0},h1:{p:!0},h2:{p:!0},h3:{p:!0},h4:{p:!0},h5:{p:!0},h6:{p:!0},select:o,input:o,output:o,button:o,datalist:o,textarea:o,option:{option:!0},optgroup:{optgroup:!0}},s={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,path:!0,circle:!0,ellipse:!0,line:!0,rect:!0,use:!0,stop:!0,polyline:!0,polygon:!0},a=/\s|\//;function d(t,e){this._options=e||{},this._cbs=t||{},this._tagname="",this._attribname="",this._attribvalue="",this._attribs=null,this._stack=[],this.startIndex=0,this.endIndex=null,this._lowerCaseTagNames="lowerCaseTags"in this._options?!!this._options.lowerCaseTags:!this._options.xmlMode,this._lowerCaseAttributeNames="lowerCaseAttributeNames"in this._options?!!this._options.lowerCaseAttributeNames:!this._options.xmlMode,this._options.Tokenizer&&(n=this._options.Tokenizer),this._tokenizer=new n(this._options,this),this._cbs.onparserinit&&this._cbs.onparserinit(this)}t("inherits")(d,t("events").EventEmitter),d.prototype._updatePosition=function(t){null===this.endIndex?this._tokenizer._sectionStart<=t?this.startIndex=0:this.startIndex=this._tokenizer._sectionStart-t:this.startIndex=this.endIndex+1,this.endIndex=this._tokenizer.getAbsoluteIndex()},d.prototype.ontext=function(t){this._updatePosition(1),this.endIndex--,this._cbs.ontext&&this._cbs.ontext(t)},d.prototype.onopentagname=function(t){if(this._lowerCaseTagNames&&(t=t.toLowerCase()),this._tagname=t,!this._options.xmlMode&&t in r)for(var e;(e=this._stack[this._stack.length-1])in r[t];this.onclosetag(e));!this._options.xmlMode&&t in s||this._stack.push(t),this._cbs.onopentagname&&this._cbs.onopentagname(t),this._cbs.onopentag&&(this._attribs={})},d.prototype.onopentagend=function(){this._updatePosition(1),this._attribs&&(this._cbs.onopentag&&this._cbs.onopentag(this._tagname,this._attribs),this._attribs=null),!this._options.xmlMode&&this._cbs.onclosetag&&this._tagname in s&&this._cbs.onclosetag(this._tagname),this._tagname=""},d.prototype.onclosetag=function(t){if(this._updatePosition(1),this._lowerCaseTagNames&&(t=t.toLowerCase()),!this._stack.length||t in s&&!this._options.xmlMode)this._options.xmlMode||"br"!==t&&"p"!==t||(this.onopentagname(t),this._closeCurrentTag());else{var e=this._stack.lastIndexOf(t);if(-1!==e)if(this._cbs.onclosetag)for(e=this._stack.length-e;e--;)this._cbs.onclosetag(this._stack.pop());else this._stack.length=e;else"p"!==t||this._options.xmlMode||(this.onopentagname(t),this._closeCurrentTag())}},d.prototype.onselfclosingtag=function(){this._options.xmlMode||this._options.recognizeSelfClosing?this._closeCurrentTag():this.onopentagend()},d.prototype._closeCurrentTag=function(){var t=this._tagname;this.onopentagend(),this._stack[this._stack.length-1]===t&&(this._cbs.onclosetag&&this._cbs.onclosetag(t),this._stack.pop())},d.prototype.onattribname=function(t){this._lowerCaseAttributeNames&&(t=t.toLowerCase()),this._attribname=t},d.prototype.onattribdata=function(t){this._attribvalue+=t},d.prototype.onattribend=function(){this._cbs.onattribute&&this._cbs.onattribute(this._attribname,this._attribvalue),this._attribs&&!Object.prototype.hasOwnProperty.call(this._attribs,this._attribname)&&(this._attribs[this._attribname]=this._attribvalue),this._attribname="",this._attribvalue=""},d.prototype._getInstructionName=function(t){var e=t.search(a),i=e<0?t:t.substr(0,e);return this._lowerCaseTagNames&&(i=i.toLowerCase()),i},d.prototype.ondeclaration=function(t){if(this._cbs.onprocessinginstruction){var e=this._getInstructionName(t);this._cbs.onprocessinginstruction("!"+e,"!"+t)}},d.prototype.onprocessinginstruction=function(t){if(this._cbs.onprocessinginstruction){var e=this._getInstructionName(t);this._cbs.onprocessinginstruction("?"+e,"?"+t)}},d.prototype.oncomment=function(t){this._updatePosition(4),this._cbs.oncomment&&this._cbs.oncomment(t),this._cbs.oncommentend&&this._cbs.oncommentend()},d.prototype.oncdata=function(t){this._updatePosition(1),this._options.xmlMode||this._options.recognizeCDATA?(this._cbs.oncdatastart&&this._cbs.oncdatastart(),this._cbs.ontext&&this._cbs.ontext(t),this._cbs.oncdataend&&this._cbs.oncdataend()):this.oncomment("[CDATA["+t+"]]")},d.prototype.onerror=function(t){this._cbs.onerror&&this._cbs.onerror(t)},d.prototype.onend=function(){if(this._cbs.onclosetag)for(var t=this._stack.length;t>0;this._cbs.onclosetag(this._stack[--t]));this._cbs.onend&&this._cbs.onend()},d.prototype.reset=function(){this._cbs.onreset&&this._cbs.onreset(),this._tokenizer.reset(),this._tagname="",this._attribname="",this._attribs=null,this._stack=[],this._cbs.onparserinit&&this._cbs.onparserinit(this)},d.prototype.parseComplete=function(t){this.reset(),this.end(t)},d.prototype.write=function(t){this._tokenizer.write(t)},d.prototype.end=function(t){this._tokenizer.end(t)},d.prototype.pause=function(){this._tokenizer.pause()},d.prototype.resume=function(){this._tokenizer.resume()},d.prototype.parseChunk=d.prototype.write,d.prototype.done=d.prototype.end,e.exports=d},{"./Tokenizer.js":34,events:7,inherits:58}],32:[function(t,e,i){function n(t){this._cbs=t||{}}e.exports=n;var o=t("../yp-behaviors").EVENTS;Object.keys(o).forEach((function(t){if(0===o[t])t="on"+t,n.prototype[t]=function(){this._cbs[t]&&this._cbs[t]()};else if(1===o[t])t="on"+t,n.prototype[t]=function(e){this._cbs[t]&&this._cbs[t](e)};else{if(2!==o[t])throw Error("wrong number of arguments");t="on"+t,n.prototype[t]=function(e,i){this._cbs[t]&&this._cbs[t](e,i)}}}))},{"./":36}],33:[function(t,e,i){e.exports=o;var n=t("./WritableStream.js");function o(t){n.call(this,new r(this),t)}function r(t){this.scope=t}t("inherits")(o,n),o.prototype.readable=!0;var s=t("../").EVENTS;Object.keys(s).forEach((function(t){if(0===s[t])r.prototype["on"+t]=function(){this.scope.emit(t)};else if(1===s[t])r.prototype["on"+t]=function(e){this.scope.emit(t,e)};else{if(2!==s[t])throw Error("wrong number of arguments!");r.prototype["on"+t]=function(e,i){this.scope.emit(t,e,i)}}}))},{"../":36,"./WritableStream.js":35,inherits:58}],34:[function(t,e,i){e.exports=yt;var n,o,r=t("entities/lib/decode_codepoint.js"),s=t("entities/maps/entities.json"),a=t("entities/maps/legacy.json"),d=t("entities/maps/xml.json"),l=0,u=l++,c=l++,p=l++,h=l++,f=l++,g=l++,m=l++,_=l++,y=l++,b=l++,v=l++,x=l++,w=l++,S=l++,P=l++,A=l++,I=l++,T=l++,C=l++,E=l++,k=l++,R=l++,L=l++,D=l++,q=l++,j=l++,B=l++,U=l++,M=l++,V=l++,O=l++,N=l++,z=l++,$=l++,F=l++,H=l++,G=l++,W=l++,Q=l++,Y=l++,J=l++,X=l++,K=l++,Z=l++,tt=l++,et=l++,it=l++,nt=l++,ot=l++,rt=l++,st=l++,at=l++,dt=l++,lt=l++,ut=l++,ct=0,pt=ct++,ht=ct++,ft=ct++;function gt(t){return" "===t||"\n"===t||"\t"===t||"\f"===t||"\r"===t}function mt(t,e,i){var n=t.toLowerCase();return t===n?function(t){t===n?this._state=e:(this._state=i,this._index--)}:function(o){o===n||o===t?this._state=e:(this._state=i,this._index--)}}function _t(t,e){var i=t.toLowerCase();return function(n){n===i||n===t?this._state=e:(this._state=p,this._index--)}}function yt(t,e){this._state=u,this._buffer="",this._sectionStart=0,this._index=0,this._bufferOffset=0,this._baseState=u,this._special=pt,this._cbs=e,this._running=!0,this._ended=!1,this._xmlMode=!(!t||!t.xmlMode),this._decodeEntities=!(!t||!t.decodeEntities)}yt.prototype._stateText=function(t){"<"===t?(this._index>this._sectionStart&&this._cbs.ontext(this._getSection()),this._state=c,this._sectionStart=this._index):this._decodeEntities&&this._special===pt&&"&"===t&&(this._index>this._sectionStart&&this._cbs.ontext(this._getSection()),this._baseState=u,this._state=st,this._sectionStart=this._index)},yt.prototype._stateBeforeTagName=function(t){"/"===t?this._state=f:"<"===t?(this._cbs.ontext(this._getSection()),this._sectionStart=this._index):">"===t||this._special!==pt||gt(t)?this._state=u:"!"===t?(this._state=P,this._sectionStart=this._index+1):"?"===t?(this._state=I,this._sectionStart=this._index+1):(this._state=this._xmlMode||"s"!==t&&"S"!==t?p:O,this._sectionStart=this._index)},yt.prototype._stateInTagName=function(t){("/"===t||">"===t||gt(t))&&(this._emitToken("onopentagname"),this._state=_,this._index--)},yt.prototype._stateBeforeCloseingTagName=function(t){gt(t)||(">"===t?this._state=u:this._special!==pt?"s"===t||"S"===t?this._state=N:(this._state=u,this._index--):(this._state=g,this._sectionStart=this._index))},yt.prototype._stateInCloseingTagName=function(t){(">"===t||gt(t))&&(this._emitToken("onclosetag"),this._state=m,this._index--)},yt.prototype._stateAfterCloseingTagName=function(t){">"===t&&(this._state=u,this._sectionStart=this._index+1)},yt.prototype._stateBeforeAttributeName=function(t){">"===t?(this._cbs.onopentagend(),this._state=u,this._sectionStart=this._index+1):"/"===t?this._state=h:gt(t)||(this._state=y,this._sectionStart=this._index)},yt.prototype._stateInSelfClosingTag=function(t){">"===t?(this._cbs.onselfclosingtag(),this._state=u,this._sectionStart=this._index+1):gt(t)||(this._state=_,this._index--)},yt.prototype._stateInAttributeName=function(t){("="===t||"/"===t||">"===t||gt(t))&&(this._cbs.onattribname(this._getSection()),this._sectionStart=-1,this._state=b,this._index--)},yt.prototype._stateAfterAttributeName=function(t){"="===t?this._state=v:"/"===t||">"===t?(this._cbs.onattribend(),this._state=_,this._index--):gt(t)||(this._cbs.onattribend(),this._state=y,this._sectionStart=this._index)},yt.prototype._stateBeforeAttributeValue=function(t){'"'===t?(this._state=x,this._sectionStart=this._index+1):"'"===t?(this._state=w,this._sectionStart=this._index+1):gt(t)||(this._state=S,this._sectionStart=this._index,this._index--)},yt.prototype._stateInAttributeValueDoubleQuotes=function(t){'"'===t?(this._emitToken("onattribdata"),this._cbs.onattribend(),this._state=_):this._decodeEntities&&"&"===t&&(this._emitToken("onattribdata"),this._baseState=this._state,this._state=st,this._sectionStart=this._index)},yt.prototype._stateInAttributeValueSingleQuotes=function(t){"'"===t?(this._emitToken("onattribdata"),this._cbs.onattribend(),this._state=_):this._decodeEntities&&"&"===t&&(this._emitToken("onattribdata"),this._baseState=this._state,this._state=st,this._sectionStart=this._index)},yt.prototype._stateInAttributeValueNoQuotes=function(t){gt(t)||">"===t?(this._emitToken("onattribdata"),this._cbs.onattribend(),this._state=_,this._index--):this._decodeEntities&&"&"===t&&(this._emitToken("onattribdata"),this._baseState=this._state,this._state=st,this._sectionStart=this._index)},yt.prototype._stateBeforeDeclaration=function(t){this._state="["===t?R:"-"===t?T:A},yt.prototype._stateInDeclaration=function(t){">"===t&&(this._cbs.ondeclaration(this._getSection()),this._state=u,this._sectionStart=this._index+1)},yt.prototype._stateInProcessingInstruction=function(t){">"===t&&(this._cbs.onprocessinginstruction(this._getSection()),this._state=u,this._sectionStart=this._index+1)},yt.prototype._stateBeforeComment=function(t){"-"===t?(this._state=C,this._sectionStart=this._index+1):this._state=A},yt.prototype._stateInComment=function(t){"-"===t&&(this._state=E)},yt.prototype._stateAfterComment1=function(t){this._state="-"===t?k:C},yt.prototype._stateAfterComment2=function(t){">"===t?(this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2)),this._state=u,this._sectionStart=this._index+1):"-"!==t&&(this._state=C)},yt.prototype._stateBeforeCdata1=mt("C",L,A),yt.prototype._stateBeforeCdata2=mt("D",D,A),yt.prototype._stateBeforeCdata3=mt("A",q,A),yt.prototype._stateBeforeCdata4=mt("T",j,A),yt.prototype._stateBeforeCdata5=mt("A",B,A),yt.prototype._stateBeforeCdata6=function(t){"["===t?(this._state=U,this._sectionStart=this._index+1):(this._state=A,this._index--)},yt.prototype._stateInCdata=function(t){"]"===t&&(this._state=M)},yt.prototype._stateAfterCdata1=(n="]",o=V,function(t){t===n&&(this._state=o)}),yt.prototype._stateAfterCdata2=function(t){">"===t?(this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2)),this._state=u,this._sectionStart=this._index+1):"]"!==t&&(this._state=U)},yt.prototype._stateBeforeSpecial=function(t){"c"===t||"C"===t?this._state=z:"t"===t||"T"===t?this._state=K:(this._state=p,this._index--)},yt.prototype._stateBeforeSpecialEnd=function(t){this._special!==ht||"c"!==t&&"C"!==t?this._special!==ft||"t"!==t&&"T"!==t?this._state=u:this._state=it:this._state=W},yt.prototype._stateBeforeScript1=_t("R",$),yt.prototype._stateBeforeScript2=_t("I",F),yt.prototype._stateBeforeScript3=_t("P",H),yt.prototype._stateBeforeScript4=_t("T",G),yt.prototype._stateBeforeScript5=function(t){("/"===t||">"===t||gt(t))&&(this._special=ht),this._state=p,this._index--},yt.prototype._stateAfterScript1=mt("R",Q,u),yt.prototype._stateAfterScript2=mt("I",Y,u),yt.prototype._stateAfterScript3=mt("P",J,u),yt.prototype._stateAfterScript4=mt("T",X,u),yt.prototype._stateAfterScript5=function(t){">"===t||gt(t)?(this._special=pt,this._state=g,this._sectionStart=this._index-6,this._index--):this._state=u},yt.prototype._stateBeforeStyle1=_t("Y",Z),yt.prototype._stateBeforeStyle2=_t("L",tt),yt.prototype._stateBeforeStyle3=_t("E",et),yt.prototype._stateBeforeStyle4=function(t){("/"===t||">"===t||gt(t))&&(this._special=ft),this._state=p,this._index--},yt.prototype._stateAfterStyle1=mt("Y",nt,u),yt.prototype._stateAfterStyle2=mt("L",ot,u),yt.prototype._stateAfterStyle3=mt("E",rt,u),yt.prototype._stateAfterStyle4=function(t){">"===t||gt(t)?(this._special=pt,this._state=g,this._sectionStart=this._index-5,this._index--):this._state=u},yt.prototype._stateBeforeEntity=mt("#",at,dt),yt.prototype._stateBeforeNumericEntity=mt("X",ut,lt),yt.prototype._parseNamedEntityStrict=function(){if(this._sectionStart+1<this._index){var t=this._buffer.substring(this._sectionStart+1,this._index),e=this._xmlMode?d:s;e.hasOwnProperty(t)&&(this._emitPartial(e[t]),this._sectionStart=this._index+1)}},yt.prototype._parseLegacyEntity=function(){var t=this._sectionStart+1,e=this._index-t;for(e>6&&(e=6);e>=2;){var i=this._buffer.substr(t,e);if(a.hasOwnProperty(i))return this._emitPartial(a[i]),void(this._sectionStart+=e+1);e--}},yt.prototype._stateInNamedEntity=function(t){";"===t?(this._parseNamedEntityStrict(),this._sectionStart+1<this._index&&!this._xmlMode&&this._parseLegacyEntity(),this._state=this._baseState):(t<"a"||t>"z")&&(t<"A"||t>"Z")&&(t<"0"||t>"9")&&(this._xmlMode||this._sectionStart+1===this._index||(this._baseState!==u?"="!==t&&this._parseNamedEntityStrict():this._parseLegacyEntity()),this._state=this._baseState,this._index--)},yt.prototype._decodeNumericEntity=function(t,e){var i=this._sectionStart+t;if(i!==this._index){var n=this._buffer.substring(i,this._index),o=parseInt(n,e);this._emitPartial(r(o)),this._sectionStart=this._index}else this._sectionStart--;this._state=this._baseState},yt.prototype._stateInNumericEntity=function(t){";"===t?(this._decodeNumericEntity(2,10),this._sectionStart++):(t<"0"||t>"9")&&(this._xmlMode?this._state=this._baseState:this._decodeNumericEntity(2,10),this._index--)},yt.prototype._stateInHexEntity=function(t){";"===t?(this._decodeNumericEntity(3,16),this._sectionStart++):(t<"a"||t>"f")&&(t<"A"||t>"F")&&(t<"0"||t>"9")&&(this._xmlMode?this._state=this._baseState:this._decodeNumericEntity(3,16),this._index--)},yt.prototype._cleanup=function(){this._sectionStart<0?(this._buffer="",this._index=0,this._bufferOffset+=this._index):this._running&&(this._state===u?(this._sectionStart!==this._index&&this._cbs.ontext(this._buffer.substr(this._sectionStart)),this._buffer="",this._bufferOffset+=this._index,this._index=0):this._sectionStart===this._index?(this._buffer="",this._bufferOffset+=this._index,this._index=0):(this._buffer=this._buffer.substr(this._sectionStart),this._index-=this._sectionStart,this._bufferOffset+=this._sectionStart),this._sectionStart=0)},yt.prototype.write=function(t){this._ended&&this._cbs.onerror(Error(".write() after done!")),this._buffer+=t,this._parse()},yt.prototype._parse=function(){for(;this._index<this._buffer.length&&this._running;){var t=this._buffer.charAt(this._index);this._state===u?this._stateText(t):this._state===c?this._stateBeforeTagName(t):this._state===p?this._stateInTagName(t):this._state===f?this._stateBeforeCloseingTagName(t):this._state===g?this._stateInCloseingTagName(t):this._state===m?this._stateAfterCloseingTagName(t):this._state===h?this._stateInSelfClosingTag(t):this._state===_?this._stateBeforeAttributeName(t):this._state===y?this._stateInAttributeName(t):this._state===b?this._stateAfterAttributeName(t):this._state===v?this._stateBeforeAttributeValue(t):this._state===x?this._stateInAttributeValueDoubleQuotes(t):this._state===w?this._stateInAttributeValueSingleQuotes(t):this._state===S?this._stateInAttributeValueNoQuotes(t):this._state===P?this._stateBeforeDeclaration(t):this._state===A?this._stateInDeclaration(t):this._state===I?this._stateInProcessingInstruction(t):this._state===T?this._stateBeforeComment(t):this._state===C?this._stateInComment(t):this._state===E?this._stateAfterComment1(t):this._state===k?this._stateAfterComment2(t):this._state===R?this._stateBeforeCdata1(t):this._state===L?this._stateBeforeCdata2(t):this._state===D?this._stateBeforeCdata3(t):this._state===q?this._stateBeforeCdata4(t):this._state===j?this._stateBeforeCdata5(t):this._state===B?this._stateBeforeCdata6(t):this._state===U?this._stateInCdata(t):this._state===M?this._stateAfterCdata1(t):this._state===V?this._stateAfterCdata2(t):this._state===O?this._stateBeforeSpecial(t):this._state===N?this._stateBeforeSpecialEnd(t):this._state===z?this._stateBeforeScript1(t):this._state===$?this._stateBeforeScript2(t):this._state===F?this._stateBeforeScript3(t):this._state===H?this._stateBeforeScript4(t):this._state===G?this._stateBeforeScript5(t):this._state===W?this._stateAfterScript1(t):this._state===Q?this._stateAfterScript2(t):this._state===Y?this._stateAfterScript3(t):this._state===J?this._stateAfterScript4(t):this._state===X?this._stateAfterScript5(t):this._state===K?this._stateBeforeStyle1(t):this._state===Z?this._stateBeforeStyle2(t):this._state===tt?this._stateBeforeStyle3(t):this._state===et?this._stateBeforeStyle4(t):this._state===it?this._stateAfterStyle1(t):this._state===nt?this._stateAfterStyle2(t):this._state===ot?this._stateAfterStyle3(t):this._state===rt?this._stateAfterStyle4(t):this._state===st?this._stateBeforeEntity(t):this._state===at?this._stateBeforeNumericEntity(t):this._state===dt?this._stateInNamedEntity(t):this._state===lt?this._stateInNumericEntity(t):this._state===ut?this._stateInHexEntity(t):this._cbs.onerror(Error("unknown _state"),this._state),this._index++}this._cleanup()},yt.prototype.pause=function(){this._running=!1},yt.prototype.resume=function(){this._running=!0,this._index<this._buffer.length&&this._parse(),this._ended&&this._finish()},yt.prototype.end=function(t){this._ended&&this._cbs.onerror(Error(".end() after done!")),t&&this.write(t),this._ended=!0,this._running&&this._finish()},yt.prototype._finish=function(){this._sectionStart<this._index&&this._handleTrailingData(),this._cbs.onend()},yt.prototype._handleTrailingData=function(){var t=this._buffer.substr(this._sectionStart);this._state===U||this._state===M||this._state===V?this._cbs.oncdata(t):this._state===C||this._state===E||this._state===k?this._cbs.oncomment(t):this._state!==dt||this._xmlMode?this._state!==lt||this._xmlMode?this._state!==ut||this._xmlMode?this._state!==p&&this._state!==_&&this._state!==v&&this._state!==b&&this._state!==y&&this._state!==w&&this._state!==x&&this._state!==S&&this._state!==g&&this._cbs.ontext(t):(this._decodeNumericEntity(3,16),this._sectionStart<this._index&&(this._state=this._baseState,this._handleTrailingData())):(this._decodeNumericEntity(2,10),this._sectionStart<this._index&&(this._state=this._baseState,this._handleTrailingData())):(this._parseLegacyEntity(),this._sectionStart<this._index&&(this._state=this._baseState,this._handleTrailingData()))},yt.prototype.reset=function(){yt.call(this,{xmlMode:this._xmlMode,decodeEntities:this._decodeEntities},this._cbs)},yt.prototype.getAbsoluteIndex=function(){return this._bufferOffset+this._index},yt.prototype._getSection=function(){return this._buffer.substring(this._sectionStart,this._index)},yt.prototype._emitToken=function(t){this._cbs[t](this._getSection()),this._sectionStart=-1},yt.prototype._emitPartial=function(t){this._baseState!==u?this._cbs.onattribdata(t):this._cbs.ontext(t)}},{"entities/lib/decode_codepoint.js":52,"entities/maps/entities.json":55,"entities/maps/legacy.json":56,"entities/maps/xml.json":57}],35:[function(t,e,i){e.exports=a;var n=t("./Parser.js"),o=t("stream").Writable||t("readable-stream").Writable,r=t("string_decoder").StringDecoder,s=t("buffer").Buffer;function a(t,e){var i=this._parser=new n(t,e),s=this._decoder=new r;o.call(this,{decodeStrings:!1}),this.once("finish",(function(){i.end(s.end())}))}t("inherits")(a,o),o.prototype._write=function(t,e,i){t instanceof s&&(t=this._decoder.write(t)),this._parser.write(t),i()}},{"./Parser.js":31,buffer:3,inherits:58,"readable-stream":2,stream:27,string_decoder:28}],36:[function(t,e,i){var n=t("./Parser.js"),o=t("domhandler");function r(t,i){return delete e.exports[t],e.exports[t]=i,i}e.exports={Parser:n,Tokenizer:t("./Tokenizer.js"),ElementType:t("domelementtype"),DomHandler:o,get FeedHandler(){return r("FeedHandler",t("./FeedHandler.js"))},get Stream(){return r("Stream",t("./Stream.js"))},get WritableStream(){return r("WritableStream",t("./WritableStream.js"))},get ProxyHandler(){return r("ProxyHandler",t("./ProxyHandler.js"))},get DomUtils(){return r("DomUtils",t("domutils"))},get CollectingHandler(){return r("CollectingHandler",t("./CollectingHandler.js"))},DefaultHandler:o,get RssHandler(){return r("RssHandler",this.FeedHandler)},parseDOM:function(t,e){var i=new o(e);return new n(i,e).end(t),i.dom},parseFeed:function(t,i){var o=new e.exports.FeedHandler(i);return new n(o,i).end(t),o.dom},createDomStream:function(t,e,i){var r=new o(t,e,i);return new n(r,e)},EVENTS:{attribute:2,cdatastart:0,cdataend:0,text:1,processinginstruction:2,comment:1,commentend:0,closetag:1,opentag:2,opentagname:1,error:1,end:0}}},{"./CollectingHandler.js":29,"./FeedHandler.js":30,"./Parser.js":31,"./ProxyHandler.js":32,"./Stream.js":33,"./Tokenizer.js":34,"./WritableStream.js":35,domelementtype:37,domhandler:38,domutils:41}],37:[function(t,e,i){e.exports={Text:"text",Directive:"directive",Comment:"comment",Script:"script",Style:"style",Tag:"tag",CDATA:"cdata",Doctype:"doctype",isTag:function(t){return"tag"===t.type||"script"===t.type||"style"===t.type}}},{}],38:[function(t,e,i){var n=t("domelementtype"),o=/\s+/g,r=t("./lib/node"),s=t("./lib/element");function a(t,e,i){"object"==typeof t?(i=e,e=t,t=null):"function"==typeof e&&(i=e,e=d),this._callback=t,this._options=e||d,this._elementCB=i,this.dom=[],this._done=!1,this._tagStack=[],this._parser=this._parser||null}var d={normalizeWhitespace:!1,withStartIndices:!1};a.prototype.onparserinit=function(t){this._parser=t},a.prototype.onreset=function(){a.call(this,this._callback,this._options,this._elementCB)},a.prototype.onend=function(){this._done||(this._done=!0,this._parser=null,this._handleCallback(null))},a.prototype._handleCallback=a.prototype.onerror=function(t){if("function"==typeof this._callback)this._callback(t,this.dom);else if(t)throw t},a.prototype.onclosetag=function(){var t=this._tagStack.pop();this._elementCB&&this._elementCB(t)},a.prototype._addDomElement=function(t){var e=this._tagStack[this._tagStack.length-1],i=e?e.children:this.dom,n=i[i.length-1];t.next=null,this._options.withStartIndices&&(t.startIndex=this._parser.startIndex),this._options.withDomLvl1&&(t.__proto__="tag"===t.type?s:r),n?(t.prev=n,n.next=t):t.prev=null,i.push(t),t.parent=e||null},a.prototype.onopentag=function(t,e){var i={type:"script"===t?n.Script:"style"===t?n.Style:n.Tag,name:t,attribs:e,children:[]};this._addDomElement(i),this._tagStack.push(i)},a.prototype.ontext=function(t){var e,i=this._options.normalizeWhitespace||this._options.ignoreWhitespace;!this._tagStack.length&&this.dom.length&&(e=this.dom[this.dom.length-1]).type===n.Text||this._tagStack.length&&(e=this._tagStack[this._tagStack.length-1])&&(e=e.children[e.children.length-1])&&e.type===n.Text?i?e.data=(e.data+t).replace(o," "):e.data+=t:(i&&(t=t.replace(o," ")),this._addDomElement({data:t,type:n.Text}))},a.prototype.oncomment=function(t){var e=this._tagStack[this._tagStack.length-1];if(e&&e.type===n.Comment)e.data+=t;else{var i={data:t,type:n.Comment};this._addDomElement(i),this._tagStack.push(i)}},a.prototype.oncdatastart=function(){var t={children:[{data:"",type:n.Text}],type:n.CDATA};this._addDomElement(t),this._tagStack.push(t)},a.prototype.oncommentend=a.prototype.oncdataend=function(){this._tagStack.pop()},a.prototype.onprocessinginstruction=function(t,e){this._addDomElement({name:t,data:e,type:n.Directive})},e.exports=a},{"./lib/element":39,"./lib/node":40,domelementtype:37}],39:[function(t,e,i){var n=t("./node"),o=e.exports=Object.create(n),r={tagName:"name"};Object.keys(r).forEach((function(t){var e=r[t];Object.defineProperty(o,t,{get:function(){return this[e]||null},set:function(t){return this[e]=t,t}})}))},{"./node":40}],40:[function(t,e,i){var n=e.exports={get firstChild(){var t=this.children;return t&&t[0]||null},get lastChild(){var t=this.children;return t&&t[t.length-1]||null},get nodeType(){return r[this.type]||r.element}},o={tagName:"name",childNodes:"children",parentNode:"parent",previousSibling:"prev",nextSibling:"next",nodeValue:"data"},r={element:1,text:3,cdata:4,comment:8};Object.keys(o).forEach((function(t){var e=o[t];Object.defineProperty(n,t,{get:function(){return this[e]||null},set:function(t){return this[e]=t,t}})}))},{}],41:[function(t,e,i){var n=e.exports;[t("./lib/stringify"),t("./lib/traversal"),t("./lib/manipulation"),t("./lib/querying"),t("./lib/legacy"),t("./lib/helpers")].forEach((function(t){Object.keys(t).forEach((function(e){n[e]=t[e].bind(n)}))}))},{"./lib/helpers":42,"./lib/legacy":43,"./lib/manipulation":44,"./lib/querying":45,"./lib/stringify":46,"./lib/traversal":47}],42:[function(t,e,i){i.removeSubsets=function(t){for(var e,i,n,o=t.length;--o>-1;){for(e=i=t[o],t[o]=null,n=!0;i;){if(t.indexOf(i)>-1){n=!1,t.splice(o,1);break}i=i.parent}n&&(t[o]=e)}return t};var n=1,o=2,r=4,s=8,a=16,d=i.compareDocumentPosition=function(t,e){var i,d,l,u,c,p,h=[],f=[];if(t===e)return 0;for(i=t;i;)h.unshift(i),i=i.parent;for(i=e;i;)f.unshift(i),i=i.parent;for(p=0;h[p]===f[p];)p++;return 0===p?n:(l=(d=h[p-1]).children,u=h[p],c=f[p],l.indexOf(u)>l.indexOf(c)?d===e?r|a:r:d===t?o|s:o)};i.uniqueSort=function(t){var e,i,n=t.length;for(t=t.slice();--n>-1;)e=t[n],(i=t.indexOf(e))>-1&&i<n&&t.splice(n,1);return t.sort((function(t,e){var i=d(t,e);return i&o?-1:i&r?1:0})),t}},{}],43:[function(t,e,i){var n=t("domelementtype"),o=i.isTag=n.isTag;i.testElement=function(t,e){for(var i in t)if(t.hasOwnProperty(i)){if("tag_name"===i){if(!o(e)||!t.tag_name(e.name))return!1}else if("tag_type"===i){if(!t.tag_type(e.type))return!1}else if("tag_contains"===i){if(o(e)||!t.tag_contains(e.data))return!1}else if(!e.attribs||!t[i](e.attribs[i]))return!1}else;return!0};var r={tag_name:function(t){return"function"==typeof t?function(e){return o(e)&&t(e.name)}:"*"===t?o:function(e){return o(e)&&e.name===t}},tag_type:function(t){return"function"==typeof t?function(e){return t(e.type)}:function(e){return e.type===t}},tag_contains:function(t){return"function"==typeof t?function(e){return!o(e)&&t(e.data)}:function(e){return!o(e)&&e.data===t}}};function s(t,e){return"function"==typeof e?function(i){return i.attribs&&e(i.attribs[t])}:function(i){return i.attribs&&i.attribs[t]===e}}function a(t,e){return function(i){return t(i)||e(i)}}i.getElements=function(t,e,i,n){var o=Object.keys(t).map((function(e){var i=t[e];return e in r?r[e](i):s(e,i)}));return 0===o.length?[]:this.filter(o.reduce(a),e,i,n)},i.getElementById=function(t,e,i){return Array.isArray(e)||(e=[e]),this.findOne(s("id",t),e,!1!==i)},i.getElementsByTagName=function(t,e,i,n){return this.filter(r.tag_name(t),e,i,n)},i.getElementsByTagType=function(t,e,i,n){return this.filter(r.tag_type(t),e,i,n)}},{domelementtype:37}],44:[function(t,e,i){i.removeElement=function(t){if(t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),t.parent){var e=t.parent.children;e.splice(e.lastIndexOf(t),1)}},i.replaceElement=function(t,e){var i=e.prev=t.prev;i&&(i.next=e);var n=e.next=t.next;n&&(n.prev=e);var o=e.parent=t.parent;if(o){var r=o.children;r[r.lastIndexOf(t)]=e}},i.appendChild=function(t,e){if(e.parent=t,1!==t.children.push(e)){var i=t.children[t.children.length-2];i.next=e,e.prev=i,e.next=null}},i.append=function(t,e){var i=t.parent,n=t.next;if(e.next=n,e.prev=t,t.next=e,e.parent=i,n){if(n.prev=e,i){var o=i.children;o.splice(o.lastIndexOf(n),0,e)}}else i&&i.children.push(e)},i.prepend=function(t,e){var i=t.parent;if(i){var n=i.children;n.splice(n.lastIndexOf(t),0,e)}t.prev&&(t.prev.next=e),e.parent=i,e.prev=t.prev,e.next=t,t.prev=e}},{}],45:[function(t,e,i){var n=t("domelementtype").isTag;function o(t,e,i,n){for(var r,s=[],a=0,d=e.length;a<d&&!(t(e[a])&&(s.push(e[a]),--n<=0))&&(r=e[a].children,!(i&&r&&r.length>0&&(r=o(t,r,i,n),s=s.concat(r),(n-=r.length)<=0)));a++);return s}e.exports={filter:function(t,e,i,n){Array.isArray(e)||(e=[e]);"number"==typeof n&&isFinite(n)||(n=1/0);return o(t,e,!1!==i,n)},find:o,findOneChild:function(t,e){for(var i=0,n=e.length;i<n;i++)if(t(e[i]))return e[i];return null},findOne:function t(e,i){for(var o=null,r=0,s=i.length;r<s&&!o;r++)n(i[r])&&(e(i[r])?o=i[r]:i[r].children.length>0&&(o=t(e,i[r].children)));return o},existsOne:function t(e,i){for(var o=0,r=i.length;o<r;o++)if(n(i[o])&&(e(i[o])||i[o].children.length>0&&t(e,i[o].children)))return!0;return!1},findAll:function t(e,i){for(var o=[],r=0,s=i.length;r<s;r++)n(i[r])&&(e(i[r])&&o.push(i[r]),i[r].children.length>0&&(o=o.concat(t(e,i[r].children))));return o}}},{domelementtype:37}],46:[function(t,e,i){var n=t("domelementtype"),o=t("dom-serializer"),r=n.isTag;e.exports={getInnerHTML:function(t,e){return t.children?t.children.map((function(t){return o(t,e)})).join(""):""},getOuterHTML:o,getText:function t(e){return Array.isArray(e)?e.map(t).join(""):r(e)||e.type===n.CDATA?t(e.children):e.type===n.Text?e.data:""}}},{"dom-serializer":48,domelementtype:37}],47:[function(t,e,i){var n=i.getChildren=function(t){return t.children},o=i.getParent=function(t){return t.parent};i.getSiblings=function(t){var e=o(t);return e?n(e):[t]},i.getAttributeValue=function(t,e){return t.attribs&&t.attribs[e]},i.hasAttrib=function(t,e){return!!t.attribs&&hasOwnProperty.call(t.attribs,e)},i.getName=function(t){return t.name}},{}],48:[function(t,e,i){var n=t("domelementtype"),o=t("entities"),r={__proto__:null,allowfullscreen:!0,async:!0,autofocus:!0,autoplay:!0,checked:!0,controls:!0,default:!0,defer:!0,disabled:!0,hidden:!0,ismap:!0,loop:!0,multiple:!0,muted:!0,open:!0,readonly:!0,required:!0,reversed:!0,scoped:!0,seamless:!0,selected:!0,typemustmatch:!0},s={__proto__:null,style:!0,script:!0,xmp:!0,iframe:!0,noembed:!0,noframes:!0,plaintext:!0,noscript:!0};var a={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},d=e.exports=function(t,e){Array.isArray(t)||t.cheerio||(t=[t]),e=e||{};for(var i="",o=0;o<t.length;o++){var r=t[o];"root"===r.type?i+=d(r.children,e):n.isTag(r)?i+=l(r,e):r.type===n.Directive?i+=u(r):r.type===n.Comment?i+=h(r):r.type===n.CDATA?i+=p(r):i+=c(r,e)}return i};function l(t,e){"svg"===t.name&&(e={decodeEntities:e.decodeEntities,xmlMode:!0});var i="<"+t.name,n=function(t,e){if(t){var i,n="";for(var s in t)n&&(n+=" "),n+=!(i=t[s])&&r[s]?s:s+'="'+(e.decodeEntities?o.encodeXML(i):i)+'"';return n}}(t.attribs,e);return n&&(i+=" "+n),!e.xmlMode||t.children&&0!==t.children.length?(i+=">",t.children&&(i+=d(t.children,e)),a[t.name]&&!e.xmlMode||(i+="</"+t.name+">")):i+="/>",i}function u(t){return"<"+t.data+">"}function c(t,e){var i=t.data||"";return!e.decodeEntities||t.parent&&t.parent.name in s||(i=o.encodeXML(i)),i}function p(t){return"<![CDATA["+t.children[0].data+"]]>"}function h(t){return"\x3c!--"+t.data+"--\x3e"}},{domelementtype:49,entities:50}],49:[function(t,e,i){e.exports={Text:"text",Directive:"directive",Comment:"comment",Script:"script",Style:"style",Tag:"tag",CDATA:"cdata",isTag:function(t){return"tag"===t.type||"script"===t.type||"style"===t.type}}},{}],50:[function(t,e,i){var n=t("./lib/encode.js"),o=t("./lib/decode.js");i.decode=function(t,e){return(!e||e<=0?o.XML:o.HTML)(t)},i.decodeStrict=function(t,e){return(!e||e<=0?o.XML:o.HTMLStrict)(t)},i.encode=function(t,e){return(!e||e<=0?n.XML:n.HTML)(t)},i.encodeXML=n.XML,i.encodeHTML4=i.encodeHTML5=i.encodeHTML=n.HTML,i.decodeXML=i.decodeXMLStrict=o.XML,i.decodeHTML4=i.decodeHTML5=i.decodeHTML=o.HTML,i.decodeHTML4Strict=i.decodeHTML5Strict=i.decodeHTMLStrict=o.HTMLStrict,i.escape=n.escape},{"./lib/decode.js":51,"./lib/encode.js":53}],51:[function(t,e,i){var n=t("../maps/entities.json"),o=t("../maps/legacy.json"),r=t("../maps/xml.json"),s=t("./decode_codepoint.js"),a=l(r),d=l(n);function l(t){var e=Object.keys(t).join("|"),i=p(t),n=new RegExp("&(?:"+(e+="|#[xX][\\da-fA-F]+|#\\d+")+");","g");return function(t){return String(t).replace(n,i)}}var u=function(){for(var t=Object.keys(o).sort(c),e=Object.keys(n).sort(c),i=0,r=0;i<e.length;i++)t[r]===e[i]?(e[i]+=";?",r++):e[i]+=";";var s=new RegExp("&(?:"+e.join("|")+"|#[xX][\\da-fA-F]+;?|#\\d+;?)","g"),a=p(n);function d(t){return";"!==t.substr(-1)&&(t+=";"),a(t)}return function(t){return String(t).replace(s,d)}}();function c(t,e){return t<e?1:-1}function p(t){return function(e){return"#"===e.charAt(1)?"X"===e.charAt(2)||"x"===e.charAt(2)?s(parseInt(e.substr(3),16)):s(parseInt(e.substr(2),10)):t[e.slice(1,-1)]}}e.exports={XML:a,HTML:u,HTMLStrict:d}},{"../maps/entities.json":55,"../maps/legacy.json":56,"../maps/xml.json":57,"./decode_codepoint.js":52}],52:[function(t,e,i){var n=t("../maps/decode.json");e.exports=function(t){if(t>=55296&&t<=57343||t>1114111)return"�";t in n&&(t=n[t]);var e="";t>65535&&(t-=65536,e+=String.fromCharCode(t>>>10&1023|55296),t=56320|1023&t);return e+=String.fromCharCode(t)}},{"../maps/decode.json":54}],53:[function(t,e,i){var n=a(t("../maps/xml.json")),o=d(n);i.XML=h(n,o);var r=a(t("../maps/entities.json")),s=d(r);function a(t){return Object.keys(t).sort().reduce((function(e,i){return e[t[i]]="&"+i+";",e}),{})}function d(t){var e=[],i=[];return Object.keys(t).forEach((function(t){1===t.length?e.push("\\"+t):i.push(t)})),i.unshift("["+e.join("")+"]"),new RegExp(i.join("|"),"g")}i.HTML=h(r,s);var l=/[^\0-\x7F]/g,u=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;function c(t){return"&#x"+t.charCodeAt(0).toString(16).toUpperCase()+";"}function p(t){return"&#x"+(1024*(t.charCodeAt(0)-55296)+t.charCodeAt(1)-56320+65536).toString(16).toUpperCase()+";"}function h(t,e){function i(e){return t[e]}return function(t){return t.replace(e,i).replace(u,p).replace(l,c)}}var f=d(n);i.escape=function(t){return t.replace(f,c).replace(u,p).replace(l,c)}},{"../maps/entities.json":55,"../maps/xml.json":57}],54:[function(t,e,i){e.exports={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376}},{}],55:[function(t,e,i){e.exports={Aacute:"Á",aacute:"á",Abreve:"Ă",abreve:"ă",ac:"∾",acd:"∿",acE:"∾̳",Acirc:"Â",acirc:"â",acute:"´",Acy:"А",acy:"а",AElig:"Æ",aelig:"æ",af:"⁡",Afr:"𝔄",afr:"𝔞",Agrave:"À",agrave:"à",alefsym:"ℵ",aleph:"ℵ",Alpha:"Α",alpha:"α",Amacr:"Ā",amacr:"ā",amalg:"⨿",amp:"&",AMP:"&",andand:"⩕",And:"⩓",and:"∧",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angmsd:"∡",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",Aogon:"Ą",aogon:"ą",Aopf:"𝔸",aopf:"𝕒",apacir:"⩯",ap:"≈",apE:"⩰",ape:"≊",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",Aring:"Å",aring:"å",Ascr:"𝒜",ascr:"𝒶",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",barwed:"⌅",Barwed:"⌆",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",Bcy:"Б",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",Because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",Beta:"Β",beta:"β",beth:"ℶ",between:"≬",Bfr:"𝔅",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bNot:"⫭",bnot:"⌐",Bopf:"𝔹",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxdl:"┐",boxdL:"╕",boxDl:"╖",boxDL:"╗",boxdr:"┌",boxdR:"╒",boxDr:"╓",boxDR:"╔",boxh:"─",boxH:"═",boxhd:"┬",boxHd:"╤",boxhD:"╥",boxHD:"╦",boxhu:"┴",boxHu:"╧",boxhU:"╨",boxHU:"╩",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxuL:"╛",boxUl:"╜",boxUL:"╝",boxur:"└",boxuR:"╘",boxUr:"╙",boxUR:"╚",boxv:"│",boxV:"║",boxvh:"┼",boxvH:"╪",boxVh:"╫",boxVH:"╬",boxvl:"┤",boxvL:"╡",boxVl:"╢",boxVL:"╣",boxvr:"├",boxvR:"╞",boxVr:"╟",boxVR:"╠",bprime:"‵",breve:"˘",Breve:"˘",brvbar:"¦",bscr:"𝒷",Bscr:"ℬ",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsolb:"⧅",bsol:"\\",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",Bumpeq:"≎",bumpeq:"≏",Cacute:"Ć",cacute:"ć",capand:"⩄",capbrcup:"⩉",capcap:"⩋",cap:"∩",Cap:"⋒",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",Ccaron:"Č",ccaron:"č",Ccedil:"Ç",ccedil:"ç",Ccirc:"Ĉ",ccirc:"ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",Cdot:"Ċ",cdot:"ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",CenterDot:"·",cfr:"𝔠",Cfr:"ℭ",CHcy:"Ч",chcy:"ч",check:"✓",checkmark:"✓",Chi:"Χ",chi:"χ",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cir:"○",cirE:"⧃",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",colon:":",Colon:"∷",Colone:"⩴",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",conint:"∮",Conint:"∯",ContourIntegral:"∮",copf:"𝕔",Copf:"ℂ",coprod:"∐",Coproduct:"∐",copy:"©",COPY:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",cross:"✗",Cross:"⨯",Cscr:"𝒞",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cupbrcap:"⩈",cupcap:"⩆",CupCap:"≍",cup:"∪",Cup:"⋓",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dagger:"†",Dagger:"‡",daleth:"ℸ",darr:"↓",Darr:"↡",dArr:"⇓",dash:"‐",Dashv:"⫤",dashv:"⊣",dbkarow:"⤏",dblac:"˝",Dcaron:"Ď",dcaron:"ď",Dcy:"Д",dcy:"д",ddagger:"‡",ddarr:"⇊",DD:"ⅅ",dd:"ⅆ",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",Delta:"Δ",delta:"δ",demptyv:"⦱",dfisht:"⥿",Dfr:"𝔇",dfr:"𝔡",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",diamond:"⋄",Diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",DJcy:"Ђ",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",Dopf:"𝔻",dopf:"𝕕",Dot:"¨",dot:"˙",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrowBar:"⤓",downarrow:"↓",DownArrow:"↓",Downarrow:"⇓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVectorBar:"⥖",DownLeftVector:"↽",DownRightTeeVector:"⥟",DownRightVectorBar:"⥗",DownRightVector:"⇁",DownTeeArrow:"↧",DownTee:"⊤",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",Dscr:"𝒟",dscr:"𝒹",DScy:"Ѕ",dscy:"ѕ",dsol:"⧶",Dstrok:"Đ",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",DZcy:"Џ",dzcy:"џ",dzigrarr:"⟿",Eacute:"É",eacute:"é",easter:"⩮",Ecaron:"Ě",ecaron:"ě",Ecirc:"Ê",ecirc:"ê",ecir:"≖",ecolon:"≕",Ecy:"Э",ecy:"э",eDDot:"⩷",Edot:"Ė",edot:"ė",eDot:"≑",ee:"ⅇ",efDot:"≒",Efr:"𝔈",efr:"𝔢",eg:"⪚",Egrave:"È",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",Emacr:"Ē",emacr:"ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp13:" ",emsp14:" ",emsp:" ",ENG:"Ŋ",eng:"ŋ",ensp:" ",Eogon:"Ę",eogon:"ę",Eopf:"𝔼",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",Epsilon:"Ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",escr:"ℯ",Escr:"ℰ",esdot:"≐",Esim:"⩳",esim:"≂",Eta:"Η",eta:"η",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",exponentiale:"ⅇ",ExponentialE:"ⅇ",fallingdotseq:"≒",Fcy:"Ф",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",Ffr:"𝔉",ffr:"𝔣",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",Fopf:"𝔽",fopf:"𝕗",forall:"∀",ForAll:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",Fscr:"ℱ",gacute:"ǵ",Gamma:"Γ",gamma:"γ",Gammad:"Ϝ",gammad:"ϝ",gap:"⪆",Gbreve:"Ğ",gbreve:"ğ",Gcedil:"Ģ",Gcirc:"Ĝ",gcirc:"ĝ",Gcy:"Г",gcy:"г",Gdot:"Ġ",gdot:"ġ",ge:"≥",gE:"≧",gEl:"⪌",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",gescc:"⪩",ges:"⩾",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",Gfr:"𝔊",gfr:"𝔤",gg:"≫",Gg:"⋙",ggg:"⋙",gimel:"ℷ",GJcy:"Ѓ",gjcy:"ѓ",gla:"⪥",gl:"≷",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gnE:"≩",gneq:"⪈",gneqq:"≩",gnsim:"⋧",Gopf:"𝔾",gopf:"𝕘",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gtcc:"⪧",gtcir:"⩺",gt:">",GT:">",Gt:"≫",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",HARDcy:"Ъ",hardcy:"ъ",harrcir:"⥈",harr:"↔",hArr:"⇔",harrw:"↭",Hat:"^",hbar:"ℏ",Hcirc:"Ĥ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",Hfr:"ℌ",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",Hopf:"ℍ",horbar:"―",HorizontalLine:"─",hscr:"𝒽",Hscr:"ℋ",hslash:"ℏ",Hstrok:"Ħ",hstrok:"ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",Iacute:"Í",iacute:"í",ic:"⁣",Icirc:"Î",icirc:"î",Icy:"И",icy:"и",Idot:"İ",IEcy:"Е",iecy:"е",iexcl:"¡",iff:"⇔",ifr:"𝔦",Ifr:"ℑ",Igrave:"Ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",IJlig:"Ĳ",ijlig:"ĳ",Imacr:"Ī",imacr:"ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",Im:"ℑ",imof:"⊷",imped:"Ƶ",Implies:"⇒",incare:"℅",in:"∈",infin:"∞",infintie:"⧝",inodot:"ı",intcal:"⊺",int:"∫",Int:"∬",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",IOcy:"Ё",iocy:"ё",Iogon:"Į",iogon:"į",Iopf:"𝕀",iopf:"𝕚",Iota:"Ι",iota:"ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",Iscr:"ℐ",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",Itilde:"Ĩ",itilde:"ĩ",Iukcy:"І",iukcy:"і",Iuml:"Ï",iuml:"ï",Jcirc:"Ĵ",jcirc:"ĵ",Jcy:"Й",jcy:"й",Jfr:"𝔍",jfr:"𝔧",jmath:"ȷ",Jopf:"𝕁",jopf:"𝕛",Jscr:"𝒥",jscr:"𝒿",Jsercy:"Ј",jsercy:"ј",Jukcy:"Є",jukcy:"є",Kappa:"Κ",kappa:"κ",kappav:"ϰ",Kcedil:"Ķ",kcedil:"ķ",Kcy:"К",kcy:"к",Kfr:"𝔎",kfr:"𝔨",kgreen:"ĸ",KHcy:"Х",khcy:"х",KJcy:"Ќ",kjcy:"ќ",Kopf:"𝕂",kopf:"𝕜",Kscr:"𝒦",kscr:"𝓀",lAarr:"⇚",Lacute:"Ĺ",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",Lambda:"Λ",lambda:"λ",lang:"⟨",Lang:"⟪",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",larrb:"⇤",larrbfs:"⤟",larr:"←",Larr:"↞",lArr:"⇐",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",latail:"⤙",lAtail:"⤛",lat:"⪫",late:"⪭",lates:"⪭︀",lbarr:"⤌",lBarr:"⤎",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",Lcaron:"Ľ",lcaron:"ľ",Lcedil:"Ļ",lcedil:"ļ",lceil:"⌈",lcub:"{",Lcy:"Л",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",lE:"≦",LeftAngleBracket:"⟨",LeftArrowBar:"⇤",leftarrow:"←",LeftArrow:"←",Leftarrow:"⇐",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVectorBar:"⥙",LeftDownVector:"⇃",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",LeftRightArrow:"↔",Leftrightarrow:"⇔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTeeArrow:"↤",LeftTee:"⊣",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangleBar:"⧏",LeftTriangle:"⊲",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVectorBar:"⥘",LeftUpVector:"↿",LeftVectorBar:"⥒",LeftVector:"↼",lEg:"⪋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",lescc:"⪨",les:"⩽",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",Lfr:"𝔏",lfr:"𝔩",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",LJcy:"Љ",ljcy:"љ",llarr:"⇇",ll:"≪",Ll:"⋘",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",Lmidot:"Ŀ",lmidot:"ŀ",lmoustache:"⎰",lmoust:"⎰",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lnE:"≨",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",LongLeftArrow:"⟵",Longleftarrow:"⟸",longleftrightarrow:"⟷",LongLeftRightArrow:"⟷",Longleftrightarrow:"⟺",longmapsto:"⟼",longrightarrow:"⟶",LongRightArrow:"⟶",Longrightarrow:"⟹",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",Lopf:"𝕃",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",Lscr:"ℒ",lsh:"↰",Lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",Lstrok:"Ł",lstrok:"ł",ltcc:"⪦",ltcir:"⩹",lt:"<",LT:"<",Lt:"≪",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",Map:"⤅",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",Mcy:"М",mcy:"м",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",mfr:"𝔪",mho:"℧",micro:"µ",midast:"*",midcir:"⫰",mid:"∣",middot:"·",minusb:"⊟",minus:"−",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",Mopf:"𝕄",mopf:"𝕞",mp:"∓",mscr:"𝓂",Mscr:"ℳ",mstpos:"∾",Mu:"Μ",mu:"μ",multimap:"⊸",mumap:"⊸",nabla:"∇",Nacute:"Ń",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natural:"♮",naturals:"ℕ",natur:"♮",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",Ncaron:"Ň",ncaron:"ň",Ncedil:"Ņ",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",Ncy:"Н",ncy:"н",ndash:"–",nearhk:"⤤",nearr:"↗",neArr:"⇗",nearrow:"↗",ne:"≠",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",Nfr:"𝔑",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",nGt:"≫⃒",ngt:"≯",ngtr:"≯",nGtv:"≫̸",nharr:"↮",nhArr:"⇎",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",NJcy:"Њ",njcy:"њ",nlarr:"↚",nlArr:"⇍",nldr:"‥",nlE:"≦̸",nle:"≰",nleftarrow:"↚",nLeftarrow:"⇍",nleftrightarrow:"↮",nLeftrightarrow:"⇎",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nLt:"≪⃒",nlt:"≮",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",nopf:"𝕟",Nopf:"ℕ",Not:"⫬",not:"¬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangleBar:"⧏̸",NotLeftTriangle:"⋪",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangleBar:"⧐̸",NotRightTriangle:"⋫",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",nparallel:"∦",npar:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",nprec:"⊀",npreceq:"⪯̸",npre:"⪯̸",nrarrc:"⤳̸",nrarr:"↛",nrArr:"⇏",nrarrw:"↝̸",nrightarrow:"↛",nRightarrow:"⇏",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",Nscr:"𝒩",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",Ntilde:"Ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",Nu:"Ν",nu:"ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwarr:"↖",nwArr:"⇖",nwarrow:"↖",nwnear:"⤧",Oacute:"Ó",oacute:"ó",oast:"⊛",Ocirc:"Ô",ocirc:"ô",ocir:"⊚",Ocy:"О",ocy:"о",odash:"⊝",Odblac:"Ő",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",OElig:"Œ",oelig:"œ",ofcir:"⦿",Ofr:"𝔒",ofr:"𝔬",ogon:"˛",Ograve:"Ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",Omacr:"Ō",omacr:"ō",Omega:"Ω",omega:"ω",Omicron:"Ο",omicron:"ο",omid:"⦶",ominus:"⊖",Oopf:"𝕆",oopf:"𝕠",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",orarr:"↻",Or:"⩔",or:"∨",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",Oscr:"𝒪",oscr:"ℴ",Oslash:"Ø",oslash:"ø",osol:"⊘",Otilde:"Õ",otilde:"õ",otimesas:"⨶",Otimes:"⨷",otimes:"⊗",Ouml:"Ö",ouml:"ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",para:"¶",parallel:"∥",par:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",Pcy:"П",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",Pfr:"𝔓",pfr:"𝔭",Phi:"Φ",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",Pi:"Π",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plus:"+",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",popf:"𝕡",Popf:"ℙ",pound:"£",prap:"⪷",Pr:"⪻",pr:"≺",prcue:"≼",precapprox:"⪷",prec:"≺",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",pre:"⪯",prE:"⪳",precsim:"≾",prime:"′",Prime:"″",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportional:"∝",Proportion:"∷",propto:"∝",prsim:"≾",prurel:"⊰",Pscr:"𝒫",pscr:"𝓅",Psi:"Ψ",psi:"ψ",puncsp:" ",Qfr:"𝔔",qfr:"𝔮",qint:"⨌",qopf:"𝕢",Qopf:"ℚ",qprime:"⁗",Qscr:"𝒬",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',QUOT:'"',rAarr:"⇛",race:"∽̱",Racute:"Ŕ",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",Rang:"⟫",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarr:"→",Rarr:"↠",rArr:"⇒",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",Rarrtl:"⤖",rarrtl:"↣",rarrw:"↝",ratail:"⤚",rAtail:"⤜",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rBarr:"⤏",RBarr:"⤐",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",Rcaron:"Ř",rcaron:"ř",Rcedil:"Ŗ",rcedil:"ŗ",rceil:"⌉",rcub:"}",Rcy:"Р",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",Re:"ℜ",rect:"▭",reg:"®",REG:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",Rfr:"ℜ",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",Rho:"Ρ",rho:"ρ",rhov:"ϱ",RightAngleBracket:"⟩",RightArrowBar:"⇥",rightarrow:"→",RightArrow:"→",Rightarrow:"⇒",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVectorBar:"⥕",RightDownVector:"⇂",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTeeArrow:"↦",RightTee:"⊢",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangleBar:"⧐",RightTriangle:"⊳",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVectorBar:"⥔",RightUpVector:"↾",RightVectorBar:"⥓",RightVector:"⇀",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoustache:"⎱",rmoust:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",Ropf:"ℝ",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",rscr:"𝓇",Rscr:"ℛ",rsh:"↱",Rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",Sacute:"Ś",sacute:"ś",sbquo:"‚",scap:"⪸",Scaron:"Š",scaron:"š",Sc:"⪼",sc:"≻",sccue:"≽",sce:"⪰",scE:"⪴",Scedil:"Ş",scedil:"ş",Scirc:"Ŝ",scirc:"ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",Scy:"С",scy:"с",sdotb:"⊡",sdot:"⋅",sdote:"⩦",searhk:"⤥",searr:"↘",seArr:"⇘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",Sfr:"𝔖",sfr:"𝔰",sfrown:"⌢",sharp:"♯",SHCHcy:"Щ",shchcy:"щ",SHcy:"Ш",shcy:"ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",Sigma:"Σ",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",SOFTcy:"Ь",softcy:"ь",solbar:"⌿",solb:"⧄",sol:"/",Sopf:"𝕊",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",square:"□",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squ:"□",squf:"▪",srarr:"→",Sscr:"𝒮",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",Star:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",Sub:"⋐",subdot:"⪽",subE:"⫅",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",Subset:"⋐",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succapprox:"⪸",succ:"≻",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",sum:"∑",Sum:"∑",sung:"♪",sup1:"¹",sup2:"²",sup3:"³",sup:"⊃",Sup:"⋑",supdot:"⪾",supdsub:"⫘",supE:"⫆",supe:"⊇",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",Supset:"⋑",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swarr:"↙",swArr:"⇙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"\t",target:"⌖",Tau:"Τ",tau:"τ",tbrk:"⎴",Tcaron:"Ť",tcaron:"ť",Tcedil:"Ţ",tcedil:"ţ",Tcy:"Т",tcy:"т",tdot:"⃛",telrec:"⌕",Tfr:"𝔗",tfr:"𝔱",there4:"∴",therefore:"∴",Therefore:"∴",Theta:"Θ",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",ThinSpace:" ",thinsp:" ",thkap:"≈",thksim:"∼",THORN:"Þ",thorn:"þ",tilde:"˜",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",timesbar:"⨱",timesb:"⊠",times:"×",timesd:"⨰",tint:"∭",toea:"⤨",topbot:"⌶",topcir:"⫱",top:"⊤",Topf:"𝕋",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",TRADE:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",Tscr:"𝒯",tscr:"𝓉",TScy:"Ц",tscy:"ц",TSHcy:"Ћ",tshcy:"ћ",Tstrok:"Ŧ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",Uacute:"Ú",uacute:"ú",uarr:"↑",Uarr:"↟",uArr:"⇑",Uarrocir:"⥉",Ubrcy:"Ў",ubrcy:"ў",Ubreve:"Ŭ",ubreve:"ŭ",Ucirc:"Û",ucirc:"û",Ucy:"У",ucy:"у",udarr:"⇅",Udblac:"Ű",udblac:"ű",udhar:"⥮",ufisht:"⥾",Ufr:"𝔘",ufr:"𝔲",Ugrave:"Ù",ugrave:"ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",Umacr:"Ū",umacr:"ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",uogon:"ų",Uopf:"𝕌",uopf:"𝕦",UpArrowBar:"⤒",uparrow:"↑",UpArrow:"↑",Uparrow:"⇑",UpArrowDownArrow:"⇅",updownarrow:"↕",UpDownArrow:"↕",Updownarrow:"⇕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",upsi:"υ",Upsi:"ϒ",upsih:"ϒ",Upsilon:"Υ",upsilon:"υ",UpTeeArrow:"↥",UpTee:"⊥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",Uring:"Ů",uring:"ů",urtri:"◹",Uscr:"𝒰",uscr:"𝓊",utdot:"⋰",Utilde:"Ũ",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",Uuml:"Ü",uuml:"ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",vArr:"⇕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vBar:"⫨",Vbar:"⫫",vBarv:"⫩",Vcy:"В",vcy:"в",vdash:"⊢",vDash:"⊨",Vdash:"⊩",VDash:"⊫",Vdashl:"⫦",veebar:"⊻",vee:"∨",Vee:"⋁",veeeq:"≚",vellip:"⋮",verbar:"|",Verbar:"‖",vert:"|",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",Vopf:"𝕍",vopf:"𝕧",vprop:"∝",vrtri:"⊳",Vscr:"𝒱",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",Vvdash:"⊪",vzigzag:"⦚",Wcirc:"Ŵ",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",Wedge:"⋀",wedgeq:"≙",weierp:"℘",Wfr:"𝔚",wfr:"𝔴",Wopf:"𝕎",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",Wscr:"𝒲",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",Xfr:"𝔛",xfr:"𝔵",xharr:"⟷",xhArr:"⟺",Xi:"Ξ",xi:"ξ",xlarr:"⟵",xlArr:"⟸",xmap:"⟼",xnis:"⋻",xodot:"⨀",Xopf:"𝕏",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrarr:"⟶",xrArr:"⟹",Xscr:"𝒳",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",Yacute:"Ý",yacute:"ý",YAcy:"Я",yacy:"я",Ycirc:"Ŷ",ycirc:"ŷ",Ycy:"Ы",ycy:"ы",yen:"¥",Yfr:"𝔜",yfr:"𝔶",YIcy:"Ї",yicy:"ї",Yopf:"𝕐",yopf:"𝕪",Yscr:"𝒴",yscr:"𝓎",YUcy:"Ю",yucy:"ю",yuml:"ÿ",Yuml:"Ÿ",Zacute:"Ź",zacute:"ź",Zcaron:"Ž",zcaron:"ž",Zcy:"З",zcy:"з",Zdot:"Ż",zdot:"ż",zeetrf:"ℨ",ZeroWidthSpace:"​",Zeta:"Ζ",zeta:"ζ",zfr:"𝔷",Zfr:"ℨ",ZHcy:"Ж",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",Zopf:"ℤ",Zscr:"𝒵",zscr:"𝓏",zwj:"‍",zwnj:"‌"}},{}],56:[function(t,e,i){e.exports={Aacute:"Á",aacute:"á",Acirc:"Â",acirc:"â",acute:"´",AElig:"Æ",aelig:"æ",Agrave:"À",agrave:"à",amp:"&",AMP:"&",Aring:"Å",aring:"å",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",brvbar:"¦",Ccedil:"Ç",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",COPY:"©",curren:"¤",deg:"°",divide:"÷",Eacute:"É",eacute:"é",Ecirc:"Ê",ecirc:"ê",Egrave:"È",egrave:"è",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",GT:">",Iacute:"Í",iacute:"í",Icirc:"Î",icirc:"î",iexcl:"¡",Igrave:"Ì",igrave:"ì",iquest:"¿",Iuml:"Ï",iuml:"ï",laquo:"«",lt:"<",LT:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",Ntilde:"Ñ",ntilde:"ñ",Oacute:"Ó",oacute:"ó",Ocirc:"Ô",ocirc:"ô",Ograve:"Ò",ograve:"ò",ordf:"ª",ordm:"º",Oslash:"Ø",oslash:"ø",Otilde:"Õ",otilde:"õ",Ouml:"Ö",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',QUOT:'"',raquo:"»",reg:"®",REG:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",THORN:"Þ",thorn:"þ",times:"×",Uacute:"Ú",uacute:"ú",Ucirc:"Û",ucirc:"û",Ugrave:"Ù",ugrave:"ù",uml:"¨",Uuml:"Ü",uuml:"ü",Yacute:"Ý",yacute:"ý",yen:"¥",yuml:"ÿ"}},{}],57:[function(t,e,i){e.exports={amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}},{}],58:[function(t,e,i){arguments[4][8][0].apply(i,arguments)},{dup:8}],59:[function(t,e,i){e.exports=function(t){return t.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")}},{}],60:[function(t,e,i){e.exports=function(){for(var t={},e=0;e<arguments.length;e++){var i=arguments[e];for(var o in i)n.call(i,o)&&(t[o]=i[o])}return t};var n=Object.prototype.hasOwnProperty},{}]},{},[1])(1)}));class U extends r{static get template(){return i(q||(q=B`
    <style>
      :host {
        display: block;
      }

      .container[more-text] {
        @apply --layout-vertical;
        @apply --layout-center-center;
      }

      .moreText {
        color: var(--accent-color);
        background-color: #FFF;
        margin-top: 6px;
        margin-bottom: 6px;
        position: absolute;
        bottom: 6px;
        left: 466px;
      }

      @media (max-width: 600px) {
        .moreText {
          position: initial;
        }
      }
    </style>
    <div class="container" more-text\$="[[showMoreText]]">
       <!-- add max-width for IE11 -->
      <div hidden\$="[[!finalContent]]" inner-h-t-m-l="[[finalContent]]" style="max-width:100%"></div>
      <div hidden\$="[[finalContent]]" style="max-width:100%">[[truncatedContent]]</div>
    </div>
    <lite-signal on-lite-signal-yp-language="_languageEvent"></lite-signal>
    <lite-signal on-lite-signal-yp-auto-translate="_autoTranslateEvent"></lite-signal>

    <iron-ajax id="getTranslationAjax" on-response="_getTranslationResponse"></iron-ajax>
`))}static get is(){return"yp-magic-text"}static get properties(){return{content:{type:String,observer:"_contentChanged"},truncatedContent:{type:String,value:null},contentId:String,extraId:String,textType:{type:String},contentLanguage:{type:String},processedContent:{type:String,value:null},finalContent:{type:String,value:null},autoTranslate:{type:Boolean,value:!1},language:{type:String,value:null},truncate:{type:Number,value:null},moreText:String,showMoreText:{type:Boolean,computed:"_showMoreText(moreText,content)"},closeDialogText:{type:String},textOnly:{type:Boolean,value:!1},disableTranslation:{type:Boolean,value:!1},simpleFormat:{type:Boolean,value:!1},structuredQuestionsConfig:{type:String,value:null},linkifyCutoff:{type:Number,value:35}}}static get doubleWidthLanguages(){return["zh_TW"]}_showMoreText(t,e){return t&&e&&e.length>500}_openFullScreen(){s(document).querySelector("yp-app").getDialogAsync("magicTextDialog",function(t){t.open(this.content,this.contentId,this.extraId,this.textType,this.contentLanguage,this.closeDialogText,this.structuredQuestionsConfig)}.bind(this))}subClassProcessing(){}_contentChanged(t){t&&""!==t?(this.set("finalContent",null),window.autoTranslate&&this.set("autoTranslate",window.autoTranslate),this.autoTranslate&&this.truncate?this.set("truncatedContent",U.truncate(U.trim(t),this.truncate)):this.set("truncatedContent",t),this._update()):this.set("truncatedContent",null)}_autoTranslateEvent(t,e){this.set("autoTranslate",e),this._update()}_languageEvent(t,e){"language-loaded"===e.type&&(this.set("language",e.language),this._update())}linkifyStr(t){return t}_getIndexKey(){return`${this.textType}-${this.contentId}-${this.language}`}_startTranslationAndFinalize(){let t=this._getIndexKey();if(window.appGlobals.autoTranslateCache[t])this.set("processedContent",window.appGlobals.autoTranslateCache[t]),this._finalize();else{switch(this.$.getTranslationAjax.params={textType:this.textType,contentId:this.contentId,targetLanguage:this.language},this.textType){case"postName":case"postContent":case"postTranscriptContent":this.$.getTranslationAjax.url="/api/posts/"+this.contentId+"/translatedText";break;case"pointContent":this.$.getTranslationAjax.url="/api/points/"+this.contentId+"/translatedText";break;case"domainName":case"domainContent":this.$.getTranslationAjax.url="/api/domains/"+this.contentId+"/translatedText";break;case"communityName":case"communityContent":this.$.getTranslationAjax.url="/api/communities/"+this.contentId+"/translatedText";break;case"groupName":case"groupContent":this.$.getTranslationAjax.url="/api/groups/"+this.contentId+"/translatedText";break;case"categoryName":this.$.getTranslationAjax.url="/api/categories/"+this.contentId+"/translatedText";break;case"statusChangeContent":this.$.getTranslationAjax.url="/api/posts/"+this.extraId+"/"+this.contentId+"/translatedStatusText";break;default:return void console.error("No valid textType for magic text to translate: "+this.textType)}this.contentId?this.$.getTranslationAjax.generateRequest():(console.error("No content id for: "+this.textType),this._finalize())}}_getTranslationResponse(t,e){e.response.content?(this.processedContent=e.response.content,window.appGlobals.autoTranslateCache[this._getIndexKey()]=this.processedContent):console.error("No content for magic text"),this._finalize()}_update(){this.processedContent=this.content,this.processedContent&&(this.autoTranslate&&this.language!==this.contentLanguage&&!this.disableTranslation&&"??"!==this.contentLanguage?this._startTranslationAndFinalize():this._finalize())}_setupStructuredQuestions(){if(this.structuredQuestionsConfig){var t=[],e=this.structuredQuestionsConfig.split(",");if(e&&e.length>1){for(var i=0;i<e.length;i+=2)t.push(e[i]);var n=new RegExp("("+t.join("|")+")","ig");this.processedContent=this.processedContent.replace(n,"<b>$1</b>")}else console.warn("Not questions for structuredQuestionsConfig")}}_finalize(){if(this.textOnly||this._linksAndEmojis(),this.truncate&&this.content&&(this.content.length>this.truncate||this.autoTranslate)){let t=this.truncate;this.autoTranslate&&U.doubleWidthLanguages.indexOf(this.language)>-1&&(t/=2),this.processedContent=U.truncate(U.trim(this.processedContent),t,"...")}this.simpleFormat&&(this.processedContent=this.processedContent.replace(/(\n)/g,"<br>")),this._setupStructuredQuestions(),this.subClassProcessing(),this.processedContent!==this.finalContent&&(window.magicTextIronResizeDebouncer||(window.magicTextIronResizeDebouncer=setTimeout(function(){window.magicTextIronResizeDebouncer=null,this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,composed:!0}))}.bind(this),100))),this.processedContent&&"undefined"!==this.processedContent&&this.content!==this.processedContent?this.set("finalContent",this.processedContent):this.set("finalContent",null)}_linksAndEmojis(){this.processedContent=sanitizeHtml(this.processedContent,{allowedTags:["b","i","em","strong"]}),this.processedContent=this.processedContent.replace(/&amp\;/g,"&"),this.processedContent=this.linkifyStr(this.processedContent,{format:function(t,e){return"url"===e&&t.length>this.linkifyCutoff-1&&(t=t.slice(0,this.linkifyCutoff)+"…"),t}.bind(this),ignoreTags:["b","i","em","strong"]}),this.processedContent=this.processedContent.replace(/&amp\;/g,"&"),this.processedContent=D.parse(this.processedContent).replace(/&amp\;quot\;/g,'"').replace(/class=\"emoji\" /g,'style="height: 1em;width: 1em;margin: 0 .3em 0 .3em;vertical-align: -0.1em;" ')}static truncate(t,e,i,n){if(e=e||255,t.length<=e)return t;if(i)t=t.substring(0,e);else{let i=t.lastIndexOf(" ",e);-1===i&&(i=e),t=t.substring(0,i)}return t+=null!=n?n:"..."}static trim(t){return t.replace(/^\s*|\s*$/g,"")}ready(){window.i18nTranslation&&this.set("language",window.locale),super.ready()}}customElements.define(U.is,U);class M extends U{static get template(){return html(j||(j=B`
    <style>
      :host {
        display: block;
      }

      #dialog {
        background-color: #FFF;
        max-width: 50%;
      }

      @media (max-width: 1100px) {
        #dialog {
          max-width: 80%;
        }
      }

      @media (max-width: 600px) {
        #dialog {
          max-width: 100%;
        }

        paper-dialog {
          padding: 0;
          margin: 0;
        }
      }

      .buttons {
        color: var(--accent-color);
      }
    </style>

    <paper-dialog id="dialog">
      <h2>[[pageTitle]]</h2>
      <paper-dialog-scrollable>
        <div hidden\$="[[!finalContent]]" inner-h-t-m-l="[[finalContent]]"></div>
        <div hidden\$="[[finalContent]]">[[content]]</div>
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button raised="" dialog-dismiss="">[[closeDialogText]]</paper-button>
      </div>
    </paper-dialog>
    <lite-signal on-lite-signal-yp-language="_languageEvent"></lite-signal>
    <lite-signal on-lite-signal-yp-auto-translate="_autoTranslateEvent"></lite-signal>

    <iron-ajax id="getTranslationAjax" on-response="_getTranslationResponse"></iron-ajax>
`))}static get is(){return"yp-magic-text-dialog"}subClassProcessing(){this.processedContent=this.processedContent.replace(/\n/g,"<br />")}open(t,e,i,n,o,r,s){this.contentId=e,this.extraId=i,this.textType=n,this.contentLanguage=o,this.structuredQuestionsConfig=s,this.set("content",t),this.set("closeDialogText",r),this.$.dialog.open()}}customElements.define(M.is,M);const V={removeClass:function(t,e){for(var i="",n=t.className.split(" "),o=0;o<n.length;o++)n[o]!==e&&(i+=n[o]+" ");t.className=i}};let O;n({_template:i(O||(O=(t=>t)`
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
      }

      .action-bar {
        @apply --layout-horizontal;
        position: absolute;
        background-color: #FFF;
      }

      .action-bar[floating] {
        @apply --layout-horizontal;
        position: relative;
        background-color: #FFF;
      }

      .action-bar-small {
        @apply --layout-horizontal;
        margin-top: 8px;
        position: absolute;
        width: 100%;
        bottom: -32px;
        vertical-align: bottom !important;
      }

      .action-text {
        font-size: 18px;
        text-align: left;
        vertical-align: bottom;
        padding-top: 8px;
        margin-top: 4px;
      }

      .action-icon {
      }

      .action-up {
        @apply --layout-horizontal;
        @apply --layout-start-justified;
        color: var(--primary-up-color-lighter, rgba(0,153,0,0.55));
      }

      .action-down {
        @apply --layout-horizontal;
        @apply --layout-end-justified;
        color: var(--primary-down-color-lighter, rgba(153,0,0,0.55));
      }

      .default-buttons-color {
        color: var(--default-endorsement-buttons-color, #656565);
      }

      .default-buttons-up-selected {
        color: var(--accent-color, rgba(0,0,0,1.0));
      }

      .default-buttons-down-selected {
        color: var(--accent-color, rgba(0,0,0,1.0));
      }

      .hearts-up-selected {
        color: var(--primary-hearts-color-up, rgba(168,0,0,0.72));
      }

      .hearts-down-selected {
        color: var(--primary-hearts-color-up, rgba(168,0,0,0.72));
      }

      .action-debate {
        @apply --layout-horizontal;
        @apply --layout-center-justified;
        color: #757575;
      }

      .debate-text {
        padding-top: 10px;
        padding-right: 6px;
        color: #757575;
      }

      .down-text {
        padding-right: 0px;
        padding-top: 10px;
      }

      .up-text {
        padding-top: 10px;
        margin-right: 8px;
      }

      .down-vote-icon {
        margin-right: 0px;
      }

      paper-icon-button.largeButton {
        width: 52px;
        height: 52px;
      }

      paper-icon-button[smaller-icons] {
        height: 48px;
        width: 48px;
      }

      .debate-icon {
        color: #757575;
      }

      .shareIcon {
        margin-left: 16px;
        margin-top: 3px;
        --paper-share-button-icon-color: #656565;
        --paper-share-button-icon-height: 46px;
        --paper-share-button-icon-width: 46px;
        text-align: right;
      }

      .shareIcon[endorsed] {
        --paper-share-button-icon-color: var(--accent-color-400);
      }

      .shareIcon[less-margin] {
        margin-left: 0;
      }

      .up-vote-icon {
        margin-left: 8px;
      }

      @media (max-width: 320px) {
        :host {
          width: 250px;
        }
      }

      .shareButtonContainer {
        position: absolute;
        bottom: 55px;
        right: -32px;
        padding: 0;
        margin: 0;
        margin-bottom: 8px;
      }

      .shareButton {
        padding: 2px;
      }

      .shareShare {
        padding: 0;
        margin: 0;
        background-color: #FFF;
      }

      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .action-debate {
          display: none;
        }
      }

      [hidden] {
        display: none !important;
      }
    </style>
    <lite-signal on-lite-signal-yp-language="_languageEvent"></lite-signal>

    <iron-media-query query="(max-width: 420px)" query-matches="{{small}}"></iron-media-query>

    <yp-ajax id="endorseAjax" method="POST" on-response="_endorseResponse"></yp-ajax>
    <paper-material elevation="[[elevationPlusOne]]" title\$="[[disabledTitle]]" floating\$="[[floating]]" animated="" class="action-bar layout horizontal">
      <div id="actionUp" class="action-up">
        <paper-icon-button id="iconUpButton" smaller-icons\$="[[smallerIcons]]" disabled="[[allDisabled]]" title\$="[[customVoteUpHoverText]]" icon="[[endorseModeIcon(endorsementButtons,'up')]]" class="action-icon up-vote-icon largeButton" on-tap="upVote"></paper-icon-button>
        <div class="action-text up-text" hidden\$="[[post.Group.configuration.hideVoteCount]]">[[formattedUpCount]]</div>
      </div>

      <div class="action-debate" hidden\$="[[hideDebate]]">
        <paper-icon-button disabled="[[allDisabled]]" title\$="[[t('post.debate')]]" icon="chat-bubble-outline" class="action-icon debate-icon largeButton" on-tap="_goToPostIfNotHeader"></paper-icon-button>
        <div class="action-text debate-text">[[formattedPointCount]]</div>
      </div>

      <div class="" hidden\$="[[!hideDebate]]"></div>

      <div id="actionDown" class="action-down" hidden\$="[[post.Group.configuration.hideDownVoteForPost]]">
        <paper-icon-button smaller-icons\$="[[smallerIcons]]" disabled="[[allDisabled]]" title\$="[[customVoteDownHoverText]]" icon="[[endorseModeIcon(endorsementButtons,'down')]]" class="action-icon down-vote-icon largeButton" on-tap="downVote"></paper-icon-button>
        <div class="action-text down-text" hidden\$="[[post.Group.configuration.hideVoteCount]]">[[formattedDownCount]]</div>
      </div>
      <div class="share">
        <paper-share-button hidden on-share-tap="_shareTap" class="shareIcon" less-margin\$="[[post.Group.configuration.hideDownVoteForPost]]" endorsed\$="[[isEndorsed]]" horizontal-align="right" id="shareButton" title\$="[[t('post.shareInfo')]]" facebook="" google="" twitter="" url="[[postUrl]]"></paper-share-button>
      </div>
    </paper-material>

    <lite-signal on-lite-signal-got-endorsements-and-qualities="_updateEndorsementsFromSignal"></lite-signal>
`)),is:"yp-post-actions",behaviors:[T,V,k],properties:{post:{type:Object,observer:"_onPostChanged"},small:{type:Boolean,value:!1},headerMode:{type:Boolean,value:!1},forceSmall:{type:Boolean,value:!1},endorsementButtons:{type:String,value:"hearts"},endorseValue:{type:Number,value:0},isEndorsed:{type:Boolean,value:!1},elevation:{type:Number,value:3},elevationPlusOne:{type:Number,computed:"_elevationPlusOne(elevation)"},allDisabled:{type:Boolean,value:!1},disabledTitle:{type:String,value:null},floating:{type:Boolean,value:!1},votingDisabled:{type:Boolean,value:!1},smallerIcons:{type:Boolean,value:!1},formattedPointCount:{type:String,computed:"_formattedPointCount(post.counter_points)"},formattedDownCount:{type:String,computed:"_formattedDownCount(post.counter_endorsements_down)"},formattedUpCount:{type:String,computed:"_formattedUpCount(post.counter_endorsements_up)"},postUrl:{type:String,computed:"_postUrl(post)"},hideDebate:{type:Boolean,computed:"_hideDebate(small,forceSmall,post)"},customVoteUpHoverText:{type:String,computed:"_customVoteUpHoverText(post)"},customVoteDownHoverText:{type:String,computed:"_customVoteDownHoverText(post)"}},_customVoteUpHoverText:function(t){return t&&t.Group&&t.Group.configuration&&t.Group.configuration.customVoteUpHoverText?t.Group.configuration.customVoteUpHoverText:this.t("post.up_vote")},_customVoteDownHoverText:function(t){return t&&t.Group&&t.Group.configuration&&t.Group.configuration.customVoteDownHoverText?t.Group.configuration.customVoteDownHoverText:this.t("post.down_vote")},_formattedUpCount:function(t){return t?this.formatNumber(t):"0"},_formattedPointCount:function(t){return t?this.formatNumber(t):"0"},_formattedDownCount:function(t){return t?this.formatNumber(t):"0"},_goToPostIfNotHeader:function(){this.headerMode||this.goToPost()},_postUrl:function(t){return t?encodeURIComponent("https://"+window.location.host+"/post/"+t.id):""},_elevationPlusOne:function(t){return t<5?t+1:t},_hideDebate:function(t,e){return t||e||this.post&&this.post.Group&&this.post.Group.configuration&&this.post.Group.configuration.hideDebateIcon},_onPostChanged:function(t,e){this.set("isEndorsed",!1),t&&(this.removeClass(this.$.actionUp,"hearts-up-selected"),this.removeClass(this.$.actionDown,"hearts-down-selected"),this.removeClass(this.$.actionUp,"default-buttons-up-selected"),this.removeClass(this.$.actionDown,"default-buttons-down-selected"),this.set("endorseValue",0),t.Group.configuration&&null!=t.Group.configuration.canVote&&0==t.Group.configuration.canVote?(this.set("votingDisabled",!0),this.set("allDisabled",!0),this.set("disabledTitle",this.t("votingDisabled"))):(this.set("votingDisabled",!1),this.set("allDisabled",!1)),t.Group.configuration&&null!=t.Group.configuration.endorsementButtons?this.set("endorsementButtons",t.Group.configuration.endorsementButtons):this.set("endorsementButtons","hearts"),t.Group.configuration&&(this.set("post.Group.configuration.originalHideVoteCount",t.Group.configuration.hideVoteCount),t.Group.configuration.hideVoteCountUntilVoteCompleted&&this.set("post.Group.configuration.hideVoteCount",!0)),this._updateEndorsements(t))},_updateEndorsementsFromSignal:function(){this.post?this._updateEndorsements(this.post):console.warn("Trying to update post null from signal")},_updateEndorsements:function(t){if(this.set("isEndorsed",!1),window.appUser&&window.appUser.loggedIn()&&window.appUser.user&&window.appUser.user.Endorsements){var e=window.appUser.endorsementPostsIndex[t.id];e&&this._setEndorsement(e.value)}},endorseModeIcon:function(t,e){return"hearts"!=t&&"hats"!=t?this.set("smallerIcons",!0):this.set("smallerIcons",!1),"thumbs"==t&&"up"==e?"thumb-up":"thumbs"==t&&"down"==e?"thumb-down":"hearts"==t&&"up"==e?"favorite-border":"hearts"==t&&"down"==e?"do-not-disturb":"hats"==t&&"up"==e?"keyboard-arrow-up":"hats"==t&&"down"==e?"keyboard-arrow-down":"arrows"==t&&"up"==e?"arrow-upward":"arrows"==t&&"down"==e?"arrow-downward":void 0},_setEndorsement:function(t){this.endorseValue=t,t>0&&this.set("isEndorsed",!0),0!==t&&this.post.Group.configuration&&this.post.Group.configuration.hideVoteCount&&!this.post.Group.configuration.originalHideVoteCount&&this.set("post.Group.configuration.hideVoteCount",!1),"hearts"==this.endorsementButtons?t>0?(this.$.actionUp.className+=" hearts-up-selected",this.removeClass(this.$.actionDown,"hearts-down-selected"),this.$.iconUpButton.icon="favorite"):t<0?(this.$.actionDown.className+=" hearts-down-selected",this.removeClass(this.$.actionUp,"hearts-up-selected"),this.$.iconUpButton.icon="favorite-border"):(this.removeClass(this.$.actionUp,"hearts-up-selected"),this.removeClass(this.$.actionDown,"hearts-down-selected"),this.$.iconUpButton.icon="favorite-border"):t>0?(this.$.actionUp.className+=" default-buttons-up-selected",this.removeClass(this.$.actionDown,"default-buttons-down-selected")):t<0?(this.$.actionDown.className+=" default-buttons-down-selected",this.removeClass(this.$.actionUp,"default-buttons-up-selected")):(this.removeClass(this.$.actionUp,"default-buttons-up-selected"),this.removeClass(this.$.actionDown,"default-buttons-down-selected"))},_enableVoting:function(){this.votingDisabled||this.set("allDisabled",!1)},_endorseResponse:function(t,e){this._enableVoting();var i=e.response.endorsement,n=e.response.oldEndorsementValue;this._setEndorsement(i.value),window.appUser.updateEndorsementForPost(this.post.id,i),n&&(n>0?this.set("post.counter_endorsements_up",this.post.counter_endorsements_up-1):n<0&&this.set("post.counter_endorsements_down",this.post.counter_endorsements_down-1)),i.value>0?this.set("post.counter_endorsements_up",this.post.counter_endorsements_up+1):i.value<0&&this.set("post.counter_endorsements_down",this.post.counter_endorsements_down+1)},generateEndorsementFromLogin:function(t){window.appUser.endorsementPostsIndex[this.post.id]||this.generateEndorsement(t)},generateEndorsement:function(t){!0===window.appUser.loggedIn()?(this.$.endorseAjax.url="/api/posts/"+this.post.id+"/endorse",this.$.endorseAjax.body={post_id:this.post.id,value:t},this.endorseValue===t?this.$.endorseAjax.method="DELETE":this.$.endorseAjax.method="POST",this.$.endorseAjax.generateRequest()):(this._enableVoting(),window.appUser.loginForEndorse(this,{value:t}))},_shareTap:function(t,e){window.appGlobals.activity("postShareOpen",e.brand,this.post?this.post.id:-1)},upVote:function(t){this.set("allDisabled",!0),this.generateEndorsement(1),window.appGlobals.activity("clicked","endorse_up",this.post?this.post.id:-1),this.set("isEndorsed",!0),this.updateStyles(),this._setVoteHidingStatus()},downVote:function(t){this.set("allDisabled",!0),this.generateEndorsement(-1),window.appGlobals.activity("clicked","endorse_down",this.post?this.post.id:-1),this._setVoteHidingStatus()},_setVoteHidingStatus:function(){this.post.Group.configuration&&this.post.Group.configuration.hideVoteCountUntilVoteCompleted&&!this.post.Group.configuration.originalHideVoteCount&&this.set("post.Group.configuration.hideVoteCount",!1)},computeActionClass:function(t){return"action-bar"},ready:function(){this.endorsementButtons&&(this.$.actionDown.className+=" default-buttons-color",this.$.actionUp.className+=" default-buttons-color")}});let N;n({_template:i(N||(N=(t=>t)`
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
      }

      google-streetview-pano {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      google-map {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      .main-image, video {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      .mapCanvas {
        width: 100%;
        height: 100%;
      }

      .category-icon {
        width: 200px;
        height: 200px;
        padding-top: 32px;
      }

      .category-icon[tiny] {
        width: 100px;
        height: 100px;
        padding-top: 24px;
      }

      .category-icon[large] {
        width: 100%;
        height: 100%;
        margin: 0 !important;
        padding: 0 !important;
      }

      @media (max-width: 600px) {
        .category-icon {
          width: 130px;
          height: 130px;
        }

        .category-icon[large] {
          width: 100%;
          height: 100%;
          margin: 0 !important;
          padding: 0 !important;
        }

        .main-image[header-mode] {
          height: 100%;
        }

        video {
          height: 100%;
        }
      }

      .pointer {
        cursor: pointer;
      }

      .pointer[header-mode] {
        cursor: default;
      }

      [hidden] {
        display: none !important;
      }

      .videoCamStatic {
        width: 32px;
        height: 32px;
        color: var(--primary-background-color);
        margin-top: -68px;
        margin-left: 8px;
      }

      .voiceIcon {
        height: 42px;
        width: 42px;
        color: #333;
        margin-top: 96px;
      }

      @media (max-width: 600px) {
        .voiceIcon {
          height: 42px;
          width: 42px;
          color: #333;
          margin-top: 35px;
        }
      }

      audio {
        margin-top: 16px;
        margin-bottom: 8px;
      }

      .playInfo {
        font-style: italic;
      }

      @media (max-width: 960px) {
        .voiceIcon {
          margin-top: 35px;
        }
      }

      @media (max-width: 430px) {
        .voiceIcon {
          margin-top: 28px;
        }
      }

      video {
        background-color: #777;
      }

      #videoPlayer[portrait] {
        width: 100% !important;
        height: 100%;
      }

      .mapCanvas[portrait] {
        background-color: #777;
      }

      #videoPreviewImage[portrait] {
        width: 40%;
        @apply --layout-self-center;
      }

      .videoPreviewContainer {
        width: 100%;
        height: 100%;
      }

      .videoPreviewContainer[portrait] {
        background-color: #777;
      }
    </style>

    <div class="mapCanvas">
      <template is="dom-if" if="[[noneActive]]">
        <iron-image header-mode\$="[[headerMode]]" sizing="cover" hidden\$="[[defaultPostImageEnabled]]" class="main-image pointer" src="https://i.imgur.com/sdsFAoT.png" on-tap="_goToPost"></iron-image>

        <template is="dom-if" if="[[activeDefaultImageUrl]]" restamp="">
          <iron-image header-mode\$="[[headerMode]]" sizing="cover" class="main-image pointer" src="[[activeDefaultImageUrl]]" on-tap="_goToPost"></iron-image>
        </template>
      </template>

      <template is="dom-if" if="[[categoryActive]]">
        <div id="categoryImageId" class="layout horizontal center-center">
          <iron-image header-mode\$="[[headerMode]]" tiny\$="[[tiny]]" on-tap="_goToPost" class="category-icon pointer" title="[[post.Category.name]]" sizing="contain" src\$="[[getCategoryImagePath]]"></iron-image>
        </div>
      </template>

      <template is="dom-if" if="[[categoryLargeActive]]">
        <iron-image header-mode\$="[[headerMode]]" large="" on-tap="_goToPost" class="category-icon pointer" title="[[post.Category.name]]" sizing="cover" src\$="[[getCategoryImagePath]]"></iron-image>
      </template>

      <template is="dom-if" if="[[imageActive]]">
        <iron-image header-mode\$="[[headerMode]]" on-tap="_goToPost" sizing="cover" class="main-image pointer" src="[[postImagePath]]"></iron-image>
      </template>

      <template is="dom-if" if="[[videoActive]]" restamp="">
        <template is="dom-if" if="[[showVideo]]" restamp="">
          <video id="videoPlayer" portrait\$="[[portraitVideo]]" data-id\$="[[postVideoId]]" header-mode\$="[[headerMode]]" controls="" on-tap="_goToPost" preload="meta" class="pointer" src="[[postVideoPath]]" playsinline="" poster="[[postVideoPosterPath]]"></video>
        </template>
        <template is="dom-if" if="[[!showVideo]]">
          <div class="layout vertical center-center videoPreviewContainer" portrait\$="[[portraitVideo]]">
            <iron-image id="videoPreviewImage" portrait\$="[[portraitVideo]]" header-mode\$="[[headerMode]]" on-tap="_goToPost" sizing="cover" class="main-image pointer" src="[[postVideoPosterPath]]"></iron-image>
          </div>
          <iron-icon icon="videocam" class="videoCamStatic"></iron-icon>
        </template>
      </template>

      <template is="dom-if" if="[[audioActive]]" restamp="">
        <template is="dom-if" if="[[showAudio]]">
          <div class="layout vertical center-center">
            <audio id="audioPlayer" data-id\$="[[postAudioId]]" header-mode\$="[[headerMode]]" controls="" preload="meta" class="pointer" src="[[postAudioPath]]" hidden\$="[[!postAudioPath]]" playsinline=""></audio>
          </div>
        </template>
        <div hidden\$="[[showAudio]]" class="layout horizontal center-center pointer" on-tap="_goToPost">
          <iron-icon icon="keyboard-voice" class="voiceIcon"></iron-icon>
        </div>
      </template>

      <template is="dom-if" if="[[!disableMaps]]">

        <template is="dom-if" if="[[streetViewActive]]">
          <iron-image on-tap="_goToPost" class="main-image pointer" sizing="cover" src="https://maps.googleapis.com/maps/api/staticmap?center=[[latitude]],[[longitude]]&amp;zoom=[[zoomLevel]]&amp;size=432x243&amp;maptype=hybrid&amp;markers=color:red%7Clabel:%7C[[latitude]],[[longitude]]&amp;key=[[staticMapsApiKey]]" hidden\$="[[streetViewActivated]]"></iron-image>

          <template is="dom-if" if="[[streetViewActivated]]">
            <google-streetview-pano position\$="[[mapPosition]]" heading="330" api-key="AIzaSyDkF_kak8BVZA5zfp5R4xRnrX8HP3hjiL0" pitch="2" zoom="0.8" disable-default-ui="">
            </google-streetview-pano>
          </template>

        </template>

        <template is="dom-if" if="[[mapActive]]">
          <iron-image on-tap="_goToPost" class="main-image pointer" hidden\$="[[mapActivated]]" sizing="cover" src="https://maps.googleapis.com/maps/api/staticmap?center=[[latitude]],[[longitude]]&amp;size=432x243&amp;zoom=[[zoomLevel]]&amp;maptype=[[mapType]]&amp;markers=color:red%7Clabel:%7C[[latitude]],[[longitude]]&amp;key=[[staticMapsApiKey]]"></iron-image>

          <template is="dom-if" if="[[mapActivated]]">
            <google-map additional-map-options="{&quot;keyboardShortcuts&quot;:false}" id="coverMediaMap" class="map" libraries="places" fit-to-markers="" zoom\$="[[zoomLevel]]" map-type\$="[[mapType]]" api-key="AIzaSyDkF_kak8BVZA5zfp5R4xRnrX8HP3hjiL0">
              <google-map-marker slot="markers" latitude="[[latitude]]" longitude="[[longitude]]"></google-map-marker>
            </google-map>
          </template>
        </template>
      </template>
    </div>
    <lite-signal on-lite-signal-yp-language="_languageEvent"></lite-signal>
    <lite-signal on-lite-signal-yp-pause-media-playback="_pauseMediaPlayback"></lite-signal>
`)),is:"yp-post-cover-media",behaviors:[I,k],properties:{post:{type:Object,notify:!0,observer:"_postChanged"},noneActive:{type:Boolean,value:!1,computed:"_isNoneActive(post)"},categoryActive:{type:Boolean,value:!1,computed:"_isCategoryActive(post)"},categoryLargeActive:{type:Boolean,value:!1,computed:"_isCategoryLargeActive(post)"},imageActive:{type:Boolean,value:!1,computed:"_isImageActive(post)"},videoActive:{type:Boolean,value:!1,computed:"_isVideoActive(post)"},audioActive:{type:Boolean,value:!1,computed:"_isAudioActive(post)"},mapActive:{type:Boolean,value:!1,computed:"_isMapActive(post)"},streetViewActive:{type:Boolean,value:!1,computed:"_isStreetViewActive(post)"},mapType:{type:String,computed:"_mapType(post.location)"},zoomLevel:{type:String,computed:"_zoomLevel(post.location)"},latitude:{type:Number,computed:"_getLatitute(post.location.latitude)"},longitude:{type:Number,computed:"_getLongitude(post.location.longitude)"},mapPosition:{type:Object,computed:"_getMapPosition(post.location)"},getCategoryImagePath:{type:String,computed:"_getCategoryImagePath(post)"},postImagePath:{type:String,computed:"_postImagePath(post)"},postVideoPath:{type:String,computed:"_postVideoPath(post)"},postVideoPosterPath:{type:String,computed:"_postVideoPosterPath(post)"},postVideoId:Number,postAudioPath:{type:String,computed:"_postAudioPath(post)"},postAudioId:Number,headerMode:{type:Boolean,value:!1,observer:"_headerModeChanged"},disableMaps:{type:Boolean,value:!1},mapActivated:{type:Boolean,value:!1},streetViewActivated:{type:Boolean,value:!1},staticMapsApiKey:{type:String,value:"AIzaSyBYy8UvdDD650mz7k1pY0j2hBFQmCPVnxA"},tiny:{type:Boolean,value:!1},uploadedDefaultPostImageId:{type:String,value:null},defaultImageGroupId:{type:String,value:null},defaultPostImageEnabled:{type:Boolean,value:!1},showVideo:{type:Boolean,value:!1},showAudio:{type:Boolean,value:!1},portraitVideo:{type:Boolean,value:!1},activeDefaultImageUrl:{type:String,computed:"_activeDefaultImageUrl(defaultPostImageEnabled, defaultImageGroupId, uploadedDefaultPostImageId)",value:null}},_activeDefaultImageUrl:function(t,e,i){return t&&e&&i?"/api/groups/"+e+"/default_post_image/"+i:null},_goToPost:function(){this.post?this.headerMode?this.goToPost(this.post.id):this.goToPost(this.post.id,null,null,this.post):console.error("No post in post cover media on goToPost")},_headerModeChanged:function(t){!0===t&&this.async((function(){this.set("mapActivated",!0),this.set("streetViewActivated",!0)}))},_getLatitute:function(t){return t||0},_getLongitude:function(t){return t||0},_isNoneActive:function(t){return!!this._withCoverMediaType(t,"none")},_isCategoryActive:function(t){return!!(t&&this._withCoverMediaType(t,"category")&&t.id<=11e3&&this._isDomainWithOldCategories())},_isDomainWithOldCategories:function(){var t=window.location.hostname;return t.indexOf("betrireykjavik.is")>-1||t.indexOf("betraisland.is")>-1||t.indexOf("yrpri.org")>-1},_isCategoryLargeActive:function(t){return!(!t||!this._withCoverMediaType(t,"category")||!(t.id>11e3)&&this._isDomainWithOldCategories())},_isImageActive:function(t){return!!this._withCoverMediaType(t,"image")},_isVideoActive:function(t){return!!this._withCoverMediaType(t,"video")},_isAudioActive:function(t){return!!this._withCoverMediaType(t,"audio")},_isMapActive:function(t){return!!(t&&t.location&&t.location.latitude&&this._withCoverMediaType(t,"map"))},_isStreetViewActive:function(t){return!!(t&&t.location&&t.location.latitude&&this._withCoverMediaType(t,"streetView"))},_postChanged:function(t,e){t&&t.Group&&t.Group.configuration&&t.Group.configuration.uploadedDefaultPostImageId&&""!=t.Group.configuration.uploadedDefaultPostImageId?(this.set("uploadedDefaultPostImageId",t.Group.configuration.uploadedDefaultPostImageId),this.set("defaultImageGroupId",t.Group.id),this.set("defaultPostImageEnabled",!0)):(this.set("defaultPostImageEnabled",!1),this.set("defaultImageGroupId",null),this.set("uploadedDefaultPostImageId",null)),this.headerMode&&this.setupMediaEventListeners(t,e)},_zoomLevel:function(t){return t&&t.map_zoom&&""!=t.map_zoom?t.map_zoom:"10"},_mapType:function(t){return t&&t.mapType&&""!=t.mapType?t.mapType:"roadmap"},_withCoverMediaType:function(t,e){return t?"none"==e?!(t.Category||t.cover_media_type&&"none"!=t.cover_media_type):!("category"!=e||!t.Category||t.cover_media_type&&"none"!=t.cover_media_type)||t&&t.cover_media_type==e:(console.info("No post for "+e),!1)},_getMapPosition:function(t){return t?{lat:t.latitude,lng:t.longitude}:{lat:0,lng:0}},_postImagePath:function(t){return t?this.getImageFormatUrl(t.PostHeaderImages,0):""},_postVideoPath:function(t){if(t&&t.PostVideos){var e=this._getVideoURL(t.PostVideos);return this.set("portraitVideo",this._isPortraitVideo(t.PostVideos)),e?(this.set("postVideoId",t.PostVideos[0].id),e):null}return null},_postAudioPath:function(t){if(t&&t.PostAudios){var e=this._getAudioURL(t.PostAudios);return e?(this.set("postAudioId",t.PostAudios[0].id),e):null}return null},_postVideoPosterPath:function(t){if(t&&t.PostVideos){var e=this._getVideoPosterURL(t.PostVideos);return e||null}return null},_getCategoryImagePath:function(t){return t&&t.Category&&t.Category.CategoryIconImages?this.getImageFormatUrl(t.Category.CategoryIconImages,0):""}});const z={properties:{post:{type:Object,notify:!0},endorseMode:{type:String},image:{type:Boolean,value:!0},elevation:{type:Number,value:1},postName:{type:String,computed:"postNameFunc(post)"},postDescription:{type:String,computed:"postDescriptionFunc(post)"},getCategoryImagePath:{type:String,computed:"_getCategoryImagePath(post)"}},postNameFunc:function(t){return t&&t.name?this.truncate(this.trim(t.name),100):t?t.short_name:""},postDescriptionFunc:function(t){return t&&t.description?this.truncate(this.trim(t.description),500,"..."):t&&t.Points&&t.Points[0]?this.truncate(this.trim(t.Points[0].content),500,"..."):""},_getCategoryImagePath:function(t){return t&&t.Category&&t.Category.CategoryIconImages?this.getImageFormatUrl(t.Category.CategoryIconImages,0):""}};let $;n({_template:i($||($=(t=>t)`
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
      }

      .infoContainer {
        @apply --layout-vertical;
        color: var(--primary-color-more-darker, #252525);
        line-height: var(--description-line-height, 1.3);
        width: 540px;
        padding: 0px;
        padding-bottom: 16px;
        padding-top: 16px;
      }

      .voting {
        @apply --layout-horizontal;
        @apply --layout-center;
        text-align: center;
        padding-left: 16px;
        padding-right: 24px;
      }

      .card-actions {
      }

      yp-post-actions {
        position: absolute;
        right: 8px;
        bottom: 0px;
      }

      .edit {
        color: #eee;
        position: absolute;
        top: 0;
        right: 0;
        padding-right: 0;
        margin-right: 0;
      }

      .post-name {
        margin: 0;
        font-size: var(--extra-large-heading-size, 28px);
        background-color: var(--app-primary-color);
        color: var(--app-text-color, #FFF);
        padding: 16px;
        cursor: pointer;
        font-weight: bold;
        min-height: 33px;
      }

      .category-icon {
        width: 100px;
        height: 100px;
      }

      .category-image-container {
        text-align: right;
        margin-top: -52px;
      }

      .postCardCursor {
        cursor: pointer;
      }

      yp-post-cover-media {
        position: relative;
        width: 420px;
        height: 236px;
      }

      yp-post-cover-media[audio-cover] {
        height: 90px;
      }

      .transcriptContainer {
        width: 420px;
        max-width: 420px;
      }

      .postCard {
        width: 960px;
        background-color: var(--app-post-card-background-color, #fff);
        color: var(--app-post-card-color, #000);
        @apply --layout-horizontal;
        position: relative;
      }

      .description {
        padding-bottom: 2px;
        padding-left: 8px;
        padding-right: 8px;
        color: var(--app-post-card-color, #000);
        margin-bottom: 42px;
      }

      paper-icon-button.moreVert {
        position: absolute;
        top: 0;
        right: 0;
      }

      .userInfo {
        color: #ddd;
        font-size: 17px;
      }

      @media (max-width: 960px) {
        :host {
          max-width: 600px;
        }

        .postCard {
          width: 100%;
          @apply --layout-wrap;
        }

        yp-post-cover-media {
          width: 100% !important;
        }

        .coverContainer {
          width: 100%;
        }

        .transcriptContainer {
          width: 100%;
          max-width: 100%;
        }

        .voting {
          padding-left: 0;
          padding-right: 0;
        }

        .card-actions {
          left: 24px;
          right: 0;
          width: 320px;
        }

        .card-content {
          width: 100% !important;
          padding-bottom: 16px;
        }

        .infoContainer {
          width: 100%;
        }

        .description[no-user-info] {
          padding-bottom: 32px;
        }

        .description {
          margin-bottom: 8px;
        }

        .userInfo {
          font-size: 14px;
        }

        .mediaAndInfoContainer {
          @apply --layout-center-center;
        }
      }

      @media (max-width: 800px) {
        .post-name {
          font-size: 22px;
          min-height: 21px;
        }

        :host {
          max-width: 423px;
          width: 100%;
        }

        yp-post-cover-media {
          height: 230px;
        }

      }

      @media (max-width: 430px) {
        :host {
          width: 100%;
        }

        .postCard {
          width: 100% !important;
          margin: 8px;
          margin-top: 4px;
        }

        yp-post-cover-media {
          height: 225px;
        }

        .card-actions {
          left: 0;
          width: 280px;
        }

        .post-name {
          font-size: 18px;
        }

        .post-name[logged-in] {
          padding-right: 24px;
        }

        .headerTopLevel {
          width: 100%;
        }

        .description {
          padding-bottom: 32px;
        }
      }

      @media (max-width: 375px) {
        yp-post-cover-media[header-mode] {
          height: 207px;
        }
        yp-post-cover-media[audio-cover] {
          height: 80px;
        }
      }

      @media (max-width: 360px) {
        yp-post-cover-media[header-mode] {
          height: 200px;
        }
        yp-post-cover-media[audio-cover] {
          height: 90px;
        }
      }

      @media (max-width: 320px) {
        yp-post-cover-media[header-mode] {
          height: 180px;
        }
        yp-post-cover-media[audio-cover] {
          height: 90px;
        }
      }

      .userWithOrg {
        --ak-user-name-color: #555555;
      }

      [hidden] {
        display: none !important;
      }


      #postTranscriptionEditor {
        padding-left: 8px;
        padding-right: 8px;
      }

      .transcriptError {
        margin-top: 8px;
        margin-bottom: 8px;
        color: #F00;
      }

      paper-spinner {
        margin-top: 8px;
      }

      .checkTranscript {
        margin-top: 8px;
        padding: 8px;
      }

      .transcriptText {
        margin-top: 0;
        padding: 8px;
        color: #444;
        padding-bottom: 0;
        font-style: italic;
        margin-bottom: 8px;
      }

      .transcriptHeader {
        color: #222;
        margin-bottom: 2px;
        font-style: normal;
      }

      .editIcon {
        color: #656565;
      }

      @media (min-width: 960px) {
        yp-post-cover-media[has-transcript][audio-cover] {
          margin-bottom: 16px;
        }
      }
    </style>
    <lite-signal on-lite-signal-yp-language="_languageEvent"></lite-signal>
    <lite-signal on-lite-signal-logged-in="_userLoggedIn"></lite-signal>

    <div class="layout horizontal center-center">
      <paper-material class="postCard" elevation="[[elevation]]" animated="">
        <div class="layout vertical headerTopLevel">
          <div class="post-name layout vertical" on-tap="goToPostIfNotHeader" logged-in\$="[[loggedInUser]]">
            <div>
              <yp-magic-text text-type="postName" content-language="[[post.language]]" content="[[postName]]" content-id="[[post.id]]">
              </yp-magic-text>
            </div>
            <template is="dom-if" if="[[post.Group.configuration.showWhoPostedPosts]]">
              <div class="layout horizontal userInfo">
                <yp-user-with-organization class="userWithOrg" hide-image="" title-date="[[post.user.name]]" user\$="[[post.User]]"></yp-user-with-organization>
              </div>
            </template>
          </div>
          <div class="layout horizontal wrap mediaAndInfoContainer">
            <div class="layout vertical center-center self-start coverContainer">
              <yp-post-cover-media show-video="" show-audio="" has-transcript\$="[[post.public_data.transcript.text]]" audio-cover\$="[[isAudioCover]]" header-mode\$="[[headerMode]]" post="[[post]]"></yp-post-cover-media>
              <div class="transcriptContainer">
                <template is="dom-if" if="[[checkingTranscript]]">
                  <div class="layout vertical center-center checkTranscript">
                    <div>[[t('checkingForTranscript')]]</div>
                    <paper-spinner active=""></paper-spinner>
                  </div>
                </template>
                <div class="transcriptError layout horizontal center-center" hidden\$="[[!checkTranscriptError]]">
                  [[t('checkTranscriptError')]]
                </div>
                <template is="dom-if" if="[[post.public_data.transcript.text]]">
                  <div class="transcriptText layout vertical center-center">
                    <div class="transcriptHeader" hidden\$="[[post.public_data.transcript.noMachineTranslation]]">[[t('automaticTranscript')]]
                      <span hidden\$="[[!post.public_data.transcript.userEdited]]">
                        ([[t('edited')]])
                      </span>
                    </div>
                    <div id="postContentTranscript" hidden\$="[[isEditing]]">
                      <yp-magic-text text-type="postTranscriptContent" content-language="[[post.public_data.transcript.language]]" content="[[post.public_data.transcript.text]]" content-id="[[post.id]]">
                      </yp-magic-text>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="layout vertical">
              <div class="infoContainer">
                <yp-magic-text id="description" simple-format text-type="postContent" content-language="[[post.language]]" content="[[post.description]]" no-user-info\$="[[!post.Group.configuration.showWhoPostedPosts]]" structured-questions-config="[[post.Group.configuration.structuredQuestions]]" content-id="[[post.id]]" class="description" truncate="500" more-text="{{t('readMore')}}" close-dialog-text="[[t('close')]]">
                </yp-magic-text>
              </div>
              <div class="card-actions" hidden>
                <yp-post-actions hidden\$="[[hideActions]]" floating="" header-mode="[[headerMode]]" elevation="-1" endorse-mode="[[endorseMode]]" class="voting" post="[[post]]"></yp-post-actions>
              </div>
            </div>
          </div>
        </div>
      </paper-material>
    </div>
    <lite-signal on-lite-signal-got-admin-rights="_gotAdminRights"></lite-signal>
`)),is:"yp-post-header",behaviors:[z,C,I,k],properties:{selectedMenuItem:{type:String},headerMode:{type:Boolean,value:!1},elevation:{type:Number,value:2},post:{type:Object,observer:"_postChanged"},hasPostAccess:{type:Boolean,value:!1,notify:!0,computed:"_hasPostAccess(post, gotAdminRights)"},isEditing:{type:Boolean,value:!1,observer:"_isEditingChanged"},editText:String,checkingTranscript:{type:Boolean,value:!1},checkTranscriptError:{type:Boolean,value:!1},isAudioCover:{type:Boolean,value:!1},hideActions:{type:Boolean,value:!1}},_isEditingChanged:function(t){this._updateEmojiBindings(t),this.async((function(){this.fire("iron-resize")}))},_updateEmojiBindings:function(t){t&&this.async(function(){var t=this.$$("#postTranscriptionEditor"),e=this.$$("#postTranscriptEmojiSelector");t&&e?e.inputTarget=t:console.error("Wide: Can't bind post edit emojis :(")}.bind(this),500)},_cancelEdit:function(){this.set("isEditing",!1)},_saveEdit:function(){this.$$("#editPostTranscriptAjax").url="/api/posts/"+this.post.id+"/editTranscript",this.$$("#editPostTranscriptAjax").body={content:this.editText},this.$$("#editPostTranscriptAjax").generateRequest()},_editPostTranscriptResponse:function(t,e){this.set("post.public_data.transcript.text",this.editText),this.set("post.public_data.transcript.userEdited",!0),this.set("isEditing",!1)},_editPostTranscript:function(){this.hasPostAccess&&(this.set("editText",this.post.public_data.transcript.text),this.set("isEditing",!0))},_transcriptStatusResponse:function(t,e){e.response&&e.response.text?(this.set("post.public_data.transcript.text",e.response.text),this.hasPostAccess&&(this.set("editText",e.response.text),this.set("isEditing",!0)),this.set("checkingTranscript",!1),this.async((function(){this.fire("iron-resize")}))):e.response&&e.response.inProgress?this.async((function(){this.$$("#checkTranscriptStatusAjax").generateRequest()}),2e3):e.response&&e.response.error?(this.set("checkingTranscript",!1),this.set("checkTranscriptError",!0)):this.set("checkingTranscript",!1)},_hasPostAccess:function(t,e){return!(!t||!e)&&null!=this.checkPostAccess(t)},goToPostIfNotHeader:function(){this.headerMode||this.goToPost()},_postChanged:function(t){this.set("checkingTranscript",!1),this.set("checkTranscriptError",!1),t&&t.description&&(this.async((function(){var e=this.$$("#description");e?t.data&&"lawIssue"===t.data.dataType&&t.data.issueStatus&&(e.content+=" - "+t.data.issueStatus):console.error("Can't find description element")})),this.hasPostAccess&&!0===window.appGlobals.hasTranscriptSupport&&t.public_data&&t.public_data.transcript&&t.public_data.transcript.inProgress&&("audio"===t.cover_media_type?(this.$$("#checkTranscriptStatusAjax").url="/api/posts/"+t.id+"/audioTranscriptStatus",this.$$("#checkTranscriptStatusAjax").generateRequest(),this.set("checkingTranscript",!0)):"video"===t.cover_media_type&&(this.$$("#checkTranscriptStatusAjax").url="/api/posts/"+t.id+"/videoTranscriptStatus",this.$$("#checkTranscriptStatusAjax").generateRequest(),this.set("checkingTranscript",!0)))),t&&("audio"===t.cover_media_type?this.set("isAudioCover",!0):this.set("isAudioCover",!1))},updateDescriptionIfEmpty:function(t){!this.post||this.post.description&&""!=this.post.description||this.set("post.description",t)},_refresh:function(){s(document).querySelector("yp-app").getDialogAsync("postEdit",function(t){t.selected=0,this.fire("refresh")}.bind(this))},_menuSelection:function(t,e){"editMenuItem"==e.item.id?this._openEdit():"deleteMenuItem"==e.item.id?this._openDelete():"statusChangeMenuItem"==e.item.id?this._openPostStatusChange():"moveMenuItem"==e.item.id?this._openMovePost():"anonymizeMenuItem"==e.item.id?this._openAnonymizeContent():"deleteContentMenuItem"==e.item.id?this._openDeleteContent():"reportMenuItem"==e.item.id&&this._openReport(),this.$$("paper-listbox").select(null)},_openMovePost:function(){s(document).querySelector("yp-app").getDialogAsync("postMove",function(t){t.setupAndOpen(this.post,this._refresh.bind(this))}.bind(this))},_openPostStatusChange:function(){s(document).querySelector("yp-app").getDialogAsync("postStatusChangeEdit",function(t){t.setup(this.post,null,this._refresh.bind(this)),t.open("new",{postId:this.post.id,statusChange:!0})}.bind(this))},_openEdit:function(){window.appGlobals.activity("open","post.edit"),s(document).querySelector("yp-app").getDialogAsync("postEdit",function(t){t.setup(this.post,!1,this._refresh.bind(this),this.post.Group),t.open("edit",{postId:this.post.id})}.bind(this))},_openReport:function(){window.appGlobals.activity("open","post.report"),s(document).querySelector("yp-app").getDialogAsync("apiActionDialog",function(t){t.setup("/api/posts/"+this.post.id+"/report",this.t("reportConfirmation"),this._onReport.bind(this),this.t("post.report"),"PUT"),t.open()}.bind(this))},_openDelete:function(){window.appGlobals.activity("open","post.delete"),s(document).querySelector("yp-app").getDialogAsync("apiActionDialog",function(t){t.setup("/api/posts/"+this.post.id,this.t("post.deleteConfirmation"),this._onDeleted.bind(this)),t.open()}.bind(this))},_openDeleteContent:function(){window.appGlobals.activity("open","postDeleteContent"),s(document).querySelector("yp-app").getDialogAsync("apiActionDialog",function(t){t.setup("/api/posts/"+this.post.id+"/delete_content",this.t("postDeleteContentConfirmation")),t.open()}.bind(this))},_openAnonymizeContent:function(){window.appGlobals.activity("open","postAnonymizeContent"),s(document).querySelector("yp-app").getDialogAsync("apiActionDialog",function(t){t.setup("/api/posts/"+this.post.id+"/anonymize_content",this.t("postAnonymizeContentConfirmation")),t.open()}.bind(this))},_onReport:function(){window.appGlobals.notifyUserViaToast(this.t("post.report")+": "+this.post.name)},_onDeleted:function(){this.dispatchEvent(new CustomEvent("yp-refresh-group",{bubbles:!0,composed:!0})),this.redirectTo("/group/"+this.post.group_id)}});let F;const H=i(F||(F=(t=>t)`
<style>
  :host {
    display: inline-block;
    line-height: 0;
    white-space: nowrap;
    cursor: pointer;
    @apply --paper-font-common-base;
    --calculated-paper-radio-button-size: var(--paper-radio-button-size, 16px);
    /* -1px is a sentinel for the default and is replace in \`attached\`. */
    --calculated-paper-radio-button-ink-size: var(--paper-radio-button-ink-size, -1px);
  }

  :host(:focus) {
    outline: none;
  }

  #radioContainer {
    @apply --layout-inline;
    @apply --layout-center-center;
    position: relative;
    width: var(--calculated-paper-radio-button-size);
    height: var(--calculated-paper-radio-button-size);
    vertical-align: middle;

    @apply --paper-radio-button-radio-container;
  }

  #ink {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    width: var(--calculated-paper-radio-button-ink-size);
    height: var(--calculated-paper-radio-button-ink-size);
    color: var(--paper-radio-button-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #ink[checked] {
    color: var(--paper-radio-button-checked-ink-color, var(--primary-color));
  }

  #offRadio, #onRadio {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  #offRadio {
    border: 2px solid var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    background-color: var(--paper-radio-button-unchecked-background-color, transparent);
    transition: border-color 0.28s;
  }

  #onRadio {
    background-color: var(--paper-radio-button-checked-color, var(--primary-color));
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: -webkit-transform ease 0.28s;
    transition: transform ease 0.28s;
    will-change: transform;
  }

  :host([checked]) #offRadio {
    border-color: var(--paper-radio-button-checked-color, var(--primary-color));
  }

  :host([checked]) #onRadio {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }

  #radioLabel {
    line-height: normal;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: var(--paper-radio-button-label-spacing, 10px);
    white-space: normal;
    color: var(--paper-radio-button-label-color, var(--primary-text-color));

    @apply --paper-radio-button-label;
  }

  :host([checked]) #radioLabel {
    @apply --paper-radio-button-label-checked;
  }

  #radioLabel:dir(rtl) {
    margin-left: 0;
    margin-right: var(--paper-radio-button-label-spacing, 10px);
  }

  #radioLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #offRadio {
    border-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled][checked]) #onRadio {
    background-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #radioLabel {
    /* slightly darker than the button, so that it's readable */
    opacity: 0.65;
  }
</style>

<div id="radioContainer">
  <div id="offRadio"></div>
  <div id="onRadio"></div>
</div>

<div id="radioLabel"><slot></slot></div>`));H.setAttribute("strip-whitespace",""),n({_template:H,is:"paper-radio-button",behaviors:[w],hostAttributes:{role:"radio","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},ready:function(){this._rippleContainer=this.$.radioContainer},attached:function(){a(this,(function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-radio-button-ink-size").trim()){var t=parseFloat(this.getComputedStyleValue("--calculated-paper-radio-button-size").trim()),e=Math.floor(3*t);e%2!=t%2&&e++,this.updateStyles({"--paper-radio-button-ink-size":e+"px"})}}))}});let G;n({_template:i(G||(G=(t=>t)`
    <style>
      :host {
        display: inline-block;
      }

      :host ::slotted(*) {
        padding: var(--paper-radio-group-item-padding, 12px);
      }
    </style>

    <slot></slot>
`)),is:"paper-radio-group",behaviors:[d],hostAttributes:{role:"radiogroup"},properties:{attrForSelected:{type:String,value:"name"},selectedAttribute:{type:String,value:"checked"},selectable:{type:String,value:"paper-radio-button"},allowEmptySelection:{type:Boolean,value:!1}},select:function(t){var e=this._valueToItem(t);if(!e||!e.hasAttribute("disabled")){if(this.selected){var i=this._valueToItem(this.selected);if(this.selected==t){if(!this.allowEmptySelection)return void(i&&(i.checked=!0));t=""}i&&(i.checked=!1)}l.select.apply(this,[t]),this.fire("paper-radio-group-changed")}},_activateFocusedItem:function(){this._itemActivate(this._valueForItem(this.focusedItem),this.focusedItem)},_onUpKey:function(t){this._focusPrevious(),t.preventDefault(),this._activateFocusedItem()},_onDownKey:function(t){this._focusNext(),t.preventDefault(),this._activateFocusedItem()},_onLeftKey:function(t){u._onLeftKey.apply(this,arguments),this._activateFocusedItem()},_onRightKey:function(t){u._onRightKey.apply(this,arguments),this._activateFocusedItem()}});let W;var Q=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),Y=Q&&Q[1]>=8;n({_template:i(W||(W=(t=>t)`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`)),is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[S,c,p,h],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _itemsParent(){return s(s(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var t=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,t-this._physicalCount)},set _virtualStart(t){t=this._clamp(t,0,this._maxVirtualStart),this.grid&&(t-=t%this._itemsPerRow),this._virtualStartVal=t},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(t){(t%=this._physicalCount)<0&&(t=this._physicalCount+t),this.grid&&(t-=t%this._itemsPerRow),this._physicalStartVal=t},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(t){this._physicalCountVal=t},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var t=this._firstVisibleIndexVal;if(null==t){var e=this._physicalTop+this._scrollOffset;t=this._iterateItems((function(t,i){return(e+=this._getPhysicalSizeIncrement(t))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=t}return t},get lastVisibleIndex(){var t=this._lastVisibleIndexVal;if(null==t){if(this.grid)t=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var e=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,n){e<this._scrollBottom&&(t=n),e+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=t}return t},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,f),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(t){this.style.webkitOverflowScrolling=t===this?"touch":"",this.style.overflowY=t===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,f)},updateViewportBoundaries:function(){var t=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=Boolean("rtl"===t.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var t=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),e=t-this._scrollPosition,i=e>=0;if(this._scrollPosition=t,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(e)>this._physicalSize&&this._physicalSize>0){e-=this._scrollOffset;var n=Math.round(e/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+n,this._physicalStart=this._physicalStart+n,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var o=this._getReusables(i);i?(this._physicalTop=o.physicalTop,this._virtualStart=this._virtualStart+o.indexes.length,this._physicalStart=this._physicalStart+o.indexes.length):(this._virtualStart=this._virtualStart-o.indexes.length,this._physicalStart=this._physicalStart-o.indexes.length),this._update(o.indexes,i?null:o.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),g)}},_getReusables:function(t){var e,i,n,o=[],r=this._hiddenContentSize*this._ratio,s=this._virtualStart,a=this._virtualEnd,d=this._physicalCount,l=this._physicalTop+this._scrollOffset,u=this._physicalBottom+this._scrollOffset,c=this._scrollPosition,p=this._scrollBottom;for(t?(e=this._physicalStart,i=c-l):(e=this._physicalEnd,i=u-p);i-=n=this._getPhysicalSizeIncrement(e),!(o.length>=d||i<=r);)if(t){if(a+o.length+1>=this._virtualCount)break;if(l+n>=c-this._scrollOffset)break;o.push(e),l+=n,e=(e+1)%d}else{if(s-o.length<=0)break;if(l+this._physicalSize-n<=p)break;o.push(e),l-=n,e=0===e?d-1:e-1}return{indexes:o,physicalTop:l-this._scrollOffset}},_update:function(t,e){if(!(t&&0===t.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(t),this._updateMetrics(t),e)for(;e.length;){var i=e.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(t){var e,i;this._ensureTemplatized();var n=new Array(t);for(e=0;e<t;e++)i=this.stamp(null),n[e]=i.root.querySelector("*"),this._itemsParent.appendChild(i.root);return n},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(t){var e=this._clamp(this._physicalCount+t,3,this._virtualCount-this._virtualStart);if(e=this._convertIndexToCompleteRow(e),this.grid){var i=e%this._itemsPerRow;i&&e-i<=this._physicalCount&&(e+=this._itemsPerRow),e-=i}var n=e-this._physicalCount,o=Math.round(.5*this._physicalCount);if(!(n<0)){if(n>0){var r=window.performance.now();[].push.apply(this._physicalItems,this._createPool(n));for(var s=0;s<n;s++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+n,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+n),this._update(),this._templateCost=(window.performance.now()-r)/n,o=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===o||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,o)),m):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,o),g))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var t=this._getReusables(!0);this._physicalTop=t.physicalTop,this._virtualStart=this._virtualStart+t.indexes.length,this._physicalStart=this._physicalStart+t.indexes.length,this._update(t.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var t={__key__:!0};t[this.as]=!0,t[this.indexAs]=!0,t[this.selectedAs]=!0,t.tabIndex=!0,this._instanceProps=t,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(t,e){void 0!==e&&(this.notifyResize(),_(),t&&this._updateGridMetrics())},_itemsChanged:function(t){if("items"===t.path)this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,f);else if("items.splices"===t.path){if(this._adjustVirtualIndex(t.value.indexSplices),this._virtualCount=this.items?this.items.length:0,t.value.indexSplices.some((function(t){return t.addedCount>0||t.removed.length>0}))){var e=this._getActiveElement();this.contains(e)&&e.blur()}var i=t.value.indexSplices.some((function(t){return t.index+t.addedCount>=this._virtualStart&&t.index<=this._virtualEnd}),this);this._isClientFull()&&!i||this._debounce("_render",this._render,f)}else"items.length"!==t.path&&this._forwardItemPath(t.path,t.value)},_forwardItemPath:function(t,e){var i,n,o,r=(t=t.slice(6)).indexOf(".");-1===r&&(r=t.length);var s=this.modelForElement(this._offscreenFocusedItem),a=parseInt(t.substring(0,r),10);(i=this._isIndexRendered(a))?(n=this._getPhysicalIndex(a),o=this.modelForElement(this._physicalItems[n])):s&&(o=s),o&&o[this.indexAs]===a&&(t=t.substring(r+1),t=this.as+(t?"."+t:""),o._setPendingPropertyOrPath(t,e,!1,!0),o._flushProperties&&o._flushProperties(),i&&(this._updateMetrics([n]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(t){t.forEach((function(t){if(t.removed.forEach(this._removeItem,this),t.index<this._virtualStart){var e=Math.max(t.addedCount-t.removed.length,t.index-this._virtualStart);this._virtualStart=this._virtualStart+e,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+e)}}),this)},_removeItem:function(t){this.$.selector.deselect(t),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===t&&this._removeFocusedItem()},_iterateItems:function(t,e){var i,n,o,r;if(2===arguments.length&&e){for(r=0;r<e.length;r++)if(i=e[r],n=this._computeVidx(i),null!=(o=t.call(this,i,n)))return o}else{for(i=this._physicalStart,n=this._virtualStart;i<this._physicalCount;i++,n++)if(null!=(o=t.call(this,i,n)))return o;for(i=0;i<this._physicalStart;i++,n++)if(null!=(o=t.call(this,i,n)))return o}},_computeVidx:function(t){return t>=this._physicalStart?this._virtualStart+(t-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+t},_assignModels:function(t){this._iterateItems((function(t,e){var i=this._physicalItems[t],n=this.items&&this.items[e];if(null!=n){var o=this.modelForElement(i);o.__key__=null,this._forwardProperty(o,this.as,n),this._forwardProperty(o,this.selectedAs,this.$.selector.isSelected(n)),this._forwardProperty(o,this.indexAs,e),this._forwardProperty(o,"tabIndex",this._focusedVirtualIndex===e?0:-1),this._physicalIndexForKey[o.__key__]=t,o._flushProperties&&o._flushProperties(!0),i.removeAttribute("hidden")}else i.setAttribute("hidden","")}),t)},_updateMetrics:function(t){_();var e=0,i=0,n=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems((function(t,n){i+=this._physicalSizes[t],this._physicalSizes[t]=this._physicalItems[t].offsetHeight,e+=this._physicalSizes[t],this._physicalAverageCount+=this._physicalSizes[t]?1:0}),t),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+e-i,this._itemsPerRow=1),this._physicalAverageCount!==n&&(this._physicalAverage=Math.round((o*n+e)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var t=this._physicalTop;if(this.grid){var e=this._itemsPerRow*this._itemWidth,i=(this._viewportWidth-e)/2;this._iterateItems((function(e,n){var o=n%this._itemsPerRow,r=Math.floor(o*this._itemWidth+i);this._isRTL&&(r*=-1),this.translate3d(r+"px",t+"px",0,this._physicalItems[e]),this._shouldRenderNextRow(n)&&(t+=this._rowHeight)}))}else{const e=[];this._iterateItems((function(i,n){const o=this._physicalItems[i];this.translate3d(0,t+"px",0,o),t+=this._physicalSizes[i];const r=o.id;r&&e.push(r)})),e.length&&this.setAttribute("aria-owns",e.join(" "))}},_getPhysicalSizeIncrement:function(t){return this.grid?this._computeVidx(t)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[t]},_shouldRenderNextRow:function(t){return t%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var t=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==t){this._physicalTop=this._physicalTop-t;var e=this._scrollPosition;!Y&&e>0&&this._resetScrollPosition(e-t)}},_resetScrollPosition:function(t){this.scrollTarget&&t>=0&&(this._scrollTop=t,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(t){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((t=(t=(t=t||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(t){return this.scrollToIndex(this.items.indexOf(t))},scrollToIndex:function(t){if(!("number"!=typeof t||t<0||t>this.items.length-1)&&(_(),0!==this._physicalCount)){t=this._clamp(t,0,this._virtualCount-1),(!this._isIndexRendered(t)||t>=this._maxVirtualStart)&&(this._virtualStart=this.grid?t-2*this._itemsPerRow:t-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var e=this._physicalStart,i=this._virtualStart,n=0,o=this._hiddenContentSize;i<t&&n<=o;)n+=this._getPhysicalSizeIncrement(e),e=(e+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+n),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),f)},selectItem:function(t){return this.selectIndex(this.items.indexOf(t))},selectIndex:function(t){if(!(t<0||t>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(t)){var e=this.modelForElement(this._physicalItems[this._getPhysicalIndex(t)]);e&&(e[this.selectedAs]=!0),this.updateSizeForIndex(t)}this.$.selector.selectIndex(t)}},deselectItem:function(t){return this.deselectIndex(this.items.indexOf(t))},deselectIndex:function(t){if(!(t<0||t>=this._virtualCount)){if(this._isIndexRendered(t))this.modelForElement(this._physicalItems[this._getPhysicalIndex(t)])[this.selectedAs]=!1,this.updateSizeForIndex(t);this.$.selector.deselectIndex(t)}},toggleSelectionForItem:function(t){return this.toggleSelectionForIndex(this.items.indexOf(t))},toggleSelectionForIndex:function(t){(this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(t):this.$.selector.isSelected(this.items[t]))?this.deselectIndex(t):this.selectIndex(t)},clearSelection:function(){this._iterateItems((function(t,e){this.modelForElement(this._physicalItems[t])[this.selectedAs]=!1})),this.$.selector.clearSelection()},_selectionEnabledChanged:function(t){(t?this.listen:this.unlisten).call(this,this,"tap","_selectionHandler")},_selectionHandler:function(t){var e=this.modelForElement(t.target);if(e){var i,n,o=s(t).path[0],r=this._getActiveElement(),a=this._physicalItems[this._getPhysicalIndex(e[this.indexAs])];"input"!==o.localName&&"button"!==o.localName&&"select"!==o.localName&&(i=e.tabIndex,e.tabIndex=-100,n=r?r.tabIndex:-1,e.tabIndex=i,r&&a!==r&&a.contains(r)&&-100!==n||this.toggleSelectionForItem(e[this.as]))}},_multiSelectionChanged:function(t){this.clearSelection(),this.$.selector.multi=t},updateSizeForItem:function(t){return this.updateSizeForIndex(this.items.indexOf(t))},updateSizeForIndex:function(t){return this._isIndexRendered(t)?(this._updateMetrics([this._getPhysicalIndex(t)]),this._positionItems(),null):null},_manageFocus:function(){var t=this._focusedVirtualIndex;t>=0&&t<this._virtualCount?this._isIndexRendered(t)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(t){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(t/this._itemsPerRow)*this._itemsPerRow:t},_isIndexRendered:function(t){return t>=this._virtualStart&&t<=this._virtualEnd},_isIndexVisible:function(t){return t>=this.firstVisibleIndex&&t<=this.lastVisibleIndex},_getPhysicalIndex:function(t){return(this._physicalStart+(t-this._virtualStart))%this._physicalCount},focusItem:function(t){this._focusPhysicalItem(t)},_focusPhysicalItem:function(t){if(!(t<0||t>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(t)||this.scrollToIndex(t);var e,i=this._physicalItems[this._getPhysicalIndex(t)],n=this.modelForElement(i);n.tabIndex=-100,-100===i.tabIndex&&(e=i),e||(e=s(i).querySelector('[tabindex="-100"]')),n.tabIndex=0,this._focusedVirtualIndex=t,e&&e.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var t=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var e=this.stamp(null);this._focusBackfillItem=e.root.querySelector("*"),this._itemsParent.appendChild(e.root)}this._offscreenFocusedItem=this._physicalItems[t],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[t]=this._focusBackfillItem,this._focusedPhysicalIndex=t,this.translate3d(0,"-10000px",0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(this._offscreenFocusedItem&&!(this._focusedVirtualIndex<0)){this._assignModels();var t=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),e=this._physicalItems[t];if(e){var i=this.modelForElement(e),n=this.modelForElement(this._offscreenFocusedItem);i[this.as]===n[this.as]?(this._focusBackfillItem=e,i.tabIndex=-1,this._physicalItems[t]=this._offscreenFocusedItem,this.translate3d(0,"-10000px",0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(t){var e=this.modelForElement(t.target),i=this.modelForElement(this._focusedItem),n=null!==this._offscreenFocusedItem,o=this._focusedVirtualIndex;e&&(i===e?this._isIndexVisible(o)||this.scrollToIndex(o):(this._restoreFocusedItem(),i&&(i.tabIndex=-1),e.tabIndex=0,o=e[this.indexAs],this._focusedVirtualIndex=o,this._focusedPhysicalIndex=this._getPhysicalIndex(o),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],n&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(t){switch(t.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&t.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&t.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(t)}},_clamp:function(t,e,i){return Math.min(i,Math.max(e,t))},_debounce:function(t,e,i){this._debouncers=this._debouncers||{},this._debouncers[t]=y.debounce(this._debouncers[t],i,e.bind(this)),b(this._debouncers[t])},_forwardProperty:function(t,e,i){t._setPendingProperty(e,i)},_forwardHostPropV2:function(t,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).forwardHostProp(t,e)}),this)},_notifyInstancePropV2:function(t,e,i){if(v(this.as,e)){var n=t[this.indexAs];e==this.as&&(this.items[n]=i),this.notifyPath(x(this.as,"items."+n,e),i)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(t,e,i){0===e.indexOf(this.as+".")&&this.notifyPath("items."+t.__key__+"."+e.slice(this.as.length+1),i)},_forwardParentPath:function(t,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).notifyPath(t,e)}),this)},_forwardParentProp:function(t,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&(this.modelForElement(i)[t]=e)}),this)},_getActiveElement:function(){var t=this._itemsParent.node.domHost;return s(t?t.root:document).activeElement}});let J;n({_template:i(J||(J=(t=>t)`
    <style include="iron-flex iron-flex-alignment">
      :host {
        @apply --layout-horizontal;
        min-width: 125px;
      }

      .action-text {
        font-size: 12px;
        padding-top: 12px;
      }

      .action-up {
        @apply --layout-horizontal;
      }

      .action-down {
        @apply --layout-horizontal;
      }

      .up-selected {
        color: #444;
      }

      .down-selected {
        color: #444;
      }

      .middle {
        @apply --layout-horizontal;
        @apply --layout-flex;
        @apply --layout-center-justified;
      }

      .all-actions {
        @apply --layout-horizontal;
        @apply --layout-flex;
        @apply --layout-start-justified;
        color: #aaa;
      }

      yp-ajax {
        min-width: 32px;
      }

      .myButton {
      --paper-icon-button {
        width: 10px;
        height: 10px;
      }
      }

      .shareIcon {
        --paper-share-button-icon-color: #ddd;
        text-align: right;
      }

      .shareIcon[up-voted] {
        --paper-share-button-icon-color: var(--accent-color-400);
      }

      [hidden] {
        display: none !important;
      }
    </style>
    <lite-signal on-lite-signal-yp-language="_languageEvent"></lite-signal>

    <div class="all-actions" hidden\$="[[hideNotHelpful]]">
      <div id="actionUp" class="actionUp layout horizontal">
        <paper-icon-button title\$="[[t('point.helpful')]]" disabled="[[allDisabled]]" icon="arrow-upward" class="point-up-vote-icon myButton" on-tap="pointHelpful"></paper-icon-button>
        <div class="action-text action-up">{{point.counter_quality_up}}</div>
      </div>
      <div id="actionDown" class="actionDown layout horizontal">
        <paper-icon-button title\$="[[t('point.not_helpful')]]" disabled="[[allDisabled]]" icon="arrow-downward" class="point-down-vote-icon myButton" on-tap="pointNotHelpful"></paper-icon-button>
        <div class="action-text">{{point.counter_quality_down}}</div>
      </div>
    </div>
    <paper-share-button hidden on-share-tap="_shareTap" class="shareIcon" up-voted\$="[[isUpVoted]]" horizontal-align="right" id="shareButton" title\$="[[t('sharePoint')]]" facebook="" google="" twitter="" url="[[pointUrl]]"></paper-share-button>

    <yp-ajax id="pointQualityAjax" method="POST" on-response="_pointQualityResponse"></yp-ajax>
    <lite-signal on-lite-signal-got-endorsements-and-qualities="_updateQualitiesFromSignal"></lite-signal>
`)),is:"yp-point-actions",behaviors:[V,k],properties:{point:{type:Object,observer:"_onPointChanged"},hideNotHelpful:{type:Boolean,value:!1},pointQualityValue:{type:Number,value:0},isUpVoted:{type:Boolean,value:!1},allDisabled:{type:Boolean,value:!1},pointUrl:{type:String},hideSharing:{type:Boolean,value:!1}},observers:["_qualityChanged(point.counter_quality_up, point.counter_quality_down)"],_onPointChanged:function(t,e){t?this._updateQualities():this.set("isUpVoted",!1)},_updateQualitiesFromSignal:function(){this._updateQualities()},_updateQualities:function(){if(window.appUser&&window.appUser.loggedIn()&&window.appUser.user&&window.appUser.user.PointQualities){var t=window.appUser.pointQualitiesIndex[this.point.id];t?(this._setPointQuality(t.value),t.value>0&&this.set("isUpVoted",!0)):(this.set("isUpVoted",!1),this._setPointQuality(null))}else this.set("isUpVoted",!1),this._setPointQuality(null)},_qualityChanged:function(t,e){},_resetClasses:function(){this.pointQualityValue&&this.pointQualityValue>0?(this.$.actionUp.className+=" up-selected",this.removeClass(this.$.actionDown,"down-selected")):this.pointQualityValue&&this.pointQualityValue<0?(this.$.actionDown.className+=" down-selected",this.removeClass(this.$.actionUp,"up-selected")):(this.removeClass(this.$.actionUp,"up-selected"),this.removeClass(this.$.actionDown,"down-selected"))},_setPointQuality:function(t){this.set("pointQualityValue",t),this._resetClasses()},_pointQualityResponse:function(t,e){this.set("allDisabled",!1);var i=e.response.pointQuality,n=e.response.oldPointQualityValue;this._setPointQuality(i.value),window.appUser.updatePointQualityForPost(this.point.id,i),n&&(n>0?this.set("point.counter_quality_up",this.point.counter_quality_up-1):n<0&&this.set("point.counter_quality_down",this.point.counter_quality_down-1)),i.value>0?this.set("point.counter_quality_up",this.point.counter_quality_up+1):i.value<0&&this.set("point.counter_quality_down",this.point.counter_quality_down+1)},generatePointQualityFromLogin:function(t){window.appUser.pointQualitiesIndex[this.point.id]||this.generatePointQuality(t)},generatePointQuality:function(t){!0===window.appUser.loggedIn()?(this.$.pointQualityAjax.url="/api/points/"+this.point.id+"/pointQuality",this.$.pointQualityAjax.body={point_id:this.point.id,value:t},this.pointQualityValue===t?this.$.pointQualityAjax.method="DELETE":this.$.pointQualityAjax.method="POST",this.$.pointQualityAjax.generateRequest()):(this.set("allDisabled",!1),window.appUser.loginForPointQuality(this,{value:t}))},pointHelpful:function(){this.set("allDisabled",!0),this.generatePointQuality(1),this.set("isUpVoted",!0),this.updateStyles(),window.appGlobals.activity("clicked","pointHelpful",this.point.id)},pointNotHelpful:function(){this.set("allDisabled",!0),window.appGlobals.activity("clicked","pointNotHelpful",this.point.id),this.generatePointQuality(-1)}});let X;n({_template:i(X||(X=(t=>t)`
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
        @apply --layout-vertical;
        color: #333;
      }

      .point-content {
        @apply --layout-vertical;
        padding-right: 16px;
        padding-left: 16px;
        margin-top: 16px;
      }

      #pointContentTranscript, #pointContent {
        cursor: default;
      }

      #pointContentTranscript, #pointContent[link-point] {
        cursor: pointer;
      }

      @media (max-width: 320px) {
        .user-image {
          display: none;
        }
      }

      .userInfoContainer {
        border-bottom: solid 4px;
        width: 100%;
        padding-bottom: 16px;
      }

      .userInfoContainer[up-vote] {
        border-bottom-color:  var(--master-point-up-color);
      }

      .userInfoContainer[down-vote] {
        border-bottom-color: var(--master-point-down-color);
      }

      paper-icon-button {
        color: #ccc;
      }

      #reportPointIconButton {
        color: #ddd;
        width: 36px;
        height: 36px;
      }

      .thumbsIcon {
        padding-left: 16px;
      }

      @media (min-width: 985px) {
        .thumbsIcon {
          display: none;
        }
      }

      iron-icon.thumbsIconUp {
        color: var(--master-point-up-color);
      }

      iron-icon.thumbsIconDown {
        color: var(--master-point-down-color);
      }

      yp-user-with-organization {
        padding-left: 16px;
      }

      .actionContainer {
        margin-top: 8px;
      }

      [hidden] {
        display: none !important;
      }

      .pointer {
        cursor: pointer;
      }

      iron-image, video {
        width: 398px;
        height: 224px;
        margin: 0;
        padding: 0;
      }

      @media (max-width: 600px) {
        iron-image, video {
          width: 100%;
          margin: 0 !important;
          padding: 0;
          height: initial;
          vertical-align: top;
        }

        .actionContainer {
          margin-left: 12px;
        }

        #videoPlayer[portrait] {
          width: 50% !important;
        }
      }


      .topContainer[portrait] {
        background-color: #777;
      }

      #pointContentEditor {
        padding-left: 8px;
        padding-right: 8px;
      }

      .transcriptError {
        margin-top: 8px;
        color: #F00;
      }

      paper-spinner {
        margin-top: 4px;
      }

      .checkTranscript {
        margin-top: 8px;
        padding: 8px;
      }

      .transcriptText {
        margin-top: 0;
        padding: 8px;
        color: #444;
        padding-bottom: 0;
        font-style: italic;
      }

      .transcriptHeader {
        color: #222;
        margin-bottom: 2px;
        font-style: normal;
      }

      audio {
        margin-top: 16px;
        margin-bottom: 16px;
      }

      video {
        background-color: #777;
      }
    </style>

    <lite-signal on-lite-signal-got-admin-rights="_gotAdminRights"></lite-signal>
    <lite-signal on-lite-signal-logged-in="_userLoggedIn"></lite-signal>
    <lite-signal on-lite-signal-yp-language="_languageEvent"></lite-signal>
    <lite-signal on-lite-signal-yp-pause-media-playback="_pauseMediaPlayback"></lite-signal>

    <div class="layout vertical">

      <div class="userInfoContainer layout horizontal" up-vote\$="[[upVote(point)]]" down-vote\$="[[downVote(point)]]" hidden\$="[[hideUser]]">
        <div class="layout horizontal" hidden\$="[[point.Post.Group.configuration.hidePointAuthor]]">
          <yp-user-with-organization title-date="[[point.created_at]]" inverted="" user\$="[[user]]"></yp-user-with-organization>
        </div>
      </div>

      <div class="layout vertical">
        <div class="topContainer" portrait\$="[[portraitVideo]]">
          <template is="dom-if" if="[[videoActive]]" restamp="">
            <div class="layout horizontal center-center">
              <video id="videoPlayer" portrait\$="[[portraitVideo]]" data-id\$="[[pointVideoId]]" controls="" preload="none" class="video" src="[[pointVideoPath]]" playsinline="" poster="[[pointImageVideoPath]]"></video>
            </div>
          </template>
        </div>

        <template is="dom-if" if="[[audioActive]]" restamp="">
          <div class="layout vertical center-center">
            <audio id="audioPlayer" data-id\$="[[pointAudioId]]" controls="" preload="meta" class="audio" src="[[pointAudioPath]]" playsinline=""></audio>
          </div>
        </template>

        <template is="dom-if" if="[[videoOrAudioActive]]">
          <template is="dom-if" if="[[checkingTranscript]]">
            <div class="layout vertical center-center checkTranscript">
              <div>[[t('checkingForTranscript')]]</div>
              <paper-spinner active=""></paper-spinner>
            </div>
          </template>
          <div class="transcriptError layout horizontal center-center" hidden\$="[[!checkTranscriptError]]">
            [[t('checkTranscriptError')]]
          </div>
          <template is="dom-if" if="[[point.latestContent]]">
            <div class="transcriptText layout vertical center-center">
              <div class="transcriptHeader">[[t('automaticTranscript')]]</div>
              <div id="pointContentTranscript" link-point\$="[[linkPoint]]" hidden\$="[[isEditing]]" on-tap="_linkIfNeeded">
                <yp-magic-text simple-format="" text-type="pointContent" content-language="[[point.language]]" content="[[point.latestContent]]" content-id="[[point.id]]">
                </yp-magic-text>
              </div>
            </div>
          </template>
        </template>

        <template is="dom-if" if="[[!videoOrAudioActive]]">
          <div class="point-content">
            <span hidden\$="[[!point.name]]">
              <span>[[point.name]]</span>.
            </span>
            <div id="pointContent" link-point\$="[[linkPoint]]" hidden\$="[[isEditing]]" on-tap="_linkIfNeeded">
              <yp-magic-text simple-format="" text-type="pointContent" content-language="[[point.language]]" content="[[point.latestContent]]" content-id="[[point.id]]">
              </yp-magic-text>
            </div>
          </div>
        </template>
        <template is="dom-if" if="[[isEditing]]" restamp="">
          <div class="layout vertical">
            <paper-textarea id="pointContentEditor" char-counter="" maxlength="500" value="{{editText}}"></paper-textarea>
            <div class="horizontal end-justified layout">
              <emoji-selector id="pointEmojiSelector"></emoji-selector>
            </div>
            <div class="layout horizontal self-end">
              <paper-button on-tap="_cancelEdit">[[t('cancel')]]</paper-button>
              <paper-button on-tap="_saveEdit">[[t('update')]]</paper-button>
            </div>
          </div>
        </template>
        <div class="layout horizontal actionContainer" hidden\$="[[hideActions]]" style="padding-bottom:8px;">
          <yp-point-actions hidden point="[[point]]" point-url\$="[[pointUrl]]"></yp-point-actions>
          <paper-icon-button hidden title\$="[[t('point.report')]]" id="reportPointIconButton" icon="warning" on-tap="_reportPoint"></paper-icon-button>
          <div class="flex"></div>
          <template is="dom-if" if="[[hasPointAccess]]">
            <div class="layout horizontal self-end" hidden\$="">
              <yp-ajax id="editPointAjax" method="PUT" on-response="_editResponse"></yp-ajax>
              <yp-ajax id="deletePointAjax" method="DELETE" on-response="_deleteResponse"></yp-ajax>
              <paper-icon-button title\$="[[t('edit')]]" hidden\$="[[!canEditPoint]]" icon="create" on-tap="_editPoint"></paper-icon-button>
              <paper-icon-button title\$="[[t('delete')]]" icon="clear" on-tap="_deletePoint"></paper-icon-button>
            </div>
          </template>
          <yp-ajax hidden="" id="checkTranscriptStatusAjax" on-response="_transcriptStatusResponse"></yp-ajax>
        </div>
      </div>
    </div>
`)),is:"yp-point",properties:{point:{type:Object,notify:!0,observer:"_pointChanged"},linkPoint:{type:Boolean,value:!1},hasPointAccess:{type:Boolean,computed:"_hasPointAccess(point, gotAdminRights, loggedInUser)"},canEditPoint:{type:Boolean,computed:"_canEditPoint(point, gotAdminRights, loggedInUser)"},user:{type:Object,value:null},hideUser:{type:Boolean,value:!1},hideActions:{type:Boolean,value:!1},isEditing:{type:Boolean,value:!1,observer:"_isEditingChanged"},maxNumberOfPointsBeforeEditFrozen:{type:Number,value:5},pointValueUp:{type:Boolean,computed:"upVote(point)"},pointUrl:{type:String,computed:"_pointUrl(point)"},editText:String,videoActive:{type:Boolean,value:!1},pointVideoPath:String,pointImageVideoPath:String,pointVideoId:Number,audioActive:{type:Boolean,value:!1},pointAudioPath:String,pointAudioId:Number,videoOrAudioActive:{type:Boolean,computed:"_videoOrAudioActive(videoActive, audioActive)"},checkingTranscript:{type:Boolean,value:!1},portraitVideo:{type:Boolean,value:!1}},behaviors:[I,k],_videoOrAudioActive:function(t,e){return t||e},_isEditingChanged:function(t){this._updateEmojiBindings(t),this.async((function(){this.fire("iron-resize")}))},_shareTap:function(t,e){window.appGlobals.activity("pointShareOpen",e.brand,this.point.id)},_pointUrl:function(t){if(t&&t.Post)return window.location.protocol+"//"+window.location.hostname+"/post/"+t.Post.id+"/"+t.id},_linkIfNeeded:function(){this.linkPoint&&this.goToPost(this.point.Post.id,this.point.id)},_updateEmojiBindings:function(t){t&&this.async(function(){var t=this.$$("#pointContentEditor"),e=this.$$("#pointEmojiSelector");t&&e?e.inputTarget=t:console.error("Wide: Can't bind point edit emojis :(")}.bind(this),500)},_cancelEdit:function(){this.set("isEditing",!1)},_saveEdit:function(){this.$$("#editPointAjax").url="/api/points/"+this.point.id,this.$$("#editPointAjax").body={content:this.editText},this.$$("#editPointAjax").generateRequest()},_deletePoint:function(){s(document).querySelector("yp-app").getDialogAsync("confirmationDialog",function(t){t.open(this.t("point.confirmDelete"),this._reallyDeletePoint.bind(this))}.bind(this))},_reallyDeletePoint:function(){this.$$("#deletePointAjax").url="/api/points/"+this.point.id,this.$$("#deletePointAjax").body={},this.$$("#deletePointAjax").generateRequest()},_editResponse:function(t,e){if(e.response){var i=e.response;i.latestContent=i.PointRevisions[i.PointRevisions.length-1].content,this.set("point",i)}this.set("isEditing",!1)},_deleteResponse:function(){this.fire("yp-point-deleted",{pointId:this.point.id}),this.set("point",null)},_reportPoint:function(){window.appGlobals.activity("open","point.report"),s(document).querySelector("yp-app").getDialogAsync("apiActionDialog",function(t){t.setup("/api/points/"+this.point.id+"/report",this.t("reportConfirmation"),this._onReport.bind(this),this.t("point.report"),"PUT"),t.open()}.bind(this))},_onReport:function(){window.appGlobals.notifyUserViaToast(this.t("point.report")+": "+this.point.content)},_editPoint:function(){this._hasPointAccess(this.point)&&(this.set("editText",this.point.PointRevisions[this.point.PointRevisions.length-1].content),this.set("isEditing",!0))},_hasPointAccess:function(t){return!1},_canEditPoint:function(t){return t&&t.counter_quality_up+t.counter_quality_down<=this.maxNumberOfPointsBeforeEditFrozen&&window.appUser&&window.appUser.user&&window.appUser.user.id==t.user_id},_pointChanged:function(t,e){if(this.setupMediaEventListeners(t,e),this._resetMedia(),t){this.set("user",this.point.User);var i=this._getVideoURL(t.PointVideos),n=this._getVideoPosterURL(t.PointVideos);if(this.set("portraitVideo",this._isPortraitVideo(t.PointVideos)),i&&n)this.set("videoActive",!0),this.set("pointVideoPath",i),this.set("pointImageVideoPath",n),this.set("pointVideoId",t.PointVideos[0].id),this.set("checkTranscriptError",!1),"video"===t.checkTranscriptFor&&!0===window.appGlobals.hasTranscriptSupport&&(this.$.checkTranscriptStatusAjax.url="/api/points/"+t.id+"/videoTranscriptStatus",this.$.checkTranscriptStatusAjax.generateRequest(),this.set("checkingTranscript",!0),t.checkTranscriptFor=null);else{var o=this._getAudioURL(t.PointAudios);o&&(this.set("audioActive",!0),this.set("pointAudioPath",o),this.set("pointAudioId",t.PointAudios[0].id),this.set("checkTranscriptError",!1),"audio"===t.checkTranscriptFor&&!0===window.appGlobals.hasTranscriptSupport&&(this.$.checkTranscriptStatusAjax.url="/api/points/"+t.id+"/audioTranscriptStatus",this.$.checkTranscriptStatusAjax.generateRequest(),this.set("checkingTranscript",!0),t.checkTranscriptFor=null))}}else this.set("user",null),this.set("checkTranscriptError",!1)},_transcriptStatusResponse:function(t,e){if((e=e.response)&&e.point){var i=e.point;this.set("checkingTranscript",!1),i.latestContent=i.PointRevisions[i.PointRevisions.length-1].content,this.set("point",i),this.fire("yp-update-point-in-list",i),this._hasPointAccess(i)&&(this.set("editText",i.latestContent),this.set("isEditing",!0)),this.async((function(){this.fire("iron-resize")}))}else e&&e.inProgress?this.async((function(){this.$.checkTranscriptStatusAjax.generateRequest()}),2e3):e&&e.error?(this.set("checkingTranscript",!1),this.set("checkTranscriptError",!0)):this.set("checkingTranscript",!1)},_resetMedia:function(){this.set("videoActive",!1),this.set("pointVideoPath",null),this.set("pointImageVideoPath",null),this.set("pointVideoId",null),this.set("audioActive",!1),this.set("pointAudioPath",null),this.set("pointAudioId",null)},loginName:function(){return this.point.User.name},upVote:function(t){return t?0==t.value||t.value>0:(console.warn("Can't find point for upVote"),!1)},downVote:function(t){return t?0==t.value||t.value<0:(console.warn("Can't find point for upVote"),!1)},computeClass:function(t){var e="description ";return t?(t.value>0?e+="for":e+="against",e):(console.warn("Can't find point for upVote"),e)}});let K;n({_template:i(K||(K=(t=>t)`
    <style include="iron-flex iron-flex-alignment">

      :host {
        display: block;
      }

      .item {
        @apply --layout-horizontal;
      }

      .main-container {
        @apply --layout-horizontal;
        background-color: var(--app-main-backround-color, #e0e0e0);
      }

      .point {
        padding-top: 32px;
        padding-bottom: 32px;
        padding-left: 24px;
        padding-right: 24px;
        @apply --layout-vertical;
        width: 398px;
      }

      .pointInputMaterial {
        padding-top: 24px;
        padding-left: 16px;
        padding-right: 16px;
        margin-bottom: 16px;
        background-color: #FFF;
      }

      paper-toast {
        z-index: 9999;
      }

      paper-material {
        background-color: #fff;
      }

      yp-point {
        padding-top: 8px;
      }

      .pointMaterial {
        padding-top: 8px;
        background-color: #FFF;
        padding-left: 0;
        padding-right: 0;
        width: 430px;
        margin-bottom: 12px;
      }

      .thumbIcon {
        height: 64px;
        width: 64px;
        padding-bottom: 16px;
        color: var(--primary-color);
      }

      .editIcon {
        height: 28px;
        width: 28px;
        padding-bottom: 16px;
        color: var(--primary-color);
      }

      .addPointFab {
        width: 100%;
        color: #FFF;
        margin-bottom: 18px;
      }

      paper-textarea {
        --paper-input-container-label: {
          font-size: 22px;
          height: 30px;
          overflow: visible;
          color: #AAAAAA;
        }
      }

      .howToWriteInfoText {
        padding-top: 4px;
        color: var(--primary-color);
      }

      .point .main-container .topContainer {
        background-color: var(--app-main-backround-color, #e0e0e0);
      }

      .penContainer {
        margin-top: 42px;
      }

      .upOrDown {
        margin-top: 72px;
      }

      paper-radio-button {
        --paper-radio-button-checked-color: var(--accent-color) !important;
        font-size: 16px;
      }

      #pointUpOrDownMaterial {
        margin-top: 16px;
        width: 100%;
      }

      .mobileFab {
        margin-top: 8px;
      }

      paper-button {
        color: #FFF;
        background-color: var(--accent-color);
      }

      @media (max-width: 985px) {
        .pointInputMaterial {
          width: 100%;
          max-width: 568px;
          font-size: 14px;
          padding-top: 4px;
          margin-top: 0;
        }

        .pointMaterial {
          width: 100%;
          max-width: 600px;
          padding-left: 0;
          padding-right: 0;
        }

        #pointUpOrDownMaterial {
          margin-top: 0;
        }

        .main-container {
          width: 100%;
        }

        iron-list {
          width: 100vw;
        }

        .pointMaterial {
        }
      }

      @media (max-width: 420px) {
        .pointInputMaterial {
          width: 90%;
          max-width: 90%;
        }
      }

      .mobilePaperTextArea {
        --paper-input-container-label: {
          font-size: 19px;
        };
      }

      .pointMainHeader {
        font-size: 26px;
        margin-bottom: 16px;
        color: #555;
      }

      #pointUpMaterialNotUsed {
        border-top: solid 2px;
        border-top-color:  var(--master-point-up-color);
      }

      #pointDownMaterialNotUsed {
        border-top: solid 2px;
        border-top-color: var(--master-point-down-color);
      }

      .pointElement {
        margin-bottom: 18px;
      }

      [hidden] {
        display: none !important;
      }

      iron-list {
        height: 80vh;
      }

      iron-list {
        --iron-list-items-container: {
        };
      }

      :focus {
        outline: none;
      }

      #ironListMobile[debate-disabled] {
        margin-top: 16px;
      }

      .mainSpinner {
        margin: 32px;
      }

      paper-button[disabled] {
        background-color: #333;
        color: #FFF;
      }

      .uploadNotLoggedIn {
        min-width: 100px;
        background-color: #FFF;
        color: #000;
        margin-bottom: 24px;
      }

      .uploadNotLoggedIn > .icon {
        padding-right: 8px;
      }

      .pointButtons {
        margin-bottom: 4px;
      }

      .bottomDiv {
        margin-bottom: 64px;
      }

      .uploadSection {
        justify-content: space-evenly;
        width: 50%;
        margin-left: 8px;
        margin-right: 8px;
        vertical-align: top;
      }
    </style>
    <lite-signal on-lite-signal-yp-language="_languageEvent"></lite-signal>
    <lite-signal on-lite-signal-yp-update-points-for-post="_loadNewPointsIfNeeded"></lite-signal>
    <lite-signal on-lite-signal-logged-in="_userLoggedIn"></lite-signal>

    <iron-media-query query="(min-width: 985px)" query-matches="{{largeMode}}"></iron-media-query>

    <div class="layout horizontal center-center" hidden\$="[[ajaxActive]]">
      <yp-ajax id="ajax" large-spinner="" active\$="{{ajaxActive}}" on-response="_response"></yp-ajax>
    </div>

    <template is="dom-if" if="[[largeMode]]" restamp="">
      <div class="layout vertical topContainer">
        <div class="main-container">
          <div class="point">
            <template is="dom-if" if="[[!post.Group.configuration.alternativePointForHeader]]">
              <div class="pointMainHeader layout horizontal center-center">
                [[t('pointsFor')]]
              </div>
            </template>

            <template is="dom-if" if="[[post.Group.configuration.alternativePointForHeader]]">
              <div class="pointMainHeader layout horizontal center-center">
                [[post.Group.configuration.alternativePointForHeader]]
              </div>
            </template>
            <div id="allUpPoints">
              <iron-list id="ironListUp" items="[[upPoints]]" as="point" scroll-target="document" scroll-offset="550">
                <template>
                  <div class="item" tabindex\$="[[tabIndex]]">
                    <paper-material id="point[[point.id]]" elevation="1" animated="" class="pointMaterial">
                      <yp-point point="[[point]]"></yp-point>
                    </paper-material>
                  </div>
                </template>
              </iron-list>
            </div>
          </div>

          <div class="point">
            <template is="dom-if" if="[[!post.Group.configuration.alternativePointAgainstHeader]]">
              <div class="pointMainHeader layout horizontal center-center">
                [[t('pointsAgainst')]]
              </div>
            </template>

            <template is="dom-if" if="[[post.Group.configuration.alternativePointAgainstHeader]]">
              <div class="pointMainHeader layout horizontal center-center">
                [[post.Group.configuration.alternativePointAgainstHeader]]
              </div>
            </template>

            <div id="allDownPoints">
              <iron-list id="ironListDown" items="[[downPoints]]" as="point" scroll-target="document" scroll-offset="550">
                <template>
                  <div class="item" tabindex\$="[[tabIndex]]">
                    <paper-material id="point[[point.id]]" elevation="1" animated="" class="pointMaterial">
                      <yp-point point="[[point]]"></yp-point>
                    </paper-material>
                  </div>
                </template>
              </iron-list>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template is="dom-if" if="[[!largeMode]]" restamp="">
      <div class="layout vertical center-center">

      <div class="layout vertical center-center">
        <iron-list id="ironListMobile" debate-disabled\$="[[post.Group.configuration.disableDebate]]" items="[[points]]" as="point" scroll-target="document" scroll-offset="[[mobileScrollOffset]]">
          <template>
            <div class="item layout vertical center-center" tabindex\$="[[tabIndex]]">
              <paper-material id="point[[point.id]]" elevation="1" animated="" class="pointMaterial">
                <yp-point point="[[point]]"></yp-point>
              </paper-material>
            </div>
          </template>
        </iron-list>
      </div>
    </template>

    <div class="layout vertical center-center">
      <yp-ajax id="newPointsAjax" on-response="_newPointsResponse"></yp-ajax>
      <yp-ajax id="newPointAjax" on-error="_newPointError" method="POST" url="/api/points" on-response="_newPointResponse"></yp-ajax>
    </div>

    <paper-toast id="newPointToast" text="[[newPointTextCombined]]"></paper-toast>
`)),is:"yp-post-points",behaviors:[C,k],properties:{host:String,downPoints:{type:Array,value:[]},upPoints:{type:Array,value:[]},textValueUp:{type:String,notify:!0,value:""},textValueDown:{type:String,notify:!0,value:""},newPointTextCombined:{type:String},post:{type:Object,observer:"_postChanged"},points:{type:Array,value:null,observer:"_pointsChanged"},largeMode:{type:Boolean,value:!1,observer:"_updateEmojiBindings"},textValueMobileUpOrDown:String,labelMobileUpOrDown:String,labelUp:String,labelDown:String,pointUpOrDownSelected:{type:String,observer:"_pointUpOrDownSelectedChanged",value:"pointFor"},latestPointCreatedAt:{type:Date,value:null},scrollToId:{type:String,value:null},ironListResizeScrollThreshold:{type:Number,computed:"_ironListResizeScrollThreshold(largeMode)"},ironListPaddingTop:{type:Number,computed:"_ironListPaddingTop(wide)"},ifLengthUpIsRight:{type:Boolean,value:!1,computed:'ifLengthIsRight("up",textValueUp, uploadedVideoUpId, uploadedAudioUpId)'},ifLengthDownIsRight:{type:Boolean,value:!1,computed:'ifLengthIsRight("down", textValueDown, uploadedVideoDownId, uploadedAudioDownId)'},ifLengthMobileRight:{type:Boolean,value:!1,computed:'ifLengthIsRight("mobile", textValueMobileUpOrDown, uploadedVideoMobileId, uploadedAudioMobileId)'},addPointDisabled:{type:Boolean,value:!1},mobileScrollOffset:{type:Number,computed:"_mobileScrollOffset(largeMode,post)"},ajaxActive:{type:Boolean,value:!1},uploadedVideoUpId:{type:String,value:null},uploadedVideoDownId:{type:String,value:null},uploadedVideoMobileId:{type:String,value:null},currentVideoId:{type:String,value:null},hideUpVideo:{type:Boolean,value:!1},hideDownVideo:{type:Boolean,value:!1},hideMobileVideo:{type:Boolean,value:!1},uploadedAudioUpId:{type:String,value:null},uploadedAudioDownId:{type:String,value:null},uploadedAudioMobileId:{type:String,value:null},currentAudioId:{type:String,value:null},hideUpAudio:{type:Boolean,value:!1},hideDownAudio:{type:Boolean,value:!1},hideMobileAudio:{type:Boolean,value:!1},hideUpText:{type:Boolean,value:!1},hideDownText:{type:Boolean,value:!1},hideMobileText:{type:Boolean,value:!1},selectedPointForMobile:{type:Boolean,value:!0},isAndroid:{type:Boolean,value:!1},hasCurrentUpVideo:{type:String,observer:"_hasCurrentUpVideo"},hasCurrentDownVideo:{type:String,observer:"_hasCurrentDownVideo"},hasCurrentMobileVideo:{type:String,observer:"_hasCurrentMobileVideo"},hasCurrentUpAudio:{type:String,observer:"_hasCurrentUpAudio"},hasCurrentDownAudio:{type:String,observer:"_hasCurrentDownAudio"},hasCurrentMobileAudio:{type:String,observer:"_hasCurrentMobileAudio"},storedPoints:{type:Array,value:null}},_openLogin:function(){this.fire("yp-open-login")},_videoUpUploaded:function(t,e){this.set("uploadedVideoUpId",e.videoId)},_videoDownUploaded:function(t,e){this.set("uploadedVideoDownId",e.videoId)},_videoMobileUploaded:function(t,e){this.set("uploadedVideoMobileId",e.videoId)},_audioUpUploaded:function(t,e){this.set("uploadedAudioUpId",e.audioId)},_audioDownUploaded:function(t,e){this.set("uploadedAudioDownId",e.audioId)},_audioMobileUploaded:function(t,e){this.set("uploadedAudioMobileId",e.audioId)},_mobileScrollOffset:function(t,e){if(!t&&e){var i=this.$$("#ironListMobile");if(i){var n=i.getBoundingClientRect().top;return n<=0&&(n=800),n}return console.warn("Can't find mobile list element, returning 800"),800}},_newPointError:function(){this.set("addPointDisabled",!1)},_ironListResizeScrollThreshold:function(t){return 300},_ironListPaddingTop:function(t){return t?600:500},ready:function(){navigator.userAgent.toLowerCase().indexOf("android")>-1&&this.set("isAndroid",!0),window.addEventListener("resize",this._processStoredPoints.bind(this))},detached:function(){window.removeEventListener("resize",this._processStoredPoints)},listeners:{"yp-point-deleted":"_pointDeleted","yp-update-point-in-list":"_updatePointInLists"},observers:["_setupPointTextStartState(pointUpOrDownSelected, post)"],_setupPointTextStartState:function(t,e){e&&this._pointUpOrDownSelectedChanged(t)},_loadNewPointsIfNeeded:function(t,e){this.post&&this.post.id==e.postId&&(this.latestPointCreatedAt?(this.$.newPointsAjax.url="/api/posts/"+this.post.id+"/newPoints",this.$.newPointsAjax.params={latestPointCreatedAt:this.latestPointCreatedAt},this.$.newPointsAjax.generateRequest()):console.error("Trying to send point without latestPointCreatedAt"))},_newPointsResponse:function(t,e){this._preProcessPoints(e.response).forEach(function(t){this._insertNewPoint(t)}.bind(this)),this._updateCounterInfo()},_pointDeleted:function(){this.$.ajax.generateRequest()},_pointsChanged:function(t){t&&this._updateEmojiBindings()},_updateEmojiBindings:function(){this.async(function(){if(this.largeMode){var t=this.$$("#up_point"),e=this.$$("#down_point"),i=this.$$("#pointUpEmojiSelector"),n=this.$$("#pointDownEmojiSelector");t&&e&&i&&n&&(i.inputTarget=t,n.inputTarget=e)}else{var o=this.$$("#mobileUpOrDownPoint"),r=this.$$("#pointUpDownEmojiSelector");o&&r&&(r.inputTarget=o)}}.bind(this),500)},_pointUpOrDownSelectedChanged:function(t){"pointFor"==t?(this.post&&this.post.Group&&this.post.Group.configuration&&this.post.Group.configuration.alternativePointForLabel?this.set("labelMobileUpOrDown",this.post.Group.configuration.alternativePointForLabel):this.set("labelMobileUpOrDown",this.t("point.for")),this.set("selectedPointForMobile",!0)):"pointAgainst"==t&&(this.post&&this.post.Group&&this.post.Group.configuration&&this.post.Group.configuration.alternativePointAgainstLabel?this.set("labelMobileUpOrDown",this.post.Group.configuration.alternativePointAgainstLabel):this.set("labelMobileUpOrDown",this.t("point.against")),this.set("selectedPointForMobile",!1))},_clearVideo:function(){this.set("uploadedVideoUpId",null),this.set("uploadedVideoDownId",null),this.set("uploadedVideoMobileId",null),this.set("currentVideoId",null),this.set("hideUpVideo",!1),this.set("hideDownVideo",!1),this.set("hideMobileVideo",!1),this.$$("#videoFileUploadUp")&&this.$$("#videoFileUploadUp").clear(),this.$$("#videoFileUploadDown")&&this.$$("#videoFileUploadDown").clear(),this.$$("#videoFileUploadMobile")&&this.$$("#videoFileUploadMobile").clear()},_clearAudio:function(){this.set("uploadedAudioUpId",null),this.set("uploadedAudioDownId",null),this.set("uploadedAudioMobileId",null),this.set("currentAudioId",null),this.set("hideUpAudio",!1),this.set("hideDownAudio",!1),this.set("hideMobileAudio",!1),this.$$("#audioFileUploadUp")&&this.$$("#audioFileUploadUp").clear(),this.$$("#audioFileUploadDown")&&this.$$("#audioFileUploadDown").clear(),this.$$("#audioFileUploadMobile")&&this.$$("#audioFileUploadMobile").clear()},_postChanged:function(t){this.set("points",null),this.set("upPoints",null),this.set("downPoints",null),this.set("latestPointCreatedAt",null),this.set("storedPoints",null),this._clearVideo(),this._clearAudio(),t&&(this.host?this.$.ajax.url=this.host+"/api/posts/"+t.id+"/points":this.$.ajax.url="/api/posts/"+t.id+"/points",this.$.ajax.generateRequest(),this.post&&this.post.Group&&this.post.Group.configuration&&this.post.Group.configuration.alternativePointForLabel?this.set("labelUp",this.post.Group.configuration.alternativePointForLabel):this.set("labelUp",this.t("point.for")),this.post&&this.post.Group&&this.post.Group.configuration&&this.post.Group.configuration.alternativePointAgainstLabel?this.set("labelDown",this.post.Group.configuration.alternativePointAgainstLabel):this.set("labelDown",this.t("point.against")))},removeElementsByClass:function(t,e){for(var i=t.getElementsByClassName(e);i.length>0;)i[0].parentNode.removeChild(i[0])},_processStoredPoints:function(){if(console.info("_processStoredPoints"),null===this.upPoints)if(this.storedPoints&&this.storedPoints.length>0){for(var t=[],e=[],i=0;i<this.storedPoints.length;i++)this.storedPoints[i].value>0?t.push(this.storedPoints[i]):this.storedPoints[i].value<0&&e.push(this.storedPoints[i]);this.set("upPoints",t),this.set("downPoints",e)}else this.set("upPoints",[]),this.set("downPoints",[]),this.set("points",[]);else console.log("Landscape points already setup");this.largeMode||this.points||this.set("points",this.interleaveArrays(this.upPoints,this.downPoints))},_response:function(t,e){this.set("storedPoints",this._preProcessPoints(e.response.points)),this._processStoredPoints(),this.removeElementsByClass(this,"inserted-outside-list"),this._updateCounterInfo(),this._scrollPointIntoView(),this._checkForMultipleLanguages()},_updatePointInLists:function(t,e){this.upPoints.forEach(function(t,i){t.id===e.id&&(this.upPoints[i]=e)}.bind(this)),this.downPoints.forEach(function(t,i){t.id===e.id&&(this.downPoints[i]=e)}.bind(this)),this.points&&this.points.length>0&&this.points.forEach(function(t,i){t.id===e.id&&(this.points[i]=e)}.bind(this))},_checkForMultipleLanguages:function(){if(!localStorage.getItem("dontPromptForAutoTranslation")&&!sessionStorage.getItem("dontPromptForAutoTranslation")){var t,e=!1;this.upPoints.forEach((function(i){i.language&&!e&&(t||"??"===i.language?t&&t!==i.language&&"??"!==i.language&&(e=!0,console.info("Multiple point languages: "+t+" and "+i.language)):t=i.language)})),e||this.downPoints.forEach((function(i){i.language&&!e&&(t||"??"===i.language?t&&t!=i.language&&"??"!==i.language&&(e=!0,console.info("Multiple point languages: "+t+" and "+i.language)):t=i.language)}))}},interleaveArrays:function(t,e){for(var i=[t,e],n=Math.max.apply(Math,i.map((function(t){return t.length}))),o=[],r=0;r<n;++r)i.forEach((function(t){t.length>r&&o.push(t[r])}));return o},_scrollPointIntoView:function(){this.scrollToId&&this.async((function(){var t=!1;this.largeMode?(this.upPoints.forEach(function(e){t||e.id!=this.scrollToId||(this.$$("#ironListUp").scrollToItem(e),t=!0)}.bind(this)),t||this.downPoints.forEach(function(e){t||e.id!=this.scrollToId||(this.$$("#ironListDown").scrollToItem(e),t=!0)}.bind(this))):this.points.forEach(function(e){t||e.id!=this.scrollToId||(this.$$("#ironListMobile").scrollToItem(e),t=!0)}.bind(this)),t&&this.async((function(){var t=this.$$("#point"+this.scrollToId);t?(t.elevation=5,t.elevation=1,t.elevation=5,this.async(function(){t.elevation=1}.bind(this),7e3)):console.warn("Can't find point to elevate"),this.set("scrollToId",null)}),50)}),20)},_floatIfValueOrIE:function(t){return/Trident.*rv[ :]*11\./.test(navigator.userAgent)||t},_preProcessPoints:function(t){for(var e=0;e<t.length;e++)(!this.latestPointCreatedAt||!this.latestPointCreatedAt||t[e].created_at>this.latestPointCreatedAt)&&this.set("latestPointCreatedAt",t[e].created_at),t[e].PointRevisions[t[e].PointRevisions.length-1]&&t[e].PointRevisions[t[e].PointRevisions.length-1].content?t[e].latestContent=t[e].PointRevisions[t[e].PointRevisions.length-1].content:console.warn("No content for point in _preProcessPoints");return t},_updateCounterInfo:function(){this.largeMode?this.fire("yp-debate-info",{count:this.upPoints.length+this.downPoints.length,firstPoint:this.upPoints[0]}):this.fire("yp-debate-info",{count:this.points.length,firstPoint:this.points[0]})},_insertNewPoint:function(t){this.largeMode?t.value>0?(this.unshift("upPoints",t),this.async((function(){this.$$("#ironListUp").fire("iron-resize")}),700)):t.value<0&&(this.unshift("downPoints",t),this.async((function(){this.$$("#ironListDown").fire("iron-resize")}),700)):(this.unshift("points",t),this.async((function(){this.$$("#ironListMobile").fire("iron-resize")}),700))},_newPointResponse:function(t,e){if(this.currentVideoId){var i=this._preProcessPoints([e.response])[0];(n=document.createElement("iron-ajax")).handleAs="json",n.contentType="application/json",n.url="/api/videos/"+i.id+"/completeAndAddToPoint",n.method="PUT",n.body={videoId:this.currentVideoId,appLanguage:this.language},n.addEventListener("response",function(t,e){this._completeNewPointResponse(t,t.detail)}.bind(this)),n.generateRequest()}else if(this.currentAudioId){var n;i=this._preProcessPoints([e.response])[0];(n=document.createElement("iron-ajax")).handleAs="json",n.contentType="application/json",n.url="/api/audios/"+i.id+"/completeAndAddToPoint",n.method="PUT",n.body={audioId:this.currentAudioId,appLanguage:this.language},n.addEventListener("response",function(t,e){this._completeNewPointResponse(t,t.detail)}.bind(this)),n.generateRequest()}else this._completeNewPointResponse(t,e)},_completeNewPointResponse:function(t,e){this.set("addPointDisabled",!1);var i=this._preProcessPoints([e.response])[0];this.currentVideoId?i.checkTranscriptFor="video":this.currentAudioId&&(i.checkTranscriptFor="audio"),i.value>0?(this.newPointTextCombined=this.t("point.forAdded")+" "+this.truncate(i.content,21),this.set("textValueUp","")):(this.newPointTextCombined=this.t("point.againstAdded")+" "+this.truncate(i.content,21),this.set("textValueDown","")),this.set("textValueMobileUpOrDown",""),this._insertNewPoint(i),this.set("post.counter_points",this.post.counter_points+1),this.$.newPointToast.show(),this._updateCounterInfo(),this._clearVideo(),this._clearAudio()},addPointUp:function(){this.addPoint(this.textValueUp,1,this.uploadedVideoUpId,this.uploadedAudioUpId),window.appGlobals.activity("add","pointUp")},addPointDown:function(){this.addPoint(this.textValueDown,-1,this.uploadedVideoDownId,this.uploadedAudioDownId),window.appGlobals.activity("add","pointDown")},addMobilePointUpOrDown:function(){"pointFor"==this.pointUpOrDownSelected?(this.addPoint(this.textValueMobileUpOrDown,1,this.uploadedVideoMobileId,this.uploadedAudioMobileId),window.appGlobals.activity("add","pointUp")):"pointAgainst"==this.pointUpOrDownSelected&&(this.addPoint(this.textValueMobileUpOrDown,-1,this.uploadedVideoMobileId,this.uploadedAudioMobileId),window.appGlobals.activity("add","pointDown"))},addPoint:function(t,e,i,n){!0===window.appUser.loggedIn()?(this.$.newPointAjax.url="/api/points/"+this.post.group_id,this.$.newPointAjax.body={postId:this.post.id,content:t,value:e},this.$.newPointAjax.generateRequest(),this.set("addPointDisabled",!0),i?this.set("currentVideoId",i):n&&this.set("currentAudioId",n)):window.appUser.loginForNewPoint(this,{content:t,value:e})},focusUpPoint:function(){},focusDownPoint:function(){},focusTextArea:function(t){t.currentTarget.parentElement.elevation=3},blurTextArea:function(t){t.currentTarget.parentElement.elevation=1},_hasCurrentUpVideo:function(t){t?(this.set("hideUpAudio",!0),this.set("hideUpText",!0)):(this.set("hideUpAudio",!1),this.set("hideUpText",!1))},_hasCurrentDownVideo:function(t){t?(this.set("hideDownAudio",!0),this.set("hideDownText",!0)):(this.set("hideDownAudio",!1),this.set("hideDownText",!1))},_hasCurrentUpAudio:function(t){t?(this.set("hideUpVideo",!0),this.set("hideUpText",!0)):(this.set("hideUpVideo",!1),this.set("hideUpText",!1))},_hasCurrentDownAudio:function(t){t?(this.set("hideDownVideo",!0),this.set("hideDownText",!0)):(this.set("hideDownVideo",!1),this.set("hideDownText",!1))},_hasCurrentMobileVideo:function(t){t?(this.set("hideMobileAudio",!0),this.set("hideMobileText",!0)):(this.set("hideMobileAudio",!1),this.set("hideMobileText",!1))},_hasCurrentMobileAudio:function(t){t?(this.set("hideMobileVideo",!0),this.set("hideMobileText",!0)):(this.set("hideMobileVideo",!1),this.set("hideMobileText",!1))},ifLengthIsRight:function(t,e,i,n){return null!=i?("up"===t&&(this.set("hideUpVideo",!1),this.set("hideUpAudio",!0),this.set("hideUpText",!0)),"down"===t&&(this.set("hideDownVideo",!1),this.set("hideDownAudio",!0),this.set("hideDownText",!0)),"mobile"===t&&(this.set("hideMobileVideo",!1),this.set("hideMobileAudio",!0),this.set("hideMobileText",!0)),!0):null!=n?("up"===t&&(this.set("hideUpAudio",!1),this.set("hideUpVideo",!0),this.set("hideUpText",!0)),"down"===t&&(this.set("hideDownAudio",!1),this.set("hideDownVideo",!0),this.set("hideDownText",!0)),"mobile"===t&&(this.set("hideMobileAudio",!1),this.set("hideMobileVideo",!0),this.set("hideMobileText",!0)),!0):null!=e&&0===e.length?("up"===t&&(this.set("hideUpVideo",!1),this.set("hideUpAudio",!1),this.set("hideUpText",!1)),"down"===t&&(this.set("hideDownVideo",!1),this.set("hideDownAudio",!1),this.set("hideDownText",!1)),"mobile"===t&&(this.set("hideMobileVideo",!1),this.set("hideMobileAudio",!1),this.set("hideMobileText",!1)),!1):null!=e&&e.length>0?("up"===t&&(this.set("hideUpVideo",!0),this.set("hideUpAudio",!0),this.set("hideUpText",!1)),"down"===t&&(this.set("hideDownVideo",!0),this.set("hideDownAudio",!0),this.set("hideDownText",!1)),"mobile"===t&&(this.set("hideMobileVideo",!0),this.set("hideMobileAudio",!0),this.set("hideMobileText",!1)),!0):null!=e&&e.length>1}});let Z;n({_template:i(Z||(Z=(t=>t)`
    <style include="iron-flex iron-flex-alignment">
      :host {
        background: transparent;
      }

      .large {
        height: 64px !important;
        width: 64px !important;
        --paper-spinner-stroke-width: 7px;
      }

      paper-spinner {
        background: transparent;
      }

      paper-spinner[active] {
        display: block;
      }

      paper-spinner {
        margin-top: 8px;
        display: none;
      }

      [hidden] {
        display: none !important;
      }
    </style>

    <paper-spinner id="spinner" hidden\$="[[!useSpinner]]"></paper-spinner>

    <iron-ajax id="ajax" url="[[url]]" params="[[params]]" auto="[[auto]]" method="[[method]]" body="[[body]]" bubbles="" handle-as="json" content-type="application/json" on-error="_error" on-response="_response" loading="{{loading}}">
    </iron-ajax>
`)),is:"yp-ajax",behaviors:[k],properties:{url:{type:String,value:""},method:{type:String,value:"GET"},loading:{type:Boolean},params:{type:Object,value:{}},body:{type:Object,notify:!0},auto:{type:Boolean,value:!1},errorText:{type:String,value:""},useDialog:{type:Boolean,value:!0,notify:!0},useSpinner:{type:Boolean,value:!0},largeSpinner:{type:Boolean,value:!1},dispatchError:{type:Boolean,value:!1},retryMethodAfter401Login:{type:Function,value:null},active:{type:Boolean,reflectToAttribute:!0,notify:!0},disableUserError:{type:Boolean,value:!1}},_response:function(t){this._setActive(!1)},ready:function(){this.auto&&this._setActive(!0),this.largeSpinner&&this.$.spinner.toggleClass("large",!0)},_setActive:function(t){this.set("active",t),this.$.spinner.active=t},_error:function(t){this._setActive(!1),this.dispatchError?(t.stopPropagation(),t.detail.request.xhr.response&&t.detail.request.xhr.response.error?this.fire("error",t.detail.request.xhr.response.error):t.detail.request.xhr.response&&t.detail.request.xhr.response.message?this.fire("error",t.detail.request.xhr.response.message):t.detail.request.xhr.statusText?this.fire("error",t.detail.request.xhr.statusText):this.fire("error",t.detail.error)):t.detail.error&&t.detail.error.message&&this._is401(t.detail.error.message)&&!window.appUser.user&&this.retryMethodAfter401Login?window.appUser.loginFor401(this.retryMethodAfter401Login):this.useDialog&&!this.disableUserError&&this.showErrorDialog(t.detail.error)},_is401:function(t){return t&&t.indexOf("status code: 401")>-1},generateRequest:function(){this._setActive(!0),this.$.ajax.generateRequest()},setBody:function(t){this.$.ajax.body=t},_transformErrorText:function(t){return console.log(t),"string"==typeof t?t&&t.indexOf("status code: 404")>-1?this.t("errorNotFound"):t&&t.indexOf("status code: 500")>-1?this.t("generalError"):t&&t.indexOf("status code: 401")>-1?this.t("errorNotAuthorized"):t&&t.indexOf("503")>-1?this.t("errorCantConnect"):t:this.t("generalError")},showErrorDialog:function(t){var e;e=t.message?t.message:t,s(document).querySelector("yp-app").getDialogAsync("errorDialog",function(t){t.showErrorDialog(this._transformErrorText(e))}.bind(this))},_resetErrorText:function(t){s(document).querySelector("yp-app").getDialogAsync("errorDialog",(function(t){t.resetErrorText()}))}});let tt;n({_template:i(tt||(tt=(t=>t)`
    <style include="iron-flex iron-flex-alignment">
      :host {
      }

      .container {
        padding-top: 0;
        margin-top: -70px;
        height: 100%;
      }

      .flex {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      .centerContainer {
        @apply --layout-center-center;
      }

      .postHeader {
        padding: 16px;
        background-color: #fefefe;
        width: 940px;
      }

      .statusHeader {
        padding: 16px;
        background-color: #fefefe;
        width: 940px;
        margin-top: 16px;
        height: 48px;
      }

      .description {
        width: 510px;
        padding-left: 24px;
      }

      ac-activities {
        padding-top: 8px;
      }

      .statusColumn {
        width: 670px;
        padding-bottom: 16px;
      }

      .mainPage {
        background-color: #FFF;
      }

      yp-post-user-images {
        padding-top: 32px;
      }

      @media (max-width: 961px) {
        .postHeader {
          width: 600px;
        }
      }

      @media (max-width: 600px) {
        .postHeader {
          width: 400px;
        }
      }

      .createFab {
        position: fixed;
        bottom: 24px;
        right: 28px;
        background-color: var(--accent-color);
        color: #FFF;

        --paper-fab-iron-icon: {
          color: var(--icon-general-color, #FFF);
          height: 40px;
          width: 40px;
        }
      }

      .createFab[wide-layout] {
        width: 72px;
        height: 72px;
        --paper-fab-iron-icon: {
          color: var(--icon-general-color, #FFF);
          width: 72px;
          height: 72px;
        }
      }

      @media (max-width: 360px) {

        .centerContainer {
          @apply --layout-vertical;
        }

        .postHeader {
          height: 100%;
          width: 360px;
          padding: 0;
        }

        .tabsMaterial {
          width: 360px;
        }

        .statusHeader {
          width: 360px;
          height: 120px;
          padding: 0px;
          padding-left: 20px;
        }

        .statusColumn {
          height: 60px;
          padding: 0px;
        }

        .description {
          width: 320px;
          padding: 8px;
          padding-left: 20px;
          padding-bottom: 16px;
        }

        .statusColumn {
          width: 320px;
        }
      }

      yp-ajax {
        background-color: var(--primary-background-color);
      }

      .mapContainer {
        margin: 24px;
        width: 960px;
        height: 500px;
      }

      .counterInfo {
        font-size: 11px;
      }

      .topContainer {
        padding-top: 24px;
        background-image: var(--app-other-background-image);
        background-size: var(--app-other-background-size, 1920px 238px);
        background-repeat: no-repeat;
      }

      @media (max-width: 1048px) {
        .topContainer {
          padding-top: 60px;
        }
      }

      .tabs {
        margin-top: 24px;
      }

      @media (max-width: 934px) {
        .mapContainer {
          margin: 16px;
          width: 800px;
          height: 400px;
        }

        .topContainer {
          padding-top: 48px;
          background-image: none;
        }
      }

      @media (max-width: 832px) {
        .mapContainer {
          margin: 8px;
          width: 600px;
          height: 340px;
        }
      }

      @media (max-width: 632px) {
        .mapContainer {
          margin: 8px;
          width: 400px;
          height: 300px;
        }
      }

      @media (max-width: 420px) {
        .mapContainer {
          margin: 8px;
          width: 330px;
          height: 250px;
        }
      }

      @media (max-width: 360px) {
        .mapContainer {
          margin: 8px;
          width: 280px;
          height: 200px;
        }
      }


      .tabs {
        width: 1100px;
        padding-top: 8px;
        padding-bottom: 8px;
      }

      .tab {
        width: 250px;
      }

      @media (max-width: 1000px) {
        .tabs {
          width: 100%;
        }

        .tab {
          width: 200px;
        }
      }

      @media (max-width: 900px) {
        .tabs {
          max-width: 100%;
          font-size: 14px !important;
          word-wrap: break-word !important;
          margin-top: 8px;
          width: 100%;
          margin-bottom: 16px;
        }

        .tabs .tab {
          width: 100%;
          word-wrap: break-word !important;
          margin-left: 8px;
          margin-right: 8px;
        }

        .topArea {
          height: 300px;
        }

        .topArea[is-post] {
          min-height: 470px;
        }
      }

      @media (max-width: 380px) {
        .tabs {
          font-size: 12px !important;
        }

        .topArea[is-post] {
          min-height: 530px;
        }

        ac-activities {
          min-height: 600px !important;
        }
      }

      @media (max-width: 360px) {
        .tabs {
          font-size: 10px !important;
        }
      }

      .minHeightSection {
        min-height: 450px;
      }

      [hidden] {
        display: none !important;
      }

      paper-icon-button.closeButton {
        width: 58px;
        height: 58px;
        position: absolute;
        top: 8px;
        left: 8px;
      }

      @media (max-width: 640px) {
        paper-icon-button {
          width: 40px;
          height: 40px;
        }

        paper-icon-button.closeButton {
          width: 46px;
          height: 46px;
          top: 4px;
          left: 4px;
          color: #555;
        }

        yp-post-points  {
          margin-top: 16px;
        }
      }
    </style>

    <div class="topContainer layout vertical center-center" is-post="" create-fab-title="[[t('point.add')]]" on-yp-create-fab-tap="_newPoint">
      <paper-icon-button class="closeButton" icon="closeExit" on-tap="_close"></paper-icon-button>
      <yp-post-header id="postCard" class="largeCard" post="[[post]]" on-refresh="_refreshAjax" header-mode=""></yp-post-header>

      <yp-post-points host="[[host]]" id="pointsSection" post="[[post]]" scroll-to-id\$="[[scrollToPointId]]"></yp-post-points>
    </div>

    <div class="layout horizontal center-center">
      <yp-ajax id="ajax" on-response="_handleIncomingPostResponse"></yp-ajax>
    </div>
    <iron-media-query query="(min-width: 1024px)" query-matches="{{wideWidth}}"></iron-media-query>
`)),is:"yp-post",behaviors:[I,T,C,k],properties:{idRoute:Object,tabRoute:Object,idRouteData:Object,tabRouteData:Object,postId:{type:Number,value:null,observer:"_postIdChanged"},host:String,post:{type:Object,value:null,notify:!0,observer:"_postChanged"},selectedTab:{type:String,value:"debate",observer:"_selectedTabChanged"},small:{type:Boolean},method:{type:String},mapActive:{type:Boolean,value:!1},wideWidth:{type:Boolean,value:!1},createFabIcon:{type:String,value:"lightbulb-outline"},disableNewPosts:{type:Boolean,value:!1},scrollToPointId:{type:String,value:null},locationHidden:{type:Boolean,value:!1}},observers:["_routeIdChanged(idRouteData.id)","_routeTabChanged(tabRouteData.tabName)"],_routeIdChanged:function(t){t&&this.set("postId",t)},_routeTabChanged:function(t){t&&!this._isNumber(t)?this.set("selectedTab",t):t&&this._isNumber(t)&&(this.set("scrollToPointId",t),this.set("selectedTab","debate"))},_isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},_selectedTabChanged:function(t){this.post&&this.redirectTo("/post/"+this.post.id+"/"+t),"location"==t?this.set("mapActive",!0):this.set("mapActive",!1),t&&window.appGlobals&&window.appGlobals.activity("open","post_tab_"+t,"",{id:this.postId,modelType:"post"}),this.async((function(){var t=this.$$("#postNews");t&&t.fireResize()}),300)},listeners:{"yp-debate-info":"_updateDebateInfo","yp-post-image-count":"_updatePostImageCount"},_updatePostImageCount:function(t,e){var i=this.$$("#tabCountPhotos");i&&(i.innerHTML=this.formatNumber(e))},_close:function(){window.history.back()},_updateDebateInfo:function(t,e){var i=this.$$("#tabCountDebate");i&&(i.innerHTML=this.formatNumber(e.count)),e.firstPoint&&this.$.postCard.updateDescriptionIfEmpty(e.firstPoint.content)},_mainContainerClasses:function(t){return t?"layout horizontal wrap":"layout horizontal center-center"},_headerClasses:function(t){return t?"layout vertical postHeader wrap":"layout horizontal postHeader"},postName:function(t){return t&&t.name?this.truncate(this.trim(t.name),200):t?t.short_name:void 0},postDescription:function(t){return t&&t.description?this.truncate(this.trim(t.description),1e4,"..."):""},_refreshAjax:function(){this.$.ajax.generateRequest()},_postChanged:function(t,e){},_postIdChanged:function(t){console.log("Got post from server not cache"),this.set("post",null),t&&(this._getPost(),this.set("selectedTab","debate"))},_setupAjaxUrl:function(){this.host?this.$.ajax.url=this.host+"/api/posts/"+this.postId:this.$.ajax.url="/api/posts/"+this.postId},_pagesResponse:function(t,e){this.fire("yp-set-pages",e.response)},_structuredAnswersFormatted:function(t,e,i){if(t&&t.public_data&&t.public_data.structuredAnswersJson&&t.Group.configuration&&t.Group.configuration.structuredQuestionsJson){var n=t.Group.configuration.structuredQuestionsJson,o=t.public_data.structuredAnswersJson;e&&i&&(n=e,o=i);var r={},s={},a={},d="";return n.forEach(function(t){t.uniqueId?r[t.uniqueId]=t:(t.showBeforeAnswerId&&(s[t.showBeforeAnswerId]=t),t.showAfterAnswerId&&(a[t.showAfterAnswerId]=t))}.bind(this)),o.forEach(function(t){if(t){var e=r[t.uniqueId];e&&(s[t.uniqueId]&&(d+=s[t.uniqueId].text+"\n\n"),d+=e.text+"\n",t.value?d+=t.value+"\n\n":d+="\n\n",a[t.uniqueId]&&(d+=a[t.uniqueId].text+"\n\n"))}}.bind(this)),d}return""},_getPost:function(){this._setupAjaxUrl(),this.$$("#ajax").retryMethodAfter401Login=this._getPost.bind(this),this.$.ajax.generateRequest()},_handleIncomingPostResponse:function(t,e){const i=e.response;i.description||(i.description=this._structuredAnswersFormatted(i)),this.set("post",i),this.refresh(),this.post.Group.configuration&&null!=this.post.Group.configuration.canAddNewPosts?!0===this.post.Group.configuration.canAddNewPosts?this.set("disableNewPosts",!1):this.set("disableNewPosts",!0):this.set("disableNewPosts",!1)},_processRecommendation:function(t){if(t&&this.post){var e=t.name;e=this.wideWidth?this.truncate(e,60):this.truncate(e,30),this.fire("yp-set-next-post",{currentPostId:this.post.id,goForwardToPostId:t.id,goForwardPostName:e})}else this.fire("yp-set-next-post",{currentPostId:this.post.id,goForwardToPostId:null,goForwardPostName:null}),console.log("Not recommended post")},refresh:function(){this.post&&(null!=this.post.Group.theme_id||this.post.Group.configuration&&null!=this.post.Group.configuration.themeOverrideColorPrimary||this.post.Group.Community&&(null!=this.post.Group.Community.theme_id||this.post.Group.Community.configuration&&this.post.Group.Community.configuration.themeOverrideColorPrimary),this.post.Group.Community||console.error("No community!"))},setupTopHeaderImage:function(t){var e="url("+this.getImageFormatUrl(t,0)+")";this.updateStyles({"--top-area-background-image":e})},computeUrl:function(t){return"/api/posts/"+t}});
