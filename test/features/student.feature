Feature: Text filter

  Scenario: Search filter
    When I browse to the "/"
    When I enter "rose" into "inputs.search" field
    Then I should see "Gray" in "firstName" column in row "1" of "students.table" table
    And I should see "Rose" in "lastName" column in row "1" of "students.table" table
    And I should see "21" in "age" column in row "1" of "students.table" table
    And I should see "gray.rose@undefined.io" in "email" column in row "1" of "students.table" table
    And I should see "+1 (807) 582-3992" in "phone" column in row "1" of "students.table" table

  Scenario: First Name filter
    When I browse to the "/"
    When I enter "c" into "inputs.first" field
    Then I should see "Candace" in "firstName" column in row "1" of "students.table" table
    And I should see "Chang" in "firstName" column in row "2" of "students.table" table
    And I should see "Gordon" in "lastName" column in row "1" of "students.table" table
    And I should see "Ryan" in "lastName" column in row "2" of "students.table" table
    And I should see "33" in "age" column in row "1" of "students.table" table
    And I should see "32" in "age" column in row "2" of "students.table" table
    And I should see "candace.gordon@undefined.name" in "email" column in row "1" of "students.table" table
    And I should see "chang.ryan@undefined.ca" in "email" column in row "2" of "students.table" table
    And I should see "+1 (932) 408-2012" in "phone" column in row "1" of "students.table" table
    And I should see "+1 (994) 534-3669" in "phone" column in row "2" of "students.table" table

  Scenario: Last Name filter:
    When I browse to the "/"
    When I enter "sp" into "inputs.last" field
    Then I should see "Bauer" in "firstName" column in row "1" of "students.table" table
    And I should see "Spencer" in "lastName" column in row "1" of "students.table" table
    And I should see "24" in "age" column in row "1" of "students.table" table
    And I should see "bauer.spencer@undefined.us" in "email" column in row "1" of "students.table" table
    And I should see "+1 (942) 551-2179" in "phone" column in row "1" of "students.table" table

  Scenario: Age filter:
    When I browse to the "/"
    When I enter "35" into "inputs.age" field
    Then I should see "Austin" in "firstName" column in row "1" of "students.table" table
    And I should see "Harvey" in "lastName" column in row "1" of "students.table" table
    And I should see "35" in "age" column in row "1" of "students.table" table
    And I should see "austin.harvey@undefined.org" in "email" column in row "1" of "students.table" table
    And I should see "+1 (957) 597-2822" in "phone" column in row "1" of "students.table" table

  Scenario: Email filter:
    When I browse to the "/"
    When I enter "Good" into "inputs.email" field
    Then I should see "Good" in "firstName" column in row "1" of "students.table" table
    And I should see "Burnett" in "lastName" column in row "1" of "students.table" table
    And I should see "27" in "age" column in row "1" of "students.table" table
    And I should see "good.burnett@undefined.tv" in "email" column in row "1" of "students.table" table
    And I should see "+1 (820) 450-3124" in "phone" column in row "1" of "students.table" table


  Scenario: Phone filter:
    When I browse to the "/"
    When I enter "Good" into "inputs.email" field
    Then I should see "Good" in "firstName" column in row "1" of "students.table" table
    And I should see "Burnett" in "lastName" column in row "1" of "students.table" table
    And I should see "27" in "age" column in row "1" of "students.table" table
    And I should see "good.burnett@undefined.tv" in "email" column in row "1" of "students.table" table
    And I should see "+1 (820) 450-3124" in "phone" column in row "1" of "students.table" table


  Scenario: Last Name filter:
    When I browse to the "/"
    When I enter "942" into "inputs.phone" field
    Then I should see "Bauer" in "firstName" column in row "1" of "students.table" table
    And I should see "Spencer" in "lastName" column in row "1" of "students.table" table
    And I should see "24" in "age" column in row "1" of "students.table" table
    And I should see "bauer.spencer@undefined.us" in "email" column in row "1" of "students.table" table
    And I should see "+1 (942) 551-2179" in "phone" column in row "1" of "students.table" table

  Scenario: Search filter with Last Name filter and Age filter
    When I browse to the "/"
    When I enter "b" into "inputs.search" field
    And I enter "b" into "inputs.last" field
    And I enter "2" into "inputs.age" field
    Then I should see "Good" in "firstName" column in row "1" of "students.table" table
    And I should see "Burnett" in "lastName" column in row "1" of "students.table" table
    And I should see "27" in "age" column in row "1" of "students.table" table
    And I should see "good.burnett@undefined.tv" in "email" column in row "1" of "students.table" table
    And I should see "+1 (820) 450-3124" in "phone" column in row "1" of "students.table" table

  Scenario: Search filter with First Name filter and Email filter
    When I browse to the "/"
    When I enter "a" into "inputs.search" field
    And I enter "a" into "inputs.first" field
    And I enter "ca" into "inputs.email" field
    Then I should see "Candace" in "firstName" column in row "1" of "students.table" table
    And I should see "Chang" in "firstName" column in row "2" of "students.table" table
    And I should see "Gordon" in "lastName" column in row "1" of "students.table" table
    And I should see "Ryan" in "lastName" column in row "2" of "students.table" table
    And I should see "33" in "age" column in row "1" of "students.table" table
    And I should see "32" in "age" column in row "2" of "students.table" table
    And I should see "candace.gordon@undefined.name" in "email" column in row "1" of "students.table" table
    And I should see "chang.ryan@undefined.ca" in "email" column in row "2" of "students.table" table
    And I should see "+1 (932) 408-2012" in "phone" column in row "1" of "students.table" table
    And I should see "+1 (994) 534-3669" in "phone" column in row "2" of "students.table" table


