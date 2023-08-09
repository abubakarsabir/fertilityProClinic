import Login from "../POM/Login"
const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')


describe('Enc-3 Close an encounter', () => {
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('Enc-3 Close an encounter', () => {

        cy.url().then(($ele) => {
            const url = $ele

            if (url == 'https://stg-clinic-novo.fertilitypro.com/appointments?mode=encounters') {

                return 0
            }
            else {

                Element.Mainheader()
                    .contains('Encounters')
                    .click()
                Element.VerifyUrl()
                    .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments?mode=encounters')

            }
        })

        cy.wait(4000)

        
            Element.Encountertile().then($body => {

                if ($body.find('.mf-accordion-panel-heading-status').text().includes('Open'))
                {

                    cy.contains('Visit').click()
                    // Element.Popupclose().click()
                    Element.Encounterclosebtn().click()
                    Element.EncounterConfirm().click()
                    cy.contains('Visit').click()
                } 
                else{
                    return 0;
                }

            })

        cy.wait(2000)
})

})