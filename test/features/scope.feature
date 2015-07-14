Feature: scope

  Scenario: Unit
    When I browse to the "/"
    And I enter "John" into "unitInput" field
    And I click "unitButton"
    Then I should see "John" message in "unitMessage"

  Scenario: Separate
    When I browse to the "/"
    And I enter "Jack" into "separateInput" field
    And I click "separateButton"
    Then I should see "Jack" message in "separateMessage"

  Scenario: Unit and separate
    When I browse to the "/"
    And I enter "Mike" into "unitInput" field
    And I enter "Rose" into "separateInput" field
    And I click "separateButton"
    And I click "unitButton"
    Then I should see "Mike" message in "unitMessage"
    And I should see "Rose" message in "separateMessage"
