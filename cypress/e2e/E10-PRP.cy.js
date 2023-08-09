import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('PRP-Adding/Removing Professionals from the right panel', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('PRP-Adding/Removing Professionals from the right panel', () => {

        Element.VerifyUrl()
            .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')


        Element.Patientname()
            .click()

      //  Element.Sidebarbtn().should('have.length','2')
      cy.wait(4000)

        Element.Sidebarbtn()
            .last()
            .click()

        Element.Patientsidebarheader()
            .should('have.length','1')

        Element.Patientsidebarheader()
            .contains('Professionals')
            .click()

        Element.Professionalsearch()
            .click()

        // Element.EditDropdownSelect()
        Element.Locationoptions()
            .first()
            .click()

        Element.Professionalsselect()
            .its('length') 
            .should('be.gt', 0)

        cy.wait(6000)

        Element.Professionalsearch()
            .click({force:true})

        // Element.EditDropdownSelect()
        Element.Locationoptions()
            .first()
            .click({force:true})

        Element.Professionalsselect()
            .its('length') 
            .should('be.gt', 0)

        cy.wait(6000)
            
        Element.Removebtn()
            .last()
            .click({force:true})
        
        Element.Savebtn()            
            .contains('Remove')
            .click()
            cy.wait(2000)

        Element.Professionalsselect()
            .its('length') 
            .should('be.gt', 0)

        cy.wait(2000)
    })

})