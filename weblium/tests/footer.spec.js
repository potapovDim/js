const http = require('http')

// http.request = ((request) => (opts, ...args) => {
//   console.log(opts)
//   return request(opts, ...args)
// })(http.request.bind(http.request));


const BasePage = require('../pageObject/basePage')


const { expect } = require('chai')

describe('Landing links', () => {
  const basePage = new BasePage()

  before(async () => {
    // await basePage.browser.startSelenium()
  })

  after(async () => {
    // await basePage.browser.stopSelenium()
  })

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
  })

  // it('link about', async () => {
  //   // клікаємо з футера лінку на ебаут
  //   await basePage.fromFooterToAbout()
  //   // перевіряємо що наш поточний урл містить слово 'about'
  //   expect(await basePage.returnCurrentUrl()).to.contains('about')
  // })
});

//"wd-interface": "git+ssh://git@github.com:potapovDim/interface-webdriver.git#develop",