const { element } = require('wd-interface')

class Table {
  constructor() {
    this.inputFilterMark = element('[placeholder="марка"]')
    this.tableTextContent = element('.table.text-center').getElements('.active.brand')
    this.submitFilter = element('.btn.btn-default')
  }

  async initFilterMark(filterValue) {
    await this.inputFilterMark.sendKeys(filterValue)
    await this.submitFilter.click()
  }

  async clearFilterMark() {
    await this.inputFilterMark.clear()
    await this.submitFilter.click()
  }

  async getTablMarks() {
    // await this.tableTextContent.waitForElements(1000)
    return this.tableTextContent.map(async (mark) => await mark.getText())
  }
}

module.exports = Table
