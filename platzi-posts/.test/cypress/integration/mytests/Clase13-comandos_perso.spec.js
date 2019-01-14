'use strict'

describe('test open',() =>{
/* CLASE 13 - Comandos personalizados
Vamos a usar comandos personalizados ya que en el test "login OK" y "login not ok" hay codigo que se repite.
Para eso vamos a la carpeta SUPPORT/commands.js
En la misma plantilla nos trae ejemplos de como crear estos comandos personalizados
*/

    beforeEach(()=>{
        cy.fixture('user.json').as('userData')
        cy.visit('/login')
        cy.contains('h1', 'Welcome, Please Sign In!').should('be.visible')
    })

    after(()=> {
        cy.log('Test finalizados')
    });

    
    it('registrar usuario nuevo',() =>{
        cy.get('@userData').then((userData) => { 
            /* aca uso el comando personalizado que cree CREATEUSER */
            cy.createUser(userData)
        })    
    })

    it('login NOT OK',() =>{
         /* aca uso el comando personalizado que cree LOGINUSER */
        cy.loginUser('usuarionovalido@test.com', 'incorrecta')
        cy.wait(1000)
        cy.get('.validation-summary-errors > ul > li').contains('No customer account found')
    })
    
    
    it('login OK',() =>{
        cy.get('@userData').then((userData) => { 
            /* aca uso el comando personalizado que cree LOGINUSER */
            cy.loginUser(userData.email, userData.password)
            cy.wait(5000)
            cy.get('.header-links > ul > :nth-child(1) > .account').contains(userData.email)
        })
    })
})