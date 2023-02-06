/// <reference types="Cypress" />

describe("gallery test", () => {
    it("login test", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(1).click();
       //cy.get("a[href='/login']");
       //cy.contains("Login");
       cy.get("#email").type("dragannmijatovic77@outlook.com");
       cy.get("#password").type("alfaromeo159");
       cy.get("button").click();
       cy.get(".nav-link").should("have.length", 4);
       cy.url().should("not.contain", "/login");
       cy.get(".nav-link").eq(3).click();
    });
    it.only("login test", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("Test");
        cy.get("#last-name").type("Test");
        cy.get("#email").type("Test");
        cy.get("#password").type("Test12345");
        cy.get("#password-confirmation").type("Test12345");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });
});