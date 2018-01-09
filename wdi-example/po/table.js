const { element, elements } = require('wd-interface')

class Table {
  constructor() {
    this.inputFilterMark = element('[placeholder="марка"]')
    this.tableTextContent = element('.table.text-center').getElements('.active.brand')
    this.submitFilter = element('.btn.btn-default')
  }

  async initFilterMark(filterValue) {
    await this.inputFilterMark.waitForElement(1000)
    await this.inputFilterMark.sendKeys(filterValue)
    await this.submitFilter.click()
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
}

module.exports = Table
