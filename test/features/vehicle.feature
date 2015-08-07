Feature: Directive Communication

  Scenario: Nesting directives
    When I browse to the "/"
    Then I should see "vehicle"
    Then I should see "car"
    Then I should see "audi"
    Then I should see "bus"
    Then I should see "jelcz"

