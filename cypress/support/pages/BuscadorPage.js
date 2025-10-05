import BuscadorPage from '../support/pages/BuscadorPage';

describe('Flujo Funcional: Búsqueda de producto en Lider.cl', () => {

    //  se ocupa el metodo 'before' para visitar la URL solo una vez por suite
    before(() => {
        cy.visit('/'); 
    });
    
    it('Busca un producto (Arroz) y verifica los resultados', () => {
        
        BuscadorPage.buscarProducto('arroz');
        BuscadorPage.resultsHeader.should('exist').and('be.visible');
    });
    afterEach(() => {
        cy.wait(1000); 
    });
})