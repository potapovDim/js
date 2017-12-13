

class Table {
  constructor() {
    this.inputFilterMark = $('[placeholder="марка"]')
    this.tableTextContent = $('.table.text-center')
    this.submitFilter = $('.btn.btn-default')
  }

  initFilterMark(filterValue) {
    this.inputFilterMark.sendKeys(filterValue)
    this.submitFilter.click()
  }

  clearFilterMark() {
    this.inputFilterMark.clear()
    this.submitFilter.click()
  }

  getTablMarks() {
    const markElements = this.tableTextContent.$$('.active.brand')
    return markElements.map((mark) => mark.getText())
  }
}

module.exports = Table
