export class CartPage {

    static checkIfSummaryIsOpen() {
        cy.url().should('include', '/index.php?controller=order');
    }

    static checkIfProductsPriceIsEqual(index, price) {
        cy.get(`#cart_summary > tbody > :nth-child(${index}) > .cart_unit > .price`).find('.price').should('have.text', price);
    }

    static checkIfPriceIsEqual(price1, price2) {
        let priceSum = price1 + price2;
        priceSum = "$" + priceSum.toFixed(2);
        let total = cy.get('#total_product').invoke('text').should('eq', priceSum);
    }

}
