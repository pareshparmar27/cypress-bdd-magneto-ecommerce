export class BasePage {

    itemList = ".product-item";

    checkProductItemsPresence() {
        cy.get(this.itemList).should('have.length.above', 0);
    }
}