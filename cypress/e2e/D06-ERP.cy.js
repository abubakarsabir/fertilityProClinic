import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('ERP- Create encounters based on rendering provider' , ()=>
{
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })

    it('ERP- Create encounters based on rendering provider', ()=>
    {
        // cy.login()
        Element.dropdown()
            .first()
            .click()

        Element.menu()
            .should('contain','Schedule Appointment')
            .click()

        Element.patient()
            .type('Riley, Kim')

        Element.placeholder()
            .then(($a)=>
            {
                expect($a)
                    .to.have
                    .value('Riley, Kim')
            })

        Element.slect()
            .should('contain', 'Riley, Kim')
            .click({force: true})

        Element.wait1()

        Element.icon()
            .click()

        Element.type()
            .first()
            .should('contain', 'Select an appointment type')
            .click()

        Element.search()
            .type('A')
            .type('{enter}')

        Element.selected()
            .should('have.length', '3')

        Element.loc()
            .first()
            .should('contain' , 'Select a location')
            .click()

        Element.input()
            .type('E')
            .type('{enter}')

        Element.selected()
            .should('have.length', '4')

        Element.rsc()
            .first()
            .should('contain', 'Select an option')
            .click()

        Element.rsc()
            .first()
            .find('[type="checkbox"]')
            .then(box => 
            {
                cy.wrap(box)
                    .eq(-3)
                    .check({force: true})
            })

        Element.rsc()
            .first()
            .find('[class="ember-checkbox ember-view"]')
            .should('be.checked')

        Element.date()
            .first()
            .click()

        Element.future()
            .first()
            .click()

        cy.get('.hours > [data-test="mf-dropdown"]')
            .first()
            // .should('contain','Time')
            .click()

        Element.input()
            .type('7:15 AM')
            .type('{enter}')

        Element.selected()
            .should('have.length', '5')

        Element.type()
            .last()
            .should('contain', 'Select an appointment type')
            .click()

        Element.search()
            .type('BLD')
            .type('{enter}')

        Element.selected()
            .should('have.length', '6')

        Element.loc()
            .last()
            .should('contain' , 'Select a location')
            .click()

        Element.input()
            .type('E')
            .type('{enter}')

        Element.selected()
            .should('have.length', '7')

        Element.rsc()
            .last()
            .should('contain', 'Select an option')
            .click()

        Element.rsc()
            .last()
            .find('[type="checkbox"]')
            .then(box => 
            {
                cy.wrap(box)
                    .eq(-3)
                    .check({force: true})
            })

        Element.rsc()
            .last()
            .find('[class="ember-checkbox ember-view"]')
            .should('be.checked')

        Element.date()
            .last()
            .click()

        Element.future()
            .next()
            .click()

        cy.get('.hours > [data-test="mf-dropdown"]')
            .last()
            // .should('contain','Time')
            .click()

        Element.input()
            .type('7:45 AM')
            .type('{enter}')

        Element.selected()
            .should('have.length', '8')

        Element.create()
            .should('contain', 'CREATE')
            .click()

        Element.wait()

        Element.calendar()
            .click()

        
        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.datepickerClass()
                        .should('be.visible')
                    )
        })

        Element.datepicker()
            .find('.today')
            .first()
            .click()

        Element.dayselector()
            .contains('Encounters')
            .click()

        Element.h4()
            .should('have.length.at.least',2)

    })
    
})