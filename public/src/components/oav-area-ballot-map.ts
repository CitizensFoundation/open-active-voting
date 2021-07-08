import { customElement, html, property } from "lit-element";
import { OavBallotMapStyles } from "./oav-area-ballot-map-styles.js";
import { OavShadowStyles } from "./oav-shadow-styles";
import { OavBaseElement } from "./oav-base-element";
import "plastic-map-info";
import "google-map/google-map.js";
import "google-map/google-map-marker.js";
import "@polymer/paper-styles/shadow";
import { OavAreaBudget } from "./oav-area-budget.js";
import { OavAreaBallotItem } from './oav-area-ballot-item.js';

@customElement("oav-area-ballot-map")
export class OavAreaBallotMap extends OavBaseElement {
  @property({ type: Array })
  items: Array<OavItemAttributes> | undefined;

  @property({ type: Object })
  budgetElement: OavAreaBudget | undefined;

  @property({ type: Object })
  selectedItem: OavItemAttributes | undefined;

  @property({ type: Object })
  configFromServer!: OavConfigFromServer;

  @property({ type: Boolean })
  noItems = false;

  @property({ type: String })
  googleMapsApiKey: string | undefined;

  @property({ type: Boolean })
  tiny = false;

  static get styles() {
    return [OavBallotMapStyles, OavShadowStyles];
  }

  render() {
    return html`
      <div class="layout vertical center-center topMapContainer">
        ${!this.items
          ? html`
              <div class="noMapContainer shadow-elevation-3dp">
                <h1>${this.localize("items.noMapItems")}</h1>
              </div>
            `
          : html`
              <div class="mapContainer">
                <google-map
                  ?disable-default-ui="${this.tiny}"
                  id="map"
                  .apiKey="${this.configFromServer.client_config
                    .googleMapsApiKey}"
                  fit-to-markers
                >
                  ${this.items.map((item) => {
                    return (item.locations as Array<OavLocationInfo>).map(
                      (location) => {
                        return html`
                          <google-map-marker
                            slot="markers"
                            .clickEvents="${true}"
                            .latitude="${location.latitude}"
                            data-itemid="${item.id}"
                            .longitude="${location.longitude}"
                            class="marker"
                            @google-map-marker-click="${this.markerClick}"
                          >
                          </google-map-marker>
                        `;
                      }
                    );
                  })}
                  ${this.selectedItem
                    ? html`
                        <plastic-map-info id="myInfoCard" fade-in>
                          <oav-area-ballot-item
                            @oav-toggle-item-in-budget="_closeInfo"
                            small
                            elevation="0"
                            id="ballotItem"
                            .budgetElement="${this.budgetElement}"
                            .language="${this.language}"
                            .isOnMap="${true}"
                            .configFromServer="${this.configFromServer}"
                            class="ballotItem"
                            .item="${this.selectedItem}"
                          ></oav-area-ballot-item>
                        </plastic-map-info>
                      `
                    : html``}
                </google-map>
              </div>
            `}
      </div>
    `;
  }

  constructor() {
    super();
    this.reset();
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.resetMapHeight();
    });
  }

  disconnectedCallback() {
    this.items = undefined;
    super.disconnectedCallback();
  }

  reset() {}

  _closeInfo() {
    ///this.$$("#myInfoCard").close();
  }

  updated(changedProps: Map<string | number | symbol, unknown>) {
    super.updated(changedProps);

    if (changedProps.has("wide")) {
      this.resetMapHeight();
    }

    if (changedProps.has("items") && this.items) {
      setTimeout(() => {
        (this.$$("#map") as any)._fitToMarkersChanged();
      }, 10);
    }
  }

  resetMapHeight() {
    var map = this.$$("#map") as HTMLElement;
    var windowHeight = window.innerHeight;
    if (map) {
      var height;
      if (this.wide) {
        height = windowHeight - 322;
      } else {
        height = windowHeight - 236;
      }
      map.style.height = height + "px";
    }
  }

  setItemInBudget(item: OavItemAttributes) {
    if (this.selectedItem && this.selectedItem.id == item.id) {
      var oavItem = this.$$("#ballotItem") as OavAreaBallotItem;
      if (oavItem) {
        oavItem.setInBudget();
      }
    }
  }

  removeFromBudget(item: OavItemAttributes) {
    if (this.selectedItem && this.selectedItem.id == item.id) {
      var oavItem = this.$$("#ballotItem") as OavAreaBallotItem;
      if (oavItem) {
        oavItem.removeFromBudget();
      }
    }
  }

  checkIfSelectedItemToExpensive(budgetLeft: number) {
    if (this.selectedItem) {
      var item = this.$$("#ballotItem") as OavAreaBallotItem;
      if (item) {
        if (!item.selectedInBudget) {
          if (this.selectedItem.price <= budgetLeft) {
            item.setNotTooExpensive();
            console.log(
              "item id " + this.selectedItem.id + "Not Too Expensive"
            );
          } else if (this.selectedItem) {
            console.log("item id " + this.selectedItem.id + "Too Expensive");
            item.setTooExpensive();
          }
        }
      }
    }
  }

  scrollMapIntoView(itemId: number) {
    let markerIdCounter = 0;
    let markerIdFoundAt = null;
    this.items!.map((item) => {
      return (item.locations as Array<OavLocationInfo>).map((location) => {
        if (item.id == itemId) {
          markerIdFoundAt = markerIdCounter;
        }
        markerIdCounter++;
      });
    });

    if (markerIdFoundAt !== null && this.$$("#map")) {
      (this.$$("#map") as any).triggerMarkerClick(markerIdFoundAt);
    }
  }

  markerClick(e: any) {
    this.activity("click", "marker");
    const selectedItemId = e.target.dataset.itemid;
    this.items!.forEach((item) => {
      if (item.id == selectedItemId) {
        this.selectedItem = item;
      }
    });

    let marker: any;
    if (e.srcElement) {
      marker = e.srcElement.marker;
    } else {
      marker = e.currentTarget.marker;
    }
    setTimeout(() => {
      (this.$$("#myInfoCard") as any).showInfoWindow(marker);
    }, 10);
  }
}
