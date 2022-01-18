Feature: Login to app

    I want to login in into app

    Scenario: Valid login
      Given I open login page
      When I submit form
      Then I should be authorized