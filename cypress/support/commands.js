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
Cypress.Commands.add("login", (username, password) => { 
    cy.visit('/auth');

    // We are at login page
    cy.url().should('include', '/auth')

    // Fill login form
    cy.get('#mat-input-0').type(username).should('have.value', username)
    cy.get('#mat-input-1').type(password)

    // Login
    cy.get('form.ng-dirty > .justify-content-center > .col-md-10 > .mat-card > .buttons > .mat-raised-button').click();
    cy.url().should('eq', Cypress.config().baseUrl);
})

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
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
