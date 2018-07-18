const { elements, element, client } = require('wd-interface')

const Footer = require('./footer')

class BasePage {
  constructor() {
    this.browser = client().chrome()
    this.footer = new Footer()
  }

  async goToBase() {
    await this.browser.goTo('https://weblium.com/')
  }

  async login(username, password) {
    await element('[href="https://weblium.com/login"]').click()
    await element('#id5').sendKeys(username)
    await element('#id9').sendKeys(password)
    await element('[title="Login"]').click()
  }

  async closeBrowser() {
    await this.browser.closeBrowser()
  }

  async returnCurrentUrl() {
    return await this.browser.getUrl()
  }

  async fromFooterToPricing() {
    return await this.footer.clickPricing()
  }

  async fromFooterToAbout() {
    await this.footer.clickAbout()
  }

  async fromFooterToPorfolio() {
    // Ваш код 
  }
}

module.exports = BasePage
