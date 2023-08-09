import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('PtS-1 Using patient search filters ' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('PtS-1 Using patient search filters ', ()=>
    {
        
        Element.activity().should('contain', 'Patients').click()
        Element.dropdownmodel()
            .find('[data-test="basic-dropdown-trigger"]')
            .then(($body)=>
            {
                if($body.find('.ember-power-select-clear-btn').length  > 1)
                {
                    Element.save()
                        .should('contain','SEARCH')
                        .click()
                }
                else
                {
                    Element.deletebtn()
                        .first()
                        .click()

                    Element.wait()

                    Element.dropdownmodel()
                        .first()
                        .click()

                    Element.dropdownmodel()
                        .should('be.visible')
                        
                    Element.search()
                        .type('Patient type')
                        .type('{enter}')


                    cy.get('[data-test="mf-dropdown"] > [data-test="basic-dropdown-trigger"]')
                        .click()

                    Element.option()
                        // .should('be.visible')
                        // .should('have.length','25')
                        .first()
                        .click()

                    Element.wait1()

                    Element.selected()
                        .should('have.length','2')


                    Element.multipleactions()
                        .should('exist')

                    Element.save()
                        .should('contain','SEARCH')
                        .click()

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(cy.get('.mf-single-day-schedule-row')
                                    .should('be.visible')
                                )
                    })


                    Element.multipleactions()
                        .find('[class = "mf-icon__add mf-icon icon-icn_plus ember-view"]')
                        .click()

                    Element.wait1()
                    

                    Element.dropdownmodel()
                        .last()
                        .click()

                    Element.dropdownmodel()
                        .should('be.visible')

                    Element.search()
                        .type('Name')
                        .type('{enter}')

                    Element.wait1()


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

                    Element.selected()
                        .should('have.length','3')


                    Element.multipleactions().should('exist')

                    Element.save()
                        .should('contain','SEARCH')
                        .click()

                    Element.deletebtn()
                        .first()
                        .click()

                    Element.wait1()

                    Element.save()
                        .should('contain','SEARCH')
                        .click()
                }

            })

            Element.wait1()

    })

})