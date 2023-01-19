import Feed from "./Feed";
const navigate = () => {};

describe("Feed", () => {
  it("Calls the /posts endpoint and lists all the posts", () => {
    window.localStorage.setItem("token", "fakeToken");

    cy.intercept("GET", "/posts", (req) => {
      req.reply({
        statusCode: 200,
        body: {
          posts: [
            { _id: 1, message: "Hello, world", comments: [] },
            { _id: 2, message: "Hello again, world", comments: [] },
          ],
        },
      });
    }).as("getPosts");

    cy.mount(<Feed navigate={navigate} />);

    cy.wait("@getPosts").then(() => {
      cy.get('[data-cy="post"]')
        .should("contain.text", "Hello, world")
        .and("contain.text", "Hello again, world");
    });
  });

  it("Displays a new post on the page", () => {
    window.localStorage.setItem("token", "fakeToken");

    cy.intercept("POST", "/posts", {
      message: "OK",
      token: "responseToken",
      posts: [{ _id: 1, message: "some post", comments: [] }],
    }).as("newPostRequest");
    cy.mount(<Feed navigate={navigate} />);

    cy.get("#postInput").type("some post");
    cy.get("#submitPost").click();

    cy.wait("@newPostRequest").then(() => {
      cy.get('[data-cy="post"]').should("contain.text", "some post");
    });
  });
});
