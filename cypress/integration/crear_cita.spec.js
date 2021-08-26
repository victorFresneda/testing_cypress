/// <reference types="cypress" />

describe('Validar el formulario', () => {
    it('Sumit al formulario y mostrar alerta de error', () => {
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');

                cy.get('[data-cy="mascota-input"]')
                     .type('Duncan');



                cy.get('[data-cy="propietario-input"]')
                .type('victor');


                cy.get('[data-cy="telefono-input"]')
                     .type('7713700');


                cy.get('[data-cy="fecha-input"]')
                .type('2020-08-24');


                cy.get('[data-cy="hora-input"]')
                     .type('09:56');


                cy.get('[data-cy="sintomas-textarea"]')
                .type('Corre mucho');


                cy.get('[data-cy="submit-cita"]')
                     .click();

                cy.get('[data-cy="citas-heading"]')
                     .invoke('text')
                     .should('equal', 'Administra tus Citas');     



    })
})