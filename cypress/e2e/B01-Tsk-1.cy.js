import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Tsk-1 Adding a Task from the + Button ', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('Tsk-1 Adding a Task from the + Button ', () => {

        Element.VerifyUrl()
            .should('include', '/appointments')

        Element.Mainheader()
            .contains('Day')
            .click()

        Element.Appointmentbtn()
            .click()

       Element.Scheduleappointment()
            .contains('Create New Task')
            .click()

        Element.TaskSearchpatient()
            .should('be.visible')
            .type('Riley')

        Element.TaskSearchpatient().then(($el) => {

            expect($el).to.have.value('Riley')
        })

        Element.Selectitem()
            .should('be.visible')
            .contains('Riley, Kim')
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

        Element.Selecteditem()
            .should('have.length','1')

        Element.Dropdownclick()
            .contains('Select task priority')
            .click()

        Element.Inputtype()
            .type('Medium')


        Element.DropdownSelect()
            .first()
            .click()

        Element.Selecteditem()
            .should('have.length','2')


        Element.Input()
            .type('Get Information')

        Element.Inputcheck().then(($el) => {

            expect($el).to.have.value('Get Information')
        })
        
        Element.Textarea()
            .type(credentials[4].text)

       Element.Taskselect()
            .click()

        Element.Selectitem()
            .first()
            .click()

        Element.Taskselect()
            .click({ force: true })

        Element.Selectitem()
            .first()
            .click()

        Element.Savebtn().click()

        Element.Hamburgerbutton()
            .click()

        Element.Sidemenu()
            .contains('Task')
            .click()
       
        cy.wait(2000)

        cy.get('[data-test="mf-tasks-panel"]')
            .contains('New')
            .click()

        Element.Taskcompleted()
            .click()
      
        Element.DropdownSelect()
            .contains('Completed')
            .click()

        Element.Savebtn()
            .click()

        cy.wait(2000)

        Element.Patienttab()
            .click()




    })
})
