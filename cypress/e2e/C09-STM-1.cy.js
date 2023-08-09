import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('STM-1 Setting a Status for Each Day of a STIM Sheet and Searching for Appointments by Review Status' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('STM-1 Setting a Status for Each Day of a STIM Sheet and Searching for Appointments by Review Status', ()=>
    {
        // cy.login()
        Element.dayselector()
            .contains('Day')
            .click()

        Element.calendar()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.datepicker()
                        .should('be.visible')
                    )
        })

        Element.datepicker()
            .find('.today')
            .first().click()

        Element.card()
            .first()
            .then($a =>
            {
                if($a.find('.automated-warning').hasClass('automated-warning'))
                {
                    Element.inlinename()
                        .first()
                        .click()

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(Element.warning()
                                    .should('be.visible')
                                )

                    })

                    Element.close()
                        .click()
                }

                else
                {
                    Element.inlinename()
                        .first()
                        .click()

                }

            })

        new Cypress.Promise((resolve, reject) => 
        {
            resolve(Element.protocolcycle()
                        .should('be.visible')
                    )
        })

        Element.stimsheet()
            .first()
            .should('contain','GO TO STIM SHEET')
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(cy.get('.patient-outlet > .container-fluid')
                        .should('be.visible')
                    )
        })

        Element.tablecell()
            .then($a =>
            {
                if($a.find('[data-cy="stimsheet_empty_row_cell"]').hasClass('event'))
                {
                    cy.log('No appointment scheduled in Protocol to start cycle or set status')
                }

                else
                {
                    cy.get('[data-cycle-day="1"]')
                        // .find('.cycledate')
                        // .contains('1')
                        .find('[data-test="basic-dropdown-trigger"] > [data-test="mf-status-color-dropdown-head"] > div')
                        .click()

                    Element.wait1()

                    Element.content()
                        .find('.ember-power-select-option')
                        .eq(2)
                        .should('contain','Dr Reviewed')
                        .click()

                    Element.warningbar()
                        .then($a =>
                        {
                            if($a.find('.automated-warning').hasClass('automated-warning'))
                            {
                                cy.reload()
                                new Cypress.Promise((resolve, reject) =>
                                {
                                    resolve(Element.warning()
                                                .should('be.visible')
                                            )
                                })

                                Element.close()
                                    .click()
                            }

                            else
                            {
                                cy.reload()
                            }

                        })

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(Element.stim()
                                    .should('be.visible')
                                )
                    })

                    Element.wait()
                    
                    Element.topname()
                        .contains('Home')
                        .click()

                    Element.searchholder()
                        .type('Dr Reviewed')

                    Element.searchholder()
                        .then(($a)=>
                        {
                            expect($a)
                                .to.have
                                .value('Dr Reviewed')
                        })

                }

            })

    })

})