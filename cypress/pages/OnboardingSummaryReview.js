/// <reference types="Cypress" />

class OnboardingSummaryReview
{
    elements =
    {
        reviewSummaryHeaderTitle_Label : () => cy.get('[data-cy="steps-summary-step-title"]'),
        approve_checkBox : () => cy.get('.sc-gsDKAQ'),
        finish_Btn : () => cy.get('[data-cy="steps-finish-btn"]')
    }

    validateUserRedirectedToTheOnboardingSummaryReviewPage(header_Text)
    {
        this.elements.reviewSummaryHeaderTitle_Label().should('have.text', header_Text)
    }

    approveTheDataProvided()
    {
        this.elements.approve_checkBox().click()
    }

    finish()
    {
        this.elements.finish_Btn().click()
    }
}

module.exports = new OnboardingSummaryReview();