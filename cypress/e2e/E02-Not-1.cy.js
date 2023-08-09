
import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Not-1 Adding / Editing a note template', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('Not-1 Adding / Editing a note template', () => {

        Element.VerifyUrl()
            .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')


        Element.Patientname()
            .click()

            cy.wait(4000)

        Element.Sidebarbtn().first()
            .click()

        Element.Sidebarlist().contains('Notes').click()

        Element.Closeleftbtn().click()
        
        new Cypress.Promise((resolve, reject) =>
        {
            resolve(cy.get('.mf-main-title').should('contain', 'Notes'))
        })

        cy.contains('ADD NEW')
            .click()

        cy.get('[data-test="template-selector"] > [data-test="basic-dropdown-trigger"]').first().click()

        Element.EditDropdownSelect().find('[data-option-index]').first().click()

        Element.Savebtn().contains('Replace Text').click()

        cy.get('.mf-richtext-editor__panel-icon').first().click()

        cy.wait(2000)

        cy.get('[data-test="save-note"]').first().click()

        cy.wait(4000)

        cy.get('[data-test="mf-toggle-lock"]').first().click()

        cy.wait(2000)

    })


})