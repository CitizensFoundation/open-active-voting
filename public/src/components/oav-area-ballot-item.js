import { html } from 'lit-element';
import { OavAreaBallotItemStyles } from './oav-area-ballot-item-styles.js';
import { OavBaseElement } from './oav-base-element';
import { OavShadowStyles } from './oav-shadow-styles';

import '@polymer/iron-image';
import '@polymer/paper-menu-button';
import '@polymer/paper-icon-button';
import '@polymer/paper-listbox';
import '@polymer/paper-item';
import '@polymer/paper-fab';
import 'paper-share-button';

class OavAreaBallotItem extends OavBaseElement {
  static get properties() {
    return {
      item: {
        type: Object
      },

      staticMapsApiKey: {
        type: String
      },

      elevation: Number,

      budgetElement: {
        type: Object
      },

      selectedInBudget: {
        type: Boolean
      },

      toExpensiveForBudget: {
        type: Boolean
      },

      isFavorite: {
        type: Boolean
      },

      googleMapsApiKey: {
        type: String
      },

      imageTabSelected: {
        type: Boolean
      },

      descriptionTabSelected: {
        type: Boolean
      },

      mapTabSelected: {
        type: Boolean
      },

      descriptionPdfLink: {
        type: String
      },

      small: {
        type: Boolean
      },

      tiny: {
        type: Boolean
      },

      mapsHeight: {
        type: String,
        value: null
      },

      mapsWidth: {
        type: String,
        value: null
      },

      longitude: {
        type: String,
        value: null
      },

      latitude: {
        type: String,
        value: null
      },

      imageLoaded: {
        type: Boolean,
        value: false
      },

      isOnMap: Boolean,

      configFromServer: Object,

      listBoxSelection: Number
    };
  }

  static get styles() {
    return [
      OavAreaBallotItemStyles,
      OavShadowStyles
    ];
  }

  render() {
    return html`
      <div id="topContainer" class="itemContent shadow-animation shadow-elevation-3dp" ?small="${this.small}" ?tiny="${this.tiny}">
        <iron-image preload @loaded-changed="${this._imageLoadedChanged}" ?small="${this.small}"
          ?tiny$="${this.tiny}" ?hidden="${!this.imageTabSelected}" name="image" sizing="cover" src="${this.item.image_url}">
        </iron-image>

        ${this.mapTabSelected && this.mapsHeight ?
          html`
            <iron-image class="main-image" .sizing="cover"
              src="https://maps.googleapis.com/maps/api/staticmap?center=${this.latitude},${this.longitude}&zoom=15&size=${this.mapsWidth}x${this.mapsHeight}&markers=color:red%7Clabel:%7C${this.latitude},${this.longitude}&key=${this.configFromServer.client_config.googleMapsStaticApiKey}"
              ?hidden="${!this.mapTabSelected}">
            </iron-image>
          `
          :
          ''
        }
        <div ?hidden="${!this.descriptionTabSelected}" name="description" class="descriptionContainer" ?tiny="${this.tiny}" ?small="${this.small}">
          <div id="description" class="description">
            ${this.item.description}
          </div>
        </div>
        <paper-menu-button ?hidden="${this.isOnMap}" @tap="${this._openMenu}" ?small="${this.small}" ?tiny="${this.tiny}" class="dropdownMenuButton" horizontal-align="right">
          <paper-icon-button class="dropdown-trigger dropdownButton" slot="dropdown-trigger" @click="${this._clickedDropDownMenu}" alt="${this.localize('openDetailMenu')}" icon="menu"></paper-icon-button>
          <paper-listbox class="dropdown-content" slot="dropdown-content" id="listBox" .selected="${this.listBoxSelection}">
            <paper-item @tap="${this._setImageMode}">
              <iron-icon alt="${this.localize('image_item_tab')}" class="infoIcon" icon="photo"></iron-icon>
              ${this.localize('image_item_tab')}
            </paper-item>
            <paper-item @tap="${this._setDescriptionMode}">
              <iron-icon alt="${this.localize('description_item_tab')}" class="infoIcon" icon="description"></iron-icon>
              ${this.localize('description_item_tab')}
            </paper-item>
            <paper-item @tap="${this._setMapMode}">
              <iron-icon alt="${this.localize('map_item_tab')}" class="infoIcon" icon="place"></iron-icon>
              ${this.localize('map_item_tab')}
            </paper-item>
            <paper-item @tap="${this._openPdf}" ?hidden="${!this.descriptionPdfLink}">
              <iron-icon alt="${this.localize('design_pdf')}" class="infoIcon" icon="picture-as-pdf"></iron-icon>
              ${this.localize('design_pdf')}
            </paper-item>
            <paper-item @tap="${this._showPost}">
              <iron-icon raised alt="${this.localize('more_info_description')}" class="infoIcon" icon="info"></iron-icon>
              ${this.localize('more_info_description')}
            </paper-item>
          </paper-listbox>
        </paper-menu-button>
        <div class="layout horizontal">
          <div class="name" ?small="${this.small}" ?tiny="${this.tiny}">${this.item.name}</div>
        </div>
        <div class="buttons">
          <paper-share-button ?hidden="${!this.imageLoaded}" ?small="${this.small}" @share-tap="${this._shareTap}" class="shareIcon" horizontal-align="left" id="shareButton"
            title="${this.localize('share_idea')}" facebook twitter popup .url="${this._itemShareUrl()}">
          </paper-share-button>

          <div class="price" ?small="${this.small}" ?tiny="${this.tiny}">${this.item.price}
            <span class="priceCurrency" ?hidden="${!this._priceIsOne(this.item.price)}">${this.localize('million')}</span>
            <span class="priceCurrency" ?hidden="${this._priceIsOne(this.item.price)}">${this.localize('millions')}</span>
          </div>

          <paper-fab mini id="addToBudgetButton" elevation="5" class="addRemoveButton" ?hidden="${this.selectedInBudget}"
                    ?disabled="${this.toExpensiveForBudget}" title="${this.localize('add_to_budget')}" icon="add" @click="${this._toggleInBudget}">
          </paper-fab>

          <paper-fab mini elevation="5" class="addRemoveButton removeButton" ?hidden="${!this.selectedInBudget}"
                    ?disabled="${this.toExpensiveForBudget}" title="${this.localize('remove_from_budget')}" icon="remove" @click="${this._toggleInBudget}">
          </paper-fab>

          <div id="favoriteButtons" class="favoriteButtons" ?hidden="${!this.selectedInBudget}">
            <paper-fab mini id="addFavoriteButton" class="addFavoriteButton" .elevation="5" class="favoriteButton" ?hidden="${this.isFavorite}"
                      title="${this.localize('select_favorite')}" icon="${this.configFromServer.client_config.favoriteIconOutline}" @click="${this._toggleFavorite}">
            </paper-fab>
            <paper-fab mini class="removeFavoriteButton" .elevation="5" class="favoriteButton" ?hidden="${!this.isFavorite}"
                      title="${this.localize('deselect_favorite')}" icon="${this.configFromServer.client_config.favoriteIcon}" @click="${this._toggleFavorite}">
            </paper-fab>
          </div>
        </div>
      </div>
    `;
  }

  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('selectedInBudget')) {
      if (this.selectedInBudget) {
        this.elevation = 4;
        this.$$("#topContainer").classList.add("shadow-elevation-12dp")
      } else {
        this.elevation = 1;
        this.$$("#topContainer").classList.remove("shadow-elevation-12dp")
      }
    }

    if (changedProps.has('item')) {
      if (this.item) {
        if (this.item.locations && this.item.locations.length>0) {
          this.longitude = this.item.locations[0].longitude;
          this.latitude = this.item.locations[0].latitude;
        }
        this.resetFromBudget();
      }
    }

    if (changedProps.has('small')) {
      if (this.small) {
        this.mapsHeight = '260';
        this.mapsWidth = '146';
      } else {
        this.mapsHeight = '169';
        this.mapsWidth = '300';
      }
    }

    if (changedProps.has('tiny')) {
      if (this.tiny) {
        this.mapsHeight = '220';
        this.mapsWidth = '124';
      } else {
        this.mapsHeight = '169';
        this.mapsWidth = '300';
      }
    }
  }

  constructor() {
    super();
    this.reset();
    this.listBoxSelection = 0;
  }

  reset() {
    this.small = false;
    this.mapTabSelected = false;
    this.descriptionTabSelected = false;
    this.imageTabSelected = true;
    this.isFavorite = false;
    this.toExpensiveForBudget = false;
    this.selectedInBudget = false;
    this.mapsHeight = '169';
    this.mapsWidth = '300';

  }

  _imageLoadedChanged(event) {
    if (event.detail.value) {
      this.imageLoaded = true;
    }
  }

  _clickedDropDownMenu() {
    this.activity('click', 'dropdown');
  }

  _priceIsOne(price) {
    if (price && price<=1.0) {
      return true;
    } else {
      return false;
    }
  }

  _openPdf() {
    this.activity('click', 'openPdf');
    if (this.item.descriptionPdfLink) {
      window.open(this.item.descriptionPdfLink, '_blank');
    }
  }

  _showPost() {
    this.activity('click', 'showPost');
    window.appLastArea = '/'+window.location.hash;
    const path = "/post/"+this.item.idea_id;
    window.history.pushState({}, null, path);
    this.fire('location-changed', path);
    setTimeout( () => {
      this.$$("#listBox").select(0);
    });
  }

  _itemShareUrl() {
    if (this.item) {
      return encodeURIComponent("https://"+window.location.host+"/items/"+this.item.id);
    } else {
      return null;
    }
  }

  _shareTap(event, detail) {
    this.activity('click', 'shareItem');
  }

  resetFromBudget() {
    //console.log("resetFromBudget itemId: "+this.item.id);
    if (this.budgetElement) {
      if (this.budgetElement.selectedItems.indexOf(this.item) > -1) {
        this.setInBudget();
        this.setNotTooExpensive();
        if (this.budgetElement.currentBallot.favoriteItem==this.item) {
          this.isFavorite = true;
        } else {
          this.isFavorite = false;
        }
      } else {
        var budgetLeft = this.budgetElement.totalBudget-this.budgetElement.selectedBudget;
        if (this.item.price>budgetLeft) {
          this.setTooExpensive()
        } else {
          this.setNotTooExpensive()
        }
        this.removeFromBudget();
      }
    }
    this._setImageMode(true);
  }

  _setImageMode(disableActivity) {
    if (!disableActivity || disableActivity===false) {
      this.activity('select', 'imageMode');
    }
    this.imageTabSelected = true;
    this.descriptionTabSelected = false;
    this.mapTabSelected = false;
  }

  _setMapMode() {
    this.activity('select', 'mapMode');
    this.imageTabSelected = false;
    this.descriptionTabSelected = false;
    this.mapTabSelected = true;
  }

  _setDescriptionMode() {
    this.activity('select', 'descriptionMode');
    this.imageTabSelected = false;
    this.descriptionTabSelected = true;
    this.mapTabSelected = false;
  }

  _toggleDescription() {
    this.activity('toggle', 'description');
    if (this.descriptionTabSelected===true) {
      this._setImageMode();
    } else {
      this._setDescriptionMode();
    }
  }

  _openMenu() {
    this.activity('open', 'itemMenu');
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
    if (this.budgetElement.currentBallot.favoriteItem &&
        this.budgetElement.currentBallot.favoriteItem.id == this.item.id) {
      this.fire('oav-set-favorite-item-in-budget', {
        item: null
      });
      this.isFavorite = false;
    } else {
      var button = this.$$("#addFavoriteButton");
      var buttonRect = button.getBoundingClientRect();
      var left = buttonRect.left;// + window.scrollX;
      var top = buttonRect.top;// + window.scrollY;
      this.isFavorite = true;

      this.fire('oav-set-favorite-item-in-budget', {
        item: this.item,
        orgAnimPos: { left: left, top: top },
        budgetAnimPos: this.budgetElement.getItemLeftTop(this.item)
      });
    }
  }

  _toggleInBudget(event) {
    //console.log("_toggleInBudget itemId: "+this.item.id);
    this.$$("#addFavoriteButton").style.position = "absolute";
    this.$$("#addFavoriteButton").style.left = "12px";
    this.$$("#addFavoriteButton").style.bottom = "12px";

    var animation = this.$$("#addFavoriteButton").animate([
      { transform: "translateX(200px)", easing: 'ease-out' },
      { transform: "scale(2)", easing: 'ease-out' },
      { transform: "translateY(0)", easing: 'ease-out' }
    ], {
      duration: 400,
      iterations: 1
    });

    animation.onfinish = function () {
      this.$$("#addFavoriteButton").style.position = "absolute";
      this.$$("#addFavoriteButton").style.left = "12px";
      this.$$("#addFavoriteButton").style.bottom = "12px";
    }.bind(this);
    this.fire('oav-toggle-item-in-budget', { item: this.item });
  }
}

window.customElements.define('oav-area-ballot-item', OavAreaBallotItem);
