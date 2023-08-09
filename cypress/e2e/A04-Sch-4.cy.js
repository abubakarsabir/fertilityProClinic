import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Sch-4 Schedule a Tentative Appointment and Edit Day', () => {

    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('Sch-4 Schedule a Tentative Appointment (+) Button  (Edit Day)', () => {
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

        Element.Resource()
            .click()
            .contains('BD')
            .click()

        Element.Datepicker()
            .click()
        
        Element.TodayDate()
            .first()
            .click()

        Element.Selecteditem()
            .should('have.length', '3')

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
            
        Element.Appointmentheaders().each(($a) => 
        {
            Element.Appointmentheaders().find('.mf-single-day-schedule-header ').then(($body) => 
            {
                if ($body.text().includes('Tentative appointments: 1')) 
                {
                    Element.Appointmentcalendar()
                        .contains('Tentative appointments: 1')
                        .next()
                        .find('[data-test="tentative-appointment"]')
                        .should('have.length','1')
                        .first()
                        .click('topLeft')
                }
                else 
                {
                        return 0
                }
            })
        })
        
        Element.Editdatepicker()
            .click()

        Element.TodayDate()
           .next()
            .click()

        Element.Patienteditpop()
            .should( (length) => 
            {
                expect(length).to.have.length('1')
            })

        Element.Savebtn()
            .click()

        Element.PatientElement()
            .should(($p) => 
                {
                    expect($p).to.have.length(1)
                })

        Element.MainDatepicker()
            .click()

        Element.TodayDate()
            .next()
            .click()

        Element.Closesidebar()
            .click()

        
        Element.Appointmentheaders().each(($a) => 
        {
            Element.Appointmentheaders().find('.mf-single-day-schedule-header ').then(($body) => 
            {
                if ($body.text().includes('Tentative appointments: 1')) 
                {
                    Element.Appointmentcalendar()
                            .contains('Tentative appointments: 1')
                            .next()
                            .find('[data-test="tentative-appointment"]')
                            .should('have.length','1')
                            
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
