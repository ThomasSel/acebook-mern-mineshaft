import Comment from "./Comment";

describe("Comment", () => {
  it("renders a comment", () => {
    cy.mount(<Comment comment={{ _id: 1, message: "this is a comment" }} />);

    cy.get('[data-cy="comment"]').should("contain.text", "this is a comment");
  });
});
