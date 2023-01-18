describe("user feed", () => {
  before(() => {
    cy.signup("user@email.com", "12345678");
  });

  it("logs the user out", () => {
    cy.visit("/login");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.visit("/posts");
    cy.get("#feed-logout-button").click();
    cy.url().should("include", "/login");
  });

  it("redirects to the profile page", () => {
    cy.visit("/login");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.visit("/posts");
    cy.get("#profile-button").click();
    cy.url().should("include", "/profile");
  });

  it("logo link refreshes the feed page", () => {
    cy.visit("/login");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.visit("/posts");
    cy.get("#logo-link").click();
    cy.url().should("include", "/posts");
  });
});
