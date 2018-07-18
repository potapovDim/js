const { expect } = require('chai')

const { client, element, elements } = require('wd-interface')

const ReactChangeEvent = require('../test-example/dispatchChange')

const Table = require('./po/table')

describe('Base tablse example', () => {
  const browser = client().chrome()
  const browserFireFox = client().firefox()

  let table = null
  const baseURL = 'http://localhost:5555'
  const filterValue = 'ITALMIX'
  //selectors

  const price = '[placeholder="Ціна"]'
  const mass = '[placeholder="Масса ,кг"]'
  const power = '[placeholder="Потужність трактора , кВт"]'
  const length = '[placeholder="Довжина ,метрів"]'
  const width = '[placeholder="Ширина ,метрів"]'
  const mark = '[placeholder="Марка"]'
  const volume = '[placeholder="Робочий о\'єм , метрів кубічних"]'

  const dataObj = {
    [price]: '1200',
    [mass]: '10',
    [power]: '1.4',
    [length]: '6.4',
    [width]: '2.5',
    [mark]: 'SUPER TEST MIX 1',
    [volume]: '5.6'
  }

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
    // await browserFireFox.goTo(baseURL)
  })

  afterEach(async () => {
    // await browserFireFox.closeBrowser()
    await browser.closeBrowser()
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
    expect(tableLengthBefore + 1).to.eql(tableLengthAfter)
  })

  it('resize element', async () => {
    const resizeArray = await table.resizeFilterButton()
    expect(resizeArray[0]).to.includes('100')
  })

  it('initial test set data from element', async () => {

    await element(price).sendKeys('12000')
    await element(mass).sendKeys('10')
    await element(power).sendKeys('1.4')
    await element(length).sendKeys('6.4')
    await element(width).sendKeys('2.5')
    await element(mark).sendKeys('SUPER TEST MIX 1')
    await element(volume).sendKeys('5.6')

    const inputsValue = await element('.success.inputs').getElements('input').map(async (inp) => {
      return await inp.getAttribute('value')
    })
    console.log(inputsValue)
  })

  it("initial test set data from script", async () => {
    const returner = (arg) => arg
    const inputsValue = await browser.executeScript(function (...args) {
      const [price, mass, power, length, width, mark, volume, returner] = args
      args.forEach(selector => {
        ReactChangeEvent(document.querySelector(selector), 'test')
      })
      return args.map(selector => document.querySelector(selector).value)
    }, price, mass, power, length, width, mark, volume)
    console.log(inputsValue)
  })

  it('combine data', async () => {
    const initialMarks = await table.getTablMarks()
    expect(initialMarks.length).to.eql(79)
  })

  it('combine data from script', async () => {
    const initialMarks = await browser.executeScript(function () {
      return [].map.call(document.querySelectorAll('.active.brand'), (doc) => {
        return doc.innerText
      })
    })

    expect(initialMarks.length).to.eql(79)
  })

  it("combine data modal from script one field ", async () => {
    const textInsideModal = await browser.executeScript(function (params) {

      return [].map.call(document.querySelectorAll('tbody')[1].querySelectorAll('tr'), (tableNode) => {
        tableNode.click()

        const brand = document.querySelector('.modal p').innerText

        document.querySelector('.modal .btn').click()
        return brand
      })
    })
    console.log(textInsideModal)
  })

  it("combine data modal", async () => {
    const tableBody = await elements('tbody').get(1)
    const trArr = tableBody.getElements('tr')

    const textInsideModal = await trArr.map(async (el) => {
      await el.click()
      const mark = await element('.modal p').getText()
      await element('.modal .btn').click()
      return mark
    })

    console.log(textInsideModal)
  })


  it("combine data modal from script ", async () => {
    const textInsideModal = await browser.executeScript(function (params) {

      return [].map.call(document.querySelectorAll('tbody')[1].querySelectorAll('tr'), (tableNode) => {
        tableNode.click()
        const allInfo = {
          brand: document.querySelectorAll('.modal p')[0].innerText,
          volume: document.querySelectorAll('.modal p')[1].innerText,
          length: document.querySelectorAll('.modal p')[2].innerText,
          width: document.querySelectorAll('.modal p')[3].innerText,
          weight: document.querySelectorAll('.modal p')[4].innerText,
          power: document.querySelectorAll('.modal p')[5].innerText,
          price: document.querySelectorAll('.modal p')[6].innerText,
        }

        document.querySelector('.modal .btn').click()
        return allInfo
      })
    })
    console.log(textInsideModal)
  })

  it.only("combine data modal", async () => {
    const tableBody = await elements('tbody').get(1)
    const trArr = tableBody.getElements('tr')

    const textInsideModal = await trArr.map(async (el) => {
      await el.click()
      const pInModal = elements('.modal p')
      const allInfo = {
        brand: await (await pInModal.get(0)).getText(),
        volume: await (await pInModal.get(1)).getText(),
        length: await (await pInModal.get(2)).getText(),
        width: await (await pInModal.get(3)).getText(),
        weight: await (await pInModal.get(4)).getText(),
        power: await (await pInModal.get(5)).getText(),
        price: await (await pInModal.get(6)).getText(),
      }
      await element('.modal .btn').click()
      return allInfo
    })

    console.log(textInsideModal)
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


// it.only("combine data modal from script ", async () => {
//   const textInsideModal = await browser.executeScript(function (params) {

//     return [].map.call(document.querySelectorAll('tbody')[1].querySelectorAll('tr'), (tableNode) => {
//       tableNode.click()

//       const brand = document.querySelectorAll('.modal p').innerText


//       document.querySelector('.modal .btn').click()
//       return allInfo
//     })
//   })
//   console.log(textInsideModal)
// })

// it.only("combine data modal from script", async () => {
//   const tableBody = await elements('tbody').get(1)
//   const trArr = tableBody.getElements('tr')

//   const textInsideModal = await trArr.map(async (el) => {
//     await el.click()
//     const mark = await element('.modal p').getText()
//     await element('.modal .btn').click()
//     return mark
//   })

//   console.log(textInsideModal)
// })