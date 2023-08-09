import Login from "../POM/Login"
const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('LRs-1 Create a new lab result ', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('LRs-1 Create a new lab result ', () => {

        Element.VerifyUrl()
            .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')

        Element.Patientname()
            .click()
            cy.wait(2000)
            cy.get('[class="bm-content"]').then($body => 
            {
                if ($body.find('.modal-overlay').length > 0) 
                {
                    cy.get('.modal-overlay').then($header => 
                    {
                        if ($header.is(':visible')) 
                        {
                            cy.get('[data-test="mf-icon-button"]').click()
                        }
                        else
                        {
                            return 0
                        }
                    })
                }
                else
                {
                    return 0
                }
            })

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.Title()
            .should('have.text', '\n          ART Protocols\n        '))
        })

        Element.Sidebarbtn()
            .first()
            .click()

        Element.Sidebarlist()
            .should('have.length', '22')
            .contains('Lab Results')
            .click()

        Element.Toclosesidebarbtn()
            .click()

        Element.Title()
            .should('have.text', '\n          Lab Results\n        ')

        cy.contains('Add New Lab Results')
            .click()

        Element.Labresultexpand()
            .its('length')
            .should('be.gt', 0)

        Element.Labresultexpand().first()
            .click()

        Element.Datepicker()
            .first()
            .click()

        Element.TodayDate()
            .first()
            .click()

        Element.Datepicker()
            .last()
            .click()

        Element.TodayDate()
            .first()
            .click()


        Element.Clinicalselect()
            .first()
            .click()

        Element.EditDropdownSelect()
            .first()
            .click()

        let input = ['DH', '1212121', 'Dr']

        Element.Labresultoverview().find('[data-test="mf-input"]').each(($el, index) => {
            cy.wrap($el).type(input[index])
        })

        cy.get('[data-test="mf-dropdown-model"] > [data-test="basic-dropdown-trigger"]')
            .last()
            .click()

        Element.EditDropdownSelect()
            .first()
            .click()

        cy.contains('ADD DIAGNOSTIC VALUE').click()

        cy.get('.mf-basic-modal__container').contains('ADD DIAGNOSTIC VALUE').click()

        cy.get('[class="ember-power-select-placeholder"]').contains('Select a Diagnostic Value').click()

        Element.DropdownSelect().contains('P4').click()

        cy.get('.mf-basic-modal__container').contains('ADD DIAGNOSTIC VALUE').click()

        cy.get('[class="ember-power-select-placeholder"]').contains('Select a Diagnostic Value').click()

        Element.DropdownSelect().contains('E2').click()

        cy.get('#basicModalFooter').find('[data-test="mf-loading-button"]').click()

        cy.get('[data-test="mf-data-table-input-column"]').each(($el, index) => {
            const num = Math.ceil(Math.random() * 10);
            cy.wrap($el).type(num).should('have.length','1')
            
        })

        cy.get('[data-test="mf-overview-lab-results-item-diagnostics-data-table"]').find('[data-test="mf-datepicker"]')
        .each(($el, index) => {
            
            cy.wrap($el).click()
            Element.TodayDate()
            .first()
            .click()
            
        })

        Element.Clinicalselect()
            .last()
            .click()

            Element.Savebtn()
            .contains('SAVE')
            .click()
            
            cy.wait(2000)
        
            cy.get('[data-test="mf-status-color-dropdown"]').first().click()
            Element.EditDropdownSelect()
            .contains('Blood Drawn')
            .click()


            Element.Savebtn()
            .contains('CONTINUE')
            .click()

            cy.wait(2000)

            cy.reload()

            Element.Title()
            .should('contain', 'Lab Results')

            cy.wait(2000)

    })

})


