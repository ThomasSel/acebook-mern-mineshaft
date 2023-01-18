import CommentInputForm from "./CommentInputForm";

describe("CommentInputForm", () => {
  it("Sends post request on user post submition", () => {
    const updatePageData = cy.stub();

    // mock response on post requests sent to '/posts'
    cy.intercept("POST", "/posts/fakeId", {
      message: "OK",
      token: "responseToken",
      posts: [
        {
          _id: "fakeId",
          message: "some post",
          comments: [{ message: "some comment" }],
        },
      ],
    }).as("newCommentRequest");

    // pointing to where component runs, loading it on fake web page
    cy.mount(
      <CommentInputForm
        post_id={"fakeId"}
        token={"fakeToken"}
        updatePageData={updatePageData}
      />
    );

    cy.get('[data-cy="commentInput"]').type("some comment");
    cy.get('[data-cy="commentSubmit"]').click();

    cy.wait("@newCommentRequest").then((interception) => {
      expect(interception.request.body.message).to.eq("some comment");
      expect(interception.request.headers.authorization).to.eq(
        "Bearer fakeToken"
      );

      expect(interception.response.body.token).to.eq("responseToken");

      expect(updatePageData).to.be.called;
    });
  });
});
