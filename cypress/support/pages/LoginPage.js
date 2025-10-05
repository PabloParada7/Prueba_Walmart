// cypress/support/pages/LoginPage.js

class LoginPage {
    // Selectores
    get loginButtonHeader() {
        return cy.get('#header-login-button'); 
    }
    get emailInput() {
        return cy.get('#email-input'); 
    }
    get passwordInput() {
        return cy.get('#password-input');
    }
    get submitButton() {
        return cy.get('button[type="submit"]');
    }
    
    // Acciones
    accederFormularioLogin() {
        this.loginButtonHeader.click();
    }
    
    ingresarCredenciales(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
    }
    
    hacerLogin(email, password) {
        this.accederFormularioLogin();
        this.ingresarCredenciales(email, password);
        this.submitButton.click();
    }
}
export default new LoginPage();