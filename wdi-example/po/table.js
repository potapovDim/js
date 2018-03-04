const { element, elements } = require('wd-interface')

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

const dataObjTo = {
  price: '1200',
  mass: '10',
  power: '1.4',
  length: '6.4',
  width: '2.5',
  mark: 'SUPER TEST MIX 1',
  volume: '5.6'
}

class Table {
  constructor() {
    this.inputFilterMark = element('[placeholder="марка"]')
    this.tableTextContent = element('.table.text-center').getElements('.active.brand')
    this.tableTextPrice = element('.table.text-center').getElements('.active.price')
    this.submitFilter = element('.btn.btn-default')
    this.sortGroupButtons = element('.btn-group').getElements('button.btn')

    this.submitAddButton = element('.btn.btn-success')

    this.price = element('[placeholder="Ціна"]')
    this.mass = element('[placeholder="Масса ,кг"]')
    this.power = element('[placeholder="Потужність трактора , кВт"]')
    this.length = element('[placeholder="Довжина ,метрів"]')
    this.width = element('[placeholder="Ширина ,метрів"]')
    this.mark = element('[placeholder="Марка"]')
    this.volume = element('[placeholder="Робочий о\'єм , метрів кубічних"]')
  }

  async initFilterMark(filterValue) {
    await this.inputFilterMark.waitForElement(1000)
    await this.inputFilterMark.sendKeys(filterValue)
    await this.submitFilter.click()
  }

  async getTableCount() {
    return await this.tableTextContent.count()
  }

  async clearFilterMark() {
    await this.inputFilterMark.waitForElement(1000)
    await this.inputFilterMark.clear()
    await this.submitFilter.click()
  }

  async combineDataOneField() {
    const tableBody = await elements('tbody').get(1)
    const trArr = tableBody.getElements('tr')
    const textInsideModal = await trArr.map(async (el) => {
      await el.click()

      const pElements = elements('.modal p')

      const dataObj = {
        price: await (await pElements.get(0)).getText(),
        mass: await (await pElements.get(1)).getText(),
        power: await (await pElements.get(2)).getText(),
        length: await (await pElements.get(3)).getText(),
        width: await (await pElements.get(4)).getText(),
        mark: await (await pElements.get(5)).getText(),
        volume: await (await pElements.get(6)).getText(),
      }
      await element('.modal .btn').click()
      return dataObj
    })

    return textInsideModal
  }

  async combineDataOneFieldTable() {
    const tableBody = await elements('tbody').get(1)
    const trArr = tableBody.getElements('tr')

    const textInsideModal = await trArr.map(async (el) => {
      const tdElements = el.getElements('td')
      const dataObj = {
        price: await (await tdElements.get(0)).getText(),
        mass: await (await tdElements.get(1)).getText(),
        power: await (await tdElements.get(2)).getText(),
        length: await (await tdElements.get(3)).getText(),
        width: await (await tdElements.get(4)).getText(),
        mark: await (await tdElements.get(5)).getText(),
        volume: await (await tdElements.get(6)).getText(),
      }
      return dataObj
    })

    return textInsideModal
  }

  async getTablMarks() {
    await this.tableTextContent.waitForElements(1000)
    return this.tableTextContent.map(async (mark) => await mark.getText())
  }

  async resizeFilterButton() {
    const beforeResize = await this.submitFilter.getAttribute('style')
    await this.submitFilter.mouseDownAndMove({ x: 100, y: 0 })
    const afterResize = await this.submitFilter.getAttribute('style')

    return [beforeResize, afterResize]
  }

  async addNewMachine(dataObj) {
    const keys = Object.keys(dataObj)
    for (const key of keys) {
      await this[key].sendKeys(dataObj[key])
    }
    await this.submitAddButton.click()
  }

  filterFrom() {
    const self = this
    return {
      fromLowToHight: async () => await (await self.sortGroupButtons.get(0)).click(),
      fromHightToLow: async () => await (await self.sortGroupButtons.get(1)).click()
    }
  }

  async getPriceList() {
    const prices = await this.tableTextPrice.map(async (el) => await el.getText())
    return prices
  }
}

module.exports = Table
