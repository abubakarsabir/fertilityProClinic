import Login from "../POM/Login"
const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Ptd- 2 Adding a Patient To do from the patients left side menu', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('Ptd- 2 Adding a Patient To do from the patients left side menu ', () => {

        Element.VerifyUrl()
            .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')

        cy.contains('Riley, Kim')
            .click()

        cy.get('[class="mf-side-menu-icon-close mf-icon icon-icn_arrows-dropdown-right ember-view"]')
            .first()
            .click()

        Element.Sidebarlist()
            .contains('Patient To Do')
            .click()

        cy.get('[class="mf-side-menu-icon-open mf-icon icon-icn_arrows-dropdown-right ember-view"]')
            .click()

        Element.Newtodo()
            .click()

        Element.Input().last()
            .type('Test')

        Element.Inputcheck()
            .last()
            .invoke('val')
            .should('match', /Test/)

        Element.Datepicker()
            .click()

        Element.TodayDate()
            .first()
            .click()

        Element.TodoCategory()
            .last()
            .click()


        Element.DropdownSelect()
            .should('have.length', 4)
            .first()
            .click()


        Element.TodoCategory()
            .last()
            .should('include.text', 'Consultations')

        cy.wait(2000)

        Element.Todopriority()
            .click()

        Element.DropdownSelect()
            .should('have.length', 3)
            .first()
            .click({ force: true })

        Element.Todopriority()
            .should('include.text', 'High')

        Element.Todotext()
            .type('Test')

        Element.Todotext()
            .should('have.text', 'Test')

        Element.Savebtn()
            .click()


        new Cypress.Promise((resolve, reject) =>
        {
            resolve(cy.get('.action')
                            .should('be.visible')
                    )
        })

        cy.wait(3000)

    })

})