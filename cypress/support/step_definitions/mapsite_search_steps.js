import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { MapSiteSearchAction } from "../actions/map_site/mapSiteSearchAction";
import { MapSiteSearchAssertion } from "../assertions/map_site/mapSiteSearchAssertion";

When(/^I search for "([^"]*)"$/, (searchTerm) => {
  MapSiteSearchAction.performSearch(searchTerm);
});

When(/^I search for coordinates "([^"]*)" and "([^"]*)"$/, (latitude, longitude) => {
  MapSiteSearchAction.performSearch(`${latitude}, ${longitude}`);
});

Then(/^I should see search suggestions$/, () => {
  MapSiteSearchAssertion.isSearchSuggestionItemsVisible();
});

Then(/^I select the suggestion with address "([^"]*)"$/, (address) => {
  MapSiteSearchAction.selectSuggestion(address);
});

Then(/^I select the first suggestion$/, () => {
  MapSiteSearchAction.selectFirstSuggestion();
});

Then(/^the location should be displayed on the map$/, () => {
  cy.wait(500); //wait for switching to new url
  cy.waitForMapPageReady().then(() => {
    cy.validateLocationDisplayed();
  });
});

Then(/^I should see an error message "([^"]*)"$/, (expectedErrorMessage) => {
  MapSiteSearchAssertion.isSearchPanelWarningVisibleAndContainErrorMessage(expectedErrorMessage);
});
