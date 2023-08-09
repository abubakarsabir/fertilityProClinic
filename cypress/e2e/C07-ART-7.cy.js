
import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('ART-7 Display PO ART Protocols in Descending Order' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('ART-7 Display PO ART Protocols in Descending Order', ()=>
    {
        // cy.login()
        Element.dayselector()
            .contains('Day')
            .click()

        Element.calendar()
            .click()

        new Cypress.Promise((resolve, reject)=>
        {
            resolve(Element.datepicker())
        })

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
                    .first().then($a =>
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

                    Element.protocolId()
                    .each(($a, index) =>
                    {
                        Element.protocolId()
                            .find('[data-cy="protocol_id_text"]')
                            .then($el =>
                            {
                                cy.wrap($el)
                                
                                for(var i=0;i<index;i++)
                                {
                                    const c = $el[i+1]
                                    const a = c.innerText
                                    // cy.log(a)
                                    const str= $el[i].innerText

                                    cy.log(str)
                                        .then((str) =>
                                        {
                                            if((str) > (a))
                                            {
                                                cy.log('Descending Order')
                                            }

                                            else
                                            {
                                                cy.log('Not in Descending Order')
                                            }

                                        })
                                }

                            })

                    })

                }
                
                else
                {
                    cy.log('No appointments available')
                }

            })
    })
    
})