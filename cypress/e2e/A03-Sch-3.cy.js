import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Sch-3 Schedule a Tentative Appointment and Edit Time', () => {

    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('Sch-3 Schedule a Tentative Appointment (+) Button  (Edit Time)', () => {
        Element.VerifyUrl()
            .should('include', '/appointments')

        Element.Appointmentbtn()
            .click()

        Element.Scheduleappointment()
            .first()
            .click()

        Element.Popuptext()
            .should('have.text', 'Schedule Appointment')

        Element.Searchbar()
            .should('be.visible')
            .type('Riley')

        Element.Searchbar().then(($el) => {

            expect($el).to.have.value('Riley')
        })

        Element.Selectitem()
            .should('be.visible')
            .contains('Riley, Kim')
            .click()

        Element.Patientinfo()
            .should('contain', 'Riley, Kim')

        Element.Appointmenttype()
            .click()

        Element.Inputtype()
            .type('PCT')

        Element.AppointmenttypeDropdown()
            .first()
            .click()

        Element.Location()
            .click()

        Element.Locationoptions()
            .contains('PAOLI')
                .click()

        Element.Selecteditem()
            .should('have.length', '3')

        Element.Resource()
            .click()
            .contains('BD')
            .click()

        Element.Datepicker()
            .click()
        
        Element.TodayDate()
            .first()
            .click()

        Element.AppointmentCreatebtn()
            .click()

        Element.PatientElement()
            .should(($p) => 
                {
                    expect($p).to.have.length(1)
                })

        cy.wait(5000)

       Element.Mainpage()
            .should('contain','Tentative appointments')       
        
        Element.Settime()
            .click({force:true})
            
        Element.DropdownSelect()
            .contains('5:35 PM')
                .click({force: true})

        Element.Appointmentheaders().each(($a) => 
        {
            Element.Appointmentheaders().find('.mf-single-day-schedule-header ').then(($body) => 
                {
                    if ($body.text().includes('5:35 pm')) 
                    {
                            Element.Appointmentcalendar()
                                .contains('5:35 pm')
                                .next()
                                .find('[data-test="mf-appointment-patient-detail-card"]')
                                .should('have.length.at.least', 1)    
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
