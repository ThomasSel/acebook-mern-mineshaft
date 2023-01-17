describe("Signing in", () => {
  before(() => {
    cy.signup("user@email.com", "12345678");
  });

  it("with valid credentials, redirects to '/posts'", () => {
    cy.visit("/login");
    cy.get("#email").type("user@email.com");
    cy.get("#password").type("12345678");
    cy.get("#submit").click();

    cy.url().should("include", "/posts");
  });

  it("with missing password, redirects to '/login'", () => {
    cy.visit("/login");
    cy.get("#email").type("user@email.com");
    cy.get("#submit").click();

    cy.url().should("include", "/login");
  });

  it("with missing email, redirects to '/login'", () => {
    cy.visit("/login");
    cy.get("#password").type("12345678");
    cy.get("#submit").click();

    cy.url().should("include", "/login");
  });

  it("redirects to the signup page", () => {
    cy.visit("/login");
    cy.get("#signup-link").click();

    cy.url().should("include", "/signup");
  });

  it("should redirect to the login page if a token expires on the feed", () => {
    cy.visit("/posts");
    cy.clock();
    cy.tick(6000000);
    cy.visit("/posts");
    cy.url().should("include", "/login");
  });
});
