import { BasePage } from "./BasePage";

class SearchResultsPage extends BasePage {

    title = '[data-ui-id="page-title-wrapper"]';
    relatedSearchTermsList = "dd";

    checkTitle(product: string) {
        cy.get(this.title).should("contain.text", product);
    }

    checkRelatedSearchTerms(product: string) {
        cy.get(this.relatedSearchTermsList).each($term => {
            cy.wrap($term).contains(product, { matchCase: false });
        })
    }

}
export const searchResultsPage = new SearchResultsPage();