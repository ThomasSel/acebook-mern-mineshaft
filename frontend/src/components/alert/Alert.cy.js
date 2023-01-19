import Alert from './Alert';

describe("Alert rendered on client", () => {
  it("for mismatching passwords", () => {
    cy.mount(<Alert password={"password"} password2={"password2"} render={true}/>);
   
    cy.get('[data-cy="alert-passwords"]').should('contain.text', "passwords do not match");
  });

  it("for invalid passwords", () => {
    cy.mount(<Alert password={"word"} password2={"word"} render={true}/>);
   
    cy.get('[data-cy="alert-password"]').should('contain.text', "must enter valid password");
  });

  it("for user under 14 years of age", () => {
    cy.mount(<Alert userDob={"2012-01-01"} render={true}/>);
   
    cy.get('[data-cy="alert-dob"]').should('contain.text', "user must be over 14years of age to sign up");
  });

  it("no first name was entered", () => {
    cy.mount(<Alert firstName={""} render={true}/>);
   
    cy.get('[data-cy="alert-firstname"]').should('contain.text', "must enter a first name");
  });

  it("no last name was entered", () => {
    cy.mount(<Alert lastName={""} render={true}/>);
   
    cy.get('[data-cy="alert-lastname"]').should('contain.text', "must enter a last name");
  });
});