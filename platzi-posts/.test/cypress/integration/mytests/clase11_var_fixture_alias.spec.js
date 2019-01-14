'use strict'

describe('test open',() =>{
/* CYPRESS en su mayoria es ASINCRONO por lo tanto la definicion de variables no es de la misma manera que en javascript
vamos a usar el folder FIXTURES.
La idea de tener fixtures es tener información reutilizable en el aplicativo.

*/

    beforeEach(()=>{
        /* cargamos el archivo FIXTURE */
        /*esto carga la información del fixture pero no quiere decir que este en una variable */
        /* para eso lo tenemos que poner en alias por medio del comando AS */
        cy.fixture('user.json').as('userData')
        /* userData ahora seria el nombre de la variable */
        cy.visit('/login')
        cy.contains('h1', 'Welcome, Please Sign In!').should('be.visible')
    })

    after(()=> {
        cy.log('Test finalizados')
    });

    
    it.skip ('registrar usuario nuevo',() =>{
        cy.get('@userData').then((userData) => { 
            cy.contains('Register').click()
            cy.get('.inputs [type="radio"]').check('F', { force: true }).should('be.checked')
            cy.get('#FirstName').type(userData.firstName)
            cy.get('#LastName').type(userData.lastName)
            cy.get('#Email').type(userData.email)
            cy.get('#Password').type(userData.password)
            cy.get('#ConfirmPassword').type(userData.confirmPassword)
            cy.get('#register-button').click()
            cy.wait(3000)
            cy.get('.validation-summary-errors > ul > li').should('not.exist')
        })    
    })

    it.skip ('registrar usuario repetido con SKIP',() =>{
        /*en cada test donde necesite los datos del fixture lo debo declarar asi 
         ahora ya no sería asincrono */
        cy.get('@userData').then((userData) => { 
            /*ahora si, userData se comporta como una variable interna como sucede en javascript */
            cy.contains('Register').click()
            cy.get('.inputs [type="radio"]').check('F', { force: true }).should('be.checked')
            cy.get('#FirstName').type(userData.firstName)
            cy.get('#LastName').type(userData.lastName)
            cy.get('#Email').type(userData.email)
            cy.get('#Password').type(userData.password)
            cy.get('#ConfirmPassword').type(userData.confirmPassword)
            cy.get('#register-button').click()
            cy.wait(3000)
            cy.get('.validation-summary-errors > ul > li').should('be.visible')
        })
    })

    it.skip('registrar usuario repetido',() =>{
        cy.get('@userData').then((userData) => { 
            /*ahora si, userData se comporta como una variable interna como sucede en javascript */
            cy.contains('Register').click()
            cy.get('.inputs [type="radio"]').check('F', { force: true }).should('be.checked')
            cy.get('#FirstName').type(userData.firstName)
            cy.get('#LastName').type(userData.lastName)
            cy.get('#Email').type(userData.email)
            cy.get('#Password').type(userData.password)
            cy.get('#ConfirmPassword').type(userData.confirmPassword)
            cy.get('#register-button').click()
            cy.wait(3000)
            cy.get('.validation-summary-errors > ul > li').should('be.visible')
        })
    })  
    
    
    it('login',() =>{
        cy.get('@userData').then((userData) => { 
            cy.get('#Email').type(userData.email)
            cy.get('#Password').type(userData.password)
            cy.get('form > .buttons > .button-1').click()
            cy.wait(5000)
            cy.get('.header-links > ul > :nth-child(1) > .account').contains(userData.email)
      
        })
    })
})