/// <reference types="Cypress" />

class OnboardingSuccessPage
{
    elements =
    {
        successScrrenHeaderTitle_Label : () => cy.get(':nth-child(1) > p'),
        goToDashboard_Btn : () => cy.get('[data-cy="steps-completed-onboarding-card-go-btn"]')
    }

    validateUserRedirectedToTheOnboardingSuccessPage(header_Text)
    {
        this.elements.successScrrenHeaderTitle_Label().should('have.text', header_Text)
    }

    goToDashboard()
    {
        this.elements.goToDashboard_Btn().click()
    }


}

module.exports = new OnboardingSuccessPage();