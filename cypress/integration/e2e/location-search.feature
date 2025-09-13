Feature: What3Words Map Site Search Functionality
  As a user of the what3words map site
  I want to search for locations using different input types
  So that I can find and navigate to specific what3words locations

  Background:
    Given a user visits w3w mapsite and accepts cookies
    And I wait for the map page to be ready
    And I close the onboarding prompt

  @search @positive @threeword
  Scenario Outline: Search by 3 word address
    When I search for "<three_word_address>"
    Then I should see search suggestions
    And I select the suggestion with address "<three_word_address>"
    Then the location should be displayed on the map

    Examples:
      | three_word_address    | note                           |
      | certified.potato.vine | Standard 3-word address format |

  @search @positive
  Scenario Outline: Search by normal address
    When I search for "<normal_address>"
    Then I should see search suggestions
    And I select the suggestion with address "<expected_address>"
    Then the location should be displayed on the map

    Examples:
      | normal_address | expected_address   |
      | Tower Bridge   | Tower Bridge hotel |

  @search @positive
  Scenario Outline: Change language and search by coordinates
    When I open the menu and select the three word address language menu setting
    And I change the language to "<target_language>"
    Then the language should be set correctly to "<target_language>"
    And I close the menu
    When I search for coordinates "<latitude>" and "<longitude>"
    Then I should see search suggestions
    And I select the first suggestion
    Then the location should be displayed on the map

    Examples:
      | target_language | latitude  | longitude   | note                                  |
      | German          | 51.521251 | -0.20358600 | Search coordinates in German language |

  @search @negative
  Scenario Outline: Search invalid addresses
    When I search for "<invalid_address>"
    Then I should see an error message "No address found."

    Examples:
      | invalid_address         | note                       |
      | hear.limited.frown.know | invalid format of location |
