

class Table {
  constructor() {
    this.inputFilterMark = $('[placeholder="марка"]')
    this.tableTextContent = $('.table.text-center').$$('.active.brand')
    this.submitFilter = $('.btn.btn-default')
  }

  async initFilterMark(filterValue) {
    await this.inputFilterMark.sendKeys(filterValue)
    await this.submitFilter.click()
  }

  async clearFilterMark() {
    await this.inputFilterMark.clear()
    await this.inputFilterMark.sendKeys(protractor.Key.BACK_SPACE)
    await this.submitFilter.click()
  }

  async getTablMarks() {
    return await this.tableTextContent.map((mark) => mark.getText())
  }
}

module.exports = Table
