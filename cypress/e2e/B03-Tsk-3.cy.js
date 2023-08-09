import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('TSK-3 Create a task to all professionals related to a patient', () => 
{
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('TSK-3 Create a task to all professionals related to a patient', () => 
    {
        
        // cy.login()

        Element.dayselector()
            .contains('Day')
            .click()
        
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
            resolve(Element.title()
                        .should('contain', 'ART Protocols')
                        .should('be.visible')
                    )
        })


        Element.sideopen()
            .first()
            .click()

        Element.accordianmenu()
            .contains('Tasks')
            .click()

        Element.sideclose()
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.tasktitle()
                        .first()
                        .should('contain', 'Open Tasks')
                        .should('be.visible')
                    )
        })

        Element.sideopen()
            .last()
            .click()

        Element.professionaltab()
            .click()

        Element.professionals()
            .then($a =>
            {

                if($a.length > 1)

                {

                        Element.professionals().should('have.length.at.least', 2)
                    
                }

                else

                {
                        Element.addprofessional()
                            .click()

                        Element.firstobj()
                            .click()

                        Element.professionals()
                            .should('have.length.at.least', 1)

                        Element.addprofessional()
                            .click()

                        Element.firstobj()
                            .click()

                        Element.professionals()
                            .should('have.length.at.least', 2)

                }
            
            })

        Element.sideclose()
            .click()


        Element.newtaskbtn()
            .should('contain', 'ADD NEW TASK')
            .click()


        Element.taskdate()
            .click()


        Element.tasktoday()
            .click()


        Element.taskplaceholder()
            .contains('Select task category')
            .click()


        Element.firstobj()
           .click()
        

        Element.modalselected()
            .should('have.length', 1)


        Element.taskplaceholder()
            .contains('Select task priority')
            .click()


        Element.firstobj()
            .click()


        Element.modalselected()
            .should('have.length', 2)


        Element.taskdetails()
           .type('Task test')
        

        Element.taskdetails()
            .then($a =>
            {
                expect($a)
                    .to.have
                    .value('Task test')
            })


        Element.notes()
            .type('Notes test')
        

        Element.notes()
            .then($a =>
            {
                expect($a)
                    .to.have
                    .value('Notes test')
            })


        Element.placeholderteam()
            .click()


        Element.associated()
            .click()

        Element.deleteable().should('have.length.at.least', 2)


        Element.save()
            .should('contain', 'CREATE')
            .click()


        cy.get('.task-list-container > :nth-child(1) > .col-xs-12')
            .find('[data-test="mf-tasks-column-assigned-to"] > [data-test="mf-multiple-avatar"]')
            .last()
            .find('[data-test="mf-tooltip"]')
            .should('have.length.at.least', 2)
        })
    })
        