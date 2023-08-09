import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('LRS-4 Panel Name added to Lab Results Header and can be edited' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('LRS-4 Panel Name added to Lab Results Header and can be edited', ()=>
    {
        // cy.login()

        Element.dayselector()
            .contains('Day')
            .click()
        
        Element
            .calendar()
            .click()

        
        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.datepickerClass()
                        .should('be.visible')
                    )
        })

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
            resolve(Element.title()
                        .should('contain', 'ART Protocols')
                        .should('be.visible')
                    )
        })


        Element.sideopen()
            .first()
            .click()

        Element.accordianmenu()
            .contains('Lab Results')
            .click()
        
        Element.sideclose()
            .click()
        
        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.title()
                        .should('contain', 'Lab Results')
                        .should('be.visible')
                    )
        })

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.labaction()
                            .should('be.visible')
                    )
        })
        
        Element.addlabresult()
            .first()
            .should('contain', 'Add New Lab Results')
            .click()

        Element.panelbody()
            .find('[type="button"]')
            .last()
            .should('contain', 'ADD DIAGNOSTIC PANEL')
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.modalpopup()
                        .should('be.visible')
                    )
        })

        Element.modaltrigger()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.content()
                        .should('be.visible')
                    )
        })

        Element.option()
            .first()
            .click()

        Element.modalpopup()
            .find('.btn-primary')
            .should('contain', 'SAVE')
            .click()

        Element.panel()
            .find('.icon-icn_edit_pencil')
            .first()
            .click()

        

        Element.editprop()
            .scrollIntoView()
            .clear()
            .type('Testing', {force:true})


        Element.editprop()
            .scrollIntoView()
            .then($a =>
            {
                expect($a)
                    .to.have
                    .value('Testing')
            })
        

        Element.tick()
            .click()


        Element.save()
            .should('contain', 'SAVE')
            .click()


        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.dismiss())
        })


        Element.titletext()
            .first()
            .should('contain', 'Testing')

        Element.wait()

    })

    
})