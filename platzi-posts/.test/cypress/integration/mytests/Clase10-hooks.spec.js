/*siempre comienza con USE STRICT*/
'use strict'

describe('test open',() =>{

/* los hooks son funciones que se ejecutan en algún momento de un test
por ejemplo para los 2 siguientes test siempre se hace el VISIT('/login'), para eso puedo 
declarar un BEFOREACH*/

    /* runs before each test in this block*/
    beforeEach(()=>{
        cy.visit('/login')
        /* aca agrego una assersion*/
        cy.contains('h1', 'Welcome, Please Sign In!').should('be.visible')
    })

    after(()=> {
        /*runs AFTER all tests in this block
         cy.log permite imprimir un mensaje en la consola de cypress*/
        cy.log('Test finalizados')
    });
    
    it ('registrar usuario nuevo',() =>{
        /* aca va a correr el BEFORAECH */
        cy.contains('Register').click()
        cy.get('.inputs [type="radio"]').check('F', { force: true }).should('be.checked')
        cy.get('#FirstName').type('rocio')
        cy.get('#LastName').type('cypress')
        cy.get('#Email').type('rocioi@cypress.com')
        cy.get('#Password').type('Tosca123')
        cy.get('#ConfirmPassword').type('Tosca123')
        cy.get('#register-button').click()
        cy.wait(3000)
        cy.get('.validation-summary-errors > ul > li').should('not.exist')
    })

    it.skip ('registrar usuario repetido con SKIP',() =>{
        /* aca va a correr el BEFORAECH */
        cy.contains('Register').click()
        cy.get('.inputs [type="radio"]').check('F', { force: true }).should('be.checked')
        cy.get('#FirstName').type('rocio')
        cy.get('#LastName').type('cypress')
        cy.get('#Email').type('rocio@cypress.com')
        cy.get('#Password').type('Tosca123')
        cy.get('#ConfirmPassword').type('Tosca123')
        cy.get('#register-button').click()
        cy.wait(3000)
        cy.get('.validation-summary-errors > ul > li').should('be.visible')
    })

    it ('registrar usuario repetido',() =>{
        /* aca va a correr el BEFORAECH */
        cy.contains('Register').click()
        cy.get('.inputs [type="radio"]').check('F', { force: true }).should('be.checked')
        cy.get('#FirstName').type('rocio')
        cy.get('#LastName').type('cypress')
        cy.get('#Email').type('rocio@cypress.com')
        cy.get('#Password').type('Tosca123')
        cy.get('#ConfirmPassword').type('Tosca123')
        cy.get('#register-button').click()
        cy.wait(3000)
        cy.get('.validation-summary-errors > ul > li').should('be.visible')
    })

})
