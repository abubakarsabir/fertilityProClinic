class Login {

    elements = 
    {
        Headingtext: () => 
            cy.get('h2'),      //Login page Heading text
        
        EmailPlaceholder:() => 
            cy.get('[data-test="mf-email"] > [data-test="mf-form-group-label"]'), //Email placeholder name
        
        PasswordPlaceholder:()=>  
            cy.get('[data-test="mf-password"] > [data-test="mf-form-group-label"]'), //Password placeholder name
        
        loginbtn:() =>   
            cy.get('[data-test="mf-loading-submit"]'), //Login button
        
        Rememberme:()=>
            cy.get('#chk1'), //Checkbox of Remember me on login screen
        
        Passwordvisible:()=>
            cy.get('#ember709'), // Password visble eye
        
        Errormessage:()=>
            cy.get('[data-test="mf-toast-message"]'), // Error message when credientals are wrong
        
        Emailerrormessage:()=>
            cy.get('[data-test="mf-email"] > .control-label'), //Error message when Email is not entered 
        
        Passworderrormessage: ()=>
            cy.get('[data-test="mf-password"] > .control-label'),  // Error message when Password is not entered
        
        Redirectbtn:()=>
            cy.get('[data-test="link-to"]'), // Forgot password button
        
        Appointmentbtn:()=>
        cy.get('[data-test="mf-action-menu"]').first(), //Plus button on landing page
        
        Scheduleappointment:()=>
            cy.get('.mf-action-menu__list-item '), 
        
        Popuptext:()=>
            cy.get('.mf-basic-modal__header > span'),
        
        Searchbar:()=>
            cy.get('[data-test="text-field"]').last(),

        TaskSearchpatient:()=>
        cy.get('[placeholder="Search patient"]'),
        
        Selectitem:()=>
            cy.get('[data-test="mf-filter-user-item"]'),
        
        Patientinfo:()=>
            cy.get('.mf-new-appointment__patients > :nth-child(1)'),
        
        Appointmenttype:()=>
            cy.get('[data-test="appointmenttype"]'),
        
        Inputtype:()=>
            cy.get('.ember-power-select-search-input'),

        Patientinfo:()=>
        cy.get('.mf-new-appointment__patients--container'),

        Selecteduser:()=>
        cy.get('.mf-filter-select-users-list').find('label'),
        
        AppointmenttypeDropdown:()=>
            cy.get('[data-test="power-select-options"]'),
        
        Location:()=>
            cy.get('[data-test="billing-locations"]'),
        
        Locationoptions:()=>
            cy.get('.ember-power-select-option'),

        Taskcompleted:()=>
        cy.get('.mf-basic-modal__container > :nth-child(4) > :nth-child(1) > [data-test="mf-dropdown-model"]'),
        
        Resource:()=>
            cy.get('.resource > [data-test="mf-dropdown-multiple"]'),
        
        ResourceLocation:()=>
            cy.get('#ember1835 > .group-items>.mf-dropdown-multiple__options-item'),
        
        ResoucrProfessional:()=>
            cy.get('#ember1664 > .group-items>.mf-dropdown-multiple__options-item'),
        
        Datepicker:()=>
            cy.get('[data-test="mf-datepicker"]'),

        Eventresource:()=>
        cy.get('[data-test="mf-dropdown-multiple"]').last(),

        Selectplaceholder:()=>
            cy.get('.ember-power-select-placeholder'),

        Dropdownvalues:()=>
            cy.get(' [data-test="power-select-options"] > [data-option-index]'),
        
        TodayDate:()=>
            cy.get('.today'),
        
        Time:()=>
            cy.get('.hours'),
        
        DropdownSelect:()=>
            cy.get('.ember-power-select-option'),
        
        AppointmentCreatebtn:()=>
            cy.get('#test-save'),
        
        Nextdaybtn:()=>
            cy.get('#ember1121'),
        
        Headerdropdowns:()=>
        cy.get('.mf-dropdown-multiple__head'),

        Headerdropdownsoptions:()=>
        cy.get('.mf-dropdown-multiple__options'),

        Headerselectall:()=>
        cy.get('.mf-dropdown-multiple__options--select-all'),
        
        Edittimeclick:()=>
            cy.get('[data-test="hours-dropdown"]'),
        
        EditDropdownSelect:()=>
            cy.get('[data-test="power-select-options"]'),

        Appointmentheaders:()=>
            cy.get('[class="col-xs-12 no-padding mf-single-day-schedule-container"]'),

        Appointmentcalendar:()=>
            cy.get('.mf-single-day-schedule-calendar-container'),
        
        Editdatepicker:()=>
            cy.get('[data-test="date-picker"]'),
        
        Savebtn:()=>
            cy.get('[data-test="mf-loading-button"]'),
        
        Paitentsearch:()=>
            cy.contains('76466'),

        Patientname:()=>
            cy.contains('Riley, Kim'),
        
        Email:()=>
            cy.get('#ember705'),
        
        Password:()=>
            cy.get('#ember706'),
        
        Userinfo:()=>
            cy.get('[data-test="mf-professional-navbar-card"]') ,//Login header contains name etc
        
        PatientElement:()=>
            cy.get('.breadcrumb > :nth-child(2)') ,
        
        VerifyUrl:()=>
            cy.url(),

        Patienteditpop:()=>
            cy.get('.mf-event-edit-data-header'),

        MainDatepicker:()=>
            cy.get('.mf-schedule-datepicker__container'),

        Closesidebar:()=>
        cy.get('[data-test="mf-icon"][class="close-calendar mf-icon icon-icn_arrows-dropdown-right ember-view"]'),

        Closeleftbtn:()=>
        cy.get('[class="mf-side-menu-icon-open mf-icon icon-icn_arrows-dropdown-right ember-view"]') ,

        Mainpage:()=>
            cy.get('.wrap-calendar__calendar'),

        Selecteditem:()=>
            cy.get('.ember-power-select-selected-item'),

        Settime:()=>
            cy.contains('Set Time'),

        Dotbtn:()=>
            cy.get('[data-test="mf-action-menu"]'),

        Header:()=>
            cy.get('.breadcrumb'),

        Mainheader:()=>
            cy.get('.fc-toolbar'),

        Paoliresource:()=>
            cy.get('#ember1968'),

        Eventinput:()=>
        cy.get('[class="form-control  ember-text-field ember-view"]'),

        Dropdownclick:()=>
            cy.get('[data-test="basic-dropdown-trigger"]'),
        
        Input:()=>
            cy.get('[data-test="mf-input"]'),

        Textarea:()=>
            cy.get('[data-test="text-area"]'),

        Sidebarlist:()=>
            cy.get('[data-test="mf-accordion-menu-menu-item"]'),

        Addnewtask:()=>
            cy.get('.add-new-task > [data-test="mf-icon"]'),

        TodoCategory:()=>
             cy.get(':nth-child(1) > [data-test="mf-dropdown-model"]'),

        Todopriority:()=>
            cy.get(':nth-child(2) > [data-test="mf-dropdown-model"]'),

        Todotext:()=>
            cy.get('.simditor-body'),

        Inputcheck:()=>
            cy.get('[data-test="mf-input"] > [data-test="text-field"]'),
        
        Taskselect:()=>
            cy.get('[placeholder="Select professionals or teams"]'),

        Todopatientname:()=>
            cy.get('[data-test="completeName"]'),

        Hamburgerbutton:()=>
            cy.get('[class="mf-icon icon-icn_navbar_hamburguer ember-view"]'),

        Hamburgerlist:()=>
            cy.get('[class="list-group-item ember-view"]'),

        Newtodo:()=>
            cy.contains('Add New Patient To Do'),

        PatientFirstname:()=>
            cy.get(':nth-child(1) > :nth-child(3) > [data-test="mf-input"] > [data-test="text-field"]'),

        Patientlastname:()=>
            cy.get(':nth-child(1) > :nth-child(4) > [data-test="mf-input"] > [data-test="text-field"]'),

        SelectSex:()=>
            cy.get(':nth-child(2) > [data-test="mf-dropdown"] > [data-test="basic-dropdown-trigger"]'),

        Newpatientemail:()=>
            cy.get('.col-md-4 > [data-test="mf-input"] > [data-test="text-field"]'),

        Patienttypeclick:()=>
            cy.get(':nth-child(2) > [data-test="mf-dropdown-multiple"]'),

        Dropdownlist:()=>
            cy.get('[data-test="mf-dropdown-multiple-item"]'),

        Patientphone:()=>
            cy.get('.phone-type > [data-test="mf-dropdown"]'),

        Sidemenu:()=>
            cy.get('.ember-burger-menu__main-panel'),

        Phonenum:()=>
            cy.get('[data-test="mf-phone-collection-phone"] > .row > :nth-child(2) > [data-test="mf-input"] > [data-test="text-field"]'),

        Patientaddress:()=>
            cy.get(':nth-child(1) > .col-xs-12 > [data-test="mf-input"] > [data-test="text-field"]'),
        
        Patientcity:()=>
            cy.get(':nth-child(3) > :nth-child(1) > [data-test="mf-input"] > [data-test="text-field"]'),

        Patientcountryclick:()=>
            cy.get(':nth-child(3) > [data-test="mf-dropdown"]'),

        Addresstype:()=>
        cy.get(':nth-child(4) > :nth-child(1) > [data-test="mf-dropdown"]'),

        Zip:()=>
            cy.get(':nth-child(4) > :nth-child(2) > [data-test="mf-input"] > [data-test="text-field"]'),

        Insuranceclick:()=>
        cy.get('.row > :nth-child(1) > [data-test="mf-dropdown"]'),

        Insurancefirstname:()=>
            cy.get(':nth-child(2) > .cf-field > [data-test="mf-input"] > [data-test="text-field"]'),

        Insurancelastname:()=>
            cy.get(':nth-child(3) > .cf-field > [data-test="mf-input"] > [data-test="text-field"]'),

        Insurancecompany:()=>
            cy.get(':nth-child(5) > .cf-field > [data-test="mf-input"] > [data-test="text-field"]'),

        Insurancegroupnumber:()=>
            cy.get(':nth-child(6) > .cf-field > [data-test="mf-input"] > [data-test="text-field"]'),

        Insurancepolicynumber:()=>
            cy.get(':nth-child(7) > .cf-field > [data-test="mf-input"] > [data-test="text-field"]'),

        Insurancecompanyaddress:()=>
            cy.get(':nth-child(9) > .cf-field > [data-test="mf-input"] > [data-test="text-field"]'),

        Insurancestate:()=>
            cy.get(':nth-child(10) > .cf-field > [data-test="mf-input"] > [data-test="text-field"]'),

        Insurancecity:()=>
            cy.get(':nth-child(11) > .cf-field > [data-test="mf-input"] > [data-test="text-field"]'),

        Insurancezip:()=>
            cy.get(':nth-child(12) > .cf-field > [data-test="mf-input"] > [data-test="text-field"]'),

        Insurancecompanyphone:()=>
            cy.get(':nth-child(13) > .cf-field > [data-test="mf-input"] > [data-test="text-field"]'),

        Createbtn:()=>
            cy.get('[data-test="btn-next"]'),

        Relation:()=>
            cy.get('.mf-role-selector'),

        Patientsucessmessage:()=>
            cy.get('.mf-new-patient__success--message'),

        Finishbtn:()=>
            cy.get('.btn-default'),

        Patienttab:()=>
            cy.get('[data-test="breadcrumb-todays-activities"]'),

        Sidebarbtn:()=>
            cy.get('[class="mf-side-menu-icon-close mf-icon icon-icn_arrows-dropdown-right ember-view"]'),

        Toclosesidebarbtn:()=>
            cy.get('[class="mf-side-menu-icon-open mf-icon icon-icn_arrows-dropdown-right ember-view"]'),

        Vitalsheight:()=>
            cy.get('[class="mf-input form-group ember-view"]').find('[placeholder="Height"]'),

        Vitalsweight:()=>
            cy.get('[class="mf-input form-group ember-view"]').find('[placeholder="Weight"]'),

        VitalsTemperature:()=>
            cy.get('[class="mf-input form-group ember-view"]').find('[placeholder="Temperature"]'),

        VitalsBloodpressure:()=>
            cy.get('[class="mf-input form-group ember-view"]').find('[placeholder="Blood Pressure"]'),

        Vitalspulse:()=>
            cy.get('[class="mf-input form-group ember-view"]').find('[placeholder="Pulse"]'),

        Vitalsoxygen:()=>
            cy.get('[class="mf-input form-group ember-view"]').find('[placeholder="Oxygen"]'),

        VitalsRespiration:()=>
            cy.get('[class="mf-input form-group ember-view"]').find('[placeholder="Respiration"]'),

        VitalsAbdominalGirth:()=>
            cy.get('[class="mf-input form-group ember-view"]').find('[placeholder="Abdominal Girth"]'),

        Vitalsnotes:()=>
            cy.get('[class="mf-input mf-textarea form-group ember-view"]').find('[placeholder="Notes"]'),

        vitalsdelete:()=>
            cy.get('[data-test="mf-overview-vitals-data-table-column-actions"]').first().click('right'),

        vitalsedit:()=>
            cy.get('[data-test="mf-overview-vitals-data-table-column-actions"]').first().click('left'),

        Patientfirstwarning:()=>
            cy.get('[class="mf-icon icon-icn_atention ember-view"]').first(),

        Patientsecondwarning:()=>
            cy.get('[class="mf-icon icon-icn_atention ember-view"]').last(),

        Warningconfirmbtn:()=>
            cy.get('[class="btn mf-white-button-primary"]'),

        Popupclose:()=>
            cy.get('[data-test="mf-icon-button"] > [data-test="mf-icon"]'),

        EncounterConfirm:()=>
            cy.get('.text-left > [data-test="mf-loading-button"]'),

        Encounterclosebtn:()=>
            cy.get('.encounters-button-close'),

        Encountertile:()=>
            cy.get('[class="mf-accordion-panel-heading"]'),

        AddEncouter:()=>
            cy.get('[class="btn btn-primary"]'),

        Encountertiles:()=>
            cy.get('[data-test="print-this"]'),

        cyclename:()=>
            cy.get('[class="cycle-number mf-input form-group ember-view"]'),

        Newprotocol:()=>
            cy.get('.btn'),

        Popupheader:()=>
            cy.get('.mf-basic-modal__header'),

        Editprotocol:()=>
            cy.get('.no-wrap > [data-test="mf-icon"]'),

        Pregancyhistorytab:()=>
            cy.get('.mf-pregnancy-history-dropdown-head'),

        Pregancyhistoryinput:()=>
        cy.get('.mf-pregnancy-history-dropdown-options > ul ').find('[data-test="mf-input"] > [data-test="text-field"]'),

        Pregancyoptions:()=>
            cy.get('.mf-pregnancy-history-dropdown-options'),

        Infertilitydropdown:()=>
            cy.get('.mf-infertility-diagnose-dropdown-head'),

        Infertilitydropdownlist:()=>
            cy.get('.mf-infertility-diagnose-dropdown-options > ul > [data-option-index]'),

        Patientsidebarheader:()=>
            cy.get('[class="nav nav-tabs"]'),

        Professionalsearch:()=>
            cy.get('[data-test="mf-professional-search"] > [data-test="basic-dropdown-trigger"]'),

        Removebtn:()=>
            cy.get('[data-test="mf-confirmation-button"] > .btn > [data-test="mf-icon"]'),

        Professionalsselect:()=>
            cy.get('[data-test="mf-patient-professional-relationship"]'),

        Title:()=>
            cy.get('.mf-main-title'),

        Labresultexpand:()=>
            cy.get('.mf-accordion-panel-heading-title'),
        
        Labresultoverview:()=>
            cy.get('[data-test="mf-overview-lab-results-item"]'),

        Clinicalselect:()=>
            cy.get('.mf-accordion-panel-heading').find('[data-test="basic-dropdown-trigger"]')



    }
    
 /*  Email(value) {

        const field = cy.get('#ember705')
        field.type(value)
        return this
    }
    Password(value) {
        const field = cy.get('#ember706')
        field.type(value)
        return this
    }*/
  
}
export default Login


