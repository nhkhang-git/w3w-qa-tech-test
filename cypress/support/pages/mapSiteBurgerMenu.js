import { MapSiteHomePage } from "./mapSiteHomePage";

export class MapSiteBurgerMenu extends MapSiteHomePage {
  // Language Menu Elements
  static THREE_WORD_ADDRESS_LANGUAGE_MENU = '[data-testid="ThreeWordsLanguage"]';
  static LANGUAGE_OPTION = '[data-testid^="Language-"]:not([data-testid="Language-Name"])';
  static CLOSE_MENU = '[data-testid="HeaderMenu-Menu_close"]';

  static getCloseMenu() {
    return cy.get(this.CLOSE_MENU);
  }

  static getLanguageOption() {
    return cy.get(this.LANGUAGE_OPTION);
  }

  static getThreeWordAddressLanguageMenu() {
    return cy.get(this.THREE_WORD_ADDRESS_LANGUAGE_MENU);
  }
}
