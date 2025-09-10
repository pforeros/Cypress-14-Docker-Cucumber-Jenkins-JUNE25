/// <reference types="Cypress" />

class BasePage{
  //Common method to navigate
  navigatTo(url) {
    cy.visit(url);
  }
  //Common method for element clickking
  clickElement(locator,useContains=false){
    if(useContains){
      cy.contains(locator).click();
    }
    else{
      cy.get(locator).click();
  }
}
  //Common method to retrieve element text
  fillText(locator,texToEnter,useContains=false){
    if(useContains){
      cy.contains(locator).type(texToEnter);
    }else{
      cy.get(locator).type(texToEnter);
  }
} 
  //Common method to retrieve text  from an element
  getElementText(locator,useContains=false){
    if(useContains){
      return cy.contains(locator).getElementText('text');
    }else{
      return cy.get(locator).getElementText('text');
  }
}
 //Common method to wait for an element to be visible
waitForElementVisibile(locator,useContains=false){
    if(useContains){
      cy.contains(locator).should('be.visible');
    }else{
      cy.get(locator).should('be.visible');
  }
}
//Common method to wait for an element to be visible
isElementVisibile(locator,useContains=false){
    if(useContains){
      return cy.contains(locator).should('be.visible');
    }else{
      return cy.get(locator).should('be.visible');
  }
}
}

export default  BasePage;
