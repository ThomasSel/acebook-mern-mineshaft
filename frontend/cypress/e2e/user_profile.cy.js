describe("User profile", () => {
  it("logs the user out", () => {
    cy.visit("/profile");

    cy.get("#logout-button").click();
    cy.url().should("include", "/login")
  })
})