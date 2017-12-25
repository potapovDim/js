const BasePage = require('../pageObject/basePage')

const { expect } = require('chai')

describe('Landing links', () => {
  const basePage = new BasePage()

  beforeEach(async () => {
    await basePage.goToBase()
  })

  afterEach(async () => {
    await basePage.closeBrowser()
  })

  it('link pricing', async () => {
    // клікаємо з футера лінку на прайсінг
    const pricing = await basePage.fromFooterToPricing()
    // перевіряємо що наш поточний урл містить слово 'pricing'
    expect(await basePage.returnCurrentUrl()).to.contains('pricing')
    expect(await pricing.getPageTitleText()).to.contains('Pricing')
    expect(await pricing.getUSDPrice()).to.eql('$399')
    expect(await pricing.getMonthlyPrice()).to.eql('$15')
  });

  it('link about', async () => {
    // клікаємо з футера лінку на ебаут
    await basePage.fromFooterToAbout()
    // перевіряємо що наш поточний урл містить слово 'about'
    expect(await basePage.returnCurrentUrl()).to.contains('about')
  })
});