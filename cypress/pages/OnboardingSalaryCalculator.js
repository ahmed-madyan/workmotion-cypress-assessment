/// <reference types="Cypress" />

class OnboardingSalaryCalculator
{
    elements =
    {
        headerTitle_Label : () => cy.get('header.sc-bGaVxB.gmLMHa'),
        esopProvidedNo_radioBtn : () => cy.get('[data-cy="steps-esop-provided-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input'),
        baseSalaryPerMonth_Box : () => cy.get('[data-cy="steps-salary-gross-salary-localCurrencyInput"]'),
        continue_Btn : () => cy.get('[data-cy="steps-continue-btn"]')
    }

    validateUserRedirectedToTheOnboardingSalaryCalculatorPage(header_Text)
    {
        this.elements.headerTitle_Label().should('have.text', header_Text)
    }

    selectNotToProvideEsop()
    {
        this.elements.esopProvidedNo_radioBtn().click()
    }

    typeBaseSalaryPerMonth(baseSalary)
    {
        this.elements.baseSalaryPerMonth_Box().type(baseSalary)
    }

    continue()
    {
        this.elements.continue_Btn().click()
    }
}

module.exports = new OnboardingSalaryCalculator();