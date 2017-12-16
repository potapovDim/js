const { expect } = require('chai')

const { client, element } = require('wd-interface')

describe('Weblium base example', () => {
  let browser = null
  const baseURL = 'https://weblium.com/'

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

})