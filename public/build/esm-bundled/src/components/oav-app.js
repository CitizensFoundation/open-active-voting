"use strict";const nativeShadow=!(window.ShadyDOM&&window.ShadyDOM.inUse);let nativeCssVariables_,cssBuild;function calcCssVariables(e){nativeCssVariables_=(!e||!e.shimcssproperties)&&(nativeShadow||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(cssBuild=window.ShadyCSS.cssBuild);const disableRuntime=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?nativeCssVariables_=window.ShadyCSS.nativeCss:window.ShadyCSS?(calcCssVariables(window.ShadyCSS),window.ShadyCSS=void 0):calcCssVariables(window.WebComponents&&window.WebComponents.flags);const nativeCssVariables=nativeCssVariables_;var styleSettings={nativeShadow:nativeShadow,get cssBuild(){return cssBuild},disableRuntime:disableRuntime,nativeCssVariables:nativeCssVariables};class StyleNode{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function parse(e){return parseCss(lex(e=clean(e)),e)}function clean(e){return e.replace(RX.comments,"").replace(RX.port,"")}function lex(e){let t=new StyleNode;t.start=0,t.end=e.length;let i=t;for(let n=0,o=e.length;n<o;n++)if(e[n]===OPEN_BRACE){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;(i=new StyleNode).start=n+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[n]===CLOSE_BRACE&&(i.end=n+1,i=i.parent||t);return t}function parseCss(e,t){let i=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let n=e.previous?e.previous.end:e.parent.start;i=(i=(i=_expandUnicodeEscapes(i=t.substring(n,e.start-1))).replace(RX.multipleSpaces," ")).substring(i.lastIndexOf(";")+1);let o=e.parsedSelector=e.selector=i.trim();e.atRule=0===o.indexOf(AT_START),e.atRule?0===o.indexOf(MEDIA_START)?e.type=types.MEDIA_RULE:o.match(RX.keyframesRule)&&(e.type=types.KEYFRAMES_RULE,e.keyframesName=e.selector.split(RX.multipleSpaces).pop()):0===o.indexOf(VAR_START)?e.type=types.MIXIN_RULE:e.type=types.STYLE_RULE}let n=e.rules;if(n)for(let e,i=0,o=n.length;i<o&&(e=n[i]);i++)parseCss(e,t);return e}function _expandUnicodeEscapes(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e})}function stringify(e,t,i=""){let n="";if(e.cssText||e.rules){let i=e.rules;if(i&&!_hasMixinRules(i))for(let e,o=0,r=i.length;o<r&&(e=i[o]);o++)n=stringify(e,t,n);else(n=(n=t?e.cssText:removeCustomProps(e.cssText)).trim())&&(n="  "+n+"\n")}return n&&(e.selector&&(i+=e.selector+" "+OPEN_BRACE+"\n"),i+=n,e.selector&&(i+=CLOSE_BRACE+"\n\n")),i}function _hasMixinRules(e){let t=e[0];return!!t&&!!t.selector&&0===t.selector.indexOf(VAR_START)}function removeCustomProps(e){return removeCustomPropApply(e=removeCustomPropAssignment(e))}function removeCustomPropAssignment(e){return e.replace(RX.customProp,"").replace(RX.mixinProp,"")}function removeCustomPropApply(e){return e.replace(RX.mixinApply,"").replace(RX.varApply,"")}const types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},OPEN_BRACE="{",CLOSE_BRACE="}",RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START="--",MEDIA_START="@media",AT_START="@";var cssParse={StyleNode:StyleNode,parse:parse,stringify:stringify,removeCustomPropAssignment:removeCustomPropAssignment,types:types};const VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi,ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/,MEDIA_MATCH=/@media\s(.*)/,IS_VAR=/^--/,BRACKETED=/\{[^}]*\}/g,HOST_PREFIX="(?:^|[^.#[:])",HOST_SUFFIX="($|[.:[\\s>+~])";var commonRegex={VAR_ASSIGN:VAR_ASSIGN,MIXIN_MATCH:MIXIN_MATCH,VAR_CONSUMED:VAR_CONSUMED,ANIMATION_MATCH:ANIMATION_MATCH,MEDIA_MATCH:MEDIA_MATCH,IS_VAR:IS_VAR,BRACKETED:BRACKETED,HOST_PREFIX:HOST_PREFIX,HOST_SUFFIX:HOST_SUFFIX};const styleTextSet=new Set,scopingAttribute="shady-unscoped";function processUnscopedStyle(e){const t=e.textContent;if(!styleTextSet.has(t)){styleTextSet.add(t);const i=e.cloneNode(!0);document.head.appendChild(i)}}function isUnscopedStyle(e){return e.hasAttribute(scopingAttribute)}var unscopedStyleHandler={scopingAttribute:scopingAttribute,processUnscopedStyle:processUnscopedStyle,isUnscopedStyle:isUnscopedStyle};function toCssText(e,t){return e?("string"==typeof e&&(e=parse(e)),t&&forEachRule(e,t),stringify(e,nativeCssVariables)):""}function rulesForStyle(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=parse(e.textContent)),e.__cssRules||null}function isKeyframesSelector(e){return!!e.parent&&e.parent.type===types.KEYFRAMES_RULE}function forEachRule(e,t,i,n){if(!e)return;let o=!1,r=e.type;if(n&&r===types.MEDIA_RULE){let t=e.selector.match(MEDIA_MATCH);t&&(window.matchMedia(t[1]).matches||(o=!0))}r===types.STYLE_RULE?t(e):i&&r===types.KEYFRAMES_RULE?i(e):r===types.MIXIN_RULE&&(o=!0);let a=e.rules;if(a&&!o)for(let e,o=0,r=a.length;o<r&&(e=a[o]);o++)forEachRule(e,t,i,n)}function applyCss(e,t,i,n){let o=createScopeStyle(e,t);return applyStyle(o,i,n),o}function createScopeStyle(e,t){let i=document.createElement("style");return t&&i.setAttribute("scope",t),i.textContent=e,i}let lastHeadApplyNode=null;function applyStylePlaceHolder(e){let t=document.createComment(" Shady DOM styles for "+e+" "),i=lastHeadApplyNode?lastHeadApplyNode.nextSibling:null,n=document.head;return n.insertBefore(t,i||n.firstChild),lastHeadApplyNode=t,t}function applyStyle(e,t,i){t=t||document.head;let n=i&&i.nextSibling||t.firstChild;if(t.insertBefore(e,n),lastHeadApplyNode){e.compareDocumentPosition(lastHeadApplyNode)===Node.DOCUMENT_POSITION_PRECEDING&&(lastHeadApplyNode=e)}else lastHeadApplyNode=e}function isTargetedBuild(e){return nativeShadow?"shadow"===e:"shady"===e}function findMatchingParen(e,t){let i=0;for(let n=t,o=e.length;n<o;n++)if("("===e[n])i++;else if(")"===e[n]&&0==--i)return n;return-1}function processVariableAndFallback(e,t){let i=e.indexOf("var(");if(-1===i)return t(e,"","","");let n=findMatchingParen(e,i+3),o=e.substring(i+4,n),r=e.substring(0,i),a=processVariableAndFallback(e.substring(n+1),t),s=o.indexOf(",");return-1===s?t(r,o.trim(),"",a):t(r,o.substring(0,s).trim(),o.substring(s+1).trim(),a)}function setElementClassRaw(e,t){nativeShadow?e.setAttribute("class",t):window.ShadyDOM.nativeMethods.setAttribute.call(e,"class",t)}const wrap=window.ShadyDOM&&window.ShadyDOM.wrap||(e=>e);function getIsExtends(e){let t=e.localName,i="",n="";return t?-1<t.indexOf("-")?i=t:(n=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,n=e.extends),{is:i,typeExtension:n}}function gatherStyleText(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const n=i[e];isUnscopedStyle(n)?nativeShadow||(processUnscopedStyle(n),n.parentNode.removeChild(n)):(t.push(n.textContent),n.parentNode.removeChild(n))}return t.join("").trim()}function splitSelectorList(e){const t=[];let i="";for(let n=0;0<=n&&n<e.length;n++)if("("===e[n]){const t=findMatchingParen(e,n);i+=e.slice(n,t+1),n=t}else","===e[n]?(t.push(i),i=""):i+=e[n];return i&&t.push(i),t}const CSS_BUILD_ATTR="css-build";function getCssBuild(e){if(void 0!==cssBuild)return cssBuild;if(void 0===e.__cssBuild){const t=e.getAttribute(CSS_BUILD_ATTR);if(t)e.__cssBuild=t;else{const t=getBuildComment(e);""!==t&&removeBuildComment(e),e.__cssBuild=t}}return e.__cssBuild||""}function elementHasBuiltCss(e){return""!==getCssBuild(e)}function getBuildComment(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===CSS_BUILD_ATTR)return e[1]}return""}function isOptimalCssBuild(e=""){return!(""===e||!nativeCssVariables)&&(nativeShadow?"shadow"===e:"shady"===e)}function removeBuildComment(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}var styleUtil={toCssText:toCssText,rulesForStyle:rulesForStyle,isKeyframesSelector:isKeyframesSelector,forEachRule:forEachRule,applyCss:applyCss,createScopeStyle:createScopeStyle,applyStylePlaceHolder:applyStylePlaceHolder,applyStyle:applyStyle,isTargetedBuild:isTargetedBuild,findMatchingParen:findMatchingParen,processVariableAndFallback:processVariableAndFallback,setElementClassRaw:setElementClassRaw,wrap:wrap,getIsExtends:getIsExtends,gatherStyleText:gatherStyleText,splitSelectorList:splitSelectorList,getCssBuild:getCssBuild,elementHasBuiltCss:elementHasBuiltCss,getBuildComment:getBuildComment,isOptimalCssBuild:isOptimalCssBuild};function updateNativeProperties(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function getComputedStyleValue(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}function detectMixin(e){const t=MIXIN_MATCH.test(e)||VAR_ASSIGN.test(e);return MIXIN_MATCH.lastIndex=0,VAR_ASSIGN.lastIndex=0,t}var commonUtils={updateNativeProperties:updateNativeProperties,getComputedStyleValue:getComputedStyleValue,detectMixin:detectMixin};const APPLY_NAME_CLEAN=/;\s*/m,INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/,IMPORTANT=/\s*!important/,MIXIN_VAR_SEP="_-_";let PropertyEntry,DependantsEntry,MixinMapEntry;class MixinMap{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let invalidCallback=null;class ApplyShim{constructor(){this._currentElement=null,this._measureElement=null,this._map=new MixinMap}detectMixin(e){return detectMixin(e)}gatherStyles(e){const t=gatherStyleText(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=rulesForStyle(e);return this.transformRules(i,t),e.textContent=toCssText(i),i}transformCustomStyle(e){let t=rulesForStyle(e);return forEachRule(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=toCssText(t),t}transformRules(e,t){this._currentElement=t,forEachRule(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(VAR_ASSIGN,(e,i,n,o)=>this._produceCssProperties(e,i,n,o,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let n=!1;return forEachRule(t,t=>{(n=n||t===e)||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))}),i}_consumeCssProperties(e,t){let i=null;for(;i=MIXIN_MATCH.exec(e);){let n=i[0],o=i[1],r=i.index,a=r+n.indexOf("@apply"),s=r+n.length,l=e.slice(0,a),c=e.slice(s),p=t?this._fallbacksFromPreviousRules(t):{};Object.assign(p,this._cssTextToMap(l));let h=this._atApplyToCssProperties(o,p);e=`${l}${h}${c}`,MIXIN_MATCH.lastIndex=r+h.length}return e}_atApplyToCssProperties(e,t){e=e.replace(APPLY_NAME_CLEAN,"");let i=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){let o,r,a;this._currentElement&&(n.dependants[this._currentElement]=!0);const s=n.properties;for(o in s)a=t&&t[o],r=[o,": var(",e,MIXIN_VAR_SEP,o],a&&r.push(",",a.replace(IMPORTANT,"")),r.push(")"),IMPORTANT.test(s[o])&&r.push(" !important"),i.push(r.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=INITIAL_INHERIT.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,n,o=e.split(";"),r={};for(let e,a,s=0;s<o.length;s++)(e=o[s])&&1<(a=e.split(":")).length&&(i=a[0].trim(),n=a.slice(1).join(":"),t&&(n=this._replaceInitialOrInherit(i,n)),r[i]=n);return r}_invalidateMixinEntry(e){if(invalidCallback)for(let t in e.dependants)t!==this._currentElement&&invalidCallback(t)}_produceCssProperties(e,t,i,n,o){if(i&&processVariableAndFallback(i,(e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)}),!n)return e;let r=this._consumeCssProperties(""+n,o),a=e.slice(0,e.indexOf("--")),s=this._cssTextToMap(r,!0),l=s,c=this._map.get(t),p=c&&c.properties;p?l=Object.assign(Object.create(p),s):this._map.set(t,l);let h,d,u=[],m=!1;for(h in l)void 0===(d=s[h])&&(d="initial"),!p||h in p||(m=!0),u.push(`${t}${MIXIN_VAR_SEP}${h}: ${d}`);return m&&this._invalidateMixinEntry(c),c&&(c.properties=l),i&&(a=`${e};${a}`),`${a}${u.join("; ")};`}}ApplyShim.prototype.detectMixin=ApplyShim.prototype.detectMixin,ApplyShim.prototype.transformStyle=ApplyShim.prototype.transformStyle,ApplyShim.prototype.transformCustomStyle=ApplyShim.prototype.transformCustomStyle,ApplyShim.prototype.transformRules=ApplyShim.prototype.transformRules,ApplyShim.prototype.transformRule=ApplyShim.prototype.transformRule,ApplyShim.prototype.transformTemplate=ApplyShim.prototype.transformTemplate,ApplyShim.prototype._separator=MIXIN_VAR_SEP,Object.defineProperty(ApplyShim.prototype,"invalidCallback",{get:()=>invalidCallback,set(e){invalidCallback=e}});var applyShim={default:ApplyShim};const templateMap={};var templateMap$1={default:templateMap};const CURRENT_VERSION="_applyShimCurrentVersion",NEXT_VERSION="_applyShimNextVersion",VALIDATING_VERSION="_applyShimValidatingVersion",promise=Promise.resolve();function invalidate(e){let t=templateMap[e];t&&invalidateTemplate(t)}function invalidateTemplate(e){e[CURRENT_VERSION]=e[CURRENT_VERSION]||0,e[VALIDATING_VERSION]=e[VALIDATING_VERSION]||0,e[NEXT_VERSION]=(e[NEXT_VERSION]||0)+1}function isValid(e){let t=templateMap[e];return!t||templateIsValid(t)}function templateIsValid(e){return e[CURRENT_VERSION]===e[NEXT_VERSION]}function isValidating(e){let t=templateMap[e];return!!t&&templateIsValidating(t)}function templateIsValidating(e){return!templateIsValid(e)&&e[VALIDATING_VERSION]===e[NEXT_VERSION]}function startValidating(e){startValidatingTemplate(templateMap[e])}function startValidatingTemplate(e){e[VALIDATING_VERSION]=e[NEXT_VERSION],e._validating||(e._validating=!0,promise.then(function(){e[CURRENT_VERSION]=e[NEXT_VERSION],e._validating=!1}))}function elementsAreInvalid(){for(let e in templateMap){if(!templateIsValid(templateMap[e]))return!0}return!1}var applyShimUtils={invalidate:invalidate,invalidateTemplate:invalidateTemplate,isValid:isValid,templateIsValid:templateIsValid,isValidating:isValidating,templateIsValidating:templateIsValidating,startValidating:startValidating,startValidatingTemplate:startValidatingTemplate,elementsAreInvalid:elementsAreInvalid};let resolveFn,readyPromise=null,whenReady=window.HTMLImports&&window.HTMLImports.whenReady||null;function documentWait(e){requestAnimationFrame(function(){whenReady?whenReady(e):(readyPromise||(readyPromise=new Promise(e=>{resolveFn=e}),"complete"===document.readyState?resolveFn():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&resolveFn()})),readyPromise.then(function(){e&&e()}))})}var documentWait$1={default:documentWait};let CustomStyleProvider;const SEEN_MARKER="__seenByShadyCSS",CACHED_STYLE="__shadyCSSCachedStyle";let transformFn=null,validateFn=null;class CustomStyleInterface{constructor(){this.customStyles=[],this.enqueued=!1,documentWait(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&validateFn&&(this.enqueued=!0,documentWait(validateFn))}addCustomStyle(e){e[SEEN_MARKER]||(e[SEEN_MARKER]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[CACHED_STYLE])return e[CACHED_STYLE];let t;return t=e.getStyle?e.getStyle():e}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[CACHED_STYLE])continue;const n=this.getStyleForCustomStyle(i);if(n){const e=n.__appliedElement||n;transformFn&&transformFn(e),i[CACHED_STYLE]=e}}return e}}CustomStyleInterface.prototype.addCustomStyle=CustomStyleInterface.prototype.addCustomStyle,CustomStyleInterface.prototype.getStyleForCustomStyle=CustomStyleInterface.prototype.getStyleForCustomStyle,CustomStyleInterface.prototype.processStyles=CustomStyleInterface.prototype.processStyles,Object.defineProperties(CustomStyleInterface.prototype,{transformCallback:{get:()=>transformFn,set(e){transformFn=e}},validateCallback:{get:()=>validateFn,set(e){let t=!1;validateFn||(t=!0),validateFn=e,t&&this.enqueueDocumentValidation()}}});const CustomStyleInterfaceInterface={};var customStyleInterface={CustomStyleProvider:CustomStyleProvider,default:CustomStyleInterface,CustomStyleInterfaceInterface:CustomStyleInterfaceInterface};const applyShim$1=new ApplyShim;class ApplyShimInterface{constructor(){this.customStyleInterface=null,applyShim$1.invalidCallback=invalidate}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=(e=>{applyShim$1.transformCustomStyle(e)}),this.customStyleInterface.validateCallback=(()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})}))}prepareTemplate(e,t){if(this.ensure(),elementHasBuiltCss(e))return;templateMap[t]=e;let i=applyShim$1.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&applyShim$1.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&updateNativeProperties(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=getIsExtends(e),i=templateMap[t];if((!i||!elementHasBuiltCss(i))&&i&&!templateIsValid(i)){templateIsValidating(i)||(this.prepareTemplate(i,t),startValidatingTemplate(i));let n=e.shadowRoot;if(n){let e=n.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=toCssText(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new ApplyShimInterface;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,n){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>getComputedStyleValue(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=applyShim$1,window.JSCompiler_renameProperty=function(e,t){return e};let workingURL,resolveDoc,CSS_URL_RX=/(url\()([^)]*)(\))/g,ABS_URL=/(^\/)|(^#)|(^[\w-\d]*:)/;function resolveUrl(e,t){if(e&&ABS_URL.test(e))return e;if(void 0===workingURL){workingURL=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",workingURL="http://a/c%20d"===e.href}catch(e){}}return t||(t=document.baseURI||window.location.href),workingURL?new URL(e,t).href:(resolveDoc||((resolveDoc=document.implementation.createHTMLDocument("temp")).base=resolveDoc.createElement("base"),resolveDoc.head.appendChild(resolveDoc.base),resolveDoc.anchor=resolveDoc.createElement("a"),resolveDoc.body.appendChild(resolveDoc.anchor)),resolveDoc.base.href=t,resolveDoc.anchor.href=e,resolveDoc.anchor.href||e)}function resolveCss(e,t){return e.replace(CSS_URL_RX,function(e,i,n,o){return i+"'"+resolveUrl(n.replace(/["']/g,""),t)+"'"+o})}function pathFromUrl(e){return e.substring(0,e.lastIndexOf("/")+1)}var resolveUrl$1={resolveUrl:resolveUrl,resolveCss:resolveCss,pathFromUrl:pathFromUrl};const useShadow=!window.ShadyDOM,useNativeCSSProperties=!(window.ShadyCSS&&!window.ShadyCSS.nativeCss),useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;let rootPath=pathFromUrl(document.baseURI||window.location.href);const setRootPath=function(e){rootPath=e};let sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;const setSanitizeDOMValue=function(e){sanitizeDOMValue=e};let passiveTouchGestures=!1;const setPassiveTouchGestures=function(e){passiveTouchGestures=e};let strictTemplatePolicy=!1;const setStrictTemplatePolicy=function(e){strictTemplatePolicy=e};let allowTemplateFromDomModule=!1;const setAllowTemplateFromDomModule=function(e){allowTemplateFromDomModule=e};let legacyOptimizations=!1;const setLegacyOptimizations=function(e){legacyOptimizations=e};let syncInitialRender=!1;const setSyncInitialRender=function(e){syncInitialRender=e};var settings={useShadow:useShadow,useNativeCSSProperties:useNativeCSSProperties,useNativeCustomElements:useNativeCustomElements,get rootPath(){return rootPath},setRootPath:setRootPath,get sanitizeDOMValue(){return sanitizeDOMValue},setSanitizeDOMValue:setSanitizeDOMValue,get passiveTouchGestures(){return passiveTouchGestures},setPassiveTouchGestures:setPassiveTouchGestures,get strictTemplatePolicy(){return strictTemplatePolicy},setStrictTemplatePolicy:setStrictTemplatePolicy,get allowTemplateFromDomModule(){return allowTemplateFromDomModule},setAllowTemplateFromDomModule:setAllowTemplateFromDomModule,get legacyOptimizations(){return legacyOptimizations},setLegacyOptimizations:setLegacyOptimizations,get syncInitialRender(){return syncInitialRender},setSyncInitialRender:setSyncInitialRender};let dedupeId=0;function MixinFunction(){}MixinFunction.prototype.__mixinApplications,MixinFunction.prototype.__mixinSet;const dedupingMixin=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=dedupeId++;return function(n){let o=n.__mixinSet;if(o&&o[i])return n;let r=t,a=r.get(n);a||(a=e(n),r.set(n,a));let s=Object.create(a.__mixinSet||o||null);return s[i]=!0,a.__mixinSet=s,a}};var mixin={dedupingMixin:dedupingMixin};let modules={},lcModules={};function setModule(e,t){modules[e]=lcModules[e.toLowerCase()]=t}function findModule(e){return modules[e]||lcModules[e.toLowerCase()]}function styleOutsideTemplateCheck(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class DomModule extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=findModule(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,n){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=resolveUrl(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=pathFromUrl(t)}return this.__assetpath}register(e){if(e=e||this.id){if(strictTemplatePolicy&&void 0!==findModule(e))throw setModule(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,setModule(e,this),styleOutsideTemplateCheck(this)}}}DomModule.prototype.modules=modules,customElements.define("dom-module",DomModule);var domModule={DomModule:DomModule};const MODULE_STYLE_LINK_SELECTOR="link[rel=import][type~=css]",INCLUDE_ATTR="include",SHADY_UNSCOPED_ATTR="shady-unscoped";function importModule(e){return DomModule.import(e)}function styleForImport(e){const t=resolveCss((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}let templateWithAssetPath;function stylesFromModules(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...stylesFromModule(t[e]));return i}function stylesFromModule(e){const t=importModule(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[..._stylesFromModuleImports(t)],i=t.querySelector("template");i&&e.push(...stylesFromTemplate(i,t.assetpath)),t._styles=e}return t._styles}function stylesFromTemplate(e,t){if(!e._styles){const i=[],n=e.content.querySelectorAll("style");for(let e=0;e<n.length;e++){let o=n[e],r=o.getAttribute(INCLUDE_ATTR);r&&i.push(...stylesFromModules(r).filter(function(e,t,i){return i.indexOf(e)===t})),t&&(o.textContent=resolveCss(o.textContent,t)),i.push(o)}e._styles=i}return e._styles}function stylesFromModuleImports(e){let t=importModule(e);return t?_stylesFromModuleImports(t):[]}function _stylesFromModuleImports(e){const t=[],i=e.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);for(let e,n=0;n<i.length;n++)if((e=i[n]).import){const i=e.import,n=e.hasAttribute(SHADY_UNSCOPED_ATTR);if(n&&!i._unscopedStyle){const e=styleForImport(i);e.setAttribute(SHADY_UNSCOPED_ATTR,""),i._unscopedStyle=e}else i._style||(i._style=styleForImport(i));t.push(n?i._unscopedStyle:i._style)}return t}function cssFromModules(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=cssFromModule(t[e]);return i}function cssFromModule(e){let t=importModule(e);if(t&&void 0===t._cssText){let e=_cssFromModuleImports(t),i=t.querySelector("template");i&&(e+=cssFromTemplate(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function cssFromTemplate(e,t){let i="";const n=stylesFromTemplate(e,t);for(let e,t=0;t<n.length;t++)(e=n[t]).parentNode&&e.parentNode.removeChild(e),i+=e.textContent;return i}function cssFromModuleImports(e){let t=importModule(e);return t?_cssFromModuleImports(t):""}function _cssFromModuleImports(e){let t="",i=_stylesFromModuleImports(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}var styleGather={stylesFromModules:stylesFromModules,stylesFromModule:stylesFromModule,stylesFromTemplate:stylesFromTemplate,stylesFromModuleImports:stylesFromModuleImports,cssFromModules:cssFromModules,cssFromModule:cssFromModule,cssFromTemplate:cssFromTemplate,cssFromModuleImports:cssFromModuleImports};const wrap$1=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:e=>e;var wrap$2={wrap:wrap$1};function isPath(e){return 0<=e.indexOf(".")}function root(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function isAncestor(e,t){return 0===e.indexOf(t+".")}function isDescendant(e,t){return 0===t.indexOf(e+".")}function translate(e,t,i){return t+i.slice(e.length)}function matches(e,t){return e===t||isAncestor(e,t)||isDescendant(e,t)}function normalize(e){if(Array.isArray(e)){let t=[];for(let i,n=0;n<e.length;n++){i=e[n].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function split(e){return Array.isArray(e)?normalize(e).split("."):e.toString().split(".")}function get(e,t,i){let n=e,o=split(t);for(let e=0;e<o.length;e++){if(!n)return;n=n[o[e]]}return i&&(i.path=o.join(".")),n}function set(e,t,i){let n=e,o=split(t),r=o[o.length-1];if(1<o.length){for(let e,t=0;t<o.length-1;t++)if(!(n=n[e=o[t]]))return;n[r]=i}else n[t]=i;return o.join(".")}const isDeep=isPath;var path={isPath:isPath,root:root,isAncestor:isAncestor,isDescendant:isDescendant,translate:translate,matches:matches,normalize:normalize,split:split,get:get,set:set,isDeep:isDeep};const caseMap={},DASH_TO_CAMEL=/-[a-z]/g,CAMEL_TO_DASH=/([A-Z])/g;function dashToCamelCase(e){return caseMap[e]||(caseMap[e]=0>e.indexOf("-")?e:e.replace(DASH_TO_CAMEL,e=>e[1].toUpperCase()))}function camelToDashCase(e){return caseMap[e]||(caseMap[e]=e.replace(CAMEL_TO_DASH,"-$1").toLowerCase())}var caseMap$1={dashToCamelCase:dashToCamelCase,camelToDashCase:camelToDashCase};let microtaskCurrHandle=0,microtaskLastHandle=0,microtaskCallbacks=[],microtaskNodeContent=0,microtaskNode=document.createTextNode("");function microtaskFlush(){const e=microtaskCallbacks.length;for(let t,i=0;i<e;i++)if(t=microtaskCallbacks[i])try{t()}catch(e){setTimeout(()=>{throw e})}microtaskCallbacks.splice(0,e),microtaskLastHandle+=e}new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:!0});const timeOut={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},animationFrame={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},idlePeriod={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},microTask={run:e=>(microtaskNode.textContent=microtaskNodeContent++,microtaskCallbacks.push(e),microtaskCurrHandle++),cancel(e){const t=e-microtaskLastHandle;if(0<=t){if(!microtaskCallbacks[t])throw new Error("invalid async handle: "+e);microtaskCallbacks[t]=null}}};var async={timeOut:timeOut,animationFrame:animationFrame,idlePeriod:idlePeriod,microTask:microTask};const microtask=microTask,PropertiesChanged=dedupingMixin(e=>{return class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let n=this.__data[e],o=this._shouldPropertyChange(e,t,n);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=n),this.__data[e]=t,this.__dataPending[e]=t),o}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,microtask.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i))}_shouldPropertiesChange(e,t,i){return!!t}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,n){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,n)}_attributeToProperty(e,t,i){if(!this.__serializing){const n=this.__dataAttributes,o=n&&n[e]||e;this[o]=this._deserializeValue(t,i||this.constructor.typeForProperty(o))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=3>arguments.length?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const n=this._serializeValue(t);void 0===n?e.removeAttribute(i):("class"!==i&&"name"!==i&&"slot"!==i||(e=wrap$1(e)),e.setAttribute(i,n))}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return+e;default:return e}}}});var propertiesChanged={PropertiesChanged:PropertiesChanged};const nativeProperties={};let proto=HTMLElement.prototype;for(;proto;){let e=Object.getOwnPropertyNames(proto);for(let t=0;t<e.length;t++)nativeProperties[e[t]]=!0;proto=Object.getPrototypeOf(proto)}function saveAccessorValue(e,t){if(!nativeProperties[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}const PropertyAccessors=dedupingMixin(e=>{const t=PropertiesChanged(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(dashToCamelCase(e[t]))}static attributeNameForProperty(e){return camelToDashCase(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?e+"":+e,i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){saveAccessorValue(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}});var propertyAccessors={PropertyAccessors:PropertyAccessors};const walker=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),templateExtensions={"dom-if":!0,"dom-repeat":!0};function wrapTemplateExtension(e){let t=e.getAttribute("is");if(t&&templateExtensions[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function findTemplateNode(e,t){let i=t.parentInfo&&findTemplateNode(e,t.parentInfo);if(!i)return e;walker.currentNode=i;for(let e=walker.firstChild(),i=0;e;e=walker.nextSibling())if(t.parentIndex===i++)return e}function applyIdToMap(e,t,i,n){n.id&&(t[n.id]=i)}function applyEventListener(e,t,i){if(i.events&&i.events.length)for(let n,o=0,r=i.events;o<r.length&&(n=r[o]);o++)e._addMethodEventListenerToNode(t,n.name,n.value,e)}function applyTemplateContent(e,t,i){i.templateInfo&&(t._templateInfo=i.templateInfo)}function createNodeEventHandler(e,t,i){e=e._methodHost||e;return function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}const TemplateStamp=dedupingMixin(e=>{return class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let n,o=e;return"template"!=o.localName||o.hasAttribute("preserve-content")?"slot"===o.localName&&(t.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(o,t,i)||n,walker.currentNode=o,walker.firstChild()&&(n=this._parseTemplateChildNodes(o,t,i)||n),o.hasAttributes&&o.hasAttributes()&&(n=this._parseTemplateNodeAttributes(o,t,i)||n),n}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName){walker.currentNode=e;for(let n,o=walker.firstChild(),r=0;o;o=n){if("template"==o.localName&&(o=wrapTemplateExtension(o)),walker.currentNode=o,n=walker.nextSibling(),o.nodeType===Node.TEXT_NODE){let i=n;for(;i&&i.nodeType===Node.TEXT_NODE;)o.textContent+=i.textContent,n=walker.nextSibling(),e.removeChild(i),i=n;if(t.stripWhiteSpace&&!o.textContent.trim()){e.removeChild(o);continue}}let a={parentIndex:r,parentInfo:i};this._parseTemplateNode(o,t,a)&&(a.infoIndex=t.nodeInfoList.push(a)-1),walker.currentNode=o,walker.parentNode()&&r++}}}static _parseTemplateNestedTemplate(e,t,i){let n=this._parseTemplate(e,t);return(n.content=e.content.ownerDocument.createDocumentFragment()).appendChild(e.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,i){let n=!1,o=Array.from(e.attributes);for(let r,a=o.length-1;r=o[a];a--)n=this._parseTemplateNodeAttribute(e,t,i,r.name,r.value)||n;return n}static _parseTemplateNodeAttribute(e,t,i,n,o){return"on-"===n.slice(0,3)?(e.removeAttribute(n),i.events=i.events||[],i.events.push({name:n.slice(3),value:o}),!0):"id"===n&&(i.id=o,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),i=t.nodeInfoList,n=t.content||e.content,o=document.importNode(n,!0);o.__noInsertionPoint=!t.hasInsertionPoint;let r=o.nodeList=Array(i.length);o.$={};for(let e,t,n=0,a=i.length;n<a&&(e=i[n]);n++)t=r[n]=findTemplateNode(o,e),applyIdToMap(this,o.$,t,e),applyTemplateContent(this,t,e),applyEventListener(this,t,e);return o=o}_addMethodEventListenerToNode(e,t,i,n){let o=createNodeEventHandler(n=n||e,t,i);return this._addEventListenerToNode(e,t,o),o}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}});var templateStamp={TemplateStamp:TemplateStamp};let dedupeId$1=0;const TYPES={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},capitalAttributeRegex=/[A-Z]/;let DataTrigger,DataEffect;function ensureOwnEffectMap(e,t){let i=e[t];if(i){if(!e.hasOwnProperty(t)){i=e[t]=Object.create(e[t]);for(let e in i){let t=i[e],n=i[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}}}else i=e[t]={};return i}function runEffects(e,t,i,n,o,r){if(t){let a=!1,s=dedupeId$1++;for(let l in i)runEffectsForProperty(e,t,s,l,i,n,o,r)&&(a=!0);return a}return!1}function runEffectsForProperty(e,t,i,n,o,r,a,s){let l=!1,c=t[a?root(n):n];if(c)for(let t,p=0,h=c.length;p<h&&(t=c[p]);p++)t.info&&t.info.lastRun===i||a&&!pathMatchesTrigger(n,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,n,o,r,t.info,a,s),l=!0);return l}function pathMatchesTrigger(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!isAncestor(i,e))||!(!t.wildcard||!isDescendant(i,e))}return!0}function runObserverEffect(e,t,i,n,o){let r="string"==typeof o.method?e[o.method]:o.method,a=o.property;r?r.call(e,e.__data[a],n[a]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function runNotifyEffects(e,t,i,n,o){let r,a,s=e[TYPES.NOTIFY],l=dedupeId$1++;for(let a in t)t[a]&&(s&&runEffectsForProperty(e,s,l,a,i,n,o)?r=!0:o&&notifyPath(e,a,i)&&(r=!0));r&&(a=e.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}function notifyPath(e,t,i){let n=root(t);if(n!==t){return dispatchNotifyEvent(e,camelToDashCase(n)+"-changed",i[t],t),!0}return!1}function dispatchNotifyEvent(e,t,i,n){let o={value:i,queueProperty:!0};n&&(o.path=n),wrap$1(e).dispatchEvent(new CustomEvent(t,{detail:o}))}function runNotifyEffect(e,t,i,n,o,r){let a=(r?root(t):t)!=t?t:null,s=a?get(e,a):e.__data[t];a&&void 0===s&&(s=i[t]),dispatchNotifyEvent(e,o.eventName,s,a)}function handleNotification(e,t,i,n,o){let r,a=e.detail,s=a&&a.path;s?(n=translate(i,n,s),r=a&&a.value):r=e.currentTarget[i],r=o?!r:r,t[TYPES.READ_ONLY]&&t[TYPES.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,r,!0,!!s)||a&&a.queueProperty||t._invalidateProperties()}function runReflectEffect(e,t,i,n,o){let r=e.__data[t];sanitizeDOMValue&&(r=sanitizeDOMValue(r,o.attrName,"attribute",e)),e._propertyToAttribute(t,o.attrName,r)}function runComputedEffects(e,t,i,n){let o=e[TYPES.COMPUTE];if(o){let r=t;for(;runEffects(e,o,r,i,n);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}function runComputedEffect(e,t,i,n,o){let r=runMethodEffect(e,t,i,n,o),a=o.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[a]?e._setPendingProperty(a,r,!0):e[a]=r}function computeLinkedPaths(e,t,i){let n=e.__dataLinkedPaths;if(n){let o;for(let r in n){let a=n[r];isDescendant(r,t)?(o=translate(r,a,t),e._setPendingPropertyOrPath(o,i,!0,!0)):isDescendant(a,t)&&(o=translate(a,r,t),e._setPendingPropertyOrPath(o,i,!0,!0))}}}function addBinding(e,t,i,n,o,r,a){i.bindings=i.bindings||[];let s={kind:n,target:o,parts:r,literal:a,isCompound:1!==r.length};if(i.bindings.push(s),shouldAddListener(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||camelToDashCase(o)+"-changed",s.listenerNegate=t}let l=t.nodeInfoList.length;for(let i,n=0;n<s.parts.length;n++)(i=s.parts[n]).compoundIndex=n,addEffectForBindingPart(e,t,s,i,l)}function addEffectForBindingPart(e,t,i,n,o){if(!n.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,a={index:o,binding:i,part:n,evaluator:e};for(let i,n=0;n<r.length;n++)"string"==typeof(i=r[n])&&((i=parseArg(i)).wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:runBindingEffect,info:a,trigger:i})}}function runBindingEffect(e,t,i,n,o,r,a){let s=a[o.index],l=o.binding,c=o.part;if(r&&c.source&&t.length>c.source.length&&"property"==l.kind&&!l.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[l.target]){let n=i[t];t=translate(c.source,l.target,t),s._setPendingPropertyOrPath(t,n,!1,!0)&&e._enqueueClient(s)}else{applyBindingValue(e,s,l,c,o.evaluator._evaluateBinding(e,c,t,i,n,r))}}function applyBindingValue(e,t,i,n,o){if(o=computeBindingValue(t,o,i,n),sanitizeDOMValue&&(o=sanitizeDOMValue(o,i.target,i.kind,t)),"attribute"==i.kind)e._valueToNodeAttribute(t,o,i.target);else{let n=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?t[TYPES.READ_ONLY]&&t[TYPES.READ_ONLY][n]||t._setPendingProperty(n,o)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,n,o)}}function computeBindingValue(e,t,i,n){if(i.isCompound){let o=e.__dataCompoundStorage[i.target];o[n.compoundIndex]=t,t=o.join("")}return"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=void 0==t?"":t)),t}function shouldAddListener(e){return!!e.target&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}function setupBindings(e,t){let{nodeList:i,nodeInfoList:n}=t;if(n.length)for(let t=0;t<n.length;t++){let o=n[t],r=i[t],a=o.bindings;if(a)for(let t,i=0;i<a.length;i++)setupCompoundStorage(r,t=a[i]),addNotifyListener(r,e,t);r.__dataHost=e}}function setupCompoundStorage(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,o=Array(n.length);for(let e=0;e<n.length;e++)o[e]=n[e].literal;let r=t.target;i[r]=o,t.literal&&"property"==t.kind&&(e[r]=t.literal)}}function addNotifyListener(e,t,i){if(i.listenerEvent){let n=i.parts[0];e.addEventListener(i.listenerEvent,function(e){handleNotification(e,t,i.target,n.source,n.negate)})}}function createMethodEffect(e,t,i,n,o,r){r=t.static||r&&("object"!=typeof r||r[t.methodName]);let a={methodName:t.methodName,args:t.args,methodInfo:o,dynamicFn:r};for(let o,r=0;r<t.args.length&&(o=t.args[r]);r++)o.literal||e._addPropertyEffect(o.rootProperty,i,{fn:n,info:a,trigger:o});r&&e._addPropertyEffect(t.methodName,i,{fn:n,info:a})}function runMethodEffect(e,t,i,n,o){let r=e._methodHost||e,a=r[o.methodName];if(a){let n=e._marshalArgs(o.args,t,i);return a.apply(r,n)}o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const emptyArray=[],IDENT="(?:[a-zA-Z_$][\\w.:$\\-*]*)",NUMBER="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",SQUOTE_STRING="(?:'(?:[^'\\\\]|\\\\.)*')",DQUOTE_STRING='(?:"(?:[^"\\\\]|\\\\.)*")',STRING="(?:"+SQUOTE_STRING+"|"+DQUOTE_STRING+")",ARGUMENT="(?:("+IDENT+"|"+NUMBER+"|"+STRING+")\\s*)",ARGUMENTS="(?:"+ARGUMENT+"(?:,\\s*"+ARGUMENT+")*)",ARGUMENT_LIST="(?:\\(\\s*(?:"+ARGUMENTS+"?)\\)\\s*)",BINDING="("+IDENT+"\\s*"+ARGUMENT_LIST+"?)",OPEN_BRACKET="(\\[\\[|{{)\\s*",CLOSE_BRACKET="(?:]]|}})",NEGATE="(?:(!)\\s*)?",EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+"(?:]]|}})",bindingRegex=new RegExp(EXPRESSION,"g");function literalFromParts(e){let t="";for(let i,n=0;n<e.length;n++)t+=(i=e[n].literal)||"";return t}function parseMethod(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:emptyArray};if(t[2].trim()){return parseArgs(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function parseArgs(e,t){return t.args=e.map(function(e){let i=parseArg(e);return i.literal||(t.static=!1),i},this),t}function parseArg(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},n=t[0];switch("-"===n&&(n=t[1]),"0"<=n&&"9">=n&&(n="#"),n){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=+t,i.literal=!0}return i.literal||(i.rootProperty=root(t),i.structured=isPath(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function getArgValue(e,t,i){let n=get(e,i);return void 0===n&&(n=t[i]),n}function notifySplices(e,t,i,n){e.notifyPath(i+".splices",{indexSplices:n}),e.notifyPath(i+".length",t.length)}function notifySplice(e,t,i,n,o,r){notifySplices(e,t,i,[{index:n,addedCount:o,removed:r,object:t,type:"splice"}])}function upper(e){return e[0].toUpperCase()+e.substring(1)}const PropertyEffects=dedupingMixin(e=>{const t=TemplateStamp(PropertyAccessors(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return TYPES}_initializeProperties(){super._initializeProperties(),hostStack.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[TYPES.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==TYPES.READ_ONLY);let n=ensureOwnEffectMap(this,t)[e];n||(n=this[t][e]=[]),n.push(i)}_removePropertyEffect(e,t,i){let n=ensureOwnEffectMap(this,t)[e],o=n.indexOf(i);0<=o&&n.splice(o,1)}_hasPropertyEffect(e,t){let i=this[t];return!(!i||!i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,TYPES.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,TYPES.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,TYPES.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,TYPES.COMPUTE)}_setPendingPropertyOrPath(e,t,i,n){if(n||root(Array.isArray(e)?e[0]:e)!==e){if(!n){let i=get(this,e);if(!(e=set(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return computeLinkedPaths(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||(e[t]=i)}_setPendingProperty(e,t,i){let n=this.__dataHasPaths&&isPath(e),o=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,o[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(n||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t,i=0;i<e.length;i++)(t=e[i]).__dataEnabled?t.__dataPending&&t._flushProperties():t._enableProperties()}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[TYPES.READ_ONLY]&&this[TYPES.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let n=this.__dataHasPaths;this.__dataHasPaths=!1,runComputedEffects(this,t,i,n);let o=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,i,n),this._flushClients(),runEffects(this,this[TYPES.REFLECT],t,i,n),runEffects(this,this[TYPES.OBSERVE],t,i,n),o&&runNotifyEffects(this,o,t,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[TYPES.PROPAGATE]&&runEffects(this,this[TYPES.PROPAGATE],e,t,i);let n=this.__templateInfo;for(;n;)runEffects(this,n.propertyEffects,e,t,i,n.nodeList),n=n.nextTemplateInfo}linkPaths(e,t){e=normalize(e),t=normalize(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=normalize(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};notifySplices(this,get(this,e,i),i.path,t)}get(e,t){return get(t||this,e)}set(e,t,i){i?set(i,e,t):this[TYPES.READ_ONLY]&&this[TYPES.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},n=get(this,e,i),o=n.length,r=n.push(...t);return t.length&&notifySplice(this,n,i.path,o,t.length,[]),r}pop(e){let t={path:""},i=get(this,e,t),n=!!i.length,o=i.pop();return n&&notifySplice(this,i,t.path,i.length,0,[o]),o}splice(e,t,i,...n){let o,r={path:""},a=get(this,e,r);return 0>t?t=a.length-Math.floor(-t):t&&(t=Math.floor(t)),o=2===arguments.length?a.splice(t):a.splice(t,i,...n),(n.length||o.length)&&notifySplice(this,a,r.path,t,n.length,o),o}shift(e){let t={path:""},i=get(this,e,t),n=!!i.length,o=i.shift();return n&&notifySplice(this,i,t.path,0,0,[o]),o}unshift(e,...t){let i={path:""},n=get(this,e,i),o=n.unshift(...t);return t.length&&notifySplice(this,n,i.path,0,t.length,[]),o}notifyPath(e,t){let i;if(1==arguments.length){let n={path:""};t=get(this,e,n),i=n.path}else i=Array.isArray(e)?normalize(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,TYPES.READ_ONLY),t&&(this["_set"+upper(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let n={property:e,method:t,dynamicFn:!!i};this._addPropertyEffect(e,TYPES.OBSERVE,{fn:runObserverEffect,info:n,trigger:{name:e}}),i&&this._addPropertyEffect(t,TYPES.OBSERVE,{fn:runObserverEffect,info:n,trigger:{name:t}})}_createMethodObserver(e,t){let i=parseMethod(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");createMethodEffect(this,i,TYPES.OBSERVE,runMethodEffect,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:camelToDashCase(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:t}})}_createComputedProperty(e,t,i){let n=parseMethod(t);if(!n)throw new Error("Malformed computed expression '"+t+"'");createMethodEffect(this,n,TYPES.COMPUTE,runComputedEffect,e,i)}_marshalArgs(e,t,i){const n=this.__data,o=[];for(let r=0,a=e.length;r<a;r++){let{name:a,structured:s,wildcard:l,value:c,literal:p}=e[r];if(!p)if(l){const e=isDescendant(a,t),o=getArgValue(n,i,e?t:a);c={path:e?t:a,value:o,base:e?get(n,a):o}}else c=s?getArgValue(n,i,a):n[a];o[r]=c}return o}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),n=this.__templateInfo==i;if(!n)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t&&((i=Object.create(i)).wasPreBound=n,!n&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=i,i.previousTemplateInfo=e,i}return this.__templateInfo=i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let n=e.propertyEffects=e.propertyEffects||{};(n[t]=n[t]||[]).push(i)}_stampTemplate(e){hostStack.beginHosting(this);let t=super._stampTemplate(e);hostStack.endHosting(this);let i=this._bindTemplate(e,!0);if(i.nodeList=t.nodeList,!i.wasPreBound){let e=i.childNodes=[];for(let i=t.firstChild;i;i=i.nextSibling)e.push(i)}return t.templateInfo=i,setupBindings(this,i),this.__dataReady&&runEffects(this,i.propertyEffects,this.__data,null,!1,i.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let i=t.childNodes;for(let e,t=0;t<i.length;t++)(e=i[t]).parentNode.removeChild(e)}static _parseTemplateNode(e,t,i){let n=super._parseTemplateNode(e,t,i);if(e.nodeType===Node.TEXT_NODE){let o=this._parseBindings(e.textContent,t);o&&(e.textContent=literalFromParts(o)||" ",addBinding(this,t,i,"text","textContent",o),n=!0)}return n}static _parseTemplateNodeAttribute(e,t,i,n,o){let r=this._parseBindings(o,t);if(r){let o=n,a="property";capitalAttributeRegex.test(n)?a="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),a="attribute");let s=literalFromParts(r);return s&&"attribute"==a&&("class"==n&&e.hasAttribute("class")&&(s+=" "+e.getAttribute(n)),e.setAttribute(n,s)),"input"===e.localName&&"value"===o&&e.setAttribute(o,""),e.removeAttribute(o),"property"===a&&(n=dashToCamelCase(n)),addBinding(this,t,i,a,n,r,s),!0}return super._parseTemplateNodeAttribute(e,t,i,n,o)}static _parseTemplateNestedTemplate(e,t,i){let n=super._parseTemplateNestedTemplate(e,t,i),o=i.templateInfo.hostProps;for(let e in o)addBinding(this,t,i,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}]);return n}static _parseBindings(e,t){let i,n=[],o=0;for(;null!==(i=bindingRegex.exec(e));){i.index>o&&n.push({literal:e.slice(o,i.index)});let r=i[1][0],a=!!i[2],s=i[3].trim(),l=!1,c="",p=-1;"{"==r&&0<(p=s.indexOf("::"))&&(c=s.substring(p+2),s=s.substring(0,p),l=!0);let h=parseMethod(s),d=[];if(h){let{args:e,methodName:i}=h;for(let t,i=0;i<e.length;i++)(t=e[i]).literal||d.push(t);let n=t.dynamicFns;(n&&n[i]||h.static)&&(d.push(i),h.dynamicFn=!0)}else d.push(s);n.push({source:s,mode:r,negate:a,customEvent:l,signature:h,dependencies:d,event:c}),o=bindingRegex.lastIndex}if(o&&o<e.length){let t=e.substring(o);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,i,n,o,r){let a;return a=t.signature?runMethodEffect(e,i,n,o,t.signature):i!=t.source?get(e,t.source):r&&isPath(i)?get(e,i):e.__data[i],t.negate&&(a=!a),a}}});class HostStack{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}}const hostStack=new HostStack;var propertyEffects={PropertyEffects:PropertyEffects};let instanceCount=0;function incrementInstanceCount(){instanceCount++}const registrations=[];function _regLog(e){console.log("["+e.is+"]: registered")}function register(e){registrations.push(e)}function dumpRegistrations(){registrations.forEach(_regLog)}var telemetry={get instanceCount(){return instanceCount},incrementInstanceCount:incrementInstanceCount,registrations:registrations,register:register,dumpRegistrations:dumpRegistrations};function normalizeProperties(e){const t={};for(let i in e){const n=e[i];t[i]="function"==typeof n?{type:n}:n}return t}const PropertiesMixin=dedupingMixin(e=>{const t=PropertiesChanged(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof o?t:null}function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=normalizeProperties(i))}e.__ownProperties=t}return e.__ownProperties}class o extends t{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){register(this.prototype);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=n(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,n(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){incrementInstanceCount(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o});var propertiesMixin={PropertiesMixin:PropertiesMixin};const bundledImportMeta={...import.meta,url:new URL("../../node_modules/%40polymer/polymer/lib/mixins/element-mixin.js",import.meta.url).href},version="3.2.0",builtCSS=window.ShadyCSS&&window.ShadyCSS.cssBuild,ElementMixin=dedupingMixin(e=>{const t=PropertiesMixin(PropertyEffects(e));return class extends t{static get polymerElementVersion(){return version}static _finalizeClass(){super._finalizeClass();const e=((t=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",t))||(t.__ownObservers=t.hasOwnProperty(JSCompiler_renameProperty("observers",t))?t.observers:null),t.__ownObservers);var t;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):legacyOptimizations||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let r in e)t=this.prototype,i=r,n=e[r],o=e,n.computed&&(n.readOnly=!0),n.computed&&(t._hasReadOnlyEffect(i)?console.warn(`Cannot redefine computed property '${i}'.`):t._createComputedProperty(i,n.computed,o)),n.readOnly&&!t._hasReadOnlyEffect(i)?t._createReadOnlyProperty(i,!n.computed):!1===n.readOnly&&t._hasReadOnlyEffect(i)&&console.warn(`Cannot make readOnly property '${i}' non-readOnly.`),n.reflectToAttribute&&!t._hasReflectEffect(i)?t._createReflectedProperty(i):!1===n.reflectToAttribute&&t._hasReflectEffect(i)&&console.warn(`Cannot make reflected property '${i}' non-reflected.`),n.notify&&!t._hasNotifyEffect(i)?t._createNotifyingProperty(i):!1===n.notify&&t._hasNotifyEffect(i)&&console.warn(`Cannot make notify property '${i}' non-notify.`),n.observer&&t._createPropertyObserver(i,n.observer,o[n.observer]),t._addPropertyToAttributeMap(i);var t,i,n,o}static createObservers(e,t){const i=this.prototype;for(let n=0;n<e.length;n++)i._createMethodObserver(e[n],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;if(e&&(!strictTemplatePolicy||allowTemplateFromDomModule)&&(t=DomModule.import(e,"template"),strictTemplatePolicy&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=pathFromUrl(e.url);else{const e=DomModule.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=rootPath,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let n=t[i];"value"in n&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=n)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return resolveCss(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;!function(e,t,i,n){if(!builtCSS){const o=t.content.querySelectorAll("style"),r=stylesFromTemplate(t),a=stylesFromModuleImports(i),s=t.content.firstElementChild;for(let i,o=0;o<a.length;o++)(i=a[o]).textContent=e._processStyleText(i.textContent,n),t.content.insertBefore(i,s);let l=0;for(let t=0;t<r.length;t++){let i=r[t],a=o[l];a!==i?(i=i.cloneNode(!0),a.parentNode.insertBefore(i,a)):l++,i.textContent=e._processStyleText(i.textContent,n)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i)}(this,t,e,i?resolveUrl(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=wrap$1(this);if(t.attachShadow)return e?(t.shadowRoot||t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(e),syncInitialRender&&window.ShadyDOM&&ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=resolveUrl(this.importPath)),resolveUrl(e,t)}static _parseTemplateContent(e,t,i){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,i)}static _addTemplatePropertyEffect(e,t,i){return!legacyOptimizations||t in this._properties||console.warn(`Property '${t}' used in template but not declared in 'properties'; `+"attribute will not be observed."),super._addTemplatePropertyEffect(e,t,i)}}}),updateStyles=function(e){window.ShadyCSS&&window.ShadyCSS.styleDocument(e)};var elementMixin={version:version,ElementMixin:ElementMixin,updateStyles:updateStyles};class Debouncer{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,debouncerQueue.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),debouncerQueue.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof Debouncer?e._cancelAsync():e=new Debouncer,e.setConfig(t,i),e}}let debouncerQueue=new Set;const enqueueDebouncer=function(e){debouncerQueue.add(e)},flushDebouncers=function(){const e=!!debouncerQueue.size;return debouncerQueue.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};var debounce={Debouncer:Debouncer,enqueueDebouncer:enqueueDebouncer,flushDebouncers:flushDebouncers};let HAS_NATIVE_TA="string"==typeof document.head.style.touchAction,GESTURE_KEY="__polymerGestures",HANDLED_OBJ="__polymerGesturesHandled",TOUCH_ACTION="__polymerGesturesTouchAction",TAP_DISTANCE=25,TRACK_DISTANCE=5,TRACK_LENGTH=2,MOUSE_TIMEOUT=2500,MOUSE_EVENTS=["mousedown","mousemove","mouseup","click"],MOUSE_WHICH_TO_BUTTONS=[0,1,4,2],MOUSE_HAS_BUTTONS=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function isMouseEvent(e){return-1<MOUSE_EVENTS.indexOf(e)}let SUPPORTS_PASSIVE=!1;function PASSIVE_TOUCH(e){if(!isMouseEvent(e)&&"touchend"!==e)return HAS_NATIVE_TA&&SUPPORTS_PASSIVE&&passiveTouchGestures?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){SUPPORTS_PASSIVE=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const clickedLabels=[],labellable={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},canBeDisabled={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function canBeLabelled(e){return labellable[e.localName]||!1}function matchingLabels(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let n=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<n.length;e++)t.push(n[e])}}return t}let mouseCanceller=function(e){let t=e.sourceCapabilities;if((!t||t.firesTouchEvents)&&(e[HANDLED_OBJ]={skip:!0},"click"===e.type)){let t=!1,i=getComposedPath(e);for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)clickedLabels.push(i[e]);else if(canBeLabelled(i[e])){let n=matchingLabels(i[e]);for(let e=0;e<n.length;e++)t=t||-1<clickedLabels.indexOf(n[e])}if(i[e]===POINTERSTATE.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function setupTeardownMouseCanceller(e){let t=IS_TOUCH_ONLY?["click"]:MOUSE_EVENTS;for(let i,n=0;n<t.length;n++)i=t[n],e?(clickedLabels.length=0,document.addEventListener(i,mouseCanceller,!0)):document.removeEventListener(i,mouseCanceller,!0)}function ignoreMouse(e){POINTERSTATE.mouse.mouseIgnoreJob||setupTeardownMouseCanceller(!0);POINTERSTATE.mouse.target=getComposedPath(e)[0],POINTERSTATE.mouse.mouseIgnoreJob=Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob,timeOut.after(MOUSE_TIMEOUT),function(){setupTeardownMouseCanceller(),POINTERSTATE.mouse.target=null,POINTERSTATE.mouse.mouseIgnoreJob=null})}function hasLeftMouseButton(e){let t=e.type;if(!isMouseEvent(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!MOUSE_HAS_BUTTONS&&(t=MOUSE_WHICH_TO_BUTTONS[e.which]||0),!!(1&t)}return 0===(void 0===e.button?0:e.button)}function isSyntheticClick(e){if("click"===e.type){if(0===e.detail)return!0;let t=_findOriginalTarget(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),n=e.pageX,o=e.pageY;return!(n>=i.left&&n<=i.right&&o>=i.top&&o<=i.bottom)}return!1}let POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function firstTouchAction(e){let t="auto",i=getComposedPath(e);for(let e,n=0;n<i.length;n++)if((e=i[n])[TOUCH_ACTION]){t=e[TOUCH_ACTION];break}return t}function trackDocument(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function untrackDocument(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",ignoreMouse,!!SUPPORTS_PASSIVE&&{passive:!0});const getComposedPath=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],gestures={},recognizers=[];function deepTargetFind(e,t){let i=document.elementFromPoint(e,t),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){if(n===(n=n.shadowRoot.elementFromPoint(e,t)))break;n&&(i=n)}return i}function _findOriginalTarget(e){const t=getComposedPath(e);return 0<t.length?t[0]:e.target}function _handleNative(e){let t,i=e.type,n=e.currentTarget[GESTURE_KEY];if(!n)return;let o=n[i];if(o){if(!e[HANDLED_OBJ]&&(e[HANDLED_OBJ]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(POINTERSTATE.touch.id=t.identifier),POINTERSTATE.touch.id!==t.identifier)return;HAS_NATIVE_TA||"touchstart"!==i&&"touchmove"!==i||_handleTouchAction(e)}if(!(t=e[HANDLED_OBJ]).skip){for(let i,n=0;n<recognizers.length;n++)o[(i=recognizers[n]).name]&&!t[i.name]&&i.flow&&-1<i.flow.start.indexOf(e.type)&&i.reset&&i.reset();for(let n,r=0;r<recognizers.length;r++)o[(n=recognizers[r]).name]&&!t[n.name]&&(t[n.name]=!0,n[i](e))}}}function _handleTouchAction(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)POINTERSTATE.touch.x=t.clientX,POINTERSTATE.touch.y=t.clientY,POINTERSTATE.touch.scrollDecided=!1;else if("touchmove"===i){if(POINTERSTATE.touch.scrollDecided)return;POINTERSTATE.touch.scrollDecided=!0;let i=firstTouchAction(e),n=!1,o=Math.abs(POINTERSTATE.touch.x-t.clientX),r=Math.abs(POINTERSTATE.touch.y-t.clientY);e.cancelable&&("none"===i?n=!0:"pan-x"===i?n=r>o:"pan-y"===i&&(n=o>r)),n?e.preventDefault():prevent("track")}}function addListener(e,t,i){return!!gestures[t]&&(_add(e,t,i),!0)}function removeListener(e,t,i){return!!gestures[t]&&(_remove(e,t,i),!0)}function _add(e,t,i){let n=gestures[t],o=n.deps,r=n.name,a=e[GESTURE_KEY];a||(e[GESTURE_KEY]=a={});for(let t,i,n=0;n<o.length;n++)t=o[n],IS_TOUCH_ONLY&&isMouseEvent(t)&&"click"!==t||((i=a[t])||(a[t]=i={_count:0}),0===i._count&&e.addEventListener(t,_handleNative,PASSIVE_TOUCH(t)),i[r]=(i[r]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),n.touchAction&&setTouchAction(e,n.touchAction)}function _remove(e,t,i){let n=gestures[t],o=n.deps,r=n.name,a=e[GESTURE_KEY];if(a)for(let t,i,n=0;n<o.length;n++)(i=a[t=o[n]])&&i[r]&&(i[r]=(i[r]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,_handleNative,PASSIVE_TOUCH(t)));e.removeEventListener(t,i)}function register$1(e){recognizers.push(e);for(let t=0;t<e.emits.length;t++)gestures[e.emits[t]]=e}function _findRecognizerByEvent(e){for(let t,i=0;i<recognizers.length;i++){t=recognizers[i];for(let i,n=0;n<t.emits.length;n++)if((i=t.emits[n])===e)return t}return null}function setTouchAction(e,t){HAS_NATIVE_TA&&e instanceof HTMLElement&&microTask.run(()=>{e.style.touchAction=t}),e[TOUCH_ACTION]=t}function _fire(e,t,i){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,wrap$1(e).dispatchEvent(n),n.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function prevent(e){let t=_findRecognizerByEvent(e);t.info&&(t.info.prevent=!0)}function resetMouseCanceller(){POINTERSTATE.mouse.mouseIgnoreJob&&POINTERSTATE.mouse.mouseIgnoreJob.flush()}function downupFire(e,t,i,n){t&&_fire(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(e){return prevent(e)}})}function trackHasMovedEnough(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),o=Math.abs(e.y-i);return n>=TRACK_DISTANCE||o>=TRACK_DISTANCE}function trackFire(e,t,i){if(!t)return;let n,o=e.moves[e.moves.length-2],r=e.moves[e.moves.length-1],a=r.x-e.x,s=r.y-e.y,l=0;o&&(n=r.x-o.x,l=r.y-o.y),_fire(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:a,dy:s,ddx:n,ddy:l,sourceEvent:i,hover:function(){return deepTargetFind(i.clientX,i.clientY)}})}function trackForward(e,t,i){let n=Math.abs(t.clientX-e.x),o=Math.abs(t.clientY-e.y),r=_findOriginalTarget(i||t);!r||canBeDisabled[r.localName]&&r.hasAttribute("disabled")||(isNaN(n)||isNaN(o)||n<=TAP_DISTANCE&&o<=TAP_DISTANCE||isSyntheticClick(t))&&(e.prevent||_fire(r,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}register$1({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){untrackDocument(this.info)},mousedown:function(e){if(!hasLeftMouseButton(e))return;let t=_findOriginalTarget(e),i=this;trackDocument(this.info,function(e){hasLeftMouseButton(e)||(downupFire("up",t,e),untrackDocument(i.info))},function(e){hasLeftMouseButton(e)&&downupFire("up",t,e),untrackDocument(i.info)}),downupFire("down",t,e)},touchstart:function(e){downupFire("down",_findOriginalTarget(e),e.changedTouches[0],e)},touchend:function(e){downupFire("up",_findOriginalTarget(e),e.changedTouches[0],e)}}),register$1({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>TRACK_LENGTH&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,untrackDocument(this.info)},mousedown:function(e){if(!hasLeftMouseButton(e))return;let t=_findOriginalTarget(e),i=this,n=function(e){let n=e.clientX,o=e.clientY;trackHasMovedEnough(i.info,n,o)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&prevent("tap"),i.info.addMove({x:n,y:o}),hasLeftMouseButton(e)||(i.info.state="end",untrackDocument(i.info)),t&&trackFire(i.info,t,e),i.info.started=!0)};trackDocument(this.info,n,function(e){i.info.started&&n(e),untrackDocument(i.info)}),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=_findOriginalTarget(e),i=e.changedTouches[0],n=i.clientX,o=i.clientY;trackHasMovedEnough(this.info,n,o)&&("start"===this.info.state&&prevent("tap"),this.info.addMove({x:n,y:o}),trackFire(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=_findOriginalTarget(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),trackFire(this.info,t,i))}}),register$1({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){hasLeftMouseButton(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){hasLeftMouseButton(e)&&trackForward(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){trackForward(this.info,e.changedTouches[0],e)}});const findOriginalTarget=_findOriginalTarget,add=addListener,remove=removeListener;var gestures$1={gestures:gestures,recognizers:recognizers,deepTargetFind:deepTargetFind,addListener:addListener,removeListener:removeListener,register:register$1,setTouchAction:setTouchAction,prevent:prevent,resetMouseCanceller:resetMouseCanceller,findOriginalTarget:findOriginalTarget,add:add,remove:remove};const GestureEventListeners=dedupingMixin(e=>{return class extends e{_addEventListenerToNode(e,t,i){addListener(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){removeListener(e,t,i)||super._removeEventListenerFromNode(e,t,i)}}});var gestureEventListeners={GestureEventListeners:GestureEventListeners};const HOST_DIR=/:host\(:dir\((ltr|rtl)\)\)/g,HOST_DIR_REPLACMENT=':host([dir="$1"])',EL_DIR=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,EL_DIR_REPLACMENT=':host([dir="$2"]) $1',DIR_CHECK=/:dir\((?:ltr|rtl)\)/,SHIM_SHADOW=!(!window.ShadyDOM||!window.ShadyDOM.inUse),DIR_INSTANCES=[];let observer=null,DOCUMENT_DIR="";function getRTL(){DOCUMENT_DIR=document.documentElement.getAttribute("dir")}function setRTL(e){if(!e.__autoDirOptOut){e.setAttribute("dir",DOCUMENT_DIR)}}function updateDirection(){getRTL(),DOCUMENT_DIR=document.documentElement.getAttribute("dir");for(let e=0;e<DIR_INSTANCES.length;e++)setRTL(DIR_INSTANCES[e])}function takeRecords(){observer&&observer.takeRecords().length&&updateDirection()}const DirMixin=dedupingMixin(e=>{SHIM_SHADOW||observer||(getRTL(),(observer=new MutationObserver(updateDirection)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=PropertyAccessors(e);class i extends t{static _processStyleText(e,t){return e=super._processStyleText(e,t),!SHIM_SHADOW&&DIR_CHECK.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=(t=t.replace(HOST_DIR,HOST_DIR_REPLACMENT)).replace(EL_DIR,EL_DIR_REPLACMENT)}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(takeRecords(),DIR_INSTANCES.push(this),setRTL(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=DIR_INSTANCES.indexOf(this);-1<e&&DIR_INSTANCES.splice(e,1)}}}return i.__activateDir=!1,i});var dirMixin={DirMixin:DirMixin};let scheduled=!1,beforeRenderQueue=[],afterRenderQueue=[];function schedule(){scheduled=!0,requestAnimationFrame(function(){scheduled=!1,flushQueue(beforeRenderQueue),setTimeout(function(){runQueue(afterRenderQueue)})})}function flushQueue(e){for(;e.length;)callMethod(e.shift())}function runQueue(e){for(let t=0,i=e.length;t<i;t++)callMethod(e.shift())}function callMethod(e){const t=e[0],i=e[1],n=e[2];try{i.apply(t,n)}catch(e){setTimeout(()=>{throw e})}}function flush(){for(;beforeRenderQueue.length||afterRenderQueue.length;)flushQueue(beforeRenderQueue),flushQueue(afterRenderQueue);scheduled=!1}function beforeNextRender(e,t,i){scheduled||schedule(),beforeRenderQueue.push([e,t,i])}function afterNextRender(e,t,i){scheduled||schedule(),afterRenderQueue.push([e,t,i])}var renderStatus={flush:flush,beforeNextRender:beforeNextRender,afterNextRender:afterNextRender};function resolve(){document.body.removeAttribute("unresolved")}function newSplice(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?resolve():window.addEventListener("DOMContentLoaded",resolve);const EDIT_LEAVE=0,EDIT_UPDATE=1,EDIT_ADD=2,EDIT_DELETE=3;function calcEditDistances(e,t,i,n,o,r){let a=r-o+1,s=i-t+1,l=Array(a);for(let e=0;e<a;e++)l[e]=Array(s),l[e][0]=e;for(let e=0;e<s;e++)l[0][e]=e;for(let i=1;i<a;i++)for(let r=1;r<s;r++)if(equals(e[t+r-1],n[o+i-1]))l[i][r]=l[i-1][r-1];else{let e=l[i-1][r]+1,t=l[i][r-1]+1;l[i][r]=e<t?e:t}return l}function spliceOperationsFromEditDistances(e){let t=e.length-1,i=e[0].length-1,n=e[t][i],o=[];for(;0<t||0<i;){if(0==t){o.push(EDIT_ADD),i--;continue}if(0==i){o.push(EDIT_DELETE),t--;continue}let r,a=e[t-1][i-1],s=e[t-1][i],l=e[t][i-1];(r=s<l?s<a?s:a:l<a?l:a)==a?(a==n?o.push(EDIT_LEAVE):(o.push(EDIT_UPDATE),n=a),t--,i--):r==s?(o.push(EDIT_DELETE),t--,n=s):(o.push(EDIT_ADD),i--,n=l)}return o.reverse(),o}function calcSplices(e,t,i,n,o,r){let a,s=0,l=0,c=Math.min(i-t,r-o);if(0==t&&0==o&&(s=sharedPrefix(e,n,c)),i==e.length&&r==n.length&&(l=sharedSuffix(e,n,c-s)),o+=s,r-=l,0==(i-=l)-(t+=s)&&0==r-o)return[];if(t==i){for(a=newSplice(t,[],0);o<r;)a.removed.push(n[o++]);return[a]}if(o==r)return[newSplice(t,[],i-t)];let p=spliceOperationsFromEditDistances(calcEditDistances(e,t,i,n,o,r));a=void 0;let h=[],d=t,u=o;for(let e=0;e<p.length;e++)switch(p[e]){case EDIT_LEAVE:a&&(h.push(a),a=void 0),d++,u++;break;case EDIT_UPDATE:a||(a=newSplice(d,[],0)),a.addedCount++,d++,a.removed.push(n[u]),u++;break;case EDIT_ADD:a||(a=newSplice(d,[],0)),a.addedCount++,d++;break;case EDIT_DELETE:a||(a=newSplice(d,[],0)),a.removed.push(n[u]),u++}return a&&h.push(a),h}function sharedPrefix(e,t,i){for(let n=0;n<i;n++)if(!equals(e[n],t[n]))return n;return i}function sharedSuffix(e,t,i){let n=e.length,o=t.length,r=0;for(;r<i&&equals(e[--n],t[--o]);)r++;return r}function calculateSplices(e,t){return calcSplices(e,0,e.length,t,0,t.length)}function equals(e,t){return e===t}var arraySplice={calculateSplices:calculateSplices};function isSlot(e){return"slot"===e.localName}let FlattenedNodesObserver=class{static getFlattenedNodes(e){const t=wrap$1(e);return isSlot(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>isSlot(e)?wrap$1(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=(()=>{this._schedule()}),this.connect(),this._schedule()}connect(){isSlot(this._target)?this._listenSlots([this._target]):wrap$1(this._target).children&&(this._listenSlots(wrap$1(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){isSlot(this._target)?this._unlistenSlots([this._target]):wrap$1(this._target).children&&(this._unlistenSlots(wrap$1(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,microTask.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t,i=0;i<e.length;i++)(t=e[i]).addedNodes&&this._listenSlots(t.addedNodes),t.removedNodes&&this._unlistenSlots(t.removedNodes)}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=calculateSplices(t,this._effectiveNodes);for(let t,n=0;n<i.length&&(t=i[n]);n++)for(let i,n=0;n<t.removed.length&&(i=t.removed[n]);n++)e.removedNodes.push(i);for(let n,o=0;o<i.length&&(n=i[o]);o++)for(let i=n.index;i<n.index+n.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t,i=0;i<e.length;i++)isSlot(t=e[i])&&t.addEventListener("slotchange",this._boundSchedule)}_unlistenSlots(e){for(let t,i=0;i<e.length;i++)isSlot(t=e[i])&&t.removeEventListener("slotchange",this._boundSchedule)}};var flattenedNodesObserver={FlattenedNodesObserver:FlattenedNodesObserver};const flush$1=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=flushDebouncers()}while(e||t)};var flush$2={flush:flush$1,enqueueDebouncer:enqueueDebouncer};const p=Element.prototype,normalizedMatchesSelector=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,matchesSelector=function(e,t){return normalizedMatchesSelector.call(e,t)};class DomApiNative{constructor(e){this.node=e}observeNodes(e){return new FlattenedNodesObserver(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(wrap$1(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=wrap$1(t).parentNode||wrap$1(t).host;return t===this.node}getOwnerRoot(){return wrap$1(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?wrap$1(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=wrap$1(this.node).assignedSlot;for(;t;)e.push(t),t=wrap$1(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return wrap$1(i).importNode(e,t)}getEffectiveChildNodes(){return FlattenedNodesObserver.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let n,o=0,r=t.length;o<r&&(n=t[o]);o++)n.nodeType===Node.ELEMENT_NODE&&matchesSelector(n,e)&&i.push(n);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function forwardMethods(e,t){for(let i,n=0;n<t.length;n++)e[i=t[n]]=function(){return this.node[i].apply(this.node,arguments)}}function forwardReadOnlyProperties(e,t){for(let i,n=0;n<t.length;n++)i=t[n],Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}function forwardProperties(e,t){for(let i,n=0;n<t.length;n++)i=t[n],Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(e){this.node[i]=e},configurable:!0})}class EventApi{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}DomApiNative.prototype.cloneNode,DomApiNative.prototype.appendChild,DomApiNative.prototype.insertBefore,DomApiNative.prototype.removeChild,DomApiNative.prototype.replaceChild,DomApiNative.prototype.setAttribute,DomApiNative.prototype.removeAttribute,DomApiNative.prototype.querySelector,DomApiNative.prototype.querySelectorAll,DomApiNative.prototype.parentNode,DomApiNative.prototype.firstChild,DomApiNative.prototype.lastChild,DomApiNative.prototype.nextSibling,DomApiNative.prototype.previousSibling,DomApiNative.prototype.firstElementChild,DomApiNative.prototype.lastElementChild,DomApiNative.prototype.nextElementSibling,DomApiNative.prototype.previousElementSibling,DomApiNative.prototype.childNodes,DomApiNative.prototype.children,DomApiNative.prototype.classList,DomApiNative.prototype.textContent,DomApiNative.prototype.innerHTML;let DomApiImpl=DomApiNative;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(DomApiNative.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=DomApiNative.prototype[t])}),forwardReadOnlyProperties(e.prototype,["classList"]),DomApiImpl=e,Object.defineProperties(EventApi.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else forwardMethods(DomApiNative.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),forwardReadOnlyProperties(DomApiNative.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),forwardProperties(DomApiNative.prototype,["textContent","innerHTML"]);const DomApi=DomApiImpl,dom=function(e){if((e=e||document)instanceof DomApiImpl)return e;if(e instanceof EventApi)return e;let t=e.__domApi;return t||(t=e instanceof Event?new EventApi(e):new DomApiImpl(e),e.__domApi=t),t};var polymer_dom={matchesSelector:matchesSelector,EventApi:EventApi,DomApi:DomApi,dom:dom,flush:flush$1,addDebouncer:enqueueDebouncer};const bundledImportMeta$1={...import.meta,url:new URL("../../node_modules/%40polymer/polymer/lib/legacy/legacy-element-mixin.js",import.meta.url).href};let styleInterface=window.ShadyCSS;const LegacyElementMixin=dedupingMixin(e=>{const t=DirMixin(GestureEventListeners(ElementMixin(e))),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,i,n){t!==i&&(super.attributeChangedCallback(e,t,i,n),this.attributeChanged(e,t,i))}attributeChanged(e,t,i){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let n,o,r=0;r<i.length&&(n=i[r]);r++)(o=Object.getOwnPropertyDescriptor(t,n))&&Object.defineProperty(e,n,o);return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null===t||void 0===t?{}:t;let n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:!!i.cancelable,composed:void 0===i.composed||i.composed});n.detail=t;let o=i.node||this;return wrap$1(o).dispatchEvent(n),n}listen(e,t,i){e=e||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),o=n.get(e);o||(o={},n.set(e,o));let r=t+i;o[r]||(o[r]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let n=this.__boundListeners&&this.__boundListeners.get(e),o=t+i,r=n&&n[o];r&&(this._removeEventListenerFromNode(e,t,r),n[o]=null)}setScrollDirection(e,t){setTouchAction(t||this,i[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=wrap$1(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=dom(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return dom(this).getEffectiveChildNodes()}queryDistributedElements(e){return dom(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,n=0;i=e[n];n++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?dom(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}isLightDescendant(e){return this!==e&&wrap$1(this).contains(e)&&wrap$1(this).getRootNode()===wrap$1(e).getRootNode()}isLocalDescendant(e){return this.root===wrap$1(e).getRootNode()}scopeSubtree(e,t){}getComputedStyleValue(e){return styleInterface.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=Debouncer.debounce(this._debouncers[e],0<i?timeOut.after(i):microTask,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return 0<t?timeOut.run(e.bind(this),t):~microTask.run(e.bind(this))}cancelAsync(e){0>e?microTask.cancel(~e):timeOut.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return matchesSelector(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(wrap$1(i).setAttribute(e,""),!0):(wrap$1(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,n){n=n||this,this.transform("translate3d("+e+","+t+","+i+")",n)}arrayDelete(e,t){let i;if(Array.isArray(e)){if(0<=(i=e.indexOf(t)))return e.splice(i,1)}else{if(0<=(i=get(this,e).indexOf(t)))return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return n.prototype.is="",n});var legacyElementMixin={LegacyElementMixin:LegacyElementMixin};const lifecycleProps={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},excludeOnInfo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},excludeOnBehaviors=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},excludeOnInfo);function copyProperties(e,t,i){const n=e._noAccessors,o=Object.getOwnPropertyNames(e);for(let r,a=0;a<o.length;a++)if(!((r=o[a])in i))if(n)t[r]=e[r];else{let i=Object.getOwnPropertyDescriptor(e,r);i&&(i.configurable=!0,Object.defineProperty(t,r,i))}}function mixinBehaviors(e,t){return GenerateClassFromInfo({},LegacyElementMixin(t),e)}function applyBehaviors(e,t,i){for(let n=0;n<t.length;n++)applyInfo(e,t[n],i,excludeOnBehaviors)}function applyInfo(e,t,i,n){copyProperties(t,e,n);for(let e in lifecycleProps)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function flattenBehaviors(e,t,i){t=t||[];for(let n,o=e.length-1;0<=o;o--)(n=e[o])?Array.isArray(n)?flattenBehaviors(n,t):0>t.indexOf(n)&&(!i||0>i.indexOf(n))&&t.unshift(n):console.warn("behavior is null, check for missing or 404 import");return t}function mergeProperties(e,t){for(const i in t){const n=e[i],o=t[i];e[i]=!("value"in o)&&n&&"value"in n?Object.assign({value:n.value},o):o}}function GenerateClassFromInfo(e,t,i){let n;const o={};class r extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let e,t=0;t<n.length;t++)(e=n[t]).properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else super._finalizeClass()}static get properties(){const t={};if(n)for(let e=0;e<n.length;e++)mergeProperties(t,n[e].properties);return mergeProperties(t,e.properties),t}static get observers(){let t=[];if(n)for(let e,i=0;i<n.length;i++)(e=n[i]).observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=o.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=r.prototype;if(!e.hasOwnProperty("__hasRegisterFinished")){e.__hasRegisterFinished=!0,super._registered(),legacyOptimizations&&a(e);const t=Object.getPrototypeOf(this);let i=o.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=o.registered)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=o.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=o.hostAttributes;if(e)for(let t=e.length-1;0<=t;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=o.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=o.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=o.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let n=o.attributeChanged;if(n)for(let o=0;o<n.length;o++)n[o].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;n=flattenBehaviors(i,null,e),r.prototype.behaviors=e?e.concat(i):n}const a=t=>{n&&applyBehaviors(t,n,o),applyInfo(t,e,o,excludeOnInfo)};return legacyOptimizations||a(r.prototype),r.generatedFrom=e,r}const Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(LegacyElementMixin(HTMLElement)):LegacyElementMixin(HTMLElement);return(i=GenerateClassFromInfo(e,i,e.behaviors)).is=i.prototype.is=e.is,i};var _class={mixinBehaviors:mixinBehaviors,Class:Class};const Polymer=function(e){let t;return t="function"==typeof e?e:Polymer.Class(e),customElements.define(t.is,t),t};Polymer.Class=Class;var polymerFn={Polymer:Polymer};function mutablePropertyChange(e,t,i,n,o){let r;o&&(r="object"==typeof i&&null!==i)&&(n=e.__dataTemp[t]);let a=n!==i&&(n==n||i==i);return r&&a&&(e.__dataTemp[t]=i),a}const MutableData=dedupingMixin(e=>{return class extends e{_shouldPropertyChange(e,t,i){return mutablePropertyChange(this,e,t,i,!0)}}}),OptionalMutableData=dedupingMixin(e=>{return class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return mutablePropertyChange(this,e,t,i,this.mutableData)}}});MutableData._mutablePropertyChange=mutablePropertyChange;var mutableData={MutableData:MutableData,OptionalMutableData:OptionalMutableData};let newInstance=null;function HTMLTemplateElementExtension(){return newInstance}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:!0}});const DataTemplate=PropertyEffects(HTMLTemplateElementExtension),MutableDataTemplate=MutableData(DataTemplate);function upgradeTemplate(e,t){newInstance=e,Object.setPrototypeOf(e,t.prototype),new t,newInstance=null}const templateInstanceBase=PropertyEffects(class{});class TemplateInstanceBase extends templateInstanceBase{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=this.children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,i(e)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,i)}}_showHideChildren(e){let t=this.children;for(let i,n=0;n<t.length;n++){if(!!e!=!!(i=t[n]).__hideTemplateChildren__)if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),wrap$1(wrap$1(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const e=i.__polymerReplaced__;e&&wrap$1(wrap$1(e).parentNode).replaceChild(i,e)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}TemplateInstanceBase.prototype.__dataHost,TemplateInstanceBase.prototype.__templatizeOptions,TemplateInstanceBase.prototype._methodHost,TemplateInstanceBase.prototype.__templatizeOwner,TemplateInstanceBase.prototype.__hostProps;const MutableTemplateInstanceBase=MutableData(TemplateInstanceBase);function findMethodHost(e){let t=e.__dataHost;return t&&t._methodHost||t}function createTemplatizerClass(e,t,i){let n=i.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase;templatize.mixin&&(n=templatize.mixin(n));let o=class extends n{};return o.prototype.__templatizeOptions=i,o.prototype._bindTemplate(e),addNotifyEffects(o,e,t,i),o}function addPropagateEffects(e,t,i){let n=i.forwardHostProp;if(n){let o=t.templatizeTemplateClass;if(!o){let e=i.mutableData?MutableDataTemplate:DataTemplate;o=t.templatizeTemplateClass=class extends e{};let r=t.hostProps;for(let e in r)o.prototype._addPropertyEffect("_host_"+e,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(e,n)}),o.prototype._createNotifyingProperty("_host_"+e)}upgradeTemplate(e,o),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function createForwardHostPropEffect(e,t){return function(e,i,n){t.call(e.__templatizeOwner,i.substring("_host_".length),n[i])}}function addNotifyEffects(e,t,i,n){let o=i.hostProps||{};for(let t in n.instanceProps){delete o[t];let i=n.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(t,i)})}if(n.forwardHostProp&&t.__dataHost)for(let t in o)e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()})}function createNotifyInstancePropEffect(e,t){return function(e,i,n){t.call(e.__templatizeOwner,e,i,n[i])}}function createNotifyHostPropEffect(){return function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}}function templatize(e,t,i){if(strictTemplatePolicy&&!findMethodHost(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:TemplateInstanceBase)._parseTemplate(e),o=n.templatizeInstanceClass;o||(o=createTemplatizerClass(e,n,i),n.templatizeInstanceClass=o),addPropagateEffects(e,n,i);let r=class extends o{};return r.prototype._methodHost=findMethodHost(e),r.prototype.__dataHost=e,r.prototype.__templatizeOwner=t,r.prototype.__hostProps=n.hostProps,r=r}function modelForElement(e,t){let i;for(;t;)if(i=t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=wrap$1(t).parentNode;return null}var templatize$1={templatize:templatize,modelForElement:modelForElement,TemplateInstanceBase:TemplateInstanceBase};let TemplatizerUser;const Templatizer={templatize(e,t){this._templatizerTemplate=e,this.ctor=templatize(e,this,{mutableData:!!t,parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(e){return new this.ctor(e)},modelForElement(e){return modelForElement(this._templatizerTemplate,e)}};var templatizerBehavior={Templatizer:Templatizer};const domBindBase=GestureEventListeners(OptionalMutableData(PropertyEffects(HTMLElement)));class DomBind extends domBindBase{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),strictTemplatePolicy)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){wrap$1(wrap$1(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(!(e=e||this.querySelector("template"))){let t=new MutationObserver(()=>{if(!(e=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",DomBind);var domBind={DomBind:DomBind};class LiteralString{constructor(e){this.value=e.toString()}toString(){return this.value}}function literalValue(e){if(e instanceof LiteralString)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function htmlValue(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof LiteralString)return literalValue(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const html=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce((t,i,n)=>t+htmlValue(i)+e[n+1],e[0]),i},htmlLiteral=function(e,...t){return new LiteralString(t.reduce((t,i,n)=>t+literalValue(i)+e[n+1],e[0]))};var htmlTag={html:html,htmlLiteral:htmlLiteral};const PolymerElement=ElementMixin(HTMLElement);var polymerElement={version:version,PolymerElement:PolymerElement,html:html};const domRepeatBase=OptionalMutableData(PolymerElement);class DomRepeat extends domRepeatBase{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=wrap$1(wrap$1(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=templatize(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let i=this.__instances;for(let n,o=0;o<i.length&&(n=i[o]);o++)n.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if(matches(this.as,t)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=i);let o=translate(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,t);this.notifyPath(o,i)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,0<t?timeOut.after(t):microTask,e.bind(this)),enqueueDebouncer(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),flush$1()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;this.__filterFn&&(t=t.filter((t,i,n)=>this.__filterFn(e[t],i,n))),this.__sortFn&&t.sort((t,i)=>this.__sortFn(e[t],e[i]));const i=this.__itemsIdxToInstIdx={};let n=0;const o=Math.min(t.length,this.__limit);for(;n<o;n++){let o=this.__instances[n],r=t[n],a=e[r];i[r]=n,o?(o._setPendingProperty(this.as,a),o._setPendingProperty(this.indexAs,n),o._setPendingProperty(this.itemsIndexAs,r),o._flushProperties()):this.__insertInstance(a,n,r)}for(let e=this.__instances.length-1;e>=n;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=wrap$1(t.root);for(let e,n=0;n<t.children.length;n++)e=t.children[n],i.appendChild(e);return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,i){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(e,t,i){let n=this.__pool.pop();n?(n._setPendingProperty(this.as,e),n._setPendingProperty(this.indexAs,t),n._setPendingProperty(this.itemsIndexAs,i),n._flushProperties()):n=this.__stampInstance(e,t,i);let o=this.__instances[t+1],r=o?o.children[0]:this;return wrap$1(wrap$1(this).parentNode).insertBefore(n.root,r),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),n=i.indexOf("."),o=0>n?i:i.substring(0,n);if(o==parseInt(o,10)){let e=0>n?"":i.substring(n+1);this.__handleObservedPaths(e);let r=this.__itemsIdxToInstIdx[o],a=this.__instances[r];if(a){let i=this.as+(e?"."+e:"");a._setPendingPropertyOrPath(i,t,!1,!0),a._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return modelForElement(this.template,e)}}customElements.define(DomRepeat.is,DomRepeat);var domRepeat={DomRepeat:DomRepeat};class DomIf extends PolymerElement{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,microTask,()=>this.__render()),enqueueDebouncer(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=wrap$1(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||wrap$1(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){flush$1()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=wrap$1(this).parentNode;if(e){if(!this.__ctor){let e=wrap$1(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!wrap$1(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=templatize(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[root(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(wrap$1(this).previousSibling!==t[t.length-1])for(let i,n=0;n<t.length&&(i=t[n]);n++)wrap$1(e).insertBefore(i,this)}}else this.__instance=new this.__ctor,wrap$1(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=wrap$1(e[0]).parentNode;if(t){t=wrap$1(t);for(let i,n=0;n<e.length&&(i=e[n]);n++)t.removeChild(i)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(DomIf.is,DomIf);var domIf={DomIf:DomIf};let ArraySelectorMixin=dedupingMixin(e=>{let t=ElementMixin(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],n=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),n){let e=calculateSplices(i,n);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(`${JSCompiler_renameProperty("items",this)}.splices`==t.path)this.__applySplices(t.value.indexSplices);else{let e=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);0>e.indexOf(".")&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i,n=0;n<e.length;n++){i=e[n],t.forEach((e,n)=>{e<i.index||(e>=i.index+i.removed.length?t.set(n,e+i.addedCount-i.removed.length):t.set(n,-1))});for(let e,n=0;n<i.addedCount;n++)e=i.index+n,t.has(this.items[e])&&t.set(this.items[e],e)}this.__updateLinks();let i=0;t.forEach((e,n)=>{0>e?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(n)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{0<=t&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(0<=t){let e=0;this.__selectedMap.forEach((i,n)=>{t==e++&&this.deselect(n)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(0<=t){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}}),baseArraySelector=ArraySelectorMixin(PolymerElement);class ArraySelector extends baseArraySelector{static get is(){return"array-selector"}static get template(){return null}}customElements.define(ArraySelector.is,ArraySelector);var arraySelector={ArraySelectorMixin:ArraySelectorMixin,ArraySelector:ArraySelector};const customStyleInterface$1=new CustomStyleInterface;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){customStyleInterface$1.processStyles(),updateNativeProperties(e,t)},styleElement(e){customStyleInterface$1.processStyles()},styleDocument(e){customStyleInterface$1.processStyles(),updateNativeProperties(document.body,e)},getComputedStyleValue:(e,t)=>getComputedStyleValue(e,t),flushCustomStyles(){},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime}),window.ShadyCSS.CustomStyleInterface=customStyleInterface$1;const attr="include",CustomStyleInterface$1=window.ShadyCSS.CustomStyleInterface;class CustomStyle extends HTMLElement{constructor(){super(),this._style=null,CustomStyleInterface$1.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(attr);return t&&(e.removeAttribute(attr),e.textContent=cssFromModules(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",CustomStyle);var customStyle={CustomStyle:CustomStyle};let mutablePropertyChange$1;mutablePropertyChange$1=MutableData._mutablePropertyChange;const MutableDataBehavior={_shouldPropertyChange(e,t,i){return mutablePropertyChange$1(this,e,t,i,!0)}},OptionalMutableDataBehavior={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,i){return mutablePropertyChange$1(this,e,t,i,this.mutableData)}};var mutableDataBehavior={MutableDataBehavior:MutableDataBehavior,OptionalMutableDataBehavior:OptionalMutableDataBehavior};const Base=LegacyElementMixin(HTMLElement).prototype;var polymerLegacy={Base:Base,Polymer:Polymer,html:html};const IronJsonpLibraryBehavior={properties:{libraryLoaded:{type:Boolean,value:!1,notify:!0,readOnly:!0},libraryErrorMessage:{type:String,value:null,notify:!0,readOnly:!0}},observers:["_libraryUrlChanged(libraryUrl)"],_libraryUrlChanged:function(e){this._isReady&&this.libraryUrl&&this._loadLibrary()},_libraryLoadCallback:function(e,t){e?(Base._warn("Library load failed:",e.message),this._setLibraryErrorMessage(e.message)):(this._setLibraryErrorMessage(null),this._setLibraryLoaded(!0),this.notifyEvent&&this.fire(this.notifyEvent,t,{composed:!0}))},_loadLibrary:function(){LoaderMap.require(this.libraryUrl,this._libraryLoadCallback.bind(this),this.callbackName)},ready:function(){this._isReady=!0,this.libraryUrl&&this._loadLibrary()}};var LoaderMap={apiMap:{},require:function(e,t,i){var n=this.nameFromUrl(e);this.apiMap[n]||(this.apiMap[n]=new Loader(n,e,i)),this.apiMap[n].requestNotify(t)},nameFromUrl:function(e){return e.replace(/[\:\/\%\?\&\.\=\-\,]/g,"_")+"_api"}},Loader=function(e,t,i){if(this.notifiers=[],!i){if(!(0<=t.indexOf(this.callbackMacro)))return void(this.error=new Error("IronJsonpLibraryBehavior a %%callback%% parameter is required in libraryUrl"));i=e+"_loaded",t=t.replace(this.callbackMacro,i)}this.callbackName=i,window[this.callbackName]=this.success.bind(this),this.addScript(t)};Loader.prototype={callbackMacro:"%%callback%%",loaded:!1,addScript:function(e){var t=document.createElement("script");t.src=e,t.onerror=this.handleError.bind(this);var i=document.querySelector("script")||document.body;i.parentNode.insertBefore(t,i),this.script=t},removeScript:function(){this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.script=null},handleError:function(e){this.error=new Error("Library failed to load"),this.notifyAll(),this.cleanup()},success:function(){this.loaded=!0,this.result=Array.prototype.slice.call(arguments),this.notifyAll(),this.cleanup()},cleanup:function(){delete window[this.callbackName]},notifyAll:function(){this.notifiers.forEach(function(e){e(this.error,this.result)}.bind(this)),this.notifiers=[]},requestNotify:function(e){this.loaded||this.error?e(this.error,this.result):this.notifiers.push(e)}},Polymer({is:"iron-jsonp-library",behaviors:[IronJsonpLibraryBehavior],properties:{libraryUrl:String,callbackName:String,notifyEvent:String}});var ironJsonpLibrary={IronJsonpLibraryBehavior:IronJsonpLibraryBehavior};Polymer({is:"google-maps-api",behaviors:[IronJsonpLibraryBehavior],properties:{mapsUrl:{type:String,value:"https://maps.googleapis.com/maps/api/js?callback=%%callback%%"},apiKey:{type:String,value:""},clientId:{type:String,value:""},version:{type:String,value:"3.exp"},language:{type:String,value:""},signedIn:{type:Boolean,value:!1},notifyEvent:{type:String,value:"api-load"},libraryUrl:{type:String,computed:"_computeUrl(mapsUrl, version, apiKey, clientId, language, signedIn)"}},_computeUrl(e,t,i,n,o,r){let a=`${e}&v=${t}`;if(a+="&libraries=drawing,geometry,places,visualization",i&&!n&&(a+=`&key=${i}`),n&&(a+=`&client=${n}`),!i&&!n){const e="No Google Maps API Key or Client ID specified. See https://developers.google.com/maps/documentation/javascript/get-api-key for instructions to get started with a key or client id.";console.warn(e)}return o&&(a+=`&language=${o}`),r&&(a+=`&signed_in=${r}`),a},get api(){return google.maps}});const template=html`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;template.setAttribute("style","display: none;"),document.head.appendChild(template.content);var style=document.createElement("style");style.textContent="[hidden] { display: none !important; }",document.head.appendChild(style),Polymer({_template:html`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: 120px 0;

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){afterNextRender(this,function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener("keydown",this._tabKeydownHandler.bind(this)),this.listen(this,"track","_track"),this.setScrollDirection("y")}),this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":return void this._setPosition(this._isRTL()?"right":"left");case"end":return void this._setPosition(this._isRTL()?"left":"right")}this._setPosition(this.align)},_escKeydownHandler:function(e){27===e.keyCode&&(e.preventDefault(),this.close())},_track:function(e){if(!this.persistent&&!this.disableSwipe)switch(e.preventDefault(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackMove(e);break;case"end":this._trackEnd(e)}},_trackStart:function(e){this._drawerState=this._DRAWER_STATE.TRACKING;var t=this.$.contentContainer.getBoundingClientRect();this._savedWidth=t.width,"left"===this.position?this._translateOffset=t.left:this._translateOffset=t.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility="visible"},_trackMove:function(e){this._translateDrawer(e.detail.dx+this._translateOffset),this._trackDetails.push({dx:e.detail.dx,timeStamp:Date.now()})},_trackEnd:function(e){var t=e.detail.dx+this._translateOffset,i=this.getWidth(),n="left"===this.position?0<=t||t<=-i:0>=t||t>=i;if(!n){var o=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(e,o),this._drawerState===this._DRAWER_STATE.FLINGING)return}var r=i/2;e.detail.dx<-r?this.opened="right"===this.position:e.detail.dx>r&&(this.opened="left"===this.position),n?this.debounce("_resetDrawerState",this._resetDrawerState):this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=""},_calculateVelocity:function(e,t){for(var i,n=Date.now(),o=n-100,r=0,a=t.length-1;r<=a;){var s=r+a>>1,l=t[s];l.timeStamp>=o?(i=l,a=s-1):r=s+1}return i?(e.detail.dx-i.dx)/(n-i.timeStamp||1):0},_flingDrawer:function(e,t){var i=this._calculateVelocity(e,t);if(!(Math.abs(i)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var n,o=e.detail.dx+this._translateOffset,r=this.getWidth(),a="left"===this.position,s=0<i;n=!s&&a?-(o+r):s&&!a?r-o:-o,s?(i=Math.max(i,this._MIN_TRANSITION_VELOCITY),this.opened="left"===this.position):(i=Math.min(i,-this._MIN_TRANSITION_VELOCITY),this.opened="right"===this.position);var l=this._FLING_INITIAL_SLOPE*n/i;this._styleTransitionDuration(l),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce("_resetDrawerState",this._resetDrawerState,l)}},_styleTransitionDuration:function(e){this.style.transitionDuration=e+"ms",this.$.contentContainer.style.transitionDuration=e+"ms",this.$.scrim.style.transitionDuration=e+"ms"},_styleTransitionTimingFunction:function(e){this.$.contentContainer.style.transitionTimingFunction=e,this.$.scrim.style.transitionTimingFunction=e},_translateDrawer:function(e){var t=this.getWidth();"left"===this.position?(e=Math.max(-t,Math.min(e,0)),this.$.scrim.style.opacity=1+e/t):(e=Math.max(0,Math.min(e,t)),this.$.scrim.style.opacity=1-e/t),this.translate3d(e+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="",this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var e=this._drawerState;e===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(""),this.style.visibility=""),this._savedWidth=null,this.opened?this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._drawerState=this._DRAWER_STATE.CLOSED,e!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow=""),e!==this._DRAWER_STATE.INIT&&this.fire("app-drawer-transitioned"))},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var e=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(","),t=dom(this).querySelectorAll(e);0<t.length?(this._firstTabStop=t[0],this._lastTabStop=t[t.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var i=this.getAttribute("tabindex");i&&-1<parseInt(i,10)?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(e){if(!this.noFocusTrap){this._drawerState===this._DRAWER_STATE.OPENED&&9===e.keyCode&&(e.shiftKey?this._firstTabStop&&dom(e).localTarget===this._firstTabStop&&(e.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&dom(e).localTarget===this._lastTabStop&&(e.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(e,t){this.toggleClass("visible",e&&!t,this.$.scrim),this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}});var ORPHANS=new Set;const IronResizableBehavior={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(ORPHANS.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);-1<t&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():useShadow||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=dom(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),e()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(ORPHANS.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?ORPHANS.delete(this):ORPHANS.add(this)}};var ironResizableBehavior={IronResizableBehavior:IronResizableBehavior};const AppLayoutBehavior=[IronResizableBehavior,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(e){dom(e).path[0]!==this&&(this.resetLayout(),e.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var e=this._updateLayoutStates.bind(this);this._layoutDebouncer=Debouncer.debounce(this._layoutDebouncer,animationFrame,e),enqueueDebouncer(this._layoutDebouncer),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var e=this;requestAnimationFrame(function(){e.fire("app-reset-layout")})},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this)}}];var appLayoutBehavior={AppLayoutBehavior:AppLayoutBehavior};const IronScrollTargetBehavior={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[e]:dom(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}};var ironScrollTargetBehavior={IronScrollTargetBehavior:IronScrollTargetBehavior};const _scrollEffects={};let _scrollTimer=null;const scrollTimingFunction=function(e,t,i,n){return-i*(e/=n)*(e-2)+t},registerEffect=function(e,t){if(null!=_scrollEffects[e])throw new Error("effect `"+e+"` is already registered.");_scrollEffects[e]=t},queryAllRoot=function(e,t){for(var i=[t],n=[];0<i.length;){var o=i.shift();n.push.apply(n,o.querySelectorAll(e));for(var r=0;o.children[r];r++)o.children[r].shadowRoot&&i.push(o.children[r].shadowRoot)}return n},scroll=function(e){e=e||{};var t=document.documentElement,i=e.target||t,n="scrollBehavior"in i.style&&i.scroll,o=e.top||0,r=e.left||0,a=i===t?window.scrollTo:function(e,t){i.scrollLeft=e,i.scrollTop=t};if("smooth"===e.behavior)if(n)i.scroll(e);else{var s=scrollTimingFunction,l=Date.now(),c=i===t?window.pageYOffset:i.scrollTop,p=i===t?window.pageXOffset:i.scrollLeft,h=o-c,d=r-p;(function e(){var t=Date.now()-l;t<300?(a(s(t,p,d,300),s(t,c,h,300)),requestAnimationFrame(e)):a(r,o)}).bind(this)()}else if("silent"===e.behavior){var u=queryAllRoot("app-header",document.body);u.forEach(function(e){e.setAttribute("silent-scroll","")}),_scrollTimer&&window.cancelAnimationFrame(_scrollTimer),_scrollTimer=window.requestAnimationFrame(function(){u.forEach(function(e){e.removeAttribute("silent-scroll")}),_scrollTimer=null}),a(r,o)}else a(r,o)};var helpers={_scrollEffects:_scrollEffects,get _scrollTimer(){return _scrollTimer},scrollTimingFunction:scrollTimingFunction,registerEffect:registerEffect,queryAllRoot:queryAllRoot,scroll:scroll};const AppScrollEffectsBehavior=[IronScrollTargetBehavior,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(e){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(e,t){var i=_scrollEffects[e];if(!i)throw new ReferenceError(this._getUndefinedMsg(e));var n=this._boundEffect(i,t||{});return n.setUp(),n},_effectsChanged:function(e,t,i){this._tearDownEffects(),e&&i&&(e.split(" ").forEach(function(e){var i;""!==e&&((i=_scrollEffects[e])?this._effects.push(this._boundEffect(i,t[e])):console.warn(this._getUndefinedMsg(e)))},this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(e,t){t=t||{};var i=parseFloat(t.startsAt||0),n=parseFloat(t.endsAt||1),o=n-i,r=function(){},a=0===i&&1===n?e.run:function(t,n){e.run.call(this,Math.max(0,(t-i)/o),n)};return{setUp:e.setUp?e.setUp.bind(this,t):r,run:e.run?a.bind(this):r,tearDown:e.tearDown?e.tearDown.bind(this):r}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach(function(e){!1!==e.setUp()&&this._effectsRunFn.push(e.run)},this))},_tearDownEffects:function(){this._effects&&this._effects.forEach(function(e){e.tearDown()}),this._effectsRunFn=[],this._effects=[]},_runEffects:function(e,t){this._effectsRunFn&&this._effectsRunFn.forEach(function(i){i(e,t)})},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var e=this._clampedScrollTop;this._updateScrollState(e),0<this.threshold&&this._setThresholdTriggered(e>=this.threshold)}},_getDOMRef:function(e){console.warn("_getDOMRef","`"+e+"` is undefined")},_getUndefinedMsg:function(e){return"Scroll effect `"+e+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+e+".html ?"}}];var appScrollEffectsBehavior={AppScrollEffectsBehavior:AppScrollEffectsBehavior};if(Polymer({_template:html`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[AppScrollEffectsBehavior,AppLayoutBehavior],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var e,t=dom(this.$.slot).getDistributedNodes(),i=0;e=t[i];i++)if(e.nodeType===Node.ELEMENT_NODE){if(e.hasAttribute("sticky")){this._stickyElRef=e;break}this._stickyElRef||(this._stickyElRef=e)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var e=this._clampedScrollTop,t=0===this._height||0===e,i=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,t||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),t?this._updateScrollState(e,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=i}},_updateScrollState:function(e,t){if(0!==this._height){var i=0,n=0,o=this._top,r=(this._lastScrollTop,this._maxHeaderTop),a=e-this._lastScrollTop,s=Math.abs(a),l=e>this._lastScrollTop,c=performance.now();if(this._mayMove()&&(n=this._clamp(this.reveals?o+a:e,0,r)),e>=this._dHeight&&(n=this.condenses&&!this.fixed?Math.max(this._dHeight,n):n,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&100>s&&((300<c-this._initTimestamp||this._wasScrollingDown!==l)&&(this._initScrollTop=e,this._initTimestamp=c),e>=r))if(30<Math.abs(this._initScrollTop-e)||10<s){l&&e>=r?n=r:!l&&e>=this._dHeight&&(n=this.condenses&&!this.fixed?this._dHeight:0);var p=a/(c-this._lastTimestamp);this.style.transitionDuration=this._clamp((n-o)/p,0,300)+"ms"}else n=this._top;i=0===this._dHeight?0<e?1:0:n/this._dHeight,t||(this._lastScrollTop=e,this._top=n,this._wasScrollingDown=l,this._lastTimestamp=c),(t||i!==this._progress||o!==n||0===e)&&(this._progress=i,this._runEffects(i,n),this._transformHeader(n))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return 0<this._dHeight&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?0<this._clampedScrollTop:0<=this._clampedScrollTop-this._maxHeaderTop},_transformHeader:function(e){this.translate3d(0,-e+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&e>=this._stickyElTop?Math.min(e,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),dom(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(e){switch(e){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return dom(this).querySelector("[main-title]");case"condensedTitle":return dom(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}}),registerEffect("waterfall",{run:function(){this.shadow=this.isOnScreen()&&this.isContentBelow()}}),!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},KEY_CHAR=/[a-z0-9*]/,IDENT_CHAR=/U\+/,ARROW_KEY=/^arrow/,SPACE_KEY=/^space(bar)?/,ESC_KEY=/^escape$/;function transformKey(e,t){var i="";if(e){var n=e.toLowerCase();" "===n||SPACE_KEY.test(n)?i="space":ESC_KEY.test(n)?i="esc":1==n.length?t&&!KEY_CHAR.test(n)||(i=n):i=ARROW_KEY.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return i}function transformKeyIdentifier(e){var t="";return e&&(e in KEY_IDENTIFIER?t=KEY_IDENTIFIER[e]:IDENT_CHAR.test(e)?(e=parseInt(e.replace("U+","0x"),16),t=String.fromCharCode(e).toLowerCase()):t=e.toLowerCase()),t}function transformKeyCode(e){var t="";return+e&&(t=65<=e&&90>=e?String.fromCharCode(32+e):112<=e&&123>=e?"f"+(e-112+1):48<=e&&57>=e?e-48+"":96<=e&&105>=e?e-96+"":KEY_CODE[e]),t}function normalizedKeyForEvent(e,t){return e.key?transformKey(e.key,t):e.detail&&e.detail.key?transformKey(e.detail.key,t):transformKeyIdentifier(e.keyIdentifier)||transformKeyCode(e.keyCode)||""}function keyComboMatchesEvent(e,t){return normalizedKeyForEvent(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function parseKeyComboString(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce(function(e,t){var i=t.split(":"),n=i[0],o=i[1];return n in MODIFIER_KEYS?(e[MODIFIER_KEYS[n]]=!0,e.hasModifiers=!0):(e.key=n,e.event=o||"keydown"),e},{combo:e.split(":").shift()})}function parseEventString(e){return e.trim().split(" ").map(function(e){return parseKeyComboString(e)})}const IronA11yKeysBehavior={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=parseEventString(t),n=0;n<i.length;++n)if(keyComboMatchesEvent(i[n],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map(function(e){return e.keyBindings});return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach(function(e){for(var t in e)this._addKeyBinding(t,e[t])},this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort(function(e,t){var i=e[0].hasModifiers;return i===t[0].hasModifiers?0:i?-1:1})},_addKeyBinding:function(e,t){parseEventString(e).forEach(function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(e){var t=this._keyBindings[e],i=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)},this)},_unlistenKeyEventListeners:function(){for(var e,t,i,n;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],i=e[1],n=e[2],t.removeEventListener(i,n)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var n=e[i][0],o=e[i][1];if(keyComboMatchesEvent(n,t)&&(this._triggerKeyHandler(n,o,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var n=Object.create(e);n.keyboardEvent=i;var o=new CustomEvent(e.event,{detail:n,cancelable:!0});this[t].call(this,o),o.defaultPrevented&&i.preventDefault()}};var ironA11yKeysBehavior={IronA11yKeysBehavior:IronA11yKeysBehavior};const IronControlState={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};var ironControlState={IronControlState:IronControlState};const IronButtonStateImpl={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,i=dom(t).localTarget;this.isLightDescendant(i)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,i=dom(t).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},IronButtonState=[IronA11yKeysBehavior,IronButtonStateImpl];var ironButtonState={IronButtonStateImpl:IronButtonStateImpl,IronButtonState:IronButtonState};const IronFormElementBehavior={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};var ironFormElementBehavior={IronFormElementBehavior:IronFormElementBehavior};class IronMeta{constructor(e){IronMeta[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return IronMeta.types[e]&&IronMeta.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=IronMeta.types[t]=IronMeta.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=IronMeta.types[this.type];return e?Object.keys(e).map(function(e){return metaDatas[this.type][e]},this):[]}}byKey(e){return this.key=e,this.value}}IronMeta[" "]=function(){},IronMeta.types={};var metaDatas=IronMeta.types;Polymer({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var n=new IronMeta({type:e,key:t});return void 0!==i&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new IronMeta({type:this.type,key:e}).value}});var ironMeta={IronMeta:IronMeta};let IronValidatableBehaviorMeta=null;const IronValidatableBehavior={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){IronValidatableBehaviorMeta=new IronMeta({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return IronValidatableBehaviorMeta&&IronValidatableBehaviorMeta.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return void 0===e&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}};var ironValidatableBehavior={get IronValidatableBehaviorMeta(){return IronValidatableBehaviorMeta},IronValidatableBehavior:IronValidatableBehavior};const IronCheckedElementBehaviorImpl={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(e){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},IronCheckedElementBehavior=[IronFormElementBehavior,IronValidatableBehavior,IronCheckedElementBehaviorImpl];var ironCheckedElementBehavior={IronCheckedElementBehaviorImpl:IronCheckedElementBehaviorImpl,IronCheckedElementBehavior:IronCheckedElementBehavior};const IronFitBehavior={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var e=dom(this).parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(e=e.host),e},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},attached:function(){void 0===this._isRTL&&(this._isRTL="rtl"==window.getComputedStyle(this).direction),this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var e=window.getComputedStyle(this),t=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==e.top?"top":"auto"!==e.bottom?"bottom":null,horizontally:"auto"!==e.left?"left":"auto"!==e.right?"right":null},sizedBy:{height:"none"!==t.maxHeight,width:"none"!==t.maxWidth,minWidth:parseInt(t.minWidth,10)||0,minHeight:parseInt(t.minHeight,10)||0},margin:{top:parseInt(e.marginTop,10)||0,right:parseInt(e.marginRight,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0}}}},resetFit:function(){var e=this._fitInfo||{};for(var t in e.sizerInlineStyle)this.sizingTarget.style[t]=e.sizerInlineStyle[t];for(var t in e.inlineStyle)this.style[t]=e.inlineStyle[t];this._fitInfo=null},refit:function(){var e=this.sizingTarget.scrollLeft,t=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=e,this.sizingTarget.scrollTop=t},position:function(){if(this.__shouldPosition){this._discoverInfo(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var e=this.getBoundingClientRect(),t=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto),n=this._fitInfo.margin,o={width:e.width+n.left+n.right,height:e.height+n.top+n.bottom},r=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,o,e,t,i),a=r.left+n.left,s=r.top+n.top,l=Math.min(i.right-n.right,a+e.width),c=Math.min(i.bottom-n.bottom,s+e.height);a=Math.max(i.left+n.left,Math.min(a,l-this._fitInfo.sizedBy.minWidth)),s=Math.max(i.top+n.top,Math.min(s,c-this._fitInfo.sizedBy.minHeight)),this.sizingTarget.style.maxWidth=Math.max(l-a,this._fitInfo.sizedBy.minWidth)+"px",this.sizingTarget.style.maxHeight=Math.max(c-s,this._fitInfo.sizedBy.minHeight)+"px",this.style.left=a-e.left+"px",this.style.top=s-e.top+"px"}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo;e.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),e.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var t=this.getBoundingClientRect();e.sizedBy.height||this.__sizeDimension(t,e.positionedBy.vertically,"top","bottom","Height"),e.sizedBy.width||this.__sizeDimension(t,e.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(e,t,i,n,o){this.__sizeDimension(e,t,i,n,o)},__sizeDimension:function(e,t,i,n,o){var r=this._fitInfo,a=this.__getNormalizedRect(this.fitInto),s="Width"===o?a.width:a.height,l=t===n,c=l?s-e[n]:e[i],p=r.margin[l?i:n],h="offset"+o,d=this[h]-this.sizingTarget[h];this.sizingTarget.style["max"+o]=s-p-c-d+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo.positionedBy;if(!e.vertically||!e.horizontally){this.style.position="fixed",e.vertically||(this.style.top="0px"),e.horizontally||(this.style.left="0px");var t=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!e.vertically){var n=i.top-t.top+(i.height-t.height)/2;this.style.top=n+"px"}if(!e.horizontally){var o=i.left-t.left+(i.width-t.width)/2;this.style.left=o+"px"}}}},__getNormalizedRect:function(e){return e===document.documentElement||e===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:e.getBoundingClientRect()},__getOffscreenArea:function(e,t,i){var n=Math.min(0,e.top)+Math.min(0,i.bottom-(e.top+t.height)),o=Math.min(0,e.left)+Math.min(0,i.right-(e.left+t.width));return Math.abs(n)*t.width+Math.abs(o)*t.height},__getPosition:function(e,t,i,n,o,r){var a=[{verticalAlign:"top",horizontalAlign:"left",top:o.top+this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:o.top+this.verticalOffset,left:o.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:o.bottom-i.height-this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:o.bottom-i.height-this.verticalOffset,left:o.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var s,l=0,c=a.length;l<c;l++){for(var p in s={},a[l])s[p]=a[l][p];a.push(s)}a[0].top=a[1].top+=o.height,a[2].top=a[3].top-=o.height,a[4].left=a[6].left+=o.width,a[5].left=a[7].left-=o.width}t="auto"===t?null:t,(e="auto"===e?null:e)&&"center"!==e||(a.push({verticalAlign:"top",horizontalAlign:"center",top:o.top+this.verticalOffset+(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset}),a.push({verticalAlign:"bottom",horizontalAlign:"center",top:o.bottom-i.height-this.verticalOffset-(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset})),t&&"middle"!==t||(a.push({verticalAlign:"middle",horizontalAlign:"left",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left+this.horizontalOffset+(this.noOverlap?o.width:0)}),a.push({verticalAlign:"middle",horizontalAlign:"right",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.right-i.width-this.horizontalOffset-(this.noOverlap?o.width:0)})),"middle"===t&&"center"===e&&a.push({verticalAlign:"middle",horizontalAlign:"center",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left-n.width/2+o.width/2+this.horizontalOffset});var h;for(l=0;l<a.length;l++){var d=a[l],u=d.verticalAlign===t,m=d.horizontalAlign===e;if(!this.dynamicAlign&&!this.noOverlap&&u&&m){h=d;break}var f=(!t||u)&&(!e||m);if(this.dynamicAlign||f){if(d.offscreenArea=this.__getOffscreenArea(d,i,r),0===d.offscreenArea&&f){h=d;break}h=h||d;var g=d.offscreenArea-h.offscreenArea;(0>g||0===g&&(u||m))&&(h=d)}}return h}};var ironFitBehavior={IronFitBehavior:IronFitBehavior},p$1=Element.prototype,matches$1=p$1.matches||p$1.matchesSelector||p$1.mozMatchesSelector||p$1.msMatchesSelector||p$1.oMatchesSelector||p$1.webkitMatchesSelector;const IronFocusablesHelper={getTabbableNodes:function(e){var t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t},isFocusable:function(e){return matches$1.call(e,"input, select, textarea, button, object")?matches$1.call(e,":not([disabled])"):matches$1.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(e){return this.isFocusable(e)&&matches$1.call(e,':not([tabindex="-1"])')&&this._isVisible(e)},_normalizedTabIndex:function(e){return this.isFocusable(e)?+(e.getAttribute("tabindex")||0):-1},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;var i,n=e,o=this._normalizedTabIndex(n),r=0<o;0<=o&&t.push(n),i="content"===n.localName||"slot"===n.localName?dom(n).getDistributedNodes():dom(n.root||n).children;for(var a=0;a<i.length;a++)r=this._collectTabbableNodes(i[a],t)||r;return r},_isVisible:function(e){var t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)},_sortByTabIndex:function(e){var t=e.length;if(2>t)return e;var i=Math.ceil(t/2),n=this._sortByTabIndex(e.slice(0,i)),o=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(n,o)},_mergeSortByTabIndex:function(e,t){for(var i=[];0<e.length&&0<t.length;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)},_hasLowerTabOrder:function(e,t){var i=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return 0===i||0===n?n>i:i>n}};var ironFocusablesHelper={IronFocusablesHelper:IronFocusablesHelper};Polymer({_template:html`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&dom(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||dom(this.parentNode).removeChild(this)},_onTransitionend:function(e){e&&e.target===this&&this.complete()},_openedChanged:function(e){if(e)this.prepare();else{var t=window.getComputedStyle(this);"0s"!==t.transitionDuration&&0!=t.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});const IronOverlayManagerClass=function(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,add(document.documentElement,"tap",function(){}),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)};IronOverlayManagerClass.prototype={constructor:IronOverlayManagerClass,get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement},get deepActiveElement(){var e=document.activeElement;for(e&&!1!=e instanceof Element||(e=document.body);e.root&&dom(e.root).activeElement;)e=dom(e.root).activeElement;return e},_bringOverlayAtIndexToFront:function(e){var t=this._overlays[e];if(t){var i=this._overlays.length-1,n=this._overlays[i];if(n&&this._shouldBeBehindOverlay(t,n)&&i--,!(e>=i)){var o=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(t)<=o&&this._applyOverlayZ(t,o);e<i;)this._overlays[e]=this._overlays[e+1],e++;this._overlays[i]=t}}},addOrRemoveOverlay:function(e){e.opened?this.addOverlay(e):this.removeOverlay(e)},addOverlay:function(e){var t=this._overlays.indexOf(e);if(0<=t)return this._bringOverlayAtIndexToFront(t),void this.trackBackdrop();var i=this._overlays.length,n=this._overlays[i-1],o=Math.max(this._getZ(n),this._minimumZ),r=this._getZ(e);if(n&&this._shouldBeBehindOverlay(e,n)){this._applyOverlayZ(n,o),i--;var a=this._overlays[i-1];o=Math.max(this._getZ(a),this._minimumZ)}r<=o&&this._applyOverlayZ(e,o),this._overlays.splice(i,0,e),this.trackBackdrop()},removeOverlay:function(e){var t=this._overlays.indexOf(e);-1!==t&&(this._overlays.splice(t,1),this.trackBackdrop())},currentOverlay:function(){var e=this._overlays.length-1;return this._overlays[e]},currentOverlayZ:function(){return this._getZ(this.currentOverlay())},ensureMinimumZ:function(e){this._minimumZ=Math.max(this._minimumZ,e)},focusOverlay:function(){var e=this.currentOverlay();e&&e._applyFocus()},trackBackdrop:function(){var e=this._overlayWithBackdrop();(e||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(e)-1,this.backdropElement.opened=!!e,this.backdropElement.prepare())},getBackdrops:function(){for(var e=[],t=0;t<this._overlays.length;t++)this._overlays[t].withBackdrop&&e.push(this._overlays[t]);return e},backdropZ:function(){return this._getZ(this._overlayWithBackdrop())-1},_overlayWithBackdrop:function(){for(var e=this._overlays.length-1;0<=e;e--)if(this._overlays[e].withBackdrop)return this._overlays[e]},_getZ:function(e){var t=this._minimumZ;if(e){var i=+(e.style.zIndex||window.getComputedStyle(e).zIndex);i==i&&(t=i)}return t},_setZ:function(e,t){e.style.zIndex=t},_applyOverlayZ:function(e,t){this._setZ(e,t+2)},_overlayInPath:function(e){e=e||[];for(var t=0;t<e.length;t++)if(e[t]._manager===this)return e[t]},_onCaptureClick:function(e){var t=this._overlays.length-1;if(-1!==t)for(var i,n=dom(e).path;(i=this._overlays[t])&&this._overlayInPath(n)!==i&&(i._onCaptureClick(e),i.allowClickThrough);)t--},_onCaptureFocus:function(e){var t=this.currentOverlay();t&&t._onCaptureFocus(e)},_onCaptureKeyDown:function(e){var t=this.currentOverlay();t&&(IronA11yKeysBehavior.keyboardEventMatchesKeys(e,"esc")?t._onCaptureEsc(e):IronA11yKeysBehavior.keyboardEventMatchesKeys(e,"tab")&&t._onCaptureTab(e))},_shouldBeBehindOverlay:function(e,t){return!e.alwaysOnTop&&t.alwaysOnTop}};const IronOverlayManager=new IronOverlayManagerClass;var _boundScrollHandler,currentLockingElement,ironOverlayManager={IronOverlayManagerClass:IronOverlayManagerClass,IronOverlayManager:IronOverlayManager},lastTouchPosition={pageX:0,pageY:0},lastRootTarget=null,lastScrollableNodes=[],scrollEvents=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function elementIsScrollLocked(e){var t,i=currentLockingElement;return void 0!==i&&(!!_hasCachedLockedElement(e)||!_hasCachedUnlockedElement(e)&&((t=!!i&&i!==e&&!_composedTreeContains(i,e))?_lockedElementCache.push(e):_unlockedElementCache.push(e),t))}function pushScrollLock(e){0<=_lockingElements.indexOf(e)||(0===_lockingElements.length&&_lockScrollInteractions(),_lockingElements.push(e),currentLockingElement=_lockingElements[_lockingElements.length-1],_lockedElementCache=[],_unlockedElementCache=[])}function removeScrollLock(e){var t=_lockingElements.indexOf(e);-1!==t&&(_lockingElements.splice(t,1),currentLockingElement=_lockingElements[_lockingElements.length-1],_lockedElementCache=[],_unlockedElementCache=[],0===_lockingElements.length&&_unlockScrollInteractions())}const _lockingElements=[];let _lockedElementCache=null,_unlockedElementCache=null;function _hasCachedLockedElement(e){return-1<_lockedElementCache.indexOf(e)}function _hasCachedUnlockedElement(e){return-1<_unlockedElementCache.indexOf(e)}function _composedTreeContains(e,t){var i,n,o,r;if(e.contains(t))return!0;for(i=dom(e).querySelectorAll("content,slot"),o=0;o<i.length;++o)for(n=dom(i[o]).getDistributedNodes(),r=0;r<n.length;++r)if(n[r].nodeType===Node.ELEMENT_NODE&&_composedTreeContains(n[r],t))return!0;return!1}function _scrollInteractionHandler(e){if(e.cancelable&&_shouldPreventScrolling(e)&&e.preventDefault(),e.targetTouches){var t=e.targetTouches[0];lastTouchPosition.pageX=t.pageX,lastTouchPosition.pageY=t.pageY}}function _lockScrollInteractions(){_boundScrollHandler=_boundScrollHandler||_scrollInteractionHandler.bind(void 0);for(var e=0,t=scrollEvents.length;e<t;e++)document.addEventListener(scrollEvents[e],_boundScrollHandler,{capture:!0,passive:!1})}function _unlockScrollInteractions(){for(var e=0,t=scrollEvents.length;e<t;e++)document.removeEventListener(scrollEvents[e],_boundScrollHandler,{capture:!0,passive:!1})}function _shouldPreventScrolling(e){var t=dom(e).rootTarget;if("touchmove"!==e.type&&lastRootTarget!==t&&(lastRootTarget=t,lastScrollableNodes=_getScrollableNodes(dom(e).path)),!lastScrollableNodes.length)return!0;if("touchstart"===e.type)return!1;var i=_getScrollInfo(e);return!_getScrollingNode(lastScrollableNodes,i.deltaX,i.deltaY)}function _getScrollableNodes(e){for(var t=[],i=e.indexOf(currentLockingElement),n=0;n<=i;n++)if(e[n].nodeType===Node.ELEMENT_NODE){var o=e[n],r=o.style;"scroll"!==r.overflow&&"auto"!==r.overflow&&(r=window.getComputedStyle(o)),"scroll"!==r.overflow&&"auto"!==r.overflow||t.push(o)}return t}function _getScrollingNode(e,t,i){if(t||i)for(var n=Math.abs(i)>=Math.abs(t),o=0;o<e.length;o++){var r=e[o];if(n?0>i?0<r.scrollTop:r.scrollTop<r.scrollHeight-r.clientHeight:0>t?0<r.scrollLeft:r.scrollLeft<r.scrollWidth-r.clientWidth)return r}}function _getScrollInfo(e){var t={deltaX:e.deltaX,deltaY:e.deltaY};if("deltaX"in e);else if("wheelDeltaX"in e&&"wheelDeltaY"in e)t.deltaX=-e.wheelDeltaX,t.deltaY=-e.wheelDeltaY;else if("wheelDelta"in e)t.deltaX=0,t.deltaY=-e.wheelDelta;else if("axis"in e)t.deltaX=1===e.axis?e.detail:0,t.deltaY=2===e.axis?e.detail:0;else if(e.targetTouches){var i=e.targetTouches[0];t.deltaX=lastTouchPosition.pageX-i.pageX,t.deltaY=lastTouchPosition.pageY-i.pageY}return t}var ironScrollManager={get currentLockingElement(){return currentLockingElement},elementIsScrollLocked:elementIsScrollLocked,pushScrollLock:pushScrollLock,removeScrollLock:removeScrollLock,_lockingElements:_lockingElements,get _lockedElementCache(){return _lockedElementCache},get _unlockedElementCache(){return _unlockedElementCache},_hasCachedLockedElement:_hasCachedLockedElement,_hasCachedUnlockedElement:_hasCachedUnlockedElement,_composedTreeContains:_composedTreeContains,_scrollInteractionHandler:_scrollInteractionHandler,get _boundScrollHandler(){return _boundScrollHandler},_lockScrollInteractions:_lockScrollInteractions,_unlockScrollInteractions:_unlockScrollInteractions,_shouldPreventScrolling:_shouldPreventScrolling,_getScrollableNodes:_getScrollableNodes,_getScrollingNode:_getScrollingNode,_getScrollInfo:_getScrollInfo};const IronOverlayBehaviorImpl={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:IronOverlayManager},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||dom(this).querySelector("[autofocus]")||this},get _focusableNodes(){return IronFocusablesHelper.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=dom(this).observeNodes(this._onNodesChange)},detached:function(){for(var e in dom(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[e]&&cancelAnimationFrame(this.__rafs[e]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(e){this.fire("iron-overlay-canceled",e,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(e){e?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._manager.deepActiveElement;(e===document.body||dom(this).deepContains(e))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(e){this.noCancelOnOutsideClick||this.cancel(e)},_onCaptureFocus:function(e){if(this.withBackdrop){var t=dom(e).path;-1===t.indexOf(this)?(e.stopPropagation(),this._applyFocus()):this._focusedChild=t[0]}},_onCaptureEsc:function(e){this.noCancelOnEscKey||this.cancel(e)},_onCaptureTab:function(e){if(this.withBackdrop){this.__ensureFirstLastFocusables();var t=e.shiftKey,i=t?this.__firstFocusableNode:this.__lastFocusableNode,n=t?this.__lastFocusableNode:this.__firstFocusableNode,o=!1;if(i===n)o=!0;else{var r=this._manager.deepActiveElement;o=r===i||r===this}o&&(e.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var e=this._focusableNodes;this.__firstFocusableNode=e[0],this.__lastFocusableNode=e[e.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(e,t){var i=this.__rafs;null!==i[e]&&cancelAnimationFrame(i[e]),i[e]=requestAnimationFrame(function(){i[e]=null,t.call(this)}.bind(this))},__updateScrollObservers:function(e,t,i){e&&t&&this.__isValidScrollAction(i)?("lock"===i&&(this.__saveScrollPosition(),pushScrollLock(this)),this.__addScrollListeners()):(removeScrollLock(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],useShadow)for(var e=this;e;)e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host&&this.__rootNodes.push(e),e=e.host||e.assignedSlot||e.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach(function(e){e.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach(function(e){e.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(e){return"lock"===e||"refit"===e||"cancel"===e},__onCaptureScroll:function(e){if(!(this.__isAnimating||0<=dom(e).path.indexOf(this)))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(e)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},IronOverlayBehavior=[IronFitBehavior,IronResizableBehavior,IronOverlayBehaviorImpl];var ironOverlayBehavior={IronOverlayBehaviorImpl:IronOverlayBehaviorImpl,IronOverlayBehavior:IronOverlayBehavior};const NeonAnimatableBehavior={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,t){for(var i in t)e[i]=t[i]},_cloneConfig:function(e){var t={isClone:!0};return this._copyProperties(t,e),t},_getAnimationConfigRecursive:function(e,t,i){var n;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(n=e?this.animationConfig[e]:this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var o,r=0;o=n[r];r++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||e,t,i);else if(o.id){var a=t[o.id];a?(a.isClone||(t[o.id]=this._cloneConfig(a),a=t[o.id]),this._copyProperties(a,o)):t[o.id]=o}else i.push(o)},getAnimationConfig:function(e){var t={},i=[];for(var n in this._getAnimationConfigRecursive(e,t,i),t)i.push(t[n]);return i}};var neonAnimatableBehavior={NeonAnimatableBehavior:NeonAnimatableBehavior};const NeonAnimationRunnerBehaviorImpl={_configureAnimations:function(e){var t=[],i=[];if(0<e.length)for(let t,n,o=0;t=e[o];o++)if((n=document.createElement(t.name)).isNeonAnimation){let e=null;n.configure||(n.configure=function(e){return null}),e=n.configure(t),i.push({result:e,config:t,neonAnimation:n})}else console.warn(this.is+":",t.name,"not found!");for(var n=0;n<i.length;n++){let e=i[n].result,o=i[n].config,r=i[n].neonAnimation;try{"function"!=typeof e.cancel&&(e=document.timeline.play(e))}catch(t){e=null,console.warn("Couldnt play","(",o.name,").",t)}e&&t.push({neonAnimation:r,config:o,animation:e})}return t},_shouldComplete:function(e){for(var t=!0,i=0;i<e.length;i++)if("finished"!=e[i].animation.playState){t=!1;break}return t},_complete:function(e){for(var t=0;t<e.length;t++)e[t].neonAnimation.complete(e[t].config);for(t=0;t<e.length;t++)e[t].animation.cancel()},playAnimation:function(e,t){var i=this.getAnimationConfig(e);if(i){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var n=this._configureAnimations(i);if(0!=n.length){this._active[e]=n;for(var o=0;o<n.length;o++)n[o].animation.onfinish=function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[e],this.fire("neon-animation-finish",t,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",t,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var t=this._active[e];for(var i in t)t[i].animation.cancel()}this._active={}}},NeonAnimationRunnerBehavior=[NeonAnimatableBehavior,NeonAnimationRunnerBehaviorImpl];var neonAnimationRunnerBehavior={NeonAnimationRunnerBehaviorImpl:NeonAnimationRunnerBehaviorImpl,NeonAnimationRunnerBehavior:NeonAnimationRunnerBehavior};Polymer({_template:html`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[IronControlState,IronA11yKeysBehavior,IronOverlayBehavior,NeonAnimationRunnerBehavior],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var e=dom(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),IronOverlayBehaviorImpl._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):IronOverlayBehaviorImpl._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):IronOverlayBehaviorImpl._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var e=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<t.length;i++)t[i].node=e;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(e){this._readied&&(e?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var e=this.focusTarget||this.containedElement;e&&this.opened&&!this.noAutoFocus?e.focus():IronOverlayBehaviorImpl._applyFocus.apply(this,arguments)}}),Polymer({_template:html`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&dom(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,dom(this.root).appendChild(this._img))}}),Polymer({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(e){return this.name+":"+e},this)},applyIcon:function(e,t){this.removeIcon(e);var i=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(i){var n=dom(e.root||e);return n.insertBefore(i,n.childNodes[0]),e._svgIcon=i}return null},removeIcon:function(e){e._svgIcon&&(dom(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var e=Object.create(null);return dom(this).querySelectorAll("[id]").forEach(function(t){e[t.id]=t}),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,i){if(e){var n=e.cloneNode(!0),o=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=n.getAttribute("viewBox")||"0 0 "+t+" "+t,a="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&n.hasAttribute("mirror-in-rtl")&&(a+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),o.setAttribute("viewBox",r),o.setAttribute("preserveAspectRatio","xMidYMid meet"),o.setAttribute("focusable","false"),o.style.cssText=a,o.appendChild(n).removeAttribute("id"),o}return null}}),Polymer({_template:html`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden\$="[[_computeImgDivHidden(sizing)]]" aria-hidden\$="[[_computeImgDivARIAHidden(alt)]]" aria-label\$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt\$="[[alt]]" hidden\$="[[_computeImgHidden(sizing)]]" crossorigin\$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden\$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class\$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(e,t){var i=this._resolveSrc(e);i!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===e||t?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=i,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var e=this.$.sizedImgDiv.style,t=this.$.placeholder.style;e.backgroundSize=t.backgroundSize=this.sizing,e.backgroundPosition=t.backgroundPosition=this.sizing?this.position:"",e.backgroundRepeat=t.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(e){var t=resolveUrl(e,this.$.baseURIAnchor.href);return"/"===t[0]&&(t=(location.origin||location.protocol+"//"+location.host)+t),t}});class IronSelection{constructor(e){this.selection=[],this.selectCallback=e}get(){return this.multi?this.selection.slice():this.selection[0]}clear(e){this.selection.slice().forEach(function(t){(!e||0>e.indexOf(t))&&this.setItemSelected(t,!1)},this)}isSelected(e){return 0<=this.selection.indexOf(e)}setItemSelected(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var i=this.selection.indexOf(e);0<=i&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(e,t)}}select(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))}toggle(e){this.setItemSelected(e,!this.isSelected(e))}}var ironSelection={IronSelection:IronSelection};const IronSelectableBehavior={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new IronSelection(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&dom(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;void 0!==this.selected&&(t=(+this._valueToIndex(this.selected)-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;void 0!==this.selected&&(e=(+this._valueToIndex(this.selected)+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=dom(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return null==e?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(!this.attrForSelected)return+e;for(var t,i=0;t=this.items[i];i++)if(this._valueForItem(t)==e)return i},_indexToValue:function(e){if(!this.attrForSelected)return e;var t=this.items[e];return t?this._valueForItem(t):void 0},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return-1===t?null:t}var i=e[dashToCamelCase(this.attrForSelected)];return void 0!=i?i:e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return dom(e).observeNodes(function(e){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})})},_activateHandler:function(e){for(var t=e.target,i=this.items;t&&t!=this;){var n=i.indexOf(t);if(0<=n){var o=this._indexToValue(n);return void this._itemActivate(o,t)}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}};var ironSelectable={IronSelectableBehavior:IronSelectableBehavior};const IronMultiSelectableBehaviorImpl={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(e){this.multi?this._toggleSelected(e):this.selected=e},multiChanged:function(e){this._selection.multi=e,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&0<this.selectedItems.length&&(this.selectedValues=this.selectedItems.map(function(e){return this._indexToValue(this.indexOf(e))},this).filter(function(e){return null!=e},this)):IronSelectableBehavior._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(e){e=e||[];var t=(this._valuesToItems(e)||[]).filter(function(e){return null!==e&&void 0!==e});this._selection.clear(t);for(var i=0;i<t.length;i++)this._selection.setItemSelected(t[i],!0);this.fallbackSelection&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))},_selectionChange:function(){var e=this._selection.get();this.multi?(this._setSelectedItems(e),this._setSelectedItem(e.length?e[0]:null)):null!==e&&void 0!==e?(this._setSelectedItems([e]),this._setSelectedItem(e)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(e){var t=this.selectedValues.indexOf(e);0>t?this.push("selectedValues",e):this.splice("selectedValues",t,1)},_valuesToItems:function(e){return null==e?null:e.map(function(e){return this._valueToItem(e)},this)}},IronMultiSelectableBehavior=[IronSelectableBehavior,IronMultiSelectableBehaviorImpl];var ironMultiSelectable={IronMultiSelectableBehaviorImpl:IronMultiSelectableBehaviorImpl,IronMultiSelectableBehavior:IronMultiSelectableBehavior};const IronMenuBehaviorImpl={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(e){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var t=this._valueToItem(e);t&&t.hasAttribute("disabled")||(this._setFocusedItem(t),IronMultiSelectableBehaviorImpl.select.apply(this,arguments))},_resetTabindices:function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach(function(t){t.setAttribute("tabindex",t===e?"0":"-1"),t.setAttribute("aria-selected",this._selection.isSelected(t))},this)},_updateMultiselectable:function(e){e?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(e){if(-1===this._MODIFIER_KEYS.indexOf(e.key)){this.cancelDebouncer("_clearSearchText");for(var t,i=this._searchText||"",n=(i+=(e.key&&1==e.key.length?e.key:String.fromCharCode(e.keyCode)).toLocaleLowerCase()).length,o=0;t=this.items[o];o++)if(!t.hasAttribute("disabled")){var r=this.attrForItemTitle||"textContent",a=(t[r]||t.getAttribute(r)||"").trim();if(!(a.length<n)&&a.slice(0,n).toLocaleLowerCase()==i){this._setFocusedItem(t);break}}this._searchText=i,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var e,t=this.items.length,i=+this.indexOf(this.focusedItem),n=1;n<t+1;n++)if(!(e=this.items[(i-n+t)%t]).hasAttribute("disabled")){var o=dom(e).getOwnerRoot()||document;if(this._setFocusedItem(e),dom(o).activeElement==e)return}},_focusNext:function(){for(var e,t=this.items.length,i=+this.indexOf(this.focusedItem),n=1;n<t+1;n++)if(!(e=this.items[(i+n)%t]).hasAttribute("disabled")){var o=dom(e).getOwnerRoot()||document;if(this._setFocusedItem(e),dom(o).activeElement==e)return}},_applySelection:function(e,t){t?e.setAttribute("aria-selected","true"):e.setAttribute("aria-selected","false"),IronSelectableBehavior._applySelection.apply(this,arguments)},_focusedItemChanged:function(e,t){t&&t.setAttribute("tabindex","-1"),!e||e.hasAttribute("disabled")||this.disabled||(e.setAttribute("tabindex","0"),e.focus())},_onIronItemsChanged:function(e){e.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");IronMenuBehaviorImpl._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",t),IronMenuBehaviorImpl._shiftTabPressed=!1},1)},_onFocus:function(e){if(!IronMenuBehaviorImpl._shiftTabPressed){var t=dom(e).rootTarget;(t===this||void 0===t.tabIndex||this.isLightDescendant(t))&&(this._defaultFocusAsync=this.async(function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),e?this._setFocusedItem(e):this.items[0]&&this._focusNext()}))}},_onUpKey:function(e){this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onEscKey:function(e){var t=this.focusedItem;t&&t.blur()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down esc")||this._focusWithKeyboardEvent(e),e.stopPropagation()},_activateHandler:function(e){IronSelectableBehavior._activateHandler.call(this,e),e.stopPropagation()},_disabledChanged:function(e){e?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)},_shiftTabPressed:!1},IronMenuBehavior=[IronMultiSelectableBehavior,IronA11yKeysBehavior,IronMenuBehaviorImpl];var ironMenuBehavior={IronMenuBehaviorImpl:IronMenuBehaviorImpl,IronMenuBehavior:IronMenuBehavior};const IronMenubarBehaviorImpl={hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(e){this.focusedItem.click(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this.focusedItem.click(),e.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(e){this._isRTL?this._focusNext():this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onRightKey:function(e){this._isRTL?this._focusPrevious():this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down left right esc")||this._focusWithKeyboardEvent(e)}},IronMenubarBehavior=[IronMenuBehavior,IronMenubarBehaviorImpl];var ironMenubarBehavior={IronMenubarBehaviorImpl:IronMenubarBehaviorImpl,IronMenubarBehavior:IronMenubarBehavior};const NeonAnimationBehavior={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(e){if(e.timing)for(var t in e.timing)this.animationTiming[t]=e.timing[t];return this.animationTiming},setPrefixedProperty:function(e,t,i){for(var n,o={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[t],r=0;n=o[r];r++)e.style[n]=i;e.style[t]=i},complete:function(e){}};var neonAnimationBehavior={NeonAnimationBehavior:NeonAnimationBehavior};Polymer({is:"fade-in-animation",behaviors:[NeonAnimationBehavior],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(e)),this._effect}}),Polymer({is:"fade-out-animation",behaviors:[NeonAnimationBehavior],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(e)),this._effect}});var Utility={distance:function(e,t,i,n){var o=e-i,r=t-n;return Math.sqrt(o*o+r*r)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function ElementMetrics(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function Ripple(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),dom(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}ElementMetrics.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var i=Utility.distance(e,t,0,0),n=Utility.distance(e,t,this.width,0),o=Utility.distance(e,t,0,this.height),r=Utility.distance(e,t,this.width,this.height);return Math.max(i,n,o,r)}},Ripple.MAX_RADIUS=300,Ripple.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=Utility.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?Utility.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,i=1.1*Math.min(Math.sqrt(e+t),Ripple.MAX_RADIUS)+5,n=1.1-i/Ripple.MAX_RADIUS*.2,o=this.mouseInteractionSeconds/n,r=i*(1-Math.pow(80,-o));return Math.abs(r)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return.01>this.opacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new ElementMetrics(this.element)},draw:function(){var e,t,i;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Utility.now(),this.center?(this.xStart=t,this.yStart=i,this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=i,this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=Utility.now())},remove:function(){dom(this.waveContainer.parentNode).removeChild(this.waveContainer)}},Polymer({_template:html`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==this.parentNode.nodeType?this.keyEventTarget=dom(this).getOwnerRoot().host:this.keyEventTarget=this.parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&0<this.ripples.length||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach(function(t){t.upAction(e)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var e=new Ripple(this);return dom(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);0>t||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}});const PaperRippleBehavior={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){IronButtonStateImpl._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&dom(t).appendChild(this._ripple),e){var i=dom(this._rippleContainer||this),n=dom(e).rootTarget;i.deepContains(n)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}};var paperRippleBehavior={PaperRippleBehavior:PaperRippleBehavior};const PaperButtonBehaviorImpl={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){IronButtonStateImpl._spaceKeyDownHandler.call(this,e),this.hasRipple()&&1>this.getRipple().ripples.length&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){IronButtonStateImpl._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},PaperButtonBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperButtonBehaviorImpl];var paperButtonBehavior={PaperButtonBehaviorImpl:PaperButtonBehaviorImpl,PaperButtonBehavior:PaperButtonBehavior};const PaperInkyFocusBehaviorImpl={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=e)},_createRipple:function(){var e=PaperRippleBehavior._createRipple();return e.id="ink",e.setAttribute("center",""),e.classList.add("circle"),e}},PaperInkyFocusBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperInkyFocusBehaviorImpl];var paperInkyFocusBehavior={PaperInkyFocusBehaviorImpl:PaperInkyFocusBehaviorImpl,PaperInkyFocusBehavior:PaperInkyFocusBehavior};const PaperCheckedElementBehaviorImpl={_checkedChanged:function(){IronCheckedElementBehaviorImpl._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){PaperRippleBehavior._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},PaperCheckedElementBehavior=[PaperInkyFocusBehavior,IronCheckedElementBehavior,PaperCheckedElementBehaviorImpl];var paperCheckedElementBehavior={PaperCheckedElementBehaviorImpl:PaperCheckedElementBehaviorImpl,PaperCheckedElementBehavior:PaperCheckedElementBehavior};const template$1=html`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;template$1.setAttribute("style","display: none;"),document.head.appendChild(template$1.content);const template$2=html`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;template$2.setAttribute("style","display: none;"),document.head.appendChild(template$2.content);const template$3=html`
  <style include="paper-material-styles">
    /* Need to specify the same specificity as the styles imported from paper-material. */
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;

      @apply --paper-font-common-base;
      @apply --paper-button;
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }

    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;

      @apply --paper-button-disabled;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }


    :host([animated]) {
      @apply --shadow-transition;
    }

    paper-ripple {
      color: var(--paper-button-ink-color);
    }
  </style>

  <slot></slot>`;template$3.setAttribute("strip-whitespace",""),Polymer({_template:template$3,is:"paper-button",behaviors:[PaperButtonBehavior],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?PaperButtonBehaviorImpl._calculateElevation.apply(this):this._setElevation(0)}});const PaperDialogBehaviorImpl={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t,i=dom(e).path,n=0,o=i.indexOf(this);n<o;n++)if((t=i[n]).hasAttribute&&(t.hasAttribute("dialog-dismiss")||t.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(t.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}},PaperDialogBehavior=[IronOverlayBehavior,PaperDialogBehaviorImpl];var paperDialogBehavior={PaperDialogBehaviorImpl:PaperDialogBehaviorImpl,PaperDialogBehavior:PaperDialogBehavior};const template$4=html`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;template$4.setAttribute("style","display: none;"),document.head.appendChild(template$4.content);const template$5=html`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;template$5.setAttribute("style","display: none;"),document.head.appendChild(template$5.content);const template$6=html`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;template$6.setAttribute("style","display: none;"),document.head.appendChild(template$6.content);const $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;"),$_documentContainer.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild($_documentContainer.content),Polymer({_template:html`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",0<this.scrollTarget.scrollTop),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&0<=this.dialogElement.behaviors.indexOf(PaperDialogBehaviorImpl)?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}}),Polymer({_template:html`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[PaperDialogBehavior,NeonAnimationRunnerBehavior],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}});const template$7=html`
  <style include="paper-material-styles">
    :host {
      @apply --layout-vertical;
      @apply --layout-center-center;

      background: var(--paper-fab-background, var(--accent-color));
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--text-primary-color);
      cursor: pointer;
      height: 56px;
      min-width: 0;
      outline: none;
      padding: 16px;
      position: relative;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      width: 56px;
      z-index: 0;

      /* NOTE: Both values are needed, since some phones require the value \`transparent\`. */
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;

      @apply --paper-fab;
    }

    [hidden] {
      display: none !important;
    }

    :host([mini]) {
      width: 40px;
      height: 40px;
      padding: 8px;

      @apply --paper-fab-mini;
    }

    :host([disabled]) {
      color: var(--paper-fab-disabled-text, var(--paper-grey-500));
      background: var(--paper-fab-disabled-background, var(--paper-grey-300));

      @apply --paper-fab-disabled;
    }

    iron-icon {
      @apply --paper-fab-iron-icon;
    }

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;

      @apply --paper-fab-label;
    }

    :host(.keyboard-focus) {
      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }
  </style>

  <iron-icon id="icon" hidden\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>
  <span hidden\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>
`;template$7.setAttribute("strip-whitespace",""),Polymer({_template:template$7,is:"paper-fab",behaviors:[PaperButtonBehavior],properties:{src:{type:String,value:""},icon:{type:String,value:""},mini:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function(e,t){return 0<e.length||0<t.length}}),Polymer({is:"paper-icon-button",_template:html`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[PaperInkyFocusBehavior],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(e,t){var i=this.getAttribute("aria-label");i&&t!=i||this.setAttribute("aria-label",e)}});const $_documentContainer$1=document.createElement("template");$_documentContainer$1.setAttribute("style","display: none;"),$_documentContainer$1.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild($_documentContainer$1.content);const PaperItemBehaviorImpl={hostAttributes:{role:"option",tabindex:"0"}},PaperItemBehavior=[IronButtonState,IronControlState,PaperItemBehaviorImpl];var paperItemBehavior={PaperItemBehaviorImpl:PaperItemBehaviorImpl,PaperItemBehavior:PaperItemBehavior};Polymer({_template:html`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[PaperItemBehavior]}),Polymer({_template:html`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"}),Polymer({_template:html`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[PaperItemBehavior]}),Polymer({_template:html`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[IronMenuBehavior],hostAttributes:{role:"listbox"}});const template$8=html`
<dom-module id="paper-material-shared-styles">
  <template>
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host([elevation="1"]) {
        @apply --shadow-elevation-2dp;
      }

      :host([elevation="2"]) {
        @apply --shadow-elevation-4dp;
      }

      :host([elevation="3"]) {
        @apply --shadow-elevation-6dp;
      }

      :host([elevation="4"]) {
        @apply --shadow-elevation-8dp;
      }

      :host([elevation="5"]) {
        @apply --shadow-elevation-16dp;
      }
    </style>
  </template>
</dom-module>
`;template$8.setAttribute("style","display: none;"),document.body.appendChild(template$8.content),Polymer({_template:html`
    <style include="paper-material-shared-styles"></style>
    <style>
      :host([animated]) {
        @apply --shadow-transition;
      }
      :host {
        @apply --paper-material;
      }
    </style>

    <slot></slot>
`,is:"paper-material",properties:{elevation:{type:Number,reflectToAttribute:!0,value:1},animated:{type:Boolean,reflectToAttribute:!0,value:!1}}}),Polymer({is:"paper-menu-grow-height-animation",behaviors:[NeonAnimationBehavior],configure:function(e){var t=e.node,i=t.getBoundingClientRect().height;return this._effect=new KeyframeEffect(t,[{height:i/2+"px"},{height:i+"px"}],this.timingFromConfig(e)),this._effect}}),Polymer({is:"paper-menu-grow-width-animation",behaviors:[NeonAnimationBehavior],configure:function(e){var t=e.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i/2+"px"},{width:i+"px"}],this.timingFromConfig(e)),this._effect}}),Polymer({is:"paper-menu-shrink-width-animation",behaviors:[NeonAnimationBehavior],configure:function(e){var t=e.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i+"px"},{width:i-i/20+"px"}],this.timingFromConfig(e)),this._effect}}),Polymer({is:"paper-menu-shrink-height-animation",behaviors:[NeonAnimationBehavior],configure:function(e){var t=e.node,i=t.getBoundingClientRect().height;return this.setPrefixedProperty(t,"transformOrigin","0 0"),this._effect=new KeyframeEffect(t,[{height:i+"px",transform:"translateY(0)"},{height:i/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(e)),this._effect}});var config={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const PaperMenuButton=Polymer({_template:html`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[IronA11yKeysBehavior,IronControlState],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:config.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:config.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:config.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var e=dom(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(e){this.ignoreSelect||this.close()},_onIronActivate:function(e){this.closeOnActivate&&this.close()},_openedChanged:function(e,t){e?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=t&&this.fire("paper-dropdown-close")},_disabledChanged:function(e){IronControlState._disabledChanged.apply(this,arguments),e&&this.opened&&this.close()},__onIronOverlayCanceled:function(e){var t=e.detail,i=this.$.trigger;-1<dom(t).path.indexOf(i)&&e.preventDefault()}});Object.keys(config).forEach(function(e){PaperMenuButton[e]=config[e]});var paperMenuButton={PaperMenuButton:PaperMenuButton};const PaperSpinnerBehavior={properties:{active:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:!1}},__computeContainerClasses:function(e,t){return[e||t?"active":"",t?"cooldown":""].join(" ")},__activeChanged:function(e,t){this.__setAriaHidden(!e),this.__coolingDown=!e&&t},__altChanged:function(e){"loading"===e?this.alt=this.getAttribute("aria-label")||e:(this.__setAriaHidden(""===e),this.setAttribute("aria-label",e))},__setAriaHidden:function(e){e?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")},__reset:function(){this.active=!1,this.__coolingDown=!1}};var paperSpinnerBehavior={PaperSpinnerBehavior:PaperSpinnerBehavior};const $_documentContainer$2=document.createElement("template");$_documentContainer$2.setAttribute("style","display: none;"),$_documentContainer$2.innerHTML="<dom-module id=\"paper-spinner-styles\">\n  <template>\n    <style>\n      /*\n      /**************************/\n      /* STYLES FOR THE SPINNER */\n      /**************************/\n\n      /*\n       * Constants:\n       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\n       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\n       *      ARCSTARTROT = 216 degrees (how much the start location of the arc\n       *                                should rotate each time, 216 gives us a\n       *                                5 pointed star shape (it's 360/5 * 3).\n       *                                For a 7 pointed star, we might do\n       *                                360/7 * 3 = 154.286)\n       *      SHRINK_TIME = 400ms\n       */\n\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 28px;\n        height: 28px;\n\n        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n        --paper-spinner-container-rotation-duration: 1568ms;\n\n        /* ARCTIME */\n        --paper-spinner-expand-contract-duration: 1333ms;\n\n        /* 4 * ARCTIME */\n        --paper-spinner-full-cycle-duration: 5332ms;\n\n        /* SHRINK_TIME */\n        --paper-spinner-cooldown-duration: 400ms;\n      }\n\n      #spinnerContainer {\n        width: 100%;\n        height: 100%;\n\n        /* The spinner does not have any contents that would have to be\n         * flipped if the direction changes. Always use ltr so that the\n         * style works out correctly in both cases. */\n        direction: ltr;\n      }\n\n      #spinnerContainer.active {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n      }\n\n      @-webkit-keyframes container-rotate {\n        to { -webkit-transform: rotate(360deg) }\n      }\n\n      @keyframes container-rotate {\n        to { transform: rotate(360deg) }\n      }\n\n      .spinner-layer {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        white-space: nowrap;\n        color: var(--paper-spinner-color, var(--google-blue-500));\n      }\n\n      .layer-1 {\n        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));\n      }\n\n      .layer-2 {\n        color: var(--paper-spinner-layer-2-color, var(--google-red-500));\n      }\n\n      .layer-3 {\n        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));\n      }\n\n      .layer-4 {\n        color: var(--paper-spinner-layer-4-color, var(--google-green-500));\n      }\n\n      /**\n       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\n       *\n       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\n       * guarantee that the animation will start _exactly_ after that value. So we avoid using\n       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it\n       * seems).\n       */\n      .active .spinner-layer {\n        -webkit-animation-name: fill-unfill-rotate;\n        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-name: fill-unfill-rotate;\n        animation-duration: var(--paper-spinner-full-cycle-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n        opacity: 1;\n      }\n\n      .active .spinner-layer.layer-1 {\n        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-2 {\n        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-3 {\n        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-4 {\n        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n      }\n\n      @-webkit-keyframes fill-unfill-rotate {\n        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @keyframes fill-unfill-rotate {\n        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @-webkit-keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @-webkit-keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      .circle-clipper {\n        display: inline-block;\n        position: relative;\n        width: 50%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      /**\n       * Patch the gap that appear between the two adjacent div.circle-clipper while the\n       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).\n       */\n      .spinner-layer::after {\n        content: '';\n        left: 45%;\n        width: 10%;\n        border-top-style: solid;\n      }\n\n      .spinner-layer::after,\n      .circle-clipper .circle {\n        box-sizing: border-box;\n        position: absolute;\n        top: 0;\n        border-width: var(--paper-spinner-stroke-width, 3px);\n        border-radius: 50%;\n      }\n\n      .circle-clipper .circle {\n        bottom: 0;\n        width: 200%;\n        border-style: solid;\n        border-bottom-color: transparent !important;\n      }\n\n      .circle-clipper.left .circle {\n        left: 0;\n        border-right-color: transparent !important;\n        -webkit-transform: rotate(129deg);\n        transform: rotate(129deg);\n      }\n\n      .circle-clipper.right .circle {\n        left: -100%;\n        border-left-color: transparent !important;\n        -webkit-transform: rotate(-129deg);\n        transform: rotate(-129deg);\n      }\n\n      .active .gap-patch::after,\n      .active .circle-clipper .circle {\n        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-duration: var(--paper-spinner-expand-contract-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n      }\n\n      .active .circle-clipper.left .circle {\n        -webkit-animation-name: left-spin;\n        animation-name: left-spin;\n      }\n\n      .active .circle-clipper.right .circle {\n        -webkit-animation-name: right-spin;\n        animation-name: right-spin;\n      }\n\n      @-webkit-keyframes left-spin {\n        0% { -webkit-transform: rotate(130deg) }\n        50% { -webkit-transform: rotate(-5deg) }\n        to { -webkit-transform: rotate(130deg) }\n      }\n\n      @keyframes left-spin {\n        0% { transform: rotate(130deg) }\n        50% { transform: rotate(-5deg) }\n        to { transform: rotate(130deg) }\n      }\n\n      @-webkit-keyframes right-spin {\n        0% { -webkit-transform: rotate(-130deg) }\n        50% { -webkit-transform: rotate(5deg) }\n        to { -webkit-transform: rotate(-130deg) }\n      }\n\n      @keyframes right-spin {\n        0% { transform: rotate(-130deg) }\n        50% { transform: rotate(5deg) }\n        to { transform: rotate(-130deg) }\n      }\n\n      #spinnerContainer.cooldown {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      @-webkit-keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild($_documentContainer$2.content);const template$9=html`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;template$9.setAttribute("strip-whitespace",""),Polymer({_template:template$9,is:"paper-spinner",behaviors:[PaperSpinnerBehavior]}),Polymer({_template:html`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-flex-auto;

        position: relative;
        padding: 0 12px;
        overflow: hidden;
        cursor: pointer;
        vertical-align: middle;

        @apply --paper-font-common-base;
        @apply --paper-tab;
      }

      :host(:focus) {
        outline: none;
      }

      :host([link]) {
        padding: 0;
      }

      .tab-content {
        height: 100%;
        transform: translateZ(0);
          -webkit-transform: translateZ(0);
        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);
        @apply --layout-horizontal;
        @apply --layout-center-center;
        @apply --layout-flex-auto;
        @apply --paper-tab-content;
      }

      :host(:not(.iron-selected)) > .tab-content {
        opacity: 0.8;

        @apply --paper-tab-content-unselected;
      }

      :host(:focus) .tab-content {
        opacity: 1;
        font-weight: 700;
      }

      paper-ripple {
        color: var(--paper-tab-ink, var(--paper-yellow-a100));
      }

      .tab-content > ::slotted(a) {
        @apply --layout-flex-auto;

        height: 100%;
      }
    </style>

    <div class="tab-content">
      <slot></slot>
    </div>
`,is:"paper-tab",behaviors:[IronControlState,IronButtonState,PaperRippleBehavior],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var e=dom(this).parentNode;return!!e&&!!e.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(e){if(this.link){var t=this.queryEffectiveChildren("a");if(!t)return;if(e.target===t)return;t.click()}}});const template$a=html`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;function setupDragHandler_(){this.draggable?this.dragHandler_=google.maps.event.addListener(this.marker,"dragend",onDragEnd_.bind(this)):(google.maps.event.removeListener(this.dragHandler_),this.dragHandler_=null)}function onDragEnd_(e,t,i){this.latitude=e.latLng.lat(),this.longitude=e.latLng.lng()}document.head.appendChild(template$a.content),Polymer({_template:html`
    <style>
      :host {
        @apply --layout;
        @apply --layout-center;

        height: 48px;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        @apply --paper-tabs;
      }

      :host(:dir(rtl)) {
        @apply --layout-horizontal-reverse;
      }

      #tabsContainer {
        position: relative;
        height: 100%;
        white-space: nowrap;
        overflow: hidden;
        @apply --layout-flex-auto;
        @apply --paper-tabs-container;
      }

      #tabsContent {
        height: 100%;
        -moz-flex-basis: auto;
        -ms-flex-basis: auto;
        flex-basis: auto;
        @apply --paper-tabs-content;
      }

      #tabsContent.scrollable {
        position: absolute;
        white-space: nowrap;
      }

      #tabsContent:not(.scrollable),
      #tabsContent.scrollable.fit-container {
        @apply --layout-horizontal;
      }

      #tabsContent.scrollable.fit-container {
        min-width: 100%;
      }

      #tabsContent.scrollable.fit-container > ::slotted(*) {
        /* IE - prevent tabs from compressing when they should scroll. */
        -ms-flex: 1 0 auto;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
      }

      .hidden {
        display: none;
      }

      .not-visible {
        opacity: 0;
        cursor: default;
      }

      paper-icon-button {
        width: 48px;
        height: 48px;
        padding: 12px;
        margin: 0 4px;
      }

      #selectionBar {
        position: absolute;
        height: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));
          -webkit-transform: scale(0);
        transform: scale(0);
          -webkit-transform-origin: left center;
        transform-origin: left center;
          transition: -webkit-transform;
        transition: transform;

        @apply --paper-tabs-selection-bar;
      }

      #selectionBar.align-bottom {
        top: 0;
        bottom: auto;
      }

      #selectionBar.expand {
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
      }

      #selectionBar.contract {
        transition-duration: 0.18s;
        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
      }

      #tabsContent > ::slotted(:not(#selectionBar)) {
        height: 100%;
      }
    </style>

    <paper-icon-button icon="paper-tabs:chevron-left" class\$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>

    <div id="tabsContainer" on-track="_scroll" on-down="_down">
      <div id="tabsContent" class\$="[[_computeTabsContentClass(scrollable, fitContainer)]]">
        <div id="selectionBar" class\$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>
        <slot></slot>
      </div>
    </div>

    <paper-icon-button icon="paper-tabs:chevron-right" class\$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>
`,is:"paper-tabs",behaviors:[IronResizableBehavior,IronMenubarBehavior],properties:{noink:{type:Boolean,value:!1,observer:"_noinkChanged"},noBar:{type:Boolean,value:!1},noSlide:{type:Boolean,value:!1},scrollable:{type:Boolean,value:!1},fitContainer:{type:Boolean,value:!1},disableDrag:{type:Boolean,value:!1},hideScrollButtons:{type:Boolean,value:!1},alignBottom:{type:Boolean,value:!1},selectable:{type:String,value:"paper-tab"},autoselect:{type:Boolean,value:!1},autoselectDelay:{type:Number,value:0},_step:{type:Number,value:10},_holdDelay:{type:Number,value:1},_leftHidden:{type:Boolean,value:!1},_rightHidden:{type:Boolean,value:!1},_previousTab:{type:Object}},hostAttributes:{role:"tablist"},listeners:{"iron-resize":"_onTabSizingChanged","iron-items-changed":"_onTabSizingChanged","iron-select":"_onIronSelect","iron-deselect":"_onIronDeselect"},keyBindings:{"left:keyup right:keyup":"_onArrowKeyup"},created:function(){this._holdJob=null,this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,this._bindDelayedActivationHandler=this._delayedActivationHandler.bind(this),this.addEventListener("blur",this._onBlurCapture.bind(this),!0)},ready:function(){this.setScrollDirection("y",this.$.tabsContainer)},detached:function(){this._cancelPendingActivation()},_noinkChanged:function(e){dom(this).querySelectorAll("paper-tab").forEach(e?this._setNoinkAttribute:this._removeNoinkAttribute)},_setNoinkAttribute:function(e){e.setAttribute("noink","")},_removeNoinkAttribute:function(e){e.removeAttribute("noink")},_computeScrollButtonClass:function(e,t,i){return!t||i?"hidden":e?"not-visible":""},_computeTabsContentClass:function(e,t){return e?"scrollable"+(t?" fit-container":""):" fit-container"},_computeSelectionBarClass:function(e,t){return e?"hidden":t?"align-bottom":""},_onTabSizingChanged:function(){this.debounce("_onTabSizingChanged",function(){this._scroll(),this._tabChanged(this.selectedItem)},10)},_onIronSelect:function(e){this._tabChanged(e.detail.item,this._previousTab),this._previousTab=e.detail.item,this.cancelDebouncer("tab-changed")},_onIronDeselect:function(e){this.debounce("tab-changed",function(){this._tabChanged(null,this._previousTab),this._previousTab=null},1)},_activateHandler:function(){this._cancelPendingActivation(),IronMenuBehaviorImpl._activateHandler.apply(this,arguments)},_scheduleActivation:function(e,t){this._pendingActivationItem=e,this._pendingActivationTimeout=this.async(this._bindDelayedActivationHandler,t)},_delayedActivationHandler:function(){var e=this._pendingActivationItem;this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,e.fire(this.activateEvent,null,{bubbles:!0,cancelable:!0})},_cancelPendingActivation:function(){void 0!==this._pendingActivationTimeout&&(this.cancelAsync(this._pendingActivationTimeout),this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0)},_onArrowKeyup:function(e){this.autoselect&&this._scheduleActivation(this.focusedItem,this.autoselectDelay)},_onBlurCapture:function(e){e.target===this._pendingActivationItem&&this._cancelPendingActivation()},get _tabContainerScrollSize(){return Math.max(0,this.$.tabsContainer.scrollWidth-this.$.tabsContainer.offsetWidth)},_scroll:function(e,t){if(this.scrollable){var i=t&&-t.ddx||0;this._affectScroll(i)}},_down:function(e){this.async(function(){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null)},1)},_affectScroll:function(e){this.$.tabsContainer.scrollLeft+=e;var t=this.$.tabsContainer.scrollLeft;this._leftHidden=0===t,this._rightHidden=t===this._tabContainerScrollSize},_onLeftScrollButtonDown:function(){this._scrollToLeft(),this._holdJob=setInterval(this._scrollToLeft.bind(this),this._holdDelay)},_onRightScrollButtonDown:function(){this._scrollToRight(),this._holdJob=setInterval(this._scrollToRight.bind(this),this._holdDelay)},_onScrollButtonUp:function(){clearInterval(this._holdJob),this._holdJob=null},_scrollToLeft:function(){this._affectScroll(-this._step)},_scrollToRight:function(){this._affectScroll(this._step)},_tabChanged:function(e,t){if(!e)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(0,0);var i=this.$.tabsContent.getBoundingClientRect(),n=i.width,o=e.getBoundingClientRect(),r=o.left-i.left;if(this._pos={width:this._calcPercent(o.width,n),left:this._calcPercent(r,n)},this.noSlide||null==t)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(this._pos.width,this._pos.left);var a=t.getBoundingClientRect(),s=this.items.indexOf(t),l=this.items.indexOf(e);this.$.selectionBar.classList.add("expand");var c=s<l;this._isRTL&&(c=!c),c?this._positionBar(this._calcPercent(o.left+o.width-a.left,n)-5,this._left):this._positionBar(this._calcPercent(a.left+a.width-o.left,n)-5,this._calcPercent(r,n)+5),this.scrollable&&this._scrollToSelectedIfNeeded(o.width,r)},_scrollToSelectedIfNeeded:function(e,t){var i=t-this.$.tabsContainer.scrollLeft;0>i?this.$.tabsContainer.scrollLeft+=i:0<(i+=e-this.$.tabsContainer.offsetWidth)&&(this.$.tabsContainer.scrollLeft+=i)},_calcPercent:function(e,t){return 100*e/t},_positionBar:function(e,t){e=e||0,t=t||0,this._width=e,this._left=t,this.transform("translateX("+t+"%) scaleX("+e/100+")",this.$.selectionBar)},_onBarTransitionEnd:function(e){var t=this.$.selectionBar.classList;t.contains("expand")?(t.remove("expand"),t.add("contract"),this._positionBar(this._pos.width,this._pos.left)):t.contains("contract")&&t.remove("contract")}}),Polymer({_template:html`
    <style>
      :host {
        display: none;
      }
    </style>

    <slot></slot>
`,is:"google-map-marker",properties:{marker:{type:Object,notify:!0},map:{type:Object,observer:"_mapChanged"},info:{type:Object,value:null},clickEvents:{type:Boolean,value:!1,observer:"_clickEventsChanged"},dragEvents:{type:Boolean,value:!1,observer:"_dragEventsChanged"},icon:{type:Object,value:null,observer:"_iconChanged"},mouseEvents:{type:Boolean,value:!1,observer:"_mouseEventsChanged"},zIndex:{type:Number,value:0,observer:"_zIndexChanged"},longitude:{type:Number,value:null,notify:!0},latitude:{type:Number,value:null,notify:!0},label:{type:String,value:null,observer:"_labelChanged"},animation:{type:String,value:null,observer:"_animationChanged"},open:{type:Boolean,value:!1,observer:"_openChanged"}},observers:["_updatePosition(latitude, longitude)"],detached(){this.marker&&(google.maps.event.clearInstanceListeners(this.marker),this._listeners={},this.marker.setMap(null)),this._contentObserver&&this._contentObserver.disconnect()},attached(){this.marker&&this.marker.setMap(this.map)},_updatePosition(){this.marker&&null!=this.latitude&&null!=this.longitude&&this.marker.setPosition(new google.maps.LatLng(parseFloat(this.latitude),parseFloat(this.longitude)))},_clickEventsChanged(){this.map&&(this.clickEvents?(this._forwardEvent("click"),this._forwardEvent("dblclick"),this._forwardEvent("rightclick")):(this._clearListener("click"),this._clearListener("dblclick"),this._clearListener("rightclick")))},_dragEventsChanged(){this.map&&(this.dragEvents?(this._forwardEvent("drag"),this._forwardEvent("dragend"),this._forwardEvent("dragstart")):(this._clearListener("drag"),this._clearListener("dragend"),this._clearListener("dragstart")))},_mouseEventsChanged(){this.map&&(this.mouseEvents?(this._forwardEvent("mousedown"),this._forwardEvent("mousemove"),this._forwardEvent("mouseout"),this._forwardEvent("mouseover"),this._forwardEvent("mouseup")):(this._clearListener("mousedown"),this._clearListener("mousemove"),this._clearListener("mouseout"),this._clearListener("mouseover"),this._clearListener("mouseup")))},_animationChanged(){this.marker&&this.marker.setAnimation(google.maps.Animation[this.animation])},_labelChanged(){this.marker&&this.marker.setLabel(this.label)},_iconChanged(){this.marker&&this.marker.setIcon(this.icon)},_zIndexChanged(){this.marker&&this.marker.setZIndex(this.zIndex)},_mapChanged(){this.marker&&(this.marker.setMap(null),google.maps.event.clearInstanceListeners(this.marker)),this.map&&this.map instanceof google.maps.Map&&this._mapReady()},_contentChanged(){this._contentObserver&&this._contentObserver.disconnect(),this._contentObserver=new MutationObserver(this._contentChanged.bind(this)),this._contentObserver.observe(this,{childList:!0,subtree:!0});const e=this.innerHTML.trim();e?(this.info||(this.info=new google.maps.InfoWindow,this.openInfoHandler_=google.maps.event.addListener(this.marker,"click",()=>{this.open=!0}),this.closeInfoHandler_=google.maps.event.addListener(this.info,"closeclick",()=>{this.open=!1})),this.info.setContent(e)):this.info&&(google.maps.event.removeListener(this.openInfoHandler_),google.maps.event.removeListener(this.closeInfoHandler_),this.info=null)},_openChanged(){this.info&&(this.open?(this.info.open(this.map,this.marker),this.fire("google-map-marker-open")):(this.info.close(),this.fire("google-map-marker-close")))},_mapReady(){this._listeners={},this.marker=new google.maps.Marker({map:this.map,position:{lat:parseFloat(this.latitude),lng:parseFloat(this.longitude)},title:this.title,animation:google.maps.Animation[this.animation],draggable:this.draggable,visible:!this.hidden,icon:this.icon,label:this.label,zIndex:this.zIndex}),this._contentChanged(),this._clickEventsChanged(),this._dragEventsChanged(),this._mouseEventsChanged(),this._openChanged(),setupDragHandler_.bind(this)()},_clearListener(e){this._listeners[e]&&(google.maps.event.removeListener(this._listeners[e]),this._listeners[e]=null)},_forwardEvent(e){this._listeners[e]=google.maps.event.addListener(this.marker,e,t=>{this.fire(`google-map-marker-${e}`,t)})},attributeChanged(e){if(this.marker)switch(e){case"hidden":this.marker.setVisible(!this.hidden);break;case"draggable":this.marker.setDraggable(this.draggable),setupDragHandler_.bind(this)();break;case"title":this.marker.setTitle(this.title)}}}),Polymer({_template:html`
    <style>
      :host {
        position: relative;
        display: block;
        height: 100%;
      }

      #map {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      #map {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .gm-control-active > img {
        box-sizing: content-box;
        display: none;
        left: 50%;
        pointer-events: none;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
      }

      .gm-control-active > img:nth-child(1) {
        display:block;
      }

      .gm-control-active:hover > img:nth-child(1),
      .gm-control-active:active > img:nth-child(1) {
          display:none;
      }

      .gm-control-active:hover > img:nth-child(2),
      .gm-control-active:active > img:nth-child(3) {
          display:block;
      }
    </style>

    <google-maps-api id="api" api-key="[[apiKey]]" client-id="[[clientId]]" version="[[version]]" signed-in="[[signedIn]]" language="[[language]]" on-api-load="_mapApiLoaded" maps-url="[[mapsUrl]]">
    </google-maps-api>

    <div id="map"></div>

    <iron-selector id="selector" multi="[[!singleInfoWindow]]" selected-attribute="open" activate-event="google-map-marker-open" on-google-map-marker-close="_deselectMarker">
      <slot id="markers" name="markers"></slot>
    </iron-selector>

    <slot id="objects"></slot>
`,is:"google-map",properties:{apiKey:String,mapsUrl:{type:String},clientId:String,latitude:{type:Number,value:37.77493,notify:!0,reflectToAttribute:!0},map:{type:Object,notify:!0,value:null},longitude:{type:Number,value:-122.41942,notify:!0,reflectToAttribute:!0},kml:{type:String,value:null,observer:"_loadKml"},zoom:{type:Number,value:10,observer:"_zoomChanged",notify:!0},noAutoTilt:{type:Boolean,value:!1},mapType:{type:String,value:"roadmap",observer:"_mapTypeChanged",notify:!0},version:{type:String,value:"3.exp"},disableDefaultUi:{type:Boolean,value:!1,observer:"_disableDefaultUiChanged"},disableMapTypeControl:{type:Boolean,value:!1,observer:"_disableMapTypeControlChanged"},disableStreetViewControl:{type:Boolean,value:!1,observer:"_disableStreetViewControlChanged"},fitToMarkers:{type:Boolean,value:!1,observer:"_fitToMarkersChanged"},disableZoom:{type:Boolean,value:!1,observer:"_disableZoomChanged"},styles:{type:Object,value:()=>({})},maxZoom:{type:Number,observer:"_maxZoomChanged"},minZoom:{type:Number,observer:"_minZoomChanged"},signedIn:{type:Boolean,value:!1},language:{type:String},clickEvents:{type:Boolean,value:!1,observer:"_clickEventsChanged"},boundEvents:{type:Boolean,value:!0,observer:"_boundEventsChanged"},dragEvents:{type:Boolean,value:!1,observer:"_dragEventsChanged"},mouseEvents:{type:Boolean,value:!1,observer:"_mouseEventsChanged"},additionalMapOptions:{type:Object,value:()=>({})},markers:{type:Array,value:()=>[],readOnly:!0},objects:{type:Array,value:()=>[],readOnly:!0},singleInfoWindow:{type:Boolean,value:!1}},listeners:{"iron-resize":"resize"},observers:["_debounceUpdateCenter(latitude, longitude)"],attached(){this._initGMap()},detached(){this._markersChildrenListener&&(this.unlisten(this.$.selector,"items-changed","_updateMarkers"),this._markersChildrenListener=null),this._objectsMutationObserver&&(this._objectsMutationObserver.disconnect(),this._objectsMutationObserver=null)},behaviors:[IronResizableBehavior],_initGMap(){this.map||!0===this.$.api.libraryLoaded&&this.isAttached&&(this.map=new google.maps.Map(this.$.map,this._getMapOptions()),this._listeners={},this._updateCenter(),this._loadKml(),this._updateMarkers(),this._updateObjects(),this._addMapListeners(),this.fire("google-map-ready"))},_mapApiLoaded(){this._initGMap()},_getMapOptions(){const e={zoom:this.zoom,tilt:this.noAutoTilt?0:45,mapTypeId:this.mapType,disableDefaultUI:this.disableDefaultUi,mapTypeControl:!this.disableDefaultUi&&!this.disableMapTypeControl,streetViewControl:!this.disableDefaultUi&&!this.disableStreetViewControl,disableDoubleClickZoom:this.disableZoom,scrollwheel:!this.disableZoom,styles:this.styles,maxZoom:+this.maxZoom,minZoom:+this.minZoom};null!=this.getAttribute("draggable")&&(e.draggable=this.draggable);for(const t in this.additionalMapOptions)e[t]=this.additionalMapOptions[t];return e},_attachChildrenToMap(e){if(this.map)for(var t,i=0;t=e[i];++i)t.map=this.map},_observeMarkers(){this._markersChildrenListener||(this._markersChildrenListener=this.listen(this.$.selector,"items-changed","_updateMarkers"))},_updateMarkers(){const e=Array.prototype.slice.call(this.$.markers.assignedNodes({flatten:!0}));if(e.length===this.markers.length){if(0===e.filter(e=>this.markers&&-1===this.markers.indexOf(e)).length)return void(this._markersChildrenListener||this._observeMarkers())}this._observeMarkers(),this.markers=this._setMarkers(e),this._attachChildrenToMap(this.markers),this.fitToMarkers&&this._fitToMarkersChanged()},_observeObjects(){this._objectsMutationObserver||(this._objectsMutationObserver=new MutationObserver(this._updateObjects.bind(this)),this._objectsMutationObserver.observe(this,{childList:!0}))},_updateObjects(){const e=Array.prototype.slice.call(this.$.objects.assignedNodes({flatten:!0}));if(e.length===this.objects.length){if(0===e.filter(e=>-1===this.objects.indexOf(e)).length)return void this._observeObjects()}this._observeObjects(),this._setObjects(e),this._attachChildrenToMap(this.objects)},clear(){for(var e,t=0;e=this.markers[t];++t)e.marker.setMap(null)},triggerMarkerClick(e){google.maps.event.trigger(this.markers[e].marker,"click")},resize(){if(this.map){const e=this.latitude,t=this.longitude;google.maps.event.trigger(this.map,"resize"),this.latitude=e,this.longitude=t,this.fitToMarkers&&this._fitToMarkersChanged()}},_loadKml(){if(this.map&&this.kml){new google.maps.KmlLayer({url:this.kml,map:this.map})}},_debounceUpdateCenter(){this.debounce("updateCenter",this._updateCenter)},_updateCenter(){if(this.cancelDebouncer("updateCenter"),this.map&&void 0!==this.latitude&&void 0!==this.longitude){const e=+this.latitude;if(isNaN(e))throw new TypeError("latitude must be a number");const t=+this.longitude;if(isNaN(t))throw new TypeError("longitude must be a number");const i=new google.maps.LatLng(e,t);let n=this.map.getCenter();n?(n=new google.maps.LatLng(n.lat(),n.lng())).equals(i)||this.map.panTo(i):this.map.setCenter(i)}},_zoomChanged(){this.map&&this.map.setZoom(+this.zoom)},_idleEvent(){this.map?this._forwardEvent("idle"):this._clearListener("idle")},_boundEventsChanged(){this.map&&(this.boundEvents?(this._forwardEvent("center_changed"),this._forwardEvent("bounds_changed")):(this._clearListener("center_changed"),this._clearListener("bounds_changed")))},_clickEventsChanged(){this.map&&(this.clickEvents?(this._forwardEvent("click"),this._forwardEvent("dblclick"),this._forwardEvent("rightclick")):(this._clearListener("click"),this._clearListener("dblclick"),this._clearListener("rightclick")))},_dragEventsChanged(){this.map&&(this.dragEvents?(this._forwardEvent("drag"),this._forwardEvent("dragend"),this._forwardEvent("dragstart")):(this._clearListener("drag"),this._clearListener("dragend"),this._clearListener("dragstart")))},_mouseEventsChanged(){this.map&&(this.mouseEvents?(this._forwardEvent("mousemove"),this._forwardEvent("mouseout"),this._forwardEvent("mouseover")):(this._clearListener("mousemove"),this._clearListener("mouseout"),this._clearListener("mouseover")))},_maxZoomChanged(){this.map&&this.map.setOptions({maxZoom:+this.maxZoom})},_minZoomChanged(){this.map&&this.map.setOptions({minZoom:+this.minZoom})},_mapTypeChanged(){this.map&&this.map.setMapTypeId(this.mapType)},_disableDefaultUiChanged(){this.map&&this.map.setOptions({disableDefaultUI:this.disableDefaultUi})},_disableMapTypeControlChanged(){this.map&&this.map.setOptions({mapTypeControl:!this.disableMapTypeControl})},_disableStreetViewControlChanged(){this.map&&this.map.setOptions({streetViewControl:!this.disableStreetViewControl})},_disableZoomChanged(){this.map&&this.map.setOptions({disableDoubleClickZoom:this.disableZoom,scrollwheel:!this.disableZoom})},attributeChanged(e){if(this.map)switch(e){case"draggable":this.map.setOptions({draggable:this.draggable})}},_fitToMarkersChanged(){if(this.map&&this.fitToMarkers&&0<this.markers.length){const i=new google.maps.LatLngBounds;for(var e,t=0;e=this.markers[t];++t)i.extend(new google.maps.LatLng(e.latitude,e.longitude));1<this.markers.length&&this.map.fitBounds(i),this.map.setCenter(i.getCenter())}},_addMapListeners(){google.maps.event.addListener(this.map,"center_changed",()=>{const e=this.map.getCenter();this.latitude=e.lat(),this.longitude=e.lng()}),google.maps.event.addListener(this.map,"zoom_changed",()=>{this.zoom=this.map.getZoom()}),google.maps.event.addListener(this.map,"maptypeid_changed",()=>{this.mapType=this.map.getMapTypeId()}),this._clickEventsChanged(),this._boundEventsChanged(),this._dragEventsChanged(),this._mouseEventsChanged(),this._idleEvent()},_clearListener(e){this._listeners[e]&&(google.maps.event.removeListener(this._listeners[e]),this._listeners[e]=null)},_forwardEvent(e){this._listeners[e]=google.maps.event.addListener(this.map,e,t=>{this.fire(`google-map-${e}`,t)})},_deselectMarker(e,t){const i=this.$.selector.indexOf(e.target);this.singleInfoWindow?this.$.selector.selected=null:this.$.selector.selectedValues&&(this.$.selector.selectedValues=this.$.selector.selectedValues.filter(e=>e!==i))}});var parser=function(){function e(t,i,n,o){this.message=t,this.expected=i,this.found=n,this.location=o,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}return function(e,t){function i(){this.constructor=e}i.prototype=t.prototype,e.prototype=new i}(e,Error),{SyntaxError:e,parse:function(t){var i,n=1<arguments.length?arguments[1]:{},o={},r={start:Pe},a=Pe,s=function(e){return{type:"messageFormatPattern",elements:e,location:xe()}},l=function(e){var t,i,n,o,r,a="";for(t=0,n=e.length;t<n;t+=1)for(i=0,r=(o=e[t]).length;i<r;i+=1)a+=o[i];return a},c=function(e){return{type:"messageTextElement",value:e,location:xe()}},p=/^[^ \t\n\r,.+={}#]/,h={type:"class",value:"[^ \\t\\n\\r,.+={}#]",description:"[^ \\t\\n\\r,.+={}#]"},d="{",u={type:"literal",value:"{",description:'"{"'},m=",",f={type:"literal",value:",",description:'","'},g="}",y={type:"literal",value:"}",description:'"}"'},_=function(e,t){return{type:"argumentElement",id:e,format:t&&t[2],location:xe()}},v="number",b={type:"literal",value:"number",description:'"number"'},w="date",S={type:"literal",value:"date",description:'"date"'},C="time",T={type:"literal",value:"time",description:'"time"'},x=function(e,t){return{type:e+"Format",style:t&&t[2],location:xe()}},E="plural",I={type:"literal",value:"plural",description:'"plural"'},A=function(e){return{type:e.type,ordinal:!1,offset:e.offset||0,options:e.options,location:xe()}},k="selectordinal",P={type:"literal",value:"selectordinal",description:'"selectordinal"'},B=function(e){return{type:e.type,ordinal:!0,offset:e.offset||0,options:e.options,location:xe()}},O="select",M={type:"literal",value:"select",description:'"select"'},N=function(e){return{type:"selectFormat",options:e,location:xe()}},R="=",D={type:"literal",value:"=",description:'"="'},$=function(e,t){return{type:"optionalFormatPattern",selector:e,value:t,location:xe()}},L="offset:",F={type:"literal",value:"offset:",description:'"offset:"'},z=function(e){return e},H=function(e,t){return{type:"pluralFormat",offset:e,options:t,location:xe()}},V={type:"other",description:"whitespace"},U=/^[ \t\n\r]/,j={type:"class",value:"[ \\t\\n\\r]",description:"[ \\t\\n\\r]"},K={type:"other",description:"optionalWhitespace"},q=/^[0-9]/,W={type:"class",value:"[0-9]",description:"[0-9]"},Y=/^[0-9a-f]/i,G={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},X="0",Z={type:"literal",value:"0",description:'"0"'},J=/^[1-9]/,Q={type:"class",value:"[1-9]",description:"[1-9]"},ee=function(e){return parseInt(e,10)},te=/^[^{}\\\0-\x1F \t\n\r]/,ie={type:"class",value:"[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",description:"[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"},ne="\\\\",oe={type:"literal",value:"\\\\",description:'"\\\\\\\\"'},re=function(){return"\\"},ae="\\#",se={type:"literal",value:"\\#",description:'"\\\\#"'},le=function(){return"\\#"},ce="\\{",pe={type:"literal",value:"\\{",description:'"\\\\{"'},he=function(){return"{"},de="\\}",ue={type:"literal",value:"\\}",description:'"\\\\}"'},me=function(){return"}"},fe="\\u",ge={type:"literal",value:"\\u",description:'"\\\\u"'},ye=function(e){return String.fromCharCode(parseInt(e,16))},_e=function(e){return e.join("")},ve=0,be=0,we=[{line:1,column:1,seenCR:!1}],Se=0,Ce=[],Te=0;if("startRule"in n){if(!(n.startRule in r))throw new Error("Can't start parsing from rule \""+n.startRule+'".');a=r[n.startRule]}function xe(){return Ie(be,ve)}function Ee(e){var i,n,o=we[e];if(o)return o;for(i=e-1;!we[i];)i--;for(o={line:(o=we[i]).line,column:o.column,seenCR:o.seenCR};i<e;)"\n"===(n=t.charAt(i))?(o.seenCR||o.line++,o.column=1,o.seenCR=!1):"\r"===n||"\u2028"===n||"\u2029"===n?(o.line++,o.column=1,o.seenCR=!0):(o.column++,o.seenCR=!1),i++;return we[e]=o,o}function Ie(e,t){var i=Ee(e),n=Ee(t);return{start:{offset:e,line:i.line,column:i.column},end:{offset:t,line:n.line,column:n.column}}}function Ae(e){ve<Se||(ve>Se&&(Se=ve,Ce=[]),Ce.push(e))}function ke(t,i,n,o){return null!==i&&function(e){var t=1;for(e.sort(function(e,t){return e.description<t.description?-1:e.description>t.description?1:0});t<e.length;)e[t-1]===e[t]?e.splice(t,1):t++}(i),new e(null!==t?t:function(e,t){var i,n=Array(e.length);for(i=0;i<e.length;i++)n[i]=e[i].description;return"Expected "+(1<e.length?n.slice(0,-1).join(", ")+" or "+n[e.length-1]:n[0])+" but "+(t?'"'+function(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+t(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+t(e)}).replace(/[\u0100-\u0FFF]/g,function(e){return"\\u0"+t(e)}).replace(/[\u1000-\uFFFF]/g,function(e){return"\\u"+t(e)})}(t)+'"':"end of input")+" found."}(i,n),i,n,o)}function Pe(){return Be()}function Be(){var e,t,i;for(e=ve,t=[],i=Oe();i!==o;)t.push(i),i=Oe();return t!==o&&(be=e,t=s(t)),e=t}function Oe(){var e;return(e=function(){var e,i;return e=ve,(i=function(){var e,i,n,r,a,s;if(e=ve,i=[],n=ve,(r=De())!==o&&(a=He())!==o&&(s=De())!==o?n=r=[r,a,s]:(ve=n,n=o),n!==o)for(;n!==o;)i.push(n),n=ve,(r=De())!==o&&(a=He())!==o&&(s=De())!==o?n=r=[r,a,s]:(ve=n,n=o);else i=o;return i!==o&&(be=e,i=l(i)),(e=i)===o&&(e=ve,i=Re(),e=i!==o?t.substring(e,ve):i),e}())!==o&&(be=e,i=c(i)),e=i}())===o&&(e=function(){var e,i,n,r,a,s,l;return e=ve,123===t.charCodeAt(ve)?(i=d,ve++):(i=o,0===Te&&Ae(u)),i!==o&&De()!==o&&(n=function(){var e,i,n;if((e=Fe())===o){if(e=ve,i=[],p.test(t.charAt(ve))?(n=t.charAt(ve),ve++):(n=o,0===Te&&Ae(h)),n!==o)for(;n!==o;)i.push(n),p.test(t.charAt(ve))?(n=t.charAt(ve),ve++):(n=o,0===Te&&Ae(h));else i=o;e=i!==o?t.substring(e,ve):i}return e}())!==o&&De()!==o?(r=ve,44===t.charCodeAt(ve)?(a=m,ve++):(a=o,0===Te&&Ae(f)),a!==o&&(s=De())!==o&&(l=function(){var e;return(e=function(){var e,i,n,r,a,s;return e=ve,t.substr(ve,6)===v?(i=v,ve+=6):(i=o,0===Te&&Ae(b)),i===o&&(t.substr(ve,4)===w?(i=w,ve+=4):(i=o,0===Te&&Ae(S)),i===o&&(t.substr(ve,4)===C?(i=C,ve+=4):(i=o,0===Te&&Ae(T)))),i!==o&&De()!==o?(n=ve,44===t.charCodeAt(ve)?(r=m,ve++):(r=o,0===Te&&Ae(f)),r!==o&&(a=De())!==o&&(s=He())!==o?n=r=[r,a,s]:(ve=n,n=o),n===o&&(n=null),n!==o?(be=e,i=x(i,n),e=i):(ve=e,e=o)):(ve=e,e=o),e}())===o&&(e=function(){var e,i,n,r;return e=ve,t.substr(ve,6)===E?(i=E,ve+=6):(i=o,0===Te&&Ae(I)),i!==o&&De()!==o?(44===t.charCodeAt(ve)?(n=m,ve++):(n=o,0===Te&&Ae(f)),n!==o&&De()!==o&&(r=Ne())!==o?(be=e,i=A(r),e=i):(ve=e,e=o)):(ve=e,e=o),e}())===o&&(e=function(){var e,i,n,r;return e=ve,t.substr(ve,13)===k?(i=k,ve+=13):(i=o,0===Te&&Ae(P)),i!==o&&De()!==o?(44===t.charCodeAt(ve)?(n=m,ve++):(n=o,0===Te&&Ae(f)),n!==o&&De()!==o&&(r=Ne())!==o?(be=e,i=B(r),e=i):(ve=e,e=o)):(ve=e,e=o),e}())===o&&(e=function(){var e,i,n,r,a;if(e=ve,t.substr(ve,6)===O?(i=O,ve+=6):(i=o,0===Te&&Ae(M)),i!==o)if(De()!==o)if(44===t.charCodeAt(ve)?(n=m,ve++):(n=o,0===Te&&Ae(f)),n!==o)if(De()!==o){if(r=[],(a=Me())!==o)for(;a!==o;)r.push(a),a=Me();else r=o;r!==o?(be=e,i=N(r),e=i):(ve=e,e=o)}else ve=e,e=o;else ve=e,e=o;else ve=e,e=o;else ve=e,e=o;return e}()),e}())!==o?r=a=[a,s,l]:(ve=r,r=o),r===o&&(r=null),r!==o&&(a=De())!==o?(125===t.charCodeAt(ve)?(s=g,ve++):(s=o,0===Te&&Ae(y)),s!==o?(be=e,i=_(n,r),e=i):(ve=e,e=o)):(ve=e,e=o)):(ve=e,e=o),e}()),e}function Me(){var e,i,n,r,a;return e=ve,De()!==o&&(i=function(){var e,i,n,r;return e=ve,i=ve,61===t.charCodeAt(ve)?(n=R,ve++):(n=o,0===Te&&Ae(D)),n!==o&&(r=Fe())!==o?i=n=[n,r]:(ve=i,i=o),(e=i!==o?t.substring(e,ve):i)===o&&(e=He()),e}())!==o&&De()!==o?(123===t.charCodeAt(ve)?(n=d,ve++):(n=o,0===Te&&Ae(u)),n!==o&&De()!==o&&(r=Be())!==o&&De()!==o?(125===t.charCodeAt(ve)?(a=g,ve++):(a=o,0===Te&&Ae(y)),a!==o?(be=e,e=$(i,r)):(ve=e,e=o)):(ve=e,e=o)):(ve=e,e=o),e}function Ne(){var e,i,n,r;if(e=ve,(i=function(){var e,i,n;return e=ve,t.substr(ve,7)===L?(i=L,ve+=7):(i=o,0===Te&&Ae(F)),i!==o&&De()!==o&&(n=Fe())!==o?(be=e,e=i=z(n)):(ve=e,e=o),e}())===o&&(i=null),i!==o)if(De()!==o){if(n=[],(r=Me())!==o)for(;r!==o;)n.push(r),r=Me();else n=o;n!==o?(be=e,e=i=H(i,n)):(ve=e,e=o)}else ve=e,e=o;else ve=e,e=o;return e}function Re(){var e,i;if(Te++,e=[],U.test(t.charAt(ve))?(i=t.charAt(ve),ve++):(i=o,0===Te&&Ae(j)),i!==o)for(;i!==o;)e.push(i),U.test(t.charAt(ve))?(i=t.charAt(ve),ve++):(i=o,0===Te&&Ae(j));else e=o;return Te--,e===o&&(i=o,0===Te&&Ae(V)),e}function De(){var e,i,n;for(Te++,e=ve,i=[],n=Re();n!==o;)i.push(n),n=Re();return e=i!==o?t.substring(e,ve):i,Te--,e===o&&(i=o,0===Te&&Ae(K)),e}function $e(){var e;return q.test(t.charAt(ve))?(e=t.charAt(ve),ve++):(e=o,0===Te&&Ae(W)),e}function Le(){var e;return Y.test(t.charAt(ve))?(e=t.charAt(ve),ve++):(e=o,0===Te&&Ae(G)),e}function Fe(){var e,i,n,r,a,s;if(e=ve,48===t.charCodeAt(ve)?(i=X,ve++):(i=o,0===Te&&Ae(Z)),i===o){if(i=ve,n=ve,J.test(t.charAt(ve))?(r=t.charAt(ve),ve++):(r=o,0===Te&&Ae(Q)),r!==o){for(a=[],s=$e();s!==o;)a.push(s),s=$e();a!==o?n=r=[r,a]:(ve=n,n=o)}else ve=n,n=o;i=n!==o?t.substring(i,ve):n}return i!==o&&(be=e,i=ee(i)),e=i}function ze(){var e,i,n,r,a,s,l,c;return te.test(t.charAt(ve))?(e=t.charAt(ve),ve++):(e=o,0===Te&&Ae(ie)),e===o&&(e=ve,t.substr(ve,2)===ne?(i=ne,ve+=2):(i=o,0===Te&&Ae(oe)),i!==o&&(be=e,i=re()),(e=i)===o&&(e=ve,t.substr(ve,2)===ae?(i=ae,ve+=2):(i=o,0===Te&&Ae(se)),i!==o&&(be=e,i=le()),(e=i)===o&&(e=ve,t.substr(ve,2)===ce?(i=ce,ve+=2):(i=o,0===Te&&Ae(pe)),i!==o&&(be=e,i=he()),(e=i)===o&&(e=ve,t.substr(ve,2)===de?(i=de,ve+=2):(i=o,0===Te&&Ae(ue)),i!==o&&(be=e,i=me()),(e=i)===o&&(e=ve,t.substr(ve,2)===fe?(i=fe,ve+=2):(i=o,0===Te&&Ae(ge)),i!==o?(n=ve,r=ve,(a=Le())!==o&&(s=Le())!==o&&(l=Le())!==o&&(c=Le())!==o?r=a=[a,s,l,c]:(ve=r,r=o),(n=r!==o?t.substring(n,ve):r)!==o?(be=e,e=i=ye(n)):(ve=e,e=o)):(ve=e,e=o)))))),e}function He(){var e,t,i;if(e=ve,t=[],(i=ze())!==o)for(;i!==o;)t.push(i),i=ze();else t=o;return t!==o&&(be=e,t=_e(t)),e=t}if((i=a())!==o&&ve===t.length)return i;throw i!==o&&ve<t.length&&Ae({type:"end",description:"end of input"}),ke(null,Ce,Se<t.length?t.charAt(Se):null,Se<t.length?Ie(Se,Se+1):Ie(Se,Se))}}}(),parser$1={default:parser};function Compiler(e,t,i){this.locales=e,this.formats=t,this.pluralFn=i}function StringFormat(e){this.id=e}function PluralFormat(e,t,i,n,o){this.id=e,this.useOrdinal=t,this.offset=i,this.options=n,this.pluralFn=o}function PluralOffsetString(e,t,i,n){this.id=e,this.offset=t,this.numberFormat=i,this.string=n}function SelectFormat(e,t){this.id=e,this.options=t}Compiler.prototype.compile=function(e){return this.pluralStack=[],this.currentPlural=null,this.pluralNumberFormat=null,this.compileMessage(e)},Compiler.prototype.compileMessage=function(e){if(!e||"messageFormatPattern"!==e.type)throw new Error('Message AST is not of type: "messageFormatPattern"');var t,i,n,o=e.elements,r=[];for(t=0,i=o.length;t<i;t+=1)switch((n=o[t]).type){case"messageTextElement":r.push(this.compileMessageText(n));break;case"argumentElement":r.push(this.compileArgument(n));break;default:throw new Error("Message element does not have a valid type")}return r},Compiler.prototype.compileMessageText=function(e){return this.currentPlural&&/(^|[^\\])#/g.test(e.value)?(this.pluralNumberFormat||(this.pluralNumberFormat=new Intl.NumberFormat(this.locales)),new PluralOffsetString(this.currentPlural.id,this.currentPlural.format.offset,this.pluralNumberFormat,e.value)):e.value.replace(/\\#/g,"#")},Compiler.prototype.compileArgument=function(e){var t=e.format;if(!t)return new StringFormat(e.id);var i,n=this.formats,o=this.locales,r=this.pluralFn;switch(t.type){case"numberFormat":return i=n.number[t.style],{id:e.id,format:new Intl.NumberFormat(o,i).format};case"dateFormat":return i=n.date[t.style],{id:e.id,format:new Intl.DateTimeFormat(o,i).format};case"timeFormat":return i=n.time[t.style],{id:e.id,format:new Intl.DateTimeFormat(o,i).format};case"pluralFormat":return i=this.compileOptions(e),new PluralFormat(e.id,t.ordinal,t.offset,i,r);case"selectFormat":return i=this.compileOptions(e),new SelectFormat(e.id,i);default:throw new Error("Message element does not have a valid format type")}},Compiler.prototype.compileOptions=function(e){var t,i,n,o=e.format,r=o.options,a={};for(this.pluralStack.push(this.currentPlural),this.currentPlural="pluralFormat"===o.type?e:null,t=0,i=r.length;t<i;t+=1)a[(n=r[t]).selector]=this.compileMessage(n.value);return this.currentPlural=this.pluralStack.pop(),a},StringFormat.prototype.format=function(e){return e||"number"==typeof e?"string"==typeof e?e:e+"":""},PluralFormat.prototype.getOption=function(e){var t=this.options;return t["="+e]||t[this.pluralFn(e-this.offset,this.useOrdinal)]||t.other},PluralOffsetString.prototype.format=function(e){var t=this.numberFormat.format(e-this.offset);return this.string.replace(/(^|[^\\])#/g,"$1"+t).replace(/\\#/g,"#")},SelectFormat.prototype.getOption=function(e){var t=this.options;return t[e]||t.other};var compiler={default:Compiler},hop=Object.prototype.hasOwnProperty;function extend(e){var t,i,n,o,r=Array.prototype.slice.call(arguments,1);for(t=0,i=r.length;t<i;t+=1)if(n=r[t])for(o in n)hop.call(n,o)&&(e[o]=n[o]);return e}var utils={hop:hop,extend:extend},realDefineProp=function(){try{return!!Object.defineProperty({},"a",{})}catch(e){return!1}}(),es3=!realDefineProp&&!Object.prototype.__defineGetter__,defineProperty=realDefineProp?Object.defineProperty:function(e,t,i){"get"in i&&e.__defineGetter__?e.__defineGetter__(t,i.get):(!hop.call(e,t)||"value"in i)&&(e[t]=i.value)},objCreate=Object.create||function(e,t){var i,n;function o(){}for(n in o.prototype=e,i=new o,t)hop.call(t,n)&&defineProperty(i,n,t[n]);return i},es5={defineProperty:defineProperty,objCreate:objCreate};function MessageFormat(e,t,i){var n="string"==typeof e?MessageFormat.__parse(e):e;if(!n||"messageFormatPattern"!==n.type)throw new TypeError("A message must be provided as a String or AST.");i=this._mergeFormats(MessageFormat.formats,i),defineProperty(this,"_locale",{value:this._resolveLocale(t)});var o=this._findPluralRuleFunction(this._locale),r=this._compilePattern(n,t,i,o),a=this;this.format=function(t){try{return a._format(r,t)}catch(t){throw t.variableId?new Error("The intl string context variable '"+t.variableId+"' was not provided to the string '"+e+"'"):t}}}defineProperty(MessageFormat,"formats",{enumerable:!0,value:{number:{currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}}}),defineProperty(MessageFormat,"__localeData__",{value:objCreate(null)}),defineProperty(MessageFormat,"__addLocaleData",{value:function(e){if(!e||!e.locale)throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");MessageFormat.__localeData__[e.locale.toLowerCase()]=e}}),defineProperty(MessageFormat,"__parse",{value:parser.parse}),defineProperty(MessageFormat,"defaultLocale",{enumerable:!0,writable:!0,value:void 0}),MessageFormat.prototype.resolvedOptions=function(){return{locale:this._locale}},MessageFormat.prototype._compilePattern=function(e,t,i,n){return new Compiler(t,i,n).compile(e)},MessageFormat.prototype._findPluralRuleFunction=function(e){for(var t=MessageFormat.__localeData__,i=t[e.toLowerCase()];i;){if(i.pluralRuleFunction)return i.pluralRuleFunction;i=i.parentLocale&&t[i.parentLocale.toLowerCase()]}throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :"+e)},MessageFormat.prototype._format=function(e,t){var i,n,o,r,a,s,l="";for(i=0,n=e.length;i<n;i+=1)if("string"!=typeof(o=e[i])){if(r=o.id,!t||!hop.call(t,r))throw(s=new Error("A value must be provided for: "+r)).variableId=r,s;a=t[r],o.options?l+=this._format(o.getOption(a),t):l+=o.format(a)}else l+=o;return l},MessageFormat.prototype._mergeFormats=function(e,t){var i,n,o={};for(i in e)hop.call(e,i)&&(o[i]=n=objCreate(e[i]),t&&hop.call(t,i)&&extend(n,t[i]));return o},MessageFormat.prototype._resolveLocale=function(e){"string"==typeof e&&(e=[e]),e=(e||[]).concat(MessageFormat.defaultLocale);var t,i,n,o,r=MessageFormat.__localeData__;for(t=0,i=e.length;t<i;t+=1)for(n=e[t].toLowerCase().split("-");n.length;){if(o=r[n.join("-")])return o.locale;n.pop()}var a=e.pop();throw new Error("No locale data has been added to IntlMessageFormat for: "+e.join(", ")+", or the default locale: "+a)};var core={default:MessageFormat},defaultLocale={locale:"en",pluralRuleFunction:function(e,t){var i=(e+"").split("."),n=!i[1],o=+i[0]==e,r=o&&i[0].slice(-1),a=o&&i[0].slice(-2);return t?1==r&&11!=a?"one":2==r&&12!=a?"two":3==r&&13!=a?"few":"other":1==e&&n?"one":"other"}},en={default:defaultLocale};MessageFormat.__addLocaleData(defaultLocale),MessageFormat.defaultLocale="en";var main={default:MessageFormat};const supportsAdoptingStyleSheets="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,constructionToken=Symbol();class CSSResult{constructor(e,t){if(t!==constructionToken)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(supportsAdoptingStyleSheets?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const unsafeCSS=e=>new CSSResult(e+"",constructionToken),textFromCSSResult=e=>{if(e instanceof CSSResult)return e.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)},css=(e,...t)=>{const i=t.reduce((t,i,n)=>t+textFromCSSResult(i)+e[n+1],e[0]);return new CSSResult(i,constructionToken)};var cssTag={supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};const legacyCustomElement=(e,t)=>(window.customElements.define(e,t),t),standardCustomElement=(e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){window.customElements.define(e,t)}}},customElement=e=>t=>"function"==typeof t?legacyCustomElement(e,t):standardCustomElement(e,t),standardProperty=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:Object.assign({},t,{finisher(i){i.createProperty(t.key,e)}}),legacyProperty=(e,t,i)=>{t.constructor.createProperty(i,e)};function property(e){return(t,i)=>void 0!==i?legacyProperty(e,t,i):standardProperty(e,t)}function query(e){return(t,i)=>{const n={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==i?legacyQuery(n,t,i):standardQuery(n,t)}}function queryAll(e){return(t,i)=>{const n={get(){return this.renderRoot.querySelectorAll(e)},enumerable:!0,configurable:!0};return void 0!==i?legacyQuery(n,t,i):standardQuery(n,t)}}const legacyQuery=(e,t,i)=>{Object.defineProperty(t,i,e)},standardQuery=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),standardEventOptions=(e,t)=>Object.assign({},t,{finisher(i){Object.assign(i.prototype[t.key],e)}}),legacyEventOptions=(e,t,i)=>{Object.assign(t[i],e)},eventOptions=e=>(t,i)=>void 0!==i?legacyEventOptions(e,t,i):standardEventOptions(e,t);var decorators={customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions};window.JSCompiler_renameProperty=((e,t)=>e);const defaultConverter={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:+e;case Object:case Array:return JSON.parse(e)}return e}},notEqual=(e,t)=>t!==e&&(t==t||e==e),defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},microtaskPromise=Promise.resolve(!0),STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=4,STATE_IS_REFLECTING_TO_ATTRIBUTE=8,STATE_IS_REFLECTING_TO_PROPERTY=16,STATE_HAS_CONNECTED=32;class UpdatingElement extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=microtaskPromise,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=defaultPropertyDeclaration){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[i]},set(t){const n=this[e];this[i]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=notEqual){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||defaultConverter,o="function"==typeof n?n:n.fromAttribute;return o?o(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||defaultConverter.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|STATE_HAS_CONNECTED,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=defaultPropertyDeclaration){const n=this.constructor,o=n._attributeNameForProperty(e,i);if(void 0!==o){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=this._updateState|STATE_IS_REFLECTING_TO_ATTRIBUTE,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_ATTRIBUTE}}_attributeToProperty(e,t){if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i._classProperties.get(n)||defaultPropertyDeclaration;this._updateState=this._updateState|STATE_IS_REFLECTING_TO_PROPERTY,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_PROPERTY}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const n=this.constructor,o=n._classProperties.get(e)||defaultPropertyDeclaration;n._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||this._updateState&STATE_IS_REFLECTING_TO_PROPERTY||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|STATE_UPDATE_REQUESTED;const i=this._updatePromise;this._updatePromise=new Promise((i,n)=>{e=i,t=n});try{await i}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&STATE_HAS_CONNECTED}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED}get hasUpdated(){return this._updateState&STATE_HAS_UPDATED}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&STATE_HAS_UPDATED||(this._updateState=this._updateState|STATE_HAS_UPDATED,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&0<this._reflectingProperties.size&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}UpdatingElement.finalized=!0;var updatingElement={defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement};const directives=new WeakMap,directive=e=>(...t)=>{const i=e(...t);return directives.set(i,!0),i},isDirective=e=>"function"==typeof e&&directives.has(e);var directive$1={directive:directive,isDirective:isDirective};const isCEPolyfill=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,reparentNodes=(e,t,i=null,n=null)=>{let o=t;for(;o!==i;){const t=o.nextSibling;e.insertBefore(o,n),o=t}},removeNodes=(e,t,i=null)=>{let n=t;for(;n!==i;){const t=n.nextSibling;e.removeChild(n),n=t}};var dom$1={isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes};const noChange={},nothing={};var part={noChange:noChange,nothing:nothing};const marker=`{{lit-${(Math.random()+"").slice(2)}}}`,nodeMarker=`\x3c!--${marker}--\x3e`,markerRegex=new RegExp(`${marker}|${nodeMarker}`),boundAttributeSuffix="$lit$";class Template{constructor(e,t){this.parts=[],this.element=t;let i=-1,n=0;const o=[],r=t=>{const a=t.content,s=document.createTreeWalker(a,133,null,!1);let l=0;for(;s.nextNode();){i++;const t=s.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let r=0;for(let e=0;e<o.length;e++)0<=o[e].value.indexOf(marker)&&r++;for(;0<r--;){const o=e.strings[n],r=lastAttributeNameRegex.exec(o)[2],a=r.toLowerCase()+boundAttributeSuffix,s=t.getAttribute(a).split(markerRegex);this.parts.push({type:"attribute",index:i,name:r,strings:s}),t.removeAttribute(a),n+=s.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(0<=e.indexOf(marker)){const r=t.parentNode,a=e.split(markerRegex),s=a.length-1;for(let e=0;e<s;e++)r.insertBefore(""===a[e]?createMarker():document.createTextNode(a[e]),t),this.parts.push({type:"node",index:++i});""===a[s]?(r.insertBefore(createMarker(),t),o.push(t)):t.data=a[s],n+=s}}else if(8===t.nodeType)if(t.data===marker){const e=t.parentNode;null!==t.previousSibling&&i!==l||(i++,e.insertBefore(createMarker(),t)),l=i,this.parts.push({type:"node",index:i}),null===t.nextSibling?t.data="":(o.push(t),i--),n++}else{let e=-1;for(;-1!==(e=t.data.indexOf(marker,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of o)e.parentNode.removeChild(e)}}const isTemplatePartActive=e=>-1!==e.index,createMarker=()=>document.createComment(""),lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var template$b={marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,boundAttributeSuffix:boundAttributeSuffix,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex};class TemplateInstance{constructor(e,t,i){this._parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this._parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let i=0,n=0;const o=e=>{const r=document.createTreeWalker(e,133,null,!1);let a=r.nextNode();for(;i<t.length&&null!==a;){const e=t[i];if(isTemplatePartActive(e))if(n===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(a,e.name,e.strings,this.options));i++}else n++,"TEMPLATE"===a.nodeName&&o(a.content),a=r.nextNode();else this._parts.push(void 0),i++}};return o(e),isCEPolyfill&&(document.adoptNode(e),customElements.upgrade(e)),e}}var templateInstance={TemplateInstance:TemplateInstance};class TemplateResult{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="";for(let i=0;i<e;i++){const e=this.strings[i],n=lastAttributeNameRegex.exec(e);t+=n?e.substr(0,n.index)+n[1]+n[2]+boundAttributeSuffix+n[3]+marker:e+nodeMarker}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class SVGTemplateResult extends TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,i=t.firstChild;return t.removeChild(i),reparentNodes(t,i.firstChild),e}}var templateResult={TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult};const isPrimitive=e=>null===e||!("object"==typeof e||"function"==typeof e);class AttributeCommitter{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new AttributePart(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let n=0;n<t;n++){i+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)i+="string"==typeof t?t:t+"";else i+="string"==typeof e?e:e+""}}return i+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class AttributePart{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===noChange||isPrimitive(e)&&e===this.value||(this.value=e,isDirective(e)||(this.committer.dirty=!0))}commit(){for(;isDirective(this.value);){const e=this.value;this.value=noChange,e(this)}this.value!==noChange&&this.committer.commit()}}class NodePart{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(createMarker()),this.endNode=e.appendChild(createMarker())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=createMarker()),e._insert(this.endNode=createMarker())}insertAfterPart(e){e._insert(this.startNode=createMarker()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;isDirective(this._pendingValue);){const e=this._pendingValue;this._pendingValue=noChange,e(this)}const e=this._pendingValue;e!==noChange&&(isPrimitive(e)?e!==this.value&&this._commitText(e):e instanceof TemplateResult?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===nothing?(this.value=nothing,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:e+"")),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof TemplateInstance&&this.value.template===t)this.value.update(e.values);else{const i=new TemplateInstance(t,e.processor,this.options),n=i._clone();i.update(e.values),this._commitNode(n),this.value=i}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const o of e)void 0===(i=t[n])&&(i=new NodePart(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(o),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){removeNodes(this.startNode.parentNode,e.nextSibling,this.endNode)}}class BooleanAttributePart{constructor(e,t,i){if(this.value=void 0,this._pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this._pendingValue=e}commit(){for(;isDirective(this._pendingValue);){const e=this._pendingValue;this._pendingValue=noChange,e(this)}if(this._pendingValue===noChange)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=noChange}}class PropertyCommitter extends AttributeCommitter{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new PropertyPart(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class PropertyPart extends AttributePart{}let eventOptionsSupported=!1;try{const e={get capture(){return eventOptionsSupported=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class EventPart{constructor(e,t,i){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;isDirective(this._pendingValue);){const e=this._pendingValue;this._pendingValue=noChange,e(this)}if(this._pendingValue===noChange)return;const e=this._pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=getOptions(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=noChange}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const getOptions=e=>e&&(eventOptionsSupported?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);var parts={isPrimitive:isPrimitive,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart};class DefaultTemplateProcessor{handleAttributeExpressions(e,t,i,n){const o=t[0];if("."===o){return new PropertyCommitter(e,t.slice(1),i).parts}return"@"===o?[new EventPart(e,t.slice(1),n.eventContext)]:"?"===o?[new BooleanAttributePart(e,t.slice(1),i)]:new AttributeCommitter(e,t,i).parts}handleTextExpression(e){return new NodePart(e)}}const defaultTemplateProcessor=new DefaultTemplateProcessor;var defaultTemplateProcessor$1={DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor};function templateFactory(e){let t=templateCaches.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},templateCaches.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(marker);return void 0===(i=t.keyString.get(n))&&(i=new Template(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const templateCaches=new Map;var templateFactory$1={templateFactory:templateFactory,templateCaches:templateCaches};const parts$1=new WeakMap,render=(e,t,i)=>{let n=parts$1.get(t);void 0===n&&(removeNodes(t,t.firstChild),parts$1.set(t,n=new NodePart(Object.assign({templateFactory:templateFactory},i))),n.appendInto(t)),n.setValue(e),n.commit()};var render$1={parts:parts$1,render:render};(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const html$1=(e,...t)=>new TemplateResult(e,t,"html",defaultTemplateProcessor),svg=(e,...t)=>new SVGTemplateResult(e,t,"svg",defaultTemplateProcessor);var litHtml={html:html$1,svg:svg,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor,directive:directive,isDirective:isDirective,removeNodes:removeNodes,reparentNodes:reparentNodes,noChange:noChange,nothing:nothing,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,BooleanAttributePart:BooleanAttributePart,EventPart:EventPart,isPrimitive:isPrimitive,NodePart:NodePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,parts:parts$1,render:render,templateCaches:templateCaches,templateFactory:templateFactory,TemplateInstance:TemplateInstance,SVGTemplateResult:SVGTemplateResult,TemplateResult:TemplateResult,createMarker:createMarker,isTemplatePartActive:isTemplatePartActive,Template:Template};const walkerNodeFilter=133;function removeNodesFromTemplate(e,t){const{element:{content:i},parts:n}=e,o=document.createTreeWalker(i,walkerNodeFilter,null,!1);let r=nextActiveIndexInTemplateParts(n),a=n[r],s=-1,l=0;const c=[];let p=null;for(;o.nextNode();){s++;const e=o.currentNode;for(e.previousSibling===p&&(p=null),t.has(e)&&(c.push(e),null===p&&(p=e)),null!==p&&l++;void 0!==a&&a.index===s;)a.index=null!==p?-1:a.index-l,a=n[r=nextActiveIndexInTemplateParts(n,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const countNodes=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,walkerNodeFilter,null,!1);for(;i.nextNode();)t++;return t},nextActiveIndexInTemplateParts=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(isTemplatePartActive(t))return i}return-1};function insertNodeIntoTemplate(e,t,i=null){const{element:{content:n},parts:o}=e;if(null===i||void 0===i)return void n.appendChild(t);const r=document.createTreeWalker(n,walkerNodeFilter,null,!1);let a=nextActiveIndexInTemplateParts(o),s=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===i&&(s=countNodes(t),i.parentNode.insertBefore(t,i));-1!==a&&o[a].index===l;){if(0<s){for(;-1!==a;)o[a].index+=s,a=nextActiveIndexInTemplateParts(o,a);return}a=nextActiveIndexInTemplateParts(o,a)}}}var modifyTemplate={removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};const getTemplateCacheKey=(e,t)=>`${e}--${t}`;let compatibleShadyCSSVersion=!0;void 0===window.ShadyCSS?compatibleShadyCSSVersion=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),compatibleShadyCSSVersion=!1);const shadyTemplateFactory=e=>t=>{const i=getTemplateCacheKey(t.type,e);let n=templateCaches.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},templateCaches.set(i,n));let o=n.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(marker);if(void 0===(o=n.keyString.get(r))){const i=t.getTemplateElement();compatibleShadyCSSVersion&&window.ShadyCSS.prepareTemplateDom(i,e),o=new Template(t,i),n.keyString.set(r,o)}return n.stringsArray.set(t.strings,o),o},TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=e=>{TEMPLATE_TYPES.forEach(t=>{const i=templateCaches.get(getTemplateCacheKey(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),removeNodesFromTemplate(e,i)})})},shadyRenderSet=new Set,prepareTemplateStyles=(e,t,i)=>{shadyRenderSet.add(i);const n=e.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,i);const o=document.createElement("style");for(let e=0;e<n.length;e++){const t=n[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if(removeStylesFromLitTemplates(i),insertNodeIntoTemplate(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,i),window.ShadyCSS.nativeShadow){const i=t.element.content.querySelector("style");e.insertBefore(i.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild),removeNodesFromTemplate(t,new Set([o]))}},render$2=(e,t,i)=>{const n=i.scopeName,o=parts$1.has(t),r=t instanceof ShadowRoot&&compatibleShadyCSSVersion&&e instanceof TemplateResult,a=r&&!shadyRenderSet.has(n),s=a?document.createDocumentFragment():t;if(render(e,s,Object.assign({templateFactory:shadyTemplateFactory(n)},i)),a){const e=parts$1.get(s);parts$1.delete(s),e.value instanceof TemplateInstance&&prepareTemplateStyles(s,e.value.template,n),removeNodes(t,t.firstChild),t.appendChild(s),parts$1.set(t,e)}!o&&r&&window.ShadyCSS.styleElement(t.host)};var shadyRender={render:render$2,html:html$1,svg:svg,TemplateResult:TemplateResult};function arrayFlat(e,t=[]){for(let i=0,n=e.length;i<n;i++){const n=e[i];Array.isArray(n)?arrayFlat(n,t):t.push(n)}return t}(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const flattenStyles=e=>e.flat?e.flat(1/0):arrayFlat(e);class LitElement extends UpdatingElement{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){flattenStyles(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?supportsAdoptingStyleSheets?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof TemplateResult&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}LitElement.finalized=!0,LitElement.render=render$2;var litElement={LitElement:LitElement,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement,customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions,html:html$1,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};const templateCaches$1=new WeakMap,cache=directive(e=>t=>{if(!(t instanceof NodePart))throw new Error("cache can only be used in text bindings");let i=templateCaches$1.get(t);void 0===i&&(i=new WeakMap,templateCaches$1.set(t,i));const n=t.value;if(n instanceof TemplateInstance){if(e instanceof TemplateResult&&n.template===t.options.templateFactory(e))return void t.setValue(e);{let e=i.get(n.template);void 0===e&&(e={instance:n,nodes:document.createDocumentFragment()},i.set(n.template,e)),reparentNodes(e.nodes,t.startNode.nextSibling,t.endNode)}}if(e instanceof TemplateResult){const n=t.options.templateFactory(e),o=i.get(n);void 0!==o&&(t.setValue(o.nodes),t.commit(),t.value=o.instance)}t.setValue(e)});var cache$1={cache:cache};const previousValues=new WeakMap,unsafeHTML=directive(e=>t=>{if(!(t instanceof NodePart))throw new Error("unsafeHTML can only be used in text bindings");const i=previousValues.get(t);if(void 0!==i&&isPrimitive(e)&&e===i.value&&t.value===i.fragment)return;const n=document.createElement("template");n.innerHTML=e;const o=document.importNode(n.content,!0);t.setValue(o),previousValues.set(t,{value:e,fragment:o})});var unsafeHtml={unsafeHTML:unsafeHTML};const $_documentContainer$3=document.createElement("template");$_documentContainer$3.innerHTML='<dom-module id="paper-share-button">\n    <iron-iconset-svg name="custom" size="24">\n        <svg><defs>\n    <g id="share"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></g>\n    <g id="email"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></g>\n  </defs></svg>\n    </iron-iconset-svg>\n    <iron-iconset-svg name="brand" size="16">\n        <svg><defs>\n  <g id="facebook"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"></path></g>\n  <g id="google"><path d="M5.09 7.273v1.745h2.89c-.116.75-.873 2.197-2.887 2.197-1.737 0-3.155-1.44-3.155-3.215S3.353 4.785 5.09 4.785c.99 0 1.652.422 2.03.786l1.382-1.33c-.887-.83-2.037-1.33-3.41-1.33C2.275 2.91 0 5.19 0 8s2.276 5.09 5.09 5.09c2.94 0 4.888-2.065 4.888-4.974 0-.334-.036-.59-.08-.843H5.09zm10.91 0h-1.455V5.818H13.09v1.455h-1.454v1.454h1.455v1.455h1.46V8.727H16"></path></g>\n  <g id="twitter"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"></path></g>\n  <g id="vk"><path d="M7.828 12.526h.957s.288-.032.436-.19c.14-.147.14-.42.14-.42s-.02-1.284.58-1.473c.59-.187 1.34 1.24 2.14 1.788.61.42 1.07.33 1.07.33l2.14-.03s1.12-.07.59-.95c-.04-.07-.3-.65-1.58-1.84-1.34-1.24-1.16-1.04.45-3.19.98-1.31 1.38-2.11 1.25-2.45-.11-.32-.84-.24-.84-.24l-2.4.02s-.18-.02-.31.06-.21.26-.21.26-.38 1.02-.89 1.88C10.27 7.9 9.84 8 9.67 7.88c-.403-.26-.3-1.053-.3-1.62 0-1.76.27-2.5-.52-2.69-.26-.06-.454-.1-1.123-.11-.86-.01-1.585.006-1.996.207-.27.135-.48.434-.36.45.16.02.52.098.71.358.25.337.24 1.09.24 1.09s.14 2.077-.33 2.335c-.33.174-.77-.187-1.73-1.837-.49-.84-.86-1.78-.86-1.78s-.07-.17-.2-.27c-.15-.11-.37-.15-.37-.15l-2.29.02s-.34.01-.46.16c-.11.13-.01.41-.01.41s1.79 4.19 3.82 6.3c1.86 1.935 3.97 1.81 3.97 1.81z"></path></g>\n  <g id="blogger"><path d="M14.65 16H1.35C.6 16 0 15.4 0 14.65V1.35C0 .6.6 0 1.35 0H14.7c.7 0 1.3.6 1.3 1.35v13.3c0 .75-.6 1.35-1.35 1.35zM8 2.65H6c-1.85 0-3.35 1.5-3.35 3.35v4c0 1.85 1.5 3.35 3.35 3.35h4c1.85 0 3.35-1.5 3.35-3.35V7.35c0-.4-.3-.7-.7-.7H12c-.35 0-.65-.3-.65-.65 0-1.85-1.5-3.35-3.35-3.35zm2.05 8H6c-.35 0-.65-.3-.65-.65 0-.35.3-.65.65-.65h4.05c.35 0 .65.3.65.65 0 .35-.3.65-.65.65zm-1.7-5.3c.35 0 .65.3.65.65 0 .35-.3.65-.65.65h-2.4c-.35 0-.65-.3-.65-.65 0-.35.3-.65.65-.65h2.4z"></path></g>\n  <g id="reddit"><path d="M1.473 9.368c-.04.185-.06.374-.06.566 0 2.3 2.94 4.173 6.554 4.173 3.613 0 6.553-1.872 6.553-4.173 0-.183-.02-.364-.055-.54l-.01-.022c-.013-.036-.02-.073-.02-.11-.2-.784-.745-1.497-1.533-2.072-.03-.01-.058-.026-.084-.047-.017-.013-.03-.028-.044-.043-1.198-.824-2.91-1.34-4.807-1.34-1.88 0-3.576.506-4.772 1.315-.01.012-.02.023-.033.033-.026.022-.056.04-.087.05-.805.576-1.364 1.293-1.572 2.086 0 .038-.01.077-.025.114l-.005.01zM8 13.003c-1.198 0-2.042-.26-2.58-.8-.116-.116-.116-.305 0-.422.117-.11.307-.11.424 0 .42.42 1.125.63 2.155.63 1.03 0 1.73-.2 2.15-.62.11-.11.3-.11.42 0 .11.12.11.31 0 .43-.54.54-1.38.8-2.58.8zM5.592 7.945c-.61 0-1.12.51-1.12 1.12 0 .608.51 1.102 1.12 1.102.61 0 1.103-.494 1.103-1.102 0-.61-.494-1.12-1.103-1.12zm4.83 0c-.61 0-1.12.51-1.12 1.12 0 .608.51 1.102 1.12 1.102.61 0 1.103-.494 1.103-1.102 0-.61-.494-1.12-1.103-1.12zM13.46 6.88c.693.556 1.202 1.216 1.462 1.94.3-.225.48-.578.48-.968 0-.67-.545-1.214-1.214-1.214-.267 0-.52.087-.728.243zM1.812 6.64c-.67 0-1.214.545-1.214 1.214 0 .363.16.7.43.927.268-.72.782-1.37 1.478-1.92-.202-.14-.443-.22-.694-.22zm6.155 8.067c-3.944 0-7.152-2.14-7.152-4.77 0-.183.016-.363.046-.54-.53-.33-.86-.91-.86-1.545 0-1 .82-1.812 1.82-1.812.45 0 .87.164 1.2.455 1.24-.796 2.91-1.297 4.75-1.33l1.21-3.69.27.063s.01 0 .01.002l2.82.663c.23-.533.76-.908 1.38-.908.82 0 1.49.67 1.49 1.492 0 .823-.67 1.492-1.49 1.492s-1.49-.67-1.49-1.49L9.4 2.18l-.98 2.99c1.77.07 3.37.57 4.57 1.35.33-.31.764-.48 1.225-.48 1 0 1.814.81 1.814 1.81 0 .66-.36 1.26-.92 1.58.02.17.04.33.04.5-.01 2.63-3.21 4.77-7.16 4.77zM13.43 1.893c-.494 0-.895.4-.895.894 0 .493.4.894.894.894.49 0 .89-.4.89-.89s-.4-.89-.9-.89z"></path></g>\n  <g id="tumblr"><path d="M9.708 16c-3.396 0-4.687-2.504-4.687-4.274V6.498H3.41V4.432C5.83 3.557 6.418 1.368 6.55.12c.01-.086.077-.12.115-.12H9.01v4.076h3.2v2.422H8.997v4.98c.01.667.25 1.58 1.472 1.58h.06c.42-.012.99-.136 1.29-.278l.77 2.283c-.29.424-1.6.916-2.77.936H9.7z" fill-rule="nonzero"></path></g>\n  </defs></svg>\n    </iron-iconset-svg>\n\n    <template>\n    <style>\n      :host {\n        display: inline-block;\n      }\n      :host([monochrome]) .social-icon {\n        color: var(--paper-share-button-brand-icon-monochrome-color, black) !important;\n      }\n      #container:hover > #cube { background-color: yellow; }\n      .social-list {\n      }\n      paper-menu-button {\n        padding: 0px;\n      }\n      paper-icon-button {\n        height: var(--paper-share-button-icon-height, 40px);\n        width: var(--paper-share-button-icon-width, 40px);\n        color: var(--paper-share-button-icon-color, black);\n      }\n      .social-icon {\n        height: var(--paper-share-button-brand-icon-height, 40px);\n        width: var(--paper-share-button-brand-icon-width, 40px);\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n    </style>\n    <paper-menu-button id="shareMenu" horizontal-align$="[[horizontalAlign]]" vertical-align="bottom">\n      <paper-icon-button icon="[[buttonIcon]]" slot="dropdown-trigger" alt="Share"></paper-icon-button>\n      <paper-material slot="dropdown-content">\n        <div class="social-list">\n          <div>\n            <paper-icon-button href$="https://www.facebook.com/sharer/sharer.php?u=[[url]]" hidden$="[[!facebook]]" style="color:#3B5998" class="social-icon" cake="1w2" icon="brand:facebook" on-tap="_share"></paper-icon-button>\n          </div>\n          <div>\n            <paper-icon-button href$="https://plus.google.com/share?url=[[url]]" hidden$="[[!google]]" style="color:#DC4E41" class="social-icon" icon="brand:google" on-tap="_share"></paper-icon-button>\n          </div>\n          <div>\n            <paper-icon-button href$="http://twitter.com/intent/tweet?url=[[url]]&amp;text=[[sharingText]]" hidden$="[[!twitter]]" style="color:#1DA1F2" class="social-icon" icon="brand:twitter" on-tap="_share"></paper-icon-button>\n          </div>\n          <div>\n            <paper-icon-button href$="http://reddit.com/submit?url=[[url]]&amp;title=[[sharingText]]" hidden$="[[!reddit]]" style="color:#FF4500" class="social-icon" icon="brand:reddit" on-tap="_share"></paper-icon-button>\n          </div>\n          <div>\n            <paper-icon-button href$="http://vkontakte.ru/share.php?url=[[url]]" hidden$="[[!vk]]" style="color:#6383A8" class="social-icon" icon="brand:vk" on-tap="_share"></paper-icon-button>\n          </div>\n          <div>\n            <paper-icon-button href$="http://www.blogger.com/blog-this.g?n=[[sharingText]]&amp;b=[[sharingText]]%20[[url]]" hidden$="[[!blogger]]" style="color:#F38936" class="social-icon" icon="brand:blogger" on-tap="_share"></paper-icon-button>\n          </div>\n          <div>\n            <paper-icon-button href$="http://www.tumblr.com/share/link?url=[[url]]" hidden$="[[!tumblr]]" style="color:#36465D" class="social-icon" icon="brand:tumblr" on-tap="_share"></paper-icon-button>\n          </div>\n          <div>\n            <a href$="mailto:?body=[[url]]&amp;subject=[[sharingText]]" target="_blank" tabindex="-1">\n              <paper-icon-button hidden$="[[!email]]" style="color:#000000" class="social-icon" icon="custom:email"></paper-icon-button>\n            </a>\n          </div>\n        </div>\n      </paper-material>\n    </paper-menu-button>\n  </template>\n\n    \n</dom-module>',document.head.appendChild($_documentContainer$3.content),Polymer({is:"paper-share-button",properties:{url:{type:String},autoUrl:{type:Boolean},buttonIcon:{type:String,value:"custom:share"},sharingText:{type:String,value:""},monochrome:{type:Boolean,value:!1},popup:{type:Boolean,value:!1},email:{type:Boolean,value:!1},facebook:{type:Boolean,value:!1},google:{type:Boolean,value:!1},twitter:{type:Boolean,value:!1},reddit:{type:Boolean,value:!1},vk:{type:Boolean,value:!1},blogger:{type:Boolean,value:!1},tumblr:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"left"}},_share:function(e){var t=dom(e).localTarget;if(!this.url&&this.autoUrl&&(this.url=window.location.href),this.url)if(this.fire("share-tap",{brand:t.icon}),this.popup)switch(t.icon){case"brand:facebook":this._openPopup(t.getAttribute("href"),"Sharing",600,375);break;case"brand:google":this._openPopup(t.getAttribute("href"),"Sharing",400,445);break;case"brand:twitter":this._openPopup(t.getAttribute("href"),"Sharing",500,230);break;default:window.open(t.getAttribute("href"),"Sharing")}else window.open(t.getAttribute("href"),"Sharing");else console.error("Impossible to share, no url set");this.$.shareMenu.close()},_openPopup:function(e,t,i,n){var o=window.top.outerHeight/2+window.top.screenY-n/2,r=window.top.outerWidth/2+window.top.screenX-i/2;window.open(e,t,"width="+i+", height="+n+", top="+o+", left="+r)}});const $_documentContainer$4=document.createElement("template");$_documentContainer$4.setAttribute("style","display: none;"),$_documentContainer$4.innerHTML='<iron-iconset-svg size="24" name="papmapinf">\n<svg><defs>\n<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild($_documentContainer$4.content);const bundledImportMeta$2={...import.meta,url:new URL("../../node_modules/plastic-resize-aware/plastic-resize-aware.js",import.meta.url).href};class PlasticResizeAware extends PolymerElement{static get template(){return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <slot></slot>
    `}static get properties(){return{elementSize:{type:Object,notify:!0,readOnly:!0,value:function(){return{width:0,height:0}}}}}static get importMeta(){return bundledImportMeta$2}connectedCallback(){super.connectedCallback(),this._initResizeObserver(!1)}disconnectedCallback(){super.disconnectedCallback(),window.plasticResizeObserver&&window.plasticResizeObserver.observer&&(window.plasticResizeObserver.observer.unobserve(this),window.plasticResizeObserver.counter--)}_initResizeObserver(e){if("ResizeObserver"in window)window.plasticResizeObserver||(window.plasticResizeObserver={counter:0,observer:new ResizeObserver(e=>{e.forEach(e=>{e.target._roCallback(e)})},{})}),window.plasticResizeObserver.observer.observe(this),window.plasticResizeObserver.counter++;else{let e=document.getElementById("polyfill-ResizeObserver");e||((e=document.createElement("script")).id="polyfill-ResizeObserver",e.src=this.importPath+"ResizeObserver.js",e.async=!0,document.head.appendChild(e)),e.addEventListener("load",e=>this._initResizeObserver(!0))}}_roCallback(e){this.dispatchEvent(new CustomEvent("element-resize",{detail:{width:e.contentRect.width,height:e.contentRect.height}})),this._setElementSize({width:e.contentRect.width,height:e.contentRect.height})}}window.customElements.define("plastic-resize-aware",PlasticResizeAware);class PlasticMapInfo extends(GestureEventListeners(PolymerElement)){static get template(){return html`
    <style include="paper-material-styles">
       :host {
        display: inline-block;
      }

      .info-card-backing {
        position: absolute;
        z-index: 99;
        max-width: 80%;
        max-height: 75%;
        top: 0;
        left: 0;
        background-color: white;
        box-sizing: border-box;
        padding: 0 0 0 0;
        border-radius: 4px;
        color: white;
        opacity: 0;
        display: none;
        @apply --plastic-map-info-mixin;
      }

      .infocard-beak {
        position: absolute;
        opacity: 0;
        display: none;
      }

      #stdbeak svg rect {
        fill: blue;
        stroke: black;
        stroke-width: 1;
        @apply --plastic-map-info-beak-mixin;
      }

      div.card-content {
        overflow: hidden;
        @apply --plastic-map-info-content;
      }

      iron-icon.closeicon {
        --iron-icon-width: 24px;
        --iron-icon-height: 24px;
        position: absolute;
        right: 3px;
        top: 3px;
      }
    </style>
    <div id="stdbeak" class="infocard-beak">
      <svg width="20" height="20">
        <rect x="4" y="4" width="12" height="12" transform="rotate(45 10,10)">
      </rect></svg>
    </div>
    <div id="custombeak" class="infocard-beak">
      <slot id="custombeakcontent" name="info-beak"></slot>
    </div>
    <div id="infocarddiv" class="paper-material info-card-backing" elevation\$="[[elevation]]">
      <plastic-resize-aware id="raware">
        <div class="card-content">
          <slot id="cardcontent"></slot>
        </div>
      </plastic-resize-aware>
      <iron-icon class="closeicon" icon="papmapinf:close" on-tap="close"></iron-icon>
    </div>
`}static get is(){return"plastic-map-info"}static get properties(){return{elevation:{type:Number,notify:!0,value:4,reflectToAttribute:!0},fadeIn:{type:Boolean,notify:!0,value:!1},isShowing:{type:Boolean,notify:!0,value:!1},_dim:{type:Object,notify:!0,value:()=>({card:{height:10,width:10},map:{height:100,width:100},marker:{x:0,y:42},beak:{width:20,height:20,customBeak:!1}})},map:{type:Object,notify:!0,observer:"_mapChanged"},_mapListeners:{type:Array,notify:!0,value:()=>[]},_marker:{type:Object,notify:!0},_overlay:{type:Object,notify:!0},_bk:{type:Object},_nbk:{type:Object},_isCustomBeak:{type:Boolean,notify:!0,value:!1},_watchingSize:{type:Boolean,notify:!0,value:!1}}}close(){this._releaseListeners(),this.isShowing=!1,this.$.infocarddiv.style.opacity=0,this.$.infocarddiv.style.left=0,this.$.infocarddiv.style.display="none",this.$.stdbeak.style.display="none",this.$.custombeak.style.display="none",this.$.stdbeak.style.opacity=0,this.$.custombeak.style.opacity=0}_contentChanged(){if(this.isShowing){this._getInfowindowSize();this._setInfowindowPosition()}}disconnectedCallback(){super.disconnectedCallback(),this._releaseListeners(),this.isShowing=!1,this.$.infocarddiv.style.left=0,this.$.infocarddiv.style.opacity=this.fadeIn?0:1,this.$.infocarddiv.style.display="none",this.$.stdbeak.display="none",this.$.custombeak.display="none",this.$.stdbeak.opacity=0,this.$.custombeak.opacity=0,this._marker=void 0,this.map=void 0}_doFadeIn(){if(this.isShowing){let e=parseFloat(this.$.infocarddiv.style.opacity);.9<=e?this.$.infocarddiv.style.opacity="1":(e+=.1,this.$.infocarddiv.style.opacity=e.toString(),setTimeout(()=>{this._doFadeIn()},40))}}_getInfowindowSize(){let e=this.$.infocarddiv;this._dim.card.width=e.offsetWidth,this._dim.card.height=e.offsetHeight,this._isCustomBeak?(this._dim.beak.height=this._bk.offsetHeight,this._dim.beak.width=this._bk.offsetWidth,this._dim.customBeak=!0):(this._dim.beak={height:20,width:20},this._dim.customBeak=!1)}_getMarkerSize(){if(this._marker&&this._marker.getIcon()){let e=this._marker.getIcon();this._dim.marker.y=e.anchor.y,this._dim.marker.x=0}else this._dim.marker={x:0,y:42}}_getMapSize(){let e=this.map.getDiv();this._dim.map.width=e.offsetWidth,this._dim.map.height=e.offsetHeight}_initListeners(){this._mapListeners=[],this._overlay=new google.maps.OverlayView,this._overlay.draw=function(){},this._overlay.setMap(this.map);let e=()=>{this.isShowing&&(this._getInfowindowSize(),this._setInfowindowPosition())};this._mapListeners.push(google.maps.event.addListener(this.map,"projection_changed",()=>{this._overlay=new google.maps.OverlayView,this._overlay.draw=function(){},this._overlay.setMap(this.map)})),this._mapListeners.push(google.maps.event.addListener(this.map,"zoom_changed",e=>{this.isShowing&&(this._getInfowindowSize(),this._setInfowindowPosition())})),this._mapListeners.push(google.maps.event.addListener(this.map,"center_changed",t=>{this.isShowing&&e()})),this._mapListeners.push(google.maps.event.addListener(this._marker,"drag",e=>{this.isShowing&&this._setInfowindowPosition()})),this._mapListeners.push(google.maps.event.addListener(this.map,"idle",e=>{this.isShowing&&this._setInfowindowPosition()})),this._watchingSize||this.$.raware.addEventListener("element-resize",()=>{this._contentChanged()})}_mapChanged(e,t){this.map&&(this._overlay=new google.maps.OverlayView,this._overlay.draw=function(){},this._overlay.setMap(this.map))}_panToShowInfowindow(e){let t={x:0,y:0};0>e.left?t.x=e.left-10:e.left+this._dim.card.width>this._dim.map.width&&(t.x=e.left+this._dim.card.width-this._dim.map.width+10),0>e.top?t.y=e.top-10:e.top+this._dim.card.height+this._dim.marker.y+10>this._dim.map.height&&(t.y=e.top+this._dim.card.height+this._dim.marker.y-this._dim.map.height+20),0==t.x&&0==t.y||this.map.panBy(t.x,t.y)}_placementInBounds(e){return 0<=e.top&&0<=e.left&&e.left+this._dim.card.width<this._dim.map.width&&e.top+this._dim.card.height+this._dim.marker.y+10<this._dim.map.height}ready(){super.ready(),this.map&&(this._overlay=new google.maps.OverlayView,this._overlay.draw=function(){},this._overlay.setMap(this.map))}_releaseListeners(){for(let e of this._mapListeners)google.maps.event.removeListener(e);this._mapListeners=[]}_setInfowindowPosition(){this._overlay||(this._overlay=new google.maps.OverlayView,this._overlay.draw=function(){},this._overlay.setMap(this.map),console.log("overlay not set"));let e={left:0,top:0};try{let t=this._overlay.getProjection().fromLatLngToContainerPixel(this._marker.getPosition()),i=Math.round(t.x-this._dim.card.width/2),n=Math.round(t.y-this._dim.card.height-this._dim.marker.y-this._dim.beak.height+10);this.$.infocarddiv.style.left=i+"px",this.$.infocarddiv.style.top=n+"px",this._bk.style.left=t.x-this._dim.beak.width/2+"px",this._bk.style.top=Math.floor(n-10+this._dim.card.height)+"px",e={left:i,top:n}}catch(e){console.log("setInfowindowPosition error"),console.log(e)}return e}showInfoWindow(e){this.map&&e&&(this.isShowing&&this.close(),this._marker=e,this._getMapSize(),this._getMarkerSize(),this.$.infocarddiv.style.display="block",0<this.$.custombeakcontent.assignedNodes({flatten:!0}).length?(this._bk=this.$.custombeak,this._nbk=this.$.stdbeak,this._isCustomBeak=!0):(this._bk=this.$.stdbeak,this._nbk=this.$.custombeak,this._isCustomBeak=!1),this._bk.style.opacity="0",this._bk.style.display="block",this._nbk.style.opacity="0",this._nbk.style.display="none",setTimeout(()=>{this._getInfowindowSize();let e=this._setInfowindowPosition();this.$.infocarddiv.style.opacity=this.fadeIn?0:1,this._bk.style.opacity="1",this._initListeners(),this.isShowing=!0,this.fadeIn&&this._doFadeIn(),this._placementInBounds(e)||this._panToShowInfowindow(e)},33))}}window.customElements.define(PlasticMapInfo.is,PlasticMapInfo);const installMediaQueryWatcher=(e,t)=>{let i=window.matchMedia(e);i.addListener(e=>t(e.matches)),t(i.matches)};var mediaQuery={installMediaQueryWatcher:installMediaQueryWatcher};const updateMetadata=({title:e,description:t,url:i,image:n,imageAlt:o})=>{e&&(document.title=e,setMetaTag("property","og:title",e)),t&&(setMetaTag("name","description",t),setMetaTag("property","og:description",t)),n&&setMetaTag("property","og:image",n),o&&setMetaTag("property","og:image:alt",o),setMetaTag("property","og:url",i=i||window.location.href)};function setMetaTag(e,t,i){let n=document.head.querySelector(`meta[${e}="${t}"]`);n||((n=document.createElement("meta")).setAttribute(e,t),document.head.appendChild(n)),n.setAttribute("content",i||"")}var metadata={updateMetadata:updateMetadata,setMetaTag:setMetaTag};const installOfflineWatcher=e=>{window.addEventListener("online",()=>e(!1)),window.addEventListener("offline",()=>e(!0)),e(!1===navigator.onLine)};var network={installOfflineWatcher:installOfflineWatcher};const installRouter=e=>{document.body.addEventListener("click",t=>{if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const i=t.composedPath().filter(e=>"A"===e.tagName)[0];if(!i||i.target||i.hasAttribute("download")||"external"===i.getAttribute("rel"))return;const n=i.href;if(!n||-1!==n.indexOf("mailto:"))return;const o=window.location,r=o.origin||o.protocol+"//"+o.host;0===n.indexOf(r)&&(t.preventDefault(),n!==o.href&&(window.history.pushState({},"",n),e(o,t)))}),window.addEventListener("popstate",t=>e(window.location,t)),e(window.location,null)};var router={installRouter:installRouter},support={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};function isDataView(e){return e&&DataView.prototype.isPrototypeOf(e)}if(support.arrayBuffer)var viewClasses=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],isArrayBufferView=ArrayBuffer.isView||function(e){return e&&-1<viewClasses.indexOf(Object.prototype.toString.call(e))};function normalizeName(e){if("string"!=typeof e&&(e+=""),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function normalizeValue(e){return"string"!=typeof e&&(e+=""),e}function iteratorFor(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return support.iterable&&(t[Symbol.iterator]=function(){return t}),t}function Headers(e){this.map={},e instanceof Headers?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function consumed(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function fileReaderReady(e){return new Promise(function(t,i){e.onload=function(){t(e.result)},e.onerror=function(){i(e.error)}})}function readBlobAsArrayBuffer(e){var t=new FileReader,i=fileReaderReady(t);return t.readAsArrayBuffer(e),i}function readBlobAsText(e){var t=new FileReader,i=fileReaderReady(t);return t.readAsText(e),i}function readArrayBufferAsText(e){for(var t=new Uint8Array(e),i=Array(t.length),n=0;n<t.length;n++)i[n]=String.fromCharCode(t[n]);return i.join("")}function bufferClone(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function Body(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:support.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:support.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:support.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():support.arrayBuffer&&support.blob&&isDataView(e)?(this._bodyArrayBuffer=bufferClone(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):support.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||isArrayBufferView(e))?this._bodyArrayBuffer=bufferClone(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):support.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},support.blob&&(this.blob=function(){var e=consumed(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?consumed(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(readBlobAsArrayBuffer)}),this.text=function(){var e=consumed(this);if(e)return e;if(this._bodyBlob)return readBlobAsText(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},support.formData&&(this.formData=function(){return this.text().then(decode)}),this.json=function(){return this.text().then(JSON.parse)},this}Headers.prototype.append=function(e,t){e=normalizeName(e),t=normalizeValue(t);var i=this.map[e];this.map[e]=i?i+", "+t:t},Headers.prototype.delete=function(e){delete this.map[normalizeName(e)]},Headers.prototype.get=function(e){return e=normalizeName(e),this.has(e)?this.map[e]:null},Headers.prototype.has=function(e){return this.map.hasOwnProperty(normalizeName(e))},Headers.prototype.set=function(e,t){this.map[normalizeName(e)]=normalizeValue(t)},Headers.prototype.forEach=function(e,t){for(var i in this.map)this.map.hasOwnProperty(i)&&e.call(t,this.map[i],i,this)},Headers.prototype.keys=function(){var e=[];return this.forEach(function(t,i){e.push(i)}),iteratorFor(e)},Headers.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),iteratorFor(e)},Headers.prototype.entries=function(){var e=[];return this.forEach(function(t,i){e.push([i,t])}),iteratorFor(e)},support.iterable&&(Headers.prototype[Symbol.iterator]=Headers.prototype.entries);var methods=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function normalizeMethod(e){var t=e.toUpperCase();return-1<methods.indexOf(t)?t:e}function Request(e,t){var i=(t=t||{}).body;if(e instanceof Request){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new Headers(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=e+"";if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new Headers(t.headers)),this.method=normalizeMethod(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}function decode(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var i=e.split("="),n=i.shift().replace(/\+/g," "),o=i.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function parseHeaders(e){var t=new Headers;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var i=e.split(":"),n=i.shift().trim();if(n){var o=i.join(":").trim();t.append(n,o)}}),t}function Response(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&300>this.status,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new Headers(t.headers),this.url=t.url||"",this._initBody(e)}Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit})},Body.call(Request.prototype),Body.call(Response.prototype),Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url})},Response.error=function(){var e=new Response(null,{status:0,statusText:""});return e.type="error",e};var redirectStatuses=[301,302,303,307,308];Response.redirect=function(e,t){if(-1===redirectStatuses.indexOf(t))throw new RangeError("Invalid status code");return new Response(null,{status:t,headers:{location:e}})};var DOMException=self.DOMException;try{new DOMException}catch(e){(DOMException=function(e,t){this.message=e,this.name=t;var i=Error(e);this.stack=i.stack}).prototype=Object.create(Error.prototype),DOMException.prototype.constructor=DOMException}function fetch$1(e,t){return new Promise(function(i,n){var o=new Request(e,t);if(o.signal&&o.signal.aborted)return n(new DOMException("Aborted","AbortError"));var r=new XMLHttpRequest;function a(){r.abort()}r.onload=function(){var e={status:r.status,statusText:r.statusText,headers:parseHeaders(r.getAllResponseHeaders()||"")};e.url="responseURL"in r?r.responseURL:e.headers.get("X-Request-URL");var t="response"in r?r.response:r.responseText;i(new Response(t,e))},r.onerror=function(){n(new TypeError("Network request failed"))},r.ontimeout=function(){n(new TypeError("Network request failed"))},r.onabort=function(){n(new DOMException("Aborted","AbortError"))},r.open(o.method,o.url,!0),"include"===o.credentials?r.withCredentials=!0:"omit"===o.credentials&&(r.withCredentials=!1),"responseType"in r&&support.blob&&(r.responseType="blob"),o.headers.forEach(function(e,t){r.setRequestHeader(t,e)}),o.signal&&(o.signal.addEventListener("abort",a),r.onreadystatechange=function(){4===r.readyState&&o.signal.removeEventListener("abort",a)}),r.send(void 0===o._bodyInit?null:o._bodyInit)})}fetch$1.polyfill=!0,self.fetch||(self.fetch=fetch$1,self.Headers=Headers,self.Request=Request,self.Response=Response);var fetch$2={Headers:Headers,Request:Request,Response:Response,get DOMException(){return DOMException},fetch:fetch$1};function pidCrypt(){function e(e){e||(e=8);for(var t=Array(e),i=[],n=0;256>n;n++)i[n]=n;for(n=0;n<t.length;n++)t[n]=i[Math.floor(Math.random()*i.length)];return t}this.setDefaults=function(){this.params.nBits=256,this.params.salt=e(8),this.params.salt=pidCryptUtil.byteArray2String(this.params.salt),this.params.salt=pidCryptUtil.convertToHex(this.params.salt),this.params.blockSize=16,this.params.UTF8=!0,this.params.A0_PAD=!0},this.debug=!0,this.params={},this.params.dataIn="",this.params.dataOut="",this.params.decryptIn="",this.params.decryptOut="",this.params.encryptIn="",this.params.encryptOut="",this.params.key="",this.params.iv="",this.params.clear=!0,this.setDefaults(),this.errors="",this.warnings="",this.infos="",this.debugMsg="",this.setParams=function(e){for(var t in e||(e={}),e)this.params[t]=e[t]},this.getParams=function(){return this.params},this.getParam=function(e){return this.params[e]||""},this.clearParams=function(){this.params={}},this.getNBits=function(){return this.params.nBits},this.getOutput=function(){return this.params.dataOut},this.setError=function(e){this.error=e},this.appendError=function(e){return this.errors+=e,""},this.getErrors=function(){return this.errors},this.isError=function(){return 0<this.errors.length},this.appendInfo=function(e){return this.infos+=e,""},this.getInfos=function(){return this.infos},this.setDebug=function(e){this.debug=e},this.appendDebug=function(e){return this.debugMsg+=e,""},this.isDebug=function(){return this.debug},this.getAllMessages=function(e){var t={lf:"\n",clr_mes:!1,verbose:15};for(var i in e||(e=t),t)void 0===e[i]&&(e[i]=t[i]);var n="",o="";for(var r in this.params){switch(r){case"encryptOut":o=pidCryptUtil.toByteArray(this.params[r].toString()),o=pidCryptUtil.fragment(o.join(),64,e.lf);break;case"key":case"iv":o=pidCryptUtil.formatHex(this.params[r],48);break;default:o=pidCryptUtil.fragment(this.params[r].toString(),64,e.lf)}n+="<p><b>"+r+"</b>:<pre>"+o+"</pre></p>"}return this.debug&&(n+="debug: "+this.debug+e.lf),0<this.errors.length&&1==(1&e.verbose)&&(n+="Errors:"+e.lf+this.errors+e.lf),0<this.warnings.length&&2==(2&e.verbose)&&(n+="Warnings:"+e.lf+this.warnings+e.lf),0<this.infos.length&&4==(4&e.verbose)&&(n+="Infos:"+e.lf+this.infos+e.lf),this.debug&&8==(8&e.verbose)&&(n+="Debug messages:"+e.lf+this.debugMsg+e.lf),e.clr_mes&&(this.errors=this.infos=this.warnings=this.debug=""),n},this.getRandomBytes=function(t){return e(t)}}var pidCryptUtil={};function Stream(e,t){e instanceof Stream?(this.enc=e.enc,this.pos=e.pos):(this.enc=e,this.pos=t)}pidCryptUtil.encodeBase64=function(e,t){e||(e="");var i,n,o,r,a,s,l,c,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",h=[],d="";if(0<(s=(l=(t=void 0!==t&&t)?pidCryptUtil.encodeUTF8(e):e).length%3))for(;3>s++;)d+="=",l+="\0";for(s=0;s<l.length;s+=3)n=63&(i=l.charCodeAt(s)<<16|l.charCodeAt(s+1)<<8|l.charCodeAt(s+2))>>18,o=63&i>>12,r=63&i>>6,a=63&i,h[s/3]=p.charAt(n)+p.charAt(o)+p.charAt(r)+p.charAt(a);return c=(c=h.join("")).slice(0,c.length-d.length)+d},pidCryptUtil.decodeBase64=function(e,t){e||(e="");var i,n,o,r,a,s,l,c,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",h=[];c=(t=void 0!==t&&t)?pidCryptUtil.decodeUTF8(e):e;for(var d=0;d<c.length;d+=4)i=255&(s=p.indexOf(c.charAt(d))<<18|p.indexOf(c.charAt(d+1))<<12|(r=p.indexOf(c.charAt(d+2)))<<6|(a=p.indexOf(c.charAt(d+3))))>>>16,n=255&s>>>8,o=255&s,h[d/4]=String.fromCharCode(i,n,o),64==a&&(h[d/4]=String.fromCharCode(i,n)),64==r&&(h[d/4]=String.fromCharCode(i));return l=h.join(""),l=t?pidCryptUtil.decodeUTF8(l):l},pidCryptUtil.encodeUTF8=function(e){return e||(e=""),e=(e=e.replace(/[\u0080-\u07ff]/g,function(e){var t=e.charCodeAt(0);return String.fromCharCode(192|t>>6,128|63&t)})).replace(/[\u0800-\uffff]/g,function(e){var t=e.charCodeAt(0);return String.fromCharCode(224|t>>12,128|63&t>>6,128|63&t)})},pidCryptUtil.decodeUTF8=function(e){return e||(e=""),e=(e=e.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(e){var t=(31&e.charCodeAt(0))<<6|63&e.charCodeAt(1);return String.fromCharCode(t)})).replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(e){var t=(15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2);return String.fromCharCode(t)})},pidCryptUtil.convertToHex=function(e){e||(e="");for(var t="",i="",n=0;n<e.length;n++)t+=1==(i=e.charCodeAt(n).toString(16)).length?"0"+i:i;return t},pidCryptUtil.convertFromHex=function(e){e||(e="");for(var t="",i=0;i<e.length;i+=2)t+=String.fromCharCode(parseInt(e.substring(i,i+2),16));return t},pidCryptUtil.stripLineFeeds=function(e){e||(e="");return e.replace(/\n/g,"").replace(/\r/g,"")},pidCryptUtil.toByteArray=function(e){e||(e="");for(var t=[],i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t},pidCryptUtil.fragment=function(e,t,i){if(e||(e=""),!t||t>=e.length)return e;i||(i="\n");for(var n="",o=0;o<e.length;o+=t)n+=e.substr(o,t)+i;return n},pidCryptUtil.formatHex=function(e,t){e||(e=""),t||(t=45);for(var i="",n=e.toLowerCase(),o=0;o<n.length;o+=2)i+=n.substr(o,2)+":";return n=this.fragment(i,t)},pidCryptUtil.byteArray2String=function(e){for(var t="",i=0;i<e.length;i++)t+=String.fromCharCode(e[i]);return t},Stream.prototype.parseStringHex=function(e,t){void 0===t&&(t=this.enc.length);for(var i,n="",o=e;o<t;++o)i=this.get(o),n+=this.hexDigits.charAt(i>>4)+this.hexDigits.charAt(15&i);return n},Stream.prototype.get=function(e){if(void 0==e&&(e=this.pos++),e>=this.enc.length)throw"Requesting byte offset "+e+" on a stream of length "+this.enc.length;return this.enc[e]},Stream.prototype.hexDigits="0123456789ABCDEF",Stream.prototype.hexDump=function(e,t){for(var i,n="",o=e;o<t;++o)i=this.get(o),n+=this.hexDigits.charAt(i>>4)+this.hexDigits.charAt(15&i),7==(15&o)&&(n+=" "),n+=15==(15&o)?"\n":" ";return n},Stream.prototype.parseStringISO=function(e,t){for(var i="",n=e;n<t;++n)i+=String.fromCharCode(this.get(n));return i},Stream.prototype.parseStringUTF=function(e,t){for(var i="",n=0,o=e;o<t;)i+=128>(n=this.get(o++))?String.fromCharCode(n):191<n&&224>n?String.fromCharCode((31&n)<<6|63&this.get(o++)):String.fromCharCode((15&n)<<12|(63&this.get(o++))<<6|63&this.get(o++));return i},Stream.prototype.reTime=/^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,Stream.prototype.parseTime=function(e,t){var i=this.parseStringISO(e,t),n=this.reTime.exec(i);return n?(i=n[1]+"-"+n[2]+"-"+n[3]+" "+n[4],n[5]&&(i+=":"+n[5],n[6]&&(i+=":"+n[6],n[7]&&(i+="."+n[7]))),n[8]&&(i+=" UTC","Z"!=n[8]&&(i+=n[8],n[9]&&(i+=":"+n[9]))),i):"Unrecognized time: "+i},Stream.prototype.parseInteger=function(e,t){if(!(4<t-e)){for(var i=0,n=e;n<t;++n)i=i<<8|this.get(n);return i}},Stream.prototype.parseOID=function(e,t){for(var i,n,o=0,r=0,a=e;a<t;++a)o=o<<7|127&(n=this.get(a)),r+=7,128&n||(void 0==i?i=parseInt(o/40)+"."+o%40:i+="."+(31<=r?"big":o),o=r=0),i+=String.fromCharCode();return i},void 0!==pidCrypt&&(pidCrypt.ASN1=function(e,t,i,n,o){this.stream=e,this.header=t,this.length=i,this.tag=n,this.sub=o},pidCrypt.ASN1.prototype.toHexTree=function(){var e={type:this.typeName()};if("SEQUENCE"!=e.type&&(e.value=this.stream.parseStringHex(this.posContent(),this.posEnd())),null!=this.sub){e.sub=[];for(var t=0,i=this.sub.length;t<i;++t)e.sub[t]=this.sub[t].toHexTree()}return e},pidCrypt.ASN1.prototype.typeName=function(){if(void 0==this.tag)return"unknown";var e=this.tag>>6,t=(this.tag,31&this.tag);switch(e){case 0:switch(t){case 0:return"EOC";case 1:return"BOOLEAN";case 2:return"INTEGER";case 3:return"BIT_STRING";case 4:return"OCTET_STRING";case 5:return"NULL";case 6:return"OBJECT_IDENTIFIER";case 7:return"ObjectDescriptor";case 8:return"EXTERNAL";case 9:return"REAL";case 10:return"ENUMERATED";case 11:return"EMBEDDED_PDV";case 12:return"UTF8String";case 16:return"SEQUENCE";case 17:return"SET";case 18:return"NumericString";case 19:return"PrintableString";case 20:return"TeletexString";case 21:return"VideotexString";case 22:return"IA5String";case 23:return"UTCTime";case 24:return"GeneralizedTime";case 25:return"GraphicString";case 26:return"VisibleString";case 27:return"GeneralString";case 28:return"UniversalString";case 30:return"BMPString";default:return"Universal_"+t.toString(16)}case 1:return"Application_"+t.toString(16);case 2:return"["+t+"]";case 3:return"Private_"+t.toString(16)}},pidCrypt.ASN1.prototype.content=function(){if(void 0==this.tag)return null;if(0!=this.tag>>6)return null;var e=31&this.tag,t=this.posContent(),i=Math.abs(this.length);switch(e){case 1:return 0==this.stream.get(t)?"false":"true";case 2:return this.stream.parseInteger(t,t+i);case 6:return this.stream.parseOID(t,t+i);case 12:return this.stream.parseStringUTF(t,t+i);case 18:case 19:case 20:case 21:case 22:case 26:return this.stream.parseStringISO(t,t+i);case 23:case 24:return this.stream.parseTime(t,t+i)}return null},pidCrypt.ASN1.prototype.toString=function(){return this.typeName()+"@"+this.stream.pos+"[header:"+this.header+",length:"+this.length+",sub:"+(null==this.sub?"null":this.sub.length)+"]"},pidCrypt.ASN1.prototype.print=function(e){if(void 0==e&&(e=""),document.writeln(e+this),null!=this.sub){e+="  ";for(var t=0,i=this.sub.length;t<i;++t)this.sub[t].print(e)}},pidCrypt.ASN1.prototype.toPrettyString=function(e){void 0==e&&(e="");var t=e+this.typeName()+" @"+this.stream.pos;if(0<=this.length&&(t+="+"),t+=this.length,32&this.tag?t+=" (constructed)":3!=this.tag&&4!=this.tag||null==this.sub||(t+=" (encapsulates)"),t+="\n",null!=this.sub){e+="  ";for(var i=0,n=this.sub.length;i<n;++i)t+=this.sub[i].toPrettyString(e)}return t},pidCrypt.ASN1.prototype.toDOM=function(){var e=document.createElement("div");e.className="node",e.asn1=this;var t=document.createElement("div");t.className="head";var i=this.typeName();t.innerHTML=i,e.appendChild(t),this.head=t;var n=document.createElement("div");n.className="value",i="Offset: "+this.stream.pos+"<br/>",i+="Length: "+this.header+"+",0<=this.length?i+=this.length:i+=-this.length+" (undefined)",32&this.tag?i+="<br/>(constructed)":3!=this.tag&&4!=this.tag||null==this.sub||(i+="<br/>(encapsulates)");var o=this.content();if(null!=o&&(i+="<br/>Value:<br/><b>"+o+"</b>","object"==typeof oids&&6==this.tag)){var r=oids[o];r&&(r.d&&(i+="<br/>"+r.d),r.c&&(i+="<br/>"+r.c),r.w&&(i+="<br/>(warning!)"))}n.innerHTML=i,e.appendChild(n);var a=document.createElement("div");if(a.className="sub",null!=this.sub)for(var s=0,l=this.sub.length;s<l;++s)a.appendChild(this.sub[s].toDOM());return e.appendChild(a),t.switchNode=e,t.onclick=function(){var e=this.switchNode;e.className="node collapsed"==e.className?"node":"node collapsed"},e},pidCrypt.ASN1.prototype.posStart=function(){return this.stream.pos},pidCrypt.ASN1.prototype.posContent=function(){return this.stream.pos+this.header},pidCrypt.ASN1.prototype.posEnd=function(){return this.stream.pos+this.header+Math.abs(this.length)},pidCrypt.ASN1.prototype.toHexDOM_sub=function(e,t,i,n,o){if(!(n>=o)){var r=document.createElement("span");r.className=t,r.appendChild(document.createTextNode(i.hexDump(n,o))),e.appendChild(r)}},pidCrypt.ASN1.prototype.toHexDOM=function(){var e=document.createElement("span");if(e.className="hex",this.head.hexNode=e,this.head.onmouseover=function(){this.hexNode.className="hexCurrent"},this.head.onmouseout=function(){this.hexNode.className="hex"},this.toHexDOM_sub(e,"tag",this.stream,this.posStart(),this.posStart()+1),this.toHexDOM_sub(e,0<=this.length?"dlen":"ulen",this.stream,this.posStart()+1,this.posContent()),null==this.sub)e.appendChild(document.createTextNode(this.stream.hexDump(this.posContent(),this.posEnd())));else if(0<this.sub.length){var t=this.sub[0],i=this.sub[this.sub.length-1];this.toHexDOM_sub(e,"intro",this.stream,this.posContent(),t.posStart());for(var n=0,o=this.sub.length;n<o;++n)e.appendChild(this.sub[n].toHexDOM());this.toHexDOM_sub(e,"outro",this.stream,i.posEnd(),this.posEnd())}return e},pidCrypt.ASN1.decodeLength=function(e){var t=e.get(),i=127&t;if(i==t)return i;if(3<i)throw"Length over 24 bits not supported at position "+(e.pos-1);if(0==i)return-1;t=0;for(var n=0;n<i;++n)t=t<<8|e.get();return t},pidCrypt.ASN1.hasContent=function(e,t,i){if(32&e)return!0;if(3>e||4<e)return!1;var n=new Stream(i);if(3==e&&n.get(),1&n.get()>>6)return!1;try{var o=pidCrypt.ASN1.decodeLength(n);return n.pos-i.pos+o==t}catch(e){return!1}},pidCrypt.ASN1.decode=function(e){e instanceof Stream||(e=new Stream(e,0));var t=new Stream(e),i=e.get(),n=pidCrypt.ASN1.decodeLength(e),o=e.pos-t.pos,r=null;if(pidCrypt.ASN1.hasContent(i,n,e)){var a=e.pos;if(3==i&&e.get(),r=[],0<=n){for(var s=a+n;e.pos<s;)r[r.length]=pidCrypt.ASN1.decode(e);if(e.pos!=s)throw"Content size is not correct for container starting at offset "+a}else try{for(;;){var l=pidCrypt.ASN1.decode(e);if(0==l.tag)break;r[r.length]=l}n=a-e.pos}catch(e){throw"Exception while decoding undefined length content: "+e}}else e.pos+=n;return new pidCrypt.ASN1(t,o,n,i,r)},pidCrypt.ASN1.test=function(){for(var e=[{value:[39],expected:39},{value:[129,201],expected:201},{value:[131,254,220,186],expected:16702650}],t=0,i=e.length;t<i;++t){var n=new Stream(e[t].value,0),o=pidCrypt.ASN1.decodeLength(n);o!=e[t].expected&&document.write("In test["+t+"] expected "+e[t].expected+" got "+o+"\n")}});var dbits,canary=0xdeadbeefcafe,j_lm=15715070==(16777215&canary);function BigInteger(e,t,i){null!=e&&("number"==typeof e?this.fromNumber(e,t,i):null==t&&"string"!=typeof e?this.fromString(e,256):this.fromString(e,t))}function nbi(){return new BigInteger(null)}function am1(e,t,i,n,o,r){for(;0<=--r;){var a=t*this[e++]+i[n]+o;o=Math.floor(a/67108864),i[n++]=67108863&a}return o}function am2(e,t,i,n,o,r){for(var a=32767&t,s=t>>15;0<=--r;){var l=32767&this[e],c=this[e++]>>15,p=s*l+c*a;o=((l=a*l+((32767&p)<<15)+i[n]+(1073741823&o))>>>30)+(p>>>15)+s*c+(o>>>30),i[n++]=1073741823&l}return o}function am3(e,t,i,n,o,r){for(var a=16383&t,s=t>>14;0<=--r;){var l=16383&this[e],c=this[e++]>>14,p=s*l+c*a;o=((l=a*l+((16383&p)<<14)+i[n]+o)>>28)+(p>>14)+s*c,i[n++]=268435455&l}return o}j_lm&&"Microsoft Internet Explorer"==navigator.appName?(BigInteger.prototype.am=am2,dbits=30):j_lm&&"Netscape"!=navigator.appName?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP;var rr,vv,BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=[];for(rr="0".charCodeAt(0),vv=0;9>=vv;++vv)BI_RC[rr++]=vv;for(rr="a".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=vv;for(rr="A".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=vv;function int2char(e){return BI_RM.charAt(e)}function intAt(e,t){var i=BI_RC[e.charCodeAt(t)];return null==i?-1:i}function bnpCopyTo(e){for(var t=this.t-1;0<=t;--t)e[t]=this[t];e.t=this.t,e.s=this.s}function bnpFromInt(e){this.t=1,this.s=0>e?-1:0,0<e?this[0]=e:-1>e?this[0]=e+DV:this.t=0}function nbv(e){var t=nbi();return t.fromInt(e),t}function bnpFromString(e,t){var i;if(16==t)i=4;else if(8==t)i=3;else if(256==t)i=8;else if(2==t)i=1;else if(32==t)i=5;else{if(4!=t)return void this.fromRadix(e,t);i=2}this.t=0,this.s=0;for(var n=e.length,o=!1,r=0;0<=--n;){var a=8==i?255&e[n]:intAt(e,n);0>a?"-"==e.charAt(n)&&(o=!0):(o=!1,0==r?this[this.t++]=a:r+i>this.DB?(this[this.t-1]|=(a&(1<<this.DB-r)-1)<<r,this[this.t++]=a>>this.DB-r):this[this.t-1]|=a<<r,(r+=i)>=this.DB&&(r-=this.DB))}8==i&&0!=(128&e[0])&&(this.s=-1,0<r&&(this[this.t-1]|=(1<<this.DB-r)-1<<r)),this.clamp(),o&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){for(var e=this.s&this.DM;0<this.t&&this[this.t-1]==e;)--this.t}function bnToString(e){if(0>this.s)return"-"+this.negate().toString(e);var t;if(16==e)t=4;else if(8==e)t=3;else if(2==e)t=1;else if(32==e)t=5;else{if(4!=e)return this.toRadix(e);t=2}var i,n=(1<<t)-1,o=!1,r="",a=this.t,s=this.DB-a*this.DB%t;if(0<a--)for(s<this.DB&&0<(i=this[a]>>s)&&(o=!0,r=int2char(i));0<=a;)s<t?(i=(this[a]&(1<<s)-1)<<t-s,i|=this[--a]>>(s+=this.DB-t)):(i=this[a]>>(s-=t)&n,0>=s&&(s+=this.DB,--a)),0<i&&(o=!0),o&&(r+=int2char(i));return o?r:"0"}function bnNegate(){var e=nbi();return BigInteger.ZERO.subTo(this,e),e}function bnAbs(){return 0>this.s?this.negate():this}function bnCompareTo(e){var t=this.s-e.s;if(0!=t)return t;var i=this.t;if(0!=(t=i-e.t))return t;for(;0<=--i;)if(0!=(t=this[i]-e[i]))return t;return 0}function nbits(e){var t,i=1;return 0!=(t=e>>>16)&&(e=t,i+=16),0!=(t=e>>8)&&(e=t,i+=8),0!=(t=e>>4)&&(e=t,i+=4),0!=(t=e>>2)&&(e=t,i+=2),0!=(t=e>>1)&&(e=t,i+=1),i}function bnBitLength(){return 0>=this.t?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(e,t){var i;for(i=this.t-1;0<=i;--i)t[i+e]=this[i];for(i=e-1;0<=i;--i)t[i]=0;t.t=this.t+e,t.s=this.s}function bnpDRShiftTo(e,t){for(var i=e;i<this.t;++i)t[i-e]=this[i];t.t=Math.max(this.t-e,0),t.s=this.s}function bnpLShiftTo(e,t){var i,n=e%this.DB,o=this.DB-n,r=(1<<o)-1,a=Math.floor(e/this.DB),s=this.s<<n&this.DM;for(i=this.t-1;0<=i;--i)t[i+a+1]=this[i]>>o|s,s=(this[i]&r)<<n;for(i=a-1;0<=i;--i)t[i]=0;t[a]=s,t.t=this.t+a+1,t.s=this.s,t.clamp()}function bnpRShiftTo(e,t){t.s=this.s;var i=Math.floor(e/this.DB);if(i>=this.t)t.t=0;else{var n=e%this.DB,o=this.DB-n,r=(1<<n)-1;t[0]=this[i]>>n;for(var a=i+1;a<this.t;++a)t[a-i-1]|=(this[a]&r)<<o,t[a-i]=this[a]>>n;0<n&&(t[this.t-i-1]|=(this.s&r)<<o),t.t=this.t-i,t.clamp()}}function bnpSubTo(e,t){for(var i=0,n=0,o=Math.min(e.t,this.t);i<o;)n+=this[i]-e[i],t[i++]=n&this.DM,n>>=this.DB;if(e.t<this.t){for(n-=e.s;i<this.t;)n+=this[i],t[i++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;i<e.t;)n-=e[i],t[i++]=n&this.DM,n>>=this.DB;n-=e.s}t.s=0>n?-1:0,-1>n?t[i++]=this.DV+n:0<n&&(t[i++]=n),t.t=i,t.clamp()}function bnpMultiplyTo(e,t){var i=this.abs(),n=e.abs(),o=i.t;for(t.t=o+n.t;0<=--o;)t[o]=0;for(o=0;o<n.t;++o)t[o+i.t]=i.am(0,n[o],t,o,0,i.t);t.s=0,t.clamp(),this.s!=e.s&&BigInteger.ZERO.subTo(t,t)}function bnpSquareTo(e){for(var t=this.abs(),i=e.t=2*t.t;0<=--i;)e[i]=0;for(i=0;i<t.t-1;++i){var n=t.am(i,t[i],e,2*i,0,1);(e[i+t.t]+=t.am(i+1,2*t[i],e,2*i+1,n,t.t-i-1))>=t.DV&&(e[i+t.t]-=t.DV,e[i+t.t+1]=1)}0<e.t&&(e[e.t-1]+=t.am(i,t[i],e,2*i,0,1)),e.s=0,e.clamp()}function bnpDivRemTo(e,t,i){var n=e.abs();if(!(0>=n.t)){var o=this.abs();if(o.t<n.t)return null!=t&&t.fromInt(0),void(null!=i&&this.copyTo(i));null==i&&(i=nbi());var r=nbi(),a=this.s,s=e.s,l=this.DB-nbits(n[n.t-1]);0<l?(n.lShiftTo(l,r),o.lShiftTo(l,i)):(n.copyTo(r),o.copyTo(i));var c=r.t,p=r[c-1];if(0!=p){var h=p*(1<<this.F1)+(1<c?r[c-2]>>this.F2:0),d=this.FV/h,u=(1<<this.F1)/h,m=1<<this.F2,f=i.t,g=f-c,y=null==t?nbi():t;for(r.dlShiftTo(g,y),0<=i.compareTo(y)&&(i[i.t++]=1,i.subTo(y,i)),BigInteger.ONE.dlShiftTo(c,y),y.subTo(r,r);r.t<c;)r[r.t++]=0;for(;0<=--g;){var _=i[--f]==p?this.DM:Math.floor(i[f]*d+(i[f-1]+m)*u);if((i[f]+=r.am(0,_,i,g,0,c))<_)for(r.dlShiftTo(g,y),i.subTo(y,i);i[f]<--_;)i.subTo(y,i)}null!=t&&(i.drShiftTo(c,t),a!=s&&BigInteger.ZERO.subTo(t,t)),i.t=c,i.clamp(),0<l&&i.rShiftTo(l,i),0>a&&BigInteger.ZERO.subTo(i,i)}}}function bnMod(e){var t=nbi();return this.abs().divRemTo(e,null,t),0>this.s&&0<t.compareTo(BigInteger.ZERO)&&e.subTo(t,t),t}function Classic(e){this.m=e}function cConvert(e){return 0>e.s||0<=e.compareTo(this.m)?e.mod(this.m):e}function cRevert(e){return e}function cReduce(e){e.divRemTo(this.m,null,e)}function cMulTo(e,t,i){e.multiplyTo(t,i),this.reduce(i)}function cSqrTo(e,t){e.squareTo(t),this.reduce(t)}function bnpInvDigit(){if(1>this.t)return 0;var e=this[0];if(0==(1&e))return 0;var t=3&e;return 0<(t=(t=65535&(t=255&(t=15&t*(2-(15&e)*t))*(2-(255&e)*t))*(2-(65535&(65535&e)*t)))*(2-e*t%this.DV)%this.DV)?this.DV-t:-t}function Montgomery(e){this.m=e,this.mp=e.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<e.DB-15)-1,this.mt2=2*e.t}function montConvert(e){var t=nbi();return e.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),0>e.s&&0<t.compareTo(BigInteger.ZERO)&&this.m.subTo(t,t),t}function montRevert(e){var t=nbi();return e.copyTo(t),this.reduce(t),t}function montReduce(e){for(;e.t<=this.mt2;)e[e.t++]=0;for(var t=0;t<this.m.t;++t){var i=32767&e[t],n=i*this.mpl+((i*this.mph+(e[t]>>15)*this.mpl&this.um)<<15)&e.DM;for(e[i=t+this.m.t]+=this.m.am(0,n,e,t,0,this.m.t);e[i]>=e.DV;)e[i]-=e.DV,e[++i]++}e.clamp(),e.drShiftTo(this.m.t,e),0<=e.compareTo(this.m)&&e.subTo(this.m,e)}function montSqrTo(e,t){e.squareTo(t),this.reduce(t)}function montMulTo(e,t,i){e.multiplyTo(t,i),this.reduce(i)}function bnpIsEven(){return 0==(0<this.t?1&this[0]:this.s)}function bnpExp(e,t){if(4294967295<e||1>e)return BigInteger.ONE;var i=nbi(),n=nbi(),o=t.convert(this),r=nbits(e)-1;for(o.copyTo(i);0<=--r;)if(t.sqrTo(i,n),0<(e&1<<r))t.mulTo(n,o,i);else{var a=i;i=n,n=a}return t.revert(i)}function bnModPowInt(e,t){var i;return i=256>e||t.isEven()?new Classic(t):new Montgomery(t),this.exp(e,i)}function bnClone(){var e=nbi();return this.copyTo(e),e}function bnIntValue(){if(0>this.s){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return 0==this.t?this.s:this[0]<<24>>24}function bnShortValue(){return 0==this.t?this.s:this[0]<<16>>16}function bnpChunkSize(e){return Math.floor(Math.LN2*this.DB/Math.log(e))}function bnSigNum(){return 0>this.s?-1:0>=this.t||1==this.t&&0>=this[0]?0:1}function bnpToRadix(e){if(null==e&&(e=10),0==this.signum()||2>e||36<e)return"0";var t=this.chunkSize(e),i=Math.pow(e,t),n=nbv(i),o=nbi(),r=nbi(),a="";for(this.divRemTo(n,o,r);0<o.signum();)a=(i+r.intValue()).toString(e).substr(1)+a,o.divRemTo(n,o,r);return r.intValue().toString(e)+a}function bnpFromRadix(e,t){this.fromInt(0),null==t&&(t=10);for(var i,n=this.chunkSize(t),o=Math.pow(t,n),r=!1,a=0,s=0,l=0;l<e.length;++l)0>(i=intAt(e,l))?"-"==e.charAt(l)&&0==this.signum()&&(r=!0):(s=t*s+i,++a>=n&&(this.dMultiply(o),this.dAddOffset(s,0),a=0,s=0));0<a&&(this.dMultiply(Math.pow(t,a)),this.dAddOffset(s,0)),r&&BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(e,t,i){if("number"==typeof t)if(2>e)this.fromInt(1);else for(this.fromNumber(e,i),this.testBit(e-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(e-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(t);)this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(BigInteger.ONE.shiftLeft(e-1),this);else{var n=[],o=7&e;n.length=1+(e>>3),t.nextBytes(n),0<o?n[0]&=(1<<o)-1:n[0]=0,this.fromString(n,256)}}function bnToByteArray(){var e=this.t,t=[];t[0]=this.s;var i,n=this.DB-e*this.DB%8,o=0;if(0<e--)for(n<this.DB&&(i=this[e]>>n)!=(this.s&this.DM)>>n&&(t[o++]=i|this.s<<this.DB-n);0<=e;)8>n?(i=(this[e]&(1<<n)-1)<<8-n,i|=this[--e]>>(n+=this.DB-8)):(i=255&this[e]>>(n-=8),0>=n&&(n+=this.DB,--e)),0!=(128&i)&&(i|=-256),0==o&&(128&this.s)!=(128&i)&&++o,(0<o||i!=this.s)&&(t[o++]=i);return t}function bnEquals(e){return 0==this.compareTo(e)}function bnMin(e){return 0>this.compareTo(e)?this:e}function bnMax(e){return 0<this.compareTo(e)?this:e}function bnpBitwiseTo(e,t,i){var n,o,r=Math.min(e.t,this.t);for(n=0;n<r;++n)i[n]=t(this[n],e[n]);if(e.t<this.t){for(o=e.s&this.DM,n=r;n<this.t;++n)i[n]=t(this[n],o);i.t=this.t}else{for(o=this.s&this.DM,n=r;n<e.t;++n)i[n]=t(o,e[n]);i.t=e.t}i.s=t(this.s,e.s),i.clamp()}function op_and(e,t){return e&t}function bnAnd(e){var t=nbi();return this.bitwiseTo(e,op_and,t),t}function op_or(e,t){return e|t}function bnOr(e){var t=nbi();return this.bitwiseTo(e,op_or,t),t}function op_xor(e,t){return e^t}function bnXor(e){var t=nbi();return this.bitwiseTo(e,op_xor,t),t}function op_andnot(e,t){return e&~t}function bnAndNot(e){var t=nbi();return this.bitwiseTo(e,op_andnot,t),t}function bnNot(){for(var e=nbi(),t=0;t<this.t;++t)e[t]=this.DM&~this[t];return e.t=this.t,e.s=~this.s,e}function bnShiftLeft(e){var t=nbi();return 0>e?this.rShiftTo(-e,t):this.lShiftTo(e,t),t}function bnShiftRight(e){var t=nbi();return 0>e?this.lShiftTo(-e,t):this.rShiftTo(e,t),t}function lbit(e){if(0==e)return-1;var t=0;return 0==(65535&e)&&(e>>=16,t+=16),0==(255&e)&&(e>>=8,t+=8),0==(15&e)&&(e>>=4,t+=4),0==(3&e)&&(e>>=2,t+=2),0==(1&e)&&++t,t}function bnGetLowestSetBit(){for(var e=0;e<this.t;++e)if(0!=this[e])return e*this.DB+lbit(this[e]);return 0>this.s?this.t*this.DB:-1}function cbit(e){for(var t=0;0!=e;)e&=e-1,++t;return t}function bnBitCount(){for(var e=0,t=this.s&this.DM,i=0;i<this.t;++i)e+=cbit(this[i]^t);return e}function bnTestBit(e){var t=Math.floor(e/this.DB);return t>=this.t?0!=this.s:0!=(this[t]&1<<e%this.DB)}function bnpChangeBit(e,t){var i=BigInteger.ONE.shiftLeft(e);return this.bitwiseTo(i,t,i),i}function bnSetBit(e){return this.changeBit(e,op_or)}function bnClearBit(e){return this.changeBit(e,op_andnot)}function bnFlipBit(e){return this.changeBit(e,op_xor)}function bnpAddTo(e,t){for(var i=0,n=0,o=Math.min(e.t,this.t);i<o;)n+=this[i]+e[i],t[i++]=n&this.DM,n>>=this.DB;if(e.t<this.t){for(n+=e.s;i<this.t;)n+=this[i],t[i++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;i<e.t;)n+=e[i],t[i++]=n&this.DM,n>>=this.DB;n+=e.s}t.s=0>n?-1:0,0<n?t[i++]=n:-1>n&&(t[i++]=this.DV+n),t.t=i,t.clamp()}function bnAdd(e){var t=nbi();return this.addTo(e,t),t}function bnSubtract(e){var t=nbi();return this.subTo(e,t),t}function bnMultiply(e){var t=nbi();return this.multiplyTo(e,t),t}function bnDivide(e){var t=nbi();return this.divRemTo(e,t,null),t}function bnRemainder(e){var t=nbi();return this.divRemTo(e,null,t),t}function bnDivideAndRemainder(e){var t=nbi(),i=nbi();return this.divRemTo(e,t,i),[t,i]}function bnpDMultiply(e){this[this.t]=this.am(0,e-1,this,0,0,this.t),++this.t,this.clamp()}function bnpDAddOffset(e,t){for(;this.t<=t;)this[this.t++]=0;for(this[t]+=e;this[t]>=this.DV;)this[t]-=this.DV,++t>=this.t&&(this[this.t++]=0),++this[t]}function NullExp(){}function nNop(e){return e}function nMulTo(e,t,i){e.multiplyTo(t,i)}function nSqrTo(e,t){e.squareTo(t)}function bnPow(e){return this.exp(e,new NullExp)}function bnpMultiplyLowerTo(e,t,i){var n,o=Math.min(this.t+e.t,t);for(i.s=0,i.t=o;0<o;)i[--o]=0;for(n=i.t-this.t;o<n;++o)i[o+this.t]=this.am(0,e[o],i,o,0,this.t);for(n=Math.min(e.t,t);o<n;++o)this.am(0,e[o],i,o,0,t-o);i.clamp()}function bnpMultiplyUpperTo(e,t,i){--t;var n=i.t=this.t+e.t-t;for(i.s=0;0<=--n;)i[n]=0;for(n=Math.max(t-this.t,0);n<e.t;++n)i[this.t+n-t]=this.am(t-n,e[n],i,0,0,this.t+n-t);i.clamp(),i.drShiftTo(1,i)}function Barrett(e){this.r2=nbi(),this.q3=nbi(),BigInteger.ONE.dlShiftTo(2*e.t,this.r2),this.mu=this.r2.divide(e),this.m=e}function barrettConvert(e){if(0>e.s||e.t>2*this.m.t)return e.mod(this.m);if(0>e.compareTo(this.m))return e;var t=nbi();return e.copyTo(t),this.reduce(t),t}function barrettRevert(e){return e}function barrettReduce(e){for(e.drShiftTo(this.m.t-1,this.r2),e.t>this.m.t+1&&(e.t=this.m.t+1,e.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);0>e.compareTo(this.r2);)e.dAddOffset(1,this.m.t+1);for(e.subTo(this.r2,e);0<=e.compareTo(this.m);)e.subTo(this.m,e)}function barrettSqrTo(e,t){e.squareTo(t),this.reduce(t)}function barrettMulTo(e,t,i){e.multiplyTo(t,i),this.reduce(i)}function bnModPow(e,t){var i,n,o=e.bitLength(),r=nbv(1);if(0>=o)return r;i=18>o?1:48>o?3:144>o?4:768>o?5:6,n=8>o?new Classic(t):t.isEven()?new Barrett(t):new Montgomery(t);var a=[],s=3,l=i-1,c=(1<<i)-1;if(a[1]=n.convert(this),1<i){var p=nbi();for(n.sqrTo(a[1],p);s<=c;)a[s]=nbi(),n.mulTo(p,a[s-2],a[s]),s+=2}var h,d,u=e.t-1,m=!0,f=nbi();for(o=nbits(e[u])-1;0<=u;){for(o>=l?h=e[u]>>o-l&c:(h=(e[u]&(1<<o+1)-1)<<l-o,0<u&&(h|=e[u-1]>>this.DB+o-l)),s=i;0==(1&h);)h>>=1,--s;if(0>(o-=s)&&(o+=this.DB,--u),m)a[h].copyTo(r),m=!1;else{for(;1<s;)n.sqrTo(r,f),n.sqrTo(f,r),s-=2;0<s?n.sqrTo(r,f):(d=r,r=f,f=d),n.mulTo(f,a[h],r)}for(;0<=u&&0==(e[u]&1<<o);)n.sqrTo(r,f),d=r,r=f,f=d,0>--o&&(o=this.DB-1,--u)}return n.revert(r)}function bnGCD(e){var t=0>this.s?this.negate():this.clone(),i=0>e.s?e.negate():e.clone();if(0>t.compareTo(i)){var n=t;t=i,i=n}var o=t.getLowestSetBit(),r=i.getLowestSetBit();if(0>r)return t;for(o<r&&(r=o),0<r&&(t.rShiftTo(r,t),i.rShiftTo(r,i));0<t.signum();)0<(o=t.getLowestSetBit())&&t.rShiftTo(o,t),0<(o=i.getLowestSetBit())&&i.rShiftTo(o,i),0<=t.compareTo(i)?(t.subTo(i,t),t.rShiftTo(1,t)):(i.subTo(t,i),i.rShiftTo(1,i));return 0<r&&i.lShiftTo(r,i),i}function bnpModInt(e){if(0>=e)return 0;var t=this.DV%e,i=0>this.s?e-1:0;if(0<this.t)if(0==t)i=this[0]%e;else for(var n=this.t-1;0<=n;--n)i=(t*i+this[n])%e;return i}function bnModInverse(e){var t=e.isEven();if(this.isEven()&&t||0==e.signum())return BigInteger.ZERO;for(var i=e.clone(),n=this.clone(),o=nbv(1),r=nbv(0),a=nbv(0),s=nbv(1);0!=i.signum();){for(;i.isEven();)i.rShiftTo(1,i),t?(o.isEven()&&r.isEven()||(o.addTo(this,o),r.subTo(e,r)),o.rShiftTo(1,o)):r.isEven()||r.subTo(e,r),r.rShiftTo(1,r);for(;n.isEven();)n.rShiftTo(1,n),t?(a.isEven()&&s.isEven()||(a.addTo(this,a),s.subTo(e,s)),a.rShiftTo(1,a)):s.isEven()||s.subTo(e,s),s.rShiftTo(1,s);0<=i.compareTo(n)?(i.subTo(n,i),t&&o.subTo(a,o),r.subTo(s,r)):(n.subTo(i,n),t&&a.subTo(o,a),s.subTo(r,s))}return 0!=n.compareTo(BigInteger.ONE)?BigInteger.ZERO:0<=s.compareTo(e)?s.subtract(e):0>s.signum()?(s.addTo(e,s),0>s.signum()?s.add(e):s):s}Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqrTo=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnpCopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShiftTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.prototype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInteger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,BigInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigInteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.prototype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInteger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1),NullExp.prototype.convert=nNop,NullExp.prototype.revert=nNop,NullExp.prototype.mulTo=nMulTo,NullExp.prototype.sqrTo=nSqrTo,Barrett.prototype.convert=barrettConvert,Barrett.prototype.revert=barrettRevert,Barrett.prototype.reduce=barrettReduce,Barrett.prototype.mulTo=barrettMulTo,Barrett.prototype.sqrTo=barrettSqrTo;var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509],lplim=(1<<26)/lowprimes[lowprimes.length-1];function bnIsProbablePrime(e){var t,i=this.abs();if(1==i.t&&i[0]<=lowprimes[lowprimes.length-1]){for(t=0;t<lowprimes.length;++t)if(i[0]==lowprimes[t])return!0;return!1}if(i.isEven())return!1;for(t=1;t<lowprimes.length;){for(var n=lowprimes[t],o=t+1;o<lowprimes.length&&n<lplim;)n*=lowprimes[o++];for(n=i.modInt(n);t<o;)if(0==n%lowprimes[t++])return!1}return i.millerRabin(e)}function bnpMillerRabin(e){var t=this.subtract(BigInteger.ONE),i=t.getLowestSetBit();if(0>=i)return!1;var n=t.shiftRight(i);(e=e+1>>1)>lowprimes.length&&(e=lowprimes.length);for(var o=nbi(),r=0;r<e;++r){o.fromInt(lowprimes[r]);var a=o.modPow(n,this);if(0!=a.compareTo(BigInteger.ONE)&&0!=a.compareTo(t)){for(var s=1;s++<i&&0!=a.compareTo(t);)if(0==(a=a.modPowInt(2,this)).compareTo(BigInteger.ONE))return!1;if(0!=a.compareTo(t))return!1}}return!0}function SecureRandom(){if(this.rng_state,this.rng_pool,this.rng_pptr,this.rng_seed_int=function(e){this.rng_pool[this.rng_pptr++]^=255&e,this.rng_pool[this.rng_pptr++]^=255&e>>8,this.rng_pool[this.rng_pptr++]^=255&e>>16,this.rng_pool[this.rng_pptr++]^=255&e>>24,this.rng_pptr>=rng_psize&&(this.rng_pptr-=rng_psize)},this.rng_seed_time=function(){this.rng_seed_int((new Date).getTime())},null==this.rng_pool){var e;if(this.rng_pool=[],this.rng_pptr=0,"Netscape"==navigator.appName&&"5">navigator.appVersion&&window.crypto){var t=window.crypto.random(32);for(e=0;e<t.length;++e)this.rng_pool[this.rng_pptr++]=255&t.charCodeAt(e)}for(;this.rng_pptr<rng_psize;)e=Math.floor(65536*Math.random()),this.rng_pool[this.rng_pptr++]=e>>>8,this.rng_pool[this.rng_pptr++]=255&e;this.rng_pptr=0,this.rng_seed_time()}this.rng_get_byte=function(){if(null==this.rng_state){for(this.rng_seed_time(),this.rng_state=prng_newstate(),this.rng_state.init(this.rng_pool),this.rng_pptr=0;this.rng_pptr<this.rng_pool.length;++this.rng_pptr)this.rng_pool[this.rng_pptr]=0;this.rng_pptr=0}return this.rng_state.next()},this.nextBytes=function(e){var t;for(t=0;t<e.length;++t)e[t]=this.rng_get_byte()}}function Arcfour(){this.i=0,this.j=0,this.S=[]}function ARC4init(e){var t,i,n;for(t=0;256>t;++t)this.S[t]=t;for(i=0,t=0;256>t;++t)i=255&i+this.S[t]+e[t%e.length],n=this.S[t],this.S[t]=this.S[i],this.S[i]=n;this.i=0,this.j=0}function ARC4next(){var e;return this.i=255&this.i+1,this.j=255&this.j+this.S[this.i],e=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=e,this.S[255&e+this.S[this.i]]}function prng_newstate(){return new Arcfour}BigInteger.prototype.chunkSize=bnpChunkSize,BigInteger.prototype.toRadix=bnpToRadix,BigInteger.prototype.fromRadix=bnpFromRadix,BigInteger.prototype.fromNumber=bnpFromNumber,BigInteger.prototype.bitwiseTo=bnpBitwiseTo,BigInteger.prototype.changeBit=bnpChangeBit,BigInteger.prototype.addTo=bnpAddTo,BigInteger.prototype.dMultiply=bnpDMultiply,BigInteger.prototype.dAddOffset=bnpDAddOffset,BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo,BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo,BigInteger.prototype.modInt=bnpModInt,BigInteger.prototype.millerRabin=bnpMillerRabin,BigInteger.prototype.clone=bnClone,BigInteger.prototype.intValue=bnIntValue,BigInteger.prototype.byteValue=bnByteValue,BigInteger.prototype.shortValue=bnShortValue,BigInteger.prototype.signum=bnSigNum,BigInteger.prototype.toByteArray=bnToByteArray,BigInteger.prototype.equals=bnEquals,BigInteger.prototype.min=bnMin,BigInteger.prototype.max=bnMax,BigInteger.prototype.and=bnAnd,BigInteger.prototype.or=bnOr,BigInteger.prototype.xor=bnXor,BigInteger.prototype.andNot=bnAndNot,BigInteger.prototype.not=bnNot,BigInteger.prototype.shiftLeft=bnShiftLeft,BigInteger.prototype.shiftRight=bnShiftRight,BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit,BigInteger.prototype.bitCount=bnBitCount,BigInteger.prototype.testBit=bnTestBit,BigInteger.prototype.setBit=bnSetBit,BigInteger.prototype.clearBit=bnClearBit,BigInteger.prototype.flipBit=bnFlipBit,BigInteger.prototype.add=bnAdd,BigInteger.prototype.subtract=bnSubtract,BigInteger.prototype.multiply=bnMultiply,BigInteger.prototype.divide=bnDivide,BigInteger.prototype.remainder=bnRemainder,BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder,BigInteger.prototype.modPow=bnModPow,BigInteger.prototype.modInverse=bnModInverse,BigInteger.prototype.pow=bnPow,BigInteger.prototype.gcd=bnGCD,BigInteger.prototype.isProbablePrime=bnIsProbablePrime,Arcfour.prototype.init=ARC4init,Arcfour.prototype.next=ARC4next;var rng_psize=256;if(void 0!==pidCrypt&&void 0!==BigInteger&&void 0!==SecureRandom&&void 0!==Arcfour){function parseBigInt(e,t){return new BigInteger(e,t)}function linebrk(e,t){for(var i="",n=0;n+t<e.length;)i+=e.substring(n,n+t)+"\n",n+=t;return i+e.substring(n,e.length)}function byte2Hex(e){return 16>e?"0"+e.toString(16):e.toString(16)}function pkcs1unpad2(e,t){for(var i=e.toByteArray(),n=0;n<i.length&&0==i[n];)++n;if(i.length-n!=t-1||2!=i[n])return null;for(++n;0!=i[n];)if(++n>=i.length)return null;for(var o="";++n<i.length;)o+=String.fromCharCode(i[n]);return o}function pkcs1pad2(e,t){if(t<e.length+11)return alert("Message too long for RSA"),null;for(var i=[],n=e.length-1;0<=n&&0<t;)i[--t]=e.charCodeAt(n--);i[--t]=0;for(var o=new SecureRandom,r=[];2<t;){for(r[0]=0;0==r[0];)o.nextBytes(r);i[--t]=r[0]}return i[--t]=2,i[--t]=0,new BigInteger(i)}pidCrypt.RSA=function(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null},pidCrypt.RSA.prototype.doPrivate=function(e){if(null==this.p||null==this.q)return e.modPow(this.d,this.n);for(var t=e.mod(this.p).modPow(this.dmp1,this.p),i=e.mod(this.q).modPow(this.dmq1,this.q);0>t.compareTo(i);)t=t.add(this.p);return t.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)},pidCrypt.RSA.prototype.setPublic=function(e,t,i){void 0===i&&(i=16),null!=e&&null!=t&&0<e.length&&0<t.length?(this.n=parseBigInt(e,i),this.e=parseInt(t,i)):alert("Invalid RSA public key")},pidCrypt.RSA.prototype.doPublic=function(e){return e.modPowInt(this.e,this.n)},pidCrypt.RSA.prototype.encryptRaw=function(e){var t=pkcs1pad2(e,this.n.bitLength()+7>>3);if(null==t)return null;var i=this.doPublic(t);if(null==i)return null;var n=i.toString(16);return 0==(1&n.length)?n:"0"+n},pidCrypt.RSA.prototype.encrypt=function(e){return e=pidCryptUtil.encodeBase64(e),this.encryptRaw(e)},pidCrypt.RSA.prototype.decryptRaw=function(e){var t=parseBigInt(e,16),i=this.doPrivate(t);return null==i?null:pkcs1unpad2(i,this.n.bitLength()+7>>3)},pidCrypt.RSA.prototype.decrypt=function(e){var t=this.decryptRaw(e);return t=t?pidCryptUtil.decodeBase64(t):""},pidCrypt.RSA.prototype.setPrivate=function(e,t,i,n){void 0===n&&(n=16),null!=e&&null!=t&&0<e.length&&0<t.length?(this.n=parseBigInt(e,n),this.e=parseInt(t,n),this.d=parseBigInt(i,n)):alert("Invalid RSA private key")},pidCrypt.RSA.prototype.setPrivateEx=function(e,t,i,n,o,r,a,s,l){void 0===l&&(l=16),null!=e&&null!=t&&0<e.length&&0<t.length?(this.n=parseBigInt(e,l),this.e=parseInt(t,l),this.d=parseBigInt(i,l),this.p=parseBigInt(n,l),this.q=parseBigInt(o,l),this.dmp1=parseBigInt(r,l),this.dmq1=parseBigInt(a,l),this.coeff=parseBigInt(s,l)):alert("Invalid RSA private key")},pidCrypt.RSA.prototype.generate=function(e,t){var i=new SecureRandom,n=e>>1;this.e=parseInt(t,16);for(var o=new BigInteger(t,16);;){for(;this.p=new BigInteger(e-n,1,i),0!=this.p.subtract(BigInteger.ONE).gcd(o).compareTo(BigInteger.ONE)||!this.p.isProbablePrime(10););for(;this.q=new BigInteger(n,1,i),0!=this.q.subtract(BigInteger.ONE).gcd(o).compareTo(BigInteger.ONE)||!this.q.isProbablePrime(10););if(0>=this.p.compareTo(this.q)){var r=this.p;this.p=this.q,this.q=r}var a=this.p.subtract(BigInteger.ONE),s=this.q.subtract(BigInteger.ONE),l=a.multiply(s);if(0==l.gcd(o).compareTo(BigInteger.ONE)){this.n=this.p.multiply(this.q),this.d=o.modInverse(l),this.dmp1=this.d.mod(a),this.dmq1=this.d.mod(s),this.coeff=this.q.modInverse(this.p);break}}},pidCrypt.RSA.prototype.getASNData=function(e){var t=[],i=0;if(e.value&&"INTEGER"==e.type&&(t[i++]=e.value),e.sub)for(var n=0;n<e.sub.length;n++)t=t.concat(this.getASNData(e.sub[n]));return t},pidCrypt.RSA.prototype.setKeyFromASN=function(e,t){var i=["N","E","D","P","Q","DP","DQ","C"],n={},o=this.getASNData(t);switch(e){case"Public":case"public":for(var r=0;r<o.length;r++)n[i[r]]=o[r].toLowerCase();this.setPublic(n.N,n.E,16);break;case"Private":case"private":for(r=1;r<o.length;r++)n[i[r-1]]=o[r].toLowerCase();this.setPrivateEx(n.N,n.E,n.D,n.P,n.Q,n.DP,n.DQ,n.C,16)}},pidCrypt.RSA.prototype.setPublicKeyFromASN=function(e){this.setKeyFromASN("public",e)},pidCrypt.RSA.prototype.setPrivateKeyFromASN=function(e){this.setKeyFromASN("private",e)},pidCrypt.RSA.prototype.getParameters=function(){var e={};return null!=this.n&&(e.n=this.n),e.e=this.e,null!=this.d&&(e.d=this.d),null!=this.p&&(e.p=this.p),null!=this.q&&(e.q=this.q),null!=this.dmp1&&(e.dmp1=this.dmp1),null!=this.dmq1&&(e.dmq1=this.dmq1),null!=this.coeff&&(e.c=this.coeff),e}}const certParser=function(e){for(var t=e.split("\n"),i=!1,n=!1,o="",r={info:"",salt:"",b64:"",aes:!1,mode:"",bits:0},a=0;a<t.length;a++)switch(o=t[a].substr(0,9),1==a&&"Proc-Type"!=o&&0==o.indexOf("M")&&(n=!0),o){case"-----BEGI":i=!0;break;case"Proc-Type":i&&(r.info=t[a]);break;case"DEK-Info:":if(i){var s=t[a].split(","),l=s[0].split(": ")[1].split("-");r.aes="AES"==l[0],r.mode=l[2],r.bits=parseInt(l[1]),r.salt=s[1].substr(0,16),r.iv=s[1]}break;case"":i&&(n=!0);break;case"-----END ":i&&(n=!1,i=!1);break;default:i&&n&&(r.b64+=pidCryptUtil.stripLineFeeds(t[a]))}return r},fire=function(e,t){const i=new CustomEvent(e,{detail:t});document.dispatchEvent(i)};function encryptVote(e,t){if(!e)return fire("oav-error-localize",["error_public_key_not_found"]),null;var i=certParser(e);if(!i.b64)return fire("oav-error-localize",["error_invalid_public_key"]),null;try{var n=pidCryptUtil.decodeBase64(i.b64),o=new pidCrypt.RSA,r=pidCrypt.ASN1.decode(pidCryptUtil.toByteArray(n)).toHexTree();o.setPublicKeyFromASN(r);var a=o.encrypt(JSON.stringify(t));return pidCryptUtil.fragment(pidCryptUtil.encodeBase64(pidCryptUtil.convertFromHex(a)),64)}catch(e){return fire("oav-error-localize",["error_encryption","err",e]),null}}var ballotEncryptionBehavior={encryptVote:encryptVote};const OavAppStyles=css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  app-header {
    z-index: 5000;
  }

  :host {
    display: block;
    --app-primary-color: #333;
    --app-secondary-color: black;
    --app-main-backround-color: #e0e0e0;
    --app-accent-color: var(--paper-orange-a700);
    --app-accent-color-light: var(--paper-orange-a200);
    --app-text-color: #ffffff;

    --paper-tabs-selection-bar-color: var(--paper-orange-a700);
    --paper-tabs-selection-bar: {
      color:var(--paper-orange-a700);
      border-bottom: 3px solid !important;
      border-bottom-color: var(--paper-orange-a700);
    };

    --primary-color-more-darker: var(--app-main-backround-color, #333);
    --primary-color: var(--app-main-backround-color, #333);

    color: var(--app-text-color);

    --app-header-background-color: var(--app-primary-color);
    --app-header-text-color: var(--app-text-color);
    --app-header-selected-color: var(--app-primary-color);
    --paper-icon-button-ink-color: var(--app-text-color);
  }

  app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: var(--app-header-background-color);
    color: var(--app-header-text-color);
    border-bottom: 1px solid #eee;
  }

  app-header[wide-and-ballot] {
    height: var(--app-budget-container-height, 238px);
    width: 100%;
    background-size: 1920px 238px;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: top;
    background-image: var(--app-budget-container-background-image);
  }

  [main-title] {
    font-size: 30px;
    /* In the narrow layout, the toolbar is offset by the width of the
    drawer button, and the text looks not centered. Add a padding to
    match that button */
    padding-right: 44px;
  }

  main {
    display: block;
  }

  .main-content {
  }

  .main-content[has-ballot] {
    padding-top: 150px;
  }

  .page {
    display: none;
  }

  .page[active] {
    display: block;
  }


  @media (min-width: 1024px) {
    .toolbar-list {
      display: block;
    }
    .menu-btn {
      display: none;
    }

    .main-content[has-ballot] {
      padding-top: 240px;
    }

    /* The drawer button isn't shown in the wide layout, so we don't
    need to offset the title */
    [main-title] {
      padding-right: 0px;
    }
  }

  .toolbar-top {
    background-color: var(--app-header-background-color);
  }

  app-toolbar {
  }

  .title {
    font-size: 24px;
  }

  paper-icon-button {
    width: 50px;
    height: 50px;
  }

  paper-icon-button.closeButton {
    width: 58px;
    height: 58px;
  }

  @media (max-width: 640px) {
    paper-icon-button {
      width: 40px;
      height: 40px;
    }

    paper-icon-button.closeButton {
      width: 46px;
      height: 46px;
    }
  }

  @media (max-width: 1024px) {
    .title {
      font-size: 17px;
    }
  }

  .exitIconInBudget {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
  }

  .helpIconInBudget  {
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
  }

  #helpContent h1 {
    line-height: 1em;
    font-size: 1.5em;
  }

  #favoriteIcon {
    color: var(--app-facvorite-icon-color, rgb(255,215,0));
    background-color: transparent;
    width: 50px;
    height: 50px;
    z-index: 2720;
    -webkit-filter: drop-shadow( 1px 1px 10px #5f5f5f );
    filter: drop-shadow( 1px 1px 10px #5f5f5f );
  }


  @media (max-width: 640px) {
    #favoriteIcon {
      width: 40px;
      height: 40px;
    }
  }

  .budgetContainer {
  }

  .largeSpinner {
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
  }

  [hidden] {
    display: none !important;
  }

  paper-dialog {
    background-color: var(--primary-background-color);
  }

  .welcomeDialog {
    font-size: 22px;
    max-width: 420px;
    width: 420px;
    padding: 8px;
    padding-top: 0;
    line-height: 1.3;
    margin: 8px;
    text-align: center;
    width: 100%;
    margin: 0 !important;
      padding: 0 !important;
  }

  .welcomeText {
    width: 420px;
    max-width: 420px;
    font-size: 15px;
    margin-top: 8px;
  }

  .welcomeLogo {
    padding: 0;
    margin: 0;
    margin-top: 8px;
    max-width: 280px;
    width: 280px;
    height: 116px;
  }

  .welcomeLogoContainer {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  paper-button.continueButton {
    background-color: var(--app-accent-color);
    color: #fff;
    margin: 8px;
    margin-bottom: 8px;
    font-size: 18px;
  }

  paper-button.generalButton {
    color: var(--app-accent-color);
    background-color: #fff;
    margin: 8px;
  }

  @media (max-width: 600px) {
    .welcomeDialog {
      font-size: 16px;
      padding: 8px;
      padding-top: 0;
      text-align: center;
    }

    .heading {
      font-size: 24px;
    }

    .welcomeText {
      width: 100%;
    }
    paper-button.continueButton {
      font-size: 16px;
    }
    .welcomeLogo {
      width: 200px;
      height: 83px;
    }
  }

  @media (max-width: 340px) {
    .welcomeDialog {
      font-size: 13px;
    }
    .heading {
      font-size: 19px;
    }
    paper-button.continueButton {
      font-size: 16px;
    }
    .welcomeLogo {
      margin-left: 16px;
      display: none;
    }
    .welcomeLogologoContainer {
      display: none;
    }
    paper-button.continueButton {
      margin-top: 0;
    }
  }

  .welcomeLogoContainer {
  }

  paper-dialog {
    z-index: 1000000;
  }

  .langSelectionText {
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .langSelect {
    cursor: pointer;
    margin-left: 4px;
  }

  .langSelect[is-selected] {
    text-decoration: underline;
  }
`;var oavAppStyles={OavAppStyles:OavAppStyles};const template$c=html`<iron-iconset-svg size="24" name="icons">
  <svg><defs>
    <g id="chat-bubble-outline"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path></g>
    <g id="mode-edit"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
    <g id="keyboard-arrow-down"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></g>
    <g id="keyboard-arrow-up"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></g>
    <g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
    <g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
    <g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
    <g id="closeExit"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
    <g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
    <g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
    <g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
    <g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
    <g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
    <g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
    <g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
    <g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
    <g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
    <g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
    <g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
    <g id="photo"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></g>
    <g id="picture-as-pdf"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"></path></g>
    <g id="place"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
    <g id="do-not-disturb"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></g>
    <g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
    <g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
  </defs></svg>
</iron-iconset-svg>`;document.head.appendChild(template$c.content);class SnackBar extends LitElement{static get properties(){return{active:{type:Boolean}}}static get styles(){return[css`
        :host {
          display: block;
          position: fixed;
          top: 100%;
          left: 0;
          right: 0;
          padding: 12px;
          background-color: var(--app-secondary-color);
          color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          text-align: center;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          transition-property: visibility, transform;
          transition-duration: 0.2s;
          visibility: hidden;
        }

        :host([active]) {
          visibility: visible;
          transform: translate3d(0, -100%, 0);
        }

        @media (min-width: 460px) {
          :host {
            width: 320px;
            margin: auto;
          }
        }
      `]}render(){return html$1`
      <slot></slot>
    `}}window.customElements.define("snack-bar",SnackBar),window.IntlMessageFormat=MessageFormat;class OavBaseElement extends LitElement{static get properties(){return{wide:{type:Boolean,value:!1},language:{type:String}}}constructor(){super()}activity(e,t){this.sendToGoogleAnalytics("send","event",t,e)}sendToGoogleAnalytics(e,t,i,n){"function"==typeof ga?i&&n?ga(e,t,i,n):ga(e,t):console.warn("Google analytics message not sent for type:"+e+" parameterA:"+t+" parameterB:"+i+" parameterC:"+n)}formatNumber(e,t){return t||(t=""),e?t+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):t+"0"}localize(){var e=arguments[0];if(!(e&&window.localeResources&&this.language&&window.language&&window.localeResources[this.language]))return e;var t=window.localeResources[this.language||window.language][e];if(!t)return e;var i=e+t,n=window.__localizationCache.messages[i];n||(n=new MessageFormat(t,this.language,{}),window.__localizationCache.messages[i]=n);for(var o={},r=1;r<arguments.length;r+=2)o[arguments[r]]=arguments[r+1];return n.format(o)}updated(e){super.updated(e),e.has("language")}$$(e){return this.shadowRoot.querySelector(e)}fire(e,t){const i=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(i)}}var oavBaseElement={OavBaseElement:OavBaseElement};class PageViewElement extends OavBaseElement{shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean}}}}var pageViewElement={PageViewElement:PageViewElement};const OavAreaBallotStyles=css`

  :host {}

  iron-list {
    margin-top: 24px;
    padding-bottom: 16px;
    background-color: var(--app-main-background-color);
  }

  .name {
    font-size: 19px;
    padding: 8px;
  }

  .description {
    padding-left: 8px;
  }

  .price {
    font-size: 20px;
    position: absolute;
    bottom: 4px;
    left: 8px;
  }

  #itemContainer {
    margin-top: 8px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  oav-area-ballot-item {
    outline: 0px;
  }

  paper-button.addButton {
    position: absolute;
    bottom: 16px;
    outline: 0px;
    right: 8px;
    background-color: var(--app-ballot-add-button-background-color, #F00);
    color: var(--app-ballot-add-button-color, #FFF);
  }

  .budgetContainer {
  }

  .votingButtonContainer {
    position: absolute;
    bottom: 16px;
  }

  .topContainer {
    background-color: var(--app-main-background-color);
    color: var(--app-ballot-color, #333);
  }

  paper-tabs {
    margin: 8px;
    margin-right: 16px;
    margin-left: 16px;
  }

  paper-tab {
    font-size: 21px !important;
    margin-left: 24px;
    margin-right: 24px;
    width: 320px;
  }

  @media (max-width: 1045px) {
    paper-tab {
      font-size: 15px !important;
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  @media (max-width: 360px) {
    paper-tab {
      font-size: 14px !important;
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  [hidden] {
    display: none !important;
  }
`;var oavAreaBallotStyles={OavAreaBallotStyles:OavAreaBallotStyles};const OavAreaBallotItemStyles=css`

  .itemContent {
    position: relative;
    width: 300px !important;
    height: 320px;
    margin: 16px;
  }

  .itemContent[small] {
    width: 260px !important;
    height: 277px;
    margin: 0;
  }

  .itemContent[small][tiny] {
    width: 220px !important;
    height: 220px;
  }

  .itemSelectedFrame {
    background: transparent;
    border: none;
    width: 296px;
    height: 316px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
  }

  .itemSelectedFrame[small] {
    width: 254px;
    height: 271px;
  }

  .itemSelectedFrame[small][tiny] {
    width: 214px;
    height: 214px;
  }

  .buttons {
    z-index: 5;
  }

  .itemSelectedFrame[selected] {
    background: transparent;
    border: solid 2px;
    border-color: var(--app-accent-color);
  }

  iron-image {
    height: 169px;
    width: 300px;
  }

  iron-image[small] {
    width: 260px;
    height: 146px;
  }

  iron-image[small][tiny] {
    width: 220px;
    height: 124px;
  }

  google-map {
    height: 169px;
    width: 300px;
    margin-bottom: 7px;
  }

  google-map[small] {
    width: 260px;
    height: 146px;
    z-index: 0 !important;
  }

  google-map[small][tiny] {
    width: 220px;
    height: 124px;
  }

  .descriptionContainer {
    height: 169px;
    width: 300px;
    margin: 0;
    overflow: hidden;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    background-color: var(--app-ballot-item-description-background-color, #333);
    color: var(--app-ballot-item-description-color, #FFF);
    margin-bottom: 7px;
  }

  .descriptionContainer[small] {
    width: 260px;
    height: 146px;
    font-size: 16px;
    text-align: left;
  }

  .descriptionContainer[small][tiny] {
    width: 220px;
    height: 124px;
    font-size: 15px;
  }

  .description {
    padding: 8px;
    font-size: 16px;
    margin-top: 42px;
  }

  .name {
    font-size: var(--app-item-name-font-size, 20px);
    padding: 8px;
    color: var(--app-ballot-item-name-color, #222);
  }

  .name[small] {
    font-size: var(--app-item-name-font-size-small, 17px);
    padding-top: 4px;
    padding-right: 4px;
    padding-top: 4px;
  }

  .name[small][tiny] {
    font-size: 14px;
  }

  .price {
    font-size: 25px;
    position: absolute;
    bottom: 8px;
    left: 92px;
    color: var(--app-accent-color);
  }

  .price[no-millions] {
    left: 108px;
  }

  .price[small] {
    left: 70px;
  }

  .price[no-millions][small] {
    left: 95px;
  }

  .price[small][tiny] {
    left: 42px;
  }

  .priceCurrency {
    font-size: 23px;
    color: var(--app-accent-color);
  }

  paper-fab.addRemoveButton {
    position: absolute;
    bottom: 12px;
    right: 12px;
    background-color: var(--app-accent-color);
    color: var(--app-ballot-item-button-color, #fff);
  }

  paper-fab.removeButton {
    background-color: #fff !important;
    color: var(--app-accent-color) !important;
  }

  paper-fab.addFavoriteButton {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background-color: var(--app-accent-color);
    color: var(--app-ballot-item-button-color, #fff);
    --paper-fab-iron-icon: {
      height: 29px;
      width: 29px;
    };
    padding: 0;
    padding-top: 1px;
  }

  paper-fab.removeFavoriteButton {
    position: absolute;
    bottom: 12px;
    left: 12px;
    color: var(--app-ballot-item-remove-fav-button-color, rgb(255,215,0));
    background-color: var(--app-ballot-item-remove-fav-button-background-color, #FFF);
    --paper-fab-iron-icon: {
      height: 29px;
      width: 29px;
    };
    padding: 0;
    padding-top: var(--app-ballot-item-remove-fav-padding-top, 1px);
  }

  paper-fab[disabled] {
    background-color: #b7b7b7;
  }

  .shareIcon {
    position: absolute;
    top: 6px;
    left: 0;
    --paper-share-button-icon-color: var(--app-accent-color-light);
    --paper-share-button-icon-height: 46px;
    --paper-share-button-icon-width: 46px;
    -webkit-filter: drop-shadow( 1px 1px 10px #555 );
    filter: drop-shadow( 1px 1px 10px #555 );
  }

  .shareIcon[small] {
    display: none;
  }

  .budgetContainer {
  }

  .itemContent {
    color: var(--app-ballot-item-content-color, #222);
    background-color: var(--app-ballot-item-content-background-color, #fbfbfb);
  }

  .addRemoveButton {

  }

  .infoIcon {
    color: var(--app-accent-color-light);
    width: 32px;
    height: 32px;
    padding: 0;
    margin-right: 4px;
  }

  .infoLinks {
    position: absolute;
    top: 118px;
    right: 0px;
    z-index: 2;
  }

  .stateDropdown {
    color: var(--app-accent-color-light);
    position: absolute;
    top: 60px;
    right: 0;
    z-index: 2;
    padding-right: 0;
    margin-right: 0;
  }

  .dropdownMenuButton {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .dropdownButton {
    background-color: var(--app-accent-color);
    opacity: 0.8;
    color: var(--app-ballot-item-button-color, #fff);
    padding: 2px;
    width: 32px;
    height: 26px;
  }

  .infoLinks[small] {
    top: 98px;
  }

  .infoLinks[small][tiny] {
    top: 78px;
  }

  .externalInfoIcon {
    color: var(--app-ballot-item-extinfo-icon-color, #999);
    width: 45px;
    height: 45px;
  }

  .externalIconContainer {
    position: absolute;
    bottom: 4px;
    left: 0px;
    z-index: 2;
  }

  google-map {
    z-index: 5;
  }

  paper-fab {
    z-index: 5;
  }

  .favoriteButtons {
  }

  [hidden] {
    display: none !important;
  }
`;var oavAreaBallotItemStyles={OavAreaBallotItemStyles:OavAreaBallotItemStyles};const OavShadowStyles=css`
  .shadow-transition {
     transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
   }

  .shadow-elevation-2dp {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 1px 5px 0 rgba(0, 0, 0, 0.12),
                0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }

  .shadow-elevation-3dp {
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                0 1px 8px 0 rgba(0, 0, 0, 0.12),
                0 3px 3px -2px rgba(0, 0, 0, 0.4);
  }

  .shadow-elevation-4dp {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                0 1px 10px 0 rgba(0, 0, 0, 0.12),
                0 2px 4px -1px rgba(0, 0, 0, 0.4);
  }

  .shadow-elevation-6dp {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                0 1px 18px 0 rgba(0, 0, 0, 0.12),
                0 3px 5px -1px rgba(0, 0, 0, 0.4);
  }

  .shadow-elevation-8dp {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                0 3px 14px 2px rgba(0, 0, 0, 0.12),
                0 5px 5px -3px rgba(0, 0, 0, 0.4);

  }
  .shadow-elevation-12dp {
    box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                0 4px 22px 3px rgba(0, 0, 0, 0.12),
                0 6px 7px -4px rgba(0, 0, 0, 0.4);
  }

  .shadow-elevation-16dp {
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                0  6px 30px 5px rgba(0, 0, 0, 0.12),
                0  8px 10px -5px rgba(0, 0, 0, 0.4);
  }
  .shadow-elevation-24dp {
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                0 9px 46px 8px rgba(0, 0, 0, 0.12),
                0 11px 15px -7px rgba(0, 0, 0, 0.4);
  }
`;var oavShadowStyles={OavShadowStyles:OavShadowStyles};class OavAreaBallotItem extends OavBaseElement{static get properties(){return{item:{type:Object},staticMapsApiKey:{type:String},elevation:Number,budgetElement:{type:Object},selectedInBudget:{type:Boolean},toExpensiveForBudget:{type:Boolean},isFavorite:{type:Boolean},googleMapsApiKey:{type:String},imageTabSelected:{type:Boolean},descriptionTabSelected:{type:Boolean},mapTabSelected:{type:Boolean},descriptionPdfLink:{type:String},small:{type:Boolean},tiny:{type:Boolean},mapsHeight:{type:String,value:null},mapsWidth:{type:String,value:null},longitude:{type:String,value:null},latitude:{type:String,value:null},imageLoaded:{type:Boolean,value:!1},isOnMap:Boolean,configFromServer:Object,listBoxSelection:Number}}static get styles(){return[OavAreaBallotItemStyles,OavShadowStyles]}render(){return html$1`
      <div id="topContainer" class="itemContent shadow-animation shadow-elevation-3dp" ?small="${this.small}" ?tiny="${this.tiny}">
        <iron-image preload @loaded-changed="${this._imageLoadedChanged}" ?small="${this.small}"
          ?tiny$="${this.tiny}" ?hidden="${!this.imageTabSelected}" name="image" sizing="cover" src="${this.item.image_url}">
        </iron-image>

        ${this.mapTabSelected&&this.mapsHeight?html$1`
            <iron-image class="main-image" .sizing="cover"
              src="https://maps.googleapis.com/maps/api/staticmap?center=${this.latitude},${this.longitude}&zoom=15&size=${this.mapsWidth}x${this.mapsHeight}&markers=color:red%7Clabel:%7C${this.latitude},${this.longitude}&key=${this.configFromServer.client_config.googleMapsStaticApiKey}"
              ?hidden="${!this.mapTabSelected}">
            </iron-image>
          `:""}
        <div ?hidden="${!this.descriptionTabSelected}" name="description" class="descriptionContainer" ?tiny="${this.tiny}" ?small="${this.small}">
          <div id="description" class="description">
            ${this.item.description}
          </div>
        </div>
        <paper-menu-button ?hidden="${this.isOnMap}" @tap="${this._openMenu}" ?small="${this.small}" ?tiny="${this.tiny}" class="dropdownMenuButton" horizontal-align="right">
          <paper-icon-button class="dropdown-trigger dropdownButton" slot="dropdown-trigger" @click="${this._clickedDropDownMenu}" alt="${this.localize("openDetailMenu")}" icon="menu"></paper-icon-button>
          <paper-listbox class="dropdown-content" slot="dropdown-content" id="listBox" .selected="${this.listBoxSelection}">
            <paper-item @tap="${this._setImageMode}">
              <iron-icon alt="${this.localize("image_item_tab")}" class="infoIcon" icon="photo"></iron-icon>
              ${this.localize("image_item_tab")}
            </paper-item>
            <paper-item @tap="${this._setDescriptionMode}">
              <iron-icon alt="${this.localize("description_item_tab")}" class="infoIcon" icon="description"></iron-icon>
              ${this.localize("description_item_tab")}
            </paper-item>
            <paper-item @tap="${this._setMapMode}" ?hidden="${this.configFromServer.client_config.hideLocation}">
              <iron-icon alt="${this.localize("map_item_tab")}" class="infoIcon" icon="place"></iron-icon>
              ${this.localize("map_item_tab")}
            </paper-item>
            <paper-item @tap="${this._openPdf}" ?hidden="${!this.descriptionPdfLink}">
              <iron-icon alt="${this.localize("design_pdf")}" class="infoIcon" icon="picture-as-pdf"></iron-icon>
              ${this.localize("design_pdf")}
            </paper-item>
            <paper-item @tap="${this._showPost}" ?hidden="${this.configFromServer.client_config.hideShowPost}">
              <iron-icon raised alt="${this.localize("more_info_description")}" class="infoIcon" icon="info"></iron-icon>
              ${this.localize("more_info_description")}
            </paper-item>
          </paper-listbox>
        </paper-menu-button>
        <div class="layout horizontal">
          <div class="name" ?small="${this.small}" ?tiny="${this.tiny}">${this.item.name}</div>
        </div>
        <div class="buttons">
          <paper-share-button ?hidden="${!this.imageLoaded}" ?small="${this.small}" @share-tap="${this._shareTap}" class="shareIcon" horizontal-align="left" id="shareButton"
            title="${this.localize("share_idea")}" facebook twitter popup .url="${this._itemShareUrl()}">
          </paper-share-button>

          <div class="price" ?small="${this.small}" ?tiny="${this.tiny}" ?no-millions="${this.configFromServer.client_config.dontUserMillions}">
            ${this.configFromServer.client_config.currencySymbol}${this.formatNumber(this.item.price)}
            <span class="priceCurrency" ?hidden="${!this._priceIsOne(this.item.price)}">${this.localize("million")}</span>
            <span class="priceCurrency" ?hidden="${this._priceIsOne(this.item.price)}">${this.localize("millions")}</span>
          </div>

          <paper-fab mini id="addToBudgetButton" elevation="5" class="addRemoveButton" ?hidden="${this.selectedInBudget}"
                    ?disabled="${this.toExpensiveForBudget}" title="${this.localize("add_to_budget")}" icon="add" @click="${this._toggleInBudget}">
          </paper-fab>

          <paper-fab mini elevation="5" class="addRemoveButton removeButton" ?hidden="${!this.selectedInBudget}"
                    ?disabled="${this.toExpensiveForBudget}" title="${this.localize("remove_from_budget")}" icon="remove" @click="${this._toggleInBudget}">
          </paper-fab>

          <div id="favoriteButtons" class="favoriteButtons" ?hidden="${!this.selectedInBudget}">
            <paper-fab mini id="addFavoriteButton" class="addFavoriteButton" .elevation="5" class="favoriteButton" ?hidden="${this.isFavorite}"
                      title="${this.localize("select_favorite")}" icon="${this.configFromServer.client_config.favoriteIconOutline}" @click="${this._toggleFavorite}">
            </paper-fab>
            <paper-fab mini class="removeFavoriteButton" .elevation="5" class="favoriteButton" ?hidden="${!this.isFavorite}"
                      title="${this.localize("deselect_favorite")}" icon="${this.configFromServer.client_config.favoriteIcon}" @click="${this._toggleFavorite}">
            </paper-fab>
          </div>
        </div>
      </div>
    `}updated(e){super.updated(e),e.has("selectedInBudget")&&(this.selectedInBudget?(this.elevation=4,this.$$("#topContainer").classList.add("shadow-elevation-12dp")):(this.elevation=1,this.$$("#topContainer").classList.remove("shadow-elevation-12dp"))),e.has("item")&&this.item&&(this.item.locations&&0<this.item.locations.length&&(this.longitude=this.item.locations[0].longitude,this.latitude=this.item.locations[0].latitude),this.resetFromBudget()),e.has("small")&&(this.small?(this.mapsHeight="260",this.mapsWidth="146"):(this.mapsHeight="169",this.mapsWidth="300")),e.has("tiny")&&(this.tiny?(this.mapsHeight="220",this.mapsWidth="124"):(this.mapsHeight="169",this.mapsWidth="300"))}constructor(){super(),this.reset(),this.listBoxSelection=0}reset(){this.small=!1,this.mapTabSelected=!1,this.descriptionTabSelected=!1,this.imageTabSelected=!0,this.isFavorite=!1,this.toExpensiveForBudget=!1,this.selectedInBudget=!1,this.mapsHeight="169",this.mapsWidth="300"}_imageLoadedChanged(e){e.detail.value&&(this.imageLoaded=!0)}_clickedDropDownMenu(){this.activity("click","dropdown")}_priceIsOne(e){return!!(e&&1>=e)}_openPdf(){this.activity("click","openPdf"),this.item.descriptionPdfLink&&window.open(this.item.descriptionPdfLink,"_blank")}_showPost(){this.activity("click","showPost"),window.appLastArea="/"+window.location.hash;const e="/post/"+this.item.idea_id;window.history.pushState({},null,e),this.fire("location-changed",e),setTimeout(()=>{this.$$("#listBox").select(0)})}_itemShareUrl(){return this.item?encodeURIComponent("https://"+window.location.host+"/items/"+this.item.id):null}_shareTap(e,t){this.activity("click","shareItem")}resetFromBudget(){if(this.budgetElement)if(-1<this.budgetElement.selectedItems.indexOf(this.item))this.setInBudget(),this.setNotTooExpensive(),this.budgetElement.currentBallot.favoriteItem==this.item?this.isFavorite=!0:this.isFavorite=!1;else{var e=this.budgetElement.totalBudget-this.budgetElement.selectedBudget;this.item.price>e?this.setTooExpensive():this.setNotTooExpensive(),this.removeFromBudget()}this._setImageMode(!0)}_setImageMode(e){e&&!1!==e||this.activity("select","imageMode"),this.imageTabSelected=!0,this.descriptionTabSelected=!1,this.mapTabSelected=!1}_setMapMode(){this.activity("select","mapMode"),this.imageTabSelected=!1,this.descriptionTabSelected=!1,this.mapTabSelected=!0}_setDescriptionMode(){this.activity("select","descriptionMode"),this.imageTabSelected=!1,this.descriptionTabSelected=!0,this.mapTabSelected=!1}_toggleDescription(){this.activity("toggle","description"),!0===this.descriptionTabSelected?this._setImageMode():this._setDescriptionMode()}_openMenu(){this.activity("open","itemMenu")}setInBudget(){this.selectedInBudget=!0}removeFromBudget(){this.selectedInBudget=!1,this.isFavorite=!1}setTooExpensive(){this.toExpensiveForBudget=!0}setNotTooExpensive(){this.toExpensiveForBudget=!1}_toggleFavorite(){if(this.budgetElement.currentBallot.favoriteItem&&this.budgetElement.currentBallot.favoriteItem.id==this.item.id)this.fire("oav-set-favorite-item-in-budget",{item:null}),this.isFavorite=!1;else{var e=this.$$("#addFavoriteButton").getBoundingClientRect(),t=e.left,i=e.top;this.isFavorite=!0,this.fire("oav-set-favorite-item-in-budget",{item:this.item,orgAnimPos:{left:t,top:i},budgetAnimPos:this.budgetElement.getItemLeftTop(this.item)})}}_toggleInBudget(e){this.$$("#addFavoriteButton").style.position="absolute",this.$$("#addFavoriteButton").style.left="12px",this.$$("#addFavoriteButton").style.bottom="12px",this.$$("#addFavoriteButton").animate([{transform:"translateX(200px)",easing:"ease-out"},{transform:"scale(2)",easing:"ease-out"},{transform:"translateY(0)",easing:"ease-out"}],{duration:400,iterations:1}).onfinish=function(){this.$$("#addFavoriteButton").style.position="absolute",this.$$("#addFavoriteButton").style.left="12px",this.$$("#addFavoriteButton").style.bottom="12px"}.bind(this),this.fire("oav-toggle-item-in-budget",{item:this.item})}}window.customElements.define("oav-area-ballot-item",OavAreaBallotItem);const OavBallotMapStyles=css`
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
`;var oavAreaBallotMapStyles={OavBallotMapStyles:OavBallotMapStyles};class OavAreaBallotMap extends OavBaseElement{static get properties(){return{items:{type:Array},budgetElement:{type:Object},selectedItem:{type:Object},configFromServer:Object,noItems:{type:Boolean,value:!1},googleMapsApiKey:{type:String},wide:{type:Boolean,observer:"_wideChanged"}}}static get styles(){return[OavBallotMapStyles,OavShadowStyles]}render(){return html$1`
      <div class="layout vertical center-center topMapContainer">
        ${this.items?html$1`
              <div class="mapContainer">
                <google-map ?disable-default-ui="${this.tiny}" id="map" .apiKey="${this.configFromServer.client_config.googleMapsApiKey}" fit-to-markers>
                  ${this.items.map(e=>e.locations.map(t=>html$1`
                        <google-map-marker slot="markers" .clickEvents="${!0}" .latitude="${t.latitude}" data-itemid="${e.id}" .longitude="${t.longitude}" class="marker" @google-map-marker-click="${this.markerClick}">
                        </google-map-marker>
                      `))}

                  ${this.selectedItem?html$1`
                    <plastic-map-info id="myInfoCard" fade-in>
                      <oav-area-ballot-item
                      @oav-toggle-item-in-budget="_closeInfo" small  elevation="0" id="ballotItem"
                      .budgetElement="${this.budgetElement}"
                      .language="${this.language}"
                      .isOnMap="${!0}"
                      .configFromServer="${this.configFromServer}" class="ballotItem"
                      .item="${this.selectedItem}"
                      ></oav-area-ballot-item>
                    </plastic-map-info>
                  `:html$1``}
                </google-map>
              </div>
            `:html$1`
              <div class="noMapContainer shadow-elevation-3dp">
                <h1>${this.localize("items.noMapItems")}</h1>
              </div>
            `}
      </div>
    `}constructor(){super(),this.reset()}connectedCallback(){super.connectedCallback(),setTimeout(function(){this.resetMapHeight()}.bind(this))}disconnectedCallback(){this.items=null,super.disconnectedCallback()}reset(){}_closeInfo(){}updated(e){super.updated(e),e.has("wide")&&this.resetMapHeight()}resetMapHeight(){var e,t=this.$$("#map"),i=window.innerHeight;t&&(e=this.wide?i-322:i-236,t.style.height=e+"px")}setItemInBudget(e){this.selectedItem&&this.selectedItem.id==e.id&&((e=this.$$("#ballotItem"))&&e.setInBudget())}removeFromBudget(e){this.selectedItem&&this.selectedItem.id==e.id&&((e=this.$$("#ballotItem"))&&this.$$("#ballotItem").removeFromBudget())}checkIfSelectedItemToExpensive(e){if(this.selectedItem){var t=this.$$("#ballotItem");t&&(t.selectedInBudget||(this.selectedItem.price<=e?(t.setNotTooExpensive(),console.log("item id "+this.selectedItem.id+"Not Too Expensive")):this.selectedItem&&(console.log("item id "+this.selectedItem.id+"Too Expensive"),t.setTooExpensive())))}}scrollIntoView(e){let t=0,i=null;this.items.map(n=>n.locations.map(o=>{n.id==e&&(i=t),t++})),null!==i&&this.$$("#map")&&this.$$("#map").triggerMarkerClick(i)}markerClick(e){this.activity("click","marker");const t=e.target.dataset.itemid;let i;this.items.forEach(e=>{e.id==t&&(this.selectedItem=e)}),i=e.srcElement?e.srcElement.marker:e.currentTarget.marker,setTimeout(()=>{this.$$("#myInfoCard").showInfoWindow(i)},10)}}window.customElements.define("oav-area-ballot-map",OavAreaBallotMap);class OavAreaBallot extends PageViewElement{static get properties(){return{area:{type:Object},areaId:{type:String},configFromServer:String,areaIdRoutePath:{type:Object},selectedView:{type:Number},budgetElement:{type:Object},votePublicKey:{type:String},budgetBallotItems:Array,wide:Boolean,popupWindow:Object,favoriteItem:{type:Object},oldFavoriteItem:Object,showMap:Boolean}}static get styles(){return[OavAreaBallotStyles]}render(){return html$1`${this.area?html$1`
        <div class="topContainer layout vertical">
          <div class="layout horizontal center-center tabsContainer">
            <paper-tabs id="tabs" selected="${this.selectedView}" @selected-changed="${this._selectedChanged}">
              <paper-tab>
                <div ?hidden="${!this.wide}">${this.area.name}</div>
                <div ?hidden="${this.wide}" class="layout vertical center-center">
                  <div>${this.area.name}</div>
                </div>
              </paper-tab>
              <paper-tab ?hidden="${this.configFromServer.client_config.hideLocation}">${this.localize("items_on_map")}</paper-tab>
            </paper-tabs>
          </div>

          ${this.budgetBallotItems?html$1`
              <div id="itemContainer" class="layout horizontal center-center flex wrap" ?hidden="${1===this.selectedView}">
                ${this.budgetBallotItems.map((e,t)=>html$1`
                    <oav-area-ballot-item
                      .name="${e.id}"
                      class="ballotAreaItem"
                      .configFromServer="${this.configFromServer}"
                      .language="${this.language}"
                      .budgetElement="${this.budgetElement}"
                      .item="${e}">
                    </oav-area-ballot-item>
                  `)}
              </div>
              ${this.showMap?html$1`
                  <oav-area-ballot-map
                    ?hidden="${0===this.selectedView}"
                    id="itemsMap"
                    .budgetElement="${this.budgetElement}"
                    .configFromServer="${this.configFromServer}"
                    .language="${this.language}"
                    .items="${this.budgetBallotItems}">
                  </oav-area-ballot-map>
                `:html$1`
                `}
            `:""}
        </div>
      `:""}
    `}updated(e){super.updated(e),e.has("areaIdRoutePath")&&this.areaIdRoutePath&&("completePostingOfVoteAfterRedirect"===this.areaIdRoutePath?this.completeIfAuthenticatedVote():this.areaId=this.areaIdRoutePath),e.has("areaId")&&this.loadArea(),e.has("selectedView")&&(0===this.selectedView?this.activity("click","ideasTab"):1==this.selectedView&&(this.showMap=!0,this.activity("click","mapTab"))),e.has("favoriteItem")&&(this.oldFavoriteItem=e.get("favoriteItem"),!this.favoriteItem&&this.oldFavoriteItem&&this.fire("oav-hide-favorite-item"))}constructor(){super(),this.showMap=!1}connectedCallback(){super.connectedCallback(),this.reset(),window.appBallot=this,this.fire("oav-set-ballot-element",this)}firstUpdated(){this._setupListeners(),installMediaQueryWatcher("(min-width: 1024px)",e=>{this.wide=e})}disconnectedCallback(){this._removeListeners()}loadArea(){this.oldFavoriteItem=null,this.favoriteItem=null,this.areaId&&(this.reset(),this.fire("ak-clear-area"),fetch("/votes/get_ballot?area_id="+this.areaId+"&locale="+this.language,{credentials:"same-origin"}).then(e=>e.json()).then(e=>{this.area=e.area,this.budgetBallotItems=this._setupLocationsAndTranslation(e.budget_ballot_items),this.fire("oav-set-title",this.localize("ballot_area_name","area_name",this.area.name)),this.fire("oav-set-area",{areaName:this.area.name,totalBudget:this.area.budget_amount}),setTimeout(()=>{this.$$("#tabs").shadowRoot.getElementById("selectionBar").style.setProperty("border-bottom","3px solid var(--paper-tabs-selection-bar-color)")})}).catch(e=>{this.fire("ak-error",e),console.error("Error:",e)}))}_setupListeners(){this.addEventListener("oav-toggle-item-in-budget",this._toggleItemInBudget),this.addEventListener("oav-set-favorite-item-in-budget",this._toggleFavoriteItem),this.addEventListener("oav-submit-vote",this._postVoteToServer),this.addEventListener("oav-item-selected-in-budget",this._itemSelectedInBudget),this.addEventListener("oav-item-de-selected-from-budget",this._itemDeSelectedFromBudget)}_removeListeners(){this.removeEventListener("oav-toggle-item-in-budget",this._toggleItemInBudget),this.removeEventListener("oav-set-favorite-item-in-budget",this._toggleFavoriteItem),this.removeEventListener("oav-submit-vote",this._postVoteToServer),this.removeEventListener("oav-item-selected-in-budget",this._itemSelectedInBudget),this.removeEventListener("oav-item-de-selected-from-budget",this._itemDeSelectedFromBudget)}reset(){this.budgetElement&&this.budgetElement.reset(),this._resetBallotItems(),this.budgetBallotItems=null,this.area=null,this.favoriteItem=null,this.selectedView=0,this.fire("oav-set-area",{areaName:null,totalBudget:null})}_selectedChanged(e){this.selectedView=parseInt(e.detail.value)}_scrollItemIntoView(e){var t=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,i=/Trident.*rv[ :]*11\./.test(navigator.userAgent);this.shadowRoot.querySelectorAll("oav-area-ballot-item").forEach(function(n){n.name==e&&(t||i?n.scrollIntoView(!1):n.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),this.wide&&n.animate([{transform:"translateX(-3px)",easing:"ease-in"},{transform:"translateX(3px)",easing:"ease-out"},{transform:"translateX(-5px)",easing:"ease-in"},{transform:"translateX(5px)",easing:"ease-out"},{transform:"translateX(-7px)",easing:"ease-in"},{transform:"translateX(7px)",easing:"ease-out"}],{duration:450,iterations:1}))}.bind(this));const n=this.$$("#itemsMap");n&&n.scrollIntoView(e)}_resetBallotItems(){var e=this.$$("#itemContainer");if(e)for(var t,i=0;i<e.children.length;i++)"domRepeat"!=(t=e.children[i]).id&&(t.setNotTooExpensive(),t.removeFromBudget())}_toggleFavoriteItem(e){var t=e.detail.item;if(t?this.activity("toggle","favorite"):this.activity("detoggle","favorite"),this.favoriteItem!=t){this.favoriteItem=t;for(var i,n=this.$$("#itemContainer"),o=0;o<n.children.length;o++)"domRepeat"!=(i=n.children[o]).id&&i.resetFromBudget()}else console.warn("Trying to set item as favorite a second time")}_toggleItemInBudget(e){this.budgetElement.toggleBudgetItem(e.detail.item)}_itemSelectedInBudget(e){for(var t,i=this.$$("#itemContainer"),n=0;n<i.children.length;n++)if("domRepeat"!=(t=i.children[n]).id&&t.item.id==e.detail.itemId){t.setInBudget();const e=this.$$("#itemsMap");e&&e.setItemInBudget(t.item)}this._setStateOfRemainingItems()}_itemDeSelectedFromBudget(e){for(var t,i=this.$$("#itemContainer"),n=0;n<i.children.length;n++)if("domRepeat"!=(t=i.children[n]).id&&t.item.id==e.detail.itemId){this.favoriteItem==t.item&&(this.favoriteItem=null),t.removeFromBudget();const e=this.$$("#itemsMap");e&&e.removeFromBudget(t.item),this.fire("oav-reset-favorite-icon-position")}this._setStateOfRemainingItems()}_setStateOfRemainingItems(){for(var e,t=this.budgetElement.totalBudget-this.budgetElement.selectedBudget,i=this.$$("#itemContainer"),n=0;n<i.children.length;n++)"domRepeat"==(e=i.children[n]).id||e.selectedInBudget||(e.item.price<=t?e.setNotTooExpensive():e.setTooExpensive());const o=this.$$("#itemsMap");o&&o.checkIfSelectedItemToExpensive(t)}_postVoteToServer(){this.budgetElement.selectedItems&&0<this.budgetElement.selectedItems.length?this.completePostingOfVote(this._createEncryptedVotes()):(this.fire("oav-error",this.localize("error_no_items_selected")),console.error("error_no_items_selected"))}_createEncryptedVotes(){var e=this.budgetElement.selectedItems.map(e=>e.id);return encryptVote(this.votePublicKey,{selectedItemIds:e,favoriteItemId:this.favoriteItem?this.favoriteItem.id:null})}completePostingOfVote(e){if(this.area&&this.area.id){if(e)return fetch("/votes/post_vote",{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({encrypted_vote:e,area_id:this.area.id})}).then(e=>e.json()).then(e=>{e&&!0===e.vote_ok?!0===this.configFromServer.client_config.insecureEmailLoginEnabled?this.fire("oav-insecure-email-login",{areaId:this.area.id,areaName:this.area.name,onLoginFunction:this._setVotingCompleted.bind(this)}):window.location=this._getSamlUrlWithLanguage():this.fire("oav-error",this.localize("error_could_not_post_vote"))});this.fire("oav-error",this.localize("error_encryption")),console.error("No encrypted votes!")}else this.fire("oav-error",this.localize("error_could_not_post_vote")),console.warn("Not sending as no area id")}_setVotingCompleted(){this.reset(),this.areaId=null;const e="/voting-completed";window.history.pushState({},null,e),this.fire("location-changed",e);var t=document.querySelector("oav-app").getDialog("authDialog");t&&t.close()}completeIfAuthenticatedVote(){fetch("/votes/is_vote_authenticated",{credentials:"same-origin"}).then(e=>e.json()).then(e=>{e&&!0===e.vote_ok?(this._setVotingCompleted(),this.activity("completed","voting")):this.fire("oav-error",this.localize("error_could_not_post_vote"))})}_getSamlUrlWithLanguage(){var e=this.configFromServer.auth_url;return"en"==this.language?e+="&siteLanguage=en":"pl"==this.language&&(e+="&siteLanguage=pl"),e}shuffle(e){for(let t=e.length-1;0<t;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}_setupLocationsAndTranslation(e){for(var t=e.length,i=0;i<t;i++)if(e[i].locations&&""!=e[i].locations){for(var n=[],o=e[i].locations.replace(" ","").split(","),r=0;r<o.length;)n.push({latitude:o[r],longitude:o[r+1]}),r+=2;e[i].locations=n}else e[i].locations=[];return this.shuffle(e)}}window.customElements.define("oav-area-ballot",OavAreaBallot);const OavAreaBudgetStyles=css`
  :host {
    width: 100%;
    display: block;
  }

  .topLevel[wide] {
  }

  .budgetContainer {
  }

  .budgetContainer[wide] {
  }

  @media (max-width: 1100px) {
    .budgetContainer {
    }
  }

  .headerContainer {
  }

  .budgetMaterial {
    background-color: var(--app-budget-material-background-color, rgba(249,249,249,1.0));
    height: 139px;
    margin: 0px 0px 0px 0px;
    margin-right: auto;
    margin-left: auto;
  }

  .budgetMaterial[wide] {
    width: 940px;
    height: 184px;
    margin-top: 24px;
  }

  #votes {
    background-color: var(--app-budget-votes-background-color, #e0e0e0);
    height: 81px;
  }

  #votes[wide] {
    width: 940px;
    height: 100px;
  }

  .budgetRuler {
    background-color: var(--app-budget-ruler-background-color, #f0f0f0);
    color: var(--app-budget-ruler-color, #111);
    font-size: 14px;
    padding: 4px;
    padding-right: 8x;
    padding-left: 8px;
  }

  .budgetRuler[wide] {
    font-size: 18px;
    padding: 8px;
    padding-right: 16px;
    padding-left: 16px;
  }

  .budgetHeader {
    background-color: var(--app-budget-header-background-color, #FFF);
    color: var(--app-budget-header-color, #000);
    font-size: 26px;
    padding: 12px;
  }

  .info {
    background-color: var(--app-budget-info-background-color, rgba(249,249,249,1.0));
    color: var(--app-budget-info-color, #111);
    padding: 4px;
    font-size: 12px;
  }

  .info[wide] {
    padding: 8px;
    font-size: 19px;
  }

  paper-button.voteButton {
    background-color: var(--app-accent-color);
    color: var(--app-budget-vote-button-color, #FFF);
    margin: 8px;
    margin-right: 4px;
  }

  paper-button[disabled] {
    background-color: #bbb;
  }

  .selectedInfo {
    font-size: 12px;
  }

  .selectedInfo[wide] {
    font-size: 19px;
  }

  #budgetLeftInfo {
    font-size: 13px;
    font-weight: bold;
  }

  #budgetLeftInfo[wide] {
    font-size: 19px;
    font-weight: bold;
    z-index: 100000;
  }

  .noItemsInfo {
    color: var(--app-budget-noitemsinfo-color, #555);
    font-size: 14px;
    padding-left: 8px;
    padding-right: 8px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 32px
  }

  .noItemsInfo[wide] {
    font-size: 24px;
  }

  .itemInBudget {
    border-left: solid 3px;
    border-left-color: var(--app-accent-color);
  }

  .headerLogo {
    width: 220px;
    height: 66px;
    padding: 0;
    margin: 0;
    margin-left: 4px;
  }

  @media (max-width: 1024px) {
    .headerLogo {
      width: 160px;
      height: 48px;
      margin-left: 4px;
    }
  }

  .headerContainer {
    background-color: var(--app-budget-header-container-background-color, #f0f0f0);
    color: var(--app-budget-vote-button-color, #444)
  }

  .demoButton {
    background-color: var(--app-accent-color);
    color: #fff;
    width: 30px;
    height: 30px;
    padding: 5px;
    margin-left: 8px;
    margin-right: 8px;
  }

  .onOfferText {
    color: var(--app-accent-color);
    margin-right: 12px;
    font-weight: bold;
  }

  paper-toast {
    font-size: 17px;
    height: 80px;
    padding-bottom: 8px;
  }

  paper-toast[wide] {
    font-size: 25px;
    height: 108px;
  }

  .mobileActionIcons {
    color: #555;
    width: 42px;
    height: 42px;
    margin: 0;
    padding: 0;
    margin-top: 5px;
    margin-right: 5px;
  }

  [hidden] {
    display: none !important;
  }

  .mobileBudgetText {
    margin-top: 6px;
  }

  .budgetText {
    margin-top: 4px;
  }
`;var oavAreaBudgetStyles={OavAreaBudgetStyles:OavAreaBudgetStyles};const OavFlexLayout=css`
      .layout {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      .layout-inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      .horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      .horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      .vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      .vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      .wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      .wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      /* alignment in cross axis */
      .start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      .center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      .end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      .baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */
      .start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      .center-justified {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      .end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      .around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      .justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      .center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      /* self alignment */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */
      .start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      .end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      .center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      .between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      .around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };
      /*******************************
                Other Layout
      *******************************/
      .block {
        display: block;
      };
      .invisible {
        visibility: hidden !important;
      };
      .relative {
        position: relative;
      };
      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };
      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };
      .fullbleed {
        margin: 0;
        height: 100vh;
      };
      /* fixed position */
      .fixed-top {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };
      .fixed-right {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };
      .fixed-bottom {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };
      .fixed-left {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };
`;var oavFlexLayout={OavFlexLayout:OavFlexLayout};class OavAreaBudget extends OavBaseElement{static get properties(){return{selectedItems:{type:Array,value:[],notify:!0},toastCounter:{type:Number,value:0},noSelectedItems:{type:Boolean,value:!0},areaName:{type:String,value:null},selectedBudget:{type:Number,value:0},totalBudget:{type:Number},budgetLeft:{type:Number},selectedBudgetIsOne:{type:Boolean},votesWidth:{type:Number},wide:{type:Boolean},mediumWide:{type:Boolean},mini:{type:Boolean},orientationPortrait:{type:Boolean},orientationLandscape:{type:Boolean},currentBallot:Object,budgetHeaderImage:{type:String},showExit:Boolean,configFromServer:Object}}connectedCallback(){super.connectedCallback(),this.fire("oav-set-budget-element",this)}updated(e){if(super.updated(e),e.has("selectedBudget")&&(this.selectedBudgetIsOne=this.selectedBudget&&1===this.selectedBudget),e.has("selectedItems")&&this._selectedItemsChanged(),e.has("selectedBudget")||e.has("totalBudget")){var t=this.totalBudget-this.selectedBudget;this.budgetLeft=0<t?t:0}}static get styles(){return[OavAreaBudgetStyles,OavShadowStyles,OavFlexLayout]}render(){return html$1`
      <div class="budgetContainer center-center" ?wide="${this.wide}">
        <div class="budgetMaterial shadow-elevation-24dp" ?wide="${this.wide}">
          <div class="info layout horizontal headerContainer" ?wide="${this.wide}">
            <span ?hidden="${!this.showExit}">
              <paper-icon-button alt="${this.localize("close")}" ?hidden="${this.wide}" class="closeButton mobileActionIcons" icon="closeExit" @click="${this._exit}"></paper-icon-button>
            </span>
            <iron-image ?hidden="${!this.mediumWide}" sizing="contain" class="headerLogo" src="${this.budgetHeaderImage}"></iron-image>
            <div class="vertical center-center" style="width: 100%;">
              <div class="flex">
              ${!this.selectedBudget&&this.areaName?html$1`
                  <div ?hidden="${!this.wide}" class="budgetText">${this.localize("budget_info_text","area_name",this.areaName)}</div>
                  <div ?hidden="${this.wide}" class="mobileBudgetText">${this.localize("budget_info_text_mobile","area_name",this.areaName)}</div>
                `:""}
              ${this.selectedBudget?html$1`
                  <div ?hidden="${!this.selectedBudgetIsOne}">
                    <div class="selectedInfo budgetText" ?wide="${this.wide}" ?hidden="${!this.wide}">
                     ${this.localize("selected_items_info_one_million","number_of_items",this.selectedItems.length,"selectedBudget",this.formatNumber(this.selectedBudget,this.configFromServer.client_config.currencySymbol))}
                    </div>
                    <div class="selectedInfo mobileBudgetText" ?wide="${this.wide}" ?hidden="${this.wide}">
                      ${this.localize("selected_items_info_mobile_one_million","number_of_items",this.selectedItems.length,"selectedBudget",this.formatNumber(this.selectedBudget,this.configFromServer.client_config.currencySymbol))}
                    </div>
                  </div>
                  <div ?hidden="${this.selectedBudgetIsOne}">
                    <div class="selectedInfo budgetText" ?wide="${this.wide}" ?hidden="${!this.wide}">
                      ${this.localize("selected_items_info","number_of_items",this.selectedItems.length,"selectedBudget",this.formatNumber(this.selectedBudget,this.configFromServer.client_config.currencySymbol))}
                    </div>
                    <div class="selectedInfo mobileBudgetText" ?wide="${this.wide}" ?hidden="${this.wide}">
                      ${this.localize("selected_items_info_mobile","number_of_items",this.selectedItems.length,"selectedBudget",this.formatNumber(this.selectedBudget,this.configFromServer.client_config.currencySymbol))}
                    </div>
                  </div>
                `:""}
              <div id="budgetLeftInfo" ?wide="${this.wide}" ?hidden="${!this.currentBallot}">
                ${this.localize("budget_left_text","budget_left",this.formatNumber(this.budgetLeft,this.configFromServer.client_config.currencySymbol))}
              </div>
              </div>
            </div>
            <paper-icon-button ?hidden="${this.wide}" class="mobileActionIcons" alt="${this.localize("help")}" icon="help-outline" @click="${this._help}"></paper-icon-button>
            <div>
              <paper-button id="votingButton" raised class="voteButton" @click="${this._submitVote}">${this.localize("vote")}</paper-button>
            </div>
          </div>
          <div id="votes" class="layout horizontal center-center" ?wide="${this.wide}">
            <div id="noItems" class="layout horizontal noItemsInfo" ?wide="${this.wide}" ?hidden="${!this.noSelectedItems}">
              ${this.totalBudget?html$1`
                <div ?hidden="${!this.wide}" class="onOfferText">
                  ${this.localize("budget_empty_info_1","amount",this.formatNumber(this.budgetLeft,this.configFromServer.client_config.currencySymbol))}
                </div>
                <div>${this.localize("budget_empty_info_2")}</div>
                <paper-fab aria-label="${this.localize("add_to_budget")}" mini id="x" elevation="5" disabled class="demoButton" icon="add"></paper-fab>
                <div>${this.localize("budget_empty_info_3")}</div>
              `:""}
            </div>
          </div>
        </div>
      </div>
      <snack-bar ?wide="${this.wide}" id="toast" @click="${this._closeToast}">
        ${this.localize("favorite_info")}
      </snack-bar>
    `}firstUpdated(){this.reset(),installMediaQueryWatcher("(min-width: 1024px)",e=>{this.wide=!!e,this._resetWidth()}),installMediaQueryWatcher("(orientation: portrait)",e=>{this.orientationPortrait=!!e,this._resetWidth()}),installMediaQueryWatcher("(orientation: landscape)",e=>{this.orientationLandscape=!!e,this._resetWidth()}),installMediaQueryWatcher("(min-width: 640px)",e=>{this.mediumWide=!!e,this._resetWidth()}),installMediaQueryWatcher("(max-width: 340px)",e=>{this.mini=!!e,this._resetWidth()})}constructor(){super()}_exit(){this.fire("oav-exit")}_help(){this.fire("oav-open-help")}_closeToast(){this.$$("#toast").active=!1}_resetWidth(){this.wide?this.votesWidth=940:this.votesWidth=window.innerWidth,this._resetBudgetDiv(),this.selectedItems.forEach(function(e){this._addItemToDiv(e)}.bind(this))}_millionWord(){return this.wide?this.localize("million"):this.localize("million_short")}_submitVote(){this.activity("click","submitVote"),this.currentBallot.fire("oav-submit-vote")}_selectedItemsChanged(){this.selectedItems&&0<this.selectedItems.length?(this.noSelectedItems=!1,this.$$("#votingButton").disabled=!1):(this.noSelectedItems=!0,this.$$("#votingButton").disabled=!0)}reset(){this._resetBudgetDiv(),this.selectedItems=[],this.selectedBudget=0,this.budgetHeaderImage=this.configFromServer.client_config.ballotBudgetLogo}_resetBudgetDiv(){let e=this.$$("#votes");for(;e.lastChild&&"noItems"!=e.lastChild.id&&"budgetLeftInfo"!=e.lastChild.id;)e.removeChild(e.lastChild)}_removeItemFromArray(e){var t=[];this.selectedItems.forEach(function(i){i.id!=e.id&&t.push(i)}),this.selectedItems=t}_addItemToDiv(e){var t=parseInt(this.votesWidth*(e.price/this.totalBudget));this.wide||(t-=1);var i=document.createElement("div");i.id="item_id_"+e.id,this.wide?i.style.height="100px":i.style.height="81px",i.style.width=t+"px",i.className="budgetBallotVote",i.backgroundColor="#F00",i.style.position="relative";var n=document.createElement("iron-image");n.src=e.image_url,n.setAttribute("sizing","cover"),n.setAttribute("alt",e.name),n.setAttribute("title",e.name),n.setAttribute("style","cursor: pointer;"),n.title=e.name,n.style.borderLeft="solid 1px",n.style.borderRight="solid 1px",n.style.borderColor="#ff6500",this.wide?n.style.height="100px":n.style.height="81px",n.style.width=t+"px",i.appendChild(n),i.addEventListener("tap",function(){this.fire("oav-scroll-item-into-view",e.id)}.bind(this)),this.$$("#votes").appendChild(i);i.animate([{transform:"translateX(-75px) scale(2)",easing:"ease-out"},{transform:"scale(1)",easing:"ease-out"}],{duration:600,iterations:1});this.$$("#budgetLeftInfo").animate([{transform:"scale(1)"},{transform:"scale(1.75)",easing:"ease-in-out"},{transform:"scale(1)",easing:"ease-out"}],{duration:820,iterations:1}),1>this.toastCounter&&(this.$$("#toast").active=!0,this.toastCounter+=1)}_removeItemFromDiv(e){var t=this.$$("#item_id_"+e.id);t.parentNode.removeChild(t)}getItemLeftTop(e){var t=this.$$("#item_id_"+e.id);if(t){var i=t.getBoundingClientRect(),n=(i.right-i.left)/2+i.left,o=(i.bottom-i.top)/2+i.top;return this.wide?(n-=24,o-=24):(n-=18,o-=18),{left:n,top:o}}console.error("Trying to get item that is not in the budget")}toggleBudgetItem(e){this.activity("toggle","vote"),-1<this.selectedItems.indexOf(e)?(this.activity("remove","vote"),this._removeItemFromArray(e),this._removeItemFromDiv(e),this.selectedItems=[...this.selectedItems],this.selectedBudget=this.selectedBudget-e.price,this.currentBallot.fire("oav-item-de-selected-from-budget",{itemId:e.id})):this.selectedBudget+e.price<=this.totalBudget?(this.activity("add","vote"),this.selectedItems.push(e),this.selectedItems=[...this.selectedItems],this._addItemToDiv(e),this.selectedBudget=this.selectedBudget+e.price,this.currentBallot.fire("oav-item-selected-in-budget",{itemId:e.id})):this.currentBallot.fire("oav-error",this.localize("error_does_not_fit_in_budget"))}toggleFavoriteItem(e){this.activity("toggle","favorite"),this.favoriteItem!=e&&(e?this.activity("add","favorite"):this.activity("remove","favorite"),this.favoriteItem=e)}_removeItem(e){this.selectedItems.forEach(function(t){t.id==e&&this.toggleBudgetItem(t)}.bind(this))}convertDots(e){return e.replace(".",",")}}window.customElements.define("oav-area-budget",OavAreaBudget);const OavAreaVotingCompletedStyles=css`
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

  @media (max-width: 600px) {
    .mainContainer {
      background-image: none;
      background-color: var(--app-voting-completed-main-background-color, #e0e0e0);
      padding-top: 20px;
      padding-bottom: 75px;
    }

    :host {
      height: 100%;
    }

    .topMaterial {
      padding-left: 8px;
      padding-right: 8px;
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
    max-width: 360px;
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
`;var oavVotingCompletedStyles={OavAreaVotingCompletedStyles:OavAreaVotingCompletedStyles};class OavVotingCompleted extends PageViewElement{static get properties(){return{configFromServer:{type:Object}}}static get styles(){return[OavShadowStyles,OavFlexLayout,OavAreaVotingCompletedStyles]}render(){return html$1`
      ${this.configFromServer?html$1`
        <div class="layout vertical center-center mainContainer">
          <paper-icon-button class="helpIcon" alt="${this.localize("help")}" icon="help-outline" @click="${()=>{this.fire("oav-open-help")}}"></paper-icon-button>
          <paper-icon-button class="exitIcon" alt="${this.localize("close")}" icon="closeExit" @click="${()=>{window.location=""}}"></paper-icon-button>

          <div class="topMaterial shadow-elevation-8dp vertical center-center">
            <div>
              <img class="desktopLogo self-center" src="${this.configFromServer.client_config.votingCompleteConfig.logo}"/>
            </div>
            <div class="completedText">
              <div>${this.localize("thank_you_1")}</div>
              <div class="smaller">${this.localize("thank_you_2")}</div>
              <div class="smaller">${this.localize("thank_you_3")}</div>
              <div class="center-center textSharingContainer" ?hidden="${!this.configFromServer.client_config.votingCompleteConfig.shareUrl}">
                <div class="textSharing">
                  ${this.localize("share_vote_by_pressing")}
                </div>
                <div class="shareIconButton">
                  <paper-share-button raised on-share-tap="_shareTap" class="shareIconFinal"
                                      horizontal-align="left" id="shareButton"
                                      title="${this.localize("share_vote_by_pressing")}"
                                      facebook twitter popup url="${this.configFromServer.client_config.votingCompleteConfig.shareUrl}">
                  </paper-share-button>
                </div>
              </div>
              <div class="smaller footerText" ?hidden="${!this.configFromServer.client_config.votingCompleteConfig.showFooterText}">${this.localize("thank_you_4")}</div>
            </div>
          </div>
        </div>
      `:html$1``}
    `}}window.customElements.define("oav-voting-completed",OavVotingCompleted);class OavApp extends OavBaseElement{static get properties(){return{appTitle:{type:String},_page:{type:String},_drawerOpened:{type:Boolean},_snackbarOpened:{type:Boolean},_offline:{type:Boolean},_subPath:{type:String},favoriteIcon:{type:String,value:"star"},dialogHeading:{type:String,value:""},activityHost:{type:String,value:""},setupDefaults:{type:Boolean,value:!1},votePublicKey:{type:String},configFromServer:{type:Object,value:null},requestInProgress:{type:Boolean,value:!1},title:{type:String},showExit:{type:Boolean,value:!1},hideBudget:{type:Boolean,value:!0},areaName:String,budgetElement:Object,currentBallot:Object,totalBudget:Number,haveSetLanguage:{type:Boolean,value:!1},resizeTimer:Object,postsHost:String,welcomeHeading:String,welcomeText:String,helpContent:String,wideAndBallot:Boolean,errorText:String,languageOveride:String}}static get styles(){return[OavAppStyles,OavFlexLayout]}render(){let e=html$1`
      <paper-dialog id="errorDialog">
        <p id="errorText">${this.errorText}</p>
        <div class="buttons">
          <paper-button class="generalButton" dialog-confirm autofocus @click="${this.resetErrorText}">OK</paper-button>
        </div>
      </paper-dialog>
    `;return html$1`${this.configFromServer?html$1`
        ${e}

        ${!0===this.configFromServer.client_config.insecureEmailLoginEnabled?html$1`
            <oav-insecure-email-login
              .language="${this.language}"
              .configFromServer="${this.configFromServer}"
              id="insecureEmailLogin">
            </oav-insecure-email-login>
          `:html$1``}
        <paper-dialog id="helpDialog">
          <paper-dialog-scrollable>
            <div id="helpContent">
              ${unsafeHTML(this.helpContent)}
            </div>
          </paper-dialog-scrollable>
          <div class="buttons">
            <paper-button class="closeButton generalButton" dialog-dismiss>${this.localize("close")}</paper-button>
          </div>
        </paper-dialog>

        <paper-dialog id="welcomeDialog" with-backdrop>
          <paper-dialog-scrollable>
            <div class="vertical center-center">
              <div class="welcomeLogoContainer center-center">
                <img aria-label="welcome/velkomin" class="welcomeLogo" src="${this.configFromServer.client_config.ballotBudgetLogo}"></img>
              </div>
              <div class="vertical center-center welcomeDialog">
                <div class="heading">${this.welcomeHeading}</div>
                  <div class="horizontal welcomeText">
                    ${this.welcomeText}
                  </div>
                  <div class="langSelectionText">
                  ${1<Object.keys(this.configFromServer.client_config.localeSetup).length?html$1`
                        ${this.configFromServer.client_config.localeSetup.map(e=>html$1`
                            <span class="langSelect" data-locale="${e.locale}" ?is-selected="${e.locale===this.language}"
                              @click="${this.selectLocale}">${e.language}</span>
                          `)}
                    `:html$1``}
                 </div>
                <div class="buttons center-center">
                  <paper-button raised class="continueButton" @click="${this.closeWelcome}" dialog-dismiss autofocus>${this.localize("start")}</paper-button>
                </div>
              </div>
            </div>
          </paper-dialog-scrollable>
        </paper-dialog>

        <app-header fixed effects="waterfall" ?wide-and-ballot="${this.wideAndBallot}" ?hidden="${"area-ballot"!==this._page}">
          <app-toolbar class="toolbar-top">
            <div ?hidden="${!this.showExit}" class="layout horizontal exitIconInBudget">
              <paper-icon-button class="closeButton" alt="${this.localize("close")}" icon="closeExit" @click="${this._exit}"></paper-icon-button>
            </div>
            <div class="helpIconInBudget">
              <paper-icon-button icon="help-outline" alt="${this.localize("help")}" @click="${this._help}}"></paper-icon-button>
            </div>
            <div class="budgetConstainer layout horizontal center-center" ?hidden="${this.hideBudget}">
              <oav-area-budget
                id="budget"
                .areaName="${this.areaName}"
                .language="${this.language}"
                .showExit="${this.showExit}"
                .totalBudget="${this.totalBudget}"
                .configFromServer="${this.configFromServer}"
                .currentBallot="${this.currentBallot}">
              </oav-area-budget>
            </div>
          </app-toolbar>
          <iron-icon id="favoriteIcon" icon="${this.favoriteIcon}" hidden></iron-icon>
        </app-header>

        <main role="main" class="main-content" ?has-ballot="${"area-ballot"==this._page}">
          <oav-select-voting-area
            id="selectVotingArea"
            .language="${this.language}"
            ?active="${"select-voting-area"===this._page}">
          </oav-select-voting-area>
          <oav-area-ballot id="budgetBallot"
            .budgetElement="${this.budgetElement}"
            .language="${this.language}"
            .areaIdRoutePath="${this._subPath}"
            .configFromServer="${this.configFromServer}"
            ?hidden="${"area-ballot"!==this._page}"
            .votePublicKey="${this.votePublicKey}"
            ?active="${"area-ballot"===this._page}">
          </oav-area-ballot>
          <oav-voting-completed
            .configFromServer="${this.configFromServer}"
            .language="${this.language}"
            ?active="${"voting-completed"===this._page}">
          </oav-voting-completed>
          ${"post"===this._page?html$1`
            <yp-post
              .id="post"
              .budgetElement="${this.budgetElement}"
              .language="${this.language}"
              .postId="${this._subPath}"
              .host="${this.postsHost}">
            </yp-post>
          `:html$1``}
          <oav-view404 class="page" ?active="${"view404"===this._page}"></oav-view404>
        </main>

        <snack-bar ?active="${this._snackbarOpened}">
          You are now ${this._offline?"offline":"online"}.
        </snack-bar>
      `:html$1`${e}<paper-spinner active class="largeSpinner"></paper-spinner>`}
    `}constructor(){window.__localizationCache={messages:{}},super(),setPassiveTouchGestures(!0),this._boot();var e="locale".replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search),i=null===t?null:decodeURIComponent(t[1].replace(/\+/g," "));i&&(this.language=i,localStorage.setItem("languageOverride",i))}_setupCustomCss(e){e.cssProperties&&e.cssProperties.forEach(e=>{const t=Object.keys(e)[0],i=Object.keys(e).map(function(t){return e[t]})[0];this.shadowRoot.host.style.setProperty(t,i),window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)})}selectLocale(e){this.language!=e.target.dataset.locale&&(this.language=e.target.dataset.locale,localStorage.setItem("languageOverride",this.language),"area-ballot"===this._page&&this.currentBallot&&setTimeout(()=>{this.currentBallot.loadArea()},10))}_boot(){fetch("/votes/boot",{credentials:"same-origin"}).then(e=>e.json()).then(e=>{if(this.requestInProgress=!1,this.language="en",this.votePublicKey=e.public_key,this._setupCustomCss(e.config.client_config),window.localeResources=e.config.client_config.locales,this.configFromServer=e.config,this.updateAppMeta(this.configFromServer.client_config.shareMetaData),this.configFromServer.client_config.welcomeLocales&&this.configFromServer.client_config.ballotBudgetLogo){(new Image).src=this.configFromServer.client_config.ballotBudgetLogo}if(ga("create",this.configFromServer.client_config.googleAnalyticsId,"auto"),this.postsHost="https://yrpri.org",this.favoriteIcon="heart",this.oneBallotId=1,this.configFromServer.client_config.defaultLanguage&&(localStorage.getItem("languageOverride")?this.language=localStorage.getItem("languageOverride"):this.language=this.configFromServer.client_config.defaultLanguage,this.setupLocaleTexts()),this.configFromServer.client_config.favoriteIcon&&(this.favoriteIcon=this.configFromServer.client_config.favoriteIcon),!(-1<location.href.indexOf("completePostingOfVoteAfterRedirect"))){const e="/area-ballot/"+this.oneBallotId;window.history.pushState({},null,e),this.fire("location-changed",e),this.configFromServer.client_config.welcomeLocales&&setTimeout(()=>{localStorage.getItem("haveClsosedWelcome")||this.$$("#welcomeDialog").open()})}window.language=this.language,window.localize=this.localize,!0===this.configFromServer.client_config.insecureEmailLoginEnabled&&import("./oav-insecure-email-login.js").then(e=>e&&e.$oavInsecureEmailLogin||{})}).catch(e=>{console.error("Error:",e),this.fire("oav-error","unknown_error")})}disconnectedCallback(){this._removeListeners()}b64DecodeUnicode(e){return decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}_setupListeners(){this.addEventListener("app-resources-loaded",this._transinsecationLoaded),this.addEventListener("oav-set-title",this._setTitle),this.addEventListener("oav-error",this._errorHandler),this.addEventListener("oav-set-area",this._setArea),this.addEventListener("oav-clear-area",this._clearArea),this.addEventListener("oav-set-favorite-item-in-budget",this._toggleFavoriteItem),this.addEventListener("oav-hide-favorite-item",this._hideFavoriteItem),this.addEventListener("oav-reset-favorite-icon-position",this.resetFavoriteIconPosition),this.addEventListener("oav-exit",this._exit),this.addEventListener("oav-open-help",this._help),this.addEventListener("oav-set-ballot-element",this._setBallotElement),this.addEventListener("oav-set-budget-element",this._setBudgetElement),this.addEventListener("oav-scroll-item-into-view",this._scrollItemIntoView),this.addEventListener("oav-insecure-email-login",this._insecureEmailLogin),this.addEventListener("location-changed",this._locationChanged),window.addEventListener("resize",this.resetSizeWithDelay.bind(this))}_setBallotElement(e){this.currentBallot=e.detail}_setBudgetElement(e){this.budgetElement=e.detail}_removeListeners(){this.removeEventListener("app-resources-loaded",this._translationLoaded),this.removeEventListener("oav-set-title",this._setTitle),this.removeEventListener("oav-error",this._errorHandler),this.removeEventListener("oav-set-area",this._setArea),this.removeEventListener("oav-clear-area",this._clearArea),this.removeEventListener("oav-set-area",this._setArea),this.removeEventListener("location-changed",this._locationChanged),this.removeEventListener("oav-set-favorite-item-in-budget",this._toggleFavoriteItem),this.removeEventListener("oav-hide-favorite-item",this._hideFavoriteItem),this.removeEventListener("oav-reset-favorite-icon-position",this.resetFavoriteIconPosition),this.removeEventListener("oav-exit",this._exit),this.removeEventListener("oav-set-ballot-element",this._setBallotElement),this.removeEventListener("oav-set-budget-element",this._setBudgetElement),this.removeEventListener("oav-open-help",this._help),this.removeEventListener("oav-scroll-item-into-view",this._scrollItemIntoView),window.removeEventListener("resize",this.resetSizeWithDelay),this.removeEventListener("oav-insecure-email-login",this._insecureEmailLogin)}_scrollItemIntoView(e){this.$$("#budgetBallot")._scrollItemIntoView(e.detail)}_hideFavoriteItem(){this.$$("#favoriteIcon").hidden=!0}_insecureEmailLogin(e){this.$$("#insecureEmailLogin").open(e.detail.areaId,e.detail.areaName,e.detail.onLoginFunction)}_toggleFavoriteItem(e){const t=e.detail;t.item&&setTimeout(()=>{var e,i;if(!0===this.$$("#favoriteIcon").hidden)this.$$("#favoriteIcon").style.position="absolute",this.$$("#favoriteIcon").style.left=t.orgAnimPos.left+"px",this.$$("#favoriteIcon").style.top=t.orgAnimPos.top+"px",e=t.orgAnimPos.left-t.budgetAnimPos.left,i=t.orgAnimPos.top-t.budgetAnimPos.top;else{var n=this.currentBallot.oldFavoriteItem?this.budgetElement.getItemLeftTop(this.currentBallot.oldFavoriteItem):null;n?(e=n.left-t.budgetAnimPos.left,i=n.top-t.budgetAnimPos.top):(console.warn("Can't find old item"),e=t.orgAnimPos.left-t.budgetAnimPos.left,i=t.orgAnimPos.top-t.budgetAnimPos.top)}this.$$("#favoriteIcon").hidden=!1,this.$$("#favoriteIcon").style.position="absolute",this.$$("#favoriteIcon").style.left=t.budgetAnimPos.left+"px",this.$$("#favoriteIcon").style.top=t.budgetAnimPos.top+"px",this.$$("#favoriteIcon").animate([{transform:"translateY("+i+"px) translateX("+e+"px)",easing:"ease-out"},{transform:"scale(3)",easing:"ease-in"},{transform:"scale(1)",easing:"ease-out"}],{duration:720,iterations:1}).onfinish=function(){this.$$("#favoriteIcon").style.position="absolute",this.$$("#favoriteIcon").style.left=t.budgetAnimPos.left+"px",this.$$("#favoriteIcon").style.top=t.budgetAnimPos.top+"px"}.bind(this)})}resetFavoriteIconPosition(){if(this.$$("#budgetBallot").favoriteItem){const e=this.$$("#budget").getItemLeftTop(this.$$("#budgetBallot").favoriteItem);e?(this.$$("#favoriteIcon").style.left=e.left+"px",this.$$("#favoriteIcon").style.top=e.top+"px"):console.error("Can't find position of favorite item")}}_help(){this.$$("#helpDialog").open()}_setArea(e){this.areaName=e.detail.areaName,this.totalBudget=e.detail.totalBudget}_clearArea(){this.areaName=null,this.totalBudget=null}_errorHandler(e){this.errorText=this.localize(e.detail),this.$$("#errorDialog").open()}_exit(){"post"===this._page&&window.appLastArea?(window.history.pushState({},null,window.appLastArea),this.fire("location-changed",window.appLastArea),window.appLastArea=null):(window.history.pushState({},null,"/"),this.fire("location-changed","/"))}_setTitle(e,t){}resetSizeWithDelay(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.resetFavoriteIconPosition()},250)}_translationLoaded(){if(!this.haveSetLanguage&&(this.haveSetLanguage=!0,"undefined"!=typeof Storage)){var e=localStorage.getItem("selectedLanguage");e&&this.fire("iron-signal",{name:"set-language",data:e})}}closeWelcome(){localStorage.setItem("haveClosedWelcome",!0)}getDialog(e){return this.$$("#"+e)}firstUpdated(){this._setupListeners(),installRouter(e=>this._locationChanged(e)),installOfflineWatcher(e=>this._offlineChanged(e)),installMediaQueryWatcher("(min-width: 460px)",e=>this._layoutChanged(e)),installMediaQueryWatcher("(min-width: 1024px)",e=>{this.wide=e,this.wideAndBallot=this.wide&&"area-ballot"===this._page})}getHelpContent(){return this.configFromServer.client_config.helpPageLocales[this.language]?this.b64DecodeUnicode(this.configFromServer.client_config.helpPageLocales[this.language].b64text):this.configFromServer.client_config.helpPageLocales.en?this.b64DecodeUnicode(this.configFromServer.client_config.helpPageLocales.en.b64text):"No help page found for selected language!"}getWelcomeHeading(){return this.configFromServer.client_config.welcomeLocales[this.language]?this.configFromServer.client_config.welcomeLocales[this.language].heading:this.configFromServer.client_config.welcomeLocales.en?this.configFromServer.client_config.welcomeLocales.en.heading:"No heading found"}getWelcomeText(){return this.configFromServer.client_config.welcomeLocales[this.language]?this.configFromServer.client_config.welcomeLocales[this.language].text:this.configFromServer.client_config.welcomeLocales.en?this.configFromServer.client_config.welcomeLocales.en.text:"No heading found"}setupLocaleTexts(){this.welcomeHeading=this.getWelcomeHeading(),this.welcomeText=this.getWelcomeText(),this.helpContent=this.getHelpContent()}updateAppMeta(e){document.title=e.title,updateMetadata({title:e.title,description:e.description,image:e.shareImageUrl});var t=document.querySelector("link[rel*='icon']")||document.createElement("link");t.type="image/x-icon",t.rel="shortcut icon",t.href=e.faviconUrl,document.getElementsByTagName("head")[0].appendChild(t)}updated(e){if(e.has("language")&&this.setupLocaleTexts(),e.has("_page")){this.appTitle,this._page;const t=this._page,i=e.get("_page");this.configFromServer&&this.configFromServer.client_config.landingPageData&&t&&"select-voting-area"!=t?this.showExit=!0:this.showExit=!1,this.hideBudget=!t||"area-ballot"!=t,"post"==i&&this.$$("#post")&&this.$$("#post").reset(),"area-ballot"==t&&this.$$("#budgetBallot")&&this.$$("#budgetBallot").refreshList&&this.$$("#budgetBallot").refreshList(),"area-ballot"==i&&this.$$("#budgetBallot")&&"post"!=t&&(this.$$("#budgetBallot").selectedView=0),"area-ballot"==i&&this.$$("#budgetBallot")&&this._hideFavoriteItem(),setTimeout(()=>{"area-ballot"==t&&this.currentBallot&&this.currentBallot.favoriteItem&&(this.$$("#favoriteIcon").hidden=!1,this.resetFavoriteIconPosition())}),"voting-completed"==t&&"area-ballot"!=i&&(window.location="/"),"voting-completed"==i&&this.$$("#selectVotingArea")&&this.$$("#selectVotingArea").refreshAreaCounters(),t&&"function"==typeof ga&&ga("send","pageview",{page:location.pathname+location.search+location.hash}),this.wideAndBallot=this.wide&&"area-ballot"===t}}_layoutChanged(e){}_offlineChanged(e){const t=this._offline;this._offline=e,void 0!==t&&(clearTimeout(this.__snackbarTimer),this._snackbarOpened=!0,this.__snackbarTimer=setTimeout(()=>{this._snackbarOpened=!1},3e3))}_locationChanged(e){if(e instanceof CustomEvent&&(e={pathname:e.detail}),"/"===e.pathname&&this.oneBallotId){const t="/area-ballot/"+this.oneBallotId;window.history.pushState({},null,t),e={pathname:t}}const t=window.decodeURIComponent(e.pathname),i="/"===t?"/":t.slice(1).split("/")[0];this._loadPage(i),t.slice(1).split("/")[1]&&(this._subPath=t.slice(1).split("/")[1])}_loadPage(e){switch(e){case"post":import("./yp-post/yp-post.js").then(e=>e&&e.$ypPost||{});break;case"area-ballot":case"voting-completed":case"select-voting-area":case"/":break;default:e="view404",import("./oav-view404.js").then(e=>e&&e.$oavView404||{})}this._page=e}_menuButtonClicked(){this._updateDrawerState(!0)}_drawerOpenedChanged(e){this._updateDrawerState(e.target.opened)}}window.customElements.define("oav-app",OavApp);export{appLayoutBehavior as $appLayoutBehavior,appScrollEffectsBehavior as $appScrollEffectsBehavior,applyShim as $applyShim$1,ApplyShim as $applyShimDefault,applyShimUtils as $applyShimUtils,arraySelector as $arraySelector,arraySplice as $arraySplice,async as $async,ballotEncryptionBehavior as $ballotEncryptionBehavior,cache$1 as $cache,caseMap$1 as $caseMap,_class as $class,commonRegex as $commonRegex,commonUtils as $commonUtils,compiler as $compiler,Compiler as $compilerDefault,core as $core,MessageFormat as $coreDefault,cssParse as $cssParse,cssTag as $cssTag,customStyle as $customStyle,customStyleInterface as $customStyleInterface$1,CustomStyleInterface as $customStyleInterfaceDefault,debounce as $debounce,decorators as $decorators,defaultTemplateProcessor$1 as $defaultTemplateProcessor,dirMixin as $dirMixin,directive$1 as $directive,documentWait$1 as $documentWait,documentWait as $documentWaitDefault,dom$1 as $dom,domBind as $domBind,domIf as $domIf,domModule as $domModule,domRepeat as $domRepeat,elementMixin as $elementMixin,en as $en,defaultLocale as $enDefault,es5 as $es5,fetch$2 as $fetch,flattenedNodesObserver as $flattenedNodesObserver,flush$2 as $flush,gestureEventListeners as $gestureEventListeners,gestures$1 as $gestures,helpers as $helpers,htmlTag as $htmlTag,ironA11yKeysBehavior as $ironA11yKeysBehavior,ironButtonState as $ironButtonState,ironCheckedElementBehavior as $ironCheckedElementBehavior,ironControlState as $ironControlState,ironFitBehavior as $ironFitBehavior,ironFocusablesHelper as $ironFocusablesHelper,ironFormElementBehavior as $ironFormElementBehavior,ironJsonpLibrary as $ironJsonpLibrary,ironMenuBehavior as $ironMenuBehavior,ironMenubarBehavior as $ironMenubarBehavior,ironMeta as $ironMeta,ironMultiSelectable as $ironMultiSelectable,ironOverlayBehavior as $ironOverlayBehavior,ironOverlayManager as $ironOverlayManager,ironResizableBehavior as $ironResizableBehavior,ironScrollManager as $ironScrollManager,ironScrollTargetBehavior as $ironScrollTargetBehavior,ironSelectable as $ironSelectable,ironSelection as $ironSelection,ironValidatableBehavior as $ironValidatableBehavior,legacyElementMixin as $legacyElementMixin,litElement as $litElement,litHtml as $litHtml,main as $main,MessageFormat as $mainDefault,mediaQuery as $mediaQuery,metadata as $metadata,mixin as $mixin,modifyTemplate as $modifyTemplate,mutableData as $mutableData,mutableDataBehavior as $mutableDataBehavior,neonAnimatableBehavior as $neonAnimatableBehavior,neonAnimationBehavior as $neonAnimationBehavior,neonAnimationRunnerBehavior as $neonAnimationRunnerBehavior,network as $network,oavAppStyles as $oavAppStyles,oavAreaBallotItemStyles as $oavAreaBallotItemStyles,oavAreaBallotMapStyles as $oavAreaBallotMapStyles,oavAreaBallotStyles as $oavAreaBallotStyles,oavAreaBudgetStyles as $oavAreaBudgetStyles,oavBaseElement as $oavBaseElement,oavFlexLayout as $oavFlexLayout,oavShadowStyles as $oavShadowStyles,oavVotingCompletedStyles as $oavVotingCompletedStyles,pageViewElement as $pageViewElement,paperButtonBehavior as $paperButtonBehavior,paperCheckedElementBehavior as $paperCheckedElementBehavior,paperDialogBehavior as $paperDialogBehavior,paperInkyFocusBehavior as $paperInkyFocusBehavior,paperItemBehavior as $paperItemBehavior,paperMenuButton as $paperMenuButton,paperRippleBehavior as $paperRippleBehavior,paperSpinnerBehavior as $paperSpinnerBehavior,parser$1 as $parser,parser as $parserDefault,part as $part,parts as $parts,path as $path,polymer_dom as $polymerDom,polymerElement as $polymerElement,polymerFn as $polymerFn,polymerLegacy as $polymerLegacy,propertiesChanged as $propertiesChanged,propertiesMixin as $propertiesMixin,propertyAccessors as $propertyAccessors,propertyEffects as $propertyEffects,render$1 as $render,renderStatus as $renderStatus,resolveUrl$1 as $resolveUrl,router as $router,settings as $settings,shadyRender as $shadyRender,styleGather as $styleGather,styleSettings as $styleSettings,styleUtil as $styleUtil,telemetry as $telemetry,template$b as $template,templateFactory$1 as $templateFactory,templateInstance as $templateInstance,templateMap$1 as $templateMap,templateMap as $templateMapDefault,templateResult as $templateResult,templateStamp as $templateStamp,templatize$1 as $templatize,templatizerBehavior as $templatizerBehavior,unsafeHtml as $unsafeHtml,unscopedStyleHandler as $unscopedStyleHandler,updatingElement as $updatingElement,utils as $utils,wrap$2 as $wrap,ANIMATION_MATCH,AppLayoutBehavior,AppScrollEffectsBehavior,ArraySelector,ArraySelectorMixin,AttributeCommitter,AttributeCommitter as AttributeCommitter$1,AttributePart,AttributePart as AttributePart$1,BRACKETED,Base,BooleanAttributePart,BooleanAttributePart as BooleanAttributePart$1,CSSResult,CSSResult as CSSResult$1,Class,CustomStyle,CustomStyleInterfaceInterface,CustomStyleProvider,DOMException,Debouncer,DefaultTemplateProcessor,DefaultTemplateProcessor as DefaultTemplateProcessor$1,DirMixin,DomApi,DomBind,DomIf,DomModule,DomRepeat,ElementMixin,EventApi,EventPart,EventPart as EventPart$1,FlattenedNodesObserver,GestureEventListeners,HOST_PREFIX,HOST_SUFFIX,Headers,IS_VAR,IronA11yKeysBehavior,IronButtonState,IronButtonStateImpl,IronCheckedElementBehavior,IronCheckedElementBehaviorImpl,IronControlState,IronFitBehavior,IronFocusablesHelper,IronFormElementBehavior,IronJsonpLibraryBehavior,IronMenuBehavior,IronMenuBehaviorImpl,IronMenubarBehavior,IronMenubarBehaviorImpl,IronMeta,IronMultiSelectableBehavior,IronMultiSelectableBehaviorImpl,IronOverlayBehavior,IronOverlayBehaviorImpl,IronOverlayManager,IronOverlayManagerClass,IronResizableBehavior,IronScrollTargetBehavior,IronSelectableBehavior,IronSelection,IronValidatableBehavior,IronValidatableBehaviorMeta,LegacyElementMixin,LitElement,MEDIA_MATCH,MIXIN_MATCH,MutableData,MutableDataBehavior,NeonAnimatableBehavior,NeonAnimationBehavior,NeonAnimationRunnerBehavior,NeonAnimationRunnerBehaviorImpl,NodePart,NodePart as NodePart$1,OavAppStyles,OavAreaBallotItemStyles,OavAreaBallotStyles,OavAreaBudgetStyles,OavAreaVotingCompletedStyles,OavBallotMapStyles,OavBaseElement,OavFlexLayout,OavShadowStyles,OptionalMutableData,OptionalMutableDataBehavior,PageViewElement,PaperButtonBehavior,PaperButtonBehaviorImpl,PaperCheckedElementBehavior,PaperCheckedElementBehaviorImpl,PaperDialogBehavior,PaperDialogBehaviorImpl,PaperInkyFocusBehavior,PaperInkyFocusBehaviorImpl,PaperItemBehavior,PaperItemBehaviorImpl,PaperMenuButton,PaperRippleBehavior,PaperSpinnerBehavior,Polymer,Polymer as Polymer$1,PolymerElement,PropertiesChanged,PropertiesMixin,PropertyAccessors,PropertyCommitter,PropertyCommitter as PropertyCommitter$1,PropertyEffects,PropertyPart,PropertyPart as PropertyPart$1,Request,Response,SVGTemplateResult,SVGTemplateResult as SVGTemplateResult$1,SVGTemplateResult as SVGTemplateResult$2,StyleNode,Template,Template as Template$1,TemplateInstance,TemplateInstance as TemplateInstance$1,TemplateInstanceBase,TemplateResult,TemplateResult as TemplateResult$1,TemplateResult as TemplateResult$2,TemplateResult as TemplateResult$3,TemplateStamp,Templatizer,UpdatingElement,UpdatingElement as UpdatingElement$1,VAR_ASSIGN,VAR_CONSUMED,_boundScrollHandler,_composedTreeContains,_getScrollInfo,_getScrollableNodes,_getScrollingNode,_hasCachedLockedElement,_hasCachedUnlockedElement,_lockScrollInteractions,_lockedElementCache,_lockingElements,_scrollEffects,_scrollInteractionHandler,_scrollTimer,_shouldPreventScrolling,_unlockScrollInteractions,_unlockedElementCache,add,enqueueDebouncer as addDebouncer,addListener,afterNextRender,allowTemplateFromDomModule,animationFrame,applyCss,applyStyle,applyStylePlaceHolder,beforeNextRender,boundAttributeSuffix,cache,calculateSplices,camelToDashCase,createMarker,createMarker as createMarker$1,createScopeStyle,css,css as css$1,cssBuild,cssFromModule,cssFromModuleImports,cssFromModules,cssFromTemplate,currentLockingElement,customElement,customElement as customElement$1,dashToCamelCase,dedupingMixin,deepTargetFind,defaultConverter,defaultConverter as defaultConverter$1,defaultTemplateProcessor,defaultTemplateProcessor as defaultTemplateProcessor$1,defineProperty,detectMixin,directive,directive as directive$1,disableRuntime,dom,dumpRegistrations,elementHasBuiltCss,elementIsScrollLocked,elementsAreInvalid,encryptVote,enqueueDebouncer,enqueueDebouncer as enqueueDebouncer$1,eventOptions,eventOptions as eventOptions$1,extend,fetch$1 as fetch,findMatchingParen,findOriginalTarget,flush$1 as flush,flush$1,flush as flush$2,flushDebouncers,forEachRule,gatherStyleText,gestures,get,getBuildComment,getComputedStyleValue,getCssBuild,getIsExtends,hop,html,html$1,html as html$2,html as html$3,html$1 as html$4,html$1 as html$5,htmlLiteral,idlePeriod,incrementInstanceCount,insertNodeIntoTemplate,installMediaQueryWatcher,installOfflineWatcher,installRouter,instanceCount,invalidate,invalidateTemplate,isAncestor,isCEPolyfill,isDeep,isDescendant,isDirective,isDirective as isDirective$1,isKeyframesSelector,isOptimalCssBuild,isPath,isPrimitive,isPrimitive as isPrimitive$1,isTargetedBuild,isTemplatePartActive,isTemplatePartActive as isTemplatePartActive$1,isUnscopedStyle,isValid,isValidating,lastAttributeNameRegex,legacyOptimizations,marker,markerRegex,matches,matchesSelector,microTask,mixinBehaviors,modelForElement,nativeCssVariables,nativeShadow,noChange,noChange as noChange$1,nodeMarker,normalize,notEqual,notEqual as notEqual$1,nothing,nothing as nothing$1,objCreate,parse,parts$1 as parts,parts$1,passiveTouchGestures,pathFromUrl,prevent,processUnscopedStyle,processVariableAndFallback,property,property as property$1,pushScrollLock,query,query as query$1,queryAll,queryAll as queryAll$1,queryAllRoot,recognizers,register$1 as register,register as register$1,registerEffect,registrations,remove,removeCustomPropAssignment,removeListener,removeNodes,removeNodes as removeNodes$1,removeNodesFromTemplate,removeScrollLock,render,render$2 as render$1,render as render$2,reparentNodes,reparentNodes as reparentNodes$1,resetMouseCanceller,resolveCss,resolveUrl,root,rootPath,rulesForStyle,sanitizeDOMValue,scopingAttribute,scroll,scrollTimingFunction,set,setAllowTemplateFromDomModule,setElementClassRaw,setLegacyOptimizations,setMetaTag,setPassiveTouchGestures,setRootPath,setSanitizeDOMValue,setStrictTemplatePolicy,setSyncInitialRender,setTouchAction,split,splitSelectorList,startValidating,startValidatingTemplate,strictTemplatePolicy,stringify,stylesFromModule,stylesFromModuleImports,stylesFromModules,stylesFromTemplate,supportsAdoptingStyleSheets,supportsAdoptingStyleSheets as supportsAdoptingStyleSheets$1,svg,svg as svg$1,svg as svg$2,syncInitialRender,templateCaches,templateCaches as templateCaches$1,templateFactory,templateFactory as templateFactory$1,templateIsValid,templateIsValidating,templatize,timeOut,toCssText,translate,types,unsafeCSS,unsafeCSS as unsafeCSS$1,unsafeHTML,updateMetadata,updateNativeProperties,updateStyles,useNativeCSSProperties,useNativeCustomElements,useShadow,version,version as version$1,wrap$1 as wrap,wrap as wrap$1};
