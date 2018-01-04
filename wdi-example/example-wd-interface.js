const { expect } = require('chai')

const { client, element } = require('wd-interface')

const ReactChangeEvent = require('../test-example/dispatchChange')

const Table = require('./po/table')

describe('Base tablse example', () => {
  const browser = client().chrome()
  const browserFireFox = client().firefox()

  let table = null
  const baseURL = 'http://localhost:5555'
  const filterValue = 'ITALMIX'
  //selectors

  before(async () => {
    // await browser.startSelenium()
  })

  after(async () => {
    // await browser.stopSelenium()
    console.log(global.___sessionId)
  })

  beforeEach(async () => {
    table = new Table()
    await browser.goTo(baseURL)
    await browserFireFox.goTo(baseURL)
  })

  afterEach(async () => {
    await browserFireFox.closeBrowser()
    await browser.closeBrowser()
  })

  it('initial test', async () => {
  })

  it.skip('combine data', async () => {
    const initialMarks = await table.getTablMarks()
    expect(initialMarks.length).to.eql(79)
  })

  it.skip('combine data from script', async () => {
    const initialMarks = await browser.executeScript(function () {
      return [].map.call(document.querySelectorAll('.active.brand'), (doc) => {
        return doc.innerText
      })
    })

    expect(initialMarks.length).to.eql(79)
  })

  it.skip('from request ', async () => {
    {
      const initialMarks = await table.getTablMarks()
      expect(initialMarks.length).to.eql(79)
    }
    {
      await table.initFilterMark(filterValue)
      const filteredMarks = await table.getTablMarks()
      expect(filteredMarks.length).to.eql(13)
    }
    {
      await table.clearFilterMark()
      const clearFilteredMarks = await table.getTablMarks()
      expect(clearFilteredMarks.length).to.eql(79)
    }
  })

  it.skip('from script', async () => {
    {
      const val = await browser.executeScript(`
        const button = document.querySelector('.btn.btn-default')
        const lengthBefore = document.querySelectorAll('.active.brand').length
        ReactChangeEvent(document.querySelector('[placeholder="марка"]'), 'ITALMIX')
        button.click()
        const lengthAfter = document.querySelectorAll('.active.brand').length
        ReactChangeEvent(document.querySelector('[placeholder="марка"]'), '')
        button.click()
        const lengthAfterClear = document.querySelectorAll('.active.brand').length
        return [lengthBefore, lengthAfter, lengthAfterClear]
      `)
      expect(val).to.eql([79, 13, 79])
    }
  })
})