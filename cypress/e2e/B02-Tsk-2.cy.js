import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Tsk-2 Adding a task in the Patients Chart ', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('Tsk-2 Adding a task in the Patients Chart ', () => {

        Element.VerifyUrl()
            .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')

        cy.contains('Riley, Kim')
            .click()

        cy.get('[class="mf-side-menu-icon-close mf-icon icon-icn_arrows-dropdown-right ember-view"]')
            .first()
            .click()
        cy.wait(2000)
        Element.Sidebarlist()
            .contains('Task')
            .click()

        cy.get('[class="mf-side-menu-icon-open mf-icon icon-icn_arrows-dropdown-right ember-view"]')
            .click()

        Element.Addnewtask()
            .click()

        Element.Datepicker()
            .click()

        Element.TodayDate()
            .first()
            .click()

        Element.Dropdownclick()
            .contains('Select task category')
            .click()

        Element.Inputtype()
            .type('Document')

        Element.DropdownSelect()
            .first()
            .click()

        cy.wait(2000)

        Element.Dropdownclick()
            .contains('Select task priority')
            .click()

        Element.Inputtype()
            .type('Medium')


        Element.DropdownSelect()
            .first()
            .click()


        cy.get(':nth-child(3) > :nth-child(2) > [data-test="mf-input"]').type('Get Information')


        Element.Textarea()
            .type(credentials[4].text)

        cy.get('[placeholder="Select professionals or teams"]')
            .click()

        cy.get('[data-test="mf-filter-user-item"]')
            .first()
            .click()

        cy.get('[placeholder="Select professionals or teams"]')
            .click({ force: true })

        cy.get('[data-test="mf-filter-user-item"]')
            .first()
            .click()

        Element.Savebtn()
            .click()

        cy.get('.task-list-container > :nth-child(1) > .col-xs-12')
            .click()

        cy.get('.mf-basic-modal__container > :nth-child(4) > :nth-child(1) > [data-test="mf-dropdown-model"]')
            .click()

        Element.DropdownSelect()
            .contains('Completed') 
            .click()

        Element.Savebtn()
            .click()
            
        cy.wait(2000)


    })
})