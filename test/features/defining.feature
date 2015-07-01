Feature: Defining a method on the scope

  Scenario: Word replace
    When I browse to the "/"
    When I enter "o" into "inputs.word" field
    Then the css element ".well" should contain the text "Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, o, o, o..."

  Scenario: Enter new main text without "purr" word
    When I browse to the "/"
    When I enter "Lorem ipsum dolor sit amet..." into "inputs.mainText" field
    Then the css element ".well" should contain the text "Lorem ipsum dolor sit amet..."

  Scenario: Replace 'purr' word and enter new main text with 'purr' word
    When I browse to the "/"
    When I enter "Lorem ipsum dolor purr sit amet purr." into "inputs.mainText" field
    When I enter "kitty" into "inputs.word" field
    Then the css element ".well" should contain the text "Lorem ipsum dolor kitty sit amet kitty."


