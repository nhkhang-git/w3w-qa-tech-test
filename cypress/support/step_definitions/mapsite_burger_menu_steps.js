import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { MapSiteBurgerMenuAction } from "../actions/map_site/mapSiteBurgerMenuAction";
import { MapSiteBurgerMenuAssertion } from "../assertions/map_site/mapSiteBurgerMenuAssertion";

When(/^I open the menu and select the three word address language menu setting$/, () => {
  cy.selectThreeWordAddressLanguageSettingFromBurgerMenu();
});

When(/^I change the language to "([^"]*)"$/, (targetLanguage) => {
  MapSiteBurgerMenuAction.selectLanguageOption(targetLanguage);
});

Then(/^the language should be set correctly to "([^"]*)"$/, (expectedLanguage) => {
  MapSiteBurgerMenuAssertion.isLanguageOptionChecked(expectedLanguage);
});

Then(/^I close the menu$/, () => {
  MapSiteBurgerMenuAction.closeMenu();
});
