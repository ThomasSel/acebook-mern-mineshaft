describe("User profile", () => {
  before(() => {
    cy.signup("user@email.com", "12345678");
  });

  it("logs the user out", () => {
    cy.visit("/login");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.visit("/profile");
    cy.get("#profile-logout-button").click();
    cy.url().should("include", "/login");
  });

  it("redirects user to the feed page from the dropdown menu", () => {
    cy.visit("/login");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.visit("/profile");
    cy.get("#feed-button").click();
    cy.url().should("include", "/posts");
  });

  it("redirects user to the feed page from the logo", () => {
    cy.visit("/login");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.visit("/profile");
    cy.get("#logo-link").click();
    cy.url().should("include", "/posts");
  });
});
