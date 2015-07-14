Feature: angular.element

  Scenario: Circle
    When I browse to the "/"
    And I enter "circle" into "input" field
    Then I should see "circle" in "element"

  Scenario: Square
    When I browse to the "/"
    And I enter "square" into "input" field
    Then I should see "square" in "element"
    Then I should not see message in "element"

  Scenario: Empty input
    When I browse to the "/"
    Then I should see "text-danger" in "element"
    And I should see "You did not enter *circle* or *square*" message in "element"

  Scenario: Enter other than 'circle' or 'square' text
    When I browse to the "/"
    And I enter "apple" into "input" field
    Then I should see "text-danger" in "element"
    And I should see "You did not enter *circle* or *square*" message in "element"



