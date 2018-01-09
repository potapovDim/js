const Table = require('./po-protractor/table')
const Login = require('./po-protractor/login')


describe('Base table test protractor', () => {
  const loginPage = new Login()
  let table = null
  const filterValue = 'ITALMIX'

  before(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get(browser.baseUrl);
    await browser.driver.manage().window().setSize(1400, 900);
  })

  after(async () => {
    await browser.close()
  })

  it('success login', async () => {
    table = await loginPage.login('test name', 'test pass')
  })

  it('filter fields', async () => {
    {
      // await table.initFilterMark(filterValue)
      const values = await table.getTablMarks()
      console.log(values)
    }
    {
    //  await table.clearFilterMark()
     const values = await table.getTablMarks()

     console.log(values)
    }
  })
})
