import PostInputForm from "./PostInputForm";

describe("PostInputForm", () => {
  it("Sends post request on user post submition", () => {
    const setPosts = cy.stub();
    const setToken = cy.stub();

    // mock response on post requests sent to '/posts'
    cy.intercept("POST", "/posts", {
      message: "OK",
      token: "responseToken",
      posts: [{ _id: 1, message: "some post" }],
    }).as("newPostRequest");

    // pointing to where component runs, loading it on fake web page
    cy.mount(
      <PostInputForm
        token={"fakeToken"}
        setToken={setToken}
        setPosts={setPosts}
      />
    );

    cy.get("#postInput").type("some post");
    cy.get("#submitPost").click();

    cy.wait("@newPostRequest").then((interception) => {
      expect(interception.request.body.message).to.eq("some post");
      expect(interception.request.headers.authorization).to.eq(
        "Bearer fakeToken"
      );

      expect(interception.response.body.token).to.eq("responseToken");

      expect(setPosts).to.be.calledWith([{ _id: 1, message: "some post" }]);
      expect(setToken).to.be.calledWith("responseToken");
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