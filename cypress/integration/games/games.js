it('it should not allow unauthenticated accesses', () => {
    cy.visit('/games');
    cy.url().should('be', Cypress.config().baseUrl)
});

it('it should allow authenticated acceses', () => {
    cy.login(Cypress.config().username, Cypress.config().password)
    cy.visit('/games');
    cy.url().should('include', 'games')
});
