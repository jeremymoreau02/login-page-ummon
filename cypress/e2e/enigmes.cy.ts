describe("Page des énigmes", () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/enigmes');
      cy.get("h2").should("contain", "Énigmes");
    });
  
    it("Affiche au moins une énigme", () => {
      cy.get(".enigme-card").should("have.length.greaterThan", 0);
    });
  
    it("Affiche les détails de l'énigme", () => {
      cy.get(".enigme-card").first().click();
      cy.get(".enigme-question").should("be.visible");
      cy.get(".enigme-reponse").should("be.visible");
    });
});