const { element, elements } = require('wd-interface')

class Footer {
  constructor() {
    this.footerSelector = '.row-wrapper'
  }

  async clickAbout() {
    const footer = await elements(this.footerSelector).get(21)
    const about = await footer.getElements('a').get(3)
    await about.click()
  }

  async clickPricing() {
    // ваш коди
  }
  async clickPortfolio() {
    // ваш код
  }
}

module.exports = Footer
