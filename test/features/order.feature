Feature: Promises

  Scenario: Fill order and quantity
    When I browse to the "/"
    When I enter "11" into "quantity" field
    When I enter "10" into "price" field
    When I click "nextButton"
    Then I should see "You give correct data" text in "successAlert"
    Then I should see "$110.00" text in "cost"

  Scenario: Empty order or quantity
    When I browse to the "/"
    When I click "nextButton"
    Then I should see "You give wrong data" text in "dangerAlert"
    Then I should see "$0.00" text in "cost"

