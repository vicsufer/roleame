/// <reference types="cypress" />

context('Characters component', () => {
    it('it should not allow unauthenticated accesses', () => {
        cy.visit('/characters');
        cy.url().should('be', Cypress.config().baseUrl)
    });

    it('it should allow authenticated acceses', () => {
        cy.login(Cypress.config().username, Cypress.config().password)
        cy.visit('/characters');
        cy.url().should('include', 'characters')
    });

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
        cy.get('mat-card-title').should('have.text', 'Personaje de prueba');
    });

    it('it should show user characters', () => {
        cy.login(Cypress.config().username, Cypress.config().password)
        cy.visit('/characters');
        
        cy.get('mat-card-title').should('have.text', 'Personaje de prueba');
    });

    it('it should allow to edit a character', () => {
        cy.login(Cypress.config().username, Cypress.config().password)
        cy.visit('/characters');

        cy.get('mat-card:nth-child(1) :nth-child(2) > .mat-button-wrapper > .mat-icon').click()
        cy.get('roleame-webapp-edit-character > div > form > div:nth-child(1) > mat-card > mat-card-header').should('have.text', 'Información Básica')
        cy.get(`mat-card:nth-child(1) [formcontrolname="name"]`).clear().type('Personaje editado')
        cy.get('roleame-webapp-edit-character > div > form > div.mt-4 > button').click()

        cy.visit('/characters');
        cy.get('mat-card-title').should('have.text', 'Personaje editado');
        cy.get('mat-card-title').should('not.have.text', 'Personaje de prueba');
    });

    it('it should allow to create a new character with an img from URL', () => {
        cy.login(Cypress.config().username, Cypress.config().password)
        cy.visit('/characters');

        cy.get('#mat-tab-label-0-1').click()
        cy.get('#cdk-step-label-0-0 > .mat-step-label > .mat-step-text-label').should('have.text', 'Información Básica')

        // Fill Basic info form
        cy.get(`[formcontrolname="name"]`).type("Personaje de prueba con imagen")
        cy.get(`[formcontrolname="class"]`).type("Cypress")
        cy.get(`[formcontrolname="background"]`).type("Personaje de prueba creado mediante cypress")
        cy.get('#cdk-step-label-0-1').click()

        cy.get(`[formcontrolname="wisdom"]`).type("9")
        cy.get(`[formcontrolname="agility"]`).type("10")
        cy.get(`[formcontrolname="strength"]`).type("20")
        cy.get(`[formcontrolname="fellowship"]`).type("8")
        cy.get(`[formcontrolname="hitPoints"]`).type("17")
        cy.get('#cdk-step-label-0-2').click()

        cy.get('#cdk-step-label-0-3').click()
        cy.get('#mat-radio-2 > .mat-radio-label').click()
        cy.get('#mat-input-8').type("https://i.pinimg.com/736x/bb/40/61/bb4061d4001e06358a578515cfa2fd69.jpg")

        cy.get('#cdk-step-label-0-4').click()
        cy.get('#cdk-step-content-0-4 > .mat-vertical-content > .mat-button').click()

        // Check that the user is listed at user characters
        cy.get('mat-card:nth-child(2) mat-card-title').should('have.text', 'Personaje de prueba con imagen');
    });

    it('it should allow to delete a character', () => {
        cy.login(Cypress.config().username, Cypress.config().password)
        cy.visit('/characters');
        cy.get('mat-card:nth-child(1) :nth-child(3) > .mat-button-wrapper > .mat-icon').click()
        cy.get('mat-card:nth-child(2) :nth-child(3) > .mat-button-wrapper > .mat-icon').click()
        cy.get('mat-card-title').should('not.have.text', 'Personaje editado');
        cy.get('mat-card-title').should('not.have.text', 'Personaje de prueba con imagen');
    });
});