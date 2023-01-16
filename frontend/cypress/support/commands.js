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
  cy.get("#submit").click();
});

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("#submit").click();
});

Cypress.Commands.add("resetPosts", () => {
  const email = "test@test.com";
  const password = "12345678";

  return cy
    .request({
      url: "/users",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
    .then((signupResponse) => {
      cy.request({
        url: "/tokens",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      }).then((loginResponse) => {
        cy.request({
          url: "/posts",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loginResponse.body.token}`,
          },
        });
      });
    });
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
