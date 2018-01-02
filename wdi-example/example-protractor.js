const Table = require('./po/table.protractor')


describe('Base table example protractor', () => {
  let table = null
  const baseURL = 'http://localhost:5555'
  const filterValue = 'ITALMIX'


  beforeEach(() => {
    table = new Table()
    browser.waitForAngularEnabled(false);
    browser.get(baseURL);
    browser.driver.manage().window().setSize(1400, 900);
  })

  afterEach(() => {
    browser.close()
  })
  it('Success add name', () => {
    {
      const initialMarks = table.getTablMarks()
      initialMarks.then(arr => {
        expect(arr.length).toEqual(79)
      })
    }
    {
      table.initFilterMark(filterValue)
      const filteredMarks = table.getTablMarks()
      filteredMarks.then(arr => {
        expect(arr.length).toEqual(13)
      })
    }
    {
      table.clearFilterMark()
      const clearFilteredMarks = table.getTablMarks()
      clearFilteredMarks.then(arr => {
        expect(arr.length).toEqual(79)
      })
    }
  })
})
