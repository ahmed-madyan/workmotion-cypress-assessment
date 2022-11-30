/// <reference types="Cypress" />

class Dashboard
{
    elements =
    {
        userGreetingComponent_Label : () => cy.get('[data-cy="user-greeting-component"]'),
        addTalent_Btn : () => cy.get('[data-testid="add-employee-menu"]'),
        createNew_Btn : () => cy.get('[data-testid="create-new-item"]'),
        sideBarTalentsTab_Btn : () => cy.get('[data-cy="sidebar-talents-link"]')
    }

    validateUserGreetingComponentForHRManager(text)
    {
        this.elements.userGreetingComponent_Label().should('have.text', text)
    }

    addTalent()
    {
        this.elements.addTalent_Btn().click()
    }

    openTalentsTab()
    {
        this.elements.sideBarTalentsTab_Btn().click()
    }

    createNewTalent()
    {
        this.addTalent()
        this.elements.createNew_Btn().click()
        Cypress.on('uncaught:exception', () => false)
    }
}

module.exports = new Dashboard();