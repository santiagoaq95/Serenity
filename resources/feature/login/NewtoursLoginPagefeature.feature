#Author: your.email@your.domain.com
@Login
Feature: Newtours Login Functionality Feature
  In order to ensure Login Functionality works,
  I want to run the cucumber test to verify it is working

  Background: 
    Given I open Login Newtours

  @SmokeTest @LoginPass
  Scenario: Login to Newtours
    When Enter username and password
      | username     | password |
      | santiago8112 | santi112 |
    And I do click on button sign in
    Then I validate tag SING-OFF
    And Close browser

  @LoginFail
  Scenario: Login to Newtours Fail
    When Enter username and password
      | username | password |
      | Sophos   | admin    |
    And I do click on button sign in
    Then I validate tag SING-OFF
    And Close browser
