define(["./oav-app.js"],function(_oavApp){"use strict";function _templateObject6_17926c70bc1111ebaae5a7f0c74998d2(){var data=babelHelpers.taggedTemplateLiteral([""]);_templateObject6_17926c70bc1111ebaae5a7f0c74998d2=function _templateObject6_17926c70bc1111ebaae5a7f0c74998d2(){return data};return data}function _templateObject5_17926c70bc1111ebaae5a7f0c74998d2(){var data=babelHelpers.taggedTemplateLiteral(["",""]);_templateObject5_17926c70bc1111ebaae5a7f0c74998d2=function _templateObject5_17926c70bc1111ebaae5a7f0c74998d2(){return data};return data}function _templateObject4_17926c70bc1111ebaae5a7f0c74998d2(){var data=babelHelpers.taggedTemplateLiteral([""]);_templateObject4_17926c70bc1111ebaae5a7f0c74998d2=function _templateObject4_17926c70bc1111ebaae5a7f0c74998d2(){return data};return data}function _templateObject3_17926c70bc1111ebaae5a7f0c74998d2(){var data=babelHelpers.taggedTemplateLiteral(["",""]);_templateObject3_17926c70bc1111ebaae5a7f0c74998d2=function _templateObject3_17926c70bc1111ebaae5a7f0c74998d2(){return data};return data}function _templateObject2_17926c70bc1111ebaae5a7f0c74998d2(){var data=babelHelpers.taggedTemplateLiteral(["",""]);_templateObject2_17926c70bc1111ebaae5a7f0c74998d2=function _templateObject2_17926c70bc1111ebaae5a7f0c74998d2(){return data};return data}function _templateObject_17926c70bc1111ebaae5a7f0c74998d2(){var data=babelHelpers.taggedTemplateLiteral(["",""]);_templateObject_17926c70bc1111ebaae5a7f0c74998d2=function _templateObject_17926c70bc1111ebaae5a7f0c74998d2(){return data};return data}var OavSelectVotingArea=function(_PageViewElement){babelHelpers.inherits(OavSelectVotingArea,_PageViewElement);function OavSelectVotingArea(){babelHelpers.classCallCheck(this,OavSelectVotingArea);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(OavSelectVotingArea).apply(this,arguments))}babelHelpers.createClass(OavSelectVotingArea,[{key:"b64DecodeUnicode",value:function b64DecodeUnicode(str){return decodeURIComponent(atob(str).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join(""))}},{key:"render",value:function render(){if(this.hasLoadedCss){return(0,_oavApp.html$1)(_templateObject_17926c70bc1111ebaae5a7f0c74998d2(),this.wide?(0,_oavApp.html$1)(_templateObject2_17926c70bc1111ebaae5a7f0c74998d2(),(0,_oavApp.unsafeHTML)(this.setupHTMLText(this.configFromServer.client_config.selectVotingAreaDesktopHTML))):(0,_oavApp.html$1)(_templateObject3_17926c70bc1111ebaae5a7f0c74998d2(),(0,_oavApp.unsafeHTML)(this.setupHTMLText(this.configFromServer.client_config.selectVotingAreaMobileHTML))))}else{return(0,_oavApp.html$1)(_templateObject4_17926c70bc1111ebaae5a7f0c74998d2())}}},{key:"renderText",value:function renderText(){if(this.hasLoadedCss){return(0,_oavApp.html$1)(_templateObject5_17926c70bc1111ebaae5a7f0c74998d2(),(0,_oavApp.unsafeHTML)(this.setupHTMLText(this.getText())))}else{return(0,_oavApp.html$1)(_templateObject6_17926c70bc1111ebaae5a7f0c74998d2())}}},{key:"getText",value:function getText(){return"\n      "}},{key:"setupHTMLText",value:function setupHTMLText(text){var _this=this;text=this.b64DecodeUnicode(text);this.configFromServer.areas.forEach(function(area){var voterCount=0;if(_this.configFromServer.area_voter_count&&_this.configFromServer.area_voter_count[area.id]){voterCount=_this.configFromServer.area_voter_count[area.id]}text=text.replace("ZZZareaCount"+area.id+"ZZZ",_this.formatNumber(voterCount))});text=text.replace(/ZZZtotalVoterCountZZZ/g,this.formatNumber(this.configFromServer.total_voter_count));text=text.replace("ZZZmainInfoTextZZZ",this.localize("mainInfo"));text=text.replace("ZZZchoose_a_neighbourhood_2ZZZ",this.localize("choose_a_neighbourhood_2"));text=text.replace("ZZZselectAreaTextZZZ",this.localize("selectAreaInfo"));text=text.replace(/ZZZnumber_of_votersZZZ/g,this.localize("number_of_voters"));return text}},{key:"setupEvents",value:function setupEvents(){var _this2=this;if(this.$$("#video"))this.$$("#video").addEventListener("playing",this._videoPlaying);this.$$("#languageSelection").addEventListener("click",this._languageSelection.bind(this));this.shadowRoot.querySelectorAll("a,area").forEach(function(node){var splitHref=node.href.split("/"),areaId=splitHref[splitHref.length-1];node.addEventListener("click",function(){_this2._goToAreaId(areaId)});node.removeAttribute("href");node.style.cursor="pointer"})}},{key:"_goToAreaId",value:function _goToAreaId(areaId){var path="/area-ballot/"+areaId;window.history.pushState({},null,path);this.fire("location-changed",path)}},{key:"removeEvents",value:function removeEvents(){var _this3=this;if(this.$$("#video"))this.$$("#video").removeEventListener("playing",this._videoPlaying);this.$$("#languageSelection").removeEventListener("click",this._languageSelection.bind(this));this.shadowRoot.querySelectorAll("a,area").forEach(function(node){node.removeEventListener("click",function(){_this3._goToAreaId(null)})})}},{key:"firstUpdated",value:function firstUpdated(){babelHelpers.get(babelHelpers.getPrototypeOf(OavSelectVotingArea.prototype),"firstUpdated",this).call(this)}},{key:"updated",value:function updated(update){var _this4=this;babelHelpers.get(babelHelpers.getPrototypeOf(OavSelectVotingArea.prototype),"updated",this).call(this,update);if(update.has("configFromServer")&&this.configFromServer){this.hasLoadedCss=!0;setTimeout(function(){_this4.setupEvents();var selectedLanguageDiv=_this4.$$("#"+_this4.language+"Language");if(selectedLanguageDiv){selectedLanguageDiv.classList.add("selectedLanguage")}setTimeout(function(){_this4.requestUpdate()},1e3)})}}},{key:"_languageSelection",value:function _languageSelection(event){var _this5=this;this.$$("#languageSelection").removeEventListener("click",this._languageSelection.bind(this));this.language=event.target.id.split("Language")[0];this.fire("oav-set-locale",this.language);setTimeout(function(){_this5.requestUpdate();_this5.$$("#languageSelection").addEventListener("click",_this5._languageSelection.bind(_this5))})}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.removeEvents();babelHelpers.get(babelHelpers.getPrototypeOf(OavSelectVotingArea.prototype),"disconnectedCallback",this).call(this)}}],[{key:"properties",get:function get(){return{configFromServer:{type:Object},hasLoadedCss:Boolean}}},{key:"styles",get:function get(){return[_oavApp.OavShadowStyles,_oavApp.OavFlexLayout]}}]);return OavSelectVotingArea}(_oavApp.PageViewElement);window.customElements.define("oav-select-voting-area",OavSelectVotingArea)});