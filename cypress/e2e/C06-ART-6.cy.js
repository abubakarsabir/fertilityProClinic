import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('ART-6 Adding a Note to the Bottom of an ART Protocol Header' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('ART-6 Adding a Note to the Bottom of an ART Protocol Header', ()=>
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

        Element.toolbarContent()
            .find('[class="mf-protocol-toolbar__content-row with-border with-padding-md"]')
            .first()
            .click()

        Element.button()
        .then($a =>
        {
            if($a.text().includes('EDIT'))
            {
                Element.button()
                    .should('contain', 'EDIT')
                    .click()
            }

            else
            {
                return 0
            }

        })

        Element.textarea()
            .clear()
            .type('This is for the testing of comment section of patient')

        Element.textarea()
            .then($a =>
            {
                expect($a)
                    .to.have
                    .value('This is for the testing of comment section of patient')
            })

        Element.wait()

        Element.button()
            .should('contain', 'CONTINUE')
            .click()


        Element.close()
            .click()

        new Cypress.Promise((resolve, reject) => 
        {
            resolve(Element.protocolcycle()
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

        new Cypress.Promise((resolve, reject) => 
        {
            resolve(Element.protocolcycle()
                        .should('be.visible')
                    )
        })

        Element.toolbarContent()
            .find('[class="mf-protocol-toolbar__content-row with-border with-padding-md"]')
            .first()
            .click()

    Element.wait()
        

    })

    
})