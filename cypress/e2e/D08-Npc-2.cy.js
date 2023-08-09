import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')


describe('Npc- 2 Add a new Partner/Spouse in the Right Panel of existing patients chart', () => {
    beforeEach(() => {
       
        cy.visit('/') 
        cy.Login()
    })

    it('Npc- 2 Add a new Partner/Spouse in the Right Panel of existing patients chart', () => {

        
        cy.get('[data-test="mf-toolbar-button"]')
            .contains('Day')
            .click()

        
        //  Element.Patienttab()
        //     .click()

        // cy.wait(2000)
       
        
    //    cy.get('[data-test="mf-loading-button"]').click()

        // cy.get('.dashboard-container > :nth-child(2) > :nth-child(1)').contains('Riley, Kim').click()
        cy.contains('Riley, Kim').click()

       Element.Sidebarbtn().last().click()

        // cy.get(':nth-child(1) > .btn').click()

        cy.contains('ADD PATIENT').click()
        cy.wait(2000)

        cy.contains('ADD NEW PATIENT').click()

        Element.PatientFirstname()
        .type('Testing')
        .invoke('val')
        .should('match', /Testing/)

    Element.Patientlastname()
        .type('Freed')
        .invoke('val')
        .should('match', /Freed/)

    Element.Datepicker()
        .click()
        .type('04/03/1997')

    Element.SelectSex()
        .click()

    Element.DropdownSelect()
        .first()
        .click()

    function randomemail() {
        var email = "testing.qa+"
        var text = "";
        var possible = "qwertyuioplkjhgfdazxcvbnm1234567890";
        for (var i = 0; i < 4; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        var value = email + text.concat('@gmail.com')
        return value;
    }

    Element.Newpatientemail()
        .type(randomemail())


    Element.Patienttypeclick()
        .click()

    Element.Dropdownlist()
        .contains('Future Patient')
        .click()

    Element.Patientphone()
        .click()

    Element.DropdownSelect()
        .contains('Mobile')
        .click()

    Element.Phonenum()
        .type('04444444444444')
        .invoke('val')
        .should('match', /04444444444444/)


    Element.Savebtn()
        .click()

    Element.Patientaddress()
        .type('10 street canada')
        .invoke('val')
        .should('match', /10 street canada/)

    Element.Patientcity()
        .type('Toronoto')
        .invoke('val')
        .should('match', /Toronoto/)

    Element.Patientcountryclick()
        .click()

    Element.EditDropdownSelect()
        .contains('Canada')
        .click()

    Element.Addresstype()
        .click()

    Element.AppointmenttypeDropdown()
        .contains('Home')
        .click()


    Element.Zip()
        .type('0343')
        .invoke('val')
        .should('match', /0343/)

    Element.Savebtn()
        .click()

    Element.Savebtn()
        .click()

    Element.Insuranceclick()
        .click()

    Element.EditDropdownSelect()
        .contains('Primary')
        .click()

    Element.Insurancefirstname()
        .type('Freed')
        .invoke('val')
        .should('match', /Freed/)

    Element.Insurancelastname()
        .type('Test')
        .invoke('val')
        .should('match', /Test/)

        cy.wait(2000)

    cy.get('.cf-field > [data-test="mf-datepicker"] > [data-test="bootstrap-datepicker"]')
        .first()
        .click()
        .type('04/03/1997')

    Element.Insurancecompany()
        .type('Atena')
        .invoke('val')
        .should('match', /Atena/)

    Element.Insurancegroupnumber()
        .type('123432')
        .invoke('val')
        .should('match', /123432/)

    Element.Insurancepolicynumber()
        .type('121212')
        .invoke('val')
        .should('match', /121212/)

    Element.Datepicker()
        .last()
        .click()
        .type('04/04/2022')

    Element.Insurancecompanyaddress()
        .type('10 street')
        .invoke('val')
        .should('match', /10 street/)

    Element.Insurancestate()
        .type('Tornoto')
        .invoke('val')
        .should('match', /Tornoto/)

    Element.Insurancecity()
        .type('Finksburg')
        .invoke('val')
        .should('match', /Finksburg/)

    Element.Insurancezip()
        .type('2321')
        .invoke('val')
        .should('match', /2321/)

    Element.Insurancecompanyphone()
        .type('02121212122')
        .invoke('val')
        .should('match', /02121/)

    Element.Savebtn()
        .click()

    cy.wait(4000)

   /* Element.Input()
        .first()
        .click({force:true})
        .type('Skype')

    Element.Input()
        .first()
        .next()
        .type('21211')*/


    Element.Createbtn()
        .click()

    // cy.get('[data-test="mf-role-selector-item"]')
    //     .first()
    //     .click()

        Element.Savebtn().click()

        cy.wait(3000)

        Element.Sidebarbtn().last().click()

        cy.wait(2000)

    })

})