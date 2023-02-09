import { cyan } from "colorette";

class RegisterPage {
  get registerLink() {
    return cy.get("a[href='/register']");
  }
}

export const registerPage = new registerPage();
