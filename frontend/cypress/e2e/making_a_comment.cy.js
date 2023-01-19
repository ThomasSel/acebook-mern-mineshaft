describe("Making a comment", () => {
  const postMessage = (Math.random() + 1).toString(36).substring(2);

  before(() => {
    cy.signup("user@email.com", "12345678");
    cy.login("user@email.com", "12345678");
    cy.makePost(postMessage);
  });

  it("user succesfully creates a comment", () => {
    cy.get('[data-cy="post"]')
      .filter(`:contains(${postMessage})`)
      .as("testPost");

    cy.get("@testPost").find('[data-cy="commentButton"]').click();

    cy.get("@testPost").find('[data-cy="commentInput"]').type("comment 1");
    cy.get("@testPost").find('[data-cy="commentSubmit"]').click();

    cy.get("@testPost").should("contain.text", "comment 1");
  });
});
