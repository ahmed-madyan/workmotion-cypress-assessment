/// <reference types="Cypress" />
import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard'
import Onboarding from '../pages/Onboarding'

describe('E2E Scenario', () => 
{
  let data; //closure variable
  before(() => 
  {
  cy.fixture('TestData').then( (TestData) =>
  {
      data= TestData
      cy.visit(data.env.WorkMotion_URL)
  })    
  })  

  it('Validate talent has been added as onboarding status', () => 
  {
    LoginPage.loginAs(data.loginData.email, data.loginData.password)
    Dashboard.validateUserGreetingComponentForHRManager(data.Validations.userGreetingComponentForHRManager)
    Dashboard.createNewTalent()
    Onboarding.selectCountry(data.onboarding.country)
  })

  // it('Validate user greeting message for HR Manager', () => 
  // {
  //   Dashboard.validateUserGreetingComponentForHRManager(data.Validations.userGreetingComponentForHRManager)
  // })

  // it('Add new talent', () => 
  // {
  //   Dashboard.createNewTalent()
  // })
})