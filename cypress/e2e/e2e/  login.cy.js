import LoginPage from '../support/pages/LoginPage';

describe('Flujo 1: Inicio de Sesión de Usuario (Flujo Feliz)', () => {

    let userData;

   
    before(() => {
        cy.fixture('userData').then((data) => {
            userData = data;
        });
        cy.intercept('/'); 
    });

    it('TC-001: Debería permitir el inicio de sesión exitoso con credenciales válidas', () => {
        LoginPage.hacerLogin(userData.validUser.email, userData.validUser.password); 
        cy.url().should('include', '/mi-cuenta'); // Ajusta la URL de la cuenta de Lider

        cy.get('#user-menu').should('contain', 'Hola,'); // Verifica un elemento de bienvenida
    });
});