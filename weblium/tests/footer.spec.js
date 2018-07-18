const http = require('http')

const { element } = require('wd-interface')
const { Keys } = require('wd-interface/interface/event/keys')

// http.request = ((request) => (opts, ...args) => {
//   console.log(opts)
//   return request(opts, ...args)
// })(http.request.bind(http.request));


const BasePage = require('../pageObject/basePage')


const { expect } = require('chai')

describe('Landing links', () => {
  const basePage = new BasePage()

  before(async () => {
    await basePage.browser.startSelenium()
  })

  after(async () => {
    // await basePage.browser.stopSelenium()
  })

  beforeEach(async () => {
    await basePage.goToBase()
  })

  afterEach(async () => {
    // await basePage.closeBrowser()
  })

  it.only('clear test', async () => {
    const username = 'dereva@dereva'
    const password = '123123'
    await element('[href="https://weblium.com/login"]').click()
    //set value into input
    await element('#id5').sendKeys(username)
    await element('#id9').sendKeys(password)
    console.log(await element('#id5').getAttribute('value'))
    console.log(await element('#id9').getAttribute('value'))
    console.log('---------------------------------')
    // clear inputs
    await element('#id5').clear()
    await element('#id9').clear()
    console.log(await element('#id5').getAttribute('value'))
    console.log(await element('#id9').getAttribute('value'))
    console.log('---------------------------------')
    //when try to set some new previous value still present in inputs
    await element('#id5').sendKeys(Keys.BACK_SPACE)
    await element('#id9').sendKeys(Keys.BACK_SPACE)
    console.log(await element('#id5').getAttribute('value'))
    console.log(await element('#id9').getAttribute('value'))
    console.log('---------------------------------')
    console.log(await element('#id5').getAttribute('value'))
    console.log(await element('#id9').getAttribute('value'))


    // totally clear
  })

  it.only('clear test with not react project', async () => {
    await basePage.browser.goTo('https://semantic-ui.com/examples/login.html')

    const username = 'dereva@dereva'
    const password = '123123'
    //set value into input
    await element('[name="email"]').sendKeys(username)
    await element('[name="password"]').sendKeys(password)
    console.log(await element('[name="email"]').getAttribute('value'))
    console.log(await element('[name="password"]').getAttribute('value'))
    console.log('=================================')
    // clear inputs
    await element('[name="password"]').clear()
    await element('[name="email"]').clear()
    console.log(await element('[name="password"]').getAttribute('value'))
    console.log(await element('[name="email"]').getAttribute('value'))
    console.log('=================================')
    await element('[name="email"]').sendKeys(Keys.BACK_SPACE)
    await element('[name="password"]').sendKeys(Keys.BACK_SPACE)
    console.log(await element('[name="password"]').getAttribute('value'))
    console.log(await element('[name="email"]').getAttribute('value'))
    console.log('=================================')
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

  it('link about', async () => {
    // клікаємо з футера лінку на ебаут
    await basePage.fromFooterToAbout()
    // перевіряємо що наш поточний урл містить слово 'about'
    expect(await basePage.returnCurrentUrl()).to.contains('about')
  })

  it('login user', async () => {
    await basePage.login('dereva@dereva', '123123')
    await basePage.browser.sleep(1000)
    expect(await basePage.browser.getUrl()).to.contains('myaccount')
  })
});

//"wd-interface": "git+ssh://git@github.com:potapovDim/interface-webdriver.git#develop",