var elements = require('./elements')
import { generateEmail, generateUsername, generatePassword } from '../../../support/helper';
const name = generateUsername('testUser', 8);
const email = generateEmail('gmail.com', 8);
const randomPassword = generatePassword(12); 


class SignUpPage {
    verifyOnSignUpPage() {
        cy.get(elements.SIGNUPPAGE.SIGNUP_PAGE_HEADING)
            .should('be.visible')
    }

    TypeInFirstNameTextbox() {
        cy.get(elements.SIGNUPPAGE.FIRSTNAME_TEXT).type(name)
    }

    clickSignInButton() {
        cy.get('.panel > .header > :nth-child(3) > a').click();
    }

    TypeInLastNameTextbox() {
        cy.get(elements.SIGNUPPAGE.LASTNAME_TEXT).type(name)
    }

    TypeInEmailAddress() {
        cy.get(elements.SIGNUPPAGE.EMAIL_TEXT).type(email)
    }

    TypeInPasswordTextbox() {
        cy.get(elements.SIGNUPPAGE.PASSWORD_TEXT).type(randomPassword)
    }

    TypeInConfirmPasswordTextbox() {
        cy.get(elements.SIGNUPPAGE.CONFIRM_PASSWORD_TEXT).type(randomPassword)
    }

    clickOnSignUpButton() {
        cy.get(elements.SIGNUPPAGE.SIGN_UP_BUTTON).click()
    }

    verifySucessMessage() {
        cy.get(elements.SIGNUPPAGE.SUCCESS_MESSAGE)
            .should('be.visible')
            .and('contain.text', elements.SIGNUPPAGE.VERIFY_MESSAGE);
    }
}

export default SignUpPage