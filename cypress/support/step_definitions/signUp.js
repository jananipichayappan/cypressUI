import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import SignUpPage from '../../e2e/pages/signUpPage/SignUpPage'

const signUpPage = new SignUpPage()

Given('I am on the website login page', () => {
    cy.visit('/');
})

When('I choose to create a new account', (value) => {
    signUpPage.clickSignInButton()
    signUpPage.TypeInFirstNameTextbox(value)
    signUpPage.TypeInLastNameTextbox(value)
    signUpPage.TypeInEmailAddress(value)
    signUpPage.TypeInPasswordTextbox(value)
    signUpPage.TypeInConfirmPasswordTextbox(value)
    signUpPage.clickOnSignUpButton()
})


Then('I should see a confirmation message saying my account has been created', () => {
    signUpPage.verifySucessMessage()
})
