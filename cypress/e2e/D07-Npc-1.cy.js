import Login from "../POM/Login"


const LoginPage = new Login()
const Element = LoginPage.elements
const credentials = require('../fixtures/Valid')


describe('Npc-1 Add a patient and partner from the + Button', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.Login()
    })

    it('Npc-1 Add a patient and partner from the + Button', () => {

        // Element.VerifyUrl()
        //     .should('eq', 'https://stg-clinic-novo.fertilitypro.com/appointments')

        cy.get('[data-test="mf-toolbar-button"]')
            .contains('Day')
            .click()


        Element.Appointmentbtn()
            .click()

        Element.Scheduleappointment()
            .contains('Add New Patient')
            .click()

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

        Element.Datepicker()
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

        Element.Input()
            .first()
            .type('Skype')

        Element.Input()
            .first()
            .next()
            .type('21211')


        Element.Createbtn()
            .click()

        cy.contains('ADD PARTNER/SPOUSE').click()

        Element.PatientFirstname()
            .type('Spa')
            .invoke('val')
            .should('match', /Spa/)

        Element.Patientlastname()
            .type('Freedy')
            .invoke('val')
            .should('match', /Freedy/)

        cy.get('[data-test="mf-role-selector-item"]')
            .first()
            .click()

        Element.Datepicker()
            .click()
            .type('04/02/1997')

        Element.SelectSex()
            .click()

        Element.DropdownSelect()
            .first()
            .click()

        function newrandomemail() {
            var email = "freedy.qa+"
            var text = "";
            var possible = "qwertyuioplkjhgfdazxcvbnm1234567890";
            for (var i = 0; i < 4; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            var value = email + text.concat('@gmail.com')
            return value;
        }

        Element.Newpatientemail()
            .type(newrandomemail())


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
            .type('104444444444444')
            .invoke('val')
            .should('match', /104444444444444/)


        Element.Savebtn()
            .click()

        Element.Patientaddress()
            .type('101 street canada')
            .invoke('val')
            .should('match', /101 street canada/)

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
            .type('Freedyy')
            .invoke('val')
            .should('match', /Freedyy/)

        Element.Insurancelastname()
            .type('Tesst')
            .invoke('val')
            .should('match', /Tesst/)

        Element.Datepicker()
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
            .type('04/01/2022')

        Element.Insurancecompanyaddress()
            .type('101 street')
            .invoke('val')
            .should('match', /101 street/)

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

        Element.Input()
            .first()
            .type('Skype')

        Element.Input()
            .first()
            .next()
            .type('21211')


        Element.Createbtn()
            .click()

        cy.wait(2000)

        Element.Patientsucessmessage()
            .contains('Patient was successfully created')

        Element.Finishbtn()
            .click()


        cy.wait(2000)

    })

})