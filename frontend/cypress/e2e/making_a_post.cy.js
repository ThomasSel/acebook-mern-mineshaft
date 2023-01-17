describe("Making a post", () => {
  beforeEach(() => {
    cy.signup("user@email.com", "12345678");
    cy.login("user@email.com", "12345678");
  });

  it("user succesfully creates a post", () => {
    let lengthOnVisit = 0;
    cy.visit("/posts");
    if (Cypress.$('[data-cy="post"]').length > 0) {
      cy.get('[data-cy="post"]')
        .contains("yay")
        .its("length")
        .then((length) => {
          lengthOnVisit = length;
        });
    }

    cy.get("#postInput").type("yay");
    cy.get("#submitPost").click();

    cy.url().should("include", "/posts");
    cy.get('[data-cy="post"]')
      .contains("yay")
      .its("length")
      .should("eq", lengthOnVisit + 1);
  });
});

// we want to the user to visit the post page, then type in the box, then click the post button. we want to see a post of the text the user inputed in the box.
