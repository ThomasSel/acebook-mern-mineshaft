import Post from "./Post";

describe("Post", () => {
  beforeEach(() => {
    cy.mount(
      <Post
        post={{
          _id: 1,
          message: "Hello, world",
          createdAt: new Date(),
          updatedAt: new Date(),
          comments: [],
        }}
        token={"fakeToken"}
        updatePageData={() => {}}
      />
    );
  });

  // this test will need to be modified once we integrate the user's full name in the database and post
  it("renders a post with the user's photo", () => {
    cy.get('[data-cy="post"]').get("[id=user-photo]").should("be.visible");
  });

  // this test will need to be modified once we integrate the user's full name in the database and post
  it("renders a post with the user's full name", () => {
    cy.get('[data-cy="post"]').should("contain.text", "Firstname Lastname");
  });

  // this test will need to be modified once we integrate the username in the database and post
  it("renders a post with the username", () => {
    cy.get('[data-cy="post"]').should("contain.text", "@username");
  });

  it("renders a post with a message", () => {
    cy.get('[data-cy="post"]').should("contain.text", "Hello, world");
  });

  it("renders a post with a timestamp", () => {
    cy.get('[data-cy="post"]').should("contain.text", "a few seconds ago");
  });

  it("checks the like and comment buttons are visible", () => {
    cy.get('[data-cy="post"]').get("[id=like-button]").should("be.visible");
    cy.get('[data-cy="post"]').get("[id=comment-button]").should("be.visible");
  });
});
