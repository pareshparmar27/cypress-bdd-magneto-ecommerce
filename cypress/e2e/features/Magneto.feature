Feature: Magneto Test

  Background: url nvigation
    Given a user navigates to the url

  @home @regression
  Scenario: verify that the Homepage loads successfully and contains all Expected Elements
    When  a user intercepts an api to a response payload
    Then  a user validates the data is correctly displayed

  @product-search @regression
  Scenario Outline: search for a product using the Search Bar and validate that the Search Results are displayed correctly
    When  a user searches for the "<product>"
    Then  a user validates that the search results are displayed correctly for the "<product>"
    Examples:
      | product |
      | shirt   |
      | pant    |

  @login @regression
  Scenario: verify that a user can log in using valid credentials and view their account details
    When a user enters valid credentials
    Then a user gets access to their account