Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can open any url
    Given I load the browser and open the "<url>"
    Then I should be able to see "<headerString>"

    Examples:
      | url                                 | headerString            |
      | https://the-internet.herokuapp.com/ | Welcome to the-internet |
