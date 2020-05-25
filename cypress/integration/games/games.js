context('Games component', () => {

    it('it should not allow unauthenticated accesses', () => {
        cy.visit('/games');
        cy.url().should('be', Cypress.config().baseUrl)
    });

    it('it should allow authenticated acceses', () => {
        cy.login(Cypress.config().username, Cypress.config().password)
        cy.visit('/games');
        cy.url().should('include', 'games')
    });

    it('it should allow to create a game inviting a player', () => {
        cy.login(Cypress.config().username, Cypress.config().password)
        cy.visit('/games');

        cy.get('#mat-tab-label-0-1').click()
        cy.get('#cdk-step-label-0-0 > .mat-step-label > .mat-step-text-label').should('have.text', 'Información básica')

        cy.get('#mat-input-0').type("Partida de prueba")
        cy.get('#mat-input-1').type("Este es un juego de prueba creado por Cypress")

        cy.get('#cdk-step-label-0-1').click()
        cy.get('#cdk-step-content-0-1 > .mat-vertical-content > .mat-button').click()
        cy.wait(500)
        cy.get('[formcontrolname="username"]').type("pruebas")
        cy.get('#cdk-step-label-0-2 > .mat-step-label > .mat-step-text-label').click()
        cy.wait(5000)
        cy.get('#cdk-step-label-0-2 > .mat-step-label > .mat-step-text-label').click()
        cy.wait(100)
        cy.get('#cdk-step-content-0-2 > .mat-vertical-content > .mat-button').click()

        cy.get('.mat-card-title').should('have.text','Partida de prueba')
    });

    it('it should show user games', () => {
        cy.login(Cypress.config().username, Cypress.config().password)
        cy.visit('/games');
        cy.get('.mat-card-title').should('have.text','Partida de prueba')
    });


    it('it should allow to edit a game', () => {
        cy.login(Cypress.config().username, Cypress.config().password)
        cy.visit('/games');
        cy.get('.mt-4 > :nth-child(3)').click()

        cy.get('#mat-tab-content-0-2 > div > roleame-webapp-edit-game > div > form > div.mt-4 > button > span').should('have.text', 'Aplicar cambios')
        cy.get(`mat-card:nth-child(1) [formcontrolname="name"]`).clear().type('Partida editada')

        cy.get('#mat-tab-content-0-2 > div > roleame-webapp-edit-game > div > form > div.mt-4 > button').click()
        cy.visit('/games');
        cy.get('mat-card-title').should('have.text', 'Partida editada');
        cy.get('mat-card-title').should('not.have.text', 'Partida de prueba');
    });

    it('it should allow to start a game', () => {
        cy.login(Cypress.config().username, Cypress.config().password)
        cy.visit('/games');
        cy.get('.mt-4 > :nth-child(2)').click()
        cy.url().should('include', '/tabletop')
    });

    it('it should allow to delete a game', () => {
        cy.login(Cypress.config().username, Cypress.config().password)
        cy.visit('/games');
        cy.get('.mt-4 > :nth-child(4)').click()
        
        cy.get('.mat-card-title').should('not.have.text','Juego de prueba')
    });

});