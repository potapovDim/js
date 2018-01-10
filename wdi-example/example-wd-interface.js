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

  it('resize element', async () => {
    const resizeArray = await table.resizeFilterButton()
    expect(resizeArray[0]).to.includes('100')
  })

  it.skip('combineDataOneField', async () => {
    const modalData = await table.combineDataOneField()
    const tableRowData = await table.combineDataOneFieldTable()
    expect(modalData.length).to.eql(tableRowData.length)
    for (let i = 0; i < modalData.length; i++) {
      expect(modalData[i]).to.eql(tableRowData[i])
    }
  })

  it('add machine', async () => {
    const machine = {
      price: '1200',
      mass: '10',
      power: '1.4',
      length: '6.4',
      width: '2.5',
      mark: 'SUPER TEST MIX 1',
      volume: '5.6'
    }
    await table.addNewMachine(machine)
    await browser.sleep(3000)
    console.log(await table.getTableCount())
  })
})
