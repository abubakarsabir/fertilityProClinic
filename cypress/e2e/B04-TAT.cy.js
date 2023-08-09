import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('TAT- Display Tasks assigned to teams' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('TAT- Display Tasks assigned to teams', ()=>
    {
        // cy.login()
        Element.dropdown()
            .first()
            .click()

        Element.dropdowncontent()
            .contains('Create New Task')
            .click()

        Element.patient()
            .type('Riley, Kim')

        Element.patient()
            .then(($a)=>
            {
                expect($a)
                    .to.have
                    .value('Riley, Kim')
            })

        Element.slect()
            .should('contain','Riley, Kim')

        Element.slect()
            .click({force: true})

        Element.date()
            .click()

        Element.future()
            .first()
            .click()

        Element.dropdownmodel()
            .first()
            .click()

        Element.option()
            .eq(4)
            .click()

        Element.selected()
            .should('have.length', '1')

        Element.dropdownmodel()
            .last()
            .click()

        Element.option()
            .eq(1)
            .click()

        Element.selected()
            .should('have.length', '2')

        Element.taskdetails()
            .type('Testing')

        Element.taskdetails()
            .then(($a)=>
            {
                expect($a)
                    .to.have
                    .value('Testing')
            })

        Element.notes()
            .type('This is for testing purpose')

        Element.placeholderteam()
            .click()

        Element.filteruse()
            .eq(3)
            .click()

        Element.create()
            .should('contain','CREATE')
            .click()

        Element.hamburger()
            .click()

        Element.task()
            .first()
            .should('contain', 'Tasks')
            .click()

        Element.wait()

        Element.resource()
            .find('.mf-dropdown-multiple__options--select-all')
            .then(($body)=>
            {
                if($body.text().includes('De-select All'))
                {
                    Element.dropdownmultiple()
                        .click()

                    Element.resource()
                        .find('.mf-dropdown-multiple__options--select-all')
                        .dblclick()

                    Element.resource()
                        .find('[data-test="mf-dropdown-multiple-item"]')
                        .eq(0)
                        .click()

                    Element.resource()
                        .find('[data-test="mf-dropdown-multiple-item"]')
                        .eq(1)
                        .click()

                    Element.resource()
                        .find('[data-test="mf-dropdown-multiple-item"]')
                        .eq(2)
                        .click()

                    Element.dropdownmultiple()
                        .click()

                }

                else
                {
                    Element.dropdownmultiple()
                        .click()

                    Element.resource()
                        .find('[data-test="mf-dropdown-multiple-item"]')
                        .eq(0).click()

                    Element.resource()
                        .find('[data-test="mf-dropdown-multiple-item"]')
                        .eq(1)
                        .click()

                    Element.resource()
                        .find('[data-test="mf-dropdown-multiple-item"]')
                        .eq(2)
                        .click()

                    Element.dropdownmultiple()
                        .click()

                }
            })
            
        Element.wait()
    })
})