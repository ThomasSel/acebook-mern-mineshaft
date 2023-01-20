describe("Signing up", () => {
  it("with valid credentials, redirects to '/login'", () => {


    cy.visit("/signup");
    cy.get("#email").type(`${(Math.random() + 1).toString(36).substring(2)}@example.com`);
    cy.get("#password").type("password");
    cy.get("#confirm-password").type("password");
    cy.get("#first-name").type("First");
    cy.get("#last-name").type("Last");
    cy.get("#user-dob").type("2000-10-10");
    cy.get("#submit").click();

    cy.url().should("include", "/login");
  });

  it("if passwords don't match, stays on '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#confirm-password").type("pass");
    cy.get("#first-name").type("First");
    cy.get("#last-name").type("Last");
    cy.get("#user-dob").type("2000-10-10");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
    cy.get('[data-cy="alert-passwords"]').should('contain.text', "passwords do not match");
  });

  it("with invalid password, stays on '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#first-name").type("First");
    cy.get("#last-name").type("Last");
    cy.get("#user-dob").type("2000-10-10");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
    cy.get('[data-cy="alert-password"]').should('contain.text', "must enter valid password");
  });

  it("with missing email, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#password").type("password");
    cy.get("#confirm-password").type("password");
    cy.get("#first-name").type("First");
    cy.get("#last-name").type("Last");
    cy.get("#user-dob").type("2000-10-10");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
    cy.get('[data-cy="alert-no-email"]').should('contain.text', "must enter an email");
  });

  it("with invalid email, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someoneexample.com");
    cy.get("#password").type("password");
    cy.get("#confirm-password").type("password");
    cy.get("#first-name").type("First");
    cy.get("#last-name").type("Last");
    cy.get("#user-dob").type("2000-10-10");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
    cy.get('[data-cy="alert-email"]').should('contain.text', "must enter a valid email");
  });

  it("with missing first name, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#confirm-password").type("password");
    cy.get("#last-name").type("Last");
    cy.get("#user-dob").type("2000-10-10");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
    cy.get('[data-cy="alert-firstname"]').should('contain.text', "must enter a first name");
  });

  it("with missing last name, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#confirm-password").type("password");
    cy.get("#first-name").type("First");
    cy.get("#user-dob").type("2000-10-10");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
    cy.get('[data-cy="alert-lastname"]').should('contain.text', "must enter a last name");
  });

  it("with missing user dob, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#confirm-password").type("password");
    cy.get("#first-name").type("First");
    cy.get("#last-name").type("Last");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
    cy.get('[data-cy="alert-dob"]').should('contain.text', "user must be over 14years of age to sign up");
  });

  it("If user is under 14 years old, stays on '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#confirm-password").type("password");
    cy.get("#first-name").type("First");
    cy.get("#last-name").type("Last");
    cy.get("#user-dob").type("2017-12-12");

    cy.get("#submit").click();

    cy.url().should("include", "/signup");
    cy.get('[data-cy="alert-dob"]').should('contain.text', "user must be over 14years of age to sign up");
  });

  it("redirects to the login page", () => {
    cy.visit("/signup");
    cy.get("#logo-link").click();

    cy.url().should("include", "/login");
  });

});