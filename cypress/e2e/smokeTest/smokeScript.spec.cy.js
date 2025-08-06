/// <reference types="cypress" />

// import { describe, it } from "mocha";

describe("Login functionality", () => {
  it("Login Test using Conduit site", () => {
    cy.visit("https://react-redux.realworld.io/");
    // cy.get("#email").should("be.visible");
    cy.get("a[href='#login']").click();
    // Next page should have the login form
    cy.url().should("include", "/login");

    // Fill in the login form
    cy.get("input[placeholder='Email']").type("cypressdemo@gmail.com", {
      delay: 0,
    });
    cy.get("input[placeholder='Password']").type("cypressdemo", {
      delay: 0,
    });
    // Submit the form
    cy.get("button[type='submit']").click();
    // Check for error message
    cy.get("button[type='submit']").should("be.disabled");
  });
});

/*/// <reference types="Cypress" />

describe('Login Functionality',function(){

    it('Login Test using Conduit',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder="Email"]').type('cypressdemo@gmail.com')
        cy.get('input[placeholder="Password"]').type('cypressdemo')
        cy.get('button[type="submit"]').click()
        cy.get('a[href="#settings"]').click()
        cy.get('.btn.btn-outline-danger').click()
    })
})*/