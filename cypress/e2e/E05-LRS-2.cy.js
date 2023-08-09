import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('LRS-2 Display Confirmation Modal for Lab Results Status Changes' , ()=>
{
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('LRS-2 Display Confirmation Modal for Lab Results Status Changes', ()=>
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
            .find('[href="/patients/76466/general/953"]')
            .should('contain', 'Lab Results')
            .click()

        Element.sideclose()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.title()
                        .contains('Lab Results')
                        .should('be.visible')
                    )
        })

        Element.status()
            .find('[class="ember-power-select-trigger ember-basic-dropdown-trigger ember-view"]')
            .first()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.content()
                        .should('be.visible')
                    )
        })

        Element.content()
            .find('.ember-power-select-option')
            .eq(3)
            .should('contain','Needs Review')
            .click()

        Element.pagebody()
            .then($a =>
            {
                if($a.find('.mf-confirmation').hasClass('mf-confirmation'))
                {
                    Element.confirmation()
                        .find('[class="col-xs-6 text-left"]')
                        .should('contain','CONTINUE')
                        .click()

                    Element.wait()
                }

                else
                {
                    return 0
                }
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
            resolve(Element.title()
                        .should('contain', 'Lab Results')
                        .shoul('be.visible')
                    )
        })

        Element.wait1()
    })
    
})