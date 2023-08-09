import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Sch-1 Schedule an Appointment and Edit time', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('Sch-1 Schedule an Appointment (+) Button (Edit Time)', () => {
        Element.VerifyUrl()
            .should('include', 'appointments')


        Element.Headerdropdowns().each(($body)=>
        {
            cy.wrap($body).click()
            
            Element.Headerdropdownsoptions().find('.mf-dropdown-multiple__options--select-all').then(($body)=> {
                
                if ($body.text().includes('Select All'))
                {
                    Element.Headerselectall()
                        .contains('Select All')
                        .click({force: true})

                }
                else
                {
                    return 0;
                }

              })
        })

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

        Element.Selectplaceholder().each(($a) => {

            Element.Selectplaceholder()
                .first()
                .click()

            Element.Dropdownvalues()
                .first()
                .click()
        })

        Element.Selecteditem()
            .should('have.length', '4')

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
            .should(($p) => {
                expect($p).to.have.length(1)
            })

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
                        .should('have.length','1')
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

        Element.Appointmentheaders().each(($a) => 
        {
            Element.Appointmentheaders().find('.mf-single-day-schedule-header ').then(($body) => 
            {   
                if ($body.text().includes('8:00 am')) 
                {
                    Element.Appointmentcalendar()
                            .contains('8:00 am')
                            .next()
                            .find('[data-test="mf-appointment-patient-detail-card"]')
                            .should('have.length','1')          
                }
                else 
                {
                    return 0
                }
            })
        })


    })

})

