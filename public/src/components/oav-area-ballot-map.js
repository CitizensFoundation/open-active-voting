import { html } from 'lit-element';
import { OavAreaBallotMapStyles } from './oav-area-ballot-item=styles.js';
import { OavShadowStyles } from './oav-shadow-styles';
import { OavBaseElement } from './oav-base-element';
import 'plastic-map-info';
import 'google-maps/src/google-map';
import 'google-maps/src/google-map-marker';
import '@polymer/paper-styles/shadow';

class OavAreaBalloMap extends OavBaseElement {
  static get properties() {
    return {
      items: {
        type: Array,
        value: null,
        observer: '_itemsChanged'
      },

      budgetElement: {
        type: Object
      },

      selectedItem: {
        type: Object
      },

      noItems: {
        type: Boolean,
        value: false
      },

      googleMapsApiKey: {
        type: String
      },

      wide: {
        type: Boolean,
        observer: '_wideChanged'
      }
    };
  }

  static get styles() {
    return [
      OavAreaBallotMapStyles,
      OavShadowStyles
    ];
  }

  render() {
    return html`
      <div class="layout vertical center-center topMapContainer">
        ${ this.noItems ?
            html`
              <div class="noMapContainer shadow-elevation-3dp">
                <h1>${this.localize('items.noMapItems')}</h1>
              </div>
            `
            :
            html`
              <div class="mapContainer">
                <google-map disable-default-ui$="[[tiny]]" id="map" api-key="[[apiKey]]" fit-to-markers>
                  ${this.items.map(item => {
                    item.locations.map(location => {
                      html`
                        <google-map-marker click-events item="${item}" latitude="${location.latitude}" longitude="${location.longitude}" class="marker" @google-map-marker-click="${this.markerClick()}">
                        </google-map-marker>
                      `
                    })
                  })}
                  <plastic-map-info id="myInfoCard" fade-in>
                    <oav-area-ballot-item on-oav-toggle-item-in-budget="_closeInfo" small elevation="0" id="ballotItem" budget-element="[[budgetElement]]" class="ballotItem" item="[[selectedItem]]"></oav-area-ballot-item>
                  </plastic-map-info>
                </google-map>
              </div>
            `
        }
      </div>
    `;
  }

  constructor() {
    super();
    this.reset();
    setTimeout(function () {
      this.resetMapHeight();
    }.bind(this));
  }

  reset() {
    this.googleMapsApiKey = "AIzaSyDkF_kak8BVZA5zfp5R4xRnrX8HP3hjiL0";
  }

  _closeInfo() {
    ///this.$$("#myInfoCard").close();
  }

  updated(changedProps) {
    super(changedProps);
    if (changedProps.has('wide')) {
      this.resetMapHeight();
    }
  }

  resetMapHeight() {
    var map = this.$$("#map");
    var windowHeight = window.innerHeight;
    if (map) {
      var height;
      if (this.wide) {
        height = windowHeight - 322;
      } else {
        height = windowHeight - 236;
      }
      map.style.height = height + 'px';
    }
  }

  setItemInBudget(item) {
    if (this.selectedItem && this.selectedItem.id == item.id) {
      var item = this.$$("#ballotItem");
      if (item) {
        item.setInBudget();
      }
    }
  }

  removeFromBudget(item) {
    if (this.selectedItem && this.selectedItem.id == item.id) {
      var item = this.$$("#ballotItem");
      if (item) {
        this.$$("#ballotItem").removeFromBudget();
      }
    }
  }

  checkIfSelectedItemToExpensive(budgetLeft) {
    if (this.selectedItem) {
      var item = this.$$("#ballotItem");
      if (item) {
        if (!item.selectedInBudget) {
          if (this.selectedItem.price<=budgetLeft) {
            item.setNotTooExpensive();
            console.log("item id "+this.selectedItem.id+ "Not Too Expensive");
          } else if (this.selectedItem) {
            console.log("item id "+this.selectedItem.id+ "Too Expensive");
            item.setTooExpensive();
          }
        }
      }
    }
  }

  markerClick(e) {
    this.activity('click', 'marker');
    this.selectedItem = e.model.get('item');
    var a = this.selectedItem;
    if (e.srcElement) {
      this.$$("#myInfoCard").showInfoWindow(e.srcElement.marker);
    } else {
      this.$$("#myInfoCard").showInfoWindow(e.currentTarget.marker);
    }
    var infocardDiv = this.$$("#myInfoCard").$$("#infocarddiv");
    infocardDiv.children[1].style.zIndex = "20";
  }
}

window.customElements.define('oav-area-ballot-map', OavAreaBallotMap);
