Feature: Calculator

  Scenario: Sum default
    When I browse to the "/"
    When I click "sum.button"
    Then I should see "7" in "sum.result"

  Scenario: Sum: set numbers to add
    When I browse to the "/"
    When I enter "124" into "sum.firstNumber" field
    And I enter "24" into "sum.secondNumber" field
    And I click "sum.button"
    Then I should see "148" in "sum.result"

  Scenario: Sub default
    When I browse to the "/"
    When I click "sub.button"
    Then I should see "11" in "sub.result"

  Scenario: Sub: set numbers to subtraction
    When I browse to the "/"
    When I enter "56" into "sub.firstNumber" field
    And I enter "24" into "sub.secondNumber" field
    And I click "sub.button"
    Then I should see "32" in "sub.result"

  Scenario: Multi default
    When I browse to the "/"
    When I click "multi.button"
    Then I should see "24" in "multi.result"

  Scenario: Multi: set numbers to multiplication
    When I browse to the "/"
    When I enter "3" into "multi.firstNumber" field
    And I enter "3" into "multi.secondNumber" field
    And I click "multi.button"
    Then I should see "9" in "multi.result"

  Scenario: Divide default
    When I browse to the "/"
    When I click "divide.button"
    Then I should see "3.00" in "divide.result"

  Scenario: Divide: set numbers to divide
    When I browse to the "/"
    When I enter "15" into "divide.firstNumber" field
    And I enter "2" into "divide.secondNumber" field
    And I click "divide.button"
    Then I should see "7.50" in "divide.result"


