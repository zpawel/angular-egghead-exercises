Feature: Route

  Scenario: Route to home.html
    When I browse to the "/"
    Then I should see "This is correct html" text in "message"
    When I click "button"
    Then I should see "I came from a controller" text in "buttonMessage"
