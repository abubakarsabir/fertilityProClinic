import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('LSF-Lab Results Search and Filter' , ()=>
{
    beforeEach(() => {

        cy.visit('/')
        cy.Login()
    })
    it('LSF-Lab Results Search and Filter', ()=>
    {
        // cy.login()
        
        Element.hamburger()
            .click()

        Element.labresults()
            .should('contain','Lab Results Overview')
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.title()
                        .should('contain', 'Lab Results Overview')
                    )
        })

        Element.dropdownmodel()
            .find('[data-test="basic-dropdown-trigger"]')
            .then(($body)=>
            {
                if($body.find('.ember-power-select-clear-btn').length > 1)
                {
                    Element.save()
                        .should('contain','SEARCH')
                        .click()

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(cy.get('[data-test="mf-lab-results-batch-actions"]')
                                    .should('be.visible')
                                )
                    })
                        
                }

                else
                {
                    Element.deletebtn()
                        .first()
                        .click()

                    cy.get(2000)
                    
                    Element.selectplace()
                        .click()

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(Element.content().
                                    find('[role="listbox"]')
                                    .should('be.visible')
                                )
                    })

                    Element.search()                        
                        .type('Blood Draw Location')
                        .type('{enter}')

                    Element.selected()
                        .should('have.length', '1')

                    Element.wait()

                    Element.selectplace()
                        .click()

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(Element.content()
                                    .find('[role="listbox"]')
                                    .should('be.visible')
                                )
                    })

                    Element.search()                        
                        .type('DIX')
                        .type('{enter}')

                    Element.selected()
                        .should('have.length', '2')

                    Element.save()
                        .should('contain','SEARCH')
                        .click()

                    Element.wait()

                    // new Cypress.Promise((resolve, reject) =>
                    // {
                    //     resolve(Element.laboverview()
                    //                 .should('be.visible')
                    //             )
                    // })

                    Element.multipleactions()
                        .find('[class = "mf-icon__add mf-icon icon-icn_plus ember-view"]')
                        .click()

                    Element.wait()

                    Element.selectplace()
                        .click()

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(Element.content()
                                    .find('[role="listbox"]')
                                    .should('be.visible')
                                )
                    })

                    Element.search()
                        .type('Date of collection')
                        .type('{enter}')

                    Element.selected()
                        .should('have.length', '3')

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(Element.dateboot()
                                    .first()
                                    .should('be.visible')
                                )
                    })

                    Element.dateboot()
                        .first()
                        .click()

                    Element.datepicker()
                        .click()

                    Element.wait()

                    Element.save()
                        .should('contain','SEARCH')
                        .click()

                    Element.wait()

                    // new Cypress.Promise((resolve, reject) =>
                    // {
                    //     resolve(Element.laboverview()
                    //                 .should('be.visible')
                    //             )
                    // })

                    Element.multipleactions()
                        .find('[class = "mf-icon__add mf-icon icon-icn_plus ember-view"]')
                        .click()

                    Element.wait1()

                    Element.selectplace()
                        .click()

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(Element.content()
                                    .find('[role="listbox"]')
                                    .should('be.visible')
                                )
                    })

                    Element.search()                        
                        .type('Name')
                        .type('{enter}')

                    Element.selected()
                        .should('have.length', '4')

                    Element.wait()

                    Element.textfield()
                        .last()
                        .type('riley')

                    Element.searchholder()
                        .last()
                        .then(($a)=>
                        {
                            expect($a)
                                .to.have
                                .value('riley')
                        })

                    Element.save()
                        .should('contain','SEARCH')
                        .click()

                    Element.wait()
                    // new Cypress.Promise((resolve, reject) =>
                    // {
                    //     resolve(Element.laboverview()
                    //                 .should('be.visible')
                    //             )
                    // })

                    Element.deletebtn()
                        .eq(0)
                        .click()

                    Element.wait1()

                    Element.save()
                        .should('contain','SEARCH')
                        .click()

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(cy.get('[data-test="mf-lab-results-batch-actions"]')
                                    .should('be.visible')
                                )
                    })

                }

            })

            Element.wait1()

    })

})