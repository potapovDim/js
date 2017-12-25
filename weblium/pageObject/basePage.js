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
