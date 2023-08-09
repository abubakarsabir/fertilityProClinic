import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('Art-2 Filling out the ART Protocol Header' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('Art-2 Filling out the ART Protocol Header', ()=>
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

        Element.cyclenumber()
            .find('input')
            .first()
            .clear()

        Element.cyclenumber()
            .find('input')
            .first()
            .type(10,{force: true})

        Element.cyclenumber()
            .find('input')
            .then(($a) =>
            {
                expect($a)
                    .to.have
                    .value(10)
            })

        Element.dropdownmodel()
            .first()
            .click()

        Element.option()
            .eq(2)
            .click()

        Element.selected()
            .first()
            .should('have.length', '1')

        Element.protocolreason()
            .find('[data-test="click-outside"]')
            .first()
            .click()

        new Cypress.Promise((resolve, reject)=>
        {
            resolve(Element.rscdropdown()
                        .first()
                        .should('be.visible')
                    )
        })

        Element.rscdropdown()
            .first()
            .then(($a) =>
            {
                if($a.text().includes('Select All'))
                {
                    Element.items()
                        .eq(1)
                        .click()

                    Element.items()
                        .find('[data-test="checkbox"]')
                        .eq(1)
                        .should('be.checked')

                    Element.items()
                        .eq(2)
                        .click()

                    Element.items()
                        .find('[data-test="checkbox"]')
                        .eq(2)
                        .should('be.checked')

                }

                else
                {
                    return 0
                }

            })

        Element.protocolreason()
            .find('[data-test="click-outside"]')
            .first()
            .click()

        Element.infertility()
            .find('[data-test="mf-input"]')
            .first()
            .clear()
            .type(12)

        Element.infertility()
            .find('[data-test="mf-input"]')
            .find('input')
            .then(($a) =>
            {
                expect($a)
                    .to.have
                    .value(12) 
            })

        Element.lmp()
            .find('[data-test="mf-datepicker"]')
            .first()
            .click()

        Element.datepickerClass()
            .find('.datepicker-days')
            .find('.today')
            .prev()
            .click()

        Element.cycleday()
            .find('[data-test="mf-datepicker"]')
            .first()
            .click()

        Element.datepickerClass()
            .find('.datepicker-days')
            .find('.today')
            .first()
            .click({force: true})

        Element.burger()
        .then($a =>
        {
            if($a.find('.modal-overlay').find('.mf-white-button-primary').hasClass('mf-white-button-primary'))
            {
                Element.button()
                    .should('contain', 'Yes')
                    .click()
            }

            else
            {
                return 0
            }

        })

        Element.stimstart()
            .find('[data-test="mf-datepicker"]')
            .first()
            .click()

        Element.datepickerClass()
            .find('.datepicker-days')
            .find('.today')
            .first()
            .click()

        Element.button()
            .should('contain', 'Yes')
            .click()

        Element.Assigndate()
            .find('[data-test="mf-datepicker"]')
            .first()
            .click()

        Element.datepickerClass()
            .find('.datepicker-days')
            .find('.today')
            .first()
            .click()

        Element.toolbar()
            .first()
            .find('[data-test="basic-dropdown-trigger"]')
            .eq(1)
            .click()

        Element.option()
            .eq(5)
            .click()

        Element.toolbar()
            .first()
            .find('[data-test="basic-dropdown-trigger"]')
            .eq(1)
            .should('have.length', '1')

        Element.toolbarBody()
            .first()
            .then($a =>
            {
                if($a.find('[data-test="mf-art-protocol-toolbar-protocol-patient-item"]').hasClass('mf-protocol-toolbar__patient'))
                {
                    return 0
                }

                else
                {
                    Element.addpatient()
                        .find('[data-test="mf-art-protocol-toolbar-add-patient-button"]')
                        .first()
                        .should('contain', 'ADD PATIENT TO PROTOCOL')
                        .click()

                    new Cypress.Promise((resolve, reject)=>
                    {
                        resolve(Element.roleselector()
                                    .should('be.visible')
                                )
                    })

                    Element.dropdownTrigger()
                        .click()

                    new Cypress.Promise((resolve, reject) =>
                    {
                        resolve(Element.content()
                                    .find('.ember-power-select-option')
                                    .should('be.visible')
                                )
                    })

                    Element.content()
                        .find('[data-test="power-select-options"]')
                        .find('.ember-power-select-option')
                        .first()
                        .click()

                    Element.dropdownTrigger()
                        .should('have.length', '1')

                    Element.modal()
                        .find('[data-test="mf-role-selector-item"]')
                        .eq(0)
                        .click()

                    Element.modal()
                        .find('[data-test="mf-role-selector-item"]')
                        .eq(0)
                        .should(
                            'have.class','selected')

                    Element.modal()
                        .find('[data-test="mf-role-selector-item"]')
                        .eq(2)
                        .click()

                    Element.modal()
                        .find('[data-test="mf-role-selector-item"]')
                        .eq(2)
                        .should('have.class','selected')

                    Element.modal()
                        .find('[data-test="mf-role-selector-item"]')
                        .eq(4)
                        .click()

                    Element.modal()
                        .find('[data-test="mf-role-selector-item"]')
                        .eq(4)
                        .should('have.class','selected')

                    Element.btn()
                        .should('contain', 'SAVE')
                        .click()

                }

            })

        new Cypress.Promise((resolve, reject)=>
        {
            resolve(Element.footer()
                        .should('be.visible')
                    )
        })

        Element.footer()
            .find('.btn-primary')
            .first()
            .should('contain', 'GO TO STIM SHEET')
            .click()

        new Cypress.Promise((resolve, reject) =>
        {
            resolve(Element.stim()
                        .should('be.visible')
                    )
        })


        Element.wait1()
    })
    
})