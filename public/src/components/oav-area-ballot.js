import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { OavAreaBallotStyles } from './oav-area-ballot-styles.js';
import { encryptVote } from './ballot-encryption-behavior.js'
import '@polymer/paper-tabs/paper-tab';
import '@polymer/paper-tabs/paper-tabs';

class OavAreaBallot extends PageViewElement {
  static get properties() {
    return {
      area: {
        type: Object
      },

      areaId: {
        type: String
      },

      areaIdRoutePath: {
        type: Object
      },

      selectedView: {
        type: Number
      },

      budgetElement: {
        type: Object
      },

      budgetBallotItems: Array,

      wide: Boolean,

      popupWindow: Object,

      favoriteItem: {
        type: Object
      },

      oldFavoriteItem: Object
    };
  }

  updated(changedProps) {
    super(changedProps);
    if (changedProps.has('areaId')) {
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
      OavAreaBallotStyles
    ];
  }

  render() {
    return html`
      <div class="topContainer layout vertical">
        <div class="layout horizontal center-center tabsContainer">
          <paper-tabs .selected="${this.selectedView}" @selected-changed="${this._selectedChanged}"">
            <paper-tab>
              <div ?hidden="${!this.wide}">[[area.name]]</div>
              <div ?hidden="${this.wide}" class="layout vertical center-center">
                <div>[[area.name]]</div>
              </div>
            </paper-tab>
            <paper-tab>{{localize('items_on_map')}}</paper-tab>
          </paper-tabs>
        </div>

        ${this.budgetBallotItems ?
          html`
            ${this.selectedView===0 ?
              html`
                <div id="itemContainer" class="layout horizontal center-center wrap">
                  ${this.budgetBallotItems.map((item) => {
                    html`
                      <oav-area-ballot-item
                        .name="${item.id}"
                        class="ballotAreaItem"
                        .budget-element="{{budgetElement}}"
                        .ideas-with-pdfs="${this.configFromServer.ideasWithPdfs}"
                        tabindex="${index}"
                        .item="${item}">
                      </oav-area-ballot-item>
                    `;
                  })}
                </div>
              `
              :
              html`
                <oav-items-map
                  id="itemsMap"
                  .budget-element="[[budgetElement]]"
                  .items="[[budgetBallotItems]]">
                </oav-items-map>
              `
            }
          `
          :
          ''
        }
      </div>
    `;
  }

  _selectedChanged(event, detail) {
    debugger;
    this.selectedView = detail;
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

window.customElements.define('oav-area-ballot', OavAreaBallot);