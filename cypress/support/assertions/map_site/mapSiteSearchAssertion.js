import { MapSiteSearch } from "../../pages/mapSiteSearch";

export class MapSiteSearchAssertion {
  static isSearchSuggestionItemsVisible() {
    return MapSiteSearch.getSearchSuggestionItems().should("be.visible");
  }

  static isSearchPanelWarningVisibleAndContainErrorMessage(expectedErrorMessage) {
    return MapSiteSearch.getSearchPanelWarning().should("be.visible").and("contain", expectedErrorMessage);
  }
}
