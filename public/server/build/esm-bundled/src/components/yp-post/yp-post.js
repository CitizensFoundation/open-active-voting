import{Polymer,Base,html as html$1,IronResizableBehavior,IronScrollTargetBehavior,OptionalMutableDataBehavior,dom,Templatizer,animationFrame,microTask,idlePeriod,Debouncer,flush,enqueueDebouncer,matches,translate,PaperCheckedElementBehavior,afterNextRender,IronMenubarBehavior,IronMenubarBehaviorImpl,IronSelectableBehavior,PolymerElement}from"../oav-app.js";Polymer({is:"iron-request",hostAttributes:{hidden:!0},properties:{xhr:{type:Object,notify:!0,readOnly:!0,value:function(){return new XMLHttpRequest}},response:{type:Object,notify:!0,readOnly:!0,value:function(){return null}},status:{type:Number,notify:!0,readOnly:!0,value:0},statusText:{type:String,notify:!0,readOnly:!0,value:""},completes:{type:Object,readOnly:!0,notify:!0,value:function(){return new Promise(function(resolve,reject){this.resolveCompletes=resolve;this.rejectCompletes=reject}.bind(this))}},progress:{type:Object,notify:!0,readOnly:!0,value:function(){return{}}},aborted:{type:Boolean,notify:!0,readOnly:!0,value:!1},errored:{type:Boolean,notify:!0,readOnly:!0,value:!1},timedOut:{type:Boolean,notify:!0,readOnly:!0,value:!1}},get succeeded(){if(this.errored||this.aborted||this.timedOut){return!1}var status=this.xhr.status||0;return 0===status||200<=status&&300>status},send:function(options){var xhr=this.xhr;if(0<xhr.readyState){return null}xhr.addEventListener("progress",function(progress){this._setProgress({lengthComputable:progress.lengthComputable,loaded:progress.loaded,total:progress.total});this.fire("iron-request-progress-changed",{value:this.progress})}.bind(this));xhr.addEventListener("error",function(error){this._setErrored(!0);this._updateStatus();var response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("timeout",function(error){this._setTimedOut(!0);this._updateStatus();var response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("abort",function(){this._setAborted(!0);this._updateStatus();var error=new Error("Request aborted."),response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("loadend",function(){this._updateStatus();this._setResponse(this.parseResponse());if(!this.succeeded){var error=new Error("The request failed with status code: "+this.xhr.status),response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response);return}this.resolveCompletes(this)}.bind(this));this.url=options.url;var isXHRAsync=!1!==options.async;xhr.open(options.method||"GET",options.url,isXHRAsync);var acceptType={json:"application/json",text:"text/plain",html:"text/html",xml:"application/xml",arraybuffer:"application/octet-stream"}[options.handleAs],headers=options.headers||Object.create(null),newHeaders=Object.create(null);for(var key in headers){newHeaders[key.toLowerCase()]=headers[key]}headers=newHeaders;if(acceptType&&!headers.accept){headers.accept=acceptType}Object.keys(headers).forEach(function(requestHeader){if(/[A-Z]/.test(requestHeader)){Base._error("Headers must be lower case, got",requestHeader)}xhr.setRequestHeader(requestHeader,headers[requestHeader])},this);if(isXHRAsync){xhr.timeout=options.timeout;var handleAs=options.handleAs;if(!!options.jsonPrefix||!handleAs){handleAs="text"}xhr.responseType=xhr._responseType=handleAs;if(!!options.jsonPrefix){xhr._jsonPrefix=options.jsonPrefix}}xhr.withCredentials=!!options.withCredentials;var body=this._encodeBodyObject(options.body,headers["content-type"]);xhr.send(body);return this.completes},parseResponse:function(){var xhr=this.xhr,responseType=xhr.responseType||xhr._responseType,preferResponseText=!this.xhr.responseType,prefixLen=xhr._jsonPrefix&&xhr._jsonPrefix.length||0;try{switch(responseType){case"json":if(preferResponseText||xhr.response===void 0){try{return JSON.parse(xhr.responseText)}catch(_){console.warn("Failed to parse JSON sent from "+xhr.responseURL);return null}}return xhr.response;case"xml":return xhr.responseXML;case"blob":case"document":case"arraybuffer":return xhr.response;case"text":default:{if(prefixLen){try{return JSON.parse(xhr.responseText.substring(prefixLen))}catch(_){console.warn("Failed to parse JSON sent from "+xhr.responseURL);return null}}return xhr.responseText}}}catch(e){this.rejectCompletes(new Error("Could not parse response. "+e.message))}},abort:function(){this._setAborted(!0);this.xhr.abort()},_encodeBodyObject:function(body,contentType){if("string"==typeof body){return body}var bodyObj=body;switch(contentType){case"application/json":return JSON.stringify(bodyObj);case"application/x-www-form-urlencoded":return this._wwwFormUrlEncode(bodyObj);}return body},_wwwFormUrlEncode:function(object){if(!object){return""}var pieces=[];Object.keys(object).forEach(function(key){pieces.push(this._wwwFormUrlEncodePiece(key)+"="+this._wwwFormUrlEncodePiece(object[key]))},this);return pieces.join("&")},_wwwFormUrlEncodePiece:function(str){if(null===str||str===void 0||!str.toString){return""}return encodeURIComponent(str.toString().replace(/\r?\n/g,"\r\n")).replace(/%20/g,"+")},_updateStatus:function(){this._setStatus(this.xhr.status);this._setStatusText(this.xhr.statusText===void 0?"":this.xhr.statusText)}});Polymer({is:"iron-ajax",hostAttributes:{hidden:!0},properties:{url:{type:String},params:{type:Object,value:function(){return{}}},method:{type:String,value:"GET"},headers:{type:Object,value:function(){return{}}},contentType:{type:String,value:null},body:{type:Object,value:null},sync:{type:Boolean,value:!1},handleAs:{type:String,value:"json"},withCredentials:{type:Boolean,value:!1},timeout:{type:Number,value:0},auto:{type:Boolean,value:!1},verbose:{type:Boolean,value:!1},lastRequest:{type:Object,notify:!0,readOnly:!0},lastProgress:{type:Object,notify:!0,readOnly:!0},loading:{type:Boolean,notify:!0,readOnly:!0},lastResponse:{type:Object,notify:!0,readOnly:!0},lastError:{type:Object,notify:!0,readOnly:!0},activeRequests:{type:Array,notify:!0,readOnly:!0,value:function(){return[]}},debounceDuration:{type:Number,value:0,notify:!0},jsonPrefix:{type:String,value:""},bubbles:{type:Boolean,value:!1},rejectWithRequest:{type:Boolean,value:!1},_boundHandleResponse:{type:Function,value:function(){return this._handleResponse.bind(this)}}},observers:["_requestOptionsChanged(url, method, params.*, headers, contentType, "+"body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)"],created:function(){this._boundOnProgressChanged=this._onProgressChanged.bind(this)},get queryString(){var queryParts=[],param,value;for(param in this.params){value=this.params[param];param=window.encodeURIComponent(param);if(Array.isArray(value)){for(var i=0;i<value.length;i++){queryParts.push(param+"="+window.encodeURIComponent(value[i]))}}else if(null!==value){queryParts.push(param+"="+window.encodeURIComponent(value))}else{queryParts.push(param)}}return queryParts.join("&")},get requestUrl(){var queryString=this.queryString,url=this.url||"";if(queryString){var bindingChar=0<=url.indexOf("?")?"&":"?";return url+bindingChar+queryString}return url},get requestHeaders(){var headers={},contentType=this.contentType;if(null==contentType&&"string"===typeof this.body){contentType="application/x-www-form-urlencoded"}if(contentType){headers["content-type"]=contentType}var header;if("object"===typeof this.headers){for(header in this.headers){headers[header]=this.headers[header].toString()}}return headers},_onProgressChanged:function(event){this._setLastProgress(event.detail.value)},toRequestOptions:function(){return{url:this.requestUrl||"",method:this.method,headers:this.requestHeaders,body:this.body,async:!this.sync,handleAs:this.handleAs,jsonPrefix:this.jsonPrefix,withCredentials:this.withCredentials,timeout:this.timeout,rejectWithRequest:this.rejectWithRequest}},generateRequest:function(){var request=document.createElement("iron-request"),requestOptions=this.toRequestOptions();this.push("activeRequests",request);request.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this,request)).then(this._discardRequest.bind(this,request));var evt=this.fire("iron-ajax-presend",{request:request,options:requestOptions},{bubbles:this.bubbles,cancelable:!0});if(evt.defaultPrevented){request.abort();request.rejectCompletes(request);return request}if(this.lastRequest){this.lastRequest.removeEventListener("iron-request-progress-changed",this._boundOnProgressChanged)}request.addEventListener("iron-request-progress-changed",this._boundOnProgressChanged);request.send(requestOptions);this._setLastProgress(null);this._setLastRequest(request);this._setLoading(!0);this.fire("request",{request:request,options:requestOptions},{bubbles:this.bubbles,composed:!0});this.fire("iron-ajax-request",{request:request,options:requestOptions},{bubbles:this.bubbles,composed:!0});return request},_handleResponse:function(request){if(request===this.lastRequest){this._setLastResponse(request.response);this._setLastError(null);this._setLoading(!1)}this.fire("response",request,{bubbles:this.bubbles,composed:!0});this.fire("iron-ajax-response",request,{bubbles:this.bubbles,composed:!0})},_handleError:function(request,error){if(this.verbose){Base._error(error)}if(request===this.lastRequest){this._setLastError({request:request,error:error,status:request.xhr.status,statusText:request.xhr.statusText,response:request.xhr.response});this._setLastResponse(null);this._setLoading(!1)}this.fire("iron-ajax-error",{request:request,error:error},{bubbles:this.bubbles,composed:!0});this.fire("error",{request:request,error:error},{bubbles:this.bubbles,composed:!0})},_discardRequest:function(request){var requestIndex=this.activeRequests.indexOf(request);if(-1<requestIndex){this.splice("activeRequests",requestIndex,1)}},_requestOptionsChanged:function(){this.debounce("generate-request",function(){if(null==this.url){return}if(this.auto){this.generateRequest()}},this.debounceDuration)}});const template=html$1`
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
`;template.setAttribute("style","display: none;");document.head.appendChild(template.content);var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),IOS_TOUCH_SCROLLING=IOS&&8<=IOS[1],DEFAULT_PHYSICAL_COUNT=3,HIDDEN_Y="-10000px",SECRET_TABINDEX=-100;Polymer({_template:html$1`
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
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[Templatizer,IronResizableBehavior,IronScrollTargetBehavior,OptionalMutableDataBehavior],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},get _itemsParent(){return dom(dom(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(val){val=val%this._physicalCount;if(0>val){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(null==idx){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems(function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}})||0;this._firstVisibleIndexVal=idx}return idx},get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(null==idx){if(this.grid){idx=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems(function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)})}this._lastVisibleIndexVal=idx}return idx},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,animationFrame);this.listen(this,"iron-resize","_resizeHandler");this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler");this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(scrollTarget){this.style.webkitOverflowScrolling=scrollTarget===this?"touch":"";this.style.overflowY=scrollTarget===this?"auto":"";this._lastVisibleIndexVal=null;this._firstVisibleIndexVal=null;this._debounce("_render",this._render,animationFrame)},updateViewportBoundaries:function(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=!!("rtl"===styles.direction);this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var scrollTop=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),delta=scrollTop-this._scrollPosition,isScrollingDown=0<=delta;this._scrollPosition=scrollTop;this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(Math.abs(delta)>this._physicalSize&&0<this._physicalSize){delta=delta-this._scrollOffset;var idxAdjustment=Math.round(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;this._update()}else if(0<this._physicalCount){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),microTask)}},_getReusables:function(fromTop){var ith,lastIth,offsetContent,physicalItemHeight,idxs=[],protectedOffsetContent=this._hiddenContentSize*this._ratio,virtualStart=this._virtualStart,virtualEnd=this._virtualEnd,physicalCount=this._physicalCount,top=this._physicalTop+this._scrollOffset,bottom=this._physicalBottom+this._scrollOffset,scrollTop=this._scrollTop,scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;lastIth=this._physicalEnd;offsetContent=scrollTop-top}else{ith=this._physicalEnd;lastIth=this._physicalStart;offsetContent=bottom-scrollBottom}while(!0){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){if(virtualEnd+idxs.length+1>=this._virtualCount){break}if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{if(0>=virtualStart-idxs.length){break}if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=0===ith?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},_update:function(itemSet,movingUp){if(itemSet&&0===itemSet.length||0===this._physicalCount){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},_createPool:function(size){this._ensureTemplatized();var i,inst,physicalItems=Array(size);for(i=0;i<size;i++){inst=this.stamp(null);physicalItems[i]=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}return physicalItems},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(count){var _Mathround=Math.round,nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);if(this.grid){var correction=nextPhysicalCount%this._itemsPerRow;if(correction&&nextPhysicalCount-correction<=this._physicalCount){nextPhysicalCount+=this._itemsPerRow}nextPhysicalCount-=correction}var delta=nextPhysicalCount-this._physicalCount,nextIncrease=_Mathround(.5*this._physicalCount);if(0>delta){return}if(0<delta){var ts=window.performance.now();[].push.apply(this._physicalItems,this._createPool(delta));for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=_Mathround(.5*this._physicalCount)}if(this._virtualEnd>=this._virtualCount-1||0===nextIncrease){}else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),microTask)}else if(this._physicalSize<this._optPhysicalSize){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(_Mathround(50/this._templateCost),1,nextIncrease)),idlePeriod)}},_render:function(){if(!this.isAttached||!this._isVisible){return}if(0!==this._physicalCount){var reusables=this._getReusables(!0);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(0<this._virtualCount){this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},_ensureTemplatized:function(){if(this.ctor){return}this._userTemplate=this.queryEffectiveChildren("template");if(!this._userTemplate){console.warn("iron-list requires a template to be provided in light-dom")}var instanceProps={__key__:!0};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.selectedAs]=!0;instanceProps.tabIndex=!0;this._instanceProps=instanceProps;this.templatize(this._userTemplate,this.mutableData)},_gridChanged:function(newGrid,oldGrid){if("undefined"===typeof oldGrid)return;this.notifyResize();flush();newGrid&&this._updateGridMetrics()},_itemsChanged:function(change){if("items"===change.path){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,animationFrame)}else if("items.splices"===change.path){this._adjustVirtualIndex(change.value.indexSplices);this._virtualCount=this.items?this.items.length:0;var itemAddedOrRemoved=change.value.indexSplices.some(function(splice){return 0<splice.addedCount||0<splice.removed.length});if(itemAddedOrRemoved){var activeElement=this._getActiveElement();if(this.contains(activeElement)){activeElement.blur()}}var affectedIndexRendered=change.value.indexSplices.some(function(splice){return splice.index+splice.addedCount>=this._virtualStart&&splice.index<=this._virtualEnd},this);if(!this._isClientFull()||affectedIndexRendered){this._debounce("_render",this._render,animationFrame)}}else if("items.length"!==change.path){this._forwardItemPath(change.path,change.value)}},_forwardItemPath:function(path,value){path=path.slice(6);var dot=path.indexOf(".");if(-1===dot){dot=path.length}var isIndexRendered,pidx,inst,offscreenInstance=this.modelForElement(this._offscreenFocusedItem),vidx=parseInt(path.substring(0,dot),10);isIndexRendered=this._isIndexRendered(vidx);if(isIndexRendered){pidx=this._getPhysicalIndex(vidx);inst=this.modelForElement(this._physicalItems[pidx])}else if(offscreenInstance){inst=offscreenInstance}if(!inst||inst[this.indexAs]!==vidx){return}path=path.substring(dot+1);path=this.as+(path?"."+path:"");inst._setPendingPropertyOrPath(path,value,!1,!0);inst._flushProperties&&inst._flushProperties(!0);if(isIndexRendered){this._updateMetrics([pidx]);this._positionItems();this._updateScrollerSize()}},_adjustVirtualIndex:function(splices){splices.forEach(function(splice){splice.removed.forEach(this._removeItem,this);if(splice.index<this._virtualStart){var delta=Math.max(splice.addedCount-splice.removed.length,splice.index-this._virtualStart);this._virtualStart=this._virtualStart+delta;if(0<=this._focusedVirtualIndex){this._focusedVirtualIndex=this._focusedVirtualIndex+delta}}},this)},_removeItem:function(item){this.$.selector.deselect(item);if(this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===item){this._removeFocusedItem()}},_iterateItems:function(fn,itemSet){var pidx,vidx,rtn,i;if(2===arguments.length&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}},_computeVidx:function(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},_assignModels:function(itemSet){this._iterateItems(function(pidx,vidx){var el=this._physicalItems[pidx],item=this.items&&this.items[vidx];if(null!=item){var inst=this.modelForElement(el);inst.__key__=null;this._forwardProperty(inst,this.as,item);this._forwardProperty(inst,this.selectedAs,this.$.selector.isSelected(item));this._forwardProperty(inst,this.indexAs,vidx);this._forwardProperty(inst,"tabIndex",this._focusedVirtualIndex===vidx?0:-1);this._physicalIndexForKey[inst.__key__]=pidx;inst._flushProperties&&inst._flushProperties(!0);el.removeAttribute("hidden")}else{el.setAttribute("hidden","")}},itemSet)},_updateMetrics:function(itemSet){var _Mathceil=Math.ceil;flush();var newPhysicalSize=0,oldPhysicalSize=0,prevAvgCount=this._physicalAverageCount,prevPhysicalAvg=this._physicalAverage;this._iterateItems(function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0},itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=_Mathceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=1===this._itemsPerRow?oldPhysicalSize:_Mathceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=Math.round((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},_updateGridMetrics:function(){this._itemWidth=0<this._physicalCount?this._physicalItems[0].getBoundingClientRect().width:200;this._rowHeight=0<this._physicalCount?this._physicalItems[0].offsetHeight:200;this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var y=this._physicalTop;if(this.grid){var totalItemWidth=this._itemsPerRow*this._itemWidth,rowOffset=(this._viewportWidth-totalItemWidth)/2;this._iterateItems(function(pidx,vidx){var modulus=vidx%this._itemsPerRow,x=Math.floor(modulus*this._itemWidth+rowOffset);if(this._isRTL){x=-1*x}this.translate3d(x+"px",y+"px",0,this._physicalItems[pidx]);if(this._shouldRenderNextRow(vidx)){y+=this._rowHeight}})}else{this._iterateItems(function(pidx,vidx){this.translate3d(0,y+"px",0,this._physicalItems[pidx]);y+=this._physicalSizes[pidx]})}},_getPhysicalSizeIncrement:function(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},_shouldRenderNextRow:function(vidx){return vidx%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var deltaHeight=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==deltaHeight){this._physicalTop=this._physicalTop-deltaHeight;var scrollTop=this._scrollTop;if(!IOS_TOUCH_SCROLLING&&0<scrollTop){this._resetScrollPosition(scrollTop-deltaHeight)}}},_resetScrollPosition:function(pos){if(this.scrollTarget&&0<=pos){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},_updateScrollerSize:function(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||0===this._scrollHeight;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;if(forceUpdate||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},scrollToItem:function(item){return this.scrollToIndex(this.items.indexOf(item))},scrollToIndex:function(idx){if("number"!==typeof idx||0>idx||idx>this.items.length-1){return}flush();if(0===this._physicalCount){return}idx=this._clamp(idx,0,this._virtualCount-1);if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-2*this._itemsPerRow:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart,currentVirtualItem=this._virtualStart,targetOffsetTop=0,hiddenContentSize=this._hiddenContentSize;while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(!0);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},_resetAverage:function(){this._physicalAverage=0;this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(this._isVisible){this.updateViewportBoundaries();this.toggleScrollListener(!0);this._resetAverage();this._render()}else{this.toggleScrollListener(!1)}},animationFrame)},selectItem:function(item){return this.selectIndex(this.items.indexOf(item))},selectIndex:function(index){if(0>index||index>=this._virtualCount){return}if(!this.multiSelection&&this.selectedItem){this.clearSelection()}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);if(model){model[this.selectedAs]=!0}this.updateSizeForIndex(index)}this.$.selector.selectIndex(index)},deselectItem:function(item){return this.deselectIndex(this.items.indexOf(item))},deselectIndex:function(index){if(0>index||index>=this._virtualCount){return}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);model[this.selectedAs]=!1;this.updateSizeForIndex(index)}this.$.selector.deselectIndex(index)},toggleSelectionForItem:function(item){return this.toggleSelectionForIndex(this.items.indexOf(item))},toggleSelectionForIndex:function(index){var isSelected=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(index):this.$.selector.isSelected(this.items[index]);isSelected?this.deselectIndex(index):this.selectIndex(index)},clearSelection:function(){this._iterateItems(function(pidx,vidx){this.modelForElement(this._physicalItems[pidx])[this.selectedAs]=!1});this.$.selector.clearSelection()},_selectionEnabledChanged:function(selectionEnabled){var handler=selectionEnabled?this.listen:this.unlisten;handler.call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var model=this.modelForElement(e.target);if(!model){return}var modelTabIndex,activeElTabIndex,target=dom(e).path[0],activeEl=this._getActiveElement(),physicalItem=this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];if("input"===target.localName||"button"===target.localName||"select"===target.localName){return}modelTabIndex=model.tabIndex;model.tabIndex=SECRET_TABINDEX;activeElTabIndex=activeEl?activeEl.tabIndex:-1;model.tabIndex=modelTabIndex;if(activeEl&&physicalItem!==activeEl&&physicalItem.contains(activeEl)&&activeElTabIndex!==SECRET_TABINDEX){return}this.toggleSelectionForItem(model[this.as])},_multiSelectionChanged:function(multiSelection){this.clearSelection();this.$.selector.multi=multiSelection},updateSizeForItem:function(item){return this.updateSizeForIndex(this.items.indexOf(item))},updateSizeForIndex:function(index){if(!this._isIndexRendered(index)){return null}this._updateMetrics([this._getPhysicalIndex(index)]);this._positionItems();return null},_manageFocus:function(){var fidx=this._focusedVirtualIndex;if(0<=fidx&&fidx<this._virtualCount){if(this._isIndexRendered(fidx)){this._restoreFocusedItem()}else{this._createFocusBackfillItem()}}else if(0<this._virtualCount&&0<this._physicalCount){this._focusedPhysicalIndex=this._physicalStart;this._focusedVirtualIndex=this._virtualStart;this._focusedItem=this._physicalItems[this._physicalStart]}},_convertIndexToCompleteRow:function(idx){this._itemsPerRow=this._itemsPerRow||1;return this.grid?Math.ceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_isIndexVisible:function(idx){return idx>=this.firstVisibleIndex&&idx<=this.lastVisibleIndex},_getPhysicalIndex:function(vidx){return(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount},focusItem:function(idx){this._focusPhysicalItem(idx)},_focusPhysicalItem:function(idx){if(0>idx||idx>=this._virtualCount){return}this._restoreFocusedItem();if(!this._isIndexRendered(idx)){this.scrollToIndex(idx)}var physicalItem=this._physicalItems[this._getPhysicalIndex(idx)],model=this.modelForElement(physicalItem),focusable;model.tabIndex=SECRET_TABINDEX;if(physicalItem.tabIndex===SECRET_TABINDEX){focusable=physicalItem}if(!focusable){focusable=dom(physicalItem).querySelector("[tabindex=\""+SECRET_TABINDEX+"\"]")}model.tabIndex=0;this._focusedVirtualIndex=idx;focusable&&focusable.focus()},_removeFocusedItem:function(){if(this._offscreenFocusedItem){this._itemsParent.removeChild(this._offscreenFocusedItem)}this._offscreenFocusedItem=null;this._focusBackfillItem=null;this._focusedItem=null;this._focusedVirtualIndex=-1;this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var fpidx=this._focusedPhysicalIndex;if(this._offscreenFocusedItem||0>this._focusedVirtualIndex){return}if(!this._focusBackfillItem){var inst=this.stamp(null);this._focusBackfillItem=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}this._offscreenFocusedItem=this._physicalItems[fpidx];this.modelForElement(this._offscreenFocusedItem).tabIndex=0;this._physicalItems[fpidx]=this._focusBackfillItem;this._focusedPhysicalIndex=fpidx;this.translate3d(0,HIDDEN_Y,0,this._offscreenFocusedItem)},_restoreFocusedItem:function(){if(!this._offscreenFocusedItem||0>this._focusedVirtualIndex){return}this._assignModels();var fpidx=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),onScreenItem=this._physicalItems[fpidx];if(!onScreenItem){return}var onScreenInstance=this.modelForElement(onScreenItem),offScreenInstance=this.modelForElement(this._offscreenFocusedItem);if(onScreenInstance[this.as]===offScreenInstance[this.as]){this._focusBackfillItem=onScreenItem;onScreenInstance.tabIndex=-1;this._physicalItems[fpidx]=this._offscreenFocusedItem;this.translate3d(0,HIDDEN_Y,0,this._focusBackfillItem)}else{this._removeFocusedItem();this._focusBackfillItem=null}this._offscreenFocusedItem=null},_didFocus:function(e){var targetModel=this.modelForElement(e.target),focusedModel=this.modelForElement(this._focusedItem),hasOffscreenFocusedItem=null!==this._offscreenFocusedItem,fidx=this._focusedVirtualIndex;if(!targetModel){return}if(focusedModel===targetModel){if(!this._isIndexVisible(fidx)){this.scrollToIndex(fidx)}}else{this._restoreFocusedItem();if(focusedModel){focusedModel.tabIndex=-1}targetModel.tabIndex=0;fidx=targetModel[this.indexAs];this._focusedVirtualIndex=fidx;this._focusedPhysicalIndex=this._getPhysicalIndex(fidx);this._focusedItem=this._physicalItems[this._focusedPhysicalIndex];if(hasOffscreenFocusedItem&&!this._offscreenFocusedItem){this._update()}}},_keydownHandler:function(e){switch(e.keyCode){case 40:if(this._focusedVirtualIndex<this._virtualCount-1)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:if(0<this._focusedVirtualIndex)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex);if(this.selectionEnabled)this._selectionHandler(e);break;}},_clamp:function(v,min,max){return Math.min(max,Math.max(min,v))},_debounce:function(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));enqueueDebouncer(this._debouncers[name])},_forwardProperty:function(inst,name,value){inst._setPendingProperty(name,value)},_forwardHostPropV2:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).forwardHostProp(prop,value)}},this)},_notifyInstancePropV2:function(inst,prop,value){if(matches(this.as,prop)){var idx=inst[this.indexAs];if(prop==this.as){this.items[idx]=value}this.notifyPath(translate(this.as,"items."+idx,prop),value)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(inst,path,value){if(0===path.indexOf(this.as+".")){this.notifyPath("items."+inst.__key__+"."+path.slice(this.as.length+1),value)}},_forwardParentPath:function(path,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).notifyPath(path,value,!0)}},this)},_forwardParentProp:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item)[prop]=value}},this)},_getActiveElement:function(){var itemsHost=this._itemsParent.node.domHost;return dom(itemsHost?itemsHost.root:document).activeElement}});Polymer({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none";this.queryChanged()},detached:function(){this._remove()},_add:function(){if(this._mq){this._mq.addListener(this._boundMQHandler)}},_remove:function(){if(this._mq){this._mq.removeListener(this._boundMQHandler)}this._mq=null},queryChanged:function(){this._remove();var query=this.query;if(!query){return}if(!this.full&&"("!==query[0]){query="("+query+")"}this._mq=window.matchMedia(query);this._add();this.queryHandler(this._mq)},queryHandler:function(mq){this._setQueryMatches(mq.matches)}});const template$1=html$1`
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

<div id="radioLabel"><slot></slot></div>`;template$1.setAttribute("strip-whitespace","");Polymer({_template:template$1,is:"paper-radio-button",behaviors:[PaperCheckedElementBehavior],hostAttributes:{role:"radio","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},ready:function(){this._rippleContainer=this.$.radioContainer},attached:function(){afterNextRender(this,function(){var inkSize=this.getComputedStyleValue("--calculated-paper-radio-button-ink-size").trim();if("-1px"===inkSize){var size=parseFloat(this.getComputedStyleValue("--calculated-paper-radio-button-size").trim()),defaultInkSize=Math.floor(3*size);if(defaultInkSize%2!==size%2){defaultInkSize++}this.updateStyles({"--paper-radio-button-ink-size":defaultInkSize+"px"})}})}});Polymer({_template:html$1`
    <style>
      :host {
        display: inline-block;
      }

      :host ::slotted(*) {
        padding: var(--paper-radio-group-item-padding, 12px);
      }
    </style>

    <slot></slot>
`,is:"paper-radio-group",behaviors:[IronMenubarBehavior],hostAttributes:{role:"radiogroup"},properties:{attrForSelected:{type:String,value:"name"},selectedAttribute:{type:String,value:"checked"},selectable:{type:String,value:"paper-radio-button"},allowEmptySelection:{type:Boolean,value:!1}},select:function(value){var newItem=this._valueToItem(value);if(newItem&&newItem.hasAttribute("disabled")){return}if(this.selected){var oldItem=this._valueToItem(this.selected);if(this.selected==value){if(this.allowEmptySelection){value=""}else{if(oldItem)oldItem.checked=!0;return}}if(oldItem)oldItem.checked=!1}IronSelectableBehavior.select.apply(this,[value]);this.fire("paper-radio-group-changed")},_activateFocusedItem:function(){this._itemActivate(this._valueForItem(this.focusedItem),this.focusedItem)},_onUpKey:function(event){this._focusPrevious();event.preventDefault();this._activateFocusedItem()},_onDownKey:function(event){this._focusNext();event.preventDefault();this._activateFocusedItem()},_onLeftKey:function(event){IronMenubarBehaviorImpl._onLeftKey.apply(this,arguments);this._activateFocusedItem()},_onRightKey:function(event){IronMenubarBehaviorImpl._onRightKey.apply(this,arguments);this._activateFocusedItem()}});var twemoji=function(){"use strict";var twemoji={base:"https://twemoji.maxcdn.com/2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:fromCodePoint,toCodePoint:toCodePoint},onerror:function onerror(){if(this.parentNode){this.parentNode.replaceChild(createText(this.alt,!1),this)}},parse:parse,replace:replace,test:test},escaper={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},re=/(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddb0-\uddb3])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[\u0023\u002a\u0030-\u0039]\ufe0f?\u20e3|(?:[\u00a9\u00ae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\udeeb\udeec\udef4-\udef9]|\ud83e[\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd40-\udd45\udd47-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb4\uddb7\uddc0-\uddc2\uddd0\uddde-\uddff]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,UFE0Fg=/\uFE0F/g,U200D="\u200D",rescaper=/[&<>'"]/g,shouldntBeParsed=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,fromCharCode=String.fromCharCode;return twemoji;function createText(text,clean){return document.createTextNode(clean?text.replace(UFE0Fg,""):text)}function escapeHTML(s){return s.replace(rescaper,replacer)}function defaultImageSrcGenerator(icon,options){return"".concat(options.base,options.size,"/",icon,options.ext)}function grabAllTextNodes(node,allText){var childNodes=node.childNodes,length=childNodes.length,subnode,nodeType;while(length--){subnode=childNodes[length];nodeType=subnode.nodeType;if(3===nodeType){allText.push(subnode)}else if(1===nodeType&&!("ownerSVGElement"in subnode)&&!shouldntBeParsed.test(subnode.nodeName.toLowerCase())){grabAllTextNodes(subnode,allText)}}return allText}function grabTheRightIcon(rawText){return toCodePoint(0>rawText.indexOf(U200D)?rawText.replace(UFE0Fg,""):rawText)}function parseNode(node,options){var allText=grabAllTextNodes(node,[]),length=allText.length,attrib,attrname,modified,fragment,subnode,text,match,i,index,img,rawText,iconId,src;while(length--){modified=!1;fragment=document.createDocumentFragment();subnode=allText[length];text=subnode.nodeValue;i=0;while(match=re.exec(text)){index=match.index;if(index!==i){fragment.appendChild(createText(text.slice(i,index),!0))}rawText=match[0];iconId=grabTheRightIcon(rawText);i=index+rawText.length;src=options.callback(iconId,options);if(iconId&&src){img=new Image;img.onerror=options.onerror;img.setAttribute("draggable","false");attrib=options.attributes(rawText,iconId);for(attrname in attrib){if(attrib.hasOwnProperty(attrname)&&0!==attrname.indexOf("on")&&!img.hasAttribute(attrname)){img.setAttribute(attrname,attrib[attrname])}}img.className=options.className;img.alt=rawText;img.src=src;modified=!0;fragment.appendChild(img)}if(!img)fragment.appendChild(createText(rawText,!1));img=null}if(modified){if(i<text.length){fragment.appendChild(createText(text.slice(i),!0))}subnode.parentNode.replaceChild(fragment,subnode)}}return node}function parseString(str,options){return replace(str,function(rawText){var ret=rawText,iconId=grabTheRightIcon(rawText),src=options.callback(iconId,options),attrib,attrname;if(iconId&&src){ret="<img ".concat("class=\"",options.className,"\" ","draggable=\"false\" ","alt=\"",rawText,"\""," src=\"",src,"\"");attrib=options.attributes(rawText,iconId);for(attrname in attrib){if(attrib.hasOwnProperty(attrname)&&0!==attrname.indexOf("on")&&-1===ret.indexOf(" "+attrname+"=")){ret=ret.concat(" ",attrname,"=\"",escapeHTML(attrib[attrname]),"\"")}}ret=ret.concat("/>")}return ret})}function replacer(m){return escaper[m]}function returnNull(){return null}function toSizeSquaredAsset(value){return"number"===typeof value?value+"x"+value:value}function fromCodePoint(codepoint){var code="string"===typeof codepoint?parseInt(codepoint,16):codepoint;if(65536>code){return fromCharCode(code)}code-=65536;return fromCharCode(55296+(code>>10),56320+(1023&code))}function parse(what,how){if(!how||"function"===typeof how){how={callback:how}}return("string"===typeof what?parseString:parseNode)(what,{callback:how.callback||defaultImageSrcGenerator,attributes:"function"===typeof how.attributes?how.attributes:returnNull,base:"string"===typeof how.base?how.base:twemoji.base,ext:how.ext||twemoji.ext,size:how.folder||toSizeSquaredAsset(how.size||twemoji.size),className:how.className||twemoji.className,onerror:how.onerror||twemoji.onerror})}function replace(text,callback){return(text+"").replace(re,callback)}function test(text){re.lastIndex=0;var result=re.test(text);re.lastIndex=0;return result}function toCodePoint(unicodeSurrogates,sep){var r=[],c=0,p=0,i=0;while(i<unicodeSurrogates.length){c=unicodeSurrogates.charCodeAt(i++);if(p){r.push((65536+(p-55296<<10)+(c-56320)).toString(16));p=0}else if(55296<=c&&56319>=c){p=c}else{r.push(c.toString(16))}}return r.join(sep||"-")}}(),esm={default:twemoji};const ypLocalizationBridgeBehavior={t:function(value){if(window.localize){return window.localize(value)}else{return value}}};var ypLocalizationBridgeBehavior$1={ypLocalizationBridgeBehavior:ypLocalizationBridgeBehavior};Polymer({_template:html$1`
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
`,is:"yp-ajax",behaviors:[ypLocalizationBridgeBehavior],properties:{url:{type:String,value:""},method:{type:String,value:"GET"},loading:{type:Boolean},params:{type:Object,value:{}},body:{type:Object,notify:!0},auto:{type:Boolean,value:!1},errorText:{type:String,value:""},useDialog:{type:Boolean,value:!0,notify:!0},useSpinner:{type:Boolean,value:!0},largeSpinner:{type:Boolean,value:!1},dispatchError:{type:Boolean,value:!1},retryMethodAfter401Login:{type:Function,value:null},active:{type:Boolean,reflectToAttribute:!0,notify:!0},disableUserError:{type:Boolean,value:!1}},_response:function(event){this._setActive(!1)},ready:function(){if(this.auto){this._setActive(!0)}if(this.largeSpinner){this.$.spinner.toggleClass("large",!0)}},_setActive:function(active){this.set("active",active);this.$.spinner.active=active},_error:function(event){this._setActive(!1);if(this.dispatchError){event.stopPropagation();if(event.detail.request.xhr.response&&event.detail.request.xhr.response.error){this.fire("error",event.detail.request.xhr.response.error)}else if(event.detail.request.xhr.response&&event.detail.request.xhr.response.message){this.fire("error",event.detail.request.xhr.response.message)}else if(event.detail.request.xhr.statusText){this.fire("error",event.detail.request.xhr.statusText)}else{this.fire("error",event.detail.error)}}else if(event.detail.error&&event.detail.error.message&&this._is401(event.detail.error.message)&&!window.appUser.user&&this.retryMethodAfter401Login){window.appUser.loginFor401(this.retryMethodAfter401Login)}else if(this.useDialog&&!this.disableUserError){this.showErrorDialog(event.detail.error)}},_is401:function(error){return error&&-1<error.indexOf("status code: 401")},generateRequest:function(){this._setActive(!0);this.$.ajax.generateRequest()},setBody:function(body){this.$.ajax.body=body},_transformErrorText:function(errorText){console.log(errorText);if("string"===typeof errorText){if(errorText&&-1<errorText.indexOf("status code: 404")){return this.t("errorNotFound")}else if(errorText&&-1<errorText.indexOf("status code: 500")){return this.t("generalError")}else if(errorText&&-1<errorText.indexOf("status code: 401")){return this.t("errorNotAuthorized")}else if(errorText&&-1<errorText.indexOf("503")){return this.t("errorCantConnect")}else{return errorText}}else{return this.t("generalError")}},showErrorDialog:function(errorText){var text;if(errorText.message){text=errorText.message}else{text=errorText}dom(document).querySelector("yp-app").getDialogAsync("errorDialog",function(dialog){dialog.showErrorDialog(this._transformErrorText(text))}.bind(this))},_resetErrorText:function(event){dom(document).querySelector("yp-app").getDialogAsync("errorDialog",function(dialog){dialog.resetErrorText()})}});const $_documentContainer=document.createElement("template");document.head.appendChild($_documentContainer.content);const ypIronListBehavior={properties:{wide:{type:Boolean,observer:"_wideChanged"},resizeTimer:Object},attached:function(){this.async(function(){this.resetListSize();window.addEventListener("resize",this.resetListSizeWithDelay.bind(this))}.bind(this))},detached:function(){window.removeEventListener("resize",this.resetListSizeWithDelay)},_wideChanged:function(){this.resetListSize()},resetListSizeWithDelay:function(){clearTimeout(this.resizeTimer);this.resizeTimer=setTimeout(function(){this.resetListSize()}.bind(this),250)},resetListSize:function(ironListId){if(!ironListId){ironListId="#ironList"}var list=this.$$(ironListId);if(list){var skipHeight=!0,windowHeight=window.innerHeight,windowWidth=window.innerWidth;if(list){var height;if(this.wide){height=windowHeight-(this.wideListOffset?this.wideListOffset:415)}else{height=windowHeight-300;windowWidth=windowWidth-16}if(!skipHeight){list.style.height=height+"px"}if(!this.skipIronListWidth){list.style.width=windowWidth+"px"}else{console.log("Skipping setting iron-list width")}this.async(function(){list.updateViewportBoundaries();this.async(function(){list.notifyResize()})})}else{console.error("Can't find iron list, waiting");this.async(function(){this.resetListSize()},1500)}}}};var ypIronListBehavior$1={ypIronListBehavior:ypIronListBehavior};(function(f){if("object"===typeof exports&&"undefined"!==typeof module){module.exports=f()}else if("function"===typeof define&&define.amd){define([],f)}else{var g;if("undefined"!==typeof window){g=window}else if("undefined"!==typeof global){g=global}else if("undefined"!==typeof self){g=self}else{g=this}g.sanitizeHtml=f()}})(function(){var _Mathpow=Math.pow,_StringfromCharCode=String.fromCharCode,_Mathfloor=Math.floor,_Mathmin=Math.min,define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var htmlparser=require("htmlparser2"),extend=require("xtend"),quoteRegexp=require("regexp-quote");function each(obj,cb){if(obj)Object.keys(obj).forEach(function(key){cb(obj[key],key)})}function has(obj,key){return{}.hasOwnProperty.call(obj,key)}module.exports=sanitizeHtml;function sanitizeHtml(html,options,_recursing){var result="";function Frame(tag,attribs){var that=this;this.tag=tag;this.attribs=attribs||{};this.tagPosition=result.length;this.text="";this.updateParentNodeText=function(){if(stack.length){var parentFrame=stack[stack.length-1];parentFrame.text+=that.text}}}if(!options){options=sanitizeHtml.defaults;options.parser=htmlParserDefaults}else{options=extend(sanitizeHtml.defaults,options);if(options.parser){options.parser=extend(htmlParserDefaults,options.parser)}else{options.parser=htmlParserDefaults}}var nonTextTagsArray=options.nonTextTags||["script","style","textarea"],allowedAttributesMap,allowedAttributesGlobMap;if(options.allowedAttributes){allowedAttributesMap={};allowedAttributesGlobMap={};each(options.allowedAttributes,function(attributes,tag){allowedAttributesMap[tag]=[];var globRegex=[];attributes.forEach(function(name){if(0<=name.indexOf("*")){globRegex.push(quoteRegexp(name).replace(/\\\*/g,".*"))}else{allowedAttributesMap[tag].push(name)}});allowedAttributesGlobMap[tag]=new RegExp("^("+globRegex.join("|")+")$")})}var allowedClassesMap={};each(options.allowedClasses,function(classes,tag){if(allowedAttributesMap){if(!has(allowedAttributesMap,tag)){allowedAttributesMap[tag]=[]}allowedAttributesMap[tag].push("class")}allowedClassesMap[tag]=classes});var transformTagsMap={},transformTagsAll;each(options.transformTags,function(transform,tag){var transFun;if("function"===typeof transform){transFun=transform}else if("string"===typeof transform){transFun=sanitizeHtml.simpleTransform(transform)}if("*"===tag){transformTagsAll=transFun}else{transformTagsMap[tag]=transFun}});var depth=0,stack=[],skipMap={},transformMap={},skipText=!1,skipTextDepth=0,parser=new htmlparser.Parser({onopentag:function(name,attribs){if(skipText){skipTextDepth++;return}var frame=new Frame(name,attribs);stack.push(frame);var skip=!1,hasText=frame.text?!0:!1,transformedTag;if(has(transformTagsMap,name)){transformedTag=transformTagsMap[name](name,attribs);frame.attribs=attribs=transformedTag.attribs;if(transformedTag.text!==void 0){frame.innerText=transformedTag.text}if(name!==transformedTag.tagName){frame.name=name=transformedTag.tagName;transformMap[depth]=transformedTag.tagName}}if(transformTagsAll){transformedTag=transformTagsAll(name,attribs);frame.attribs=attribs=transformedTag.attribs;if(name!==transformedTag.tagName){frame.name=name=transformedTag.tagName;transformMap[depth]=transformedTag.tagName}}if(options.allowedTags&&-1===options.allowedTags.indexOf(name)){skip=!0;if(-1!==nonTextTagsArray.indexOf(name)){skipText=!0;skipTextDepth=1}skipMap[depth]=!0}depth++;if(skip){return}result+="<"+name;if(!allowedAttributesMap||has(allowedAttributesMap,name)||allowedAttributesMap["*"]){each(attribs,function(value,a){if(!allowedAttributesMap||has(allowedAttributesMap,name)&&-1!==allowedAttributesMap[name].indexOf(a)||allowedAttributesMap["*"]&&-1!==allowedAttributesMap["*"].indexOf(a)||has(allowedAttributesGlobMap,name)&&allowedAttributesGlobMap[name].test(a)||allowedAttributesGlobMap["*"]&&allowedAttributesGlobMap["*"].test(a)){if("href"===a||"src"===a){if(naughtyHref(name,value)){delete frame.attribs[a];return}}if("class"===a){value=filterClasses(value,allowedClassesMap[name]);if(!value.length){delete frame.attribs[a];return}}result+=" "+a;if(value.length){result+="=\""+escapeHtml(value)+"\""}}else{delete frame.attribs[a]}})}if(-1!==options.selfClosing.indexOf(name)){result+=" />"}else{result+=">";if(frame.innerText&&!hasText&&!options.textFilter){result+=frame.innerText}}},ontext:function(text){if(skipText){return}var lastFrame=stack[stack.length-1],tag;if(lastFrame){tag=lastFrame.tag;text=lastFrame.innerText!==void 0?lastFrame.innerText:text}if("script"===tag||"style"===tag){result+=text}else{var escaped=escapeHtml(text);if(options.textFilter){result+=options.textFilter(escaped)}else{result+=escaped}}if(stack.length){var frame=stack[stack.length-1];frame.text+=text}},onclosetag:function(name){if(skipText){skipTextDepth--;if(!skipTextDepth){skipText=!1}else{return}}var frame=stack.pop();if(!frame){return}skipText=!1;depth--;if(skipMap[depth]){delete skipMap[depth];frame.updateParentNodeText();return}if(transformMap[depth]){name=transformMap[depth];delete transformMap[depth]}if(options.exclusiveFilter&&options.exclusiveFilter(frame)){result=result.substr(0,frame.tagPosition);return}frame.updateParentNodeText();if(-1!==options.selfClosing.indexOf(name)){return}result+="</"+name+">"}},options.parser);parser.write(html);parser.end();return result;function escapeHtml(s){if("string"!==typeof s){s=s+""}return s.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;")}function naughtyHref(name,href){href=href.replace(/[\x00-\x20]+/g,"");href=href.replace(/<\!\-\-.*?\-\-\>/g,"");var matches=href.match(/^([a-zA-Z]+)\:/);if(!matches){return!1}var scheme=matches[1].toLowerCase();if(has(options.allowedSchemesByTag,name)){return-1===options.allowedSchemesByTag[name].indexOf(scheme)}return!options.allowedSchemes||-1===options.allowedSchemes.indexOf(scheme)}function filterClasses(classes,allowed){if(!allowed){return classes}classes=classes.split(/\s+/);return classes.filter(function(clss){return-1!==allowed.indexOf(clss)}).join(" ")}}var htmlParserDefaults={decodeEntities:!0};sanitizeHtml.defaults={allowedTags:["h3","h4","h5","h6","blockquote","p","a","ul","ol","nl","li","b","i","strong","em","strike","code","hr","br","div","table","thead","caption","tbody","tr","th","td","pre"],allowedAttributes:{a:["href","name","target"],img:["src"]},selfClosing:["img","br","hr","area","base","basefont","input","link","meta"],allowedSchemes:["http","https","ftp","mailto"],allowedSchemesByTag:{}};sanitizeHtml.simpleTransform=function(newTagName,newAttribs,merge){merge=merge===void 0?!0:merge;newAttribs=newAttribs||{};return function(tagName,attribs){var attrib;if(merge){for(attrib in newAttribs){attribs[attrib]=newAttribs[attrib]}}else{attribs=newAttribs}return{tagName:newTagName,attribs:attribs}}}},{htmlparser2:36,"regexp-quote":59,xtend:60}],2:[function(require,module,exports){},{}],3:[function(require,module,exports){(function(global){"use strict";var base64=require("base64-js"),ieee754=require("ieee754"),isArray=require("isarray");exports.Buffer=Buffer;exports.SlowBuffer=SlowBuffer;exports.INSPECT_MAX_BYTES=50;Buffer.TYPED_ARRAY_SUPPORT=global.TYPED_ARRAY_SUPPORT!==void 0?global.TYPED_ARRAY_SUPPORT:typedArraySupport();exports.kMaxLength=kMaxLength();function typedArraySupport(){try{var arr=new Uint8Array(1);arr.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}};return 42===arr.foo()&&"function"===typeof arr.subarray&&0===arr.subarray(1,1).byteLength}catch(e){return!1}}function kMaxLength(){return Buffer.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function createBuffer(that,length){if(kMaxLength()<length){throw new RangeError("Invalid typed array length")}if(Buffer.TYPED_ARRAY_SUPPORT){that=new Uint8Array(length);that.__proto__=Buffer.prototype}else{if(null===that){that=new Buffer(length)}that.length=length}return that}function Buffer(arg,encodingOrOffset,length){if(!Buffer.TYPED_ARRAY_SUPPORT&&!(this instanceof Buffer)){return new Buffer(arg,encodingOrOffset,length)}if("number"===typeof arg){if("string"===typeof encodingOrOffset){throw new Error("If encoding is specified then the first argument must be a string")}return allocUnsafe(this,arg)}return from(this,arg,encodingOrOffset,length)}Buffer.poolSize=8192;Buffer._augment=function(arr){arr.__proto__=Buffer.prototype;return arr};function from(that,value,encodingOrOffset,length){if("number"===typeof value){throw new TypeError("\"value\" argument must not be a number")}if("undefined"!==typeof ArrayBuffer&&value instanceof ArrayBuffer){return fromArrayBuffer(that,value,encodingOrOffset,length)}if("string"===typeof value){return fromString(that,value,encodingOrOffset)}return fromObject(that,value)}Buffer.from=function(value,encodingOrOffset,length){return from(null,value,encodingOrOffset,length)};if(Buffer.TYPED_ARRAY_SUPPORT){Buffer.prototype.__proto__=Uint8Array.prototype;Buffer.__proto__=Uint8Array;if("undefined"!==typeof Symbol&&Symbol.species&&Buffer[Symbol.species]===Buffer){Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:!0})}}function assertSize(size){if("number"!==typeof size){throw new TypeError("\"size\" argument must be a number")}else if(0>size){throw new RangeError("\"size\" argument must not be negative")}}function alloc(that,size,fill,encoding){assertSize(size);if(0>=size){return createBuffer(that,size)}if(fill!==void 0){return"string"===typeof encoding?createBuffer(that,size).fill(fill,encoding):createBuffer(that,size).fill(fill)}return createBuffer(that,size)}Buffer.alloc=function(size,fill,encoding){return alloc(null,size,fill,encoding)};function allocUnsafe(that,size){assertSize(size);that=createBuffer(that,0>size?0:0|checked(size));if(!Buffer.TYPED_ARRAY_SUPPORT){for(var i=0;i<size;++i){that[i]=0}}return that}Buffer.allocUnsafe=function(size){return allocUnsafe(null,size)};Buffer.allocUnsafeSlow=function(size){return allocUnsafe(null,size)};function fromString(that,string,encoding){if("string"!==typeof encoding||""===encoding){encoding="utf8"}if(!Buffer.isEncoding(encoding)){throw new TypeError("\"encoding\" must be a valid string encoding")}var length=0|byteLength(string,encoding);that=createBuffer(that,length);var actual=that.write(string,encoding);if(actual!==length){that=that.slice(0,actual)}return that}function fromArrayLike(that,array){var length=0>array.length?0:0|checked(array.length);that=createBuffer(that,length);for(var i=0;i<length;i+=1){that[i]=255&array[i]}return that}function fromArrayBuffer(that,array,byteOffset,length){array.byteLength;if(0>byteOffset||array.byteLength<byteOffset){throw new RangeError("'offset' is out of bounds")}if(array.byteLength<byteOffset+(length||0)){throw new RangeError("'length' is out of bounds")}if(byteOffset===void 0&&length===void 0){array=new Uint8Array(array)}else if(length===void 0){array=new Uint8Array(array,byteOffset)}else{array=new Uint8Array(array,byteOffset,length)}if(Buffer.TYPED_ARRAY_SUPPORT){that=array;that.__proto__=Buffer.prototype}else{that=fromArrayLike(that,array)}return that}function fromObject(that,obj){if(Buffer.isBuffer(obj)){var len=0|checked(obj.length);that=createBuffer(that,len);if(0===that.length){return that}obj.copy(that,0,0,len);return that}if(obj){if("undefined"!==typeof ArrayBuffer&&obj.buffer instanceof ArrayBuffer||"length"in obj){if("number"!==typeof obj.length||isnan(obj.length)){return createBuffer(that,0)}return fromArrayLike(that,obj)}if("Buffer"===obj.type&&isArray(obj.data)){return fromArrayLike(that,obj.data)}}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function checked(length){if(length>=kMaxLength()){throw new RangeError("Attempt to allocate Buffer larger than maximum "+"size: 0x"+kMaxLength().toString(16)+" bytes")}return 0|length}function SlowBuffer(length){if(+length!=length){length=0}return Buffer.alloc(+length)}Buffer.isBuffer=function isBuffer(b){return!!(null!=b&&b._isBuffer)};Buffer.compare=function compare(a,b){if(!Buffer.isBuffer(a)||!Buffer.isBuffer(b)){throw new TypeError("Arguments must be Buffers")}if(a===b)return 0;for(var x=a.length,y=b.length,i=0,len=_Mathmin(x,y);i<len;++i){if(a[i]!==b[i]){x=a[i];y=b[i];break}}if(x<y)return-1;if(y<x)return 1;return 0};Buffer.isEncoding=function isEncoding(encoding){switch((encoding+"").toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1;}};Buffer.concat=function concat(list,length){if(!isArray(list)){throw new TypeError("\"list\" argument must be an Array of Buffers")}if(0===list.length){return Buffer.alloc(0)}var i;if(length===void 0){length=0;for(i=0;i<list.length;++i){length+=list[i].length}}var buffer=Buffer.allocUnsafe(length),pos=0;for(i=0;i<list.length;++i){var buf=list[i];if(!Buffer.isBuffer(buf)){throw new TypeError("\"list\" argument must be an Array of Buffers")}buf.copy(buffer,pos);pos+=buf.length}return buffer};function byteLength(string,encoding){if(Buffer.isBuffer(string)){return string.length}if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(string)||string instanceof ArrayBuffer)){return string.byteLength}if("string"!==typeof string){string=""+string}var len=string.length;if(0===len)return 0;var loweredCase=!1;for(;;){switch(encoding){case"ascii":case"latin1":case"binary":return len;case"utf8":case"utf-8":case void 0:return utf8ToBytes(string).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*len;case"hex":return len>>>1;case"base64":return base64ToBytes(string).length;default:if(loweredCase)return utf8ToBytes(string).length;encoding=(""+encoding).toLowerCase();loweredCase=!0;}}}Buffer.byteLength=byteLength;function slowToString(encoding,start,end){var loweredCase=!1;if(start===void 0||0>start){start=0}if(start>this.length){return""}if(end===void 0||end>this.length){end=this.length}if(0>=end){return""}end>>>=0;start>>>=0;if(end<=start){return""}if(!encoding)encoding="utf8";while(!0){switch(encoding){case"hex":return hexSlice(this,start,end);case"utf8":case"utf-8":return utf8Slice(this,start,end);case"ascii":return asciiSlice(this,start,end);case"latin1":case"binary":return latin1Slice(this,start,end);case"base64":return base64Slice(this,start,end);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return utf16leSlice(this,start,end);default:if(loweredCase)throw new TypeError("Unknown encoding: "+encoding);encoding=(encoding+"").toLowerCase();loweredCase=!0;}}}Buffer.prototype._isBuffer=!0;function swap(b,n,m){var i=b[n];b[n]=b[m];b[m]=i}Buffer.prototype.swap16=function swap16(){var len=this.length;if(0!==len%2){throw new RangeError("Buffer size must be a multiple of 16-bits")}for(var i=0;i<len;i+=2){swap(this,i,i+1)}return this};Buffer.prototype.swap32=function swap32(){var len=this.length;if(0!==len%4){throw new RangeError("Buffer size must be a multiple of 32-bits")}for(var i=0;i<len;i+=4){swap(this,i,i+3);swap(this,i+1,i+2)}return this};Buffer.prototype.swap64=function swap64(){var len=this.length;if(0!==len%8){throw new RangeError("Buffer size must be a multiple of 64-bits")}for(var i=0;i<len;i+=8){swap(this,i,i+7);swap(this,i+1,i+6);swap(this,i+2,i+5);swap(this,i+3,i+4)}return this};Buffer.prototype.toString=function toString(){var length=0|this.length;if(0===length)return"";if(0===arguments.length)return utf8Slice(this,0,length);return slowToString.apply(this,arguments)};Buffer.prototype.equals=function equals(b){if(!Buffer.isBuffer(b))throw new TypeError("Argument must be a Buffer");if(this===b)return!0;return 0===Buffer.compare(this,b)};Buffer.prototype.inspect=function inspect(){var str="",max=exports.INSPECT_MAX_BYTES;if(0<this.length){str=this.toString("hex",0,max).match(/.{2}/g).join(" ");if(this.length>max)str+=" ... "}return"<Buffer "+str+">"};Buffer.prototype.compare=function compare(target,start,end,thisStart,thisEnd){if(!Buffer.isBuffer(target)){throw new TypeError("Argument must be a Buffer")}if(start===void 0){start=0}if(end===void 0){end=target?target.length:0}if(thisStart===void 0){thisStart=0}if(thisEnd===void 0){thisEnd=this.length}if(0>start||end>target.length||0>thisStart||thisEnd>this.length){throw new RangeError("out of range index")}if(thisStart>=thisEnd&&start>=end){return 0}if(thisStart>=thisEnd){return-1}if(start>=end){return 1}start>>>=0;end>>>=0;thisStart>>>=0;thisEnd>>>=0;if(this===target)return 0;for(var x=thisEnd-thisStart,y=end-start,len=_Mathmin(x,y),thisCopy=this.slice(thisStart,thisEnd),targetCopy=target.slice(start,end),i=0;i<len;++i){if(thisCopy[i]!==targetCopy[i]){x=thisCopy[i];y=targetCopy[i];break}}if(x<y)return-1;if(y<x)return 1;return 0};function bidirectionalIndexOf(buffer,val,byteOffset,encoding,dir){if(0===buffer.length)return-1;if("string"===typeof byteOffset){encoding=byteOffset;byteOffset=0}else if(2147483647<byteOffset){byteOffset=2147483647}else if(-2147483648>byteOffset){byteOffset=-2147483648}byteOffset=+byteOffset;if(isNaN(byteOffset)){byteOffset=dir?0:buffer.length-1}if(0>byteOffset)byteOffset=buffer.length+byteOffset;if(byteOffset>=buffer.length){if(dir)return-1;else byteOffset=buffer.length-1}else if(0>byteOffset){if(dir)byteOffset=0;else return-1}if("string"===typeof val){val=Buffer.from(val,encoding)}if(Buffer.isBuffer(val)){if(0===val.length){return-1}return arrayIndexOf(buffer,val,byteOffset,encoding,dir)}else if("number"===typeof val){val=255&val;if(Buffer.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf){if(dir){return Uint8Array.prototype.indexOf.call(buffer,val,byteOffset)}else{return Uint8Array.prototype.lastIndexOf.call(buffer,val,byteOffset)}}return arrayIndexOf(buffer,[val],byteOffset,encoding,dir)}throw new TypeError("val must be string, number or Buffer")}function arrayIndexOf(arr,val,byteOffset,encoding,dir){var indexSize=1,arrLength=arr.length,valLength=val.length;if(encoding!==void 0){encoding=(encoding+"").toLowerCase();if("ucs2"===encoding||"ucs-2"===encoding||"utf16le"===encoding||"utf-16le"===encoding){if(2>arr.length||2>val.length){return-1}indexSize=2;arrLength/=2;valLength/=2;byteOffset/=2}}function read(buf,i){if(1===indexSize){return buf[i]}else{return buf.readUInt16BE(i*indexSize)}}var i;if(dir){var foundIndex=-1;for(i=byteOffset;i<arrLength;i++){if(read(arr,i)===read(val,-1===foundIndex?0:i-foundIndex)){if(-1===foundIndex)foundIndex=i;if(i-foundIndex+1===valLength)return foundIndex*indexSize}else{if(-1!==foundIndex)i-=i-foundIndex;foundIndex=-1}}}else{if(byteOffset+valLength>arrLength)byteOffset=arrLength-valLength;for(i=byteOffset;0<=i;i--){for(var found=!0,j=0;j<valLength;j++){if(read(arr,i+j)!==read(val,j)){found=!1;break}}if(found)return i}}return-1}Buffer.prototype.includes=function includes(val,byteOffset,encoding){return-1!==this.indexOf(val,byteOffset,encoding)};Buffer.prototype.indexOf=function indexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,!0)};Buffer.prototype.lastIndexOf=function lastIndexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,!1)};function hexWrite(buf,string,offset,length){offset=+offset||0;var remaining=buf.length-offset;if(!length){length=remaining}else{length=+length;if(length>remaining){length=remaining}}var strLen=string.length;if(0!==strLen%2)throw new TypeError("Invalid hex string");if(length>strLen/2){length=strLen/2}for(var i=0,parsed;i<length;++i){parsed=parseInt(string.substr(2*i,2),16);if(isNaN(parsed))return i;buf[offset+i]=parsed}return i}function utf8Write(buf,string,offset,length){return blitBuffer(utf8ToBytes(string,buf.length-offset),buf,offset,length)}function asciiWrite(buf,string,offset,length){return blitBuffer(asciiToBytes(string),buf,offset,length)}function latin1Write(buf,string,offset,length){return asciiWrite(buf,string,offset,length)}function base64Write(buf,string,offset,length){return blitBuffer(base64ToBytes(string),buf,offset,length)}function ucs2Write(buf,string,offset,length){return blitBuffer(utf16leToBytes(string,buf.length-offset),buf,offset,length)}Buffer.prototype.write=function write(string,offset,length,encoding){if(offset===void 0){encoding="utf8";length=this.length;offset=0}else if(length===void 0&&"string"===typeof offset){encoding=offset;length=this.length;offset=0}else if(isFinite(offset)){offset=0|offset;if(isFinite(length)){length=0|length;if(encoding===void 0)encoding="utf8"}else{encoding=length;length=void 0}}else{throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")}var remaining=this.length-offset;if(length===void 0||length>remaining)length=remaining;if(0<string.length&&(0>length||0>offset)||offset>this.length){throw new RangeError("Attempt to write outside buffer bounds")}if(!encoding)encoding="utf8";var loweredCase=!1;for(;;){switch(encoding){case"hex":return hexWrite(this,string,offset,length);case"utf8":case"utf-8":return utf8Write(this,string,offset,length);case"ascii":return asciiWrite(this,string,offset,length);case"latin1":case"binary":return latin1Write(this,string,offset,length);case"base64":return base64Write(this,string,offset,length);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ucs2Write(this,string,offset,length);default:if(loweredCase)throw new TypeError("Unknown encoding: "+encoding);encoding=(""+encoding).toLowerCase();loweredCase=!0;}}};Buffer.prototype.toJSON=function toJSON(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function base64Slice(buf,start,end){if(0===start&&end===buf.length){return base64.fromByteArray(buf)}else{return base64.fromByteArray(buf.slice(start,end))}}function utf8Slice(buf,start,end){end=_Mathmin(buf.length,end);var res=[],i=start;while(i<end){var firstByte=buf[i],codePoint=null,bytesPerSequence=239<firstByte?4:223<firstByte?3:191<firstByte?2:1;if(i+bytesPerSequence<=end){var secondByte,thirdByte,fourthByte,tempCodePoint;switch(bytesPerSequence){case 1:if(128>firstByte){codePoint=firstByte}break;case 2:secondByte=buf[i+1];if(128===(192&secondByte)){tempCodePoint=(31&firstByte)<<6|63&secondByte;if(127<tempCodePoint){codePoint=tempCodePoint}}break;case 3:secondByte=buf[i+1];thirdByte=buf[i+2];if(128===(192&secondByte)&&128===(192&thirdByte)){tempCodePoint=(15&firstByte)<<12|(63&secondByte)<<6|63&thirdByte;if(2047<tempCodePoint&&(55296>tempCodePoint||57343<tempCodePoint)){codePoint=tempCodePoint}}break;case 4:secondByte=buf[i+1];thirdByte=buf[i+2];fourthByte=buf[i+3];if(128===(192&secondByte)&&128===(192&thirdByte)&&128===(192&fourthByte)){tempCodePoint=(15&firstByte)<<18|(63&secondByte)<<12|(63&thirdByte)<<6|63&fourthByte;if(65535<tempCodePoint&&1114112>tempCodePoint){codePoint=tempCodePoint}}}}if(null===codePoint){codePoint=65533;bytesPerSequence=1}else if(65535<codePoint){codePoint-=65536;res.push(55296|1023&codePoint>>>10);codePoint=56320|1023&codePoint}res.push(codePoint);i+=bytesPerSequence}return decodeCodePointsArray(res)}var MAX_ARGUMENTS_LENGTH=4096;function decodeCodePointsArray(codePoints){var len=codePoints.length;if(len<=MAX_ARGUMENTS_LENGTH){return _StringfromCharCode.apply(String,codePoints)}var res="",i=0;while(i<len){res+=_StringfromCharCode.apply(String,codePoints.slice(i,i+=MAX_ARGUMENTS_LENGTH))}return res}function asciiSlice(buf,start,end){var ret="";end=_Mathmin(buf.length,end);for(var i=start;i<end;++i){ret+=_StringfromCharCode(127&buf[i])}return ret}function latin1Slice(buf,start,end){var ret="";end=_Mathmin(buf.length,end);for(var i=start;i<end;++i){ret+=_StringfromCharCode(buf[i])}return ret}function hexSlice(buf,start,end){var len=buf.length;if(!start||0>start)start=0;if(!end||0>end||end>len)end=len;for(var out="",i=start;i<end;++i){out+=toHex(buf[i])}return out}function utf16leSlice(buf,start,end){for(var bytes=buf.slice(start,end),res="",i=0;i<bytes.length;i+=2){res+=_StringfromCharCode(bytes[i]+256*bytes[i+1])}return res}Buffer.prototype.slice=function slice(start,end){var len=this.length;start=~~start;end=end===void 0?len:~~end;if(0>start){start+=len;if(0>start)start=0}else if(start>len){start=len}if(0>end){end+=len;if(0>end)end=0}else if(end>len){end=len}if(end<start)end=start;var newBuf;if(Buffer.TYPED_ARRAY_SUPPORT){newBuf=this.subarray(start,end);newBuf.__proto__=Buffer.prototype}else{var sliceLen=end-start;newBuf=new Buffer(sliceLen,void 0);for(var i=0;i<sliceLen;++i){newBuf[i]=this[i+start]}}return newBuf};function checkOffset(offset,ext,length){if(0!==offset%1||0>offset)throw new RangeError("offset is not uint");if(offset+ext>length)throw new RangeError("Trying to access beyond buffer length")}Buffer.prototype.readUIntLE=function readUIntLE(offset,byteLength,noAssert){offset=0|offset;byteLength=0|byteLength;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset],mul=1,i=0;while(++i<byteLength&&(mul*=256)){val+=this[offset+i]*mul}return val};Buffer.prototype.readUIntBE=function readUIntBE(offset,byteLength,noAssert){offset=0|offset;byteLength=0|byteLength;if(!noAssert){checkOffset(offset,byteLength,this.length)}var val=this[offset+--byteLength],mul=1;while(0<byteLength&&(mul*=256)){val+=this[offset+--byteLength]*mul}return val};Buffer.prototype.readUInt8=function readUInt8(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);return this[offset]};Buffer.prototype.readUInt16LE=function readUInt16LE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset]|this[offset+1]<<8};Buffer.prototype.readUInt16BE=function readUInt16BE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset]<<8|this[offset+1]};Buffer.prototype.readUInt32LE=function readUInt32LE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return(this[offset]|this[offset+1]<<8|this[offset+2]<<16)+16777216*this[offset+3]};Buffer.prototype.readUInt32BE=function readUInt32BE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return 16777216*this[offset]+(this[offset+1]<<16|this[offset+2]<<8|this[offset+3])};Buffer.prototype.readIntLE=function readIntLE(offset,byteLength,noAssert){offset=0|offset;byteLength=0|byteLength;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset],mul=1,i=0;while(++i<byteLength&&(mul*=256)){val+=this[offset+i]*mul}mul*=128;if(val>=mul)val-=_Mathpow(2,8*byteLength);return val};Buffer.prototype.readIntBE=function readIntBE(offset,byteLength,noAssert){offset=0|offset;byteLength=0|byteLength;if(!noAssert)checkOffset(offset,byteLength,this.length);var i=byteLength,mul=1,val=this[offset+--i];while(0<i&&(mul*=256)){val+=this[offset+--i]*mul}mul*=128;if(val>=mul)val-=_Mathpow(2,8*byteLength);return val};Buffer.prototype.readInt8=function readInt8(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);if(!(128&this[offset]))return this[offset];return-1*(255-this[offset]+1)};Buffer.prototype.readInt16LE=function readInt16LE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset]|this[offset+1]<<8;return 32768&val?4294901760|val:val};Buffer.prototype.readInt16BE=function readInt16BE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset+1]|this[offset]<<8;return 32768&val?4294901760|val:val};Buffer.prototype.readInt32LE=function readInt32LE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]|this[offset+1]<<8|this[offset+2]<<16|this[offset+3]<<24};Buffer.prototype.readInt32BE=function readInt32BE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]<<24|this[offset+1]<<16|this[offset+2]<<8|this[offset+3]};Buffer.prototype.readFloatLE=function readFloatLE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,!0,23,4)};Buffer.prototype.readFloatBE=function readFloatBE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,!1,23,4)};Buffer.prototype.readDoubleLE=function readDoubleLE(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,!0,52,8)};Buffer.prototype.readDoubleBE=function readDoubleBE(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,!1,52,8)};function checkInt(buf,value,offset,ext,max,min){if(!Buffer.isBuffer(buf))throw new TypeError("\"buffer\" argument must be a Buffer instance");if(value>max||value<min)throw new RangeError("\"value\" argument is out of bounds");if(offset+ext>buf.length)throw new RangeError("Index out of range")}Buffer.prototype.writeUIntLE=function writeUIntLE(value,offset,byteLength,noAssert){value=+value;offset=0|offset;byteLength=0|byteLength;if(!noAssert){var maxBytes=_Mathpow(2,8*byteLength)-1;checkInt(this,value,offset,byteLength,maxBytes,0)}var mul=1,i=0;this[offset]=255&value;while(++i<byteLength&&(mul*=256)){this[offset+i]=255&value/mul}return offset+byteLength};Buffer.prototype.writeUIntBE=function writeUIntBE(value,offset,byteLength,noAssert){value=+value;offset=0|offset;byteLength=0|byteLength;if(!noAssert){var maxBytes=_Mathpow(2,8*byteLength)-1;checkInt(this,value,offset,byteLength,maxBytes,0)}var i=byteLength-1,mul=1;this[offset+i]=255&value;while(0<=--i&&(mul*=256)){this[offset+i]=255&value/mul}return offset+byteLength};Buffer.prototype.writeUInt8=function writeUInt8(value,offset,noAssert){value=+value;offset=0|offset;if(!noAssert)checkInt(this,value,offset,1,255,0);if(!Buffer.TYPED_ARRAY_SUPPORT)value=_Mathfloor(value);this[offset]=255&value;return offset+1};function objectWriteUInt16(buf,value,offset,littleEndian){if(0>value)value=65535+value+1;for(var i=0,j=_Mathmin(buf.length-offset,2);i<j;++i){buf[offset+i]=(value&255<<8*(littleEndian?i:1-i))>>>8*(littleEndian?i:1-i)}}Buffer.prototype.writeUInt16LE=function writeUInt16LE(value,offset,noAssert){value=+value;offset=0|offset;if(!noAssert)checkInt(this,value,offset,2,65535,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=255&value;this[offset+1]=value>>>8}else{objectWriteUInt16(this,value,offset,!0)}return offset+2};Buffer.prototype.writeUInt16BE=function writeUInt16BE(value,offset,noAssert){value=+value;offset=0|offset;if(!noAssert)checkInt(this,value,offset,2,65535,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>8;this[offset+1]=255&value}else{objectWriteUInt16(this,value,offset,!1)}return offset+2};function objectWriteUInt32(buf,value,offset,littleEndian){if(0>value)value=4294967295+value+1;for(var i=0,j=_Mathmin(buf.length-offset,4);i<j;++i){buf[offset+i]=255&value>>>8*(littleEndian?i:3-i)}}Buffer.prototype.writeUInt32LE=function writeUInt32LE(value,offset,noAssert){value=+value;offset=0|offset;if(!noAssert)checkInt(this,value,offset,4,4294967295,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset+3]=value>>>24;this[offset+2]=value>>>16;this[offset+1]=value>>>8;this[offset]=255&value}else{objectWriteUInt32(this,value,offset,!0)}return offset+4};Buffer.prototype.writeUInt32BE=function writeUInt32BE(value,offset,noAssert){value=+value;offset=0|offset;if(!noAssert)checkInt(this,value,offset,4,4294967295,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=255&value}else{objectWriteUInt32(this,value,offset,!1)}return offset+4};Buffer.prototype.writeIntLE=function writeIntLE(value,offset,byteLength,noAssert){value=+value;offset=0|offset;if(!noAssert){var limit=_Mathpow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit)}var i=0,mul=1,sub=0;this[offset]=255&value;while(++i<byteLength&&(mul*=256)){if(0>value&&0===sub&&0!==this[offset+i-1]){sub=1}this[offset+i]=255&(value/mul>>0)-sub}return offset+byteLength};Buffer.prototype.writeIntBE=function writeIntBE(value,offset,byteLength,noAssert){value=+value;offset=0|offset;if(!noAssert){var limit=_Mathpow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit)}var i=byteLength-1,mul=1,sub=0;this[offset+i]=255&value;while(0<=--i&&(mul*=256)){if(0>value&&0===sub&&0!==this[offset+i+1]){sub=1}this[offset+i]=255&(value/mul>>0)-sub}return offset+byteLength};Buffer.prototype.writeInt8=function writeInt8(value,offset,noAssert){value=+value;offset=0|offset;if(!noAssert)checkInt(this,value,offset,1,127,-128);if(!Buffer.TYPED_ARRAY_SUPPORT)value=_Mathfloor(value);if(0>value)value=255+value+1;this[offset]=255&value;return offset+1};Buffer.prototype.writeInt16LE=function writeInt16LE(value,offset,noAssert){value=+value;offset=0|offset;if(!noAssert)checkInt(this,value,offset,2,32767,-32768);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=255&value;this[offset+1]=value>>>8}else{objectWriteUInt16(this,value,offset,!0)}return offset+2};Buffer.prototype.writeInt16BE=function writeInt16BE(value,offset,noAssert){value=+value;offset=0|offset;if(!noAssert)checkInt(this,value,offset,2,32767,-32768);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>8;this[offset+1]=255&value}else{objectWriteUInt16(this,value,offset,!1)}return offset+2};Buffer.prototype.writeInt32LE=function writeInt32LE(value,offset,noAssert){value=+value;offset=0|offset;if(!noAssert)checkInt(this,value,offset,4,2147483647,-2147483648);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=255&value;this[offset+1]=value>>>8;this[offset+2]=value>>>16;this[offset+3]=value>>>24}else{objectWriteUInt32(this,value,offset,!0)}return offset+4};Buffer.prototype.writeInt32BE=function writeInt32BE(value,offset,noAssert){value=+value;offset=0|offset;if(!noAssert)checkInt(this,value,offset,4,2147483647,-2147483648);if(0>value)value=4294967295+value+1;if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=255&value}else{objectWriteUInt32(this,value,offset,!1)}return offset+4};function checkIEEE754(buf,value,offset,ext,max,min){if(offset+ext>buf.length)throw new RangeError("Index out of range");if(0>offset)throw new RangeError("Index out of range")}function writeFloat(buf,value,offset,littleEndian,noAssert){if(!noAssert){checkIEEE754(buf,value,offset,4,34028234663852886e22,-34028234663852886e22)}ieee754.write(buf,value,offset,littleEndian,23,4);return offset+4}Buffer.prototype.writeFloatLE=function writeFloatLE(value,offset,noAssert){return writeFloat(this,value,offset,!0,noAssert)};Buffer.prototype.writeFloatBE=function writeFloatBE(value,offset,noAssert){return writeFloat(this,value,offset,!1,noAssert)};function writeDouble(buf,value,offset,littleEndian,noAssert){if(!noAssert){checkIEEE754(buf,value,offset,8,17976931348623157e292,-17976931348623157e292)}ieee754.write(buf,value,offset,littleEndian,52,8);return offset+8}Buffer.prototype.writeDoubleLE=function writeDoubleLE(value,offset,noAssert){return writeDouble(this,value,offset,!0,noAssert)};Buffer.prototype.writeDoubleBE=function writeDoubleBE(value,offset,noAssert){return writeDouble(this,value,offset,!1,noAssert)};Buffer.prototype.copy=function copy(target,targetStart,start,end){if(!start)start=0;if(!end&&0!==end)end=this.length;if(targetStart>=target.length)targetStart=target.length;if(!targetStart)targetStart=0;if(0<end&&end<start)end=start;if(end===start)return 0;if(0===target.length||0===this.length)return 0;if(0>targetStart){throw new RangeError("targetStart out of bounds")}if(0>start||start>=this.length)throw new RangeError("sourceStart out of bounds");if(0>end)throw new RangeError("sourceEnd out of bounds");if(end>this.length)end=this.length;if(target.length-targetStart<end-start){end=target.length-targetStart+start}var len=end-start,i;if(this===target&&start<targetStart&&targetStart<end){for(i=len-1;0<=i;--i){target[i+targetStart]=this[i+start]}}else if(1e3>len||!Buffer.TYPED_ARRAY_SUPPORT){for(i=0;i<len;++i){target[i+targetStart]=this[i+start]}}else{Uint8Array.prototype.set.call(target,this.subarray(start,start+len),targetStart)}return len};Buffer.prototype.fill=function fill(val,start,end,encoding){if("string"===typeof val){if("string"===typeof start){encoding=start;start=0;end=this.length}else if("string"===typeof end){encoding=end;end=this.length}if(1===val.length){var code=val.charCodeAt(0);if(256>code){val=code}}if(encoding!==void 0&&"string"!==typeof encoding){throw new TypeError("encoding must be a string")}if("string"===typeof encoding&&!Buffer.isEncoding(encoding)){throw new TypeError("Unknown encoding: "+encoding)}}else if("number"===typeof val){val=255&val}if(0>start||this.length<start||this.length<end){throw new RangeError("Out of range index")}if(end<=start){return this}start=start>>>0;end=end===void 0?this.length:end>>>0;if(!val)val=0;var i;if("number"===typeof val){for(i=start;i<end;++i){this[i]=val}}else{var bytes=Buffer.isBuffer(val)?val:utf8ToBytes(new Buffer(val,encoding).toString()),len=bytes.length;for(i=0;i<end-start;++i){this[i+start]=bytes[i%len]}}return this};var INVALID_BASE64_RE=/[^+\/0-9A-Za-z-_]/g;function base64clean(str){str=stringtrim(str).replace(INVALID_BASE64_RE,"");if(2>str.length)return"";while(0!==str.length%4){str=str+"="}return str}function stringtrim(str){if(str.trim)return str.trim();return str.replace(/^\s+|\s+$/g,"")}function toHex(n){if(16>n)return"0"+n.toString(16);return n.toString(16)}function utf8ToBytes(string,units){units=units||1/0;for(var codePoint,length=string.length,leadSurrogate=null,bytes=[],i=0;i<length;++i){codePoint=string.charCodeAt(i);if(55295<codePoint&&57344>codePoint){if(!leadSurrogate){if(56319<codePoint){if(-1<(units-=3))bytes.push(239,191,189);continue}else if(i+1===length){if(-1<(units-=3))bytes.push(239,191,189);continue}leadSurrogate=codePoint;continue}if(56320>codePoint){if(-1<(units-=3))bytes.push(239,191,189);leadSurrogate=codePoint;continue}codePoint=(leadSurrogate-55296<<10|codePoint-56320)+65536}else if(leadSurrogate){if(-1<(units-=3))bytes.push(239,191,189)}leadSurrogate=null;if(128>codePoint){if(0>(units-=1))break;bytes.push(codePoint)}else if(2048>codePoint){if(0>(units-=2))break;bytes.push(192|codePoint>>6,128|63&codePoint)}else if(65536>codePoint){if(0>(units-=3))break;bytes.push(224|codePoint>>12,128|63&codePoint>>6,128|63&codePoint)}else if(1114112>codePoint){if(0>(units-=4))break;bytes.push(240|codePoint>>18,128|63&codePoint>>12,128|63&codePoint>>6,128|63&codePoint)}else{throw new Error("Invalid code point")}}return bytes}function asciiToBytes(str){for(var byteArray=[],i=0;i<str.length;++i){byteArray.push(255&str.charCodeAt(i))}return byteArray}function utf16leToBytes(str,units){for(var c,hi,lo,byteArray=[],i=0;i<str.length;++i){if(0>(units-=2))break;c=str.charCodeAt(i);hi=c>>8;lo=c%256;byteArray.push(lo);byteArray.push(hi)}return byteArray}function base64ToBytes(str){return base64.toByteArray(base64clean(str))}function blitBuffer(src,dst,offset,length){for(var i=0;i<length;++i){if(i+offset>=dst.length||i>=src.length)break;dst[i+offset]=src[i]}return i}function isnan(val){return val!==val}}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{"base64-js":4,ieee754:5,isarray:6}],4:[function(require,module,exports){"use strict";exports.toByteArray=toByteArray;exports.fromByteArray=fromByteArray;var lookup=[],revLookup=[],Arr="undefined"!==typeof Uint8Array?Uint8Array:Array;function init(){for(var code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,len=code.length;i<len;++i){lookup[i]=code[i];revLookup[code.charCodeAt(i)]=i}revLookup["-".charCodeAt(0)]=62;revLookup["_".charCodeAt(0)]=63}init();function toByteArray(b64){var i,j,l,tmp,placeHolders,arr,len=b64.length;if(0<len%4){throw new Error("Invalid string. Length must be a multiple of 4")}placeHolders="="===b64[len-2]?2:"="===b64[len-1]?1:0;arr=new Arr(3*len/4-placeHolders);l=0<placeHolders?len-4:len;var L=0;for(i=0,j=0;i<l;i+=4,j+=3){tmp=revLookup[b64.charCodeAt(i)]<<18|revLookup[b64.charCodeAt(i+1)]<<12|revLookup[b64.charCodeAt(i+2)]<<6|revLookup[b64.charCodeAt(i+3)];arr[L++]=255&tmp>>16;arr[L++]=255&tmp>>8;arr[L++]=255&tmp}if(2===placeHolders){tmp=revLookup[b64.charCodeAt(i)]<<2|revLookup[b64.charCodeAt(i+1)]>>4;arr[L++]=255&tmp}else if(1===placeHolders){tmp=revLookup[b64.charCodeAt(i)]<<10|revLookup[b64.charCodeAt(i+1)]<<4|revLookup[b64.charCodeAt(i+2)]>>2;arr[L++]=255&tmp>>8;arr[L++]=255&tmp}return arr}function tripletToBase64(num){return lookup[63&num>>18]+lookup[63&num>>12]+lookup[63&num>>6]+lookup[63&num]}function encodeChunk(uint8,start,end){for(var tmp,output=[],i=start;i<end;i+=3){tmp=(uint8[i]<<16)+(uint8[i+1]<<8)+uint8[i+2];output.push(tripletToBase64(tmp))}return output.join("")}function fromByteArray(uint8){for(var tmp,len=uint8.length,extraBytes=len%3,output="",parts=[],maxChunkLength=16383,i=0,len2=len-extraBytes;i<len2;i+=maxChunkLength){parts.push(encodeChunk(uint8,i,i+maxChunkLength>len2?len2:i+maxChunkLength))}if(1===extraBytes){tmp=uint8[len-1];output+=lookup[tmp>>2];output+=lookup[63&tmp<<4];output+="=="}else if(2===extraBytes){tmp=(uint8[len-2]<<8)+uint8[len-1];output+=lookup[tmp>>10];output+=lookup[63&tmp>>4];output+=lookup[63&tmp<<2];output+="="}parts.push(output);return parts.join("")}},{}],5:[function(require,module,exports){exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m,eLen=8*nBytes-mLen-1,eMax=(1<<eLen)-1,eBias=eMax>>1,nBits=-7,i=isLE?nBytes-1:0,d=isLE?-1:1,s=buffer[offset+i];i+=d;e=s&(1<<-nBits)-1;s>>=-nBits;nBits+=eLen;for(;0<nBits;e=256*e+buffer[offset+i],i+=d,nBits-=8){}m=e&(1<<-nBits)-1;e>>=-nBits;nBits+=mLen;for(;0<nBits;m=256*m+buffer[offset+i],i+=d,nBits-=8){}if(0===e){e=1-eBias}else if(e===eMax){return m?NaN:(s?-1:1)*(1/0)}else{m=m+_Mathpow(2,mLen);e=e-eBias}return(s?-1:1)*m*_Mathpow(2,e-mLen)};exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c,eLen=8*nBytes-mLen-1,eMax=(1<<eLen)-1,eBias=eMax>>1,rt=23===mLen?5.960464477539063e-8-6.617444900424222e-24:0,i=isLE?0:nBytes-1,d=isLE?1:-1,s=0>value||0===value&&0>1/value?1:0;value=Math.abs(value);if(isNaN(value)||value===1/0){m=isNaN(value)?1:0;e=eMax}else{e=_Mathfloor(Math.log(value)/Math.LN2);if(1>value*(c=_Mathpow(2,-e))){e--;c*=2}if(1<=e+eBias){value+=rt/c}else{value+=rt*_Mathpow(2,1-eBias)}if(2<=value*c){e++;c/=2}if(e+eBias>=eMax){m=0;e=eMax}else if(1<=e+eBias){m=(value*c-1)*_Mathpow(2,mLen);e=e+eBias}else{m=value*_Mathpow(2,eBias-1)*_Mathpow(2,mLen);e=0}}for(;8<=mLen;buffer[offset+i]=255&m,i+=d,m/=256,mLen-=8){}e=e<<mLen|m;eLen+=mLen;for(;0<eLen;buffer[offset+i]=255&e,i+=d,e/=256,eLen-=8){}buffer[offset+i-d]|=128*s}},{}],6:[function(require,module,exports){var toString={}.toString;module.exports=Array.isArray||function(arr){return"[object Array]"==toString.call(arr)}},{}],7:[function(require,module,exports){function EventEmitter(){this._events=this._events||{};this._maxListeners=this._maxListeners||void 0}module.exports=EventEmitter;EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=void 0;EventEmitter.prototype._maxListeners=void 0;EventEmitter.defaultMaxListeners=10;EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||0>n||isNaN(n))throw TypeError("n must be a positive number");this._maxListeners=n;return this};EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(!this._events)this._events={};if("error"===type){if(!this._events.error||isObject(this._events.error)&&!this._events.error.length){er=arguments[1];if(er instanceof Error){throw er}else{var err=new Error("Uncaught, unspecified \"error\" event. ("+er+")");err.context=er;throw err}}}handler=this._events[type];if(isUndefined(handler))return!1;if(isFunction(handler)){switch(arguments.length){case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;default:args=Array.prototype.slice.call(arguments,1);handler.apply(this,args);}}else if(isObject(handler)){args=Array.prototype.slice.call(arguments,1);listeners=handler.slice();len=listeners.length;for(i=0;i<len;i++)listeners[i].apply(this,args)}return!0};EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError("listener must be a function");if(!this._events)this._events={};if(this._events.newListener)this.emit("newListener",type,isFunction(listener.listener)?listener.listener:listener);if(!this._events[type])this._events[type]=listener;else if(isObject(this._events[type]))this._events[type].push(listener);else this._events[type]=[this._events[type],listener];if(isObject(this._events[type])&&!this._events[type].warned){if(!isUndefined(this._maxListeners)){m=this._maxListeners}else{m=EventEmitter.defaultMaxListeners}if(m&&0<m&&this._events[type].length>m){this._events[type].warned=!0;console.error("(node) warning: possible EventEmitter memory "+"leak detected. %d listeners added. "+"Use emitter.setMaxListeners() to increase limit.",this._events[type].length);if("function"===typeof console.trace){console.trace()}}}return this};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.once=function(type,listener){if(!isFunction(listener))throw TypeError("listener must be a function");var fired=!1;function g(){this.removeListener(type,g);if(!fired){fired=!0;listener.apply(this,arguments)}}g.listener=listener;this.on(type,g);return this};EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError("listener must be a function");if(!this._events||!this._events[type])return this;list=this._events[type];length=list.length;position=-1;if(list===listener||isFunction(list.listener)&&list.listener===listener){delete this._events[type];if(this._events.removeListener)this.emit("removeListener",type,listener)}else if(isObject(list)){for(i=length;0<i--;){if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break}}if(0>position)return this;if(1===list.length){list.length=0;delete this._events[type]}else{list.splice(position,1)}if(this._events.removeListener)this.emit("removeListener",type,listener)}return this};EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;if(!this._events.removeListener){if(0===arguments.length)this._events={};else if(this._events[type])delete this._events[type];return this}if(0===arguments.length){for(key in this._events){if("removeListener"===key)continue;this.removeAllListeners(key)}this.removeAllListeners("removeListener");this._events={};return this}listeners=this._events[type];if(isFunction(listeners)){this.removeListener(type,listeners)}else if(listeners){while(listeners.length)this.removeListener(type,listeners[listeners.length-1])}delete this._events[type];return this};EventEmitter.prototype.listeners=function(type){var ret;if(!this._events||!this._events[type])ret=[];else if(isFunction(this._events[type]))ret=[this._events[type]];else ret=this._events[type].slice();return ret};EventEmitter.prototype.listenerCount=function(type){if(this._events){var evlistener=this._events[type];if(isFunction(evlistener))return 1;else if(evlistener)return evlistener.length}return 0};EventEmitter.listenerCount=function(emitter,type){return emitter.listenerCount(type)};function isFunction(arg){return"function"===typeof arg}function isNumber(arg){return"number"===typeof arg}function isObject(arg){return"object"===typeof arg&&null!==arg}function isUndefined(arg){return void 0===arg}},{}],8:[function(require,module,exports){if("function"===typeof Object.create){module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})}}else{module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function(){};TempCtor.prototype=superCtor.prototype;ctor.prototype=new TempCtor;ctor.prototype.constructor=ctor}}},{}],9:[function(require,module,exports){module.exports=function(obj){return null!=obj&&(isBuffer(obj)||isSlowBuffer(obj)||!!obj._isBuffer)};function isBuffer(obj){return!!obj.constructor&&"function"===typeof obj.constructor.isBuffer&&obj.constructor.isBuffer(obj)}function isSlowBuffer(obj){return"function"===typeof obj.readFloatLE&&"function"===typeof obj.slice&&isBuffer(obj.slice(0,0))}},{}],10:[function(require,module,exports){var process=module.exports={},cachedSetTimeout,cachedClearTimeout;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if("function"===typeof setTimeout){cachedSetTimeout=setTimeout}else{cachedSetTimeout=defaultSetTimout}}catch(e){cachedSetTimeout=defaultSetTimout}try{if("function"===typeof clearTimeout){cachedClearTimeout=clearTimeout}else{cachedClearTimeout=defaultClearTimeout}}catch(e){cachedClearTimeout=defaultClearTimeout}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0)}if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0)}try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker)}if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker)}try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}var queue=[],draining=!1,currentQueue,queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return}draining=!1;if(currentQueue.length){queue=currentQueue.concat(queue)}else{queueIndex=-1}if(queue.length){drainQueue()}}function drainQueue(){if(draining){return}var timeout=runTimeout(cleanUpNextTick);draining=!0;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run()}}queueIndex=-1;len=queue.length}currentQueue=null;draining=!1;runClearTimeout(timeout)}process.nextTick=function(fun){var args=Array(arguments.length-1);if(1<arguments.length){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i]}}queue.push(new Item(fun,args));if(1===queue.length&&!draining){runTimeout(drainQueue)}};function Item(fun,array){this.fun=fun;this.array=array}Item.prototype.run=function(){this.fun.apply(null,this.array)};process.title="browser";process.browser=!0;process.env={};process.argv=[];process.version="";process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")};process.umask=function(){return 0}},{}],11:[function(require,module,exports){module.exports=require("./lib/_stream_duplex.js")},{"./lib/_stream_duplex.js":12}],12:[function(require,module,exports){"use strict";var objectKeys=Object.keys||function(obj){var keys=[];for(var key in obj){keys.push(key)}return keys};module.exports=Duplex;var processNextTick=require("process-nextick-args"),util=require("core-util-is");util.inherits=require("inherits");var Readable=require("./_stream_readable"),Writable=require("./_stream_writable");util.inherits(Duplex,Readable);for(var keys=objectKeys(Writable.prototype),v=0,method;v<keys.length;v++){method=keys[v];if(!Duplex.prototype[method])Duplex.prototype[method]=Writable.prototype[method]}function Duplex(options){if(!(this instanceof Duplex))return new Duplex(options);Readable.call(this,options);Writable.call(this,options);if(options&&!1===options.readable)this.readable=!1;if(options&&!1===options.writable)this.writable=!1;this.allowHalfOpen=!0;if(options&&!1===options.allowHalfOpen)this.allowHalfOpen=!1;this.once("end",onend)}function onend(){if(this.allowHalfOpen||this._writableState.ended)return;processNextTick(onEndNT,this)}function onEndNT(self){self.end()}function forEach(xs,f){for(var i=0,l=xs.length;i<l;i++){f(xs[i],i)}}},{"./_stream_readable":14,"./_stream_writable":16,"core-util-is":19,inherits:8,"process-nextick-args":21}],13:[function(require,module,exports){"use strict";module.exports=PassThrough;var Transform=require("./_stream_transform"),util=require("core-util-is");util.inherits=require("inherits");util.inherits(PassThrough,Transform);function PassThrough(options){if(!(this instanceof PassThrough))return new PassThrough(options);Transform.call(this,options)}PassThrough.prototype._transform=function(chunk,encoding,cb){cb(null,chunk)}},{"./_stream_transform":15,"core-util-is":19,inherits:8}],14:[function(require,module,exports){(function(process){"use strict";module.exports=Readable;var processNextTick=require("process-nextick-args"),isArray=require("isarray");Readable.ReadableState=ReadableState;var EE=require("events").EventEmitter,EElistenerCount=function(emitter,type){return emitter.listeners(type).length},Stream;(function(){try{Stream=require("st"+"ream")}catch(_){}finally{if(!Stream)Stream=require("events").EventEmitter}})();var Buffer=require("buffer").Buffer,bufferShim=require("buffer-shims"),util=require("core-util-is");util.inherits=require("inherits");var debugUtil=require("util"),debug=void 0;if(debugUtil&&debugUtil.debuglog){debug=debugUtil.debuglog("stream")}else{debug=function(){}}var BufferList=require("./internal/streams/BufferList"),StringDecoder;util.inherits(Readable,Stream);function prependListener(emitter,event,fn){if("function"===typeof emitter.prependListener){return emitter.prependListener(event,fn)}else{if(!emitter._events||!emitter._events[event])emitter.on(event,fn);else if(isArray(emitter._events[event]))emitter._events[event].unshift(fn);else emitter._events[event]=[fn,emitter._events[event]]}}var Duplex;function ReadableState(options,stream){Duplex=Duplex||require("./_stream_duplex");options=options||{};this.objectMode=!!options.objectMode;if(stream instanceof Duplex)this.objectMode=this.objectMode||!!options.readableObjectMode;var hwm=options.highWaterMark,defaultHwm=this.objectMode?16:1024*16;this.highWaterMark=hwm||0===hwm?hwm:defaultHwm;this.highWaterMark=~~this.highWaterMark;this.buffer=new BufferList;this.length=0;this.pipes=null;this.pipesCount=0;this.flowing=null;this.ended=!1;this.endEmitted=!1;this.reading=!1;this.sync=!0;this.needReadable=!1;this.emittedReadable=!1;this.readableListening=!1;this.resumeScheduled=!1;this.defaultEncoding=options.defaultEncoding||"utf8";this.ranOut=!1;this.awaitDrain=0;this.readingMore=!1;this.decoder=null;this.encoding=null;if(options.encoding){if(!StringDecoder)StringDecoder=require("client_app/src/yp-magic-text/sanitize-html.min").StringDecoder;this.decoder=new StringDecoder(options.encoding);this.encoding=options.encoding}}var Duplex;function Readable(options){Duplex=Duplex||require("./_stream_duplex");if(!(this instanceof Readable))return new Readable(options);this._readableState=new ReadableState(options,this);this.readable=!0;if(options&&"function"===typeof options.read)this._read=options.read;Stream.call(this)}Readable.prototype.push=function(chunk,encoding){var state=this._readableState;if(!state.objectMode&&"string"===typeof chunk){encoding=encoding||state.defaultEncoding;if(encoding!==state.encoding){chunk=bufferShim.from(chunk,encoding);encoding=""}}return readableAddChunk(this,state,chunk,encoding,!1)};Readable.prototype.unshift=function(chunk){var state=this._readableState;return readableAddChunk(this,state,chunk,"",!0)};Readable.prototype.isPaused=function(){return!1===this._readableState.flowing};function readableAddChunk(stream,state,chunk,encoding,addToFront){var er=chunkInvalid(state,chunk);if(er){stream.emit("error",er)}else if(null===chunk){state.reading=!1;onEofChunk(stream,state)}else if(state.objectMode||chunk&&0<chunk.length){if(state.ended&&!addToFront){var e=new Error("stream.push() after EOF");stream.emit("error",e)}else if(state.endEmitted&&addToFront){var _e=new Error("stream.unshift() after end event");stream.emit("error",_e)}else{var skipAdd;if(state.decoder&&!addToFront&&!encoding){chunk=state.decoder.write(chunk);skipAdd=!state.objectMode&&0===chunk.length}if(!addToFront)state.reading=!1;if(!skipAdd){if(state.flowing&&0===state.length&&!state.sync){stream.emit("data",chunk);stream.read(0)}else{state.length+=state.objectMode?1:chunk.length;if(addToFront)state.buffer.unshift(chunk);else state.buffer.push(chunk);if(state.needReadable)emitReadable(stream)}}maybeReadMore(stream,state)}}else if(!addToFront){state.reading=!1}return needMoreData(state)}function needMoreData(state){return!state.ended&&(state.needReadable||state.length<state.highWaterMark||0===state.length)}Readable.prototype.setEncoding=function(enc){if(!StringDecoder)StringDecoder=require("client_app/src/yp-magic-text/sanitize-html.min").StringDecoder;this._readableState.decoder=new StringDecoder(enc);this._readableState.encoding=enc;return this};var MAX_HWM=8388608;function computeNewHighWaterMark(n){if(n>=MAX_HWM){n=MAX_HWM}else{n--;n|=n>>>1;n|=n>>>2;n|=n>>>4;n|=n>>>8;n|=n>>>16;n++}return n}function howMuchToRead(n,state){if(0>=n||0===state.length&&state.ended)return 0;if(state.objectMode)return 1;if(n!==n){if(state.flowing&&state.length)return state.buffer.head.data.length;else return state.length}if(n>state.highWaterMark)state.highWaterMark=computeNewHighWaterMark(n);if(n<=state.length)return n;if(!state.ended){state.needReadable=!0;return 0}return state.length}Readable.prototype.read=function(n){debug("read",n);n=parseInt(n,10);var state=this._readableState,nOrig=n;if(0!==n)state.emittedReadable=!1;if(0===n&&state.needReadable&&(state.length>=state.highWaterMark||state.ended)){debug("read: emitReadable",state.length,state.ended);if(0===state.length&&state.ended)endReadable(this);else emitReadable(this);return null}n=howMuchToRead(n,state);if(0===n&&state.ended){if(0===state.length)endReadable(this);return null}var doRead=state.needReadable;debug("need readable",doRead);if(0===state.length||state.length-n<state.highWaterMark){doRead=!0;debug("length less than watermark",doRead)}if(state.ended||state.reading){doRead=!1;debug("reading or ended",doRead)}else if(doRead){debug("do read");state.reading=!0;state.sync=!0;if(0===state.length)state.needReadable=!0;this._read(state.highWaterMark);state.sync=!1;if(!state.reading)n=howMuchToRead(nOrig,state)}var ret;if(0<n)ret=fromList(n,state);else ret=null;if(null===ret){state.needReadable=!0;n=0}else{state.length-=n}if(0===state.length){if(!state.ended)state.needReadable=!0;if(nOrig!==n&&state.ended)endReadable(this)}if(null!==ret)this.emit("data",ret);return ret};function chunkInvalid(state,chunk){var er=null;if(!Buffer.isBuffer(chunk)&&"string"!==typeof chunk&&null!==chunk&&chunk!==void 0&&!state.objectMode){er=new TypeError("Invalid non-string/buffer chunk")}return er}function onEofChunk(stream,state){if(state.ended)return;if(state.decoder){var chunk=state.decoder.end();if(chunk&&chunk.length){state.buffer.push(chunk);state.length+=state.objectMode?1:chunk.length}}state.ended=!0;emitReadable(stream)}function emitReadable(stream){var state=stream._readableState;state.needReadable=!1;if(!state.emittedReadable){debug("emitReadable",state.flowing);state.emittedReadable=!0;if(state.sync)processNextTick(emitReadable_,stream);else emitReadable_(stream)}}function emitReadable_(stream){debug("emit readable");stream.emit("readable");flow(stream)}function maybeReadMore(stream,state){if(!state.readingMore){state.readingMore=!0;processNextTick(maybeReadMore_,stream,state)}}function maybeReadMore_(stream,state){var len=state.length;while(!state.reading&&!state.flowing&&!state.ended&&state.length<state.highWaterMark){debug("maybeReadMore read 0");stream.read(0);if(len===state.length)break;else len=state.length}state.readingMore=!1}Readable.prototype._read=function(n){this.emit("error",new Error("not implemented"))};Readable.prototype.pipe=function(dest,pipeOpts){var src=this,state=this._readableState;switch(state.pipesCount){case 0:state.pipes=dest;break;case 1:state.pipes=[state.pipes,dest];break;default:state.pipes.push(dest);break;}state.pipesCount+=1;debug("pipe count=%d opts=%j",state.pipesCount,pipeOpts);var doEnd=(!pipeOpts||!1!==pipeOpts.end)&&dest!==process.stdout&&dest!==process.stderr,endFn=doEnd?onend:cleanup;if(state.endEmitted)processNextTick(endFn);else src.once("end",endFn);dest.on("unpipe",onunpipe);function onunpipe(readable){debug("onunpipe");if(readable===src){cleanup()}}function onend(){debug("onend");dest.end()}var ondrain=pipeOnDrain(src);dest.on("drain",ondrain);var cleanedUp=!1;function cleanup(){debug("cleanup");dest.removeListener("close",onclose);dest.removeListener("finish",onfinish);dest.removeListener("drain",ondrain);dest.removeListener("error",onerror);dest.removeListener("unpipe",onunpipe);src.removeListener("end",onend);src.removeListener("end",cleanup);src.removeListener("data",ondata);cleanedUp=!0;if(state.awaitDrain&&(!dest._writableState||dest._writableState.needDrain))ondrain()}var increasedAwaitDrain=!1;src.on("data",ondata);function ondata(chunk){debug("ondata");increasedAwaitDrain=!1;var ret=dest.write(chunk);if(!1===ret&&!increasedAwaitDrain){if((1===state.pipesCount&&state.pipes===dest||1<state.pipesCount&&-1!==indexOf(state.pipes,dest))&&!cleanedUp){debug("false write response, pause",src._readableState.awaitDrain);src._readableState.awaitDrain++;increasedAwaitDrain=!0}src.pause()}}function onerror(er){debug("onerror",er);unpipe();dest.removeListener("error",onerror);if(0===EElistenerCount(dest,"error"))dest.emit("error",er)}prependListener(dest,"error",onerror);function onclose(){dest.removeListener("finish",onfinish);unpipe()}dest.once("close",onclose);function onfinish(){debug("onfinish");dest.removeListener("close",onclose);unpipe()}dest.once("finish",onfinish);function unpipe(){debug("unpipe");src.unpipe(dest)}dest.emit("pipe",src);if(!state.flowing){debug("pipe resume");src.resume()}return dest};function pipeOnDrain(src){return function(){var state=src._readableState;debug("pipeOnDrain",state.awaitDrain);if(state.awaitDrain)state.awaitDrain--;if(0===state.awaitDrain&&EElistenerCount(src,"data")){state.flowing=!0;flow(src)}}}Readable.prototype.unpipe=function(dest){var state=this._readableState;if(0===state.pipesCount)return this;if(1===state.pipesCount){if(dest&&dest!==state.pipes)return this;if(!dest)dest=state.pipes;state.pipes=null;state.pipesCount=0;state.flowing=!1;if(dest)dest.emit("unpipe",this);return this}if(!dest){var dests=state.pipes,len=state.pipesCount;state.pipes=null;state.pipesCount=0;state.flowing=!1;for(var _i=0;_i<len;_i++){dests[_i].emit("unpipe",this)}return this}var i=indexOf(state.pipes,dest);if(-1===i)return this;state.pipes.splice(i,1);state.pipesCount-=1;if(1===state.pipesCount)state.pipes=state.pipes[0];dest.emit("unpipe",this);return this};Readable.prototype.on=function(ev,fn){var res=Stream.prototype.on.call(this,ev,fn);if("data"===ev){if(!1!==this._readableState.flowing)this.resume()}else if("readable"===ev){var state=this._readableState;if(!state.endEmitted&&!state.readableListening){state.readableListening=state.needReadable=!0;state.emittedReadable=!1;if(!state.reading){processNextTick(nReadingNextTick,this)}else if(state.length){emitReadable(this,state)}}}return res};Readable.prototype.addListener=Readable.prototype.on;function nReadingNextTick(self){debug("readable nexttick read 0");self.read(0)}Readable.prototype.resume=function(){var state=this._readableState;if(!state.flowing){debug("resume");state.flowing=!0;resume(this,state)}return this};function resume(stream,state){if(!state.resumeScheduled){state.resumeScheduled=!0;processNextTick(resume_,stream,state)}}function resume_(stream,state){if(!state.reading){debug("resume read 0");stream.read(0)}state.resumeScheduled=!1;state.awaitDrain=0;stream.emit("resume");flow(stream);if(state.flowing&&!state.reading)stream.read(0)}Readable.prototype.pause=function(){debug("call pause flowing=%j",this._readableState.flowing);if(!1!==this._readableState.flowing){debug("pause");this._readableState.flowing=!1;this.emit("pause")}return this};function flow(stream){var state=stream._readableState;debug("flow",state.flowing);while(state.flowing&&null!==stream.read()){}}Readable.prototype.wrap=function(stream){var state=this._readableState,paused=!1,self=this;stream.on("end",function(){debug("wrapped end");if(state.decoder&&!state.ended){var chunk=state.decoder.end();if(chunk&&chunk.length)self.push(chunk)}self.push(null)});stream.on("data",function(chunk){debug("wrapped data");if(state.decoder)chunk=state.decoder.write(chunk);if(state.objectMode&&(null===chunk||chunk===void 0))return;else if(!state.objectMode&&(!chunk||!chunk.length))return;var ret=self.push(chunk);if(!ret){paused=!0;stream.pause()}});for(var i in stream){if(this[i]===void 0&&"function"===typeof stream[i]){this[i]=function(method){return function(){return stream[method].apply(stream,arguments)}}(i)}}var events=["error","close","destroy","pause","resume"];forEach(events,function(ev){stream.on(ev,self.emit.bind(self,ev))});self._read=function(n){debug("wrapped _read",n);if(paused){paused=!1;stream.resume()}};return self};Readable._fromList=fromList;function fromList(n,state){if(0===state.length)return null;var ret;if(state.objectMode)ret=state.buffer.shift();else if(!n||n>=state.length){if(state.decoder)ret=state.buffer.join("");else if(1===state.buffer.length)ret=state.buffer.head.data;else ret=state.buffer.concat(state.length);state.buffer.clear()}else{ret=fromListPartial(n,state.buffer,state.decoder)}return ret}function fromListPartial(n,list,hasStrings){var ret;if(n<list.head.data.length){ret=list.head.data.slice(0,n);list.head.data=list.head.data.slice(n)}else if(n===list.head.data.length){ret=list.shift()}else{ret=hasStrings?copyFromBufferString(n,list):copyFromBuffer(n,list)}return ret}function copyFromBufferString(n,list){var p=list.head,c=1,ret=p.data;n-=ret.length;while(p=p.next){var str=p.data,nb=n>str.length?str.length:n;if(nb===str.length)ret+=str;else ret+=str.slice(0,n);n-=nb;if(0===n){if(nb===str.length){++c;if(p.next)list.head=p.next;else list.head=list.tail=null}else{list.head=p;p.data=str.slice(nb)}break}++c}list.length-=c;return ret}function copyFromBuffer(n,list){var ret=bufferShim.allocUnsafe(n),p=list.head,c=1;p.data.copy(ret);n-=p.data.length;while(p=p.next){var buf=p.data,nb=n>buf.length?buf.length:n;buf.copy(ret,ret.length-n,0,nb);n-=nb;if(0===n){if(nb===buf.length){++c;if(p.next)list.head=p.next;else list.head=list.tail=null}else{list.head=p;p.data=buf.slice(nb)}break}++c}list.length-=c;return ret}function endReadable(stream){var state=stream._readableState;if(0<state.length)throw new Error("\"endReadable()\" called on non-empty stream");if(!state.endEmitted){state.ended=!0;processNextTick(endReadableNT,state,stream)}}function endReadableNT(state,stream){if(!state.endEmitted&&0===state.length){state.endEmitted=!0;stream.readable=!1;stream.emit("end")}}function forEach(xs,f){for(var i=0,l=xs.length;i<l;i++){f(xs[i],i)}}function indexOf(xs,x){for(var i=0,l=xs.length;i<l;i++){if(xs[i]===x)return i}return-1}}).call(this,require("_process"))},{"./_stream_duplex":12,"./internal/streams/BufferList":17,_process:10,buffer:3,"buffer-shims":18,"core-util-is":19,events:7,inherits:8,isarray:20,"process-nextick-args":21,"string_decoder/":28,util:2}],15:[function(require,module,exports){"use strict";module.exports=Transform;var Duplex=require("./_stream_duplex"),util=require("core-util-is");util.inherits=require("inherits");util.inherits(Transform,Duplex);function TransformState(stream){this.afterTransform=function(er,data){return afterTransform(stream,er,data)};this.needTransform=!1;this.transforming=!1;this.writecb=null;this.writechunk=null;this.writeencoding=null}function afterTransform(stream,er,data){var ts=stream._transformState;ts.transforming=!1;var cb=ts.writecb;if(!cb)return stream.emit("error",new Error("no writecb in Transform class"));ts.writechunk=null;ts.writecb=null;if(null!==data&&data!==void 0)stream.push(data);cb(er);var rs=stream._readableState;rs.reading=!1;if(rs.needReadable||rs.length<rs.highWaterMark){stream._read(rs.highWaterMark)}}function Transform(options){if(!(this instanceof Transform))return new Transform(options);Duplex.call(this,options);this._transformState=new TransformState(this);var stream=this;this._readableState.needReadable=!0;this._readableState.sync=!1;if(options){if("function"===typeof options.transform)this._transform=options.transform;if("function"===typeof options.flush)this._flush=options.flush}this.once("prefinish",function(){if("function"===typeof this._flush)this._flush(function(er){done(stream,er)});else done(stream)})}Transform.prototype.push=function(chunk,encoding){this._transformState.needTransform=!1;return Duplex.prototype.push.call(this,chunk,encoding)};Transform.prototype._transform=function(chunk,encoding,cb){throw new Error("Not implemented")};Transform.prototype._write=function(chunk,encoding,cb){var ts=this._transformState;ts.writecb=cb;ts.writechunk=chunk;ts.writeencoding=encoding;if(!ts.transforming){var rs=this._readableState;if(ts.needTransform||rs.needReadable||rs.length<rs.highWaterMark)this._read(rs.highWaterMark)}};Transform.prototype._read=function(n){var ts=this._transformState;if(null!==ts.writechunk&&ts.writecb&&!ts.transforming){ts.transforming=!0;this._transform(ts.writechunk,ts.writeencoding,ts.afterTransform)}else{ts.needTransform=!0}};function done(stream,er){if(er)return stream.emit("error",er);var ws=stream._writableState,ts=stream._transformState;if(ws.length)throw new Error("Calling transform done when ws.length != 0");if(ts.transforming)throw new Error("Calling transform done when still transforming");return stream.push(null)}},{"./_stream_duplex":12,"core-util-is":19,inherits:8}],16:[function(require,module,exports){(function(process){"use strict";module.exports=Writable;var processNextTick=require("process-nextick-args"),asyncWrite=!process.browser&&-1<["v0.10","v0.9."].indexOf(process.version.slice(0,5))?setImmediate:processNextTick;Writable.WritableState=WritableState;var util=require("core-util-is");util.inherits=require("inherits");var internalUtil={deprecate:require("util-deprecate")},Stream;(function(){try{Stream=require("st"+"ream")}catch(_){}finally{if(!Stream)Stream=require("events").EventEmitter}})();var Buffer=require("buffer").Buffer,bufferShim=require("buffer-shims");util.inherits(Writable,Stream);function nop(){}function WriteReq(chunk,encoding,cb){this.chunk=chunk;this.encoding=encoding;this.callback=cb;this.next=null}var Duplex;function WritableState(options,stream){Duplex=Duplex||require("./_stream_duplex");options=options||{};this.objectMode=!!options.objectMode;if(stream instanceof Duplex)this.objectMode=this.objectMode||!!options.writableObjectMode;var hwm=options.highWaterMark,defaultHwm=this.objectMode?16:1024*16;this.highWaterMark=hwm||0===hwm?hwm:defaultHwm;this.highWaterMark=~~this.highWaterMark;this.needDrain=!1;this.ending=!1;this.ended=!1;this.finished=!1;var noDecode=!1===options.decodeStrings;this.decodeStrings=!noDecode;this.defaultEncoding=options.defaultEncoding||"utf8";this.length=0;this.writing=!1;this.corked=0;this.sync=!0;this.bufferProcessing=!1;this.onwrite=function(er){onwrite(stream,er)};this.writecb=null;this.writelen=0;this.bufferedRequest=null;this.lastBufferedRequest=null;this.pendingcb=0;this.prefinished=!1;this.errorEmitted=!1;this.bufferedRequestCount=0;this.corkedRequestsFree=new CorkedRequest(this)}WritableState.prototype.getBuffer=function writableStateGetBuffer(){var current=this.bufferedRequest,out=[];while(current){out.push(current);current=current.next}return out};(function(){try{Object.defineProperty(WritableState.prototype,"buffer",{get:internalUtil.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer "+"instead.")})}catch(_){}})();var Duplex;function Writable(options){Duplex=Duplex||require("./_stream_duplex");if(!(this instanceof Writable)&&!(this instanceof Duplex))return new Writable(options);this._writableState=new WritableState(options,this);this.writable=!0;if(options){if("function"===typeof options.write)this._write=options.write;if("function"===typeof options.writev)this._writev=options.writev}Stream.call(this)}Writable.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))};function writeAfterEnd(stream,cb){var er=new Error("write after end");stream.emit("error",er);processNextTick(cb,er)}function validChunk(stream,state,chunk,cb){var valid=!0,er=!1;if(null===chunk){er=new TypeError("May not write null values to stream")}else if(!Buffer.isBuffer(chunk)&&"string"!==typeof chunk&&chunk!==void 0&&!state.objectMode){er=new TypeError("Invalid non-string/buffer chunk")}if(er){stream.emit("error",er);processNextTick(cb,er);valid=!1}return valid}Writable.prototype.write=function(chunk,encoding,cb){var state=this._writableState,ret=!1;if("function"===typeof encoding){cb=encoding;encoding=null}if(Buffer.isBuffer(chunk))encoding="buffer";else if(!encoding)encoding=state.defaultEncoding;if("function"!==typeof cb)cb=nop;if(state.ended)writeAfterEnd(this,cb);else if(validChunk(this,state,chunk,cb)){state.pendingcb++;ret=writeOrBuffer(this,state,chunk,encoding,cb)}return ret};Writable.prototype.cork=function(){var state=this._writableState;state.corked++};Writable.prototype.uncork=function(){var state=this._writableState;if(state.corked){state.corked--;if(!state.writing&&!state.corked&&!state.finished&&!state.bufferProcessing&&state.bufferedRequest)clearBuffer(this,state)}};Writable.prototype.setDefaultEncoding=function setDefaultEncoding(encoding){if("string"===typeof encoding)encoding=encoding.toLowerCase();if(!(-1<["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((encoding+"").toLowerCase())))throw new TypeError("Unknown encoding: "+encoding);this._writableState.defaultEncoding=encoding;return this};function decodeChunk(state,chunk,encoding){if(!state.objectMode&&!1!==state.decodeStrings&&"string"===typeof chunk){chunk=bufferShim.from(chunk,encoding)}return chunk}function writeOrBuffer(stream,state,chunk,encoding,cb){chunk=decodeChunk(state,chunk,encoding);if(Buffer.isBuffer(chunk))encoding="buffer";var len=state.objectMode?1:chunk.length;state.length+=len;var ret=state.length<state.highWaterMark;if(!ret)state.needDrain=!0;if(state.writing||state.corked){var last=state.lastBufferedRequest;state.lastBufferedRequest=new WriteReq(chunk,encoding,cb);if(last){last.next=state.lastBufferedRequest}else{state.bufferedRequest=state.lastBufferedRequest}state.bufferedRequestCount+=1}else{doWrite(stream,state,!1,len,chunk,encoding,cb)}return ret}function doWrite(stream,state,writev,len,chunk,encoding,cb){state.writelen=len;state.writecb=cb;state.writing=!0;state.sync=!0;if(writev)stream._writev(chunk,state.onwrite);else stream._write(chunk,encoding,state.onwrite);state.sync=!1}function onwriteError(stream,state,sync,er,cb){--state.pendingcb;if(sync)processNextTick(cb,er);else cb(er);stream._writableState.errorEmitted=!0;stream.emit("error",er)}function onwriteStateUpdate(state){state.writing=!1;state.writecb=null;state.length-=state.writelen;state.writelen=0}function onwrite(stream,er){var state=stream._writableState,sync=state.sync,cb=state.writecb;onwriteStateUpdate(state);if(er)onwriteError(stream,state,sync,er,cb);else{var finished=needFinish(state);if(!finished&&!state.corked&&!state.bufferProcessing&&state.bufferedRequest){clearBuffer(stream,state)}if(sync){asyncWrite(afterWrite,stream,state,finished,cb)}else{afterWrite(stream,state,finished,cb)}}}function afterWrite(stream,state,finished,cb){if(!finished)onwriteDrain(stream,state);state.pendingcb--;cb();finishMaybe(stream,state)}function onwriteDrain(stream,state){if(0===state.length&&state.needDrain){state.needDrain=!1;stream.emit("drain")}}function clearBuffer(stream,state){state.bufferProcessing=!0;var entry=state.bufferedRequest;if(stream._writev&&entry&&entry.next){var l=state.bufferedRequestCount,buffer=Array(l),holder=state.corkedRequestsFree;holder.entry=entry;var count=0;while(entry){buffer[count]=entry;entry=entry.next;count+=1}doWrite(stream,state,!0,state.length,buffer,"",holder.finish);state.pendingcb++;state.lastBufferedRequest=null;if(holder.next){state.corkedRequestsFree=holder.next;holder.next=null}else{state.corkedRequestsFree=new CorkedRequest(state)}}else{while(entry){var chunk=entry.chunk,encoding=entry.encoding,cb=entry.callback,len=state.objectMode?1:chunk.length;doWrite(stream,state,!1,len,chunk,encoding,cb);entry=entry.next;if(state.writing){break}}if(null===entry)state.lastBufferedRequest=null}state.bufferedRequestCount=0;state.bufferedRequest=entry;state.bufferProcessing=!1}Writable.prototype._write=function(chunk,encoding,cb){cb(new Error("not implemented"))};Writable.prototype._writev=null;Writable.prototype.end=function(chunk,encoding,cb){var state=this._writableState;if("function"===typeof chunk){cb=chunk;chunk=null;encoding=null}else if("function"===typeof encoding){cb=encoding;encoding=null}if(null!==chunk&&chunk!==void 0)this.write(chunk,encoding);if(state.corked){state.corked=1;this.uncork()}if(!state.ending&&!state.finished)endWritable(this,state,cb)};function needFinish(state){return state.ending&&0===state.length&&null===state.bufferedRequest&&!state.finished&&!state.writing}function prefinish(stream,state){if(!state.prefinished){state.prefinished=!0;stream.emit("prefinish")}}function finishMaybe(stream,state){var need=needFinish(state);if(need){if(0===state.pendingcb){prefinish(stream,state);state.finished=!0;stream.emit("finish")}else{prefinish(stream,state)}}return need}function endWritable(stream,state,cb){state.ending=!0;finishMaybe(stream,state);if(cb){if(state.finished)processNextTick(cb);else stream.once("finish",cb)}state.ended=!0;stream.writable=!1}function CorkedRequest(state){var _this=this;this.next=null;this.entry=null;this.finish=function(err){var entry=_this.entry;_this.entry=null;while(entry){var cb=entry.callback;state.pendingcb--;cb(err);entry=entry.next}if(state.corkedRequestsFree){state.corkedRequestsFree.next=_this}else{state.corkedRequestsFree=_this}}}}).call(this,require("_process"))},{"./_stream_duplex":12,_process:10,buffer:3,"buffer-shims":18,"core-util-is":19,events:7,inherits:8,"process-nextick-args":21,"util-deprecate":22}],17:[function(require,module,exports){"use strict";var Buffer=require("buffer").Buffer,bufferShim=require("buffer-shims");module.exports=BufferList;function BufferList(){this.head=null;this.tail=null;this.length=0}BufferList.prototype.push=function(v){var entry={data:v,next:null};if(0<this.length)this.tail.next=entry;else this.head=entry;this.tail=entry;++this.length};BufferList.prototype.unshift=function(v){var entry={data:v,next:this.head};if(0===this.length)this.tail=entry;this.head=entry;++this.length};BufferList.prototype.shift=function(){if(0===this.length)return;var ret=this.head.data;if(1===this.length)this.head=this.tail=null;else this.head=this.head.next;--this.length;return ret};BufferList.prototype.clear=function(){this.head=this.tail=null;this.length=0};BufferList.prototype.join=function(s){if(0===this.length)return"";var p=this.head,ret=""+p.data;while(p=p.next){ret+=s+p.data}return ret};BufferList.prototype.concat=function(n){if(0===this.length)return bufferShim.alloc(0);if(1===this.length)return this.head.data;var ret=bufferShim.allocUnsafe(n>>>0),p=this.head,i=0;while(p){p.data.copy(ret,i);i+=p.data.length;p=p.next}return ret}},{buffer:3,"buffer-shims":18}],18:[function(require,module,exports){(function(global){"use strict";var buffer=require("buffer"),Buffer=buffer.Buffer,SlowBuffer=buffer.SlowBuffer,MAX_LEN=buffer.kMaxLength||2147483647;exports.alloc=function alloc(size,fill,encoding){if("function"===typeof Buffer.alloc){return Buffer.alloc(size,fill,encoding)}if("number"===typeof encoding){throw new TypeError("encoding must not be number")}if("number"!==typeof size){throw new TypeError("size must be a number")}if(size>MAX_LEN){throw new RangeError("size is too large")}var enc=encoding,_fill=fill;if(_fill===void 0){enc=void 0;_fill=0}var buf=new Buffer(size);if("string"===typeof _fill){var fillBuf=new Buffer(_fill,enc),flen=fillBuf.length,i=-1;while(++i<size){buf[i]=fillBuf[i%flen]}}else{buf.fill(_fill)}return buf};exports.allocUnsafe=function allocUnsafe(size){if("function"===typeof Buffer.allocUnsafe){return Buffer.allocUnsafe(size)}if("number"!==typeof size){throw new TypeError("size must be a number")}if(size>MAX_LEN){throw new RangeError("size is too large")}return new Buffer(size)};exports.from=function from(value,encodingOrOffset,length){if("function"===typeof Buffer.from&&(!global.Uint8Array||Uint8Array.from!==Buffer.from)){return Buffer.from(value,encodingOrOffset,length)}if("number"===typeof value){throw new TypeError("\"value\" argument must not be a number")}if("string"===typeof value){return new Buffer(value,encodingOrOffset)}if("undefined"!==typeof ArrayBuffer&&value instanceof ArrayBuffer){var offset=encodingOrOffset;if(1===arguments.length){return new Buffer(value)}if("undefined"===typeof offset){offset=0}var len=length;if("undefined"===typeof len){len=value.byteLength-offset}if(offset>=value.byteLength){throw new RangeError("'offset' is out of bounds")}if(len>value.byteLength-offset){throw new RangeError("'length' is out of bounds")}return new Buffer(value.slice(offset,offset+len))}if(Buffer.isBuffer(value)){var out=new Buffer(value.length);value.copy(out,0,0,value.length);return out}if(value){if(Array.isArray(value)||"undefined"!==typeof ArrayBuffer&&value.buffer instanceof ArrayBuffer||"length"in value){return new Buffer(value)}if("Buffer"===value.type&&Array.isArray(value.data)){return new Buffer(value.data)}}throw new TypeError("First argument must be a string, Buffer, "+"ArrayBuffer, Array, or array-like object.")};exports.allocUnsafeSlow=function allocUnsafeSlow(size){if("function"===typeof Buffer.allocUnsafeSlow){return Buffer.allocUnsafeSlow(size)}if("number"!==typeof size){throw new TypeError("size must be a number")}if(size>=MAX_LEN){throw new RangeError("size is too large")}return new SlowBuffer(size)}}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{buffer:3}],19:[function(require,module,exports){(function(Buffer){function isArray(arg){if(Array.isArray){return Array.isArray(arg)}return"[object Array]"===objectToString(arg)}exports.isArray=isArray;function isBoolean(arg){return"boolean"===typeof arg}exports.isBoolean=isBoolean;function isNull(arg){return null===arg}exports.isNull=isNull;function isNullOrUndefined(arg){return null==arg}exports.isNullOrUndefined=isNullOrUndefined;function isNumber(arg){return"number"===typeof arg}exports.isNumber=isNumber;function isString(arg){return"string"===typeof arg}exports.isString=isString;function isSymbol(arg){return"symbol"===typeof arg}exports.isSymbol=isSymbol;function isUndefined(arg){return void 0===arg}exports.isUndefined=isUndefined;function isRegExp(re){return"[object RegExp]"===objectToString(re)}exports.isRegExp=isRegExp;function isObject(arg){return"object"===typeof arg&&null!==arg}exports.isObject=isObject;function isDate(d){return"[object Date]"===objectToString(d)}exports.isDate=isDate;function isError(e){return"[object Error]"===objectToString(e)||e instanceof Error}exports.isError=isError;function isFunction(arg){return"function"===typeof arg}exports.isFunction=isFunction;function isPrimitive(arg){return null===arg||"boolean"===typeof arg||"number"===typeof arg||"string"===typeof arg||"symbol"===typeof arg||"undefined"===typeof arg}exports.isPrimitive=isPrimitive;exports.isBuffer=Buffer.isBuffer;function objectToString(o){return Object.prototype.toString.call(o)}}).call(this,{isBuffer:require("../../../../insert-module-globals/node_assets/is-buffer/index.js")})},{"../../../../insert-module-globals/node_assets/is-buffer/index.js":9}],20:[function(require,module,exports){arguments[4][6][0].apply(exports,arguments)},{dup:6}],21:[function(require,module,exports){(function(process){"use strict";if(!process.version||0===process.version.indexOf("v0.")||0===process.version.indexOf("v1.")&&0!==process.version.indexOf("v1.8.")){module.exports=nextTick}else{module.exports=process.nextTick}function nextTick(fn,arg1,arg2,arg3){if("function"!==typeof fn){throw new TypeError("\"callback\" argument must be a function")}var len=arguments.length,args,i;switch(len){case 0:case 1:return process.nextTick(fn);case 2:return process.nextTick(function afterTickOne(){fn.call(null,arg1)});case 3:return process.nextTick(function afterTickTwo(){fn.call(null,arg1,arg2)});case 4:return process.nextTick(function afterTickThree(){fn.call(null,arg1,arg2,arg3)});default:args=Array(len-1);i=0;while(i<args.length){args[i++]=arguments[i]}return process.nextTick(function afterTick(){fn.apply(null,args)});}}}).call(this,require("_process"))},{_process:10}],22:[function(require,module,exports){(function(global){module.exports=deprecate;function deprecate(fn,msg){if(config("noDeprecation")){return fn}var warned=!1;function deprecated(){if(!warned){if(config("throwDeprecation")){throw new Error(msg)}else if(config("traceDeprecation")){console.trace(msg)}else{console.warn(msg)}warned=!0}return fn.apply(this,arguments)}return deprecated}function config(name){try{if(!global.localStorage)return!1}catch(_){return!1}var val=global.localStorage[name];if(null==val)return!1;return"true"===(val+"").toLowerCase()}}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{}],23:[function(require,module,exports){module.exports=require("./lib/_stream_passthrough.js")},{"./lib/_stream_passthrough.js":13}],24:[function(require,module,exports){(function(process){var Stream=function(){try{return require("st"+"ream")}catch(_){}}();exports=module.exports=require("./lib/_stream_readable.js");exports.Stream=Stream||exports;exports.Readable=exports;exports.Writable=require("./lib/_stream_writable.js");exports.Duplex=require("./lib/_stream_duplex.js");exports.Transform=require("./lib/_stream_transform.js");exports.PassThrough=require("./lib/_stream_passthrough.js");if(!process.browser&&"disable"===process.env.READABLE_STREAM&&Stream){module.exports=Stream}}).call(this,require("_process"))},{"./lib/_stream_duplex.js":12,"./lib/_stream_passthrough.js":13,"./lib/_stream_readable.js":14,"./lib/_stream_transform.js":15,"./lib/_stream_writable.js":16,_process:10}],25:[function(require,module,exports){module.exports=require("./lib/_stream_transform.js")},{"./lib/_stream_transform.js":15}],26:[function(require,module,exports){module.exports=require("./lib/_stream_writable.js")},{"./lib/_stream_writable.js":16}],27:[function(require,module,exports){module.exports=Stream;var EE=require("events").EventEmitter,inherits=require("inherits");inherits(Stream,EE);Stream.Readable=require("readable-stream/readable.js");Stream.Writable=require("readable-stream/writable.js");Stream.Duplex=require("readable-stream/duplex.js");Stream.Transform=require("readable-stream/transform.js");Stream.PassThrough=require("readable-stream/passthrough.js");Stream.Stream=Stream;function Stream(){EE.call(this)}Stream.prototype.pipe=function(dest,options){var source=this;function ondata(chunk){if(dest.writable){if(!1===dest.write(chunk)&&source.pause){source.pause()}}}source.on("data",ondata);function ondrain(){if(source.readable&&source.resume){source.resume()}}dest.on("drain",ondrain);if(!dest._isStdio&&(!options||!1!==options.end)){source.on("end",onend);source.on("close",onclose)}var didOnEnd=!1;function onend(){if(didOnEnd)return;didOnEnd=!0;dest.end()}function onclose(){if(didOnEnd)return;didOnEnd=!0;if("function"===typeof dest.destroy)dest.destroy()}function onerror(er){cleanup();if(0===EE.listenerCount(this,"error")){throw er}}source.on("error",onerror);dest.on("error",onerror);function cleanup(){source.removeListener("data",ondata);dest.removeListener("drain",ondrain);source.removeListener("end",onend);source.removeListener("close",onclose);source.removeListener("error",onerror);dest.removeListener("error",onerror);source.removeListener("end",cleanup);source.removeListener("close",cleanup);dest.removeListener("close",cleanup)}source.on("end",cleanup);source.on("close",cleanup);dest.on("close",cleanup);dest.emit("pipe",source);return dest}},{events:7,inherits:8,"readable-stream/duplex.js":11,"readable-stream/passthrough.js":23,"readable-stream/readable.js":24,"readable-stream/transform.js":25,"readable-stream/writable.js":26}],28:[function(require,module,exports){var Buffer=require("buffer").Buffer,isBufferEncoding=Buffer.isEncoding||function(encoding){switch(encoding&&encoding.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1;}};function assertEncoding(encoding){if(encoding&&!isBufferEncoding(encoding)){throw new Error("Unknown encoding: "+encoding)}}var StringDecoder=exports.StringDecoder=function(encoding){this.encoding=(encoding||"utf8").toLowerCase().replace(/[-_]/,"");assertEncoding(encoding);switch(this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2;this.detectIncompleteChar=utf16DetectIncompleteChar;break;case"base64":this.surrogateSize=3;this.detectIncompleteChar=base64DetectIncompleteChar;break;default:this.write=passThroughWrite;return;}this.charBuffer=new Buffer(6);this.charReceived=0;this.charLength=0};StringDecoder.prototype.write=function(buffer){var charStr="";while(this.charLength){var available=buffer.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:buffer.length;buffer.copy(this.charBuffer,this.charReceived,0,available);this.charReceived+=available;if(this.charReceived<this.charLength){return""}buffer=buffer.slice(available,buffer.length);charStr=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var charCode=charStr.charCodeAt(charStr.length-1);if(55296<=charCode&&56319>=charCode){this.charLength+=this.surrogateSize;charStr="";continue}this.charReceived=this.charLength=0;if(0===buffer.length){return charStr}break}this.detectIncompleteChar(buffer);var end=buffer.length;if(this.charLength){buffer.copy(this.charBuffer,0,buffer.length-this.charReceived,end);end-=this.charReceived}charStr+=buffer.toString(this.encoding,0,end);var end=charStr.length-1,charCode=charStr.charCodeAt(end);if(55296<=charCode&&56319>=charCode){var size=this.surrogateSize;this.charLength+=size;this.charReceived+=size;this.charBuffer.copy(this.charBuffer,size,0,size);buffer.copy(this.charBuffer,0,0,size);return charStr.substring(0,end)}return charStr};StringDecoder.prototype.detectIncompleteChar=function(buffer){var i=3<=buffer.length?3:buffer.length;for(;0<i;i--){var c=buffer[buffer.length-i];if(1==i&&6==c>>5){this.charLength=2;break}if(2>=i&&14==c>>4){this.charLength=3;break}if(3>=i&&30==c>>3){this.charLength=4;break}}this.charReceived=i};StringDecoder.prototype.end=function(buffer){var res="";if(buffer&&buffer.length)res=this.write(buffer);if(this.charReceived){var cr=this.charReceived,buf=this.charBuffer,enc=this.encoding;res+=buf.slice(0,cr).toString(enc)}return res};function passThroughWrite(buffer){return buffer.toString(this.encoding)}function utf16DetectIncompleteChar(buffer){this.charReceived=buffer.length%2;this.charLength=this.charReceived?2:0}function base64DetectIncompleteChar(buffer){this.charReceived=buffer.length%3;this.charLength=this.charReceived?3:0}},{buffer:3}],29:[function(require,module,exports){module.exports=CollectingHandler;function CollectingHandler(cbs){this._cbs=cbs||{};this.events=[]}var EVENTS=require("../yp-behaviors").EVENTS;Object.keys(EVENTS).forEach(function(name){if(0===EVENTS[name]){name="on"+name;CollectingHandler.prototype[name]=function(){this.events.push([name]);if(this._cbs[name])this._cbs[name]()}}else if(1===EVENTS[name]){name="on"+name;CollectingHandler.prototype[name]=function(a){this.events.push([name,a]);if(this._cbs[name])this._cbs[name](a)}}else if(2===EVENTS[name]){name="on"+name;CollectingHandler.prototype[name]=function(a,b){this.events.push([name,a,b]);if(this._cbs[name])this._cbs[name](a,b)}}else{throw Error("wrong number of arguments")}});CollectingHandler.prototype.onreset=function(){this.events=[];if(this._cbs.onreset)this._cbs.onreset()};CollectingHandler.prototype.restart=function(){if(this._cbs.onreset)this._cbs.onreset();for(var i=0,len=this.events.length;i<len;i++){if(this._cbs[this.events[i][0]]){var num=this.events[i].length;if(1===num){this._cbs[this.events[i][0]]()}else if(2===num){this._cbs[this.events[i][0]](this.events[i][1])}else{this._cbs[this.events[i][0]](this.events[i][1],this.events[i][2])}}}}},{"./":36}],30:[function(require,module,exports){var index=require("./index.js"),DomHandler=index.DomHandler,DomUtils=index.DomUtils;function FeedHandler(callback,options){this.init(callback,options)}require("inherits")(FeedHandler,DomHandler);FeedHandler.prototype.init=DomHandler;function getElements(what,where){return DomUtils.getElementsByTagName(what,where,!0)}function getOneElement(what,where){return DomUtils.getElementsByTagName(what,where,!0,1)[0]}function fetch(what,where,recurse){return DomUtils.getText(DomUtils.getElementsByTagName(what,where,recurse,1)).trim()}function addConditionally(obj,prop,what,where,recurse){var tmp=fetch(what,where,recurse);if(tmp)obj[prop]=tmp}var isValidFeed=function(value){return"rss"===value||"feed"===value||"rdf:RDF"===value};FeedHandler.prototype.onend=function(){var feed={},feedRoot=getOneElement(isValidFeed,this.dom),tmp,childs;if(feedRoot){if("feed"===feedRoot.name){childs=feedRoot.children;feed.type="atom";addConditionally(feed,"id","id",childs);addConditionally(feed,"title","title",childs);if((tmp=getOneElement("link",childs))&&(tmp=tmp.attribs)&&(tmp=tmp.href))feed.link=tmp;addConditionally(feed,"description","subtitle",childs);if(tmp=fetch("updated",childs))feed.updated=new Date(tmp);addConditionally(feed,"author","email",childs,!0);feed.items=getElements("entry",childs).map(function(item){var entry={},tmp;item=item.children;addConditionally(entry,"id","id",item);addConditionally(entry,"title","title",item);if((tmp=getOneElement("link",item))&&(tmp=tmp.attribs)&&(tmp=tmp.href))entry.link=tmp;if(tmp=fetch("summary",item)||fetch("content",item))entry.description=tmp;if(tmp=fetch("updated",item))entry.pubDate=new Date(tmp);return entry})}else{childs=getOneElement("channel",feedRoot.children).children;feed.type=feedRoot.name.substr(0,3);feed.id="";addConditionally(feed,"title","title",childs);addConditionally(feed,"link","link",childs);addConditionally(feed,"description","description",childs);if(tmp=fetch("lastBuildDate",childs))feed.updated=new Date(tmp);addConditionally(feed,"author","managingEditor",childs,!0);feed.items=getElements("item",feedRoot.children).map(function(item){var entry={},tmp;item=item.children;addConditionally(entry,"id","guid",item);addConditionally(entry,"title","title",item);addConditionally(entry,"link","link",item);addConditionally(entry,"description","description",item);if(tmp=fetch("pubDate",item))entry.pubDate=new Date(tmp);return entry})}}this.dom=feed;DomHandler.prototype._handleCallback.call(this,feedRoot?null:Error("couldn't find root of feed"))};module.exports=FeedHandler},{"./index.js":36,inherits:58}],31:[function(require,module,exports){var Tokenizer=require("./Tokenizer.js"),formTags={input:!0,option:!0,optgroup:!0,select:!0,button:!0,datalist:!0,textarea:!0},openImpliesClose={tr:{tr:!0,th:!0,td:!0},th:{th:!0},td:{thead:!0,th:!0,td:!0},body:{head:!0,link:!0,script:!0},li:{li:!0},p:{p:!0},h1:{p:!0},h2:{p:!0},h3:{p:!0},h4:{p:!0},h5:{p:!0},h6:{p:!0},select:formTags,input:formTags,output:formTags,button:formTags,datalist:formTags,textarea:formTags,option:{option:!0},optgroup:{optgroup:!0}},voidElements={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,path:!0,circle:!0,ellipse:!0,line:!0,rect:!0,use:!0,stop:!0,polyline:!0,polygon:!0},re_nameEnd=/\s|\//;function Parser(cbs,options){this._options=options||{};this._cbs=cbs||{};this._tagname="";this._attribname="";this._attribvalue="";this._attribs=null;this._stack=[];this.startIndex=0;this.endIndex=null;this._lowerCaseTagNames="lowerCaseTags"in this._options?!!this._options.lowerCaseTags:!this._options.xmlMode;this._lowerCaseAttributeNames="lowerCaseAttributeNames"in this._options?!!this._options.lowerCaseAttributeNames:!this._options.xmlMode;if(this._options.Tokenizer){Tokenizer=this._options.Tokenizer}this._tokenizer=new Tokenizer(this._options,this);if(this._cbs.onparserinit)this._cbs.onparserinit(this)}require("inherits")(Parser,require("events").EventEmitter);Parser.prototype._updatePosition=function(initialOffset){if(null===this.endIndex){if(this._tokenizer._sectionStart<=initialOffset){this.startIndex=0}else{this.startIndex=this._tokenizer._sectionStart-initialOffset}}else this.startIndex=this.endIndex+1;this.endIndex=this._tokenizer.getAbsoluteIndex()};Parser.prototype.ontext=function(data){this._updatePosition(1);this.endIndex--;if(this._cbs.ontext)this._cbs.ontext(data)};Parser.prototype.onopentagname=function(name){if(this._lowerCaseTagNames){name=name.toLowerCase()}this._tagname=name;if(!this._options.xmlMode&&name in openImpliesClose){for(var el;(el=this._stack[this._stack.length-1])in openImpliesClose[name];this.onclosetag(el));}if(this._options.xmlMode||!(name in voidElements)){this._stack.push(name)}if(this._cbs.onopentagname)this._cbs.onopentagname(name);if(this._cbs.onopentag)this._attribs={}};Parser.prototype.onopentagend=function(){this._updatePosition(1);if(this._attribs){if(this._cbs.onopentag)this._cbs.onopentag(this._tagname,this._attribs);this._attribs=null}if(!this._options.xmlMode&&this._cbs.onclosetag&&this._tagname in voidElements){this._cbs.onclosetag(this._tagname)}this._tagname=""};Parser.prototype.onclosetag=function(name){this._updatePosition(1);if(this._lowerCaseTagNames){name=name.toLowerCase()}if(this._stack.length&&(!(name in voidElements)||this._options.xmlMode)){var pos=this._stack.lastIndexOf(name);if(-1!==pos){if(this._cbs.onclosetag){pos=this._stack.length-pos;while(pos--)this._cbs.onclosetag(this._stack.pop())}else this._stack.length=pos}else if("p"===name&&!this._options.xmlMode){this.onopentagname(name);this._closeCurrentTag()}}else if(!this._options.xmlMode&&("br"===name||"p"===name)){this.onopentagname(name);this._closeCurrentTag()}};Parser.prototype.onselfclosingtag=function(){if(this._options.xmlMode||this._options.recognizeSelfClosing){this._closeCurrentTag()}else{this.onopentagend()}};Parser.prototype._closeCurrentTag=function(){var name=this._tagname;this.onopentagend();if(this._stack[this._stack.length-1]===name){if(this._cbs.onclosetag){this._cbs.onclosetag(name)}this._stack.pop()}};Parser.prototype.onattribname=function(name){if(this._lowerCaseAttributeNames){name=name.toLowerCase()}this._attribname=name};Parser.prototype.onattribdata=function(value){this._attribvalue+=value};Parser.prototype.onattribend=function(){if(this._cbs.onattribute)this._cbs.onattribute(this._attribname,this._attribvalue);if(this._attribs&&!Object.prototype.hasOwnProperty.call(this._attribs,this._attribname)){this._attribs[this._attribname]=this._attribvalue}this._attribname="";this._attribvalue=""};Parser.prototype._getInstructionName=function(value){var idx=value.search(re_nameEnd),name=0>idx?value:value.substr(0,idx);if(this._lowerCaseTagNames){name=name.toLowerCase()}return name};Parser.prototype.ondeclaration=function(value){if(this._cbs.onprocessinginstruction){var name=this._getInstructionName(value);this._cbs.onprocessinginstruction("!"+name,"!"+value)}};Parser.prototype.onprocessinginstruction=function(value){if(this._cbs.onprocessinginstruction){var name=this._getInstructionName(value);this._cbs.onprocessinginstruction("?"+name,"?"+value)}};Parser.prototype.oncomment=function(value){this._updatePosition(4);if(this._cbs.oncomment)this._cbs.oncomment(value);if(this._cbs.oncommentend)this._cbs.oncommentend()};Parser.prototype.oncdata=function(value){this._updatePosition(1);if(this._options.xmlMode||this._options.recognizeCDATA){if(this._cbs.oncdatastart)this._cbs.oncdatastart();if(this._cbs.ontext)this._cbs.ontext(value);if(this._cbs.oncdataend)this._cbs.oncdataend()}else{this.oncomment("[CDATA["+value+"]]")}};Parser.prototype.onerror=function(err){if(this._cbs.onerror)this._cbs.onerror(err)};Parser.prototype.onend=function(){if(this._cbs.onclosetag){for(var i=this._stack.length;0<i;this._cbs.onclosetag(this._stack[--i]));}if(this._cbs.onend)this._cbs.onend()};Parser.prototype.reset=function(){if(this._cbs.onreset)this._cbs.onreset();this._tokenizer.reset();this._tagname="";this._attribname="";this._attribs=null;this._stack=[];if(this._cbs.onparserinit)this._cbs.onparserinit(this)};Parser.prototype.parseComplete=function(data){this.reset();this.end(data)};Parser.prototype.write=function(chunk){this._tokenizer.write(chunk)};Parser.prototype.end=function(chunk){this._tokenizer.end(chunk)};Parser.prototype.pause=function(){this._tokenizer.pause()};Parser.prototype.resume=function(){this._tokenizer.resume()};Parser.prototype.parseChunk=Parser.prototype.write;Parser.prototype.done=Parser.prototype.end;module.exports=Parser},{"./Tokenizer.js":34,events:7,inherits:58}],32:[function(require,module,exports){module.exports=ProxyHandler;function ProxyHandler(cbs){this._cbs=cbs||{}}var EVENTS=require("../yp-behaviors").EVENTS;Object.keys(EVENTS).forEach(function(name){if(0===EVENTS[name]){name="on"+name;ProxyHandler.prototype[name]=function(){if(this._cbs[name])this._cbs[name]()}}else if(1===EVENTS[name]){name="on"+name;ProxyHandler.prototype[name]=function(a){if(this._cbs[name])this._cbs[name](a)}}else if(2===EVENTS[name]){name="on"+name;ProxyHandler.prototype[name]=function(a,b){if(this._cbs[name])this._cbs[name](a,b)}}else{throw Error("wrong number of arguments")}})},{"./":36}],33:[function(require,module,exports){module.exports=Stream;var Parser=require("./WritableStream.js");function Stream(options){Parser.call(this,new Cbs(this),options)}require("inherits")(Stream,Parser);Stream.prototype.readable=!0;function Cbs(scope){this.scope=scope}var EVENTS=require("../").EVENTS;Object.keys(EVENTS).forEach(function(name){if(0===EVENTS[name]){Cbs.prototype["on"+name]=function(){this.scope.emit(name)}}else if(1===EVENTS[name]){Cbs.prototype["on"+name]=function(a){this.scope.emit(name,a)}}else if(2===EVENTS[name]){Cbs.prototype["on"+name]=function(a,b){this.scope.emit(name,a,b)}}else{throw Error("wrong number of arguments!")}})},{"../":36,"./WritableStream.js":35,inherits:58}],34:[function(require,module,exports){module.exports=Tokenizer;var decodeCodePoint=require("entities/lib/decode_codepoint.js"),entityMap=require("entities/maps/entities.json"),legacyMap=require("entities/maps/legacy.json"),xmlMap=require("entities/maps/xml.json"),i=0,TEXT=i++,BEFORE_TAG_NAME=i++,IN_TAG_NAME=i++,IN_SELF_CLOSING_TAG=i++,BEFORE_CLOSING_TAG_NAME=i++,IN_CLOSING_TAG_NAME=i++,AFTER_CLOSING_TAG_NAME=i++,BEFORE_ATTRIBUTE_NAME=i++,IN_ATTRIBUTE_NAME=i++,AFTER_ATTRIBUTE_NAME=i++,BEFORE_ATTRIBUTE_VALUE=i++,IN_ATTRIBUTE_VALUE_DQ=i++,IN_ATTRIBUTE_VALUE_SQ=i++,IN_ATTRIBUTE_VALUE_NQ=i++,BEFORE_DECLARATION=i++,IN_DECLARATION=i++,IN_PROCESSING_INSTRUCTION=i++,BEFORE_COMMENT=i++,IN_COMMENT=i++,AFTER_COMMENT_1=i++,AFTER_COMMENT_2=i++,BEFORE_CDATA_1=i++,BEFORE_CDATA_2=i++,BEFORE_CDATA_3=i++,BEFORE_CDATA_4=i++,BEFORE_CDATA_5=i++,BEFORE_CDATA_6=i++,IN_CDATA=i++,AFTER_CDATA_1=i++,AFTER_CDATA_2=i++,BEFORE_SPECIAL=i++,BEFORE_SPECIAL_END=i++,BEFORE_SCRIPT_1=i++,BEFORE_SCRIPT_2=i++,BEFORE_SCRIPT_3=i++,BEFORE_SCRIPT_4=i++,BEFORE_SCRIPT_5=i++,AFTER_SCRIPT_1=i++,AFTER_SCRIPT_2=i++,AFTER_SCRIPT_3=i++,AFTER_SCRIPT_4=i++,AFTER_SCRIPT_5=i++,BEFORE_STYLE_1=i++,BEFORE_STYLE_2=i++,BEFORE_STYLE_3=i++,BEFORE_STYLE_4=i++,AFTER_STYLE_1=i++,AFTER_STYLE_2=i++,AFTER_STYLE_3=i++,AFTER_STYLE_4=i++,BEFORE_ENTITY=i++,BEFORE_NUMERIC_ENTITY=i++,IN_NAMED_ENTITY=i++,IN_NUMERIC_ENTITY=i++,IN_HEX_ENTITY=i++,j=0,SPECIAL_NONE=j++,SPECIAL_SCRIPT=j++,SPECIAL_STYLE=j++;function whitespace(c){return" "===c||"\n"===c||"\t"===c||"\f"===c||"\r"===c}function characterState(char,SUCCESS){return function(c){if(c===char)this._state=SUCCESS}}function ifElseState(upper,SUCCESS,FAILURE){var lower=upper.toLowerCase();if(upper===lower){return function(c){if(c===lower){this._state=SUCCESS}else{this._state=FAILURE;this._index--}}}else{return function(c){if(c===lower||c===upper){this._state=SUCCESS}else{this._state=FAILURE;this._index--}}}}function consumeSpecialNameChar(upper,NEXT_STATE){var lower=upper.toLowerCase();return function(c){if(c===lower||c===upper){this._state=NEXT_STATE}else{this._state=IN_TAG_NAME;this._index--}}}function Tokenizer(options,cbs){this._state=TEXT;this._buffer="";this._sectionStart=0;this._index=0;this._bufferOffset=0;this._baseState=TEXT;this._special=SPECIAL_NONE;this._cbs=cbs;this._running=!0;this._ended=!1;this._xmlMode=!!(options&&options.xmlMode);this._decodeEntities=!!(options&&options.decodeEntities)}Tokenizer.prototype._stateText=function(c){if("<"===c){if(this._index>this._sectionStart){this._cbs.ontext(this._getSection())}this._state=BEFORE_TAG_NAME;this._sectionStart=this._index}else if(this._decodeEntities&&this._special===SPECIAL_NONE&&"&"===c){if(this._index>this._sectionStart){this._cbs.ontext(this._getSection())}this._baseState=TEXT;this._state=BEFORE_ENTITY;this._sectionStart=this._index}};Tokenizer.prototype._stateBeforeTagName=function(c){if("/"===c){this._state=BEFORE_CLOSING_TAG_NAME}else if("<"===c){this._cbs.ontext(this._getSection());this._sectionStart=this._index}else if(">"===c||this._special!==SPECIAL_NONE||whitespace(c)){this._state=TEXT}else if("!"===c){this._state=BEFORE_DECLARATION;this._sectionStart=this._index+1}else if("?"===c){this._state=IN_PROCESSING_INSTRUCTION;this._sectionStart=this._index+1}else{this._state=!this._xmlMode&&("s"===c||"S"===c)?BEFORE_SPECIAL:IN_TAG_NAME;this._sectionStart=this._index}};Tokenizer.prototype._stateInTagName=function(c){if("/"===c||">"===c||whitespace(c)){this._emitToken("onopentagname");this._state=BEFORE_ATTRIBUTE_NAME;this._index--}};Tokenizer.prototype._stateBeforeCloseingTagName=function(c){if(whitespace(c));else if(">"===c){this._state=TEXT}else if(this._special!==SPECIAL_NONE){if("s"===c||"S"===c){this._state=BEFORE_SPECIAL_END}else{this._state=TEXT;this._index--}}else{this._state=IN_CLOSING_TAG_NAME;this._sectionStart=this._index}};Tokenizer.prototype._stateInCloseingTagName=function(c){if(">"===c||whitespace(c)){this._emitToken("onclosetag");this._state=AFTER_CLOSING_TAG_NAME;this._index--}};Tokenizer.prototype._stateAfterCloseingTagName=function(c){if(">"===c){this._state=TEXT;this._sectionStart=this._index+1}};Tokenizer.prototype._stateBeforeAttributeName=function(c){if(">"===c){this._cbs.onopentagend();this._state=TEXT;this._sectionStart=this._index+1}else if("/"===c){this._state=IN_SELF_CLOSING_TAG}else if(!whitespace(c)){this._state=IN_ATTRIBUTE_NAME;this._sectionStart=this._index}};Tokenizer.prototype._stateInSelfClosingTag=function(c){if(">"===c){this._cbs.onselfclosingtag();this._state=TEXT;this._sectionStart=this._index+1}else if(!whitespace(c)){this._state=BEFORE_ATTRIBUTE_NAME;this._index--}};Tokenizer.prototype._stateInAttributeName=function(c){if("="===c||"/"===c||">"===c||whitespace(c)){this._cbs.onattribname(this._getSection());this._sectionStart=-1;this._state=AFTER_ATTRIBUTE_NAME;this._index--}};Tokenizer.prototype._stateAfterAttributeName=function(c){if("="===c){this._state=BEFORE_ATTRIBUTE_VALUE}else if("/"===c||">"===c){this._cbs.onattribend();this._state=BEFORE_ATTRIBUTE_NAME;this._index--}else if(!whitespace(c)){this._cbs.onattribend();this._state=IN_ATTRIBUTE_NAME;this._sectionStart=this._index}};Tokenizer.prototype._stateBeforeAttributeValue=function(c){if("\""===c){this._state=IN_ATTRIBUTE_VALUE_DQ;this._sectionStart=this._index+1}else if("'"===c){this._state=IN_ATTRIBUTE_VALUE_SQ;this._sectionStart=this._index+1}else if(!whitespace(c)){this._state=IN_ATTRIBUTE_VALUE_NQ;this._sectionStart=this._index;this._index--}};Tokenizer.prototype._stateInAttributeValueDoubleQuotes=function(c){if("\""===c){this._emitToken("onattribdata");this._cbs.onattribend();this._state=BEFORE_ATTRIBUTE_NAME}else if(this._decodeEntities&&"&"===c){this._emitToken("onattribdata");this._baseState=this._state;this._state=BEFORE_ENTITY;this._sectionStart=this._index}};Tokenizer.prototype._stateInAttributeValueSingleQuotes=function(c){if("'"===c){this._emitToken("onattribdata");this._cbs.onattribend();this._state=BEFORE_ATTRIBUTE_NAME}else if(this._decodeEntities&&"&"===c){this._emitToken("onattribdata");this._baseState=this._state;this._state=BEFORE_ENTITY;this._sectionStart=this._index}};Tokenizer.prototype._stateInAttributeValueNoQuotes=function(c){if(whitespace(c)||">"===c){this._emitToken("onattribdata");this._cbs.onattribend();this._state=BEFORE_ATTRIBUTE_NAME;this._index--}else if(this._decodeEntities&&"&"===c){this._emitToken("onattribdata");this._baseState=this._state;this._state=BEFORE_ENTITY;this._sectionStart=this._index}};Tokenizer.prototype._stateBeforeDeclaration=function(c){this._state="["===c?BEFORE_CDATA_1:"-"===c?BEFORE_COMMENT:IN_DECLARATION};Tokenizer.prototype._stateInDeclaration=function(c){if(">"===c){this._cbs.ondeclaration(this._getSection());this._state=TEXT;this._sectionStart=this._index+1}};Tokenizer.prototype._stateInProcessingInstruction=function(c){if(">"===c){this._cbs.onprocessinginstruction(this._getSection());this._state=TEXT;this._sectionStart=this._index+1}};Tokenizer.prototype._stateBeforeComment=function(c){if("-"===c){this._state=IN_COMMENT;this._sectionStart=this._index+1}else{this._state=IN_DECLARATION}};Tokenizer.prototype._stateInComment=function(c){if("-"===c)this._state=AFTER_COMMENT_1};Tokenizer.prototype._stateAfterComment1=function(c){if("-"===c){this._state=AFTER_COMMENT_2}else{this._state=IN_COMMENT}};Tokenizer.prototype._stateAfterComment2=function(c){if(">"===c){this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2));this._state=TEXT;this._sectionStart=this._index+1}else if("-"!==c){this._state=IN_COMMENT}};Tokenizer.prototype._stateBeforeCdata1=ifElseState("C",BEFORE_CDATA_2,IN_DECLARATION);Tokenizer.prototype._stateBeforeCdata2=ifElseState("D",BEFORE_CDATA_3,IN_DECLARATION);Tokenizer.prototype._stateBeforeCdata3=ifElseState("A",BEFORE_CDATA_4,IN_DECLARATION);Tokenizer.prototype._stateBeforeCdata4=ifElseState("T",BEFORE_CDATA_5,IN_DECLARATION);Tokenizer.prototype._stateBeforeCdata5=ifElseState("A",BEFORE_CDATA_6,IN_DECLARATION);Tokenizer.prototype._stateBeforeCdata6=function(c){if("["===c){this._state=IN_CDATA;this._sectionStart=this._index+1}else{this._state=IN_DECLARATION;this._index--}};Tokenizer.prototype._stateInCdata=function(c){if("]"===c)this._state=AFTER_CDATA_1};Tokenizer.prototype._stateAfterCdata1=characterState("]",AFTER_CDATA_2);Tokenizer.prototype._stateAfterCdata2=function(c){if(">"===c){this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2));this._state=TEXT;this._sectionStart=this._index+1}else if("]"!==c){this._state=IN_CDATA}};Tokenizer.prototype._stateBeforeSpecial=function(c){if("c"===c||"C"===c){this._state=BEFORE_SCRIPT_1}else if("t"===c||"T"===c){this._state=BEFORE_STYLE_1}else{this._state=IN_TAG_NAME;this._index--}};Tokenizer.prototype._stateBeforeSpecialEnd=function(c){if(this._special===SPECIAL_SCRIPT&&("c"===c||"C"===c)){this._state=AFTER_SCRIPT_1}else if(this._special===SPECIAL_STYLE&&("t"===c||"T"===c)){this._state=AFTER_STYLE_1}else this._state=TEXT};Tokenizer.prototype._stateBeforeScript1=consumeSpecialNameChar("R",BEFORE_SCRIPT_2);Tokenizer.prototype._stateBeforeScript2=consumeSpecialNameChar("I",BEFORE_SCRIPT_3);Tokenizer.prototype._stateBeforeScript3=consumeSpecialNameChar("P",BEFORE_SCRIPT_4);Tokenizer.prototype._stateBeforeScript4=consumeSpecialNameChar("T",BEFORE_SCRIPT_5);Tokenizer.prototype._stateBeforeScript5=function(c){if("/"===c||">"===c||whitespace(c)){this._special=SPECIAL_SCRIPT}this._state=IN_TAG_NAME;this._index--};Tokenizer.prototype._stateAfterScript1=ifElseState("R",AFTER_SCRIPT_2,TEXT);Tokenizer.prototype._stateAfterScript2=ifElseState("I",AFTER_SCRIPT_3,TEXT);Tokenizer.prototype._stateAfterScript3=ifElseState("P",AFTER_SCRIPT_4,TEXT);Tokenizer.prototype._stateAfterScript4=ifElseState("T",AFTER_SCRIPT_5,TEXT);Tokenizer.prototype._stateAfterScript5=function(c){if(">"===c||whitespace(c)){this._special=SPECIAL_NONE;this._state=IN_CLOSING_TAG_NAME;this._sectionStart=this._index-6;this._index--}else this._state=TEXT};Tokenizer.prototype._stateBeforeStyle1=consumeSpecialNameChar("Y",BEFORE_STYLE_2);Tokenizer.prototype._stateBeforeStyle2=consumeSpecialNameChar("L",BEFORE_STYLE_3);Tokenizer.prototype._stateBeforeStyle3=consumeSpecialNameChar("E",BEFORE_STYLE_4);Tokenizer.prototype._stateBeforeStyle4=function(c){if("/"===c||">"===c||whitespace(c)){this._special=SPECIAL_STYLE}this._state=IN_TAG_NAME;this._index--};Tokenizer.prototype._stateAfterStyle1=ifElseState("Y",AFTER_STYLE_2,TEXT);Tokenizer.prototype._stateAfterStyle2=ifElseState("L",AFTER_STYLE_3,TEXT);Tokenizer.prototype._stateAfterStyle3=ifElseState("E",AFTER_STYLE_4,TEXT);Tokenizer.prototype._stateAfterStyle4=function(c){if(">"===c||whitespace(c)){this._special=SPECIAL_NONE;this._state=IN_CLOSING_TAG_NAME;this._sectionStart=this._index-5;this._index--}else this._state=TEXT};Tokenizer.prototype._stateBeforeEntity=ifElseState("#",BEFORE_NUMERIC_ENTITY,IN_NAMED_ENTITY);Tokenizer.prototype._stateBeforeNumericEntity=ifElseState("X",IN_HEX_ENTITY,IN_NUMERIC_ENTITY);Tokenizer.prototype._parseNamedEntityStrict=function(){if(this._sectionStart+1<this._index){var entity=this._buffer.substring(this._sectionStart+1,this._index),map=this._xmlMode?xmlMap:entityMap;if(map.hasOwnProperty(entity)){this._emitPartial(map[entity]);this._sectionStart=this._index+1}}};Tokenizer.prototype._parseLegacyEntity=function(){var start=this._sectionStart+1,limit=this._index-start;if(6<limit)limit=6;while(2<=limit){var entity=this._buffer.substr(start,limit);if(legacyMap.hasOwnProperty(entity)){this._emitPartial(legacyMap[entity]);this._sectionStart+=limit+1;return}else{limit--}}};Tokenizer.prototype._stateInNamedEntity=function(c){if(";"===c){this._parseNamedEntityStrict();if(this._sectionStart+1<this._index&&!this._xmlMode){this._parseLegacyEntity()}this._state=this._baseState}else if(("a">c||"z"<c)&&("A">c||"Z"<c)&&("0">c||"9"<c)){if(this._xmlMode);else if(this._sectionStart+1===this._index);else if(this._baseState!==TEXT){if("="!==c){this._parseNamedEntityStrict()}}else{this._parseLegacyEntity()}this._state=this._baseState;this._index--}};Tokenizer.prototype._decodeNumericEntity=function(offset,base){var sectionStart=this._sectionStart+offset;if(sectionStart!==this._index){var entity=this._buffer.substring(sectionStart,this._index),parsed=parseInt(entity,base);this._emitPartial(decodeCodePoint(parsed));this._sectionStart=this._index}else{this._sectionStart--}this._state=this._baseState};Tokenizer.prototype._stateInNumericEntity=function(c){if(";"===c){this._decodeNumericEntity(2,10);this._sectionStart++}else if("0">c||"9"<c){if(!this._xmlMode){this._decodeNumericEntity(2,10)}else{this._state=this._baseState}this._index--}};Tokenizer.prototype._stateInHexEntity=function(c){if(";"===c){this._decodeNumericEntity(3,16);this._sectionStart++}else if(("a">c||"f"<c)&&("A">c||"F"<c)&&("0">c||"9"<c)){if(!this._xmlMode){this._decodeNumericEntity(3,16)}else{this._state=this._baseState}this._index--}};Tokenizer.prototype._cleanup=function(){if(0>this._sectionStart){this._buffer="";this._index=0;this._bufferOffset+=this._index}else if(this._running){if(this._state===TEXT){if(this._sectionStart!==this._index){this._cbs.ontext(this._buffer.substr(this._sectionStart))}this._buffer="";this._bufferOffset+=this._index;this._index=0}else if(this._sectionStart===this._index){this._buffer="";this._bufferOffset+=this._index;this._index=0}else{this._buffer=this._buffer.substr(this._sectionStart);this._index-=this._sectionStart;this._bufferOffset+=this._sectionStart}this._sectionStart=0}};Tokenizer.prototype.write=function(chunk){if(this._ended)this._cbs.onerror(Error(".write() after done!"));this._buffer+=chunk;this._parse()};Tokenizer.prototype._parse=function(){while(this._index<this._buffer.length&&this._running){var c=this._buffer.charAt(this._index);if(this._state===TEXT){this._stateText(c)}else if(this._state===BEFORE_TAG_NAME){this._stateBeforeTagName(c)}else if(this._state===IN_TAG_NAME){this._stateInTagName(c)}else if(this._state===BEFORE_CLOSING_TAG_NAME){this._stateBeforeCloseingTagName(c)}else if(this._state===IN_CLOSING_TAG_NAME){this._stateInCloseingTagName(c)}else if(this._state===AFTER_CLOSING_TAG_NAME){this._stateAfterCloseingTagName(c)}else if(this._state===IN_SELF_CLOSING_TAG){this._stateInSelfClosingTag(c)}else if(this._state===BEFORE_ATTRIBUTE_NAME){this._stateBeforeAttributeName(c)}else if(this._state===IN_ATTRIBUTE_NAME){this._stateInAttributeName(c)}else if(this._state===AFTER_ATTRIBUTE_NAME){this._stateAfterAttributeName(c)}else if(this._state===BEFORE_ATTRIBUTE_VALUE){this._stateBeforeAttributeValue(c)}else if(this._state===IN_ATTRIBUTE_VALUE_DQ){this._stateInAttributeValueDoubleQuotes(c)}else if(this._state===IN_ATTRIBUTE_VALUE_SQ){this._stateInAttributeValueSingleQuotes(c)}else if(this._state===IN_ATTRIBUTE_VALUE_NQ){this._stateInAttributeValueNoQuotes(c)}else if(this._state===BEFORE_DECLARATION){this._stateBeforeDeclaration(c)}else if(this._state===IN_DECLARATION){this._stateInDeclaration(c)}else if(this._state===IN_PROCESSING_INSTRUCTION){this._stateInProcessingInstruction(c)}else if(this._state===BEFORE_COMMENT){this._stateBeforeComment(c)}else if(this._state===IN_COMMENT){this._stateInComment(c)}else if(this._state===AFTER_COMMENT_1){this._stateAfterComment1(c)}else if(this._state===AFTER_COMMENT_2){this._stateAfterComment2(c)}else if(this._state===BEFORE_CDATA_1){this._stateBeforeCdata1(c)}else if(this._state===BEFORE_CDATA_2){this._stateBeforeCdata2(c)}else if(this._state===BEFORE_CDATA_3){this._stateBeforeCdata3(c)}else if(this._state===BEFORE_CDATA_4){this._stateBeforeCdata4(c)}else if(this._state===BEFORE_CDATA_5){this._stateBeforeCdata5(c)}else if(this._state===BEFORE_CDATA_6){this._stateBeforeCdata6(c)}else if(this._state===IN_CDATA){this._stateInCdata(c)}else if(this._state===AFTER_CDATA_1){this._stateAfterCdata1(c)}else if(this._state===AFTER_CDATA_2){this._stateAfterCdata2(c)}else if(this._state===BEFORE_SPECIAL){this._stateBeforeSpecial(c)}else if(this._state===BEFORE_SPECIAL_END){this._stateBeforeSpecialEnd(c)}else if(this._state===BEFORE_SCRIPT_1){this._stateBeforeScript1(c)}else if(this._state===BEFORE_SCRIPT_2){this._stateBeforeScript2(c)}else if(this._state===BEFORE_SCRIPT_3){this._stateBeforeScript3(c)}else if(this._state===BEFORE_SCRIPT_4){this._stateBeforeScript4(c)}else if(this._state===BEFORE_SCRIPT_5){this._stateBeforeScript5(c)}else if(this._state===AFTER_SCRIPT_1){this._stateAfterScript1(c)}else if(this._state===AFTER_SCRIPT_2){this._stateAfterScript2(c)}else if(this._state===AFTER_SCRIPT_3){this._stateAfterScript3(c)}else if(this._state===AFTER_SCRIPT_4){this._stateAfterScript4(c)}else if(this._state===AFTER_SCRIPT_5){this._stateAfterScript5(c)}else if(this._state===BEFORE_STYLE_1){this._stateBeforeStyle1(c)}else if(this._state===BEFORE_STYLE_2){this._stateBeforeStyle2(c)}else if(this._state===BEFORE_STYLE_3){this._stateBeforeStyle3(c)}else if(this._state===BEFORE_STYLE_4){this._stateBeforeStyle4(c)}else if(this._state===AFTER_STYLE_1){this._stateAfterStyle1(c)}else if(this._state===AFTER_STYLE_2){this._stateAfterStyle2(c)}else if(this._state===AFTER_STYLE_3){this._stateAfterStyle3(c)}else if(this._state===AFTER_STYLE_4){this._stateAfterStyle4(c)}else if(this._state===BEFORE_ENTITY){this._stateBeforeEntity(c)}else if(this._state===BEFORE_NUMERIC_ENTITY){this._stateBeforeNumericEntity(c)}else if(this._state===IN_NAMED_ENTITY){this._stateInNamedEntity(c)}else if(this._state===IN_NUMERIC_ENTITY){this._stateInNumericEntity(c)}else if(this._state===IN_HEX_ENTITY){this._stateInHexEntity(c)}else{this._cbs.onerror(Error("unknown _state"),this._state)}this._index++}this._cleanup()};Tokenizer.prototype.pause=function(){this._running=!1};Tokenizer.prototype.resume=function(){this._running=!0;if(this._index<this._buffer.length){this._parse()}if(this._ended){this._finish()}};Tokenizer.prototype.end=function(chunk){if(this._ended)this._cbs.onerror(Error(".end() after done!"));if(chunk)this.write(chunk);this._ended=!0;if(this._running)this._finish()};Tokenizer.prototype._finish=function(){if(this._sectionStart<this._index){this._handleTrailingData()}this._cbs.onend()};Tokenizer.prototype._handleTrailingData=function(){var data=this._buffer.substr(this._sectionStart);if(this._state===IN_CDATA||this._state===AFTER_CDATA_1||this._state===AFTER_CDATA_2){this._cbs.oncdata(data)}else if(this._state===IN_COMMENT||this._state===AFTER_COMMENT_1||this._state===AFTER_COMMENT_2){this._cbs.oncomment(data)}else if(this._state===IN_NAMED_ENTITY&&!this._xmlMode){this._parseLegacyEntity();if(this._sectionStart<this._index){this._state=this._baseState;this._handleTrailingData()}}else if(this._state===IN_NUMERIC_ENTITY&&!this._xmlMode){this._decodeNumericEntity(2,10);if(this._sectionStart<this._index){this._state=this._baseState;this._handleTrailingData()}}else if(this._state===IN_HEX_ENTITY&&!this._xmlMode){this._decodeNumericEntity(3,16);if(this._sectionStart<this._index){this._state=this._baseState;this._handleTrailingData()}}else if(this._state!==IN_TAG_NAME&&this._state!==BEFORE_ATTRIBUTE_NAME&&this._state!==BEFORE_ATTRIBUTE_VALUE&&this._state!==AFTER_ATTRIBUTE_NAME&&this._state!==IN_ATTRIBUTE_NAME&&this._state!==IN_ATTRIBUTE_VALUE_SQ&&this._state!==IN_ATTRIBUTE_VALUE_DQ&&this._state!==IN_ATTRIBUTE_VALUE_NQ&&this._state!==IN_CLOSING_TAG_NAME){this._cbs.ontext(data)}};Tokenizer.prototype.reset=function(){Tokenizer.call(this,{xmlMode:this._xmlMode,decodeEntities:this._decodeEntities},this._cbs)};Tokenizer.prototype.getAbsoluteIndex=function(){return this._bufferOffset+this._index};Tokenizer.prototype._getSection=function(){return this._buffer.substring(this._sectionStart,this._index)};Tokenizer.prototype._emitToken=function(name){this._cbs[name](this._getSection());this._sectionStart=-1};Tokenizer.prototype._emitPartial=function(value){if(this._baseState!==TEXT){this._cbs.onattribdata(value)}else{this._cbs.ontext(value)}}},{"entities/lib/decode_codepoint.js":52,"entities/maps/entities.json":55,"entities/maps/legacy.json":56,"entities/maps/xml.json":57}],35:[function(require,module,exports){module.exports=Stream;var Parser=require("./Parser.js"),WritableStream=require("stream").Writable||require("readable-stream").Writable,StringDecoder=require("string_decoder").StringDecoder,Buffer=require("buffer").Buffer;function Stream(cbs,options){var parser=this._parser=new Parser(cbs,options),decoder=this._decoder=new StringDecoder;WritableStream.call(this,{decodeStrings:!1});this.once("finish",function(){parser.end(decoder.end())})}require("inherits")(Stream,WritableStream);WritableStream.prototype._write=function(chunk,encoding,cb){if(chunk instanceof Buffer)chunk=this._decoder.write(chunk);this._parser.write(chunk);cb()}},{"./Parser.js":31,buffer:3,inherits:58,"readable-stream":2,stream:27,string_decoder:28}],36:[function(require,module,exports){var Parser=require("./Parser.js"),DomHandler=require("domhandler");function defineProp(name,value){delete module.exports[name];module.exports[name]=value;return value}module.exports={Parser:Parser,Tokenizer:require("./Tokenizer.js"),ElementType:require("domelementtype"),DomHandler:DomHandler,get FeedHandler(){return defineProp("FeedHandler",require("./FeedHandler.js"))},get Stream(){return defineProp("Stream",require("./Stream.js"))},get WritableStream(){return defineProp("WritableStream",require("./WritableStream.js"))},get ProxyHandler(){return defineProp("ProxyHandler",require("./ProxyHandler.js"))},get DomUtils(){return defineProp("DomUtils",require("domutils"))},get CollectingHandler(){return defineProp("CollectingHandler",require("./CollectingHandler.js"))},DefaultHandler:DomHandler,get RssHandler(){return defineProp("RssHandler",this.FeedHandler)},parseDOM:function(data,options){var handler=new DomHandler(options);new Parser(handler,options).end(data);return handler.dom},parseFeed:function(feed,options){var handler=new module.exports.FeedHandler(options);new Parser(handler,options).end(feed);return handler.dom},createDomStream:function(cb,options,elementCb){var handler=new DomHandler(cb,options,elementCb);return new Parser(handler,options)},EVENTS:{attribute:2,cdatastart:0,cdataend:0,text:1,processinginstruction:2,comment:1,commentend:0,closetag:1,opentag:2,opentagname:1,error:1,end:0}}},{"./CollectingHandler.js":29,"./FeedHandler.js":30,"./Parser.js":31,"./ProxyHandler.js":32,"./Stream.js":33,"./Tokenizer.js":34,"./WritableStream.js":35,domelementtype:37,domhandler:38,domutils:41}],37:[function(require,module,exports){module.exports={Text:"text",Directive:"directive",Comment:"comment",Script:"script",Style:"style",Tag:"tag",CDATA:"cdata",Doctype:"doctype",isTag:function(elem){return"tag"===elem.type||"script"===elem.type||"style"===elem.type}}},{}],38:[function(require,module,exports){var ElementType=require("domelementtype"),re_whitespace=/\s+/g,NodePrototype=require("./lib/node"),ElementPrototype=require("./lib/element");function DomHandler(callback,options,elementCB){if("object"===typeof callback){elementCB=options;options=callback;callback=null}else if("function"===typeof options){elementCB=options;options=defaultOpts}this._callback=callback;this._options=options||defaultOpts;this._elementCB=elementCB;this.dom=[];this._done=!1;this._tagStack=[];this._parser=this._parser||null}var defaultOpts={normalizeWhitespace:!1,withStartIndices:!1};DomHandler.prototype.onparserinit=function(parser){this._parser=parser};DomHandler.prototype.onreset=function(){DomHandler.call(this,this._callback,this._options,this._elementCB)};DomHandler.prototype.onend=function(){if(this._done)return;this._done=!0;this._parser=null;this._handleCallback(null)};DomHandler.prototype._handleCallback=DomHandler.prototype.onerror=function(error){if("function"===typeof this._callback){this._callback(error,this.dom)}else{if(error)throw error}};DomHandler.prototype.onclosetag=function(){var elem=this._tagStack.pop();if(this._elementCB)this._elementCB(elem)};DomHandler.prototype._addDomElement=function(element){var parent=this._tagStack[this._tagStack.length-1],siblings=parent?parent.children:this.dom,previousSibling=siblings[siblings.length-1];element.next=null;if(this._options.withStartIndices){element.startIndex=this._parser.startIndex}if(this._options.withDomLvl1){element.__proto__="tag"===element.type?ElementPrototype:NodePrototype}if(previousSibling){element.prev=previousSibling;previousSibling.next=element}else{element.prev=null}siblings.push(element);element.parent=parent||null};DomHandler.prototype.onopentag=function(name,attribs){var element={type:"script"===name?ElementType.Script:"style"===name?ElementType.Style:ElementType.Tag,name:name,attribs:attribs,children:[]};this._addDomElement(element);this._tagStack.push(element)};DomHandler.prototype.ontext=function(data){var normalize=this._options.normalizeWhitespace||this._options.ignoreWhitespace,lastTag;if(!this._tagStack.length&&this.dom.length&&(lastTag=this.dom[this.dom.length-1]).type===ElementType.Text){if(normalize){lastTag.data=(lastTag.data+data).replace(re_whitespace," ")}else{lastTag.data+=data}}else{if(this._tagStack.length&&(lastTag=this._tagStack[this._tagStack.length-1])&&(lastTag=lastTag.children[lastTag.children.length-1])&&lastTag.type===ElementType.Text){if(normalize){lastTag.data=(lastTag.data+data).replace(re_whitespace," ")}else{lastTag.data+=data}}else{if(normalize){data=data.replace(re_whitespace," ")}this._addDomElement({data:data,type:ElementType.Text})}}};DomHandler.prototype.oncomment=function(data){var lastTag=this._tagStack[this._tagStack.length-1];if(lastTag&&lastTag.type===ElementType.Comment){lastTag.data+=data;return}var element={data:data,type:ElementType.Comment};this._addDomElement(element);this._tagStack.push(element)};DomHandler.prototype.oncdatastart=function(){var element={children:[{data:"",type:ElementType.Text}],type:ElementType.CDATA};this._addDomElement(element);this._tagStack.push(element)};DomHandler.prototype.oncommentend=DomHandler.prototype.oncdataend=function(){this._tagStack.pop()};DomHandler.prototype.onprocessinginstruction=function(name,data){this._addDomElement({name:name,data:data,type:ElementType.Directive})};module.exports=DomHandler},{"./lib/element":39,"./lib/node":40,domelementtype:37}],39:[function(require,module,exports){var NodePrototype=require("./node"),ElementPrototype=module.exports=Object.create(NodePrototype),domLvl1={tagName:"name"};Object.keys(domLvl1).forEach(function(key){var shorthand=domLvl1[key];Object.defineProperty(ElementPrototype,key,{get:function(){return this[shorthand]||null},set:function(val){this[shorthand]=val;return val}})})},{"./node":40}],40:[function(require,module,exports){var NodePrototype=module.exports={get firstChild(){var children=this.children;return children&&children[0]||null},get lastChild(){var children=this.children;return children&&children[children.length-1]||null},get nodeType(){return nodeTypes[this.type]||nodeTypes.element}},domLvl1={tagName:"name",childNodes:"children",parentNode:"parent",previousSibling:"prev",nextSibling:"next",nodeValue:"data"},nodeTypes={element:1,text:3,cdata:4,comment:8};Object.keys(domLvl1).forEach(function(key){var shorthand=domLvl1[key];Object.defineProperty(NodePrototype,key,{get:function(){return this[shorthand]||null},set:function(val){this[shorthand]=val;return val}})})},{}],41:[function(require,module,exports){var DomUtils=module.exports;[require("./lib/stringify"),require("./lib/traversal"),require("./lib/manipulation"),require("./lib/querying"),require("./lib/legacy"),require("./lib/helpers")].forEach(function(ext){Object.keys(ext).forEach(function(key){DomUtils[key]=ext[key].bind(DomUtils)})})},{"./lib/helpers":42,"./lib/legacy":43,"./lib/manipulation":44,"./lib/querying":45,"./lib/stringify":46,"./lib/traversal":47}],42:[function(require,module,exports){exports.removeSubsets=function(nodes){var idx=nodes.length,node,ancestor,replace;while(-1<--idx){node=ancestor=nodes[idx];nodes[idx]=null;replace=!0;while(ancestor){if(-1<nodes.indexOf(ancestor)){replace=!1;nodes.splice(idx,1);break}ancestor=ancestor.parent}if(replace){nodes[idx]=node}}return nodes};var POSITION={DISCONNECTED:1,PRECEDING:2,FOLLOWING:4,CONTAINS:8,CONTAINED_BY:16},comparePos=exports.compareDocumentPosition=function(nodeA,nodeB){var aParents=[],bParents=[],current,sharedParent,siblings,aSibling,bSibling,idx;if(nodeA===nodeB){return 0}current=nodeA;while(current){aParents.unshift(current);current=current.parent}current=nodeB;while(current){bParents.unshift(current);current=current.parent}idx=0;while(aParents[idx]===bParents[idx]){idx++}if(0===idx){return POSITION.DISCONNECTED}sharedParent=aParents[idx-1];siblings=sharedParent.children;aSibling=aParents[idx];bSibling=bParents[idx];if(siblings.indexOf(aSibling)>siblings.indexOf(bSibling)){if(sharedParent===nodeB){return POSITION.FOLLOWING|POSITION.CONTAINED_BY}return POSITION.FOLLOWING}else{if(sharedParent===nodeA){return POSITION.PRECEDING|POSITION.CONTAINS}return POSITION.PRECEDING}};exports.uniqueSort=function(nodes){var idx=nodes.length,node,position;nodes=nodes.slice();while(-1<--idx){node=nodes[idx];position=nodes.indexOf(node);if(-1<position&&position<idx){nodes.splice(idx,1)}}nodes.sort(function(a,b){var relative=comparePos(a,b);if(relative&POSITION.PRECEDING){return-1}else if(relative&POSITION.FOLLOWING){return 1}return 0});return nodes}},{}],43:[function(require,module,exports){var ElementType=require("domelementtype"),isTag=exports.isTag=ElementType.isTag;exports.testElement=function(options,element){for(var key in options){if(!options.hasOwnProperty(key));else if("tag_name"===key){if(!isTag(element)||!options.tag_name(element.name)){return!1}}else if("tag_type"===key){if(!options.tag_type(element.type))return!1}else if("tag_contains"===key){if(isTag(element)||!options.tag_contains(element.data)){return!1}}else if(!element.attribs||!options[key](element.attribs[key])){return!1}}return!0};var Checks={tag_name:function(name){if("function"===typeof name){return function(elem){return isTag(elem)&&name(elem.name)}}else if("*"===name){return isTag}else{return function(elem){return isTag(elem)&&elem.name===name}}},tag_type:function(type){if("function"===typeof type){return function(elem){return type(elem.type)}}else{return function(elem){return elem.type===type}}},tag_contains:function(data){if("function"===typeof data){return function(elem){return!isTag(elem)&&data(elem.data)}}else{return function(elem){return!isTag(elem)&&elem.data===data}}}};function getAttribCheck(attrib,value){if("function"===typeof value){return function(elem){return elem.attribs&&value(elem.attribs[attrib])}}else{return function(elem){return elem.attribs&&elem.attribs[attrib]===value}}}function combineFuncs(a,b){return function(elem){return a(elem)||b(elem)}}exports.getElements=function(options,element,recurse,limit){var funcs=Object.keys(options).map(function(key){var value=options[key];return key in Checks?Checks[key](value):getAttribCheck(key,value)});return 0===funcs.length?[]:this.filter(funcs.reduce(combineFuncs),element,recurse,limit)};exports.getElementById=function(id,element,recurse){if(!Array.isArray(element))element=[element];return this.findOne(getAttribCheck("id",id),element,!1!==recurse)};exports.getElementsByTagName=function(name,element,recurse,limit){return this.filter(Checks.tag_name(name),element,recurse,limit)};exports.getElementsByTagType=function(type,element,recurse,limit){return this.filter(Checks.tag_type(type),element,recurse,limit)}},{domelementtype:37}],44:[function(require,module,exports){exports.removeElement=function(elem){if(elem.prev)elem.prev.next=elem.next;if(elem.next)elem.next.prev=elem.prev;if(elem.parent){var childs=elem.parent.children;childs.splice(childs.lastIndexOf(elem),1)}};exports.replaceElement=function(elem,replacement){var prev=replacement.prev=elem.prev;if(prev){prev.next=replacement}var next=replacement.next=elem.next;if(next){next.prev=replacement}var parent=replacement.parent=elem.parent;if(parent){var childs=parent.children;childs[childs.lastIndexOf(elem)]=replacement}};exports.appendChild=function(elem,child){child.parent=elem;if(1!==elem.children.push(child)){var sibling=elem.children[elem.children.length-2];sibling.next=child;child.prev=sibling;child.next=null}};exports.append=function(elem,next){var parent=elem.parent,currNext=elem.next;next.next=currNext;next.prev=elem;elem.next=next;next.parent=parent;if(currNext){currNext.prev=next;if(parent){var childs=parent.children;childs.splice(childs.lastIndexOf(currNext),0,next)}}else if(parent){parent.children.push(next)}};exports.prepend=function(elem,prev){var parent=elem.parent;if(parent){var childs=parent.children;childs.splice(childs.lastIndexOf(elem),0,prev)}if(elem.prev){elem.prev.next=prev}prev.parent=parent;prev.prev=elem.prev;prev.next=elem;elem.prev=prev}},{}],45:[function(require,module,exports){var isTag=require("domelementtype").isTag;module.exports={filter:filter,find:find,findOneChild:findOneChild,findOne:findOne,existsOne:existsOne,findAll:findAll};function filter(test,element,recurse,limit){if(!Array.isArray(element))element=[element];if("number"!==typeof limit||!isFinite(limit)){limit=1/0}return find(test,element,!1!==recurse,limit)}function find(test,elems,recurse,limit){for(var result=[],childs,i=0,j=elems.length;i<j;i++){if(test(elems[i])){result.push(elems[i]);if(0>=--limit)break}childs=elems[i].children;if(recurse&&childs&&0<childs.length){childs=find(test,childs,recurse,limit);result=result.concat(childs);limit-=childs.length;if(0>=limit)break}}return result}function findOneChild(test,elems){for(var i=0,l=elems.length;i<l;i++){if(test(elems[i]))return elems[i]}return null}function findOne(test,elems){for(var elem=null,i=0,l=elems.length;i<l&&!elem;i++){if(!isTag(elems[i])){continue}else if(test(elems[i])){elem=elems[i]}else if(0<elems[i].children.length){elem=findOne(test,elems[i].children)}}return elem}function existsOne(test,elems){for(var i=0,l=elems.length;i<l;i++){if(isTag(elems[i])&&(test(elems[i])||0<elems[i].children.length&&existsOne(test,elems[i].children))){return!0}}return!1}function findAll(test,elems){for(var result=[],i=0,j=elems.length;i<j;i++){if(!isTag(elems[i]))continue;if(test(elems[i]))result.push(elems[i]);if(0<elems[i].children.length){result=result.concat(findAll(test,elems[i].children))}}return result}},{domelementtype:37}],46:[function(require,module,exports){var ElementType=require("domelementtype"),getOuterHTML=require("dom-serializer"),isTag=ElementType.isTag;module.exports={getInnerHTML:getInnerHTML,getOuterHTML:getOuterHTML,getText:getText};function getInnerHTML(elem,opts){return elem.children?elem.children.map(function(elem){return getOuterHTML(elem,opts)}).join(""):""}function getText(elem){if(Array.isArray(elem))return elem.map(getText).join("");if(isTag(elem)||elem.type===ElementType.CDATA)return getText(elem.children);if(elem.type===ElementType.Text)return elem.data;return""}},{"dom-serializer":48,domelementtype:37}],47:[function(require,module,exports){var getChildren=exports.getChildren=function(elem){return elem.children},getParent=exports.getParent=function(elem){return elem.parent};exports.getSiblings=function(elem){var parent=getParent(elem);return parent?getChildren(parent):[elem]};exports.getAttributeValue=function(elem,name){return elem.attribs&&elem.attribs[name]};exports.hasAttrib=function(elem,name){return!!elem.attribs&&hasOwnProperty.call(elem.attribs,name)};exports.getName=function(elem){return elem.name}},{}],48:[function(require,module,exports){var ElementType=require("domelementtype"),entities=require("entities"),booleanAttributes={__proto__:null,allowfullscreen:!0,async:!0,autofocus:!0,autoplay:!0,checked:!0,controls:!0,default:!0,defer:!0,disabled:!0,hidden:!0,ismap:!0,loop:!0,multiple:!0,muted:!0,open:!0,readonly:!0,required:!0,reversed:!0,scoped:!0,seamless:!0,selected:!0,typemustmatch:!0},unencodedElements={__proto__:null,style:!0,script:!0,xmp:!0,iframe:!0,noembed:!0,noframes:!0,plaintext:!0,noscript:!0};function formatAttrs(attributes,opts){if(!attributes)return;var output="",value;for(var key in attributes){value=attributes[key];if(output){output+=" "}if(!value&&booleanAttributes[key]){output+=key}else{output+=key+"=\""+(opts.decodeEntities?entities.encodeXML(value):value)+"\""}}return output}var singleTag={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},render=module.exports=function(dom,opts){if(!Array.isArray(dom)&&!dom.cheerio)dom=[dom];opts=opts||{};for(var output="",i=0,elem;i<dom.length;i++){elem=dom[i];if("root"===elem.type)output+=render(elem.children,opts);else if(ElementType.isTag(elem))output+=renderTag(elem,opts);else if(elem.type===ElementType.Directive)output+=renderDirective(elem);else if(elem.type===ElementType.Comment)output+=renderComment(elem);else if(elem.type===ElementType.CDATA)output+=renderCdata(elem);else output+=renderText(elem,opts)}return output};function renderTag(elem,opts){if("svg"===elem.name)opts={decodeEntities:opts.decodeEntities,xmlMode:!0};var tag="<"+elem.name,attribs=formatAttrs(elem.attribs,opts);if(attribs){tag+=" "+attribs}if(opts.xmlMode&&(!elem.children||0===elem.children.length)){tag+="/>"}else{tag+=">";if(elem.children){tag+=render(elem.children,opts)}if(!singleTag[elem.name]||opts.xmlMode){tag+="</"+elem.name+">"}}return tag}function renderDirective(elem){return"<"+elem.data+">"}function renderText(elem,opts){var data=elem.data||"";if(opts.decodeEntities&&!(elem.parent&&elem.parent.name in unencodedElements)){data=entities.encodeXML(data)}return data}function renderCdata(elem){return"<![CDATA["+elem.children[0].data+"]]>"}function renderComment(elem){return"<!--"+elem.data+"-->"}},{domelementtype:49,entities:50}],49:[function(require,module,exports){module.exports={Text:"text",Directive:"directive",Comment:"comment",Script:"script",Style:"style",Tag:"tag",CDATA:"cdata",isTag:function(elem){return"tag"===elem.type||"script"===elem.type||"style"===elem.type}}},{}],50:[function(require,module,exports){var encode=require("./lib/encode.js"),decode=require("./lib/decode.js");exports.decode=function(data,level){return(!level||0>=level?decode.XML:decode.HTML)(data)};exports.decodeStrict=function(data,level){return(!level||0>=level?decode.XML:decode.HTMLStrict)(data)};exports.encode=function(data,level){return(!level||0>=level?encode.XML:encode.HTML)(data)};exports.encodeXML=encode.XML;exports.encodeHTML4=exports.encodeHTML5=exports.encodeHTML=encode.HTML;exports.decodeXML=exports.decodeXMLStrict=decode.XML;exports.decodeHTML4=exports.decodeHTML5=exports.decodeHTML=decode.HTML;exports.decodeHTML4Strict=exports.decodeHTML5Strict=exports.decodeHTMLStrict=decode.HTMLStrict;exports.escape=encode.escape},{"./lib/decode.js":51,"./lib/encode.js":53}],51:[function(require,module,exports){var entityMap=require("../maps/entities.json"),legacyMap=require("../maps/legacy.json"),xmlMap=require("../maps/xml.json"),decodeCodePoint=require("./decode_codepoint.js"),decodeXMLStrict=getStrictDecoder(xmlMap),decodeHTMLStrict=getStrictDecoder(entityMap);function getStrictDecoder(map){var keys=Object.keys(map).join("|"),replace=getReplacer(map);keys+="|#[xX][\\da-fA-F]+|#\\d+";var re=new RegExp("&(?:"+keys+");","g");return function(str){return(str+"").replace(re,replace)}}var decodeHTML=function(){for(var legacy=Object.keys(legacyMap).sort(sorter),keys=Object.keys(entityMap).sort(sorter),i=0,j=0;i<keys.length;i++){if(legacy[j]===keys[i]){keys[i]+=";?";j++}else{keys[i]+=";"}}var re=new RegExp("&(?:"+keys.join("|")+"|#[xX][\\da-fA-F]+;?|#\\d+;?)","g"),replace=getReplacer(entityMap);function replacer(str){if(";"!==str.substr(-1))str+=";";return replace(str)}return function(str){return(str+"").replace(re,replacer)}}();function sorter(a,b){return a<b?1:-1}function getReplacer(map){return function replace(str){if("#"===str.charAt(1)){if("X"===str.charAt(2)||"x"===str.charAt(2)){return decodeCodePoint(parseInt(str.substr(3),16))}return decodeCodePoint(parseInt(str.substr(2),10))}return map[str.slice(1,-1)]}}module.exports={XML:decodeXMLStrict,HTML:decodeHTML,HTMLStrict:decodeHTMLStrict}},{"../maps/entities.json":55,"../maps/legacy.json":56,"../maps/xml.json":57,"./decode_codepoint.js":52}],52:[function(require,module,exports){var decodeMap=require("../maps/decode.json");module.exports=decodeCodePoint;function decodeCodePoint(codePoint){if(55296<=codePoint&&57343>=codePoint||1114111<codePoint){return"\uFFFD"}if(codePoint in decodeMap){codePoint=decodeMap[codePoint]}var output="";if(65535<codePoint){codePoint-=65536;output+=_StringfromCharCode(55296|1023&codePoint>>>10);codePoint=56320|1023&codePoint}output+=_StringfromCharCode(codePoint);return output}},{"../maps/decode.json":54}],53:[function(require,module,exports){var inverseXML=getInverseObj(require("../maps/xml.json")),xmlReplacer=getInverseReplacer(inverseXML);exports.XML=getInverse(inverseXML,xmlReplacer);var inverseHTML=getInverseObj(require("../maps/entities.json")),htmlReplacer=getInverseReplacer(inverseHTML);exports.HTML=getInverse(inverseHTML,htmlReplacer);function getInverseObj(obj){return Object.keys(obj).sort().reduce(function(inverse,name){inverse[obj[name]]="&"+name+";";return inverse},{})}function getInverseReplacer(inverse){var single=[],multiple=[];Object.keys(inverse).forEach(function(k){if(1===k.length){single.push("\\"+k)}else{multiple.push(k)}});multiple.unshift("["+single.join("")+"]");return new RegExp(multiple.join("|"),"g")}var re_nonASCII=/[^\0-\x7F]/g,re_astralSymbols=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;function singleCharReplacer(c){return"&#x"+c.charCodeAt(0).toString(16).toUpperCase()+";"}function astralReplacer(c){var high=c.charCodeAt(0),low=c.charCodeAt(1),codePoint=1024*(high-55296)+low-56320+65536;return"&#x"+codePoint.toString(16).toUpperCase()+";"}function getInverse(inverse,re){function func(name){return inverse[name]}return function(data){return data.replace(re,func).replace(re_astralSymbols,astralReplacer).replace(re_nonASCII,singleCharReplacer)}}var re_xmlChars=getInverseReplacer(inverseXML);function escapeXML(data){return data.replace(re_xmlChars,singleCharReplacer).replace(re_astralSymbols,astralReplacer).replace(re_nonASCII,singleCharReplacer)}exports.escape=escapeXML},{"../maps/entities.json":55,"../maps/xml.json":57}],54:[function(require,module,exports){module.exports={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376}},{}],55:[function(require,module,exports){module.exports={Aacute:"\xC1",aacute:"\xE1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223E",acd:"\u223F",acE:"\u223E\u0333",Acirc:"\xC2",acirc:"\xE2",acute:"\xB4",Acy:"\u0410",acy:"\u0430",AElig:"\xC6",aelig:"\xE6",af:"\u2061",Afr:"\uD835\uDD04",afr:"\uD835\uDD1E",Agrave:"\xC0",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03B1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2A3F",amp:"&",AMP:"&",andand:"\u2A55",And:"\u2A53",and:"\u2227",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",ange:"\u29A4",angle:"\u2220",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angmsd:"\u2221",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angst:"\xC5",angzarr:"\u237C",Aogon:"\u0104",aogon:"\u0105",Aopf:"\uD835\uDD38",aopf:"\uD835\uDD52",apacir:"\u2A6F",ap:"\u2248",apE:"\u2A70",ape:"\u224A",apid:"\u224B",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224A",Aring:"\xC5",aring:"\xE5",Ascr:"\uD835\uDC9C",ascr:"\uD835\uDCB6",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224D",Atilde:"\xC3",atilde:"\xE3",Auml:"\xC4",auml:"\xE4",awconint:"\u2233",awint:"\u2A11",backcong:"\u224C",backepsilon:"\u03F6",backprime:"\u2035",backsim:"\u223D",backsimeq:"\u22CD",Backslash:"\u2216",Barv:"\u2AE7",barvee:"\u22BD",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23B5",bbrktbrk:"\u23B6",bcong:"\u224C",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201E",becaus:"\u2235",because:"\u2235",Because:"\u2235",bemptyv:"\u29B0",bepsi:"\u03F6",bernou:"\u212C",Bernoullis:"\u212C",Beta:"\u0392",beta:"\u03B2",beth:"\u2136",between:"\u226C",Bfr:"\uD835\uDD05",bfr:"\uD835\uDD1F",bigcap:"\u22C2",bigcirc:"\u25EF",bigcup:"\u22C3",bigodot:"\u2A00",bigoplus:"\u2A01",bigotimes:"\u2A02",bigsqcup:"\u2A06",bigstar:"\u2605",bigtriangledown:"\u25BD",bigtriangleup:"\u25B3",biguplus:"\u2A04",bigvee:"\u22C1",bigwedge:"\u22C0",bkarow:"\u290D",blacklozenge:"\u29EB",blacksquare:"\u25AA",blacktriangle:"\u25B4",blacktriangledown:"\u25BE",blacktriangleleft:"\u25C2",blacktriangleright:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bNot:"\u2AED",bnot:"\u2310",Bopf:"\uD835\uDD39",bopf:"\uD835\uDD53",bot:"\u22A5",bottom:"\u22A5",bowtie:"\u22C8",boxbox:"\u29C9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250C",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252C",boxHd:"\u2564",boxhD:"\u2565",boxHD:"\u2566",boxhu:"\u2534",boxHu:"\u2567",boxhU:"\u2568",boxHU:"\u2569",boxminus:"\u229F",boxplus:"\u229E",boxtimes:"\u22A0",boxul:"\u2518",boxuL:"\u255B",boxUl:"\u255C",boxUL:"\u255D",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255A",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253C",boxvH:"\u256A",boxVh:"\u256B",boxVH:"\u256C",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251C",boxvR:"\u255E",boxVr:"\u255F",boxVR:"\u2560",bprime:"\u2035",breve:"\u02D8",Breve:"\u02D8",brvbar:"\xA6",bscr:"\uD835\uDCB7",Bscr:"\u212C",bsemi:"\u204F",bsim:"\u223D",bsime:"\u22CD",bsolb:"\u29C5",bsol:"\\",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bump:"\u224E",bumpE:"\u2AAE",bumpe:"\u224F",Bumpeq:"\u224E",bumpeq:"\u224F",Cacute:"\u0106",cacute:"\u0107",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",cap:"\u2229",Cap:"\u22D2",capcup:"\u2A47",capdot:"\u2A40",CapitalDifferentialD:"\u2145",caps:"\u2229\uFE00",caret:"\u2041",caron:"\u02C7",Cayleys:"\u212D",ccaps:"\u2A4D",Ccaron:"\u010C",ccaron:"\u010D",Ccedil:"\xC7",ccedil:"\xE7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2A4C",ccupssm:"\u2A50",Cdot:"\u010A",cdot:"\u010B",cedil:"\xB8",Cedilla:"\xB8",cemptyv:"\u29B2",cent:"\xA2",centerdot:"\xB7",CenterDot:"\xB7",cfr:"\uD835\uDD20",Cfr:"\u212D",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03A7",chi:"\u03C7",circ:"\u02C6",circeq:"\u2257",circlearrowleft:"\u21BA",circlearrowright:"\u21BB",circledast:"\u229B",circledcirc:"\u229A",circleddash:"\u229D",CircleDot:"\u2299",circledR:"\xAE",circledS:"\u24C8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cir:"\u25CB",cirE:"\u29C3",cire:"\u2257",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201D",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",Colone:"\u2A74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2A6D",Congruent:"\u2261",conint:"\u222E",Conint:"\u222F",ContourIntegral:"\u222E",copf:"\uD835\uDD54",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\xA9",COPY:"\xA9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21B5",cross:"\u2717",Cross:"\u2A2F",Cscr:"\uD835\uDC9E",cscr:"\uD835\uDCB8",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",cuesc:"\u22DF",cularr:"\u21B6",cularrp:"\u293D",cupbrcap:"\u2A48",cupcap:"\u2A46",CupCap:"\u224D",cup:"\u222A",Cup:"\u22D3",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curarrm:"\u293C",curlyeqprec:"\u22DE",curlyeqsucc:"\u22DF",curlyvee:"\u22CE",curlywedge:"\u22CF",curren:"\xA4",curvearrowleft:"\u21B6",curvearrowright:"\u21B7",cuvee:"\u22CE",cuwed:"\u22CF",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232D",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",Darr:"\u21A1",dArr:"\u21D3",dash:"\u2010",Dashv:"\u2AE4",dashv:"\u22A3",dbkarow:"\u290F",dblac:"\u02DD",Dcaron:"\u010E",dcaron:"\u010F",Dcy:"\u0414",dcy:"\u0434",ddagger:"\u2021",ddarr:"\u21CA",DD:"\u2145",dd:"\u2146",DDotrahd:"\u2911",ddotseq:"\u2A77",deg:"\xB0",Del:"\u2207",Delta:"\u0394",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",Dfr:"\uD835\uDD07",dfr:"\uD835\uDD21",dHar:"\u2965",dharl:"\u21C3",dharr:"\u21C2",DiacriticalAcute:"\xB4",DiacriticalDot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",DiacriticalGrave:"`",DiacriticalTilde:"\u02DC",diam:"\u22C4",diamond:"\u22C4",Diamond:"\u22C4",diamondsuit:"\u2666",diams:"\u2666",die:"\xA8",DifferentialD:"\u2146",digamma:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231E",dlcrop:"\u230D",dollar:"$",Dopf:"\uD835\uDD3B",dopf:"\uD835\uDD55",Dot:"\xA8",dot:"\u02D9",DotDot:"\u20DC",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22A1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222F",DoubleDot:"\xA8",DoubleDownArrow:"\u21D3",DoubleLeftArrow:"\u21D0",DoubleLeftRightArrow:"\u21D4",DoubleLeftTee:"\u2AE4",DoubleLongLeftArrow:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",DoubleLongRightArrow:"\u27F9",DoubleRightArrow:"\u21D2",DoubleRightTee:"\u22A8",DoubleUpArrow:"\u21D1",DoubleUpDownArrow:"\u21D5",DoubleVerticalBar:"\u2225",DownArrowBar:"\u2913",downarrow:"\u2193",DownArrow:"\u2193",Downarrow:"\u21D3",DownArrowUpArrow:"\u21F5",DownBreve:"\u0311",downdownarrows:"\u21CA",downharpoonleft:"\u21C3",downharpoonright:"\u21C2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVectorBar:"\u2956",DownLeftVector:"\u21BD",DownRightTeeVector:"\u295F",DownRightVectorBar:"\u2957",DownRightVector:"\u21C1",DownTeeArrow:"\u21A7",DownTee:"\u22A4",drbkarow:"\u2910",drcorn:"\u231F",drcrop:"\u230C",Dscr:"\uD835\uDC9F",dscr:"\uD835\uDCB9",DScy:"\u0405",dscy:"\u0455",dsol:"\u29F6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",dtrif:"\u25BE",duarr:"\u21F5",duhar:"\u296F",dwangle:"\u29A6",DZcy:"\u040F",dzcy:"\u045F",dzigrarr:"\u27FF",Eacute:"\xC9",eacute:"\xE9",easter:"\u2A6E",Ecaron:"\u011A",ecaron:"\u011B",Ecirc:"\xCA",ecirc:"\xEA",ecir:"\u2256",ecolon:"\u2255",Ecy:"\u042D",ecy:"\u044D",eDDot:"\u2A77",Edot:"\u0116",edot:"\u0117",eDot:"\u2251",ee:"\u2147",efDot:"\u2252",Efr:"\uD835\uDD08",efr:"\uD835\uDD22",eg:"\u2A9A",Egrave:"\xC8",egrave:"\xE8",egs:"\u2A96",egsdot:"\u2A98",el:"\u2A99",Element:"\u2208",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",elsdot:"\u2A97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25FB",emptyv:"\u2205",EmptyVerySmallSquare:"\u25AB",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",ENG:"\u014A",eng:"\u014B",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\uD835\uDD3C",eopf:"\uD835\uDD56",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",Epsilon:"\u0395",epsilon:"\u03B5",epsiv:"\u03F5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2A96",eqslantless:"\u2A95",Equal:"\u2A75",equals:"=",EqualTilde:"\u2242",equest:"\u225F",Equilibrium:"\u21CC",equiv:"\u2261",equivDD:"\u2A78",eqvparsl:"\u29E5",erarr:"\u2971",erDot:"\u2253",escr:"\u212F",Escr:"\u2130",esdot:"\u2250",Esim:"\u2A73",esim:"\u2242",Eta:"\u0397",eta:"\u03B7",ETH:"\xD0",eth:"\xF0",Euml:"\xCB",euml:"\xEB",euro:"\u20AC",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",Ffr:"\uD835\uDD09",ffr:"\uD835\uDD23",filig:"\uFB01",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",Fopf:"\uD835\uDD3D",fopf:"\uD835\uDD57",forall:"\u2200",ForAll:"\u2200",fork:"\u22D4",forkv:"\u2AD9",Fouriertrf:"\u2131",fpartint:"\u2A0D",frac12:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",fscr:"\uD835\uDCBB",Fscr:"\u2131",gacute:"\u01F5",Gamma:"\u0393",gamma:"\u03B3",Gammad:"\u03DC",gammad:"\u03DD",gap:"\u2A86",Gbreve:"\u011E",gbreve:"\u011F",Gcedil:"\u0122",Gcirc:"\u011C",gcirc:"\u011D",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",ge:"\u2265",gE:"\u2267",gEl:"\u2A8C",gel:"\u22DB",geq:"\u2265",geqq:"\u2267",geqslant:"\u2A7E",gescc:"\u2AA9",ges:"\u2A7E",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",Gfr:"\uD835\uDD0A",gfr:"\uD835\uDD24",gg:"\u226B",Gg:"\u22D9",ggg:"\u22D9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gla:"\u2AA5",gl:"\u2277",glE:"\u2A92",glj:"\u2AA4",gnap:"\u2A8A",gnapprox:"\u2A8A",gne:"\u2A88",gnE:"\u2269",gneq:"\u2A88",gneqq:"\u2269",gnsim:"\u22E7",Gopf:"\uD835\uDD3E",gopf:"\uD835\uDD58",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22DB",GreaterFullEqual:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2A7E",GreaterTilde:"\u2273",Gscr:"\uD835\uDCA2",gscr:"\u210A",gsim:"\u2273",gsime:"\u2A8E",gsiml:"\u2A90",gtcc:"\u2AA7",gtcir:"\u2A7A",gt:">",GT:">",Gt:"\u226B",gtdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrapprox:"\u2A86",gtrarr:"\u2978",gtrdot:"\u22D7",gtreqless:"\u22DB",gtreqqless:"\u2A8C",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",Hacek:"\u02C7",hairsp:"\u200A",half:"\xBD",hamilt:"\u210B",HARDcy:"\u042A",hardcy:"\u044A",harrcir:"\u2948",harr:"\u2194",hArr:"\u21D4",harrw:"\u21AD",Hat:"^",hbar:"\u210F",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22B9",hfr:"\uD835\uDD25",Hfr:"\u210C",HilbertSpace:"\u210B",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",hookrightarrow:"\u21AA",hopf:"\uD835\uDD59",Hopf:"\u210D",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\uD835\uDCBD",Hscr:"\u210B",hslash:"\u210F",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224E",HumpEqual:"\u224F",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xCD",iacute:"\xED",ic:"\u2063",Icirc:"\xCE",icirc:"\xEE",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xA1",iff:"\u21D4",ifr:"\uD835\uDD26",Ifr:"\u2111",Igrave:"\xCC",igrave:"\xEC",ii:"\u2148",iiiint:"\u2A0C",iiint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Imacr:"\u012A",imacr:"\u012B",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",Im:"\u2111",imof:"\u22B7",imped:"\u01B5",Implies:"\u21D2",incare:"\u2105",in:"\u2208",infin:"\u221E",infintie:"\u29DD",inodot:"\u0131",intcal:"\u22BA",int:"\u222B",Int:"\u222C",integers:"\u2124",Integral:"\u222B",intercal:"\u22BA",Intersection:"\u22C2",intlarhk:"\u2A17",intprod:"\u2A3C",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012E",iogon:"\u012F",Iopf:"\uD835\uDD40",iopf:"\uD835\uDD5A",Iota:"\u0399",iota:"\u03B9",iprod:"\u2A3C",iquest:"\xBF",iscr:"\uD835\uDCBE",Iscr:"\u2110",isin:"\u2208",isindot:"\u22F5",isinE:"\u22F9",isins:"\u22F4",isinsv:"\u22F3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xCF",iuml:"\xEF",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\uD835\uDD0D",jfr:"\uD835\uDD27",jmath:"\u0237",Jopf:"\uD835\uDD41",jopf:"\uD835\uDD5B",Jscr:"\uD835\uDCA5",jscr:"\uD835\uDCBF",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039A",kappa:"\u03BA",kappav:"\u03F0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041A",kcy:"\u043A",Kfr:"\uD835\uDD0E",kfr:"\uD835\uDD28",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040C",kjcy:"\u045C",Kopf:"\uD835\uDD42",kopf:"\uD835\uDD5C",Kscr:"\uD835\uDCA6",kscr:"\uD835\uDCC0",lAarr:"\u21DA",Lacute:"\u0139",lacute:"\u013A",laemptyv:"\u29B4",lagran:"\u2112",Lambda:"\u039B",lambda:"\u03BB",lang:"\u27E8",Lang:"\u27EA",langd:"\u2991",langle:"\u27E8",lap:"\u2A85",Laplacetrf:"\u2112",laquo:"\xAB",larrb:"\u21E4",larrbfs:"\u291F",larr:"\u2190",Larr:"\u219E",lArr:"\u21D0",larrfs:"\u291D",larrhk:"\u21A9",larrlp:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",latail:"\u2919",lAtail:"\u291B",lat:"\u2AAB",late:"\u2AAD",lates:"\u2AAD\uFE00",lbarr:"\u290C",lBarr:"\u290E",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",Lcaron:"\u013D",lcaron:"\u013E",Lcedil:"\u013B",lcedil:"\u013C",lceil:"\u2308",lcub:"{",Lcy:"\u041B",lcy:"\u043B",ldca:"\u2936",ldquo:"\u201C",ldquor:"\u201E",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27E8",LeftArrowBar:"\u21E4",leftarrow:"\u2190",LeftArrow:"\u2190",Leftarrow:"\u21D0",LeftArrowRightArrow:"\u21C6",leftarrowtail:"\u21A2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVectorBar:"\u2959",LeftDownVector:"\u21C3",LeftFloor:"\u230A",leftharpoondown:"\u21BD",leftharpoonup:"\u21BC",leftleftarrows:"\u21C7",leftrightarrow:"\u2194",LeftRightArrow:"\u2194",Leftrightarrow:"\u21D4",leftrightarrows:"\u21C6",leftrightharpoons:"\u21CB",leftrightsquigarrow:"\u21AD",LeftRightVector:"\u294E",LeftTeeArrow:"\u21A4",LeftTee:"\u22A3",LeftTeeVector:"\u295A",leftthreetimes:"\u22CB",LeftTriangleBar:"\u29CF",LeftTriangle:"\u22B2",LeftTriangleEqual:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVectorBar:"\u2958",LeftUpVector:"\u21BF",LeftVectorBar:"\u2952",LeftVector:"\u21BC",lEg:"\u2A8B",leg:"\u22DA",leq:"\u2264",leqq:"\u2266",leqslant:"\u2A7D",lescc:"\u2AA8",les:"\u2A7D",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessapprox:"\u2A85",lessdot:"\u22D6",lesseqgtr:"\u22DA",lesseqqgtr:"\u2A8B",LessEqualGreater:"\u22DA",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2AA1",lesssim:"\u2272",LessSlantEqual:"\u2A7D",LessTilde:"\u2272",lfisht:"\u297C",lfloor:"\u230A",Lfr:"\uD835\uDD0F",lfr:"\uD835\uDD29",lg:"\u2276",lgE:"\u2A91",lHar:"\u2962",lhard:"\u21BD",lharu:"\u21BC",lharul:"\u296A",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",llarr:"\u21C7",ll:"\u226A",Ll:"\u22D8",llcorner:"\u231E",Lleftarrow:"\u21DA",llhard:"\u296B",lltri:"\u25FA",Lmidot:"\u013F",lmidot:"\u0140",lmoustache:"\u23B0",lmoust:"\u23B0",lnap:"\u2A89",lnapprox:"\u2A89",lne:"\u2A87",lnE:"\u2268",lneq:"\u2A87",lneqq:"\u2268",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",lobrk:"\u27E6",longleftarrow:"\u27F5",LongLeftArrow:"\u27F5",Longleftarrow:"\u27F8",longleftrightarrow:"\u27F7",LongLeftRightArrow:"\u27F7",Longleftrightarrow:"\u27FA",longmapsto:"\u27FC",longrightarrow:"\u27F6",LongRightArrow:"\u27F6",Longrightarrow:"\u27F9",looparrowleft:"\u21AB",looparrowright:"\u21AC",lopar:"\u2985",Lopf:"\uD835\uDD43",lopf:"\uD835\uDD5D",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25CA",lozenge:"\u25CA",lozf:"\u29EB",lpar:"(",lparlt:"\u2993",lrarr:"\u21C6",lrcorner:"\u231F",lrhar:"\u21CB",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",lscr:"\uD835\uDCC1",Lscr:"\u2112",lsh:"\u21B0",Lsh:"\u21B0",lsim:"\u2272",lsime:"\u2A8D",lsimg:"\u2A8F",lsqb:"[",lsquo:"\u2018",lsquor:"\u201A",Lstrok:"\u0141",lstrok:"\u0142",ltcc:"\u2AA6",ltcir:"\u2A79",lt:"<",LT:"<",Lt:"\u226A",ltdot:"\u22D6",lthree:"\u22CB",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltri:"\u25C3",ltrie:"\u22B4",ltrif:"\u25C2",ltrPar:"\u2996",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",macr:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21A6",mapsto:"\u21A6",mapstodown:"\u21A7",mapstoleft:"\u21A4",mapstoup:"\u21A5",marker:"\u25AE",mcomma:"\u2A29",Mcy:"\u041C",mcy:"\u043C",mdash:"\u2014",mDDot:"\u223A",measuredangle:"\u2221",MediumSpace:"\u205F",Mellintrf:"\u2133",Mfr:"\uD835\uDD10",mfr:"\uD835\uDD2A",mho:"\u2127",micro:"\xB5",midast:"*",midcir:"\u2AF0",mid:"\u2223",middot:"\xB7",minusb:"\u229F",minus:"\u2212",minusd:"\u2238",minusdu:"\u2A2A",MinusPlus:"\u2213",mlcp:"\u2ADB",mldr:"\u2026",mnplus:"\u2213",models:"\u22A7",Mopf:"\uD835\uDD44",mopf:"\uD835\uDD5E",mp:"\u2213",mscr:"\uD835\uDCC2",Mscr:"\u2133",mstpos:"\u223E",Mu:"\u039C",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20D2",nap:"\u2249",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",napprox:"\u2249",natural:"\u266E",naturals:"\u2115",natur:"\u266E",nbsp:"\xA0",nbump:"\u224E\u0338",nbumpe:"\u224F\u0338",ncap:"\u2A43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",Ncy:"\u041D",ncy:"\u043D",ndash:"\u2013",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21D7",nearrow:"\u2197",ne:"\u2260",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226B",NestedLessLess:"\u226A",NewLine:"\n",nexist:"\u2204",nexists:"\u2204",Nfr:"\uD835\uDD11",nfr:"\uD835\uDD2B",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",nGg:"\u22D9\u0338",ngsim:"\u2275",nGt:"\u226B\u20D2",ngt:"\u226F",ngtr:"\u226F",nGtv:"\u226B\u0338",nharr:"\u21AE",nhArr:"\u21CE",nhpar:"\u2AF2",ni:"\u220B",nis:"\u22FC",nisd:"\u22FA",niv:"\u220B",NJcy:"\u040A",njcy:"\u045A",nlarr:"\u219A",nlArr:"\u21CD",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nleftarrow:"\u219A",nLeftarrow:"\u21CD",nleftrightarrow:"\u21AE",nLeftrightarrow:"\u21CE",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",nless:"\u226E",nLl:"\u22D8\u0338",nlsim:"\u2274",nLt:"\u226A\u20D2",nlt:"\u226E",nltri:"\u22EA",nltrie:"\u22EC",nLtv:"\u226A\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xA0",nopf:"\uD835\uDD5F",Nopf:"\u2115",Not:"\u2AEC",not:"\xAC",NotCongruent:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226F",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",notin:"\u2209",notindot:"\u22F5\u0338",notinE:"\u22F9\u0338",notinva:"\u2209",notinvb:"\u22F7",notinvc:"\u22F6",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangle:"\u22EA",NotLeftTriangleEqual:"\u22EC",NotLess:"\u226E",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",notni:"\u220C",notniva:"\u220C",notnivb:"\u22FE",notnivc:"\u22FD",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",NotReverseElement:"\u220C",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangle:"\u22EB",NotRightTriangleEqual:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",NotSubset:"\u2282\u20D2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",nparallel:"\u2226",npar:"\u2226",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",npr:"\u2280",nprcue:"\u22E0",nprec:"\u2280",npreceq:"\u2AAF\u0338",npre:"\u2AAF\u0338",nrarrc:"\u2933\u0338",nrarr:"\u219B",nrArr:"\u21CF",nrarrw:"\u219D\u0338",nrightarrow:"\u219B",nRightarrow:"\u21CF",nrtri:"\u22EB",nrtrie:"\u22ED",nsc:"\u2281",nsccue:"\u22E1",nsce:"\u2AB0\u0338",Nscr:"\uD835\uDCA9",nscr:"\uD835\uDCC3",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22E2",nsqsupe:"\u22E3",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsube:"\u2288",nsubset:"\u2282\u20D2",nsubseteq:"\u2288",nsubseteqq:"\u2AC5\u0338",nsucc:"\u2281",nsucceq:"\u2AB0\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20D2",nsupseteq:"\u2289",nsupseteqq:"\u2AC6\u0338",ntgl:"\u2279",Ntilde:"\xD1",ntilde:"\xF1",ntlg:"\u2278",ntriangleleft:"\u22EA",ntrianglelefteq:"\u22EC",ntriangleright:"\u22EB",ntrianglerighteq:"\u22ED",Nu:"\u039D",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224D\u20D2",nvdash:"\u22AC",nvDash:"\u22AD",nVdash:"\u22AE",nVDash:"\u22AF",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvHarr:"\u2904",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21D6",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xD3",oacute:"\xF3",oast:"\u229B",Ocirc:"\xD4",ocirc:"\xF4",ocir:"\u229A",Ocy:"\u041E",ocy:"\u043E",odash:"\u229D",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2A38",odot:"\u2299",odsold:"\u29BC",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29BF",Ofr:"\uD835\uDD12",ofr:"\uD835\uDD2C",ogon:"\u02DB",Ograve:"\xD2",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",ohm:"\u03A9",oint:"\u222E",olarr:"\u21BA",olcir:"\u29BE",olcross:"\u29BB",oline:"\u203E",olt:"\u29C0",Omacr:"\u014C",omacr:"\u014D",Omega:"\u03A9",omega:"\u03C9",Omicron:"\u039F",omicron:"\u03BF",omid:"\u29B6",ominus:"\u2296",Oopf:"\uD835\uDD46",oopf:"\uD835\uDD60",opar:"\u29B7",OpenCurlyDoubleQuote:"\u201C",OpenCurlyQuote:"\u2018",operp:"\u29B9",oplus:"\u2295",orarr:"\u21BB",Or:"\u2A54",or:"\u2228",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oS:"\u24C8",Oscr:"\uD835\uDCAA",oscr:"\u2134",Oslash:"\xD8",oslash:"\xF8",osol:"\u2298",Otilde:"\xD5",otilde:"\xF5",otimesas:"\u2A36",Otimes:"\u2A37",otimes:"\u2297",Ouml:"\xD6",ouml:"\xF6",ovbar:"\u233D",OverBar:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",OverParenthesis:"\u23DC",para:"\xB6",parallel:"\u2225",par:"\u2225",parsim:"\u2AF3",parsl:"\u2AFD",part:"\u2202",PartialD:"\u2202",Pcy:"\u041F",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",perp:"\u22A5",pertenk:"\u2031",Pfr:"\uD835\uDD13",pfr:"\uD835\uDD2D",Phi:"\u03A6",phi:"\u03C6",phiv:"\u03D5",phmmat:"\u2133",phone:"\u260E",Pi:"\u03A0",pi:"\u03C0",pitchfork:"\u22D4",piv:"\u03D6",planck:"\u210F",planckh:"\u210E",plankv:"\u210F",plusacir:"\u2A23",plusb:"\u229E",pluscir:"\u2A22",plus:"+",plusdo:"\u2214",plusdu:"\u2A25",pluse:"\u2A72",PlusMinus:"\xB1",plusmn:"\xB1",plussim:"\u2A26",plustwo:"\u2A27",pm:"\xB1",Poincareplane:"\u210C",pointint:"\u2A15",popf:"\uD835\uDD61",Popf:"\u2119",pound:"\xA3",prap:"\u2AB7",Pr:"\u2ABB",pr:"\u227A",prcue:"\u227C",precapprox:"\u2AB7",prec:"\u227A",preccurlyeq:"\u227C",Precedes:"\u227A",PrecedesEqual:"\u2AAF",PrecedesSlantEqual:"\u227C",PrecedesTilde:"\u227E",preceq:"\u2AAF",precnapprox:"\u2AB9",precneqq:"\u2AB5",precnsim:"\u22E8",pre:"\u2AAF",prE:"\u2AB3",precsim:"\u227E",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2AB9",prnE:"\u2AB5",prnsim:"\u22E8",prod:"\u220F",Product:"\u220F",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prop:"\u221D",Proportional:"\u221D",Proportion:"\u2237",propto:"\u221D",prsim:"\u227E",prurel:"\u22B0",Pscr:"\uD835\uDCAB",pscr:"\uD835\uDCC5",Psi:"\u03A8",psi:"\u03C8",puncsp:"\u2008",Qfr:"\uD835\uDD14",qfr:"\uD835\uDD2E",qint:"\u2A0C",qopf:"\uD835\uDD62",Qopf:"\u211A",qprime:"\u2057",Qscr:"\uD835\uDCAC",qscr:"\uD835\uDCC6",quaternions:"\u210D",quatint:"\u2A16",quest:"?",questeq:"\u225F",quot:"\"",QUOT:"\"",rAarr:"\u21DB",race:"\u223D\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221A",raemptyv:"\u29B3",rang:"\u27E9",Rang:"\u27EB",rangd:"\u2992",range:"\u29A5",rangle:"\u27E9",raquo:"\xBB",rarrap:"\u2975",rarrb:"\u21E5",rarrbfs:"\u2920",rarrc:"\u2933",rarr:"\u2192",Rarr:"\u21A0",rArr:"\u21D2",rarrfs:"\u291E",rarrhk:"\u21AA",rarrlp:"\u21AC",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21A3",rarrw:"\u219D",ratail:"\u291A",rAtail:"\u291C",ratio:"\u2236",rationals:"\u211A",rbarr:"\u290D",rBarr:"\u290F",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201D",rdquor:"\u201D",rdsh:"\u21B3",real:"\u211C",realine:"\u211B",realpart:"\u211C",reals:"\u211D",Re:"\u211C",rect:"\u25AD",reg:"\xAE",REG:"\xAE",ReverseElement:"\u220B",ReverseEquilibrium:"\u21CB",ReverseUpEquilibrium:"\u296F",rfisht:"\u297D",rfloor:"\u230B",rfr:"\uD835\uDD2F",Rfr:"\u211C",rHar:"\u2964",rhard:"\u21C1",rharu:"\u21C0",rharul:"\u296C",Rho:"\u03A1",rho:"\u03C1",rhov:"\u03F1",RightAngleBracket:"\u27E9",RightArrowBar:"\u21E5",rightarrow:"\u2192",RightArrow:"\u2192",Rightarrow:"\u21D2",RightArrowLeftArrow:"\u21C4",rightarrowtail:"\u21A3",RightCeiling:"\u2309",RightDoubleBracket:"\u27E7",RightDownTeeVector:"\u295D",RightDownVectorBar:"\u2955",RightDownVector:"\u21C2",RightFloor:"\u230B",rightharpoondown:"\u21C1",rightharpoonup:"\u21C0",rightleftarrows:"\u21C4",rightleftharpoons:"\u21CC",rightrightarrows:"\u21C9",rightsquigarrow:"\u219D",RightTeeArrow:"\u21A6",RightTee:"\u22A2",RightTeeVector:"\u295B",rightthreetimes:"\u22CC",RightTriangleBar:"\u29D0",RightTriangle:"\u22B3",RightTriangleEqual:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVectorBar:"\u2954",RightUpVector:"\u21BE",RightVectorBar:"\u2953",RightVector:"\u21C0",ring:"\u02DA",risingdotseq:"\u2253",rlarr:"\u21C4",rlhar:"\u21CC",rlm:"\u200F",rmoustache:"\u23B1",rmoust:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",robrk:"\u27E7",ropar:"\u2986",ropf:"\uD835\uDD63",Ropf:"\u211D",roplus:"\u2A2E",rotimes:"\u2A35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rrarr:"\u21C9",Rrightarrow:"\u21DB",rsaquo:"\u203A",rscr:"\uD835\uDCC7",Rscr:"\u211B",rsh:"\u21B1",Rsh:"\u21B1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22CC",rtimes:"\u22CA",rtri:"\u25B9",rtrie:"\u22B5",rtrif:"\u25B8",rtriltri:"\u29CE",RuleDelayed:"\u29F4",ruluhar:"\u2968",rx:"\u211E",Sacute:"\u015A",sacute:"\u015B",sbquo:"\u201A",scap:"\u2AB8",Scaron:"\u0160",scaron:"\u0161",Sc:"\u2ABC",sc:"\u227B",sccue:"\u227D",sce:"\u2AB0",scE:"\u2AB4",Scedil:"\u015E",scedil:"\u015F",Scirc:"\u015C",scirc:"\u015D",scnap:"\u2ABA",scnE:"\u2AB6",scnsim:"\u22E9",scpolint:"\u2A13",scsim:"\u227F",Scy:"\u0421",scy:"\u0441",sdotb:"\u22A1",sdot:"\u22C5",sdote:"\u2A66",searhk:"\u2925",searr:"\u2198",seArr:"\u21D8",searrow:"\u2198",sect:"\xA7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\uD835\uDD16",sfr:"\uD835\uDD30",sfrown:"\u2322",sharp:"\u266F",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xAD",Sigma:"\u03A3",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",sim:"\u223C",simdot:"\u2A6A",sime:"\u2243",simeq:"\u2243",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2A33",smeparsl:"\u29E4",smid:"\u2223",smile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",SOFTcy:"\u042C",softcy:"\u044C",solbar:"\u233F",solb:"\u29C4",sol:"/",Sopf:"\uD835\uDD4A",sopf:"\uD835\uDD64",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\uFE00",sqcup:"\u2294",sqcups:"\u2294\uFE00",Sqrt:"\u221A",sqsub:"\u228F",sqsube:"\u2291",sqsubset:"\u228F",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",square:"\u25A1",Square:"\u25A1",SquareIntersection:"\u2293",SquareSubset:"\u228F",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25AA",squ:"\u25A1",squf:"\u25AA",srarr:"\u2192",Sscr:"\uD835\uDCAE",sscr:"\uD835\uDCC8",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22C6",Star:"\u22C6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03F5",straightphi:"\u03D5",strns:"\xAF",sub:"\u2282",Sub:"\u22D0",subdot:"\u2ABD",subE:"\u2AC5",sube:"\u2286",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subne:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",subset:"\u2282",Subset:"\u22D0",subseteq:"\u2286",subseteqq:"\u2AC5",SubsetEqual:"\u2286",subsetneq:"\u228A",subsetneqq:"\u2ACB",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",succapprox:"\u2AB8",succ:"\u227B",succcurlyeq:"\u227D",Succeeds:"\u227B",SucceedsEqual:"\u2AB0",SucceedsSlantEqual:"\u227D",SucceedsTilde:"\u227F",succeq:"\u2AB0",succnapprox:"\u2ABA",succneqq:"\u2AB6",succnsim:"\u22E9",succsim:"\u227F",SuchThat:"\u220B",sum:"\u2211",Sum:"\u2211",sung:"\u266A",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",sup:"\u2283",Sup:"\u22D1",supdot:"\u2ABE",supdsub:"\u2AD8",supE:"\u2AC6",supe:"\u2287",supedot:"\u2AC4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supne:"\u228B",supplus:"\u2AC0",supset:"\u2283",Supset:"\u22D1",supseteq:"\u2287",supseteqq:"\u2AC6",supsetneq:"\u228B",supsetneqq:"\u2ACC",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swarhk:"\u2926",swarr:"\u2199",swArr:"\u21D9",swarrow:"\u2199",swnwar:"\u292A",szlig:"\xDF",Tab:"\t",target:"\u2316",Tau:"\u03A4",tau:"\u03C4",tbrk:"\u23B4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20DB",telrec:"\u2315",Tfr:"\uD835\uDD17",tfr:"\uD835\uDD31",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",Theta:"\u0398",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",thickapprox:"\u2248",thicksim:"\u223C",ThickSpace:"\u205F\u200A",ThinSpace:"\u2009",thinsp:"\u2009",thkap:"\u2248",thksim:"\u223C",THORN:"\xDE",thorn:"\xFE",tilde:"\u02DC",Tilde:"\u223C",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",timesbar:"\u2A31",timesb:"\u22A0",times:"\xD7",timesd:"\u2A30",tint:"\u222D",toea:"\u2928",topbot:"\u2336",topcir:"\u2AF1",top:"\u22A4",Topf:"\uD835\uDD4B",topf:"\uD835\uDD65",topfork:"\u2ADA",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25B5",triangledown:"\u25BF",triangleleft:"\u25C3",trianglelefteq:"\u22B4",triangleq:"\u225C",triangleright:"\u25B9",trianglerighteq:"\u22B5",tridot:"\u25EC",trie:"\u225C",triminus:"\u2A3A",TripleDot:"\u20DB",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",Tscr:"\uD835\uDCAF",tscr:"\uD835\uDCC9",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040B",tshcy:"\u045B",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226C",twoheadleftarrow:"\u219E",twoheadrightarrow:"\u21A0",Uacute:"\xDA",uacute:"\xFA",uarr:"\u2191",Uarr:"\u219F",uArr:"\u21D1",Uarrocir:"\u2949",Ubrcy:"\u040E",ubrcy:"\u045E",Ubreve:"\u016C",ubreve:"\u016D",Ucirc:"\xDB",ucirc:"\xFB",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21C5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296E",ufisht:"\u297E",Ufr:"\uD835\uDD18",ufr:"\uD835\uDD32",Ugrave:"\xD9",ugrave:"\xF9",uHar:"\u2963",uharl:"\u21BF",uharr:"\u21BE",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",Umacr:"\u016A",umacr:"\u016B",uml:"\xA8",UnderBar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",UnionPlus:"\u228E",Uogon:"\u0172",uogon:"\u0173",Uopf:"\uD835\uDD4C",uopf:"\uD835\uDD66",UpArrowBar:"\u2912",uparrow:"\u2191",UpArrow:"\u2191",Uparrow:"\u21D1",UpArrowDownArrow:"\u21C5",updownarrow:"\u2195",UpDownArrow:"\u2195",Updownarrow:"\u21D5",UpEquilibrium:"\u296E",upharpoonleft:"\u21BF",upharpoonright:"\u21BE",uplus:"\u228E",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03C5",Upsi:"\u03D2",upsih:"\u03D2",Upsilon:"\u03A5",upsilon:"\u03C5",UpTeeArrow:"\u21A5",UpTee:"\u22A5",upuparrows:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",Uring:"\u016E",uring:"\u016F",urtri:"\u25F9",Uscr:"\uD835\uDCB0",uscr:"\uD835\uDCCA",utdot:"\u22F0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25B5",utrif:"\u25B4",uuarr:"\u21C8",Uuml:"\xDC",uuml:"\xFC",uwangle:"\u29A7",vangrt:"\u299C",varepsilon:"\u03F5",varkappa:"\u03F0",varnothing:"\u2205",varphi:"\u03D5",varpi:"\u03D6",varpropto:"\u221D",varr:"\u2195",vArr:"\u21D5",varrho:"\u03F1",varsigma:"\u03C2",varsubsetneq:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vartheta:"\u03D1",vartriangleleft:"\u22B2",vartriangleright:"\u22B3",vBar:"\u2AE8",Vbar:"\u2AEB",vBarv:"\u2AE9",Vcy:"\u0412",vcy:"\u0432",vdash:"\u22A2",vDash:"\u22A8",Vdash:"\u22A9",VDash:"\u22AB",Vdashl:"\u2AE6",veebar:"\u22BB",vee:"\u2228",Vee:"\u22C1",veeeq:"\u225A",vellip:"\u22EE",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200A",Vfr:"\uD835\uDD19",vfr:"\uD835\uDD33",vltri:"\u22B2",vnsub:"\u2282\u20D2",vnsup:"\u2283\u20D2",Vopf:"\uD835\uDD4D",vopf:"\uD835\uDD67",vprop:"\u221D",vrtri:"\u22B3",Vscr:"\uD835\uDCB1",vscr:"\uD835\uDCCB",vsubnE:"\u2ACB\uFE00",vsubne:"\u228A\uFE00",vsupnE:"\u2ACC\uFE00",vsupne:"\u228B\uFE00",Vvdash:"\u22AA",vzigzag:"\u299A",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2A5F",wedge:"\u2227",Wedge:"\u22C0",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\uD835\uDD1A",wfr:"\uD835\uDD34",Wopf:"\uD835\uDD4E",wopf:"\uD835\uDD68",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\uD835\uDCB2",wscr:"\uD835\uDCCC",xcap:"\u22C2",xcirc:"\u25EF",xcup:"\u22C3",xdtri:"\u25BD",Xfr:"\uD835\uDD1B",xfr:"\uD835\uDD35",xharr:"\u27F7",xhArr:"\u27FA",Xi:"\u039E",xi:"\u03BE",xlarr:"\u27F5",xlArr:"\u27F8",xmap:"\u27FC",xnis:"\u22FB",xodot:"\u2A00",Xopf:"\uD835\uDD4F",xopf:"\uD835\uDD69",xoplus:"\u2A01",xotime:"\u2A02",xrarr:"\u27F6",xrArr:"\u27F9",Xscr:"\uD835\uDCB3",xscr:"\uD835\uDCCD",xsqcup:"\u2A06",xuplus:"\u2A04",xutri:"\u25B3",xvee:"\u22C1",xwedge:"\u22C0",Yacute:"\xDD",yacute:"\xFD",YAcy:"\u042F",yacy:"\u044F",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042B",ycy:"\u044B",yen:"\xA5",Yfr:"\uD835\uDD1C",yfr:"\uD835\uDD36",YIcy:"\u0407",yicy:"\u0457",Yopf:"\uD835\uDD50",yopf:"\uD835\uDD6A",Yscr:"\uD835\uDCB4",yscr:"\uD835\uDCCE",YUcy:"\u042E",yucy:"\u044E",yuml:"\xFF",Yuml:"\u0178",Zacute:"\u0179",zacute:"\u017A",Zcaron:"\u017D",zcaron:"\u017E",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017B",zdot:"\u017C",zeetrf:"\u2128",ZeroWidthSpace:"\u200B",Zeta:"\u0396",zeta:"\u03B6",zfr:"\uD835\uDD37",Zfr:"\u2128",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21DD",zopf:"\uD835\uDD6B",Zopf:"\u2124",Zscr:"\uD835\uDCB5",zscr:"\uD835\uDCCF",zwj:"\u200D",zwnj:"\u200C"}},{}],56:[function(require,module,exports){module.exports={Aacute:"\xC1",aacute:"\xE1",Acirc:"\xC2",acirc:"\xE2",acute:"\xB4",AElig:"\xC6",aelig:"\xE6",Agrave:"\xC0",agrave:"\xE0",amp:"&",AMP:"&",Aring:"\xC5",aring:"\xE5",Atilde:"\xC3",atilde:"\xE3",Auml:"\xC4",auml:"\xE4",brvbar:"\xA6",Ccedil:"\xC7",ccedil:"\xE7",cedil:"\xB8",cent:"\xA2",copy:"\xA9",COPY:"\xA9",curren:"\xA4",deg:"\xB0",divide:"\xF7",Eacute:"\xC9",eacute:"\xE9",Ecirc:"\xCA",ecirc:"\xEA",Egrave:"\xC8",egrave:"\xE8",ETH:"\xD0",eth:"\xF0",Euml:"\xCB",euml:"\xEB",frac12:"\xBD",frac14:"\xBC",frac34:"\xBE",gt:">",GT:">",Iacute:"\xCD",iacute:"\xED",Icirc:"\xCE",icirc:"\xEE",iexcl:"\xA1",Igrave:"\xCC",igrave:"\xEC",iquest:"\xBF",Iuml:"\xCF",iuml:"\xEF",laquo:"\xAB",lt:"<",LT:"<",macr:"\xAF",micro:"\xB5",middot:"\xB7",nbsp:"\xA0",not:"\xAC",Ntilde:"\xD1",ntilde:"\xF1",Oacute:"\xD3",oacute:"\xF3",Ocirc:"\xD4",ocirc:"\xF4",Ograve:"\xD2",ograve:"\xF2",ordf:"\xAA",ordm:"\xBA",Oslash:"\xD8",oslash:"\xF8",Otilde:"\xD5",otilde:"\xF5",Ouml:"\xD6",ouml:"\xF6",para:"\xB6",plusmn:"\xB1",pound:"\xA3",quot:"\"",QUOT:"\"",raquo:"\xBB",reg:"\xAE",REG:"\xAE",sect:"\xA7",shy:"\xAD",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",szlig:"\xDF",THORN:"\xDE",thorn:"\xFE",times:"\xD7",Uacute:"\xDA",uacute:"\xFA",Ucirc:"\xDB",ucirc:"\xFB",Ugrave:"\xD9",ugrave:"\xF9",uml:"\xA8",Uuml:"\xDC",uuml:"\xFC",Yacute:"\xDD",yacute:"\xFD",yen:"\xA5",yuml:"\xFF"}},{}],57:[function(require,module,exports){module.exports={amp:"&",apos:"'",gt:">",lt:"<",quot:"\""}},{}],58:[function(require,module,exports){arguments[4][8][0].apply(exports,arguments)},{dup:8}],59:[function(require,module,exports){module.exports=function(string){return string.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")}},{}],60:[function(require,module,exports){module.exports=extend;var hasOwnProperty=Object.prototype.hasOwnProperty;function extend(){for(var target={},i=0,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target}},{}]},{},[1])(1)});class YpMagicTextBox extends PolymerElement{static get template(){return html$1`
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
      <template is="dom-if" if="[[showMoreText]]">
        <paper-button raised="" class="moreText" on-tap="_openFullScreen">[[moreText]]</paper-button>
      </template>
    </div>
    <lite-signal on-lite-signal-yp-language="_languageEvent"></lite-signal>
    <lite-signal on-lite-signal-yp-auto-translate="_autoTranslateEvent"></lite-signal>

    <iron-ajax id="getTranslationAjax" on-response="_getTranslationResponse"></iron-ajax>
`}static get is(){return"yp-magic-text"}static get properties(){return{content:{type:String,observer:"_contentChanged"},truncatedContent:{type:String,value:null},contentId:String,extraId:String,textType:{type:String},contentLanguage:{type:String},processedContent:{type:String,value:null},finalContent:{type:String,value:null},autoTranslate:{type:Boolean,value:!1},language:{type:String,value:null},truncate:{type:Number,value:null},moreText:String,showMoreText:{type:Boolean,computed:"_showMoreText(moreText,content)"},closeDialogText:{type:String},textOnly:{type:Boolean,value:!1},disableTranslation:{type:Boolean,value:!1},simpleFormat:{type:Boolean,value:!1},structuredQuestionsConfig:{type:String,value:null},linkifyCutoff:{type:Number,value:35}}}static get doubleWidthLanguages(){return["zh_TW"]}_showMoreText(moreText,content){return moreText&&content&&500<content.length}_openFullScreen(){dom(document).querySelector("yp-app").getDialogAsync("magicTextDialog",function(dialog){dialog.open(this.content,this.contentId,this.extraId,this.textType,this.contentLanguage,this.closeDialogText,this.structuredQuestionsConfig)}.bind(this))}subClassProcessing(){}_contentChanged(content){if(content&&""!==content){this.set("finalContent",null);if(window.autoTranslate){this.set("autoTranslate",window.autoTranslate)}if(this.autoTranslate&&this.truncate){this.set("truncatedContent",YpMagicTextBox.truncate(YpMagicTextBox.trim(content),this.truncate))}else{this.set("truncatedContent",content)}this._update()}else{this.set("truncatedContent",null)}}_autoTranslateEvent(event,detail){this.set("autoTranslate",detail);this._update()}_languageEvent(event,detail){if("language-loaded"===detail.type){this.set("language",detail.language);this._update()}}linkifyStr(str){return str}_getIndexKey(){return`${this.textType}-${this.contentId}-${this.language}`}_startTranslationAndFinalize(){let indexKey=this._getIndexKey();if(window.appGlobals.autoTranslateCache[indexKey]){this.set("processedContent",window.appGlobals.autoTranslateCache[indexKey]);this._finalize()}else{this.$.getTranslationAjax.params={textType:this.textType,contentId:this.contentId,targetLanguage:this.language};switch(this.textType){case"postName":case"postContent":case"postTranscriptContent":this.$.getTranslationAjax.url="/api/posts/"+this.contentId+"/translatedText";break;case"pointContent":this.$.getTranslationAjax.url="/api/points/"+this.contentId+"/translatedText";break;case"domainName":case"domainContent":this.$.getTranslationAjax.url="/api/domains/"+this.contentId+"/translatedText";break;case"communityName":case"communityContent":this.$.getTranslationAjax.url="/api/communities/"+this.contentId+"/translatedText";break;case"groupName":case"groupContent":this.$.getTranslationAjax.url="/api/groups/"+this.contentId+"/translatedText";break;case"categoryName":this.$.getTranslationAjax.url="/api/categories/"+this.contentId+"/translatedText";break;case"statusChangeContent":this.$.getTranslationAjax.url="/api/posts/"+this.extraId+"/"+this.contentId+"/translatedStatusText";break;default:console.error("No valid textType for magic text to translate: "+this.textType);return;}if(this.contentId){this.$.getTranslationAjax.generateRequest()}else{console.error("No content id for: "+this.textType);this._finalize()}}}_getTranslationResponse(event,detail){if(detail.response.content){this.processedContent=detail.response.content;window.appGlobals.autoTranslateCache[this._getIndexKey()]=this.processedContent}else{console.error("No content for magic text")}this._finalize()}_update(){this.processedContent=this.content;if(this.processedContent){if(this.autoTranslate&&this.language!==this.contentLanguage&&!this.disableTranslation&&"??"!==this.contentLanguage){this._startTranslationAndFinalize()}else{this._finalize()}}}_setupStructuredQuestions(){if(this.structuredQuestionsConfig){var structuredQuestions=[],questionComponents=this.structuredQuestionsConfig.split(",");if(questionComponents&&1<questionComponents.length){for(var i=0;i<questionComponents.length;i+=2){structuredQuestions.push(questionComponents[i])}var regEx=new RegExp("("+structuredQuestions.join("|")+")","ig");this.processedContent=this.processedContent.replace(regEx,"<b>$1</b>")}else{console.warn("Not questions for structuredQuestionsConfig")}}}_finalize(){if(!this.textOnly){this._linksAndEmojis()}if(this.truncate&&this.content&&(this.content.length>this.truncate||this.autoTranslate)){let truncateBy=this.truncate;if(this.autoTranslate&&-1<YpMagicTextBox.doubleWidthLanguages.indexOf(this.language)){truncateBy=truncateBy/2}this.processedContent=YpMagicTextBox.truncate(YpMagicTextBox.trim(this.processedContent),truncateBy,"...")}if(this.simpleFormat){this.processedContent=this.processedContent.replace(/(\n)/g,"<br>")}this._setupStructuredQuestions();this.subClassProcessing();if(this.processedContent!==this.finalContent){if(!window.magicTextIronResizeDebouncer){window.magicTextIronResizeDebouncer=setTimeout(function(){window.magicTextIronResizeDebouncer=null;this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,composed:!0}))}.bind(this),100)}}if(this.processedContent&&"undefined"!==this.processedContent&&this.content!==this.processedContent){this.set("finalContent",this.processedContent)}else{this.set("finalContent",null)}}_linksAndEmojis(){this.processedContent=sanitizeHtml(this.processedContent,{allowedTags:["b","i","em","strong"]});this.processedContent=this.processedContent.replace(/&amp\;/g,"&");this.processedContent=this.linkifyStr(this.processedContent,{format:function(value,type){if("url"===type&&value.length>this.linkifyCutoff-1){value=value.slice(0,this.linkifyCutoff)+"\u2026"}return value}.bind(this),ignoreTags:["b","i","em","strong"]});this.processedContent=this.processedContent.replace(/&amp\;/g,"&");this.processedContent=twemoji.parse(this.processedContent).replace(/&amp\;quot\;/g,"\"").replace(/class=\"emoji\" /g,"style=\"height: 1em;width: 1em;margin: 0 .3em 0 .3em;vertical-align: -0.1em;\" ")}static truncate(input,length,killwords,end){length=length||255;if(input.length<=length)return input;if(killwords){input=input.substring(0,length)}else{let idx=input.lastIndexOf(" ",length);if(-1===idx){idx=length}input=input.substring(0,idx)}input+=end!==void 0&&null!==end?end:"...";return input}static trim(input){return input.replace(/^\s*|\s*$/g,"")}ready(){if(window.i18nTranslation){this.set("language",window.locale)}super.ready()}}customElements.define(YpMagicTextBox.is,YpMagicTextBox);class YpMagicTextBoxDialog extends YpMagicTextBox{static get template(){return html`
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
`}static get is(){return"yp-magic-text-dialog"}subClassProcessing(){this.processedContent=this.processedContent.replace(/\n/g,"<br />")}open(content,contentId,extraId,textType,contentLanguage,closeDialogText,structuredQuestionsConfig){this.contentId=contentId;this.extraId=extraId;this.textType=textType;this.contentLanguage=contentLanguage;this.structuredQuestionsConfig=structuredQuestionsConfig;this.set("content",content);this.set("closeDialogText",closeDialogText);this.$.dialog.open()}}customElements.define(YpMagicTextBoxDialog.is,YpMagicTextBoxDialog);const ypMediaFormatsBehavior={properties:{playStartedAt:{type:Date,value:null}},_checkVideoLongPlayTimeAndReset(videoPlayer){var videoId=videoPlayer.getAttribute("data-id");if(this.playStartedAt&&videoId){var seconds=(new Date().getTime()-this.playStartedAt.getTime())/1e3;if(5<seconds){window.appGlobals.sendLongVideoView(videoId)}window.appGlobals.activity("completed","video",seconds);this.playStartedAt=null}else if(this.playStartedAt){console.error("Got long view check without id");this.playStartedAt=null}},_checkAudioLongPlayTimeAndReset(audioPlayer){var audioId=audioPlayer.getAttribute("data-id");if(this.playStartedAt&&audioId){var seconds=(new Date().getTime()-this.playStartedAt.getTime())/1e3;if(5<seconds){window.appGlobals.sendLongAudioListen(audioId)}window.appGlobals.activity("completed","audio",seconds);this.playStartedAt=null}else if(this.playStartedAt){console.error("Got long view check without audio id");this.playStartedAt=null}},getImageFormatUrl:function(images,formatId){if(images&&0<images.length){var formats=JSON.parse(images[images.length-1].formats);if(formats&&0<formats.length)return formats[formatId]}else{return""}},setupMediaEventListeners:function(current,previous){if(previous&&current){this.detachMediaListeners();this.attachMediaListeners()}else if(current){this.attachMediaListeners()}else if(!current&&previous){this.detachMediaListeners()}},attachMediaListeners:function(){this.async(function(){var videoPlayer=this.$$("#videoPlayer"),audioPlayer=this.$$("#audioPlayer");if(videoPlayer){var videoId=videoPlayer.getAttribute("data-id");if(videoId){this.videoPlayListener=function(){this.set("playStartedAt",new Date);window.appGlobals.sendVideoView(videoId)}.bind(this);this.videoPauseListener=function(){this._checkVideoLongPlayTimeAndReset(videoPlayer)}.bind(this);this.videoEndedListener=function(){this._checkVideoLongPlayTimeAndReset(videoPlayer)}.bind(this);videoPlayer.addEventListener("play",this.videoPlayListener);videoPlayer.addEventListener("pause",this.videoPauseListener);videoPlayer.addEventListener("ended",this.videoEndedListener)}}if(audioPlayer){var audioId=audioPlayer.getAttribute("data-id");if(audioId){this.audioPlayListener=function(){this.set("playStartedAt",new Date);window.appGlobals.sendAudioListen(audioId)}.bind(this);this.audioPauseListener=function(){this._checkAudioLongPlayTimeAndReset(audioPlayer)}.bind(this);this.audioEndedListener=function(){this._checkAudioLongPlayTimeAndReset(audioPlayer)}.bind(this);audioPlayer.addEventListener("play",this.audioPlayListener);audioPlayer.addEventListener("pause",this.audioPauseListener);audioPlayer.addEventListener("ended",this.audioEndedListener)}}},200)},detachMediaListeners:function(){var videoPlayer=this.$$("#videoPlayer"),audioPlayer=this.$$("#audioPlayer");if(videoPlayer){if(this.videoPlayListener){videoPlayer.removeEventListener("play",this.videoPlayListener);this.videoPlayListener=null}if(this.videoPauseListener){videoPlayer.removeEventListener("pause",this.videoPauseListener);this.videoPauseListener=null}if(this.videoEndedListener){videoPlayer.removeEventListener("ended",this.videoEndedListener);this.videoEndedListener=null}this._checkVideoLongPlayTimeAndReset(videoPlayer)}if(audioPlayer){if(this.audioPlayListener){audioPlayer.removeEventListener("play",this.audioPlayListener);this.audioPlayListener=null}if(this.audioPauseListener){audioPlayer.removeEventListener("pause",this.audioPauseListener);this.audioPauseListener=null}if(this.audioEndedListener){audioPlayer.removeEventListener("ended",this.audioEndedListener);this.audioEndedListener=null}this._checkVideoLongPlayTimeAndReset(audioPlayer)}},_pauseMediaPlayback:function(){var videoPlayer=this.$$("#videoPlayer"),audioPlayer=this.$$("#audioPlayer");if(videoPlayer){videoPlayer.pause()}if(audioPlayer){audioPlayer.pause()}},_getVideoURL:function(videos){if(videos&&0<videos.length&&videos[0].formats&&0<videos[0].formats.length){return videos[0].formats[0]}else{return null}},_isPortraitVideo:function(videos){if(videos&&0<videos.length&&videos[0].formats&&0<videos[0].formats.length){if(videos[0].public_meta&&videos[0].public_meta.aspect&&"portrait"===videos[0].public_meta.aspect){return!0}else{return!1}}else{return!1}},_getAudioURL:function(audios){if(audios&&0<audios.length&&audios[0].formats&&0<audios[0].formats.length){return audios[0].formats[0]}else{return null}},_getVideoPosterURL:function(videos,selectedImageIndex){if(videos&&0<videos.length&&videos[0].VideoImages&&0<videos[0].VideoImages.length){if(!selectedImageIndex)selectedImageIndex=0;if(videos[0].public_meta&&videos[0].public_meta.selectedVideoFrameIndex){selectedImageIndex=parseInt(videos[0].public_meta.selectedVideoFrameIndex)}if(selectedImageIndex>videos[0].VideoImages.length-1){selectedImageIndex=0}return JSON.parse(videos[0].VideoImages[selectedImageIndex].formats)[0]}else{return null}}};var ypMediaFormatsBehavior$1={ypMediaFormatsBehavior:ypMediaFormatsBehavior};const ypNumberFormatBehavior={formatNumber:function(value){if(value){return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}else{return"0"}}};var ypNumberFormatBehavior$1={ypNumberFormatBehavior:ypNumberFormatBehavior};const ypRemoveClassBehavior={removeClass:function(element,classToRemove){for(var newClassName="",classes=element.className.split(" "),i=0;i<classes.length;i++){if(classes[i]!==classToRemove){newClassName+=classes[i]+" "}}element.className=newClassName}};var ypRemoveClassBehavior$1={ypRemoveClassBehavior:ypRemoveClassBehavior};Polymer({_template:html$1`
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
    <paper-share-button hidden on-share-tap="_shareTap" class="shareIcon" up-voted\$="[[isUpVoted]]" horizontal-align="right" id="shareButton" title\$="[[t('sharePoint')]]" facebook="" google="" twitter="" popup="" url="[[pointUrl]]"></paper-share-button>

    <yp-ajax id="pointQualityAjax" method="POST" on-response="_pointQualityResponse"></yp-ajax>
    <lite-signal on-lite-signal-got-endorsements-and-qualities="_updateQualitiesFromSignal"></lite-signal>
`,is:"yp-point-actions",behaviors:[ypRemoveClassBehavior,ypLocalizationBridgeBehavior],properties:{point:{type:Object,observer:"_onPointChanged"},hideNotHelpful:{type:Boolean,value:!1},pointQualityValue:{type:Number,value:0},isUpVoted:{type:Boolean,value:!1},allDisabled:{type:Boolean,value:!1},pointUrl:{type:String},hideSharing:{type:Boolean,value:!1}},observers:["_qualityChanged(point.counter_quality_up, point.counter_quality_down)"],_onPointChanged:function(newValue,oldValue){if(newValue){this._updateQualities()}else{this.set("isUpVoted",!1)}},_updateQualitiesFromSignal:function(){this._updateQualities()},_updateQualities:function(){if(window.appUser&&window.appUser.loggedIn()&&window.appUser.user&&window.appUser.user.PointQualities){var thisPointQuality=window.appUser.pointQualitiesIndex[this.point.id];if(thisPointQuality){this._setPointQuality(thisPointQuality.value);if(0<thisPointQuality.value){this.set("isUpVoted",!0)}}else{this.set("isUpVoted",!1);this._setPointQuality(null)}}else{this.set("isUpVoted",!1);this._setPointQuality(null)}},_qualityChanged:function(a,b){},_resetClasses:function(){if(this.pointQualityValue&&0<this.pointQualityValue){this.$.actionUp.className+=" "+"up-selected";this.removeClass(this.$.actionDown,"down-selected")}else if(this.pointQualityValue&&0>this.pointQualityValue){this.$.actionDown.className+=" "+"down-selected";this.removeClass(this.$.actionUp,"up-selected")}else{this.removeClass(this.$.actionUp,"up-selected");this.removeClass(this.$.actionDown,"down-selected")}},_setPointQuality:function(value){this.set("pointQualityValue",value);this._resetClasses()},_pointQualityResponse:function(event,detail){this.set("allDisabled",!1);var pointQuality=detail.response.pointQuality,oldPointQualityValue=detail.response.oldPointQualityValue;this._setPointQuality(pointQuality.value);window.appUser.updatePointQualityForPost(this.point.id,pointQuality);if(oldPointQualityValue){if(0<oldPointQualityValue)this.set("point.counter_quality_up",this.point.counter_quality_up-1);else if(0>oldPointQualityValue)this.set("point.counter_quality_down",this.point.counter_quality_down-1)}if(0<pointQuality.value)this.set("point.counter_quality_up",this.point.counter_quality_up+1);else if(0>pointQuality.value)this.set("point.counter_quality_down",this.point.counter_quality_down+1)},generatePointQualityFromLogin:function(value){if(!window.appUser.pointQualitiesIndex[this.point.id]){this.generatePointQuality(value)}},generatePointQuality:function(value){if(!0===window.appUser.loggedIn()){this.$.pointQualityAjax.url="/api/points/"+this.point.id+"/pointQuality";this.$.pointQualityAjax.body={point_id:this.point.id,value:value};if(this.pointQualityValue===value){this.$.pointQualityAjax.method="DELETE"}else{this.$.pointQualityAjax.method="POST"}this.$.pointQualityAjax.generateRequest()}else{this.set("allDisabled",!1);window.appUser.loginForPointQuality(this,{value:value})}},pointHelpful:function(){this.set("allDisabled",!0);this.generatePointQuality(1);this.set("isUpVoted",!0);this.updateStyles();window.appGlobals.activity("clicked","pointHelpful",this.point.id)},pointNotHelpful:function(){this.set("allDisabled",!0);window.appGlobals.activity("clicked","pointNotHelpful",this.point.id);this.generatePointQuality(-1)}});Polymer({_template:html$1`
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
        <iron-icon icon="thumb-up" class="thumbsIcon thumbsIconUp" hidden\$="[[!pointValueUp]]"></iron-icon>
        <iron-icon icon="thumb-down" class="thumbsIcon thumbsIconDown" hidden\$="[[pointValueUp]]"></iron-icon>
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
        <div class="layout horizontal actionContainer" hidden\$="[[hideActions]]">
          <yp-point-actions point="[[point]]" point-url\$="[[pointUrl]]"></yp-point-actions>
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
`,is:"yp-point",properties:{point:{type:Object,notify:!0,observer:"_pointChanged"},linkPoint:{type:Boolean,value:!1},hasPointAccess:{type:Boolean,computed:"_hasPointAccess(point, gotAdminRights, loggedInUser)"},canEditPoint:{type:Boolean,computed:"_canEditPoint(point, gotAdminRights, loggedInUser)"},user:{type:Object,value:null},hideUser:{type:Boolean,value:!1},hideActions:{type:Boolean,value:!1},isEditing:{type:Boolean,value:!1,observer:"_isEditingChanged"},maxNumberOfPointsBeforeEditFrozen:{type:Number,value:5},pointValueUp:{type:Boolean,computed:"upVote(point)"},pointUrl:{type:String,computed:"_pointUrl(point)"},editText:String,videoActive:{type:Boolean,value:!1},pointVideoPath:String,pointImageVideoPath:String,pointVideoId:Number,audioActive:{type:Boolean,value:!1},pointAudioPath:String,pointAudioId:Number,videoOrAudioActive:{type:Boolean,computed:"_videoOrAudioActive(videoActive, audioActive)"},checkingTranscript:{type:Boolean,value:!1},portraitVideo:{type:Boolean,value:!1}},behaviors:[ypMediaFormatsBehavior,ypLocalizationBridgeBehavior],_videoOrAudioActive:function(videoActive,audioActive){return videoActive||audioActive},_isEditingChanged:function(value){this._updateEmojiBindings(value);this.async(function(){this.fire("iron-resize")})},_shareTap:function(event,detail){window.appGlobals.activity("pointShareOpen",detail.brand,this.point.id)},_pointUrl:function(point){if(point&&point.Post){return window.location.protocol+"//"+window.location.hostname+"/post/"+point.Post.id+"/"+point.id}},_linkIfNeeded:function(){if(this.linkPoint){this.goToPost(this.point.Post.id,this.point.id)}},_updateEmojiBindings:function(isEditing){if(isEditing){this.async(function(){var point=this.$$("#pointContentEditor"),emoji=this.$$("#pointEmojiSelector");if(point&&emoji){emoji.inputTarget=point}else{console.error("Wide: Can't bind point edit emojis :(")}}.bind(this),500)}},_cancelEdit:function(){this.set("isEditing",!1)},_saveEdit:function(){this.$$("#editPointAjax").url="/api/points/"+this.point.id;this.$$("#editPointAjax").body={content:this.editText};this.$$("#editPointAjax").generateRequest()},_deletePoint:function(){dom(document).querySelector("yp-app").getDialogAsync("confirmationDialog",function(dialog){dialog.open(this.t("point.confirmDelete"),this._reallyDeletePoint.bind(this))}.bind(this))},_reallyDeletePoint:function(){this.$$("#deletePointAjax").url="/api/points/"+this.point.id;this.$$("#deletePointAjax").body={};this.$$("#deletePointAjax").generateRequest()},_editResponse:function(event,detail){if(detail.response){var point=detail.response;point.latestContent=point.PointRevisions[point.PointRevisions.length-1].content;this.set("point",point)}this.set("isEditing",!1)},_deleteResponse:function(){this.fire("yp-point-deleted",{pointId:this.point.id});this.set("point",null)},_reportPoint:function(){window.appGlobals.activity("open","point.report");dom(document).querySelector("yp-app").getDialogAsync("apiActionDialog",function(dialog){dialog.setup("/api/points/"+this.point.id+"/report",this.t("reportConfirmation"),this._onReport.bind(this),this.t("point.report"),"PUT");dialog.open()}.bind(this))},_onReport:function(){window.appGlobals.notifyUserViaToast(this.t("point.report")+": "+this.point.content)},_editPoint:function(){if(this._hasPointAccess(this.point)){this.set("editText",this.point.PointRevisions[this.point.PointRevisions.length-1].content);this.set("isEditing",!0)}},_hasPointAccess:function(point){return!1},_canEditPoint:function(point){var isEligible=point&&point.counter_quality_up+point.counter_quality_down<=this.maxNumberOfPointsBeforeEditFrozen;return isEligible&&window.appUser&&window.appUser.user&&window.appUser.user.id==point.user_id},_pointChanged:function(point,previousPoint){this.setupMediaEventListeners(point,previousPoint);this._resetMedia();if(point){this.set("user",this.point.User);var videoURL=this._getVideoURL(point.PointVideos),videoPosterURL=this._getVideoPosterURL(point.PointVideos);this.set("portraitVideo",this._isPortraitVideo(point.PointVideos));if(videoURL&&videoPosterURL){this.set("videoActive",!0);this.set("pointVideoPath",videoURL);this.set("pointImageVideoPath",videoPosterURL);this.set("pointVideoId",point.PointVideos[0].id);this.set("checkTranscriptError",!1);if("video"===point.checkTranscriptFor&&!0===window.appGlobals.hasTranscriptSupport){this.$.checkTranscriptStatusAjax.url="/api/points/"+point.id+"/videoTranscriptStatus";this.$.checkTranscriptStatusAjax.generateRequest();this.set("checkingTranscript",!0);point.checkTranscriptFor=null}}else{var audioURL=this._getAudioURL(point.PointAudios);if(audioURL){this.set("audioActive",!0);this.set("pointAudioPath",audioURL);this.set("pointAudioId",point.PointAudios[0].id);this.set("checkTranscriptError",!1);if("audio"===point.checkTranscriptFor&&!0===window.appGlobals.hasTranscriptSupport){this.$.checkTranscriptStatusAjax.url="/api/points/"+point.id+"/audioTranscriptStatus";this.$.checkTranscriptStatusAjax.generateRequest();this.set("checkingTranscript",!0);point.checkTranscriptFor=null}}}}else{this.set("user",null);this.set("checkTranscriptError",!1)}},_transcriptStatusResponse:function(event,detail){detail=detail.response;if(detail&&detail.point){var point=detail.point;this.set("checkingTranscript",!1);point.latestContent=point.PointRevisions[point.PointRevisions.length-1].content;this.set("point",point);this.fire("yp-update-point-in-list",point);if(this._hasPointAccess(point)){this.set("editText",point.latestContent);this.set("isEditing",!0)}this.async(function(){this.fire("iron-resize")})}else if(detail&&detail.inProgress){this.async(function(){this.$.checkTranscriptStatusAjax.generateRequest()},2e3)}else if(detail&&detail.error){this.set("checkingTranscript",!1);this.set("checkTranscriptError",!0)}else{this.set("checkingTranscript",!1)}},_resetMedia:function(){this.set("videoActive",!1);this.set("pointVideoPath",null);this.set("pointImageVideoPath",null);this.set("pointVideoId",null);this.set("audioActive",!1);this.set("pointAudioPath",null);this.set("pointAudioId",null)},loginName:function(){return this.point.User.name},upVote:function(point){if(point){if(0==point.value){return!0}else{return 0<point.value}}else{console.warn("Can't find point for upVote");return!1}},downVote:function(point){if(point){if(0==point.value){return!0}else{return 0>point.value}}else{console.warn("Can't find point for upVote");return!1}},computeClass:function(point){var ret="description ";if(point){if(0<point.value)ret+="for";else ret+="against";return ret}else{console.warn("Can't find point for upVote");return ret}}});Polymer({_template:html$1`
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
        <paper-share-button hidden on-share-tap="_shareTap" class="shareIcon" less-margin\$="[[post.Group.configuration.hideDownVoteForPost]]" endorsed\$="[[isEndorsed]]" horizontal-align="right" id="shareButton" title\$="[[t('post.shareInfo')]]" facebook="" google="" twitter="" popup="" url="[[postUrl]]"></paper-share-button>
      </div>
    </paper-material>

    <lite-signal on-lite-signal-got-endorsements-and-qualities="_updateEndorsementsFromSignal"></lite-signal>
`,is:"yp-post-actions",behaviors:[ypNumberFormatBehavior,ypRemoveClassBehavior,ypLocalizationBridgeBehavior],properties:{post:{type:Object,observer:"_onPostChanged"},small:{type:Boolean,value:!1},headerMode:{type:Boolean,value:!1},forceSmall:{type:Boolean,value:!1},endorsementButtons:{type:String,value:"hearts"},endorseValue:{type:Number,value:0},isEndorsed:{type:Boolean,value:!1},elevation:{type:Number,value:3},elevationPlusOne:{type:Number,computed:"_elevationPlusOne(elevation)"},allDisabled:{type:Boolean,value:!1},disabledTitle:{type:String,value:null},floating:{type:Boolean,value:!1},votingDisabled:{type:Boolean,value:!1},smallerIcons:{type:Boolean,value:!1},formattedPointCount:{type:String,computed:"_formattedPointCount(post.counter_points)"},formattedDownCount:{type:String,computed:"_formattedDownCount(post.counter_endorsements_down)"},formattedUpCount:{type:String,computed:"_formattedUpCount(post.counter_endorsements_up)"},postUrl:{type:String,computed:"_postUrl(post)"},hideDebate:{type:Boolean,computed:"_hideDebate(small,forceSmall,post)"},customVoteUpHoverText:{type:String,computed:"_customVoteUpHoverText(post)"},customVoteDownHoverText:{type:String,computed:"_customVoteDownHoverText(post)"}},_customVoteUpHoverText:function(post){if(post&&post.Group&&post.Group.configuration&&post.Group.configuration.customVoteUpHoverText){return post.Group.configuration.customVoteUpHoverText}else{return this.t("post.up_vote")}},_customVoteDownHoverText:function(post){if(post&&post.Group&&post.Group.configuration&&post.Group.configuration.customVoteDownHoverText){return post.Group.configuration.customVoteDownHoverText}else{return this.t("post.down_vote")}},_formattedUpCount:function(number){if(number){return this.formatNumber(number)}else{return"0"}},_formattedPointCount:function(number){if(number){return this.formatNumber(number)}else{return"0"}},_formattedDownCount:function(number){if(number){return this.formatNumber(number)}else{return"0"}},_goToPostIfNotHeader:function(){if(!this.headerMode){this.goToPost()}},_postUrl:function(post){if(post){return encodeURIComponent("https://"+window.location.host+"/post/"+post.id)}else{console.warn("Can't find post for action");return""}},_elevationPlusOne:function(elevation){if(5>elevation){return elevation+1}else{return elevation}},_hideDebate:function(small,forceSmall){return small||forceSmall||this.post&&this.post.Group&&this.post.Group.configuration&&this.post.Group.configuration.hideDebateIcon},_onPostChanged:function(post,oldValue){this.set("isEndorsed",!1);if(post){this.removeClass(this.$.actionUp,"hearts-up-selected");this.removeClass(this.$.actionDown,"hearts-down-selected");this.removeClass(this.$.actionUp,"default-buttons-up-selected");this.removeClass(this.$.actionDown,"default-buttons-down-selected");this.set("endorseValue",0);if(post.Group.configuration&&post.Group.configuration.canVote!=void 0&&!1==post.Group.configuration.canVote){this.set("votingDisabled",!0);this.set("allDisabled",!0);this.set("disabledTitle",this.t("votingDisabled"))}else{this.set("votingDisabled",!1);this.set("allDisabled",!1)}if(post.Group.configuration&&post.Group.configuration.endorsementButtons!=void 0){this.set("endorsementButtons",post.Group.configuration.endorsementButtons)}else{this.set("endorsementButtons","hearts")}if(post.Group.configuration){this.set("post.Group.configuration.originalHideVoteCount",post.Group.configuration.hideVoteCount);if(post.Group.configuration.hideVoteCountUntilVoteCompleted){this.set("post.Group.configuration.hideVoteCount",!0)}}this._updateEndorsements(post)}else{console.warn("No post found for post actions")}},_updateEndorsementsFromSignal:function(){if(this.post){this._updateEndorsements(this.post)}else{console.warn("Trying to update post null from signal")}},_updateEndorsements:function(post){this.set("isEndorsed",!1);if(window.appUser&&window.appUser.loggedIn()&&window.appUser.user&&window.appUser.user.Endorsements){var thisPostsEndorsement=window.appUser.endorsementPostsIndex[post.id];if(thisPostsEndorsement)this._setEndorsement(thisPostsEndorsement.value)}},endorseModeIcon:function(endorsementButtons,upDown){if("hearts"!=endorsementButtons&&"hats"!=endorsementButtons){this.set("smallerIcons",!0)}else{this.set("smallerIcons",!1)}if("thumbs"==endorsementButtons&&"up"==upDown){return"thumb-up"}else if("thumbs"==endorsementButtons&&"down"==upDown){return"thumb-down"}else if("hearts"==endorsementButtons&&"up"==upDown){return"favorite-border"}else if("hearts"==endorsementButtons&&"down"==upDown){return"do-not-disturb"}else if("hats"==endorsementButtons&&"up"==upDown){return"keyboard-arrow-up"}else if("hats"==endorsementButtons&&"down"==upDown){return"keyboard-arrow-down"}else if("arrows"==endorsementButtons&&"up"==upDown){return"arrow-upward"}else if("arrows"==endorsementButtons&&"down"==upDown){return"arrow-downward"}},_setEndorsement:function(value){this.endorseValue=value;if(0<value){this.set("isEndorsed",!0)}if(0!==value&&this.post.Group.configuration&&this.post.Group.configuration.hideVoteCount&&!this.post.Group.configuration.originalHideVoteCount){this.set("post.Group.configuration.hideVoteCount",!1)}if("hearts"==this.endorsementButtons){if(0<value){this.$.actionUp.className+=" "+"hearts-up-selected";this.removeClass(this.$.actionDown,"hearts-down-selected");this.$.iconUpButton.icon="favorite"}else if(0>value){this.$.actionDown.className+=" "+"hearts-down-selected";this.removeClass(this.$.actionUp,"hearts-up-selected");this.$.iconUpButton.icon="favorite-border"}else{this.removeClass(this.$.actionUp,"hearts-up-selected");this.removeClass(this.$.actionDown,"hearts-down-selected");this.$.iconUpButton.icon="favorite-border"}}else{if(0<value){this.$.actionUp.className+=" "+"default-buttons-up-selected";this.removeClass(this.$.actionDown,"default-buttons-down-selected")}else if(0>value){this.$.actionDown.className+=" "+"default-buttons-down-selected";this.removeClass(this.$.actionUp,"default-buttons-up-selected")}else{this.removeClass(this.$.actionUp,"default-buttons-up-selected");this.removeClass(this.$.actionDown,"default-buttons-down-selected")}}},_enableVoting:function(){if(!this.votingDisabled){this.set("allDisabled",!1)}},_endorseResponse:function(event,detail){this._enableVoting();var endorsement=detail.response.endorsement,oldEndorsementValue=detail.response.oldEndorsementValue;this._setEndorsement(endorsement.value);window.appUser.updateEndorsementForPost(this.post.id,endorsement);if(oldEndorsementValue){if(0<oldEndorsementValue)this.set("post.counter_endorsements_up",this.post.counter_endorsements_up-1);else if(0>oldEndorsementValue)this.set("post.counter_endorsements_down",this.post.counter_endorsements_down-1)}if(0<endorsement.value)this.set("post.counter_endorsements_up",this.post.counter_endorsements_up+1);else if(0>endorsement.value)this.set("post.counter_endorsements_down",this.post.counter_endorsements_down+1)},generateEndorsementFromLogin:function(value){if(!window.appUser.endorsementPostsIndex[this.post.id]){this.generateEndorsement(value)}},generateEndorsement:function(value){if(!0===window.appUser.loggedIn()){this.$.endorseAjax.url="/api/posts/"+this.post.id+"/endorse";this.$.endorseAjax.body={post_id:this.post.id,value:value};if(this.endorseValue===value){this.$.endorseAjax.method="DELETE"}else{this.$.endorseAjax.method="POST"}this.$.endorseAjax.generateRequest()}else{this._enableVoting();window.appUser.loginForEndorse(this,{value:value})}},_shareTap:function(event,detail){window.appGlobals.activity("postShareOpen",detail.brand,this.post?this.post.id:-1)},upVote:function(event){this.set("allDisabled",!0);this.generateEndorsement(1);window.appGlobals.activity("clicked","endorse_up",this.post?this.post.id:-1);this.set("isEndorsed",!0);this.updateStyles();this._setVoteHidingStatus()},downVote:function(event){this.set("allDisabled",!0);this.generateEndorsement(-1);window.appGlobals.activity("clicked","endorse_down",this.post?this.post.id:-1);this._setVoteHidingStatus()},_setVoteHidingStatus:function(){if(this.post.Group.configuration&&this.post.Group.configuration.hideVoteCountUntilVoteCompleted&&!this.post.Group.configuration.originalHideVoteCount){this.set("post.Group.configuration.hideVoteCount",!1)}},computeActionClass:function(small){return small?"action-bar":"action-bar"},ready:function(){if(this.endorsementButtons){this.$.actionDown.className+=" "+"default-buttons-color";this.$.actionUp.className+=" "+"default-buttons-color"}}});const YpPostBehavior={properties:{post:{type:Object,notify:!0},endorseMode:{type:String},image:{type:Boolean,value:!0},elevation:{type:Number,value:1},postName:{type:String,computed:"postNameFunc(post)"},postDescription:{type:String,computed:"postDescriptionFunc(post)"},getCategoryImagePath:{type:String,computed:"_getCategoryImagePath(post)"}},postNameFunc:function(post){if(post&&post.name){return this.truncate(this.trim(post.name),100)}else if(post){return post.short_name}else{return""}},postDescriptionFunc:function(post){if(post&&post.description){return this.truncate(this.trim(post.description),500,"...")}else if(post&&post.Points&&post.Points[0]){return this.truncate(this.trim(post.Points[0].content),500,"...")}else{return""}},_getCategoryImagePath:function(post){if(post&&post.Category&&post.Category.CategoryIconImages){return this.getImageFormatUrl(post.Category.CategoryIconImages,0)}else{return""}}};var ypPostBehaviors={YpPostBehavior:YpPostBehavior};Polymer({_template:html$1`
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
`,is:"yp-post-cover-media",behaviors:[ypMediaFormatsBehavior,ypLocalizationBridgeBehavior],properties:{post:{type:Object,notify:!0,observer:"_postChanged"},noneActive:{type:Boolean,value:!1,computed:"_isNoneActive(post)"},categoryActive:{type:Boolean,value:!1,computed:"_isCategoryActive(post)"},categoryLargeActive:{type:Boolean,value:!1,computed:"_isCategoryLargeActive(post)"},imageActive:{type:Boolean,value:!1,computed:"_isImageActive(post)"},videoActive:{type:Boolean,value:!1,computed:"_isVideoActive(post)"},audioActive:{type:Boolean,value:!1,computed:"_isAudioActive(post)"},mapActive:{type:Boolean,value:!1,computed:"_isMapActive(post)"},streetViewActive:{type:Boolean,value:!1,computed:"_isStreetViewActive(post)"},mapType:{type:String,computed:"_mapType(post.location)"},zoomLevel:{type:String,computed:"_zoomLevel(post.location)"},latitude:{type:Number,computed:"_getLatitute(post.location.latitude)"},longitude:{type:Number,computed:"_getLongitude(post.location.longitude)"},mapPosition:{type:Object,computed:"_getMapPosition(post.location)"},getCategoryImagePath:{type:String,computed:"_getCategoryImagePath(post)"},postImagePath:{type:String,computed:"_postImagePath(post)"},postVideoPath:{type:String,computed:"_postVideoPath(post)"},postVideoPosterPath:{type:String,computed:"_postVideoPosterPath(post)"},postVideoId:Number,postAudioPath:{type:String,computed:"_postAudioPath(post)"},postAudioId:Number,headerMode:{type:Boolean,value:!1,observer:"_headerModeChanged"},disableMaps:{type:Boolean,value:!1},mapActivated:{type:Boolean,value:!1},streetViewActivated:{type:Boolean,value:!1},staticMapsApiKey:{type:String,value:"AIzaSyBYy8UvdDD650mz7k1pY0j2hBFQmCPVnxA"},tiny:{type:Boolean,value:!1},uploadedDefaultPostImageId:{type:String,value:null},defaultImageGroupId:{type:String,value:null},defaultPostImageEnabled:{type:Boolean,value:!1},showVideo:{type:Boolean,value:!1},showAudio:{type:Boolean,value:!1},portraitVideo:{type:Boolean,value:!1},activeDefaultImageUrl:{type:String,computed:"_activeDefaultImageUrl(defaultPostImageEnabled, defaultImageGroupId, uploadedDefaultPostImageId)",value:null}},_activeDefaultImageUrl:function(defaultPostImageEnabled,defaultImageGroupId,uploadedDefaultPostImageId){if(defaultPostImageEnabled&&defaultImageGroupId&&uploadedDefaultPostImageId){return"/api/groups/"+defaultImageGroupId+"/default_post_image/"+uploadedDefaultPostImageId}else{return null}},_goToPost:function(){if(this.post){if(this.headerMode){this.goToPost(this.post.id)}else{this.goToPost(this.post.id,null,null,this.post)}}else{console.error("No post in post cover media on goToPost")}},_headerModeChanged:function(headerMode){if(!0===headerMode){this.async(function(){this.set("mapActivated",!0);this.set("streetViewActivated",!0)})}},_getLatitute:function(latitude){if(latitude)return latitude;else return 0},_getLongitude:function(longitude){if(longitude)return longitude;else return 0},_isNoneActive:function(post){if(this._withCoverMediaType(post,"none"))return!0;else return!1},_isCategoryActive:function(post){if(post&&this._withCoverMediaType(post,"category")&&11e3>=post.id&&this._isDomainWithOldCategories())return!0;else return!1},_isDomainWithOldCategories:function(){var hostname=window.location.hostname;return-1<hostname.indexOf("betrireykjavik.is")||-1<hostname.indexOf("betraisland.is")||-1<hostname.indexOf("yrpri.org")},_isCategoryLargeActive:function(post){if(post&&this._withCoverMediaType(post,"category")&&(11e3<post.id||!this._isDomainWithOldCategories()))return!0;else return!1},_isImageActive:function(post){if(this._withCoverMediaType(post,"image")){return!0}else{return!1}},_isVideoActive:function(post){if(this._withCoverMediaType(post,"video")){return!0}else{return!1}},_isAudioActive:function(post){if(this._withCoverMediaType(post,"audio")){return!0}else{return!1}},_isMapActive:function(post){if(post&&post.location&&post.location.latitude&&this._withCoverMediaType(post,"map"))return!0;else return!1},_isStreetViewActive:function(post){if(post&&post.location&&post.location.latitude&&this._withCoverMediaType(post,"streetView")){return!0}else return!1},_postChanged:function(post,previousPost){if(post&&post.Group&&post.Group.configuration&&post.Group.configuration.uploadedDefaultPostImageId&&""!=post.Group.configuration.uploadedDefaultPostImageId){this.set("uploadedDefaultPostImageId",post.Group.configuration.uploadedDefaultPostImageId);this.set("defaultImageGroupId",post.Group.id);this.set("defaultPostImageEnabled",!0)}else{this.set("defaultPostImageEnabled",!1);this.set("defaultImageGroupId",null);this.set("uploadedDefaultPostImageId",null)}if(this.headerMode){this.setupMediaEventListeners(post,previousPost)}},_zoomLevel:function(location){if(location&&location.map_zoom&&""!=location.map_zoom){return location.map_zoom}else return"10"},_mapType:function(location){if(location&&location.mapType&&""!=location.mapType)return location.mapType;else return"roadmap"},_withCoverMediaType:function(post,mediaType){if(!post){console.info("No post for "+mediaType);return!1}else{if("none"==mediaType){return!post.Category&&(!post.cover_media_type||"none"==post.cover_media_type)}else if("category"==mediaType&&post.Category&&(!post.cover_media_type||"none"==post.cover_media_type)){return!0}else{return post&&post.cover_media_type==mediaType}}},_getMapPosition:function(location){if(location){return{lat:location.latitude,lng:location.longitude}}else{return{lat:0,lng:0}}},_postImagePath:function(post){if(post){return this.getImageFormatUrl(post.PostHeaderImages,0)}else{return""}},_postVideoPath:function(post){if(post&&post.PostVideos){var videoURL=this._getVideoURL(post.PostVideos);this.set("portraitVideo",this._isPortraitVideo(post.PostVideos));if(videoURL){this.set("postVideoId",post.PostVideos[0].id);return videoURL}else{return null}}else{return null}},_postAudioPath:function(post){if(post&&post.PostAudios){var audioURL=this._getAudioURL(post.PostAudios);if(audioURL){this.set("postAudioId",post.PostAudios[0].id);return audioURL}else{return null}}else{return null}},_postVideoPosterPath:function(post){if(post&&post.PostVideos){var videoPosterURL=this._getVideoPosterURL(post.PostVideos);if(videoPosterURL){return videoPosterURL}else{return null}}else{return null}},_getCategoryImagePath:function(post){if(post&&post.Category&&post.Category.CategoryIconImages){return this.getImageFormatUrl(post.Category.CategoryIconImages,0)}else{return""}}});const ypTruncateBehavior={truncate:function(input,length,killwords,end){var orig=input;length=length||255;if(input.length<=length)return input;if(killwords){input=input.substring(0,length)}else{var idx=input.lastIndexOf(" ",length);if(-1===idx){idx=length}input=input.substring(0,idx)}input+=end!==void 0&&null!==end?end:"...";return input},trim:function(input){return input.replace(/^\s*|\s*$/g,"")}};var ypTruncateBehavior$1={ypTruncateBehavior:ypTruncateBehavior};Polymer({_template:html$1`
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
`,is:"yp-user-image",behaviors:[ypMediaFormatsBehavior,ypLocalizationBridgeBehavior],properties:{small:{type:Boolean,value:!1},large:{type:Boolean,value:!1},veryLarge:{type:Boolean,value:!1},titleFromUser:{type:String},userTitle:{type:String,computed:"_computeUserTitle(user, title)"},user:{type:Object},profileImageUrl:{type:String,computed:"_profileImageUrl(user)"},noDefault:{type:Boolean,value:!1},computeFacebookSrc:{type:String,computed:"_computeFacebookSrc(user)"},noProfileImage:{type:Boolean,value:!1}},_computeUserTitle:function(user,titleFromUser){if(user){if(titleFromUser){return titleFromUser}else{return user.name}}else{return""}},_profileImageUrl:function(user){if(user&&user.UserProfileImages&&0<user.UserProfileImages.length){var formatUrl=this.getImageFormatUrl(user.UserProfileImages,0);if(formatUrl&&""!==formatUrl){this.set("noProfileImage",!1);return formatUrl}else{this.set("noProfileImage",!0);return null}}else{this.set("noProfileImage",!0);return null}},computeIf:function(user){return!1},computeClass:function(small){if(this.small)return"small rounded";else if(this.large)return"large rounded-more";else if(this.veryLarge)return"veryLarge rounded-even-more";else return"medium rounded"},_computeFacebookSrc:function(user){if(user&&user.facebook_id){return"https://graph.facebook.com/"+user.facebook_id+"/picture"}else{return null}},usePlaceHolderImage:function(user){null!=this.profileImageUrl||null!=user.facebook_id},ready:function(){}});Polymer({_template:html$1`
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
`,is:"yp-user-with-organization",behaviors:[ypMediaFormatsBehavior,ypLocalizationBridgeBehavior],properties:{user:{type:Object},titleDate:{type:Date},hideImage:{type:Boolean,value:!1},userTitle:{type:String,computed:"_computeUserTitle(user, titleDate)"},inverted:{type:Boolean,value:!1},organizationName:{type:String,computed:"_organizationName(user)"},organizationImageUrl:{type:String,computed:"_organizationImageUrl(user)"}},_computeUserTitle:function(user,titleDate){if(user&&titleDate){const dateParsed=parseISO(titleDate);var dateSince=formatDistance(dateParsed,new Date,{locale:enUS});return user.name+" "+dateSince}else{return null}},_organizationName:function(user){if(user&&user.OrganizationUsers&&0<user.OrganizationUsers.length&&user.OrganizationUsers[0].name){return user.OrganizationUsers[0].name}else{return null}},_organizationImageUrl:function(user){if(user&&user.OrganizationUsers&&0<user.OrganizationUsers.length&&user.OrganizationUsers[0].OrganizationLogoImages&&0<user.OrganizationUsers[0].OrganizationLogoImages.length&&user.OrganizationUsers[0].OrganizationLogoImages[0].formats){return this.getImageFormatUrl(user.OrganizationUsers[0].OrganizationLogoImages,2)}else{return null}}});Polymer({_template:html$1`
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
                    <template is="dom-if" if="[[hasPostAccess]]">
                      <div class="layout horizontal" hidden\$="[[isEditing]]">
                        <div class="flex"></div>
                        <yp-ajax id="editPostTranscriptAjax" method="PUT" on-response="_editPostTranscriptResponse"></yp-ajax>
                        <paper-icon-button class="editIcon" title\$="[[t('edit')]]" icon="create" on-tap="_editPostTranscript"></paper-icon-button>
                      </div>
                    </template>
                  </div>
                </template>
              </div>
            </div>
            <div class="layout vertical">
              <div class="infoContainer">
                <yp-magic-text id="description" text-type="postContent" content-language="[[post.language]]" content="[[post.description]]" no-user-info\$="[[!post.Group.configuration.showWhoPostedPosts]]" structured-questions-config="[[post.Group.configuration.structuredQuestions]]" content-id="[[post.id]]" class="description" truncate="500" more-text="{{t('readMore')}}" close-dialog-text="[[t('close')]]">
                </yp-magic-text>
              </div>
              <div class="card-actions">
                <yp-post-actions hidden\$="[[hideActions]]" floating="" header-mode="[[headerMode]]" elevation="-1" endorse-mode="[[endorseMode]]" class="voting" post="[[post]]"></yp-post-actions>
              </div>
            </div>
          </div>
        </div>
      </paper-material>
    </div>
    <lite-signal on-lite-signal-got-admin-rights="_gotAdminRights"></lite-signal>
`,is:"yp-post-header",behaviors:[YpPostBehavior,ypTruncateBehavior,ypMediaFormatsBehavior,ypLocalizationBridgeBehavior],properties:{selectedMenuItem:{type:String},headerMode:{type:Boolean,value:!1},elevation:{type:Number,value:2},post:{type:Object,observer:"_postChanged"},hasPostAccess:{type:Boolean,value:!1,notify:!0,computed:"_hasPostAccess(post, gotAdminRights)"},isEditing:{type:Boolean,value:!1,observer:"_isEditingChanged"},editText:String,checkingTranscript:{type:Boolean,value:!1},checkTranscriptError:{type:Boolean,value:!1},isAudioCover:{type:Boolean,value:!1},hideActions:{type:Boolean,value:!1}},_isEditingChanged:function(value){this._updateEmojiBindings(value);this.async(function(){this.fire("iron-resize")})},_updateEmojiBindings:function(isEditing){if(isEditing){this.async(function(){var point=this.$$("#postTranscriptionEditor"),emoji=this.$$("#postTranscriptEmojiSelector");if(point&&emoji){emoji.inputTarget=point}else{console.error("Wide: Can't bind post edit emojis :(")}}.bind(this),500)}},_cancelEdit:function(){this.set("isEditing",!1)},_saveEdit:function(){this.$$("#editPostTranscriptAjax").url="/api/posts/"+this.post.id+"/editTranscript";this.$$("#editPostTranscriptAjax").body={content:this.editText};this.$$("#editPostTranscriptAjax").generateRequest()},_editPostTranscriptResponse:function(event,detail){this.set("post.public_data.transcript.text",this.editText);this.set("post.public_data.transcript.userEdited",!0);this.set("isEditing",!1)},_editPostTranscript:function(){if(this.hasPostAccess){this.set("editText",this.post.public_data.transcript.text);this.set("isEditing",!0)}},_transcriptStatusResponse:function(event,detail){if(detail.response&&detail.response.text){this.set("post.public_data.transcript.text",detail.response.text);if(this.hasPostAccess){this.set("editText",detail.response.text);this.set("isEditing",!0)}this.set("checkingTranscript",!1);this.async(function(){this.fire("iron-resize")})}else if(detail.response&&detail.response.inProgress){this.async(function(){this.$$("#checkTranscriptStatusAjax").generateRequest()},2e3)}else if(detail.response&&detail.response.error){this.set("checkingTranscript",!1);this.set("checkTranscriptError",!0)}else{this.set("checkingTranscript",!1)}},_hasPostAccess:function(post,gotAdminRights){if(post&&gotAdminRights){if(null!=this.checkPostAccess(post)){return!0}else{return!1}}else{return!1}},goToPostIfNotHeader:function(){if(!this.headerMode){this.goToPost()}},_postChanged:function(post){this.set("checkingTranscript",!1);this.set("checkTranscriptError",!1);if(post&&post.description){this.async(function(){var description=this.$$("#description");if(description){if(post.data&&"lawIssue"===post.data.dataType&&post.data.issueStatus){description.content+=" - "+post.data.issueStatus}}else{console.error("Can't find description element")}});if(this.hasPostAccess&&!0===window.appGlobals.hasTranscriptSupport){if(post.public_data&&post.public_data.transcript&&post.public_data.transcript.inProgress){if("audio"===post.cover_media_type){this.$$("#checkTranscriptStatusAjax").url="/api/posts/"+post.id+"/audioTranscriptStatus";this.$$("#checkTranscriptStatusAjax").generateRequest();this.set("checkingTranscript",!0)}else if("video"===post.cover_media_type){this.$$("#checkTranscriptStatusAjax").url="/api/posts/"+post.id+"/videoTranscriptStatus";this.$$("#checkTranscriptStatusAjax").generateRequest();this.set("checkingTranscript",!0)}}}}if(post){if("audio"===post.cover_media_type){this.set("isAudioCover",!0)}else{this.set("isAudioCover",!1)}}},updateDescriptionIfEmpty:function(description){if(this.post&&(!this.post.description||""==this.post.description)){this.set("post.description",description)}},_refresh:function(){dom(document).querySelector("yp-app").getDialogAsync("postEdit",function(dialog){dialog.selected=0;this.fire("refresh")}.bind(this))},_menuSelection:function(event,detail){if("editMenuItem"==detail.item.id)this._openEdit();else if("deleteMenuItem"==detail.item.id)this._openDelete();else if("statusChangeMenuItem"==detail.item.id)this._openPostStatusChange();else if("moveMenuItem"==detail.item.id)this._openMovePost();else if("anonymizeMenuItem"==detail.item.id)this._openAnonymizeContent();else if("deleteContentMenuItem"==detail.item.id)this._openDeleteContent();else if("reportMenuItem"==detail.item.id)this._openReport();this.$$("paper-listbox").select(null)},_openMovePost:function(){dom(document).querySelector("yp-app").getDialogAsync("postMove",function(dialog){dialog.setupAndOpen(this.post,this._refresh.bind(this))}.bind(this))},_openPostStatusChange:function(){dom(document).querySelector("yp-app").getDialogAsync("postStatusChangeEdit",function(dialog){dialog.setup(this.post,null,this._refresh.bind(this));dialog.open("new",{postId:this.post.id,statusChange:!0})}.bind(this))},_openEdit:function(){window.appGlobals.activity("open","post.edit");dom(document).querySelector("yp-app").getDialogAsync("postEdit",function(dialog){dialog.setup(this.post,!1,this._refresh.bind(this),this.post.Group);dialog.open("edit",{postId:this.post.id})}.bind(this))},_openReport:function(){window.appGlobals.activity("open","post.report");dom(document).querySelector("yp-app").getDialogAsync("apiActionDialog",function(dialog){dialog.setup("/api/posts/"+this.post.id+"/report",this.t("reportConfirmation"),this._onReport.bind(this),this.t("post.report"),"PUT");dialog.open()}.bind(this))},_openDelete:function(){window.appGlobals.activity("open","post.delete");dom(document).querySelector("yp-app").getDialogAsync("apiActionDialog",function(dialog){dialog.setup("/api/posts/"+this.post.id,this.t("post.deleteConfirmation"),this._onDeleted.bind(this));dialog.open()}.bind(this))},_openDeleteContent:function(){window.appGlobals.activity("open","postDeleteContent");dom(document).querySelector("yp-app").getDialogAsync("apiActionDialog",function(dialog){dialog.setup("/api/posts/"+this.post.id+"/delete_content",this.t("postDeleteContentConfirmation"));dialog.open()}.bind(this))},_openAnonymizeContent:function(){window.appGlobals.activity("open","postAnonymizeContent");dom(document).querySelector("yp-app").getDialogAsync("apiActionDialog",function(dialog){dialog.setup("/api/posts/"+this.post.id+"/anonymize_content",this.t("postAnonymizeContentConfirmation"));dialog.open()}.bind(this))},_onReport:function(){window.appGlobals.notifyUserViaToast(this.t("post.report")+": "+this.post.name)},_onDeleted:function(){this.dispatchEvent(new CustomEvent("yp-refresh-group",{bubbles:!0,composed:!0}));this.redirectTo("/group/"+this.post.group_id)}});Polymer({_template:html$1`
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
`,is:"yp-post-points",behaviors:[ypTruncateBehavior,ypLocalizationBridgeBehavior],properties:{host:String,downPoints:{type:Array,value:[]},upPoints:{type:Array,value:[]},textValueUp:{type:String,notify:!0,value:""},textValueDown:{type:String,notify:!0,value:""},newPointTextCombined:{type:String},post:{type:Object,observer:"_postChanged"},points:{type:Array,value:null,observer:"_pointsChanged"},largeMode:{type:Boolean,value:!1,observer:"_updateEmojiBindings"},textValueMobileUpOrDown:String,labelMobileUpOrDown:String,labelUp:String,labelDown:String,pointUpOrDownSelected:{type:String,observer:"_pointUpOrDownSelectedChanged",value:"pointFor"},latestPointCreatedAt:{type:Date,value:null},scrollToId:{type:String,value:null},ironListResizeScrollThreshold:{type:Number,computed:"_ironListResizeScrollThreshold(largeMode)"},ironListPaddingTop:{type:Number,computed:"_ironListPaddingTop(wide)"},ifLengthUpIsRight:{type:Boolean,value:!1,computed:"ifLengthIsRight(\"up\",textValueUp, uploadedVideoUpId, uploadedAudioUpId)"},ifLengthDownIsRight:{type:Boolean,value:!1,computed:"ifLengthIsRight(\"down\", textValueDown, uploadedVideoDownId, uploadedAudioDownId)"},ifLengthMobileRight:{type:Boolean,value:!1,computed:"ifLengthIsRight(\"mobile\", textValueMobileUpOrDown, uploadedVideoMobileId, uploadedAudioMobileId)"},addPointDisabled:{type:Boolean,value:!1},mobileScrollOffset:{type:Number,computed:"_mobileScrollOffset(largeMode,post)"},ajaxActive:{type:Boolean,value:!1},uploadedVideoUpId:{type:String,value:null},uploadedVideoDownId:{type:String,value:null},uploadedVideoMobileId:{type:String,value:null},currentVideoId:{type:String,value:null},hideUpVideo:{type:Boolean,value:!1},hideDownVideo:{type:Boolean,value:!1},hideMobileVideo:{type:Boolean,value:!1},uploadedAudioUpId:{type:String,value:null},uploadedAudioDownId:{type:String,value:null},uploadedAudioMobileId:{type:String,value:null},currentAudioId:{type:String,value:null},hideUpAudio:{type:Boolean,value:!1},hideDownAudio:{type:Boolean,value:!1},hideMobileAudio:{type:Boolean,value:!1},hideUpText:{type:Boolean,value:!1},hideDownText:{type:Boolean,value:!1},hideMobileText:{type:Boolean,value:!1},selectedPointForMobile:{type:Boolean,value:!0},isAndroid:{type:Boolean,value:!1},hasCurrentUpVideo:{type:String,observer:"_hasCurrentUpVideo"},hasCurrentDownVideo:{type:String,observer:"_hasCurrentDownVideo"},hasCurrentMobileVideo:{type:String,observer:"_hasCurrentMobileVideo"},hasCurrentUpAudio:{type:String,observer:"_hasCurrentUpAudio"},hasCurrentDownAudio:{type:String,observer:"_hasCurrentDownAudio"},hasCurrentMobileAudio:{type:String,observer:"_hasCurrentMobileAudio"},storedPoints:{type:Array,value:null}},_openLogin:function(){this.fire("yp-open-login")},_videoUpUploaded:function(event,detail){this.set("uploadedVideoUpId",detail.videoId)},_videoDownUploaded:function(event,detail){this.set("uploadedVideoDownId",detail.videoId)},_videoMobileUploaded:function(event,detail){this.set("uploadedVideoMobileId",detail.videoId)},_audioUpUploaded:function(event,detail){this.set("uploadedAudioUpId",detail.audioId)},_audioDownUploaded:function(event,detail){this.set("uploadedAudioDownId",detail.audioId)},_audioMobileUploaded:function(event,detail){this.set("uploadedAudioMobileId",detail.audioId)},_mobileScrollOffset:function(large,post){if(!large&&post){var element=this.$$("#ironListMobile");if(element){var top=element.getBoundingClientRect().top;if(0>=top){top=800}return top}else{console.warn("Can't find mobile list element, returning 800");return 800}}},_newPointError:function(){this.set("addPointDisabled",!1)},_ironListResizeScrollThreshold:function(largeMode){if(largeMode){return 300}else{return 300}},_ironListPaddingTop:function(largeMode){if(largeMode){return 600}else{return 500}},ready:function(){var ua=navigator.userAgent.toLowerCase(),isAndroid=-1<ua.indexOf("android");if(isAndroid){this.set("isAndroid",!0)}window.addEventListener("resize",this._processStoredPoints.bind(this))},detached:function(){window.removeEventListener("resize",this._processStoredPoints)},listeners:{"yp-point-deleted":"_pointDeleted","yp-update-point-in-list":"_updatePointInLists"},observers:["_setupPointTextStartState(pointUpOrDownSelected, post)"],_setupPointTextStartState:function(pointUpOrDownSelected,post){if(post){this._pointUpOrDownSelectedChanged(pointUpOrDownSelected)}},_loadNewPointsIfNeeded:function(event,detail){if(this.post&&this.post.id==detail.postId){if(this.latestPointCreatedAt){this.$.newPointsAjax.url="/api/posts/"+this.post.id+"/newPoints";this.$.newPointsAjax.params={latestPointCreatedAt:this.latestPointCreatedAt};this.$.newPointsAjax.generateRequest()}else{console.error("Trying to send point without latestPointCreatedAt")}}},_newPointsResponse:function(event,detail){var points=this._preProcessPoints(detail.response);points.forEach(function(point){this._insertNewPoint(point)}.bind(this));this._updateCounterInfo()},_pointDeleted:function(){this.$.ajax.generateRequest()},_pointsChanged:function(points){if(points){this._updateEmojiBindings()}},_updateEmojiBindings:function(){this.async(function(){if(this.largeMode){var upPoint=this.$$("#up_point"),downPoint=this.$$("#down_point"),upEmoji=this.$$("#pointUpEmojiSelector"),downEmoji=this.$$("#pointDownEmojiSelector");if(upPoint&&downPoint&&upEmoji&&downEmoji){upEmoji.inputTarget=upPoint;downEmoji.inputTarget=downPoint}else{console.warn("Wide: Can't bind emojis :(")}}else{var upDownPoint=this.$$("#mobileUpOrDownPoint"),upDownEmoji=this.$$("#pointUpDownEmojiSelector");if(upDownPoint&&upDownEmoji){upDownEmoji.inputTarget=upDownPoint}else{console.warn("Small: Can't bind emojis :(")}}}.bind(this),500)},_pointUpOrDownSelectedChanged:function(newValue){if("pointFor"==newValue){if(this.post&&this.post.Group&&this.post.Group.configuration&&this.post.Group.configuration.alternativePointForLabel){this.set("labelMobileUpOrDown",this.post.Group.configuration.alternativePointForLabel)}else{this.set("labelMobileUpOrDown",this.t("point.for"))}this.set("selectedPointForMobile",!0)}else if("pointAgainst"==newValue){if(this.post&&this.post.Group&&this.post.Group.configuration&&this.post.Group.configuration.alternativePointAgainstLabel){this.set("labelMobileUpOrDown",this.post.Group.configuration.alternativePointAgainstLabel)}else{this.set("labelMobileUpOrDown",this.t("point.against"))}this.set("selectedPointForMobile",!1)}},_clearVideo:function(){this.set("uploadedVideoUpId",null);this.set("uploadedVideoDownId",null);this.set("uploadedVideoMobileId",null);this.set("currentVideoId",null);this.set("hideUpVideo",!1);this.set("hideDownVideo",!1);this.set("hideMobileVideo",!1);if(this.$$("#videoFileUploadUp"))this.$$("#videoFileUploadUp").clear();if(this.$$("#videoFileUploadDown"))this.$$("#videoFileUploadDown").clear();if(this.$$("#videoFileUploadMobile"))this.$$("#videoFileUploadMobile").clear()},_clearAudio:function(){this.set("uploadedAudioUpId",null);this.set("uploadedAudioDownId",null);this.set("uploadedAudioMobileId",null);this.set("currentAudioId",null);this.set("hideUpAudio",!1);this.set("hideDownAudio",!1);this.set("hideMobileAudio",!1);if(this.$$("#audioFileUploadUp"))this.$$("#audioFileUploadUp").clear();if(this.$$("#audioFileUploadDown"))this.$$("#audioFileUploadDown").clear();if(this.$$("#audioFileUploadMobile"))this.$$("#audioFileUploadMobile").clear()},_postChanged:function(newPost){this.set("points",null);this.set("upPoints",null);this.set("downPoints",null);this.set("latestPointCreatedAt",null);this.set("storedPoints",null);this._clearVideo();this._clearAudio();if(newPost){if(this.host){this.$.ajax.url=this.host+"/api/posts/"+newPost.id+"/points"}else{this.$.ajax.url="/api/posts/"+newPost.id+"/points"}this.$.ajax.generateRequest();if(this.post&&this.post.Group&&this.post.Group.configuration&&this.post.Group.configuration.alternativePointForLabel){this.set("labelUp",this.post.Group.configuration.alternativePointForLabel)}else{this.set("labelUp",this.t("point.for"))}if(this.post&&this.post.Group&&this.post.Group.configuration&&this.post.Group.configuration.alternativePointAgainstLabel){this.set("labelDown",this.post.Group.configuration.alternativePointAgainstLabel)}else{this.set("labelDown",this.t("point.against"))}}},removeElementsByClass:function(rootElement,className){var elements=rootElement.getElementsByClassName(className);while(0<elements.length){elements[0].parentNode.removeChild(elements[0])}},_processStoredPoints:function(){console.info("_processStoredPoints");if(null===this.upPoints){if(this.storedPoints&&0<this.storedPoints.length){for(var upPoints=[],downPoints=[],i=0;i<this.storedPoints.length;i++){if(0<this.storedPoints[i].value){upPoints.push(this.storedPoints[i])}else if(0>this.storedPoints[i].value){downPoints.push(this.storedPoints[i])}}this.set("upPoints",upPoints);this.set("downPoints",downPoints)}else{this.set("upPoints",[]);this.set("downPoints",[]);this.set("points",[])}}else{console.log("Landscape points already setup")}if(!this.largeMode&&!this.points){this.set("points",this.interleaveArrays(this.upPoints,this.downPoints))}},_response:function(event,detail){this.set("storedPoints",this._preProcessPoints(detail.response.points));this._processStoredPoints();this.removeElementsByClass(this,"inserted-outside-list");this._updateCounterInfo();this._scrollPointIntoView();this._checkForMultipleLanguages()},_updatePointInLists:function(event,changedPoint){this.upPoints.forEach(function(point,index){if(point.id===changedPoint.id){this.upPoints[index]=changedPoint}}.bind(this));this.downPoints.forEach(function(point,index){if(point.id===changedPoint.id){this.downPoints[index]=changedPoint}}.bind(this));if(this.points&&0<this.points.length){this.points.forEach(function(point,index){if(point.id===changedPoint.id){this.points[index]=changedPoint}}.bind(this))}},_checkForMultipleLanguages:function(){if(!localStorage.getItem("dontPromptForAutoTranslation")&&!sessionStorage.getItem("dontPromptForAutoTranslation")){var firstLanguage,multipleLanguages=!1;this.upPoints.forEach(function(point){if(point.language&&!multipleLanguages){if(!firstLanguage&&"??"!==point.language){firstLanguage=point.language}else if(firstLanguage&&firstLanguage!==point.language&&"??"!==point.language){multipleLanguages=!0;console.info("Multiple point languages: "+firstLanguage+" and "+point.language)}}});if(!multipleLanguages){this.downPoints.forEach(function(point){if(point.language&&!multipleLanguages){if(!firstLanguage&&"??"!==point.language){firstLanguage=point.language}else if(firstLanguage&&firstLanguage!=point.language&&"??"!==point.language){multipleLanguages=!0;console.info("Multiple point languages: "+firstLanguage+" and "+point.language)}}})}if(multipleLanguages){dom(document).querySelector("yp-app").getDialogAsync("autoTranslateDialog",function(dialog){dialog.openLaterIfAutoTranslationEnabled()}.bind(this))}}},interleaveArrays:function(arrayA,arrayB){for(var arrs=[arrayA,arrayB],maxLength=Math.max.apply(Math,arrs.map(function(arr){return arr.length})),result=[],i=0;i<maxLength;++i){arrs.forEach(function(arr){if(arr.length>i){result.push(arr[i])}})}return result},_scrollPointIntoView:function(){if(this.scrollToId){this.async(function(){var hasFoundIt=!1;if(!this.largeMode){this.points.forEach(function(point){if(!hasFoundIt&&point.id==this.scrollToId){this.$$("#ironListMobile").scrollToItem(point);hasFoundIt=!0}}.bind(this))}else{this.upPoints.forEach(function(point){if(!hasFoundIt&&point.id==this.scrollToId){this.$$("#ironListUp").scrollToItem(point);hasFoundIt=!0}}.bind(this));if(!hasFoundIt){this.downPoints.forEach(function(point){if(!hasFoundIt&&point.id==this.scrollToId){this.$$("#ironListDown").scrollToItem(point);hasFoundIt=!0}}.bind(this))}}if(hasFoundIt){this.async(function(){var point=this.$$("#point"+this.scrollToId);if(point){point.elevation=5;point.elevation=1;point.elevation=5;this.async(function(){point.elevation=1}.bind(this),7e3)}else{console.warn("Can't find point to elevate")}this.set("scrollToId",null)},50)}},20)}},_floatIfValueOrIE:function(value){var ie11=/Trident.*rv[ :]*11\./.test(navigator.userAgent);return ie11||value},_preProcessPoints:function(points){for(var i=0;i<points.length;i++){if(!this.latestPointCreatedAt||!this.latestPointCreatedAt||points[i].created_at>this.latestPointCreatedAt){this.set("latestPointCreatedAt",points[i].created_at)}if(points[i].PointRevisions[points[i].PointRevisions.length-1]&&points[i].PointRevisions[points[i].PointRevisions.length-1].content){points[i].latestContent=points[i].PointRevisions[points[i].PointRevisions.length-1].content}else{console.warn("No content for point in _preProcessPoints")}}return points},_updateCounterInfo:function(){if(this.largeMode){this.fire("yp-debate-info",{count:this.upPoints.length+this.downPoints.length,firstPoint:this.upPoints[0]})}else{this.fire("yp-debate-info",{count:this.points.length,firstPoint:this.points[0]})}},_insertNewPoint:function(point){if(this.largeMode){if(0<point.value){this.unshift("upPoints",point);this.async(function(){this.$$("#ironListUp").fire("iron-resize")},700)}else if(0>point.value){this.unshift("downPoints",point);this.async(function(){this.$$("#ironListDown").fire("iron-resize")},700)}}else{this.unshift("points",point);this.async(function(){this.$$("#ironListMobile").fire("iron-resize")},700)}},_newPointResponse:function(inEvent,inDetail){if(this.currentVideoId){var point=this._preProcessPoints([inDetail.response])[0],ajax=document.createElement("iron-ajax");ajax.handleAs="json";ajax.contentType="application/json";ajax.url="/api/videos/"+point.id+"/completeAndAddToPoint";ajax.method="PUT";ajax.body={videoId:this.currentVideoId,appLanguage:this.language};ajax.addEventListener("response",function(event,detail){this._completeNewPointResponse(event,event.detail)}.bind(this));ajax.generateRequest()}else if(this.currentAudioId){var point=this._preProcessPoints([inDetail.response])[0],ajax=document.createElement("iron-ajax");ajax.handleAs="json";ajax.contentType="application/json";ajax.url="/api/audios/"+point.id+"/completeAndAddToPoint";ajax.method="PUT";ajax.body={audioId:this.currentAudioId,appLanguage:this.language};ajax.addEventListener("response",function(event,detail){this._completeNewPointResponse(event,event.detail)}.bind(this));ajax.generateRequest()}else{this._completeNewPointResponse(inEvent,inDetail)}},_completeNewPointResponse:function(event,detail){this.set("addPointDisabled",!1);var point=this._preProcessPoints([detail.response])[0];if(this.currentVideoId){point.checkTranscriptFor="video"}else if(this.currentAudioId){point.checkTranscriptFor="audio"}if(0<point.value){this.newPointTextCombined=this.t("point.forAdded")+" "+this.truncate(point.content,21);this.set("textValueUp","")}else{this.newPointTextCombined=this.t("point.againstAdded")+" "+this.truncate(point.content,21);this.set("textValueDown","")}this.set("textValueMobileUpOrDown","");this._insertNewPoint(point);this.set("post.counter_points",this.post.counter_points+1);this.$.newPointToast.show();this._updateCounterInfo();this._clearVideo();this._clearAudio()},addPointUp:function(){this.addPoint(this.textValueUp,1,this.uploadedVideoUpId,this.uploadedAudioUpId);window.appGlobals.activity("add","pointUp")},addPointDown:function(){this.addPoint(this.textValueDown,-1,this.uploadedVideoDownId,this.uploadedAudioDownId);window.appGlobals.activity("add","pointDown")},addMobilePointUpOrDown:function(){if("pointFor"==this.pointUpOrDownSelected){this.addPoint(this.textValueMobileUpOrDown,1,this.uploadedVideoMobileId,this.uploadedAudioMobileId);window.appGlobals.activity("add","pointUp")}else if("pointAgainst"==this.pointUpOrDownSelected){this.addPoint(this.textValueMobileUpOrDown,-1,this.uploadedVideoMobileId,this.uploadedAudioMobileId);window.appGlobals.activity("add","pointDown")}},addPoint:function(content,value,videoId,audioId){if(!0===window.appUser.loggedIn()){this.$.newPointAjax.url="/api/points/"+this.post.group_id;this.$.newPointAjax.body={postId:this.post.id,content:content,value:value};this.$.newPointAjax.generateRequest();this.set("addPointDisabled",!0);if(videoId)this.set("currentVideoId",videoId);else if(audioId)this.set("currentAudioId",audioId)}else{window.appUser.loginForNewPoint(this,{content:content,value:value})}},focusUpPoint:function(){},focusDownPoint:function(){},focusTextArea:function(event){event.currentTarget.parentElement.elevation=3},blurTextArea:function(event){event.currentTarget.parentElement.elevation=1},_hasCurrentUpVideo:function(value){if(value){this.set("hideUpAudio",!0);this.set("hideUpText",!0)}else{this.set("hideUpAudio",!1);this.set("hideUpText",!1)}},_hasCurrentDownVideo:function(value){if(value){this.set("hideDownAudio",!0);this.set("hideDownText",!0)}else{this.set("hideDownAudio",!1);this.set("hideDownText",!1)}},_hasCurrentUpAudio:function(value){if(value){this.set("hideUpVideo",!0);this.set("hideUpText",!0)}else{this.set("hideUpVideo",!1);this.set("hideUpText",!1)}},_hasCurrentDownAudio:function(value){if(value){this.set("hideDownVideo",!0);this.set("hideDownText",!0)}else{this.set("hideDownVideo",!1);this.set("hideDownText",!1)}},_hasCurrentMobileVideo:function(value){if(value){this.set("hideMobileAudio",!0);this.set("hideMobileText",!0)}else{this.set("hideMobileAudio",!1);this.set("hideMobileText",!1)}},_hasCurrentMobileAudio:function(value){if(value){this.set("hideMobileVideo",!0);this.set("hideMobileText",!0)}else{this.set("hideMobileVideo",!1);this.set("hideMobileText",!1)}},ifLengthIsRight:function(type,textValue,hasVideoId,hasAudioId){if(null!=hasVideoId){if("up"===type){this.set("hideUpVideo",!1);this.set("hideUpAudio",!0);this.set("hideUpText",!0)}if("down"===type){this.set("hideDownVideo",!1);this.set("hideDownAudio",!0);this.set("hideDownText",!0)}if("mobile"===type){this.set("hideMobileVideo",!1);this.set("hideMobileAudio",!0);this.set("hideMobileText",!0)}return!0}else if(null!=hasAudioId){if("up"===type){this.set("hideUpAudio",!1);this.set("hideUpVideo",!0);this.set("hideUpText",!0)}if("down"===type){this.set("hideDownAudio",!1);this.set("hideDownVideo",!0);this.set("hideDownText",!0)}if("mobile"===type){this.set("hideMobileAudio",!1);this.set("hideMobileVideo",!0);this.set("hideMobileText",!0)}return!0}else if(null!=textValue&&0===textValue.length){if("up"===type){this.set("hideUpVideo",!1);this.set("hideUpAudio",!1);this.set("hideUpText",!1)}if("down"===type){this.set("hideDownVideo",!1);this.set("hideDownAudio",!1);this.set("hideDownText",!1)}if("mobile"===type){this.set("hideMobileVideo",!1);this.set("hideMobileAudio",!1);this.set("hideMobileText",!1)}return!1}else if(null!=textValue&&0<textValue.length){if("up"===type){this.set("hideUpVideo",!0);this.set("hideUpAudio",!0);this.set("hideUpText",!1)}if("down"===type){this.set("hideDownVideo",!0);this.set("hideDownAudio",!0);this.set("hideDownText",!1)}if("mobile"===type){this.set("hideMobileVideo",!0);this.set("hideMobileAudio",!0);this.set("hideMobileText",!1)}return!0}else if(null!=textValue&&1<textValue.length){return!0}else{return!1}}});Polymer({_template:html$1`
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
`,is:"yp-post",behaviors:[ypMediaFormatsBehavior,ypNumberFormatBehavior,ypTruncateBehavior,ypLocalizationBridgeBehavior],properties:{idRoute:Object,tabRoute:Object,idRouteData:Object,tabRouteData:Object,postId:{type:Number,value:null,observer:"_postIdChanged"},host:String,post:{type:Object,value:null,notify:!0,observer:"_postChanged"},selectedTab:{type:String,value:"debate",observer:"_selectedTabChanged"},small:{type:Boolean},method:{type:String},mapActive:{type:Boolean,value:!1},wideWidth:{type:Boolean,value:!1},createFabIcon:{type:String,value:"lightbulb-outline"},disableNewPosts:{type:Boolean,value:!1},scrollToPointId:{type:String,value:null},locationHidden:{type:Boolean,value:!1}},observers:["_routeIdChanged(idRouteData.id)","_routeTabChanged(tabRouteData.tabName)"],_routeIdChanged:function(newId){if(newId){this.set("postId",newId)}},_routeTabChanged:function(newTabName){if(newTabName&&!this._isNumber(newTabName)){this.set("selectedTab",newTabName)}else if(newTabName&&this._isNumber(newTabName)){this.set("scrollToPointId",newTabName);this.set("selectedTab","debate")}},_isNumber:function(n){return!isNaN(parseFloat(n))&&isFinite(n)},_selectedTabChanged:function(tabName){if(this.post){this.redirectTo("/post/"+this.post.id+"/"+tabName)}if("location"==tabName){this.set("mapActive",!0)}else{this.set("mapActive",!1)}if(tabName&&window.appGlobals){window.appGlobals.activity("open","post_tab_"+tabName,"",{id:this.postId,modelType:"post"})}this.async(function(){var news=this.$$("#postNews");if(news){news.fireResize()}},300)},listeners:{"yp-debate-info":"_updateDebateInfo","yp-post-image-count":"_updatePostImageCount"},_updatePostImageCount:function(event,imageCount){var tabCounter=this.$$("#tabCountPhotos");if(tabCounter){tabCounter.innerHTML=this.formatNumber(imageCount)}},_close:function(){window.history.back()},_updateDebateInfo:function(event,detail){var tabCounter=this.$$("#tabCountDebate");if(tabCounter){tabCounter.innerHTML=this.formatNumber(detail.count)}if(detail.firstPoint){this.$.postCard.updateDescriptionIfEmpty(detail.firstPoint.content)}},_mainContainerClasses:function(small){if(small){return"layout horizontal wrap"}else{return"layout horizontal center-center"}},_headerClasses:function(small){if(small){return"layout vertical postHeader wrap"}else{return"layout horizontal postHeader"}},postName:function(post){if(post&&post.name){return this.truncate(this.trim(post.name),200)}else if(post){return post.short_name}},postDescription:function(post){if(post&&post.description){return this.truncate(this.trim(post.description),1e4,"...")}else{return""}},_refreshAjax:function(){this.$.ajax.generateRequest()},_postChanged:function(newValue,oldValue){},_postIdChanged:function(postId){var cachedItem=null;if(cachedItem){this._setupAjaxUrl();this._handleIncomingPostResponse(null,{response:cachedItem});console.log("Got post from item cache")}else if(!1){this._setupAjaxUrl();this._handleIncomingPostResponse(null,{response:window.appGlobals.getPostFromCache(postId),fromCache:!0});console.log("Got post from cache possibly from recommendations")}else{console.log("Got post from server not cache");this.set("post",null);if(postId){this._getPost();this.set("selectedTab","debate")}}},_setupAjaxUrl:function(){if(this.host){this.$.ajax.url=this.host+"/api/posts/"+this.postId}else{this.$.ajax.url="/api/posts/"+this.postId}},_pagesResponse:function(event,detail){this.fire("yp-set-pages",detail.response)},_getPost:function(){this._setupAjaxUrl();this.$$("#ajax").retryMethodAfter401Login=this._getPost.bind(this);this.$.ajax.generateRequest()},_handleIncomingPostResponse:function(event,detail){this.set("post",detail.response);this.refresh();if(this.post.Group.configuration&&this.post.Group.configuration.canAddNewPosts!=void 0){if(!0===this.post.Group.configuration.canAddNewPosts){this.set("disableNewPosts",!1)}else{this.set("disableNewPosts",!0)}}else{this.set("disableNewPosts",!1)}},_processRecommendation:function(recommendedPost){if(recommendedPost&&this.post){var postName=recommendedPost.name;if(this.wideWidth){postName=this.truncate(postName,60)}else{postName=this.truncate(postName,30)}this.fire("yp-set-next-post",{currentPostId:this.post.id,goForwardToPostId:recommendedPost.id,goForwardPostName:postName})}else{this.fire("yp-set-next-post",{currentPostId:this.post.id,goForwardToPostId:null,goForwardPostName:null});console.log("Not recommended post")}},refresh:function(){if(this.post){if(null!=this.post.Group.theme_id||this.post.Group.configuration&&null!=this.post.Group.configuration.themeOverrideColorPrimary){}else if(this.post.Group.Community&&(null!=this.post.Group.Community.theme_id||this.post.Group.Community.configuration&&this.post.Group.Community.configuration.themeOverrideColorPrimary)){}if(!this.post.Group.Community){console.error("No community!");debugger}}},setupTopHeaderImage:function(image){var url="url("+this.getImageFormatUrl(image,0)+")";this.updateStyles({"--top-area-background-image":url})},computeUrl:function(post_id){return"/api/posts/"+post_id}});export{esm as $esm,ypIronListBehavior$1 as $ypIronListBehavior,ypLocalizationBridgeBehavior$1 as $ypLocalizationBridgeBehavior,ypMediaFormatsBehavior$1 as $ypMediaFormatsBehavior,ypNumberFormatBehavior$1 as $ypNumberFormatBehavior,ypPostBehaviors as $ypPostBehaviors,ypRemoveClassBehavior$1 as $ypRemoveClassBehavior,ypTruncateBehavior$1 as $ypTruncateBehavior,twemoji as $esmDefault,ypIronListBehavior,ypLocalizationBridgeBehavior,ypMediaFormatsBehavior,ypNumberFormatBehavior,YpPostBehavior,ypRemoveClassBehavior,ypTruncateBehavior};