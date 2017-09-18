// module.exports = {
//   'Success add name': function (browser) {

//     const firstName = 'input[placeholder="firstname"]';
//     const lastName = 'input[placeholder="lastname"]';




//     const input = 'input';
//     const button = 'button';
//     const text = 'span';
//     const addNammeButton = 'button:nth-child(3)'
//     const testValue = 'test 1'
//     browser.url('http://localhost:9090')
//       .waitForElementPresent('body', 1500)
//       .setValue('.name', testValue)
//       .click(addNammeButton)
//       .getText('.span', function (result) {
//         this.assert.equal(result.value.includes(testValue), true);
//       })
//       .end();
//   },
//   'Empty value': function (browser) {
//     const addNammeButton = 'button:nth-child(3)'
//     const testValue = ''
//     browser.url('http://localhost:9090')
//       .waitForElementPresent('body', 1500)
//       .setValue('.name', testValue)
//       .click(addNammeButton)
//       .waitForElementNotPresent('.span', 1000)
//       .end();
//   },
//   'Huge value': function (browser) {
//     const addNammeButton = 'button:nth-child(3)'
//     const testValue = '12345678901234567890123456'
//     browser.url('http://localhost:9090')
//       .waitForElementPresent('body', 1500)
//       .setValue('.name', testValue)
//       .click(addNammeButton)
//       .waitForElementNotPresent('.span', 1000)
//       .end();
//   }
// };

