Feature: Box

  Scenario: Box name
    When I browse to the "/"
    And I enter "John" into "first" box in "box.name" field
    And I enter "Maria" into "second" box in "box.name" field
    And I enter "Andrew" into "third" box in "box.name" field
    Then I should see "John" into "first" box in "box.panelName" field
    Then I should see "Maria" into "second" box in "box.panelName" field
    Then I should see "Andrew" into "third" box in "box.panelName" field


  Scenario: Box color
    When I browse to the "/"
    And I select option "blue" in "box.color" into "first" box
    Then "First" "box.square" should change color to "blue"
    Then "Second" "box.square" should change color to "blue"
    Then "Third" "box.square" should change color to "blue"
    When I select option "red" in "box.color" into "third" box
    Then "First" "box.square" should change color to "red"
    Then "Second" "box.square" should change color to "red"
    Then "Third" "box.square" should change color to "red"

