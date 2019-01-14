/*siempre comienza con USE STRICT*/
'use strict'

import { watchFile } from "fs";

/*DESCRIBE pone un nombre a la prueba*/
describe('test open',() =>{
    /*IT definimos el test */
    it ('must load the example page cypress',() => {
        cy.visit('/login')
        })
    
    it ('registrar usuario',() =>{
        cy.visit('/login')
        cy.contains('Register').click()
        cy.get('.inputs [type="radio"]').check('F', { force: true }).should('be.checked')
        cy.get('#FirstName').type('rocio')
        cy.get('#LastName').type('cypress')
        cy.get('#Email').type('rocio@cypress.com')
        cy.get('#Password').type('Tosca123')
        cy.get('#ConfirmPassword').type('Tosca123')
        cy.get('#register-button').click()
        cy.wait(3000)

        /* CLASE 9 ASSERTIONS */
        /*NOT.EXIST para verificar que el mensaje "The specified email already exists" no existe, es decir,
        que se esta registrando un nuevo usuario
        cy.get('.validation-summary-errors > ul > li').should('not.exist')*/
        
        /*BE.VISIBLE para verificar que el mensaje "The specified email already exists" es visible, es decir,
        que el email ya esta registrado */
        cy.get('.validation-summary-errors > ul > li').should('be.visible')
        
    })
})
