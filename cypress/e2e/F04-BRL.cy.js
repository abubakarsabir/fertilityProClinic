import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('BRL - Clinic Users Batch Print Lab Results & Barcode Labels' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('BRL - Clinic Users Batch Print Lab Results & Barcode Labels', ()=>
    {
        // cy.login()
        Element.hamburger()
            .click()

        Element.link()
            .contains('Lab Results Overview')
            .click()

        Element.save()
            .should('contain', 'SEARCH')
            .click()

        Element.checkbox()
            .first()
            .check()

        Element.checkbox()
            .first()
            .should('be.checked')
                

        Element.toggle()
            .first()
            .click()

        cy.get('[role="menuitem"]')
            .eq(8)
            .click()
//need to add close window code

        Element.wait()

        Element.toggle()
            .first()
            .click()

        cy.get('[role="menuitem"]')
            .eq(9)
            .click()
            //need to add close window code

        Element.wait()

        Element.toggle()
            .first()
            .click()

        cy.get('[role="menuitem"]')
            .eq(10)
            .click()
            //need to add close window code


        Element.wait()

        Element.toggle()
            .first()
            .click()

        cy.get('[role="menuitem"]')
            .eq(11)
            .click()
            //need to add close window code


        Element.wait()

        Element.toggle()
            .first()
            .click()

        cy.get('[role="menuitem"]')
            .eq(12)
            .click()

        Element.toggle()
            .first()
            .click()
            
        cy.get('[role="menuitem"]')
            .eq(13)
            .click()
//need to add close window code

        Element.wait()

        Element.toggle()
            .first()
            .click()

        cy.get('[role="menuitem"]')
            .contains('Print')
            .click()
            
    // cy.type({ altKey: true, keyCode: 115, which: 115 })

    })
})