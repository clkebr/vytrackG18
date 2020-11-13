Feature: login

  @wip
  Scenario Outline: login
    When As a "<userType>" log in
    Then user access "Dashboard" page

    Examples:
      | userType     |
      | driver       |
      | salesManager |
      | storeManager |