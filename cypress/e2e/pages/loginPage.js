import BasePage from "./basePage"
import homePage from "./homePage";  

class LoginPage extends BasePage{

  getEmail() {
    return 'input[type="email"]'
  }

  getPassword() {
    return 'input[type="password"]'
  }

  getSigninButton() {
  return 'button[type="submit"]'
}

/*enterEmail(emailValue) {
  cy.get(this.getEmail()).type(emailValue)
  return this;*/
  enterEmail(email) {
  this.fillText(this.getEmail(),email);
  return this;
}

/*enterPassword(passwordValue) {
  cy.get(this.getPassword()).type(passwordValue)
  return this;*/

  enterPassword(password) {
  this.fillText(this.getPassword(),password);
  return this;
}

/*clickSignin() {
  cy.get(this.getSigninButton()).click()
  return homePage;*/
  
  clickSigninButton() {
  this.clickElement(this.getSigninButton());
  return homePage;
}
}
const loginPage = new LoginPage();
export default loginPage
