define(["./oav-app.js"],function(_oavApp){"use strict";function _templateObject_1dadeb70c98611eb907941fd4d1e677b(){var data=babelHelpers.taggedTemplateLiteral(["\n      <section>\n        <h2>Oops! You hit a 404</h2>\n        <p>\n          The page you're looking for doesn't seem to exist. Head back\n          <a href=\"/\">home</a> and try again?\n        </p>\n      </section>\n    "]);_templateObject_1dadeb70c98611eb907941fd4d1e677b=function _templateObject_1dadeb70c98611eb907941fd4d1e677b(){return data};return data}var OavView404=function(_PageViewElement){babelHelpers.inherits(OavView404,_PageViewElement);function OavView404(){babelHelpers.classCallCheck(this,OavView404);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(OavView404).apply(this,arguments))}babelHelpers.createClass(OavView404,[{key:"render",value:function render(){return(0,_oavApp.html$1)(_templateObject_1dadeb70c98611eb907941fd4d1e677b())}}]);return OavView404}(_oavApp.PageViewElement);window.customElements.define("oav-view404",OavView404)});