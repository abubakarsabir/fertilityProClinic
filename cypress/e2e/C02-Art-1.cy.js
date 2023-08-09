import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')


describe('Art-1 Creating a new ART protocol from the patients “left side menu with Template', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('Art-1 Creating a new ART protocol from the patients “left side menu with Template', () => {

        Element.VerifyUrl()
            .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')


        Element.Patientname()
            .click()

        // cy.wait(4000)
        cy.get('[class="bm-content"]').then($body => {

            if ($body.find('.modal-overlay').length > 0) {
                cy.get('.modal-overlay').then($header => {
                    if ($header.is(':visible')) {
                        Element.Popupclose().click()
                    }

                })

            }

        })

       Element.Sidebarbtn()
            .first()
            .click()

        Element.Sidebarlist()
            .contains('ART Protocols')
            .click()


        Element.Closeleftbtn()
            .click()

    new Cypress.Promise((resolve, reject) =>
    {
        resolve(cy.get('[data-cy="protocol_cycle_type_container"]').should('be.visible'))
    })
      cy.contains('ADD NEW PROTOCOL')
            .click()
        cy.wait(2000)
        cy.contains('Select a Protocol Template').click()
      

       // Element.Dropdownclick().click()
        cy.get('[class="ember-power-select-search"]').type('IVF').type('{enter}')


  Element.Savebtn().click()
       
  cy.wait(2000)

    })

})