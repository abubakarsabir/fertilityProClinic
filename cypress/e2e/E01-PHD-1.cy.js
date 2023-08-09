import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('PHd-1 Adding Pregnancy and Infertility History in the Patient Header', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('PHd-1 Adding Pregnancy and Infertility History in the Patient Header', () => {



        Element.VerifyUrl()
            .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')


        // Element.Patientname().click()

        // cy.wait(4000)
        cy.get('[data-test="mf-appointment-patient-detail-card"]')
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

        Element.Pregancyhistorytab().then(($body) => {
            if ($body.text().includes('Pregnancy')) {

                Element.Pregancyhistorytab().click()

                Element.Pregancyhistoryinput().should('have.length', 9)

                Element.Pregancyhistoryinput().each(($el, index) => {
                    cy.wrap($el)
                        .type('1', { force: true })
                })
                Element.Pregancyoptions().find('[data-test="mf-loading-button"]')
                    .click()

            }
            else {

                return 0;
            }


        })



        cy.get('.mf-infertility-diagnose-dropdown-head').then(($body) => {
            if ($body.text().includes('Diagnose')) {

                Element.Infertilitydropdown()
                    .click()

                Element.Infertilitydropdownlist()
                    .first()
                    .click()

            }
            else {
                return 0;
            }


        })

        cy.reload()

        cy.wait(4000)

        Element.Pregancyhistorytab().click()

        cy.wait(2000)
    })


})
