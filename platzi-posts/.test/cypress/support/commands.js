// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// CLASE 13 CREAR UN COMANDO PERSONALIZADO PARA EL LOGIN
Cypress.Commands.add('createUser', (userData) => {
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


Cypress.Commands.add('loginUser', (username, password) => {
    cy.get('#Email').type(username)
    cy.get('#Password').type(password)
    cy.get('form > .buttons > .button-1').click()
})
