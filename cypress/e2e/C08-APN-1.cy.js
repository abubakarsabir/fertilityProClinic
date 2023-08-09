
import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('APN-1 Load ART Protocols With Notes Section Closed' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('APN-1 Load ART Protocols With Notes Section Closed', ()=>
    {
        // cy.login()
        Element.dayselector()
            .contains('Day')
            .click()

        Element.calendar()
            .click()

        Element.datepicker()
            .find('.today')
            .first()
            .click()

        new Cypress.Promise ((resolve, reject) =>
        {
            resolve(Element.calendarwrap()
                        .find('.mf-single-day-schedule-calendar')
                        .should('be.visible')
                    )
        })

        Element.calendarwrap()
            .find('.mf-single-day-schedule-calendar')
            .then($body =>
            {
                if($body.text().includes('Appointment Status'))
                {
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

                    Element.footer()
                        .find('[data-test="link-to"]')
                        .first()
                        .should('contain', 'GO TO STIM SHEET')
                        .click()

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(Element.paneltitle()
                                    .should('be.visible')
                                )
                    })

                    Element.paneltitle()
                        .eq(-2)
                        .should('contain', 'Notes')
                        .click()

                    cy.intercept('GET', '/api/v1/note_templates/437', 
                    {
                        statusCode: 200
                    })

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(Element.notecontainer()
                                    .first()
                                )
                    })

                    Element.notecontainer()
                        .first()
                        .then($a =>
                        {
                            if($a.find('.ember-power-select-selected-item').hasClass('ember-power-select-selected-item'))
                            {
                                Element.notecontainer()
                                    .first().find('.ember-power-select-selected-item')
                                    .should('have.length', '1')

                            }

                            else
                            {
                                cy.log('Notes not added')
                            }

                        })
                }

                else
                {
                    cy.log('No appointments available')
                }

            })

        Element.wait()
        
    })
    
})