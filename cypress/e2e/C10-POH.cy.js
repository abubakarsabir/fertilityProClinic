import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('POH- Update patient PO header data and display' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('POH- Update patient PO header data and display', ()=>
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

        Element.breadcrumb()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.dropdownmenu()
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

        Element.textfield()
            .eq(5)
            .clear()
            .type('Riley', {force:true})

        Element.savebtn()
            .should('contain','SAVE')
            .click()

        new Cypress.Promise((resolve, reject) =>{
            resolve(Element.dismiss())
        })

        Element.topname()
            .contains('Riley, Kim')
            .click()

        new Cypress.Promise((resolve, reject)=>
        {
            resolve(Element.protocolcycle()
                        .should('be.visible')
                    )
        })

        Element.info()
            .find('strong')
            .should('contain', '"Riley"')

        Element.allergy()
            .click()

        Element.button()
            .should('contain', 'EDIT')
            .click()

        Element.textarea()
            .clear()
            .type('This is for the testing of allergy section of patient')

        Element.button()
            .should('contain', 'CONTINUE')
            .click()

        Element.close()
            .click()

        Element.wait1()

        Element.assesment()
            .click()

        Element.button()
            .should('contain', 'EDIT')
            .click()

        Element.textarea()
            .clear()
            .type('This is for testing purpose')

        Element.button()
            .should('contain', 'CONTINUE')
            .click()

        Element.close()
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
            resolve(Element.protocolcycle()
                        .should('be.visible')
                    )
        })

    })
    
})