const { expect } = require('chai')

const { client, element } = require('wd-interface')

describe('Base tablse example', () => {
  let browser = null
  const baseURL = 'http://localhost:5555'
  const filterValue = 'ITALMIX'
  //selectors
  const filterbutton = '.btn.btn-default'
  const mark = '[placeholder="марка"]'
  const markvalue = '.active.brand'
  const volumevalue = '.active.volume'
  const price = '.active.price'
  const tableresult = '.table.text-center'
  //elements
  const submitFilter = element(filterbutton)

  const markInput = element(mark)

  const tableResult = element(tableresult)

  before(async () => {
    browser = client().chrome() // for dirrect connection to chromedriver client().chrome(true)
    await browser.goTo(baseURL)
  })

  // after(async () => {
  //   await browser.closeBrowser()
  // })

  it('search git hub potapovDim', async () => {
    {
      const tableResultsMarks = await tableResult.getElements('.active.brand')
      const resultsMarks = await tableResultsMarks.mappy(async (mark) => await mark.getText())
      expect(resultsMarks.length).to.eql(79)
    }
    {
      await markInput.sendKeys(filterValue)
      await submitFilter.click()
      const tableResultsMarks = await tableResult.getElements('.active.brand')
      const resultsMarks = await tableResultsMarks.mappy(async (mark) => await mark.getText())
      expect(resultsMarks.length).to.eql(13)
      resultsMarks.forEach(mark => {
        expect(mark).to.include(filterValue)
      })
    }
    {
      await markInput.clear()
      await submitFilter.click()
      const tableResultsMarks = await tableResult.getElements('.active.brand')
      const resultsMarks = await tableResultsMarks.mappy(async (mark) => await mark.getText())
    }
  })
})