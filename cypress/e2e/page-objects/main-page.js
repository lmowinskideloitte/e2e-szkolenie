export class MainPage {

    static openAutomationPracticePage() {
        cy.visit("http://automationpractice.com/index.php?");
    }

    static clickLogin() {
        cy.get(".login").contains("Sign in").click();
    }


    static checkIfLogged(name) {
        cy.get(".account").contains(name);
    }

    static openWomenCategory() {
        cy.get('#block_top_menu').contains("Women").click();
    }

}
