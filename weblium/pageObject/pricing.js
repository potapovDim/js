const { element, elements } = require('wd-interface')

class Pricing {
  constructor() {
    this.pageTitle = element('h2')
    this.textAlignLeft = elements('.text-align-left')
    this.textAlignCenter = elements('.text-align-center')
  }

  async getPageTitleText() {
    return this.pageTitle.getText()
  }

  async getUSDPrice() {
    // беремо другий елемент 
    const usdPrice = await this.textAlignLeft.get(2)
    // повертаємо його значення
    return await usdPrice.getText()
  }

  async getMonthlyPrice() {
    const montlyPrice = await this.textAlignCenter.get(3)
    return await montlyPrice.getText()
  }

  async getAnnualPrice() {
    //Ваш код
  }

  async getBiennialPrice() {
    //Ваш код
  }
}

module.exports = Pricing