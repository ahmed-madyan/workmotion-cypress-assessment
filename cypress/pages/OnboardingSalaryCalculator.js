/// <reference types="Cypress" />

class OnboardingSalaryCalculator
{
    elements =
    {
        welcome_label : () => cy.get('.sc-cNKqjZ'),
        onboardingHeaderTitle_Label : () => cy.get('header.sc-jNHqnW.hcqiPT > h1'),
        onboardingHeaderBody_Label : () => cy.get('header.sc-jNHqnW.hcqiPT > p'),
        selectCountry_Box : () => cy.get('input#select-country'),
        country_List : () => cy.get('.css-imuti2'),
        getStarted_Btn : () => cy.get('[data-cy="country-selection-get-started-btn"]'),
    }

    validateUserRedirectedToTheOnboardingPage(welcomeText, headerTitleText, headerBodyText){
        this.elements.welcome_label().should('have.text', welcomeText)
        this.elements.onboardingHeaderTitle_Label().should('have.text', headerTitleText)
        this.elements.onboardingHeaderBody_Label().should('have.text', headerBodyText)
    }

    selectCountry(country)
    {
        this.elements.selectCountry_Box().type(country)
        this.elements.country_List().contains(country).click()
        this.elements.getStarted_Btn().click()
    }
}

module.exports = new OnboardingSalaryCalculator();