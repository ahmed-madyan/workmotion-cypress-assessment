/// <reference types="Cypress" />

class OnboardingContractDetails
{
    elements =
    {
        header_label : () => cy.get('[data-cy="steps-employment-agreement-details-title"]'),
        candidateFirstName_Box : () => cy.get('[data-cy="steps-candidate-first-name-input"]'),
        candidateLastName_Box : () => cy.get('[data-cy="steps-candidate-last-name-input"]'),
        selectCountry_Box : () => cy.get('input#select-country'),
        country_List : () => cy.get('.css-imuti2'),
        getStarted_Btn : () => cy.get('[data-cy="country-selection-get-started-btn"]'),


        
    }

    validateUserRedirectedToTheOnboardingContractDetailsPage(header_Text){
        this.elements.header_label().should('have.text', header_Text)
    }

    selectCountry(country)
    {
        this.elements.selectCountry_Box().type(country)
        this.elements.country_List().contains(country).click()
        this.elements.getStarted_Btn().click()
    }
}

module.exports = new OnboardingContractDetails();