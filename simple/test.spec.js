const { expect } = require('chai')

const { browser, element } = require('wd-interface')

describe('browser', () => {
    let browser_api = null

    const baseURL = 'https://weblium.com/'
    const login = element('[href="https://weblium.com/login"]')
    const email = element('[name="email"]')
    const password = element('[name="password"]')

    beforeEach(async () => {
        browser_api = browser().chrome()
        await browser_api.goTo(baseURL)
    })
    afterEach(async () => {
        await browser_api.closeBrowser()
    })
    it('send keys to element and get attribure', async () => {
        await login.click()
        await email.sendKeys('test@test')
        await password.sendKeys('123123')
    })
})