/// <reference types="cypress" />

// it('it should not allow unauthenticated accesses', () => {
//     cy.visit('/characters');
//     cy.url().should('be', Cypress.config().baseUrl)
// });

// it('it should allow authenticated acceses', () => {
//     cy.login(Cypress.config().username, Cypress.config().password)
//     cy.visit('/characters');
//     cy.url().should('include', 'characters')
// });

// it('it should show user characters', () => {
//     cy.login(Cypress.config().username, Cypress.config().password)
//     cy.visit('/characters');
    
//     cy.get('.mat-card-title').should('have.text', 'Test character');
// });

it('it should allow to create a new character', () => {
    cy.login(Cypress.config().username, Cypress.config().password)
    cy.visit('/characters');

    cy.get('#mat-tab-label-0-1').click()
    cy.get('#cdk-step-label-0-0 > .mat-step-label > .mat-step-text-label').should('have.text', 'Información Básica')

    // Fill Basic info form
    cy.get(`[formcontrolname="name"]`).type("Personaje de prueba")
    cy.get(`[formcontrolname="class"]`).type("Cypress")
    cy.get(`[formcontrolname="background"]`).type("Personaje de prueba creado mediante cypress")
    cy.get('#cdk-step-label-0-1').click()

    cy.get(`[formcontrolname="wisdom"]`).type("9")
    cy.get(`[formcontrolname="agility"]`).type("10")
    cy.get(`[formcontrolname="strength"]`).type("20")
    cy.get(`[formcontrolname="fellowship"]`).type("8")
    cy.get(`[formcontrolname="hitPoints"]`).type("17")
    cy.get('#cdk-step-label-0-2').click()

    cy.get('#cdk-step-content-0-2 > .mat-vertical-content > .mat-button').click()
    cy.get('#mat-input-8').type("Hab 1")
    cy.get('#mat-input-9').type("Esta es una habilidad de prueba")

    cy.get('#cdk-step-label-0-3').click()
    cy.get('#mat-radio-4 > .mat-radio-label').click()

    cy.get('#cdk-step-label-0-4').click()
    cy.get('#cdk-step-content-0-4 > .mat-vertical-content > .mat-button').click()

    // Check that the user is listed at user characters
    cy.get('mat-card:nth-child(2) mat-card-title').should('have.text', 'Personaje de prueba');

});

// it('it should allow to edit a character', () => {
//     cy.login(Cypress.config().username, Cypress.config().password)
//     cy.visit('/characters');

//     cy.get('mat-card:nth-child(2) :nth-child(3) > .mat-button-wrapper > .mat-icon').click()

//     cy.get('mat-card-title').should('not.have.text', 'Personaje de prueba');

// });

it('it should allow to delete a character', () => {
    cy.login(Cypress.config().username, Cypress.config().password)
    cy.visit('/characters');

    cy.get('mat-card:nth-child(2) :nth-child(3) > .mat-button-wrapper > .mat-icon').click()

    cy.get('mat-card-title').should('not.have.text', 'Personaje de prueba');

});

