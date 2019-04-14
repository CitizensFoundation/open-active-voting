import { html } from 'lit-element';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';

import { OavAreaBudgetStyles } from './oav-area-budget-styles.js';
import { OavShadowStyles } from './oav-shadow-styles';

import '@polymer/paper-fab';
import '@polymer/paper-icon-button';
import '@polymer/paper-button';
import '@polymer/iron-image';
import { OavBaseElement } from './oav-base-element.js';
import { OavFlexLayout } from './oav-flex-layout.js';

class OavAreaBudget extends OavBaseElement {
  static get properties() {
    return {
      selectedItems: {
        type: Array,
        value: [],
        notify: true
      },

      toastCounter: {
        type: Number,
        value: 0
      },

      noSelectedItems: {
        type: Boolean,
        value: true
      },

      areaName: {
        type: String,
        value: null
      },

      selectedBudget: {
        type: Number,
        value: 0
      },

      totalBudget: {
        type: Number
      },

      budgetLeft: {
        type: Number
      },

      selectedBudgetIsOne: {
        type: Boolean
      },

      votesWidth: {
        type: Number
      },

      wide: {
        type: Boolean
      },

      mediumWide: {
        type: Boolean
      },

      mini: {
        type: Boolean
      },

      orientationPortrait:  {
        type: Boolean
      },

      orientationLandscape:  {
        type: Boolean
      },

      currentBallot: Object,

      budgetHeaderImage: {
        type: String
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.fire('oav-set-budget-element', this);
  }

  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('selectedBudget')) {
      this.selectedBudgetIsOne = this.selectedBudget && this.selectedBudget===1.0;
    }

    if (changedProps.has('selectedItems')) {
      this._selectedItemsChanged();
    }

    if (changedProps.has('selectedBudget') || changedProps.has('totalBudget')) {
      var budgetLeft = this.totalBudget-this.selectedBudget;
      if (budgetLeft>0) {
        this.budgetLeft = budgetLeft;
      } else {
        this.budgetLeft = 0;
      }
    }
  }

  static get styles() {
    return [
      OavAreaBudgetStyles,
      OavShadowStyles,
      OavFlexLayout
    ];
  }

  render() {
    return html`
      <div class="budgetContainer center-center" ?wide="${this.wide}">
        <div class="budgetMaterial shadow-elevation-24dp" ?wide="${this.wide}">
          <div class="info layout horizontal headerContainer" ?wide="${this.wide}">
            <paper-icon-button ?hidden="${this.wide}" class="closeButton mobileActionIcons" icon="close" @click="${this._exit}"></paper-icon-button>
            <iron-image ?hidden="${!this.mediumWide}" sizing="contain" class="headerLogo" src="${this.budgetHeaderImage}"></iron-image>
            <div class="flex layout vertical center-center">
              ${!this.selectedBudget && this.areaName ?
                html`
                  <div ?hidden="${!this.wide}">${this.localize('budget_info_text', 'area_name', this.areaName)}</div>
                  <div ?hidden="${this.wide}">${this.localize('budget_info_text_mobile', 'area_name', this.areaName)}</div>
                `
                :
                ''
              }
              ${this.selectedBudget ?
                html`
                  <div ?hidden="${!this.selectedBudgetIsOne}">
                    <div class="selectedInfo" ?wide="${this.wide}" ?hidden="${!this.wide}">
                     ${this.localize("selected_items_info_one_million", "number_of_items", this.selectedItems.length, "selectedBudget", this.selectedBudget)}
                    </div>
                    <div class="selectedInfo" ?wide="${this.wide}" ?hidden="${this.wide}">
                      ${this.localize("selected_items_info_mobile_one_million", "number_of_items", this.selectedItems.length, "selectedBudget", this.selectedBudget)}
                    </div>
                  </div>
                  <div ?hidden="${this.selectedBudgetIsOne}">
                    <div class="selectedInfo" ?wide="${this.wide}" ?hidden="${!this.wide}">
                      ${this.localize("selected_items_info", "number_of_items", this.selectedItems.length, "selectedBudget", this.selectedBudget)}
                    </div>
                    <div class="selectedInfo" ?wide="${this.wide}" ?hidden="${this.wide}">
                      ${this.localize("selected_items_info_mobile", "number_of_items", this.selectedItems.length, "selectedBudget", this.selectedBudget)}
                    </div>
                  </div>
                `
                :
                ''
              }
              <div id="budgetLeftInfo" ?wide="${this.wide}">
                ${this.localize('budget_left_text','budget_left', this.budgetLeft)}
              </div>
            </div>
            <paper-icon-button ?hidden="${this.wide}" class="mobileActionIcons" icon="help-outline" @click="${this._help}"></paper-icon-button>
            <div>
              <paper-button id="votingButton" raised class="voteButton" @click="${this._submitVote}">${this.localize('vote')}</paper-button>
            </div>
          </div>
          <div id="votes" class="layout horizontal" ?wide="${this.wide}">
            <div id="noItems" class="layout horizontal center-center noItemsInfo" ?wide="${this.wide}" ?hidden="${!this.noSelectedItems}">
              ${this.totalBudget ?
              html`
                <div ?hidden="${!this.wide}" class="onOfferText">
                  ${this.localize('budget_empty_info_1', "amount", this.budgetLeft)}
                </div>
                <div>${this.localize('budget_empty_info_2')}</div>
                <paper-fab mini id="x" .elevation="5" disabled class="demoButton" icon="add"></paper-fab>
                <div>${this.localize('budget_empty_info_3')}</div>
              `
              :
              ''
              }
            </div>
          </div>
        </div>
      </div>
      <paper-toast on-tap="_closeToast" ?wide="${this.wide}" id="toast"
      .duration="3000" .horizontal-align="right" .text="">
      </paper-toast>

      <snack-bar  ?wide="${this.wide}" id="toast" @click="${this._closeToast}">
        ${this.localize('favorite_info')}
      </snack-bar>
    `;
  }

  firstUpdated() {
    this.reset();

    installMediaQueryWatcher(`(min-width: 1045px)`,
      (matches) => {
        if (matches)
          this.wide = true;
        else
          this.wide = false;
        this._resetWidth();
      });

    installMediaQueryWatcher(`(orientation: portrait)`,
      (matches) => {
        if (matches)
          this.orientationPortrait = true;
        else
          this.orientationPortrait = false;
        this._resetWidth();
      });

    installMediaQueryWatcher(`(orientation: landscape)`,
      (matches) => {
        if (matches)
          this.orientationLandscape = true;
        else
          this.orientationLandscape = false;
        this._resetWidth();
      });

    installMediaQueryWatcher(`(min-width: 640px)`,
      (matches) => {
        if (matches)
          this.mediumWide = true;
        else
          this.mediumWide = false;
        this._resetWidth();
      });

    installMediaQueryWatcher(`(max-width: 340px)`,
      (matches) => {
        if (matches)
          this.mini = true;
        else
          this.mini = false;
        this._resetWidth();
      });
  }

  constructor() {
    super();
  }


  _exit () {
    this.fire("oav-exit");
  }

  _help() {
    this.fire("oav-open-help");
  }

  _closeToast() {
    this.$$("#toast").active= false;
  }

  _resetWidth() {
    if (this.wide) {
      this.votesWidth = 940;
    } else {
      this.votesWidth = window.innerWidth;
    }
    this._resetBudgetDiv();
    this.selectedItems.forEach(function (item) {
      this._addItemToDiv(item);
    }.bind(this));
  }

  _millionWord() {
    // var localizeMethod = this.__computeLocalize(this.language, this.resources, this.formats);
    if (this.wide) {
      return this.localize('million');
    } else {
      return this.localize('million_short');
    }
  }

  _submitVote() {
    this.activity('click', 'submitVote');
    this.currentBallot.fire('oav-submit-vote');
  }

  _selectedItemsChanged() {
    if (this.selectedItems && this.selectedItems.length>0) {
      this.noSelectedItems = false;
      this.$$("#votingButton").disabled = false;
    } else {
      this.noSelectedItems = true;
      this.$$("#votingButton").disabled = true;
    }
  }

  reset() {
    this._resetBudgetDiv();
    this.selectedItems = [];
    this.selectedBudget = 0;
    this.budgetHeaderImage = 'https://s3-eu-west-1.amazonaws.com/oav-direct-assets/hm2018/hm2018-400x120-logo-2x.png';
  }

  _resetBudgetDiv() {
    let votes = this.$$("#votes");
    while (votes.lastChild && votes.lastChild.id!='noItems' && votes.lastChild.id!='budgetLeftInfo') {
      votes.removeChild(votes.lastChild);
    }
  }

  _removeItemFromArray(item) {
    var newArray = [];
    this.selectedItems.forEach(function (i) {
      if (i.id!=item.id) {
        newArray.push(i);
      }
    });
    this.selectedItems = newArray;
  }

  _addItemToDiv(item) {
    var itemWidth = parseInt(this.votesWidth * (item.price / this.totalBudget));

    if (!this.wide) {
      itemWidth -= 1;
    }
    var container = document.createElement("div");
    container.id = "item_id_"+item.id;
    if (this.wide) {
      container.style.height = '100px';
    } else {
      container.style.height = '81px';
    }
    container.style.width = itemWidth + 'px';
    container.className = 'budgetBallotVote';
    container.backgroundColor = "#F00";
    container.style.position = "relative";
    container.style.cursor = "pointer";

    var image = document.createElement("iron-image");
    image.src = item.image_url;
    image.setAttribute("sizing", "cover");
    image.setAttribute('alt', item.name);
    image.setAttribute('title', item.name);
    image.title= item.name;
    image.style.borderLeft = 'solid 1px';
    image.style.borderRight = 'solid 1px';
    image.style.borderColor = '#ff6500';
    if (this.wide) {
      image.style.height = '100px';
    } else {
      image.style.height = '81px';
    }
    image.style.width = itemWidth + 'px';

    container.appendChild(image);

    container.addEventListener('tap', function () {
      this.fire('oav-scroll-item-into-view', item.id);
    }.bind(this));

    this.$$("#votes").appendChild(container);

    var animation = container.animate([
      { transform: "translateX(-75px) scale(2)",  easing: 'ease-out' },
      { transform: "scale(1)", easing: 'ease-out' }
    ], {
      duration: 600,
      iterations: 1
    });

    this.$$("#budgetLeftInfo").animate([
      { transform: "scale(1)" },
      { transform: "scale(1.75)",  easing: 'ease-in-out' },
      { transform: "scale(1)", easing: 'ease-out' }
    ], {
      duration: 820,
      iterations: 1
    });

    if (this.toastCounter<1) {
      this.$$("#toast").active = true;
      this.toastCounter+=1;
    }
  }

  _removeItemFromDiv(item) {
    var selectedItemDiv = this.$$("#item_id_"+item.id);
    selectedItemDiv.parentNode.removeChild(selectedItemDiv);
  }

  getItemLeftTop(item) {
    var selectedItemDiv = this.$$("#item_id_"+item.id);
    if (selectedItemDiv) {
      var buttonRect = selectedItemDiv.getBoundingClientRect();
      var left = ((buttonRect.right-buttonRect.left)/2)+buttonRect.left;
      var top = ((buttonRect.bottom-buttonRect.top)/2)+buttonRect.top;
      if (this.wide) {
        left = left - 24;
        top = top - 24;
      } else {
        left = left - 18;
        top = top - 18;
      }
      return { left: left, top: top }
    } else {
      console.error("Trying to get item that is not in the budget");
    }
  }

  toggleBudgetItem(item) {
    this.activity('toggle', 'vote');
    if (this.selectedItems.indexOf(item) > -1) {
      this.activity('remove', 'vote');
      this._removeItemFromArray(item);
      this._removeItemFromDiv(item);
      this.selectedItems = [
        ...this.selectedItems
      ];
      this.selectedBudget = this.selectedBudget - item.price;
      this.currentBallot.fire('oav-item-de-selected-from-budget', { itemId: item.id });
    } else {
      if (this.selectedBudget+item.price<=this.totalBudget) {
        this.activity('add', 'vote');
        this.selectedItems.push(item);
        this.selectedItems = [
          ...this.selectedItems
        ];
        this._addItemToDiv(item);
        this.selectedBudget = this.selectedBudget + item.price;
        this.currentBallot.fire('oav-item-selected-in-budget', { itemId: item.id });
      } else {
        this.currentBallot.fire('oav-error', this.localize('error_does_not_fit_in_budget'));
      }
    }
  }

  toggleFavoriteItem(item) {
    this.activity('toggle', 'favorite');
    if (this.favoriteItem != item) {
      if (item) {
        this.activity('add', 'favorite');
      } else {
        this.activity('remove', 'favorite');
      }
      this.favoriteItem = item;
    }
  }

  _removeItem(itemId) {
    this.selectedItems.forEach(function (item) {
      if (item.id==itemId) {
        this.toggleBudgetItem(item);
      }
    }.bind(this));
  }

  convertDots(num) {
    return num.replace(".", ",");
  }
}

window.customElements.define('oav-area-budget', OavAreaBudget);
