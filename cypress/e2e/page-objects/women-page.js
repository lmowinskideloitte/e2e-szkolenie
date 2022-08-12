export class WomenPage {

    static checkIfWomenCategoryIsOpen() {
        cy.url().should('include', '/index.php?id_category=3&controller=category');
    }

    static clickContinueShopping() {
        while (!cy.get(".clearfix").should('be.visible')) {
        }
        cy.get(".exclusive-medium").contains("Continue shopping").click();
    }

    static addElementToCartByIdAndGetPrice(productId) {
        let price = Cypress.$(`.product_list > :nth-child(${productId}) .price`);
        cy.get(".product_list > :nth-child(" + productId + ")").contains('Add to cart').click();
        console.log(price[0].innerHTML.trim());
        return price[0].innerHTML.trim();
    }

    static clickProccedToCheckout() {
        cy.wait(5000);
        cy.get('.button-medium').contains("Proceed").click();
    }

}
