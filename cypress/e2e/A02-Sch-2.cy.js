import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Schedule an Appointment and Edit date', () => {

    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('Sch-2 Schedule an Appointment (+) Button (Edit Day)', () => {
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
            .click()

        Element.Appointmenttype()
            .should('contain','PCT')

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

        Element.Time()
            .click()

        Element.DropdownSelect()
            .contains('4:00 PM')
            .wait(1000)
            .click()

        Element.Selecteditem()
            .should('have.length', '4')

      Element.AppointmentCreatebtn()
            .click()

        Element.PatientElement()
            .should(($p) => 
                {
                    expect($p).to.have.length(1)
                })

        Element.MainDatepicker()
            .should('contain', '2022')

        cy.wait(4000)
        
        Element.Appointmentheaders().each(($a) => 
        {
            Element.Appointmentheaders().find('.mf-single-day-schedule-header ').then(($body) => 
            {
                if ($body.text().includes('4:00 pm')) 
                {
                    Element.Appointmentcalendar()
                        .contains('4:00 pm')
                        .next()
                        .find('[data-test="mf-appointment-patient-detail-card"]')
                        .should('have.length.at.least',1)
                        .first()
                        .click()
                }
                else 
                {
                    return 0
                }
            })
        })

        cy.wait(3000)
        
        Element.Edittimeclick()
            .should('contain','4:00 PM')

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

        Element.Paitentsearch()

        Element.Closesidebar()
            .click()

    })

})