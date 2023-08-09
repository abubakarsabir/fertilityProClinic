import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('ART-5 Edit or delete an ART Protocol template', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('ART-5 Edit or delete an ART Protocol template', () => {
        Element.VerifyUrl()
            .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')

        Element.Hamburgerbutton()
            .click()

        Element.Sidemenu()
            .contains('Protocol Templates')
            .click()

        Element.Editprotocol().first().click()

        Element.Inputcheck()
            .first()
            .clear()
            .type('New 123')

        cy.get('.mf-new-protocol__container').find('[type="radio"]').first().click()

            cy.get('.mf-new-protocol__container').find('[type="checkbox"]').then(box => {
                cy.wrap(box)
                    .eq(2)
                    .check({ force: true })
            })

            Element.Savebtn().click()
            cy.wait(2000)
            Element.Header()
            .contains('ART Protocol Templates')
            .click()

            cy.wait(2000)
            cy.get('[data-test="mf-confirmation-button"] > .btn > [data-test="mf-icon"]').first().click()
            cy.get('[data-test="mf-loading-button"]').click()
            cy.wait(2000)
    })


})