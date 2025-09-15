import { MapSiteHomePage } from "../../pages/mapSiteHomePage";

export class MapSiteHomePageAction {
  static visitMapSite() {
    return cy.visit(Cypress.env("mapSiteUrl"));
  }

  static visitSpecificLocation(threeWordAddress) {
    const fullUrl = `${Cypress.env("mapSiteUrl")}/${threeWordAddress}`;
    return cy.visit(fullUrl);
  }

  static acceptCookies() {
    return MapSiteHomePage.getAcceptCookies().click();
  }

  static closeOnboardingPrompt() {
    return MapSiteHomePage.getOnboardingPrompt().click();
  }
}
