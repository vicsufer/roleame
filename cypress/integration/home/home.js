/// <reference types="cypress" />

it('should visit home', () => {
    cy.visit('http://localhost:4200');
    cy.get('h1').should('have.text', 'Roléame');
});

it('it should change language', () => {
    cy.visit('http://localhost:4200');

    // Change to English
    cy.get('.mat-select-arrow-wrapper').click()
    cy.get('#mat-option-0 > .mat-option-text').click()
    cy.get('h1').should('have.text', 'Roll me');

    cy.get('.mat-select-arrow-wrapper').click()
    cy.get('#mat-option-1 > .mat-option-text').click()
    cy.get('h1').should('have.text', 'Roléame');
});