const { expect } = require('chai')
const { client } = require('wd-interface')
const Login = require('./po/login')

describe('Base table test ', () => {
  const browser = client().chrome()

  let table = null

  const loginPage = new Login()
  const baseURL = 'http://localhost:5555'
  const filterValue = 'ITALMIX'
  //selectors

  before(async () => {
    await browser.startSelenium()
    await browser.goTo(baseURL)
  })

  after(async () => {
    await browser.closeBrowser()
    await browser.stopSelenium()
  })

  it('success login', async () => {
    table = await loginPage.login('test', 'test')
  })

  it('filter fields', async () => {
    {
      // await table.initFilterMark(filterValue)
      const values = await table.getTablMarks()
      console.log(values)
    }
    {
      // await table.clearFilterMark()
      const values = await table.getTablMarks()
      console.log(values)
    }
  })

  it('combineDataOneField', async () => {
    const modalData = await table.combineDataOneField()
    const tableRowData = await table.combineDataOneFieldTable()
    expect(modalData.length).to.eql(tableRowData.length)
    for (let i = 0; i < modalData.length; i++) {
      expect(modalData[i]).to.eql(tableRowData[i])
    }
  })
})
