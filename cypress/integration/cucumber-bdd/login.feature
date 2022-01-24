Feature: Login to App

  As user i want to login into the App
  As fake user i want to see error message when tries to login

  Scenario: I want to login into the app with correct data
    Given I open the homepage
    When I fill username with "username"
    And I fill password with "password"
    And I submit form
    Then I see homepage
  # @focus - only this scenario will run
  Scenario: I want to login into the app with wrong login data
    Given I open the homepage
    When I fill username with "fakeusername"
    And I fill password with "fakepassword"
    And I submit form
    Then I see error