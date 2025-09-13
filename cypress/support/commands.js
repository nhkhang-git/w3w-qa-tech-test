import { MapSiteBurgerMenu } from "./pages/mapSiteBurgerMenu";
import { MapSiteHomePage } from "./pages/mapSiteHomePage";
import { MapSiteSearch } from "./pages/mapSiteSearch";

Cypress.Commands.add("selectThreeWordAddressLanguageSettingFromBurgerMenu", () => {
  return MapSiteHomePage.getOpenBurgerMenu()
    .click()
    .then(() => {
      MapSiteBurgerMenu.getThreeWordAddressLanguageMenu().click();
    });
});

Cypress.Commands.add("waitForMapPageReady", () => {
  return MapSiteHomePage.getMapContainer().should("be.visible").and("have.attr", "data-gridvisible", "true");
});

Cypress.Commands.add("validateLocationDisplayed", () => {
  return MapSiteSearch.getThreeWordAddressLocationContext()
    .invoke("text")
    .then((text) => {
      cy.url().should("include", text);
    });
});
