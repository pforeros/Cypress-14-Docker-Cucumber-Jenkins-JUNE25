/// <reference types="Cypress" />
 
describe('Dropdown functionality',function(){
 
    it('Handling Static Dropdown',function(){
        cy.visit('https://seleniumbase.io/demo_page')
        cy.get('#mySelect').select('Set to 50%').should('have.value','50%')
    
    })

    it("Handling Dynamic Dropdown", () => {
    // Visit the page with dynamic dropdown
    cy.visit("https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx");
    cy.get('#ctl00_ContentPlaceholder1_RadDropDownProducts').click()
    cy.get('.rddlItem').contains('Gorgonzola Telino').click()
    // Click on `Get Details` button
    cy.get("#ctl00_ContentPlaceholder1_GetDetails").click();
    // Verify the selected option
    cy.get(".order-summary").should("contain.text", "Gorgonzola Telino");
   })

   it('Handling Multiple DropDown',function(){
       cy.visit('https://demo.mobiscroll.com/select/multiple-select')
       cy.get('#multiple-select-input').click({force: true})
       cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Electronics & Computers').click()
       cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Health & Beauty').click()
       cy.get("#multiple-select-input").should("have.value", "Electronics & Computers, Health & Beauty")
       cy.get("div[class='mbsc-popup-overlay mbsc-popup-overlay-anchored mbsc-ios']").click({ force: true });
    })
})


  // Select the dropdown
  //  cy.get("#mySelect").should("be.visible");
    // Select an option from the dropdown
   //  cy.get("#mySelect").select("25%");
    // Verify the selected option
   // cy.get("#mySelect").should("have.value", "25%");
    // Select another option from the dropdown
  //  cy.get("#mySelect").select("50%");
    // Verify the selected option again
  //  cy.get("#mySelect").should("have.value", "50%");
    // Select the first option from the dropdown
   // cy.get("#mySelect").select("75%");
    // Verify the selected option again
    //cy.get("#mySelect").should("have.value", "75%");
    // Select the last option from the dropdown
  //  cy.get("#mySelect").select("100%");
    // Verify the selected option again
   // cy.get("#mySelect").should("have.value", "100%"); 
  //  })
   // })