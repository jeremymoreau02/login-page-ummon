describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/'); // Assurez-vous que l'URL correspond à la page de connexion
    cy.get("h2").should("contain", "Connexion");
  });

  it("Should display the LoginComponent", () => {
    // Ensure that the LoginComponent is present
    cy.get("[data-cy=login-component]").should("exist");
  });

  it('Logs in with valid username and password', () => {
    cy.get('[data-cy=username-input]').type('user');

    cy.get('[data-cy=display-answer-button').click();
    cy.get('[data-cy=login-button]').click(); // Utilisez un attribut data-cy approprié pour le bouton de connexion

    // Assurez-vous que l'utilisateur est redirigé vers une autre page après la connexion
    cy.get('[data-cy=good-message]').should('be.visible');// Assurez-vous que l'URL correspond à la page de tableau de bord après la connexion
  });

  it('Shows an error message for invalid login', () => {
    // Saisissez un nom d'utilisateur incorrect et un mot de passe incorrect
    cy.get('[data-cy=username-input]').type('user'); // Utilisez un attribut data-cy approprié pour l'input de nom d'utilisateur
    cy.get('[data-cy=password-input]').type('wrongpassword'); // Utilisez un attribut data-cy approprié pour l'input de mot de passe

    // Cliquez sur le bouton de connexion
    cy.get('[data-cy=login-button]').click(); // Utilisez un attribut data-cy approprié pour le bouton de connexion

    // Assurez-vous que l'erreur est affichée à l'écran
    cy.get('[data-cy=error-message]').should('be.visible'); // Utilisez un attribut data-cy approprié pour le message d'erreur
  });
});
