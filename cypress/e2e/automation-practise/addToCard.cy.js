/// <reference types="cypress" />
import {MainPage} from "../page-objects/main-page";
import {WomenPage} from "../page-objects/women-page";
import {CartPage} from "../page-objects/cart-page";

context('e-shop go to', () => {
    let productsPrice;
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
        cy.get(".price.product-price").first().invoke('text').as('productPrice');
    })

    describe('add to Cart', () => {
        it('should add products to Cart', () => {
            MainPage.openWomenCategory();
            WomenPage.checkIfWomenCategoryIsOpen();
            let firstPrice = WomenPage.addElementToCartByIdAndGetPrice(2);
            WomenPage.clickContinueShopping();
            let secondPrice = WomenPage.addElementToCartByIdAndGetPrice(4);
            WomenPage.clickProccedToCheckout();
            CartPage.checkIfSummaryIsOpen();
            CartPage.checkIfProductsPriceIsEqual(1, firstPrice);
            CartPage.checkIfProductsPriceIsEqual(2, secondPrice);
            CartPage.checkIfPriceIsEqual(Number(firstPrice.substring(1)), Number(secondPrice.substring(1)));
        })
    })
})
