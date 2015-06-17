Feature: Share data between controllers

  Scenario: Check left to right bind
    When I browse to the "/"
    When I enter "direction" into "inputs.left" field
    Then the css element ".bg-warning" should contain the text "direction"
    Then the css element ".bg-success" should contain the text "direction"

  Scenario: Check right to left bind
    When I browse to the "/"
    When I enter "direction" into "inputs.right" field
    Then the css element ".bg-warning" should contain the text "direction"
    Then the css element ".bg-success" should contain the text "direction"

