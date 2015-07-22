Feature: Route Life Cycle

  Scenario: Mission Home
    When I browse to the "/"
    When I click radio option "basket" on "radio"
    And I click "homeButton"
    Then I should be directed to "/home"
    And I should see "The mission was started!" text in "start"
    And I should see "...in the kitchen." text in "message"
    And I should see "basket" text in "selectedThing"

  Scenario: Mission Home
    When I browse to the "/"
    When I click radio option "chicken" on "radio"
    And I click "forestButton"
    Then I should be directed to "/forest"
    And I should see "The mission was started!" text in "start"
    And I should see "...in the deep, deep wood." text in "message"
    And I should see "chicken" text in "selectedThing"


