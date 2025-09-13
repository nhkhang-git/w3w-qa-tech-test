import { MapSiteSearch } from "../../pages/mapSiteSearch";

export class MapSiteSearchAction {
  static performSearch(searchTerm) {
    return MapSiteSearch.getBlurSearchInput()
      .click()
      .then(() => MapSiteSearch.getSearchInput().clear())
      .then(() => MapSiteSearch.getSearchInput().type(searchTerm));
  }

  static selectFirstSuggestion() {
    return MapSiteSearch.getSearchSuggestionItems().first().click();
  }

  static selectSuggestion(suggestion) {
    return MapSiteSearch.getSearchSuggestionItems().contains(suggestion).click();
  }
}
