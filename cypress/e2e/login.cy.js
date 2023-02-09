const { cyan } = require("colorette");
const locators = require("../fixtures/locators.json");
describe("login tests", () => {
  it("login without email address", () => {
    cy.visit("/");
    cy.get(locators.navbar.loginButton).click();
    cy.get(locators.login.emailInput).type("Test12345");
    cy.get(locators.login.submitButton).click();
    cy.url().should("include", "/login");
  });

  it("login without password", () => {
    cy.visit("/");
    cy.get(locators.navbar.loginButton).click();
    cy.get(locators.login.submitButton).click();
    cy.url().should("include", "/login");
  });

  it("login with valid credentials", () => {
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
