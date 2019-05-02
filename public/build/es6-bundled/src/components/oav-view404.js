define(["./oav-app.js"],function(_oavApp){"use strict";//import { SharedStyles } from './shared-styles.js';
class OavView404 extends _oavApp.PageViewElement{render(){return _oavApp.html$1`
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>
          The page you're looking for doesn't seem to exist. Head back
          <a href="/">home</a> and try again?
        </p>
      </section>
    `}}window.customElements.define("oav-view404",OavView404)});