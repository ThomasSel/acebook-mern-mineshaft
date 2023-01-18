describe("Making a comment", () => {
  const postMessage = (Math.random() + 1).toString(36).substring(2);
  before(() => {
    cy.signup("user@email.com", "12345678");
    cy.login("user@email.com", "12345678");
    cy.makePost(postMessage);
  });

  it("user succesfully creates a post", () => {
    cy.get('[data-cy="post"]')
      .filter(`:contains(${postMessage})`)
      .find('[data-cy="commentInput"]')
      .type("comment 1");

    cy.get('[data-cy="post"]')
      .filter(`:contains(${postMessage})`)
      .find('[data-cy="commentSubmit"]')
      .click();

    cy.get('[data-cy="post"]')
      .filter(`:contains(${postMessage})`)
      .should("contain.text", "comment 1");
  });
});
