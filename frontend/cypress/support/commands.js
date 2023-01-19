// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

// -- This is a parent command --
Cypress.Commands.add("signup", (email, password) => {
  cy.visit("/signup");
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("#confirm-password").type(password);
  cy.get("#first-name").type("First");
  cy.get("#last-name").type("Last");
  cy.get("#user-dob").type("2000-10-10");
  cy.get("#submit").click();
});

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("#submit").click();
});

Cypress.Commands.add("makePost", (message) => {
  cy.visit("/posts");
  cy.get("#postInput").type(message);
  cy.get("#submitPost").click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
