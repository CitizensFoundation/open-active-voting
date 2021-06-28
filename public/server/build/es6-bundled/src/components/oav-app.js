define(["exports","meta","require"],function(_exports,meta,_require){'use strict';Object.defineProperty(_exports,"__esModule",{value:!0});_exports.$indexDefault=memoize;_exports.parse=parse$1;_exports.isLiteralElement$1=_exports.isLiteralElement=isLiteralElement;_exports.isArgumentElement$1=_exports.isArgumentElement=isArgumentElement;_exports.isNumberElement$1=_exports.isNumberElement=isNumberElement;_exports.isDateElement$1=_exports.isDateElement=isDateElement;_exports.isTimeElement$1=_exports.isTimeElement=isTimeElement;_exports.isSelectElement$1=_exports.isSelectElement=isSelectElement;_exports.isPluralElement$1=_exports.isPluralElement=isPluralElement;_exports.isPoundElement$1=_exports.isPoundElement=isPoundElement;_exports.isTagElement$1=_exports.isTagElement=isTagElement;_exports.isNumberSkeleton$1=_exports.isNumberSkeleton=isNumberSkeleton;_exports.isDateTimeSkeleton$1=_exports.isDateTimeSkeleton=isDateTimeSkeleton;_exports.createLiteralElement$1=_exports.createLiteralElement=createLiteralElement;_exports.createNumberElement$1=_exports.createNumberElement=createNumberElement;_exports.parseDateTimeSkeleton$1=_exports.parseDateTimeSkeleton=parseDateTimeSkeleton;_exports.parseNumberSkeletonFromString$1=_exports.parseNumberSkeletonFromString=parseNumberSkeletonFromString;_exports.parseNumberSkeleton$1=_exports.parseNumberSkeleton=parseNumberSkeleton;_exports.elementIsScrollLocked=elementIsScrollLocked;_exports.pushScrollLock=pushScrollLock;_exports.removeScrollLock=removeScrollLock;_exports._hasCachedLockedElement=_hasCachedLockedElement;_exports._hasCachedUnlockedElement=_hasCachedUnlockedElement;_exports._composedTreeContains=_composedTreeContains;_exports._scrollInteractionHandler=_scrollInteractionHandler;_exports._lockScrollInteractions=_lockScrollInteractions;_exports._unlockScrollInteractions=_unlockScrollInteractions;_exports._shouldPreventScrolling=_shouldPreventScrolling;_exports._getScrollableNodes=_getScrollableNodes;_exports._getScrollingNode=_getScrollingNode;_exports._getScrollInfo=_getScrollInfo;_exports.mixinBehaviors=mixinBehaviors;_exports.calculateSplices=calculateSplices;_exports.dashToCamelCase=dashToCamelCase;_exports.camelToDashCase=camelToDashCase;_exports.deepTargetFind=deepTargetFind;_exports.addListener=addListener;_exports.removeListener=removeListener;_exports.register=register$1;_exports.setTouchAction=setTouchAction;_exports.prevent=prevent;_exports.resetMouseCanceller=resetMouseCanceller;_exports.isPath=isPath;_exports.root=root;_exports.isAncestor=isAncestor;_exports.isDescendant=isDescendant;_exports.translate=translate;_exports.matches=matches;_exports.normalize=normalize;_exports.split=split;_exports.get=get;_exports.set=set;_exports.flush$2=flush;_exports.beforeNextRender=beforeNextRender;_exports.afterNextRender=afterNextRender;_exports.resolveUrl=resolveUrl;_exports.resolveCss=resolveCss;_exports.pathFromUrl=pathFromUrl;_exports.stylesFromModules=stylesFromModules;_exports.stylesFromModule=stylesFromModule;_exports.stylesFromTemplate=stylesFromTemplate;_exports.stylesFromModuleImports=stylesFromModuleImports;_exports.cssFromModules=cssFromModules;_exports.cssFromModule=cssFromModule;_exports.cssFromTemplate=cssFromTemplate;_exports.cssFromModuleImports=cssFromModuleImports;_exports.incrementInstanceCount=incrementInstanceCount;_exports.register$1=register;_exports.dumpRegistrations=dumpRegistrations;_exports.templatize=templatize;_exports.modelForElement=modelForElement;_exports.invalidate=invalidate;_exports.invalidateTemplate=invalidateTemplate;_exports.isValid=isValid;_exports.templateIsValid=templateIsValid;_exports.isValidating=isValidating;_exports.templateIsValidating=templateIsValidating;_exports.startValidating=startValidating;_exports.startValidatingTemplate=startValidatingTemplate;_exports.elementsAreInvalid=elementsAreInvalid;_exports.updateNativeProperties=updateNativeProperties;_exports.getComputedStyleValue=getComputedStyleValue;_exports.detectMixin=detectMixin;_exports.parse$1=parse;_exports.stringify=stringify;_exports.removeCustomPropAssignment=removeCustomPropAssignment;_exports.$documentWaitDefault=documentWait;_exports.toCssText=toCssText;_exports.rulesForStyle=rulesForStyle;_exports.isKeyframesSelector=isKeyframesSelector;_exports.forEachRule=forEachRule;_exports.applyCss=applyCss;_exports.createScopeStyle=createScopeStyle;_exports.applyStylePlaceHolder=applyStylePlaceHolder;_exports.applyStyle=applyStyle;_exports.isTargetedBuild=isTargetedBuild;_exports.findMatchingParen=findMatchingParen;_exports.processVariableAndFallback=processVariableAndFallback;_exports.setElementClassRaw=setElementClassRaw;_exports.getIsExtends=getIsExtends;_exports.gatherStyleText=gatherStyleText;_exports.splitSelectorList=splitSelectorList;_exports.getCssBuild=getCssBuild;_exports.elementHasBuiltCss=elementHasBuiltCss;_exports.getBuildComment=getBuildComment;_exports.isOptimalCssBuild=isOptimalCssBuild;_exports.processUnscopedStyle=processUnscopedStyle;_exports.isUnscopedStyle=isUnscopedStyle;_exports.isFormatXMLElementFn$1=_exports.isFormatXMLElementFn=isFormatXMLElementFn;_exports.formatToParts$1=_exports.formatToParts=formatToParts;_exports.property$1=_exports.property=property;_exports.internalProperty$1=_exports.internalProperty=internalProperty;_exports.query$1=_exports.query=query;_exports.queryAsync$1=_exports.queryAsync=queryAsync;_exports.queryAll$1=_exports.queryAll=queryAll;_exports.eventOptions$1=_exports.eventOptions=eventOptions;_exports.queryAssignedNodes$1=_exports.queryAssignedNodes=queryAssignedNodes;_exports.removeNodesFromTemplate=removeNodesFromTemplate;_exports.insertNodeIntoTemplate=insertNodeIntoTemplate;_exports.templateFactory$1=_exports.templateFactory=templateFactory;_exports.setMetaTag=setMetaTag;_exports.__extends=__extends;_exports.__rest=__rest;_exports.__decorate=__decorate;_exports.__param=__param;_exports.__metadata=__metadata;_exports.__awaiter=__awaiter;_exports.__generator=__generator;_exports.__exportStar=__exportStar;_exports.__values=__values;_exports.__read=__read;_exports.__spread=__spread;_exports.__spreadArrays=__spreadArrays;_exports.__spreadArray=__spreadArray;_exports.__await=__await;_exports.__asyncGenerator=__asyncGenerator;_exports.__asyncDelegator=__asyncDelegator;_exports.__asyncValues=__asyncValues;_exports.__makeTemplateObject=__makeTemplateObject;_exports.__importStar=__importStar;_exports.__importDefault=__importDefault;_exports.__classPrivateFieldGet=__classPrivateFieldGet;_exports.__classPrivateFieldSet=__classPrivateFieldSet;_exports.Headers=Headers;_exports.Request=Request;_exports.Response=Response;_exports.fetch=fetch$1;_exports.encryptVote=encryptVote;_exports.$formatters=_exports.$error$1=_exports.$core=_exports.$index$3=_exports.$unscopedStyleHandler=_exports.$templateMap=_exports.$styleUtil=_exports.$styleSettings=_exports.$documentWait=_exports.$customStyleInterface$1=_exports.$cssParse=_exports.$commonUtils=_exports.$commonRegex=_exports.$applyShim$1=_exports.$applyShimUtils=_exports.$polymerLegacy=_exports.$polymerElement=_exports.$wrap=_exports.$templatize=_exports.$telemetry=_exports.$styleGather=_exports.$settings=_exports.$resolveUrl=_exports.$renderStatus=_exports.$path=_exports.$mixin=_exports.$htmlTag=_exports.$gestures=_exports.$flush=_exports.$flattenedNodesObserver=_exports.$debounce=_exports.$caseMap=_exports.$async=_exports.$arraySplice=_exports.$templateStamp=_exports.$propertyEffects=_exports.$propertyAccessors=_exports.$propertiesMixin=_exports.$propertiesChanged=_exports.$mutableData=_exports.$gestureEventListeners=_exports.$elementMixin=_exports.$dirMixin=_exports.$templatizerBehavior=_exports.$polymerDom=_exports.$polymerFn=_exports.$mutableDataBehavior=_exports.$legacyElementMixin=_exports.$class=_exports.$domRepeat=_exports.$domModule=_exports.$domIf=_exports.$domBind=_exports.$customStyle=_exports.$arraySelector=_exports.$paperSpinnerBehavior=_exports.$paperMenuButton=_exports.$paperItemBehavior=_exports.$paperDialogBehavior=_exports.$paperRippleBehavior=_exports.$paperInkyFocusBehavior=_exports.$paperCheckedElementBehavior=_exports.$paperButtonBehavior=_exports.$neonAnimationRunnerBehavior=_exports.$neonAnimationBehavior=_exports.$neonAnimatableBehavior=_exports.$ironValidatableBehavior=_exports.$ironSelection=_exports.$ironSelectable=_exports.$ironMultiSelectable=_exports.$ironScrollTargetBehavior=_exports.$ironResizableBehavior=_exports.$ironScrollManager=_exports.$ironOverlayManager=_exports.$ironOverlayBehavior=_exports.$ironFocusablesHelper=_exports.$ironMeta=_exports.$ironMenubarBehavior=_exports.$ironMenuBehavior=_exports.$ironJsonpLibrary=_exports.$ironFormElementBehavior=_exports.$ironFitBehavior=_exports.$ironCheckedElementBehavior=_exports.$ironControlState=_exports.$ironButtonState=_exports.$ironA11yKeysBehavior=_exports.$ironA11yAnnouncer=_exports.$helpers=_exports.$appScrollEffectsBehavior=_exports.$appLayoutBehavior=_exports.$regexGenerated$1=_exports.$number=_exports.$index$2=_exports.$dateTime=_exports.$types=_exports.$regexGenerated=_exports.$parser=_exports.$index$1=_exports.$error=_exports.$index=void 0;_exports.PaperDialogBehavior=_exports.PaperDialogBehaviorImpl=_exports.PaperRippleBehavior=_exports.PaperInkyFocusBehavior=_exports.PaperInkyFocusBehaviorImpl=_exports.PaperCheckedElementBehavior=_exports.PaperCheckedElementBehaviorImpl=_exports.PaperButtonBehavior=_exports.PaperButtonBehaviorImpl=_exports.NeonAnimationRunnerBehavior=_exports.NeonAnimationRunnerBehaviorImpl=_exports.NeonAnimationBehavior=_exports.NeonAnimatableBehavior=_exports.IronValidatableBehavior=_exports.IronValidatableBehaviorMeta=_exports.IronSelection=_exports.IronSelectableBehavior=_exports.IronMultiSelectableBehavior=_exports.IronMultiSelectableBehaviorImpl=_exports.IronScrollTargetBehavior=_exports.IronResizableBehavior=_exports._boundScrollHandler=_exports._unlockedElementCache=_exports._lockedElementCache=_exports._lockingElements=_exports.currentLockingElement=_exports.IronOverlayManager=_exports.IronOverlayManagerClass=_exports.IronOverlayBehavior=_exports.IronOverlayBehaviorImpl=_exports.IronFocusablesHelper=_exports.IronMeta=_exports.IronMenubarBehavior=_exports.IronMenubarBehaviorImpl=_exports.IronMenuBehavior=_exports.IronMenuBehaviorImpl=_exports.IronJsonpLibraryBehavior=_exports.IronFormElementBehavior=_exports.IronFitBehavior=_exports.IronCheckedElementBehavior=_exports.IronCheckedElementBehaviorImpl=_exports.IronControlState=_exports.IronButtonState=_exports.IronButtonStateImpl=_exports.IronA11yKeysBehavior=_exports.IronA11yAnnouncer=_exports.scroll=_exports.queryAllRoot=_exports.registerEffect=_exports.scrollTimingFunction=_exports._scrollTimer=_exports._scrollEffects=_exports.AppScrollEffectsBehavior=_exports.AppLayoutBehavior=_exports.WHITE_SPACE_REGEX$1=_exports.WHITE_SPACE_REGEX=_exports.SPACE_SEPARATOR_REGEX=_exports.Parser=_exports.SKELETON_TYPE$1=_exports.SKELETON_TYPE=_exports.TYPE$1=_exports.TYPE=_exports.ErrorKind=_exports.strategies=_exports.$pageViewElement=_exports.$oavVotingCompletedStyles=_exports.$oavShadowStyles=_exports.$oavFlexLayout=_exports.$oavBaseElement=_exports.$oavAreaBudgetStyles=_exports.$oavAreaBallotStyles=_exports.$oavAreaBallotMapStyles=_exports.$oavAreaBallotItemStyles=_exports.$oavAppStyles=_exports.$ballotEncryptionBehavior=_exports.$fetch=_exports.$tslibEs6=_exports.$router=_exports.$network=_exports.$metadata=_exports.$mediaQuery=_exports.$litHtml=_exports.$template=_exports.$templateResult=_exports.$templateInstance=_exports.$templateFactory=_exports.$shadyRender=_exports.$render=_exports.$parts=_exports.$part=_exports.$modifyTemplate=_exports.$dom=_exports.$directive=_exports.$defaultTemplateProcessor=_exports.$unsafeHtml=_exports.$cache=_exports.$litElement=_exports.$updatingElement=_exports.$decorators=_exports.$cssTag=void 0;_exports.nativeCssVariables=_exports.disableRuntime=_exports.cssBuild=_exports.nativeShadow=_exports.CustomStyleInterfaceInterface=_exports.$customStyleInterfaceDefault=_exports.CustomStyleProvider=_exports.types=_exports.StyleNode=_exports.HOST_SUFFIX=_exports.HOST_PREFIX=_exports.BRACKETED=_exports.IS_VAR=_exports.MEDIA_MATCH=_exports.ANIMATION_MATCH=_exports.VAR_CONSUMED=_exports.MIXIN_MATCH=_exports.VAR_ASSIGN=_exports.$applyShimDefault=_exports.Base=_exports.PolymerElement=_exports.wrap=_exports.TemplateInstanceBase=_exports.registrations=_exports.instanceCount=_exports.setSyncInitialRender=_exports.syncInitialRender=_exports.setLegacyOptimizations=_exports.legacyOptimizations=_exports.setAllowTemplateFromDomModule=_exports.allowTemplateFromDomModule=_exports.setStrictTemplatePolicy=_exports.strictTemplatePolicy=_exports.setPassiveTouchGestures=_exports.passiveTouchGestures=_exports.setSanitizeDOMValue=_exports.sanitizeDOMValue=_exports.setRootPath=_exports.rootPath=_exports.useNativeCustomElements=_exports.useNativeCSSProperties=_exports.useShadow=_exports.isDeep=_exports.dedupingMixin=_exports.htmlLiteral=_exports.html$3=_exports.html$2=_exports.html=_exports.remove=_exports.add=_exports.findOriginalTarget=_exports.recognizers=_exports.gestures=_exports.FlattenedNodesObserver=_exports.flushDebouncers=_exports.Debouncer=_exports.microTask=_exports.idlePeriod=_exports.animationFrame=_exports.timeOut=_exports.TemplateStamp=_exports.PropertyEffects=_exports.PropertyAccessors=_exports.PropertiesMixin=_exports.PropertiesChanged=_exports.OptionalMutableData=_exports.MutableData=_exports.GestureEventListeners=_exports.updateStyles=_exports.ElementMixin=_exports.version$1=_exports.version=_exports.DirMixin=_exports.Templatizer=_exports.dom=_exports.DomApi=_exports.EventApi=_exports.matchesSelector=_exports.enqueueDebouncer=_exports.enqueueDebouncer$1=_exports.addDebouncer=_exports.flush=_exports.flush$1=_exports.Polymer$1=_exports.Polymer=_exports.OptionalMutableDataBehavior=_exports.MutableDataBehavior=_exports.LegacyElementMixin=_exports.Class=_exports.DomRepeat=_exports.DomModule=_exports.DomIf=_exports.DomBind=_exports.CustomStyle=_exports.ArraySelector=_exports.ArraySelectorMixin=_exports.PaperSpinnerBehavior=_exports.PaperMenuButton=_exports.PaperItemBehavior=_exports.PaperItemBehaviorImpl=void 0;_exports.nodeMarker=_exports.marker=_exports.TemplateInstance$1=_exports.TemplateInstance=_exports.templateCaches$1=_exports.templateCaches=_exports.render$1=_exports.shadyTemplateFactory=_exports.render$2=_exports.render=_exports.parts$1=_exports.parts=_exports.EventPart$1=_exports.EventPart=_exports.PropertyPart$1=_exports.PropertyPart=_exports.PropertyCommitter$1=_exports.PropertyCommitter=_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=_exports.NodePart$1=_exports.NodePart=_exports.AttributePart$1=_exports.AttributePart=_exports.AttributeCommitter$1=_exports.AttributeCommitter=_exports.isIterable$1=_exports.isIterable=_exports.isPrimitive$1=_exports.isPrimitive=_exports.nothing$1=_exports.nothing=_exports.noChange$1=_exports.noChange=_exports.removeNodes$1=_exports.removeNodes=_exports.reparentNodes$1=_exports.reparentNodes=_exports.isCEPolyfill=_exports.isDirective$1=_exports.isDirective=_exports.directive$1=_exports.directive=_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=_exports.unsafeHTML=_exports.cache=_exports.LitElement=_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=_exports.svg$2=_exports.svg$1=_exports.svg=_exports.html$5=_exports.html$4=_exports.html$1=_exports.ReactiveElement=_exports.UpdatingElement$1=_exports.UpdatingElement=_exports.notEqual$1=_exports.notEqual=_exports.defaultConverter$1=_exports.defaultConverter=_exports.state$1=_exports.state=_exports.customElement$1=_exports.customElement=_exports.css=_exports.css$1=_exports.unsafeCSS$1=_exports.unsafeCSS=_exports.CSSResult$1=_exports.CSSResult=_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=_exports.MissingValueError$1=_exports.MissingValueError=_exports.InvalidValueTypeError$1=_exports.InvalidValueTypeError=_exports.InvalidValueError$1=_exports.InvalidValueError=_exports.FormatError$1=_exports.FormatError=_exports.ErrorCode$1=_exports.ErrorCode=_exports.$indexDefault$1=_exports.IntlMessageFormat$1=_exports.IntlMessageFormat=_exports.PART_TYPE$1=_exports.PART_TYPE=_exports.scopingAttribute=_exports.$templateMapDefault=_exports.wrap$1=void 0;_exports.PageViewElement=_exports.OavAreaVotingCompletedStyles=_exports.OavShadowStyles=_exports.OavFlexLayout=_exports.OavBaseElement=_exports.OavAreaBudgetStyles=_exports.OavAreaBallotStyles=_exports.OavBallotMapStyles=_exports.OavAreaBallotItemStyles=_exports.OavAppStyles=_exports.DOMException=_exports.__createBinding=_exports.__assign=_exports.installRouter=_exports.installOfflineWatcher=_exports.updateMetadata=_exports.installMediaQueryWatcher=_exports.lastAttributeNameRegex=_exports.createMarker$1=_exports.createMarker=_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=_exports.Template$1=_exports.Template=_exports.boundAttributeSuffix=_exports.markerRegex=void 0;meta=babelHelpers.interopRequireWildcard(meta);_require=babelHelpers.interopRequireWildcard(_require);var _Mathpow=Math.pow,_Mathsqrt=Math.sqrt,_Mathmax=Math.max,_StringfromCharCode=String.fromCharCode,_NumberisSafeInteger=Number.isSafeInteger,_StringfromCodePoint=String.fromCodePoint,_Stringprototype=String.prototype,_Mathround=Math.round,_Mathceil=Math.ceil,_Mathmin=Math.min,_Mathabs=Math.abs,_Mathfloor=Math.floor;const nativeShadow=!(window.ShadyDOM&&window.ShadyDOM.inUse);_exports.nativeShadow=nativeShadow;let nativeCssVariables_;function calcCssVariables(settings){if(settings&&settings.shimcssproperties){nativeCssVariables_=!1}else{nativeCssVariables_=nativeShadow||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}}let cssBuild;_exports.cssBuild=cssBuild;if(window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0){_exports.cssBuild=cssBuild=window.ShadyCSS.cssBuild}const disableRuntime=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);_exports.disableRuntime=disableRuntime;if(window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0){nativeCssVariables_=window.ShadyCSS.nativeCss}else if(window.ShadyCSS){calcCssVariables(window.ShadyCSS);window.ShadyCSS=void 0}else{calcCssVariables(window.WebComponents&&window.WebComponents.flags)}const nativeCssVariables=nativeCssVariables_;_exports.nativeCssVariables=nativeCssVariables;var styleSettings={nativeShadow:nativeShadow,get cssBuild(){return cssBuild},disableRuntime:disableRuntime,nativeCssVariables:nativeCssVariables};_exports.$styleSettings=styleSettings;"use strict";class StyleNode{constructor(){this.start=0;this.end=0;this.previous=null;this.parent=null;this.rules=null;this.parsedCssText="";this.cssText="";this.atRule=!1;this.type=0;this.keyframesName="";this.selector="";this.parsedSelector=""}}_exports.StyleNode=StyleNode;function parse(text){text=clean(text);return parseCss(lex(text),text)}function clean(cssText){return cssText.replace(RX.comments,"").replace(RX.port,"")}function lex(text){let root=new StyleNode;root.start=0;root.end=text.length;let n=root;for(let i=0,l=text.length;i<l;i++){if(text[i]===OPEN_BRACE){if(!n.rules){n.rules=[]}let p=n,previous=p.rules[p.rules.length-1]||null;n=new StyleNode;n.start=i+1;n.parent=p;n.previous=previous;p.rules.push(n)}else if(text[i]===CLOSE_BRACE){n.end=i+1;n=n.parent||root}}return root}function parseCss(node,text){let t=text.substring(node.start,node.end-1);node.parsedCssText=node.cssText=t.trim();if(node.parent){let ss=node.previous?node.previous.end:node.parent.start;t=text.substring(ss,node.start-1);t=_expandUnicodeEscapes(t);t=t.replace(RX.multipleSpaces," ");t=t.substring(t.lastIndexOf(";")+1);let s=node.parsedSelector=node.selector=t.trim();node.atRule=0===s.indexOf(AT_START);if(node.atRule){if(0===s.indexOf(MEDIA_START)){node.type=types.MEDIA_RULE}else if(s.match(RX.keyframesRule)){node.type=types.KEYFRAMES_RULE;node.keyframesName=node.selector.split(RX.multipleSpaces).pop()}}else{if(0===s.indexOf(VAR_START)){node.type=types.MIXIN_RULE}else{node.type=types.STYLE_RULE}}}let r$=node.rules;if(r$){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){parseCss(r,text)}}return node}function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let code=arguments[1],repeat=6-code.length;while(repeat--){code="0"+code}return"\\"+code})}function stringify(node,preserveProperties,text=""){let cssText="";if(node.cssText||node.rules){let r$=node.rules;if(r$&&!_hasMixinRules(r$)){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){cssText=stringify(r,preserveProperties,cssText)}}else{cssText=preserveProperties?node.cssText:removeCustomProps(node.cssText);cssText=cssText.trim();if(cssText){cssText="  "+cssText+"\n"}}}if(cssText){if(node.selector){text+=node.selector+" "+OPEN_BRACE+"\n"}text+=cssText;if(node.selector){text+=CLOSE_BRACE+"\n\n"}}return text}function _hasMixinRules(rules){let r=rules[0];return!!r&&!!r.selector&&0===r.selector.indexOf(VAR_START)}function removeCustomProps(cssText){cssText=removeCustomPropAssignment(cssText);return removeCustomPropApply(cssText)}function removeCustomPropAssignment(cssText){return cssText.replace(RX.customProp,"").replace(RX.mixinProp,"")}function removeCustomPropApply(cssText){return cssText.replace(RX.mixinApply,"").replace(RX.varApply,"")}const types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3};_exports.types=types;const OPEN_BRACE="{",CLOSE_BRACE="}",RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START="--",MEDIA_START="@media",AT_START="@";var cssParse={StyleNode:StyleNode,parse:parse,stringify:stringify,removeCustomPropAssignment:removeCustomPropAssignment,types:types};_exports.$cssParse=cssParse;const VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;_exports.VAR_ASSIGN=VAR_ASSIGN;const MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;_exports.MIXIN_MATCH=MIXIN_MATCH;const VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi;_exports.VAR_CONSUMED=VAR_CONSUMED;const ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/;_exports.ANIMATION_MATCH=ANIMATION_MATCH;const MEDIA_MATCH=/@media\s(.*)/;_exports.MEDIA_MATCH=MEDIA_MATCH;const IS_VAR=/^--/;_exports.IS_VAR=IS_VAR;const BRACKETED=/\{[^}]*\}/g;_exports.BRACKETED=BRACKETED;const HOST_PREFIX="(?:^|[^.#[:])";_exports.HOST_PREFIX=HOST_PREFIX;const HOST_SUFFIX="($|[.:[\\s>+~])";_exports.HOST_SUFFIX=HOST_SUFFIX;var commonRegex={VAR_ASSIGN:VAR_ASSIGN,MIXIN_MATCH:MIXIN_MATCH,VAR_CONSUMED:VAR_CONSUMED,ANIMATION_MATCH:ANIMATION_MATCH,MEDIA_MATCH:MEDIA_MATCH,IS_VAR:IS_VAR,BRACKETED:BRACKETED,HOST_PREFIX:HOST_PREFIX,HOST_SUFFIX:HOST_SUFFIX};_exports.$commonRegex=commonRegex;"use strict";const styleTextSet=new Set,scopingAttribute="shady-unscoped";_exports.scopingAttribute=scopingAttribute;function processUnscopedStyle(style){const text=style.textContent;if(!styleTextSet.has(text)){styleTextSet.add(text);const newStyle=style.cloneNode(!0);document.head.appendChild(newStyle)}}function isUnscopedStyle(style){return style.hasAttribute(scopingAttribute)}var unscopedStyleHandler={scopingAttribute:scopingAttribute,processUnscopedStyle:processUnscopedStyle,isUnscopedStyle:isUnscopedStyle};_exports.$unscopedStyleHandler=unscopedStyleHandler;"use strict";function toCssText(rules,callback){if(!rules){return""}if("string"===typeof rules){rules=parse(rules)}if(callback){forEachRule(rules,callback)}return stringify(rules,nativeCssVariables)}function rulesForStyle(style){if(!style.__cssRules&&style.textContent){style.__cssRules=parse(style.textContent)}return style.__cssRules||null}function isKeyframesSelector(rule){return!!rule.parent&&rule.parent.type===types.KEYFRAMES_RULE}function forEachRule(node,styleRuleCallback,keyframesRuleCallback,onlyActiveRules){if(!node){return}let skipRules=!1,type=node.type;if(onlyActiveRules){if(type===types.MEDIA_RULE){let matchMedia=node.selector.match(MEDIA_MATCH);if(matchMedia){if(!window.matchMedia(matchMedia[1]).matches){skipRules=!0}}}}if(type===types.STYLE_RULE){styleRuleCallback(node)}else if(keyframesRuleCallback&&type===types.KEYFRAMES_RULE){keyframesRuleCallback(node)}else if(type===types.MIXIN_RULE){skipRules=!0}let r$=node.rules;if(r$&&!skipRules){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){forEachRule(r,styleRuleCallback,keyframesRuleCallback,onlyActiveRules)}}}function applyCss(cssText,moniker,target,contextNode){let style=createScopeStyle(cssText,moniker);applyStyle(style,target,contextNode);return style}function createScopeStyle(cssText,moniker){let style=document.createElement("style");if(moniker){style.setAttribute("scope",moniker)}style.textContent=cssText;return style}let lastHeadApplyNode=null;function applyStylePlaceHolder(moniker){let placeHolder=document.createComment(" Shady DOM styles for "+moniker+" "),after=lastHeadApplyNode?lastHeadApplyNode.nextSibling:null,scope=document.head;scope.insertBefore(placeHolder,after||scope.firstChild);lastHeadApplyNode=placeHolder;return placeHolder}function applyStyle(style,target,contextNode){target=target||document.head;let after=contextNode&&contextNode.nextSibling||target.firstChild;target.insertBefore(style,after);if(!lastHeadApplyNode){lastHeadApplyNode=style}else{let position=style.compareDocumentPosition(lastHeadApplyNode);if(position===Node.DOCUMENT_POSITION_PRECEDING){lastHeadApplyNode=style}}}function isTargetedBuild(buildType){return nativeShadow?"shadow"===buildType:"shady"===buildType}function findMatchingParen(text,start){let level=0;for(let i=start,l=text.length;i<l;i++){if("("===text[i]){level++}else if(")"===text[i]){if(0===--level){return i}}}return-1}function processVariableAndFallback(str,callback){let start=str.indexOf("var(");if(-1===start){return callback(str,"","","")}let end=findMatchingParen(str,start+3),inner=str.substring(start+4,end),prefix=str.substring(0,start),suffix=processVariableAndFallback(str.substring(end+1),callback),comma=inner.indexOf(",");if(-1===comma){return callback(prefix,inner.trim(),"",suffix)}let value=inner.substring(0,comma).trim(),fallback=inner.substring(comma+1).trim();return callback(prefix,value,fallback,suffix)}function setElementClassRaw(element,value){if(nativeShadow){element.setAttribute("class",value)}else{window.ShadyDOM.nativeMethods.setAttribute.call(element,"class",value)}}const wrap=window.ShadyDOM&&window.ShadyDOM.wrap||(node=>node);_exports.wrap$1=wrap;function getIsExtends(element){let localName=element.localName,is="",typeExtension="";if(localName){if(-1<localName.indexOf("-")){is=localName}else{typeExtension=localName;is=element.getAttribute&&element.getAttribute("is")||""}}else{is=element.is;typeExtension=element.extends}return{is,typeExtension}}function gatherStyleText(element){const styleTextParts=[],styles=element.querySelectorAll("style");for(let i=0;i<styles.length;i++){const style=styles[i];if(isUnscopedStyle(style)){if(!nativeShadow){processUnscopedStyle(style);style.parentNode.removeChild(style)}}else{styleTextParts.push(style.textContent);style.parentNode.removeChild(style)}}return styleTextParts.join("").trim()}function splitSelectorList(selector){const parts=[];let part="";for(let i=0;0<=i&&i<selector.length;i++){if("("===selector[i]){const end=findMatchingParen(selector,i);part+=selector.slice(i,end+1);i=end}else if(","===selector[i]){parts.push(part);part=""}else{part+=selector[i]}}if(part){parts.push(part)}return parts}const CSS_BUILD_ATTR="css-build";function getCssBuild(element){if(cssBuild!==void 0){return cssBuild}if(element.__cssBuild===void 0){const attrValue=element.getAttribute(CSS_BUILD_ATTR);if(attrValue){element.__cssBuild=attrValue}else{const buildComment=getBuildComment(element);if(""!==buildComment){removeBuildComment(element)}element.__cssBuild=buildComment}}return element.__cssBuild||""}function elementHasBuiltCss(element){return""!==getCssBuild(element)}function getBuildComment(element){const buildComment="template"===element.localName?element.content.firstChild:element.firstChild;if(buildComment instanceof Comment){const commentParts=buildComment.textContent.trim().split(":");if(commentParts[0]===CSS_BUILD_ATTR){return commentParts[1]}}return""}function isOptimalCssBuild(cssBuild=""){if(""===cssBuild||!nativeCssVariables){return!1}return nativeShadow?"shadow"===cssBuild:"shady"===cssBuild}function removeBuildComment(element){const buildComment="template"===element.localName?element.content.firstChild:element.firstChild;buildComment.parentNode.removeChild(buildComment)}var styleUtil={toCssText:toCssText,rulesForStyle:rulesForStyle,isKeyframesSelector:isKeyframesSelector,forEachRule:forEachRule,applyCss:applyCss,createScopeStyle:createScopeStyle,applyStylePlaceHolder:applyStylePlaceHolder,applyStyle:applyStyle,isTargetedBuild:isTargetedBuild,findMatchingParen:findMatchingParen,processVariableAndFallback:processVariableAndFallback,setElementClassRaw:setElementClassRaw,wrap:wrap,getIsExtends:getIsExtends,gatherStyleText:gatherStyleText,splitSelectorList:splitSelectorList,getCssBuild:getCssBuild,elementHasBuiltCss:elementHasBuiltCss,getBuildComment:getBuildComment,isOptimalCssBuild:isOptimalCssBuild};_exports.$styleUtil=styleUtil;"use strict";function updateNativeProperties(element,properties){for(let p in properties){if(null===p){element.style.removeProperty(p)}else{element.style.setProperty(p,properties[p])}}}function getComputedStyleValue(element,property){const value=window.getComputedStyle(element).getPropertyValue(property);if(!value){return""}else{return value.trim()}}function detectMixin(cssText){const has=MIXIN_MATCH.test(cssText)||VAR_ASSIGN.test(cssText);MIXIN_MATCH.lastIndex=0;VAR_ASSIGN.lastIndex=0;return has}var commonUtils={updateNativeProperties:updateNativeProperties,getComputedStyleValue:getComputedStyleValue,detectMixin:detectMixin};_exports.$commonUtils=commonUtils;"use strict";const APPLY_NAME_CLEAN=/;\s*/m,INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/,IMPORTANT=/\s*!important/,MIXIN_VAR_SEP="_-_";let PropertyEntry,DependantsEntry,MixinMapEntry;class MixinMap{constructor(){this._map={}}set(name,props){name=name.trim();this._map[name]={properties:props,dependants:{}}}get(name){name=name.trim();return this._map[name]||null}}let invalidCallback=null;class ApplyShim{constructor(){this._currentElement=null;this._measureElement=null;this._map=new MixinMap}detectMixin(cssText){return detectMixin(cssText)}gatherStyles(template){const styleText=gatherStyleText(template.content);if(styleText){const style=document.createElement("style");style.textContent=styleText;template.content.insertBefore(style,template.content.firstChild);return style}return null}transformTemplate(template,elementName){if(template._gatheredStyle===void 0){template._gatheredStyle=this.gatherStyles(template)}const style=template._gatheredStyle;return style?this.transformStyle(style,elementName):null}transformStyle(style,elementName=""){let ast=rulesForStyle(style);this.transformRules(ast,elementName);style.textContent=toCssText(ast);return ast}transformCustomStyle(style){let ast=rulesForStyle(style);forEachRule(ast,rule=>{if(":root"===rule.selector){rule.selector="html"}this.transformRule(rule)});style.textContent=toCssText(ast);return ast}transformRules(rules,elementName){this._currentElement=elementName;forEachRule(rules,r=>{this.transformRule(r)});this._currentElement=null}transformRule(rule){rule.cssText=this.transformCssText(rule.parsedCssText,rule);if(":root"===rule.selector){rule.selector=":host > *"}}transformCssText(cssText,rule){cssText=cssText.replace(VAR_ASSIGN,(matchText,propertyName,valueProperty,valueMixin)=>this._produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule));return this._consumeCssProperties(cssText,rule)}_getInitialValueForProperty(property){if(!this._measureElement){this._measureElement=document.createElement("meta");this._measureElement.setAttribute("apply-shim-measure","");this._measureElement.style.all="initial";document.head.appendChild(this._measureElement)}return window.getComputedStyle(this._measureElement).getPropertyValue(property)}_fallbacksFromPreviousRules(startRule){let topRule=startRule;while(topRule.parent){topRule=topRule.parent}const fallbacks={};let seenStartRule=!1;forEachRule(topRule,r=>{seenStartRule=seenStartRule||r===startRule;if(seenStartRule){return}if(r.selector===startRule.selector){Object.assign(fallbacks,this._cssTextToMap(r.parsedCssText))}});return fallbacks}_consumeCssProperties(text,rule){let m=null;while(m=MIXIN_MATCH.exec(text)){let matchText=m[0],mixinName=m[1],idx=m.index,applyPos=idx+matchText.indexOf("@apply"),afterApplyPos=idx+matchText.length,textBeforeApply=text.slice(0,applyPos),textAfterApply=text.slice(afterApplyPos),defaults=rule?this._fallbacksFromPreviousRules(rule):{};Object.assign(defaults,this._cssTextToMap(textBeforeApply));let replacement=this._atApplyToCssProperties(mixinName,defaults);text=`${textBeforeApply}${replacement}${textAfterApply}`;MIXIN_MATCH.lastIndex=idx+replacement.length}return text}_atApplyToCssProperties(mixinName,fallbacks){mixinName=mixinName.replace(APPLY_NAME_CLEAN,"");let vars=[],mixinEntry=this._map.get(mixinName);if(!mixinEntry){this._map.set(mixinName,{});mixinEntry=this._map.get(mixinName)}if(mixinEntry){if(this._currentElement){mixinEntry.dependants[this._currentElement]=!0}let p,parts,f;const properties=mixinEntry.properties;for(p in properties){f=fallbacks&&fallbacks[p];parts=[p,": var(",mixinName,MIXIN_VAR_SEP,p];if(f){parts.push(",",f.replace(IMPORTANT,""))}parts.push(")");if(IMPORTANT.test(properties[p])){parts.push(" !important")}vars.push(parts.join(""))}}return vars.join("; ")}_replaceInitialOrInherit(property,value){let match=INITIAL_INHERIT.exec(value);if(match){if(match[1]){value=this._getInitialValueForProperty(property)}else{value="apply-shim-inherit"}}return value}_cssTextToMap(text,replaceInitialOrInherit=!1){let props=text.split(";"),property,value,out={};for(let i=0,p,sp;i<props.length;i++){p=props[i];if(p){sp=p.split(":");if(1<sp.length){property=sp[0].trim();value=sp.slice(1).join(":");if(replaceInitialOrInherit){value=this._replaceInitialOrInherit(property,value)}out[property]=value}}}return out}_invalidateMixinEntry(mixinEntry){if(!invalidCallback){return}for(let elementName in mixinEntry.dependants){if(elementName!==this._currentElement){invalidCallback(elementName)}}}_produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule){if(valueProperty){processVariableAndFallback(valueProperty,(prefix,value)=>{if(value&&this._map.get(value)){valueMixin=`@apply ${value};`}})}if(!valueMixin){return matchText}let mixinAsProperties=this._consumeCssProperties(""+valueMixin,rule),prefix=matchText.slice(0,matchText.indexOf("--")),mixinValues=this._cssTextToMap(mixinAsProperties,!0),combinedProps=mixinValues,mixinEntry=this._map.get(propertyName),oldProps=mixinEntry&&mixinEntry.properties;if(oldProps){combinedProps=Object.assign(Object.create(oldProps),mixinValues)}else{this._map.set(propertyName,combinedProps)}let out=[],p,v,needToInvalidate=!1;for(p in combinedProps){v=mixinValues[p];if(v===void 0){v="initial"}if(oldProps&&!(p in oldProps)){needToInvalidate=!0}out.push(`${propertyName}${MIXIN_VAR_SEP}${p}: ${v}`)}if(needToInvalidate){this._invalidateMixinEntry(mixinEntry)}if(mixinEntry){mixinEntry.properties=combinedProps}if(valueProperty){prefix=`${matchText};${prefix}`}return`${prefix}${out.join("; ")};`}}_exports.$applyShimDefault=ApplyShim;ApplyShim.prototype.detectMixin=ApplyShim.prototype.detectMixin;ApplyShim.prototype.transformStyle=ApplyShim.prototype.transformStyle;ApplyShim.prototype.transformCustomStyle=ApplyShim.prototype.transformCustomStyle;ApplyShim.prototype.transformRules=ApplyShim.prototype.transformRules;ApplyShim.prototype.transformRule=ApplyShim.prototype.transformRule;ApplyShim.prototype.transformTemplate=ApplyShim.prototype.transformTemplate;ApplyShim.prototype._separator=MIXIN_VAR_SEP;Object.defineProperty(ApplyShim.prototype,"invalidCallback",{get(){return invalidCallback},set(cb){invalidCallback=cb}});var applyShim={default:ApplyShim};_exports.$applyShim$1=applyShim;"use strict";const templateMap={};_exports.$templateMapDefault=templateMap;var templateMap$1={default:templateMap};_exports.$templateMap=templateMap$1;"use strict";const CURRENT_VERSION="_applyShimCurrentVersion",NEXT_VERSION="_applyShimNextVersion",VALIDATING_VERSION="_applyShimValidatingVersion",promise=Promise.resolve();function invalidate(elementName){let template=templateMap[elementName];if(template){invalidateTemplate(template)}}function invalidateTemplate(template){template[CURRENT_VERSION]=template[CURRENT_VERSION]||0;template[VALIDATING_VERSION]=template[VALIDATING_VERSION]||0;template[NEXT_VERSION]=(template[NEXT_VERSION]||0)+1}function isValid(elementName){let template=templateMap[elementName];if(template){return templateIsValid(template)}return!0}function templateIsValid(template){return template[CURRENT_VERSION]===template[NEXT_VERSION]}function isValidating(elementName){let template=templateMap[elementName];if(template){return templateIsValidating(template)}return!1}function templateIsValidating(template){return!templateIsValid(template)&&template[VALIDATING_VERSION]===template[NEXT_VERSION]}function startValidating(elementName){let template=templateMap[elementName];startValidatingTemplate(template)}function startValidatingTemplate(template){template[VALIDATING_VERSION]=template[NEXT_VERSION];if(!template._validating){template._validating=!0;promise.then(function(){template[CURRENT_VERSION]=template[NEXT_VERSION];template._validating=!1})}}function elementsAreInvalid(){for(let elementName in templateMap){let template=templateMap[elementName];if(!templateIsValid(template)){return!0}}return!1}var applyShimUtils={invalidate:invalidate,invalidateTemplate:invalidateTemplate,isValid:isValid,templateIsValid:templateIsValid,isValidating:isValidating,templateIsValidating:templateIsValidating,startValidating:startValidating,startValidatingTemplate:startValidatingTemplate,elementsAreInvalid:elementsAreInvalid};_exports.$applyShimUtils=applyShimUtils;"use strict";let readyPromise=null,whenReady=window.HTMLImports&&window.HTMLImports.whenReady||null,resolveFn;function documentWait(callback){requestAnimationFrame(function(){if(whenReady){whenReady(callback)}else{if(!readyPromise){readyPromise=new Promise(resolve=>{resolveFn=resolve});if("complete"===document.readyState){resolveFn()}else{document.addEventListener("readystatechange",()=>{if("complete"===document.readyState){resolveFn()}})}}readyPromise.then(function(){callback&&callback()})}})}var documentWait$1={default:documentWait};_exports.$documentWait=documentWait$1;"use strict";let CustomStyleProvider;_exports.CustomStyleProvider=CustomStyleProvider;const SEEN_MARKER="__seenByShadyCSS",CACHED_STYLE="__shadyCSSCachedStyle";let transformFn=null,validateFn=null;class CustomStyleInterface{constructor(){this.customStyles=[];this.enqueued=!1;documentWait(()=>{if(window.ShadyCSS.flushCustomStyles){window.ShadyCSS.flushCustomStyles()}})}enqueueDocumentValidation(){if(this.enqueued||!validateFn){return}this.enqueued=!0;documentWait(validateFn)}addCustomStyle(style){if(!style[SEEN_MARKER]){style[SEEN_MARKER]=!0;this.customStyles.push(style);this.enqueueDocumentValidation()}}getStyleForCustomStyle(customStyle){if(customStyle[CACHED_STYLE]){return customStyle[CACHED_STYLE]}let style;if(customStyle.getStyle){style=customStyle.getStyle()}else{style=customStyle}return style}processStyles(){const cs=this.customStyles;for(let i=0;i<cs.length;i++){const customStyle=cs[i];if(customStyle[CACHED_STYLE]){continue}const style=this.getStyleForCustomStyle(customStyle);if(style){const styleToTransform=style.__appliedElement||style;if(transformFn){transformFn(styleToTransform)}customStyle[CACHED_STYLE]=styleToTransform}}return cs}}_exports.$customStyleInterfaceDefault=CustomStyleInterface;CustomStyleInterface.prototype.addCustomStyle=CustomStyleInterface.prototype.addCustomStyle;CustomStyleInterface.prototype.getStyleForCustomStyle=CustomStyleInterface.prototype.getStyleForCustomStyle;CustomStyleInterface.prototype.processStyles=CustomStyleInterface.prototype.processStyles;Object.defineProperties(CustomStyleInterface.prototype,{transformCallback:{get(){return transformFn},set(fn){transformFn=fn}},validateCallback:{get(){return validateFn},set(fn){let needsEnqueue=!1;if(!validateFn){needsEnqueue=!0}validateFn=fn;if(needsEnqueue){this.enqueueDocumentValidation()}}}});const CustomStyleInterfaceInterface={};_exports.CustomStyleInterfaceInterface=CustomStyleInterfaceInterface;var customStyleInterface={CustomStyleProvider:CustomStyleProvider,default:CustomStyleInterface,CustomStyleInterfaceInterface:CustomStyleInterfaceInterface};_exports.$customStyleInterface$1=customStyleInterface;"use strict";const applyShim$1=new ApplyShim;class ApplyShimInterface{constructor(){this.customStyleInterface=null;applyShim$1.invalidCallback=invalidate}ensure(){if(this.customStyleInterface){return}if(window.ShadyCSS.CustomStyleInterface){this.customStyleInterface=window.ShadyCSS.CustomStyleInterface;this.customStyleInterface.transformCallback=style=>{applyShim$1.transformCustomStyle(style)};this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{if(this.customStyleInterface.enqueued){this.flushCustomStyles()}})}}}prepareTemplate(template,elementName){this.ensure();if(elementHasBuiltCss(template)){return}templateMap[elementName]=template;let ast=applyShim$1.transformTemplate(template,elementName);template._styleAst=ast}flushCustomStyles(){this.ensure();if(!this.customStyleInterface){return}let styles=this.customStyleInterface.processStyles();if(!this.customStyleInterface.enqueued){return}for(let i=0;i<styles.length;i++){let cs=styles[i],style=this.customStyleInterface.getStyleForCustomStyle(cs);if(style){applyShim$1.transformCustomStyle(style)}}this.customStyleInterface.enqueued=!1}styleSubtree(element,properties){this.ensure();if(properties){updateNativeProperties(element,properties)}if(element.shadowRoot){this.styleElement(element);let shadowChildren=element.shadowRoot.children||element.shadowRoot.childNodes;for(let i=0;i<shadowChildren.length;i++){this.styleSubtree(shadowChildren[i])}}else{let children=element.children||element.childNodes;for(let i=0;i<children.length;i++){this.styleSubtree(children[i])}}}styleElement(element){this.ensure();let{is}=getIsExtends(element),template=templateMap[is];if(template&&elementHasBuiltCss(template)){return}if(template&&!templateIsValid(template)){if(!templateIsValidating(template)){this.prepareTemplate(template,is);startValidatingTemplate(template)}let root=element.shadowRoot;if(root){let style=root.querySelector("style");if(style){style.__cssRules=template._styleAst;style.textContent=toCssText(template._styleAst)}}}}styleDocument(properties){this.ensure();this.styleSubtree(document.body,properties)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const applyShimInterface=new ApplyShimInterface;let CustomStyleInterface=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;_exports.$customStyleInterfaceDefault=CustomStyleInterface;window.ShadyCSS={prepareTemplate(template,elementName,elementExtends){applyShimInterface.flushCustomStyles();applyShimInterface.prepareTemplate(template,elementName)},prepareTemplateStyles(template,elementName,elementExtends){window.ShadyCSS.prepareTemplate(template,elementName,elementExtends)},prepareTemplateDom(template,elementName){},styleSubtree(element,properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleSubtree(element,properties)},styleElement(element){applyShimInterface.flushCustomStyles();applyShimInterface.styleElement(element)},styleDocument(properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleDocument(properties)},getComputedStyleValue(element,property){return getComputedStyleValue(element,property)},flushCustomStyles(){applyShimInterface.flushCustomStyles()},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime};if(CustomStyleInterface){window.ShadyCSS.CustomStyleInterface=CustomStyleInterface}}window.ShadyCSS.ApplyShim=applyShim$1;window.JSCompiler_renameProperty=function(prop,obj){return prop};let CSS_URL_RX=/(url\()([^)]*)(\))/g,ABS_URL=/(^\/)|(^#)|(^[\w-\d]*:)/,workingURL,resolveDoc;function resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url}if(workingURL===void 0){workingURL=!1;try{const u=new URL("b","http://a");u.pathname="c%20d";workingURL="http://a/c%20d"===u.href}catch(e){}}if(!baseURI){baseURI=document.baseURI||window.location.href}if(workingURL){return new URL(url,baseURI).href}if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument("temp");resolveDoc.base=resolveDoc.createElement("base");resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement("a");resolveDoc.body.appendChild(resolveDoc.anchor)}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url}function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+"'"+resolveUrl(url.replace(/["']/g,""),baseURI)+"'"+post})}function pathFromUrl(url){return url.substring(0,url.lastIndexOf("/")+1)}var resolveUrl$1={resolveUrl:resolveUrl,resolveCss:resolveCss,pathFromUrl:pathFromUrl};_exports.$resolveUrl=resolveUrl$1;const useShadow=!window.ShadyDOM;_exports.useShadow=useShadow;const useNativeCSSProperties=!!(!window.ShadyCSS||window.ShadyCSS.nativeCss);_exports.useNativeCSSProperties=useNativeCSSProperties;const useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;_exports.useNativeCustomElements=useNativeCustomElements;let rootPath=pathFromUrl(document.baseURI||window.location.href);_exports.rootPath=rootPath;const setRootPath=function(path){_exports.rootPath=rootPath=path};_exports.setRootPath=setRootPath;let sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;_exports.sanitizeDOMValue=sanitizeDOMValue;const setSanitizeDOMValue=function(newSanitizeDOMValue){_exports.sanitizeDOMValue=sanitizeDOMValue=newSanitizeDOMValue};_exports.setSanitizeDOMValue=setSanitizeDOMValue;let passiveTouchGestures=!1;_exports.passiveTouchGestures=passiveTouchGestures;const setPassiveTouchGestures=function(usePassive){_exports.passiveTouchGestures=passiveTouchGestures=usePassive};_exports.setPassiveTouchGestures=setPassiveTouchGestures;let strictTemplatePolicy=!1;_exports.strictTemplatePolicy=strictTemplatePolicy;const setStrictTemplatePolicy=function(useStrictPolicy){_exports.strictTemplatePolicy=strictTemplatePolicy=useStrictPolicy};_exports.setStrictTemplatePolicy=setStrictTemplatePolicy;let allowTemplateFromDomModule=!1;_exports.allowTemplateFromDomModule=allowTemplateFromDomModule;const setAllowTemplateFromDomModule=function(allowDomModule){_exports.allowTemplateFromDomModule=allowTemplateFromDomModule=allowDomModule};_exports.setAllowTemplateFromDomModule=setAllowTemplateFromDomModule;let legacyOptimizations=!1;_exports.legacyOptimizations=legacyOptimizations;const setLegacyOptimizations=function(useLegacyOptimizations){_exports.legacyOptimizations=legacyOptimizations=useLegacyOptimizations};_exports.setLegacyOptimizations=setLegacyOptimizations;let syncInitialRender=!1;_exports.syncInitialRender=syncInitialRender;const setSyncInitialRender=function(useSyncInitialRender){_exports.syncInitialRender=syncInitialRender=useSyncInitialRender};_exports.setSyncInitialRender=setSyncInitialRender;var settings={useShadow:useShadow,useNativeCSSProperties:useNativeCSSProperties,useNativeCustomElements:useNativeCustomElements,get rootPath(){return rootPath},setRootPath:setRootPath,get sanitizeDOMValue(){return sanitizeDOMValue},setSanitizeDOMValue:setSanitizeDOMValue,get passiveTouchGestures(){return passiveTouchGestures},setPassiveTouchGestures:setPassiveTouchGestures,get strictTemplatePolicy(){return strictTemplatePolicy},setStrictTemplatePolicy:setStrictTemplatePolicy,get allowTemplateFromDomModule(){return allowTemplateFromDomModule},setAllowTemplateFromDomModule:setAllowTemplateFromDomModule,get legacyOptimizations(){return legacyOptimizations},setLegacyOptimizations:setLegacyOptimizations,get syncInitialRender(){return syncInitialRender},setSyncInitialRender:setSyncInitialRender};_exports.$settings=settings;let dedupeId=0;function MixinFunction(){}MixinFunction.prototype.__mixinApplications;MixinFunction.prototype.__mixinSet;const dedupingMixin=function(mixin){let mixinApplications=mixin.__mixinApplications;if(!mixinApplications){mixinApplications=new WeakMap;mixin.__mixinApplications=mixinApplications}let mixinDedupeId=dedupeId++;function dedupingMixin(base){let baseSet=base.__mixinSet;if(baseSet&&baseSet[mixinDedupeId]){return base}let map=mixinApplications,extended=map.get(base);if(!extended){extended=mixin(base);map.set(base,extended)}let mixinSet=Object.create(extended.__mixinSet||baseSet||null);mixinSet[mixinDedupeId]=!0;extended.__mixinSet=mixinSet;return extended}return dedupingMixin};_exports.dedupingMixin=dedupingMixin;var mixin={dedupingMixin:dedupingMixin};_exports.$mixin=mixin;let modules={},lcModules={};function setModule(id,module){modules[id]=lcModules[id.toLowerCase()]=module}function findModule(id){return modules[id]||lcModules[id.toLowerCase()]}function styleOutsideTemplateCheck(inst){if(inst.querySelector("style")){console.warn("dom-module %s has style outside template",inst.id)}}class DomModule extends HTMLElement{static get observedAttributes(){return["id"]}static import(id,selector){if(id){let m=findModule(id);if(m&&selector){return m.querySelector(selector)}return m}return null}attributeChangedCallback(name,old,value,namespace){if(old!==value){this.register()}}get assetpath(){if(!this.__assetpath){const owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,url=resolveUrl(this.getAttribute("assetpath")||"",owner.baseURI);this.__assetpath=pathFromUrl(url)}return this.__assetpath}register(id){id=id||this.id;if(id){if(strictTemplatePolicy&&findModule(id)!==void 0){setModule(id,null);throw new Error(`strictTemplatePolicy: dom-module ${id} re-registered`)}this.id=id;setModule(id,this);styleOutsideTemplateCheck(this)}}}_exports.DomModule=DomModule;DomModule.prototype.modules=modules;customElements.define("dom-module",DomModule);var domModule={DomModule:DomModule};_exports.$domModule=domModule;const MODULE_STYLE_LINK_SELECTOR="link[rel=import][type~=css]",INCLUDE_ATTR="include",SHADY_UNSCOPED_ATTR="shady-unscoped";function importModule(moduleId){return DomModule.import(moduleId)}function styleForImport(importDoc){let container=importDoc.body?importDoc.body:importDoc;const importCss=resolveCss(container.textContent,importDoc.baseURI),style=document.createElement("style");style.textContent=importCss;return style}let templateWithAssetPath;function stylesFromModules(moduleIds){const modules=moduleIds.trim().split(/\s+/),styles=[];for(let i=0;i<modules.length;i++){styles.push(...stylesFromModule(modules[i]))}return styles}function stylesFromModule(moduleId){const m=importModule(moduleId);if(!m){console.warn("Could not find style data in module named",moduleId);return[]}if(m._styles===void 0){const styles=[..._stylesFromModuleImports(m)],template=m.querySelector("template");if(template){styles.push(...stylesFromTemplate(template,m.assetpath))}m._styles=styles}return m._styles}function stylesFromTemplate(template,baseURI){if(!template._styles){const styles=[],e$=template.content.querySelectorAll("style");for(let i=0;i<e$.length;i++){let e=e$[i],include=e.getAttribute(INCLUDE_ATTR);if(include){styles.push(...stylesFromModules(include).filter(function(item,index,self){return self.indexOf(item)===index}))}if(baseURI){e.textContent=resolveCss(e.textContent,baseURI)}styles.push(e)}template._styles=styles}return template._styles}function stylesFromModuleImports(moduleId){let m=importModule(moduleId);return m?_stylesFromModuleImports(m):[]}function _stylesFromModuleImports(module){const styles=[],p$=module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);for(let i=0,p;i<p$.length;i++){p=p$[i];if(p.import){const importDoc=p.import,unscoped=p.hasAttribute(SHADY_UNSCOPED_ATTR);if(unscoped&&!importDoc._unscopedStyle){const style=styleForImport(importDoc);style.setAttribute(SHADY_UNSCOPED_ATTR,"");importDoc._unscopedStyle=style}else if(!importDoc._style){importDoc._style=styleForImport(importDoc)}styles.push(unscoped?importDoc._unscopedStyle:importDoc._style)}}return styles}function cssFromModules(moduleIds){let modules=moduleIds.trim().split(/\s+/),cssText="";for(let i=0;i<modules.length;i++){cssText+=cssFromModule(modules[i])}return cssText}function cssFromModule(moduleId){let m=importModule(moduleId);if(m&&m._cssText===void 0){let cssText=_cssFromModuleImports(m),t=m.querySelector("template");if(t){cssText+=cssFromTemplate(t,m.assetpath)}m._cssText=cssText||null}if(!m){console.warn("Could not find style data in module named",moduleId)}return m&&m._cssText||""}function cssFromTemplate(template,baseURI){let cssText="";const e$=stylesFromTemplate(template,baseURI);for(let i=0,e;i<e$.length;i++){e=e$[i];if(e.parentNode){e.parentNode.removeChild(e)}cssText+=e.textContent}return cssText}function cssFromModuleImports(moduleId){let m=importModule(moduleId);return m?_cssFromModuleImports(m):""}function _cssFromModuleImports(module){let cssText="",styles=_stylesFromModuleImports(module);for(let i=0;i<styles.length;i++){cssText+=styles[i].textContent}return cssText}var styleGather={stylesFromModules:stylesFromModules,stylesFromModule:stylesFromModule,stylesFromTemplate:stylesFromTemplate,stylesFromModuleImports:stylesFromModuleImports,cssFromModules:cssFromModules,cssFromModule:cssFromModule,cssFromTemplate:cssFromTemplate,cssFromModuleImports:cssFromModuleImports};_exports.$styleGather=styleGather;const wrap$1=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:n=>n;_exports.wrap=wrap$1;var wrap$2={wrap:wrap$1};_exports.$wrap=wrap$2;function isPath(path){return 0<=path.indexOf(".")}function root(path){let dotIndex=path.indexOf(".");if(-1===dotIndex){return path}return path.slice(0,dotIndex)}function isAncestor(base,path){return 0===base.indexOf(path+".")}function isDescendant(base,path){return 0===path.indexOf(base+".")}function translate(base,newBase,path){return newBase+path.slice(base.length)}function matches(base,path){return base===path||isAncestor(base,path)||isDescendant(base,path)}function normalize(path){if(Array.isArray(path)){let parts=[];for(let i=0,args;i<path.length;i++){args=path[i].toString().split(".");for(let j=0;j<args.length;j++){parts.push(args[j])}}return parts.join(".")}else{return path}}function split(path){if(Array.isArray(path)){return normalize(path).split(".")}return path.toString().split(".")}function get(root,path,info){let prop=root,parts=split(path);for(let i=0;i<parts.length;i++){if(!prop){return}let part=parts[i];prop=prop[part]}if(info){info.path=parts.join(".")}return prop}function set(root,path,value){let prop=root,parts=split(path),last=parts[parts.length-1];if(1<parts.length){for(let i=0,part;i<parts.length-1;i++){part=parts[i];prop=prop[part];if(!prop){return}}prop[last]=value}else{prop[path]=value}return parts.join(".")}const isDeep=isPath;_exports.isDeep=isDeep;var path={isPath:isPath,root:root,isAncestor:isAncestor,isDescendant:isDescendant,translate:translate,matches:matches,normalize:normalize,split:split,get:get,set:set,isDeep:isDeep};_exports.$path=path;const caseMap={},DASH_TO_CAMEL=/-[a-z]/g,CAMEL_TO_DASH=/([A-Z])/g;function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=0>dash.indexOf("-")?dash:dash.replace(DASH_TO_CAMEL,m=>m[1].toUpperCase()))}function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,"-$1").toLowerCase())}var caseMap$1={dashToCamelCase:dashToCamelCase,camelToDashCase:camelToDashCase};_exports.$caseMap=caseMap$1;let microtaskCurrHandle=0,microtaskLastHandle=0,microtaskCallbacks=[],microtaskNodeContent=0,microtaskNode=document.createTextNode("");new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:!0});function microtaskFlush(){const len=microtaskCallbacks.length;for(let i=0,cb;i<len;i++){cb=microtaskCallbacks[i];if(cb){try{cb()}catch(e){setTimeout(()=>{throw e})}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len}const timeOut={after(delay){return{run(fn){return window.setTimeout(fn,delay)},cancel(handle){window.clearTimeout(handle)}}},run(fn,delay){return window.setTimeout(fn,delay)},cancel(handle){window.clearTimeout(handle)}};_exports.timeOut=timeOut;const animationFrame={run(fn){return window.requestAnimationFrame(fn)},cancel(handle){window.cancelAnimationFrame(handle)}};_exports.animationFrame=animationFrame;const idlePeriod={run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16)},cancel(handle){window.cancelIdleCallback?window.cancelIdleCallback(handle):window.clearTimeout(handle)}};_exports.idlePeriod=idlePeriod;const microTask={run(callback){microtaskNode.textContent=microtaskNodeContent++;microtaskCallbacks.push(callback);return microtaskCurrHandle++},cancel(handle){const idx=handle-microtaskLastHandle;if(0<=idx){if(!microtaskCallbacks[idx]){throw new Error("invalid async handle: "+handle)}microtaskCallbacks[idx]=null}}};_exports.microTask=microTask;var async={timeOut:timeOut,animationFrame:animationFrame,idlePeriod:idlePeriod,microTask:microTask};_exports.$async=async;const microtask=microTask,PropertiesChanged=dedupingMixin(superClass=>{class PropertiesChanged extends superClass{static createProperties(props){const proto=this.prototype;for(let prop in props){if(!(prop in proto)){proto._createPropertyAccessor(prop)}}}static attributeNameForProperty(property){return property.toLowerCase()}static typeForProperty(name){}_createPropertyAccessor(property,readOnly){this._addPropertyToAttributeMap(property);if(!this.hasOwnProperty("__dataHasAccessor")){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=!0;this._definePropertyAccessor(property,readOnly)}}_addPropertyToAttributeMap(property){if(!this.hasOwnProperty("__dataAttributes")){this.__dataAttributes=Object.assign({},this.__dataAttributes)}if(!this.__dataAttributes[property]){const attr=this.constructor.attributeNameForProperty(property);this.__dataAttributes[attr]=property}}_definePropertyAccessor(property,readOnly){Object.defineProperty(this,property,{get(){return this._getProperty(property)},set:readOnly?function(){}:function(value){this._setProperty(property,value)}})}constructor(){super();this.__dataEnabled=!1;this.__dataReady=!1;this.__dataInvalid=!1;this.__data={};this.__dataPending=null;this.__dataOld=null;this.__dataInstanceProps=null;this.__serializing=!1;this._initializeProperties()}ready(){this.__dataReady=!0;this._flushProperties()}_initializeProperties(){for(let p in this.__dataHasAccessor){if(this.hasOwnProperty(p)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[p]=this[p];delete this[p]}}}_initializeInstanceProperties(props){Object.assign(this,props)}_setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties()}}_getProperty(property){return this.__data[property]}_setPendingProperty(property,value,ext){let old=this.__data[property],changed=this._shouldPropertyChange(property,value,old);if(changed){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}if(this.__dataOld&&!(property in this.__dataOld)){this.__dataOld[property]=old}this.__data[property]=value;this.__dataPending[property]=value}return changed}_invalidateProperties(){if(!this.__dataInvalid&&this.__dataReady){this.__dataInvalid=!0;microtask.run(()=>{if(this.__dataInvalid){this.__dataInvalid=!1;this._flushProperties()}})}}_enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=!0;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null}this.ready()}}_flushProperties(){const props=this.__data,changedProps=this.__dataPending,old=this.__dataOld;if(this._shouldPropertiesChange(props,changedProps,old)){this.__dataPending=null;this.__dataOld=null;this._propertiesChanged(props,changedProps,old)}}_shouldPropertiesChange(currentProps,changedProps,oldProps){return!!changedProps}_propertiesChanged(currentProps,changedProps,oldProps){}_shouldPropertyChange(property,value,old){return old!==value&&(old===old||value===value)}attributeChangedCallback(name,old,value,namespace){if(old!==value){this._attributeToProperty(name,value)}if(super.attributeChangedCallback){super.attributeChangedCallback(name,old,value,namespace)}}_attributeToProperty(attribute,value,type){if(!this.__serializing){const map=this.__dataAttributes,property=map&&map[attribute]||attribute;this[property]=this._deserializeValue(value,type||this.constructor.typeForProperty(property))}}_propertyToAttribute(property,attribute,value){this.__serializing=!0;value=3>arguments.length?this[property]:value;this._valueToNodeAttribute(this,value,attribute||this.constructor.attributeNameForProperty(property));this.__serializing=!1}_valueToNodeAttribute(node,value,attribute){const str=this._serializeValue(value);if(str===void 0){node.removeAttribute(attribute)}else{if("class"===attribute||"name"===attribute||"slot"===attribute){node=wrap$1(node)}node.setAttribute(attribute,str)}}_serializeValue(value){switch(typeof value){case"boolean":return value?"":void 0;default:return null!=value?value.toString():void 0;}}_deserializeValue(value,type){switch(type){case Boolean:return null!==value;case Number:return+value;default:return value;}}}return PropertiesChanged});_exports.PropertiesChanged=PropertiesChanged;var propertiesChanged={PropertiesChanged:PropertiesChanged};_exports.$propertiesChanged=propertiesChanged;const nativeProperties={};let proto=HTMLElement.prototype;while(proto){let props=Object.getOwnPropertyNames(proto);for(let i=0;i<props.length;i++){nativeProperties[props[i]]=!0}proto=Object.getPrototypeOf(proto)}function saveAccessorValue(model,property){if(!nativeProperties[property]){let value=model[property];if(value!==void 0){if(model.__data){model._setPendingProperty(property,value)}else{if(!model.__dataProto){model.__dataProto={}}else if(!model.hasOwnProperty(JSCompiler_renameProperty("__dataProto",model))){model.__dataProto=Object.create(model.__dataProto)}model.__dataProto[property]=value}}}}const PropertyAccessors=dedupingMixin(superClass=>{const base=PropertiesChanged(superClass);class PropertyAccessors extends base{static createPropertiesForAttributes(){let a$=this.observedAttributes;for(let i=0;i<a$.length;i++){this.prototype._createPropertyAccessor(dashToCamelCase(a$[i]))}}static attributeNameForProperty(property){return camelToDashCase(property)}_initializeProperties(){if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null}super._initializeProperties()}_initializeProtoProperties(props){for(let p in props){this._setProperty(p,props[p])}}_ensureAttribute(attribute,value){const el=this;if(!el.hasAttribute(attribute)){this._valueToNodeAttribute(el,value,attribute)}}_serializeValue(value){switch(typeof value){case"object":if(value instanceof Date){return value.toString()}else if(value){try{return JSON.stringify(value)}catch(x){return""}}default:return super._serializeValue(value);}}_deserializeValue(value,type){let outValue;switch(type){case Object:try{outValue=JSON.parse(value)}catch(x){outValue=value}break;case Array:try{outValue=JSON.parse(value)}catch(x){outValue=null;console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${value}`)}break;case Date:outValue=isNaN(value)?value+"":+value;outValue=new Date(outValue);break;default:outValue=super._deserializeValue(value,type);break;}return outValue}_definePropertyAccessor(property,readOnly){saveAccessorValue(this,property);super._definePropertyAccessor(property,readOnly)}_hasAccessor(property){return this.__dataHasAccessor&&this.__dataHasAccessor[property]}_isPropertyPending(prop){return!!(this.__dataPending&&prop in this.__dataPending)}}return PropertyAccessors});_exports.PropertyAccessors=PropertyAccessors;var propertyAccessors={PropertyAccessors:PropertyAccessors};_exports.$propertyAccessors=propertyAccessors;const walker=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),templateExtensions={"dom-if":!0,"dom-repeat":!0};function wrapTemplateExtension(node){let is=node.getAttribute("is");if(is&&templateExtensions[is]){let t=node;t.removeAttribute("is");node=t.ownerDocument.createElement(is);t.parentNode.replaceChild(node,t);node.appendChild(t);while(t.attributes.length){node.setAttribute(t.attributes[0].name,t.attributes[0].value);t.removeAttribute(t.attributes[0].name)}}return node}function findTemplateNode(root,nodeInfo){let parent=nodeInfo.parentInfo&&findTemplateNode(root,nodeInfo.parentInfo);if(parent){walker.currentNode=parent;for(let n=walker.firstChild(),i=0;n;n=walker.nextSibling()){if(nodeInfo.parentIndex===i++){return n}}}else{return root}}function applyIdToMap(inst,map,node,nodeInfo){if(nodeInfo.id){map[nodeInfo.id]=node}}function applyEventListener(inst,node,nodeInfo){if(nodeInfo.events&&nodeInfo.events.length){for(let j=0,e$=nodeInfo.events,e;j<e$.length&&(e=e$[j]);j++){inst._addMethodEventListenerToNode(node,e.name,e.value,inst)}}}function applyTemplateContent(inst,node,nodeInfo){if(nodeInfo.templateInfo){node._templateInfo=nodeInfo.templateInfo}}function createNodeEventHandler(context,eventName,methodName){context=context._methodHost||context;let handler=function(e){if(context[methodName]){context[methodName](e,e.detail)}else{console.warn("listener method `"+methodName+"` not defined")}};return handler}const TemplateStamp=dedupingMixin(superClass=>{class TemplateStamp extends superClass{static _parseTemplate(template,outerTemplateInfo){if(!template._templateInfo){let templateInfo=template._templateInfo={};templateInfo.nodeInfoList=[];templateInfo.stripWhiteSpace=outerTemplateInfo&&outerTemplateInfo.stripWhiteSpace||template.hasAttribute("strip-whitespace");this._parseTemplateContent(template,templateInfo,{parent:null})}return template._templateInfo}static _parseTemplateContent(template,templateInfo,nodeInfo){return this._parseTemplateNode(template.content,templateInfo,nodeInfo)}static _parseTemplateNode(node,templateInfo,nodeInfo){let noted,element=node;if("template"==element.localName&&!element.hasAttribute("preserve-content")){noted=this._parseTemplateNestedTemplate(element,templateInfo,nodeInfo)||noted}else if("slot"===element.localName){templateInfo.hasInsertionPoint=!0}walker.currentNode=element;if(walker.firstChild()){noted=this._parseTemplateChildNodes(element,templateInfo,nodeInfo)||noted}if(element.hasAttributes&&element.hasAttributes()){noted=this._parseTemplateNodeAttributes(element,templateInfo,nodeInfo)||noted}return noted}static _parseTemplateChildNodes(root,templateInfo,nodeInfo){if("script"===root.localName||"style"===root.localName){return}walker.currentNode=root;for(let node=walker.firstChild(),parentIndex=0,next;node;node=next){if("template"==node.localName){node=wrapTemplateExtension(node)}walker.currentNode=node;next=walker.nextSibling();if(node.nodeType===Node.TEXT_NODE){let n=next;while(n&&n.nodeType===Node.TEXT_NODE){node.textContent+=n.textContent;next=walker.nextSibling();root.removeChild(n);n=next}if(templateInfo.stripWhiteSpace&&!node.textContent.trim()){root.removeChild(node);continue}}let childInfo={parentIndex,parentInfo:nodeInfo};if(this._parseTemplateNode(node,templateInfo,childInfo)){childInfo.infoIndex=templateInfo.nodeInfoList.push(childInfo)-1}walker.currentNode=node;if(walker.parentNode()){parentIndex++}}}static _parseTemplateNestedTemplate(node,outerTemplateInfo,nodeInfo){let templateInfo=this._parseTemplate(node,outerTemplateInfo),content=templateInfo.content=node.content.ownerDocument.createDocumentFragment();content.appendChild(node.content);nodeInfo.templateInfo=templateInfo;return!0}static _parseTemplateNodeAttributes(node,templateInfo,nodeInfo){let noted=!1,attrs=Array.from(node.attributes);for(let i=attrs.length-1,a;a=attrs[i];i--){noted=this._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,a.name,a.value)||noted}return noted}static _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){if("on-"===name.slice(0,3)){node.removeAttribute(name);nodeInfo.events=nodeInfo.events||[];nodeInfo.events.push({name:name.slice(3),value});return!0}else if("id"===name){nodeInfo.id=value;return!0}return!1}static _contentForTemplate(template){let templateInfo=template._templateInfo;return templateInfo&&templateInfo.content||template.content}_stampTemplate(template){if(template&&!template.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate){HTMLTemplateElement.decorate(template)}let templateInfo=this.constructor._parseTemplate(template),nodeInfo=templateInfo.nodeInfoList,content=templateInfo.content||template.content,dom=document.importNode(content,!0);dom.__noInsertionPoint=!templateInfo.hasInsertionPoint;let nodes=dom.nodeList=Array(nodeInfo.length);dom.$={};for(let i=0,l=nodeInfo.length,info,node;i<l&&(info=nodeInfo[i]);i++){node=nodes[i]=findTemplateNode(dom,info);applyIdToMap(this,dom.$,node,info);applyTemplateContent(this,node,info);applyEventListener(this,node,info)}dom=dom;return dom}_addMethodEventListenerToNode(node,eventName,methodName,context){context=context||node;let handler=createNodeEventHandler(context,eventName,methodName);this._addEventListenerToNode(node,eventName,handler);return handler}_addEventListenerToNode(node,eventName,handler){node.addEventListener(eventName,handler)}_removeEventListenerFromNode(node,eventName,handler){node.removeEventListener(eventName,handler)}}return TemplateStamp});_exports.TemplateStamp=TemplateStamp;var templateStamp={TemplateStamp:TemplateStamp};_exports.$templateStamp=templateStamp;let dedupeId$1=0;const TYPES={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},capitalAttributeRegex=/[A-Z]/;let DataTrigger,DataEffect;function ensureOwnEffectMap(model,type){let effects=model[type];if(!effects){effects=model[type]={}}else if(!model.hasOwnProperty(type)){effects=model[type]=Object.create(model[type]);for(let p in effects){let protoFx=effects[p],instFx=effects[p]=Array(protoFx.length);for(let i=0;i<protoFx.length;i++){instFx[i]=protoFx[i]}}}return effects}function runEffects(inst,effects,props,oldProps,hasPaths,extraArgs){if(effects){let ran=!1,id=dedupeId$1++;for(let prop in props){if(runEffectsForProperty(inst,effects,id,prop,props,oldProps,hasPaths,extraArgs)){ran=!0}}return ran}return!1}function runEffectsForProperty(inst,effects,dedupeId,prop,props,oldProps,hasPaths,extraArgs){let ran=!1,rootProperty=hasPaths?root(prop):prop,fxs=effects[rootProperty];if(fxs){for(let i=0,l=fxs.length,fx;i<l&&(fx=fxs[i]);i++){if((!fx.info||fx.info.lastRun!==dedupeId)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=dedupeId}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=!0}}}return ran}function pathMatchesTrigger(path,trigger){if(trigger){let triggerPath=trigger.name;return triggerPath==path||!!(trigger.structured&&isAncestor(triggerPath,path))||!!(trigger.wildcard&&isDescendant(triggerPath,path))}else{return!0}}function runObserverEffect(inst,property,props,oldProps,info){let fn="string"===typeof info.method?inst[info.method]:info.method,changedProp=info.property;if(fn){fn.call(inst,inst.__data[changedProp],oldProps[changedProp])}else if(!info.dynamicFn){console.warn("observer method `"+info.method+"` not defined")}}function runNotifyEffects(inst,notifyProps,props,oldProps,hasPaths){let fxs=inst[TYPES.NOTIFY],notified,id=dedupeId$1++;for(let prop in notifyProps){if(notifyProps[prop]){if(fxs&&runEffectsForProperty(inst,fxs,id,prop,props,oldProps,hasPaths)){notified=!0}else if(hasPaths&&notifyPath(inst,prop,props)){notified=!0}}}let host;if(notified&&(host=inst.__dataHost)&&host._invalidateProperties){host._invalidateProperties()}}function notifyPath(inst,path,props){let rootProperty=root(path);if(rootProperty!==path){let eventName=camelToDashCase(rootProperty)+"-changed";dispatchNotifyEvent(inst,eventName,props[path],path);return!0}return!1}function dispatchNotifyEvent(inst,eventName,value,path){let detail={value:value,queueProperty:!0};if(path){detail.path=path}wrap$1(inst).dispatchEvent(new CustomEvent(eventName,{detail}))}function runNotifyEffect(inst,property,props,oldProps,info,hasPaths){let rootProperty=hasPaths?root(property):property,path=rootProperty!=property?property:null,value=path?get(inst,path):inst.__data[property];if(path&&value===void 0){value=props[property]}dispatchNotifyEvent(inst,info.eventName,value,path)}function handleNotification(event,inst,fromProp,toPath,negate){let value,detail=event.detail,fromPath=detail&&detail.path;if(fromPath){toPath=translate(fromProp,toPath,fromPath);value=detail&&detail.value}else{value=event.currentTarget[fromProp]}value=negate?!value:value;if(!inst[TYPES.READ_ONLY]||!inst[TYPES.READ_ONLY][toPath]){if(inst._setPendingPropertyOrPath(toPath,value,!0,!!fromPath)&&(!detail||!detail.queueProperty)){inst._invalidateProperties()}}}function runReflectEffect(inst,property,props,oldProps,info){let value=inst.__data[property];if(sanitizeDOMValue){value=sanitizeDOMValue(value,info.attrName,"attribute",inst)}inst._propertyToAttribute(property,info.attrName,value)}function runComputedEffects(inst,changedProps,oldProps,hasPaths){let computeEffects=inst[TYPES.COMPUTE];if(computeEffects){let inputProps=changedProps;while(runEffects(inst,computeEffects,inputProps,oldProps,hasPaths)){Object.assign(oldProps,inst.__dataOld);Object.assign(changedProps,inst.__dataPending);inputProps=inst.__dataPending;inst.__dataPending=null}}}function runComputedEffect(inst,property,props,oldProps,info){let result=runMethodEffect(inst,property,props,oldProps,info),computedProp=info.methodInfo;if(inst.__dataHasAccessor&&inst.__dataHasAccessor[computedProp]){inst._setPendingProperty(computedProp,result,!0)}else{inst[computedProp]=result}}function computeLinkedPaths(inst,path,value){let links=inst.__dataLinkedPaths;if(links){let link;for(let a in links){let b=links[a];if(isDescendant(a,path)){link=translate(a,b,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}else if(isDescendant(b,path)){link=translate(b,a,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}}}}function addBinding(constructor,templateInfo,nodeInfo,kind,target,parts,literal){nodeInfo.bindings=nodeInfo.bindings||[];let binding={kind,target,parts,literal,isCompound:1!==parts.length};nodeInfo.bindings.push(binding);if(shouldAddListener(binding)){let{event,negate}=binding.parts[0];binding.listenerEvent=event||camelToDashCase(target)+"-changed";binding.listenerNegate=negate}let index=templateInfo.nodeInfoList.length;for(let i=0,part;i<binding.parts.length;i++){part=binding.parts[i];part.compoundIndex=i;addEffectForBindingPart(constructor,templateInfo,binding,part,index)}}function addEffectForBindingPart(constructor,templateInfo,binding,part,index){if(!part.literal){if("attribute"===binding.kind&&"-"===binding.target[0]){console.warn("Cannot set attribute "+binding.target+" because \"-\" is not a valid attribute starting character")}else{let dependencies=part.dependencies,info={index,binding,part,evaluator:constructor};for(let j=0,trigger;j<dependencies.length;j++){trigger=dependencies[j];if("string"==typeof trigger){trigger=parseArg(trigger);trigger.wildcard=!0}constructor._addTemplatePropertyEffect(templateInfo,trigger.rootProperty,{fn:runBindingEffect,info,trigger})}}}}function runBindingEffect(inst,path,props,oldProps,info,hasPaths,nodeList){let node=nodeList[info.index],binding=info.binding,part=info.part;if(hasPaths&&part.source&&path.length>part.source.length&&"property"==binding.kind&&!binding.isCompound&&node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[binding.target]){let value=props[path];path=translate(part.source,binding.target,path);if(node._setPendingPropertyOrPath(path,value,!1,!0)){inst._enqueueClient(node)}}else{let value=info.evaluator._evaluateBinding(inst,part,path,props,oldProps,hasPaths);applyBindingValue(inst,node,binding,part,value)}}function applyBindingValue(inst,node,binding,part,value){value=computeBindingValue(node,value,binding,part);if(sanitizeDOMValue){value=sanitizeDOMValue(value,binding.target,binding.kind,node)}if("attribute"==binding.kind){inst._valueToNodeAttribute(node,value,binding.target)}else{let prop=binding.target;if(node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[prop]){if(!node[TYPES.READ_ONLY]||!node[TYPES.READ_ONLY][prop]){if(node._setPendingProperty(prop,value)){inst._enqueueClient(node)}}}else{inst._setUnmanagedPropertyToNode(node,prop,value)}}}function computeBindingValue(node,value,binding,part){if(binding.isCompound){let storage=node.__dataCompoundStorage[binding.target];storage[part.compoundIndex]=value;value=storage.join("")}if("attribute"!==binding.kind){if("textContent"===binding.target||"value"===binding.target&&("input"===node.localName||"textarea"===node.localName)){value=value==void 0?"":value}}return value}function shouldAddListener(binding){return!!binding.target&&"attribute"!=binding.kind&&"text"!=binding.kind&&!binding.isCompound&&"{"===binding.parts[0].mode}function setupBindings(inst,templateInfo){let{nodeList,nodeInfoList}=templateInfo;if(nodeInfoList.length){for(let i=0;i<nodeInfoList.length;i++){let info=nodeInfoList[i],node=nodeList[i],bindings=info.bindings;if(bindings){for(let i=0,binding;i<bindings.length;i++){binding=bindings[i];setupCompoundStorage(node,binding);addNotifyListener(node,inst,binding)}}node.__dataHost=inst}}}function setupCompoundStorage(node,binding){if(binding.isCompound){let storage=node.__dataCompoundStorage||(node.__dataCompoundStorage={}),parts=binding.parts,literals=Array(parts.length);for(let j=0;j<parts.length;j++){literals[j]=parts[j].literal}let target=binding.target;storage[target]=literals;if(binding.literal&&"property"==binding.kind){node[target]=binding.literal}}}function addNotifyListener(node,inst,binding){if(binding.listenerEvent){let part=binding.parts[0];node.addEventListener(binding.listenerEvent,function(e){handleNotification(e,inst,binding.target,part.source,part.negate)})}}function createMethodEffect(model,sig,type,effectFn,methodInfo,dynamicFn){dynamicFn=sig.static||dynamicFn&&("object"!==typeof dynamicFn||dynamicFn[sig.methodName]);let info={methodName:sig.methodName,args:sig.args,methodInfo,dynamicFn};for(let i=0,arg;i<sig.args.length&&(arg=sig.args[i]);i++){if(!arg.literal){model._addPropertyEffect(arg.rootProperty,type,{fn:effectFn,info:info,trigger:arg})}}if(dynamicFn){model._addPropertyEffect(sig.methodName,type,{fn:effectFn,info:info})}}function runMethodEffect(inst,property,props,oldProps,info){let context=inst._methodHost||inst,fn=context[info.methodName];if(fn){let args=inst._marshalArgs(info.args,property,props);return fn.apply(context,args)}else if(!info.dynamicFn){console.warn("method `"+info.methodName+"` not defined")}}const emptyArray=[],IDENT="(?:"+"[a-zA-Z_$][\\w.:$\\-*]*"+")",NUMBER="(?:"+"[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?"+")",SQUOTE_STRING="(?:"+"'(?:[^'\\\\]|\\\\.)*'"+")",DQUOTE_STRING="(?:"+"\"(?:[^\"\\\\]|\\\\.)*\""+")",STRING="(?:"+SQUOTE_STRING+"|"+DQUOTE_STRING+")",ARGUMENT="(?:("+IDENT+"|"+NUMBER+"|"+STRING+")\\s*"+")",ARGUMENTS="(?:"+ARGUMENT+"(?:,\\s*"+ARGUMENT+")*"+")",ARGUMENT_LIST="(?:"+"\\(\\s*"+"(?:"+ARGUMENTS+"?"+")"+"\\)\\s*"+")",BINDING="("+IDENT+"\\s*"+ARGUMENT_LIST+"?"+")",OPEN_BRACKET="(\\[\\[|{{)"+"\\s*",CLOSE_BRACKET="(?:]]|}})",NEGATE="(?:(!)\\s*)?",EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+CLOSE_BRACKET,bindingRegex=new RegExp(EXPRESSION,"g");function literalFromParts(parts){let s="";for(let i=0,literal;i<parts.length;i++){literal=parts[i].literal;s+=literal||""}return s}function parseMethod(expression){let m=expression.match(/([^\s]+?)\(([\s\S]*)\)/);if(m){let methodName=m[1],sig={methodName,static:!0,args:emptyArray};if(m[2].trim()){let args=m[2].replace(/\\,/g,"&comma;").split(",");return parseArgs(args,sig)}else{return sig}}return null}function parseArgs(argList,sig){sig.args=argList.map(function(rawArg){let arg=parseArg(rawArg);if(!arg.literal){sig.static=!1}return arg},this);return sig}function parseArg(rawArg){let arg=rawArg.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),a={name:arg,value:"",literal:!1},fc=arg[0];if("-"===fc){fc=arg[1]}if("0"<=fc&&"9">=fc){fc="#"}switch(fc){case"'":case"\"":a.value=arg.slice(1,-1);a.literal=!0;break;case"#":a.value=+arg;a.literal=!0;break;}if(!a.literal){a.rootProperty=root(arg);a.structured=isPath(arg);if(a.structured){a.wildcard=".*"==arg.slice(-2);if(a.wildcard){a.name=arg.slice(0,-2)}}}return a}function getArgValue(data,props,path){let value=get(data,path);if(value===void 0){value=props[path]}return value}function notifySplices(inst,array,path,splices){inst.notifyPath(path+".splices",{indexSplices:splices});inst.notifyPath(path+".length",array.length)}function notifySplice(inst,array,path,index,addedCount,removed){notifySplices(inst,array,path,[{index:index,addedCount:addedCount,removed:removed,object:array,type:"splice"}])}function upper(name){return name[0].toUpperCase()+name.substring(1)}const PropertyEffects=dedupingMixin(superClass=>{const propertyEffectsBase=TemplateStamp(PropertyAccessors(superClass));class PropertyEffects extends propertyEffectsBase{constructor(){super();this.__isPropertyEffectsClient=!0;this.__dataCounter=0;this.__dataClientsReady;this.__dataPendingClients;this.__dataToNotify;this.__dataLinkedPaths;this.__dataHasPaths;this.__dataCompoundStorage;this.__dataHost;this.__dataTemp;this.__dataClientsInitialized;this.__data;this.__dataPending;this.__dataOld;this.__computeEffects;this.__reflectEffects;this.__notifyEffects;this.__propagateEffects;this.__observeEffects;this.__readOnly;this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return TYPES}_initializeProperties(){super._initializeProperties();hostStack.registerHost(this);this.__dataClientsReady=!1;this.__dataPendingClients=null;this.__dataToNotify=null;this.__dataLinkedPaths=null;this.__dataHasPaths=!1;this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=!1}_initializeProtoProperties(props){this.__data=Object.create(props);this.__dataPending=Object.create(props);this.__dataOld={}}_initializeInstanceProperties(props){let readOnly=this[TYPES.READ_ONLY];for(let prop in props){if(!readOnly||!readOnly[prop]){this.__dataPending=this.__dataPending||{};this.__dataOld=this.__dataOld||{};this.__data[prop]=this.__dataPending[prop]=props[prop]}}}_addPropertyEffect(property,type,effect){this._createPropertyAccessor(property,type==TYPES.READ_ONLY);let effects=ensureOwnEffectMap(this,type)[property];if(!effects){effects=this[type][property]=[]}effects.push(effect)}_removePropertyEffect(property,type,effect){let effects=ensureOwnEffectMap(this,type)[property],idx=effects.indexOf(effect);if(0<=idx){effects.splice(idx,1)}}_hasPropertyEffect(property,type){let effects=this[type];return!!(effects&&effects[property])}_hasReadOnlyEffect(property){return this._hasPropertyEffect(property,TYPES.READ_ONLY)}_hasNotifyEffect(property){return this._hasPropertyEffect(property,TYPES.NOTIFY)}_hasReflectEffect(property){return this._hasPropertyEffect(property,TYPES.REFLECT)}_hasComputedEffect(property){return this._hasPropertyEffect(property,TYPES.COMPUTE)}_setPendingPropertyOrPath(path,value,shouldNotify,isPathNotification){if(isPathNotification||root(Array.isArray(path)?path[0]:path)!==path){if(!isPathNotification){let old=get(this,path);path=set(this,path,value);if(!path||!super._shouldPropertyChange(path,value,old)){return!1}}this.__dataHasPaths=!0;if(this._setPendingProperty(path,value,shouldNotify)){computeLinkedPaths(this,path,value);return!0}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[path]){return this._setPendingProperty(path,value,shouldNotify)}else{this[path]=value}}return!1}_setUnmanagedPropertyToNode(node,prop,value){if(value!==node[prop]||"object"==typeof value){node[prop]=value}}_setPendingProperty(property,value,shouldNotify){let propIsPath=this.__dataHasPaths&&isPath(property),prevProps=propIsPath?this.__dataTemp:this.__data;if(this._shouldPropertyChange(property,value,prevProps[property])){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}if(!(property in this.__dataOld)){this.__dataOld[property]=this.__data[property]}if(propIsPath){this.__dataTemp[property]=value}else{this.__data[property]=value}this.__dataPending[property]=value;if(propIsPath||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][property]){this.__dataToNotify=this.__dataToNotify||{};this.__dataToNotify[property]=shouldNotify}return!0}return!1}_setProperty(property,value){if(this._setPendingProperty(property,value,!0)){this._invalidateProperties()}}_invalidateProperties(){if(this.__dataReady){this._flushProperties()}}_enqueueClient(client){this.__dataPendingClients=this.__dataPendingClients||[];if(client!==this){this.__dataPendingClients.push(client)}}_flushProperties(){this.__dataCounter++;super._flushProperties();this.__dataCounter--}_flushClients(){if(!this.__dataClientsReady){this.__dataClientsReady=!0;this._readyClients();this.__dataReady=!0}else{this.__enableOrFlushClients()}}__enableOrFlushClients(){let clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(let i=0,client;i<clients.length;i++){client=clients[i];if(!client.__dataEnabled){client._enableProperties()}else if(client.__dataPending){client._flushProperties()}}}}_readyClients(){this.__enableOrFlushClients()}setProperties(props,setReadOnly){for(let path in props){if(setReadOnly||!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][path]){this._setPendingPropertyOrPath(path,props[path],!0)}}this._invalidateProperties()}ready(){this._flushProperties();if(!this.__dataClientsReady){this._flushClients()}if(this.__dataPending){this._flushProperties()}}_propertiesChanged(currentProps,changedProps,oldProps){let hasPaths=this.__dataHasPaths;this.__dataHasPaths=!1;runComputedEffects(this,changedProps,oldProps,hasPaths);let notifyProps=this.__dataToNotify;this.__dataToNotify=null;this._propagatePropertyChanges(changedProps,oldProps,hasPaths);this._flushClients();runEffects(this,this[TYPES.REFLECT],changedProps,oldProps,hasPaths);runEffects(this,this[TYPES.OBSERVE],changedProps,oldProps,hasPaths);if(notifyProps){runNotifyEffects(this,notifyProps,changedProps,oldProps,hasPaths)}if(1==this.__dataCounter){this.__dataTemp={}}}_propagatePropertyChanges(changedProps,oldProps,hasPaths){if(this[TYPES.PROPAGATE]){runEffects(this,this[TYPES.PROPAGATE],changedProps,oldProps,hasPaths)}let templateInfo=this.__templateInfo;while(templateInfo){runEffects(this,templateInfo.propertyEffects,changedProps,oldProps,hasPaths,templateInfo.nodeList);templateInfo=templateInfo.nextTemplateInfo}}linkPaths(to,from){to=normalize(to);from=normalize(from);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[to]=from}unlinkPaths(path){path=normalize(path);if(this.__dataLinkedPaths){delete this.__dataLinkedPaths[path]}}notifySplices(path,splices){let info={path:""},array=get(this,path,info);notifySplices(this,array,info.path,splices)}get(path,root){return get(root||this,path)}set(path,value,root){if(root){set(root,path,value)}else{if(!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][path]){if(this._setPendingPropertyOrPath(path,value,!0)){this._invalidateProperties()}}}}push(path,...items){let info={path:""},array=get(this,path,info),len=array.length,ret=array.push(...items);if(items.length){notifySplice(this,array,info.path,len,items.length,[])}return ret}pop(path){let info={path:""},array=get(this,path,info),hadLength=!!array.length,ret=array.pop();if(hadLength){notifySplice(this,array,info.path,array.length,0,[ret])}return ret}splice(path,start,deleteCount,...items){let info={path:""},array=get(this,path,info);if(0>start){start=array.length-_Mathfloor(-start)}else if(start){start=_Mathfloor(start)}let ret;if(2===arguments.length){ret=array.splice(start)}else{ret=array.splice(start,deleteCount,...items)}if(items.length||ret.length){notifySplice(this,array,info.path,start,items.length,ret)}return ret}shift(path){let info={path:""},array=get(this,path,info),hadLength=!!array.length,ret=array.shift();if(hadLength){notifySplice(this,array,info.path,0,0,[ret])}return ret}unshift(path,...items){let info={path:""},array=get(this,path,info),ret=array.unshift(...items);if(items.length){notifySplice(this,array,info.path,0,items.length,[])}return ret}notifyPath(path,value){let propPath;if(1==arguments.length){let info={path:""};value=get(this,path,info);propPath=info.path}else if(Array.isArray(path)){propPath=normalize(path)}else{propPath=path}if(this._setPendingPropertyOrPath(propPath,value,!0,!0)){this._invalidateProperties()}}_createReadOnlyProperty(property,protectedSetter){this._addPropertyEffect(property,TYPES.READ_ONLY);if(protectedSetter){this["_set"+upper(property)]=function(value){this._setProperty(property,value)}}}_createPropertyObserver(property,method,dynamicFn){let info={property,method,dynamicFn:!!dynamicFn};this._addPropertyEffect(property,TYPES.OBSERVE,{fn:runObserverEffect,info,trigger:{name:property}});if(dynamicFn){this._addPropertyEffect(method,TYPES.OBSERVE,{fn:runObserverEffect,info,trigger:{name:method}})}}_createMethodObserver(expression,dynamicFn){let sig=parseMethod(expression);if(!sig){throw new Error("Malformed observer expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.OBSERVE,runMethodEffect,null,dynamicFn)}_createNotifyingProperty(property){this._addPropertyEffect(property,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:camelToDashCase(property)+"-changed",property:property}})}_createReflectedProperty(property){let attr=this.constructor.attributeNameForProperty(property);if("-"===attr[0]){console.warn("Property "+property+" cannot be reflected to attribute "+attr+" because \"-\" is not a valid starting attribute name. Use a lowercase first letter for the property instead.")}else{this._addPropertyEffect(property,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:attr}})}}_createComputedProperty(property,expression,dynamicFn){let sig=parseMethod(expression);if(!sig){throw new Error("Malformed computed expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.COMPUTE,runComputedEffect,property,dynamicFn)}_marshalArgs(args,path,props){const data=this.__data,values=[];for(let i=0,l=args.length;i<l;i++){let{name,structured,wildcard,value,literal}=args[i];if(!literal){if(wildcard){const matches=isDescendant(name,path),pathValue=getArgValue(data,props,matches?path:name);value={path:matches?path:name,value:pathValue,base:matches?get(data,name):pathValue}}else{value=structured?getArgValue(data,props,name):data[name]}}values[i]=value}return values}static addPropertyEffect(property,type,effect){this.prototype._addPropertyEffect(property,type,effect)}static createPropertyObserver(property,method,dynamicFn){this.prototype._createPropertyObserver(property,method,dynamicFn)}static createMethodObserver(expression,dynamicFn){this.prototype._createMethodObserver(expression,dynamicFn)}static createNotifyingProperty(property){this.prototype._createNotifyingProperty(property)}static createReadOnlyProperty(property,protectedSetter){this.prototype._createReadOnlyProperty(property,protectedSetter)}static createReflectedProperty(property){this.prototype._createReflectedProperty(property)}static createComputedProperty(property,expression,dynamicFn){this.prototype._createComputedProperty(property,expression,dynamicFn)}static bindTemplate(template){return this.prototype._bindTemplate(template)}_bindTemplate(template,instanceBinding){let templateInfo=this.constructor._parseTemplate(template),wasPreBound=this.__templateInfo==templateInfo;if(!wasPreBound){for(let prop in templateInfo.propertyEffects){this._createPropertyAccessor(prop)}}if(instanceBinding){templateInfo=Object.create(templateInfo);templateInfo.wasPreBound=wasPreBound;if(!wasPreBound&&this.__templateInfo){let last=this.__templateInfoLast||this.__templateInfo;this.__templateInfoLast=last.nextTemplateInfo=templateInfo;templateInfo.previousTemplateInfo=last;return templateInfo}}return this.__templateInfo=templateInfo}static _addTemplatePropertyEffect(templateInfo,prop,effect){let hostProps=templateInfo.hostProps=templateInfo.hostProps||{};hostProps[prop]=!0;let effects=templateInfo.propertyEffects=templateInfo.propertyEffects||{},propEffects=effects[prop]=effects[prop]||[];propEffects.push(effect)}_stampTemplate(template){hostStack.beginHosting(this);let dom=super._stampTemplate(template);hostStack.endHosting(this);let templateInfo=this._bindTemplate(template,!0);templateInfo.nodeList=dom.nodeList;if(!templateInfo.wasPreBound){let nodes=templateInfo.childNodes=[];for(let n=dom.firstChild;n;n=n.nextSibling){nodes.push(n)}}dom.templateInfo=templateInfo;setupBindings(this,templateInfo);if(this.__dataReady){runEffects(this,templateInfo.propertyEffects,this.__data,null,!1,templateInfo.nodeList)}return dom}_removeBoundDom(dom){let templateInfo=dom.templateInfo;if(templateInfo.previousTemplateInfo){templateInfo.previousTemplateInfo.nextTemplateInfo=templateInfo.nextTemplateInfo}if(templateInfo.nextTemplateInfo){templateInfo.nextTemplateInfo.previousTemplateInfo=templateInfo.previousTemplateInfo}if(this.__templateInfoLast==templateInfo){this.__templateInfoLast=templateInfo.previousTemplateInfo}templateInfo.previousTemplateInfo=templateInfo.nextTemplateInfo=null;let nodes=templateInfo.childNodes;for(let i=0,node;i<nodes.length;i++){node=nodes[i];node.parentNode.removeChild(node)}}static _parseTemplateNode(node,templateInfo,nodeInfo){let noted=super._parseTemplateNode(node,templateInfo,nodeInfo);if(node.nodeType===Node.TEXT_NODE){let parts=this._parseBindings(node.textContent,templateInfo);if(parts){node.textContent=literalFromParts(parts)||" ";addBinding(this,templateInfo,nodeInfo,"text","textContent",parts);noted=!0}}return noted}static _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){let parts=this._parseBindings(value,templateInfo);if(parts){let origName=name,kind="property";if(capitalAttributeRegex.test(name)){kind="attribute"}else if("$"==name[name.length-1]){name=name.slice(0,-1);kind="attribute"}let literal=literalFromParts(parts);if(literal&&"attribute"==kind){if("class"==name&&node.hasAttribute("class")){literal+=" "+node.getAttribute(name)}node.setAttribute(name,literal)}if("input"===node.localName&&"value"===origName){node.setAttribute(origName,"")}node.removeAttribute(origName);if("property"===kind){name=dashToCamelCase(name)}addBinding(this,templateInfo,nodeInfo,kind,name,parts,literal);return!0}else{return super._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value)}}static _parseTemplateNestedTemplate(node,templateInfo,nodeInfo){let noted=super._parseTemplateNestedTemplate(node,templateInfo,nodeInfo),hostProps=nodeInfo.templateInfo.hostProps,mode="{";for(let source in hostProps){let parts=[{mode,source,dependencies:[source]}];addBinding(this,templateInfo,nodeInfo,"property","_host_"+source,parts)}return noted}static _parseBindings(text,templateInfo){let parts=[],lastIndex=0,m;while(null!==(m=bindingRegex.exec(text))){if(m.index>lastIndex){parts.push({literal:text.slice(lastIndex,m.index)})}let mode=m[1][0],negate=!!m[2],source=m[3].trim(),customEvent=!1,notifyEvent="",colon=-1;if("{"==mode&&0<(colon=source.indexOf("::"))){notifyEvent=source.substring(colon+2);source=source.substring(0,colon);customEvent=!0}let signature=parseMethod(source),dependencies=[];if(signature){let{args,methodName}=signature;for(let i=0,arg;i<args.length;i++){arg=args[i];if(!arg.literal){dependencies.push(arg)}}let dynamicFns=templateInfo.dynamicFns;if(dynamicFns&&dynamicFns[methodName]||signature.static){dependencies.push(methodName);signature.dynamicFn=!0}}else{dependencies.push(source)}parts.push({source,mode,negate,customEvent,signature,dependencies,event:notifyEvent});lastIndex=bindingRegex.lastIndex}if(lastIndex&&lastIndex<text.length){let literal=text.substring(lastIndex);if(literal){parts.push({literal:literal})}}if(parts.length){return parts}else{return null}}static _evaluateBinding(inst,part,path,props,oldProps,hasPaths){let value;if(part.signature){value=runMethodEffect(inst,path,props,oldProps,part.signature)}else if(path!=part.source){value=get(inst,part.source)}else{if(hasPaths&&isPath(path)){value=get(inst,path)}else{value=inst.__data[path]}}if(part.negate){value=!value}return value}}return PropertyEffects});_exports.PropertyEffects=PropertyEffects;class HostStack{constructor(){this.stack=[]}registerHost(inst){if(this.stack.length){let host=this.stack[this.stack.length-1];host._enqueueClient(inst)}}beginHosting(inst){this.stack.push(inst)}endHosting(inst){let stackLen=this.stack.length;if(stackLen&&this.stack[stackLen-1]==inst){this.stack.pop()}}}const hostStack=new HostStack;var propertyEffects={PropertyEffects:PropertyEffects};_exports.$propertyEffects=propertyEffects;let instanceCount=0;_exports.instanceCount=instanceCount;function incrementInstanceCount(){_exports.instanceCount=instanceCount=instanceCount+1}const registrations=[];_exports.registrations=registrations;function _regLog(prototype){console.log("["+prototype.is+"]: registered")}function register(prototype){registrations.push(prototype)}function dumpRegistrations(){registrations.forEach(_regLog)}var telemetry={get instanceCount(){return instanceCount},incrementInstanceCount:incrementInstanceCount,registrations:registrations,register:register,dumpRegistrations:dumpRegistrations};_exports.$telemetry=telemetry;function normalizeProperties(props){const output={};for(let p in props){const o=props[p];output[p]="function"===typeof o?{type:o}:o}return output}const PropertiesMixin=dedupingMixin(superClass=>{const base=PropertiesChanged(superClass);function superPropertiesClass(constructor){const superCtor=Object.getPrototypeOf(constructor);return superCtor.prototype instanceof PropertiesMixin?superCtor:null}function ownProperties(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",constructor))){let props=null;if(constructor.hasOwnProperty(JSCompiler_renameProperty("properties",constructor))){const properties=constructor.properties;if(properties){props=normalizeProperties(properties)}}constructor.__ownProperties=props}return constructor.__ownProperties}class PropertiesMixin extends base{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){register(this.prototype);const props=this._properties;this.__observedAttributes=props?Object.keys(props).map(p=>this.attributeNameForProperty(p)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const superCtor=superPropertiesClass(this);if(superCtor){superCtor.finalize()}this.__finalized=!0;this._finalizeClass()}}static _finalizeClass(){const props=ownProperties(this);if(props){this.createProperties(props)}}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const superCtor=superPropertiesClass(this);this.__properties=Object.assign({},superCtor&&superCtor._properties,ownProperties(this))}return this.__properties}static typeForProperty(name){const info=this._properties[name];return info&&info.type}_initializeProperties(){incrementInstanceCount();this.constructor.finalize();super._initializeProperties()}connectedCallback(){if(super.connectedCallback){super.connectedCallback()}this._enableProperties()}disconnectedCallback(){if(super.disconnectedCallback){super.disconnectedCallback()}}}return PropertiesMixin});_exports.PropertiesMixin=PropertiesMixin;var propertiesMixin={PropertiesMixin:PropertiesMixin};_exports.$propertiesMixin=propertiesMixin;const bundledImportMeta=babelHelpers.objectSpread({},meta,{url:new URL("../../node_assets/%40polymer/polymer/lib/mixins/element-mixin.js",meta.url).href}),version="3.2.0";_exports.version$1=_exports.version=version;const builtCSS=window.ShadyCSS&&window.ShadyCSS.cssBuild,ElementMixin=dedupingMixin(base=>{const polymerElementBase=PropertiesMixin(PropertyEffects(base));function propertyDefaults(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",constructor))){constructor.__propertyDefaults=null;let props=constructor._properties;for(let p in props){let info=props[p];if("value"in info){constructor.__propertyDefaults=constructor.__propertyDefaults||{};constructor.__propertyDefaults[p]=info}}}return constructor.__propertyDefaults}function ownObservers(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",constructor))){constructor.__ownObservers=constructor.hasOwnProperty(JSCompiler_renameProperty("observers",constructor))?constructor.observers:null}return constructor.__ownObservers}function createPropertyFromConfig(proto,name,info,allProps){if(info.computed){info.readOnly=!0}if(info.computed){if(proto._hasReadOnlyEffect(name)){console.warn(`Cannot redefine computed property '${name}'.`)}else{proto._createComputedProperty(name,info.computed,allProps)}}if(info.readOnly&&!proto._hasReadOnlyEffect(name)){proto._createReadOnlyProperty(name,!info.computed)}else if(!1===info.readOnly&&proto._hasReadOnlyEffect(name)){console.warn(`Cannot make readOnly property '${name}' non-readOnly.`)}if(info.reflectToAttribute&&!proto._hasReflectEffect(name)){proto._createReflectedProperty(name)}else if(!1===info.reflectToAttribute&&proto._hasReflectEffect(name)){console.warn(`Cannot make reflected property '${name}' non-reflected.`)}if(info.notify&&!proto._hasNotifyEffect(name)){proto._createNotifyingProperty(name)}else if(!1===info.notify&&proto._hasNotifyEffect(name)){console.warn(`Cannot make notify property '${name}' non-notify.`)}if(info.observer){proto._createPropertyObserver(name,info.observer,allProps[info.observer])}proto._addPropertyToAttributeMap(name)}function processElementStyles(klass,template,is,baseURI){if(!builtCSS){const templateStyles=template.content.querySelectorAll("style"),stylesWithImports=stylesFromTemplate(template),linkedStyles=stylesFromModuleImports(is),firstTemplateChild=template.content.firstElementChild;for(let idx=0,s;idx<linkedStyles.length;idx++){s=linkedStyles[idx];s.textContent=klass._processStyleText(s.textContent,baseURI);template.content.insertBefore(s,firstTemplateChild)}let templateStyleIndex=0;for(let i=0;i<stylesWithImports.length;i++){let s=stylesWithImports[i],templateStyle=templateStyles[templateStyleIndex];if(templateStyle!==s){s=s.cloneNode(!0);templateStyle.parentNode.insertBefore(s,templateStyle)}else{templateStyleIndex++}s.textContent=klass._processStyleText(s.textContent,baseURI)}}if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(template,is)}}function getTemplateFromDomModule(is){let template=null;if(is&&(!strictTemplatePolicy||allowTemplateFromDomModule)){template=DomModule.import(is,"template");if(strictTemplatePolicy&&!template){throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${is}`)}}return template}class PolymerElement extends polymerElementBase{static get polymerElementVersion(){return version}static _finalizeClass(){super._finalizeClass();const observers=ownObservers(this);if(observers){this.createObservers(observers,this._properties)}this._prepareTemplate()}static _prepareTemplate(){let template=this.template;if(template){if("string"===typeof template){console.error("template getter must return HTMLTemplateElement");template=null}else if(!legacyOptimizations){template=template.cloneNode(!0)}}this.prototype._template=template}static createProperties(props){for(let p in props){createPropertyFromConfig(this.prototype,p,props[p],props)}}static createObservers(observers,dynamicFns){const proto=this.prototype;for(let i=0;i<observers.length;i++){proto._createMethodObserver(observers[i],dynamicFns)}}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:getTemplateFromDomModule(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(value){this._template=value}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const meta=this.importMeta;if(meta){this._importPath=pathFromUrl(meta.url)}else{const module=DomModule.import(this.is);this._importPath=module&&module.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super();this._template;this._importPath;this.rootPath;this.importPath;this.root;this.$}_initializeProperties(){this.constructor.finalize();this.constructor._finalizeTemplate(this.localName);super._initializeProperties();this.rootPath=rootPath;this.importPath=this.constructor.importPath;let p$=propertyDefaults(this.constructor);if(!p$){return}for(let p in p$){let info=p$[p];if(!this.hasOwnProperty(p)){let value="function"==typeof info.value?info.value.call(this):info.value;if(this._hasAccessor(p)){this._setPendingProperty(p,value,!0)}else{this[p]=value}}}}static _processStyleText(cssText,baseURI){return resolveCss(cssText,baseURI)}static _finalizeTemplate(is){const template=this.prototype._template;if(template&&!template.__polymerFinalized){template.__polymerFinalized=!0;const importPath=this.importPath,baseURI=importPath?resolveUrl(importPath):"";processElementStyles(this,template,is,baseURI);this.prototype._bindTemplate(template)}}connectedCallback(){if(window.ShadyCSS&&this._template){window.ShadyCSS.styleElement(this)}super.connectedCallback()}ready(){if(this._template){this.root=this._stampTemplate(this._template);this.$=this.root.$}super.ready()}_readyClients(){if(this._template){this.root=this._attachDom(this.root)}super._readyClients()}_attachDom(dom){const n=wrap$1(this);if(n.attachShadow){if(dom){if(!n.shadowRoot){n.attachShadow({mode:"open"})}n.shadowRoot.appendChild(dom);if(syncInitialRender&&window.ShadyDOM){ShadyDOM.flushInitial(n.shadowRoot)}return n.shadowRoot}return null}else{throw new Error("ShadowDOM not available. "+"PolymerElement can create dom as children instead of in "+"ShadowDOM by setting `this.root = this;` before `ready`.")}}updateStyles(properties){if(window.ShadyCSS){window.ShadyCSS.styleSubtree(this,properties)}}resolveUrl(url,base){if(!base&&this.importPath){base=resolveUrl(this.importPath)}return resolveUrl(url,base)}static _parseTemplateContent(template,templateInfo,nodeInfo){templateInfo.dynamicFns=templateInfo.dynamicFns||this._properties;return super._parseTemplateContent(template,templateInfo,nodeInfo)}static _addTemplatePropertyEffect(templateInfo,prop,effect){if(legacyOptimizations&&!(prop in this._properties)){console.warn(`Property '${prop}' used in template but not declared in 'properties'; `+`attribute will not be observed.`)}return super._addTemplatePropertyEffect(templateInfo,prop,effect)}}return PolymerElement});_exports.ElementMixin=ElementMixin;const updateStyles=function(props){if(window.ShadyCSS){window.ShadyCSS.styleDocument(props)}};_exports.updateStyles=updateStyles;var elementMixin={version:version,ElementMixin:ElementMixin,updateStyles:updateStyles};_exports.$elementMixin=elementMixin;class Debouncer{constructor(){this._asyncModule=null;this._callback=null;this._timer=null}setConfig(asyncModule,callback){this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(()=>{this._timer=null;debouncerQueue.delete(this);this._callback()})}cancel(){if(this.isActive()){this._cancelAsync();debouncerQueue.delete(this)}}_cancelAsync(){if(this.isActive()){this._asyncModule.cancel(this._timer);this._timer=null}}flush(){if(this.isActive()){this.cancel();this._callback()}}isActive(){return null!=this._timer}static debounce(debouncer,asyncModule,callback){if(debouncer instanceof Debouncer){debouncer._cancelAsync()}else{debouncer=new Debouncer}debouncer.setConfig(asyncModule,callback);return debouncer}}_exports.Debouncer=Debouncer;let debouncerQueue=new Set;const enqueueDebouncer=function(debouncer){debouncerQueue.add(debouncer)};_exports.enqueueDebouncer=_exports.enqueueDebouncer$1=_exports.addDebouncer=enqueueDebouncer;const flushDebouncers=function(){const didFlush=!!debouncerQueue.size;debouncerQueue.forEach(debouncer=>{try{debouncer.flush()}catch(e){setTimeout(()=>{throw e})}});return didFlush};_exports.flushDebouncers=flushDebouncers;var debounce={Debouncer:Debouncer,enqueueDebouncer:enqueueDebouncer,flushDebouncers:flushDebouncers};_exports.$debounce=debounce;let HAS_NATIVE_TA="string"===typeof document.head.style.touchAction,GESTURE_KEY="__polymerGestures",HANDLED_OBJ="__polymerGesturesHandled",TOUCH_ACTION="__polymerGesturesTouchAction",TAP_DISTANCE=25,TRACK_DISTANCE=5,TRACK_LENGTH=2,MOUSE_TIMEOUT=2500,MOUSE_EVENTS=["mousedown","mousemove","mouseup","click"],MOUSE_WHICH_TO_BUTTONS=[0,1,4,2],MOUSE_HAS_BUTTONS=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function isMouseEvent(name){return-1<MOUSE_EVENTS.indexOf(name)}let SUPPORTS_PASSIVE=!1;(function(){try{let opts=Object.defineProperty({},"passive",{get(){SUPPORTS_PASSIVE=!0}});window.addEventListener("test",null,opts);window.removeEventListener("test",null,opts)}catch(e){}})();function PASSIVE_TOUCH(eventName){if(isMouseEvent(eventName)||"touchend"===eventName){return}if(HAS_NATIVE_TA&&SUPPORTS_PASSIVE&&passiveTouchGestures){return{passive:!0}}else{return}}let IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const clickedLabels=[],labellable={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},canBeDisabled={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function canBeLabelled(el){return labellable[el.localName]||!1}function matchingLabels(el){let labels=Array.prototype.slice.call(el.labels||[]);if(!labels.length){labels=[];let root=el.getRootNode();if(el.id){let matching=root.querySelectorAll(`label[for = ${el.id}]`);for(let i=0;i<matching.length;i++){labels.push(matching[i])}}}return labels}let mouseCanceller=function(mouseEvent){let sc=mouseEvent.sourceCapabilities;if(sc&&!sc.firesTouchEvents){return}mouseEvent[HANDLED_OBJ]={skip:!0};if("click"===mouseEvent.type){let clickFromLabel=!1,path=getComposedPath(mouseEvent);for(let i=0;i<path.length;i++){if(path[i].nodeType===Node.ELEMENT_NODE){if("label"===path[i].localName){clickedLabels.push(path[i])}else if(canBeLabelled(path[i])){let ownerLabels=matchingLabels(path[i]);for(let j=0;j<ownerLabels.length;j++){clickFromLabel=clickFromLabel||-1<clickedLabels.indexOf(ownerLabels[j])}}}if(path[i]===POINTERSTATE.mouse.target){return}}if(clickFromLabel){return}mouseEvent.preventDefault();mouseEvent.stopPropagation()}};function setupTeardownMouseCanceller(setup){let events=IS_TOUCH_ONLY?["click"]:MOUSE_EVENTS;for(let i=0,en;i<events.length;i++){en=events[i];if(setup){clickedLabels.length=0;document.addEventListener(en,mouseCanceller,!0)}else{document.removeEventListener(en,mouseCanceller,!0)}}}function ignoreMouse(e){if(!POINTERSTATE.mouse.mouseIgnoreJob){setupTeardownMouseCanceller(!0)}let unset=function(){setupTeardownMouseCanceller();POINTERSTATE.mouse.target=null;POINTERSTATE.mouse.mouseIgnoreJob=null};POINTERSTATE.mouse.target=getComposedPath(e)[0];POINTERSTATE.mouse.mouseIgnoreJob=Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob,timeOut.after(MOUSE_TIMEOUT),unset)}function hasLeftMouseButton(ev){let type=ev.type;if(!isMouseEvent(type)){return!1}if("mousemove"===type){let buttons=ev.buttons===void 0?1:ev.buttons;if(ev instanceof window.MouseEvent&&!MOUSE_HAS_BUTTONS){buttons=MOUSE_WHICH_TO_BUTTONS[ev.which]||0}return!!(1&buttons)}else{let button=ev.button===void 0?0:ev.button;return 0===button}}function isSyntheticClick(ev){if("click"===ev.type){if(0===ev.detail){return!0}let t=_findOriginalTarget(ev);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE){return!0}let bcr=t.getBoundingClientRect(),x=ev.pageX,y=ev.pageY;return!(x>=bcr.left&&x<=bcr.right&&y>=bcr.top&&y<=bcr.bottom)}return!1}let POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function firstTouchAction(ev){let ta="auto",path=getComposedPath(ev);for(let i=0,n;i<path.length;i++){n=path[i];if(n[TOUCH_ACTION]){ta=n[TOUCH_ACTION];break}}return ta}function trackDocument(stateObj,movefn,upfn){stateObj.movefn=movefn;stateObj.upfn=upfn;document.addEventListener("mousemove",movefn);document.addEventListener("mouseup",upfn)}function untrackDocument(stateObj){document.removeEventListener("mousemove",stateObj.movefn);document.removeEventListener("mouseup",stateObj.upfn);stateObj.movefn=null;stateObj.upfn=null}document.addEventListener("touchend",ignoreMouse,SUPPORTS_PASSIVE?{passive:!0}:!1);const getComposedPath=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:event=>event.composedPath&&event.composedPath()||[],gestures={};_exports.gestures=gestures;const recognizers=[];_exports.recognizers=recognizers;function deepTargetFind(x,y){let node=document.elementFromPoint(x,y),next=node;while(next&&next.shadowRoot&&!window.ShadyDOM){let oldNext=next;next=next.shadowRoot.elementFromPoint(x,y);if(oldNext===next){break}if(next){node=next}}return node}function _findOriginalTarget(ev){const path=getComposedPath(ev);return 0<path.length?path[0]:ev.target}function _handleNative(ev){let handled,type=ev.type,node=ev.currentTarget,gobj=node[GESTURE_KEY];if(!gobj){return}let gs=gobj[type];if(!gs){return}if(!ev[HANDLED_OBJ]){ev[HANDLED_OBJ]={};if("touch"===type.slice(0,5)){ev=ev;let t=ev.changedTouches[0];if("touchstart"===type){if(1===ev.touches.length){POINTERSTATE.touch.id=t.identifier}}if(POINTERSTATE.touch.id!==t.identifier){return}if(!HAS_NATIVE_TA){if("touchstart"===type||"touchmove"===type){_handleTouchAction(ev)}}}}handled=ev[HANDLED_OBJ];if(handled.skip){return}for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];if(gs[r.name]&&!handled[r.name]){if(r.flow&&-1<r.flow.start.indexOf(ev.type)&&r.reset){r.reset()}}}for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];if(gs[r.name]&&!handled[r.name]){handled[r.name]=!0;r[type](ev)}}}function _handleTouchAction(ev){let t=ev.changedTouches[0],type=ev.type;if("touchstart"===type){POINTERSTATE.touch.x=t.clientX;POINTERSTATE.touch.y=t.clientY;POINTERSTATE.touch.scrollDecided=!1}else if("touchmove"===type){if(POINTERSTATE.touch.scrollDecided){return}POINTERSTATE.touch.scrollDecided=!0;let ta=firstTouchAction(ev),shouldPrevent=!1,dx=_Mathabs(POINTERSTATE.touch.x-t.clientX),dy=_Mathabs(POINTERSTATE.touch.y-t.clientY);if(!ev.cancelable){}else if("none"===ta){shouldPrevent=!0}else if("pan-x"===ta){shouldPrevent=dy>dx}else if("pan-y"===ta){shouldPrevent=dx>dy}if(shouldPrevent){ev.preventDefault()}else{prevent("track")}}}function addListener(node,evType,handler){if(gestures[evType]){_add(node,evType,handler);return!0}return!1}function removeListener(node,evType,handler){if(gestures[evType]){_remove(node,evType,handler);return!0}return!1}function _add(node,evType,handler){let recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(!gobj){node[GESTURE_KEY]=gobj={}}for(let i=0,dep,gd;i<deps.length;i++){dep=deps[i];if(IS_TOUCH_ONLY&&isMouseEvent(dep)&&"click"!==dep){continue}gd=gobj[dep];if(!gd){gobj[dep]=gd={_count:0}}if(0===gd._count){node.addEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}gd[name]=(gd[name]||0)+1;gd._count=(gd._count||0)+1}node.addEventListener(evType,handler);if(recognizer.touchAction){setTouchAction(node,recognizer.touchAction)}}function _remove(node,evType,handler){let recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(gobj){for(let i=0,dep,gd;i<deps.length;i++){dep=deps[i];gd=gobj[dep];if(gd&&gd[name]){gd[name]=(gd[name]||1)-1;gd._count=(gd._count||1)-1;if(0===gd._count){node.removeEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}}}}node.removeEventListener(evType,handler)}function register$1(recog){recognizers.push(recog);for(let i=0;i<recog.emits.length;i++){gestures[recog.emits[i]]=recog}}function _findRecognizerByEvent(evName){for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];for(let j=0,n;j<r.emits.length;j++){n=r.emits[j];if(n===evName){return r}}}return null}function setTouchAction(node,value){if(HAS_NATIVE_TA&&node instanceof HTMLElement){microTask.run(()=>{node.style.touchAction=value})}node[TOUCH_ACTION]=value}function _fire(target,type,detail){let ev=new Event(type,{bubbles:!0,cancelable:!0,composed:!0});ev.detail=detail;wrap$1(target).dispatchEvent(ev);if(ev.defaultPrevented){let preventer=detail.preventer||detail.sourceEvent;if(preventer&&preventer.preventDefault){preventer.preventDefault()}}}function prevent(evName){let recognizer=_findRecognizerByEvent(evName);if(recognizer.info){recognizer.info.prevent=!0}}function resetMouseCanceller(){if(POINTERSTATE.mouse.mouseIgnoreJob){POINTERSTATE.mouse.mouseIgnoreJob.flush()}}register$1({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){untrackDocument(this.info)},mousedown:function(e){if(!hasLeftMouseButton(e)){return}let t=_findOriginalTarget(e),self=this,movefn=function movefn(e){if(!hasLeftMouseButton(e)){downupFire("up",t,e);untrackDocument(self.info)}},upfn=function upfn(e){if(hasLeftMouseButton(e)){downupFire("up",t,e)}untrackDocument(self.info)};trackDocument(this.info,movefn,upfn);downupFire("down",t,e)},touchstart:function(e){downupFire("down",_findOriginalTarget(e),e.changedTouches[0],e)},touchend:function(e){downupFire("up",_findOriginalTarget(e),e.changedTouches[0],e)}});function downupFire(type,target,event,preventer){if(!target){return}_fire(target,type,{x:event.clientX,y:event.clientY,sourceEvent:event,preventer:preventer,prevent:function(e){return prevent(e)}})}register$1({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(move){if(this.moves.length>TRACK_LENGTH){this.moves.shift()}this.moves.push(move)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start";this.info.started=!1;this.info.moves=[];this.info.x=0;this.info.y=0;this.info.prevent=!1;untrackDocument(this.info)},mousedown:function(e){if(!hasLeftMouseButton(e)){return}let t=_findOriginalTarget(e),self=this,movefn=function movefn(e){let x=e.clientX,y=e.clientY;if(trackHasMovedEnough(self.info,x,y)){self.info.state=self.info.started?"mouseup"===e.type?"end":"track":"start";if("start"===self.info.state){prevent("tap")}self.info.addMove({x:x,y:y});if(!hasLeftMouseButton(e)){self.info.state="end";untrackDocument(self.info)}if(t){trackFire(self.info,t,e)}self.info.started=!0}},upfn=function upfn(e){if(self.info.started){movefn(e)}untrackDocument(self.info)};trackDocument(this.info,movefn,upfn);this.info.x=e.clientX;this.info.y=e.clientY},touchstart:function(e){let ct=e.changedTouches[0];this.info.x=ct.clientX;this.info.y=ct.clientY},touchmove:function(e){let t=_findOriginalTarget(e),ct=e.changedTouches[0],x=ct.clientX,y=ct.clientY;if(trackHasMovedEnough(this.info,x,y)){if("start"===this.info.state){prevent("tap")}this.info.addMove({x:x,y:y});trackFire(this.info,t,ct);this.info.state="track";this.info.started=!0}},touchend:function(e){let t=_findOriginalTarget(e),ct=e.changedTouches[0];if(this.info.started){this.info.state="end";this.info.addMove({x:ct.clientX,y:ct.clientY});trackFire(this.info,t,ct)}}});function trackHasMovedEnough(info,x,y){if(info.prevent){return!1}if(info.started){return!0}let dx=_Mathabs(info.x-x),dy=_Mathabs(info.y-y);return dx>=TRACK_DISTANCE||dy>=TRACK_DISTANCE}function trackFire(info,target,touch){if(!target){return}let secondlast=info.moves[info.moves.length-2],lastmove=info.moves[info.moves.length-1],dx=lastmove.x-info.x,dy=lastmove.y-info.y,ddx,ddy=0;if(secondlast){ddx=lastmove.x-secondlast.x;ddy=lastmove.y-secondlast.y}_fire(target,"track",{state:info.state,x:touch.clientX,y:touch.clientY,dx:dx,dy:dy,ddx:ddx,ddy:ddy,sourceEvent:touch,hover:function(){return deepTargetFind(touch.clientX,touch.clientY)}})}register$1({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=!1},mousedown:function(e){if(hasLeftMouseButton(e)){this.info.x=e.clientX;this.info.y=e.clientY}},click:function(e){if(hasLeftMouseButton(e)){trackForward(this.info,e)}},touchstart:function(e){const touch=e.changedTouches[0];this.info.x=touch.clientX;this.info.y=touch.clientY},touchend:function(e){trackForward(this.info,e.changedTouches[0],e)}});function trackForward(info,e,preventer){let dx=_Mathabs(e.clientX-info.x),dy=_Mathabs(e.clientY-info.y),t=_findOriginalTarget(preventer||e);if(!t||canBeDisabled[t.localName]&&t.hasAttribute("disabled")){return}if(isNaN(dx)||isNaN(dy)||dx<=TAP_DISTANCE&&dy<=TAP_DISTANCE||isSyntheticClick(e)){if(!info.prevent){_fire(t,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:preventer})}}}const findOriginalTarget=_findOriginalTarget;_exports.findOriginalTarget=findOriginalTarget;const add=addListener;_exports.add=add;const remove=removeListener;_exports.remove=remove;var gestures$1={gestures:gestures,recognizers:recognizers,deepTargetFind:deepTargetFind,addListener:addListener,removeListener:removeListener,register:register$1,setTouchAction:setTouchAction,prevent:prevent,resetMouseCanceller:resetMouseCanceller,findOriginalTarget:findOriginalTarget,add:add,remove:remove};_exports.$gestures=gestures$1;const GestureEventListeners=dedupingMixin(superClass=>{class GestureEventListeners extends superClass{_addEventListenerToNode(node,eventName,handler){if(!addListener(node,eventName,handler)){super._addEventListenerToNode(node,eventName,handler)}}_removeEventListenerFromNode(node,eventName,handler){if(!removeListener(node,eventName,handler)){super._removeEventListenerFromNode(node,eventName,handler)}}}return GestureEventListeners});_exports.GestureEventListeners=GestureEventListeners;var gestureEventListeners={GestureEventListeners:GestureEventListeners};_exports.$gestureEventListeners=gestureEventListeners;const HOST_DIR=/:host\(:dir\((ltr|rtl)\)\)/g,HOST_DIR_REPLACMENT=":host([dir=\"$1\"])",EL_DIR=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,EL_DIR_REPLACMENT=":host([dir=\"$2\"]) $1",DIR_CHECK=/:dir\((?:ltr|rtl)\)/,SHIM_SHADOW=!!(window.ShadyDOM&&window.ShadyDOM.inUse),DIR_INSTANCES=[];let observer=null,DOCUMENT_DIR="";function getRTL(){DOCUMENT_DIR=document.documentElement.getAttribute("dir")}function setRTL(instance){if(!instance.__autoDirOptOut){const el=instance;el.setAttribute("dir",DOCUMENT_DIR)}}function updateDirection(){getRTL();DOCUMENT_DIR=document.documentElement.getAttribute("dir");for(let i=0;i<DIR_INSTANCES.length;i++){setRTL(DIR_INSTANCES[i])}}function takeRecords(){if(observer&&observer.takeRecords().length){updateDirection()}}const DirMixin=dedupingMixin(base=>{if(!SHIM_SHADOW){if(!observer){getRTL();observer=new MutationObserver(updateDirection);observer.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}}const elementBase=PropertyAccessors(base);class Dir extends elementBase{static _processStyleText(cssText,baseURI){cssText=super._processStyleText(cssText,baseURI);if(!SHIM_SHADOW&&DIR_CHECK.test(cssText)){cssText=this._replaceDirInCssText(cssText);this.__activateDir=!0}return cssText}static _replaceDirInCssText(text){let replacedText=text;replacedText=replacedText.replace(HOST_DIR,HOST_DIR_REPLACMENT);replacedText=replacedText.replace(EL_DIR,EL_DIR_REPLACMENT);return replacedText}constructor(){super();this.__autoDirOptOut=!1}ready(){super.ready();this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){if(elementBase.prototype.connectedCallback){super.connectedCallback()}if(this.constructor.__activateDir){takeRecords();DIR_INSTANCES.push(this);setRTL(this)}}disconnectedCallback(){if(elementBase.prototype.disconnectedCallback){super.disconnectedCallback()}if(this.constructor.__activateDir){const idx=DIR_INSTANCES.indexOf(this);if(-1<idx){DIR_INSTANCES.splice(idx,1)}}}}Dir.__activateDir=!1;return Dir});_exports.DirMixin=DirMixin;var dirMixin={DirMixin:DirMixin};_exports.$dirMixin=dirMixin;let scheduled=!1,beforeRenderQueue=[],afterRenderQueue=[];function schedule(){scheduled=!0;requestAnimationFrame(function(){scheduled=!1;flushQueue(beforeRenderQueue);setTimeout(function(){runQueue(afterRenderQueue)})})}function flushQueue(queue){while(queue.length){callMethod(queue.shift())}}function runQueue(queue){for(let i=0,l=queue.length;i<l;i++){callMethod(queue.shift())}}function callMethod(info){const context=info[0],callback=info[1],args=info[2];try{callback.apply(context,args)}catch(e){setTimeout(()=>{throw e})}}function flush(){while(beforeRenderQueue.length||afterRenderQueue.length){flushQueue(beforeRenderQueue);flushQueue(afterRenderQueue)}scheduled=!1}function beforeNextRender(context,callback,args){if(!scheduled){schedule()}beforeRenderQueue.push([context,callback,args])}function afterNextRender(context,callback,args){if(!scheduled){schedule()}afterRenderQueue.push([context,callback,args])}var renderStatus={flush:flush,beforeNextRender:beforeNextRender,afterNextRender:afterNextRender};_exports.$renderStatus=renderStatus;function resolve(){document.body.removeAttribute("unresolved")}if("interactive"===document.readyState||"complete"===document.readyState){resolve()}else{window.addEventListener("DOMContentLoaded",resolve)}function newSplice(index,removed,addedCount){return{index:index,removed:removed,addedCount:addedCount}}const EDIT_LEAVE=0,EDIT_UPDATE=1,EDIT_ADD=2,EDIT_DELETE=3;function calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd){let rowCount=oldEnd-oldStart+1,columnCount=currentEnd-currentStart+1,distances=Array(rowCount);for(let i=0;i<rowCount;i++){distances[i]=Array(columnCount);distances[i][0]=i}for(let j=0;j<columnCount;j++)distances[0][j]=j;for(let i=1;i<rowCount;i++){for(let j=1;j<columnCount;j++){if(equals(current[currentStart+j-1],old[oldStart+i-1]))distances[i][j]=distances[i-1][j-1];else{let north=distances[i-1][j]+1,west=distances[i][j-1]+1;distances[i][j]=north<west?north:west}}}return distances}function spliceOperationsFromEditDistances(distances){let i=distances.length-1,j=distances[0].length-1,current=distances[i][j],edits=[];while(0<i||0<j){if(0==i){edits.push(EDIT_ADD);j--;continue}if(0==j){edits.push(EDIT_DELETE);i--;continue}let northWest=distances[i-1][j-1],west=distances[i-1][j],north=distances[i][j-1],min;if(west<north)min=west<northWest?west:northWest;else min=north<northWest?north:northWest;if(min==northWest){if(northWest==current){edits.push(EDIT_LEAVE)}else{edits.push(EDIT_UPDATE);current=northWest}i--;j--}else if(min==west){edits.push(EDIT_DELETE);i--;current=west}else{edits.push(EDIT_ADD);j--;current=north}}edits.reverse();return edits}function calcSplices(current,currentStart,currentEnd,old,oldStart,oldEnd){let prefixCount=0,suffixCount=0,splice,minLength=_Mathmin(currentEnd-currentStart,oldEnd-oldStart);if(0==currentStart&&0==oldStart)prefixCount=sharedPrefix(current,old,minLength);if(currentEnd==current.length&&oldEnd==old.length)suffixCount=sharedSuffix(current,old,minLength-prefixCount);currentStart+=prefixCount;oldStart+=prefixCount;currentEnd-=suffixCount;oldEnd-=suffixCount;if(0==currentEnd-currentStart&&0==oldEnd-oldStart)return[];if(currentStart==currentEnd){splice=newSplice(currentStart,[],0);while(oldStart<oldEnd)splice.removed.push(old[oldStart++]);return[splice]}else if(oldStart==oldEnd)return[newSplice(currentStart,[],currentEnd-currentStart)];let ops=spliceOperationsFromEditDistances(calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd));splice=void 0;let splices=[],index=currentStart,oldIndex=oldStart;for(let i=0;i<ops.length;i++){switch(ops[i]){case EDIT_LEAVE:if(splice){splices.push(splice);splice=void 0}index++;oldIndex++;break;case EDIT_UPDATE:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;splice.removed.push(old[oldIndex]);oldIndex++;break;case EDIT_ADD:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;break;case EDIT_DELETE:if(!splice)splice=newSplice(index,[],0);splice.removed.push(old[oldIndex]);oldIndex++;break;}}if(splice){splices.push(splice)}return splices}function sharedPrefix(current,old,searchLength){for(let i=0;i<searchLength;i++)if(!equals(current[i],old[i]))return i;return searchLength}function sharedSuffix(current,old,searchLength){let index1=current.length,index2=old.length,count=0;while(count<searchLength&&equals(current[--index1],old[--index2]))count++;return count}function calculateSplices(current,previous){return calcSplices(current,0,current.length,previous,0,previous.length)}function equals(currentValue,previousValue){return currentValue===previousValue}var arraySplice={calculateSplices:calculateSplices};_exports.$arraySplice=arraySplice;function isSlot(node){return"slot"===node.localName}let FlattenedNodesObserver=class{static getFlattenedNodes(node){const wrapped=wrap$1(node);if(isSlot(node)){node=node;return wrapped.assignedNodes({flatten:!0})}else{return Array.from(wrapped.childNodes).map(node=>{if(isSlot(node)){node=node;return wrap$1(node).assignedNodes({flatten:!0})}else{return[node]}}).reduce((a,b)=>a.concat(b),[])}}constructor(target,callback){this._shadyChildrenObserver=null;this._nativeChildrenObserver=null;this._connected=!1;this._target=target;this.callback=callback;this._effectiveNodes=[];this._observer=null;this._scheduled=!1;this._boundSchedule=()=>{this._schedule()};this.connect();this._schedule()}connect(){if(isSlot(this._target)){this._listenSlots([this._target])}else if(wrap$1(this._target).children){this._listenSlots(wrap$1(this._target).children);if(window.ShadyDOM){this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,mutations=>{this._processMutations(mutations)})}else{this._nativeChildrenObserver=new MutationObserver(mutations=>{this._processMutations(mutations)});this._nativeChildrenObserver.observe(this._target,{childList:!0})}}this._connected=!0}disconnect(){if(isSlot(this._target)){this._unlistenSlots([this._target])}else if(wrap$1(this._target).children){this._unlistenSlots(wrap$1(this._target).children);if(window.ShadyDOM&&this._shadyChildrenObserver){ShadyDOM.unobserveChildren(this._shadyChildrenObserver);this._shadyChildrenObserver=null}else if(this._nativeChildrenObserver){this._nativeChildrenObserver.disconnect();this._nativeChildrenObserver=null}}this._connected=!1}_schedule(){if(!this._scheduled){this._scheduled=!0;microTask.run(()=>this.flush())}}_processMutations(mutations){this._processSlotMutations(mutations);this.flush()}_processSlotMutations(mutations){if(mutations){for(let i=0,mutation;i<mutations.length;i++){mutation=mutations[i];if(mutation.addedNodes){this._listenSlots(mutation.addedNodes)}if(mutation.removedNodes){this._unlistenSlots(mutation.removedNodes)}}}}flush(){if(!this._connected){return!1}if(window.ShadyDOM){ShadyDOM.flush()}if(this._nativeChildrenObserver){this._processSlotMutations(this._nativeChildrenObserver.takeRecords())}else if(this._shadyChildrenObserver){this._processSlotMutations(this._shadyChildrenObserver.takeRecords())}this._scheduled=!1;let info={target:this._target,addedNodes:[],removedNodes:[]},newNodes=this.constructor.getFlattenedNodes(this._target),splices=calculateSplices(newNodes,this._effectiveNodes);for(let i=0,s;i<splices.length&&(s=splices[i]);i++){for(let j=0,n;j<s.removed.length&&(n=s.removed[j]);j++){info.removedNodes.push(n)}}for(let i=0,s;i<splices.length&&(s=splices[i]);i++){for(let j=s.index;j<s.index+s.addedCount;j++){info.addedNodes.push(newNodes[j])}}this._effectiveNodes=newNodes;let didFlush=!1;if(info.addedNodes.length||info.removedNodes.length){didFlush=!0;this.callback.call(this._target,info)}return didFlush}_listenSlots(nodeList){for(let i=0,n;i<nodeList.length;i++){n=nodeList[i];if(isSlot(n)){n.addEventListener("slotchange",this._boundSchedule)}}}_unlistenSlots(nodeList){for(let i=0,n;i<nodeList.length;i++){n=nodeList[i];if(isSlot(n)){n.removeEventListener("slotchange",this._boundSchedule)}}}};_exports.FlattenedNodesObserver=FlattenedNodesObserver;var flattenedNodesObserver={FlattenedNodesObserver:FlattenedNodesObserver};_exports.$flattenedNodesObserver=flattenedNodesObserver;const flush$1=function(){let shadyDOM,debouncers;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush()}debouncers=flushDebouncers()}while(shadyDOM||debouncers)};_exports.flush=_exports.flush$1=flush$1;var flush$2={flush:flush$1,enqueueDebouncer:enqueueDebouncer};_exports.$flush=flush$2;const p=Element.prototype,normalizedMatchesSelector=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,matchesSelector=function(node,selector){return normalizedMatchesSelector.call(node,selector)};_exports.matchesSelector=matchesSelector;class DomApiNative{constructor(node){this.node=node}observeNodes(callback){return new FlattenedNodesObserver(this.node,callback)}unobserveNodes(observerHandle){observerHandle.disconnect()}notifyObserver(){}deepContains(node){if(wrap$1(this.node).contains(node)){return!0}let n=node,doc=node.ownerDocument;while(n&&n!==doc&&n!==this.node){n=wrap$1(n).parentNode||wrap$1(n).host}return n===this.node}getOwnerRoot(){return wrap$1(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?wrap$1(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let ip$=[],n=wrap$1(this.node).assignedSlot;while(n){ip$.push(n);n=wrap$1(n).assignedSlot}return ip$}importNode(node,deep){let doc=this.node instanceof Document?this.node:this.node.ownerDocument;return wrap$1(doc).importNode(node,deep)}getEffectiveChildNodes(){return FlattenedNodesObserver.getFlattenedNodes(this.node)}queryDistributedElements(selector){let c$=this.getEffectiveChildNodes(),list=[];for(let i=0,l=c$.length,c;i<l&&(c=c$[i]);i++){if(c.nodeType===Node.ELEMENT_NODE&&matchesSelector(c,selector)){list.push(c)}}return list}get activeElement(){let node=this.node;return node._activeElement!==void 0?node._activeElement:node.activeElement}}function forwardMethods(proto,methods){for(let i=0,method;i<methods.length;i++){method=methods[i];proto[method]=function(){return this.node[method].apply(this.node,arguments)}}}function forwardReadOnlyProperties(proto,properties){for(let i=0,name;i<properties.length;i++){name=properties[i];Object.defineProperty(proto,name,{get:function(){const domApi=this;return domApi.node[name]},configurable:!0})}}function forwardProperties(proto,properties){for(let i=0,name;i<properties.length;i++){name=properties[i];Object.defineProperty(proto,name,{get:function(){return this.node[name]},set:function(value){this.node[name]=value},configurable:!0})}}class EventApi{constructor(event){this.event=event}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}_exports.EventApi=EventApi;DomApiNative.prototype.cloneNode;DomApiNative.prototype.appendChild;DomApiNative.prototype.insertBefore;DomApiNative.prototype.removeChild;DomApiNative.prototype.replaceChild;DomApiNative.prototype.setAttribute;DomApiNative.prototype.removeAttribute;DomApiNative.prototype.querySelector;DomApiNative.prototype.querySelectorAll;DomApiNative.prototype.parentNode;DomApiNative.prototype.firstChild;DomApiNative.prototype.lastChild;DomApiNative.prototype.nextSibling;DomApiNative.prototype.previousSibling;DomApiNative.prototype.firstElementChild;DomApiNative.prototype.lastElementChild;DomApiNative.prototype.nextElementSibling;DomApiNative.prototype.previousElementSibling;DomApiNative.prototype.childNodes;DomApiNative.prototype.children;DomApiNative.prototype.classList;DomApiNative.prototype.textContent;DomApiNative.prototype.innerHTML;let DomApiImpl=DomApiNative;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class Wrapper extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(DomApiNative.prototype).forEach(prop=>{if("activeElement"!=prop){Wrapper.prototype[prop]=DomApiNative.prototype[prop]}});forwardReadOnlyProperties(Wrapper.prototype,["classList"]);DomApiImpl=Wrapper;Object.defineProperties(EventApi.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else{forwardMethods(DomApiNative.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]);forwardReadOnlyProperties(DomApiNative.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]);forwardProperties(DomApiNative.prototype,["textContent","innerHTML"])}const DomApi=DomApiImpl;_exports.DomApi=DomApi;const dom=function(obj){obj=obj||document;if(obj instanceof DomApiImpl){return obj}if(obj instanceof EventApi){return obj}let helper=obj.__domApi;if(!helper){if(obj instanceof Event){helper=new EventApi(obj)}else{helper=new DomApiImpl(obj)}obj.__domApi=helper}return helper};_exports.dom=dom;var polymer_dom={matchesSelector:matchesSelector,EventApi:EventApi,DomApi:DomApi,dom:dom,flush:flush$1,addDebouncer:enqueueDebouncer};_exports.$polymerDom=polymer_dom;const bundledImportMeta$1=babelHelpers.objectSpread({},meta,{url:new URL("../../node_assets/%40polymer/polymer/lib/legacy/legacy-element-mixin.js",meta.url).href});let styleInterface=window.ShadyCSS;const LegacyElementMixin=dedupingMixin(base=>{const legacyElementBase=DirMixin(GestureEventListeners(ElementMixin(base))),DIRECTION_MAP={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class LegacyElement extends legacyElementBase{constructor(){super();this.isAttached;this.__boundListeners;this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback();this.isAttached=!0;this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback();this.isAttached=!1;this.detached()}detached(){}attributeChangedCallback(name,old,value,namespace){if(old!==value){super.attributeChangedCallback(name,old,value,namespace);this.attributeChanged(name,old,value)}}attributeChanged(name,old,value){}_initializeProperties(){let proto=Object.getPrototypeOf(this);if(!proto.hasOwnProperty("__hasRegisterFinished")){this._registered();proto.__hasRegisterFinished=!0}super._initializeProperties();this.root=this;this.created();this._applyListeners()}_registered(){}ready(){this._ensureAttributes();super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(value){return this._serializeValue(value)}deserialize(value,type){return this._deserializeValue(value,type)}reflectPropertyToAttribute(property,attribute,value){this._propertyToAttribute(property,attribute,value)}serializeValueToAttribute(value,attribute,node){this._valueToNodeAttribute(node||this,value,attribute)}extend(prototype,api){if(!(prototype&&api)){return prototype||api}let n$=Object.getOwnPropertyNames(api);for(let i=0,n,pd;i<n$.length&&(n=n$[i]);i++){pd=Object.getOwnPropertyDescriptor(api,n);if(pd){Object.defineProperty(prototype,n,pd)}}return prototype}mixin(target,source){for(let i in source){target[i]=source[i]}return target}chainObject(object,prototype){if(object&&prototype&&object!==prototype){object.__proto__=prototype}return object}instanceTemplate(template){let content=this.constructor._contentForTemplate(template),dom=document.importNode(content,!0);return dom}fire(type,detail,options){options=options||{};detail=null===detail||detail===void 0?{}:detail;let event=new Event(type,{bubbles:options.bubbles===void 0?!0:options.bubbles,cancelable:!!options.cancelable,composed:options.composed===void 0?!0:options.composed});event.detail=detail;let node=options.node||this;wrap$1(node).dispatchEvent(event);return event}listen(node,eventName,methodName){node=node||this;let hbl=this.__boundListeners||(this.__boundListeners=new WeakMap),bl=hbl.get(node);if(!bl){bl={};hbl.set(node,bl)}let key=eventName+methodName;if(!bl[key]){bl[key]=this._addMethodEventListenerToNode(node,eventName,methodName,this)}}unlisten(node,eventName,methodName){node=node||this;let bl=this.__boundListeners&&this.__boundListeners.get(node),key=eventName+methodName,handler=bl&&bl[key];if(handler){this._removeEventListenerFromNode(node,eventName,handler);bl[key]=null}}setScrollDirection(direction,node){setTouchAction(node||this,DIRECTION_MAP[direction]||"auto")}$$(slctr){return this.root.querySelector(slctr)}get domHost(){let root=wrap$1(this).getRootNode();return root instanceof DocumentFragment?root.host:root}distributeContent(){const thisEl=this,domApi=dom(thisEl);if(window.ShadyDOM&&domApi.shadowRoot){ShadyDOM.flush()}}getEffectiveChildNodes(){const thisEl=this,domApi=dom(thisEl);return domApi.getEffectiveChildNodes()}queryDistributedElements(selector){const thisEl=this,domApi=dom(thisEl);return domApi.queryDistributedElements(selector)}getEffectiveChildren(){let list=this.getEffectiveChildNodes();return list.filter(function(n){return n.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let cn=this.getEffectiveChildNodes(),tc=[];for(let i=0,c;c=cn[i];i++){if(c.nodeType!==Node.COMMENT_NODE){tc.push(c.textContent)}}return tc.join("")}queryEffectiveChildren(selector){let e$=this.queryDistributedElements(selector);return e$&&e$[0]}queryAllEffectiveChildren(selector){return this.queryDistributedElements(selector)}getContentChildNodes(slctr){let content=this.root.querySelector(slctr||"slot");return content?dom(content).getDistributedNodes():[]}getContentChildren(slctr){let children=this.getContentChildNodes(slctr).filter(function(n){return n.nodeType===Node.ELEMENT_NODE});return children}isLightDescendant(node){const thisNode=this;return thisNode!==node&&wrap$1(thisNode).contains(node)&&wrap$1(thisNode).getRootNode()===wrap$1(node).getRootNode()}isLocalDescendant(node){return this.root===wrap$1(node).getRootNode()}scopeSubtree(container,shouldObserve){}getComputedStyleValue(property){return styleInterface.getComputedStyleValue(this,property)}debounce(jobName,callback,wait){this._debouncers=this._debouncers||{};return this._debouncers[jobName]=Debouncer.debounce(this._debouncers[jobName],0<wait?timeOut.after(wait):microTask,callback.bind(this))}isDebouncerActive(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];return!!(debouncer&&debouncer.isActive())}flushDebouncer(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];if(debouncer){debouncer.flush()}}cancelDebouncer(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];if(debouncer){debouncer.cancel()}}async(callback,waitTime){return 0<waitTime?timeOut.run(callback.bind(this),waitTime):~microTask.run(callback.bind(this))}cancelAsync(handle){0>handle?microTask.cancel(~handle):timeOut.cancel(handle)}create(tag,props){let elt=document.createElement(tag);if(props){if(elt.setProperties){elt.setProperties(props)}else{for(let n in props){elt[n]=props[n]}}}return elt}elementMatches(selector,node){return matchesSelector(node||this,selector)}toggleAttribute(name,bool){let node=this;if(3===arguments.length){node=arguments[2]}if(1==arguments.length){bool=!node.hasAttribute(name)}if(bool){wrap$1(node).setAttribute(name,"");return!0}else{wrap$1(node).removeAttribute(name);return!1}}toggleClass(name,bool,node){node=node||this;if(1==arguments.length){bool=!node.classList.contains(name)}if(bool){node.classList.add(name)}else{node.classList.remove(name)}}transform(transformText,node){node=node||this;node.style.webkitTransform=transformText;node.style.transform=transformText}translate3d(x,y,z,node){node=node||this;this.transform("translate3d("+x+","+y+","+z+")",node)}arrayDelete(arrayOrPath,item){let index;if(Array.isArray(arrayOrPath)){index=arrayOrPath.indexOf(item);if(0<=index){return arrayOrPath.splice(index,1)}}else{let arr=get(this,arrayOrPath);index=arr.indexOf(item);if(0<=index){return this.splice(arrayOrPath,index,1)}}return null}_logger(level,args){if(Array.isArray(args)&&1===args.length&&Array.isArray(args[0])){args=args[0]}switch(level){case"log":case"warn":case"error":console[level](...args);}}_log(...args){this._logger("log",args)}_warn(...args){this._logger("warn",args)}_error(...args){this._logger("error",args)}_logf(methodName,...args){return["[%s::%s]",this.is,methodName,...args]}}LegacyElement.prototype.is="";return LegacyElement});_exports.LegacyElementMixin=LegacyElementMixin;var legacyElementMixin={LegacyElementMixin:LegacyElementMixin};_exports.$legacyElementMixin=legacyElementMixin;const lifecycleProps={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},excludeOnInfo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},excludeOnBehaviors=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},excludeOnInfo);function copyProperties(source,target,excludeProps){const noAccessors=source._noAccessors,propertyNames=Object.getOwnPropertyNames(source);for(let i=0,p;i<propertyNames.length;i++){p=propertyNames[i];if(p in excludeProps){continue}if(noAccessors){target[p]=source[p]}else{let pd=Object.getOwnPropertyDescriptor(source,p);if(pd){pd.configurable=!0;Object.defineProperty(target,p,pd)}}}}function mixinBehaviors(behaviors,klass){return GenerateClassFromInfo({},LegacyElementMixin(klass),behaviors)}function applyBehaviors(proto,behaviors,lifecycle){for(let i=0;i<behaviors.length;i++){applyInfo(proto,behaviors[i],lifecycle,excludeOnBehaviors)}}function applyInfo(proto,info,lifecycle,excludeProps){copyProperties(info,proto,excludeProps);for(let p in lifecycleProps){if(info[p]){lifecycle[p]=lifecycle[p]||[];lifecycle[p].push(info[p])}}}function flattenBehaviors(behaviors,list,exclude){list=list||[];for(let i=behaviors.length-1,b;0<=i;i--){b=behaviors[i];if(b){if(Array.isArray(b)){flattenBehaviors(b,list)}else{if(0>list.indexOf(b)&&(!exclude||0>exclude.indexOf(b))){list.unshift(b)}}}else{console.warn("behavior is null, check for missing or 404 import")}}return list}function mergeProperties(target,source){for(const p in source){const targetInfo=target[p],sourceInfo=source[p];if(!("value"in sourceInfo)&&targetInfo&&"value"in targetInfo){target[p]=Object.assign({value:targetInfo.value},sourceInfo)}else{target[p]=sourceInfo}}}function GenerateClassFromInfo(info,Base,behaviors){let behaviorList;const lifecycle={};class PolymerGenerated extends Base{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){super._finalizeClass()}else{if(behaviorList){for(let i=0,b;i<behaviorList.length;i++){b=behaviorList[i];if(b.properties){this.createProperties(b.properties)}if(b.observers){this.createObservers(b.observers,b.properties)}}}if(info.properties){this.createProperties(info.properties)}if(info.observers){this.createObservers(info.observers,info.properties)}this._prepareTemplate()}}static get properties(){const properties={};if(behaviorList){for(let i=0;i<behaviorList.length;i++){mergeProperties(properties,behaviorList[i].properties)}}mergeProperties(properties,info.properties);return properties}static get observers(){let observers=[];if(behaviorList){for(let i=0,b;i<behaviorList.length;i++){b=behaviorList[i];if(b.observers){observers=observers.concat(b.observers)}}}if(info.observers){observers=observers.concat(info.observers)}return observers}created(){super.created();const list=lifecycle.created;if(list){for(let i=0;i<list.length;i++){list[i].call(this)}}}_registered(){const generatedProto=PolymerGenerated.prototype;if(!generatedProto.hasOwnProperty("__hasRegisterFinished")){generatedProto.__hasRegisterFinished=!0;super._registered();if(legacyOptimizations){copyPropertiesToProto(generatedProto)}const proto=Object.getPrototypeOf(this);let list=lifecycle.beforeRegister;if(list){for(let i=0;i<list.length;i++){list[i].call(proto)}}list=lifecycle.registered;if(list){for(let i=0;i<list.length;i++){list[i].call(proto)}}}}_applyListeners(){super._applyListeners();const list=lifecycle.listeners;if(list){for(let i=0;i<list.length;i++){const listeners=list[i];if(listeners){for(let l in listeners){this._addMethodEventListenerToNode(this,l,listeners[l])}}}}}_ensureAttributes(){const list=lifecycle.hostAttributes;if(list){for(let i=list.length-1;0<=i;i--){const hostAttributes=list[i];for(let a in hostAttributes){this._ensureAttribute(a,hostAttributes[a])}}}super._ensureAttributes()}ready(){super.ready();let list=lifecycle.ready;if(list){for(let i=0;i<list.length;i++){list[i].call(this)}}}attached(){super.attached();let list=lifecycle.attached;if(list){for(let i=0;i<list.length;i++){list[i].call(this)}}}detached(){super.detached();let list=lifecycle.detached;if(list){for(let i=0;i<list.length;i++){list[i].call(this)}}}attributeChanged(name,old,value){super.attributeChanged();let list=lifecycle.attributeChanged;if(list){for(let i=0;i<list.length;i++){list[i].call(this,name,old,value)}}}}if(behaviors){if(!Array.isArray(behaviors)){behaviors=[behaviors]}let superBehaviors=Base.prototype.behaviors;behaviorList=flattenBehaviors(behaviors,null,superBehaviors);PolymerGenerated.prototype.behaviors=superBehaviors?superBehaviors.concat(behaviors):behaviorList}const copyPropertiesToProto=proto=>{if(behaviorList){applyBehaviors(proto,behaviorList,lifecycle)}applyInfo(proto,info,lifecycle,excludeOnInfo)};if(!legacyOptimizations){copyPropertiesToProto(PolymerGenerated.prototype)}PolymerGenerated.generatedFrom=info;return PolymerGenerated}const Class=function(info,mixin){if(!info){console.warn("Polymer.Class requires `info` argument")}let klass=mixin?mixin(LegacyElementMixin(HTMLElement)):LegacyElementMixin(HTMLElement);klass=GenerateClassFromInfo(info,klass,info.behaviors);klass.is=klass.prototype.is=info.is;return klass};_exports.Class=Class;var _class={mixinBehaviors:mixinBehaviors,Class:Class};_exports.$class=_class;const Polymer=function(info){let klass;if("function"===typeof info){klass=info}else{klass=Polymer.Class(info)}customElements.define(klass.is,klass);return klass};_exports.Polymer$1=_exports.Polymer=Polymer;Polymer.Class=Class;var polymerFn={Polymer:Polymer};_exports.$polymerFn=polymerFn;function mutablePropertyChange(inst,property,value,old,mutableData){let isObject;if(mutableData){isObject="object"===typeof value&&null!==value;if(isObject){old=inst.__dataTemp[property]}}let shouldChange=old!==value&&(old===old||value===value);if(isObject&&shouldChange){inst.__dataTemp[property]=value}return shouldChange}const MutableData=dedupingMixin(superClass=>{class MutableData extends superClass{_shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,!0)}}return MutableData});_exports.MutableData=MutableData;const OptionalMutableData=dedupingMixin(superClass=>{class OptionalMutableData extends superClass{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,this.mutableData)}}return OptionalMutableData});_exports.OptionalMutableData=OptionalMutableData;MutableData._mutablePropertyChange=mutablePropertyChange;var mutableData={MutableData:MutableData,OptionalMutableData:OptionalMutableData};_exports.$mutableData=mutableData;let newInstance=null;function HTMLTemplateElementExtension(){return newInstance}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:!0}});const DataTemplate=PropertyEffects(HTMLTemplateElementExtension),MutableDataTemplate=MutableData(DataTemplate);function upgradeTemplate(template,constructor){newInstance=template;Object.setPrototypeOf(template,constructor.prototype);new constructor;newInstance=null}const templateInstanceBase=PropertyEffects(class{});class TemplateInstanceBase extends templateInstanceBase{constructor(props){super();this._configureProperties(props);this.root=this._stampTemplate(this.__dataHost);let children=this.children=[];for(let n=this.root.firstChild;n;n=n.nextSibling){children.push(n);n.__templatizeInstance=this}if(this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__){this._showHideChildren(!0)}let options=this.__templatizeOptions;if(props&&options.instanceProps||!options.instanceProps){this._enableProperties()}}_configureProperties(props){let options=this.__templatizeOptions;if(options.forwardHostProp){for(let hprop in this.__hostProps){this._setPendingProperty(hprop,this.__dataHost["_host_"+hprop])}}for(let iprop in props){this._setPendingProperty(iprop,props[iprop])}}forwardHostProp(prop,value){if(this._setPendingPropertyOrPath(prop,value,!1,!0)){this.__dataHost._enqueueClient(this)}}_addEventListenerToNode(node,eventName,handler){if(this._methodHost&&this.__templatizeOptions.parentModel){this._methodHost._addEventListenerToNode(node,eventName,e=>{e.model=this;handler(e)})}else{let templateHost=this.__dataHost.__dataHost;if(templateHost){templateHost._addEventListenerToNode(node,eventName,handler)}}}_showHideChildren(hide){let c=this.children;for(let i=0,n;i<c.length;i++){n=c[i];if(!!hide!=!!n.__hideTemplateChildren__){if(n.nodeType===Node.TEXT_NODE){if(hide){n.__polymerTextContent__=n.textContent;n.textContent=""}else{n.textContent=n.__polymerTextContent__}}else if("slot"===n.localName){if(hide){n.__polymerReplaced__=document.createComment("hidden-slot");wrap$1(wrap$1(n).parentNode).replaceChild(n.__polymerReplaced__,n)}else{const replace=n.__polymerReplaced__;if(replace){wrap$1(wrap$1(replace).parentNode).replaceChild(n,replace)}}}else if(n.style){if(hide){n.__polymerDisplay__=n.style.display;n.style.display="none"}else{n.style.display=n.__polymerDisplay__}}}n.__hideTemplateChildren__=hide;if(n._showHideChildren){n._showHideChildren(hide)}}}_setUnmanagedPropertyToNode(node,prop,value){if(node.__hideTemplateChildren__&&node.nodeType==Node.TEXT_NODE&&"textContent"==prop){node.__polymerTextContent__=value}else{super._setUnmanagedPropertyToNode(node,prop,value)}}get parentModel(){let model=this.__parentModel;if(!model){let options;model=this;do{model=model.__dataHost.__dataHost}while((options=model.__templatizeOptions)&&!options.parentModel);this.__parentModel=model}return model}dispatchEvent(event){return!0}}_exports.TemplateInstanceBase=TemplateInstanceBase;TemplateInstanceBase.prototype.__dataHost;TemplateInstanceBase.prototype.__templatizeOptions;TemplateInstanceBase.prototype._methodHost;TemplateInstanceBase.prototype.__templatizeOwner;TemplateInstanceBase.prototype.__hostProps;const MutableTemplateInstanceBase=MutableData(TemplateInstanceBase);function findMethodHost(template){let templateHost=template.__dataHost;return templateHost&&templateHost._methodHost||templateHost}function createTemplatizerClass(template,templateInfo,options){let templatizerBase=options.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase;if(templatize.mixin){templatizerBase=templatize.mixin(templatizerBase)}let klass=class extends templatizerBase{};klass.prototype.__templatizeOptions=options;klass.prototype._bindTemplate(template);addNotifyEffects(klass,template,templateInfo,options);return klass}function addPropagateEffects(template,templateInfo,options){let userForwardHostProp=options.forwardHostProp;if(userForwardHostProp){let klass=templateInfo.templatizeTemplateClass;if(!klass){let templatizedBase=options.mutableData?MutableDataTemplate:DataTemplate;klass=templateInfo.templatizeTemplateClass=class TemplatizedTemplate extends templatizedBase{};let hostProps=templateInfo.hostProps;for(let prop in hostProps){klass.prototype._addPropertyEffect("_host_"+prop,klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(prop,userForwardHostProp)});klass.prototype._createNotifyingProperty("_host_"+prop)}}upgradeTemplate(template,klass);if(template.__dataProto){Object.assign(template.__data,template.__dataProto)}template.__dataTemp={};template.__dataPending=null;template.__dataOld=null;template._enableProperties()}}function createForwardHostPropEffect(hostProp,userForwardHostProp){return function forwardHostProp(template,prop,props){userForwardHostProp.call(template.__templatizeOwner,prop.substring("_host_".length),props[prop])}}function addNotifyEffects(klass,template,templateInfo,options){let hostProps=templateInfo.hostProps||{};for(let iprop in options.instanceProps){delete hostProps[iprop];let userNotifyInstanceProp=options.notifyInstanceProp;if(userNotifyInstanceProp){klass.prototype._addPropertyEffect(iprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(iprop,userNotifyInstanceProp)})}}if(options.forwardHostProp&&template.__dataHost){for(let hprop in hostProps){klass.prototype._addPropertyEffect(hprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()})}}}function createNotifyInstancePropEffect(instProp,userNotifyInstanceProp){return function notifyInstanceProp(inst,prop,props){userNotifyInstanceProp.call(inst.__templatizeOwner,inst,prop,props[prop])}}function createNotifyHostPropEffect(){return function notifyHostProp(inst,prop,props){inst.__dataHost._setPendingPropertyOrPath("_host_"+prop,props[prop],!0,!0)}}function templatize(template,owner,options){if(strictTemplatePolicy&&!findMethodHost(template)){throw new Error("strictTemplatePolicy: template owner not trusted")}options=options||{};if(template.__templatizeOwner){throw new Error("A <template> can only be templatized once")}template.__templatizeOwner=owner;const ctor=owner?owner.constructor:TemplateInstanceBase;let templateInfo=ctor._parseTemplate(template),baseClass=templateInfo.templatizeInstanceClass;if(!baseClass){baseClass=createTemplatizerClass(template,templateInfo,options);templateInfo.templatizeInstanceClass=baseClass}addPropagateEffects(template,templateInfo,options);let klass=class TemplateInstance extends baseClass{};klass.prototype._methodHost=findMethodHost(template);klass.prototype.__dataHost=template;klass.prototype.__templatizeOwner=owner;klass.prototype.__hostProps=templateInfo.hostProps;klass=klass;return klass}function modelForElement(template,node){let model;while(node){if(model=node.__templatizeInstance){if(model.__dataHost!=template){node=model.__dataHost}else{return model}}else{node=wrap$1(node).parentNode}}return null}var templatize$1={templatize:templatize,modelForElement:modelForElement,TemplateInstanceBase:TemplateInstanceBase};_exports.$templatize=templatize$1;let TemplatizerUser;const Templatizer={templatize(template,mutableData){this._templatizerTemplate=template;this.ctor=templatize(template,this,{mutableData:!!mutableData,parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(model){return new this.ctor(model)},modelForElement(el){return modelForElement(this._templatizerTemplate,el)}};_exports.Templatizer=Templatizer;var templatizerBehavior={Templatizer:Templatizer};_exports.$templatizerBehavior=templatizerBehavior;const domBindBase=GestureEventListeners(OptionalMutableData(PropertyEffects(HTMLElement)));class DomBind extends domBindBase{static get observedAttributes(){return["mutable-data"]}constructor(){super();if(strictTemplatePolicy){throw new Error(`strictTemplatePolicy: dom-bind not allowed`)}this.root=null;this.$=null;this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none";this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){wrap$1(wrap$1(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children){for(let i=0;i<this.__children.length;i++){this.root.appendChild(this.__children[i])}}}render(){let template;if(!this.__children){template=template||this.querySelector("template");if(!template){let observer=new MutationObserver(()=>{template=this.querySelector("template");if(template){observer.disconnect();this.render()}else{throw new Error("dom-bind requires a <template> child")}});observer.observe(this,{childList:!0});return}this.root=this._stampTemplate(template);this.$=this.root.$;this.__children=[];for(let n=this.root.firstChild;n;n=n.nextSibling){this.__children[this.__children.length]=n}this._enableProperties()}this.__insertChildren();this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}_exports.DomBind=DomBind;customElements.define("dom-bind",DomBind);var domBind={DomBind:DomBind};_exports.$domBind=domBind;class LiteralString{constructor(string){this.value=string.toString()}toString(){return this.value}}function literalValue(value){if(value instanceof LiteralString){return value.value}else{throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${value}`)}}function htmlValue(value){if(value instanceof HTMLTemplateElement){return value.innerHTML}else if(value instanceof LiteralString){return literalValue(value)}else{throw new Error(`non-template value passed to Polymer's html function: ${value}`)}}const html=function html(strings,...values){const template=document.createElement("template");template.innerHTML=values.reduce((acc,v,idx)=>acc+htmlValue(v)+strings[idx+1],strings[0]);return template};_exports.html$3=_exports.html$2=_exports.html=html;const htmlLiteral=function(strings,...values){return new LiteralString(values.reduce((acc,v,idx)=>acc+literalValue(v)+strings[idx+1],strings[0]))};_exports.htmlLiteral=htmlLiteral;var htmlTag={html:html,htmlLiteral:htmlLiteral};_exports.$htmlTag=htmlTag;const PolymerElement=ElementMixin(HTMLElement);_exports.PolymerElement=PolymerElement;var polymerElement={version:version,PolymerElement:PolymerElement,html:html};_exports.$polymerElement=polymerElement;const domRepeatBase=OptionalMutableData(PolymerElement);class DomRepeat extends domRepeatBase{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super();this.__instances=[];this.__limit=1/0;this.__pool=[];this.__renderDebouncer=null;this.__itemsIdxToInstIdx={};this.__chunkCount=null;this.__lastChunkTime=null;this.__sortFn=null;this.__filterFn=null;this.__observePaths=null;this.__ctor=null;this.__isDetached=!0;this.template=null}disconnectedCallback(){super.disconnectedCallback();this.__isDetached=!0;for(let i=0;i<this.__instances.length;i++){this.__detachInstance(i)}}connectedCallback(){super.connectedCallback();this.style.display="none";if(this.__isDetached){this.__isDetached=!1;let wrappedParent=wrap$1(wrap$1(this).parentNode);for(let i=0;i<this.__instances.length;i++){this.__attachInstance(i,wrappedParent)}}}__ensureTemplatized(){if(!this.__ctor){let template=this.template=this.querySelector("template");if(!template){let observer=new MutationObserver(()=>{if(this.querySelector("template")){observer.disconnect();this.__render()}else{throw new Error("dom-repeat requires a <template> child")}});observer.observe(this,{childList:!0});return!1}let instanceProps={};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.itemsIndexAs]=!0;this.__ctor=templatize(template,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:instanceProps,forwardHostProp:function(prop,value){let i$=this.__instances;for(let i=0,inst;i<i$.length&&(inst=i$[i]);i++){inst.forwardHostProp(prop,value)}},notifyInstanceProp:function(inst,prop,value){if(matches(this.as,prop)){let idx=inst[this.itemsIndexAs];if(prop==this.as){this.items[idx]=value}let path=translate(this.as,`${JSCompiler_renameProperty("items",this)}.${idx}`,prop);this.notifyPath(path,value)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(functionOrMethodName){if("string"===typeof functionOrMethodName){let methodName=functionOrMethodName,obj=this.__getMethodHost();return function(){return obj[methodName].apply(obj,arguments)}}return functionOrMethodName}__sortChanged(sort){this.__sortFn=this.__functionFromPropertyValue(sort);if(this.items){this.__debounceRender(this.__render)}}__filterChanged(filter){this.__filterFn=this.__functionFromPropertyValue(filter);if(this.items){this.__debounceRender(this.__render)}}__computeFrameTime(rate){return _Mathceil(1e3/rate)}__initializeChunking(){if(this.initialCount){this.__limit=this.initialCount;this.__chunkCount=this.initialCount;this.__lastChunkTime=performance.now()}}__tryRenderChunk(){if(this.items&&this.__limit<this.items.length){this.__debounceRender(this.__requestRenderChunk)}}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let currChunkTime=performance.now(),ratio=this._targetFrameTime/(currChunkTime-this.__lastChunkTime);this.__chunkCount=_Mathround(this.__chunkCount*ratio)||1;this.__limit+=this.__chunkCount;this.__lastChunkTime=currChunkTime;this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(change){if(this.items&&!Array.isArray(this.items)){console.warn("dom-repeat expected array for `items`, found",this.items)}if(!this.__handleItemPath(change.path,change.value)){this.__initializeChunking();this.__debounceRender(this.__render)}}__handleObservedPaths(path){if(this.__sortFn||this.__filterFn){if(!path){this.__debounceRender(this.__render,this.delay)}else if(this.__observePaths){let paths=this.__observePaths;for(let i=0;i<paths.length;i++){if(0===path.indexOf(paths[i])){this.__debounceRender(this.__render,this.delay)}}}}}__debounceRender(fn,delay=0){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,0<delay?timeOut.after(delay):microTask,fn.bind(this));enqueueDebouncer(this.__renderDebouncer)}render(){this.__debounceRender(this.__render);flush$1()}__render(){if(!this.__ensureTemplatized()){return}this.__applyFullRefresh();this.__pool.length=0;this._setRenderedItemCount(this.__instances.length);this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));this.__tryRenderChunk()}__applyFullRefresh(){let items=this.items||[],isntIdxToItemsIdx=Array(items.length);for(let i=0;i<items.length;i++){isntIdxToItemsIdx[i]=i}if(this.__filterFn){isntIdxToItemsIdx=isntIdxToItemsIdx.filter((i,idx,array)=>this.__filterFn(items[i],idx,array))}if(this.__sortFn){isntIdxToItemsIdx.sort((a,b)=>this.__sortFn(items[a],items[b]))}const itemsIdxToInstIdx=this.__itemsIdxToInstIdx={};let instIdx=0;const limit=_Mathmin(isntIdxToItemsIdx.length,this.__limit);for(;instIdx<limit;instIdx++){let inst=this.__instances[instIdx],itemIdx=isntIdxToItemsIdx[instIdx],item=items[itemIdx];itemsIdxToInstIdx[itemIdx]=instIdx;if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{this.__insertInstance(item,instIdx,itemIdx)}}for(let i=this.__instances.length-1;i>=instIdx;i--){this.__detachAndRemoveInstance(i)}}__detachInstance(idx){let inst=this.__instances[idx];const wrappedRoot=wrap$1(inst.root);for(let i=0,el;i<inst.children.length;i++){el=inst.children[i];wrappedRoot.appendChild(el)}return inst}__attachInstance(idx,parent){let inst=this.__instances[idx];parent.insertBefore(inst.root,this)}__detachAndRemoveInstance(idx){let inst=this.__detachInstance(idx);if(inst){this.__pool.push(inst)}this.__instances.splice(idx,1)}__stampInstance(item,instIdx,itemIdx){let model={};model[this.as]=item;model[this.indexAs]=instIdx;model[this.itemsIndexAs]=itemIdx;return new this.__ctor(model)}__insertInstance(item,instIdx,itemIdx){let inst=this.__pool.pop();if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{inst=this.__stampInstance(item,instIdx,itemIdx)}let beforeRow=this.__instances[instIdx+1],beforeNode=beforeRow?beforeRow.children[0]:this;wrap$1(wrap$1(this).parentNode).insertBefore(inst.root,beforeNode);this.__instances[instIdx]=inst;return inst}_showHideChildren(hidden){for(let i=0;i<this.__instances.length;i++){this.__instances[i]._showHideChildren(hidden)}}__handleItemPath(path,value){let itemsPath=path.slice(6),dot=itemsPath.indexOf("."),itemsIdx=0>dot?itemsPath:itemsPath.substring(0,dot);if(itemsIdx==parseInt(itemsIdx,10)){let itemSubPath=0>dot?"":itemsPath.substring(dot+1);this.__handleObservedPaths(itemSubPath);let instIdx=this.__itemsIdxToInstIdx[itemsIdx],inst=this.__instances[instIdx];if(inst){let itemPath=this.as+(itemSubPath?"."+itemSubPath:"");inst._setPendingPropertyOrPath(itemPath,value,!1,!0);inst._flushProperties()}return!0}}itemForElement(el){let instance=this.modelForElement(el);return instance&&instance[this.as]}indexForElement(el){let instance=this.modelForElement(el);return instance&&instance[this.indexAs]}modelForElement(el){return modelForElement(this.template,el)}}_exports.DomRepeat=DomRepeat;customElements.define(DomRepeat.is,DomRepeat);var domRepeat={DomRepeat:DomRepeat};_exports.$domRepeat=domRepeat;class DomIf extends PolymerElement{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super();this.__renderDebouncer=null;this.__invalidProps=null;this.__instance=null;this._lastIf=!1;this.__ctor=null;this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,microTask,()=>this.__render());enqueueDebouncer(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const parent=wrap$1(this).parentNode;if(!parent||parent.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!wrap$1(parent).host){this.__teardownInstance()}}connectedCallback(){super.connectedCallback();this.style.display="none";if(this.if){this.__debounceRender()}}render(){flush$1()}__render(){if(this.if){if(!this.__ensureInstance()){return}this._showHideChildren()}else if(this.restamp){this.__teardownInstance()}if(!this.restamp&&this.__instance){this._showHideChildren()}if(this.if!=this._lastIf){this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));this._lastIf=this.if}}__ensureInstance(){let parentNode=wrap$1(this).parentNode;if(parentNode){if(!this.__ctor){let template=wrap$1(this).querySelector("template");if(!template){let observer=new MutationObserver(()=>{if(wrap$1(this).querySelector("template")){observer.disconnect();this.__render()}else{throw new Error("dom-if requires a <template> child")}});observer.observe(this,{childList:!0});return!1}this.__ctor=templatize(template,this,{mutableData:!0,forwardHostProp:function(prop,value){if(this.__instance){if(this.if){this.__instance.forwardHostProp(prop,value)}else{this.__invalidProps=this.__invalidProps||Object.create(null);this.__invalidProps[root(prop)]=!0}}}})}if(!this.__instance){this.__instance=new this.__ctor;wrap$1(parentNode).insertBefore(this.__instance.root,this)}else{this.__syncHostProperties();let c$=this.__instance.children;if(c$&&c$.length){let lastChild=wrap$1(this).previousSibling;if(lastChild!==c$[c$.length-1]){for(let i=0,n;i<c$.length&&(n=c$[i]);i++){wrap$1(parentNode).insertBefore(n,this)}}}}}return!0}__syncHostProperties(){let props=this.__invalidProps;if(props){for(let prop in props){this.__instance._setPendingProperty(prop,this.__dataHost[prop])}this.__invalidProps=null;this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let c$=this.__instance.children;if(c$&&c$.length){let parent=wrap$1(c$[0]).parentNode;if(parent){parent=wrap$1(parent);for(let i=0,n;i<c$.length&&(n=c$[i]);i++){parent.removeChild(n)}}}this.__instance=null;this.__invalidProps=null}}_showHideChildren(){let hidden=this.__hideTemplateChildren__||!this.if;if(this.__instance){this.__instance._showHideChildren(hidden)}}}_exports.DomIf=DomIf;customElements.define(DomIf.is,DomIf);var domIf={DomIf:DomIf};_exports.$domIf=domIf;let ArraySelectorMixin=dedupingMixin(superClass=>{let elementBase=ElementMixin(superClass);class ArraySelectorMixin extends elementBase{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super();this.__lastItems=null;this.__lastMulti=null;this.__selectedMap=null}__updateSelection(multi,itemsInfo){let path=itemsInfo.path;if(path==JSCompiler_renameProperty("items",this)){let newItems=itemsInfo.base||[],lastItems=this.__lastItems,lastMulti=this.__lastMulti;if(multi!==lastMulti){this.clearSelection()}if(lastItems){let splices=calculateSplices(newItems,lastItems);this.__applySplices(splices)}this.__lastItems=newItems;this.__lastMulti=multi}else if(`${JSCompiler_renameProperty("items",this)}.splices`==itemsInfo.path){this.__applySplices(itemsInfo.value.indexSplices)}else{let part=path.slice(`${JSCompiler_renameProperty("items",this)}.`.length),idx=parseInt(part,10);if(0>part.indexOf(".")&&part==idx){this.__deselectChangedIdx(idx)}}}__applySplices(splices){let selected=this.__selectedMap;for(let i=0,s;i<splices.length;i++){s=splices[i];selected.forEach((idx,item)=>{if(idx<s.index){}else if(idx>=s.index+s.removed.length){selected.set(item,idx+s.addedCount-s.removed.length)}else{selected.set(item,-1)}});for(let j=0,idx;j<s.addedCount;j++){idx=s.index+j;if(selected.has(this.items[idx])){selected.set(this.items[idx],idx)}}}this.__updateLinks();let sidx=0;selected.forEach((idx,item)=>{if(0>idx){if(this.multi){this.splice(JSCompiler_renameProperty("selected",this),sidx,1)}else{this.selected=this.selectedItem=null}selected.delete(item)}else{sidx++}})}__updateLinks(){this.__dataLinkedPaths={};if(this.multi){let sidx=0;this.__selectedMap.forEach(idx=>{if(0<=idx){this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${idx}`,`${JSCompiler_renameProperty("selected",this)}.${sidx++}`)}})}else{this.__selectedMap.forEach(idx=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${idx}`);this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${idx}`)})}}clearSelection(){this.__dataLinkedPaths={};this.__selectedMap=new Map;this.selected=this.multi?[]:null;this.selectedItem=null}isSelected(item){return this.__selectedMap.has(item)}isIndexSelected(idx){return this.isSelected(this.items[idx])}__deselectChangedIdx(idx){let sidx=this.__selectedIndexForItemIndex(idx);if(0<=sidx){let i=0;this.__selectedMap.forEach((idx,item)=>{if(sidx==i++){this.deselect(item)}})}}__selectedIndexForItemIndex(idx){let selected=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${idx}`];if(selected){return parseInt(selected.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}}deselect(item){let idx=this.__selectedMap.get(item);if(0<=idx){this.__selectedMap.delete(item);let sidx;if(this.multi){sidx=this.__selectedIndexForItemIndex(idx)}this.__updateLinks();if(this.multi){this.splice(JSCompiler_renameProperty("selected",this),sidx,1)}else{this.selected=this.selectedItem=null}}}deselectIndex(idx){this.deselect(this.items[idx])}select(item){this.selectIndex(this.items.indexOf(item))}selectIndex(idx){let item=this.items[idx];if(!this.isSelected(item)){if(!this.multi){this.__selectedMap.clear()}this.__selectedMap.set(item,idx);this.__updateLinks();if(this.multi){this.push(JSCompiler_renameProperty("selected",this),item)}else{this.selected=this.selectedItem=item}}else if(this.toggle){this.deselectIndex(idx)}}}return ArraySelectorMixin});_exports.ArraySelectorMixin=ArraySelectorMixin;let baseArraySelector=ArraySelectorMixin(PolymerElement);class ArraySelector extends baseArraySelector{static get is(){return"array-selector"}static get template(){return null}}_exports.ArraySelector=ArraySelector;customElements.define(ArraySelector.is,ArraySelector);var arraySelector={ArraySelectorMixin:ArraySelectorMixin,ArraySelector:ArraySelector};_exports.$arraySelector=arraySelector;"use strict";const customStyleInterface$1=new CustomStyleInterface;if(!window.ShadyCSS){window.ShadyCSS={prepareTemplate(template,elementName,elementExtends){},prepareTemplateDom(template,elementName){},prepareTemplateStyles(template,elementName,elementExtends){},styleSubtree(element,properties){customStyleInterface$1.processStyles();updateNativeProperties(element,properties)},styleElement(element){customStyleInterface$1.processStyles()},styleDocument(properties){customStyleInterface$1.processStyles();updateNativeProperties(document.body,properties)},getComputedStyleValue(element,property){return getComputedStyleValue(element,property)},flushCustomStyles(){},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime}}window.ShadyCSS.CustomStyleInterface=customStyleInterface$1;const attr="include",CustomStyleInterface$1=window.ShadyCSS.CustomStyleInterface;class CustomStyle extends HTMLElement{constructor(){super();this._style=null;CustomStyleInterface$1.addCustomStyle(this)}getStyle(){if(this._style){return this._style}const style=this.querySelector("style");if(!style){return null}this._style=style;const include=style.getAttribute(attr);if(include){style.removeAttribute(attr);style.textContent=cssFromModules(include)+style.textContent}if(this.ownerDocument!==window.document){window.document.head.appendChild(this)}return this._style}}_exports.CustomStyle=CustomStyle;window.customElements.define("custom-style",CustomStyle);var customStyle={CustomStyle:CustomStyle};_exports.$customStyle=customStyle;let mutablePropertyChange$1;(()=>{mutablePropertyChange$1=MutableData._mutablePropertyChange})();const MutableDataBehavior={_shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,!0)}};_exports.MutableDataBehavior=MutableDataBehavior;const OptionalMutableDataBehavior={properties:{mutableData:Boolean},_shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,this.mutableData)}};_exports.OptionalMutableDataBehavior=OptionalMutableDataBehavior;var mutableDataBehavior={MutableDataBehavior:MutableDataBehavior,OptionalMutableDataBehavior:OptionalMutableDataBehavior};_exports.$mutableDataBehavior=mutableDataBehavior;const Base=LegacyElementMixin(HTMLElement).prototype;_exports.Base=Base;var polymerLegacy={Base:Base,Polymer:Polymer,html:html};_exports.$polymerLegacy=polymerLegacy;const IronJsonpLibraryBehavior={properties:{libraryLoaded:{type:Boolean,value:!1,notify:!0,readOnly:!0},libraryErrorMessage:{type:String,value:null,notify:!0,readOnly:!0}},observers:["_libraryUrlChanged(libraryUrl)"],_libraryUrlChanged:function(libraryUrl){if(this._isReady&&this.libraryUrl)this._loadLibrary()},_libraryLoadCallback:function(err,result){if(err){Base._warn("Library load failed:",err.message);this._setLibraryErrorMessage(err.message)}else{this._setLibraryErrorMessage(null);this._setLibraryLoaded(!0);if(this.notifyEvent)this.fire(this.notifyEvent,result,{composed:!0})}},_loadLibrary:function(){LoaderMap.require(this.libraryUrl,this._libraryLoadCallback.bind(this),this.callbackName)},ready:function(){this._isReady=!0;if(this.libraryUrl)this._loadLibrary()}};_exports.IronJsonpLibraryBehavior=IronJsonpLibraryBehavior;var LoaderMap={apiMap:{},require:function(url,notifyCallback,jsonpCallbackName){var name=this.nameFromUrl(url);if(!this.apiMap[name])this.apiMap[name]=new Loader(name,url,jsonpCallbackName);this.apiMap[name].requestNotify(notifyCallback)},nameFromUrl:function(url){return url.replace(/[\:\/\%\?\&\.\=\-\,]/g,"_")+"_api"}},Loader=function(name,url,callbackName){this.notifiers=[];if(!callbackName){if(0<=url.indexOf(this.callbackMacro)){callbackName=name+"_loaded";url=url.replace(this.callbackMacro,callbackName)}else{this.error=new Error("IronJsonpLibraryBehavior a %%callback%% parameter is required in libraryUrl");return}}this.callbackName=callbackName;window[this.callbackName]=this.success.bind(this);this.addScript(url)};Loader.prototype={callbackMacro:"%%callback%%",loaded:!1,addScript:function(src){var script=document.createElement("script");script.src=src;script.onerror=this.handleError.bind(this);var s=document.querySelector("script")||document.body;s.parentNode.insertBefore(script,s);this.script=script},removeScript:function(){if(this.script.parentNode){this.script.parentNode.removeChild(this.script)}this.script=null},handleError:function(ev){this.error=new Error("Library failed to load");this.notifyAll();this.cleanup()},success:function(){this.loaded=!0;this.result=Array.prototype.slice.call(arguments);this.notifyAll();this.cleanup()},cleanup:function(){delete window[this.callbackName]},notifyAll:function(){this.notifiers.forEach(function(notifyCallback){notifyCallback(this.error,this.result)}.bind(this));this.notifiers=[]},requestNotify:function(notifyCallback){if(this.loaded||this.error){notifyCallback(this.error,this.result)}else{this.notifiers.push(notifyCallback)}}};Polymer({is:"iron-jsonp-library",behaviors:[IronJsonpLibraryBehavior],properties:{libraryUrl:String,callbackName:String,notifyEvent:String}});var ironJsonpLibrary={IronJsonpLibraryBehavior:IronJsonpLibraryBehavior};_exports.$ironJsonpLibrary=ironJsonpLibrary;Polymer({is:"google-maps-api",behaviors:[IronJsonpLibraryBehavior],properties:{mapsUrl:{type:String,value:"https://maps.googleapis.com/maps/api/js?callback=%%callback%%"},apiKey:{type:String,value:""},clientId:{type:String,value:""},version:{type:String,value:"3.exp"},language:{type:String,value:""},signedIn:{type:Boolean,value:!1},notifyEvent:{type:String,value:"api-load"},libraryUrl:{type:String,computed:"_computeUrl(mapsUrl, version, apiKey, clientId, language, signedIn)"}},_computeUrl(mapsUrl,version,apiKey,clientId,language,signedIn){let url=`${mapsUrl}&v=${version}`;url+="&libraries=drawing,geometry,places,visualization";if(apiKey&&!clientId){url+=`&key=${apiKey}`}if(clientId){url+=`&client=${clientId}`}if(!apiKey&&!clientId){const warning="No Google Maps API Key or Client ID specified. "+"See https://developers.google.com/maps/documentation/javascript/get-api-key "+"for instructions to get started with a key or client id.";console.warn(warning)}if(language){url+=`&language=${language}`}if(signedIn){url+=`&signed_in=${signedIn}`}return url},get api(){return google.maps}});function memoize(fn,options){var cache=options&&options.cache?options.cache:cacheDefault,serializer=options&&options.serializer?options.serializer:serializerDefault,strategy=options&&options.strategy?options.strategy:strategyDefault;return strategy(fn,{cache:cache,serializer:serializer})}function isPrimitive(value){return null==value||"number"===typeof value||"boolean"===typeof value}function monadic(fn,cache,serializer,arg){var cacheKey=isPrimitive(arg)?arg:serializer(arg),computedValue=cache.get(cacheKey);if("undefined"===typeof computedValue){computedValue=fn.call(this,arg);cache.set(cacheKey,computedValue)}return computedValue}function variadic(fn,cache,serializer){var args=Array.prototype.slice.call(arguments,3),cacheKey=serializer(args),computedValue=cache.get(cacheKey);if("undefined"===typeof computedValue){computedValue=fn.apply(this,args);cache.set(cacheKey,computedValue)}return computedValue}function assemble(fn,context,strategy,cache,serialize){return strategy.bind(context,fn,cache,serialize)}function strategyDefault(fn,options){var strategy=1===fn.length?monadic:variadic;return assemble(fn,this,strategy,options.cache.create(),options.serializer)}function strategyVariadic(fn,options){return assemble(fn,this,variadic,options.cache.create(),options.serializer)}function strategyMonadic(fn,options){return assemble(fn,this,monadic,options.cache.create(),options.serializer)}var serializerDefault=function(){return JSON.stringify(arguments)};function ObjectWithoutPrototypeCache(){this.cache=Object.create(null)}ObjectWithoutPrototypeCache.prototype.has=function(key){return key in this.cache};ObjectWithoutPrototypeCache.prototype.get=function(key){return this.cache[key]};ObjectWithoutPrototypeCache.prototype.set=function(key,value){this.cache[key]=value};var cacheDefault={create:function create(){return new ObjectWithoutPrototypeCache}},strategies={variadic:strategyVariadic,monadic:strategyMonadic};_exports.strategies=strategies;var index={default:memoize,strategies:strategies};_exports.$index=index;var ErrorKind;_exports.ErrorKind=ErrorKind;(function(ErrorKind){ErrorKind[ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE";ErrorKind[ErrorKind.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT";ErrorKind[ErrorKind.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT";ErrorKind[ErrorKind.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE";ErrorKind[ErrorKind.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE";ErrorKind[ErrorKind.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE";ErrorKind[ErrorKind.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON";ErrorKind[ErrorKind.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON";ErrorKind[ErrorKind.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON";ErrorKind[ErrorKind.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON";ErrorKind[ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";ErrorKind[ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS";ErrorKind[ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";ErrorKind[ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";ErrorKind[ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR";ErrorKind[ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR";ErrorKind[ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";ErrorKind[ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";ErrorKind[ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR";ErrorKind[ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR";ErrorKind[ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR";ErrorKind[ErrorKind.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE";ErrorKind[ErrorKind.INVALID_TAG=23]="INVALID_TAG";ErrorKind[ErrorKind.INVALID_TAG_NAME=25]="INVALID_TAG_NAME";ErrorKind[ErrorKind.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG";ErrorKind[ErrorKind.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ErrorKind||(_exports.ErrorKind=ErrorKind={}));var error={get ErrorKind(){return ErrorKind}};_exports.$error=error;var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p]};return extendStatics(d,b)};function __extends(d,b){if("function"!==typeof b&&null!==b)throw new TypeError("Class extends value "+(b+"")+" is not a constructor or null");extendStatics(d,b);function __(){this.constructor=d}d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var __assign=function(){_exports.__assign=__assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t};return __assign.apply(this,arguments)};_exports.__assign=__assign;function __rest(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p))t[p]=s[p];if(null!=s&&"function"===typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]]}return t}function __decorate(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--)if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r;return 3<c&&r&&Object.defineProperty(target,key,r),r}function __param(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}}function __metadata(metadataKey,metadataValue){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(metadataKey,metadataValue)}function __awaiter(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value)})}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})}function __generator(thisArg,body){var _={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=2&op[0]?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[2&op[0],t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:!1};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=0<t.length&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}var __createBinding=Object.create?function(o,m,k,k2){if(k2===void 0)k2=k;Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){if(k2===void 0)k2=k;o[k2]=m[k]};_exports.__createBinding=__createBinding;function __exportStar(m,o){for(var p in m)if("default"!==p&&!Object.prototype.hasOwnProperty.call(o,p))__createBinding(o,m,p)}function __values(o){var s="function"===typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"===typeof o.length)return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(o,n){var m="function"===typeof Symbol&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((void 0===n||0<n--)&&!(r=i.next()).done)ar.push(r.value)}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i)}finally{if(e)throw e.error}}return ar}function __spread(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read(arguments[i]));return ar}function __spreadArrays(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r}function __spreadArray(to,from){for(var i=0,il=from.length,j=to.length;i<il;i++,j++)to[j]=from[i];return to}function __await(v){return this instanceof __await?(this.v=v,this):new __await(v)}function __asyncGenerator(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){1<q.push([n,v,a,b])||resume(n,v)})}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1])}}function __asyncDelegator(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await(o[n](v)),done:"return"===n}:f?f(v):v}:f}}function __asyncValues(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o="function"===typeof __values?__values(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}}function __makeTemplateObject(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};var __setModuleDefault=Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o["default"]=v};function __importStar(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)if("default"!==k&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result}function __importDefault(mod){return mod&&mod.__esModule?mod:{default:mod}}function __classPrivateFieldGet(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)}function __classPrivateFieldSet(receiver,state,value,kind,f){if("m"===kind)throw new TypeError("Private method is not writable");if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===kind?f.call(receiver,value):f?f.value=value:state.set(receiver,value),value}var tslib_es6={__extends:__extends,get __assign(){return __assign},__rest:__rest,__decorate:__decorate,__param:__param,__metadata:__metadata,__awaiter:__awaiter,__generator:__generator,__createBinding:__createBinding,__exportStar:__exportStar,__values:__values,__read:__read,__spread:__spread,__spreadArrays:__spreadArrays,__spreadArray:__spreadArray,__await:__await,__asyncGenerator:__asyncGenerator,__asyncDelegator:__asyncDelegator,__asyncValues:__asyncValues,__makeTemplateObject:__makeTemplateObject,__importStar:__importStar,__importDefault:__importDefault,__classPrivateFieldGet:__classPrivateFieldGet,__classPrivateFieldSet:__classPrivateFieldSet};_exports.$tslibEs6=tslib_es6;var TYPE;_exports.TYPE$1=_exports.TYPE=TYPE;(function(TYPE){TYPE[TYPE.literal=0]="literal";TYPE[TYPE.argument=1]="argument";TYPE[TYPE.number=2]="number";TYPE[TYPE.date=3]="date";TYPE[TYPE.time=4]="time";TYPE[TYPE.select=5]="select";TYPE[TYPE.plural=6]="plural";TYPE[TYPE.pound=7]="pound";TYPE[TYPE.tag=8]="tag"})(TYPE||(_exports.TYPE$1=_exports.TYPE=TYPE={}));var SKELETON_TYPE;_exports.SKELETON_TYPE$1=_exports.SKELETON_TYPE=SKELETON_TYPE;(function(SKELETON_TYPE){SKELETON_TYPE[SKELETON_TYPE.number=0]="number";SKELETON_TYPE[SKELETON_TYPE.dateTime=1]="dateTime"})(SKELETON_TYPE||(_exports.SKELETON_TYPE$1=_exports.SKELETON_TYPE=SKELETON_TYPE={}));function isLiteralElement(el){return el.type===TYPE.literal}function isArgumentElement(el){return el.type===TYPE.argument}function isNumberElement(el){return el.type===TYPE.number}function isDateElement(el){return el.type===TYPE.date}function isTimeElement(el){return el.type===TYPE.time}function isSelectElement(el){return el.type===TYPE.select}function isPluralElement(el){return el.type===TYPE.plural}function isPoundElement(el){return el.type===TYPE.pound}function isTagElement(el){return el.type===TYPE.tag}function isNumberSkeleton(el){return!!(el&&"object"===typeof el&&el.type===SKELETON_TYPE.number)}function isDateTimeSkeleton(el){return!!(el&&"object"===typeof el&&el.type===SKELETON_TYPE.dateTime)}function createLiteralElement(value){return{type:TYPE.literal,value:value}}function createNumberElement(value,style){return{type:TYPE.number,value:value,style:style}}var types$1={get TYPE(){return TYPE},get SKELETON_TYPE(){return SKELETON_TYPE},isLiteralElement:isLiteralElement,isArgumentElement:isArgumentElement,isNumberElement:isNumberElement,isDateElement:isDateElement,isTimeElement:isTimeElement,isSelectElement:isSelectElement,isPluralElement:isPluralElement,isPoundElement:isPoundElement,isTagElement:isTagElement,isNumberSkeleton:isNumberSkeleton,isDateTimeSkeleton:isDateTimeSkeleton,createLiteralElement:createLiteralElement,createNumberElement:createNumberElement};_exports.$types=types$1;var SPACE_SEPARATOR_REGEX=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;_exports.SPACE_SEPARATOR_REGEX=SPACE_SEPARATOR_REGEX;var WHITE_SPACE_REGEX=/[\t-\r \x85\u200E\u200F\u2028\u2029]/;_exports.WHITE_SPACE_REGEX=WHITE_SPACE_REGEX;var regex_generated={SPACE_SEPARATOR_REGEX:SPACE_SEPARATOR_REGEX,WHITE_SPACE_REGEX:WHITE_SPACE_REGEX};_exports.$regexGenerated=regex_generated;var DATE_TIME_REGEX=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function parseDateTimeSkeleton(skeleton){var result={};skeleton.replace(DATE_TIME_REGEX,function(match){var len=match.length;switch(match[0]){case"G":result.era=4===len?"long":5===len?"narrow":"short";break;case"y":result.year=2===len?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":result.month=["numeric","2-digit","short","long","narrow"][len-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":result.day=["numeric","2-digit"][len-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":result.weekday=4===len?"short":5===len?"narrow":"short";break;case"e":if(4>len){throw new RangeError("`e..eee` (weekday) patterns are not supported")}result.weekday=["short","long","narrow","short"][len-4];break;case"c":if(4>len){throw new RangeError("`c..ccc` (weekday) patterns are not supported")}result.weekday=["short","long","narrow","short"][len-4];break;case"a":result.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":result.hourCycle="h12";result.hour=["numeric","2-digit"][len-1];break;case"H":result.hourCycle="h23";result.hour=["numeric","2-digit"][len-1];break;case"K":result.hourCycle="h11";result.hour=["numeric","2-digit"][len-1];break;case"k":result.hourCycle="h24";result.hour=["numeric","2-digit"][len-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":result.minute=["numeric","2-digit"][len-1];break;case"s":result.second=["numeric","2-digit"][len-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":result.timeZoneName=4>len?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");}return""});return result}var dateTime={parseDateTimeSkeleton:parseDateTimeSkeleton};_exports.$dateTime=dateTime;var WHITE_SPACE_REGEX$1=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;_exports.WHITE_SPACE_REGEX$1=WHITE_SPACE_REGEX$1;var regex_generated$1={WHITE_SPACE_REGEX:WHITE_SPACE_REGEX$1};_exports.$regexGenerated$1=regex_generated$1;function parseNumberSkeletonFromString(skeleton){if(0===skeleton.length){throw new Error("Number skeleton cannot be empty")}for(var stringTokens=skeleton.split(WHITE_SPACE_REGEX$1).filter(function(x){return 0<x.length}),tokens=[],_i=0,stringTokens_1=stringTokens;_i<stringTokens_1.length;_i++){var stringToken=stringTokens_1[_i],stemAndOptions=stringToken.split("/");if(0===stemAndOptions.length){throw new Error("Invalid number skeleton")}for(var stem=stemAndOptions[0],options=stemAndOptions.slice(1),_a=0,options_1=options,option;_a<options_1.length;_a++){option=options_1[_a];if(0===option.length){throw new Error("Invalid number skeleton")}}tokens.push({stem:stem,options:options})}return tokens}function icuUnitToEcma(unit){return unit.replace(/^(.*?)-/,"")}var FRACTION_PRECISION_REGEX=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,SIGNIFICANT_PRECISION_REGEX=/^(@+)?(\+|#+)?$/g,INTEGER_WIDTH_REGEX=/(\*)(0+)|(#+)(0+)|(0+)/g,CONCISE_INTEGER_WIDTH_REGEX=/^(0+)$/;function parseSignificantPrecision(str){var result={};str.replace(SIGNIFICANT_PRECISION_REGEX,function(_,g1,g2){if("string"!==typeof g2){result.minimumSignificantDigits=g1.length;result.maximumSignificantDigits=g1.length}else if("+"===g2){result.minimumSignificantDigits=g1.length}else if("#"===g1[0]){result.maximumSignificantDigits=g1.length}else{result.minimumSignificantDigits=g1.length;result.maximumSignificantDigits=g1.length+("string"===typeof g2?g2.length:0)}return""});return result}function parseSign(str){switch(str){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"};}}function parseConciseScientificAndEngineeringStem(stem){var result;if("E"===stem[0]&&"E"===stem[1]){result={notation:"engineering"};stem=stem.slice(2)}else if("E"===stem[0]){result={notation:"scientific"};stem=stem.slice(1)}if(result){var signDisplay=stem.slice(0,2);if("+!"===signDisplay){result.signDisplay="always";stem=stem.slice(2)}else if("+?"===signDisplay){result.signDisplay="exceptZero";stem=stem.slice(2)}if(!CONCISE_INTEGER_WIDTH_REGEX.test(stem)){throw new Error("Malformed concise eng/scientific notation")}result.minimumIntegerDigits=stem.length}return result}function parseNotationOptions(opt){var result={},signOpts=parseSign(opt);if(signOpts){return signOpts}return result}function parseNumberSkeleton(tokens){for(var result={},_i=0,tokens_1=tokens,token;_i<tokens_1.length;_i++){token=tokens_1[_i];switch(token.stem){case"percent":case"%":result.style="percent";continue;case"%x100":result.style="percent";result.scale=100;continue;case"currency":result.style="currency";result.currency=token.options[0];continue;case"group-off":case",_":result.useGrouping=!1;continue;case"precision-integer":case".":result.maximumFractionDigits=0;continue;case"measure-unit":case"unit":result.style="unit";result.unit=icuUnitToEcma(token.options[0]);continue;case"compact-short":case"K":result.notation="compact";result.compactDisplay="short";continue;case"compact-long":case"KK":result.notation="compact";result.compactDisplay="long";continue;case"scientific":result=__assign(__assign(__assign({},result),{notation:"scientific"}),token.options.reduce(function(all,opt){return __assign(__assign({},all),parseNotationOptions(opt))},{}));continue;case"engineering":result=__assign(__assign(__assign({},result),{notation:"engineering"}),token.options.reduce(function(all,opt){return __assign(__assign({},all),parseNotationOptions(opt))},{}));continue;case"notation-simple":result.notation="standard";continue;case"unit-width-narrow":result.currencyDisplay="narrowSymbol";result.unitDisplay="narrow";continue;case"unit-width-short":result.currencyDisplay="code";result.unitDisplay="short";continue;case"unit-width-full-name":result.currencyDisplay="name";result.unitDisplay="long";continue;case"unit-width-iso-code":result.currencyDisplay="symbol";continue;case"scale":result.scale=parseFloat(token.options[0]);continue;case"integer-width":if(1<token.options.length){throw new RangeError("integer-width stems only accept a single optional option")}token.options[0].replace(INTEGER_WIDTH_REGEX,function(_,g1,g2,g3,g4,g5){if(g1){result.minimumIntegerDigits=g2.length}else if(g3&&g4){throw new Error("We currently do not support maximum integer digits")}else if(g5){throw new Error("We currently do not support exact integer digits")}return""});continue;}if(CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)){result.minimumIntegerDigits=token.stem.length;continue}if(FRACTION_PRECISION_REGEX.test(token.stem)){if(1<token.options.length){throw new RangeError("Fraction-precision stems only accept a single optional option")}token.stem.replace(FRACTION_PRECISION_REGEX,function(_,g1,g2,g3,g4,g5){if("*"===g2){result.minimumFractionDigits=g1.length}else if(g3&&"#"===g3[0]){result.maximumFractionDigits=g3.length}else if(g4&&g5){result.minimumFractionDigits=g4.length;result.maximumFractionDigits=g4.length+g5.length}else{result.minimumFractionDigits=g1.length;result.maximumFractionDigits=g1.length}return""});if(token.options.length){result=__assign(__assign({},result),parseSignificantPrecision(token.options[0]))}continue}if(SIGNIFICANT_PRECISION_REGEX.test(token.stem)){result=__assign(__assign({},result),parseSignificantPrecision(token.stem));continue}var signOpts=parseSign(token.stem);if(signOpts){result=__assign(__assign({},result),signOpts)}var conciseScientificAndEngineeringOpts=parseConciseScientificAndEngineeringStem(token.stem);if(conciseScientificAndEngineeringOpts){result=__assign(__assign({},result),conciseScientificAndEngineeringOpts)}}return result}var number={parseNumberSkeletonFromString:parseNumberSkeletonFromString,parseNumberSkeleton:parseNumberSkeleton};_exports.$number=number;var index$1={parseDateTimeSkeleton:parseDateTimeSkeleton,parseNumberSkeletonFromString:parseNumberSkeletonFromString,parseNumberSkeleton:parseNumberSkeleton};_exports.$index$2=index$1;var _a,SPACE_SEPARATOR_START_REGEX=new RegExp("^"+SPACE_SEPARATOR_REGEX.source+"*"),SPACE_SEPARATOR_END_REGEX=new RegExp(SPACE_SEPARATOR_REGEX.source+"*$");function createLocation(start,end){return{start:start,end:end}}var hasNativeStartsWith=!!_Stringprototype.startsWith,hasNativeFromCodePoint=!!_StringfromCodePoint,hasNativeFromEntries=!!Object.fromEntries,hasNativeCodePointAt=!!_Stringprototype.codePointAt,hasTrimStart=!!_Stringprototype.trimStart,hasTrimEnd=!!_Stringprototype.trimEnd,hasNativeIsSafeInteger=!!_NumberisSafeInteger,isSafeInteger=hasNativeIsSafeInteger?_NumberisSafeInteger:function(n){return"number"===typeof n&&isFinite(n)&&_Mathfloor(n)===n&&9007199254740991>=_Mathabs(n)},REGEX_SUPPORTS_U_AND_Y=!0;try{var re=RE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");REGEX_SUPPORTS_U_AND_Y="a"===(null===(_a=re.exec("a"))||void 0===_a?void 0:_a[0])}catch(_){REGEX_SUPPORTS_U_AND_Y=!1}var startsWith=hasNativeStartsWith?function startsWith(s,search,position){return s.startsWith(search,position)}:function startsWith(s,search,position){return s.slice(position,position+search.length)===search},fromCodePoint=hasNativeFromCodePoint?_StringfromCodePoint:function fromCodePoint(){for(var codePoints=[],_i=0;_i<arguments.length;_i++){codePoints[_i]=arguments[_i]}var elements="",length=codePoints.length,i=0,code;while(length>i){code=codePoints[i++];if(1114111<code)throw RangeError(code+" is not a valid code point");elements+=65536>code?_StringfromCharCode(code):_StringfromCharCode(((code-=65536)>>10)+55296,code%1024+56320)}return elements},fromEntries=hasNativeFromEntries?Object.fromEntries:function fromEntries(entries){for(var obj={},_i=0,entries_1=entries;_i<entries_1.length;_i++){var _a=entries_1[_i],k=_a[0],v=_a[1];obj[k]=v}return obj},codePointAt=hasNativeCodePointAt?function codePointAt(s,index){return s.codePointAt(index)}:function codePointAt(s,index){var size=s.length;if(0>index||index>=size){return}var first=s.charCodeAt(index),second;return 55296>first||56319<first||index+1===size||56320>(second=s.charCodeAt(index+1))||57343<second?first:(first-55296<<10)+(second-56320)+65536},trimStart=hasTrimStart?function trimStart(s){return s.trimStart()}:function trimStart(s){return s.replace(SPACE_SEPARATOR_START_REGEX,"")},trimEnd=hasTrimEnd?function trimEnd(s){return s.trimEnd()}:function trimEnd(s){return s.replace(SPACE_SEPARATOR_END_REGEX,"")};function RE(s,flag){return new RegExp(s,flag)}var matchIdentifierAtIndex;if(REGEX_SUPPORTS_U_AND_Y){var IDENTIFIER_PREFIX_RE_1=RE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");matchIdentifierAtIndex=function matchIdentifierAtIndex(s,index){var _a;IDENTIFIER_PREFIX_RE_1.lastIndex=index;var match=IDENTIFIER_PREFIX_RE_1.exec(s);return null!==(_a=match[1])&&void 0!==_a?_a:""}}else{matchIdentifierAtIndex=function matchIdentifierAtIndex(s,index){var match=[];while(!0){var c=codePointAt(s,index);if(c===void 0||_isWhiteSpace(c)||_isPatternSyntax(c)){break}match.push(c);index+=65536<=c?2:1}return fromCodePoint.apply(void 0,match)}}var Parser=function(){function Parser(message,options){if(void 0===options){options={}}this.message=message;this.position={offset:0,line:1,column:1};this.ignoreTag=!!options.ignoreTag;this.requiresOtherClause=!!options.requiresOtherClause;this.shouldParseSkeletons=!!options.shouldParseSkeletons}Parser.prototype.parse=function(){if(0!==this.offset()){throw Error("parser can only be used once")}return this.parseMessage(0,"",!1)};Parser.prototype.parseMessage=function(nestingLevel,parentArgType,expectingCloseTag){var elements=[];while(!this.isEOF()){var char=this.char();if(123===char){var result=this.parseArgument(nestingLevel,expectingCloseTag);if(result.err){return result}elements.push(result.val)}else if(125===char&&0<nestingLevel){break}else if(35===char&&("plural"===parentArgType||"selectordinal"===parentArgType)){var position=this.clonePosition();this.bump();elements.push({type:TYPE.pound,location:createLocation(position,this.clonePosition())})}else if(60===char&&!this.ignoreTag&&47===this.peek()){if(expectingCloseTag){break}else{return this.error(ErrorKind.UNMATCHED_CLOSING_TAG,createLocation(this.clonePosition(),this.clonePosition()))}}else if(60===char&&!this.ignoreTag&&_isAlpha(this.peek()||0)){var result=this.parseTag(nestingLevel,parentArgType);if(result.err){return result}elements.push(result.val)}else{var result=this.parseLiteral(nestingLevel,parentArgType);if(result.err){return result}elements.push(result.val)}}return{val:elements,err:null}};Parser.prototype.parseTag=function(nestingLevel,parentArgType){var startPosition=this.clonePosition();this.bump();var tagName=this.parseTagName();this.bumpSpace();if(this.bumpIf("/>")){return{val:{type:TYPE.literal,value:"<"+tagName+"/>",location:createLocation(startPosition,this.clonePosition())},err:null}}else if(this.bumpIf(">")){var childrenResult=this.parseMessage(nestingLevel+1,parentArgType,!0);if(childrenResult.err){return childrenResult}var children=childrenResult.val,endTagStartPosition=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!_isAlpha(this.char())){return this.error(ErrorKind.INVALID_TAG,createLocation(endTagStartPosition,this.clonePosition()))}var closingTagNameStartPosition=this.clonePosition(),closingTagName=this.parseTagName();if(tagName!==closingTagName){return this.error(ErrorKind.UNMATCHED_CLOSING_TAG,createLocation(closingTagNameStartPosition,this.clonePosition()))}this.bumpSpace();if(!this.bumpIf(">")){return this.error(ErrorKind.INVALID_TAG,createLocation(endTagStartPosition,this.clonePosition()))}return{val:{type:TYPE.tag,value:tagName,children:children,location:createLocation(startPosition,this.clonePosition())},err:null}}else{return this.error(ErrorKind.UNCLOSED_TAG,createLocation(startPosition,this.clonePosition()))}}else{return this.error(ErrorKind.INVALID_TAG,createLocation(startPosition,this.clonePosition()))}};Parser.prototype.parseTagName=function(){var startOffset=this.offset();this.bump();while(!this.isEOF()&&_isPotentialElementNameChar(this.char())){this.bump()}return this.message.slice(startOffset,this.offset())};Parser.prototype.parseLiteral=function(nestingLevel,parentArgType){var start=this.clonePosition(),value="";while(!0){var parseQuoteResult=this.tryParseQuote(parentArgType);if(parseQuoteResult){value+=parseQuoteResult;continue}var parseUnquotedResult=this.tryParseUnquoted(nestingLevel,parentArgType);if(parseUnquotedResult){value+=parseUnquotedResult;continue}var parseLeftAngleResult=this.tryParseLeftAngleBracket();if(parseLeftAngleResult){value+=parseLeftAngleResult;continue}break}var location=createLocation(start,this.clonePosition());return{val:{type:TYPE.literal,value:value,location:location},err:null}};Parser.prototype.tryParseLeftAngleBracket=function(){if(!this.isEOF()&&60===this.char()&&(this.ignoreTag||!_isAlphaOrSlash(this.peek()||0))){this.bump();return"<"}return null};Parser.prototype.tryParseQuote=function(parentArgType){if(this.isEOF()||39!==this.char()){return null}switch(this.peek()){case 39:this.bump();this.bump();return"'";case 123:case 60:case 62:case 125:break;case 35:if("plural"===parentArgType||"selectordinal"===parentArgType){break}return null;default:return null;}this.bump();var codePoints=[this.char()];this.bump();while(!this.isEOF()){var ch=this.char();if(39===ch){if(39===this.peek()){codePoints.push(39);this.bump()}else{this.bump();break}}else{codePoints.push(ch)}this.bump()}return fromCodePoint.apply(void 0,codePoints)};Parser.prototype.tryParseUnquoted=function(nestingLevel,parentArgType){if(this.isEOF()){return null}var ch=this.char();if(60===ch||123===ch||35===ch&&("plural"===parentArgType||"selectordinal"===parentArgType)||125===ch&&0<nestingLevel){return null}else{this.bump();return fromCodePoint(ch)}};Parser.prototype.parseArgument=function(nestingLevel,expectingCloseTag){var openingBracePosition=this.clonePosition();this.bump();this.bumpSpace();if(this.isEOF()){return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE,createLocation(openingBracePosition,this.clonePosition()))}if(125===this.char()){this.bump();return this.error(ErrorKind.EMPTY_ARGUMENT,createLocation(openingBracePosition,this.clonePosition()))}var value=this.parseIdentifierIfPossible().value;if(!value){return this.error(ErrorKind.MALFORMED_ARGUMENT,createLocation(openingBracePosition,this.clonePosition()))}this.bumpSpace();if(this.isEOF()){return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE,createLocation(openingBracePosition,this.clonePosition()))}switch(this.char()){case 125:{this.bump();return{val:{type:TYPE.argument,value:value,location:createLocation(openingBracePosition,this.clonePosition())},err:null}}case 44:{this.bump();this.bumpSpace();if(this.isEOF()){return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE,createLocation(openingBracePosition,this.clonePosition()))}return this.parseArgumentOptions(nestingLevel,expectingCloseTag,value,openingBracePosition)}default:return this.error(ErrorKind.MALFORMED_ARGUMENT,createLocation(openingBracePosition,this.clonePosition()));}};Parser.prototype.parseIdentifierIfPossible=function(){var startingPosition=this.clonePosition(),startOffset=this.offset(),value=matchIdentifierAtIndex(this.message,startOffset),endOffset=startOffset+value.length;this.bumpTo(endOffset);var endPosition=this.clonePosition(),location=createLocation(startingPosition,endPosition);return{value:value,location:location}};Parser.prototype.parseArgumentOptions=function(nestingLevel,expectingCloseTag,value,openingBracePosition){var _a,typeStartPosition=this.clonePosition(),argType=this.parseIdentifierIfPossible().value,typeEndPosition=this.clonePosition();switch(argType){case"":return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE,createLocation(typeStartPosition,typeEndPosition));case"number":case"date":case"time":{this.bumpSpace();var styleAndLocation=null;if(this.bumpIf(",")){this.bumpSpace();var styleStartPosition=this.clonePosition(),result=this.parseSimpleArgStyleIfPossible();if(result.err){return result}var style=trimEnd(result.val);if(0===style.length){return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE,createLocation(this.clonePosition(),this.clonePosition()))}var styleLocation=createLocation(styleStartPosition,this.clonePosition());styleAndLocation={style:style,styleLocation:styleLocation}}var argCloseResult=this.tryParseArgumentClose(openingBracePosition);if(argCloseResult.err){return argCloseResult}var location_1=createLocation(openingBracePosition,this.clonePosition());if(styleAndLocation&&startsWith(null===styleAndLocation||void 0===styleAndLocation?void 0:styleAndLocation.style,"::",0)){var skeleton=trimStart(styleAndLocation.style.slice(2));if("number"===argType){var result=this.parseNumberSkeletonFromString(skeleton,styleAndLocation.styleLocation);if(result.err){return result}return{val:{type:TYPE.number,value:value,location:location_1,style:result.val},err:null}}else{if(0===skeleton.length){return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON,location_1)}var style={type:SKELETON_TYPE.dateTime,pattern:skeleton,location:styleAndLocation.styleLocation,parsedOptions:this.shouldParseSkeletons?parseDateTimeSkeleton(skeleton):{}},type="date"===argType?TYPE.date:TYPE.time;return{val:{type:type,value:value,location:location_1,style:style},err:null}}}return{val:{type:"number"===argType?TYPE.number:"date"===argType?TYPE.date:TYPE.time,value:value,location:location_1,style:null!==(_a=null===styleAndLocation||void 0===styleAndLocation?void 0:styleAndLocation.style)&&void 0!==_a?_a:null},err:null}}case"plural":case"selectordinal":case"select":{var typeEndPosition_1=this.clonePosition();this.bumpSpace();if(!this.bumpIf(",")){return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS,createLocation(typeEndPosition_1,__assign({},typeEndPosition_1)))}this.bumpSpace();var identifierAndLocation=this.parseIdentifierIfPossible(),pluralOffset=0;if("select"!==argType&&"offset"===identifierAndLocation.value){if(!this.bumpIf(":")){return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,createLocation(this.clonePosition(),this.clonePosition()))}this.bumpSpace();var result=this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(result.err){return result}this.bumpSpace();identifierAndLocation=this.parseIdentifierIfPossible();pluralOffset=result.val}var optionsResult=this.tryParsePluralOrSelectOptions(nestingLevel,argType,expectingCloseTag,identifierAndLocation);if(optionsResult.err){return optionsResult}var argCloseResult=this.tryParseArgumentClose(openingBracePosition);if(argCloseResult.err){return argCloseResult}var location_2=createLocation(openingBracePosition,this.clonePosition());if("select"===argType){return{val:{type:TYPE.select,value:value,options:fromEntries(optionsResult.val),location:location_2},err:null}}else{return{val:{type:TYPE.plural,value:value,options:fromEntries(optionsResult.val),offset:pluralOffset,pluralType:"plural"===argType?"cardinal":"ordinal",location:location_2},err:null}}}default:return this.error(ErrorKind.INVALID_ARGUMENT_TYPE,createLocation(typeStartPosition,typeEndPosition));}};Parser.prototype.tryParseArgumentClose=function(openingBracePosition){if(this.isEOF()||125!==this.char()){return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE,createLocation(openingBracePosition,this.clonePosition()))}this.bump();return{val:!0,err:null}};Parser.prototype.parseSimpleArgStyleIfPossible=function(){var nestedBraces=0,startPosition=this.clonePosition();while(!this.isEOF()){var ch=this.char();switch(ch){case 39:{this.bump();var apostrophePosition=this.clonePosition();if(!this.bumpUntil("'")){return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,createLocation(apostrophePosition,this.clonePosition()))}this.bump();break}case 123:{nestedBraces+=1;this.bump();break}case 125:{if(0<nestedBraces){nestedBraces-=1}else{return{val:this.message.slice(startPosition.offset,this.offset()),err:null}}break}default:this.bump();break;}}return{val:this.message.slice(startPosition.offset,this.offset()),err:null}};Parser.prototype.parseNumberSkeletonFromString=function(skeleton,location){var tokens=[];try{tokens=parseNumberSkeletonFromString(skeleton)}catch(e){return this.error(ErrorKind.INVALID_NUMBER_SKELETON,location)}return{val:{type:SKELETON_TYPE.number,tokens:tokens,location:location,parsedOptions:this.shouldParseSkeletons?parseNumberSkeleton(tokens):{}},err:null}};Parser.prototype.tryParsePluralOrSelectOptions=function(nestingLevel,parentArgType,expectCloseTag,parsedFirstIdentifier){var _a,hasOtherClause=!1,options=[],parsedSelectors=new Set,selector=parsedFirstIdentifier.value,selectorLocation=parsedFirstIdentifier.location;while(!0){if(0===selector.length){var startPosition=this.clonePosition();if("select"!==parentArgType&&this.bumpIf("=")){var result=this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR,ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);if(result.err){return result}selectorLocation=createLocation(startPosition,this.clonePosition());selector=this.message.slice(startPosition.offset,this.offset())}else{break}}if(parsedSelectors.has(selector)){return this.error("select"===parentArgType?ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,selectorLocation)}if("other"===selector){hasOtherClause=!0}this.bumpSpace();var openingBracePosition=this.clonePosition();if(!this.bumpIf("{")){return this.error("select"===parentArgType?ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,createLocation(this.clonePosition(),this.clonePosition()))}var fragmentResult=this.parseMessage(nestingLevel+1,parentArgType,expectCloseTag);if(fragmentResult.err){return fragmentResult}var argCloseResult=this.tryParseArgumentClose(openingBracePosition);if(argCloseResult.err){return argCloseResult}options.push([selector,{value:fragmentResult.val,location:createLocation(openingBracePosition,this.clonePosition())}]);parsedSelectors.add(selector);this.bumpSpace();_a=this.parseIdentifierIfPossible(),selector=_a.value,selectorLocation=_a.location}if(0===options.length){return this.error("select"===parentArgType?ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR:ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR,createLocation(this.clonePosition(),this.clonePosition()))}if(this.requiresOtherClause&&!hasOtherClause){return this.error(ErrorKind.MISSING_OTHER_CLAUSE,createLocation(this.clonePosition(),this.clonePosition()))}return{val:options,err:null}};Parser.prototype.tryParseDecimalInteger=function(expectNumberError,invalidNumberError){var sign=1,startingPosition=this.clonePosition();if(this.bumpIf("+")){}else if(this.bumpIf("-")){sign=-1}var hasDigits=!1,decimal=0;while(!this.isEOF()){var ch=this.char();if(48<=ch&&57>=ch){hasDigits=!0;decimal=10*decimal+(ch-48);this.bump()}else{break}}var location=createLocation(startingPosition,this.clonePosition());if(!hasDigits){return this.error(expectNumberError,location)}decimal*=sign;if(!isSafeInteger(decimal)){return this.error(invalidNumberError,location)}return{val:decimal,err:null}};Parser.prototype.offset=function(){return this.position.offset};Parser.prototype.isEOF=function(){return this.offset()===this.message.length};Parser.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}};Parser.prototype.char=function(){var offset=this.position.offset;if(offset>=this.message.length){throw Error("out of bound")}var code=codePointAt(this.message,offset);if(code===void 0){throw Error("Offset "+offset+" is at invalid UTF-16 code unit boundary")}return code};Parser.prototype.error=function(kind,location){return{val:null,err:{kind:kind,message:this.message,location:location}}};Parser.prototype.bump=function(){if(this.isEOF()){return}var code=this.char();if(10===code){this.position.line+=1;this.position.column=1;this.position.offset+=1}else{this.position.column+=1;this.position.offset+=65536>code?1:2}};Parser.prototype.bumpIf=function(prefix){if(startsWith(this.message,prefix,this.offset())){for(var i=0;i<prefix.length;i++){this.bump()}return!0}return!1};Parser.prototype.bumpUntil=function(pattern){var currentOffset=this.offset(),index=this.message.indexOf(pattern,currentOffset);if(0<=index){this.bumpTo(index);return!0}else{this.bumpTo(this.message.length);return!1}};Parser.prototype.bumpTo=function(targetOffset){if(this.offset()>targetOffset){throw Error("targetOffset "+targetOffset+" must be greater than or equal to the current offset "+this.offset())}targetOffset=_Mathmin(targetOffset,this.message.length);while(!0){var offset=this.offset();if(offset===targetOffset){break}if(offset>targetOffset){throw Error("targetOffset "+targetOffset+" is at invalid UTF-16 code unit boundary")}this.bump();if(this.isEOF()){break}}};Parser.prototype.bumpSpace=function(){while(!this.isEOF()&&_isWhiteSpace(this.char())){this.bump()}};Parser.prototype.peek=function(){if(this.isEOF()){return null}var code=this.char(),offset=this.offset(),nextCode=this.message.charCodeAt(offset+(65536<=code?2:1));return null!==nextCode&&void 0!==nextCode?nextCode:null};return Parser}();_exports.Parser=Parser;function _isAlpha(codepoint){return 97<=codepoint&&122>=codepoint||65<=codepoint&&90>=codepoint}function _isAlphaOrSlash(codepoint){return _isAlpha(codepoint)||47===codepoint}function _isPotentialElementNameChar(c){return 45===c||46===c||48<=c&&57>=c||95===c||97<=c&&122>=c||65<=c&&90>=c||183==c||192<=c&&214>=c||216<=c&&246>=c||248<=c&&893>=c||895<=c&&8191>=c||8204<=c&&8205>=c||8255<=c&&8256>=c||8304<=c&&8591>=c||11264<=c&&12271>=c||12289<=c&&55295>=c||63744<=c&&64975>=c||65008<=c&&65533>=c||65536<=c&&983039>=c}function _isWhiteSpace(c){return 9<=c&&13>=c||32===c||133===c||8206<=c&&8207>=c||8232===c||8233===c}function _isPatternSyntax(c){return 33<=c&&35>=c||36===c||37<=c&&39>=c||40===c||41===c||42===c||43===c||44===c||45===c||46<=c&&47>=c||58<=c&&59>=c||60<=c&&62>=c||63<=c&&64>=c||91===c||92===c||93===c||94===c||96===c||123===c||124===c||125===c||126===c||161===c||162<=c&&165>=c||166===c||167===c||169===c||171===c||172===c||174===c||176===c||177===c||182===c||187===c||191===c||215===c||247===c||8208<=c&&8213>=c||8214<=c&&8215>=c||8216===c||8217===c||8218===c||8219<=c&&8220>=c||8221===c||8222===c||8223===c||8224<=c&&8231>=c||8240<=c&&8248>=c||8249===c||8250===c||8251<=c&&8254>=c||8257<=c&&8259>=c||8260===c||8261===c||8262===c||8263<=c&&8273>=c||8274===c||8275===c||8277<=c&&8286>=c||8592<=c&&8596>=c||8597<=c&&8601>=c||8602<=c&&8603>=c||8604<=c&&8607>=c||8608===c||8609<=c&&8610>=c||8611===c||8612<=c&&8613>=c||8614===c||8615<=c&&8621>=c||8622===c||8623<=c&&8653>=c||8654<=c&&8655>=c||8656<=c&&8657>=c||8658===c||8659===c||8660===c||8661<=c&&8691>=c||8692<=c&&8959>=c||8960<=c&&8967>=c||8968===c||8969===c||8970===c||8971===c||8972<=c&&8991>=c||8992<=c&&8993>=c||8994<=c&&9e3>=c||9001===c||9002===c||9003<=c&&9083>=c||9084===c||9085<=c&&9114>=c||9115<=c&&9139>=c||9140<=c&&9179>=c||9180<=c&&9185>=c||9186<=c&&9254>=c||9255<=c&&9279>=c||9280<=c&&9290>=c||9291<=c&&9311>=c||9472<=c&&9654>=c||9655===c||9656<=c&&9664>=c||9665===c||9666<=c&&9719>=c||9720<=c&&9727>=c||9728<=c&&9838>=c||9839===c||9840<=c&&10087>=c||10088===c||10089===c||10090===c||10091===c||10092===c||10093===c||10094===c||10095===c||10096===c||10097===c||10098===c||10099===c||10100===c||10101===c||10132<=c&&10175>=c||10176<=c&&10180>=c||10181===c||10182===c||10183<=c&&10213>=c||10214===c||10215===c||10216===c||10217===c||10218===c||10219===c||10220===c||10221===c||10222===c||10223===c||10224<=c&&10239>=c||10240<=c&&10495>=c||10496<=c&&10626>=c||10627===c||10628===c||10629===c||10630===c||10631===c||10632===c||10633===c||10634===c||10635===c||10636===c||10637===c||10638===c||10639===c||10640===c||10641===c||10642===c||10643===c||10644===c||10645===c||10646===c||10647===c||10648===c||10649<=c&&10711>=c||10712===c||10713===c||10714===c||10715===c||10716<=c&&10747>=c||10748===c||10749===c||10750<=c&&11007>=c||11008<=c&&11055>=c||11056<=c&&11076>=c||11077<=c&&11078>=c||11079<=c&&11084>=c||11085<=c&&11123>=c||11124<=c&&11125>=c||11126<=c&&11157>=c||11158===c||11159<=c&&11263>=c||11776<=c&&11777>=c||11778===c||11779===c||11780===c||11781===c||11782<=c&&11784>=c||11785===c||11786===c||11787===c||11788===c||11789===c||11790<=c&&11798>=c||11799===c||11800<=c&&11801>=c||11802===c||11803===c||11804===c||11805===c||11806<=c&&11807>=c||11808===c||11809===c||11810===c||11811===c||11812===c||11813===c||11814===c||11815===c||11816===c||11817===c||11818<=c&&11822>=c||11823===c||11824<=c&&11833>=c||11834<=c&&11835>=c||11836<=c&&11839>=c||11840===c||11841===c||11842===c||11843<=c&&11855>=c||11856<=c&&11857>=c||11858===c||11859<=c&&11903>=c||12289<=c&&12291>=c||12296===c||12297===c||12298===c||12299===c||12300===c||12301===c||12302===c||12303===c||12304===c||12305===c||12306<=c&&12307>=c||12308===c||12309===c||12310===c||12311===c||12312===c||12313===c||12314===c||12315===c||12316===c||12317===c||12318<=c&&12319>=c||12320===c||12336===c||64830===c||64831===c||65093<=c&&65094>=c}var parser={Parser:Parser};_exports.$parser=parser;function pruneLocation(els){els.forEach(function(el){delete el.location;if(isSelectElement(el)||isPluralElement(el)){for(var k in el.options){delete el.options[k].location;pruneLocation(el.options[k].value)}}else if(isNumberElement(el)&&isNumberSkeleton(el.style)){delete el.style.location}else if((isDateElement(el)||isTimeElement(el))&&isDateTimeSkeleton(el.style)){delete el.style.location}else if(isTagElement(el)){pruneLocation(el.children)}})}function parse$1(message,opts){if(void 0===opts){opts={}}opts=__assign({shouldParseSkeletons:!0,requiresOtherClause:!0},opts);var result=new Parser(message,opts).parse();if(result.err){var error=SyntaxError(ErrorKind[result.err.kind]);error.location=result.err.location;error.originalMessage=result.err.message;throw error}if(!(null===opts||void 0===opts?void 0:opts.captureLocation)){pruneLocation(result.val)}return result.val}var index$2={parse:parse$1,get TYPE(){return TYPE},get SKELETON_TYPE(){return SKELETON_TYPE},isLiteralElement:isLiteralElement,isArgumentElement:isArgumentElement,isNumberElement:isNumberElement,isDateElement:isDateElement,isTimeElement:isTimeElement,isSelectElement:isSelectElement,isPluralElement:isPluralElement,isPoundElement:isPoundElement,isTagElement:isTagElement,isNumberSkeleton:isNumberSkeleton,isDateTimeSkeleton:isDateTimeSkeleton,createLiteralElement:createLiteralElement,createNumberElement:createNumberElement};_exports.$index$1=index$2;const template=html`
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
</custom-style>`;template.setAttribute("style","display: none;");document.head.appendChild(template.content);var style=document.createElement("style");style.textContent="[hidden] { display: none !important; }";document.head.appendChild(style);Polymer({_template:html`
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
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){afterNextRender(this,function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this);this.addEventListener("keydown",this._tabKeydownHandler.bind(this));this.listen(this,"track","_track");this.setScrollDirection("y")});this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":this._setPosition(this._isRTL()?"right":"left");return;case"end":this._setPosition(this._isRTL()?"left":"right");return;}this._setPosition(this.align)},_escKeydownHandler:function(event){var ESC_KEYCODE=27;if(event.keyCode===ESC_KEYCODE){event.preventDefault();this.close()}},_track:function(event){if(this.persistent||this.disableSwipe){return}event.preventDefault();switch(event.detail.state){case"start":this._trackStart(event);break;case"track":this._trackMove(event);break;case"end":this._trackEnd(event);break;}},_trackStart:function(event){this._drawerState=this._DRAWER_STATE.TRACKING;var rect=this.$.contentContainer.getBoundingClientRect();this._savedWidth=rect.width;if("left"===this.position){this._translateOffset=rect.left}else{this._translateOffset=rect.right-window.innerWidth}this._trackDetails=[];this._styleTransitionDuration(0);this.style.visibility="visible"},_trackMove:function(event){this._translateDrawer(event.detail.dx+this._translateOffset);this._trackDetails.push({dx:event.detail.dx,timeStamp:Date.now()})},_trackEnd:function(event){var x=event.detail.dx+this._translateOffset,drawerWidth=this.getWidth(),isPositionLeft="left"===this.position,isInEndState=isPositionLeft?0<=x||x<=-drawerWidth:0>=x||x>=drawerWidth;if(!isInEndState){var trackDetails=this._trackDetails;this._trackDetails=null;this._flingDrawer(event,trackDetails);if(this._drawerState===this._DRAWER_STATE.FLINGING){return}}var halfWidth=drawerWidth/2;if(event.detail.dx<-halfWidth){this.opened="right"===this.position}else if(event.detail.dx>halfWidth){this.opened="left"===this.position}if(isInEndState){this.debounce("_resetDrawerState",this._resetDrawerState)}else{this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)}this._styleTransitionDuration(this.transitionDuration);this._resetDrawerTranslate();this.style.visibility=""},_calculateVelocity:function(event,trackDetails){var now=Date.now(),timeLowerBound=now-100,trackDetail,min=0,max=trackDetails.length-1;while(min<=max){var mid=min+max>>1,d=trackDetails[mid];if(d.timeStamp>=timeLowerBound){trackDetail=d;max=mid-1}else{min=mid+1}}if(trackDetail){var dx=event.detail.dx-trackDetail.dx,dt=now-trackDetail.timeStamp||1;return dx/dt}return 0},_flingDrawer:function(event,trackDetails){var velocity=this._calculateVelocity(event,trackDetails);if(_Mathabs(velocity)<this._MIN_FLING_THRESHOLD){return}this._drawerState=this._DRAWER_STATE.FLINGING;var x=event.detail.dx+this._translateOffset,drawerWidth=this.getWidth(),isPositionLeft="left"===this.position,isVelocityPositive=0<velocity,isClosingLeft=!isVelocityPositive&&isPositionLeft,isClosingRight=isVelocityPositive&&!isPositionLeft,dx;if(isClosingLeft){dx=-(x+drawerWidth)}else if(isClosingRight){dx=drawerWidth-x}else{dx=-x}if(isVelocityPositive){velocity=_Mathmax(velocity,this._MIN_TRANSITION_VELOCITY);this.opened="left"===this.position}else{velocity=_Mathmin(velocity,-this._MIN_TRANSITION_VELOCITY);this.opened="right"===this.position}var t=this._FLING_INITIAL_SLOPE*dx/velocity;this._styleTransitionDuration(t);this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION);this._resetDrawerTranslate();this.debounce("_resetDrawerState",this._resetDrawerState,t)},_styleTransitionDuration:function(duration){this.style.transitionDuration=duration+"ms";this.$.contentContainer.style.transitionDuration=duration+"ms";this.$.scrim.style.transitionDuration=duration+"ms"},_styleTransitionTimingFunction:function(timingFunction){this.$.contentContainer.style.transitionTimingFunction=timingFunction;this.$.scrim.style.transitionTimingFunction=timingFunction},_translateDrawer:function(x){var drawerWidth=this.getWidth();if("left"===this.position){x=_Mathmax(-drawerWidth,_Mathmin(x,0));this.$.scrim.style.opacity=1+x/drawerWidth}else{x=_Mathmax(0,_Mathmin(x,drawerWidth));this.$.scrim.style.opacity=1-x/drawerWidth}this.translate3d(x+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="";this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var oldState=this._drawerState;if(oldState===this._DRAWER_STATE.FLINGING){this._styleTransitionDuration(this.transitionDuration);this._styleTransitionTimingFunction("");this.style.visibility=""}this._savedWidth=null;if(this.opened){this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED}else{this._drawerState=this._DRAWER_STATE.CLOSED}if(oldState!==this._drawerState){if(this._drawerState===this._DRAWER_STATE.OPENED){this._setKeyboardFocusTrap();document.addEventListener("keydown",this._boundEscKeydownHandler);document.body.style.overflow="hidden"}else{document.removeEventListener("keydown",this._boundEscKeydownHandler);document.body.style.overflow=""}if(oldState!==this._DRAWER_STATE.INIT){this.fire("app-drawer-transitioned")}}},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(this.noFocusTrap){return}var focusableElementsSelector=["a[href]:not([tabindex=\"-1\"])","area[href]:not([tabindex=\"-1\"])","input:not([disabled]):not([tabindex=\"-1\"])","select:not([disabled]):not([tabindex=\"-1\"])","textarea:not([disabled]):not([tabindex=\"-1\"])","button:not([disabled]):not([tabindex=\"-1\"])","iframe:not([tabindex=\"-1\"])","[tabindex]:not([tabindex=\"-1\"])","[contentEditable=true]:not([tabindex=\"-1\"])"].join(","),focusableElements=dom(this).querySelectorAll(focusableElementsSelector);if(0<focusableElements.length){this._firstTabStop=focusableElements[0];this._lastTabStop=focusableElements[focusableElements.length-1]}else{this._firstTabStop=null;this._lastTabStop=null}var tabindex=this.getAttribute("tabindex");if(tabindex&&-1<parseInt(tabindex,10)){this.focus()}else if(this._firstTabStop){this._firstTabStop.focus()}},_tabKeydownHandler:function(event){if(this.noFocusTrap){return}var TAB_KEYCODE=9;if(this._drawerState===this._DRAWER_STATE.OPENED&&event.keyCode===TAB_KEYCODE){if(event.shiftKey){if(this._firstTabStop&&dom(event).localTarget===this._firstTabStop){event.preventDefault();this._lastTabStop.focus()}}else{if(this._lastTabStop&&dom(event).localTarget===this._lastTabStop){event.preventDefault();this._firstTabStop.focus()}}}},_openedPersistentChanged:function(opened,persistent){this.toggleClass("visible",opened&&!persistent,this.$.scrim);this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}});var ORPHANS=new Set;const IronResizableBehavior={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},notifyResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this);this._fireResize()},assignParentResizable:function(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&-1===parentResizable._interestedResizables.indexOf(this)){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this)}},stopResizeNotificationsFor:function(target){var index=this._interestedResizables.indexOf(target);if(-1<index){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target)}},_subscribeIronResize:function(target){target.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(target){target.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(element){return!0},_onDescendantIronResize:function(event){if(this._notifyingDescendant){event.stopPropagation();return}if(!useShadow){this._fireResize()}},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(event){var target=dom(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function(descendant){if(!this.isAttached){return}this._notifyingDescendant=!0;descendant.notifyResize();this._notifyingDescendant=!1},_requestResizeNotifications:function(){if(!this.isAttached){return}if("loading"===document.readyState){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()})}else{this._findParent();if(!this._parentResizable){ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent()}},this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent()}},this)}}},_findParent:function(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};_exports.IronResizableBehavior=IronResizableBehavior;var ironResizableBehavior={IronResizableBehavior:IronResizableBehavior};_exports.$ironResizableBehavior=ironResizableBehavior;const AppLayoutBehavior=[IronResizableBehavior,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(e){if(dom(e).path[0]===this){return}this.resetLayout();e.stopPropagation()},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var self=this,cb=this._updateLayoutStates.bind(this);this._layoutDebouncer=Debouncer.debounce(this._layoutDebouncer,animationFrame,cb);enqueueDebouncer(this._layoutDebouncer);this._notifyDescendantResize()},_notifyLayoutChanged:function(){var self=this;requestAnimationFrame(function(){self.fire("app-reset-layout")})},_notifyDescendantResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this)}}];_exports.AppLayoutBehavior=AppLayoutBehavior;var appLayoutBehavior={AppLayoutBehavior:AppLayoutBehavior};_exports.$appLayoutBehavior=appLayoutBehavior;const IronScrollTargetBehavior={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(scrollTarget,isAttached){var eventTarget;if(this._oldScrollTarget){this._toggleScrollListener(!1,this._oldScrollTarget);this._oldScrollTarget=null}if(!isAttached){return}if("document"===scrollTarget){this.scrollTarget=this._doc}else if("string"===typeof scrollTarget){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:dom(this.ownerDocument).querySelector("#"+scrollTarget)}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget)}},_scrollHandler:function scrollHandler(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop}return 0},get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft}return 0},set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top}},set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left}},scroll:function(leftOrOptions,top){var left;if("object"===typeof leftOrOptions){left=leftOrOptions.left;top=leftOrOptions.top}else{left=leftOrOptions}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top}},get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth}return 0},get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight}return 0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener("scroll",this._boundScrollHandler)}}else{if(this._boundScrollHandler){eventTarget.removeEventListener("scroll",this._boundScrollHandler);this._boundScrollHandler=null}}},toggleScrollListener:function(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget)}};_exports.IronScrollTargetBehavior=IronScrollTargetBehavior;var ironScrollTargetBehavior={IronScrollTargetBehavior:IronScrollTargetBehavior};_exports.$ironScrollTargetBehavior=ironScrollTargetBehavior;const _scrollEffects={};_exports._scrollEffects=_scrollEffects;let _scrollTimer=null;_exports._scrollTimer=_scrollTimer;const scrollTimingFunction=function easeOutQuad(t,b,c,d){t/=d;return-c*t*(t-2)+b};_exports.scrollTimingFunction=scrollTimingFunction;const registerEffect=function registerEffect(effectName,effectDef){if(null!=_scrollEffects[effectName]){throw new Error("effect `"+effectName+"` is already registered.")}_scrollEffects[effectName]=effectDef};_exports.registerEffect=registerEffect;const queryAllRoot=function(selector,root){var queue=[root],matches=[];while(0<queue.length){var node=queue.shift();matches.push.apply(matches,node.querySelectorAll(selector));for(var i=0;node.children[i];i++){if(node.children[i].shadowRoot){queue.push(node.children[i].shadowRoot)}}}return matches};_exports.queryAllRoot=queryAllRoot;const scroll=function scroll(options){options=options||{};var docEl=document.documentElement,target=options.target||docEl,hasNativeScrollBehavior="scrollBehavior"in target.style&&target.scroll,scrollClassName="app-layout-silent-scroll",scrollTop=options.top||0,scrollLeft=options.left||0,scrollTo=target===docEl?window.scrollTo:function scrollTo(scrollLeft,scrollTop){target.scrollLeft=scrollLeft;target.scrollTop=scrollTop};if("smooth"===options.behavior){if(hasNativeScrollBehavior){target.scroll(options)}else{var timingFn=scrollTimingFunction,startTime=Date.now(),currentScrollTop=target===docEl?window.pageYOffset:target.scrollTop,currentScrollLeft=target===docEl?window.pageXOffset:target.scrollLeft,deltaScrollTop=scrollTop-currentScrollTop,deltaScrollLeft=scrollLeft-currentScrollLeft,duration=300,updateFrame=function updateFrame(){var now=Date.now(),elapsedTime=now-startTime;if(elapsedTime<duration){scrollTo(timingFn(elapsedTime,currentScrollLeft,deltaScrollLeft,duration),timingFn(elapsedTime,currentScrollTop,deltaScrollTop,duration));requestAnimationFrame(updateFrame)}else{scrollTo(scrollLeft,scrollTop)}}.bind(this);updateFrame()}}else if("silent"===options.behavior){var headers=queryAllRoot("app-header",document.body);headers.forEach(function(header){header.setAttribute("silent-scroll","")});if(_scrollTimer){window.cancelAnimationFrame(_scrollTimer)}_exports._scrollTimer=_scrollTimer=window.requestAnimationFrame(function(){headers.forEach(function(header){header.removeAttribute("silent-scroll")});_exports._scrollTimer=_scrollTimer=null});scrollTo(scrollLeft,scrollTop)}else{scrollTo(scrollLeft,scrollTop)}};_exports.scroll=scroll;var helpers={_scrollEffects:_scrollEffects,get _scrollTimer(){return _scrollTimer},scrollTimingFunction:scrollTimingFunction,registerEffect:registerEffect,queryAllRoot:queryAllRoot,scroll:scroll};_exports.$helpers=helpers;const AppScrollEffectsBehavior=[IronScrollTargetBehavior,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(scrollTop){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return _Mathmax(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(effectName,effectConfig){var effectDef=_scrollEffects[effectName];if(!effectDef){throw new ReferenceError(this._getUndefinedMsg(effectName))}var prop=this._boundEffect(effectDef,effectConfig||{});prop.setUp();return prop},_effectsChanged:function(effects,effectsConfig,isAttached){this._tearDownEffects();if(!effects||!isAttached){return}effects.split(" ").forEach(function(effectName){var effectDef;if(""!==effectName){if(effectDef=_scrollEffects[effectName]){this._effects.push(this._boundEffect(effectDef,effectsConfig[effectName]))}else{console.warn(this._getUndefinedMsg(effectName))}}},this);this._setUpEffect()},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(effectDef,effectsConfig){effectsConfig=effectsConfig||{};var startsAt=parseFloat(effectsConfig.startsAt||0),endsAt=parseFloat(effectsConfig.endsAt||1),deltaS=endsAt-startsAt,noop=function(){},runFn=0===startsAt&&1===endsAt?effectDef.run:function(progress,y){effectDef.run.call(this,_Mathmax(0,(progress-startsAt)/deltaS),y)};return{setUp:effectDef.setUp?effectDef.setUp.bind(this,effectsConfig):noop,run:effectDef.run?runFn.bind(this):noop,tearDown:effectDef.tearDown?effectDef.tearDown.bind(this):noop}},_setUpEffect:function(){if(this.isAttached&&this._effects){this._effectsRunFn=[];this._effects.forEach(function(effectDef){if(!1!==effectDef.setUp()){this._effectsRunFn.push(effectDef.run)}},this)}},_tearDownEffects:function(){if(this._effects){this._effects.forEach(function(effectDef){effectDef.tearDown()})}this._effectsRunFn=[];this._effects=[]},_runEffects:function(p,y){if(this._effectsRunFn){this._effectsRunFn.forEach(function(run){run(p,y)})}},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var scrollTop=this._clampedScrollTop;this._updateScrollState(scrollTop);if(0<this.threshold){this._setThresholdTriggered(scrollTop>=this.threshold)}}},_getDOMRef:function(id){console.warn("_getDOMRef","`"+id+"` is undefined")},_getUndefinedMsg:function(effectName){return"Scroll effect `"+effectName+"` is undefined. "+"Did you forget to import app-layout/app-scroll-effects/effects/"+effectName+".html ?"}}];_exports.AppScrollEffectsBehavior=AppScrollEffectsBehavior;var appScrollEffectsBehavior={AppScrollEffectsBehavior:AppScrollEffectsBehavior};_exports.$appScrollEffectsBehavior=appScrollEffectsBehavior;Polymer({_template:html`
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
`,is:"app-header",behaviors:[AppScrollEffectsBehavior,AppLayoutBehavior],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef){return this._stickyElRef}for(var nodes=dom(this.$.slot).getDistributedNodes(),i=0,node;node=nodes[i];i++){if(node.nodeType===Node.ELEMENT_NODE){if(node.hasAttribute("sticky")){this._stickyElRef=node;break}else if(!this._stickyElRef){this._stickyElRef=node}}}return this._stickyElRef},_configChanged:function(){this.resetLayout();this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0===this.offsetWidth&&0===this.offsetHeight){return}var scrollTop=this._clampedScrollTop,firstSetup=0===this._height||0===scrollTop,currentDisabled=this.disabled;this._height=this.offsetHeight;this._stickyElRef=null;this.disabled=!0;if(!firstSetup){this._updateScrollState(0,!0)}if(this._mayMove()){this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0}else{this._dHeight=0}this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0;this._setUpEffect();if(firstSetup){this._updateScrollState(scrollTop,!0)}else{this._updateScrollState(this._lastScrollTop,!0);this._layoutIfDirty()}this.disabled=currentDisabled},_updateScrollState:function(scrollTop,forceUpdate){if(0===this._height){return}var progress=0,top=0,lastTop=this._top,lastScrollTop=this._lastScrollTop,maxHeaderTop=this._maxHeaderTop,dScrollTop=scrollTop-this._lastScrollTop,absDScrollTop=_Mathabs(dScrollTop),isScrollingDown=scrollTop>this._lastScrollTop,now=performance.now();if(this._mayMove()){top=this._clamp(this.reveals?lastTop+dScrollTop:scrollTop,0,maxHeaderTop)}if(scrollTop>=this._dHeight){top=this.condenses&&!this.fixed?_Mathmax(this._dHeight,top):top;this.style.transitionDuration="0ms"}if(this.reveals&&!this.disabled&&100>absDScrollTop){if(300<now-this._initTimestamp||this._wasScrollingDown!==isScrollingDown){this._initScrollTop=scrollTop;this._initTimestamp=now}if(scrollTop>=maxHeaderTop){if(30<_Mathabs(this._initScrollTop-scrollTop)||10<absDScrollTop){if(isScrollingDown&&scrollTop>=maxHeaderTop){top=maxHeaderTop}else if(!isScrollingDown&&scrollTop>=this._dHeight){top=this.condenses&&!this.fixed?this._dHeight:0}var scrollVelocity=dScrollTop/(now-this._lastTimestamp);this.style.transitionDuration=this._clamp((top-lastTop)/scrollVelocity,0,300)+"ms"}else{top=this._top}}}if(0===this._dHeight){progress=0<scrollTop?1:0}else{progress=top/this._dHeight}if(!forceUpdate){this._lastScrollTop=scrollTop;this._top=top;this._wasScrollingDown=isScrollingDown;this._lastTimestamp=now}if(forceUpdate||progress!==this._progress||lastTop!==top||0===scrollTop){this._progress=progress;this._runEffects(progress,top);this._transformHeader(top)}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return 0<this._dHeight&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?0<this._clampedScrollTop:0<=this._clampedScrollTop-this._maxHeaderTop},_transformHeader:function(y){this.translate3d(0,-y+"px",0);if(this._stickyEl){this.translate3d(0,this.condenses&&y>=this._stickyElTop?_Mathmin(y,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)}},_clamp:function(v,min,max){return _Mathmin(max,_Mathmax(min,v))},_ensureBgContainers:function(){if(!this._bgContainer){this._bgContainer=document.createElement("div");this._bgContainer.id="background";this._bgRear=document.createElement("div");this._bgRear.id="backgroundRearLayer";this._bgContainer.appendChild(this._bgRear);this._bgFront=document.createElement("div");this._bgFront.id="backgroundFrontLayer";this._bgContainer.appendChild(this._bgFront);dom(this.root).insertBefore(this._bgContainer,this.$.contentContainer)}},_getDOMRef:function(id){switch(id){case"backgroundFrontLayer":this._ensureBgContainers();return this._bgFront;case"backgroundRearLayer":this._ensureBgContainers();return this._bgRear;case"background":this._ensureBgContainers();return this._bgContainer;case"mainTitle":return dom(this).querySelector("[main-title]");case"condensedTitle":return dom(this).querySelector("[condensed-title]");}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}});registerEffect("waterfall",{run:function run(){this.shadow=this.isOnScreen()&&this.isContentBelow()}});if(!window.polymerSkipLoadingFontRoboto){const link=document.createElement("link");link.rel="stylesheet";link.type="text/css";link.crossOrigin="anonymous";link.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic";document.head.appendChild(link)}const IronA11yAnnouncer=Polymer({_template:html`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=this}document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(text){this._text="";this.async(function(){this._text=text},100)},_onIronAnnounce:function(event){if(event.detail&&event.detail.text){this.announce(event.detail.text)}}});_exports.IronA11yAnnouncer=IronA11yAnnouncer;IronA11yAnnouncer.instance=null;IronA11yAnnouncer.requestAvailability=function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=document.createElement("iron-a11y-announcer")}document.body.appendChild(IronA11yAnnouncer.instance)};var ironA11yAnnouncer={IronA11yAnnouncer:IronA11yAnnouncer};_exports.$ironA11yAnnouncer=ironA11yAnnouncer;var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},KEY_CHAR=/[a-z0-9*]/,IDENT_CHAR=/U\+/,ARROW_KEY=/^arrow/,SPACE_KEY=/^space(bar)?/,ESC_KEY=/^escape$/;function transformKey(key,noSpecialChars){var validKey="";if(key){var lKey=key.toLowerCase();if(" "===lKey||SPACE_KEY.test(lKey)){validKey="space"}else if(ESC_KEY.test(lKey)){validKey="esc"}else if(1==lKey.length){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace("arrow","")}else if("multiply"==lKey){validKey="*"}else{validKey=lKey}}return validKey}function transformKeyIdentifier(keyIdent){var validKey="";if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent]}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace("U+","0x"),16);validKey=_StringfromCharCode(keyIdent).toLowerCase()}else{validKey=keyIdent.toLowerCase()}}return validKey}function transformKeyCode(keyCode){var validKey="";if(+keyCode){if(65<=keyCode&&90>=keyCode){validKey=_StringfromCharCode(32+keyCode)}else if(112<=keyCode&&123>=keyCode){validKey="f"+(keyCode-112+1)}else if(48<=keyCode&&57>=keyCode){validKey=keyCode-48+""}else if(96<=keyCode&&105>=keyCode){validKey=keyCode-96+""}else{validKey=KEY_CODE[keyCode]}}return validKey}function normalizedKeyForEvent(keyEvent,noSpecialChars){if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars)}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars)}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||""}function keyComboMatchesEvent(keyCombo,event){var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey)}function parseKeyComboString(keyComboString){if(1===keyComboString.length){return{combo:keyComboString,key:keyComboString,event:"keydown"}}return keyComboString.split("+").reduce(function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(":"),keyName=eventParts[0],event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=!0;parsedKeyCombo.hasModifiers=!0}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||"keydown"}return parsedKeyCombo},{combo:keyComboString.split(":").shift()})}function parseEventString(eventString){return eventString.trim().split(" ").map(function(keyComboString){return parseKeyComboString(keyComboString)})}const IronA11yKeysBehavior={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(event,eventString){for(var keyCombos=parseEventString(eventString),i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return!0}}return!1},_collectKeyBindings:function(){var keyBindings=this.behaviors.map(function(behavior){return behavior.keyBindings});if(-1===keyBindings.indexOf(this.keyBindings)){keyBindings.push(this.keyBindings)}return keyBindings},_prepKeyBindings:function(){this._keyBindings={};this._collectKeyBindings().forEach(function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString])}},this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString])}for(var eventName in this._keyBindings){this._keyBindings[eventName].sort(function(kb1,kb2){var b1=kb1[0].hasModifiers,b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1})}},_addKeyBinding:function(eventString,handlerName){parseEventString(eventString).forEach(function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners()}},_listenKeyEventListeners:function(){if(!this.keyEventTarget){return}Object.keys(this._keyBindings).forEach(function(eventName){var keyBindings=this._keyBindings[eventName],boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler)},this)},_unlistenKeyEventListeners:function(){var keyHandlerTuple,keyEventTarget,eventName,boundKeyHandler;while(this._boundKeyHandlers.length){keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler)}},_onKeyBindingEvent:function(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation()}if(event.defaultPrevented){return}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0],handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);if(event.defaultPrevented){return}}}},_triggerKeyHandler:function(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:!0});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault()}}};_exports.IronA11yKeysBehavior=IronA11yKeysBehavior;var ironA11yKeysBehavior={IronA11yKeysBehavior:IronA11yKeysBehavior};_exports.$ironA11yKeysBehavior=ironA11yKeysBehavior;const IronControlState={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0);this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(event){this._setFocused("focus"===event.type);return},_disabledChanged:function(disabled,old){this.setAttribute("aria-disabled",disabled?"true":"false");this.style.pointerEvents=disabled?"none":"";if(disabled){this._oldTabIndex=this.getAttribute("tabindex");this._setFocused(!1);this.tabIndex=-1;this.blur()}else if(this._oldTabIndex!==void 0){if(null===this._oldTabIndex){this.removeAttribute("tabindex")}else{this.setAttribute("tabindex",this._oldTabIndex)}}},_changedControlState:function(){if(this._controlStateChanged){this._controlStateChanged()}}};_exports.IronControlState=IronControlState;var ironControlState={IronControlState:IronControlState};_exports.$ironControlState=ironControlState;const IronButtonStateImpl={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){if(this.toggles){this._userActivate(!this.active)}else{this.active=!1}},_focusChanged:function(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(!1)}},_detectKeyboardFocus:function(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},_userActivate:function(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function(event){this._setPointerDown(!0);this._setPressed(!0);this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1);this._setPressed(!1)},_spaceKeyDownHandler:function(event){var keyboardEvent=event.detail.keyboardEvent,target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(!0)},_spaceKeyUpHandler:function(event){var keyboardEvent=event.detail.keyboardEvent,target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;if(this.pressed){this._asyncClick()}this._setPressed(!1)},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(pressed){this._changedButtonState()},_ariaActiveAttributeChanged:function(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function(){if(this.disabled){this._setPressed(!1)}else{this._changedButtonState()}},_changedButtonState:function(){if(this._buttonStateChanged){this._buttonStateChanged()}}};_exports.IronButtonStateImpl=IronButtonStateImpl;const IronButtonState=[IronA11yKeysBehavior,IronButtonStateImpl];_exports.IronButtonState=IronButtonState;var ironButtonState={IronButtonStateImpl:IronButtonStateImpl,IronButtonState:IronButtonState};_exports.$ironButtonState=ironButtonState;const IronFormElementBehavior={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};_exports.IronFormElementBehavior=IronFormElementBehavior;var ironFormElementBehavior={IronFormElementBehavior:IronFormElementBehavior};_exports.$ironFormElementBehavior=ironFormElementBehavior;class IronMeta{constructor(options){IronMeta[" "](options);this.type=options&&options.type||"default";this.key=options&&options.key;if(options&&"value"in options){this.value=options.value}}get value(){var type=this.type,key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}set value(value){var type=this.type,key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(null==value){delete type[key]}else{type[key]=value}}}get list(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map(function(key){return metaDatas[this.type][key]},this)}}byKey(key){this.key=key;return this.value}}_exports.IronMeta=IronMeta;;IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;Polymer({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==void 0&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(self){if(self){this.value=this}},byKey:function(key){return new IronMeta({type:this.type,key:key}).value}});var ironMeta={IronMeta:IronMeta};_exports.$ironMeta=ironMeta;let IronValidatableBehaviorMeta=null;_exports.IronValidatableBehaviorMeta=IronValidatableBehaviorMeta;const IronValidatableBehavior={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){_exports.IronValidatableBehaviorMeta=IronValidatableBehaviorMeta=new IronMeta({type:"validator"})},_invalidChanged:function(){if(this.invalid){this.setAttribute("aria-invalid","true")}else{this.removeAttribute("aria-invalid")}},get _validator(){return IronValidatableBehaviorMeta&&IronValidatableBehaviorMeta.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(value){if(value===void 0&&this.value!==void 0)this.invalid=!this._getValidity(this.value);else this.invalid=!this._getValidity(value);return!this.invalid},_getValidity:function(value){if(this.hasValidator()){return this._validator.validate(value)}return!0}};_exports.IronValidatableBehavior=IronValidatableBehavior;var ironValidatableBehavior={get IronValidatableBehaviorMeta(){return IronValidatableBehaviorMeta},IronValidatableBehavior:IronValidatableBehavior};_exports.$ironValidatableBehavior=ironValidatableBehavior;const IronCheckedElementBehaviorImpl={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(_value){return this.disabled||!this.required||this.checked},_requiredChanged:function(){if(this.required){this.setAttribute("aria-required","true")}else{this.removeAttribute("aria-required")}},_checkedChanged:function(){this.active=this.checked;this.fire("iron-change")},_valueChanged:function(){if(this.value===void 0||null===this.value){this.value="on"}}};_exports.IronCheckedElementBehaviorImpl=IronCheckedElementBehaviorImpl;const IronCheckedElementBehavior=[IronFormElementBehavior,IronValidatableBehavior,IronCheckedElementBehaviorImpl];_exports.IronCheckedElementBehavior=IronCheckedElementBehavior;var ironCheckedElementBehavior={IronCheckedElementBehaviorImpl:IronCheckedElementBehaviorImpl,IronCheckedElementBehavior:IronCheckedElementBehavior};_exports.$ironCheckedElementBehavior=ironCheckedElementBehavior;const IronFitBehavior={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){var fitWidth;if(this.fitInto===window){fitWidth=this.fitInto.innerWidth}else{fitWidth=this.fitInto.getBoundingClientRect().width}return fitWidth},get _fitHeight(){var fitHeight;if(this.fitInto===window){fitHeight=this.fitInto.innerHeight}else{fitHeight=this.fitInto.getBoundingClientRect().height}return fitHeight},get _fitLeft(){var fitLeft;if(this.fitInto===window){fitLeft=0}else{fitLeft=this.fitInto.getBoundingClientRect().left}return fitLeft},get _fitTop(){var fitTop;if(this.fitInto===window){fitTop=0}else{fitTop=this.fitInto.getBoundingClientRect().top}return fitTop},get _defaultPositionTarget(){var parent=dom(this).parentNode;if(parent&&parent.nodeType===Node.DOCUMENT_FRAGMENT_NODE){parent=parent.host}return parent},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign){return"left"}if("left"===this.horizontalAlign){return"right"}}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},attached:function(){if("undefined"===typeof this._isRTL){this._isRTL="rtl"==window.getComputedStyle(this).direction}this.positionTarget=this.positionTarget||this._defaultPositionTarget;if(this.autoFitOnAttach){if("none"===window.getComputedStyle(this).display){setTimeout(function(){this.fit()}.bind(this))}else{window.ShadyDOM&&ShadyDOM.flush();this.fit()}}},detached:function(){if(this.__deferredFit){clearTimeout(this.__deferredFit);this.__deferredFit=null}},fit:function(){this.position();this.constrain();this.center()},_discoverInfo:function(){if(this._fitInfo){return}var target=window.getComputedStyle(this),sizer=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==target.top?"top":"auto"!==target.bottom?"bottom":null,horizontally:"auto"!==target.left?"left":"auto"!==target.right?"right":null},sizedBy:{height:"none"!==sizer.maxHeight,width:"none"!==sizer.maxWidth,minWidth:parseInt(sizer.minWidth,10)||0,minHeight:parseInt(sizer.minHeight,10)||0},margin:{top:parseInt(target.marginTop,10)||0,right:parseInt(target.marginRight,10)||0,bottom:parseInt(target.marginBottom,10)||0,left:parseInt(target.marginLeft,10)||0}}},resetFit:function(){var info=this._fitInfo||{};for(var property in info.sizerInlineStyle){this.sizingTarget.style[property]=info.sizerInlineStyle[property]}for(var property in info.inlineStyle){this.style[property]=info.inlineStyle[property]}this._fitInfo=null},refit:function(){var scrollLeft=this.sizingTarget.scrollLeft,scrollTop=this.sizingTarget.scrollTop;this.resetFit();this.fit();this.sizingTarget.scrollLeft=scrollLeft;this.sizingTarget.scrollTop=scrollTop},position:function(){if(!this.__shouldPosition){return}this._discoverInfo();this.style.position="fixed";this.sizingTarget.style.boxSizing="border-box";this.style.left="0px";this.style.top="0px";var rect=this.getBoundingClientRect(),positionRect=this.__getNormalizedRect(this.positionTarget),fitRect=this.__getNormalizedRect(this.fitInto),margin=this._fitInfo.margin,size={width:rect.width+margin.left+margin.right,height:rect.height+margin.top+margin.bottom},position=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,size,rect,positionRect,fitRect),left=position.left+margin.left,top=position.top+margin.top,right=_Mathmin(fitRect.right-margin.right,left+rect.width),bottom=_Mathmin(fitRect.bottom-margin.bottom,top+rect.height);left=_Mathmax(fitRect.left+margin.left,_Mathmin(left,right-this._fitInfo.sizedBy.minWidth));top=_Mathmax(fitRect.top+margin.top,_Mathmin(top,bottom-this._fitInfo.sizedBy.minHeight));this.sizingTarget.style.maxWidth=_Mathmax(right-left,this._fitInfo.sizedBy.minWidth)+"px";this.sizingTarget.style.maxHeight=_Mathmax(bottom-top,this._fitInfo.sizedBy.minHeight)+"px";this.style.left=left-rect.left+"px";this.style.top=top-rect.top+"px"},constrain:function(){if(this.__shouldPosition){return}this._discoverInfo();var info=this._fitInfo;if(!info.positionedBy.vertically){this.style.position="fixed";this.style.top="0px"}if(!info.positionedBy.horizontally){this.style.position="fixed";this.style.left="0px"}this.sizingTarget.style.boxSizing="border-box";var rect=this.getBoundingClientRect();if(!info.sizedBy.height){this.__sizeDimension(rect,info.positionedBy.vertically,"top","bottom","Height")}if(!info.sizedBy.width){this.__sizeDimension(rect,info.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(rect,positionedBy,start,end,extent){this.__sizeDimension(rect,positionedBy,start,end,extent)},__sizeDimension:function(rect,positionedBy,start,end,extent){var info=this._fitInfo,fitRect=this.__getNormalizedRect(this.fitInto),max="Width"===extent?fitRect.width:fitRect.height,flip=positionedBy===end,offset=flip?max-rect[end]:rect[start],margin=info.margin[flip?start:end],offsetExtent="offset"+extent,sizingOffset=this[offsetExtent]-this.sizingTarget[offsetExtent];this.sizingTarget.style["max"+extent]=max-margin-offset-sizingOffset+"px"},center:function(){if(this.__shouldPosition){return}this._discoverInfo();var positionedBy=this._fitInfo.positionedBy;if(positionedBy.vertically&&positionedBy.horizontally){return}this.style.position="fixed";if(!positionedBy.vertically){this.style.top="0px"}if(!positionedBy.horizontally){this.style.left="0px"}var rect=this.getBoundingClientRect(),fitRect=this.__getNormalizedRect(this.fitInto);if(!positionedBy.vertically){var top=fitRect.top-rect.top+(fitRect.height-rect.height)/2;this.style.top=top+"px"}if(!positionedBy.horizontally){var left=fitRect.left-rect.left+(fitRect.width-rect.width)/2;this.style.left=left+"px"}},__getNormalizedRect:function(target){if(target===document.documentElement||target===window){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}}return target.getBoundingClientRect()},__getOffscreenArea:function(position,size,fitRect){var verticalCrop=_Mathmin(0,position.top)+_Mathmin(0,fitRect.bottom-(position.top+size.height)),horizontalCrop=_Mathmin(0,position.left)+_Mathmin(0,fitRect.right-(position.left+size.width));return _Mathabs(verticalCrop)*size.width+_Mathabs(horizontalCrop)*size.height},__getPosition:function(hAlign,vAlign,size,sizeNoMargins,positionRect,fitRect){var positions=[{verticalAlign:"top",horizontalAlign:"left",top:positionRect.top+this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:positionRect.top+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset}];if(this.noOverlap){for(var i=0,l=positions.length,copy;i<l;i++){copy={};for(var key in positions[i]){copy[key]=positions[i][key]}positions.push(copy)}positions[0].top=positions[1].top+=positionRect.height;positions[2].top=positions[3].top-=positionRect.height;positions[4].left=positions[6].left+=positionRect.width;positions[5].left=positions[7].left-=positionRect.width}vAlign="auto"===vAlign?null:vAlign;hAlign="auto"===hAlign?null:hAlign;if(!hAlign||"center"===hAlign){positions.push({verticalAlign:"top",horizontalAlign:"center",top:positionRect.top+this.verticalOffset+(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset});positions.push({verticalAlign:"bottom",horizontalAlign:"center",top:positionRect.bottom-size.height-this.verticalOffset-(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}if(!vAlign||"middle"===vAlign){positions.push({verticalAlign:"middle",horizontalAlign:"left",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left+this.horizontalOffset+(this.noOverlap?positionRect.width:0)});positions.push({verticalAlign:"middle",horizontalAlign:"right",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset-(this.noOverlap?positionRect.width:0)})}if("middle"===vAlign&&"center"===hAlign){positions.push({verticalAlign:"middle",horizontalAlign:"center",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}for(var position,i=0;i<positions.length;i++){var candidate=positions[i],vAlignOk=candidate.verticalAlign===vAlign,hAlignOk=candidate.horizontalAlign===hAlign;if(!this.dynamicAlign&&!this.noOverlap&&vAlignOk&&hAlignOk){position=candidate;break}var alignOk=(!vAlign||vAlignOk)&&(!hAlign||hAlignOk);if(!this.dynamicAlign&&!alignOk){continue}candidate.offscreenArea=this.__getOffscreenArea(candidate,size,fitRect);if(0===candidate.offscreenArea&&alignOk){position=candidate;break}position=position||candidate;var diff=candidate.offscreenArea-position.offscreenArea;if(0>diff||0===diff&&(vAlignOk||hAlignOk)){position=candidate}}return position}};_exports.IronFitBehavior=IronFitBehavior;var ironFitBehavior={IronFitBehavior:IronFitBehavior};_exports.$ironFitBehavior=ironFitBehavior;var p$1=Element.prototype,matches$1=p$1.matches||p$1.matchesSelector||p$1.mozMatchesSelector||p$1.msMatchesSelector||p$1.oMatchesSelector||p$1.webkitMatchesSelector;const IronFocusablesHelper={getTabbableNodes:function(node){var result=[],needsSortByTabIndex=this._collectTabbableNodes(node,result);if(needsSortByTabIndex){return this._sortByTabIndex(result)}return result},isFocusable:function(element){if(matches$1.call(element,"input, select, textarea, button, object")){return matches$1.call(element,":not([disabled])")}return matches$1.call(element,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(element){return this.isFocusable(element)&&matches$1.call(element,":not([tabindex=\"-1\"])")&&this._isVisible(element)},_normalizedTabIndex:function(element){if(this.isFocusable(element)){var tabIndex=element.getAttribute("tabindex")||0;return+tabIndex}return-1},_collectTabbableNodes:function(node,result){if(node.nodeType!==Node.ELEMENT_NODE||!this._isVisible(node)){return!1}var element=node,tabIndex=this._normalizedTabIndex(element),needsSort=0<tabIndex;if(0<=tabIndex){result.push(element)}var children;if("content"===element.localName||"slot"===element.localName){children=dom(element).getDistributedNodes()}else{children=dom(element.root||element).children}for(var i=0;i<children.length;i++){needsSort=this._collectTabbableNodes(children[i],result)||needsSort}return needsSort},_isVisible:function(element){var style=element.style;if("hidden"!==style.visibility&&"none"!==style.display){style=window.getComputedStyle(element);return"hidden"!==style.visibility&&"none"!==style.display}return!1},_sortByTabIndex:function(tabbables){var len=tabbables.length;if(2>len){return tabbables}var pivot=_Mathceil(len/2),left=this._sortByTabIndex(tabbables.slice(0,pivot)),right=this._sortByTabIndex(tabbables.slice(pivot));return this._mergeSortByTabIndex(left,right)},_mergeSortByTabIndex:function(left,right){var result=[];while(0<left.length&&0<right.length){if(this._hasLowerTabOrder(left[0],right[0])){result.push(right.shift())}else{result.push(left.shift())}}return result.concat(left,right)},_hasLowerTabOrder:function(a,b){var ati=_Mathmax(a.tabIndex,0),bti=_Mathmax(b.tabIndex,0);return 0===ati||0===bti?bti>ati:ati>bti}};_exports.IronFocusablesHelper=IronFocusablesHelper;var ironFocusablesHelper={IronFocusablesHelper:IronFocusablesHelper};_exports.$ironFocusablesHelper=ironFocusablesHelper;Polymer({_template:html`
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
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){if(this.opened&&!this.parentNode){dom(document.body).appendChild(this)}},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){if(!this.opened&&this.parentNode===document.body){dom(this.parentNode).removeChild(this)}},_onTransitionend:function(event){if(event&&event.target===this){this.complete()}},_openedChanged:function(opened){if(opened){this.prepare()}else{var cs=window.getComputedStyle(this);if("0s"===cs.transitionDuration||0==cs.opacity){this.complete()}}if(!this.isAttached){return}if(this.__openedRaf){window.cancelAnimationFrame(this.__openedRaf);this.__openedRaf=null}this.scrollTop=this.scrollTop;this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null;this.toggleClass("opened",this.opened)}.bind(this))}});const IronOverlayManagerClass=function(){this._overlays=[];this._minimumZ=101;this._backdropElement=null;add(document.documentElement,"tap",function(){});document.addEventListener("tap",this._onCaptureClick.bind(this),!0);document.addEventListener("focus",this._onCaptureFocus.bind(this),!0);document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)};_exports.IronOverlayManagerClass=IronOverlayManagerClass;IronOverlayManagerClass.prototype={constructor:IronOverlayManagerClass,get backdropElement(){if(!this._backdropElement){this._backdropElement=document.createElement("iron-overlay-backdrop")}return this._backdropElement},get deepActiveElement(){var active=document.activeElement;if(!active||!1===active instanceof Element){active=document.body}while(active.root&&dom(active.root).activeElement){active=dom(active.root).activeElement}return active},_bringOverlayAtIndexToFront:function(i){var overlay=this._overlays[i];if(!overlay){return}var lastI=this._overlays.length-1,currentOverlay=this._overlays[lastI];if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){lastI--}if(i>=lastI){return}var minimumZ=_Mathmax(this.currentOverlayZ(),this._minimumZ);if(this._getZ(overlay)<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}while(i<lastI){this._overlays[i]=this._overlays[i+1];i++}this._overlays[lastI]=overlay},addOrRemoveOverlay:function(overlay){if(overlay.opened){this.addOverlay(overlay)}else{this.removeOverlay(overlay)}},addOverlay:function(overlay){var i=this._overlays.indexOf(overlay);if(0<=i){this._bringOverlayAtIndexToFront(i);this.trackBackdrop();return}var insertionIndex=this._overlays.length,currentOverlay=this._overlays[insertionIndex-1],minimumZ=_Mathmax(this._getZ(currentOverlay),this._minimumZ),newZ=this._getZ(overlay);if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){this._applyOverlayZ(currentOverlay,minimumZ);insertionIndex--;var previousOverlay=this._overlays[insertionIndex-1];minimumZ=_Mathmax(this._getZ(previousOverlay),this._minimumZ)}if(newZ<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}this._overlays.splice(insertionIndex,0,overlay);this.trackBackdrop()},removeOverlay:function(overlay){var i=this._overlays.indexOf(overlay);if(-1===i){return}this._overlays.splice(i,1);this.trackBackdrop()},currentOverlay:function(){var i=this._overlays.length-1;return this._overlays[i]},currentOverlayZ:function(){return this._getZ(this.currentOverlay())},ensureMinimumZ:function(minimumZ){this._minimumZ=_Mathmax(this._minimumZ,minimumZ)},focusOverlay:function(){var current=this.currentOverlay();if(current){current._applyFocus()}},trackBackdrop:function(){var overlay=this._overlayWithBackdrop();if(!overlay&&!this._backdropElement){return}this.backdropElement.style.zIndex=this._getZ(overlay)-1;this.backdropElement.opened=!!overlay;this.backdropElement.prepare()},getBackdrops:function(){for(var backdrops=[],i=0;i<this._overlays.length;i++){if(this._overlays[i].withBackdrop){backdrops.push(this._overlays[i])}}return backdrops},backdropZ:function(){return this._getZ(this._overlayWithBackdrop())-1},_overlayWithBackdrop:function(){for(var i=this._overlays.length-1;0<=i;i--){if(this._overlays[i].withBackdrop){return this._overlays[i]}}},_getZ:function(overlay){var z=this._minimumZ;if(overlay){var z1=+(overlay.style.zIndex||window.getComputedStyle(overlay).zIndex);if(z1===z1){z=z1}}return z},_setZ:function(element,z){element.style.zIndex=z},_applyOverlayZ:function(overlay,aboveZ){this._setZ(overlay,aboveZ+2)},_overlayInPath:function(path){path=path||[];for(var i=0;i<path.length;i++){if(path[i]._manager===this){return path[i]}}},_onCaptureClick:function(event){var i=this._overlays.length-1;if(-1===i)return;var path=dom(event).path,overlay;while((overlay=this._overlays[i])&&this._overlayInPath(path)!==overlay){overlay._onCaptureClick(event);if(overlay.allowClickThrough){i--}else{break}}},_onCaptureFocus:function(event){var overlay=this.currentOverlay();if(overlay){overlay._onCaptureFocus(event)}},_onCaptureKeyDown:function(event){var overlay=this.currentOverlay();if(overlay){if(IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"esc")){overlay._onCaptureEsc(event)}else if(IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"tab")){overlay._onCaptureTab(event)}}},_shouldBeBehindOverlay:function(overlay1,overlay2){return!overlay1.alwaysOnTop&&overlay2.alwaysOnTop}};const IronOverlayManager=new IronOverlayManagerClass;_exports.IronOverlayManager=IronOverlayManager;var ironOverlayManager={IronOverlayManagerClass:IronOverlayManagerClass,IronOverlayManager:IronOverlayManager};_exports.$ironOverlayManager=ironOverlayManager;var lastTouchPosition={pageX:0,pageY:0},lastRootTarget=null,lastScrollableNodes=[],scrollEvents=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"],_boundScrollHandler;_exports._boundScrollHandler=_boundScrollHandler;var currentLockingElement;_exports.currentLockingElement=currentLockingElement;`TODO(modulizer): A namespace named Polymer.IronScrollManager was
declared here. The surrounding comments should be reviewed,
and this string can then be deleted`;function elementIsScrollLocked(element){var lockingElement=currentLockingElement;if(lockingElement===void 0){return!1}var scrollLocked;if(_hasCachedLockedElement(element)){return!0}if(_hasCachedUnlockedElement(element)){return!1}scrollLocked=!!lockingElement&&lockingElement!==element&&!_composedTreeContains(lockingElement,element);if(scrollLocked){_lockedElementCache.push(element)}else{_unlockedElementCache.push(element)}return scrollLocked}function pushScrollLock(element){if(0<=_lockingElements.indexOf(element)){return}if(0===_lockingElements.length){_lockScrollInteractions()}_lockingElements.push(element);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[]}function removeScrollLock(element){var index=_lockingElements.indexOf(element);if(-1===index){return}_lockingElements.splice(index,1);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[];if(0===_lockingElements.length){_unlockScrollInteractions()}}const _lockingElements=[];_exports._lockingElements=_lockingElements;let _lockedElementCache=null;_exports._lockedElementCache=_lockedElementCache;let _unlockedElementCache=null;_exports._unlockedElementCache=_unlockedElementCache;function _hasCachedLockedElement(element){return-1<_lockedElementCache.indexOf(element)}function _hasCachedUnlockedElement(element){return-1<_unlockedElementCache.indexOf(element)}function _composedTreeContains(element,child){var contentElements,distributedNodes,contentIndex,nodeIndex;if(element.contains(child)){return!0}contentElements=dom(element).querySelectorAll("content,slot");for(contentIndex=0;contentIndex<contentElements.length;++contentIndex){distributedNodes=dom(contentElements[contentIndex]).getDistributedNodes();for(nodeIndex=0;nodeIndex<distributedNodes.length;++nodeIndex){if(distributedNodes[nodeIndex].nodeType!==Node.ELEMENT_NODE)continue;if(_composedTreeContains(distributedNodes[nodeIndex],child)){return!0}}}return!1}function _scrollInteractionHandler(event){if(event.cancelable&&_shouldPreventScrolling(event)){event.preventDefault()}if(event.targetTouches){var touch=event.targetTouches[0];lastTouchPosition.pageX=touch.pageX;lastTouchPosition.pageY=touch.pageY}}function _lockScrollInteractions(){_exports._boundScrollHandler=_boundScrollHandler=_boundScrollHandler||_scrollInteractionHandler.bind(void 0);for(var i=0,l=scrollEvents.length;i<l;i++){document.addEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}function _unlockScrollInteractions(){for(var i=0,l=scrollEvents.length;i<l;i++){document.removeEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}function _shouldPreventScrolling(event){var target=dom(event).rootTarget;if("touchmove"!==event.type&&lastRootTarget!==target){lastRootTarget=target;lastScrollableNodes=_getScrollableNodes(dom(event).path)}if(!lastScrollableNodes.length){return!0}if("touchstart"===event.type){return!1}var info=_getScrollInfo(event);return!_getScrollingNode(lastScrollableNodes,info.deltaX,info.deltaY)}function _getScrollableNodes(nodes){for(var scrollables=[],lockingIndex=nodes.indexOf(currentLockingElement),i=0;i<=lockingIndex;i++){if(nodes[i].nodeType!==Node.ELEMENT_NODE){continue}var node=nodes[i],style=node.style;if("scroll"!==style.overflow&&"auto"!==style.overflow){style=window.getComputedStyle(node)}if("scroll"===style.overflow||"auto"===style.overflow){scrollables.push(node)}}return scrollables}function _getScrollingNode(nodes,deltaX,deltaY){if(!deltaX&&!deltaY){return}for(var verticalScroll=_Mathabs(deltaY)>=_Mathabs(deltaX),i=0;i<nodes.length;i++){var node=nodes[i],canScroll=!1;if(verticalScroll){canScroll=0>deltaY?0<node.scrollTop:node.scrollTop<node.scrollHeight-node.clientHeight}else{canScroll=0>deltaX?0<node.scrollLeft:node.scrollLeft<node.scrollWidth-node.clientWidth}if(canScroll){return node}}}function _getScrollInfo(event){var info={deltaX:event.deltaX,deltaY:event.deltaY};if("deltaX"in event){}else if("wheelDeltaX"in event&&"wheelDeltaY"in event){info.deltaX=-event.wheelDeltaX;info.deltaY=-event.wheelDeltaY}else if("wheelDelta"in event){info.deltaX=0;info.deltaY=-event.wheelDelta}else if("axis"in event){info.deltaX=1===event.axis?event.detail:0;info.deltaY=2===event.axis?event.detail:0}else if(event.targetTouches){var touch=event.targetTouches[0];info.deltaX=lastTouchPosition.pageX-touch.pageX;info.deltaY=lastTouchPosition.pageY-touch.pageY}return info}var ironScrollManager={get currentLockingElement(){return currentLockingElement},elementIsScrollLocked:elementIsScrollLocked,pushScrollLock:pushScrollLock,removeScrollLock:removeScrollLock,_lockingElements:_lockingElements,get _lockedElementCache(){return _lockedElementCache},get _unlockedElementCache(){return _unlockedElementCache},_hasCachedLockedElement:_hasCachedLockedElement,_hasCachedUnlockedElement:_hasCachedUnlockedElement,_composedTreeContains:_composedTreeContains,_scrollInteractionHandler:_scrollInteractionHandler,get _boundScrollHandler(){return _boundScrollHandler},_lockScrollInteractions:_lockScrollInteractions,_unlockScrollInteractions:_unlockScrollInteractions,_shouldPreventScrolling:_shouldPreventScrolling,_getScrollableNodes:_getScrollableNodes,_getScrollingNode:_getScrollingNode,_getScrollInfo:_getScrollInfo};_exports.$ironScrollManager=ironScrollManager;const IronOverlayBehaviorImpl={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:IronOverlayManager},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||dom(this).querySelector("[autofocus]")||this},get _focusableNodes(){return IronFocusablesHelper.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1;this.__shouldRemoveTabIndex=!1;this.__firstFocusableNode=this.__lastFocusableNode=null;this.__rafs={};this.__restoreFocusNode=null;this.__scrollTop=this.__scrollLeft=null;this.__onCaptureScroll=this.__onCaptureScroll.bind(this);this.__rootNodes=null;this._ensureSetup()},attached:function(){if(this.opened){this._openedChanged(this.opened)}this._observer=dom(this).observeNodes(this._onNodesChange)},detached:function(){dom(this).unobserveNodes(this._observer);this._observer=null;for(var cb in this.__rafs){if(null!==this.__rafs[cb]){cancelAnimationFrame(this.__rafs[cb])}}this.__rafs={};this._manager.removeOverlay(this);if(this.__isAnimating){if(this.opened){this._finishRenderOpened()}else{this._applyFocus();this._finishRenderClosed()}}},toggle:function(){this._setCanceled(!1);this.opened=!this.opened},open:function(){this._setCanceled(!1);this.opened=!0},close:function(){this._setCanceled(!1);this.opened=!1},cancel:function(event){var cancelEvent=this.fire("iron-overlay-canceled",event,{cancelable:!0});if(cancelEvent.defaultPrevented){return}this._setCanceled(!0);this.opened=!1},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){if(this._overlaySetup){return}this._overlaySetup=!0;this.style.outline="none";this.style.display="none"},_openedChanged:function(opened){if(opened){this.removeAttribute("aria-hidden")}else{this.setAttribute("aria-hidden","true")}if(!this.isAttached){return}this.__isAnimating=!0;this.__deraf("__openedChanged",this.__openedChanged)},_canceledChanged:function(){this.closingReason=this.closingReason||{};this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){if(this.withBackdrop&&!this.hasAttribute("tabindex")){this.setAttribute("tabindex","-1");this.__shouldRemoveTabIndex=!0}else if(this.__shouldRemoveTabIndex){this.removeAttribute("tabindex");this.__shouldRemoveTabIndex=!1}if(this.opened&&this.isAttached){this._manager.trackBackdrop()}},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement;this._preparePositioning();this.refit();this._finishPositioning();if(this.noAutoFocus&&document.activeElement===this._focusNode){this._focusNode.blur();this.__restoreFocusNode.focus()}},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none";this.style.zIndex="";this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none";this.style.transform=this.style.webkitTransform="none";this.style.display=""},_finishPositioning:function(){this.style.display="none";this.scrollTop=this.scrollTop;this.style.transition=this.style.webkitTransition="";this.style.transform=this.style.webkitTransform="";this.style.display="";this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened){if(!this.noAutoFocus){this._focusNode.focus()}}else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var activeElement=this._manager.deepActiveElement;if(activeElement===document.body||dom(this).deepContains(activeElement)){this.__restoreFocusNode.focus()}}this.__restoreFocusNode=null;this._focusNode.blur();this._focusedChild=null}},_onCaptureClick:function(event){if(!this.noCancelOnOutsideClick){this.cancel(event)}},_onCaptureFocus:function(event){if(!this.withBackdrop){return}var path=dom(event).path;if(-1===path.indexOf(this)){event.stopPropagation();this._applyFocus()}else{this._focusedChild=path[0]}},_onCaptureEsc:function(event){if(!this.noCancelOnEscKey){this.cancel(event)}},_onCaptureTab:function(event){if(!this.withBackdrop){return}this.__ensureFirstLastFocusables();var shift=event.shiftKey,nodeToCheck=shift?this.__firstFocusableNode:this.__lastFocusableNode,nodeToSet=shift?this.__lastFocusableNode:this.__firstFocusableNode,shouldWrap=!1;if(nodeToCheck===nodeToSet){shouldWrap=!0}else{var focusedNode=this._manager.deepActiveElement;shouldWrap=focusedNode===nodeToCheck||focusedNode===this}if(shouldWrap){event.preventDefault();this._focusedChild=nodeToSet;this._applyFocus()}},_onIronResize:function(){if(this.opened&&!this.__isAnimating){this.__deraf("refit",this.refit)}},_onNodesChange:function(){if(this.opened&&!this.__isAnimating){this.invalidateTabbables();this.notifyResize()}},__ensureFirstLastFocusables:function(){var focusableNodes=this._focusableNodes;this.__firstFocusableNode=focusableNodes[0];this.__lastFocusableNode=focusableNodes[focusableNodes.length-1]},__openedChanged:function(){if(this.opened){this._prepareRenderOpened();this._manager.addOverlay(this);this._applyFocus();this._renderOpened()}else{this._manager.removeOverlay(this);this._applyFocus();this._renderClosed()}},__deraf:function(jobname,callback){var rafs=this.__rafs;if(null!==rafs[jobname]){cancelAnimationFrame(rafs[jobname])}rafs[jobname]=requestAnimationFrame(function nextAnimationFrame(){rafs[jobname]=null;callback.call(this)}.bind(this))},__updateScrollObservers:function(isAttached,opened,scrollAction){if(!isAttached||!opened||!this.__isValidScrollAction(scrollAction)){removeScrollLock(this);this.__removeScrollListeners()}else{if("lock"===scrollAction){this.__saveScrollPosition();pushScrollLock(this)}this.__addScrollListeners()}},__addScrollListeners:function(){if(!this.__rootNodes){this.__rootNodes=[];if(useShadow){var node=this;while(node){if(node.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&node.host){this.__rootNodes.push(node)}node=node.host||node.assignedSlot||node.parentNode}}this.__rootNodes.push(document)}this.__rootNodes.forEach(function(el){el.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},__removeScrollListeners:function(){if(this.__rootNodes){this.__rootNodes.forEach(function(el){el.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)}if(!this.isAttached){this.__rootNodes=null}},__isValidScrollAction:function(scrollAction){return"lock"===scrollAction||"refit"===scrollAction||"cancel"===scrollAction},__onCaptureScroll:function(event){if(this.__isAnimating){return}if(0<=dom(event).path.indexOf(this)){return}switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(event);break;}},__saveScrollPosition:function(){if(document.scrollingElement){this.__scrollTop=document.scrollingElement.scrollTop;this.__scrollLeft=document.scrollingElement.scrollLeft}else{this.__scrollTop=_Mathmax(document.documentElement.scrollTop,document.body.scrollTop);this.__scrollLeft=_Mathmax(document.documentElement.scrollLeft,document.body.scrollLeft)}},__restoreScrollPosition:function(){if(document.scrollingElement){document.scrollingElement.scrollTop=this.__scrollTop;document.scrollingElement.scrollLeft=this.__scrollLeft}else{document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop;document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft}}};_exports.IronOverlayBehaviorImpl=IronOverlayBehaviorImpl;const IronOverlayBehavior=[IronFitBehavior,IronResizableBehavior,IronOverlayBehaviorImpl];_exports.IronOverlayBehavior=IronOverlayBehavior;var ironOverlayBehavior={IronOverlayBehaviorImpl:IronOverlayBehaviorImpl,IronOverlayBehavior:IronOverlayBehavior};_exports.$ironOverlayBehavior=ironOverlayBehavior;const NeonAnimatableBehavior={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{};this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{};this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(config1,config2){for(var property in config2){config1[property]=config2[property]}},_cloneConfig:function(config){var clone={isClone:!0};this._copyProperties(clone,config);return clone},_getAnimationConfigRecursive:function(type,map,allConfigs){if(!this.animationConfig){return}if(this.animationConfig.value&&"function"===typeof this.animationConfig.value){this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));return}var thisConfig;if(type){thisConfig=this.animationConfig[type]}else{thisConfig=this.animationConfig}if(!Array.isArray(thisConfig)){thisConfig=[thisConfig]}if(thisConfig){for(var config,index=0;config=thisConfig[index];index++){if(config.animatable){config.animatable._getAnimationConfigRecursive(config.type||type,map,allConfigs)}else{if(config.id){var cachedConfig=map[config.id];if(cachedConfig){if(!cachedConfig.isClone){map[config.id]=this._cloneConfig(cachedConfig);cachedConfig=map[config.id]}this._copyProperties(cachedConfig,config)}else{map[config.id]=config}}else{allConfigs.push(config)}}}}},getAnimationConfig:function(type){var map={},allConfigs=[];this._getAnimationConfigRecursive(type,map,allConfigs);for(var key in map){allConfigs.push(map[key])}return allConfigs}};_exports.NeonAnimatableBehavior=NeonAnimatableBehavior;var neonAnimatableBehavior={NeonAnimatableBehavior:NeonAnimatableBehavior};_exports.$neonAnimatableBehavior=neonAnimatableBehavior;const NeonAnimationRunnerBehaviorImpl={_configureAnimations:function(configs){var results=[],resultsToPlay=[];if(0<configs.length){for(let config,index=0,neonAnimation;config=configs[index];index++){neonAnimation=document.createElement(config.name);if(neonAnimation.isNeonAnimation){let result=null;if(!neonAnimation.configure){neonAnimation.configure=function(config){return null}}result=neonAnimation.configure(config);resultsToPlay.push({result:result,config:config,neonAnimation:neonAnimation})}else{console.warn(this.is+":",config.name,"not found!")}}}for(var i=0;i<resultsToPlay.length;i++){let result=resultsToPlay[i].result,config=resultsToPlay[i].config,neonAnimation=resultsToPlay[i].neonAnimation;try{if("function"!=typeof result.cancel){result=document.timeline.play(result)}}catch(e){result=null;console.warn("Couldnt play","(",config.name,").",e)}if(result){results.push({neonAnimation:neonAnimation,config:config,animation:result})}}return results},_shouldComplete:function(activeEntries){for(var finished=!0,i=0;i<activeEntries.length;i++){if("finished"!=activeEntries[i].animation.playState){finished=!1;break}}return finished},_complete:function(activeEntries){for(var i=0;i<activeEntries.length;i++){activeEntries[i].neonAnimation.complete(activeEntries[i].config)}for(var i=0;i<activeEntries.length;i++){activeEntries[i].animation.cancel()}},playAnimation:function(type,cookie){var configs=this.getAnimationConfig(type);if(!configs){return}this._active=this._active||{};if(this._active[type]){this._complete(this._active[type]);delete this._active[type]}var activeEntries=this._configureAnimations(configs);if(0==activeEntries.length){this.fire("neon-animation-finish",cookie,{bubbles:!1});return}this._active[type]=activeEntries;for(var i=0;i<activeEntries.length;i++){activeEntries[i].animation.onfinish=function(){if(this._shouldComplete(activeEntries)){this._complete(activeEntries);delete this._active[type];this.fire("neon-animation-finish",cookie,{bubbles:!1})}}.bind(this)}},cancelAnimation:function(){for(var k in this._active){var entries=this._active[k];for(var j in entries){entries[j].animation.cancel()}}this._active={}}};_exports.NeonAnimationRunnerBehaviorImpl=NeonAnimationRunnerBehaviorImpl;const NeonAnimationRunnerBehavior=[NeonAnimatableBehavior,NeonAnimationRunnerBehaviorImpl];_exports.NeonAnimationRunnerBehavior=NeonAnimationRunnerBehavior;var neonAnimationRunnerBehavior={NeonAnimationRunnerBehaviorImpl:NeonAnimationRunnerBehaviorImpl,NeonAnimationRunnerBehavior:NeonAnimationRunnerBehavior};_exports.$neonAnimationRunnerBehavior=neonAnimationRunnerBehavior;Polymer({_template:html`
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
`,is:"iron-dropdown",behaviors:[IronControlState,IronA11yKeysBehavior,IronOverlayBehavior,NeonAnimationRunnerBehavior],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var nodes=dom(this.$.content).getDistributedNodes(),i=0,l=nodes.length;i<l;i++){if(nodes[i].nodeType===Node.ELEMENT_NODE){return nodes[i]}}},ready:function(){if(!this.scrollAction){this.scrollAction=this.allowOutsideScroll?"refit":"lock"}this._readied=!0},attached:function(){if(!this.sizingTarget||this.sizingTarget===this){this.sizingTarget=this.containedElement||this}},detached:function(){this.cancelAnimation()},_openedChanged:function(){if(this.opened&&this.disabled){this.cancel()}else{this.cancelAnimation();this._updateAnimationConfig();IronOverlayBehaviorImpl._openedChanged.apply(this,arguments)}},_renderOpened:function(){if(!this.noAnimations&&this.animationConfig.open){this.$.contentWrapper.classList.add("animating");this.playAnimation("open")}else{IronOverlayBehaviorImpl._renderOpened.apply(this,arguments)}},_renderClosed:function(){if(!this.noAnimations&&this.animationConfig.close){this.$.contentWrapper.classList.add("animating");this.playAnimation("close")}else{IronOverlayBehaviorImpl._renderClosed.apply(this,arguments)}},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating");if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}},_updateAnimationConfig:function(){for(var animationNode=this.containedElement,animations=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<animations.length;i++){animations[i].node=animationNode}this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){if(this.isAttached){this.notifyResize()}},_allowOutsideScrollChanged:function(allowOutsideScroll){if(!this._readied){return}if(!allowOutsideScroll){this.scrollAction="lock"}else if(!this.scrollAction||"lock"===this.scrollAction){this.scrollAction="refit"}},_applyFocus:function(){var focusTarget=this.focusTarget||this.containedElement;if(focusTarget&&this.opened&&!this.noAutoFocus){focusTarget.focus()}else{IronOverlayBehaviorImpl._applyFocus.apply(this,arguments)}}});Polymer({_template:html`
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
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function(src){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img)}if(""===this._iconName){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=!1}this._img.src=this.src;dom(this.root).appendChild(this._img)}}});Polymer({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){this._icons=this._createIconMap();return Object.keys(this._icons).map(function(n){return this.name+":"+n},this)},applyIcon:function(element,iconName){this.removeIcon(element);var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){var pde=dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},removeIcon:function(element){if(element._svgIcon){dom(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},_targetIsRTL:function(target){if(null==this.__targetIsRTL){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===globalElement.getAttribute("dir")}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&"rtl"===window.getComputedStyle(target).direction}}return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var icons=Object.create(null);dom(this).querySelectorAll("[id]").forEach(function(icon){icons[icon.id]=icon});return icons},_cloneIcon:function(id,mirrorAllowed){this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},_prepareSvgClone:function(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(!0),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});Polymer({_template:html`
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
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){if(this.$.img.src!==this._resolveSrc(this.src)){return}this._setLoading(!1);this._setLoaded(!0);this._setError(!1)},_imgOnError:function(){if(this.$.img.src!==this._resolveSrc(this.src)){return}this.$.img.removeAttribute("src");this.$.sizedImgDiv.style.backgroundImage="";this._setLoading(!1);this._setLoaded(!1);this._setError(!0)},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){if(null!==this.alt){return this.alt}if(""===this.src){return""}var resolved=this._resolveSrc(this.src);return resolved.replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(src,preventLoad){var newResolvedSrc=this._resolveSrc(src);if(newResolvedSrc===this._resolvedSrc){return}this._resolvedSrc="";this.$.img.removeAttribute("src");this.$.sizedImgDiv.style.backgroundImage="";if(""===src||preventLoad){this._setLoading(!1);this._setLoaded(!1);this._setError(!1)}else{this._resolvedSrc=newResolvedSrc;this.$.img.src=this._resolvedSrc;this.$.sizedImgDiv.style.backgroundImage="url(\""+this._resolvedSrc+"\")";this._setLoading(!0);this._setLoaded(!1);this._setError(!1)}},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?"url(\""+this.placeholder+"\")":""},_transformChanged:function(){var sizedImgDivStyle=this.$.sizedImgDiv.style,placeholderStyle=this.$.placeholder.style;sizedImgDivStyle.backgroundSize=placeholderStyle.backgroundSize=this.sizing;sizedImgDivStyle.backgroundPosition=placeholderStyle.backgroundPosition=this.sizing?this.position:"";sizedImgDivStyle.backgroundRepeat=placeholderStyle.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(testSrc){var resolved=resolveUrl(testSrc,this.$.baseURIAnchor.href);if("/"===resolved[0]){resolved=(location.origin||location.protocol+"//"+location.host)+resolved}return resolved}});class IronSelection{constructor(selectCallback){this.selection=[];this.selectCallback=selectCallback}get(){return this.multi?this.selection.slice():this.selection[0]}clear(excludes){this.selection.slice().forEach(function(item){if(!excludes||0>excludes.indexOf(item)){this.setItemSelected(item,!1)}},this)}isSelected(item){return 0<=this.selection.indexOf(item)}setItemSelected(item,isSelected){if(null!=item){if(isSelected!==this.isSelected(item)){if(isSelected){this.selection.push(item)}else{var i=this.selection.indexOf(item);if(0<=i){this.selection.splice(i,1)}}if(this.selectCallback){this.selectCallback(item,isSelected)}}}}select(item){if(this.multi){this.toggle(item)}else if(this.get()!==item){this.setItemSelected(this.get(),!1);this.setItemSelected(item,!0)}}toggle(item){this.setItemSelected(item,!this.isSelected(item))}}_exports.IronSelection=IronSelection;;var ironSelection={IronSelection:IronSelection};_exports.$ironSelection=ironSelection;const IronSelectableBehavior={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this);this._selection=new IronSelection(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this);this._addListener(this.activateEvent)},detached:function(){if(this._observer){dom(this).unobserveNodes(this._observer)}this._removeListener(this.activateEvent)},indexOf:function(item){return this.items?this.items.indexOf(item):-1},select:function(value){this.selected=value},selectPrevious:function(){var length=this.items.length,index=length-1;if(this.selected!==void 0){index=(+this._valueToIndex(this.selected)-1+length)%length}this.selected=this._indexToValue(index)},selectNext:function(){var index=0;if(this.selected!==void 0){index=(+this._valueToIndex(this.selected)+1)%this.items.length}this.selected=this._indexToValue(index)},selectIndex:function(index){this.select(this._indexToValue(index))},forceSynchronousItemUpdate:function(){if(this._observer&&"function"===typeof this._observer.flush){this._observer.flush()}else{this._updateItems()}},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(eventName){this.listen(this,eventName,"_activateHandler")},_removeListener:function(eventName){this.unlisten(this,eventName,"_activateHandler")},_activateEventChanged:function(eventName,old){this._removeListener(old);this._addListener(eventName)},_updateItems:function(){var nodes=dom(this).queryDistributedElements(this.selectable||"*");nodes=Array.prototype.filter.call(nodes,this._bindFilterItem);this._setItems(nodes)},_updateAttrForSelected:function(){if(this.selectedItem){this.selected=this._valueForItem(this.selectedItem)}},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(selected){if(!this.items){return}var item=this._valueToItem(this.selected);if(item){this._selection.select(item)}else{this._selection.clear()}if(this.fallbackSelection&&this.items.length&&this._selection.get()===void 0){this.selected=this.fallbackSelection}},_filterItem:function(node){return!this._excludedLocalNames[node.localName]},_valueToItem:function(value){return null==value?null:this.items[this._valueToIndex(value)]},_valueToIndex:function(value){if(this.attrForSelected){for(var i=0,item;item=this.items[i];i++){if(this._valueForItem(item)==value){return i}}}else{return+value}},_indexToValue:function(index){if(this.attrForSelected){var item=this.items[index];if(item){return this._valueForItem(item)}}else{return index}},_valueForItem:function(item){if(!item){return null}if(!this.attrForSelected){var i=this.indexOf(item);return-1===i?null:i}var propValue=item[dashToCamelCase(this.attrForSelected)];return propValue!=void 0?propValue:item.getAttribute(this.attrForSelected)},_applySelection:function(item,isSelected){if(this.selectedClass){this.toggleClass(this.selectedClass,isSelected,item)}if(this.selectedAttribute){this.toggleAttribute(this.selectedAttribute,isSelected,item)}this._selectionChange();this.fire("iron-"+(isSelected?"select":"deselect"),{item:item})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(node){return dom(node).observeNodes(function(mutation){this._updateItems();this._updateSelected();this.fire("iron-items-changed",mutation,{bubbles:!1,cancelable:!1})})},_activateHandler:function(e){var t=e.target,items=this.items;while(t&&t!=this){var i=items.indexOf(t);if(0<=i){var value=this._indexToValue(i);this._itemActivate(value,t);return}t=t.parentNode}},_itemActivate:function(value,item){if(!this.fire("iron-activate",{selected:value,item:item},{cancelable:!0}).defaultPrevented){this.select(value)}}};_exports.IronSelectableBehavior=IronSelectableBehavior;var ironSelectable={IronSelectableBehavior:IronSelectableBehavior};_exports.$ironSelectable=ironSelectable;const IronMultiSelectableBehaviorImpl={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(value){if(this.multi){this._toggleSelected(value)}else{this.selected=value}},multiChanged:function(multi){this._selection.multi=multi;this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){if(!this.multi){IronSelectableBehavior._updateAttrForSelected.apply(this)}else if(this.selectedItems&&0<this.selectedItems.length){this.selectedValues=this.selectedItems.map(function(selectedItem){return this._indexToValue(this.indexOf(selectedItem))},this).filter(function(unfilteredValue){return null!=unfilteredValue},this)}},_updateSelected:function(){if(this.multi){this._selectMulti(this.selectedValues)}else{this._selectSelected(this.selected)}},_selectMulti:function(values){values=values||[];var selectedItems=(this._valuesToItems(values)||[]).filter(function(item){return null!==item&&item!==void 0});this._selection.clear(selectedItems);for(var i=0;i<selectedItems.length;i++){this._selection.setItemSelected(selectedItems[i],!0)}if(this.fallbackSelection&&!this._selection.get().length){var fallback=this._valueToItem(this.fallbackSelection);if(fallback){this.select(this.fallbackSelection)}}},_selectionChange:function(){var s=this._selection.get();if(this.multi){this._setSelectedItems(s);this._setSelectedItem(s.length?s[0]:null)}else{if(null!==s&&s!==void 0){this._setSelectedItems([s]);this._setSelectedItem(s)}else{this._setSelectedItems([]);this._setSelectedItem(null)}}},_toggleSelected:function(value){var i=this.selectedValues.indexOf(value),unselected=0>i;if(unselected){this.push("selectedValues",value)}else{this.splice("selectedValues",i,1)}},_valuesToItems:function(values){return null==values?null:values.map(function(value){return this._valueToItem(value)},this)}};_exports.IronMultiSelectableBehaviorImpl=IronMultiSelectableBehaviorImpl;const IronMultiSelectableBehavior=[IronSelectableBehavior,IronMultiSelectableBehaviorImpl];_exports.IronMultiSelectableBehavior=IronMultiSelectableBehavior;var ironMultiSelectable={IronMultiSelectableBehaviorImpl:IronMultiSelectableBehaviorImpl,IronMultiSelectableBehavior:IronMultiSelectableBehavior};_exports.$ironMultiSelectable=ironMultiSelectable;const IronMenuBehaviorImpl={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(value){if(this._defaultFocusAsync){this.cancelAsync(this._defaultFocusAsync);this._defaultFocusAsync=null}var item=this._valueToItem(value);if(item&&item.hasAttribute("disabled"))return;this._setFocusedItem(item);IronMultiSelectableBehaviorImpl.select.apply(this,arguments)},_resetTabindices:function(){var firstSelectedItem=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach(function(item){item.setAttribute("tabindex",item===firstSelectedItem?"0":"-1");item.setAttribute("aria-selected",this._selection.isSelected(item))},this)},_updateMultiselectable:function(multi){if(multi){this.setAttribute("aria-multiselectable","true")}else{this.removeAttribute("aria-multiselectable")}},_focusWithKeyboardEvent:function(event){if(-1!==this._MODIFIER_KEYS.indexOf(event.key))return;this.cancelDebouncer("_clearSearchText");var searchText=this._searchText||"",key=event.key&&1==event.key.length?event.key:_StringfromCharCode(event.keyCode);searchText+=key.toLocaleLowerCase();for(var searchLength=searchText.length,i=0,item;item=this.items[i];i++){if(item.hasAttribute("disabled")){continue}var attr=this.attrForItemTitle||"textContent",title=(item[attr]||item.getAttribute(attr)||"").trim();if(title.length<searchLength){continue}if(title.slice(0,searchLength).toLocaleLowerCase()==searchText){this._setFocusedItem(item);break}}this._searchText=searchText;this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var length=this.items.length,curFocusIndex=+this.indexOf(this.focusedItem),i=1,item;i<length+1;i++){item=this.items[(curFocusIndex-i+length)%length];if(!item.hasAttribute("disabled")){var owner=dom(item).getOwnerRoot()||document;this._setFocusedItem(item);if(dom(owner).activeElement==item){return}}}},_focusNext:function(){for(var length=this.items.length,curFocusIndex=+this.indexOf(this.focusedItem),i=1,item;i<length+1;i++){item=this.items[(curFocusIndex+i)%length];if(!item.hasAttribute("disabled")){var owner=dom(item).getOwnerRoot()||document;this._setFocusedItem(item);if(dom(owner).activeElement==item){return}}}},_applySelection:function(item,isSelected){if(isSelected){item.setAttribute("aria-selected","true")}else{item.setAttribute("aria-selected","false")}IronSelectableBehavior._applySelection.apply(this,arguments)},_focusedItemChanged:function(focusedItem,old){old&&old.setAttribute("tabindex","-1");if(focusedItem&&!focusedItem.hasAttribute("disabled")&&!this.disabled){focusedItem.setAttribute("tabindex","0");focusedItem.focus()}},_onIronItemsChanged:function(event){if(event.detail.addedNodes.length){this._resetTabindices()}},_onShiftTabDown:function(event){var oldTabIndex=this.getAttribute("tabindex");IronMenuBehaviorImpl._shiftTabPressed=!0;this._setFocusedItem(null);this.setAttribute("tabindex","-1");this.async(function(){this.setAttribute("tabindex",oldTabIndex);IronMenuBehaviorImpl._shiftTabPressed=!1},1)},_onFocus:function(event){if(IronMenuBehaviorImpl._shiftTabPressed){return}var rootTarget=dom(event).rootTarget;if(rootTarget!==this&&"undefined"!==typeof rootTarget.tabIndex&&!this.isLightDescendant(rootTarget)){return}this._defaultFocusAsync=this.async(function(){var firstSelectedItem=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null);if(firstSelectedItem){this._setFocusedItem(firstSelectedItem)}else if(this.items[0]){this._focusNext()}})},_onUpKey:function(event){this._focusPrevious();event.detail.keyboardEvent.preventDefault()},_onDownKey:function(event){this._focusNext();event.detail.keyboardEvent.preventDefault()},_onEscKey:function(event){var focusedItem=this.focusedItem;if(focusedItem){focusedItem.blur()}},_onKeydown:function(event){if(!this.keyboardEventMatchesKeys(event,"up down esc")){this._focusWithKeyboardEvent(event)}event.stopPropagation()},_activateHandler:function(event){IronSelectableBehavior._activateHandler.call(this,event);event.stopPropagation()},_disabledChanged:function(disabled){if(disabled){this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0;this.removeAttribute("tabindex")}else if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex",this._previousTabIndex)}}};_exports.IronMenuBehaviorImpl=IronMenuBehaviorImpl;IronMenuBehaviorImpl._shiftTabPressed=!1;const IronMenuBehavior=[IronMultiSelectableBehavior,IronA11yKeysBehavior,IronMenuBehaviorImpl];_exports.IronMenuBehavior=IronMenuBehavior;var ironMenuBehavior={IronMenuBehaviorImpl:IronMenuBehaviorImpl,IronMenuBehavior:IronMenuBehavior};_exports.$ironMenuBehavior=ironMenuBehavior;const IronMenubarBehaviorImpl={hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(event){this.focusedItem.click();event.detail.keyboardEvent.preventDefault()},_onDownKey:function(event){this.focusedItem.click();event.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(event){if(this._isRTL){this._focusNext()}else{this._focusPrevious()}event.detail.keyboardEvent.preventDefault()},_onRightKey:function(event){if(this._isRTL){this._focusPrevious()}else{this._focusNext()}event.detail.keyboardEvent.preventDefault()},_onKeydown:function(event){if(this.keyboardEventMatchesKeys(event,"up down left right esc")){return}this._focusWithKeyboardEvent(event)}};_exports.IronMenubarBehaviorImpl=IronMenubarBehaviorImpl;const IronMenubarBehavior=[IronMenuBehavior,IronMenubarBehaviorImpl];_exports.IronMenubarBehavior=IronMenubarBehavior;var ironMenubarBehavior={IronMenubarBehaviorImpl:IronMenubarBehaviorImpl,IronMenubarBehavior:IronMenubarBehavior};_exports.$ironMenubarBehavior=ironMenubarBehavior;const NeonAnimationBehavior={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){if(!document.body.animate){console.warn("No web animations detected. This element will not"+" function without a web animations polyfill.")}},timingFromConfig:function(config){if(config.timing){for(var property in config.timing){this.animationTiming[property]=config.timing[property]}}return this.animationTiming},setPrefixedProperty:function(node,property,value){for(var map={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]},prefixes=map[property],prefix,index=0;prefix=prefixes[index];index++){node.style[prefix]=value}node.style[property]=value},complete:function(config){}};_exports.NeonAnimationBehavior=NeonAnimationBehavior;var neonAnimationBehavior={NeonAnimationBehavior:NeonAnimationBehavior};_exports.$neonAnimationBehavior=neonAnimationBehavior;Polymer({is:"fade-in-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node;this._effect=new KeyframeEffect(node,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(config));return this._effect}});Polymer({is:"fade-out-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node;this._effect=new KeyframeEffect(node,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(config));return this._effect}});var Utility={distance:function(x1,y1,x2,y2){var xDelta=x1-x2,yDelta=y1-y2;return _Mathsqrt(xDelta*xDelta+yDelta*yDelta)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function ElementMetrics(element){this.element=element;this.width=this.boundingRect.width;this.height=this.boundingRect.height;this.size=_Mathmax(this.width,this.height)}ElementMetrics.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(x,y){var topLeft=Utility.distance(x,y,0,0),topRight=Utility.distance(x,y,this.width,0),bottomLeft=Utility.distance(x,y,0,this.height),bottomRight=Utility.distance(x,y,this.width,this.height);return _Mathmax(topLeft,topRight,bottomLeft,bottomRight)}};function Ripple(element){this.element=element;this.color=window.getComputedStyle(element).color;this.wave=document.createElement("div");this.waveContainer=document.createElement("div");this.wave.style.backgroundColor=this.color;this.wave.classList.add("wave");this.waveContainer.classList.add("wave-container");dom(this.waveContainer).appendChild(this.wave);this.resetInteractionState()}Ripple.MAX_RADIUS=300;Ripple.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var elapsed;if(!this.mouseDownStart){return 0}elapsed=Utility.now()-this.mouseDownStart;if(this.mouseUpStart){elapsed-=this.mouseUpElapsed}return elapsed},get mouseUpElapsed(){return this.mouseUpStart?Utility.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var width2=this.containerMetrics.width*this.containerMetrics.width,height2=this.containerMetrics.height*this.containerMetrics.height,waveRadius=1.1*_Mathmin(_Mathsqrt(width2+height2),Ripple.MAX_RADIUS)+5,duration=1.1-.2*(waveRadius/Ripple.MAX_RADIUS),timeNow=this.mouseInteractionSeconds/duration,size=waveRadius*(1-_Mathpow(80,-timeNow));return _Mathabs(size)},get opacity(){if(!this.mouseUpStart){return this.initialOpacity}return _Mathmax(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity)},get outerOpacity(){var outerOpacity=.3*this.mouseUpElapsedSeconds,waveOpacity=this.opacity;return _Mathmax(0,_Mathmin(outerOpacity,waveOpacity))},get isOpacityFullyDecayed(){return .01>this.opacity&&this.radius>=_Mathmin(this.maxRadius,Ripple.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=_Mathmin(this.maxRadius,Ripple.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return _Mathmin(1,2*(this.radius/this.containerMetrics.size)/1.4142135623730951)},get xNow(){if(this.xEnd){return this.xStart+this.translationFraction*(this.xEnd-this.xStart)}return this.xStart},get yNow(){if(this.yEnd){return this.yStart+this.translationFraction*(this.yEnd-this.yStart)}return this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0;this.mouseDownStart=0;this.mouseUpStart=0;this.xStart=0;this.yStart=0;this.xEnd=0;this.yEnd=0;this.slideDistance=0;this.containerMetrics=new ElementMetrics(this.element)},draw:function(){var scale,dx,dy;this.wave.style.opacity=this.opacity;scale=this.radius/(this.containerMetrics.size/2);dx=this.xNow-this.containerMetrics.width/2;dy=this.yNow-this.containerMetrics.height/2;this.waveContainer.style.webkitTransform="translate("+dx+"px, "+dy+"px)";this.waveContainer.style.transform="translate3d("+dx+"px, "+dy+"px, 0)";this.wave.style.webkitTransform="scale("+scale+","+scale+")";this.wave.style.transform="scale3d("+scale+","+scale+",1)"},downAction:function(event){var xCenter=this.containerMetrics.width/2,yCenter=this.containerMetrics.height/2;this.resetInteractionState();this.mouseDownStart=Utility.now();if(this.center){this.xStart=xCenter;this.yStart=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}else{this.xStart=event?event.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2;this.yStart=event?event.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2}if(this.recenters){this.xEnd=xCenter;this.yEnd=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart);this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px";this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px";this.waveContainer.style.width=this.containerMetrics.size+"px";this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(event){if(!this.isMouseDown){return}this.mouseUpStart=Utility.now()},remove:function(){dom(this.waveContainer.parentNode).removeChild(this.waveContainer)}};Polymer({_template:html`
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
`,is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){if(11==this.parentNode.nodeType){this.keyEventTarget=dom(this).getOwnerRoot().host}else{this.keyEventTarget=this.parentNode}var keyEventTarget=this.keyEventTarget;this.listen(keyEventTarget,"up","uiUpAction");this.listen(keyEventTarget,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},get shouldKeepAnimating(){for(var index=0;index<this.ripples.length;++index){if(!this.ripples[index].isAnimationComplete){return!0}}return!1},simulatedRipple:function(){this.downAction(null);this.async(function(){this.upAction()},1)},uiDownAction:function(event){if(!this.noink){this.downAction(event)}},downAction:function(event){if(this.holdDown&&0<this.ripples.length){return}var ripple=this.addRipple();ripple.downAction(event);if(!this._animating){this._animating=!0;this.animate()}},uiUpAction:function(event){if(!this.noink){this.upAction(event)}},upAction:function(event){if(this.holdDown){return}this.ripples.forEach(function(ripple){ripple.upAction(event)});this._animating=!0;this.animate()},onAnimationComplete:function(){this._animating=!1;this.$.background.style.backgroundColor=null;this.fire("transitionend")},addRipple:function(){var ripple=new Ripple(this);dom(this.$.waves).appendChild(ripple.waveContainer);this.$.background.style.backgroundColor=ripple.color;this.ripples.push(ripple);this._setAnimating(!0);return ripple},removeRipple:function(ripple){var rippleIndex=this.ripples.indexOf(ripple);if(0>rippleIndex){return}this.ripples.splice(rippleIndex,1);ripple.remove();if(!this.ripples.length){this._setAnimating(!1)}},animate:function(){if(!this._animating){return}var index,ripple;for(index=0;index<this.ripples.length;++index){ripple=this.ripples[index];ripple.draw();this.$.background.style.opacity=ripple.outerOpacity;if(ripple.isOpacityFullyDecayed&&!ripple.isRestingAtMaxRadius){this.removeRipple(ripple)}}if(!this.shouldKeepAnimating&&0===this.ripples.length){this.onAnimationComplete()}else{window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(newVal,oldVal){if(oldVal===void 0){return}if(newVal){this.downAction()}else{this.upAction()}}});const PaperRippleBehavior={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){if(this.focused){this.ensureRipple()}},_downHandler:function(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},ensureRipple:function(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){var domContainer=dom(this._rippleContainer||this),target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},getRipple:function(){this.ensureRipple();return this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){var element=document.createElement("paper-ripple");return element},_noinkChanged:function(noink){if(this.hasRipple()){this._ripple.noink=noink}}};_exports.PaperRippleBehavior=PaperRippleBehavior;var paperRippleBehavior={PaperRippleBehavior:PaperRippleBehavior};_exports.$paperRippleBehavior=paperRippleBehavior;const PaperButtonBehaviorImpl={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;if(this.disabled){e=0}else if(this.active||this.pressed){e=4}else if(this.receivedFocusFromKeyboard){e=3}this._setElevation(e)},_computeKeyboardClass:function(receivedFocusFromKeyboard){this.toggleClass("keyboard-focus",receivedFocusFromKeyboard)},_spaceKeyDownHandler:function(event){IronButtonStateImpl._spaceKeyDownHandler.call(this,event);if(this.hasRipple()&&1>this.getRipple().ripples.length){this._ripple.uiDownAction()}},_spaceKeyUpHandler:function(event){IronButtonStateImpl._spaceKeyUpHandler.call(this,event);if(this.hasRipple()){this._ripple.uiUpAction()}}};_exports.PaperButtonBehaviorImpl=PaperButtonBehaviorImpl;const PaperButtonBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperButtonBehaviorImpl];_exports.PaperButtonBehavior=PaperButtonBehavior;var paperButtonBehavior={PaperButtonBehaviorImpl:PaperButtonBehaviorImpl,PaperButtonBehavior:PaperButtonBehavior};_exports.$paperButtonBehavior=paperButtonBehavior;const PaperInkyFocusBehaviorImpl={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(receivedFocusFromKeyboard){if(receivedFocusFromKeyboard){this.ensureRipple()}if(this.hasRipple()){this._ripple.holdDown=receivedFocusFromKeyboard}},_createRipple:function(){var ripple=PaperRippleBehavior._createRipple();ripple.id="ink";ripple.setAttribute("center","");ripple.classList.add("circle");return ripple}};_exports.PaperInkyFocusBehaviorImpl=PaperInkyFocusBehaviorImpl;const PaperInkyFocusBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperInkyFocusBehaviorImpl];_exports.PaperInkyFocusBehavior=PaperInkyFocusBehavior;var paperInkyFocusBehavior={PaperInkyFocusBehaviorImpl:PaperInkyFocusBehaviorImpl,PaperInkyFocusBehavior:PaperInkyFocusBehavior};_exports.$paperInkyFocusBehavior=paperInkyFocusBehavior;const PaperCheckedElementBehaviorImpl={_checkedChanged:function(){IronCheckedElementBehaviorImpl._checkedChanged.call(this);if(this.hasRipple()){if(this.checked){this._ripple.setAttribute("checked","")}else{this._ripple.removeAttribute("checked")}}},_buttonStateChanged:function(){PaperRippleBehavior._buttonStateChanged.call(this);if(this.disabled){return}if(this.isAttached){this.checked=this.active}}};_exports.PaperCheckedElementBehaviorImpl=PaperCheckedElementBehaviorImpl;const PaperCheckedElementBehavior=[PaperInkyFocusBehavior,IronCheckedElementBehavior,PaperCheckedElementBehaviorImpl];_exports.PaperCheckedElementBehavior=PaperCheckedElementBehavior;var paperCheckedElementBehavior={PaperCheckedElementBehaviorImpl:PaperCheckedElementBehaviorImpl,PaperCheckedElementBehavior:PaperCheckedElementBehavior};_exports.$paperCheckedElementBehavior=paperCheckedElementBehavior;const template$1=html`
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
</custom-style>`;template$1.setAttribute("style","display: none;");document.head.appendChild(template$1.content);const template$2=html`
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
</dom-module>`;template$2.setAttribute("style","display: none;");document.head.appendChild(template$2.content);const template$3=html`
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

  <slot></slot>`;template$3.setAttribute("strip-whitespace","");Polymer({_template:template$3,is:"paper-button",behaviors:[PaperButtonBehavior],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){if(!this.raised){this._setElevation(0)}else{PaperButtonBehaviorImpl._calculateElevation.apply(this)}}});const PaperDialogBehaviorImpl={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick;this.__prevNoCancelOnEscKey=this.noCancelOnEscKey;this.__prevWithBackdrop=this.withBackdrop;this.__readied=!0},_modalChanged:function(modal,readied){if(!readied){return}if(modal){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick;this.__prevNoCancelOnEscKey=this.noCancelOnEscKey;this.__prevWithBackdrop=this.withBackdrop;this.noCancelOnOutsideClick=!0;this.noCancelOnEscKey=!0;this.withBackdrop=!0}else{this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick;this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey;this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop}},_updateClosingReasonConfirmed:function(confirmed){this.closingReason=this.closingReason||{};this.closingReason.confirmed=confirmed},_onDialogClick:function(event){for(var path=dom(event).path,i=0,l=path.indexOf(this),target;i<l;i++){target=path[i];if(target.hasAttribute&&(target.hasAttribute("dialog-dismiss")||target.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(target.hasAttribute("dialog-confirm"));this.close();event.stopPropagation();break}}}};_exports.PaperDialogBehaviorImpl=PaperDialogBehaviorImpl;const PaperDialogBehavior=[IronOverlayBehavior,PaperDialogBehaviorImpl];_exports.PaperDialogBehavior=PaperDialogBehavior;var paperDialogBehavior={PaperDialogBehaviorImpl:PaperDialogBehaviorImpl,PaperDialogBehavior:PaperDialogBehavior};_exports.$paperDialogBehavior=paperDialogBehavior;const template$4=html`
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
`;template$4.setAttribute("style","display: none;");document.head.appendChild(template$4.content);const template$5=html`
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
</custom-style>`;template$5.setAttribute("style","display: none;");document.head.appendChild(template$5.content);const template$6=html`<custom-style>
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
</custom-style>`;template$6.setAttribute("style","display: none;");document.head.appendChild(template$6.content);const $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML=`<dom-module id="paper-dialog-shared-styles">
  <template>
    <style>
      :host {
        display: block;
        margin: 24px 40px;

        background: var(--paper-dialog-background-color, var(--primary-background-color));
        color: var(--paper-dialog-color, var(--primary-text-color));

        @apply --paper-font-body1;
        @apply --shadow-elevation-16dp;
        @apply --paper-dialog;
      }

      :host > ::slotted(*) {
        margin-top: 20px;
        padding: 0 24px;
      }

      :host > ::slotted(.no-padding) {
        padding: 0;
      }

      
      :host > ::slotted(*:first-child) {
        margin-top: 24px;
      }

      :host > ::slotted(*:last-child) {
        margin-bottom: 24px;
      }

      /* In 1.x, this selector was \`:host > ::content h2\`. In 2.x <slot> allows
      to select direct children only, which increases the weight of this
      selector, so we have to re-define first-child/last-child margins below. */
      :host > ::slotted(h2) {
        position: relative;
        margin: 0;

        @apply --paper-font-title;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-top. */
      :host > ::slotted(h2:first-child) {
        margin-top: 24px;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-bottom. */
      :host > ::slotted(h2:last-child) {
        margin-bottom: 24px;
        @apply --paper-dialog-title;
      }

      :host > ::slotted(.paper-dialog-buttons),
      :host > ::slotted(.buttons) {
        position: relative;
        padding: 8px 8px 8px 24px;
        margin: 0;

        color: var(--paper-dialog-button-color, var(--primary-color));

        @apply --layout-horizontal;
        @apply --layout-end-justified;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content);Polymer({_template:html`
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
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget();this.classList.add("no-padding")},attached:function(){this._ensureTarget();requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",0<this.scrollTarget.scrollTop);this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight);this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement;if(this.dialogElement&&this.dialogElement.behaviors&&0<=this.dialogElement.behaviors.indexOf(PaperDialogBehaviorImpl)){this.dialogElement.sizingTarget=this.scrollTarget;this.scrollTarget.classList.remove("fit")}else if(this.dialogElement){this.scrollTarget.classList.add("fit")}}});Polymer({_template:html`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[PaperDialogBehavior,NeonAnimationRunnerBehavior],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation();this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation();this.playAnimation("exit")},_onNeonAnimationFinish:function(){if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}}});const template$7=html`
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
`;template$7.setAttribute("strip-whitespace","");Polymer({_template:template$7,is:"paper-fab",behaviors:[PaperButtonBehavior],properties:{src:{type:String,value:""},icon:{type:String,value:""},mini:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function(icon,src){return 0<icon.length||0<src.length}});Polymer({is:"paper-icon-button",_template:html`
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
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[PaperInkyFocusBehavior],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(newValue,oldValue){var label=this.getAttribute("aria-label");if(!label||oldValue==label){this.setAttribute("aria-label",newValue)}}});const $_documentContainer$1=document.createElement("template");$_documentContainer$1.setAttribute("style","display: none;");$_documentContainer$1.innerHTML=`<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$1.content);const PaperItemBehaviorImpl={hostAttributes:{role:"option",tabindex:"0"}};_exports.PaperItemBehaviorImpl=PaperItemBehaviorImpl;const PaperItemBehavior=[IronButtonState,IronControlState,PaperItemBehaviorImpl];_exports.PaperItemBehavior=PaperItemBehavior;var paperItemBehavior={PaperItemBehaviorImpl:PaperItemBehaviorImpl,PaperItemBehavior:PaperItemBehavior};_exports.$paperItemBehavior=paperItemBehavior;Polymer({_template:html`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[PaperItemBehavior]});Polymer({_template:html`
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
`,is:"paper-item-body"});Polymer({_template:html`
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
`,is:"paper-icon-item",behaviors:[PaperItemBehavior]});Polymer({_template:html`
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
`;template$8.setAttribute("style","display: none;");document.body.appendChild(template$8.content);Polymer({_template:html`
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
`,is:"paper-material",properties:{elevation:{type:Number,reflectToAttribute:!0,value:1},animated:{type:Boolean,reflectToAttribute:!0,value:!1}}});Polymer({is:"paper-menu-grow-height-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node,rect=node.getBoundingClientRect(),height=rect.height;this._effect=new KeyframeEffect(node,[{height:height/2+"px"},{height:height+"px"}],this.timingFromConfig(config));return this._effect}});Polymer({is:"paper-menu-grow-width-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node,rect=node.getBoundingClientRect(),width=rect.width;this._effect=new KeyframeEffect(node,[{width:width/2+"px"},{width:width+"px"}],this.timingFromConfig(config));return this._effect}});Polymer({is:"paper-menu-shrink-width-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node,rect=node.getBoundingClientRect(),width=rect.width;this._effect=new KeyframeEffect(node,[{width:width+"px"},{width:width-width/20+"px"}],this.timingFromConfig(config));return this._effect}});Polymer({is:"paper-menu-shrink-height-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node,rect=node.getBoundingClientRect(),height=rect.height;this.setPrefixedProperty(node,"transformOrigin","0 0");this._effect=new KeyframeEffect(node,[{height:height+"px",transform:"translateY(0)"},{height:height/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(config));return this._effect}});var config={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const PaperMenuButton=Polymer({_template:html`
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
`,is:"paper-menu-button",behaviors:[IronA11yKeysBehavior,IronControlState],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:config.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:config.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:config.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var nodes=dom(this.$.content).getDistributedNodes(),i=0,l=nodes.length;i<l;i++){if(nodes[i].nodeType===Node.ELEMENT_NODE){return nodes[i]}}},toggle:function(){if(this.opened){this.close()}else{this.open()}},open:function(){if(this.disabled){return}this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(event){if(!this.ignoreSelect){this.close()}},_onIronActivate:function(event){if(this.closeOnActivate){this.close()}},_openedChanged:function(opened,oldOpened){if(opened){this._dropdownContent=this.contentElement;this.fire("paper-dropdown-open")}else if(null!=oldOpened){this.fire("paper-dropdown-close")}},_disabledChanged:function(disabled){IronControlState._disabledChanged.apply(this,arguments);if(disabled&&this.opened){this.close()}},__onIronOverlayCanceled:function(event){var uiEvent=event.detail,trigger=this.$.trigger,path=dom(uiEvent).path;if(-1<path.indexOf(trigger)){event.preventDefault()}}});_exports.PaperMenuButton=PaperMenuButton;Object.keys(config).forEach(function(key){PaperMenuButton[key]=config[key]});var paperMenuButton={PaperMenuButton:PaperMenuButton};_exports.$paperMenuButton=paperMenuButton;const PaperSpinnerBehavior={properties:{active:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:!1}},__computeContainerClasses:function(active,coolingDown){return[active||coolingDown?"active":"",coolingDown?"cooldown":""].join(" ")},__activeChanged:function(active,old){this.__setAriaHidden(!active);this.__coolingDown=!active&&old},__altChanged:function(alt){if("loading"===alt){this.alt=this.getAttribute("aria-label")||alt}else{this.__setAriaHidden(""===alt);this.setAttribute("aria-label",alt)}},__setAriaHidden:function(hidden){var attr="aria-hidden";if(hidden){this.setAttribute(attr,"true")}else{this.removeAttribute(attr)}},__reset:function(){this.active=!1;this.__coolingDown=!1}};_exports.PaperSpinnerBehavior=PaperSpinnerBehavior;var paperSpinnerBehavior={PaperSpinnerBehavior:PaperSpinnerBehavior};_exports.$paperSpinnerBehavior=paperSpinnerBehavior;const $_documentContainer$2=document.createElement("template");$_documentContainer$2.setAttribute("style","display: none;");$_documentContainer$2.innerHTML=`<dom-module id="paper-spinner-styles">
  <template>
    <style>
      /*
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/

      /*
       * Constants:
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 3).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *      SHRINK_TIME = 400ms
       */

      :host {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;

        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        --paper-spinner-container-rotation-duration: 1568ms;

        /* ARCTIME */
        --paper-spinner-expand-contract-duration: 1333ms;

        /* 4 * ARCTIME */
        --paper-spinner-full-cycle-duration: 5332ms;

        /* SHRINK_TIME */
        --paper-spinner-cooldown-duration: 400ms;
      }

      #spinnerContainer {
        width: 100%;
        height: 100%;

        /* The spinner does not have any contents that would have to be
         * flipped if the direction changes. Always use ltr so that the
         * style works out correctly in both cases. */
        direction: ltr;
      }

      #spinnerContainer.active {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
      }

      @-webkit-keyframes container-rotate {
        to { -webkit-transform: rotate(360deg) }
      }

      @keyframes container-rotate {
        to { transform: rotate(360deg) }
      }

      .spinner-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        white-space: nowrap;
        color: var(--paper-spinner-color, var(--google-blue-500));
      }

      .layer-1 {
        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));
      }

      .layer-2 {
        color: var(--paper-spinner-layer-2-color, var(--google-red-500));
      }

      .layer-3 {
        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));
      }

      .layer-4 {
        color: var(--paper-spinner-layer-4-color, var(--google-green-500));
      }

      /**
       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
       *
       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
       * guarantee that the animation will start _exactly_ after that value. So we avoid using
       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it
       * seems).
       */
      .active .spinner-layer {
        -webkit-animation-name: fill-unfill-rotate;
        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-name: fill-unfill-rotate;
        animation-duration: var(--paper-spinner-full-cycle-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .active .spinner-layer.layer-1 {
        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;
        animation-name: fill-unfill-rotate, layer-1-fade-in-out;
      }

      .active .spinner-layer.layer-2 {
        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;
        animation-name: fill-unfill-rotate, layer-2-fade-in-out;
      }

      .active .spinner-layer.layer-3 {
        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;
        animation-name: fill-unfill-rotate, layer-3-fade-in-out;
      }

      .active .spinner-layer.layer-4 {
        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;
        animation-name: fill-unfill-rotate, layer-4-fade-in-out;
      }

      @-webkit-keyframes fill-unfill-rotate {
        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @-webkit-keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @-webkit-keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      .circle-clipper {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
      }

      /**
       * Patch the gap that appear between the two adjacent div.circle-clipper while the
       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).
       */
      .spinner-layer::after {
        content: '';
        left: 45%;
        width: 10%;
        border-top-style: solid;
      }

      .spinner-layer::after,
      .circle-clipper .circle {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        border-width: var(--paper-spinner-stroke-width, 3px);
        border-radius: 50%;
      }

      .circle-clipper .circle {
        bottom: 0;
        width: 200%;
        border-style: solid;
        border-bottom-color: transparent !important;
      }

      .circle-clipper.left .circle {
        left: 0;
        border-right-color: transparent !important;
        -webkit-transform: rotate(129deg);
        transform: rotate(129deg);
      }

      .circle-clipper.right .circle {
        left: -100%;
        border-left-color: transparent !important;
        -webkit-transform: rotate(-129deg);
        transform: rotate(-129deg);
      }

      .active .gap-patch::after,
      .active .circle-clipper .circle {
        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-duration: var(--paper-spinner-expand-contract-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
      }

      .active .circle-clipper.left .circle {
        -webkit-animation-name: left-spin;
        animation-name: left-spin;
      }

      .active .circle-clipper.right .circle {
        -webkit-animation-name: right-spin;
        animation-name: right-spin;
      }

      @-webkit-keyframes left-spin {
        0% { -webkit-transform: rotate(130deg) }
        50% { -webkit-transform: rotate(-5deg) }
        to { -webkit-transform: rotate(130deg) }
      }

      @keyframes left-spin {
        0% { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
      }

      @-webkit-keyframes right-spin {
        0% { -webkit-transform: rotate(-130deg) }
        50% { -webkit-transform: rotate(5deg) }
        to { -webkit-transform: rotate(-130deg) }
      }

      @keyframes right-spin {
        0% { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
      }

      #spinnerContainer.cooldown {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      @-webkit-keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$2.content);const template$9=html`
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
`;template$9.setAttribute("strip-whitespace","");Polymer({_template:template$9,is:"paper-spinner",behaviors:[PaperSpinnerBehavior]});Polymer({_template:html`
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
`,is:"paper-tab",behaviors:[IronControlState,IronButtonState,PaperRippleBehavior],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var parent=dom(this).parentNode;return!!parent&&!!parent.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(event){if(this.link){var anchor=this.queryEffectiveChildren("a");if(!anchor){return}if(event.target===anchor){return}anchor.click()}}});const template$a=html`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(template$a.content);Polymer({_template:html`
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
`,is:"paper-tabs",behaviors:[IronResizableBehavior,IronMenubarBehavior],properties:{noink:{type:Boolean,value:!1,observer:"_noinkChanged"},noBar:{type:Boolean,value:!1},noSlide:{type:Boolean,value:!1},scrollable:{type:Boolean,value:!1},fitContainer:{type:Boolean,value:!1},disableDrag:{type:Boolean,value:!1},hideScrollButtons:{type:Boolean,value:!1},alignBottom:{type:Boolean,value:!1},selectable:{type:String,value:"paper-tab"},autoselect:{type:Boolean,value:!1},autoselectDelay:{type:Number,value:0},_step:{type:Number,value:10},_holdDelay:{type:Number,value:1},_leftHidden:{type:Boolean,value:!1},_rightHidden:{type:Boolean,value:!1},_previousTab:{type:Object}},hostAttributes:{role:"tablist"},listeners:{"iron-resize":"_onTabSizingChanged","iron-items-changed":"_onTabSizingChanged","iron-select":"_onIronSelect","iron-deselect":"_onIronDeselect"},keyBindings:{"left:keyup right:keyup":"_onArrowKeyup"},created:function(){this._holdJob=null;this._pendingActivationItem=void 0;this._pendingActivationTimeout=void 0;this._bindDelayedActivationHandler=this._delayedActivationHandler.bind(this);this.addEventListener("blur",this._onBlurCapture.bind(this),!0)},ready:function(){this.setScrollDirection("y",this.$.tabsContainer)},detached:function(){this._cancelPendingActivation()},_noinkChanged:function(noink){var childTabs=dom(this).querySelectorAll("paper-tab");childTabs.forEach(noink?this._setNoinkAttribute:this._removeNoinkAttribute)},_setNoinkAttribute:function(element){element.setAttribute("noink","")},_removeNoinkAttribute:function(element){element.removeAttribute("noink")},_computeScrollButtonClass:function(hideThisButton,scrollable,hideScrollButtons){if(!scrollable||hideScrollButtons){return"hidden"}if(hideThisButton){return"not-visible"}return""},_computeTabsContentClass:function(scrollable,fitContainer){return scrollable?"scrollable"+(fitContainer?" fit-container":""):" fit-container"},_computeSelectionBarClass:function(noBar,alignBottom){if(noBar){return"hidden"}else if(alignBottom){return"align-bottom"}return""},_onTabSizingChanged:function(){this.debounce("_onTabSizingChanged",function(){this._scroll();this._tabChanged(this.selectedItem)},10)},_onIronSelect:function(event){this._tabChanged(event.detail.item,this._previousTab);this._previousTab=event.detail.item;this.cancelDebouncer("tab-changed")},_onIronDeselect:function(event){this.debounce("tab-changed",function(){this._tabChanged(null,this._previousTab);this._previousTab=null},1)},_activateHandler:function(){this._cancelPendingActivation();IronMenuBehaviorImpl._activateHandler.apply(this,arguments)},_scheduleActivation:function(item,delay){this._pendingActivationItem=item;this._pendingActivationTimeout=this.async(this._bindDelayedActivationHandler,delay)},_delayedActivationHandler:function(){var item=this._pendingActivationItem;this._pendingActivationItem=void 0;this._pendingActivationTimeout=void 0;item.fire(this.activateEvent,null,{bubbles:!0,cancelable:!0})},_cancelPendingActivation:function(){if(this._pendingActivationTimeout!==void 0){this.cancelAsync(this._pendingActivationTimeout);this._pendingActivationItem=void 0;this._pendingActivationTimeout=void 0}},_onArrowKeyup:function(event){if(this.autoselect){this._scheduleActivation(this.focusedItem,this.autoselectDelay)}},_onBlurCapture:function(event){if(event.target===this._pendingActivationItem){this._cancelPendingActivation()}},get _tabContainerScrollSize(){return _Mathmax(0,this.$.tabsContainer.scrollWidth-this.$.tabsContainer.offsetWidth)},_scroll:function(e,detail){if(!this.scrollable){return}var ddx=detail&&-detail.ddx||0;this._affectScroll(ddx)},_down:function(e){this.async(function(){if(this._defaultFocusAsync){this.cancelAsync(this._defaultFocusAsync);this._defaultFocusAsync=null}},1)},_affectScroll:function(dx){this.$.tabsContainer.scrollLeft+=dx;var scrollLeft=this.$.tabsContainer.scrollLeft;this._leftHidden=0===scrollLeft;this._rightHidden=scrollLeft===this._tabContainerScrollSize},_onLeftScrollButtonDown:function(){this._scrollToLeft();this._holdJob=setInterval(this._scrollToLeft.bind(this),this._holdDelay)},_onRightScrollButtonDown:function(){this._scrollToRight();this._holdJob=setInterval(this._scrollToRight.bind(this),this._holdDelay)},_onScrollButtonUp:function(){clearInterval(this._holdJob);this._holdJob=null},_scrollToLeft:function(){this._affectScroll(-this._step)},_scrollToRight:function(){this._affectScroll(this._step)},_tabChanged:function(tab,old){if(!tab){this.$.selectionBar.classList.remove("expand");this.$.selectionBar.classList.remove("contract");this._positionBar(0,0);return}var r=this.$.tabsContent.getBoundingClientRect(),w=r.width,tabRect=tab.getBoundingClientRect(),tabOffsetLeft=tabRect.left-r.left;this._pos={width:this._calcPercent(tabRect.width,w),left:this._calcPercent(tabOffsetLeft,w)};if(this.noSlide||null==old){this.$.selectionBar.classList.remove("expand");this.$.selectionBar.classList.remove("contract");this._positionBar(this._pos.width,this._pos.left);return}var oldRect=old.getBoundingClientRect(),oldIndex=this.items.indexOf(old),index=this.items.indexOf(tab),m=5;this.$.selectionBar.classList.add("expand");var moveRight=oldIndex<index,isRTL=this._isRTL;if(isRTL){moveRight=!moveRight}if(moveRight){this._positionBar(this._calcPercent(tabRect.left+tabRect.width-oldRect.left,w)-m,this._left)}else{this._positionBar(this._calcPercent(oldRect.left+oldRect.width-tabRect.left,w)-m,this._calcPercent(tabOffsetLeft,w)+m)}if(this.scrollable){this._scrollToSelectedIfNeeded(tabRect.width,tabOffsetLeft)}},_scrollToSelectedIfNeeded:function(tabWidth,tabOffsetLeft){var l=tabOffsetLeft-this.$.tabsContainer.scrollLeft;if(0>l){this.$.tabsContainer.scrollLeft+=l}else{l+=tabWidth-this.$.tabsContainer.offsetWidth;if(0<l){this.$.tabsContainer.scrollLeft+=l}}},_calcPercent:function(w,w0){return 100*w/w0},_positionBar:function(width,left){width=width||0;left=left||0;this._width=width;this._left=left;this.transform("translateX("+left+"%) scaleX("+width/100+")",this.$.selectionBar)},_onBarTransitionEnd:function(e){var cl=this.$.selectionBar.classList;if(cl.contains("expand")){cl.remove("expand");cl.add("contract");this._positionBar(this._pos.width,this._pos.left)}else if(cl.contains("contract")){cl.remove("contract")}}});var currentToast=null;Polymer({_template:html`
    <style>
      :host {
        display: block;
        position: fixed;
        background-color: var(--paper-toast-background-color, #323232);
        color: var(--paper-toast-color, #f1f1f1);
        min-height: 48px;
        min-width: 288px;
        padding: 16px 24px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        border-radius: 2px;
        margin: 12px;
        font-size: 14px;
        cursor: default;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        @apply --paper-font-common-base;
      }

      :host(.capsule) {
        border-radius: 24px;
      }

      :host(.fit-bottom) {
        width: 100%;
        min-width: 0;
        border-radius: 0;
        margin: 0;
      }

      :host(.paper-toast-open) {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
    </style>

    <span id="label">{{text}}</span>
    <slot></slot>
`,is:"paper-toast",behaviors:[IronOverlayBehavior],properties:{fitInto:{type:Object,value:window,observer:"_onFitIntoChanged"},horizontalAlign:{type:String,value:"left"},verticalAlign:{type:String,value:"bottom"},duration:{type:Number,value:3e3},text:{type:String,value:""},noCancelOnOutsideClick:{type:Boolean,value:!0},noAutoFocus:{type:Boolean,value:!0}},listeners:{transitionend:"__onTransitionEnd"},get visible(){Base._warn("`visible` is deprecated, use `opened` instead");return this.opened},get _canAutoClose(){return 0<this.duration&&this.duration!==1/0},created:function(){this._autoClose=null;IronA11yAnnouncer.requestAvailability()},show:function(properties){if("string"==typeof properties){properties={text:properties}}for(var property in properties){if(0===property.indexOf("_")){Base._warn("The property \""+property+"\" is private and was not set.")}else if(property in this){this[property]=properties[property]}else{Base._warn("The property \""+property+"\" is not valid.")}}this.open()},hide:function(){this.close()},__onTransitionEnd:function(e){if(e&&e.target===this&&"opacity"===e.propertyName){if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}}},_openedChanged:function(){if(null!==this._autoClose){this.cancelAsync(this._autoClose);this._autoClose=null}if(this.opened){if(currentToast&&currentToast!==this){currentToast.close()}currentToast=this;this.fire("iron-announce",{text:this.text});if(this._canAutoClose){this._autoClose=this.async(this.close,this.duration)}}else if(currentToast===this){currentToast=null}IronOverlayBehaviorImpl._openedChanged.apply(this,arguments)},_renderOpened:function(){this.classList.add("paper-toast-open")},_renderClosed:function(){this.classList.remove("paper-toast-open")},_onFitIntoChanged:function(fitInto){this.positionTarget=fitInto}});function setupDragHandler_(){if(this.draggable){this.dragHandler_=google.maps.event.addListener(this.marker,"dragend",onDragEnd_.bind(this))}else{google.maps.event.removeListener(this.dragHandler_);this.dragHandler_=null}}function onDragEnd_(e,details,sender){this.latitude=e.latLng.lat();this.longitude=e.latLng.lng()}Polymer({_template:html`
    <style>
      :host {
        display: none;
      }
    </style>

    <slot></slot>
`,is:"google-map-marker",properties:{marker:{type:Object,notify:!0},map:{type:Object,observer:"_mapChanged"},info:{type:Object,value:null},clickEvents:{type:Boolean,value:!1,observer:"_clickEventsChanged"},dragEvents:{type:Boolean,value:!1,observer:"_dragEventsChanged"},icon:{type:Object,value:null,observer:"_iconChanged"},mouseEvents:{type:Boolean,value:!1,observer:"_mouseEventsChanged"},zIndex:{type:Number,value:0,observer:"_zIndexChanged"},longitude:{type:Number,value:null,notify:!0},latitude:{type:Number,value:null,notify:!0},label:{type:String,value:null,observer:"_labelChanged"},animation:{type:String,value:null,observer:"_animationChanged"},open:{type:Boolean,value:!1,observer:"_openChanged"}},observers:["_updatePosition(latitude, longitude)"],detached(){if(this.marker){google.maps.event.clearInstanceListeners(this.marker);this._clickEventsChanged(!0);this._listeners={};this.marker.setMap(null)}if(this._contentObserver){this._contentObserver.disconnect()}},attached(){if(this.marker){this.marker.setMap(this.map)}},_updatePosition(){if(this.marker&&null!=this.latitude&&null!=this.longitude){this.marker.setPosition(new google.maps.LatLng(parseFloat(this.latitude),parseFloat(this.longitude)))}},_clickEventsChanged(forceRemove){if(this.map){if(this.clickEvents&&!forceRemove){this._forwardEvent("click");this._forwardEvent("dblclick");this._forwardEvent("rightclick")}else{this._clearListener("click");this._clearListener("dblclick");this._clearListener("rightclick")}}},_dragEventsChanged(){if(this.map){if(this.dragEvents){this._forwardEvent("drag");this._forwardEvent("dragend");this._forwardEvent("dragstart")}else{this._clearListener("drag");this._clearListener("dragend");this._clearListener("dragstart")}}},_mouseEventsChanged(){if(this.map){if(this.mouseEvents){this._forwardEvent("mousedown");this._forwardEvent("mousemove");this._forwardEvent("mouseout");this._forwardEvent("mouseover");this._forwardEvent("mouseup")}else{this._clearListener("mousedown");this._clearListener("mousemove");this._clearListener("mouseout");this._clearListener("mouseover");this._clearListener("mouseup")}}},_animationChanged(){if(this.marker){this.marker.setAnimation(google.maps.Animation[this.animation])}},_labelChanged(){if(this.marker){this.marker.setLabel(this.label)}},_iconChanged(){if(this.marker){this.marker.setIcon(this.icon)}},_zIndexChanged(){if(this.marker){this.marker.setZIndex(this.zIndex)}},_mapChanged(){if(this.marker){this.marker.setMap(null);google.maps.event.clearInstanceListeners(this.marker)}if(this.map&&this.map instanceof google.maps.Map){this._mapReady()}},_contentChanged(){if(this._contentObserver){this._contentObserver.disconnect()}this._contentObserver=new MutationObserver(this._contentChanged.bind(this));this._contentObserver.observe(this,{childList:!0,subtree:!0});const content=this.innerHTML.trim();if(content){if(!this.info){this.info=new google.maps.InfoWindow;this.openInfoHandler_=google.maps.event.addListener(this.marker,"click",()=>{this.open=!0});this.closeInfoHandler_=google.maps.event.addListener(this.info,"closeclick",()=>{this.open=!1})}this.info.setContent(content)}else if(this.info){google.maps.event.removeListener(this.openInfoHandler_);google.maps.event.removeListener(this.closeInfoHandler_);this.info=null}},_openChanged(){if(this.info){if(this.open){this.info.open(this.map,this.marker);this.fire("google-map-marker-open")}else{this.info.close();this.fire("google-map-marker-close")}}},_mapReady(){this._listeners={};this.marker=new google.maps.Marker({map:this.map,position:{lat:parseFloat(this.latitude),lng:parseFloat(this.longitude)},title:this.title,animation:google.maps.Animation[this.animation],draggable:this.draggable,visible:!this.hidden,icon:this.icon,label:this.label,zIndex:this.zIndex});this._contentChanged();this._clickEventsChanged();this._dragEventsChanged();this._mouseEventsChanged();this._openChanged();setupDragHandler_.bind(this)()},_clearListener(name){if(this._listeners&&this._listeners[name]){google.maps.event.removeListener(this._listeners[name]);this._listeners[name]=null}},_forwardEvent(name){this._listeners[name]=google.maps.event.addListener(this.marker,name,event=>{this.fire(`google-map-marker-${name}`,event)})},attributeChanged(attrName){if(!this.marker){return}switch(attrName){case"hidden":this.marker.setVisible(!this.hidden);break;case"draggable":this.marker.setDraggable(this.draggable);setupDragHandler_.bind(this)();break;case"title":this.marker.setTitle(this.title);break;}}});Polymer({_template:html`
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
`,is:"google-map",properties:{apiKey:String,mapsUrl:{type:String},clientId:String,latitude:{type:Number,value:37.77493,notify:!0,reflectToAttribute:!0},map:{type:Object,notify:!0,value:null},longitude:{type:Number,value:-122.41942,notify:!0,reflectToAttribute:!0},kml:{type:String,value:null,observer:"_loadKml"},zoom:{type:Number,value:10,observer:"_zoomChanged",notify:!0},noAutoTilt:{type:Boolean,value:!1},mapType:{type:String,value:"roadmap",observer:"_mapTypeChanged",notify:!0},version:{type:String,value:"3.exp"},disableDefaultUi:{type:Boolean,value:!1,observer:"_disableDefaultUiChanged"},disableMapTypeControl:{type:Boolean,value:!1,observer:"_disableMapTypeControlChanged"},disableStreetViewControl:{type:Boolean,value:!1,observer:"_disableStreetViewControlChanged"},fitToMarkers:{type:Boolean,value:!1,observer:"_fitToMarkersChanged"},disableZoom:{type:Boolean,value:!1,observer:"_disableZoomChanged"},styles:{type:Object,value(){return{}}},maxZoom:{type:Number,observer:"_maxZoomChanged"},minZoom:{type:Number,observer:"_minZoomChanged"},signedIn:{type:Boolean,value:!1},language:{type:String},clickEvents:{type:Boolean,value:!1,observer:"_clickEventsChanged"},boundEvents:{type:Boolean,value:!0,observer:"_boundEventsChanged"},dragEvents:{type:Boolean,value:!1,observer:"_dragEventsChanged"},mouseEvents:{type:Boolean,value:!1,observer:"_mouseEventsChanged"},additionalMapOptions:{type:Object,value(){return{}}},markers:{type:Array,value(){return[]},readOnly:!0},objects:{type:Array,value(){return[]},readOnly:!0},singleInfoWindow:{type:Boolean,value:!1}},listeners:{"iron-resize":"resize"},observers:["_debounceUpdateCenter(latitude, longitude)"],attached(){this._initGMap()},detached(){if(this._markersChildrenListener){this.unlisten(this.$.selector,"items-changed","_updateMarkers");this._markersChildrenListener=null}if(this._objectsMutationObserver){this._objectsMutationObserver.disconnect();this._objectsMutationObserver=null}},behaviors:[IronResizableBehavior],_initGMap(){if(this.map){return}if(!0!==this.$.api.libraryLoaded){return}if(!this.isAttached){return}this.map=new google.maps.Map(this.$.map,this._getMapOptions());this._listeners={};this._updateCenter();this._loadKml();this._updateMarkers();this._updateObjects();this._addMapListeners();this.fire("google-map-ready")},_mapApiLoaded(){this._initGMap()},_getMapOptions(){const mapOptions={zoom:this.zoom,tilt:this.noAutoTilt?0:45,mapTypeId:this.mapType,disableDefaultUI:this.disableDefaultUi,mapTypeControl:!this.disableDefaultUi&&!this.disableMapTypeControl,streetViewControl:!this.disableDefaultUi&&!this.disableStreetViewControl,disableDoubleClickZoom:this.disableZoom,scrollwheel:!this.disableZoom,styles:this.styles,maxZoom:+this.maxZoom,minZoom:+this.minZoom};if(null!=this.getAttribute("draggable")){mapOptions.draggable=this.draggable}for(const p in this.additionalMapOptions){mapOptions[p]=this.additionalMapOptions[p]}return mapOptions},_attachChildrenToMap(children){if(this.map){for(var i=0,child;child=children[i];++i){child.map=this.map}}},_observeMarkers(){if(this._markersChildrenListener){return}this._markersChildrenListener=this.listen(this.$.selector,"items-changed","_updateMarkers")},_updateMarkers(){const newMarkers=Array.prototype.slice.call(this.$.markers.assignedNodes({flatten:!0}));if(newMarkers.length===this.markers.length){const added=newMarkers.filter(m=>this.markers&&-1===this.markers.indexOf(m));if(0===added.length){if(!this._markersChildrenListener){this._observeMarkers()}return}}this._observeMarkers();this.markers=this._setMarkers(newMarkers);this._attachChildrenToMap(this.markers);if(this.fitToMarkers){this._fitToMarkersChanged()}},_observeObjects(){if(this._objectsMutationObserver){return}this._objectsMutationObserver=new MutationObserver(this._updateObjects.bind(this));this._objectsMutationObserver.observe(this,{childList:!0})},_updateObjects(){const newObjects=Array.prototype.slice.call(this.$.objects.assignedNodes({flatten:!0}));if(newObjects.length===this.objects.length){const added=newObjects.filter(o=>-1===this.objects.indexOf(o));if(0===added.length){this._observeObjects();return}}this._observeObjects();this._setObjects(newObjects);this._attachChildrenToMap(this.objects)},clear(){for(var i=0,m;m=this.markers[i];++i){m.marker.setMap(null)}},triggerMarkerClick(id){google.maps.event.trigger(this.markers[id].marker,"click")},resize(){if(this.map){const oldLatitude=this.latitude,oldLongitude=this.longitude;google.maps.event.trigger(this.map,"resize");this.latitude=oldLatitude;this.longitude=oldLongitude;if(this.fitToMarkers){this._fitToMarkersChanged()}}},_loadKml(){if(this.map&&this.kml){const kmlfile=new google.maps.KmlLayer({url:this.kml,map:this.map})}},_debounceUpdateCenter(){this.debounce("updateCenter",this._updateCenter)},_updateCenter(){this.cancelDebouncer("updateCenter");if(this.map&&this.latitude!==void 0&&this.longitude!==void 0){const lati=+this.latitude;if(isNaN(lati)){throw new TypeError("latitude must be a number")}const longi=+this.longitude;if(isNaN(longi)){throw new TypeError("longitude must be a number")}const newCenter=new google.maps.LatLng(lati,longi);let oldCenter=this.map.getCenter();if(!oldCenter){this.map.setCenter(newCenter)}else{oldCenter=new google.maps.LatLng(oldCenter.lat(),oldCenter.lng());if(!oldCenter.equals(newCenter)){this.map.panTo(newCenter)}}}},_zoomChanged(){if(this.map){this.map.setZoom(+this.zoom)}},_idleEvent(){if(this.map){this._forwardEvent("idle")}else{this._clearListener("idle")}},_boundEventsChanged(){if(this.map){if(this.boundEvents){this._forwardEvent("center_changed");this._forwardEvent("bounds_changed")}else{this._clearListener("center_changed");this._clearListener("bounds_changed")}}},_clickEventsChanged(){if(this.map){if(this.clickEvents){this._forwardEvent("click");this._forwardEvent("dblclick");this._forwardEvent("rightclick")}else{this._clearListener("click");this._clearListener("dblclick");this._clearListener("rightclick")}}},_dragEventsChanged(){if(this.map){if(this.dragEvents){this._forwardEvent("drag");this._forwardEvent("dragend");this._forwardEvent("dragstart")}else{this._clearListener("drag");this._clearListener("dragend");this._clearListener("dragstart")}}},_mouseEventsChanged(){if(this.map){if(this.mouseEvents){this._forwardEvent("mousemove");this._forwardEvent("mouseout");this._forwardEvent("mouseover")}else{this._clearListener("mousemove");this._clearListener("mouseout");this._clearListener("mouseover")}}},_maxZoomChanged(){if(this.map){this.map.setOptions({maxZoom:+this.maxZoom})}},_minZoomChanged(){if(this.map){this.map.setOptions({minZoom:+this.minZoom})}},_mapTypeChanged(){if(this.map){this.map.setMapTypeId(this.mapType)}},_disableDefaultUiChanged(){if(!this.map){return}this.map.setOptions({disableDefaultUI:this.disableDefaultUi})},_disableMapTypeControlChanged(){if(!this.map){return}this.map.setOptions({mapTypeControl:!this.disableMapTypeControl})},_disableStreetViewControlChanged(){if(!this.map){return}this.map.setOptions({streetViewControl:!this.disableStreetViewControl})},_disableZoomChanged(){if(!this.map){return}this.map.setOptions({disableDoubleClickZoom:this.disableZoom,scrollwheel:!this.disableZoom})},attributeChanged(attrName){if(!this.map){return}switch(attrName){case"draggable":this.map.setOptions({draggable:this.draggable});break;}},_fitToMarkersChanged(){if(this.map&&this.fitToMarkers&&0<this.markers.length){const latLngBounds=new google.maps.LatLngBounds;for(var i=0,m;m=this.markers[i];++i){latLngBounds.extend(new google.maps.LatLng(m.latitude,m.longitude))}if(1<this.markers.length){this.map.fitBounds(latLngBounds)}this.map.setCenter(latLngBounds.getCenter())}},_addMapListeners(){google.maps.event.addListener(this.map,"center_changed",()=>{const center=this.map.getCenter();this.latitude=center.lat();this.longitude=center.lng()});google.maps.event.addListener(this.map,"zoom_changed",()=>{this.zoom=this.map.getZoom()});google.maps.event.addListener(this.map,"maptypeid_changed",()=>{this.mapType=this.map.getMapTypeId()});this._clickEventsChanged();this._boundEventsChanged();this._dragEventsChanged();this._mouseEventsChanged();this._idleEvent()},_clearListener(name){if(this._listeners[name]){google.maps.event.removeListener(this._listeners[name]);this._listeners[name]=null}},_forwardEvent(name){this._listeners[name]=google.maps.event.addListener(this.map,name,event=>{this.fire(`google-map-${name}`,event)})},_deselectMarker(e,detail){const markerIndex=this.$.selector.indexOf(e.target);if(this.singleInfoWindow){this.$.selector.selected=null}else if(this.$.selector.selectedValues){this.$.selector.selectedValues=this.$.selector.selectedValues.filter(i=>i!==markerIndex)}}});var ErrorCode;_exports.ErrorCode$1=_exports.ErrorCode=ErrorCode;(function(ErrorCode){ErrorCode.MISSING_VALUE="MISSING_VALUE";ErrorCode.INVALID_VALUE="INVALID_VALUE";ErrorCode.MISSING_INTL_API="MISSING_INTL_API"})(ErrorCode||(_exports.ErrorCode$1=_exports.ErrorCode=ErrorCode={}));var FormatError=function(_super){__extends(FormatError,_super);function FormatError(msg,code,originalMessage){var _this=_super.call(this,msg)||this;_this.code=code;_this.originalMessage=originalMessage;return _this}FormatError.prototype.toString=function(){return"[formatjs Error: "+this.code+"] "+this.message};return FormatError}(Error);_exports.FormatError$1=_exports.FormatError=FormatError;var InvalidValueError=function(_super){__extends(InvalidValueError,_super);function InvalidValueError(variableId,value,options,originalMessage){return _super.call(this,"Invalid values for \""+variableId+"\": \""+value+"\". Options are \""+Object.keys(options).join("\", \"")+"\"",ErrorCode.INVALID_VALUE,originalMessage)||this}return InvalidValueError}(FormatError);_exports.InvalidValueError$1=_exports.InvalidValueError=InvalidValueError;var InvalidValueTypeError=function(_super){__extends(InvalidValueTypeError,_super);function InvalidValueTypeError(value,type,originalMessage){return _super.call(this,"Value for \""+value+"\" must be of type "+type,ErrorCode.INVALID_VALUE,originalMessage)||this}return InvalidValueTypeError}(FormatError);_exports.InvalidValueTypeError$1=_exports.InvalidValueTypeError=InvalidValueTypeError;var MissingValueError=function(_super){__extends(MissingValueError,_super);function MissingValueError(variableId,originalMessage){return _super.call(this,"The intl string context variable \""+variableId+"\" was not provided to the string \""+originalMessage+"\"",ErrorCode.MISSING_VALUE,originalMessage)||this}return MissingValueError}(FormatError);_exports.MissingValueError$1=_exports.MissingValueError=MissingValueError;var error$1={get ErrorCode(){return ErrorCode},FormatError:FormatError,InvalidValueError:InvalidValueError,InvalidValueTypeError:InvalidValueTypeError,MissingValueError:MissingValueError};_exports.$error$1=error$1;var PART_TYPE;_exports.PART_TYPE$1=_exports.PART_TYPE=PART_TYPE;(function(PART_TYPE){PART_TYPE[PART_TYPE.literal=0]="literal";PART_TYPE[PART_TYPE.object=1]="object"})(PART_TYPE||(_exports.PART_TYPE$1=_exports.PART_TYPE=PART_TYPE={}));function mergeLiteral(parts){if(2>parts.length){return parts}return parts.reduce(function(all,part){var lastPart=all[all.length-1];if(!lastPart||lastPart.type!==PART_TYPE.literal||part.type!==PART_TYPE.literal){all.push(part)}else{lastPart.value+=part.value}return all},[])}function isFormatXMLElementFn(el){return"function"===typeof el}function formatToParts(els,locales,formatters,formats,values,currentPluralValue,originalMessage){if(1===els.length&&isLiteralElement(els[0])){return[{type:PART_TYPE.literal,value:els[0].value}]}for(var result=[],_i=0,els_1=els,el;_i<els_1.length;_i++){el=els_1[_i];if(isLiteralElement(el)){result.push({type:PART_TYPE.literal,value:el.value});continue}if(isPoundElement(el)){if("number"===typeof currentPluralValue){result.push({type:PART_TYPE.literal,value:formatters.getNumberFormat(locales).format(currentPluralValue)})}continue}var varName=el.value;if(!(values&&varName in values)){throw new MissingValueError(varName,originalMessage)}var value=values[varName];if(isArgumentElement(el)){if(!value||"string"===typeof value||"number"===typeof value){value="string"===typeof value||"number"===typeof value?value+"":""}result.push({type:"string"===typeof value?PART_TYPE.literal:PART_TYPE.object,value:value});continue}if(isDateElement(el)){var style="string"===typeof el.style?formats.date[el.style]:isDateTimeSkeleton(el.style)?el.style.parsedOptions:void 0;result.push({type:PART_TYPE.literal,value:formatters.getDateTimeFormat(locales,style).format(value)});continue}if(isTimeElement(el)){var style="string"===typeof el.style?formats.time[el.style]:isDateTimeSkeleton(el.style)?el.style.parsedOptions:void 0;result.push({type:PART_TYPE.literal,value:formatters.getDateTimeFormat(locales,style).format(value)});continue}if(isNumberElement(el)){var style="string"===typeof el.style?formats.number[el.style]:isNumberSkeleton(el.style)?el.style.parsedOptions:void 0;if(style&&style.scale){value=value*(style.scale||1)}result.push({type:PART_TYPE.literal,value:formatters.getNumberFormat(locales,style).format(value)});continue}if(isTagElement(el)){var children=el.children,value_1=el.value,formatFn=values[value_1];if(!isFormatXMLElementFn(formatFn)){throw new InvalidValueTypeError(value_1,"function",originalMessage)}var parts=formatToParts(children,locales,formatters,formats,values,currentPluralValue),chunks=formatFn(parts.map(function(p){return p.value}));if(!Array.isArray(chunks)){chunks=[chunks]}result.push.apply(result,chunks.map(function(c){return{type:"string"===typeof c?PART_TYPE.literal:PART_TYPE.object,value:c}}))}if(isSelectElement(el)){var opt=el.options[value]||el.options.other;if(!opt){throw new InvalidValueError(el.value,value,Object.keys(el.options),originalMessage)}result.push.apply(result,formatToParts(opt.value,locales,formatters,formats,values));continue}if(isPluralElement(el)){var opt=el.options["="+value];if(!opt){if(!Intl.PluralRules){throw new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n",ErrorCode.MISSING_INTL_API,originalMessage)}var rule=formatters.getPluralRules(locales,{type:el.pluralType}).select(value-(el.offset||0));opt=el.options[rule]||el.options.other}if(!opt){throw new InvalidValueError(el.value,value,Object.keys(el.options),originalMessage)}result.push.apply(result,formatToParts(opt.value,locales,formatters,formats,values,value-(el.offset||0)));continue}}return mergeLiteral(result)}var formatters={get PART_TYPE(){return PART_TYPE},isFormatXMLElementFn:isFormatXMLElementFn,formatToParts:formatToParts};_exports.$formatters=formatters;function mergeConfig(c1,c2){if(!c2){return c1}return __assign(__assign(__assign({},c1||{}),c2||{}),Object.keys(c1).reduce(function(all,k){all[k]=__assign(__assign({},c1[k]),c2[k]||{});return all},{}))}function mergeConfigs(defaultConfig,configs){if(!configs){return defaultConfig}return Object.keys(defaultConfig).reduce(function(all,k){all[k]=mergeConfig(defaultConfig[k],configs[k]);return all},__assign({},defaultConfig))}function createFastMemoizeCache(store){return{create:function(){return{has:function(key){return key in store},get:function(key){return store[key]},set:function(key,value){store[key]=value}}}}}function createDefaultFormatters(cache){if(void 0===cache){cache={number:{},dateTime:{},pluralRules:{}}}return{getNumberFormat:memoize(function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++){args[_i]=arguments[_i]}return new((_a=Intl.NumberFormat).bind.apply(_a,__spreadArray([void 0],args)))},{cache:createFastMemoizeCache(cache.number),strategy:strategies.variadic}),getDateTimeFormat:memoize(function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++){args[_i]=arguments[_i]}return new((_a=Intl.DateTimeFormat).bind.apply(_a,__spreadArray([void 0],args)))},{cache:createFastMemoizeCache(cache.dateTime),strategy:strategies.variadic}),getPluralRules:memoize(function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++){args[_i]=arguments[_i]}return new((_a=Intl.PluralRules).bind.apply(_a,__spreadArray([void 0],args)))},{cache:createFastMemoizeCache(cache.pluralRules),strategy:strategies.variadic})}}var IntlMessageFormat=function(){function IntlMessageFormat(message,locales,overrideFormats,opts){var _this=this;if(void 0===locales){locales=IntlMessageFormat.defaultLocale}this.formatterCache={number:{},dateTime:{},pluralRules:{}};this.format=function(values){var parts=_this.formatToParts(values);if(1===parts.length){return parts[0].value}var result=parts.reduce(function(all,part){if(!all.length||part.type!==PART_TYPE.literal||"string"!==typeof all[all.length-1]){all.push(part.value)}else{all[all.length-1]+=part.value}return all},[]);if(1>=result.length){return result[0]||""}return result};this.formatToParts=function(values){return formatToParts(_this.ast,_this.locales,_this.formatters,_this.formats,values,void 0,_this.message)};this.resolvedOptions=function(){return{locale:Intl.NumberFormat.supportedLocalesOf(_this.locales)[0]}};this.getAst=function(){return _this.ast};if("string"===typeof message){this.message=message;if(!IntlMessageFormat.__parse){throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`")}this.ast=IntlMessageFormat.__parse(message,{ignoreTag:null===opts||void 0===opts?void 0:opts.ignoreTag})}else{this.ast=message}if(!Array.isArray(this.ast)){throw new TypeError("A message must be provided as a String or AST.")}this.formats=mergeConfigs(IntlMessageFormat.formats,overrideFormats);this.locales=locales;this.formatters=opts&&opts.formatters||createDefaultFormatters(this.formatterCache)}Object.defineProperty(IntlMessageFormat,"defaultLocale",{get:function(){if(!IntlMessageFormat.memoizedDefaultLocale){IntlMessageFormat.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale}return IntlMessageFormat.memoizedDefaultLocale},enumerable:!1,configurable:!0});IntlMessageFormat.memoizedDefaultLocale=null;IntlMessageFormat.__parse=parse$1;IntlMessageFormat.formats={number:{currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}};return IntlMessageFormat}();_exports.$indexDefault$1=_exports.IntlMessageFormat$1=_exports.IntlMessageFormat=IntlMessageFormat;var core={IntlMessageFormat:IntlMessageFormat};_exports.$core=core;var index$3={default:IntlMessageFormat,get PART_TYPE(){return PART_TYPE},isFormatXMLElementFn:isFormatXMLElementFn,formatToParts:formatToParts,IntlMessageFormat:IntlMessageFormat,get ErrorCode(){return ErrorCode},FormatError:FormatError,InvalidValueError:InvalidValueError,InvalidValueTypeError:InvalidValueTypeError,MissingValueError:MissingValueError};_exports.$index$3=index$3;const supportsAdoptingStyleSheets=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=supportsAdoptingStyleSheets;const constructionToken=Symbol();class CSSResult{constructor(cssText,safeToken){if(safeToken!==constructionToken){throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.")}this.cssText=cssText}get styleSheet(){if(this._styleSheet===void 0){if(supportsAdoptingStyleSheets){this._styleSheet=new CSSStyleSheet;this._styleSheet.replaceSync(this.cssText)}else{this._styleSheet=null}}return this._styleSheet}toString(){return this.cssText}}_exports.CSSResult$1=_exports.CSSResult=CSSResult;const unsafeCSS=value=>{return new CSSResult(value+"",constructionToken)};_exports.unsafeCSS$1=_exports.unsafeCSS=unsafeCSS;const textFromCSSResult=value=>{if(value instanceof CSSResult){return value.cssText}else if("number"===typeof value){return value}else{throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)}},css=(strings,...values)=>{const cssText=values.reduce((acc,v,idx)=>acc+textFromCSSResult(v)+strings[idx+1],strings[0]);return new CSSResult(cssText,constructionToken)};_exports.css=_exports.css$1=css;var cssTag={supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};_exports.$cssTag=cssTag;const legacyCustomElement=(tagName,clazz)=>{window.customElements.define(tagName,clazz);return clazz},standardCustomElement=(tagName,descriptor)=>{const{kind,elements}=descriptor;return{kind,elements,finisher(clazz){window.customElements.define(tagName,clazz)}}},customElement=tagName=>classOrDescriptor=>"function"===typeof classOrDescriptor?legacyCustomElement(tagName,classOrDescriptor):standardCustomElement(tagName,classOrDescriptor);_exports.customElement$1=_exports.customElement=customElement;const standardProperty=(options,element)=>{if("method"===element.kind&&element.descriptor&&!("value"in element.descriptor)){return Object.assign(Object.assign({},element),{finisher(clazz){clazz.createProperty(element.key,options)}})}else{return{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){if("function"===typeof element.initializer){this[element.key]=element.initializer.call(this)}},finisher(clazz){clazz.createProperty(element.key,options)}}}},legacyProperty=(options,proto,name)=>{proto.constructor.createProperty(name,options)};function property(options){return(protoOrDescriptor,name)=>name!==void 0?legacyProperty(options,protoOrDescriptor,name):standardProperty(options,protoOrDescriptor)}function internalProperty(options){return property({attribute:!1,hasChanged:null===options||void 0===options?void 0:options.hasChanged})}const state=options=>internalProperty(options);_exports.state$1=_exports.state=state;function query(selector,cache){return(protoOrDescriptor,name)=>{const descriptor={get(){return this.renderRoot.querySelector(selector)},enumerable:!0,configurable:!0};if(cache){const prop=name!==void 0?name:protoOrDescriptor.key,key="symbol"===typeof prop?Symbol():`__${prop}`;descriptor.get=function(){if(this[key]===void 0){this[key]=this.renderRoot.querySelector(selector)}return this[key]}}return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}function queryAsync(selector){return(protoOrDescriptor,name)=>{const descriptor={get(){var _this2=this;return babelHelpers.asyncToGenerator(function*(){yield _this2.updateComplete;return _this2.renderRoot.querySelector(selector)})()},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}function queryAll(selector){return(protoOrDescriptor,name)=>{const descriptor={get(){return this.renderRoot.querySelectorAll(selector)},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}const legacyQuery=(descriptor,proto,name)=>{Object.defineProperty(proto,name,descriptor)},standardQuery=(descriptor,element)=>({kind:"method",placement:"prototype",key:element.key,descriptor}),standardEventOptions=(options,element)=>{return Object.assign(Object.assign({},element),{finisher(clazz){Object.assign(clazz.prototype[element.key],options)}})},legacyEventOptions=(options,proto,name)=>{Object.assign(proto[name],options)};function eventOptions(options){return(protoOrDescriptor,name)=>name!==void 0?legacyEventOptions(options,protoOrDescriptor,name):standardEventOptions(options,protoOrDescriptor)}const ElementProto=Element.prototype,legacyMatches=ElementProto.msMatchesSelector||ElementProto.webkitMatchesSelector;function queryAssignedNodes(slotName="",flatten=!1,selector=""){return(protoOrDescriptor,name)=>{const descriptor={get(){const slotSelector=`slot${slotName?`[name=${slotName}]`:":not([name])"}`,slot=this.renderRoot.querySelector(slotSelector);let nodes=slot&&slot.assignedNodes({flatten});if(nodes&&selector){nodes=nodes.filter(node=>node.nodeType===Node.ELEMENT_NODE&&(node.matches?node.matches(selector):legacyMatches.call(node,selector)))}return nodes},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}var decorators={customElement:customElement,property:property,internalProperty:internalProperty,state:state,query:query,queryAsync:queryAsync,queryAll:queryAll,eventOptions:eventOptions,queryAssignedNodes:queryAssignedNodes};_exports.$decorators=decorators;var _a$1;window.JSCompiler_renameProperty=(prop,_obj)=>prop;const defaultConverter={toAttribute(value,type){switch(type){case Boolean:return value?"":null;case Object:case Array:return null==value?value:JSON.stringify(value);}return value},fromAttribute(value,type){switch(type){case Boolean:return null!==value;case Number:return null===value?null:+value;case Object:case Array:return JSON.parse(value);}return value}};_exports.defaultConverter$1=_exports.defaultConverter=defaultConverter;const notEqual=(value,old)=>{return old!==value&&(old===old||value===value)};_exports.notEqual$1=_exports.notEqual=notEqual;const defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=1<<2,STATE_IS_REFLECTING_TO_ATTRIBUTE=1<<3,STATE_IS_REFLECTING_TO_PROPERTY=1<<4,finalized="finalized";class UpdatingElement extends HTMLElement{constructor(){super();this.initialize()}static get observedAttributes(){this.finalize();const attributes=[];this._classProperties.forEach((v,p)=>{const attr=this._attributeNameForProperty(p,v);if(attr!==void 0){this._attributeToPropertyMap.set(attr,p);attributes.push(attr)}});return attributes}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==void 0){superProperties.forEach((v,k)=>this._classProperties.set(k,v))}}}static createProperty(name,options=defaultPropertyDeclaration){this._ensureClassProperties();this._classProperties.set(name,options);if(options.noAccessor||this.prototype.hasOwnProperty(name)){return}const key="symbol"===typeof name?Symbol():`__${name}`,descriptor=this.getPropertyDescriptor(name,key,options);if(descriptor!==void 0){Object.defineProperty(this.prototype,name,descriptor)}}static getPropertyDescriptor(name,key,options){return{get(){return this[key]},set(value){const oldValue=this[name];this[key]=value;this.requestUpdateInternal(name,oldValue,options)},configurable:!0,enumerable:!0}}static getPropertyOptions(name){return this._classProperties&&this._classProperties.get(name)||defaultPropertyDeclaration}static finalize(){const superCtor=Object.getPrototypeOf(this);if(!superCtor.hasOwnProperty(finalized)){superCtor.finalize()}this[finalized]=!0;this._ensureClassProperties();this._attributeToPropertyMap=new Map;if(this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const props=this.properties,propKeys=[...Object.getOwnPropertyNames(props),...("function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[])];for(const p of propKeys){this.createProperty(p,props[p])}}}static _attributeNameForProperty(name,options){const attribute=options.attribute;return!1===attribute?void 0:"string"===typeof attribute?attribute:"string"===typeof name?name.toLowerCase():void 0}static _valueHasChanged(value,old,hasChanged=notEqual){return hasChanged(value,old)}static _propertyValueFromAttribute(value,options){const type=options.type,converter=options.converter||defaultConverter,fromAttribute="function"===typeof converter?converter:converter.fromAttribute;return fromAttribute?fromAttribute(value,type):value}static _propertyValueToAttribute(value,options){if(options.reflect===void 0){return}const type=options.type,converter=options.converter,toAttribute=converter&&converter.toAttribute||defaultConverter.toAttribute;return toAttribute(value,type)}initialize(){this._updateState=0;this._updatePromise=new Promise(res=>this._enableUpdatingResolver=res);this._changedProperties=new Map;this._saveInstanceProperties();this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((_v,p)=>{if(this.hasOwnProperty(p)){const value=this[p];delete this[p];if(!this._instanceProperties){this._instanceProperties=new Map}this._instanceProperties.set(p,value)}})}_applyInstanceProperties(){this._instanceProperties.forEach((v,p)=>this[p]=v);this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){if(this._enableUpdatingResolver!==void 0){this._enableUpdatingResolver();this._enableUpdatingResolver=void 0}}disconnectedCallback(){}attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value)}}_propertyToAttribute(name,value,options=defaultPropertyDeclaration){const ctor=this.constructor,attr=ctor._attributeNameForProperty(name,options);if(attr!==void 0){const attrValue=ctor._propertyValueToAttribute(value,options);if(attrValue===void 0){return}this._updateState=this._updateState|STATE_IS_REFLECTING_TO_ATTRIBUTE;if(null==attrValue){this.removeAttribute(attr)}else{this.setAttribute(attr,attrValue)}this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_ATTRIBUTE}}_attributeToProperty(name,value){if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE){return}const ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);if(propName!==void 0){const options=ctor.getPropertyOptions(propName);this._updateState=this._updateState|STATE_IS_REFLECTING_TO_PROPERTY;this[propName]=ctor._propertyValueFromAttribute(value,options);this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_PROPERTY}}requestUpdateInternal(name,oldValue,options){let shouldRequestUpdate=!0;if(name!==void 0){const ctor=this.constructor;options=options||ctor.getPropertyOptions(name);if(ctor._valueHasChanged(this[name],oldValue,options.hasChanged)){if(!this._changedProperties.has(name)){this._changedProperties.set(name,oldValue)}if(!0===options.reflect&&!(this._updateState&STATE_IS_REFLECTING_TO_PROPERTY)){if(this._reflectingProperties===void 0){this._reflectingProperties=new Map}this._reflectingProperties.set(name,options)}}else{shouldRequestUpdate=!1}}if(!this._hasRequestedUpdate&&shouldRequestUpdate){this._updatePromise=this._enqueueUpdate()}}requestUpdate(name,oldValue){this.requestUpdateInternal(name,oldValue);return this.updateComplete}_enqueueUpdate(){var _this3=this;return babelHelpers.asyncToGenerator(function*(){_this3._updateState=_this3._updateState|STATE_UPDATE_REQUESTED;try{yield _this3._updatePromise}catch(e){}const result=_this3.performUpdate();if(null!=result){yield result}return!_this3._hasRequestedUpdate})()}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED}get hasUpdated(){return this._updateState&STATE_HAS_UPDATED}performUpdate(){if(!this._hasRequestedUpdate){return}if(this._instanceProperties){this._applyInstanceProperties()}let shouldUpdate=!1;const changedProperties=this._changedProperties;try{shouldUpdate=this.shouldUpdate(changedProperties);if(shouldUpdate){this.update(changedProperties)}else{this._markUpdated()}}catch(e){shouldUpdate=!1;this._markUpdated();throw e}if(shouldUpdate){if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties)}this.updated(changedProperties)}}_markUpdated(){this._changedProperties=new Map;this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(_changedProperties){return!0}update(_changedProperties){if(this._reflectingProperties!==void 0&&0<this._reflectingProperties.size){this._reflectingProperties.forEach((v,k)=>this._propertyToAttribute(k,this[k],v));this._reflectingProperties=void 0}this._markUpdated()}updated(_changedProperties){}firstUpdated(_changedProperties){}}_exports.ReactiveElement=_exports.UpdatingElement$1=_exports.UpdatingElement=UpdatingElement;_a$1=finalized;UpdatingElement[_a$1]=!0;var updatingElement={defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement};_exports.$updatingElement=updatingElement;const isCEPolyfill="undefined"!==typeof window&&null!=window.customElements&&window.customElements.polyfillWrapFlushCallback!==void 0;_exports.isCEPolyfill=isCEPolyfill;const reparentNodes=(container,start,end=null,before=null)=>{while(start!==end){const n=start.nextSibling;container.insertBefore(start,before);start=n}};_exports.reparentNodes$1=_exports.reparentNodes=reparentNodes;const removeNodes=(container,start,end=null)=>{while(start!==end){const n=start.nextSibling;container.removeChild(start);start=n}};_exports.removeNodes$1=_exports.removeNodes=removeNodes;var dom$1={isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes};_exports.$dom=dom$1;const marker=`{{lit-${(Math.random()+"").slice(2)}}}`;_exports.marker=marker;const nodeMarker=`<!--${marker}-->`;_exports.nodeMarker=nodeMarker;const markerRegex=new RegExp(`${marker}|${nodeMarker}`);_exports.markerRegex=markerRegex;const boundAttributeSuffix="$lit$";_exports.boundAttributeSuffix=boundAttributeSuffix;class Template{constructor(result,element){this.parts=[];this.element=element;const nodesToRemove=[],stack=[],walker=document.createTreeWalker(element.content,133,null,!1);let lastPartIndex=0,index=-1,partIndex=0;const{strings,values:{length}}=result;while(partIndex<length){const node=walker.nextNode();if(null===node){walker.currentNode=stack.pop();continue}index++;if(1===node.nodeType){if(node.hasAttributes()){const attributes=node.attributes,{length}=attributes;let count=0;for(let i=0;i<length;i++){if(endsWith(attributes[i].name,boundAttributeSuffix)){count++}}while(0<count--){const stringForPart=strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=name.toLowerCase()+boundAttributeSuffix,attributeValue=node.getAttribute(attributeLookupName);node.removeAttribute(attributeLookupName);const statics=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index,name,strings:statics});partIndex+=statics.length-1}}if("TEMPLATE"===node.tagName){stack.push(node);walker.currentNode=node.content}}else if(3===node.nodeType){const data=node.data;if(0<=data.indexOf(marker)){const parent=node.parentNode,strings=data.split(markerRegex),lastIndex=strings.length-1;for(let i=0;i<lastIndex;i++){let insert,s=strings[i];if(""===s){insert=createMarker()}else{const match=lastAttributeNameRegex.exec(s);if(null!==match&&endsWith(match[2],boundAttributeSuffix)){s=s.slice(0,match.index)+match[1]+match[2].slice(0,-boundAttributeSuffix.length)+match[3]}insert=document.createTextNode(s)}parent.insertBefore(insert,node);this.parts.push({type:"node",index:++index})}if(""===strings[lastIndex]){parent.insertBefore(createMarker(),node);nodesToRemove.push(node)}else{node.data=strings[lastIndex]}partIndex+=lastIndex}}else if(8===node.nodeType){if(node.data===marker){const parent=node.parentNode;if(null===node.previousSibling||index===lastPartIndex){index++;parent.insertBefore(createMarker(),node)}lastPartIndex=index;this.parts.push({type:"node",index});if(null===node.nextSibling){node.data=""}else{nodesToRemove.push(node);index--}partIndex++}else{let i=-1;while(-1!==(i=node.data.indexOf(marker,i+1))){this.parts.push({type:"node",index:-1});partIndex++}}}}for(const n of nodesToRemove){n.parentNode.removeChild(n)}}}_exports.Template$1=_exports.Template=Template;const endsWith=(str,suffix)=>{const index=str.length-suffix.length;return 0<=index&&str.slice(index)===suffix},isTemplatePartActive=part=>-1!==part.index;_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=isTemplatePartActive;const createMarker=()=>document.createComment("");_exports.createMarker$1=_exports.createMarker=createMarker;const lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;_exports.lastAttributeNameRegex=lastAttributeNameRegex;var template$b={marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,boundAttributeSuffix:boundAttributeSuffix,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex};_exports.$template=template$b;const walkerNodeFilter=133;function removeNodesFromTemplate(template,nodesToRemove){const{element:{content},parts}=template,walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0;const nodesToRemoveInTemplate=[];let currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;const node=walker.currentNode;if(node.previousSibling===currentRemovingNode){currentRemovingNode=null}if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);if(null===currentRemovingNode){currentRemovingNode=node}}if(null!==currentRemovingNode){removeCount++}while(part!==void 0&&part.index===nodeIndex){part.index=null!==currentRemovingNode?-1:part.index-removeCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex]}}nodesToRemoveInTemplate.forEach(n=>n.parentNode.removeChild(n))}const countNodes=node=>{let count=11===node.nodeType?0:1;const walker=document.createTreeWalker(node,walkerNodeFilter,null,!1);while(walker.nextNode()){count++}return count},nextActiveIndexInTemplateParts=(parts,startIndex=-1)=>{for(let i=startIndex+1;i<parts.length;i++){const part=parts[i];if(isTemplatePartActive(part)){return i}}return-1};function insertNodeIntoTemplate(template,node,refNode=null){const{element:{content},parts}=template;if(null===refNode||refNode===void 0){content.appendChild(node);return}const walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;while(walker.nextNode()){walkerIndex++;const walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode)}while(-1!==partIndex&&parts[partIndex].index===walkerIndex){if(0<insertCount){while(-1!==partIndex){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}}var modifyTemplate={removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};_exports.$modifyTemplate=modifyTemplate;const directives=new WeakMap,directive=f=>(...args)=>{const d=f(...args);directives.set(d,!0);return d};_exports.directive$1=_exports.directive=directive;const isDirective=o=>{return"function"===typeof o&&directives.has(o)};_exports.isDirective$1=_exports.isDirective=isDirective;var directive$1={directive:directive,isDirective:isDirective};_exports.$directive=directive$1;const noChange={};_exports.noChange$1=_exports.noChange=noChange;const nothing={};_exports.nothing$1=_exports.nothing=nothing;var part={noChange:noChange,nothing:nothing};_exports.$part=part;class TemplateInstance{constructor(template,processor,options){this.__parts=[];this.template=template;this.processor=processor;this.options=options}update(values){let i=0;for(const part of this.__parts){if(part!==void 0){part.setValue(values[i])}i++}for(const part of this.__parts){if(part!==void 0){part.commit()}}}_clone(){const fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),stack=[],parts=this.template.parts,walker=document.createTreeWalker(fragment,133,null,!1);let partIndex=0,nodeIndex=0,part,node=walker.nextNode();while(partIndex<parts.length){part=parts[partIndex];if(!isTemplatePartActive(part)){this.__parts.push(void 0);partIndex++;continue}while(nodeIndex<part.index){nodeIndex++;if("TEMPLATE"===node.nodeName){stack.push(node);walker.currentNode=node.content}if(null===(node=walker.nextNode())){walker.currentNode=stack.pop();node=walker.nextNode()}}if("node"===part.type){const part=this.processor.handleTextExpression(this.options);part.insertAfterNode(node.previousSibling);this.__parts.push(part)}else{this.__parts.push(...this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options))}partIndex++}if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment)}return fragment}}_exports.TemplateInstance$1=_exports.TemplateInstance=TemplateInstance;var templateInstance={TemplateInstance:TemplateInstance};_exports.$templateInstance=templateInstance;const policy=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),commentMarker=` ${marker} `;class TemplateResult{constructor(strings,values,type,processor){this.strings=strings;this.values=values;this.type=type;this.processor=processor}getHTML(){const l=this.strings.length-1;let html="",isCommentBinding=!1;for(let i=0;i<l;i++){const s=this.strings[i],commentOpen=s.lastIndexOf("<!--");isCommentBinding=(-1<commentOpen||isCommentBinding)&&-1===s.indexOf("-->",commentOpen+1);const attributeMatch=lastAttributeNameRegex.exec(s);if(null===attributeMatch){html+=s+(isCommentBinding?commentMarker:nodeMarker)}else{html+=s.substr(0,attributeMatch.index)+attributeMatch[1]+attributeMatch[2]+boundAttributeSuffix+attributeMatch[3]+marker}}html+=this.strings[l];return html}getTemplateElement(){const template=document.createElement("template");let value=this.getHTML();if(policy!==void 0){value=policy.createHTML(value)}template.innerHTML=value;return template}}_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=TemplateResult;class SVGTemplateResult extends TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const template=super.getTemplateElement(),content=template.content,svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template}}_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=SVGTemplateResult;var templateResult={TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult};_exports.$templateResult=templateResult;const isPrimitive$1=value=>{return null===value||!("object"===typeof value||"function"===typeof value)};_exports.isPrimitive$1=_exports.isPrimitive=isPrimitive$1;const isIterable=value=>{return Array.isArray(value)||!!(value&&value[Symbol.iterator])};_exports.isIterable$1=_exports.isIterable=isIterable;class AttributeCommitter{constructor(element,name,strings){this.dirty=!0;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(let i=0;i<strings.length-1;i++){this.parts[i]=this._createPart()}}_createPart(){return new AttributePart(this)}_getValue(){const strings=this.strings,l=strings.length-1,parts=this.parts;if(1===l&&""===strings[0]&&""===strings[1]){const v=parts[0].value;if("symbol"===typeof v){return v+""}if("string"===typeof v||!isIterable(v)){return v}}let text="";for(let i=0;i<l;i++){text+=strings[i];const part=parts[i];if(part!==void 0){const v=part.value;if(isPrimitive$1(v)||!isIterable(v)){text+="string"===typeof v?v:v+""}else{for(const t of v){text+="string"===typeof t?t:t+""}}}}text+=strings[l];return text}commit(){if(this.dirty){this.dirty=!1;this.element.setAttribute(this.name,this._getValue())}}}_exports.AttributeCommitter$1=_exports.AttributeCommitter=AttributeCommitter;class AttributePart{constructor(committer){this.value=void 0;this.committer=committer}setValue(value){if(value!==noChange&&(!isPrimitive$1(value)||value!==this.value)){this.value=value;if(!isDirective(value)){this.committer.dirty=!0}}}commit(){while(isDirective(this.value)){const directive=this.value;this.value=noChange;directive(this)}if(this.value===noChange){return}this.committer.commit()}}_exports.AttributePart$1=_exports.AttributePart=AttributePart;class NodePart{constructor(options){this.value=void 0;this.__pendingValue=void 0;this.options=options}appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker())}insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling}appendIntoPart(part){part.__insert(this.startNode=createMarker());part.__insert(this.endNode=createMarker())}insertAfterPart(ref){ref.__insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode}setValue(value){this.__pendingValue=value}commit(){if(null===this.startNode.parentNode){return}while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}const value=this.__pendingValue;if(value===noChange){return}if(isPrimitive$1(value)){if(value!==this.value){this.__commitText(value)}}else if(value instanceof TemplateResult){this.__commitTemplateResult(value)}else if(value instanceof Node){this.__commitNode(value)}else if(isIterable(value)){this.__commitIterable(value)}else if(value===nothing){this.value=nothing;this.clear()}else{this.__commitText(value)}}__insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}__commitNode(value){if(this.value===value){return}this.clear();this.__insert(value);this.value=value}__commitText(value){const node=this.startNode.nextSibling;value=null==value?"":value;const valueAsString="string"===typeof value?value:value+"";if(node===this.endNode.previousSibling&&3===node.nodeType){node.data=valueAsString}else{this.__commitNode(document.createTextNode(valueAsString))}this.value=value}__commitTemplateResult(value){const template=this.options.templateFactory(value);if(this.value instanceof TemplateInstance&&this.value.template===template){this.value.update(value.values)}else{const instance=new TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values);this.__commitNode(fragment);this.value=instance}}__commitIterable(value){if(!Array.isArray(this.value)){this.value=[];this.clear()}const itemParts=this.value;let partIndex=0,itemPart;for(const item of value){itemPart=itemParts[partIndex];if(itemPart===void 0){itemPart=new NodePart(this.options);itemParts.push(itemPart);if(0===partIndex){itemPart.appendIntoPart(this)}else{itemPart.insertAfterPart(itemParts[partIndex-1])}}itemPart.setValue(item);itemPart.commit();partIndex++}if(partIndex<itemParts.length){itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode)}}clear(startNode=this.startNode){removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}_exports.NodePart$1=_exports.NodePart=NodePart;class BooleanAttributePart{constructor(element,name,strings){this.value=void 0;this.__pendingValue=void 0;if(2!==strings.length||""!==strings[0]||""!==strings[1]){throw new Error("Boolean attributes can only contain a single expression")}this.element=element;this.name=name;this.strings=strings}setValue(value){this.__pendingValue=value}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}if(this.__pendingValue===noChange){return}const value=!!this.__pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,"")}else{this.element.removeAttribute(this.name)}this.value=value}this.__pendingValue=noChange}}_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=BooleanAttributePart;class PropertyCommitter extends AttributeCommitter{constructor(element,name,strings){super(element,name,strings);this.single=2===strings.length&&""===strings[0]&&""===strings[1]}_createPart(){return new PropertyPart(this)}_getValue(){if(this.single){return this.parts[0].value}return super._getValue()}commit(){if(this.dirty){this.dirty=!1;this.element[this.name]=this._getValue()}}}_exports.PropertyCommitter$1=_exports.PropertyCommitter=PropertyCommitter;class PropertyPart extends AttributePart{}_exports.PropertyPart$1=_exports.PropertyPart=PropertyPart;let eventOptionsSupported=!1;(()=>{try{const options={get capture(){eventOptionsSupported=!0;return!1}};window.addEventListener("test",options,options);window.removeEventListener("test",options,options)}catch(_e){}})();class EventPart{constructor(element,eventName,eventContext){this.value=void 0;this.__pendingValue=void 0;this.element=element;this.eventName=eventName;this.eventContext=eventContext;this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(value){this.__pendingValue=value}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}if(this.__pendingValue===noChange){return}const newListener=this.__pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive),shouldAddListener=null!=newListener&&(null==oldListener||shouldRemoveListener);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options)}if(shouldAddListener){this.__options=getOptions(newListener);this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)}this.value=newListener;this.__pendingValue=noChange}handleEvent(event){if("function"===typeof this.value){this.value.call(this.eventContext||this.element,event)}else{this.value.handleEvent(event)}}}_exports.EventPart$1=_exports.EventPart=EventPart;const getOptions=o=>o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);var parts={isPrimitive:isPrimitive$1,isIterable:isIterable,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart};_exports.$parts=parts;function templateFactory(result){let templateCache=templateCaches.get(result.type);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(result.type,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}const key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===void 0){template=new Template(result,result.getTemplateElement());templateCache.keyString.set(key,template)}templateCache.stringsArray.set(result.strings,template);return template}const templateCaches=new Map;_exports.templateCaches$1=_exports.templateCaches=templateCaches;var templateFactory$1={templateFactory:templateFactory,templateCaches:templateCaches};_exports.$templateFactory=templateFactory$1;const parts$1=new WeakMap;_exports.parts$1=_exports.parts=parts$1;const render=(result,container,options)=>{let part=parts$1.get(container);if(part===void 0){removeNodes(container,container.firstChild);parts$1.set(container,part=new NodePart(Object.assign({templateFactory},options)));part.appendInto(container)}part.setValue(result);part.commit()};_exports.render$2=_exports.render=render;var render$1={parts:parts$1,render:render};_exports.$render=render$1;class DefaultTemplateProcessor{handleAttributeExpressions(element,name,strings,options){const prefix=name[0];if("."===prefix){const committer=new PropertyCommitter(element,name.slice(1),strings);return committer.parts}if("@"===prefix){return[new EventPart(element,name.slice(1),options.eventContext)]}if("?"===prefix){return[new BooleanAttributePart(element,name.slice(1),strings)]}const committer=new AttributeCommitter(element,name,strings);return committer.parts}handleTextExpression(options){return new NodePart(options)}}_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=DefaultTemplateProcessor;const defaultTemplateProcessor=new DefaultTemplateProcessor;_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=defaultTemplateProcessor;var defaultTemplateProcessor$1={DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor};_exports.$defaultTemplateProcessor=defaultTemplateProcessor$1;if("undefined"!==typeof window){(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1")}const html$1=(strings,...values)=>new TemplateResult(strings,values,"html",defaultTemplateProcessor);_exports.html$5=_exports.html$4=_exports.html$1=html$1;const svg=(strings,...values)=>new SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor);_exports.svg$2=_exports.svg$1=_exports.svg=svg;var litHtml={html:html$1,svg:svg,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor,directive:directive,isDirective:isDirective,removeNodes:removeNodes,reparentNodes:reparentNodes,noChange:noChange,nothing:nothing,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,BooleanAttributePart:BooleanAttributePart,EventPart:EventPart,isIterable:isIterable,isPrimitive:isPrimitive$1,NodePart:NodePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,parts:parts$1,render:render,templateCaches:templateCaches,templateFactory:templateFactory,TemplateInstance:TemplateInstance,SVGTemplateResult:SVGTemplateResult,TemplateResult:TemplateResult,createMarker:createMarker,isTemplatePartActive:isTemplatePartActive,Template:Template};_exports.$litHtml=litHtml;const getTemplateCacheKey=(type,scopeName)=>`${type}--${scopeName}`;let compatibleShadyCSSVersion=!0;if("undefined"===typeof window.ShadyCSS){compatibleShadyCSSVersion=!1}else if("undefined"===typeof window.ShadyCSS.prepareTemplateDom){console.warn(`Incompatible ShadyCSS version detected. `+`Please update to at least @webcomponents/webcomponentsjs@2.0.2 and `+`@webcomponents/shadycss@1.3.1.`);compatibleShadyCSSVersion=!1}const shadyTemplateFactory=scopeName=>result=>{const cacheKey=getTemplateCacheKey(result.type,scopeName);let templateCache=templateCaches.get(cacheKey);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(cacheKey,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}const key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===void 0){const element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName)}template=new Template(result,element);templateCache.keyString.set(key,template)}templateCache.stringsArray.set(result.strings,template);return template};_exports.shadyTemplateFactory=shadyTemplateFactory;const TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=scopeName=>{TEMPLATE_TYPES.forEach(type=>{const templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==void 0){templates.keyString.forEach(template=>{const{element:{content}}=template,styles=new Set;Array.from(content.querySelectorAll("style")).forEach(s=>{styles.add(s)});removeNodesFromTemplate(template,styles)})}})},shadyRenderSet=new Set,prepareTemplateStyles=(scopeName,renderedDOM,template)=>{shadyRenderSet.add(scopeName);const templateElement=!!template?template.element:document.createElement("template"),styles=renderedDOM.querySelectorAll("style"),{length}=styles;if(0===length){window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);return}const condensedStyle=document.createElement("style");for(let i=0;i<length;i++){const style=styles[i];style.parentNode.removeChild(style);condensedStyle.textContent+=style.textContent}removeStylesFromLitTemplates(scopeName);const content=templateElement.content;if(!!template){insertNodeIntoTemplate(template,condensedStyle,content.firstChild)}else{content.insertBefore(condensedStyle,content.firstChild)}window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);const style=content.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==style){renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild)}else if(!!template){content.insertBefore(condensedStyle,content.firstChild);const removes=new Set([condensedStyle]);removeNodesFromTemplate(template,removes)}},render$2=(result,container,options)=>{if(!options||"object"!==typeof options||!options.scopeName){throw new Error("The `scopeName` option is required.")}const scopeName=options.scopeName,hasRendered=parts$1.has(container),needsScoping=compatibleShadyCSSVersion&&11===container.nodeType&&!!container.host,firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName),renderContainer=firstScopeRender?document.createDocumentFragment():container;render(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));if(firstScopeRender){const part=parts$1.get(renderContainer);parts$1.delete(renderContainer);const template=part.value instanceof TemplateInstance?part.value.template:void 0;prepareTemplateStyles(scopeName,renderContainer,template);removeNodes(container,container.firstChild);container.appendChild(renderContainer);parts$1.set(container,part)}if(!hasRendered&&needsScoping){window.ShadyCSS.styleElement(container.host)}};_exports.render$1=render$2;var shadyRender={shadyTemplateFactory:shadyTemplateFactory,render:render$2,html:html$1,svg:svg,TemplateResult:TemplateResult};_exports.$shadyRender=shadyRender;(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const renderNotImplemented={};class LitElement extends UpdatingElement{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){return}const userStyles=this.getStyles();if(Array.isArray(userStyles)){const addStyles=(styles,set)=>styles.reduceRight((set,s)=>Array.isArray(s)?addStyles(s,set):(set.add(s),set),set),set=addStyles(userStyles,new Set),styles=[];set.forEach(v=>styles.unshift(v));this._styles=styles}else{this._styles=userStyles===void 0?[]:[userStyles]}this._styles=this._styles.map(s=>{if(s instanceof CSSStyleSheet&&!supportsAdoptingStyleSheets){const cssText=Array.prototype.slice.call(s.cssRules).reduce((css,rule)=>css+rule.cssText,"");return unsafeCSS(cssText)}return s})}initialize(){super.initialize();this.constructor._getUniqueStyles();this.renderRoot=this.createRenderRoot();if(window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot){this.adoptStyles()}}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const styles=this.constructor._styles;if(0===styles.length){return}if(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow){window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(s=>s.cssText),this.localName)}else if(supportsAdoptingStyleSheets){this.renderRoot.adoptedStyleSheets=styles.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet)}else{this._needsShimAdoptedStyleSheets=!0}}connectedCallback(){super.connectedCallback();if(this.hasUpdated&&window.ShadyCSS!==void 0){window.ShadyCSS.styleElement(this)}}update(changedProperties){const templateResult=this.render();super.update(changedProperties);if(templateResult!==renderNotImplemented){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this})}if(this._needsShimAdoptedStyleSheets){this._needsShimAdoptedStyleSheets=!1;this.constructor._styles.forEach(s=>{const style=document.createElement("style");style.textContent=s.cssText;this.renderRoot.appendChild(style)})}}render(){return renderNotImplemented}}_exports.LitElement=LitElement;LitElement.finalized=!0;LitElement.render=render$2;LitElement.shadowRootOptions={mode:"open"};var litElement={LitElement:LitElement,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement,ReactiveElement:UpdatingElement,customElement:customElement,property:property,internalProperty:internalProperty,state:state,query:query,queryAsync:queryAsync,queryAll:queryAll,eventOptions:eventOptions,queryAssignedNodes:queryAssignedNodes,html:html$1,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};_exports.$litElement=litElement;const templateCaches$1=new WeakMap,cache=directive(value=>part=>{if(!(part instanceof NodePart)){throw new Error("cache can only be used in text bindings")}let templateCache=templateCaches$1.get(part);if(templateCache===void 0){templateCache=new WeakMap;templateCaches$1.set(part,templateCache)}const previousValue=part.value;if(previousValue instanceof TemplateInstance){if(value instanceof TemplateResult&&previousValue.template===part.options.templateFactory(value)){part.setValue(value);return}else{let cachedTemplate=templateCache.get(previousValue.template);if(cachedTemplate===void 0){cachedTemplate={instance:previousValue,nodes:document.createDocumentFragment()};templateCache.set(previousValue.template,cachedTemplate)}reparentNodes(cachedTemplate.nodes,part.startNode.nextSibling,part.endNode)}}if(value instanceof TemplateResult){const template=part.options.templateFactory(value),cachedTemplate=templateCache.get(template);if(cachedTemplate!==void 0){part.setValue(cachedTemplate.nodes);part.commit();part.value=cachedTemplate.instance}}part.setValue(value)});_exports.cache=cache;var cache$1={cache:cache};_exports.$cache=cache$1;const previousValues=new WeakMap,unsafeHTML=directive(value=>part=>{if(!(part instanceof NodePart)){throw new Error("unsafeHTML can only be used in text bindings")}const previousValue=previousValues.get(part);if(previousValue!==void 0&&isPrimitive$1(value)&&value===previousValue.value&&part.value===previousValue.fragment){return}const template=document.createElement("template");template.innerHTML=value;const fragment=document.importNode(template.content,!0);part.setValue(fragment);previousValues.set(part,{value,fragment})});_exports.unsafeHTML=unsafeHTML;var unsafeHtml={unsafeHTML:unsafeHTML};_exports.$unsafeHtml=unsafeHtml;const $_documentContainer$3=document.createElement("template");$_documentContainer$3.innerHTML=`<dom-module id="paper-share-button">
    <iron-iconset-svg name="custom" size="24">
        <svg><defs>
    <g id="share"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></g>
    <g id="email"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></g>
  </defs></svg>
    </iron-iconset-svg>
    <iron-iconset-svg name="brand" size="16">
        <svg><defs>
  <g id="facebook"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"></path></g>
  <g id="google"><path d="M5.09 7.273v1.745h2.89c-.116.75-.873 2.197-2.887 2.197-1.737 0-3.155-1.44-3.155-3.215S3.353 4.785 5.09 4.785c.99 0 1.652.422 2.03.786l1.382-1.33c-.887-.83-2.037-1.33-3.41-1.33C2.275 2.91 0 5.19 0 8s2.276 5.09 5.09 5.09c2.94 0 4.888-2.065 4.888-4.974 0-.334-.036-.59-.08-.843H5.09zm10.91 0h-1.455V5.818H13.09v1.455h-1.454v1.454h1.455v1.455h1.46V8.727H16"></path></g>
  <g id="twitter"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"></path></g>
  <g id="vk"><path d="M7.828 12.526h.957s.288-.032.436-.19c.14-.147.14-.42.14-.42s-.02-1.284.58-1.473c.59-.187 1.34 1.24 2.14 1.788.61.42 1.07.33 1.07.33l2.14-.03s1.12-.07.59-.95c-.04-.07-.3-.65-1.58-1.84-1.34-1.24-1.16-1.04.45-3.19.98-1.31 1.38-2.11 1.25-2.45-.11-.32-.84-.24-.84-.24l-2.4.02s-.18-.02-.31.06-.21.26-.21.26-.38 1.02-.89 1.88C10.27 7.9 9.84 8 9.67 7.88c-.403-.26-.3-1.053-.3-1.62 0-1.76.27-2.5-.52-2.69-.26-.06-.454-.1-1.123-.11-.86-.01-1.585.006-1.996.207-.27.135-.48.434-.36.45.16.02.52.098.71.358.25.337.24 1.09.24 1.09s.14 2.077-.33 2.335c-.33.174-.77-.187-1.73-1.837-.49-.84-.86-1.78-.86-1.78s-.07-.17-.2-.27c-.15-.11-.37-.15-.37-.15l-2.29.02s-.34.01-.46.16c-.11.13-.01.41-.01.41s1.79 4.19 3.82 6.3c1.86 1.935 3.97 1.81 3.97 1.81z"></path></g>
  <g id="blogger"><path d="M14.65 16H1.35C.6 16 0 15.4 0 14.65V1.35C0 .6.6 0 1.35 0H14.7c.7 0 1.3.6 1.3 1.35v13.3c0 .75-.6 1.35-1.35 1.35zM8 2.65H6c-1.85 0-3.35 1.5-3.35 3.35v4c0 1.85 1.5 3.35 3.35 3.35h4c1.85 0 3.35-1.5 3.35-3.35V7.35c0-.4-.3-.7-.7-.7H12c-.35 0-.65-.3-.65-.65 0-1.85-1.5-3.35-3.35-3.35zm2.05 8H6c-.35 0-.65-.3-.65-.65 0-.35.3-.65.65-.65h4.05c.35 0 .65.3.65.65 0 .35-.3.65-.65.65zm-1.7-5.3c.35 0 .65.3.65.65 0 .35-.3.65-.65.65h-2.4c-.35 0-.65-.3-.65-.65 0-.35.3-.65.65-.65h2.4z"></path></g>
  <g id="reddit"><path d="M1.473 9.368c-.04.185-.06.374-.06.566 0 2.3 2.94 4.173 6.554 4.173 3.613 0 6.553-1.872 6.553-4.173 0-.183-.02-.364-.055-.54l-.01-.022c-.013-.036-.02-.073-.02-.11-.2-.784-.745-1.497-1.533-2.072-.03-.01-.058-.026-.084-.047-.017-.013-.03-.028-.044-.043-1.198-.824-2.91-1.34-4.807-1.34-1.88 0-3.576.506-4.772 1.315-.01.012-.02.023-.033.033-.026.022-.056.04-.087.05-.805.576-1.364 1.293-1.572 2.086 0 .038-.01.077-.025.114l-.005.01zM8 13.003c-1.198 0-2.042-.26-2.58-.8-.116-.116-.116-.305 0-.422.117-.11.307-.11.424 0 .42.42 1.125.63 2.155.63 1.03 0 1.73-.2 2.15-.62.11-.11.3-.11.42 0 .11.12.11.31 0 .43-.54.54-1.38.8-2.58.8zM5.592 7.945c-.61 0-1.12.51-1.12 1.12 0 .608.51 1.102 1.12 1.102.61 0 1.103-.494 1.103-1.102 0-.61-.494-1.12-1.103-1.12zm4.83 0c-.61 0-1.12.51-1.12 1.12 0 .608.51 1.102 1.12 1.102.61 0 1.103-.494 1.103-1.102 0-.61-.494-1.12-1.103-1.12zM13.46 6.88c.693.556 1.202 1.216 1.462 1.94.3-.225.48-.578.48-.968 0-.67-.545-1.214-1.214-1.214-.267 0-.52.087-.728.243zM1.812 6.64c-.67 0-1.214.545-1.214 1.214 0 .363.16.7.43.927.268-.72.782-1.37 1.478-1.92-.202-.14-.443-.22-.694-.22zm6.155 8.067c-3.944 0-7.152-2.14-7.152-4.77 0-.183.016-.363.046-.54-.53-.33-.86-.91-.86-1.545 0-1 .82-1.812 1.82-1.812.45 0 .87.164 1.2.455 1.24-.796 2.91-1.297 4.75-1.33l1.21-3.69.27.063s.01 0 .01.002l2.82.663c.23-.533.76-.908 1.38-.908.82 0 1.49.67 1.49 1.492 0 .823-.67 1.492-1.49 1.492s-1.49-.67-1.49-1.49L9.4 2.18l-.98 2.99c1.77.07 3.37.57 4.57 1.35.33-.31.764-.48 1.225-.48 1 0 1.814.81 1.814 1.81 0 .66-.36 1.26-.92 1.58.02.17.04.33.04.5-.01 2.63-3.21 4.77-7.16 4.77zM13.43 1.893c-.494 0-.895.4-.895.894 0 .493.4.894.894.894.49 0 .89-.4.89-.89s-.4-.89-.9-.89z"></path></g>
  <g id="tumblr"><path d="M9.708 16c-3.396 0-4.687-2.504-4.687-4.274V6.498H3.41V4.432C5.83 3.557 6.418 1.368 6.55.12c.01-.086.077-.12.115-.12H9.01v4.076h3.2v2.422H8.997v4.98c.01.667.25 1.58 1.472 1.58h.06c.42-.012.99-.136 1.29-.278l.77 2.283c-.29.424-1.6.916-2.77.936H9.7z" fill-rule="nonzero"></path></g>
  </defs></svg>
    </iron-iconset-svg>

    <template>
    <style>
      :host {
        display: inline-block;
      }
      :host([monochrome]) .social-icon {
        color: var(--paper-share-button-brand-icon-monochrome-color, black) !important;
      }
      #container:hover > #cube { background-color: yellow; }
      .social-list {
      }
      paper-menu-button {
        padding: 0px;
      }
      paper-icon-button {
        height: var(--paper-share-button-icon-height, 40px);
        width: var(--paper-share-button-icon-width, 40px);
        color: var(--paper-share-button-icon-color, black);
      }
      .social-icon {
        height: var(--paper-share-button-brand-icon-height, 40px);
        width: var(--paper-share-button-brand-icon-width, 40px);
      }

      [hidden] {
        display: none !important;
      }
    </style>
    <paper-menu-button id="shareMenu" horizontal-align\$="[[horizontalAlign]]" vertical-align="bottom">
      <paper-icon-button icon="[[buttonIcon]]" slot="dropdown-trigger" alt="Share"></paper-icon-button>
      <paper-material slot="dropdown-content">
        <div class="social-list">
          <div>
            <paper-icon-button href\$="https://www.facebook.com/sharer/sharer.php?u=[[url]]" hidden\$="[[!facebook]]" style="color:#3B5998" class="social-icon" cake="1w2" icon="brand:facebook" on-tap="_share"></paper-icon-button>
          </div>
          <div>
            <paper-icon-button href\$="https://plus.google.com/share?url=[[url]]" hidden\$="[[!google]]" style="color:#DC4E41" class="social-icon" icon="brand:google" on-tap="_share"></paper-icon-button>
          </div>
          <div>
            <paper-icon-button href\$="http://twitter.com/intent/tweet?url=[[url]]&amp;text=[[sharingText]]" hidden\$="[[!twitter]]" style="color:#1DA1F2" class="social-icon" icon="brand:twitter" on-tap="_share"></paper-icon-button>
          </div>
          <div>
            <paper-icon-button href\$="http://reddit.com/submit?url=[[url]]&amp;title=[[sharingText]]" hidden\$="[[!reddit]]" style="color:#FF4500" class="social-icon" icon="brand:reddit" on-tap="_share"></paper-icon-button>
          </div>
          <div>
            <paper-icon-button href\$="http://vkontakte.ru/share.php?url=[[url]]" hidden\$="[[!vk]]" style="color:#6383A8" class="social-icon" icon="brand:vk" on-tap="_share"></paper-icon-button>
          </div>
          <div>
            <paper-icon-button href\$="http://www.blogger.com/blog-this.g?n=[[sharingText]]&amp;b=[[sharingText]]%20[[url]]" hidden\$="[[!blogger]]" style="color:#F38936" class="social-icon" icon="brand:blogger" on-tap="_share"></paper-icon-button>
          </div>
          <div>
            <paper-icon-button href\$="http://www.tumblr.com/share/link?url=[[url]]" hidden\$="[[!tumblr]]" style="color:#36465D" class="social-icon" icon="brand:tumblr" on-tap="_share"></paper-icon-button>
          </div>
          <div>
            <a href\$="mailto:?body=[[url]]&amp;subject=[[sharingText]]" target="_blank" tabindex="-1">
              <paper-icon-button hidden\$="[[!email]]" style="color:#000000" class="social-icon" icon="custom:email"></paper-icon-button>
            </a>
          </div>
        </div>
      </paper-material>
    </paper-menu-button>
  </template>

    
</dom-module>`;document.head.appendChild($_documentContainer$3.content);Polymer({is:"paper-share-button",properties:{url:{type:String},autoUrl:{type:Boolean},buttonIcon:{type:String,value:"custom:share"},sharingText:{type:String,value:""},monochrome:{type:Boolean,value:!1},popup:{type:Boolean,value:!1},email:{type:Boolean,value:!1},facebook:{type:Boolean,value:!1},google:{type:Boolean,value:!1},twitter:{type:Boolean,value:!1},reddit:{type:Boolean,value:!1},vk:{type:Boolean,value:!1},blogger:{type:Boolean,value:!1},tumblr:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"left"}},_share:function(event){var element=dom(event).localTarget;if(!this.url&&this.autoUrl){this.url=window.location.href}if(this.url){this.fire("share-tap",{brand:element.icon});if(this.popup){switch(element.icon){case"brand:facebook":this._openPopup(element.getAttribute("href"),"Sharing",600,375);break;case"brand:google":this._openPopup(element.getAttribute("href"),"Sharing",400,445);break;case"brand:twitter":this._openPopup(element.getAttribute("href"),"Sharing",500,230);break;default:window.open(element.getAttribute("href"),"Sharing");}}else{window.open(element.getAttribute("href"),"Sharing")}}else{console.error("Impossible to share, no url set")}this.$.shareMenu.close()},_openPopup:function(url,title,w,h){var y=window.top.outerHeight/2+window.top.screenY-h/2,x=window.top.outerWidth/2+window.top.screenX-w/2;window.open(url,title,"width="+w+", height="+h+", top="+y+", left="+x)}});const $_documentContainer$4=document.createElement("template");$_documentContainer$4.setAttribute("style","display: none;");$_documentContainer$4.innerHTML=`<iron-iconset-svg size="24" name="papmapinf">
<svg><defs>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild($_documentContainer$4.content);const bundledImportMeta$2=babelHelpers.objectSpread({},meta,{url:new URL("../../node_assets/plastic-resize-aware/plastic-resize-aware.js",meta.url).href});class PlasticResizeAware extends PolymerElement{static get template(){return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <slot></slot>
    `}static get properties(){return{elementSize:{type:Object,notify:!0,readOnly:!0,value:function(){return{width:0,height:0}}}}}static get importMeta(){return bundledImportMeta$2}connectedCallback(){super.connectedCallback();this._initResizeObserver(!1)}disconnectedCallback(){super.disconnectedCallback();if(window.plasticResizeObserver&&window.plasticResizeObserver.observer){window.plasticResizeObserver.observer.unobserve(this);window.plasticResizeObserver.counter--}}_initResizeObserver(isPolyfilled){if(!("ResizeObserver"in window)){let polyfillScript=document.getElementById("polyfill-ResizeObserver");if(!polyfillScript){polyfillScript=document.createElement("script");polyfillScript.id="polyfill-ResizeObserver";polyfillScript.src=this.importPath+"ResizeObserver.js";polyfillScript.async=!0;document.head.appendChild(polyfillScript)}polyfillScript.addEventListener("load",_=>this._initResizeObserver(!0))}else{if(!window.plasticResizeObserver){window.plasticResizeObserver={counter:0,observer:new ResizeObserver(entries=>{entries.forEach(entry=>{entry.target._roCallback(entry)})},{})}}window.plasticResizeObserver.observer.observe(this);window.plasticResizeObserver.counter++}}_roCallback(entry){this.dispatchEvent(new CustomEvent("element-resize",{detail:{width:entry.contentRect.width,height:entry.contentRect.height}}));this._setElementSize({width:entry.contentRect.width,height:entry.contentRect.height})}}window.customElements.define("plastic-resize-aware",PlasticResizeAware);class PlasticMapInfo extends GestureEventListeners(PolymerElement){static get template(){return html`
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
`}static get is(){return"plastic-map-info"}static get properties(){return{elevation:{type:Number,notify:!0,value:4,reflectToAttribute:!0},fadeIn:{type:Boolean,notify:!0,value:!1},isShowing:{type:Boolean,notify:!0,value:!1},_dim:{type:Object,notify:!0,value:()=>{return{card:{height:10,width:10},map:{height:100,width:100},marker:{x:0,y:42},beak:{width:20,height:20,customBeak:!1}}}},map:{type:Object,notify:!0,observer:"_mapChanged"},_mapListeners:{type:Array,notify:!0,value:()=>{return[]}},_marker:{type:Object,notify:!0},_overlay:{type:Object,notify:!0},_bk:{type:Object},_nbk:{type:Object},_isCustomBeak:{type:Boolean,notify:!0,value:!1},_watchingSize:{type:Boolean,notify:!0,value:!1}}}close(){this._releaseListeners();this.isShowing=!1;this.$.infocarddiv.style.opacity=0;this.$.infocarddiv.style.left=0;this.$.infocarddiv.style.display="none";this.$.stdbeak.style.display="none";this.$.custombeak.style.display="none";this.$.stdbeak.style.opacity=0;this.$.custombeak.style.opacity=0}_contentChanged(){if(this.isShowing){this._getInfowindowSize();let placement=this._setInfowindowPosition()}}disconnectedCallback(){super.disconnectedCallback();this._releaseListeners();this.isShowing=!1;this.$.infocarddiv.style.left=0;this.$.infocarddiv.style.opacity=this.fadeIn?0:1;this.$.infocarddiv.style.display="none";this.$.stdbeak.display="none";this.$.custombeak.display="none";this.$.stdbeak.opacity=0;this.$.custombeak.opacity=0;this._marker=void 0;this.map=void 0}_doFadeIn(){if(this.isShowing){let currentOpacity=parseFloat(this.$.infocarddiv.style.opacity);if(.9<=currentOpacity){this.$.infocarddiv.style.opacity="1"}else{currentOpacity+=.1;this.$.infocarddiv.style.opacity=currentOpacity.toString();setTimeout(()=>{this._doFadeIn()},40)}}}_getInfowindowSize(){let icd=this.$.infocarddiv;this._dim.card.width=icd.offsetWidth;this._dim.card.height=icd.offsetHeight;if(this._isCustomBeak){this._dim.beak.height=this._bk.offsetHeight;this._dim.beak.width=this._bk.offsetWidth;this._dim.customBeak=!0}else{this._dim.beak={height:20,width:20};this._dim.customBeak=!1}}_getMarkerSize(){if(this._marker&&this._marker.getIcon()){let mIcon=this._marker.getIcon();this._dim.marker.y=mIcon.anchor.y;this._dim.marker.x=0}else{this._dim.marker={x:0,y:42}}}_getMapSize(){let gm=this.map.getDiv();this._dim.map.width=gm.offsetWidth;this._dim.map.height=gm.offsetHeight}_initListeners(){this._mapListeners=[];this._overlay=new google.maps.OverlayView;this._overlay.draw=function(){};this._overlay.setMap(this.map);let reposition=()=>{if(this.isShowing){this._getInfowindowSize();this._setInfowindowPosition()}};this._mapListeners.push(google.maps.event.addListener(this.map,"projection_changed",()=>{this._overlay=new google.maps.OverlayView;this._overlay.draw=function(){};this._overlay.setMap(this.map)}));this._mapListeners.push(google.maps.event.addListener(this.map,"zoom_changed",e=>{if(this.isShowing){this._getInfowindowSize();this._setInfowindowPosition()}}));this._mapListeners.push(google.maps.event.addListener(this.map,"center_changed",e=>{if(this.isShowing){reposition()}}));this._mapListeners.push(google.maps.event.addListener(this._marker,"drag",e=>{if(this.isShowing){this._setInfowindowPosition()}}));this._mapListeners.push(google.maps.event.addListener(this.map,"idle",e=>{if(this.isShowing){this._setInfowindowPosition()}}));if(!this._watchingSize){this.$.raware.addEventListener("element-resize",()=>{this._contentChanged()})}}_mapChanged(newVal,oldVal){if(this.map){this._overlay=new google.maps.OverlayView;this._overlay.draw=function(){};this._overlay.setMap(this.map)}}_panToShowInfowindow(placement){let panby={x:0,y:0};if(0>placement.left){panby.x=placement.left-10}else{if(placement.left+this._dim.card.width>this._dim.map.width){panby.x=placement.left+this._dim.card.width-this._dim.map.width+10}}if(0>placement.top){panby.y=placement.top-10}else{if(placement.top+this._dim.card.height+this._dim.marker.y+10>this._dim.map.height){panby.y=placement.top+this._dim.card.height+this._dim.marker.y-this._dim.map.height+20}}if(0!=panby.x||0!=panby.y){this.map.panBy(panby.x,panby.y)}}_placementInBounds(placement){let result=0<=placement.top&&0<=placement.left&&placement.left+this._dim.card.width<this._dim.map.width&&placement.top+this._dim.card.height+this._dim.marker.y+10<this._dim.map.height;return result}ready(){super.ready();if(this.map){this._overlay=new google.maps.OverlayView;this._overlay.draw=function(){};this._overlay.setMap(this.map)}}_releaseListeners(){for(let l of this._mapListeners){google.maps.event.removeListener(l)}this._mapListeners=[]}_setInfowindowPosition(){if(!this._overlay){this._overlay=new google.maps.OverlayView;this._overlay.draw=function(){};this._overlay.setMap(this.map);console.log("overlay not set")}let result={left:0,top:0};try{let point=this._overlay.getProjection().fromLatLngToContainerPixel(this._marker.getPosition()),pleft=_Mathround(point.x-this._dim.card.width/2),ptop=_Mathround(point.y-this._dim.card.height-this._dim.marker.y-this._dim.beak.height+10);this.$.infocarddiv.style.left=pleft+"px";this.$.infocarddiv.style.top=ptop+"px";this._bk.style.left=point.x-this._dim.beak.width/2+"px";this._bk.style.top=_Mathfloor(ptop-10+this._dim.card.height)+"px";result={left:pleft,top:ptop}}catch(err){console.log("setInfowindowPosition error");console.log(err)};return result}showInfoWindow(marker){if(this.map&&marker){if(this.isShowing){this.close()}this._marker=marker;this._getMapSize();this._getMarkerSize();this.$.infocarddiv.style.display="block";if(0<this.$.custombeakcontent.assignedNodes({flatten:!0}).length){this._bk=this.$.custombeak;this._nbk=this.$.stdbeak;this._isCustomBeak=!0}else{this._bk=this.$.stdbeak;this._nbk=this.$.custombeak;this._isCustomBeak=!1}this._bk.style.opacity="0";this._bk.style.display="block";this._nbk.style.opacity="0";this._nbk.style.display="none";setTimeout(()=>{this._getInfowindowSize();let placement=this._setInfowindowPosition();this.$.infocarddiv.style.opacity=this.fadeIn?0:1;this._bk.style.opacity="1";this._initListeners();this.isShowing=!0;if(this.fadeIn){this._doFadeIn()}if(!this._placementInBounds(placement)){this._panToShowInfowindow(placement)}},33)}}}window.customElements.define(PlasticMapInfo.is,PlasticMapInfo);const installMediaQueryWatcher=(mediaQuery,layoutChangedCallback)=>{let mql=window.matchMedia(mediaQuery);mql.addListener(e=>layoutChangedCallback(e.matches));layoutChangedCallback(mql.matches)};_exports.installMediaQueryWatcher=installMediaQueryWatcher;var mediaQuery={installMediaQueryWatcher:installMediaQueryWatcher};_exports.$mediaQuery=mediaQuery;const updateMetadata=({title,description,url,image,imageAlt})=>{if(title){document.title=title;setMetaTag("property","og:title",title)}if(description){setMetaTag("name","description",description);setMetaTag("property","og:description",description)}if(image){setMetaTag("property","og:image",image)}if(imageAlt){setMetaTag("property","og:image:alt",imageAlt)}url=url||window.location.href;setMetaTag("property","og:url",url)};_exports.updateMetadata=updateMetadata;function setMetaTag(attrName,attrValue,content){let element=document.head.querySelector(`meta[${attrName}="${attrValue}"]`);if(!element){element=document.createElement("meta");element.setAttribute(attrName,attrValue);document.head.appendChild(element)}element.setAttribute("content",content||"")}var metadata={updateMetadata:updateMetadata,setMetaTag:setMetaTag};_exports.$metadata=metadata;const installOfflineWatcher=offlineUpdatedCallback=>{window.addEventListener("online",()=>offlineUpdatedCallback(!1));window.addEventListener("offline",()=>offlineUpdatedCallback(!0));offlineUpdatedCallback(!1===navigator.onLine)};_exports.installOfflineWatcher=installOfflineWatcher;var network={installOfflineWatcher:installOfflineWatcher};_exports.$network=network;const installRouter=locationUpdatedCallback=>{document.body.addEventListener("click",e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const anchor=e.composedPath().filter(n=>"A"===n.tagName)[0];if(!anchor||anchor.target||anchor.hasAttribute("download")||"external"===anchor.getAttribute("rel"))return;const href=anchor.href;if(!href||-1!==href.indexOf("mailto:"))return;const location=window.location,origin=location.origin||location.protocol+"//"+location.host;if(0!==href.indexOf(origin))return;e.preventDefault();if(href!==location.href){window.history.pushState({},"",href);locationUpdatedCallback(location,e)}});window.addEventListener("popstate",e=>locationUpdatedCallback(window.location,e));locationUpdatedCallback(window.location,null)};_exports.installRouter=installRouter;var router={installRouter:installRouter};_exports.$router=router;var support={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{new Blob;return!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};function isDataView(obj){return obj&&DataView.prototype.isPrototypeOf(obj)}if(support.arrayBuffer){var viewClasses=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],isArrayBufferView=ArrayBuffer.isView||function(obj){return obj&&-1<viewClasses.indexOf(Object.prototype.toString.call(obj))}}function normalizeName(name){if("string"!==typeof name){name=name+""}if(/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)){throw new TypeError("Invalid character in header field name")}return name.toLowerCase()}function normalizeValue(value){if("string"!==typeof value){value=value+""}return value}function iteratorFor(items){var iterator={next:function(){var value=items.shift();return{done:value===void 0,value:value}}};if(support.iterable){iterator[Symbol.iterator]=function(){return iterator}}return iterator}function Headers(headers){this.map={};if(headers instanceof Headers){headers.forEach(function(value,name){this.append(name,value)},this)}else if(Array.isArray(headers)){headers.forEach(function(header){this.append(header[0],header[1])},this)}else if(headers){Object.getOwnPropertyNames(headers).forEach(function(name){this.append(name,headers[name])},this)}}Headers.prototype.append=function(name,value){name=normalizeName(name);value=normalizeValue(value);var oldValue=this.map[name];this.map[name]=oldValue?oldValue+", "+value:value};Headers.prototype["delete"]=function(name){delete this.map[normalizeName(name)]};Headers.prototype.get=function(name){name=normalizeName(name);return this.has(name)?this.map[name]:null};Headers.prototype.has=function(name){return this.map.hasOwnProperty(normalizeName(name))};Headers.prototype.set=function(name,value){this.map[normalizeName(name)]=normalizeValue(value)};Headers.prototype.forEach=function(callback,thisArg){for(var name in this.map){if(this.map.hasOwnProperty(name)){callback.call(thisArg,this.map[name],name,this)}}};Headers.prototype.keys=function(){var items=[];this.forEach(function(value,name){items.push(name)});return iteratorFor(items)};Headers.prototype.values=function(){var items=[];this.forEach(function(value){items.push(value)});return iteratorFor(items)};Headers.prototype.entries=function(){var items=[];this.forEach(function(value,name){items.push([name,value])});return iteratorFor(items)};if(support.iterable){Headers.prototype[Symbol.iterator]=Headers.prototype.entries}function consumed(body){if(body.bodyUsed){return Promise.reject(new TypeError("Already read"))}body.bodyUsed=!0}function fileReaderReady(reader){return new Promise(function(resolve,reject){reader.onload=function(){resolve(reader.result)};reader.onerror=function(){reject(reader.error)}})}function readBlobAsArrayBuffer(blob){var reader=new FileReader,promise=fileReaderReady(reader);reader.readAsArrayBuffer(blob);return promise}function readBlobAsText(blob){var reader=new FileReader,promise=fileReaderReady(reader);reader.readAsText(blob);return promise}function readArrayBufferAsText(buf){for(var view=new Uint8Array(buf),chars=Array(view.length),i=0;i<view.length;i++){chars[i]=_StringfromCharCode(view[i])}return chars.join("")}function bufferClone(buf){if(buf.slice){return buf.slice(0)}else{var view=new Uint8Array(buf.byteLength);view.set(new Uint8Array(buf));return view.buffer}}function Body(){this.bodyUsed=!1;this._initBody=function(body){this._bodyInit=body;if(!body){this._bodyText=""}else if("string"===typeof body){this._bodyText=body}else if(support.blob&&Blob.prototype.isPrototypeOf(body)){this._bodyBlob=body}else if(support.formData&&FormData.prototype.isPrototypeOf(body)){this._bodyFormData=body}else if(support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)){this._bodyText=body.toString()}else if(support.arrayBuffer&&support.blob&&isDataView(body)){this._bodyArrayBuffer=bufferClone(body.buffer);this._bodyInit=new Blob([this._bodyArrayBuffer])}else if(support.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(body)||isArrayBufferView(body))){this._bodyArrayBuffer=bufferClone(body)}else{this._bodyText=body=Object.prototype.toString.call(body)}if(!this.headers.get("content-type")){if("string"===typeof body){this.headers.set("content-type","text/plain;charset=UTF-8")}else if(this._bodyBlob&&this._bodyBlob.type){this.headers.set("content-type",this._bodyBlob.type)}else if(support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)){this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8")}}};if(support.blob){this.blob=function(){var rejected=consumed(this);if(rejected){return rejected}if(this._bodyBlob){return Promise.resolve(this._bodyBlob)}else if(this._bodyArrayBuffer){return Promise.resolve(new Blob([this._bodyArrayBuffer]))}else if(this._bodyFormData){throw new Error("could not read FormData body as blob")}else{return Promise.resolve(new Blob([this._bodyText]))}};this.arrayBuffer=function(){if(this._bodyArrayBuffer){return consumed(this)||Promise.resolve(this._bodyArrayBuffer)}else{return this.blob().then(readBlobAsArrayBuffer)}}}this.text=function(){var rejected=consumed(this);if(rejected){return rejected}if(this._bodyBlob){return readBlobAsText(this._bodyBlob)}else if(this._bodyArrayBuffer){return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))}else if(this._bodyFormData){throw new Error("could not read FormData body as text")}else{return Promise.resolve(this._bodyText)}};if(support.formData){this.formData=function(){return this.text().then(decode)}}this.json=function(){return this.text().then(JSON.parse)};return this}var methods=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function normalizeMethod(method){var upcased=method.toUpperCase();return-1<methods.indexOf(upcased)?upcased:method}function Request(input,options){options=options||{};var body=options.body;if(input instanceof Request){if(input.bodyUsed){throw new TypeError("Already read")}this.url=input.url;this.credentials=input.credentials;if(!options.headers){this.headers=new Headers(input.headers)}this.method=input.method;this.mode=input.mode;this.signal=input.signal;if(!body&&null!=input._bodyInit){body=input._bodyInit;input.bodyUsed=!0}}else{this.url=input+""}this.credentials=options.credentials||this.credentials||"same-origin";if(options.headers||!this.headers){this.headers=new Headers(options.headers)}this.method=normalizeMethod(options.method||this.method||"GET");this.mode=options.mode||this.mode||null;this.signal=options.signal||this.signal;this.referrer=null;if(("GET"===this.method||"HEAD"===this.method)&&body){throw new TypeError("Body not allowed for GET or HEAD requests")}this._initBody(body)}Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit})};function decode(body){var form=new FormData;body.trim().split("&").forEach(function(bytes){if(bytes){var split=bytes.split("="),name=split.shift().replace(/\+/g," "),value=split.join("=").replace(/\+/g," ");form.append(decodeURIComponent(name),decodeURIComponent(value))}});return form}function parseHeaders(rawHeaders){var headers=new Headers,preProcessedHeaders=rawHeaders.replace(/\r?\n[\t ]+/g," ");preProcessedHeaders.split(/\r?\n/).forEach(function(line){var parts=line.split(":"),key=parts.shift().trim();if(key){var value=parts.join(":").trim();headers.append(key,value)}});return headers}Body.call(Request.prototype);function Response(bodyInit,options){if(!options){options={}}this.type="default";this.status=options.status===void 0?200:options.status;this.ok=200<=this.status&&300>this.status;this.statusText="statusText"in options?options.statusText:"OK";this.headers=new Headers(options.headers);this.url=options.url||"";this._initBody(bodyInit)}Body.call(Response.prototype);Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url})};Response.error=function(){var response=new Response(null,{status:0,statusText:""});response.type="error";return response};var redirectStatuses=[301,302,303,307,308];Response.redirect=function(url,status){if(-1===redirectStatuses.indexOf(status)){throw new RangeError("Invalid status code")}return new Response(null,{status:status,headers:{location:url}})};var DOMException=self.DOMException;_exports.DOMException=DOMException;try{new DOMException}catch(err){_exports.DOMException=DOMException=function(message,name){this.message=message;this.name=name;var error=Error(message);this.stack=error.stack};DOMException.prototype=Object.create(Error.prototype);DOMException.prototype.constructor=DOMException}function fetch$1(input,init){return new Promise(function(resolve,reject){var request=new Request(input,init);if(request.signal&&request.signal.aborted){return reject(new DOMException("Aborted","AbortError"))}var xhr=new XMLHttpRequest;function abortXhr(){xhr.abort()}xhr.onload=function(){var options={status:xhr.status,statusText:xhr.statusText,headers:parseHeaders(xhr.getAllResponseHeaders()||"")};options.url="responseURL"in xhr?xhr.responseURL:options.headers.get("X-Request-URL");var body="response"in xhr?xhr.response:xhr.responseText;resolve(new Response(body,options))};xhr.onerror=function(){reject(new TypeError("Network request failed"))};xhr.ontimeout=function(){reject(new TypeError("Network request failed"))};xhr.onabort=function(){reject(new DOMException("Aborted","AbortError"))};xhr.open(request.method,request.url,!0);if("include"===request.credentials){xhr.withCredentials=!0}else if("omit"===request.credentials){xhr.withCredentials=!1}if("responseType"in xhr&&support.blob){xhr.responseType="blob"}request.headers.forEach(function(value,name){xhr.setRequestHeader(name,value)});if(request.signal){request.signal.addEventListener("abort",abortXhr);xhr.onreadystatechange=function(){if(4===xhr.readyState){request.signal.removeEventListener("abort",abortXhr)}}}xhr.send("undefined"===typeof request._bodyInit?null:request._bodyInit)})}fetch$1.polyfill=!0;if(!self.fetch){self.fetch=fetch$1;self.Headers=Headers;self.Request=Request;self.Response=Response}var fetch$2={Headers:Headers,Request:Request,Response:Response,get DOMException(){return DOMException},fetch:fetch$1};_exports.$fetch=fetch$2;function pidCrypt(){function a(b){if(!b){b=8}for(var c=Array(b),e=[],d=0;256>d;d++){e[d]=d}for(d=0;d<c.length;d++){c[d]=e[_Mathfloor(Math.random()*e.length)]}return c}this.setDefaults=function(){this.params.nBits=256;this.params.salt=a(8);this.params.salt=pidCryptUtil.byteArray2String(this.params.salt);this.params.salt=pidCryptUtil.convertToHex(this.params.salt);this.params.blockSize=16;this.params.UTF8=!0;this.params.A0_PAD=!0};this.debug=!0;this.params={};this.params.dataIn="";this.params.dataOut="";this.params.decryptIn="";this.params.decryptOut="";this.params.encryptIn="";this.params.encryptOut="";this.params.key="";this.params.iv="";this.params.clear=!0;this.setDefaults();this.errors="";this.warnings="";this.infos="";this.debugMsg="";this.setParams=function(c){if(!c){c={}}for(var b in c){this.params[b]=c[b]}};this.getParams=function(){return this.params};this.getParam=function(b){return this.params[b]||""};this.clearParams=function(){this.params={}};this.getNBits=function(){return this.params.nBits};this.getOutput=function(){return this.params.dataOut};this.setError=function(b){this.error=b};this.appendError=function(b){this.errors+=b;return""};this.getErrors=function(){return this.errors};this.isError=function(){if(0<this.errors.length){return!0}return!1};this.appendInfo=function(b){this.infos+=b;return""};this.getInfos=function(){return this.infos};this.setDebug=function(b){this.debug=b};this.appendDebug=function(b){this.debugMsg+=b;return""};this.isDebug=function(){return this.debug};this.getAllMessages=function(c){var g={lf:"\n",clr_mes:!1,verbose:15};if(!c){c=g}for(var h in g){if("undefined"==typeof c[h]){c[h]=g[h]}}var b="",e="";for(var f in this.params){switch(f){case"encryptOut":e=pidCryptUtil.toByteArray(this.params[f].toString());e=pidCryptUtil.fragment(e.join(),64,c.lf);break;case"key":case"iv":e=pidCryptUtil.formatHex(this.params[f],48);break;default:e=pidCryptUtil.fragment(this.params[f].toString(),64,c.lf);}b+="<p><b>"+f+"</b>:<pre>"+e+"</pre></p>"}if(this.debug){b+="debug: "+this.debug+c.lf}if(0<this.errors.length&&1==(1&c.verbose)){b+="Errors:"+c.lf+this.errors+c.lf}if(0<this.warnings.length&&2==(2&c.verbose)){b+="Warnings:"+c.lf+this.warnings+c.lf}if(0<this.infos.length&&4==(4&c.verbose)){b+="Infos:"+c.lf+this.infos+c.lf}if(this.debug&&8==(8&c.verbose)){b+="Debug messages:"+c.lf+this.debugMsg+c.lf}if(c.clr_mes){this.errors=this.infos=this.warnings=this.debug=""}return b};this.getRandomBytes=function(b){return a(b)}};var pidCryptUtil={};pidCryptUtil.encodeBase64=function(n,p){if(!n){n=""}var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";p="undefined"==typeof p?!1:p;var f,b,a,r,o,k,j,h,i=[],d="",m,q,l;q=p?pidCryptUtil.encodeUTF8(n):n;m=q.length%3;if(0<m){while(3>m++){d+="=";q+="\0"}}for(m=0;m<q.length;m+=3){f=q.charCodeAt(m);b=q.charCodeAt(m+1);a=q.charCodeAt(m+2);r=f<<16|b<<8|a;o=63&r>>18;k=63&r>>12;j=63&r>>6;h=63&r;i[m/3]=g.charAt(o)+g.charAt(k)+g.charAt(j)+g.charAt(h)}l=i.join("");l=l.slice(0,l.length-d.length)+d;return l};pidCryptUtil.decodeBase64=function(n,e){if(!n){n=""}var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e="undefined"==typeof e?!1:e;var f,b,a,o,k,i,h,q,j=[],p,m;m=e?pidCryptUtil.decodeUTF8(n):n;for(var l=0;l<m.length;l+=4){o=g.indexOf(m.charAt(l));k=g.indexOf(m.charAt(l+1));i=g.indexOf(m.charAt(l+2));h=g.indexOf(m.charAt(l+3));q=o<<18|k<<12|i<<6|h;f=255&q>>>16;b=255&q>>>8;a=255&q;j[l/4]=_StringfromCharCode(f,b,a);if(64==h){j[l/4]=_StringfromCharCode(f,b)}if(64==i){j[l/4]=_StringfromCharCode(f)}}p=j.join("");p=e?pidCryptUtil.decodeUTF8(p):p;return p};pidCryptUtil.encodeUTF8=function(a){if(!a){a=""}a=a.replace(/[\u0080-\u07ff]/g,function(d){var b=d.charCodeAt(0);return _StringfromCharCode(192|b>>6,128|63&b)});a=a.replace(/[\u0800-\uffff]/g,function(d){var b=d.charCodeAt(0);return _StringfromCharCode(224|b>>12,128|63&b>>6,128|63&b)});return a};pidCryptUtil.decodeUTF8=function(a){if(!a){a=""}a=a.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(d){var b=(31&d.charCodeAt(0))<<6|63&d.charCodeAt(1);return _StringfromCharCode(b)});a=a.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(d){var b=(15&d.charCodeAt(0))<<12|(63&d.charCodeAt(1))<<6|63&d.charCodeAt(2);return _StringfromCharCode(b)});return a};pidCryptUtil.convertToHex=function(d){if(!d){d=""}for(var c="",a="",b=0;b<d.length;b++){a=d.charCodeAt(b).toString(16);c+=1==a.length?"0"+a:a}return c};pidCryptUtil.convertFromHex=function(c){if(!c){c=""}for(var b="",a=0;a<c.length;a+=2){b+=_StringfromCharCode(parseInt(c.substring(a,a+2),16))}return b};pidCryptUtil.stripLineFeeds=function(b){if(!b){b=""}var a="";a=b.replace(/\n/g,"");a=a.replace(/\r/g,"");return a};pidCryptUtil.toByteArray=function(b){if(!b){b=""}for(var c=[],a=0;a<b.length;a++){c[a]=b.charCodeAt(a)}return c};pidCryptUtil.fragment=function(e,d,a){if(!e){e=""}if(!d||d>=e.length){return e}if(!a){a="\n"}for(var c="",b=0;b<e.length;b+=d){c+=e.substr(b,d)+a}return c};pidCryptUtil.formatHex=function(f,e){if(!f){f=""}if(!e){e=45}for(var a="",b=0,d=f.toLowerCase(),c=0;c<d.length;c+=2){a+=d.substr(c,2)+":"}d=this.fragment(a,e);return d};pidCryptUtil.byteArray2String=function(a){for(var d="",c=0;c<a.length;c++){d+=_StringfromCharCode(a[c])}return d};function Stream(a,b){if(a instanceof Stream){this.enc=a.enc;this.pos=a.pos}else{this.enc=a;this.pos=b}}Stream.prototype.parseStringHex=function(e,a){if("undefined"==typeof a){a=this.enc.length}for(var d="",b=e,c;b<a;++b){c=this.get(b);d+=this.hexDigits.charAt(c>>4)+this.hexDigits.charAt(15&c)}return d};Stream.prototype.get=function(a){if(a==void 0){a=this.pos++}if(a>=this.enc.length){throw"Requesting byte offset "+a+" on a stream of length "+this.enc.length}return this.enc[a]};Stream.prototype.hexDigits="0123456789ABCDEF";Stream.prototype.hexDump=function(e,a){for(var d="",b=e,c;b<a;++b){c=this.get(b);d+=this.hexDigits.charAt(c>>4)+this.hexDigits.charAt(15&c);if(7==(15&b)){d+=" "}d+=15==(15&b)?"\n":" "}return d};Stream.prototype.parseStringISO=function(d,a){for(var c="",b=d;b<a;++b){c+=_StringfromCharCode(this.get(b))}return c};Stream.prototype.parseStringUTF=function(f,a){for(var d="",e=0,b=f,e;b<a;){e=this.get(b++);if(128>e){d+=_StringfromCharCode(e)}else{if(191<e&&224>e){d+=_StringfromCharCode((31&e)<<6|63&this.get(b++))}else{d+=_StringfromCharCode((15&e)<<12|(63&this.get(b++))<<6|63&this.get(b++))}}}return d};Stream.prototype.reTime=/^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;Stream.prototype.parseTime=function(d,b){var c=this.parseStringISO(d,b),a=this.reTime.exec(c);if(!a){return"Unrecognized time: "+c}c=a[1]+"-"+a[2]+"-"+a[3]+" "+a[4];if(a[5]){c+=":"+a[5];if(a[6]){c+=":"+a[6];if(a[7]){c+="."+a[7]}}}if(a[8]){c+=" UTC";if("Z"!=a[8]){c+=a[8];if(a[9]){c+=":"+a[9]}}}return c};Stream.prototype.parseInteger=function(d,a){if(4<a-d){return}for(var c=0,b=d;b<a;++b){c=c<<8|this.get(b)}return c};Stream.prototype.parseOID=function(g,a){for(var d,f=0,e=0,c=g,b;c<a;++c){b=this.get(c);f=f<<7|127&b;e+=7;if(!(128&b)){if(d==void 0){d=parseInt(f/40)+"."+f%40}else{d+="."+(31<=e?"big":f)}f=e=0}d+=""}return d};if("undefined"!=typeof pidCrypt){pidCrypt.ASN1=function(d,e,c,a,b){this.stream=d;this.header=e;this.length=c;this.tag=a;this.sub=b};pidCrypt.ASN1.prototype.toHexTree=function(){var c={type:this.typeName()};if("SEQUENCE"!=c.type){c.value=this.stream.parseStringHex(this.posContent(),this.posEnd())}if(null!=this.sub){c.sub=[];for(var b=0,a=this.sub.length;b<a;++b){c.sub[b]=this.sub[b].toHexTree()}}return c};pidCrypt.ASN1.prototype.typeName=function(){if(this.tag==void 0){return"unknown"}var c=this.tag>>6,a=1&this.tag>>5,b=31&this.tag;switch(c){case 0:switch(b){case 0:return"EOC";case 1:return"BOOLEAN";case 2:return"INTEGER";case 3:return"BIT_STRING";case 4:return"OCTET_STRING";case 5:return"NULL";case 6:return"OBJECT_IDENTIFIER";case 7:return"ObjectDescriptor";case 8:return"EXTERNAL";case 9:return"REAL";case 10:return"ENUMERATED";case 11:return"EMBEDDED_PDV";case 12:return"UTF8String";case 16:return"SEQUENCE";case 17:return"SET";case 18:return"NumericString";case 19:return"PrintableString";case 20:return"TeletexString";case 21:return"VideotexString";case 22:return"IA5String";case 23:return"UTCTime";case 24:return"GeneralizedTime";case 25:return"GraphicString";case 26:return"VisibleString";case 27:return"GeneralString";case 28:return"UniversalString";case 30:return"BMPString";default:return"Universal_"+b.toString(16);}case 1:return"Application_"+b.toString(16);case 2:return"["+b+"]";case 3:return"Private_"+b.toString(16);}};pidCrypt.ASN1.prototype.content=function(){if(this.tag==void 0){return null}var d=this.tag>>6;if(0!=d){return null}var b=31&this.tag,c=this.posContent(),a=_Mathabs(this.length);switch(b){case 1:return 0==this.stream.get(c)?"false":"true";case 2:return this.stream.parseInteger(c,c+a);case 6:return this.stream.parseOID(c,c+a);case 12:return this.stream.parseStringUTF(c,c+a);case 18:case 19:case 20:case 21:case 22:case 26:return this.stream.parseStringISO(c,c+a);case 23:case 24:return this.stream.parseTime(c,c+a);}return null};pidCrypt.ASN1.prototype.toString=function(){return this.typeName()+"@"+this.stream.pos+"[header:"+this.header+",length:"+this.length+",sub:"+(null==this.sub?"null":this.sub.length)+"]"};pidCrypt.ASN1.prototype.print=function(b){if(b==void 0){b=""}document.writeln(b+this);if(null!=this.sub){b+="  ";for(var c=0,a=this.sub.length;c<a;++c){this.sub[c].print(b)}}};pidCrypt.ASN1.prototype.toPrettyString=function(b){if(b==void 0){b=""}var d=b+this.typeName()+" @"+this.stream.pos;if(0<=this.length){d+="+"}d+=this.length;if(32&this.tag){d+=" (constructed)"}else{if((3==this.tag||4==this.tag)&&null!=this.sub){d+=" (encapsulates)"}}d+="\n";if(null!=this.sub){b+="  ";for(var c=0,a=this.sub.length;c<a;++c){d+=this.sub[c].toPrettyString(b)}}return d};pidCrypt.ASN1.prototype.toDOM=function(){var b=document.createElement("div");b.className="node";b.asn1=this;var g=document.createElement("div");g.className="head";var j=this.typeName();g.innerHTML=j;b.appendChild(g);this.head=g;var h=document.createElement("div");h.className="value";j="Offset: "+this.stream.pos+"<br/>";j+="Length: "+this.header+"+";if(0<=this.length){j+=this.length}else{j+=-this.length+" (undefined)"}if(32&this.tag){j+="<br/>(constructed)"}else{if((3==this.tag||4==this.tag)&&null!=this.sub){j+="<br/>(encapsulates)"}}var e=this.content();if(null!=e){j+="<br/>Value:<br/><b>"+e+"</b>";if("object"==typeof oids&&6==this.tag){var c=oids[e];if(c){if(c.d){j+="<br/>"+c.d}if(c.c){j+="<br/>"+c.c}if(c.w){j+="<br/>(warning!)"}}}}h.innerHTML=j;b.appendChild(h);var a=document.createElement("div");a.className="sub";if(null!=this.sub){for(var d=0,f=this.sub.length;d<f;++d){a.appendChild(this.sub[d].toDOM())}}b.appendChild(a);g.switchNode=b;g.onclick=function(){var i=this.switchNode;i.className="node collapsed"==i.className?"node":"node collapsed"};return b};pidCrypt.ASN1.prototype.posStart=function(){return this.stream.pos};pidCrypt.ASN1.prototype.posContent=function(){return this.stream.pos+this.header};pidCrypt.ASN1.prototype.posEnd=function(){return this.stream.pos+this.header+_Mathabs(this.length)};pidCrypt.ASN1.prototype.toHexDOM_sub=function(d,c,e,f,a){if(f>=a){return}var b=document.createElement("span");b.className=c;b.appendChild(document.createTextNode(e.hexDump(f,a)));d.appendChild(b)};pidCrypt.ASN1.prototype.toHexDOM=function(){var d=document.createElement("span");d.className="hex";this.head.hexNode=d;this.head.onmouseover=function(){this.hexNode.className="hexCurrent"};this.head.onmouseout=function(){this.hexNode.className="hex"};this.toHexDOM_sub(d,"tag",this.stream,this.posStart(),this.posStart()+1);this.toHexDOM_sub(d,0<=this.length?"dlen":"ulen",this.stream,this.posStart()+1,this.posContent());if(null==this.sub){d.appendChild(document.createTextNode(this.stream.hexDump(this.posContent(),this.posEnd())))}else{if(0<this.sub.length){var e=this.sub[0],c=this.sub[this.sub.length-1];this.toHexDOM_sub(d,"intro",this.stream,this.posContent(),e.posStart());for(var b=0,a=this.sub.length;b<a;++b){d.appendChild(this.sub[b].toHexDOM())}this.toHexDOM_sub(d,"outro",this.stream,c.posEnd(),this.posEnd())}}return d};pidCrypt.ASN1.decodeLength=function(d){var b=d.get(),a=127&b;if(a==b){return a}if(3<a){throw"Length over 24 bits not supported at position "+(d.pos-1)}if(0==a){return-1}b=0;for(var c=0;c<a;++c){b=b<<8|d.get()}return b};pidCrypt.ASN1.hasContent=function(b,a,g){if(32&b){return!0}if(3>b||4<b){return!1}var f=new Stream(g);if(3==b){f.get()}var e=f.get();if(1&e>>6){return!1}try{var d=pidCrypt.ASN1.decodeLength(f);return f.pos-g.pos+d==a}catch(c){return!1}};pidCrypt.ASN1.decode=function(i){if(!(i instanceof Stream)){i=new Stream(i,0)}var h=new Stream(i),k=i.get(),f=pidCrypt.ASN1.decodeLength(i),d=i.pos-h.pos,a=null;if(pidCrypt.ASN1.hasContent(k,f,i)){var b=i.pos;if(3==k){i.get()}a=[];if(0<=f){var c=b+f;while(i.pos<c){a[a.length]=pidCrypt.ASN1.decode(i)}if(i.pos!=c){throw"Content size is not correct for container starting at offset "+b}}else{try{for(;;){var j=pidCrypt.ASN1.decode(i);if(0==j.tag){break}a[a.length]=j}f=b-i.pos}catch(g){throw"Exception while decoding undefined length content: "+g}}}else{i.pos+=f}return new pidCrypt.ASN1(h,d,f,k,a)};pidCrypt.ASN1.test=function(){for(var f=[{value:[39],expected:39},{value:[129,201],expected:201},{value:[131,254,220,186],expected:16702650}],c=0,a=f.length;c<a;++c){var e=0,d=new Stream(f[c].value,0),b=pidCrypt.ASN1.decodeLength(d);if(b!=f[c].expected){document.write("In test["+c+"] expected "+f[c].expected+" got "+b+"\n")}}}};var dbits,canary=244837814094590,j_lm=15715070==(16777215&canary);function BigInteger(e,d,f){if(null!=e){if("number"==typeof e){this.fromNumber(e,d,f)}else{if(null==d&&"string"!=typeof e){this.fromString(e,256)}else{this.fromString(e,d)}}}}function nbi(){return new BigInteger(null)}function am1(f,a,b,e,h,g){while(0<=--g){var d=a*this[f++]+b[e]+h;h=_Mathfloor(d/67108864);b[e++]=67108863&d}return h}function am2(f,q,r,e,o,a){var k=32767&q,p=q>>15;while(0<=--a){var d=32767&this[f],g=this[f++]>>15,b=p*d+g*k;d=k*d+((32767&b)<<15)+r[e]+(1073741823&o);o=(d>>>30)+(b>>>15)+p*g+(o>>>30);r[e++]=1073741823&d}return o}function am3(f,q,r,e,o,a){var k=16383&q,p=q>>14;while(0<=--a){var d=16383&this[f],g=this[f++]>>14,b=p*d+g*k;d=k*d+((16383&b)<<14)+r[e]+o;o=(d>>28)+(b>>14)+p*g;r[e++]=268435455&d}return o}if(j_lm&&"Microsoft Internet Explorer"==navigator.appName){BigInteger.prototype.am=am2;dbits=30}else{if(j_lm&&"Netscape"!=navigator.appName){BigInteger.prototype.am=am1;dbits=26}else{BigInteger.prototype.am=am3;dbits=28}}BigInteger.prototype.DB=dbits;BigInteger.prototype.DM=(1<<dbits)-1;BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=4503599627370496;BigInteger.prototype.F1=BI_FP-dbits;BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=[],rr,vv;rr="0".charCodeAt(0);for(vv=0;9>=vv;++vv){BI_RC[rr++]=vv}rr="a".charCodeAt(0);for(vv=10;36>vv;++vv){BI_RC[rr++]=vv}rr="A".charCodeAt(0);for(vv=10;36>vv;++vv){BI_RC[rr++]=vv}function int2char(a){return BI_RM.charAt(a)}function intAt(b,a){var d=BI_RC[b.charCodeAt(a)];return null==d?-1:d}function bnpCopyTo(b){for(var a=this.t-1;0<=a;--a){b[a]=this[a]}b.t=this.t;b.s=this.s}function bnpFromInt(a){this.t=1;this.s=0>a?-1:0;if(0<a){this[0]=a}else{if(-1>a){this[0]=a+DV}else{this.t=0}}}function nbv(a){var b=nbi();b.fromInt(a);return b}function bnpFromString(h,c){var e;if(16==c){e=4}else{if(8==c){e=3}else{if(256==c){e=8}else{if(2==c){e=1}else{if(32==c){e=5}else{if(4==c){e=2}else{this.fromRadix(h,c);return}}}}}}this.t=0;this.s=0;var g=h.length,d=!1,f=0;while(0<=--g){var a=8==e?255&h[g]:intAt(h,g);if(0>a){if("-"==h.charAt(g)){d=!0}continue}d=!1;if(0==f){this[this.t++]=a}else{if(f+e>this.DB){this[this.t-1]|=(a&(1<<this.DB-f)-1)<<f;this[this.t++]=a>>this.DB-f}else{this[this.t-1]|=a<<f}}f+=e;if(f>=this.DB){f-=this.DB}}if(8==e&&0!=(128&h[0])){this.s=-1;if(0<f){this[this.t-1]|=(1<<this.DB-f)-1<<f}}this.clamp();if(d){BigInteger.ZERO.subTo(this,this)}}function bnpClamp(){var a=this.s&this.DM;while(0<this.t&&this[this.t-1]==a){--this.t}}function bnToString(c){if(0>this.s){return"-"+this.negate().toString(c)}var e;if(16==c){e=4}else{if(8==c){e=3}else{if(2==c){e=1}else{if(32==c){e=5}else{if(4==c){e=2}else{return this.toRadix(c)}}}}}var g=(1<<e)-1,l,a=!1,h="",f=this.t,j=this.DB-f*this.DB%e;if(0<f--){if(j<this.DB&&0<(l=this[f]>>j)){a=!0;h=int2char(l)}while(0<=f){if(j<e){l=(this[f]&(1<<j)-1)<<e-j;l|=this[--f]>>(j+=this.DB-e)}else{l=this[f]>>(j-=e)&g;if(0>=j){j+=this.DB;--f}}if(0<l){a=!0}if(a){h+=int2char(l)}}}return a?h:"0"}function bnNegate(){var a=nbi();BigInteger.ZERO.subTo(this,a);return a}function bnAbs(){return 0>this.s?this.negate():this}function bnCompareTo(b){var d=this.s-b.s;if(0!=d){return d}var c=this.t;d=c-b.t;if(0!=d){return d}while(0<=--c){if(0!=(d=this[c]-b[c])){return d}}return 0}function nbits(a){var c=1,b;if(0!=(b=a>>>16)){a=b;c+=16}if(0!=(b=a>>8)){a=b;c+=8}if(0!=(b=a>>4)){a=b;c+=4}if(0!=(b=a>>2)){a=b;c+=2}if(0!=(b=a>>1)){a=b;c+=1}return c}function bnBitLength(){if(0>=this.t){return 0}return this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(c,b){var a;for(a=this.t-1;0<=a;--a){b[a+c]=this[a]}for(a=c-1;0<=a;--a){b[a]=0}b.t=this.t+c;b.s=this.s}function bnpDRShiftTo(c,b){for(var a=c;a<this.t;++a){b[a-c]=this[a]}b.t=_Mathmax(this.t-c,0);b.s=this.s}function bnpLShiftTo(j,e){var b=j%this.DB,a=this.DB-b,g=(1<<a)-1,f=_Mathfloor(j/this.DB),h=this.s<<b&this.DM,d;for(d=this.t-1;0<=d;--d){e[d+f+1]=this[d]>>a|h;h=(this[d]&g)<<b}for(d=f-1;0<=d;--d){e[d]=0}e[f]=h;e.t=this.t+f+1;e.s=this.s;e.clamp()}function bnpRShiftTo(g,d){d.s=this.s;var e=_Mathfloor(g/this.DB);if(e>=this.t){d.t=0;return}var b=g%this.DB,a=this.DB-b,f=(1<<b)-1;d[0]=this[e]>>b;for(var c=e+1;c<this.t;++c){d[c-e-1]|=(this[c]&f)<<a;d[c-e]=this[c]>>b}if(0<b){d[this.t-e-1]|=(this.s&f)<<a}d.t=this.t-e;d.clamp()}function bnpSubTo(d,f){var e=0,g=0,b=_Mathmin(d.t,this.t);while(e<b){g+=this[e]-d[e];f[e++]=g&this.DM;g>>=this.DB}if(d.t<this.t){g-=d.s;while(e<this.t){g+=this[e];f[e++]=g&this.DM;g>>=this.DB}g+=this.s}else{g+=this.s;while(e<d.t){g-=d[e];f[e++]=g&this.DM;g>>=this.DB}g-=d.s}f.s=0>g?-1:0;if(-1>g){f[e++]=this.DV+g}else{if(0<g){f[e++]=g}}f.t=e;f.clamp()}function bnpMultiplyTo(c,e){var b=this.abs(),f=c.abs(),d=b.t;e.t=d+f.t;while(0<=--d){e[d]=0}for(d=0;d<f.t;++d){e[d+b.t]=b.am(0,f[d],e,d,0,b.t)}e.s=0;e.clamp();if(this.s!=c.s){BigInteger.ZERO.subTo(e,e)}}function bnpSquareTo(d){var a=this.abs(),b=d.t=2*a.t;while(0<=--b){d[b]=0}for(b=0;b<a.t-1;++b){var e=a.am(b,a[b],d,2*b,0,1);if((d[b+a.t]+=a.am(b+1,2*a[b],d,2*b+1,e,a.t-b-1))>=a.DV){d[b+a.t]-=a.DV;d[b+a.t+1]=1}}if(0<d.t){d[d.t-1]+=a.am(b,a[b],d,2*b,0,1)}d.s=0;d.clamp()}function bnpDivRemTo(n,h,g){var w=n.abs();if(0>=w.t){return}var k=this.abs();if(k.t<w.t){if(null!=h){h.fromInt(0)}if(null!=g){this.copyTo(g)}return}if(null==g){g=nbi()}var d=nbi(),a=this.s,l=n.s,v=this.DB-nbits(w[w.t-1]);if(0<v){w.lShiftTo(v,d);k.lShiftTo(v,g)}else{w.copyTo(d);k.copyTo(g)}var p=d.t,b=d[p-1];if(0==b){return}var o=b*(1<<this.F1)+(1<p?d[p-2]>>this.F2:0),A=this.FV/o,z=(1<<this.F1)/o,x=1<<this.F2,u=g.t,s=u-p,f=null==h?nbi():h;d.dlShiftTo(s,f);if(0<=g.compareTo(f)){g[g.t++]=1;g.subTo(f,g)}BigInteger.ONE.dlShiftTo(p,f);f.subTo(d,d);while(d.t<p){d[d.t++]=0}while(0<=--s){var c=g[--u]==b?this.DM:_Mathfloor(g[u]*A+(g[u-1]+x)*z);if((g[u]+=d.am(0,c,g,s,0,p))<c){d.dlShiftTo(s,f);g.subTo(f,g);while(g[u]<--c){g.subTo(f,g)}}}if(null!=h){g.drShiftTo(p,h);if(a!=l){BigInteger.ZERO.subTo(h,h)}}g.t=p;g.clamp();if(0<v){g.rShiftTo(v,g)}if(0>a){BigInteger.ZERO.subTo(g,g)}}function bnMod(b){var c=nbi();this.abs().divRemTo(b,null,c);if(0>this.s&&0<c.compareTo(BigInteger.ZERO)){b.subTo(c,c)}return c}function Classic(a){this.m=a}function cConvert(a){if(0>a.s||0<=a.compareTo(this.m)){return a.mod(this.m)}else{return a}}function cRevert(a){return a}function cReduce(a){a.divRemTo(this.m,null,a)}function cMulTo(a,c,b){a.multiplyTo(c,b);this.reduce(b)}function cSqrTo(a,b){a.squareTo(b);this.reduce(b)}Classic.prototype.convert=cConvert;Classic.prototype.revert=cRevert;Classic.prototype.reduce=cReduce;Classic.prototype.mulTo=cMulTo;Classic.prototype.sqrTo=cSqrTo;function bnpInvDigit(){if(1>this.t){return 0}var a=this[0];if(0==(1&a)){return 0}var b=3&a;b=15&b*(2-(15&a)*b);b=255&b*(2-(255&a)*b);b=65535&b*(2-(65535&(65535&a)*b));b=b*(2-a*b%this.DV)%this.DV;return 0<b?this.DV-b:-b}function Montgomery(a){this.m=a;this.mp=a.invDigit();this.mpl=32767&this.mp;this.mph=this.mp>>15;this.um=(1<<a.DB-15)-1;this.mt2=2*a.t}function montConvert(a){var b=nbi();a.abs().dlShiftTo(this.m.t,b);b.divRemTo(this.m,null,b);if(0>a.s&&0<b.compareTo(BigInteger.ZERO)){this.m.subTo(b,b)}return b}function montRevert(a){var b=nbi();a.copyTo(b);this.reduce(b);return b}function montReduce(a){while(a.t<=this.mt2){a[a.t++]=0}for(var c=0;c<this.m.t;++c){var b=32767&a[c],d=b*this.mpl+((b*this.mph+(a[c]>>15)*this.mpl&this.um)<<15)&a.DM;b=c+this.m.t;a[b]+=this.m.am(0,d,a,c,0,this.m.t);while(a[b]>=a.DV){a[b]-=a.DV;a[++b]++}}a.clamp();a.drShiftTo(this.m.t,a);if(0<=a.compareTo(this.m)){a.subTo(this.m,a)}}function montSqrTo(a,b){a.squareTo(b);this.reduce(b)}function montMulTo(a,c,b){a.multiplyTo(c,b);this.reduce(b)}Montgomery.prototype.convert=montConvert;Montgomery.prototype.revert=montRevert;Montgomery.prototype.reduce=montReduce;Montgomery.prototype.mulTo=montMulTo;Montgomery.prototype.sqrTo=montSqrTo;function bnpIsEven(){return 0==(0<this.t?1&this[0]:this.s)}function bnpExp(h,j){if(4294967295<h||1>h){return BigInteger.ONE}var f=nbi(),a=nbi(),d=j.convert(this),c=nbits(h)-1;d.copyTo(f);while(0<=--c){j.sqrTo(f,a);if(0<(h&1<<c)){j.mulTo(a,d,f)}else{var b=f;f=a;a=b}}return j.revert(f)}function bnModPowInt(b,a){var c;if(256>b||a.isEven()){c=new Classic(a)}else{c=new Montgomery(a)}return this.exp(b,c)}BigInteger.prototype.copyTo=bnpCopyTo;BigInteger.prototype.fromInt=bnpFromInt;BigInteger.prototype.fromString=bnpFromString;BigInteger.prototype.clamp=bnpClamp;BigInteger.prototype.dlShiftTo=bnpDLShiftTo;BigInteger.prototype.drShiftTo=bnpDRShiftTo;BigInteger.prototype.lShiftTo=bnpLShiftTo;BigInteger.prototype.rShiftTo=bnpRShiftTo;BigInteger.prototype.subTo=bnpSubTo;BigInteger.prototype.multiplyTo=bnpMultiplyTo;BigInteger.prototype.squareTo=bnpSquareTo;BigInteger.prototype.divRemTo=bnpDivRemTo;BigInteger.prototype.invDigit=bnpInvDigit;BigInteger.prototype.isEven=bnpIsEven;BigInteger.prototype.exp=bnpExp;BigInteger.prototype.toString=bnToString;BigInteger.prototype.negate=bnNegate;BigInteger.prototype.abs=bnAbs;BigInteger.prototype.compareTo=bnCompareTo;BigInteger.prototype.bitLength=bnBitLength;BigInteger.prototype.mod=bnMod;BigInteger.prototype.modPowInt=bnModPowInt;BigInteger.ZERO=nbv(0);BigInteger.ONE=nbv(1);function bnClone(){var a=nbi();this.copyTo(a);return a}function bnIntValue(){if(0>this.s){if(1==this.t){return this[0]-this.DV}else{if(0==this.t){return-1}}}else{if(1==this.t){return this[0]}else{if(0==this.t){return 0}}}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return 0==this.t?this.s:this[0]<<24>>24}function bnShortValue(){return 0==this.t?this.s:this[0]<<16>>16}function bnpChunkSize(a){return _Mathfloor(Math.LN2*this.DB/Math.log(a))}function bnSigNum(){if(0>this.s){return-1}else{if(0>=this.t||1==this.t&&0>=this[0]){return 0}else{return 1}}}function bnpToRadix(c){if(null==c){c=10}if(0==this.signum()||2>c||36<c){return"0"}var f=this.chunkSize(c),e=_Mathpow(c,f),i=nbv(e),j=nbi(),h=nbi(),g="";this.divRemTo(i,j,h);while(0<j.signum()){g=(e+h.intValue()).toString(c).substr(1)+g;j.divRemTo(i,j,h)}return h.intValue().toString(c)+g}function bnpFromRadix(m,h){this.fromInt(0);if(null==h){h=10}for(var f=this.chunkSize(h),g=_Mathpow(h,f),e=!1,a=0,l=0,c=0,k;c<m.length;++c){k=intAt(m,c);if(0>k){if("-"==m.charAt(c)&&0==this.signum()){e=!0}continue}l=h*l+k;if(++a>=f){this.dMultiply(g);this.dAddOffset(l,0);a=0;l=0}}if(0<a){this.dMultiply(_Mathpow(h,a));this.dAddOffset(l,0)}if(e){BigInteger.ZERO.subTo(this,this)}}function bnpFromNumber(f,e,h){if("number"==typeof e){if(2>f){this.fromInt(1)}else{this.fromNumber(f,h);if(!this.testBit(f-1)){this.bitwiseTo(BigInteger.ONE.shiftLeft(f-1),op_or,this)}if(this.isEven()){this.dAddOffset(1,0)}while(!this.isProbablePrime(e)){this.dAddOffset(2,0);if(this.bitLength()>f){this.subTo(BigInteger.ONE.shiftLeft(f-1),this)}}}}else{var d=[],g=7&f;d.length=(f>>3)+1;e.nextBytes(d);if(0<g){d[0]&=(1<<g)-1}else{d[0]=0}this.fromString(d,256)}}function bnToByteArray(){var b=this.t,c=[];c[0]=this.s;var e=this.DB-b*this.DB%8,f,a=0;if(0<b--){if(e<this.DB&&(f=this[b]>>e)!=(this.s&this.DM)>>e){c[a++]=f|this.s<<this.DB-e}while(0<=b){if(8>e){f=(this[b]&(1<<e)-1)<<8-e;f|=this[--b]>>(e+=this.DB-8)}else{f=255&this[b]>>(e-=8);if(0>=e){e+=this.DB;--b}}if(0!=(128&f)){f|=-256}if(0==a&&(128&this.s)!=(128&f)){++a}if(0<a||f!=this.s){c[a++]=f}}}return c}function bnEquals(b){return 0==this.compareTo(b)}function bnMin(b){return 0>this.compareTo(b)?this:b}function bnMax(b){return 0<this.compareTo(b)?this:b}function bnpBitwiseTo(c,h,e){var d,g,b=_Mathmin(c.t,this.t);for(d=0;d<b;++d){e[d]=h(this[d],c[d])}if(c.t<this.t){g=c.s&this.DM;for(d=b;d<this.t;++d){e[d]=h(this[d],g)}e.t=this.t}else{g=this.s&this.DM;for(d=b;d<c.t;++d){e[d]=h(g,c[d])}e.t=c.t}e.s=h(this.s,c.s);e.clamp()}function op_and(a,b){return a&b}function bnAnd(b){var c=nbi();this.bitwiseTo(b,op_and,c);return c}function op_or(a,b){return a|b}function bnOr(b){var c=nbi();this.bitwiseTo(b,op_or,c);return c}function op_xor(a,b){return a^b}function bnXor(b){var c=nbi();this.bitwiseTo(b,op_xor,c);return c}function op_andnot(a,b){return a&~b}function bnAndNot(b){var c=nbi();this.bitwiseTo(b,op_andnot,c);return c}function bnNot(){for(var b=nbi(),a=0;a<this.t;++a){b[a]=this.DM&~this[a]}b.t=this.t;b.s=~this.s;return b}function bnShiftLeft(b){var a=nbi();if(0>b){this.rShiftTo(-b,a)}else{this.lShiftTo(b,a)}return a}function bnShiftRight(b){var a=nbi();if(0>b){this.lShiftTo(-b,a)}else{this.rShiftTo(b,a)}return a}function lbit(a){if(0==a){return-1}var b=0;if(0==(65535&a)){a>>=16;b+=16}if(0==(255&a)){a>>=8;b+=8}if(0==(15&a)){a>>=4;b+=4}if(0==(3&a)){a>>=2;b+=2}if(0==(1&a)){++b}return b}function bnGetLowestSetBit(){for(var a=0;a<this.t;++a){if(0!=this[a]){return a*this.DB+lbit(this[a])}}if(0>this.s){return this.t*this.DB}return-1}function cbit(a){var b=0;while(0!=a){a&=a-1;++b}return b}function bnBitCount(){for(var c=0,a=this.s&this.DM,b=0;b<this.t;++b){c+=cbit(this[b]^a)}return c}function bnTestBit(b){var a=_Mathfloor(b/this.DB);if(a>=this.t){return 0!=this.s}return 0!=(this[a]&1<<b%this.DB)}function bnpChangeBit(c,b){var a=BigInteger.ONE.shiftLeft(c);this.bitwiseTo(a,b,a);return a}function bnSetBit(a){return this.changeBit(a,op_or)}function bnClearBit(a){return this.changeBit(a,op_andnot)}function bnFlipBit(a){return this.changeBit(a,op_xor)}function bnpAddTo(d,f){var e=0,g=0,b=_Mathmin(d.t,this.t);while(e<b){g+=this[e]+d[e];f[e++]=g&this.DM;g>>=this.DB}if(d.t<this.t){g+=d.s;while(e<this.t){g+=this[e];f[e++]=g&this.DM;g>>=this.DB}g+=this.s}else{g+=this.s;while(e<d.t){g+=d[e];f[e++]=g&this.DM;g>>=this.DB}g+=d.s}f.s=0>g?-1:0;if(0<g){f[e++]=g}else{if(-1>g){f[e++]=this.DV+g}}f.t=e;f.clamp()}function bnAdd(b){var c=nbi();this.addTo(b,c);return c}function bnSubtract(b){var c=nbi();this.subTo(b,c);return c}function bnMultiply(b){var c=nbi();this.multiplyTo(b,c);return c}function bnDivide(b){var c=nbi();this.divRemTo(b,c,null);return c}function bnRemainder(b){var c=nbi();this.divRemTo(b,null,c);return c}function bnDivideAndRemainder(b){var d=nbi(),c=nbi();this.divRemTo(b,d,c);return[d,c]}function bnpDMultiply(a){this[this.t]=this.am(0,a-1,this,0,0,this.t);++this.t;this.clamp()}function bnpDAddOffset(b,a){while(this.t<=a){this[this.t++]=0}this[a]+=b;while(this[a]>=this.DV){this[a]-=this.DV;if(++a>=this.t){this[this.t++]=0}++this[a]}}function NullExp(){}function nNop(a){return a}function nMulTo(a,c,b){a.multiplyTo(c,b)}function nSqrTo(a,b){a.squareTo(b)}NullExp.prototype.convert=nNop;NullExp.prototype.revert=nNop;NullExp.prototype.mulTo=nMulTo;NullExp.prototype.sqrTo=nSqrTo;function bnPow(a){return this.exp(a,new NullExp)}function bnpMultiplyLowerTo(b,f,e){var d=_Mathmin(this.t+b.t,f);e.s=0;e.t=d;while(0<d){e[--d]=0}var c;for(c=e.t-this.t;d<c;++d){e[d+this.t]=this.am(0,b[d],e,d,0,this.t)}for(c=_Mathmin(b.t,f);d<c;++d){this.am(0,b[d],e,d,0,f-d)}e.clamp()}function bnpMultiplyUpperTo(b,e,d){--e;var c=d.t=this.t+b.t-e;d.s=0;while(0<=--c){d[c]=0}for(c=_Mathmax(e-this.t,0);c<b.t;++c){d[this.t+c-e]=this.am(e-c,b[c],d,0,0,this.t+c-e)}d.clamp();d.drShiftTo(1,d)}function Barrett(a){this.r2=nbi();this.q3=nbi();BigInteger.ONE.dlShiftTo(2*a.t,this.r2);this.mu=this.r2.divide(a);this.m=a}function barrettConvert(a){if(0>a.s||a.t>2*this.m.t){return a.mod(this.m)}else{if(0>a.compareTo(this.m)){return a}else{var b=nbi();a.copyTo(b);this.reduce(b);return b}}}function barrettRevert(a){return a}function barrettReduce(a){a.drShiftTo(this.m.t-1,this.r2);if(a.t>this.m.t+1){a.t=this.m.t+1;a.clamp()}this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);while(0>a.compareTo(this.r2)){a.dAddOffset(1,this.m.t+1)}a.subTo(this.r2,a);while(0<=a.compareTo(this.m)){a.subTo(this.m,a)}}function barrettSqrTo(a,b){a.squareTo(b);this.reduce(b)}function barrettMulTo(a,c,b){a.multiplyTo(c,b);this.reduce(b)}Barrett.prototype.convert=barrettConvert;Barrett.prototype.revert=barrettRevert;Barrett.prototype.reduce=barrettReduce;Barrett.prototype.mulTo=barrettMulTo;Barrett.prototype.sqrTo=barrettSqrTo;function bnModPow(q,f){var o=q.bitLength(),h,b=nbv(1),v;if(0>=o){return b}else{if(18>o){h=1}else{if(48>o){h=3}else{if(144>o){h=4}else{if(768>o){h=5}else{h=6}}}}}if(8>o){v=new Classic(f)}else{if(f.isEven()){v=new Barrett(f)}else{v=new Montgomery(f)}}var p=[],d=3,s=h-1,a=(1<<h)-1;p[1]=v.convert(this);if(1<h){var A=nbi();v.sqrTo(p[1],A);while(d<=a){p[d]=nbi();v.mulTo(A,p[d-2],p[d]);d+=2}}var l=q.t-1,x,u=!0,c=nbi(),y;o=nbits(q[l])-1;while(0<=l){if(o>=s){x=q[l]>>o-s&a}else{x=(q[l]&(1<<o+1)-1)<<s-o;if(0<l){x|=q[l-1]>>this.DB+o-s}}d=h;while(0==(1&x)){x>>=1;--d}if(0>(o-=d)){o+=this.DB;--l}if(u){p[x].copyTo(b);u=!1}else{while(1<d){v.sqrTo(b,c);v.sqrTo(c,b);d-=2}if(0<d){v.sqrTo(b,c)}else{y=b;b=c;c=y}v.mulTo(c,p[x],b)}while(0<=l&&0==(q[l]&1<<o)){v.sqrTo(b,c);y=b;b=c;c=y;if(0>--o){o=this.DB-1;--l}}}return v.revert(b)}function bnGCD(c){var b=0>this.s?this.negate():this.clone(),h=0>c.s?c.negate():c.clone();if(0>b.compareTo(h)){var e=b;b=h;h=e}var d=b.getLowestSetBit(),f=h.getLowestSetBit();if(0>f){return b}if(d<f){f=d}if(0<f){b.rShiftTo(f,b);h.rShiftTo(f,h)}while(0<b.signum()){if(0<(d=b.getLowestSetBit())){b.rShiftTo(d,b)}if(0<(d=h.getLowestSetBit())){h.rShiftTo(d,h)}if(0<=b.compareTo(h)){b.subTo(h,b);b.rShiftTo(1,b)}else{h.subTo(b,h);h.rShiftTo(1,h)}}if(0<f){h.lShiftTo(f,h)}return h}function bnpModInt(e){if(0>=e){return 0}var c=this.DV%e,b=0>this.s?e-1:0;if(0<this.t){if(0==c){b=this[0]%e}else{for(var a=this.t-1;0<=a;--a){b=(c*b+this[a])%e}}}return b}function bnModInverse(f){var j=f.isEven();if(this.isEven()&&j||0==f.signum()){return BigInteger.ZERO}var i=f.clone(),h=this.clone(),g=nbv(1),e=nbv(0),l=nbv(0),k=nbv(1);while(0!=i.signum()){while(i.isEven()){i.rShiftTo(1,i);if(j){if(!g.isEven()||!e.isEven()){g.addTo(this,g);e.subTo(f,e)}g.rShiftTo(1,g)}else{if(!e.isEven()){e.subTo(f,e)}}e.rShiftTo(1,e)}while(h.isEven()){h.rShiftTo(1,h);if(j){if(!l.isEven()||!k.isEven()){l.addTo(this,l);k.subTo(f,k)}l.rShiftTo(1,l)}else{if(!k.isEven()){k.subTo(f,k)}}k.rShiftTo(1,k)}if(0<=i.compareTo(h)){i.subTo(h,i);if(j){g.subTo(l,g)}e.subTo(k,e)}else{h.subTo(i,h);if(j){l.subTo(g,l)}k.subTo(e,k)}}if(0!=h.compareTo(BigInteger.ONE)){return BigInteger.ZERO}if(0<=k.compareTo(f)){return k.subtract(f)}if(0>k.signum()){k.addTo(f,k)}else{return k}if(0>k.signum()){return k.add(f)}else{return k}}var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509],lplim=(1<<26)/lowprimes[lowprimes.length-1];function bnIsProbablePrime(e){var d,b=this.abs();if(1==b.t&&b[0]<=lowprimes[lowprimes.length-1]){for(d=0;d<lowprimes.length;++d){if(b[0]==lowprimes[d]){return!0}}return!1}if(b.isEven()){return!1}d=1;while(d<lowprimes.length){var a=lowprimes[d],c=d+1;while(c<lowprimes.length&&a<lplim){a*=lowprimes[c++]}a=b.modInt(a);while(d<c){if(0==a%lowprimes[d++]){return!1}}}return b.millerRabin(e)}function bnpMillerRabin(f){var g=this.subtract(BigInteger.ONE),c=g.getLowestSetBit();if(0>=c){return!1}var h=g.shiftRight(c);f=f+1>>1;if(f>lowprimes.length){f=lowprimes.length}for(var b=nbi(),e=0;e<f;++e){b.fromInt(lowprimes[e]);var l=b.modPow(h,this);if(0!=l.compareTo(BigInteger.ONE)&&0!=l.compareTo(g)){var d=1;while(d++<c&&0!=l.compareTo(g)){l=l.modPowInt(2,this);if(0==l.compareTo(BigInteger.ONE)){return!1}}if(0!=l.compareTo(g)){return!1}}}return!0}BigInteger.prototype.chunkSize=bnpChunkSize;BigInteger.prototype.toRadix=bnpToRadix;BigInteger.prototype.fromRadix=bnpFromRadix;BigInteger.prototype.fromNumber=bnpFromNumber;BigInteger.prototype.bitwiseTo=bnpBitwiseTo;BigInteger.prototype.changeBit=bnpChangeBit;BigInteger.prototype.addTo=bnpAddTo;BigInteger.prototype.dMultiply=bnpDMultiply;BigInteger.prototype.dAddOffset=bnpDAddOffset;BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo;BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo;BigInteger.prototype.modInt=bnpModInt;BigInteger.prototype.millerRabin=bnpMillerRabin;BigInteger.prototype.clone=bnClone;BigInteger.prototype.intValue=bnIntValue;BigInteger.prototype.byteValue=bnByteValue;BigInteger.prototype.shortValue=bnShortValue;BigInteger.prototype.signum=bnSigNum;BigInteger.prototype.toByteArray=bnToByteArray;BigInteger.prototype.equals=bnEquals;BigInteger.prototype.min=bnMin;BigInteger.prototype.max=bnMax;BigInteger.prototype.and=bnAnd;BigInteger.prototype.or=bnOr;BigInteger.prototype.xor=bnXor;BigInteger.prototype.andNot=bnAndNot;BigInteger.prototype.not=bnNot;BigInteger.prototype.shiftLeft=bnShiftLeft;BigInteger.prototype.shiftRight=bnShiftRight;BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit;BigInteger.prototype.bitCount=bnBitCount;BigInteger.prototype.testBit=bnTestBit;BigInteger.prototype.setBit=bnSetBit;BigInteger.prototype.clearBit=bnClearBit;BigInteger.prototype.flipBit=bnFlipBit;BigInteger.prototype.add=bnAdd;BigInteger.prototype.subtract=bnSubtract;BigInteger.prototype.multiply=bnMultiply;BigInteger.prototype.divide=bnDivide;BigInteger.prototype.remainder=bnRemainder;BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder;BigInteger.prototype.modPow=bnModPow;BigInteger.prototype.modInverse=bnModInverse;BigInteger.prototype.pow=bnPow;BigInteger.prototype.gcd=bnGCD;BigInteger.prototype.isProbablePrime=bnIsProbablePrime;function SecureRandom(){this.rng_state;this.rng_pool;this.rng_pptr;this.rng_seed_int=function(c){this.rng_pool[this.rng_pptr++]^=255&c;this.rng_pool[this.rng_pptr++]^=255&c>>8;this.rng_pool[this.rng_pptr++]^=255&c>>16;this.rng_pool[this.rng_pptr++]^=255&c>>24;if(this.rng_pptr>=rng_psize){this.rng_pptr-=rng_psize}};this.rng_seed_time=function(){this.rng_seed_int(new Date().getTime())};if(null==this.rng_pool){this.rng_pool=[];this.rng_pptr=0;var a;if("Netscape"==navigator.appName&&"5">navigator.appVersion&&window.crypto){var b=window.crypto.random(32);for(a=0;a<b.length;++a){this.rng_pool[this.rng_pptr++]=255&b.charCodeAt(a)}}while(this.rng_pptr<rng_psize){a=_Mathfloor(65536*Math.random());this.rng_pool[this.rng_pptr++]=a>>>8;this.rng_pool[this.rng_pptr++]=255&a}this.rng_pptr=0;this.rng_seed_time()}this.rng_get_byte=function(){if(null==this.rng_state){this.rng_seed_time();this.rng_state=prng_newstate();this.rng_state.init(this.rng_pool);for(this.rng_pptr=0;this.rng_pptr<this.rng_pool.length;++this.rng_pptr){this.rng_pool[this.rng_pptr]=0}this.rng_pptr=0}return this.rng_state.next()};this.nextBytes=function(d){var c;for(c=0;c<d.length;++c){d[c]=this.rng_get_byte()}}};function Arcfour(){this.i=0;this.j=0;this.S=[]}function ARC4init(d){var c,a,b;for(c=0;256>c;++c){this.S[c]=c}a=0;for(c=0;256>c;++c){a=255&a+this.S[c]+d[c%d.length];b=this.S[c];this.S[c]=this.S[a];this.S[a]=b}this.i=0;this.j=0}function ARC4next(){var a;this.i=255&this.i+1;this.j=255&this.j+this.S[this.i];a=this.S[this.i];this.S[this.i]=this.S[this.j];this.S[this.j]=a;return this.S[255&a+this.S[this.i]]}Arcfour.prototype.init=ARC4init;Arcfour.prototype.next=ARC4next;function prng_newstate(){return new Arcfour}var rng_psize=256;if("undefined"!=typeof pidCrypt&&"undefined"!=typeof BigInteger&&"undefined"!=typeof SecureRandom&&"undefined"!=typeof Arcfour){function parseBigInt(b,a){return new BigInteger(b,a)}function linebrk(c,d){var a="",b=0;while(b+d<c.length){a+=c.substring(b,b+d)+"\n";b+=d}return a+c.substring(b,c.length)}function byte2Hex(a){if(16>a){return"0"+a.toString(16)}else{return a.toString(16)}}function pkcs1unpad2(f,g){var a=f.toByteArray(),e=0;while(e<a.length&&0==a[e]){++e}if(a.length-e!=g-1||2!=a[e]){return null}++e;while(0!=a[e]){if(++e>=a.length){return null}}var c="";while(++e<a.length){c+=_StringfromCharCode(a[e])}return c}function pkcs1pad2(d,f){if(f<d.length+11){alert("Message too long for RSA");return null}var e=[],c=d.length-1;while(0<=c&&0<f){e[--f]=d.charCodeAt(c--)}e[--f]=0;var b=new SecureRandom,a=[];while(2<f){a[0]=0;while(0==a[0]){b.nextBytes(a)}e[--f]=a[0]}e[--f]=2;e[--f]=0;return new BigInteger(e)}pidCrypt.RSA=function(){this.n=null;this.e=0;this.d=null;this.p=null;this.q=null;this.dmp1=null;this.dmq1=null;this.coeff=null};pidCrypt.RSA.prototype.doPrivate=function(a){if(null==this.p||null==this.q){return a.modPow(this.d,this.n)}var c=a.mod(this.p).modPow(this.dmp1,this.p),b=a.mod(this.q).modPow(this.dmq1,this.q);while(0>c.compareTo(b)){c=c.add(this.p)}return c.subtract(b).multiply(this.coeff).mod(this.p).multiply(this.q).add(b)};pidCrypt.RSA.prototype.setPublic=function(c,b,a){if("undefined"==typeof a){a=16}if(null!=c&&null!=b&&0<c.length&&0<b.length){this.n=parseBigInt(c,a);this.e=parseInt(b,a)}else{alert("Invalid RSA public key")}};pidCrypt.RSA.prototype.doPublic=function(a){return a.modPowInt(this.e,this.n)};pidCrypt.RSA.prototype.encryptRaw=function(d){var a=pkcs1pad2(d,this.n.bitLength()+7>>3);if(null==a){return null}var e=this.doPublic(a);if(null==e){return null}var b=e.toString(16);if(0==(1&b.length)){return b}else{return"0"+b}};pidCrypt.RSA.prototype.encrypt=function(a){a=pidCryptUtil.encodeBase64(a);return this.encryptRaw(a)};pidCrypt.RSA.prototype.decryptRaw=function(b){var d=parseBigInt(b,16),a=this.doPrivate(d);if(null==a){return null}return pkcs1unpad2(a,this.n.bitLength()+7>>3)};pidCrypt.RSA.prototype.decrypt=function(b){var a=this.decryptRaw(b);a=a?pidCryptUtil.decodeBase64(a):"";return a};pidCrypt.RSA.prototype.setPrivate=function(d,b,c,a){if("undefined"==typeof a){a=16}if(null!=d&&null!=b&&0<d.length&&0<b.length){this.n=parseBigInt(d,a);this.e=parseInt(b,a);this.d=parseBigInt(c,a)}else{alert("Invalid RSA private key")}};pidCrypt.RSA.prototype.setPrivateEx=function(e,i,a,d,c,h,g,b,f){if("undefined"==typeof f){f=16}if(null!=e&&null!=i&&0<e.length&&0<i.length){this.n=parseBigInt(e,f);this.e=parseInt(i,f);this.d=parseBigInt(a,f);this.p=parseBigInt(d,f);this.q=parseBigInt(c,f);this.dmp1=parseBigInt(h,f);this.dmq1=parseBigInt(g,f);this.coeff=parseBigInt(b,f)}else{alert("Invalid RSA private key")}};pidCrypt.RSA.prototype.generate=function(b,i){var a=new SecureRandom,f=b>>1;this.e=parseInt(i,16);var c=new BigInteger(i,16);for(;;){for(;;){this.p=new BigInteger(b-f,1,a);if(0==this.p.subtract(BigInteger.ONE).gcd(c).compareTo(BigInteger.ONE)&&this.p.isProbablePrime(10)){break}}for(;;){this.q=new BigInteger(f,1,a);if(0==this.q.subtract(BigInteger.ONE).gcd(c).compareTo(BigInteger.ONE)&&this.q.isProbablePrime(10)){break}}if(0>=this.p.compareTo(this.q)){var h=this.p;this.p=this.q;this.q=h}var g=this.p.subtract(BigInteger.ONE),d=this.q.subtract(BigInteger.ONE),e=g.multiply(d);if(0==e.gcd(c).compareTo(BigInteger.ONE)){this.n=this.p.multiply(this.q);this.d=c.modInverse(e);this.dmp1=this.d.mod(g);this.dmq1=this.d.mod(d);this.coeff=this.q.modInverse(this.p);break}}};pidCrypt.RSA.prototype.getASNData=function(a){var e={},c=[],d=0;if(a.value&&"INTEGER"==a.type){c[d++]=a.value}if(a.sub){for(var b=0;b<a.sub.length;b++){c=c.concat(this.getASNData(a.sub[b]))}}return c};pidCrypt.RSA.prototype.setKeyFromASN=function(c,e){var d=["N","E","D","P","Q","DP","DQ","C"],f={},a=this.getASNData(e);switch(c){case"Public":case"public":for(var b=0;b<a.length;b++){f[d[b]]=a[b].toLowerCase()}this.setPublic(f.N,f.E,16);break;case"Private":case"private":for(var b=1;b<a.length;b++){f[d[b-1]]=a[b].toLowerCase()}this.setPrivateEx(f.N,f.E,f.D,f.P,f.Q,f.DP,f.DQ,f.C,16);break;}};pidCrypt.RSA.prototype.setPublicKeyFromASN=function(a){this.setKeyFromASN("public",a)};pidCrypt.RSA.prototype.setPrivateKeyFromASN=function(a){this.setKeyFromASN("private",a)};pidCrypt.RSA.prototype.getParameters=function(){var a={};if(null!=this.n){a.n=this.n}a.e=this.e;if(null!=this.d){a.d=this.d}if(null!=this.p){a.p=this.p}if(null!=this.q){a.q=this.q}if(null!=this.dmp1){a.dmp1=this.dmp1}if(null!=this.dmq1){a.dmq1=this.dmq1}if(null!=this.coeff){a.c=this.coeff}return a}};const certParser=function(cert){var lines=cert.split("\n"),read=!1,b64=!1,end=!1,flag="",retObj={};retObj.info="";retObj.salt="";retObj.b64="";retObj.aes=!1;retObj.mode="";retObj.bits=0;for(var i=0;i<lines.length;i++){flag=lines[i].substr(0,9);if(1==i&&"Proc-Type"!=flag&&0==flag.indexOf("M"))b64=!0;switch(flag){case"-----BEGI":read=!0;break;case"Proc-Type":if(read)retObj.info=lines[i];break;case"DEK-Info:":if(read){var tmp=lines[i].split(","),dek=tmp[0].split(": "),aes=dek[1].split("-");retObj.aes="AES"==aes[0]?!0:!1;retObj.mode=aes[2];retObj.bits=parseInt(aes[1]);retObj.salt=tmp[1].substr(0,16);retObj.iv=tmp[1]}break;case"":if(read)b64=!0;break;case"-----END ":if(read){b64=!1;read=!1}break;default:if(read&&b64)retObj.b64+=pidCryptUtil.stripLineFeeds(lines[i]);}}return retObj},fire=function(eventName,data){debugger;const event=new CustomEvent(eventName,{detail:data});document.dispatchEvent(event)};function encryptVote(votePublicKey,selectedItemIds){var encryptedVote;if(votePublicKey){var params=certParser(votePublicKey);if(params.b64){try{var key=pidCryptUtil.decodeBase64(params.b64),rsa=new pidCrypt.RSA,asn=pidCrypt.ASN1.decode(pidCryptUtil.toByteArray(key)),tree=asn.toHexTree();rsa.setPublicKeyFromASN(tree);var crypted=rsa.encrypt(JSON.stringify(selectedItemIds));encryptedVote=pidCryptUtil.fragment(pidCryptUtil.encodeBase64(pidCryptUtil.convertFromHex(crypted)),64);return encryptedVote}catch(err){fire("oav-error-localize",["error_encryption","err",err]);return null}}else{fire("oav-error-localize",["error_invalid_public_key"]);return null}}else{fire("oav-error-localize",["error_public_key_not_found"]);return null}}var ballotEncryptionBehavior={encryptVote:encryptVote};_exports.$ballotEncryptionBehavior=ballotEncryptionBehavior;const OavAppStyles=css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  :host {
     font-family: var(--app-main-font-family,'Roboto',Arial,sans-serif);
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
    background-size: var(--app-budget-background-size, 1920px 238px);
    background-repeat: var(--app-budget-container-background-repeat, no-repeat);
    background-position: center;
    background-position-y: var(--app-budget-background-pos-y, top);
    background-color: #FFF;
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

  paper-toast {
    font-size: 12px;
  }

  paper-toast[wide] {
    font-size: 22px;
    text-align: center;
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
    color: var(--app-close-button-color, #fff);
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
    top: 6px;
    right: 0;
    color: #fff;
  }

  .helpIconInBudget {
    color: var(--app-help-icon-color, #fff);
  }

  .helpIconInBudget[select-voting-area] {
    color: var(--app-help-icon-select-area, #000);
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

    .helpIconInBudget  {
      top: 2px;
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
    font-family: var(--app-main-font-family,'Roboto',Arial,sans-serif);
  }

  .welcomeText {
    width: 420px;
    max-width: 420px;
    font-size: 15px;
    margin-top: 8px;
    font-family: var(--app-main-font-family,'Roboto',Arial,sans-serif);
  }

  .welcomeLogo {
    padding: 0;
    margin: 0;
    margin-top: 8px;
    max-width: var(--app-welcome-logo-max-width, 280px);
    width: var(--app-welcome-logo-width, 280px);
    height: var(--app-welcome-logo-height, 116px);
  }

  .welcomeLogoContainer {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  paper-button.continueButton {
    background-color: var(--app-continue-button-color, var(--app-accent-color));
    color: #fff;
    margin: 8px;
    margin-bottom: 8px;
    font-size: 18px;
    font-family: var(--app-main-font-family,'Roboto',Arial,sans-serif);
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
      width: var(--app-welcome-logo-mobile-width, 200px);
      height: var(--app-welcome-logo-mobile-height, 83px);
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
`;_exports.OavAppStyles=OavAppStyles;var oavAppStyles={OavAppStyles:OavAppStyles};_exports.$oavAppStyles=oavAppStyles;const template$c=html`<iron-iconset-svg size="24" name="icons">
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
</iron-iconset-svg>`;document.head.appendChild(template$c.content);window.IntlMessageFormat=IntlMessageFormat;class OavBaseElement extends LitElement{static get properties(){return{wide:{type:Boolean,value:!1},language:{type:String}}}constructor(){super()}activity(type,object){this.sendToGoogleAnalytics("send","event",object,type)}sendToGoogleAnalytics(type,parameterA,parameterB,parameterC){if("function"==typeof ga){if(parameterB&&parameterC){ga(type,parameterA,parameterB,parameterC)}else{ga(type,parameterA)}}else{console.warn("Google analytics message not sent for type:"+type+" parameterA:"+parameterA+" parameterB:"+parameterB+" parameterC:"+parameterC)}}formatNumber(value,currencyIcon,numberSeperator){if(!currencyIcon)currencyIcon="";if(!numberSeperator)numberSeperator=",";if(value){return currencyIcon+value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,numberSeperator)}else{return currencyIcon+"0"}}localize(){var key=arguments[0];if(!key||!window.localeResources||!(this.language&&window.language)||!window.localeResources[this.language])return key;var translatedValue=window.localeResources[this.language||window.language][key];if(!translatedValue){return key}var messageKey=key+translatedValue,translatedMessage=window.__localizationCache.messages[messageKey];if(!translatedMessage){translatedMessage=new IntlMessageFormat(translatedValue,this.language,{});window.__localizationCache.messages[messageKey]=translatedMessage}for(var args={},i=1;i<arguments.length;i+=2){args[arguments[i]]=arguments[i+1]}return translatedMessage.format(args)}updated(changedProps){super.updated(changedProps);if(changedProps.has("language")){}}$$(id){return this.shadowRoot.querySelector(id)}fire(eventName,data){const event=new CustomEvent(eventName,{detail:data,bubbles:!0,composed:!0});this.dispatchEvent(event)}}_exports.OavBaseElement=OavBaseElement;var oavBaseElement={OavBaseElement:OavBaseElement};_exports.$oavBaseElement=oavBaseElement;class PageViewElement extends OavBaseElement{shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean}}}}_exports.PageViewElement=PageViewElement;var pageViewElement={PageViewElement:PageViewElement};_exports.$pageViewElement=pageViewElement;const OavAreaBallotStyles=css`

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
    font-family: var(--app-tabs-font-family, Roboto);
    font-size: 21px !important;
    margin-left: 24px;
    margin-right: 24px;
    width: 320px;
  }

  @media (max-width: 1024px) {
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
`;_exports.OavAreaBallotStyles=OavAreaBallotStyles;var oavAreaBallotStyles={OavAreaBallotStyles:OavAreaBallotStyles};_exports.$oavAreaBallotStyles=oavAreaBallotStyles;const OavAreaBallotItemStyles=css`

  .itemContent {
    position: relative;
    width: 300px !important;
    height: 324px;
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
    padding-top: 16px;
    font-size: 16px;
    margin-top: 42px;
  }

  .name {
    font-size: var(--app-item-name-font-size, 20px);
    padding: 8px;
    padding-top: 4px;
    color: var(--app-ballot-item-name-color, #222);
  }

  .name[small] {
    font-size: var(--app-item-name-font-size-small, 17px);
    padding-top: 2px;
    padding-right: 4px;
    padding-top: 4px;
  }

  .name[small][tiny] {
    font-size: 14px;
  }

  .price {
    font-size: 24px;
    position: absolute;
    bottom: 14px;
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
    font-size: 24px;
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
    background-color: var(--app-favorite-button-background-color, var(--app-accent-color, #F00));
    color: var(--app-favorite-ballot-item-button-color, #fff);
    --paper-fab-iron-icon: {
      height: 29px;
      width: 29px;
    };
    padding: 0;
    padding-top: var(--app-fav-button-padding-top, 1px);
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
    -webkit-filter: drop-shadow( 1px 1px 10px var(--app-share-dropshadow, #555 ));
    filter: drop-shadow( 1px 1px 10pxvar(--app-share-dropshadow, #555 ) );
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
`;_exports.OavAreaBallotItemStyles=OavAreaBallotItemStyles;var oavAreaBallotItemStyles={OavAreaBallotItemStyles:OavAreaBallotItemStyles};_exports.$oavAreaBallotItemStyles=oavAreaBallotItemStyles;const OavShadowStyles=css`
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
`;_exports.OavShadowStyles=OavShadowStyles;var oavShadowStyles={OavShadowStyles:OavShadowStyles};_exports.$oavShadowStyles=oavShadowStyles;class OavAreaBallotItem extends OavBaseElement{static get properties(){return{item:{type:Object},staticMapsApiKey:{type:String},elevation:Number,budgetElement:{type:Object},selectedInBudget:{type:Boolean},toExpensiveForBudget:{type:Boolean},isFavorite:{type:Boolean},googleMapsApiKey:{type:String},imageTabSelected:{type:Boolean},descriptionTabSelected:{type:Boolean},mapTabSelected:{type:Boolean},descriptionPdfLink:{type:String},small:{type:Boolean},tiny:{type:Boolean},mapsHeight:{type:String,value:null},mapsWidth:{type:String,value:null},longitude:{type:String,value:null},latitude:{type:String,value:null},imageLoaded:{type:Boolean,value:!1},isOnMap:Boolean,configFromServer:Object,listBoxSelection:Number}}static get styles(){return[OavAreaBallotItemStyles,OavShadowStyles]}render(){return html$1`
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
            <paper-item @tap="${this._openPdf}" ?hidden="${!this.item.pdf_url}">
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
          <paper-share-button ?hidden="${!this.imageLoaded||this.configFromServer.client_config.hideItemSharing}" ?small="${this.small}" @share-tap="${this._shareTap}" class="shareIcon" horizontal-align="left" id="shareButton"
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
    `}updated(changedProps){super.updated(changedProps);if(changedProps.has("selectedInBudget")){if(this.selectedInBudget){this.elevation=4;this.$$("#topContainer").classList.add("shadow-elevation-12dp")}else{this.elevation=1;this.$$("#topContainer").classList.remove("shadow-elevation-12dp")}}if(changedProps.has("item")){if(this.item){if(this.item.locations&&0<this.item.locations.length){this.longitude=this.item.locations[0].longitude;this.latitude=this.item.locations[0].latitude}this.resetFromBudget()}}if(changedProps.has("small")){if(this.small){this.mapsHeight="260";this.mapsWidth="146"}else{this.mapsHeight="169";this.mapsWidth="300"}}if(changedProps.has("tiny")){if(this.tiny){this.mapsHeight="220";this.mapsWidth="124"}else{this.mapsHeight="169";this.mapsWidth="300"}}}constructor(){super();this.reset();this.listBoxSelection=0}reset(){this.small=!1;this.mapTabSelected=!1;this.descriptionTabSelected=!1;this.imageTabSelected=!0;this.isFavorite=!1;this.toExpensiveForBudget=!1;this.selectedInBudget=!1;this.mapsHeight="169";this.mapsWidth="300"}_imageLoadedChanged(event){if(event.detail.value){this.imageLoaded=!0}}_clickedDropDownMenu(){this.activity("click","dropdown")}_priceIsOne(price){if(price&&1>=price){return!0}else{return!1}}_openPdf(){this.activity("click","openPdf");if(this.item.pdf_url){window.open(this.item.pdf_url,"_blank")}}_showPost(){this.activity("click","showPost");window.appLastArea="/"+window.location.hash;const path="/post/"+this.item.idea_id;window.history.pushState({},null,path);this.fire("location-changed",path);setTimeout(()=>{this.$$("#listBox").select(0)})}_itemShareUrl(){if(this.item){return encodeURIComponent("https://"+window.location.host+"/items/"+this.item.id)}else{return null}}_shareTap(event,detail){this.activity("click","shareItem")}resetFromBudget(){if(this.budgetElement){if(-1<this.budgetElement.selectedItems.indexOf(this.item)){this.setInBudget();this.setNotTooExpensive();if(this.budgetElement.currentBallot.favoriteItem==this.item){this.isFavorite=!0}else{this.isFavorite=!1}}else{var budgetLeft=this.budgetElement.totalBudget-this.budgetElement.selectedBudget;if(this.item.price>budgetLeft){this.setTooExpensive()}else{this.setNotTooExpensive()}this.removeFromBudget()}}this._setImageMode(!0)}_setImageMode(disableActivity){if(!disableActivity||!1===disableActivity){this.activity("select","imageMode")}this.imageTabSelected=!0;this.descriptionTabSelected=!1;this.mapTabSelected=!1}_setMapMode(){this.activity("select","mapMode");this.imageTabSelected=!1;this.descriptionTabSelected=!1;this.mapTabSelected=!0}_setDescriptionMode(){this.activity("select","descriptionMode");this.imageTabSelected=!1;this.descriptionTabSelected=!0;this.mapTabSelected=!1}_toggleDescription(){this.activity("toggle","description");if(!0===this.descriptionTabSelected){this._setImageMode()}else{this._setDescriptionMode()}}_openMenu(){this.activity("open","itemMenu")}setInBudget(){this.selectedInBudget=!0}removeFromBudget(){this.selectedInBudget=!1;this.isFavorite=!1}setTooExpensive(){this.toExpensiveForBudget=!0}setNotTooExpensive(){this.toExpensiveForBudget=!1}_toggleFavorite(){if(this.budgetElement.currentBallot.favoriteItem&&this.budgetElement.currentBallot.favoriteItem.id==this.item.id){this.fire("oav-set-favorite-item-in-budget",{item:null});this.isFavorite=!1}else{var button=this.$$("#addFavoriteButton"),buttonRect=button.getBoundingClientRect(),left=buttonRect.left,top=buttonRect.top;this.isFavorite=!0;this.fire("oav-set-favorite-item-in-budget",{item:this.item,orgAnimPos:{left:left,top:top},budgetAnimPos:this.budgetElement.getItemLeftTop(this.item)})}}_toggleInBudget(event){this.$$("#addFavoriteButton").style.position="absolute";this.$$("#addFavoriteButton").style.left="12px";this.$$("#addFavoriteButton").style.bottom="12px";var animation=this.$$("#addFavoriteButton").animate([{transform:"translateX(200px)",easing:"ease-out"},{transform:"scale(2)",easing:"ease-out"},{transform:"translateY(0)",easing:"ease-out"}],{duration:400,iterations:1});animation.onfinish=function(){this.$$("#addFavoriteButton").style.position="absolute";this.$$("#addFavoriteButton").style.left="12px";this.$$("#addFavoriteButton").style.bottom="12px"}.bind(this);this.fire("oav-toggle-item-in-budget",{item:this.item})}}window.customElements.define("oav-area-ballot-item",OavAreaBallotItem);const OavBallotMapStyles=css`
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
`;_exports.OavBallotMapStyles=OavBallotMapStyles;var oavAreaBallotMapStyles={OavBallotMapStyles:OavBallotMapStyles};_exports.$oavAreaBallotMapStyles=oavAreaBallotMapStyles;class OavAreaBallotMap extends OavBaseElement{static get properties(){return{items:{type:Array},budgetElement:{type:Object},selectedItem:{type:Object},configFromServer:Object,noItems:{type:Boolean,value:!1},googleMapsApiKey:{type:String},wide:{type:Boolean,observer:"_wideChanged"}}}static get styles(){return[OavBallotMapStyles,OavShadowStyles]}render(){return html$1`
      <div class="layout vertical center-center topMapContainer">
        ${!this.items?html$1`
              <div class="noMapContainer shadow-elevation-3dp">
                <h1>${this.localize("items.noMapItems")}</h1>
              </div>
            `:html$1`
              <div class="mapContainer">
                <google-map ?disable-default-ui="${this.tiny}" id="map" .apiKey="${this.configFromServer.client_config.googleMapsApiKey}" fit-to-markers>
                  ${this.items.map(item=>{return item.locations.map(location=>{return html$1`
                        <google-map-marker slot="markers" .clickEvents="${!0}" .latitude="${location.latitude}" data-itemid="${item.id}" .longitude="${location.longitude}" class="marker" @google-map-marker-click="${this.markerClick}">
                        </google-map-marker>
                      `})})}

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
            `}
      </div>
    `}constructor(){super();this.reset()}connectedCallback(){super.connectedCallback();setTimeout(function(){this.resetMapHeight()}.bind(this))}disconnectedCallback(){this.items=null;super.disconnectedCallback()}reset(){}_closeInfo(){}updated(changedProps){super.updated(changedProps);if(changedProps.has("wide")){this.resetMapHeight()}if(changedProps.has("items")&&this.items){setTimeout(()=>{this.$$("#map")._fitToMarkersChanged()},10)}}resetMapHeight(){var map=this.$$("#map"),windowHeight=window.innerHeight;if(map){var height;if(this.wide){height=windowHeight-322}else{height=windowHeight-236}map.style.height=height+"px"}}setItemInBudget(item){if(this.selectedItem&&this.selectedItem.id==item.id){var item=this.$$("#ballotItem");if(item){item.setInBudget()}}}removeFromBudget(item){if(this.selectedItem&&this.selectedItem.id==item.id){var item=this.$$("#ballotItem");if(item){this.$$("#ballotItem").removeFromBudget()}}}checkIfSelectedItemToExpensive(budgetLeft){if(this.selectedItem){var item=this.$$("#ballotItem");if(item){if(!item.selectedInBudget){if(this.selectedItem.price<=budgetLeft){item.setNotTooExpensive();console.log("item id "+this.selectedItem.id+"Not Too Expensive")}else if(this.selectedItem){console.log("item id "+this.selectedItem.id+"Too Expensive");item.setTooExpensive()}}}}}scrollIntoView(itemId){let markerIdCounter=0,markerIdFoundAt=null;this.items.map(item=>{return item.locations.map(location=>{if(item.id==itemId){markerIdFoundAt=markerIdCounter}markerIdCounter++})});if(null!==markerIdFoundAt&&this.$$("#map")){this.$$("#map").triggerMarkerClick(markerIdFoundAt)}}markerClick(e){this.activity("click","marker");const selectedItemId=e.target.dataset.itemid;this.items.forEach(item=>{if(item.id==selectedItemId){this.selectedItem=item}});let marker;if(e.srcElement){marker=e.srcElement.marker}else{marker=e.currentTarget.marker}setTimeout(()=>{this.$$("#myInfoCard").showInfoWindow(marker)},10)}}window.customElements.define("oav-area-ballot-map",OavAreaBallotMap);class OavAreaBallot extends PageViewElement{static get properties(){return{area:{type:Object},areaId:{type:String},configFromServer:String,areaIdRoutePath:{type:Object},selectedView:{type:Number},budgetElement:{type:Object},votePublicKey:{type:String},budgetBallotItems:Array,wide:Boolean,popupWindow:Object,favoriteItem:{type:Object},oldFavoriteItem:Object,showMap:Boolean,leastExpensiveItemPrice:{type:Number,value:0}}}static get styles(){return[OavAreaBallotStyles]}render(){return html$1`${this.area?html$1`
        <div class="topContainer layout vertical">
          <div class="layout horizontal center-center tabsContainer">
            <paper-tabs id="tabs" selected="${this.selectedView}" @selected-changed="${this._selectedChanged}">
              <paper-tab>
                <div ?hidden="${!this.wide}">${this.area.name}</div>
                <div ?hidden="${this.wide}" class="layout vertical center-center">
                  <div>${this.localize("items_list")}</div>
                </div>
              </paper-tab>
              <paper-tab ?hidden="${this.configFromServer.client_config.hideLocation}">${this.localize("items_on_map")}</paper-tab>
            </paper-tabs>
          </div>

          ${this.budgetBallotItems?html$1`
              <div id="itemContainer" class="layout horizontal center-center flex wrap" ?hidden="${1===this.selectedView}">
                ${this.budgetBallotItems.map((item,index)=>html$1`
                    <oav-area-ballot-item
                      .name="${item.id}"
                      class="ballotAreaItem"
                      .configFromServer="${this.configFromServer}"
                      .language="${this.language}"
                      .budgetElement="${this.budgetElement}"
                      .item="${item}">
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
    `}updated(changedProps){super.updated(changedProps);if(changedProps.has("areaIdRoutePath")){if(this.areaIdRoutePath){if("completePostingOfVoteAfterRedirect"===this.areaIdRoutePath){this.completeIfAuthenticatedVote()}else{this.areaId=this.areaIdRoutePath}}}if(changedProps.has("areaId")){this.loadArea();this.showMap=!1}if(changedProps.has("selectedView")){if(0===this.selectedView){this.activity("click","ideasTab")}else if(1==this.selectedView){this.showMap=!0;this.activity("click","mapTab")}}if(changedProps.has("favoriteItem")){this.oldFavoriteItem=changedProps.get("favoriteItem");if(!this.favoriteItem&&this.oldFavoriteItem){this.fire("oav-hide-favorite-item")}}}constructor(){super();this.showMap=!1}connectedCallback(){super.connectedCallback();this.reset();window.appBallot=this;this.fire("oav-set-ballot-element",this)}firstUpdated(){this._setupListeners();installMediaQueryWatcher(`(min-width: 1024px)`,matches=>{this.wide=matches})}disconnectedCallback(){this._removeListeners()}loadArea(){this.oldFavoriteItem=null;this.favoriteItem=null;if(this.areaId){this.reset();this.fire("ak-clear-area");fetch("/votes/get_ballot?area_id="+this.areaId+"&locale="+this.language,{credentials:"same-origin"}).then(res=>res.json()).then(response=>{this.area=response.area;this.budgetBallotItems=this._setupLocationsAndTranslation(response.budget_ballot_items);this.fire("oav-set-title",this.localize("ballot_area_name","area_name",this.area.name));this.fire("oav-set-area",{areaName:this.area.name,totalBudget:this.area.budget_amount});setTimeout(()=>{this.$$("#tabs").shadowRoot.getElementById("selectionBar").style.setProperty("border-bottom","5px solid var(--paper-tabs-selection-bar-color)")})}).catch(error=>{this.fire("ak-error",error);console.error("Error:",error)})}}_setupListeners(){this.addEventListener("oav-toggle-item-in-budget",this._toggleItemInBudget);this.addEventListener("oav-set-favorite-item-in-budget",this._toggleFavoriteItem);this.addEventListener("oav-submit-vote",this._postVoteToServer);this.addEventListener("oav-item-selected-in-budget",this._itemSelectedInBudget);this.addEventListener("oav-item-de-selected-from-budget",this._itemDeSelectedFromBudget)}_removeListeners(){this.removeEventListener("oav-toggle-item-in-budget",this._toggleItemInBudget);this.removeEventListener("oav-set-favorite-item-in-budget",this._toggleFavoriteItem);this.removeEventListener("oav-submit-vote",this._postVoteToServer);this.removeEventListener("oav-item-selected-in-budget",this._itemSelectedInBudget);this.removeEventListener("oav-item-de-selected-from-budget",this._itemDeSelectedFromBudget)}reset(){if(this.budgetElement){this.budgetElement.reset()}this._resetBallotItems();this.budgetBallotItems=null;this.area=null;this.favoriteItem=null;this.selectedView=0;this.fire("oav-set-area",{areaName:null,totalBudget:null})}_selectedChanged(event){this.selectedView=parseInt(event.detail.value)}_scrollItemIntoView(itemId){var iOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,isIE11=/Trident.*rv[ :]*11\./.test(navigator.userAgent),items=this.shadowRoot.querySelectorAll("oav-area-ballot-item");items.forEach(function(item){if(item.name==itemId){if(iOS||isIE11){item.scrollIntoView(!1)}else{item.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}if(this.wide){item.animate([{transform:"translateX(-3px)",easing:"ease-in"},{transform:"translateX(3px)",easing:"ease-out"},{transform:"translateX(-5px)",easing:"ease-in"},{transform:"translateX(5px)",easing:"ease-out"},{transform:"translateX(-7px)",easing:"ease-in"},{transform:"translateX(7px)",easing:"ease-out"}],{duration:450,iterations:1})}}}.bind(this));const map=this.$$("#itemsMap");if(map){map.scrollIntoView(itemId)}}_resetBallotItems(){var listItems=this.$$("#itemContainer");if(listItems){for(var i=0,listItem;i<listItems.children.length;i++){listItem=listItems.children[i];if("domRepeat"!=listItem.id){listItem.setNotTooExpensive();listItem.removeFromBudget()}}}}_toggleFavoriteItem(event){var item=event.detail.item;if(item){this.activity("toggle","favorite")}else{this.activity("detoggle","favorite")}if(this.favoriteItem!=item){this.favoriteItem=item;for(var listItems=this.$$("#itemContainer"),i=0,listItem;i<listItems.children.length;i++){listItem=listItems.children[i];if("domRepeat"!=listItem.id){listItem.resetFromBudget()}}}else{console.warn("Trying to set item as favorite a second time")}}_toggleItemInBudget(event){this.budgetElement.toggleBudgetItem(event.detail.item)}_itemSelectedInBudget(event){for(var listItems=this.$$("#itemContainer"),i=0,listItem;i<listItems.children.length;i++){listItem=listItems.children[i];if("domRepeat"!=listItem.id&&listItem.item.id==event.detail.itemId){listItem.setInBudget();const map=this.$$("#itemsMap");if(map)map.setItemInBudget(listItem.item)}}this._setStateOfRemainingItems()}_itemDeSelectedFromBudget(event){for(var listItems=this.$$("#itemContainer"),i=0,listItem;i<listItems.children.length;i++){listItem=listItems.children[i];if("domRepeat"!=listItem.id&&listItem.item.id==event.detail.itemId){if(this.favoriteItem==listItem.item){this.favoriteItem=null}listItem.removeFromBudget();const map=this.$$("#itemsMap");if(map)map.removeFromBudget(listItem.item);this.fire("oav-reset-favorite-icon-position")}}this._setStateOfRemainingItems()}_setStateOfRemainingItems(){for(var budgetLeft=this.budgetElement.totalBudget-this.budgetElement.selectedBudget,listItems=this.$$("#itemContainer"),i=0,listItem;i<listItems.children.length;i++){listItem=listItems.children[i];if("domRepeat"!=listItem.id&&!listItem.selectedInBudget){if(listItem.item.price<=budgetLeft){listItem.setNotTooExpensive()}else{listItem.setTooExpensive()}}}const map=this.$$("#itemsMap");if(map)map.checkIfSelectedItemToExpensive(budgetLeft)}_postVoteToServer(){if(this.budgetElement.selectedItems&&0<this.budgetElement.selectedItems.length){this.completePostingOfVote(this._createEncryptedVotes())}else{this.fire("oav-error",this.localize("error_no_items_selected"));console.error("error_no_items_selected")}}_createEncryptedVotes(){var selectedItemIds=this.budgetElement.selectedItems.map(item=>{return item.id});return encryptVote(this.votePublicKey,{selectedItemIds:selectedItemIds,favoriteItemId:this.favoriteItem?this.favoriteItem.id:null})}completePostingOfVote(encryptedVotes){if(this.area&&this.area.id){if(encryptedVotes){return fetch("/votes/post_vote",{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({encrypted_vote:encryptedVotes,area_id:this.area.id})}).then(response=>response.json()).then(response=>{if(response&&!0===response.vote_ok){if(!0===this.configFromServer.client_config.insecureEmailLoginEnabled){this.fire("oav-insecure-email-login",{areaId:this.area.id,areaName:this.area.name,onLoginFunction:this._setVotingCompleted.bind(this)})}else{window.location=this._getSamlUrlWithLanguage()}}else{this.fire("oav-error",this.localize("error_could_not_post_vote"))}})}else{this.fire("oav-error",this.localize("error_encryption"));console.error("No encrypted votes!")}}else{this.fire("oav-error",this.localize("error_could_not_post_vote"));console.warn("Not sending as no area id")}}_setVotingCompleted(){this.reset();this.areaId=null;const path="/voting-completed";window.history.pushState({},null,path);this.fire("location-changed",path);var dialog=document.querySelector("oav-app").getDialog("authDialog");if(dialog)dialog.close()}completeIfAuthenticatedVote(){fetch("/votes/is_vote_authenticated",{credentials:"same-origin"}).then(response=>response.json()).then(response=>{if(response&&!0===response.vote_ok){this._setVotingCompleted();this.activity("completed","voting")}else{this.fire("oav-error",this.localize("error_could_not_post_vote"))}})}_getSamlUrlWithLanguage(){var url=this.configFromServer.auth_url;if("en"==this.language){url+="&siteLanguage=en"}else if("pl"==this.language){url+="&siteLanguage=pl"}return url}shuffle(a){for(let i=a.length-1;0<i;i--){const j=_Mathfloor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}_setupLocationsAndTranslation(budgetBallotItems){for(var arrayLength=budgetBallotItems.length,i=0;i<arrayLength;i++){if(budgetBallotItems[i].locations&&""!=budgetBallotItems[i].locations){var hashArray=[],locationsArray=budgetBallotItems[i].locations.replace(" ","").split(","),counter=0;while(counter<locationsArray.length){hashArray.push({latitude:locationsArray[counter],longitude:locationsArray[counter+1]});counter+=2}budgetBallotItems[i].locations=hashArray}else{budgetBallotItems[i].locations=[]}if(this.leastExpensiveItemPrice===void 0||budgetBallotItems[i].price<this.leastExpensiveItemPrice){this.leastExpensiveItemPrice=budgetBallotItems[i].price}}return this.shuffle(budgetBallotItems)}}window.customElements.define("oav-area-ballot",OavAreaBallot);const OavAreaBudgetStyles=css`
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
    background-color: var(--app-voting-button-background, var(--app-accent-color, #f00));
    color: var(--app-budget-vote-button-color, #FFF);
    margin: 8px;
    margin-right: 4px;
    font-family: var(--app-vote-button-font-family, Roboto)
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
    margin-top: 2px;
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
    margin-top: 4px;
  }

  @media (max-width: 1024px) {
    .demoButton {
      margin-top: -4px;
    }
  }

  .onOfferText {
    color: var(--app-accent-color);
    margin-right: 12px;
    font-weight: bold;
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

  .closeButton {
    width: 32px;
    height: 32px;
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
`;_exports.OavAreaBudgetStyles=OavAreaBudgetStyles;var oavAreaBudgetStyles={OavAreaBudgetStyles:OavAreaBudgetStyles};_exports.$oavAreaBudgetStyles=oavAreaBudgetStyles;const OavFlexLayout=css`
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
`;_exports.OavFlexLayout=OavFlexLayout;var oavFlexLayout={OavFlexLayout:OavFlexLayout};_exports.$oavFlexLayout=oavFlexLayout;class OavAreaBudget extends OavBaseElement{static get properties(){return{selectedItems:{type:Array,value:[],notify:!0},toastCounter:{type:Number,value:0},noSelectedItems:{type:Boolean,value:!0},areaName:{type:String,value:null},selectedBudget:{type:Number,value:0},totalBudget:{type:Number},budgetLeft:{type:Number},selectedBudgetIsOne:{type:Boolean},votesWidth:{type:Number},wide:{type:Boolean},mediumWide:{type:Boolean},mini:{type:Boolean},orientationPortrait:{type:Boolean},orientationLandscape:{type:Boolean},currentBallot:Object,budgetHeaderImage:{type:String},showExit:Boolean,configFromServer:Object}}connectedCallback(){super.connectedCallback();this.fire("oav-set-budget-element",this)}updated(changedProps){super.updated(changedProps);if(changedProps.has("selectedBudget")){this.selectedBudgetIsOne=this.selectedBudget&&1===this.selectedBudget}if(changedProps.has("selectedItems")){this._selectedItemsChanged()}if((changedProps.has("selectedBudget")||changedProps.has("totalBudget"))&&this.totalBudget!=void 0&&this.selectedBudget!=void 0){var budgetLeft=this.totalBudget-this.selectedBudget;if(0<budgetLeft){this.budgetLeft=budgetLeft}else{this.budgetLeft=0}if(this.totalBudget!=this.budgetLeft&&(1>this.toastCounter||this.budgetLeft<this.currentBallot.leastExpensiveItemPrice)){this.fire("oav-open-favorite-toast");this.toastCounter+=1}}}static get styles(){return[OavAreaBudgetStyles,OavShadowStyles,OavFlexLayout]}render(){return html$1`
      <div class="budgetContainer center-center" ?wide="${this.wide}">
        <div class="budgetMaterial shadow-elevation-24dp" ?wide="${this.wide}">
          <div class="info layout horizontal headerContainer" ?wide="${this.wide}">
            <span ?hidden="${!this.showExit}">
              <paper-icon-button alt="${this.localize("close")}" ?hidden="${this.wide}" class="mobileActionIcons closeButton" icon="closeExit" @click="${this._exit}"></paper-icon-button>
            </span>
            <img ?hidden="${!this.mediumWide}" sizing="cover" class="headerLogo" src="${this.budgetHeaderImage}"/>
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
              <div id="budgetLeftInfo" ?wide="${this.wide}" ?hidden="${!this.currentBallot||this.budgetLeft==void 0}">
                ${this.localize("budget_left_text","budget_left",this.formatNumber(this.budgetLeft,this.configFromServer.client_config.currencySymbol))}
              </div>
              </div>
            </div>
            <paper-icon-button ?hidden="${this.wide}" class="mobileActionIcons" alt="${this.localize("help")}" icon="help-outline" @click="${this._help}"></paper-icon-button>
            <div>
              <paper-button id="votingButton" raised class="voteButton" @click="${this._submitVote}">${this.localize("vote")}</paper-button>
            </div>
          </div>
          <div id="votes" class="layout horizontal" ?wide="${this.wide}">
            <div id="noItems" class="layout horizontal noItemsInfo" ?wide="${this.wide}" ?hidden="${!this.noSelectedItems}">
              ${this.totalBudget?html$1`
                <div class="layout horizontal center-center">
                  <div ?hidden="${!this.wide}" class="onOfferText">
                    ${this.localize("budget_empty_info_1","amount",this.formatNumber(this.budgetLeft,this.configFromServer.client_config.currencySymbol))}
                  </div>
                  <div>${this.localize("budget_empty_info_2")}</div>
                  <paper-fab aria-label="${this.localize("add_to_budget")}" mini id="x" elevation="5" disabled class="demoButton" icon="add"></paper-fab>
                  <div>${this.localize("budget_empty_info_3")}</div>
                </div>
              `:""}
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){this.reset();installMediaQueryWatcher(`(min-width: 1024px)`,matches=>{if(matches)this.wide=!0;else this.wide=!1;this._resetWidth()});installMediaQueryWatcher(`(orientation: portrait)`,matches=>{if(matches)this.orientationPortrait=!0;else this.orientationPortrait=!1;this._resetWidth()});installMediaQueryWatcher(`(orientation: landscape)`,matches=>{if(matches)this.orientationLandscape=!0;else this.orientationLandscape=!1;this._resetWidth()});installMediaQueryWatcher(`(min-width: 640px)`,matches=>{if(matches)this.mediumWide=!0;else this.mediumWide=!1;this._resetWidth()});installMediaQueryWatcher(`(max-width: 340px)`,matches=>{if(matches)this.mini=!0;else this.mini=!1;this._resetWidth()})}constructor(){super();this.toastCounter=0}_exit(){this.fire("oav-exit")}_help(){this.fire("oav-open-help")}_resetWidth(){if(this.wide){this.votesWidth=940}else{this.votesWidth=window.innerWidth}this._resetBudgetDiv();this.selectedItems.forEach(function(item){this._addItemToDiv(item)}.bind(this))}_millionWord(){if(this.wide){return this.localize("million")}else{return this.localize("million_short")}}_submitVote(){this.activity("click","submitVote");this.currentBallot.fire("oav-submit-vote")}_selectedItemsChanged(){if(this.selectedItems&&0<this.selectedItems.length){this.noSelectedItems=!1;this.$$("#votingButton").disabled=!1}else{this.noSelectedItems=!0;this.$$("#votingButton").disabled=!0}}reset(){this._resetBudgetDiv();this.selectedItems=[];this.selectedBudget=0;this.budgetLeft=void 0;this.totalBudget=void 0;this.budgetHeaderImage=this.configFromServer.client_config.ballotBudgetLogo}_resetBudgetDiv(){let votes=this.$$("#votes");while(votes.lastChild&&"noItems"!=votes.lastChild.id&&"budgetLeftInfo"!=votes.lastChild.id){votes.removeChild(votes.lastChild)}}_removeItemFromArray(item){var newArray=[];this.selectedItems.forEach(function(i){if(i.id!=item.id){newArray.push(i)}});this.selectedItems=newArray}_addItemToDiv(item){var itemWidth=parseInt(this.votesWidth*(item.price/this.totalBudget));if(!this.wide){itemWidth-=1}var container=document.createElement("div");container.id="item_id_"+item.id;if(this.wide){container.style.height="100px"}else{container.style.height="81px"}container.style.width=itemWidth+"px";container.className="budgetBallotVote";container.backgroundColor="#F00";container.style.position="relative";var image=document.createElement("iron-image");image.src=item.image_url;image.setAttribute("sizing","cover");image.setAttribute("alt",item.name);image.setAttribute("title",item.name);image.setAttribute("style","cursor: pointer;");image.title=item.name;image.style.borderLeft="solid 1px";image.style.borderRight="solid 1px";image.style.borderColor="var(--app-budget-image-border-color, #ff6500)";if(this.wide){image.style.height="100px"}else{image.style.height="81px"}image.style.width=itemWidth+"px";container.appendChild(image);container.addEventListener("tap",function(){this.fire("oav-scroll-item-into-view",item.id)}.bind(this));this.$$("#votes").appendChild(container);var animation=container.animate([{transform:"translateX(-75px) scale(2)",easing:"ease-out"},{transform:"scale(1)",easing:"ease-out"}],{duration:600,iterations:1});this.$$("#budgetLeftInfo").animate([{transform:"scale(1)"},{transform:"scale(1.75)",easing:"ease-in-out"},{transform:"scale(1)",easing:"ease-out"}],{duration:820,iterations:1});if(this.configFromServer.client_config.shakeVotingButton){this.$$("#votingButton").animate([{transform:"translateX(-1px)",easing:"ease-in"},{transform:"translateX(1px)",easing:"ease-in"},{transform:"translateX(-2px)",easing:"ease-out"},{transform:"translateX(2px)",easing:"ease-out"},{transform:"translateX(-1px)",easing:"ease-in"},{transform:"translateX(1px)",easing:"ease-in"}],{duration:650,iterations:1})}}_removeItemFromDiv(item){var selectedItemDiv=this.$$("#item_id_"+item.id);selectedItemDiv.parentNode.removeChild(selectedItemDiv)}getItemLeftTop(item){var selectedItemDiv=this.$$("#item_id_"+item.id);if(selectedItemDiv){var buttonRect=selectedItemDiv.getBoundingClientRect(),left=(buttonRect.right-buttonRect.left)/2+buttonRect.left,top=(buttonRect.bottom-buttonRect.top)/2+buttonRect.top;if(this.wide){left=left-24;top=top-24}else{left=left-18;top=top-18}return{left:left,top:top}}else{console.error("Trying to get item that is not in the budget")}}toggleBudgetItem(item){this.activity("toggle","vote");if(-1<this.selectedItems.indexOf(item)){this.activity("remove","vote");this._removeItemFromArray(item);this._removeItemFromDiv(item);this.selectedItems=[...this.selectedItems];this.selectedBudget=this.selectedBudget-item.price;this.currentBallot.fire("oav-item-de-selected-from-budget",{itemId:item.id})}else{if(this.selectedBudget+item.price<=this.totalBudget){this.activity("add","vote");this.selectedItems.push(item);this.selectedItems=[...this.selectedItems];this.selectedBudget=this.selectedBudget+item.price;this._addItemToDiv(item);this.currentBallot.fire("oav-item-selected-in-budget",{itemId:item.id})}else{this.currentBallot.fire("oav-error",this.localize("error_does_not_fit_in_budget"))}}}toggleFavoriteItem(item){this.activity("toggle","favorite");if(this.favoriteItem!=item){if(item){this.activity("add","favorite")}else{this.activity("remove","favorite")}this.favoriteItem=item}}_removeItem(itemId){this.selectedItems.forEach(function(item){if(item.id==itemId){this.toggleBudgetItem(item)}}.bind(this))}convertDots(num){return num.replace(".",",")}}window.customElements.define("oav-area-budget",OavAreaBudget);const OavAreaVotingCompletedStyles=css`
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
`;_exports.OavAreaVotingCompletedStyles=OavAreaVotingCompletedStyles;var oavVotingCompletedStyles={OavAreaVotingCompletedStyles:OavAreaVotingCompletedStyles};_exports.$oavVotingCompletedStyles=oavVotingCompletedStyles;class OavVotingCompleted extends PageViewElement{static get properties(){return{configFromServer:{type:Object}}}static get styles(){return[OavShadowStyles,OavFlexLayout,OavAreaVotingCompletedStyles]}render(){return html$1`
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
    `}}window.customElements.define("oav-voting-completed",OavVotingCompleted);class OavApp extends OavBaseElement{static get properties(){return{appTitle:{type:String},_page:{type:String},_drawerOpened:{type:Boolean},_snackbarOpened:{type:Boolean},_offline:{type:Boolean},_subPath:{type:String},favoriteIcon:{type:String,value:"star"},dialogHeading:{type:String,value:""},activityHost:{type:String,value:""},setupDefaults:{type:Boolean,value:!1},votePublicKey:{type:String},configFromServer:{type:Object,value:null},requestInProgress:{type:Boolean,value:!1},title:{type:String},showExit:{type:Boolean,value:!1},hideBudget:{type:Boolean,value:!0},areaName:String,budgetElement:Object,currentBallot:Object,totalBudget:Number,haveSetLanguage:{type:Boolean,value:!1},haveOpenedWelcome:{type:Boolean,value:!1},resizeTimer:Object,postsHost:String,welcomeHeading:String,welcomeText:String,helpContent:String,wideAndBallot:Boolean,errorText:String,languageOveride:String}}static get styles(){return[OavAppStyles,OavFlexLayout]}render(){let errorDialog=html$1`
      <paper-dialog id="errorDialog">
        <p id="errorText">${this.errorText}</p>
        <div class="buttons">
          <paper-button
            class="generalButton"
            dialog-confirm
            autofocus
            @click="${this.resetErrorText}"
            >OK</paper-button
          >
        </div>
      </paper-dialog>
    `;return html$1`${this.configFromServer?html$1`
        ${errorDialog}

        ${!0===this.configFromServer.client_config.insecureEmailLoginEnabled?html$1`
                <oav-insecure-email-login
                  .language="${this.language}"
                  .configFromServer="${this.configFromServer}"
                  id="insecureEmailLogin"
                >
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
                <img aria-label="welcome/velkomin" class="welcomeLogo" src="${this.configFromServer.client_config.welcomeLogo||this.configFromServer.client_config.ballotBudgetLogo}"></img>
              </div>
              <div class="vertical center-center welcomeDialog">
                <div class="heading">${this.welcomeHeading}</div>
                  <div class="horizontal welcomeText" ?hidden="${!this.welcomeText}"
                    style="text-align: left;"
                  >
                    <span hidden>${this.welcomeText}</span>
                    <div class="layout vertical">
                      <div>
                        <ul style="padding-bottom: 4px">
                          <li style="padding-bottom: 8px">Íbúar Grafarvogs hafa 109 milljónir til ráðstöfunar</li>
                          <li style="padding-bottom: 8px">Ekki þarf að ráðstafa öllu fjármagninu</li>
                          <li style="padding-bottom: 8px">Gefðu uppáhalds hugmyndinni þinni stjörnu og hún fær tvöfalt vægi</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div style="text-align: center;margin-left:auto;margin-right:auto;font-size:20px;">
                        <div>Takk fyrir þáttökuna</div>
                   </div>

                  <div class="langSelectionText">
                  ${1<Object.keys(this.configFromServer.client_config.localeSetup).length?html$1`
                          ${this.configFromServer.client_config.localeSetup.map(lang=>{return html$1`
                                <span
                                  class="langSelect"
                                  data-locale="${lang.locale}"
                                  ?is-selected="${lang.locale===this.language}"
                                  @click="${this.selectLocale}"
                                  >${lang.language}</span
                                >
                              `})}
                        `:html$1``}
                 </div>
                <div class="buttons center-center">
                  <paper-button raised class="continueButton" @click="${this.closeWelcome}" dialog-dismiss autofocus>${this.localize("start")}</paper-button>
                </div>
              </div>
            </div>
          </paper-dialog-scrollable>
        </paper-dialog>

        <app-header fixed effects="waterfall" ?wide-and-ballot="${this.wideAndBallot}" ?hidden="${"area-ballot"!==this._page&&"select-voting-area"!==this._page}">
          <app-toolbar class="toolbar-top">
            <div ?hidden="${!this.showExit||!this.wide}" class="layout horizontal exitIconInBudget">
              <paper-icon-button class="closeButton" alt="${this.localize("close")}" icon="closeExit" @click="${this._exit}"></paper-icon-button>
            </div>
            <div class="helpIconInBudget" ?select-voting-area="${"select-voting-area"==this._page}">
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
          ${"select-voting-area"===this._page&&this.configFromServer?html$1`
                  <oav-select-voting-area
                    id="selectVotingArea"
                    .language="${this.language}"
                    .wide="${this.wide}"
                    .configFromServer="${this.configFromServer}"
                    ?active="${"select-voting-area"===this._page}"
                  >
                  </oav-select-voting-area>
                `:html$1``}
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
                    .host="${this.postsHost}"
                  >
                  </yp-post>
                `:html$1``}
          <oav-view404 class="page" ?active="${"view404"===this._page}"></oav-view404>
        </main>

        <paper-toast
          horizontal-align="center"
          ?wide="${this.wide}" duration="9500" .text="${this.localize("favorite_info")}" id="toast" @click="${this._closeToast}">
        </paper-toast>>
      `:html$1`${errorDialog}<paper-spinner
            active
            class="largeSpinner"
          ></paper-spinner>`} `}constructor(){window.__localizationCache={messages:{}};super();setPassiveTouchGestures(!0);this._boot();var name="locale".replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),regex=new RegExp("[\\?&]"+name+"=([^&#]*)"),results=regex.exec(location.search),language=null===results?null:decodeURIComponent(results[1].replace(/\+/g," "));if(language){this.language=language;localStorage.setItem("languageOverride",language)}}_setupCustomCss(config){if(config.cssProperties){config.cssProperties.forEach(property=>{const propName=Object.keys(property)[0],values=Object.keys(property).map(function(e){return property[e]}),propValue=values[0];this.shadowRoot.host.style.setProperty(propName,propValue);if(window.ShadyCSS){window.ShadyCSS.styleSubtree(this,property)}})}}setLocale(event){this.language=event.detail;localStorage.setItem("languageOverride",this.language)}selectLocale(event){if(this.language!=event.target.dataset.locale){this.language=event.target.dataset.locale;localStorage.setItem("languageOverride",this.language);if("area-ballot"===this._page&&this.currentBallot){setTimeout(()=>{this.currentBallot.loadArea()},10)}}}_boot(){fetch("/votes/boot",{credentials:"same-origin"}).then(res=>res.json()).then(response=>{this.requestInProgress=!1;this.language="en";this.votePublicKey=response.public_key;this._setupCustomCss(response.config.client_config);window.localeResources=response.config.client_config.locales;this.configFromServer=response.config;this.configFromServer.areas=response.areas;this.configFromServer.area_voter_count=response.area_voter_count;this.configFromServer.total_voter_count=response.total_voter_count;if(this.configFromServer.client_config.defaultLanguage){if(localStorage.getItem("languageOverride")){this.language=localStorage.getItem("languageOverride")}else{this.language=this.configFromServer.client_config.defaultLanguage}this.setupLocaleTexts()}new Promise((res,rej)=>_require.default(["./oav-select-voting-area.js"],res,rej)).then(bundle=>bundle&&bundle.$oavSelectVotingArea||{});this.updateAppMeta(this.configFromServer.client_config.shareMetaData);if(this.configFromServer.client_config.pageTitle){document.title=this.configFromServer.client_config.pageTitle}if(this.configFromServer.client_config.welcomeLocales&&this.configFromServer.client_config.ballotBudgetLogo){const tempImg=new Image;tempImg.src=this.configFromServer.client_config.ballotBudgetLogo}ga("create",this.configFromServer.client_config.googleAnalyticsId,"auto");this.postsHost="https://yrpri.org";this.favoriteIcon="heart";this.oneBallotId=this.configFromServer.client_config.oneBallotId;if(this.configFromServer.client_config.favoriteIcon){this.favoriteIcon=this.configFromServer.client_config.favoriteIcon}if(!(-1<location.href.indexOf("completePostingOfVoteAfterRedirect"))){if("area-ballot"!==this._page){let path;if(this.oneBallotId){path="/area-ballot/"+this.oneBallotId}else{path="/select-voting-area"}window.history.pushState({},null,path);this.fire("location-changed",path)}this.openWelcomeIfNeeded()}window.language=this.language;window.localize=this.localize;if(this.configFromServer&&this.configFromServer.client_config.selectVotingAreaDesktopHTML&&this._page&&"select-voting-area"!=this._page){this.showExit=!0}else{this.showExit=!1}if(!0===this.configFromServer.client_config.insecureEmailLoginEnabled){new Promise((res,rej)=>_require.default(["./oav-insecure-email-login.js"],res,rej)).then(bundle=>bundle&&bundle.$oavInsecureEmailLogin||{})}}).catch(error=>{console.error("Error:",error);this.fire("oav-error","unknown_error")})}openWelcomeIfNeeded(){if(this.configFromServer.client_config.welcomeLocales&&"select-voting-area"!==this._page){setTimeout(()=>{if(!localStorage.getItem("haveClsosfdedWelcome")){this.$$("#welcomeDialog").open()}})}}disconnectedCallback(){this._removeListeners()}b64DecodeUnicode(str){return decodeURIComponent(atob(str).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join(""))}_setupListeners(){this.addEventListener("app-resources-loaded",this._transinsecationLoaded);this.addEventListener("oav-set-title",this._setTitle);this.addEventListener("oav-error",this._errorHandler);this.addEventListener("oav-set-area",this._setArea);this.addEventListener("oav-clear-area",this._clearArea);this.addEventListener("oav-set-favorite-item-in-budget",this._toggleFavoriteItem);this.addEventListener("oav-hide-favorite-item",this._hideFavoriteItem);this.addEventListener("oav-reset-favorite-icon-position",this.resetFavoriteIconPosition);this.addEventListener("oav-open-favorite-toast",this._openFavoriteToast);this.addEventListener("oav-exit",this._exit);this.addEventListener("oav-open-help",this._help);this.addEventListener("oav-set-locale",this.setLocale);this.addEventListener("oav-set-ballot-element",this._setBallotElement);this.addEventListener("oav-set-budget-element",this._setBudgetElement);this.addEventListener("oav-scroll-item-into-view",this._scrollItemIntoView);this.addEventListener("oav-insecure-email-login",this._insecureEmailLogin);this.addEventListener("location-changed",this._locationChanged);window.addEventListener("resize",this.resetSizeWithDelay.bind(this))}_setBallotElement(event){this.currentBallot=event.detail}_setBudgetElement(event){this.budgetElement=event.detail}_removeListeners(){this.removeEventListener("app-resources-loaded",this._translationLoaded);this.removeEventListener("oav-set-title",this._setTitle);this.removeEventListener("oav-error",this._errorHandler);this.removeEventListener("oav-set-area",this._setArea);this.removeEventListener("oav-clear-area",this._clearArea);this.removeEventListener("oav-set-area",this._setArea);this.removeEventListener("location-changed",this._locationChanged);this.removeEventListener("oav-open-favorite-toast",this._openFavoriteToast);this.removeEventListener("oav-set-favorite-item-in-budget",this._toggleFavoriteItem);this.removeEventListener("oav-hide-favorite-item",this._hideFavoriteItem);this.removeEventListener("oav-reset-favorite-icon-position",this.resetFavoriteIconPosition);this.removeEventListener("oav-exit",this._exit);this.removeEventListener("oav-set-locale",this.setLocale);this.removeEventListener("oav-set-ballot-element",this._setBallotElement);this.removeEventListener("oav-set-budget-element",this._setBudgetElement);this.removeEventListener("oav-open-help",this._help);this.removeEventListener("oav-scroll-item-into-view",this._scrollItemIntoView);window.removeEventListener("resize",this.resetSizeWithDelay);this.removeEventListener("oav-insecure-email-login",this._insecureEmailLogin)}_closeToast(){const toast=this.$$("#toast");toast.close()}_openFavoriteToast(){const toast=this.$$("#toast");toast.open()}_scrollItemIntoView(event){this.$$("#budgetBallot")._scrollItemIntoView(event.detail)}_hideFavoriteItem(){this.$$("#favoriteIcon").hidden=!0}_insecureEmailLogin(event){this.$$("#insecureEmailLogin").open(event.detail.areaId,event.detail.areaName,event.detail.onLoginFunction)}_toggleFavoriteItem(event){setTimeout(()=>{this._closeToast()},1e3);const detail=event.detail;if(detail.item){setTimeout(()=>{var transformLeft,transformTop;if(!0===this.$$("#favoriteIcon").hidden){this.$$("#favoriteIcon").style.position="absolute";this.$$("#favoriteIcon").style.left=detail.orgAnimPos.left+"px";this.$$("#favoriteIcon").style.top=detail.orgAnimPos.top+"px";transformLeft=detail.orgAnimPos.left-detail.budgetAnimPos.left;transformTop=detail.orgAnimPos.top-detail.budgetAnimPos.top}else{var oldBudgetAnimPos=this.currentBallot.oldFavoriteItem?this.budgetElement.getItemLeftTop(this.currentBallot.oldFavoriteItem):null;if(oldBudgetAnimPos){transformLeft=oldBudgetAnimPos.left-detail.budgetAnimPos.left;transformTop=oldBudgetAnimPos.top-detail.budgetAnimPos.top}else{console.warn("Can't find old item");transformLeft=detail.orgAnimPos.left-detail.budgetAnimPos.left;transformTop=detail.orgAnimPos.top-detail.budgetAnimPos.top}}this.$$("#favoriteIcon").hidden=!1;this.$$("#favoriteIcon").style.position="absolute";this.$$("#favoriteIcon").style.left=detail.budgetAnimPos.left+"px";this.$$("#favoriteIcon").style.top=detail.budgetAnimPos.top+"px";var animation=this.$$("#favoriteIcon").animate([{transform:"translateY("+transformTop+"px) translateX("+transformLeft+"px)",easing:"ease-out"},{transform:"scale(3)",easing:"ease-in"},{transform:"scale(1)",easing:"ease-out"}],{duration:720,iterations:1});animation.onfinish=function(){this.$$("#favoriteIcon").style.position="absolute";this.$$("#favoriteIcon").style.left=detail.budgetAnimPos.left+"px";this.$$("#favoriteIcon").style.top=detail.budgetAnimPos.top+"px"}.bind(this)})}}resetFavoriteIconPosition(){if(this.$$("#budgetBallot").favoriteItem){const pos=this.$$("#budget").getItemLeftTop(this.$$("#budgetBallot").favoriteItem);if(pos){this.$$("#favoriteIcon").style.left=pos.left+"px";this.$$("#favoriteIcon").style.top=pos.top+"px"}else{console.error("Can't find position of favorite item")}}}_help(){this.$$("#helpDialog").open()}_setArea(event){this.areaName=event.detail.areaName;this.totalBudget=event.detail.totalBudget}_clearArea(){this.areaName=null;this.totalBudget=null}_errorHandler(event){this.errorText=this.localize(event.detail);this.$$("#errorDialog").open()}_exit(){if("post"===this._page&&window.appLastArea){window.history.pushState({},null,window.appLastArea);this.fire("location-changed",window.appLastArea);window.appLastArea=null}else{window.history.pushState({},null,"/");if(this.configFromServer&&this.configFromServer.client_config.selectVotingAreaDesktopHTML){this.fire("location-changed","/select-voting-area")}else{window.location="/"}}}_setTitle(event,detail){}resetSizeWithDelay(){clearTimeout(this.resizeTimer);this.resizeTimer=setTimeout(()=>{this.resetFavoriteIconPosition()},250)}_translationLoaded(){if(!this.haveSetLanguage){this.haveSetLanguage=!0;if("undefined"!==typeof Storage){var selectedLanguage=localStorage.getItem("selectedLanguage");if(selectedLanguage){this.fire("iron-signal",{name:"set-language",data:selectedLanguage})}}}}closeWelcome(){localStorage.setItem("haveClosedWelcome",!0)}getDialog(name){return this.$$("#"+name)}firstUpdated(){this._setupListeners();installRouter(location=>this._locationChanged(location));installOfflineWatcher(offline=>this._offlineChanged(offline));installMediaQueryWatcher(`(min-width: 460px)`,matches=>this._layoutChanged(matches));installMediaQueryWatcher(`(min-width: 1024px)`,matches=>{this.wide=matches;this.wideAndBallot=this.wide&&"area-ballot"===this._page})}getHelpContent(){if(this.configFromServer.client_config.helpPageLocales[this.language]){return this.b64DecodeUnicode(this.configFromServer.client_config.helpPageLocales[this.language].b64text)}else if(this.configFromServer.client_config.helpPageLocales.en){return this.b64DecodeUnicode(this.configFromServer.client_config.helpPageLocales.en.b64text)}else{return"No help page found for selected language!"}}getWelcomeHeading(){if(this.configFromServer.client_config.welcomeLocales[this.language]){return this.configFromServer.client_config.welcomeLocales[this.language].heading}else if(this.configFromServer.client_config.welcomeLocales.en){return this.configFromServer.client_config.welcomeLocales.en.heading}else{return"No heading found"}}getWelcomeText(){if(this.configFromServer.client_config.welcomeLocales[this.language]){return this.configFromServer.client_config.welcomeLocales[this.language].text}else if(this.configFromServer.client_config.welcomeLocales.en){return this.configFromServer.client_config.welcomeLocales.en.text}else{return"No heading found"}}setupLocaleTexts(){if(this.configFromServer.client_config.welcomeLocales){this.welcomeHeading=this.getWelcomeHeading();this.welcomeText=this.getWelcomeText()}this.helpContent=this.getHelpContent()}updateAppMeta(meta){document.title=meta.title;updateMetadata({title:meta.title,description:meta.description,image:meta.shareImageUrl});var link=document.querySelector("link[rel*='icon']")||document.createElement("link");link.type="image/x-icon";link.rel="shortcut icon";link.href=meta.faviconUrl;document.getElementsByTagName("head")[0].appendChild(link)}updated(changedProps){if(changedProps.has("language")){this.setupLocaleTexts()}if(changedProps.has("_page")){const pageTitle=this.appTitle+" - "+this._page;if(this.configFromServer&&this.configFromServer.client_config.selectVotingAreaDesktopHTML&&this._page&&"select-voting-area"!=this._page){this.showExit=!0}else{this.showExit=!1}const page=this._page,oldPage=changedProps.get("_page");if(page&&"area-ballot"==page){this.hideBudget=!1}else{this.hideBudget=!0}if("post"==oldPage&&this.$$("#post")){this.$$("#post").reset()}if("area-ballot"==page&&this.$$("#budgetBallot")&&this.$$("#budgetBallot").refreshList){this.$$("#budgetBallot").refreshList()}if("area-ballot"==page){if(!this.haveOpenedWelcome){this.openWelcomeIfNeeded();this.haveOpenedWelcome=!0}}if("area-ballot"==oldPage&&this.$$("#budgetBallot")&&"post"!=page){this.$$("#budgetBallot").selectedView=0}if("area-ballot"==oldPage&&this.$$("#budgetBallot")){this._hideFavoriteItem()}setTimeout(()=>{if("area-ballot"==page&&this.currentBallot&&this.currentBallot.favoriteItem){this.$$("#favoriteIcon").hidden=!1;this.resetFavoriteIconPosition()}});if("voting-completed"==page&&"area-ballot"!=oldPage){window.location="/"}if("voting-completed"==oldPage&&this.$$("#selectVotingArea")){this.$$("#selectVotingArea").refreshAreaCounters()}if(page&&"function"==typeof ga){ga("send","pageview",{page:location.pathname+location.search+location.hash})}this.wideAndBallot=this.wide&&"area-ballot"===page}}_layoutChanged(isWideLayout){}_offlineChanged(offline){const previousOffline=this._offline;this._offline=offline;if(previousOffline===void 0){return}clearTimeout(this.__snackbarTimer);this._snackbarOpened=!0;this.__snackbarTimer=setTimeout(()=>{this._snackbarOpened=!1},3e3)}_locationChanged(location){if(location instanceof CustomEvent)location={pathname:location.detail};if("/"===location.pathname&&this.oneBallotId){const path="/area-ballot/"+this.oneBallotId;window.history.pushState({},null,path);location={pathname:path}}const path=window.decodeURIComponent(location.pathname),page="/"===path?"/":path.slice(1).split("/")[0];this._loadPage(page);if(path.slice(1).split("/")[1]){this._subPath=path.slice(1).split("/")[1]}}_loadPage(page){switch(page){case"post":new Promise((res,rej)=>_require.default(["./yp-post/yp-post.js"],res,rej)).then(bundle=>bundle&&bundle.$ypPost||{});break;case"area-ballot":case"voting-completed":case"select-voting-area":case"/":break;default:page="view404";new Promise((res,rej)=>_require.default(["./oav-view404.js"],res,rej)).then(bundle=>bundle&&bundle.$oavView404||{});}this._page=page}_menuButtonClicked(){this._updateDrawerState(!0)}_drawerOpenedChanged(e){this._updateDrawerState(e.target.opened)}}window.customElements.define("oav-app",OavApp)});