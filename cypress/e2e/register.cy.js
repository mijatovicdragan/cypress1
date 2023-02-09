const locators = require("../fixtures/locators.json");

describe("Register test", () => {
  let userData = {
    firstName: "Filip",
    lastName: "Nedovic",
    email: "filip11@test.com",
    password: "Test12345",
    shortPassword: "pass",
    invalidEmail: "testmail.com",
  };

  beforeEach("visit app and click on the register link", () => {
    cy.visit("/");
    cy.get(locators.navbar.registerButton).click();
    cy.url().should("contain", "/register");
  });

  it("register with valid credentials", () => {
    cy.visit("/");
    cy.get(locators.navbar.registerButton).click();
    cy.url().should("contain", "/register");
    cy.get(locators.register.firstNameInput).type("Test");
    cy.get(locators.register.lastNameInput).type("Test");
    cy.get(locators.commonFormElements.emailInput).type("test@mail.com");
    cy.get(locators.commonFormElements.passwordInput).type("Test12345");
    cy.get(locators.register.passwordConfirmationInput).type("Test12345");
    cy.get(locators.register.tosCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("contain", "/register");
  });
});
