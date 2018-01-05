const http = require('http')

http.request = ((request) => (opts, ...args) => {
  console.log(opts)
  return request(opts, ...args)
})(http.request.bind(http.request));

describe('Add name', () => {
  const baseURL = 'http://localhost:9090'

  //elements
  const submitFilter = $('.frame-open-button')

 

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.get(baseURL);
    browser.driver.manage().window().setSize(1400, 900);
  });

  it('Success add name', () => {
    {
      submitFilter.click()
    }
    {
      
      browser.executeAsyncScript(function (callback) {
        callback(true)
      }).then(a => {
        console.log(a)
      })
      // browser.switchTo().frame($('#myId').getWebElement())
      // browser.sleep(1500)
      // browser.wait(protractor.ExpectedConditions.visibilityOf($('.ytp-large-play-button.ytp-button')), 5000)
      // $('.ytp-large-play-button.ytp-button').click()
    }
  });
});