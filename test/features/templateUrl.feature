Feature: Template Cache

  Scenario: Default template
    When I browse to the "/"
    And I enter "orange" into "order" field
    And I enter "3" into "quantity" field
    And I enter "some text" into "template" field
    Then I should see "default"
    And I should see "orange x 3" in "templateContent"

  Scenario: Button template
    When I browse to the "/"
    And I enter "button" into "template" field
    Then I should see "button"
    When I click "buttonTemplate"
    And I should see "Your order: 12 pizzas" in "buttonContent"

  Scenario: Table template
    When I browse to the "/"
    And I enter "table" into "template" field
    Then I should see "table"
    And I should see "pizza" in "1" column from "tableContent"
    And I should see "12" in "2" column from "tableContent"


