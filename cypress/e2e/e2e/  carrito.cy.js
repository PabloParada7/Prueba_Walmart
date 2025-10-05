describe('Carrito en Lider.cl', () => {

  it('Agrega un producto al carrito (pausando para captcha)', () => {
    cy.visit(Cypress.config('baseUrl') || '/');
    // 1. Visita la página principal
    cy.intercept('https://www.lider.cl/');
  
    // 2.Se refresca la pagina para ver si aparece nuevamente captcha
    cy.window().then(win => win.location.reload());

    // 3. Una vez resuelto, continúa el flujo
    cy.get('input[name="q"]').type('arroz{enter}');

    cy.wait(15000); 
    // espera 15s

    // 4. Espera que aparezcan resultados
    cy.contains('Arroz', { timeout: 20000 }).should('exist');

    // 5. Selecciona el primer producto
    cy.get('[data-testid="product-card"]').first().click();

    // 6. Botón de agregar al carrito
    cy.contains('Agregar', { timeout: 20000 }).click();

    // 7. Verifica que se abrió el carrito
    cy.get('.minicart').should('be.visible');
  });
});

