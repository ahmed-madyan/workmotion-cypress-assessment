/// <reference types="Cypress" />

const { selectCountry } = require("./Onboarding")

class OnboardingContractDetails
{
    elements =
    {
        header_label : () => cy.get('[data-cy="steps-employment-agreement-details-title"]'),
        candidateFirstName_Box : () => cy.get('[data-cy="steps-candidate-first-name-input"]'),
        candidateLastName_Box : () => cy.get('[data-cy="steps-candidate-last-name-input"]'),
        eligibleToWorkInThatCountry_radioBtn : () => cy.get('[data-cy="steps-talent-is-local-yes-radio"]'),
        executiveTalent_radioBtn : () => cy.get('[data-cy="steps-talent-is-senior-yes-radio"]'),
        jobTitle_Box : () => cy.get('[data-cy="steps-job-title-input"]'),
        jobDescription_Box : () => cy.get('[data-cy="steps-job-description-textarea"]'),
        uploadFile_Btn : () => cy.get('input[type=file]'),
        fullTimeType_radioBtn : () => cy.get('[data-cy="steps-employment-type-full-time-radio"]'),
        contractStartDate_Box : () => cy.get('div.react-datepicker__input-container > input'),
        continue_Btn : () => cy.get('[data-cy="steps-continue-btn"]')
    }

    validateUserRedirectedToTheOnboardingContractDetailsPage(header_Text)
    {
        this.elements.header_label().should('have.text', header_Text)
    }

    fillOnboardingContractDetails(firstName, LastName, jobTitle, jobDescription)
    {
        this.typeFirstName(firstName)
        this.typeLastName(LastName)
        this.selectEligibleToWorkInThatCountry()
        this.selectExecutiveTalent()
        this.typeJobTitle(jobTitle)
        this.typeJobDescription(jobDescription)
        this.uploadFile()
        this.selectFullTimeEmploymentType()
        this.typeContractStartDate()
        this.contine()
    }

    typeFirstName(firstName)
    {
        this.elements.candidateFirstName_Box().type(firstName)
    }

    typeLastName(LastName)
    {
        this.elements.candidateLastName_Box().type(LastName)
    }

    selectEligibleToWorkInThatCountry()
    {
        this.elements.eligibleToWorkInThatCountry_radioBtn().click()
    }

    selectExecutiveTalent()
    {
        this.elements.executiveTalent_radioBtn().click()
    }

    typeJobTitle(jobTitle)
    {
        this.elements.jobTitle_Box().type(jobTitle)
    }

    typeJobDescription(jobDescription)
    {
        this.elements.jobDescription_Box().type(jobDescription)
    }

    uploadFile()
    {
        this.elements.uploadFile_Btn().attachFile('Cypress.png')
    }

    selectFullTimeEmploymentType()
    {
        this.elements.fullTimeType_radioBtn().click()
    }

    typeContractStartDate()
    {
        this.elements.contractStartDate_Box().type('28-04-2025')        
    }

    contine()
    {
        this.elements.continue_Btn().click()
    }
}

module.exports = new OnboardingContractDetails();