import Login from "../POM/Login"

const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')


describe('Enc-4 Create an empty Encounter in the patient’s chart', () => {
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('Enc-4 Create an empty Encounter in the patient’s chart', () => {

        cy.url().then(($ele) => {
            const url = $ele

            if (url == 'https://stg-clinic-novo.fertilitypro.com/appointments') {

                return 0
            }
            else {

                Element.Mainheader()
                    .contains('Day')
                    .click()

                Element.VerifyUrl()
                    .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')

            }
        })

        cy.get('[data-test="mf-schedule-single-day-events-with-time"]')
            .first()
            .then($a =>
            {
                if($a.find('.automated-warning').hasClass('automated-warning'))
                {
                    cy.get('[class="patient-name inline"]')
                        .first()
                        .click()

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(cy.get('.mf-patient-warning-modal')
                                    .should('be.visible')
                                )

                    })

                    cy.get('[data-test="mf-icon-button"]')
                        .click()
                }

                else
                {
                    cy.get('[class="patient-name inline"]')
                        .first()
                        .click()

                }

            })

        new Cypress.Promise((resolve, reject) => 
        {
            resolve(cy.get('[data-cy="protocol_cycle_type_container"]')
                        .should('be.visible')
                    )
        })

        Element.Sidebarbtn()
            .first()
            .click()

        Element.Sidebarlist()
            .contains('Encounters')
            .click()

        Element.Closeleftbtn()
            .click()


        
        new Cypress.Promise((resolve, reject) =>
        {
            resolve(cy.get('[data-test="mf-overview-encounters"] > [data-test="mf-loading"]').should('be.visible'))
        })


        Element.AddEncouter()
            .click()



            cy.get('[data-cy="patient_infobar_warnings_bar_container"]')
            .then($a =>
            {
                if($a.find('.automated-warning').hasClass('automated-warning'))
                {                    
                    cy.get('[data-test="mf-overview-encounters-mf-overview-encounters-wrapper"]')
                        .contains('Visit')
                        .first()
                        .click()
                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(cy.get('.mf-patient-warning-modal')
                                    .should('be.visible')
                                )
                    })

                    Element.Popupclose()
                            .click()
                }

                else
                {
                    cy.get('[data-test="mf-overview-encounters-mf-overview-encounters-wrapper"]')
                        .contains('Visit')
                        .first()
                        .click()
                }

            })
    
            cy.wait(2000)

    })

})