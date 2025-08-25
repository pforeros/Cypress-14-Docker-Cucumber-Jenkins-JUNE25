/// <reference types="Cypress" />

/*describe('Xpath Functionality',function(){

   it('Login Test using Conduit by Xpath locators',function(){
       cy.visit('https://react-redux.realworld.io/')
       cy.xpath('//a[normalize-space()="Sign in"]').click()
       >cy.xpath('//input[@placeholder="Email"]').type('cypressdemo@gmail.com')
       >cy.xpath('//input[@placeholder="Password"]').type('cypressdemo')
       cy.xpath('//button[normalize-space()="Sign in"]').click()
   })
})*/

describe("xPath functionality", () => {
  it("Login Test using Conduit site by Xpath locators", async() => {
    await cy.visit("https://react-redux.realworld.io/");
    // cy.get("#email").should("be.visible");
    await cy.xpath("//a[normalize-space()='Sign in']").click();
    // Next page should have the login form
    await cy.url().should("include", "/login");
    // Fill in the login form
    await cy.xpath("//input[@placeholder='Email']").type("cypressdemo@gmail.com", {
      delay: 0,
    });
    await cy.xpath("//input[@placeholder='Password']").type("cypressdemo", {
      delay: 0,
    });
    // Submit the form
    await cy.xpath("//button[normalize-space()='Sign in']").click();
    // Check for error message
    await cy.xpath("//button[normalize-space()='Sign in']").should("be.disabled");
  });
});