import { loginPage } from "../page_objects/loginPage";

const credentials = {
  email: "vivify11@test.com",
  password: "dragan123",
};

describe("login tests", () => {
  before("visit app and click the login link", () => {
    cy.visit("/");
    loginPage.loginLink.click();
  });

  it("login with valid credentials", () => {
    loginPage.login(credentials.email, credentials.password);
  });
});
