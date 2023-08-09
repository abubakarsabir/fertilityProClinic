import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('ACE- Appointments w/o CPT codes do not create encounters' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('ACE- Appointments w/o CPT codes do not create encounters', ()=>
    {
        // cy.login()
        Element.dayselector()
            .contains('Day')
            .click()

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

        Element.type()
            .should('contain', 'Select an appointment type')
            .click()

        Element.search()
            .type('Baby Stopping By no code')
            .type('{enter}')

        Element.selected()
            .should('have.length', '2')

        Element.loc()
            .should('contain' , 'Select a location')
            .click()

        Element.input()
            .type('E')
            .type('{enter}')

        Element.selected()
            .should('have.length', '3')

        Element.rsc()
            .should('contain', 'Select an option')
            .click()

        Element.rsc()
            .find('[type="checkbox"]')
            .then(box =>
            {
                cy.wrap(box)
                    .eq(-3)
                    .check({force: true})
            })

        Element.rsc()
            .find('[class="ember-checkbox ember-view"]')
            .should('be.checked')

        Element.date()
            .click()

        Element.future()
            .next()
            .click()

        cy.get('.hours > [data-test="mf-dropdown"] > [data-test="basic-dropdown-trigger"]')
            .should('contain','Time')
            .click()

        Element.input()
            .type('5:45 PM')
            .type('{enter}')

        Element.selected()
            .should('have.length', '4')

        Element.create()
            .should('contain', 'CREATE')
            .click()

        Element.wait()

        Element.calendar()
            .click()

        Element.future()
            .next()
            .click()

        Element.wait()

        Element.dayselector()
            .contains('Encounters')
            .click()

        Element.wait()

        Element.rschead()
            .each(($body)=>
            {
                Element.rschead()
                    .click({multiple:true})

                Element.rscdropdown()
                    .find('.mf-dropdown-multiple__options--select-all')
                    .then(($body)=>
                    {
                        if ($body.text().includes('Select All'))
                        {
                            Element.selectall()
                                .contains('Select All')
                                .click({force: true})
                        }

                        else
                        {
                            Element.clickoutside()
                                .last()
                                .click()
                        }

                    })

            })
            
        Element.wait()
    })
})