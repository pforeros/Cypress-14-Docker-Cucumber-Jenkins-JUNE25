/// <reference types="Cypress" />
 
describe('Handling Iframes',function(){
 
  it('Iframes',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get(".tox-notification__dismiss").click();
        cy.get("#mce_0_ifr").then(($iframe) => {
      const $body = $iframe.contents().find("body");
      console.log("element: ", $body);
      // Verify it is empty
      cy.wrap($body).should("be.exist");
  })
})
})

/*describe('Advanced UI Elements',function(){

    it('Iframes',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(function($iframe){
            const frame = $iframe.contents().find('#tinymce')
            cy.wrap(frame).clear().type('hello')
        })
    })
})
*/
