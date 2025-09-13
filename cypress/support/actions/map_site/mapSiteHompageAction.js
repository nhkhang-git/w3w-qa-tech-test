import { MapSiteHomePage } from "../../pages/mapSiteHomePage";

export class MapSiteHomePageAction {
  static visitMapSite() {
    return cy.visit(Cypress.env("mapSiteUrl"));
  }

  static acceptCookies() {
    return MapSiteHomePage.getAcceptCookies().click();
  }

  static closeOnboardingPrompt() {
    return MapSiteHomePage.getOnboardingPrompt().click();
  }
}
