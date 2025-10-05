// cypress/support/pages/CarritoPage.js

class CarritoPage {
    // Selectores
    get addToCartButton() {
        return cy.get('.add-to-cart-btn');
    }
    get cartIcon() {
        return cy.get('#header-cart-icon');
    }
    get checkoutButton() {
        return cy.get('#checkout-button');
    }

    // Acciones
    agregarProductoYVerCarrito(urlProducto) {
        cy.visit(urlProducto); 
        this.addToCartButton.click();
        this.cartIcon.click();
    }
    
    iniciarProcesoCheckout() {
        this.checkoutButton.click();
    }
}
export default new CarritoPage();