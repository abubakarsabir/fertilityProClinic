import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')


describe('Vtl-1 Add Patients Vitals ', () => {
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('Vtl-1 Add Patients Vitals ', () => {

        Element.VerifyUrl()
            .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')

        Element.MainDatepicker()
            .should('contain', '2022')

        Element.Patientname()
            .click()

        Element.Sidebarbtn().first().click()

        Element.Sidebarlist()
            .contains('Vitals')
            .click()

        Element.Toclosesidebarbtn()
            .click()

        cy.contains('Add New Vitals')
            .click()

        Element.Vitalsheight()
            .type('70.9')
            .invoke('val')
            .should('match', /70.9/)


        Element.Vitalsweight()
            .type('160')
            .invoke('val')
            .should('match', /160/)

        Element.VitalsTemperature()
            .type('92')
            .invoke('val')
            .should('match', /92/)

        Element.VitalsBloodpressure()
            .type('120/80')

        Element.Vitalspulse()
            .type('92')
            .invoke('val')
            .should('match', /92/)


        Element.Vitalsoxygen()
            .type('95')
            .invoke('val')
            .should('match', /95/)

        Element.VitalsRespiration()
            .type('105')
            .invoke('val')
            .should('match', /105/)

        Element.VitalsAbdominalGirth()
            .type('45')
            .invoke('val')
            .should('match', /45/)

        Element.Vitalsnotes()
            .type('test')

        Element.Savebtn()
            .click()


        cy.wait(1000)
    })

})