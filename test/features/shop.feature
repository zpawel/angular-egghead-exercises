Feature: Products

  Scenario: Buy cakes
    When I browse to the "/"
    And I select option "Brownie" in "cake" order component
    And I click "buyButton" in "cake" order component
    And I click "buyButton" in "cake" order component
    And I select option "Karpatka" in "cake" order component
    And I click "buyButton" in "cake" order component
    Then I should see "Brownie,Brownie,Karpatka" in "products" list


  Scenario: Buy sweets
    When I browse to the "/"
    And I select option "Nerds" in "sweets" order component
    And I click "buyButton" in "sweets" order component
    And I select option "Milky Way" in "sweets" order component
    And I click "buyButton" in "sweets" order component
    And I select option "Starburst" in "sweets" order component
    And I click "buyButton" in "sweets" order component
    Then I should see "Nerds,Milky Way,Starburst" in "products" list


  Scenario: Buy cakes and sweets
    When I browse to the "/"
    And I select option "Skittles" in "sweets" order component
    And I click "buyButton" in "sweets" order component
    And I select option "Cupcake" in "cake" order component
    And I click "buyButton" in "cake" order component
    And I select option "Butter cake" in "cake" order component
    And I click "buyButton" in "cake" order component
    And I select option "Nerds" in "sweets" order component
    And I click "buyButton" in "sweets" order component
    And I click "buyButton" in "sweets" order component
    Then I should see "Skittles,Cupcake,Butter cake,Nerds,Nerds" in "products" list

