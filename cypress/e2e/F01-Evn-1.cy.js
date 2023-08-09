import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Evn-1 Create an event (+ Edit time)', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('Evn-1 Create an event (+ Edit time)', () => {

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
        
        Element.Eventinput().then(($a) => {

            expect($a).to.have.value('Test')
        })


        let input = ['Lunch', 'PAOLI', '12:00 PM']

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

        

        Element.Savebtn()
            .contains('CREATE')
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(cy.get('.mf-basic-modal__container').should('have.length', 0))
        })
        
        Element.Mainheader()
            .contains('Day')
            .click()

        Element.VerifyUrl()
            .should('not.contain','mode=resources')
       
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

        Element.Appointmentheaders().each(($a) => 
            {
                Element.Appointmentheaders().find('.mf-single-day-schedule-header ').then(($body) => 
                {
                    if ($body.text().includes('12:00 pm')) 
                    {
                        Element.Appointmentcalendar()
                            .contains('12:00 pm')
                            .next()
                            .find('[data-test="meeting-appointment"]')
                            //.should('have.length.at.least','1')
                            .first()
                            .click()
                    }
                    else 
                    {
                        return 0
                    }
                })
            })

        Element.Edittimeclick()
            .click()

        Element.EditDropdownSelect()
            .contains('1:00 PM')
            .wait(1000)
            .click()

        Element.Savebtn()
            .click()

        Element.Closesidebar()
            .click()

        cy.wait(2000)

    })

})