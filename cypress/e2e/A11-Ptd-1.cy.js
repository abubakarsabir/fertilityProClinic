import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Ptd- 1 Adding a Patient To do from the ( )  Button', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('Ptd- 1 Adding a Patient To do from the ( )  Button', () => {
        Element.VerifyUrl()
            .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')

        Element.Appointmentbtn()
            .click()

        Element.Scheduleappointment()
            .contains('Create Patient To Do')
            .click()

        cy.get('.mf-filter-select-input')
            .type('Riley')

        Element.Selectitem()
            .contains('Riley, Kim')
            .click()

        Element.Todopatientname()
            .should('include.text', 'Riley, Kim')

        Element.Input()
            .type('Test')

        Element.Inputcheck()
            .invoke('val')
            .should('match', /Test/)

        Element.Datepicker()
            .click()

        Element.TodayDate()
            .first()
            .click()

        Element.TodoCategory()
            .click()


        Element.DropdownSelect()
            .should('have.length', 4)
            .first()
            .click()


        Element.TodoCategory()
            .should('include.text', 'Consultations')

        cy.wait(2000)

        Element.Todopriority()
            .click()

        Element.DropdownSelect()
            .should('have.length', 3)
            .first()
            .click({
                force: true
            })

        Element.Todopriority()
            .should('include.text', 'High')

        Element.Todotext()
            .type('Test')

        Element.Todotext()
            .should('have.text', 'Test')

        Element.Savebtn()
            .click()

        Element.Hamburgerbutton()
            .click()

        cy.wait(2000)

        Element.Sidemenu()
            .contains('Patient To Do')
            .click()

        cy.wait(2000)

        cy.get(':nth-child(2) > .col-xs-12')
            .contains('Riley, Kim')



    })
})