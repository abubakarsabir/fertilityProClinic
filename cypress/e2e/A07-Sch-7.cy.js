import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('Sch-7 Schedule an Appointment from the resources view (+ Edit Time)' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })
    it('Sch-7 Schedule an Appointment from the resources view (+ Edit Time)', ()=>
    {
        // cy.login()
        Element.dayselector()
            .contains('Resources')
            .click()

        Element.burger()
            .click(720, 250)

        cy.intercept('GET', 'https://stg-admin.fertilitypro.com/api/v1/tasks/number_of_open_tasks', 
        {
            statusCode: 200
        })

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.modaloverlay()
                        .should('be.visible')
                    )
        })

        Element.patient()
            .type('Riley, Kim')

        Element.inputsearch()
            .find('[data-test="text-field"]')
            .then(($a) =>
            {
                expect($a)
                    .to.have
                    .value('Riley, Kim')
            })

        Element.slect()
            .should('contain', 'Riley, Kim')
        
        Element.slect()
            .click()

        Element.selectplace()
            .first()
            .click()

        Element.content()
            .contains('BLD - AMH')
            .click()

        Element.trigdown()
            .first()
            .should('have.length', '1')

        Element.trigdown()
            .should('have.length', '4')

        Element.create()
            .should('contain', 'CREATE')
            .click()

        Element.dismiss()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.rsctable()
                        .find('.mf-schedule-resources-table-cell-event')
                        .should('be.visible')
                    )
        })

        Element.burger()
            .click(793, 243)          // Bottom line to click on card
        
        Element.index()
            .click()

        Element.input()
            .type('8:00 AM')
            .type('{enter}')

        Element.index()
            .should('contain', '8:00 AM')

        Element.save()
            .should('contain', 'Save')
            .click()

        cy.get('.close-calendar')
            .click()
            
        new Cypress.Promise((resolve,reject) =>
        {
            resolve(Element.dismiss())
        })
    })
})