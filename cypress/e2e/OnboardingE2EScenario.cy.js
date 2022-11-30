/// <reference types="Cypress" />
import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard'
import Onboarding from '../pages/Onboarding'
import OnboardingContractClauses from '../pages/OnboardingContractClauses'
import OnboardingContractDetails from '../pages/OnboardingContractDetails'
import OnboardingSalaryCalculator from '../pages/OnboardingSalaryCalculator'
import OnboardingInviteEmployee from '../pages/OnboardingInviteEmployee'
import OnboardingSummaryReview from '../pages/OnboardingSummaryReview'
import OnboardingSuccessPage from '../pages/OnboardingSuccessPage'
import Talents from '../pages/Talents'

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

  it('Validate onboarding cycle', () => 
  {
    // Login As HR Manager
    LoginPage.loginAs(data.loginData.email, data.loginData.password)
    Dashboard.validateUserGreetingComponentForHRManager(data.Validations.userGreetingComponentForHRManager)

    // Create new talent
    Dashboard.createNewTalent()
    Onboarding.validateUserRedirectedToTheOnboardingPage(data.Validations.welcome_label, data.Validations.onboardingHeaderTitle_Label, 
      data.Validations.onboardingHeaderBody_Label)
    Onboarding.selectCountry(data.onboarding.country)
    OnboardingContractDetails.fillOnboardingContractDetails(data.onboardingContractDetails.firstName, data.onboardingContractDetails.LastName, 
      data.onboardingContractDetails.jobTitle, data.onboardingContractDetails.jobDescription)
    OnboardingContractClauses.validateUserRedirectedToTheOnboardingContractClausesPage(data.Validations.onboardingContractClausesHeader_Label)
    OnboardingContractClauses.continue()
    OnboardingSalaryCalculator.validateUserRedirectedToTheOnboardingSalaryCalculatorPage(data.Validations.onboardingSalaryCalculatorHeader_Label)
    OnboardingSalaryCalculator.selectNotToProvideEsop()
    OnboardingSalaryCalculator.typeBaseSalaryPerMonth(data.onboardingSalaryCalculator.baseSalaryPerMonth)
    OnboardingSalaryCalculator.continue()
    OnboardingInviteEmployee.validateUserRedirectedToTheOnboardingInviteEmployeePage(data.Validations.onboardingInviteEmployeeHeader_Label)
    OnboardingInviteEmployee.typeEmail(data.onboardingInviteEmployee.email)
    OnboardingInviteEmployee.continue()
    OnboardingSummaryReview.validateUserRedirectedToTheOnboardingSummaryReviewPage(data.Validations.onboardingReviewSummaryHeader_Label)
    OnboardingSummaryReview.approveTheDataProvided()
    OnboardingSummaryReview.finish()
    OnboardingSuccessPage.validateUserRedirectedToTheOnboardingSuccessPage(data.Validations.successScrrenHeaderTitle_Label)
    OnboardingSuccessPage.goToDashboard()
    Dashboard.validateUserGreetingComponentForHRManager(data.Validations.userGreetingComponentForHRManager)

    // Validate that created talent saved and will be displayed in the talent page with onboarding status
    Dashboard.openTalentsTab()
    Talents.validateUserRedirectedToTalentsPage(data.Validations.talentsHeaderTitle_Label)
    Talents.searchForTalent(data.onboardingContractDetails.firstName + data.onboardingContractDetails.LastName)

  })
})