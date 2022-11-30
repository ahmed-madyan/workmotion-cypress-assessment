/// <reference types="Cypress" />

class LoginPage
{
    elements =
    {
        email_Box : () => cy.get('#email'),
        password_Box : () => cy.get('#password'),
        login_Btn : () => cy.get('[data-cy="login-login-btn"]')
    }

    loginAs(email, password){
        this.elements.email_Box().type(email)
        this.elements.password_Box().type(password)
        this.elements.login_Btn().click()
    }
}

module.exports = new LoginPage();