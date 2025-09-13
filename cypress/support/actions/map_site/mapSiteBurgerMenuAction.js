import { MapSiteBurgerMenu } from "../../pages/mapSiteBurgerMenu";

export class MapSiteBurgerMenuAction {
  static selectLanguageOption(languageName) {
    return MapSiteBurgerMenu.getLanguageOption().contains(languageName).scrollIntoView().click();
  }

  static closeMenu() {
    return MapSiteBurgerMenu.getCloseMenu().click();
  }
}
