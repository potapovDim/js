const { element, elements } = require('wd-interface')

const Pricing = require('./pricing')

class Footer {
  constructor() {
    this.footer = elements('.row-wrapper')
  }

  async getFooter() {
    return (await this.footer.waitForElements(5000)).get(21)
  }

  async clickAbout() {
    const about = 
    await about.click()
  }

  async clickPricing() {
    const footer = await this.getFooter()
    const pricing = await footer.getElements('a').get(1)
    await pricing.click()
    return new Pricing()
  }

  async clickPortfolio() {
    const footer = await this.getFooter()
    const pricing = await footer.getElements('a').get(2)
    await pricing.click()
  }
}

module.exports = Footer
