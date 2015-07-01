Feature: Table filter

  Scenario: Search filter
    When I browse to the "/"
    When I enter "female" into "inputs.search" field
    Then I should see "5" in "id" column in row "1" of "users.table" table
    And I should see "8" in "id" column in row "2" of "users.table" table
    And I should see "11" in "id" column in row "3" of "users.table" table
    And I should see "14" in "id" column in row "4" of "users.table" table
    And I should see "15" in "id" column in row "5" of "users.table" table
    And I should see "swatson4" in "username" column in row "1" of "users.table" table
    And I should see "mbanks7" in "username" column in row "2" of "users.table" table
    And I should see "eturnera" in "username" column in row "3" of "users.table" table
    And I should see "aboydd" in "username" column in row "4" of "users.table" table
    And I should see "farmstronge" in "username" column in row "5" of "users.table" table
    And I should see "Shirley Watson" in "fullName" column in row "1" of "users.table" table
    And I should see "Martha Banks" in "fullName" column in row "2" of "users.table" table
    And I should see "Elizabeth Turner" in "fullName" column in row "3" of "users.table" table
    And I should see "Angela Boyd" in "fullName" column in row "4" of "users.table" table
    And I should see "Frances Armstrong" in "fullName" column in row "5" of "users.table" table
    And I should see "Female" in "gender" column in row "1" of "users.table" table
    And I should see "Female" in "gender" column in row "2" of "users.table" table
    And I should see "Female" in "gender" column in row "3" of "users.table" table
    And I should see "Female" in "gender" column in row "4" of "users.table" table
    And I should see "Female" in "gender" column in row "5" of "users.table" table

  Scenario: Limit the number of records to one
    When I browse to the "/"
    And I click "inputs.one" radio option
    Then the "users.table" table should have "1" rows

  Scenario: Limit the number of records to ten
    When I browse to the "/"
    And I click "inputs.two" radio option
    Then the "users.table" table should have "10" rows

  Scenario: Limit the number of records to fifteen
    When I browse to the "/"
    And I click "inputs.three" radio option
    Then the "users.table" table should have "15" rows

  Scenario: Sort data by id
    When I browse to the "/"
    And I click "users.idSort"
    And I should see "1" in "id" column in row "1" of "users.table" table

  Scenario: Sort data by username
    When I browse to the "/"
    And I click "users.usernameSort"
    And I should see "aboydd" in "username" column in row "1" of "users.table" table

  Scenario: Sort data by fullName
    When I browse to the "/"
    And I click "users.fullNameSort"
    And I should see "Adam Hart" in "fullName" column in row "1" of "users.table" table

  Scenario: Sort data by gender
    When I browse to the "/"
    And I click "users.gender"
    And I should see "mbanks7" in "username" column in row "1" of "users.table" table

  Scenario: Sort data by id descending
    When I browse to the "/"
    And I click "users.idSort"
    And I click "users.idSort"
    And I should see "15" in "id" column in row "1" of "users.table" table

  Scenario: Sort data by fullName descending
    When I browse to the "/"
    And I click "users.fullNameSort"
    And I click "users.fullNameSort"
    And I should see "5" in "id" column in row "1" of "users.table" table

  Scenario: Filter data with "w", limit rows to one and sort data by username
    When I browse to the "/"
    When I enter "w" into "inputs.search" field
    When I click "inputs.one" radio option
    When I click "users.usernameSort"
    Then I should see "glawson6" in "username" column in row "1" of "users.table" table

  Scenario: Filter data with "er" and sort data descending by id
    When I browse to the "/"
    When I enter "er" into "inputs.search" field
    When I click "users.idSort"
    When I click "users.idSort"
    Then I should see "rmcdonaldc" in "username" column in row "1" of "users.table" table

