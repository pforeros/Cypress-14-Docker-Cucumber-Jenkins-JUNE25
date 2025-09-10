import BasePage from "./basePage"
import settingsPage from "./settingsPage";

class HomePage extends BasePage{

  getYourFeed() {return 'Your Feed'};
  getGlobalFeed() {return 'Global Feed'}
  getHome() {return 'Home'}
  getNewPost() {return 'New Post'}
  getSettings() {return 'Settings'}

  checkYourFeedIsVisible () {
    //cy.contains(this.getYourFeed()).should('be.visible')
    this.isElementVisibile(this.getYourFeed(),true)
    return this;
  }
  clickSettingsButton () {
    //cy.contains(this.getSettings()).click()
    this.clickElement(this.getSettings(),true)  
    return settingsPage;
}
}
const homePage = new HomePage();
export default homePage

