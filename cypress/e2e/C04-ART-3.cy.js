import appointment from "../POM/appointmet"
const appoint = new appointment()
const Element = appoint.schedule

describe('Art-3 Adding information to a stim sheet' , ()=>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.Login()
    })

    it('Art-3 Adding information to a stim sheet', ()=>
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
            resolve(Element.protocolcycle()
                        .should('be.visible')
                    )
        })

        cy.get('[data-test="mf-status-color-dropdown"]').first().click()

        cy.get('[data-test="basic-dropdown-content-element"]').contains('In Cycle').click()

        Element.wait()

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

        // Appointment
        const dayjs = require('dayjs')
        const today = dayjs().format('MM/DD/YYYY') 
        cy.get('[data-cy="stimsheet_add_item_button"]')
            .first()
            .click()

        cy.get('[data-test="appointmenttype"]')
            .click()
        cy.get('[data-test="power-select-options"]')
            .contains('BLD - Estradiol')
            .click()

        cy.get('[data-test="mf-art-protocol-mf-stimsheet-appointments-new-collection"]')
            .find('.ember-power-select-selected-item')
            .should('have.length', 2)

        cy.get('[data-test="billing-locations"]')
            .click()

        cy.get('[data-test="power-select-options"]')
            .contains('PAOLI')
            .click()

        cy.get('[data-test="mf-art-protocol-mf-stimsheet-appointments-new-collection"]')
            .find('.ember-power-select-selected-item')
            .should('have.length', 3)

        cy.get('[class="resource mf-event__metadata"]')
            .click()

        cy.get('[class="mf-dropdown-multiple__list"]')
            .contains('BD - Paoli')
            .click()

        cy.get('[class="date mf-event__metadata"]')
            .contains('Day')
            .click()

        cy.get('[data-test="power-select-options"]')
            .contains(today)
            .click()

        cy.get('[class="hours mf-event__metadata"]')
            .click()
        cy.get('[data-test="power-select-options"]')
            .contains('7:15 AM')
            .click()

        cy.get('[data-test="mf-art-protocol-mf-stimsheet-appointments-new-collection"]')
            .find('.ember-power-select-selected-item')
            .should('have.length', 5)
        
        new Cypress.Promise((resolve,reject) =>
        {
            resolve(cy.get('[data-test="mf-loading-button"]').should('exist'))
        })

        cy.get('[data-test="mf-loading-button"]')
            .should('contain','Create')
            .click()

        Element.wait()

        // hormones
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-hormones"]')
            .find('[class="lt-cell align-left today ember-view"]')
            .first()
            .should('exist')
            .click()

        cy.get('[class="row mf-basic-modal__container"]')
            .find('[data-test="text-field"]')
            .first()
            .type('111')

        cy.get('[class="row mf-basic-modal__container"]')
            .find('[data-test="text-field"]')
            .first()
            .then($a =>
                {
                    expect($a)
                        .to.have
                        .value('111')
                })

        
        cy.get('[class="row mf-basic-modal__container"]')
            .find('[data-test="text-field"]')
            .last()
            .type('222')

        cy.get('[class="row mf-basic-modal__container"]')
            .find('[data-test="text-field"]')
            .last()
            .then($a =>
                {
                    expect($a)
                        .to.have
                        .value('222')
                })
        
        new Cypress.Promise((resolve,reject) =>
        {
            resolve(cy.get('[class="mf-modal mf-basic-modal"]'))
        })
        cy.get('[class="mf-modal mf-basic-modal"]')
            .find('[data-test="mf-loading-button"]')
            .should('contain', 'UPDATE')
            .click()

        Element.wait()

        //medication

        cy.get(' [data-cy="stimsheet_add_item_button"]')
            .contains('ADD MEDICATION')
            .click()

        cy.get('[data-test="mf-dropdown"]')
            .eq(0)
            .click()

        cy.get('[data-test="power-select-options"]')
            .find('[data-option-index="7"]')
            .click()

        // Element.selected()
        //     .should('have.length' , 1)

        cy.get('[class="mf-modal mf-basic-modal"]')
            .find('[data-test="mf-input"]')
            .type('25')

        cy.get('[class="mf-modal mf-basic-modal"]')
            .find('[data-test="mf-input"]')
            .find('input')
            .then($a =>
                {
                    expect($a)
                        .to.have
                        .value('25')
                })

        cy.get('[data-test="mf-dropdown"]')
        .find('[tabindex="3"]')
            .click()

        cy.get('[data-test="power-select-options"]')
            .find('[data-option-index="40"]')
            .click()

        cy.get('[data-test="mf-art-protocol-mf-stimsheet-medications-new-collection-row"]')
            .find('[tabindex="4"]')
            .click()

        cy.get('[data-test="power-select-options"]')
            .find('[data-option-index="2.0"]')
            .click()

        cy.get('[data-test="mf-art-protocol-mf-stimsheet-medications-new-collection-row"]')
            .find('[tabindex="5"]')
            .click()

        cy.get('[data-test="power-select-options"]')
            .find('[data-option-index="192"]')
            .click()

        cy.get('[data-test="mf-art-protocol-mf-stimsheet-medications-new-collection-row"]')
            .find('[tabindex="6"]')
            .click()

        cy.get('[data-test="power-select-options"]')
            .find('[data-option-index="0"]')
            .click()

        cy.get('[data-test="mf-art-protocol-mf-stimsheet-medications-new-collection-row"]')
            .find('[tabindex="7"]')
            .click()

        cy.get('[data-test="power-select-options"]')
            .find('[data-option-index="30"]')
            .click()

        cy.get('[data-test="mf-art-protocol-mf-stimsheet-medications-new-collection-row"]')
            .find('[tabindex="8"]')
            .click()

        cy.get('[data-test="power-select-options"]')
            .find('[data-option-index="47"]')
            .click()

        new Cypress.Promise((resolve,reject) =>
        {
            resolve(cy.get('[data-test="mf-loading-button"]'))
        })


        cy.get('[data-test="mf-loading-button"]')
            .contains('UPDATE')
            .click()

        Element.wait()

        //Ultrasound
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-ultrasounds"]')
            .find('.today')
            .first()
            .click()

        cy.get('[data-cy="stimsheet_left_ovary_input"]')
            .find('.small-input')
            .type('1')

        cy.get('[data-cy="stimsheet_left_ovary_input"]')
            .find('[data-test="mf-input"]')
            .last()
            .type('2')

        cy.get('[data-cy="stimsheet_right_ovary_input"]')
            .find('[data-test="mf-input"]')
            .first()
            .type('3')

        cy.get('[data-cy="stimsheet_right_ovary_input"]')
            .find('[data-test="mf-input"]')
            .last()
            .type('4')

        cy.get('[data-cy="stimsheet_endo_thickness_input"]')
            .type('5')

        cy.get('[data-cy="stimsheet_endometrium_pattern_dropdown"]')
            .click()

        cy.get('[data-test="power-select-options"]')
            .find('[data-option-index="1"]')
            .click()

        cy.get('[data-cy="stimsheet_ultrasound_observation_input"]')
            .type('test')

        cy.fixture('test.jpg', {encoding:null})
            .as('fixed')

        cy.get('input[type=file]')
            .selectFile('@fixed',{force:true})
        
        new Cypress.Promise((resolve,reject) =>
        {
            resolve(cy.get('[data-test="mf-loading-button"]'))
        })

        cy.get('[data-test="mf-loading-button"]')
            .contains('UPDATE')
            .click()

        Element.wait()

        // Notes
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-daily-notes"]')
            .find('[class="lt-cell align-left mf-protocol-daily-notes-table-cell-container today ember-view"]')
            .click()

        cy.get('[data-test="mf-loading-button"]')
            .then(($body)=>
            {
                if($body.text().includes('CREATE'))
                {
                    cy.get('[class="mf-modal mf-basic-modal"]')
                        .find('[data-test="text-area"]')
                        .type('test')
                    
                    new Cypress.Promise((resolve,reject) =>
                    {
                        resolve(cy.get('[data-test="mf-loading-button"]'))
                    })

                    cy.get('[data-test="mf-loading-button"]')
                        .contains('CREATE')
                        .click()
                }

                else
                {
                    cy.get('[class="mf-modal mf-basic-modal"]')
                        .find('[data-test="text-area"]')
                        .clear()
                        .type('test')

                    new Cypress.Promise((resolve,reject) =>
                    {
                        resolve(cy.get('[data-test="mf-loading-button"]'))
                    })

                    cy.get('[data-test="mf-loading-button"]')
                        .contains('UPDATE')
                        .click()
                }
            })

        Element.wait()

        //bottom form
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-treatment-pregnancy-outcome"]')
            .find('[class="btn btn-primary"]')
            .click()

        cy.get('[data-test="mf-dropdown-model"]')
            .contains('Select a treatment outcome')
            .click()

        cy.get('[data-test="power-select-options"]')
            .contains('Biochemical')
            .click()

        cy.get('[class="treatment-outcome"]')
            .find('[data-test="bootstrap-datepicker"]')
            .first()
            .click()

        cy.get('[class="datepicker-days"]')
            .find('[class="today day"]')
            .click()

        cy.get('.test-result-action')
            .first()
            .find('[data-test="mf-icon"]')
            .click()

        cy.get('[class="mf-modal mf-basic-modal"]')
            .find('[data-test="bootstrap-datepicker"]')
            .click()

        cy.get('[class="datepicker-days"]')
            .find('[class="today day"]')
            .click()

        cy.get('[placeholder="Bhcg value"]')
            .type('12')

        cy.get('[data-test="mf-loading-button"]')
            .contains('Create')
            .click()


        cy.get(':nth-child(1) > .treatment-outcome > :nth-child(5) > .test-result-action > .btn').click() 



        cy.get('[class="mf-modal mf-basic-modal"]')
            .find('[data-test="mf-datepicker"]')
            .click()

        cy.get('[class="datepicker-days"]')
            .find('[class="today day"]')
            .click()

        cy.get('[placeholder="Fetal hearts"]')
            .type('1')

        cy.get('[placeholder="Gestational Sac"]')
            .type('2')

        cy.get('[data-test="mf-loading-button"]')
            .contains('Create')
            .click()

        cy.get('[class="treatment-outcome"]')
            .find('[data-test="basic-dropdown-trigger"]')
            .contains('Select a pregnancy outcome')
            .click()

        cy.get('[data-test="power-select-options"]')
            .contains('Live Birth')
            .click()

        cy.get('[class="treatment-outcome"]')
            .find('[data-test="basic-dropdown-trigger"]')
            .contains('Select an outcome info source')
            .click()

        cy.get('[data-test="power-select-options"]')
            .contains('Patient (written)')
            .click()

        cy.get('[class="treatment-outcome"]')
            .find('[data-test="mf-datepicker"]')
            .last()
            .click()

        cy.get('[class="datepicker-days"]')
            .find('[class="today day"]')
            .click()

        cy.get('[class="treatment-outcome"]')
            .find('[data-test="basic-dropdown-trigger"]')
            .contains('Select a delivery method')
            .click()

        cy.get('[data-test="power-select-options"]'
            ).contains('Vaginal')
            .click()


        cy.get(':nth-child(2) > .treatment-outcome > :nth-child(5) > .test-result-action > .btn')       
            .click()

        cy.get('.mf-basic-modal__container>.row >:nth-child(1)>[data-test="mf-boolean-input"]>.block>.positive>[data-test="radio-button-input"]')  
            .click()

        cy.get('[class="ember-power-select-placeholder"]')
            .contains('Select a gender')
            .click()

        cy.get('[class="ember-power-select-options ember-view"]')
            .find('[data-option-index="0"]')
            .click()

        cy.get('[placeholder="Birth weight"]')
            .type('2.2')

        cy.get('[class="ember-power-select-placeholder"]')
            .contains('Select a unit')
            .click()

        cy.get('[class="ember-power-select-options ember-view"]')
            .find('[data-option-index="2"]')
            .click()

        cy.get(':nth-child(5) > [data-test="mf-boolean-input"] > .block > .positive > [data-test="radio-button-input"]')        
            .click()

        cy.get('[class="mf-dropdown-multiple__placeholder--empty"]')
            .contains('Select birth defects')
            .click()

        cy.get('[class="mf-dropdown-multiple__options visible"]')
            .find('[data-option-index="5"]')
            .click()

        cy.get('[class="mf-dropdown-multiple__placeholder"]')
            .contains('None')
            .click()

        cy.get('[data-test="mf-loading-button"]')
            .contains('Create')
            .click()


        cy.get('.btn.btn-primary')
            .contains('Save')
            .click()

        Element.wait()

        //Notes
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-notes"]')
            // .find('[data-cy="stimsheet_accordion_panel_element_title"]')
            .click()

        cy.get('[data-test="mf-art-protocol-mf-stimsheet-notes"]')
            .find('[data-cy="stimsheet_add_item_button"]')
            .click()

        cy.get('[data-test="template-selector"]')
            .click()

        cy.get('[data-test="power-select-options"]')
            .find('[data-option-index="2"]')
            .click()

        cy.get('[data-test="mf-confirmation-modal"]')
            .find('[data-test="mf-loading-button"]').contains('Replace Text').click()

        Element.wait()

        //StickyNotes
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-sticky-notes"]')
            .find('[data-cy="stimsheet_add_item_button"]')
            .click()

        cy.get('[class="mf-modal mf-basic-modal"]')
            .find('[placeholder="Add a title"]')
            .type('Titled Testing')

        cy.get('[class="mf-modal mf-basic-modal"]')
            .find('[placeholder="Write a note"]')
            .type('Notes Added for Testing')

        cy.get('[data-test="mf-loading-button"]')
            .contains('Create')
            .click()

        Element.wait()
    })
})