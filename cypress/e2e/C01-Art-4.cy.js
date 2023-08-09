import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')

describe('Art-4 Creating an ART Protocol template', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('Art-4 Creating an ART Protocol template', () => {
        Element.VerifyUrl()
            .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')

        Element.Hamburgerbutton()
            .click()

        Element.Sidemenu()
            .contains('Protocol Templates')
            .click()

        Element.Newprotocol().contains('ADD NEW TEMPLATE')
            .click()

        Element.Popupheader()
            .should('have.text', '\n          ART Protocol Template Creation\n      ')

        Element.Input()
            .type('IVF')

        cy.get('.mf-new-protocol__container').find('[type="radio"]').first().click()

        cy.get('.col-xs-12.col-sm-6').find('.checkbox').first().click()

        cy.get('.mf-new-protocol__container').find('[type="checkbox"]').then(box => {
            cy.wrap(box)
                .eq(0)
                .check({ force: true })
        })

        cy.get('[data-test="mf-art-protocol-cycle-type-details"]').find('[type="checkbox"]').then(box => {
            cy.wrap(box)
                .eq(0)
                .check({ force: true })
        })

        cy.get('[data-test="mf-art-protocol-cycle-type-details"]').find('[type="checkbox"]').then(box => {
            cy.wrap(box)
                .eq(3)
                .check({ force: true })
        })
        cy.get('[data-test="mf-art-protocol-cycle-type-details"]').find('[type="checkbox"]').then(box => {
            cy.wrap(box)
                .eq(6)
                .check({ force: true })
        })

        cy.get('[data-test="mf-art-protocol-cycle-type-details"]').find('[type="checkbox"]').then(box => {
            cy.wrap(box)
                .eq(9)
                .check({ force: true })
        })

        cy.get('[data-test="mf-art-protocol-cycle-type-details"]').find('[type="checkbox"]').then(box => {
            cy.wrap(box)
                .eq(11)
                .check({ force: true })
        })

        cy.get('[data-test="mf-art-protocol-cycle-type-details"]').find('[type="checkbox"]').then(box => {
            cy.wrap(box)
                .eq(12)
                .check({ force: true })
        })

        Element.Savebtn().click()
        cy.wait(2000)

        cy.contains('ADD APPOINTMENT').click()



        cy.get('[ class="mf-loading ember-view"]').each(($a) => {

            cy.get('.ember-power-select-placeholder').first().click()
            cy.get('[data-test="power-select-options"]').first().click()

        })


        // const dayjs = require('dayjs')
        // const today = dayjs().format('MM/DD/YYYY') 

        cy.get('[data-test="basic-dropdown-trigger"]').eq(2).click()
        
        cy.get('[data-test="power-select-options"]')
            .contains('Day 1')
            .click()

        Element.Resource()
            .click()
            .contains('BD')
            .click()


        Element.Savebtn()
            .click()

        cy.wait(3000)
        cy.contains('ADD HORMONES').click()
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-hormones-add-collection"] > .btn').click()
        cy.get('.ember-power-select-placeholder').click()
        cy.get('[data-test="power-select-options"]').first().click()

        cy.get('[data-test="mf-art-protocol-mf-stimsheet-hormones-add-collection"] > .btn').click()
        cy.get('.ember-power-select-placeholder').click()
        cy.get('[data-test="power-select-options"]').first().click()

        Element.Savebtn().click()
        cy.wait(3000)
        cy.contains('ADD MEDICATION').click()

        cy.get('.ember-power-select-placeholder').each(($el) => {

            cy.get('.ember-power-select-placeholder').first().click()
            cy.get('[data-test="power-select-options"]').first().click()

        })

        cy.get('[data-test="mf-dropdown"]').eq(4).click()
        cy.get('[data-test="power-select-options"]').contains('Day 1').click()

        cy.get('[data-test="mf-dropdown"]').eq(5).click()
        cy.get('[data-test="power-select-options"]').contains('Day 29').click()

        Element.Input().type('140')
        Element.Savebtn().click()

        Element.Hamburgerbutton()
            .click()

        cy.wait(2000)

        Element.Sidemenu()
            .contains('Appointments')
            .click()

        cy.wait(2000)

        //cy.get('.ember-power-select-placeholder').click()

        //cy.get('[data-test="power-select-options"]').contains('Name').click()
       // cy.get('[data-test="text-field"]').type('Riley')

        // Element.Savebtn().click()

        // cy.wait(3000)
        
        
        cy.get('[data-test="mf-appointment-patient-detail-card"]')
            .first()
            .then($a =>
            {
                if($a.find('.automated-warning').hasClass('automated-warning'))
                    {
                        cy.get('[class="patient-name inline"]').first().click()
                        new Cypress.Promise((resolve, reject) =>
                        {
                            resolve(cy.get('.mf-patient-warning-modal').should('be.visible'))
                        })
                        cy.get('[data-test="mf-icon-button"]').click()
                    }
                    else
                    {
                        cy.get('[class="patient-name inline"]').first().click()
                    }
            })

        new Cypress.Promise((resolve, reject) => 
        {
            resolve(cy.get('[data-cy="protocol_cycle_type_container"]').should('be.visible'))
        })

        cy.wait(4000)
        cy.contains('ADD NEW PROTOCOL')
            .click()

        cy.wait(4000)

        cy.get(':nth-child(2) > [data-test="mf-dropdown-model"] > [data-test="basic-dropdown-trigger"]').click()
        
        cy.get('[data-test="power-select-options"]').contains('IVF').click()

        cy.wait(2000)

    })

})