/// <reference types="Cypress" />

/*describe("Handling Different Alerts", () => {
  beforeEach(() => {
    // Visit the page with alerts
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
  });
  it("Simple Alert", () => {});
});*/

describe('Advanced UI Elements',function(){
 
    it('Simple alert',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am a JS Alert')})
        cy.get('#result').should('contain','You successfully clicked an alert')

    })

    it('Confirmation alert - Ok button',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
    
    })
    it('Confirmation alert - Cancel button',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('contain','You clicked: Cancel')
    })
    it('Prompt Alert',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function($win){
            cy.stub($win,'prompt').returns('Hello Alert')
            cy.contains('Click for JS Prompt').click()        
        })
        cy.get('#result').should('contain','You entered: Hello Alert')
    })
})