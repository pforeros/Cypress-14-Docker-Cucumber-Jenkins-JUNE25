import landingPage from '../e2e/pages/landingPage';
//import loginPage from '../e2e/pages/loginPage';
//import homePage from '../e2e/pages/homePage';
//import settingsPage from './pages/settingsPage';

/// <reference types="Cypress" />

describe('Page Object Model Test',function(){
  //const landingPage = new LandingPage();
  //const loginPage = new LoginPage();
  //const homePage = new HomePage();
  //const settingsPage = new SettingsPage();


    beforeEach(function(){
        cy.fixture('ConduitLoginData').as('data')
    })

    it('Conduit - Valid Credentials',function(){
        cy.visit('https://react-redux.realworld.io/')
        landingPage.clickSigninButton()
        .enterEmail(this.data.validEmail)
        .enterPassword(this.data.validPassword)
        .clickSigninButton()
        .checkYourFeedIsVisible()
        .clickSettingsButton()
        .clickLogoutButton();
    })
  })

  

