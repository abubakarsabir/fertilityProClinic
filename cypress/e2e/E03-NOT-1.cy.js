
import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('NOT-1 Toggle open new Notes section when new Note added' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })
    
    it('NOT-1 Toggle open new Notes section when new Note added', ()=>
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
            .contains('Notes')
            .click()
        
        Element.sideclose()
            .click()
        
        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.title()
                        .should('contain', 'Notes')
                        .should('be.visible')
                    )
        })


        Element.notesoverview()
            .first()
            .find('[data-test="add-new-note"]')
            .should('contain', 'ADD NEW')
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.noteitem()
                        .should('have.length.at.least', 1)
                    )
        })

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.editor()
                        .find('[data-test="mf-icon"]')
                        .first()
                        .should('have.class', 'expanded')
                    )
        })

        Element.noteitem()
            .first()
            .find('[data-test="basic-dropdown-trigger"]')
            .find('.ember-power-select-placeholder')
            .should('contain', 'None')
            .click()

        Element.content()
            .contains('Anesthesia Agreement')
            .click()

        Element.confirmation()
            .find('.mf-white-button-primary')
            .should('contain', 'Replace Text')
            .click()

        Element.noteitem()
            .first()
            .find('.ember-power-select-selected-item')
            .should('contain', 'Anesthesia Agreement')

        Element.noteitem()
            .first()
            .find('.ember-power-select-selected-item')
            .should('have.length', 1)

        
        Element.wait()
        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.savenote()
                        .should('exist')
                    )
        })

        Element.savenote()
            .should('contain', 'Save note')
            .click()
        
        
       Element.indicator().first().should('not.have.class', 'saved')
    })

})