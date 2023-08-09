import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('LRS-3 New Lab Results Will Open Up Automatically When Added in Patient Chart' , ()=>
{
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('LRS-3 New Lab Results Will Open Up Automatically When Added in Patient Chart', ()=>
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
            .contains('Lab Results')
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.title()
                        .should('contain', 'Lab Results')
                    )
        })

        Element.sideclose()
            .first()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.labaction()
                        .should('be.visible')
                    )
        })

        Element.labaction()
            .find('[type="button"]')
            .should('contain', 'Add New Lab Results')
            .click()

        cy.wait(2000)
    })
    
})