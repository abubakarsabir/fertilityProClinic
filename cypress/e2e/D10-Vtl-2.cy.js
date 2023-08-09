import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')


describe('Vtl-2 Edit/Delete patient Vitals', () => {
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('Vtl-2 Edit/Delete patient Vitals', () => {

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
            .type('101')
            .invoke('val')
            .should('match', /101/)


        Element.Vitalsweight()
            .type('150')
            .invoke('val')
            .should('match', /150/)

        Element.VitalsTemperature()
            .type('88')
            .invoke('val')
            .should('match', /88/)

        Element.VitalsBloodpressure()
            .type('110/70')

        Element.Vitalspulse()
            .type('80')
            .invoke('val')
            .should('match', /80/)


        Element.Vitalsoxygen()
            .type('91')
            .invoke('val')
            .should('match', /91/)

        Element.VitalsRespiration()
            .type('125')
            .invoke('val')
            .should('match', /125/)

        Element.VitalsAbdominalGirth()
            .type('35')
            .invoke('val')
            .should('match', /35/)

        Element.Vitalsnotes()
            .type('test')

        Element.Savebtn()
            .click()

        cy.wait(3000)

        Element.vitalsedit()

        Element.VitalsTemperature()
            .clear()
            .type('111')

        Element.Savebtn()
            .click()

        Element.vitalsdelete()

        cy.get('[class="mf-confirmation-button__message"]')
        Element.Savebtn().click()


        cy.wait(2000)

    })

})