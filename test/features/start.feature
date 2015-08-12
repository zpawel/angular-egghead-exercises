Feature: ng-repeat-start

  Scenario: On application start
    When I browse to the "/"
    Then I should see "ngRepeatStart"
    Then I should see "ngRepeatEnd"
    Then I should see "users"
    Then I should see "Adam" in "firstName" column in row "1" of "users" table
    Then I should see "Hart" in "lastName" column in row "1" of "users" table
    Then I should see "Antonio" in "firstName" column in row "3" of "users" table
    Then I should see "Turner" in "lastName" column in row "3" of "users" table
    Then I should see "Jimmy" in "firstName" column in row "5" of "users" table
    Then I should see "Wright" in "lastName" column in row "5" of "users" table
    Then I should see "Shirley" in "firstName" column in row "7" of "users" table
    Then I should see "Harper" in "lastName" column in row "7" of "users" table
    Then I should see "Randy" in "firstName" column in row "9" of "users" table
    Then I should see "Watson" in "lastName" column in row "9" of "users" table
    Then I should see "Gregory" in "firstName" column in row "11" of "users" table
    Then I should see "Banks" in "lastName" column in row "11" of "users" table

  Scenario: On row click
    When I browse to the "/"
    When I click "1" row of "users" table
    Then I should see "Country: Poland" in "2" row  of "users" table
    When I click "3" row of "users" table
    Then I should see "Country: England" in "4" row  of "users" table
    When I click "5" row of "users" table
    Then I should see "Country: USA" in "6" row  of "users" table
    When I click "7" row of "users" table
    Then I should see "Country: Italian" in "8" row  of "users" table
    When I click "9" row of "users" table
    Then I should see "Country: Greece" in "10" row  of "users" table
    When I click "11" row of "users" table
    Then I should see "Country: German" in "12" row  of "users" table
