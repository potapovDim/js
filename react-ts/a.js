// function A() {
//   const self = this
//   this.waitForElementPresent = function (selector, timeout) {
//     console.log(selector, timeout)
//     // return self;
//   }
//   this.setValue = function (selector, value) {
//     console.log(selector, value)
//     // return self;
//   }
//   this.click = function (selector) {
//     console.log(selector)
//     // return self
//   }
//   console.log(this)
// }

// const browser = new A()
// browser.waitForElementPresent('body', 1000)
// browser.setValue('input', 'value test')