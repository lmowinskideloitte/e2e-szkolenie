/// <reference types="cypress" />
import {MainPage} from "../page-objects/main-page";
import {LoginPage} from "../page-objects/login-page";


context('e-shop go to', () => {
    let data;
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
        cy.fixture('login').then((users) => {
            data = users;
        })
    })

    describe('test', () => {
        // TODO dalej nie wiem czemu forEach nie działa :(( javascript ciężka sprawa
        // data.forEach( (data) => {
        //     MainPage.clickLogin();
        //     MainPage.setEmail(data.email);
        //     MainPage.setPassword(data.password);
        //     MainPage.clickSubmitLogin();
        // })

        for (let i = 0; i < 2; i++) {
            it('should open sign in', () => {
                MainPage.clickLogin();
                LoginPage.setEmail(data[Object.keys(data)[i]].email);
                LoginPage.setPassword(data[Object.keys(data)[i]].password);
                LoginPage.clickSubmitLogin();
                if (data[Object.keys(data)[i]].email === "uxf89834@xcoxc.com") // "działający" mail
                    MainPage.checkIfLogged(data[Object.keys(data)[i]].name);
            })
        }
    })
})
