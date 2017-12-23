const { expect } = require('chai')

const { client, element, elements } = require('wd-interface')

const Landing = require('/Users/potapopweblium/Documents/js-trash/weblium/landing.selectors')
const Footer = require('./footer')

describe('Weblium base example', () => {
  let browser = null
  const baseURL = 'https://weblium.com/'

  const pricing = element(Landing.pricing)
  const about = element(Landing.about)
  const footer = new Footer()
  //selectors

  before(async () => {
    browser = client().chrome() // for dirrect connection to chromedriver client().chrome(true)
    await browser.goTo(baseURL)
  })

  after(async () => {
    await browser.closeBrowser()
  })

  it('assert base url', async () => {
    const url = await browser.getUrl()
    expect(url).to.eql(baseURL)
  })

  it.only("find footer", async () => {
    await footer.clickAbout()
  })

  it('click pricing', async () => {
    await pricing.waitForElement(2000)
    await pricing.click()
    const url = await browser.getUrl()

    expect(url).to.contains('pricing')

    const borderPricing = element('body').getElements('.border')

    expect(await borderPricing.count()).to.eql(5)
  })

  it('click about', async () => {
    await about.click()

    const url = await browser.getUrl()

    expect(url).to.contains('about')
    const aboutContainer = element('body').getElements('.container')

    expect(await aboutContainer.count()).to.eql(7)
  })

  it('login to my account', async () => {
    const login = element(Landing.login)
    await login.click()
    const url = await browser.getUrl()
    expect(url).to.contains('login')

    const email = element(Landing.loginForm.email)
    const password = element(Landing.loginForm.password)
    const submitLogin = element(Landing.loginForm.submitLogin)

    expect(await email.isDisplayed()).to.eql(true)
    expect(await password.isDisplayed()).to.eql(true)
    expect(await submitLogin.isDisplayed()).to.eql(true)

    await email.sendKeys('dereva@dereva')
    await password.sendKeys('123123')
    await submitLogin.click()

    await browser.sleep(1500)

    expect(await browser.getUrl()).to.contains('myaccount/websites')

  })

  it("go to my profile", async () => {
    const profile = element(Landing.myAccount.leftMenuProfile)

    expect(await profile.isPresent()).to.eql(true)
    await profile.click()
    expect(await browser.getUrl()).to.contains('profile')
  })
})