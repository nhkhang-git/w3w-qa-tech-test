import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { MapSiteHomePageAction } from "../actions/map_site/mapSiteHompageAction";

Given(/^a user visits w3w mapsite and accepts cookies$/, () => {
  MapSiteHomePageAction.visitMapSite().then(() => {
    MapSiteHomePageAction.acceptCookies();
  });
});

Given(/^I wait for the map page to be ready$/, () => {
  cy.waitForMapPageReady();
});

Given(/^I navigate to the specific location "([^"]*)"$/, (threeWordAddress) => {
  MapSiteHomePageAction.visitSpecificLocation(threeWordAddress);
});

Then(/^I close the onboarding prompt$/, () => {
  MapSiteHomePageAction.closeOnboardingPrompt();
});
