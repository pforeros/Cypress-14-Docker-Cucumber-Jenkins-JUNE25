/// <reference types="Cypress" />

/*
/*? Basic Hooks Test
  /* Before
  /* After
  /* BeforeEach
 / * AfterEach
*/

/*describe("Hooks Basics", () => {
  before(() => {
    // This will run once before all tests
    cy.log("Running before all tests");
  });

  after(() => {
    // This will run once after all tests
    cy.log("Running after all tests");
  });

  beforeEach(() => {
    // This will run before each test
    cy.log("Running before each test");
  });

  afterEach(() => {
    // This will run after each test
    cy.log("Running after each test");
  });

  it("Test Case 1", () => {
    cy.log("Executing Test Case 1");
    expect(true).to.be.true;
  });

  it("Test Case 2", () => {
    cy.log("Executing Test Case 2");
    expect(true).to.be.true;
  });

});
*/


describe('Hooks Basics',function(){

before(function(){
      cy.log('Before block')
  })

  beforeEach(function(){
      cy.log('Before Each block')
  })

  it('Search item',function(){
      cy.log('This is Search item block')
  })

   it('Order item',function(){
       cy.log('This is Order item block')
   })

   it('Check out item',function(){
       cy.log('This is Check out item block')
   })

   afterEach(function(){
       cy.log('After Each block')
   })

   after(function(){
       cy.log('After block')
   })

})