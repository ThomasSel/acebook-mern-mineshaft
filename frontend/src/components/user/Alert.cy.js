import Alert from './Alert';

describe("Alert rendered on client", () => {
  it("for mismatching passwords", () => {
    cy.mount(<Alert password={"password"} password2={"password2"} />);
   
    cy.get('[data-cy="alert"]').should('contain.text', "passwords do not match");
  });
});