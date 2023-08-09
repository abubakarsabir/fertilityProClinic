import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Sch-5 Schedule an Appointment from the Patient Chart (Edit Time)', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('Sch-5 Schedule an Appointment from the Patient Chart (Edit Time)', () => {
        Element.VerifyUrl()
            .should('include', '/appointments')

        Element.MainDatepicker()
            .should('contain', '2022')

        Element.Patientname()
            .click()

        cy.wait(5000)
        new Cypress.Promise((resolve,reject) =>{
            resolve(Element.Scheduleappointment())
        })    

        Element.Dotbtn()
            .last()
            .click()

       
        Element.Scheduleappointment()
            // .should('have.length','2')
            .contains('Add Appointment')
            .click()

         Element.Patientinfo()
            .should('contain', 'Riley, Kim')

        Element.Appointmenttype()
            .click()

        Element.Inputtype()
            .type('STP')

        Element.AppointmenttypeDropdown()
            .click()

        Element.Appointmenttype()
            .should('contain', 'STP')

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
            .last()
            .click()

        Element.TodayDate()
            .next()
            .click()

        Element.Time()
            .click()

        Element.DropdownSelect()
            .contains('7:00 AM')
            .wait(1000)
            .click()

        Element.Selecteditem()
            .should('exist')

        Element.AppointmentCreatebtn()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(cy.get('.mf-basic-modal__container')
                            .should('have.length', 0)
                    )
        })


        Element.Header()
            .contains('Home')
            .click()

        Element.MainDatepicker()
            .click()

        Element.TodayDate()
            .next()
            .click()


        Element.PatientElement()
            .should(($p) => {
                expect($p).to.have.length(1)
            })

        cy.wait(3000)

        Element.MainDatepicker()
            .should('contain', '2022')

        Element.Appointmentheaders().each(($a) => 
        {
            Element.Appointmentheaders().find('.mf-single-day-schedule-header ').then(($body) => 
            {
                if ($body.text().includes('7:00 am')) 
                {
                    Element.Appointmentcalendar()
                        .contains('7:00 am')
                        .next()
                        .find('[data-test="mf-appointment-patient-detail-card"]')
                        .should('exist')
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
            .should('contain', '7:00 AM')
            .click()

        Element.EditDropdownSelect()
            .contains('8:00 AM')
            .wait(1000)
            .click()

        Element.Edittimeclick()
            .should('contain', '8:00 AM')

        Element.Savebtn()
            .click()

        Element.Paitentsearch()

        Element.Closesidebar()
            .click()

        cy.wait(2000)

    })

})