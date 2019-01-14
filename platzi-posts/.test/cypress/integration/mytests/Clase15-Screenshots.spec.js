'use strict'

describe('test open',() =>{
/* CLASE 15
Puedo crear un screenshot de mi aplicativo, en cualquier momento
estas se guardan en la carpeta screenshot 
*/
    beforeEach(()=>{
    /* seteo el VIEWPORT porque sino, me tira error outindex al hacer el screenshot */
        cy.viewport(1200, 1500)
        cy.fixture('user.json').as('userData')
        cy.visit('/login')
        cy.contains('h1', 'Welcome, Please Sign In!').should('be.visible')
    })

    after(()=> {
        cy.log('Test finalizados')
    });

    
    it('registrar usuario nuevo',() =>{
        cy.get('@userData').then((userData) => { 
            cy.createUser(userData)
            /* hago una captura*/
            cy.screenshot('creo-usuario')
        })    
    })

    it('login NOT OK',() =>{
        cy.loginUser('usuarionovalido@test.com', 'incorrecta')
        cy.wait(1000)
        cy.get('.validation-summary-errors > ul > li').contains('No customer account found')
        /* hago una captura*/
        cy.screenshot('login-fallo')
    })
    
    it('login OK',() =>{
        cy.get('@userData').then((userData) => { 
            cy.loginUser(userData.email, userData.password)
            cy.wait(5000)
            cy.get('.header-links > ul > :nth-child(1) > .account').contains(userData.email)
            /* hago una captura*/
            cy.screenshot('login-ok')
        })
    })
})