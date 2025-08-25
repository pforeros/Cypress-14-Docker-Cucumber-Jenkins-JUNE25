/// <reference types="Cypress" />

/*describe("Advanced UI Elements", () => {

  it("Browser Controls", function()  {
    cy.visit('https://react-redux.realworld.io/')
    cy.contains('Sign in').click()
    cy.go('back')
    cy.go('forward')
    cy.go(-1)
    cy.go(1)
    cy.get('input[type="email"]').type('cypress')
    cy.reload()
  })
})*/


describe('Advanced UI Elements',function(){
 
    it('Browser Controls',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.go('back')
        cy.go('forward')
        cy.go(-1)
        cy.go(1)
        cy.get('input[type="email"]').type('cypress')
        cy.reload()
    })
})

/*describe("Handling Browser Controls", () => {
  it("Handling Browser Controls", async () => {
    // Visit the Conduit application
    await cy.visit("https://react-redux.realworld.io/");
    // Verify it contains `Sign in`
    cy.contains("Sign in").should("be.visible").click();
    // Back to previous page
    cy.go("back");
    // Go forward to the next page
    cy.go("forward");
    // Go back with numbers
    cy.go(-1);
    // Go forward with numbers
    cy.go(1);
    // Verify the URL
    cy.url().should("include", "login");
    // Verify the title
    cy.title().should("include", "Conduit");
    // Reload the page
    cy.reload();
  });
});*/