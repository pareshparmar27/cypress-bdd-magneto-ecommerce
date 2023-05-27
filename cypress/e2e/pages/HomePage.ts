import { BasePage } from "./BasePage";

class HomePage extends BasePage {

    navigationList = '.level-top[role="menuitem"]';
    mainImg = ".home-main";
    pantsImg = ".home-pants";
    tShirtsImg = ".home-t-shirts";
    erinImg = ".home-erin";
    performanceImg = ".home-performance";
    ecoImg = ".home-eco";
    searchBox = "#search";
    searchList = '[role="listbox"] > li';

    checkNavigationItemsPresence() {
        cy.get(this.navigationList).should('have.length', 6);
    }

    checkImagesPresence() {
        cy.get(this.mainImg).scrollIntoView().should("be.visible");
        cy.get(this.pantsImg).scrollIntoView().should("be.visible");
        cy.get(this.tShirtsImg).scrollIntoView().should("be.visible");
        cy.get(this.erinImg).scrollIntoView().should("be.visible");
        cy.get(this.performanceImg).scrollIntoView().should("be.visible");
        cy.get(this.ecoImg).scrollIntoView().should("be.visible");
    }

    search(product: string) {
        cy.get(this.searchBox).type(product + '{enter}');
    }
}
export const homePage = new HomePage();