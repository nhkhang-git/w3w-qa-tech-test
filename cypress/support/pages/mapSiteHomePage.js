export class MapSiteHomePage {
  // Cookie and Menu Elements
  static ACCEPT_COOKIES = '[data-testid="accept-all"]';
  static ONBOARDING_CLOSE_BUTTON = '[data-testid="OnboardingPrompt-CloseButton"]';
  static OPEN_BURGER_MENU = '[data-testid="HeaderMenu-Menu_open"]';
  // Map Elements
  static MAP_CONTAINER = '[data-testid="MapGrid"]';

  static getAcceptCookies() {
    return cy.get(this.ACCEPT_COOKIES);
  }

  static getOpenBurgerMenu() {
    return cy.get(this.OPEN_BURGER_MENU);
  }

  static getOnboardingPrompt() {
    return cy.get(this.ONBOARDING_CLOSE_BUTTON);
  }

  static getMapContainer() {
    return cy.get(this.MAP_CONTAINER, { timeout: 10000 });
  }
}
