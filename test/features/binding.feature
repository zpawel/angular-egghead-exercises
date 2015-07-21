Feature: Bind class from inputs to table records

  Scenario:  In first input write 'success'
    When I browse to the "/"
    When I enter "success" into "inputs.first" field
    Then The element "records.firstRecord" should have class "success"
    Then The element "records.secondRecord" should NOT have class "success"
    Then The element "records.thirdRecord" should NOT have class "success"

  Scenario: In second input write 'danger'
    When I browse to the "/"
    When I enter "danger" into "inputs.second" field
    Then The element "records.secondRecord" should have class "danger"
    Then The element "records.firstRecord" should NOT have class "danger"
    Then The element "records.thirdRecord" should NOT have class "danger"

  Scenario: In third input write 'info'
    When I browse to the "/"
    When I enter "info" into "inputs.third" field
    Then The element "records.thirdRecord" should have class "info"
    Then The element "records.firstRecord" should NOT have class "info"
    Then The element "records.secondRecord" should NOT have class "info"

  Scenario: When I complete all inputs different class css
    When I browse to the "/"
    When I enter "info" into "inputs.first" field
    When I enter "success" into "inputs.second" field
    When I enter "danger" into "inputs.third" field
    Then The element "records.firstRecord" should have class "info"
    Then The element "records.secondRecord" should have class "success"
    Then The element "records.thirdRecord" should have class "danger"

