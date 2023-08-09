import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('Sch-8 Schedule an Appointment from the resources view (+ Edit Date)' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })
    
    it('Sch-8 Schedule an Appointment from the resources view (+ Edit Date)', ()=>
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

        cy.get('.mf-filter-select-input')
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

        Element.wait()

        Element.burger()
            .click(793, 243)

        Element.testdate()
            .click()

        Element.datepickerClass()
            .find('.datepicker-days')
            .find('.active')
            .next()
            .click()

        Element.save()
            .should('contain', 'Save')
            .click()

        Element.closecalendar()
            .click()

        Element.calendar()
            .click()

        Element.future()
            .next()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.rsctable()
                        .find('.mf-schedule-resources-table-cell-event')
                        .should('be.visible')
                    )
        })

        Element.burger()
            .click(793, 243)

        Element.wait()
    })
})