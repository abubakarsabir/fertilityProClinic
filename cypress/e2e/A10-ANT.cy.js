import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('ANT- Display Appointment Note text on the Schedule Day View ', () => 
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('ANT- Display Appointment Note text on the Schedule Day View', ()=> 
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

        Element.patientcard()
            .first()
            .click()

        Element.edit()
            .click()

        Element.note()
            .type('This is for testing purpose.')

        Element.notefooter()
            .find('[type="button"]')
            .should('contain', 'Ok')
            .click()

        Element.save()
            .should('contain', 'Save')
            .click()

        Element.closecalendar()
            .click()

        cy.reload()
        
        Element.wait()
    })
})