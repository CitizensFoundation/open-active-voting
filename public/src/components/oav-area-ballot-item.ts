import { customElement, html, property } from "lit-element";
import { OavAreaBallotItemStyles } from "./oav-area-ballot-item-styles.js";
import { OavBaseElement } from "./oav-base-element";
import { OavShadowStyles } from "./oav-shadow-styles";

import "@polymer/iron-image";
import "@polymer/paper-menu-button";
import "@polymer/paper-icon-button";
import "@polymer/paper-listbox";
import "@polymer/paper-item";
import "@polymer/paper-fab";
import "paper-share-button";
import { OavAreaBudget } from "./oav-area-budget.js";

@customElement("oav-area-ballot-item")
export class OavAreaBallotItem extends OavBaseElement {
  @property({ type: Object })
  item!: OavItemAttributes;

  @property({ type: Number })
  areaId!: number;

  @property({ type: String })
  staticMapsApiKey: string | undefined;

  @property({ type: Number })
  elevation = 1;

  @property({ type: Object })
  budgetElement: OavAreaBudget | undefined;

  @property({ type: Boolean })
  selectedInBudget = false;

  @property({ type: Boolean })
  toExpensiveForBudget = false;

  @property({ type: Boolean })
  isFavorite = false;

  @property({ type: String })
  googleMapsApiKey: string | undefined;

  @property({ type: Boolean })
  imageTabSelected = false;

  @property({ type: Boolean })
  descriptionTabSelected = false;

  @property({ type: Boolean })
  mapTabSelected = false;

  @property({ type: String })
  descriptionPdfLink: string | undefined;

  @property({ type: Boolean })
  small = false;

  @property({ type: Boolean })
  tiny = false;

  @property({ type: String })
  mapsHeight: string | undefined;

  @property({ type: String })
  mapsWidth: string | undefined;

  @property({ type: String })
  longitude: string | undefined;

  @property({ type: String })
  latitude: string | undefined;

  @property({ type: Boolean })
  imageLoaded = false;

  @property({ type: Boolean })
  isOnMap = false;

  @property({ type: Number })
  listBoxSelection = 0;

  @property({ type: Object })
  configFromServer!: OavConfigFromServer;

  static get styles() {
    return [OavAreaBallotItemStyles, OavShadowStyles];
  }

  render() {
    return html`
      <div
        id="topContainer"
        class="itemContent shadow-animation shadow-elevation-3dp"
        ?small="${this.small}"
        ?tiny="${this.tiny}"
      >
        <iron-image
          preload
          @loaded-changed="${this._imageLoadedChanged}"
          ?small="${this.small}"
          ?tiny$="${this.tiny}"
          ?hidden="${!this.imageTabSelected}"
          name="image"
          sizing="cover"
          src="${this.item.image_url}"
        >
        </iron-image>

        ${this.mapTabSelected && this.mapsHeight
          ? html`
              ${this.getMapImage
                ? html`
                    <iron-image
                      class="main-image"
                      sizing="contain"
                      src="${this.getMapImage}"
                      ?hidden="${!this.mapTabSelected}"
                    >
                    </iron-image>
                  `
                : html`
                    <iron-image
                      class="main-image"
                      sizing="cover"
                      src="https://maps.googleapis.com/maps/api/staticmap?center=${this
                        .latitude},${this.longitude}&zoom=15&size=${this
                        .mapsWidth}x${this
                        .mapsHeight}&markers=color:red%7Clabel:%7C${this
                        .latitude},${this.longitude}&key=${this.configFromServer
                        .client_config.googleMapsStaticApiKey}"
                      ?hidden="${!this.mapTabSelected}"
                    >
                    </iron-image>
                  `}
            `
          : ""}
        <div
          ?hidden="${!this.descriptionTabSelected}"
          name="description"
          class="descriptionContainer"
          ?tiny="${this.tiny}"
          ?small="${this.small}"
        >
          <div id="description" class="description">
            ${this.item.description}
          </div>
        </div>
        <paper-menu-button
          ?hidden="${this.isOnMap}"
          @tap="${this._openMenu}"
          ?small="${this.small}"
          ?tiny="${this.tiny}"
          class="dropdownMenuButton"
          horizontal-align="right"
        >
          <paper-icon-button
            class="dropdown-trigger dropdownButton"
            slot="dropdown-trigger"
            @click="${this._clickedDropDownMenu}"
            alt="${this.localize("openDetailMenu")}"
            icon="menu"
          ></paper-icon-button>
          <paper-listbox
            class="dropdown-content"
            slot="dropdown-content"
            id="listBox"
            .selected="${this.listBoxSelection}"
          >
            <paper-item @tap="${this._setImageMode}">
              <iron-icon
                alt="${this.localize("image_item_tab")}"
                class="infoIcon"
                icon="photo"
              ></iron-icon>
              ${this.localize("image_item_tab")}
            </paper-item>
            <paper-item @tap="${this._setDescriptionMode}">
              <iron-icon
                alt="${this.localize("description_item_tab")}"
                class="infoIcon"
                icon="description"
              ></iron-icon>
              ${this.localize("description_item_tab")}
            </paper-item>
            <paper-item
              @tap="${this._setMapMode}"
              ?hidden="${this.configFromServer.client_config.hideLocation}"
            >
              <iron-icon
                alt="${this.localize("map_item_tab")}"
                class="infoIcon"
                icon="place"
              ></iron-icon>
              ${this.localize("map_item_tab")}
            </paper-item>
            <paper-item
              @tap="${this._openPdf}"
              ?hidden="${!this.configFromServer.client_config.pathToDesignPdfs}"
            >
              <iron-icon
                alt="${this.localize("design_pdf")}"
                class="infoIcon"
                icon="picture-as-pdf"
              ></iron-icon>
              ${this.localize("design_pdf")}
            </paper-item>
            <paper-item
              @tap="${this._showPost}"
              ?hidden="${this.configFromServer.client_config.hideShowPost}"
            >
              <iron-icon
                raised
                alt="${this.localize("more_info_description")}"
                class="infoIcon"
                icon="info"
              ></iron-icon>
              ${this.localize("more_info_description")}
            </paper-item>
          </paper-listbox>
        </paper-menu-button>
        <div class="layout horizontal">
          <div class="name" ?small="${this.small}" ?tiny="${this.tiny}">
            ${this.item.name}
          </div>
        </div>
        <div class="buttons">
          <paper-share-button
            ?hidden="${!this.imageLoaded ||
            this.configFromServer.client_config.hideItemSharing}"
            ?small="${this.small}"
            @share-tap="${this._shareTap}"
            class="shareIcon"
            horizontal-align="left"
            id="shareButton"
            title="${this.localize("share_idea")}"
            facebook
            instagram
            twitter
            is-popup
            .url="${this._itemShareUrl()}"
          >
          </paper-share-button>

          <div
            class="price"
            ?small="${this.small}"
            ?tiny="${this.tiny}"
            ?no-millions="${this.configFromServer.client_config
              .dontUserMillions}"
          >
            ${this.configFromServer.client_config
              .currencySymbol}${this.formatNumber(this.item.price, undefined)}
            <span
              class="priceCurrency"
              ?hidden="${!this._priceIsOne(this.item.price) || this.configFromServer.client_config
              .dontUserMillions}"
              >${this.localize("million")}</span
            >
            <span
              class="priceCurrency"
              ?hidden="${this._priceIsOne(this.item.price) || this.configFromServer.client_config
              .dontUserMillions}"
              >${this.localize("millions")}</span
            >
          </div>

          <paper-fab
            mini
            id="addToBudgetButton"
            elevation="5"
            class="addRemoveButton"
            ?hidden="${this.selectedInBudget}"
            ?disabled="${this.toExpensiveForBudget}"
            title="${this.localize("add_to_budget")}"
            icon="add"
            @click="${this._toggleInBudget}"
          >
          </paper-fab>

          <paper-fab
            mini
            elevation="5"
            class="addRemoveButton removeButton"
            ?hidden="${!this.selectedInBudget}"
            ?disabled="${this.toExpensiveForBudget}"
            title="${this.localize("remove_from_budget")}"
            icon="remove"
            @click="${this._toggleInBudget}"
          >
          </paper-fab>

          ${
            !this.configFromServer.client_config.hideFavoriteButton ? html`
              <div
                id="favoriteButtons"
                class="favoriteButtons"
                ?hidden="${!this.selectedInBudget}"
              >
                <paper-fab
                  mini
                  id="addFavoriteButton"
                  class="addFavoriteButton"
                  elevation="5"
                  class="favoriteButton"
                  ?hidden="${this.isFavorite}"
                  title="${this.localize("select_favorite")}"
                  icon="${this.configFromServer.client_config.favoriteIconOutline}"
                  @click="${this._toggleFavorite}"
                >
                </paper-fab>
                <paper-fab
                  mini
                  class="removeFavoriteButton"
                  elevation="5"
                  class="favoriteButton"
                  ?hidden="${!this.isFavorite}"
                  title="${this.localize("deselect_favorite")}"
                  icon="${this.configFromServer.client_config.favoriteIcon}"
                  @click="${this._toggleFavorite}"
                >
                </paper-fab>
              </div>

            ` : html``
          }
        </div>
      </div>
    `;
  }

  updated(changedProps: Map<string | number | symbol, unknown>) {
    super.updated(changedProps);
    if (changedProps.has("selectedInBudget")) {
      if (this.selectedInBudget) {
        this.elevation = 4;
        (this.$$("#topContainer") as HTMLElement).classList.add(
          "shadow-elevation-12dp"
        );
      } else {
        this.elevation = 1;
        (this.$$("#topContainer") as HTMLElement).classList.remove(
          "shadow-elevation-12dp"
        );
      }
    }

    if (changedProps.has("item")) {
      if (this.item) {
        if (this.item.locations && this.item.locations.length > 0) {
          this.longitude = (
            this.item.locations[0] as OavLocationInfo
          ).longitude;
          this.latitude = (this.item.locations[0] as OavLocationInfo).latitude;
        }
        this.resetFromBudget();
      }
    }

    if (changedProps.has("small")) {
      if (this.small) {
        this.mapsHeight = "260";
        this.mapsWidth = "146";
      } else {
        this.mapsHeight = "169";
        this.mapsWidth = "300";
      }
    }

    if (changedProps.has("tiny")) {
      if (this.tiny) {
        this.mapsHeight = "220";
        this.mapsWidth = "124";
      } else {
        this.mapsHeight = "169";
        this.mapsWidth = "300";
      }
    }
  }

  constructor() {
    super();
    this.reset();
  }

  reset() {
    this.small = false;
    this.mapTabSelected = false;
    this.descriptionTabSelected = false;
    this.imageTabSelected = true;
    this.isFavorite = false;
    this.toExpensiveForBudget = false;
    this.selectedInBudget = false;
    this.mapsHeight = "169";
    this.mapsWidth = "300";
    this.listBoxSelection = 0;
  }

  _imageLoadedChanged(event: CustomEvent) {
    if (event.detail.value) {
      this.imageLoaded = true;
    }
  }

  _clickedDropDownMenu() {
    this.activity("click", "dropdown");
  }

  _priceIsOne(price: number) {
    if (price && price <= 1.0) {
      return true;
    } else {
      return false;
    }
  }

  get getMapImage() {
    if (this.configFromServer.client_config.pathToMapImages)
      return `${this.configFromServer.client_config.pathToMapImages}/${this.areaId}/${this.item.idea_id}.jpg`;
    else return undefined;
  }

  _openPdf() {
    this.activity("click", "openPdf");
    if (this.configFromServer.client_config.pathToMapImages) {
      const path = `${this.configFromServer.client_config.pathToDesignPdfs}/${this.areaId}/${this.item.idea_id}.pdf`;
      window.open(path, "_blank");
    }
  }

  _showPost() {
    this.activity("click", "showPost");
    window.appLastArea = "/" + window.location.hash;
    const path = "/post/" + this.item.idea_id;
    window.history.pushState({}, "", path);
    this.fire("location-changed", path);
    setTimeout(() => {
      (this.$$("#listBox") as any).select(0);
    });
  }

  _itemShareUrl() {
    if (this.item) {
      return encodeURIComponent(
        "https://" + window.location.host + "/items/" + this.item.id
      );
    } else {
      return null;
    }
  }

  _shareTap() {
    this.activity("click", "shareItem");
  }

  resetFromBudget() {
    //console.log("resetFromBudget itemId: "+this.item.id);
    if (this.budgetElement) {
      if (this.budgetElement.selectedItems.indexOf(this.item) > -1) {
        this.setInBudget();
        this.setNotTooExpensive();
        if (this.budgetElement.currentBallot.favoriteItem == this.item) {
          this.isFavorite = true;
        } else {
          this.isFavorite = false;
        }
      } else {
        var budgetLeft =
          this.budgetElement!.totalBudget! - this.budgetElement.selectedBudget;
        if (this.item.price > budgetLeft) {
          this.setTooExpensive();
        } else {
          this.setNotTooExpensive();
        }
        this.removeFromBudget();
      }
    }
    this._setImageMode(true);
  }

  _setImageMode(disableActivity: boolean = false) {
    if (!disableActivity) {
      this.activity("select", "imageMode");
    }
    this.imageTabSelected = true;
    this.descriptionTabSelected = false;
    this.mapTabSelected = false;
  }

  _setMapMode() {
    this.activity("select", "mapMode");
    this.imageTabSelected = false;
    this.descriptionTabSelected = false;
    this.mapTabSelected = true;
  }

  _setDescriptionMode() {
    this.activity("select", "descriptionMode");
    this.imageTabSelected = false;
    this.descriptionTabSelected = true;
    this.mapTabSelected = false;
  }

  _toggleDescription() {
    this.activity("toggle", "description");
    if (this.descriptionTabSelected === true) {
      this._setImageMode();
    } else {
      this._setDescriptionMode();
    }
  }

  _openMenu() {
    this.activity("open", "itemMenu");
  }

  setInBudget() {
    //console.log("setInBudget itemId: "+this.item.id);
    this.selectedInBudget = true;
  }

  removeFromBudget() {
    //console.log("removeFromBudget itemId: "+this.item.id);
    this.selectedInBudget = false;
    this.isFavorite = false;
  }

  setTooExpensive() {
    //console.log("setTooExpensive itemId: "+this.item.id);
    this.toExpensiveForBudget = true;
  }

  setNotTooExpensive() {
    //console.log("setNotTooExpensive itemId: "+this.item.id);
    this.toExpensiveForBudget = false;
  }

  _toggleFavorite() {
    if (
      this.budgetElement!.currentBallot.favoriteItem &&
      this.budgetElement!.currentBallot.favoriteItem.id == this.item.id
    ) {
      this.fire("oav-set-favorite-item-in-budget", {
        item: null,
      });
      this.isFavorite = false;
    } else {
      var button = this.$$("#addFavoriteButton") as HTMLElement;
      var buttonRect = button.getBoundingClientRect();
      var left = buttonRect.left; // + window.scrollX;
      var top = buttonRect.top; // + window.scrollY;
      this.isFavorite = true;

      this.fire("oav-set-favorite-item-in-budget", {
        item: this.item,
        orgAnimPos: { left: left, top: top },
        budgetAnimPos: this.budgetElement!.getItemLeftTop(this.item),
      });
    }
  }

  _toggleInBudget() {
    //console.log("_toggleInBudget itemId: "+this.item.id);
    const addFavoriteButton = this.$$("#addFavoriteButton") as HTMLElement;
    if (addFavoriteButton) {
      addFavoriteButton.style.position = "absolute";
      addFavoriteButton.style.left = "12px";
      addFavoriteButton.style.bottom = "12px";

      var animation = addFavoriteButton.animate(
        [
          { transform: "translateX(200px)", easing: "ease-out" },
          { transform: "scale(2)", easing: "ease-out" },
          { transform: "translateY(0)", easing: "ease-out" },
        ],
        {
          duration: 400,
          iterations: 1,
        }
      );

      animation.onfinish = function () {
        addFavoriteButton.style.position = "absolute";
        addFavoriteButton.style.left = "12px";
        addFavoriteButton.style.bottom = "12px";
      }.bind(this);
    }

    this.fire("oav-toggle-item-in-budget", { item: this.item });
  }
}
