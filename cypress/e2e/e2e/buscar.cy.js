describe('Prueba Walmart - Buscar producto', () => {
   
  it('Busca un producto en Lider', () => {
    cy.intercept('/');
    cy.wait(20000); // espera 15s

    // Buscar alimento "Arroz"
    cy.get('input[name="q"]').type('arroz{enter}');
     cy.wait(15000); // espera 15s
    // Espera resultados
    cy.contains('Arroz', { timeout: 10000 }).should('exist')
     cy.wait(20000); // espera 15s
  })

  afterEach(() => {
  cy.wait(1000); // espera 3 segundos después de cada test
  
});
})