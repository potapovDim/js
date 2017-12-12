describe('Add name', () => {
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
  const submitFilter = $(filterbutton)

  const markInput = $(mark)

  const tableResult = $(tableresult)

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.get(baseURL);
    browser.driver.manage().window().setSize(1400, 900);
  });
  it('Success add name', () => {
    {
      markInput.sendKeys(filterValue)
      const brands = tableResult.$$('.active.brand')
      expect(brands.count()).toEqual(79)
    }
    {
      submitFilter.click()
      const brands = tableResult.$$('.active.brand')
      expect(brands.count()).toEqual(13)
    }
    {
      markInput.clear()
      markInput.sendKeys('')
      submitFilter.click()
      const brands = tableResult.$$('.active.brand')
      expect(brands.count()).toEqual(79)
    }
  });
});