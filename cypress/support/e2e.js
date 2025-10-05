import './commands'


Cypress.Commands.add('eliminarInterrupciones', () => {
    // 1. Aceptar Cookies (ajusta el selector)
    cy.get('button#onetrust-accept-btn-handler', { timeout: 10000 })
      .should('be.visible')
      .click();

    // 2. Cerrar cualquier modal de bienvenida o descuento (ajusta el selector)
    cy.get('.modal-close-button').click({ force: true });
});