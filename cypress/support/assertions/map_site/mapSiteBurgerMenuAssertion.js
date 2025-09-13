import { MapSiteBurgerMenu } from "../../pages/mapSiteBurgerMenu";

export class MapSiteBurgerMenuAssertion {
  static isLanguageOptionChecked(languageName) {
    return MapSiteBurgerMenu.getLanguageOption()
      .contains(languageName)
      .within(() => {
        cy.get('input[type="radio"]').should("be.checked");
      });
  }
}
