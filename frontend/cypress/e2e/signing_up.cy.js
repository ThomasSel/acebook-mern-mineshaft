describe("Signing up", () => {
  it("with valid credentials, redirects to '/login'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#first-name").type("First");
    cy.get("#last-name").type("Last");
    cy.get("#user-dob").type("2000-10-10");
    cy.get("#submit").click();

    cy.url().should("include", "/login");
  });

  it("with missing password, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#first-name").type("First");
    cy.get("#last-name").type("Last");
    cy.get("#user-dob").type("2000-10-10");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
  });

  it("with missing email, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#password").type("password");
    cy.get("#first-name").type("First");
    cy.get("#last-name").type("Last");
    cy.get("#user-dob").type("2000-10-10");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
  });

  it("with missing first name, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#last-name").type("Last");
    cy.get("#user-dob").type("2000-10-10");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
  });

  it("with missing last name, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#first-name").type("First");
    cy.get("#user-dob").type("2000-10-10");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
  });

  it("with missing user dob, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#first-name").type("First");
    cy.get("#last-name").type("Last");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
  });
});