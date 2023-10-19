describe("Navigation", () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080');
    });

    it("Peut naviguer vers la page de connexion depuis la page d'accueil", () => {
      cy.get(".el-navbar-item").contains("Se connecter").click();
      cy.url().should("include", "/");
    });
  
    it("Peut naviguer vers la page des énigmes depuis la page d'accueil", () => {
      cy.get(".el-navbar-item").contains("Enigmes").click();
      cy.url().should("include", "/enigmes");
    });
  
    it("Peut naviguer vers la page d'accueil depuis la page des énigmes", () => {
      cy.visit("http://localhost:8080/enigmes");
      cy.get(".el-navbar-item").contains("Se connecter").click();
      cy.url().should("include", "/");
    });
  });
  