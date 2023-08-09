import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('Pfs-1 Patient File Sharing' , ()=>
{
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('Pfs-1 Patient File Sharing', ()=>
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
            .find('[href="/patients/76466/documents/819"]')
            .should('contain', 'File Sharing')
            .click()

        Element.sideclose()
            .first()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(cy.get('.mf-main-title')
                        .should('contain', 'File Sharing')
                    )
        })

        cy.fixture('Testing.docx', { encoding: null })
            .as('myFixture')

        Element.fileinput()
            .selectFile('@myFixture', {force: true})

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.popupinput()
                        .should('be.visible')
                    )
        })

        Element.popupinput()
            .eq(3)
            .type('File')

        Element.popupinput()
            .find('input')
            .eq(3)
            .then($a =>
            {
                expect($a)
                    .to.have
                    .value('File')
            })

        Element.popupinput()
            .last()
            .type('File for testing')

        Element.popupinput()
            .find('input')
            .last()
            .then($a =>
            {
                expect($a)
                    .to.have
                    .value('File for testing')
            })

        Element.create()
            .should('contain', 'Upload')
            .click()

        Element.wait()
        
        Element.document()
            .find('tbody')
            .find('tr')
            .eq(-1)
            .click()

        new Cypress.Promise((resolve, reject)=>
        {
            resolve(Element.viewer()
                        .should('be.visible')
                    )
        })
        
        Element.wait()

        Element.close()
            .click()
        
        Element.wait1()

    })
    
})