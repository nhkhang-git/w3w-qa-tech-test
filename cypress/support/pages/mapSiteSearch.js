import { MapSiteHomePage } from "./mapSiteHomePage";

export class MapSiteSearch extends MapSiteHomePage {
  // Search Elements
  static SEARCH_INPUT = '[data-testid="SearchPanel-Input"]';
  static SEARCH_INPUT_BLUR = '[data-testid="SearchPanel-InputBlur"]';
  static SEARCH_SUGGESTION_ITEMS = '[data-testid="SearchPanel-Item"]';
  static SEARCH_PANEL_WARNING = '[data-testid="SearchPanel-Warning"]';
  static THREE_WORD_ADDRESS_LOCATION_CONTEXT = '[data-testid="ThreeWordAddress-LocationContext"]';

  static getBlurSearchInput() {
    return cy.get(this.SEARCH_INPUT_BLUR);
  }

  static getSearchInput() {
    return cy.get(this.SEARCH_INPUT);
  }

  static getSearchSuggestionItems() {
    return cy.get(this.SEARCH_SUGGESTION_ITEMS, { timeout: 5000 });
  }

  static getSearchPanelWarning() {
    return cy.get(this.SEARCH_PANEL_WARNING, { timeout: 5000 });
  }

  static getThreeWordAddressLocationContext() {
    return cy.get(this.THREE_WORD_ADDRESS_LOCATION_CONTEXT);
  }
}
