import { loginPage } from "../page_objects/loginPage";

const credentials = {
  email: "filip_nedovic@epam.com",
  password: "Test12345",
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
