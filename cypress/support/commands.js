// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import 'cypress-file-upload';
import Login from "../POM/Login"
import './commands';
// require('@4tw/cypress-drag-drop')

const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

Cypress.Commands.add("Login", () => {
    Element.Email()
        .type(credentials[0].Email)
            .should('have.value', 'abu@fertilitypro.com')

    Element.Password()
        .type(credentials[0].Password)

    Element.Passwordvisible()
        .click()

    Element.Rememberme()
        .click({ force: true })
            .should('be.checked')

    Element.loginbtn()
        .click()

    /*Element.VerifyUrl()
        .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')*/

    cy.wait(4000)
    Element.PatientElement()
        .should(($p) => 
        {
            expect($p).to.have.length(1)
        })

})