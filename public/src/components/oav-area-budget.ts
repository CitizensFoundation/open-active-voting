import { customElement, html, property } from "lit-element";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { installMediaQueryWatcher } from "pwa-helpers/media-query.js";

import { OavAreaBudgetStyles } from "./oav-area-budget-styles.js";
import { OavShadowStyles } from "./oav-shadow-styles";

import "@polymer/paper-fab";
import "@polymer/paper-icon-button";
import "@polymer/paper-button";
import "@polymer/iron-image";
import { OavBaseElement } from "./oav-base-element.js";
import { OavFlexLayout } from "./oav-flex-layout.js";
import { PaperButtonElement } from "@polymer/paper-button";
import { OavAreaBallot } from './oav-area-ballot.js';

@customElement("oav-area-budget")
export class OavAreaBudget extends OavBaseElement {
  @property({ type: Array })
  selectedItems: Array<OavItemAttributes> = [];

  @property({ type: Number })
  toastCounter = 0;

  @property({ type: Boolean })
  noSelectedItems = true;

  @property({ type: Boolean })
  wide = false;

  @property({ type: Boolean })
  mediumWide = false;

  @property({ type: Boolean })
  mini = false;

  @property({ type: Boolean })
  orientationPortrait = false;

  @property({ type: Boolean })
  orientationLandscape = false;

  @property({ type: Boolean })
  selectedBudgetIsOne = false;

  @property({ type: Boolean })
  showExit = false;

  @property({ type: String })
  areaName: string | undefined;

  @property({ type: String })
  budgetHeaderImage: string | undefined;

  @property({ type: Number })
  selectedBudget = 0;

  @property({ type: Number })
  totalBudget: number | undefined;

  @property({ type: Number })
  budgetLeft: number | undefined;

  @property({ type: Number })
  votesWidth: number | undefined;

  @property({ type: Object })
  currentBallot!: OavAreaBallot;

  @property({ type: Object })
  configFromServer!: OavConfigFromServer;

  favoriteItem: OavItemAttributes | undefined;

  connectedCallback() {
    super.connectedCallback();
    this.fire("oav-set-budget-element", this);
  }

  updated(changedProps: Map<string | number | symbol, unknown>) {
    super.updated(changedProps);
    if (changedProps.has("selectedBudget")) {
      this.selectedBudgetIsOne = this.selectedBudget === 1.0;
    }

    if (changedProps.has("selectedItems")) {
      this._selectedItemsChanged();
    }

    if (
      (changedProps.has("selectedBudget") || changedProps.has("totalBudget")) &&
      this.totalBudget != undefined &&
      this.selectedBudget != undefined
    ) {
      var budgetLeft = this.totalBudget - this.selectedBudget;
      if (budgetLeft > 0) {
        this.budgetLeft = budgetLeft;
      } else {
        this.budgetLeft = 0;
      }

      if (
        this.totalBudget != this.budgetLeft &&
        (this.toastCounter < 1 ||
          this.currentBallot.itemsLeftToSelect<1)
      ) {
        this.fire("oav-open-favorite-toast");
        this.toastCounter += 1;
      }
    }
  }

  static get styles() {
    return [OavAreaBudgetStyles, OavShadowStyles, OavFlexLayout];
  }

  render() {
    return html`
      <div class="budgetContainer center-center" ?wide="${this.wide}">
        <div class="budgetMaterial shadow-elevation-24dp" ?wide="${this.wide}">
          <div
            class="info layout horizontal headerContainer"
            ?wide="${this.wide}"
          >
            <span ?hidden="${!this.showExit}">
              <paper-icon-button
                alt="${this.localize("close")}"
                ?hidden="${this.wide}"
                class="mobileActionIcons closeButton"
                icon="closeExit"
                @click="${this._exit}"
              ></paper-icon-button>
            </span>
            <img
              ?hidden="${!this.wide}"
              sizing="cover"
              class="headerLogo" alt="Logo"
              src="${ifDefined(this.budgetHeaderImage)}"
            />
            <div class="vertical center-center" style="width: 100%;">
              <div class="flex">
                ${!this.selectedBudget && this.areaName
                  ? html`
                      <div ?hidden="${!this.wide}" class="budgetText">
                        ${this.localize(
                          "budget_info_text",
                          "area_name",
                          this.areaName
                        )}
                      </div>
                      <div ?hidden="${this.wide}" class="mobileBudgetText">
                        ${this.localize(
                          "budget_info_text_mobile",
                          "area_name",
                          this.areaName
                        )}
                      </div>
                    `
                  : ""}
                ${this.selectedBudget
                  ? html`
                      <div ?hidden="${!this.selectedBudgetIsOne}">
                        <div
                          class="selectedInfo budgetText"
                          ?wide="${this.wide}"
                          ?hidden="${!this.wide}"
                        >
                          ${this.localize(
                            "selected_items_info_one_million",
                            "number_of_items",
                            this.selectedItems.length,
                            "selectedBudget",
                            this.formatNumber(
                              this.selectedBudget,
                              this.configFromServer.client_config.currencySymbol
                            )
                          )}
                        </div>
                        <div
                          class="selectedInfo mobileBudgetText"
                          ?wide="${this.wide}"
                          ?hidden="${this.wide}"
                        >
                          ${this.localize(
                            "selected_items_info_mobile_one_million",
                            "number_of_items",
                            this.selectedItems.length,
                            "selectedBudget",
                            this.formatNumber(
                              this.selectedBudget,
                              this.configFromServer.client_config.currencySymbol
                            )
                          )}
                        </div>
                      </div>
                      <div ?hidden="${this.selectedBudgetIsOne}">
                        <div
                          class="selectedInfo budgetText"
                          ?wide="${this.wide}"
                          ?hidden="${!this.wide}"
                        >
                          ${this.localize(
                            "selected_items_info",
                            "number_of_items",
                            this.selectedItems.length,
                            "selectedBudget",
                            this.formatNumber(
                              this.selectedBudget,
                              this.configFromServer.client_config.currencySymbol
                            )
                          )}
                        </div>
                        <div
                          class="selectedInfo mobileBudgetText"
                          ?wide="${this.wide}"
                          ?hidden="${this.wide}"
                        >
                          ${this.localize(
                            "selected_items_info_mobile",
                            "number_of_items",
                            this.selectedItems.length,
                            "selectedBudget",
                            this.formatNumber(
                              this.selectedBudget,
                              this.configFromServer.client_config.currencySymbol
                            )
                          )}
                        </div>
                      </div>
                    `
                  : ""}
                <div
                  id="budgetLeftInfo"
                  ?wide="${this.wide}"
                  ?hidden="${!this.currentBallot ||
                  this.budgetLeft == undefined}"
                >
                  ${this.localize(
                    "budget_left_text",
                    "budget_left",
                    this.formatNumber(
                      this.budgetLeft!,
                      this.configFromServer.client_config.currencySymbol,
                      undefined
                    )
                  )}
                </div>
              </div>
            </div>
            <paper-icon-button
              ?hidden="${this.wide}"
              class="mobileActionIcons"
              alt="${this.localize("help")}"
              icon="help-outline"
              @click="${this._help}"
            ></paper-icon-button>
            <div>
              <paper-button
                id="votingButton"
                raised
                class="voteButton"
                @click="${this._submitVote}"
                >${this.localize("vote")}</paper-button
              >
            </div>
          </div>
          <div id="votes" class="layout horizontal" ?wide="${this.wide}">
            <div
              id="noItems"
              class="layout horizontal noItemsInfo"
              ?wide="${this.wide}"
              ?hidden="${!this.noSelectedItems}"
            >
              ${this.totalBudget
                ? html`
                    <div class="layout horizontal center-center">
                      <div ?hidden="${!this.wide}" class="onOfferText">
                        ${this.localize(
                          "budget_empty_info_1",
                          "amount",
                          this.formatNumber(
                            this.budgetLeft!,
                            this.configFromServer.client_config.currencySymbol
                          )
                        )}
                      </div>
                      <div>${this.localize("budget_empty_info_2")}</div>
                      <paper-fab
                        aria-label="${this.localize("add_to_budget")}"
                        mini
                        id="x"
                        elevation="5"
                        disabled
                        class="demoButton"
                        icon="add"
                      ></paper-fab>
                      <div>${this.localize("budget_empty_info_3")}</div>
                    </div>
                  `
                : ""}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.reset();

    installMediaQueryWatcher(`(min-width: 1024px)`, (matches) => {
      if (matches) this.wide = true;
      else this.wide = false;
      this._resetWidth();
    });

    installMediaQueryWatcher(`(orientation: portrait)`, (matches) => {
      if (matches) this.orientationPortrait = true;
      else this.orientationPortrait = false;
      this._resetWidth();
    });

    installMediaQueryWatcher(`(orientation: landscape)`, (matches) => {
      if (matches) this.orientationLandscape = true;
      else this.orientationLandscape = false;
      this._resetWidth();
    });

    installMediaQueryWatcher(`(min-width: 640px)`, (matches) => {
      if (matches) this.mediumWide = true;
      else this.mediumWide = false;
      this._resetWidth();
    });

    installMediaQueryWatcher(`(max-width: 340px)`, (matches) => {
      if (matches) this.mini = true;
      else this.mini = false;
      this._resetWidth();
    });
  }

  constructor() {
    super();
    this.toastCounter = 0;
  }

  _exit() {
    this.fire("oav-exit");
  }

  _help() {
    this.fire("oav-open-help");
  }

  _resetWidth() {
    if (this.wide) {
      this.votesWidth = 940;
    } else {
      this.votesWidth = window.innerWidth;
    }
    this._resetBudgetDiv();
    this.selectedItems.forEach((item) => {
      this._addItemToDiv(item);
    });
  }

  _millionWord() {
    // var localizeMethod = this.__computeLocalize(this.language, this.resources, this.formats);
    if (this.wide) {
      return this.localize("million");
    } else {
      return this.localize("million_short");
    }
  }

  _submitVote() {
    this.activity("click", "submitVote");
    this.currentBallot.fire("oav-submit-vote");
  }

  _selectedItemsChanged() {
    if (this.selectedItems && this.selectedItems.length > 0) {
      this.noSelectedItems = false;
      (this.$$("#votingButton") as PaperButtonElement).disabled = false;
    } else {
      this.noSelectedItems = true;
      (this.$$("#votingButton") as PaperButtonElement).disabled = true;
    }
  }

  reset() {
    this._resetBudgetDiv();
    this.selectedItems = [];
    this.selectedBudget = 0;
    this.budgetLeft = undefined;
    this.totalBudget = undefined;
    this.budgetHeaderImage =
      this.configFromServer.client_config.ballotBudgetLogo;
  }

  _resetBudgetDiv() {
    let votes = this.$$("#votes") as HTMLElement;
    //@ts-ignore
    while (
      votes.lastChild &&
      (votes.lastChild as HTMLElement).id != "noItems" &&
      (votes.lastChild as HTMLElement).id != "budgetLeftInfo"
    ) {
      votes.removeChild(votes.lastChild);
    }
  }

  _removeItemFromArray(item: OavItemAttributes) {
    const newArray: Array<OavItemAttributes> = [];
    this.selectedItems.forEach(function (i) {
      if (i.id != item.id) {
        newArray.push(i);
      }
    });
    this.selectedItems = newArray;
  }

  _addItemToDiv(item: OavItemAttributes) {
    var itemWidth = Math.round(
      this.votesWidth! * (item.price / this.totalBudget!)
    );

    if (!this.wide) {
      itemWidth -= 1;
    }
    var container = document.createElement("div");
    container.id = "item_id_" + item.id;
    if (this.wide) {
      container.style.height = "100px";
    } else {
      container.style.height = "81px";
    }
    container.style.width = itemWidth + "px";
    container.className = "budgetBallotVote";
    //container.style.backgroundColor = "#F00";
    container.style.position = "relative";

    var image = document.createElement("iron-image");
    image.src = item.image_url;
    image.setAttribute("sizing", "cover");
    image.setAttribute("alt", item.name);
    image.setAttribute("title", item.name);
    image.setAttribute("style", "cursor: pointer;");

    image.title = item.name;
    image.style.borderLeft = "solid 1px";
    image.style.borderRight = "solid 1px";
    image.style.borderColor = "var(--app-budget-image-border-color, #ff6500)";
    if (this.wide) {
      image.style.height = "100px";
    } else {
      image.style.height = "81px";
    }
    image.style.width = itemWidth + "px";

    container.appendChild(image);

    container.addEventListener("tap", () => {
      this.fire("oav-scroll-item-into-view", item.id);
    });

    (this.$$("#votes") as HTMLElement).appendChild(container);

    var animation = container.animate(
      [
        { transform: "translateX(-75px) scale(2)", easing: "ease-out" },
        { transform: "scale(1)", easing: "ease-out" },
      ],
      {
        duration: 600,
        iterations: 1,
      }
    );

    (this.$$("#budgetLeftInfo") as HTMLElement).animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.75)", easing: "ease-in-out" },
        { transform: "scale(1)", easing: "ease-out" },
      ],
      {
        duration: 820,
        iterations: 1,
      }
    );

    if (this.configFromServer.client_config.shakeVotingButton) {
      (this.$$("#votingButton") as HTMLElement).animate(
        [
          { transform: "translateX(-1px)", easing: "ease-in" },
          { transform: "translateX(1px)", easing: "ease-in" },
          { transform: "translateX(-2px)", easing: "ease-out" },
          { transform: "translateX(2px)", easing: "ease-out" },
          { transform: "translateX(-1px)", easing: "ease-in" },
          { transform: "translateX(1px)", easing: "ease-in" },
        ],
        {
          duration: 650,
          iterations: 1,
        }
      );
    }
  }

  _removeItemFromDiv(item: OavItemAttributes) {
    var selectedItemDiv = this.$$("#item_id_" + item.id) as HTMLElement;
    selectedItemDiv.parentNode!.removeChild(selectedItemDiv);
  }

  getItemLeftTop(item: OavItemAttributes) {
    var selectedItemDiv = this.$$("#item_id_" + item.id);
    if (selectedItemDiv) {
      var buttonRect = selectedItemDiv.getBoundingClientRect();
      var left = (buttonRect.right - buttonRect.left) / 2 + buttonRect.left;
      var top = (buttonRect.bottom - buttonRect.top) / 2 + buttonRect.top;
      if (this.wide) {
        left = left - 24;
        top = top - 24;
      } else {
        left = left - 18;
        top = top - 18;
      }
      return { left: left, top: top };
    } else {
      console.error("Trying to get item that is not in the budget");
    }
  }

  toggleBudgetItem(item: OavItemAttributes) {
    this.activity("toggle", "vote");
    if (this.selectedItems.indexOf(item) > -1) {
      this.activity("remove", "vote");
      this._removeItemFromArray(item);
      this._removeItemFromDiv(item);
      this.selectedItems = [...this.selectedItems];
      this.selectedBudget = this.selectedBudget - item.price;
      this.currentBallot.fire("oav-item-de-selected-from-budget", {
        itemId: item.id,
      });
    } else {
      if (this.selectedBudget + item.price <= this.totalBudget!) {
        this.activity("add", "vote");
        this.selectedItems.push(item);
        this.selectedItems = [...this.selectedItems];
        this.selectedBudget = this.selectedBudget + item.price;
        this._addItemToDiv(item);
        this.currentBallot.fire("oav-item-selected-in-budget", {
          itemId: item.id,
        });
      } else {
        this.currentBallot.fire(
          "oav-error",
          this.localize("error_does_not_fit_in_budget")
        );
      }
    }
  }

  toggleFavoriteItem(item: OavItemAttributes) {
    this.activity("toggle", "favorite");
    if (this.favoriteItem != item) {
      if (item) {
        this.activity("add", "favorite");
      } else {
        this.activity("remove", "favorite");
      }
      this.favoriteItem = item;
    }
  }

  _removeItem(itemId: number) {
    this.selectedItems.forEach((item) => {
      if (item.id == itemId) {
        this.toggleBudgetItem(item);
      }
    });
  }

  convertDots(num: string) {
    return num.replace(".", ",");
  }
}
