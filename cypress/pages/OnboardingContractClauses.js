/// <reference types="Cypress" />

class OnboardingContractClauses
{
    elements =
    {
        headerTitle_Label : () => cy.get('h1.sc-dkqQuH.NdrSJ'),
        continue_Btn : () => cy.get('[data-cy="steps-continue-btn"]')
    }

    validateUserRedirectedToTheOnboardingContractClausesPage(header_Text)
    {
        this.elements.headerTitle_Label().should('have.text', header_Text)
    }

    continue()
    {
        this.elements.continue_Btn().click()
    }
}

module.exports = new OnboardingContractClauses();