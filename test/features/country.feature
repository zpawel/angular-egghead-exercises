Feature: Directive Communication

  Scenario: Select USA State
    When I browse to the "/"
    Then I should see "countrySelect"
    And I should not see "stateSelect"
    And It should not display "detailsTable"
    When I select option "USA" in "countrySelect"
    Then I should see "stateSelect"
    When I select option "California" in "stateSelect"
    Then It should display "detailsTable"
    Then I should see "Sacramento" in "capitalCity" column in row "1" of "detailsTable" table
    Then I should see "Los Angeles" in "largestCity" column in row "1" of "detailsTable" table
    Then I should see "38.332.521" in "population" column in row "1" of "detailsTable" table
    When I select option "Delaware" in "stateSelect"
    Then I should see "Dover" in "capitalCity" column in row "1" of "detailsTable" table
    Then I should see "Wilmington" in "largestCity" column in row "1" of "detailsTable" table
    Then I should see "925.749" in "population" column in row "1" of "detailsTable" table

Scenario: Select Australia State
    When I browse to the "/"
    Then I should see "countrySelect"
    And I should not see "stateSelect"
    And It should not display "detailsTable"
    When I select option "Australia" in "countrySelect"
    Then I should see "stateSelect"
    When I select option "South Australia" in "stateSelect"
    Then It should display "detailsTable"
    Then I should see "Adelaide" in "capitalCity" column in row "1" of "detailsTable" table
    Then I should see "Adelaide" in "largestCity" column in row "1" of "detailsTable" table
    Then I should see "I don't have data on this topic" in "population" column in row "1" of "detailsTable" table
    When I select option "Queensland" in "stateSelect"
    Then I should see "Brisbane" in "capitalCity" column in row "1" of "detailsTable" table
    Then I should see "Brisbane" in "largestCity" column in row "1" of "detailsTable" table
    Then I should see "4.279.400" in "population" column in row "1" of "detailsTable" table


#  Scenario: Select
#    When I browse to the "/"
