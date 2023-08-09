
import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('SES - Save Encounter when Changing its status', () => 
{
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('SES - Save Encounter when Changing its status', ()=> 
    {
        // cy.login()
        Element.dayselector()
            .contains('Day')
            .click()

        Element.calendar()
            .click()

        Element.future()
            .first()
            .click()

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

        Element.sideopen()
            .first()
            .click()

        Element.accordian()
            .find('[href="/patients/76466/general/814"]')
            .should('contain', 'Encounter')
            .click()

        Element.sideclose()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.encounter()
                        .should('be.visible')
                    )
        })

        Element.encounter()
            .find('[class="panel panel-default "]')
            .find('[class="mf-accordion-panel-heading-title"]')
            .first()
            .click()

        Element.warningbar()
            .then($a =>
            {
                if($a.find('.automated-warning').hasClass('automated-warning'))
                {                    
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
                    return 0
                }

            })

        Element.panelfooter()
            .find('[type="button"]')
            .then($a =>
            {
                if($a.text().includes('EDIT'))
                {
                    Element.panelfooter()
                        .find('[type="button"]')
                        .should('contain', 'EDIT')
                        .click()
                }

                else
                {
                    return 0
                }

            })

        Element.addprocedure()
            .should('contain',' ADD TO PROCEDURE')
            .first()
            .click()

        Element.appointmenttype()
            .should('contain','Select an appointment type')
            .first()
            .click()

        Element.option()
            .eq(3)
            .click()

        Element.selected()
            .last()
            .should('have.length', '1')

        Element.encfooter()
            .find('[data-test="mf-loading-button"]')
            .should('contain', 'SAVE')
            .click()

        Element.panelfooter()
            .find('[class="btn btn-default encounters-button-pending"]')
            .should('contain', 'SET TO PENDING')
            .click()

        Element.wait1()

        Element.confirmation()
            .find('[class="col-xs-6 text-left"]')
            .should('contain','CONTINUE')
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.dismiss())
        })

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
            resolve(Element.encounter()
                        .should('be.visible')
                    )
        })

        Element.encounter()
            .find('[class="panel panel-default "]')
            .find('[class="mf-accordion-panel-heading-title"]')
            .first()
            .click()

        Element.warningbar()
            .then($a =>
            {
                if($a.find('.automated-warning').hasClass('automated-warning'))
                {                    
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
                    return 0
                }

            })

            Element.wait1()

    })
    
})