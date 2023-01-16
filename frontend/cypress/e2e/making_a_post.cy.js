describe("Making a post", () => {
  before(async () => {
    await cy.resetPosts();
    cy.signup("user@email.com", "12345678");
    cy.login("user@email.com", "12345678");
  });

  it("user succesfully creates a post", () => {
    cy.visit("/posts");
    cy.get("#postInput").type("yay");
    cy.get("#submitPost").click();

    cy.url().should("include", "/posts");
    cy.get('[data-cy="post"]').should("contain.text", "yay");
  });
});

// we want to the user to visit the post page, then type in the box, then click the post button. we want to see a post of the text the user inputed in the box.
