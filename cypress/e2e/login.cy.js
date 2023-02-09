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
});
