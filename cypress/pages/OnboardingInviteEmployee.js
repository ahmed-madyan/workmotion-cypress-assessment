/// <reference types="Cypress" />

class OnboardingInviteEmployee
{
    elements =
    {
        inviteEmployeeHeaderTitle_Label : () => cy.get('[data-cy="steps-now-it-is-time-to-invite-your-employee.-title"]'),
        email_Box : () => cy.get('[data-cy="steps-candidate-email-input"]'),
        continue_Btn : () => cy.get('[data-cy="steps-continue-btn"]')
    }

    validateUserRedirectedToTheOnboardingInviteEmployeePage(header_Text)
    {
        this.elements.inviteEmployeeHeaderTitle_Label().should('have.text', header_Text)
    }

    typeEmail(email)
    {
        this.elements.email_Box().type(email)
    }

    continue()
    {
        this.elements.continue_Btn().click()
    }
}

module.exports = new OnboardingInviteEmployee();