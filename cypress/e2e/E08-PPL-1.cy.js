import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('PPL-1 Set a Patients "Prefered Location” ' , ()=>
{
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('PPL-1 Set a Patients "Prefered Location” ', ()=>
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

        Element.breadcrumb()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.dropdownmenu
                        .find('[class="ember-view"]')
                        .contains('Patient Record')
                        .should('be.visible')
                    )

        })

        Element.dropdownmenu()
            .find('[class="ember-view"]')
            .contains('Patient Record')
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.formlist()
                        .should('be.visible')
                    )
        })

        Element.view()
            .first()
            .should('contain', 'VIEW')
            .click()

        new Cypress.Promise((resolve, reject)=>
        {
            resolve(Element.formpage())
        })

        Element.dropdownmodel()
            .click()

        Element.wait1()

        Element.option()
            .first()
            .click()

        Element.savebtn()
            .should('contain','SAVE')
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.dismiss())
        })

        Element.topname()
            .contains('Riley, Kim')
            .click()

        new Cypress.Promise((resolve, reject)=>
        {
            resolve(Element.title()
                        .contains('ART Protocols')
                        .should('be.visible')
                    )
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

    })

})