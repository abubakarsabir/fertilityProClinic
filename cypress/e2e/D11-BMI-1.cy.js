
import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('BMI-1 Displays BMI to One Decimal Place as Opposed to a Whole Number',()=>
{
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('BMI-1 Displays BMI to One Decimal Place as Opposed to a Whole Number',()=>
    {
        // cy.login()
        Element.dayselector()
            .contains('Day')
            .click()

        Element.card()
            .first()
            .then($a =>
            {
                if($a.find('.automated-warning').hasClass('automated-warning'))
                {
                    Element.inlinename()
                        .first()
                        .click()

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(Element.warning()
                                    .should('be.visible')
                                )
                    })

                    Element.close()
                        .click()
                }

                else
                {
                    Element.inlinename()
                        .first()
                        .click()
                }

            })

        new Cypress.Promise((resolve, reject) => 
        {
            resolve(Element.protocolcycle()
                        .should('be.visible')
                    )
        })

        Element.sideopen()
            .first()
            .click()

        Element.accordian()
            .contains('Vitals')
            .click()

        Element.sideclose()
            .first()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.title()
                        .contains('Vitals')
                        .should('be.visible')
                    )
        })

        Element.tbody()
            .find('[data-ember-action] > :nth-child(4)')
            .then(($el)=>
            {
                cy.wrap($el)
                const str= $el[0].innerText
                const str002 = str.length
                cy.log(str)
                cy.log(str002)
                    
                if(str002 == 4)
                {
                    cy.log('Length is fine')
                }

                else
                {
                    cy.log('Length is invalid')
                }

            })


            Element.wait1()

    })
    
})