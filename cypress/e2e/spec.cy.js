/// <reference types="Cypress" />

describe('E2E Scenario', () => {
  it('Log in as HR manager', () => {
    cy.visit('https://beta.workmotion.com/login')
    cy.get('#email').type('aliaa+qahrmanager@workmotion.com')
    cy.get('#password').type('Test1234')
    cy.get('[data-cy="login-login-btn"]').click()
    // cy.get('button.sc-fKVqWL.fWRXkB.sc-kTqLtj.cJJNkc').click
  })

  it('Validate user greeting message for HR Manager', () => {
    cy.get('[data-cy="user-greeting-component"]').should('have.text', 'Hello, HR Manager!')
  })

  it('Add new talent', () => {
    cy.get('[data-testid="add-employee-menu"]').click()
    cy.get('[data-testid="create-new-item"]').click()
    Cypress.on('uncaught:exception', () => false)
    cy.wait(3000)
      //   cy.get('ul.szh-menu.szh-menu--state-open.szh-menu--dir-bottom li').each(($el, index, $list) => {
  //     // $el is a wrapped jQuery element
  //     if ($el.text() === 'CREATE NEW') {
  //       cy.wrap($el).click()
  //     }
  // })
  // cy.intercept({
  //   method: 'DELETE',
  //   url: 'https://login-beta.workmotion.com/api/v1/sessions/me'
  // }, req => {
  //   req.destroy();
  // });
  // cy.url().should('eq', 'https://beta.workmotion.com/onboarding')
})
})