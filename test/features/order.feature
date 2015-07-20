Feature: Promises

  Scenario: Resolve default order
    When I browse to the "/"
    When I click "addButton"
    And I click "resolveButton"
    Then I should see "Pasta" in "order.name" column in row "1" of "orders" table
    Then I should see "4" in "order.quantity" column in row "1" of "orders" table

  Scenario: Resolve more orders
    When I browse to the "/"
    And I enter "Spaghetti" into "name" field
    And I click "addButton"
    And I enter "Orange juice" into "name" field
    And I enter "1" into "quantity" field
    And I click "addButton"
    And I click "resolveButton"
    And I click "resolveButton"
    Then I should see "Spaghetti" in "order.name" column in row "1" of "orders" table
    Then I should see "4" in "order.quantity" column in row "1" of "orders" table
    Then I should see "Orange juice" in "order.name" column in row "2" of "orders" table
    Then I should see "1" in "order.quantity" column in row "2" of "orders" table
