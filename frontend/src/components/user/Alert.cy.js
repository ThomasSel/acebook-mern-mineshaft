import Alert from './Alert';

describe("Alert rendered on client", () => {
  it("for mismatching passwords", () => {
    cy.mount(<Alert password={"password"} password2={"password2"} />);
   
    cy.get('[data-cy="alert-passwords"]').should('contain.text', "passwords do not match");
  });

  it("for user under 14 years of age", () => {
    cy.mount(<Alert userDob={"2012-01-01"} />);
   
    cy.get('[data-cy="alert-dob"]').should('contain.text', "user must be over 14years of age to sign up");
  });
});