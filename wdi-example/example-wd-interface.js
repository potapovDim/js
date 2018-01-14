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
      // console.log(values)
    }
    {
      // await table.clearFilterMark()
      const values = await table.getTablMarks()
      // console.log(values)
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
    const tableLengthBefore = await table.getTableCount()
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
    const tableLengthAfter = await table.getTableCount()
    console.log(tableLengthBefore, tableLengthAfter)
    expect(tableLengthBefore + 1).to.eql(tableLengthAfter)
  })

  it('sort prices', async () => {
    const pricesBeforeSort = await table.getPriceList()
    await table.filterFrom().fromLowToHight()
    const pricesAfterSortToHight = await table.getPriceList()
    expect(pricesAfterSortToHight).to.not.eql(pricesBeforeSort)

    for (let j = 0; j < pricesAfterSortToHight.length - 1 - 1; j++) {
      expect(+pricesAfterSortToHight[j] <= +pricesAfterSortToHight[j + 1]).to.eql(true)
    }

    await table.filterFrom().fromHightToLow()
    const pricesAfterSortToLow = await table.getPriceList()

    for (let j = 0; j < pricesAfterSortToLow.length - 1 - 1; j++) {
      expect(+pricesAfterSortToLow[j] >= +pricesAfterSortToLow[j + 1]).to.eql(true)
    }

    expect(pricesAfterSortToLow).to.not.eql(pricesAfterSortToHight)
  })

  it('sort prices by script', async () => {
    await browser.refresh()
    const results = await browser.executeScript(function () {
      const pricesBeforeSort = [].map.call(document.querySelector('.active.price'), (price) => price.innerText)

      document.querySelector('.btn-group').querySelectorAll('.btn')[0].click()

      const pricesAfterSortToHight = [].map.call(document.querySelector('.active.price'), (price) => price.innerText)

      document.querySelector('.btn-group').querySelectorAll('.btn')[1].click()

      const pricesAfterSortToLow = [].map.call(document.querySelector('.active.price'), (price) => price.innerText)

      let firstAssert = true

      for (let j = 0; j < pricesAfterSortToHight.length - 1 - 1; j++) {
        if (!(+pricesAfterSortToHight[j] <= +pricesAfterSortToHight[j + 1])) {
          firstAssert = false
        }
      }

      let secondAssert = true

      for (let j = 0; j < pricesAfterSortToLow.length - 1 - 1; j++) {
        if (!(+pricesAfterSortToLow[j] >= +pricesAfterSortToLow[j + 1])) {
          secondAssert = false
        }
      }

      return [firstAssert, secondAssert]
    })
    console.log(results)
  })
})
