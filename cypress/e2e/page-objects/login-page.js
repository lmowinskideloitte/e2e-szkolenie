export class LoginPage {

    static setEmail(email) {
        cy.get("#email").type(email, {force: true});
    }

    static setPassword(password) {
        cy.get("#passwd").type(password, {force: true});
    }

    static clickSubmitLogin() {
        cy.get("#SubmitLogin").contains("Sign in").click();
    }

}
