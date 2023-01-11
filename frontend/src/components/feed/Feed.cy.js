import Feed from './Feed'
const navigate = () => {}

describe("Feed", () => {
  it("Calls the /posts endpoint and lists all the posts", () => {
    window.localStorage.setItem("token", "fakeToken")
    
    cy.intercept('GET', '/posts', (req) => {
        req.reply({
          statusCode: 200,
          body: { posts: [
            {_id: 1, message: "Hello, world"},
            {_id: 2, message: "Hello again, world"}
          ] }
        })
      }
    ).as("getPosts")

    cy.mount(<Feed navigate={navigate}/>)
    
    cy.wait("@getPosts").then(() =>{
      cy.get('[data-cy="post"]')
      .should('contain.text', "Hello, world")
      .and('contain.text', "Hello again, world")
    })
  })

  it("Sends post request on user post submition", () => {
    // mock token
    window.localStorage.setItem("token", "fakeToken")

    // mock response on post requests sent to '/posts'
    cy.intercept('POST', '/posts', { message: "OK", token: "responseToken" }).as("newPostRequest")

    // pointing to where component runs, loading it on fake web page
    cy.mount(<Feed navigate={navigate}/>)

    cy.get("#post").type("some post");
    cy.get("#submit").click();

    cy.wait('@newPostRequest').then(interception => {
      expect(interception.request.body.message).to.eq('some post');
      expect(interception.request.headers.authorization).to.eq('Bearer fakeToken');
      expect(interception.response.body.token).to.eq("responseToken")
    });
  })
})
