import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')


describe('Pwa-1 Create a Pop Up Alert and Patient Warning from Patients Chart', () => {
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('Pwa-1 Create a Pop Up Alert and Patient Warning from Patients Chart', () => {

        Element.VerifyUrl()
            .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')

        Element.MainDatepicker()
            .should('contain', '2022')

        Element.Patientname()
            .click()

        cy.wait(4000)

        cy.get('[class="bm-content"]').then($body => {

            if ($body.find('.modal-overlay').length > 0) {
                cy.get('.modal-overlay').then($header => {
                    if ($header.is(':visible')) {
                        Element.Warningconfirmbtn().
                            click()

                        Element.Textarea()
                            .clear()
                            .type('Testing')

                        Element.Warningconfirmbtn()
                            .click()

                        Element.Popupclose()
                            .click()

                        cy.get('[class="manual-warning mf-icon icon-icn_atention ember-view"]')
                            .click()

                        Element.Warningconfirmbtn()
                            .click()


                        Element.Textarea()
                            .clear()
                            .type('Testing')

                        Element.Warningconfirmbtn()
                            .click()

                        Element.Popupclose()
                            .click()
                    }
                });
            }
            else {
                Element.Patientfirstwarning()
                    .click()

                Element.Warningconfirmbtn()
                    .click()

                Element.Textarea()
                    .type('Text')

                Element.Warningconfirmbtn()
                    .click()

                Element.Popupclose()
                    .click()

                cy.wait(3000)

                Element.Patientsecondwarning()
                    .click()

                Element.Warningconfirmbtn()
                    .click()

                Element.Textarea()
                    .type('Testing')

                Element.Warningconfirmbtn()
                    .click()

                Element.Popupclose()
                    .click()
            }
        })

        cy.wait(4000)

    })

})