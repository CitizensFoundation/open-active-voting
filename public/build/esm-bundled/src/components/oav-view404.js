import{html$1 as html,PageViewElement}from"./oav-app.js";//import { SharedStyles } from './shared-styles.js';
class OavView404 extends PageViewElement{render(){return html`
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>
          The page you're looking for doesn't seem to exist. Head back
          <a href="/">home</a> and try again?
        </p>
      </section>
    `}}window.customElements.define("oav-view404",OavView404);