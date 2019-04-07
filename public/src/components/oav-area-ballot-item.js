import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { OavAreaBallotItemStyles } from './oav-area-ballot-item=styles.js';

class OavAreaBallotItem extends PageViewElement {
  static get properties() {
    return {
      item: {
        type: Object,
        observer: '_itemChanged'
      },

      staticMapsApiKey: {
        type: String,
        value: "AIzaSyBYy8UvdDD650mz7k1pY0j2hBFQmCPVnxA"
      },

      elevation: Number,

      budgetElement: {
        type: Object
      },

      selectedInBudget: {
        type: Boolean,
        value: false,
        observer: 'selectedInBudgetChanged'
      },

      toExpensiveForBudget: {
        type: Boolean,
        value: false
      },

      isFavorite: {
        type: Boolean,
        value: false
      },

      googleMapsApiKey: {
        type: String,
        value: "AIzaSyDkF_kak8BVZA5zfp5R4xRnrX8HP3hjiL0"
      },

      imageTabSelected: {
        type: Boolean,
        value: true
      },

      descriptionTabSelected: {
        type: Boolean,
        value: false
      },

      mapTabSelected: {
        type: Boolean,
        value: false
      },

      descriptionPdfLink: {
        type: String
      },

      itemShareUrl: {
        type: String,
        computed: '_itemShareUrl(item)'
      },

      small: {
        type: Boolean,
        value: false,
        observer: '_smallChanged'
      },

      tiny: {
        type: Boolean,
        value: false,
        observer: '_tinyChanged'
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

      ideasWithPdfs: {
        type: Object
      }
    };
  }

  updated(changedProps) {
    super(changedProps);
    if (changedProps.has('areaId')) {
      if (newValue===true) {
        this.set('elevation', "4");
      } else {
        this.set('elevation', "1");
      }

      this.oldFavoriteItem = null;
      this.favoriteItem = null;
      if (this.areaId) {
        this.reset();
        this.fire('ak-clear-area');
        fetch("/votes/get_ballot?area_id="+this.areaId)
        .then(res => res.json())
        .then(response => {
          console.log('Success:', JSON.stringify(response));
          this.area = detail.response.area;
          this.budgetBallotItems = this._setupLocationsAndTranslation(detail.response.budget_ballot_items);
          this.fire('oav-set-title', this.localize('ballot_area_name', 'area_name', this.area.name));
          this.fire('oav-set-area', { areaName: this.area.name, totalBudget: this.area.budget_amount });
        })
        .catch(error => {
          this.fire('ak-error', error);
          console.error('Error:', error);
        });
      }

      if (changedProps.has('areaIdRoutePath')) {
        if (this.areaIdRoutePath) {
          if (this.areaIdRoutePath==='completePostingOfVoteAfterRedirect') {
            this.completeIfAuthenticatedVote();
          } else {
            this.areaId = this.areaIdRoutePath;
          }
        }
      }

      if (changedProps.has('selectedView')) {
        if (this.selectedView && view==0) {
          this.activity('click', 'ideasTab');
        } else if (view && view==1) {
          this.activity('click', 'mapTab');
        }
      }

      if (changedProps.has('favoriteItem')) {
        debugger;
        this.oldFavoriteItem = changedProps['favoriteItem'].oldValue;
        if (!this.favoriteItem && this.oldFavoriteItem) {
          this.fire("oav-hide-favorite-item");
        }
      }
    }
  }

  _descriptionPdfLink(newItem) {
    if (newItem && this.ideasWithPdfs) {
      const ideaId = parseInt(newItem.idea_id);
      if (ideasWithPdfs.ids.indexOf(ideaId) > -1) {
        return null;
      } else {
        return ideasWithPdfs.urls[ideaId];
      }
    } else {
      return null;
    }
  }

  constructor() {
    super();
    this.reset();
    //TODO: Why?
    window.appBallot = this;
  }

  reset() {
    if (this.budgetElement) {
      this.budgetElement.reset();
    }
    this._resetBallotItems();
    this.budgetBallotItems = null;
    this.area = null;
    this.favoriteItem = null;
    this.selectedView = 0;
    this.fire('oav-set-area', { areaName: null, totalBudget: null });
  }

  static get styles() {
    return [
      OavAreaBallotItemStyles
    ];
  }

  render() {
    return html`
      <paper-material animated .elevation="[[elevation]]" class="itemContent" ?small="${this.small}" ?tiny="${this.tiny}">
        <iron-image preload on-loaded-changed="_imageLoadedChanged" small$="[[small]]" tiny$="[[tiny]]" hidden$="[[!imageTabSelected]]" name="image" sizing="cover" src="[[item.image_url]]"></iron-image>
        <template is="dom-if" if="[[mapTabSelected]]" restamp>
          <template is="dom-if" if="[[mapsHeight]]" restamp>
            <iron-image class="main-image" sizing="cover"
                        src$="https://maps.googleapis.com/maps/api/staticmap?center=[[latitude]],[[longitude]]&zoom=15&size=[[mapsWidth]]x[[mapsHeight]]&markers=color:red%7Clabel:%7C[[latitude]],[[longitude]]&key=[[staticMapsApiKey]]"
                        hidden$="[[!mapTabSelected]]"></iron-image>
          </template>
        </template>
        <div hidden$="[[!descriptionTabSelected]]" name="description" class="descriptionContainer" tiny$="[[tiny]]" small$="[[small]]" tiny$="[[tiny]]">
          <div id="description" class="description">
            [[item.description]]
          </div>
        </div>
        <paper-menu-button on-tap="_openMenu" small$="[[small]]" tiny$="[[tiny]]" class="dropdownMenuButton" horizontal-align="right">
          <paper-icon-button title$="{{localize('more_information')}}" class="dropdown-trigger dropdownButton" no-tap="_clickedDropDownMenu" title$="{{localize('select')}}" icon="menu"></paper-icon-button>
          <paper-menu class="dropdown-content">
            <paper-item on-tap="_setImageMode">
              <iron-icon title$="{{localize('image_item_tab')}}" class="infoIcon" icon="photo"></iron-icon>{{localize('image_item_tab')}}
            </paper-item>
            <paper-item on-tap="_setDescriptionMode">
              <iron-icon title$="{{localize('description_item_tab')}}" class="infoIcon" icon="description"></iron-icon>{{localize('description_item_tab')}}
            </paper-item>
            <paper-item on-tap="_setMapMode">
              <iron-icon title$="{{localize('map_item_tab')}}" class="infoIcon" icon="place"></iron-icon>{{localize('map_item_tab')}}
            </paper-item>
            <paper-item on-tap="_openPdf">
              <iron-icon title$="{{localize('design_pdf')}}" class="infoIcon" icon="picture-as-pdf"></iron-icon>{{localize('design_pdf')}}
            </paper-item>
            <paper-item on-tap="_showPost">
              <iron-icon raised title$="{{localize('more_info_description')}}" class="infoIcon" icon="info"></iron-icon>{{localize('more_info_description')}}
            </paper-item>
          </paper-menu>
        </paper-menu-button>
        <div class="layout horizontal">
          <div class="name" small$="[[small]]" tiny$="[[tiny]]">[[item.name]]</div>
        </div>
        <div class="buttons">
          <paper-share-button hidden$="[[!imageLoaded]]" small$="[[small]]" on-share-tap="_shareTap" class="shareIcon" horizontal-align="left" id="shareButton" title$="{{localize('share_idea')}}" facebook twitter popup url$="[[itemShareUrl]]"></paper-share-button>

          <div class="price" small$="[[small]]" tiny$="[[tiny]]">[[item.price]]
            <span class="priceCurrency" hidden$="[[!_priceIsOne(item.price)]]">{{localize('million')}}</span>
            <span class="priceCurrency" hidden$="[[_priceIsOne(item.price)]]">{{localize('millions')}}</span>
          </div>
          <paper-fab mini id="addToBudgetButton" elevation="5" class="addRemoveButton" hidden$="[[selectedInBudget]]"
                    disabled$="[[toExpensiveForBudget]]" title$="{{localize('add_to_budget')}}" icon="add" on-tap="_toggleInBudget">
          </paper-fab>
          <paper-fab mini elevation="5" class="addRemoveButton removeButton" hidden$="[[!selectedInBudget]]"
                    disabled$="[[toExpensiveForBudget]]" title$="{{localize('remove_from_budget')}}" icon="remove" on-tap="_toggleInBudget">
          </paper-fab>
          <div id="favoriteButtons" class="favoriteButtons" hidden$="[[!selectedInBudget]]">
            <paper-fab mini id="addFavoriteButton" class="addFavoriteButton" elevation="5" class="favoriteButton" hidden$="[[isFavorite]]"
                      title$="{{localize('select_favorite')}}" icon="star-border" hearticon="favorite-border" on-tap="_toggleFavorite">
            </paper-fab>
            <paper-fab mini class="removeFavoriteButton" elevation="5" class="favoriteButton" hidden$="[[!isFavorite]]"
                      title$="{{localize('deselect_favorite')}}" icon="star" heartcon="favorite" on-tap="_toggleFavorite">
            </paper-fab>
          </div>
        </div>
      </paper-material>
    `;
  }

  _scrollItemIntoView(itemId) {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);

    var items = this.shadowRoot.querySelectorAll("oav-area-ballot-item");
    items.forEach(function (item) {
      if (item.name==itemId) {
        if (iOS || isIE11) {
          item.scrollIntoView(false);
        } else {
          item.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }

        if (this.wide) {
          item.animate([
            { transform: "translateX(-3px)", easing: 'ease-in' },
            { transform: "translateX(3px)", easing: 'ease-out' },
            { transform: "translateX(-5px)", easing: 'ease-in' },
            { transform: "translateX(5px)", easing: 'ease-out' },
            { transform: "translateX(-7px)", easing: 'ease-in' },
            { transform: "translateX(7px)", easing: 'ease-out' },
          ], {
            duration: 450,
            iterations: 1
          });
        }
      }
    }.bind(this));
  }

  _resetBallotItems() {
    var listItems = this.$$("#itemContainer");
    if (listItems) {
      for (var i = 0; i < listItems.children.length; i++) {
        var listItem = listItems.children[i];
        if (listItem.id != 'domRepeat') {
          listItem.setNotTooExpensive();
          listItem.removeFromBudget();
        }
      }
    }
  }

  _toggleFavoriteItem(event, detail) {
    var item = detail.item;
    if (item) {
      this.activity('toggle', 'favorite');
    } else {
      this.activity('detoggle', 'favorite');
    }
    if (this.favoriteItem != item) {
      this.favoriteItem = item;
      var listItems = this.$$("#itemContainer");
      for (var i = 0; i < listItems.children.length; i++) {
        var listItem = listItems.children[i];
        if (listItem.id != 'domRepeat') {
          listItem.resetFromBudget();
        }
      }
    } else {
      console.warn("Trying to set item as favorite a second time");
    }
  }

  _toggleItemInBudget(event, detail) {
    this.budgetElement.toggleBudgetItem(detail.item);
  }

  _itemSelectedInBudget(event, detail) {
    var listItems = this.$$("#itemContainer");
    for (var i = 0; i < listItems.children.length; i++) {
      var listItem = listItems.children[i];
      if (listItem.id != 'domRepeat' && listItem.item.id == detail.itemId) {
        listItem.setInBudget();
        this.$$("#itemsMap").setItemInBudget(listItem.item);
      }
    }
    this._setStateOfRemainingItems();
  }

  _itemDeSelectedFromBudget(event, detail) {
    var listItems = this.$$("#itemContainer");
    for (var i = 0; i < listItems.children.length; i++) {
      var listItem = listItems.children[i];
      if (listItem.id != 'domRepeat' && listItem.item.id == detail.itemId) {
        if (this.favoriteItem==listItem.item) {
          this.set('favoriteItem', null);
        }
        listItem.removeFromBudget();
        this.$$("#itemsMap").removeFromBudget(listItem.item);
        this.fire("oav-reset-favorite-icon-position");
      }
    }
    this._setStateOfRemainingItems();
  }

  _setStateOfRemainingItems() {
    var budgetLeft = this.budgetElement.totalBudget-this.budgetElement.selectedBudget;
    var listItems = this.$$("#itemContainer");
    for (var i = 0; i < listItems.children.length; i++) {
      var listItem = listItems.children[i];
      if (listItem.id != 'domRepeat' && !listItem.selectedInBudget) {
        if (listItem.item.price<=budgetLeft) {
          listItem.setNotTooExpensive();
        } else {
          listItem.setTooExpensive();
        }
      }
    }
    this.$$("#itemsMap").checkIfSelectedItemToExpensive(budgetLeft);
  }

  _postVoteToServer() {
    if (this.budgetElement.selectedItems && this.budgetElement.selectedItems.length>0) {
      this.completePostingOfVote(this._createEncryptedVotes());
    } else {
      this.fire('oav-error', this.localize('error_no_items_selected'));
      console.error('error_no_items_selected');
    }
  }

  _createEncryptedVotes() {
    var selectedItemIds = _.map(this.budgetElement.selectedItems, function (item) {
      return item.id;
    });
    return encryptVote(this.configFromServer.votePublicKey,
                       { selectedItemIds: selectedItemIds,
                         favoriteItemId: this.favoriteItem ? this.favoriteItem.id : null });
  }

  completePostingOfVote(encryptedVotes) {
    if (this.area && this.area.id) {
      if (encryptedVotes) {
        return fetch('/votes/post_vote', {
          method: "POST",
          cache: "no-cache",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ encrypted_vote: encryptedVotes, area_id: this.area.id })
        })
        .then(response => response.json())
        .then(response => {
          if (response && response.vote_ok === true) {
            window.location = this._getSamlUrlWithLanguage();
          } else {
            this.fire('oav-error', this.localize('error_could_not_post_vote'));
          }
        })
      } else {
        this.fire('oav-error', this.localize('error_encryption'));
        console.error("No encrypted votes!");
      }
    } else {
      this.fire('oav-error', this.localize('error_could_not_post_vote'));
      console.warn("Not sending as no area id");
    }
  }

  _setVotingCompleted() {
    this.reset();
    this.areaId = null;
    window.location = "/voting-completed"
    var dialog = document.querySelector('oav-app').getDialog("authDialog");
    if (dialog)
      dialog.close();
  }

  completeIfAuthenticatedVote() {
    this.$.checkVoteCompletionAjax.generateRequest();
    fetch('/votes/is_vote_authenticated')
    .then(response => response.json())
    .then(response => {
      if (response && response.vote_ok===true) {
        this._setVotingCompleted();
        this.activity('completed', 'voting');
      } else {
        this.fire('oav-error', this.localize('error_could_not_post_vote'));
      }
    })
  }

  _getSamlUrlWithLanguage() {
    var url = this.configFromServer.auth_url;
    if (this.language=='en') {
      url+='&siteLanguage=en';
    } else if (this.language=='pl') {
      url+='&siteLanguage=pl';
    }
    return url;
  }

  _setupLocationsAndTranslation(budgetBallotItems) {
    var arrayLength = budgetBallotItems.length;
    for (var i = 0; i < arrayLength; i++) {
      if (budgetBallotItems[i].locations && budgetBallotItems[i].locations != "") {
        var hashArray = [];
        var locationsArray = budgetBallotItems[i].locations.replace(' ','').split(',');
        var counter = 0;
        while (counter<locationsArray.length) {
          hashArray.push({ latitude: locationsArray[counter], longitude: locationsArray[counter+1]});
          counter+=2;
        }
        budgetBallotItems[i].locations = hashArray;
      } else {
        budgetBallotItems[i].locations = [];
      }
      // Set the localized translation
      budgetBallotItems[i].name =  budgetBallotItems[i]['name_'+this.language];
      budgetBallotItems[i].description =  budgetBallotItems[i]['description_'+this.language];
    }
    return _.shuffle(budgetBallotItems);
  }
}

window.customElements.define('oav-area-ballot-item', OavAreaBallotItem);
