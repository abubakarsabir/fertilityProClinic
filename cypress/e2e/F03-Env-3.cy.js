import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Evn-3 Create an event (duration of all day)', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('Evn-3 Create an event (duration of all day)', () => {

        Element.Mainheader()
            .contains('Encounters')
            .click()
       
        Element.VerifyUrl()
            .should('include', 'mode=encounters')
       
        Element.Appointmentbtn()
            .click()

        Element.Scheduleappointment()
            .contains('Schedule Event')
            .click()

        Element.Popuptext()
            .should('have.text', 'Schedule Event')

        Element.Eventinput()
            .first()
            .should('be.empty')
            .type('Test')
        
        Element.Eventinput().then(($el) => {

            expect($el).to.have.value('Test')
        })


        let input = ['Lunch', 'PAOLI', '3:00 PM']

        Element.Dropdownclick().each(($el, index) => {
            cy.wrap($el)
                .click()

            Element.Inputtype()
                .type(input[index])

            Element.DropdownSelect()
                .first()
                .click()

        })

        Element.Selecteditem().should('have.length','3')

        Element.Eventinput()
            .last()
            .should('be.empty')
            .type('50')


        Element.Datepicker()
            .click()

        Element.TodayDate()
            .next()
            .click()


        Element.Searchbar()
            .click()

        Element.Selectitem()
            .first()
            .click()

        Element.Selecteduser()
            .should('have.length','1')
        
        Element.Searchbar()
            .click({force:true})

        Element.Selectitem()
            .first()
            .click()

        Element.Selecteduser()
            .should('have.length','2')

        Element.Eventresource()
            .click()
            .contains('BD')
            .click()

        
        cy.contains('All Day')
            .click()

            Element.Savebtn()
            .contains('CREATE')
            .click()

        cy.get('[data-test="mf-schedule-datepicker"]')
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(cy.get('.datepicker-days')
                        .should('be.visible')
                    )
        })

        cy.get('.datepicker-days')
            .find('.today')
            .next()
            .click()

        Element.Mainheader()
            .contains('Day')
            .click()

        
         Element.Appointmentheaders().each(($a) => 
            {
                Element.Appointmentheaders().find('.mf-single-day-schedule-header ').then(($body) => 
                {
                    if ($body.text().includes('All day')) 
                    {
                        Element.Appointmentcalendar()
                            .contains('All day')
                            .next()
                            .find('[data-test="meeting-appointment"]')
                            .should('exist')
                    }
                    else 
                    {
                        return 0
                    }
                })
            })
 
         cy.wait(2000)
    })



})