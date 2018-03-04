

class Table {
  constructor() {
    this.inputFilterMark = $('[placeholder="марка"]')
    this.tableTextContent = $('.table.text-center').$$('tr')
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
    await this.tableTextContent.map((mark) => {
      mark.click()
      const text = $('.modal_content.p').getText()
      $('.modal .btn').click()
      return text
    })

  }
}

module.exports = Table
