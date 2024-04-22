import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { homePage } from '../pages/HomePage';
import { searchResultsPage } from '../pages/SearchResultsPage';

Given("a user navigates to the url", () => {
    cy.visit("/");
});

When("a user intercepts an api to a response payload", () => {

});

Then("a user validates the data is correctly displayed", () => {
    homePage.checkNavigationItemsPresence();
    homePage.checkImagesPresence();
    homePage.checkProductItemsPresence();
});

When("a user searches for the {string}", (product: string) => {
    homePage.search(product);
});

Then("a user validates that the search results are displayed correctly for the {string}", (product: string) => {
    searchResultsPage.checkTitle(product);
    searchResultsPage.checkRelatedSearchTerms(product);
    searchResultsPage.checkProductItemsPresence();
});

When("a user enters valid credentials", () => {
    cy.login();
    console.log(`******${Cypress.env('TEST_1')}******`);
});

Then("a user gets access to their account", () => {
    cy.contains("Welcome, Paresh Parmar!", { timeout: 30000 }).should("be.visible");
});