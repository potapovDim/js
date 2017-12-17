const { expect } = require('chai')

const { client, element } = require('wd-interface')

const Landing = require('./landing.selectors')

describe('Weblium base example', () => {
  let browser = null
  const baseURL = 'https://weblium.com/'

  const pricing = element(Landing.pricing)
  const about = element(Landing.about)

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

  it('click pricing', async () => {
    await pricing.waitForElement(2000)
    await pricing.click()
    const url = await browser.getUrl()
    expect(url).to.contains('pricing')

    const body = element('body')

    const borderPricing = await body.getElements('.border')

    expect(borderPricing.length).to.eql(5)
  })

  it('click about', async () => {
    await about.click()

    const url = await browser.getUrl()

    expect(url).to.contains('about')
    const body = element('body')
    const aboutContainer = await body.getElements('.container')
    expect(aboutContainer.length).to.eql(7)
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