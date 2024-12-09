Feature: User Registration

  Scenario: Successfully create an account
    Given I am on the website login page
    When I choose to create a new account
    Then I should see a confirmation message saying my account has been created
