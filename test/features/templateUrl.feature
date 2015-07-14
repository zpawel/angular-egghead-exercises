Feature: Scope

  Scenario: Enter title and content
    When I browse to the "/"
    And I enter "Title" into "title" field
    And I enter "Beautiful weather" into "content" field
    And I click "button"
    Then I should see "Title" in "url.button"
    Then I should see "The data is: Beautiful weather" in "url.h3"

  Scenario: Find secret
    When I browse to the "/"
    And I enter "secret" into "title" field
    And I enter "The weather is nasty" into "content" field
    And I click "button"
    Then I should see "secret" in "url.button"
    Then I should see "Good, work you display this secret" in "url.h3"
