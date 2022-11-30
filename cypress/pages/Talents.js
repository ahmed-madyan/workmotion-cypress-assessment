/// <reference types="Cypress" />

class Talents
{
    elements =
    {
        talentsHeaderTitle_Label : () => cy.get('span.sc-jounMn.bzmXAg'),
        searchForTalent_Box : () => cy.get('[data-cy="talents-search-filter-input"]'),
        talentsName_Cell : () => cy.get('[data-cy="talents-name-cell"]'),
        talentsStatus_Cell : () => cy.get('[data-cy="talents-status-cell"]')
    }

    validateUserRedirectedToTalentsPage(header_Text)
    {
        this.elements.talentsHeaderTitle_Label().should('have.text', header_Text)
    }

    searchForTalent(talentName)
    {
        this.elements.searchForTalent_Box().type(talentName)
    }

    validateThatTalentHasBeenAddedAsOnboardingStatus()
    {
        this.elements.finish_Btn().click()
    }
}

module.exports = new Talents();