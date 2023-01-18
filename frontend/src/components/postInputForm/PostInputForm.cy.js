import PostInputForm from "./PostInputForm";

describe("PostInputForm", () => {
  it("Sends post request on user post submition", () => {
    const updatePageData = cy.stub();

    // mock response on post requests sent to '/posts'
    cy.intercept("POST", "/posts", {
      message: "OK",
      token: "responseToken",
      posts: [{ _id: 1, message: "some post" }],
    }).as("newPostRequest");

    // pointing to where component runs, loading it on fake web page
    cy.mount(
      <PostInputForm token={"fakeToken"} updatePageData={updatePageData} />
    );

    cy.get("#postInput").type("some post");
    cy.get("#submitPost").click();

    cy.wait("@newPostRequest").then((interception) => {
      expect(interception.request.body.message).to.eq("some post");
      expect(interception.request.headers.authorization).to.eq(
        "Bearer fakeToken"
      );

      expect(interception.response.body.token).to.eq("responseToken");

      expect(updatePageData).to.be.called;
    });
  });

  describe("Empty input", () => {
    it("Doesn't allow for empty posts", () => {
      cy.intercept("POST", "/posts", cy.spy().as("myRequest"));

      cy.mount(<PostInputForm />);

      cy.get("#submitPost").click();

      cy.get("#postInput").type("     ");
      cy.get("#submitPost").click();

      cy.get("@myRequest").should("not.have.been.called");
    });
  });
});
