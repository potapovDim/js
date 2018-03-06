const http = require('http')
describe('angularjs homepage todo list', function () {
  it('should add a todo', function () {
    browser.waitForAngularEnabled(false)
    browser.get('localhost:9090');
    $('.frame-open-button').click()
    browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
    browser.sleep(1500)
    $('.ytp-large-play-button.ytp-button').click()
    browser.sleep(2500)
    http.request = ((request) => (opts, ...args) => {
      console.log(opts, args)
      return request(opts, ...args)
    })(http.request.bind(http.request));
    browser.switchTo().defaultContent();
    $('a[href="/new-tab"]').click()
    browser.sleep(2500)
  });
});