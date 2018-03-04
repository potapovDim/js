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

  it.skip('combine data form table and from modal', async () => {
    const modalData = await table.combineDataOneField()
    const tableRowData = await table.combineDataOneFieldTable()
    expect(modalData.length).to.eql(tableRowData.length)
    for (let i = 0; i < modalData.length; i++) {
      expect(modalData[i]).to.eql(tableRowData[i])
    }
  })

  it.skip('sort prices', async () => {
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
  })

  it('combine data form table and from modal scrip ', async () => {
  
    const modalData = await browser.executeScript(function () {

      return [].map.call(document.querySelectorAll('tbody')[1].querySelectorAll('tr'), (tableNode) => {
        tableNode.click()

        const dataObj = {
          price: document.querySelectorAll('.modal_content.p')[0].innerText,
          mass: document.querySelectorAll('.modal_content.p')[1].innerText,
          power: document.querySelectorAll('.modal_content.p')[2].innerText,
          length: document.querySelectorAll('.modal_content.p')[3].innerText,
          width: document.querySelectorAll('.modal_content.p')[4].innerText,
          mark: document.querySelectorAll('.modal_content.p')[5].innerText,
          volume: document.querySelectorAll('.modal_content.p')[6].innerText,
        }
        document.querySelector('.modal .btn').click()
        return dataObj
      })
    })

    const tableRowData = await browser.executeScript(function () {
      return [].map.call(document.querySelectorAll('tbody')[1].querySelectorAll('tr'), (tableNode) => {

        const dataObj = {
          price: tableNode.querySelectorAll('.active')[0].innerText,
          mass: tableNode.querySelectorAll('.active')[1].innerText,
          power: tableNode.querySelectorAll('.active')[2].innerText,
          length: tableNode.querySelectorAll('.active')[3].innerText,
          width: tableNode.querySelectorAll('.active')[4].innerText,
          mark: tableNode.querySelectorAll('.active')[5].innerText,
          volume: tableNode.querySelectorAll('.active')[6].innerText,
        }
        return dataObj
      })
    })
    for (let i = 0; i < modalData.length; i++) {
      expect(modalData[i]).to.eql(tableRowData[i])
    }
  })
})
