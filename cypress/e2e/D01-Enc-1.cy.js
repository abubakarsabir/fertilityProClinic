import Login from "../POM/Login"
const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Enc-1 Send an encounter to billing ', () => {
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('Enc-1 Send an encounter to billing ', () => {

        cy.url().then(($ele) => {
            const url = $ele

            if (url == 'https://stg-clinic-novo.fertilitypro.com/appointments?mode=encounters') {

                return 0
            }
            else {

                Element.Mainheader()
                    .contains('Encounters')
                    .click()
                Element.VerifyUrl()
                    .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments?mode=encounters')

            }
        })

        Element.MainDatepicker()
            .should('contain', '2022')

            cy.contains('Visit').click()

            // Element.Popupclose().click()

            cy.get('.panel-footer-container')
            .find('[type="button"]')
            .then($a =>
            {
                if($a.text().includes('EDIT'))
                {
                    cy.get('.panel-footer-container')
                        .find('[type="button"]')
                        .should('contain', 'EDIT')
                        .click()
                }

                else
                {
                    return 0
                }
            })

            cy.contains('ADD TO DIAGNOSIS').click()

            cy.get('[data-test="basic-dropdown-trigger"]').last().click()

            Element.EditDropdownSelect().first().click()

            Element.Savebtn().first().click()

            cy.wait(2000)

            Element.Savebtn().first().click()

            cy.get('.panel-footer-container .mf-button-confirm').click()

            cy.get('[data-test="mf-dropdown"] > [data-test="basic-dropdown-trigger"]').click()

            // cy.get('.ember-power-select-option').contains('azalea').click()

           cy.get('.text-left > [data-test="mf-loading-button"]').click()

    })

})