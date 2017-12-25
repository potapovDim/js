const { element, elements } = require('wd-interface')

const Pricing = require('./pricing')

class Footer {
  constructor() {
    this.footerSelector = '.row-wrapper'
  }

  async getFooter() {
    const footer = await elements(this.footerSelector).get(21)
    return footer
  }

  async clickAbout() {
    const footer = await this.getFooter()
    const about = await footer.getElements('a').get(3)
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
