Feature: Injectors

  Scenario: checkNow function
    When I browse to the "/"
    Then I click radio option "engine" on "partsList"
    Then I click "chooseButton"
    Then I click "checkNowButton"
    Then I should see "This part is available and is very cheap" in "message"
    Then I click radio option "brakes" on "partsList"
    Then I click "chooseButton"
    Then I click "checkNowButton"
    Then I should see "This part is NOT available and is very expensive..." in "message"

  Scenario: wait function
    When I browse to the "/"
    Then I click radio option "engine" on "partsList"
    Then I click "chooseButton"
    Then I click "waitButton"
    Then I should see "This part is available and is very cheap" in "message"
    Then I click radio option "brakes" on "partsList"
    Then I click "chooseButton"
    Then I click "waitButton"
    Then I should see "This part is available and is very cheap" in "message"
