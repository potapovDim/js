module.exports = {
  'Success add name': function (browser) {
    const firstName = 'input[placeholder="firstname"]';
    const lastName = 'input[placeholder="lastname"]';
    const text = 'span';
    const button = 'button';
    const testFirstName = 'TestFirstName';
    const testLastName = 'TestLastName';

    browser.url('http://localhost:9090') 
      .waitForElementPresent('body', 1500)
      .setValue(firstName, testFirstName)
      .setValue(lastName, testLastName)
      .click('button')
      .elements('css selector', text, (result) => {
        browser.assert.ok(result.value.length == 2);
        browser.elementIdText(result.value[1].ELEMENT, (text) => {
          browser.assert.ok(text.value.includes(testFirstName) && text.value.includes(testLastName))
        });
      })
      .elements('css selector', button, (result) => {
        browser.assert.ok(result.value.length == 3);
        browser.elementIdClick(result.value[2].ELEMENT);
      })
      .end();
  },
  'Empty value': function (browser) {
    const firstName = 'input[placeholder="firstname"]';
    const lastName = 'input[placeholder="lastname"]';
    const text = 'span';
    const button = 'button';
    const testFirstName = 'TestFirstName';
    const testLastName = 'TestLastName';

    browser.url('http://localhost:9090') //перехід на сторінку 
      .waitForElementPresent('body', 1500) //очікуєм тіло хтмл
      .setValue(firstName, '') //вводимо значенн 
      .click('button') //клік
      .elements('css selector', button, (result) => {
        browser.assert.ok(result.value.length == 1);
      })
      .setValue(firstName, testFirstName)
      .setValue(lastName, '')
      .click('button')
      .elements('css selector', button, (result) => {
        browser.assert.ok(result.value.length == 1);
      })
      .setValue(firstName, testFirstName)
      .setValue(lastName, testLastName)
      .click('button')
      .elements('css selector', text, (result) => {
        browser.assert.ok(result.value.length == 2);
        browser.elementIdText(result.value[1].ELEMENT, (text) => {
          browser.assert.ok(text.value.includes(testFirstName) && text.value.includes(testLastName))
        });
      })
      .elements('css selector', button, (result) => {
        browser.assert.ok(result.value.length == 3);
        browser.elementIdClick(result.value[2].ELEMENT);
      })
      .end();
  },
  'Remove names': function (browser) {
    const firstName = 'input[placeholder="firstname"]';
    const lastName = 'input[placeholder="lastname"]';
    const text = 'span';
    const button = 'button';
    const testFirstName = 'valid name';
    const testLastName = 'valid last name';

    browser.url('http://localhost:9090')
      .waitForElementPresent('body', 1500)
      .setValue(firstName, testFirstName)
      .setValue(lastName, testLastName)
      .click('button')
      .setValue(firstName, testFirstName)
      .setValue(lastName, testLastName)
      .click('button')
      .elements('css selector', button, (result) => {
        browser.assert.ok(result.value.length == 4);
      })
      .elements('css selector', button, (result) => {
        browser.elementIdClick(result.value[3].ELEMENT)
      })
      .elements('css selector', button, (result) => {
        browser.assert.ok(result.value.length == 3);
      })
      .end()
  },
  'Remove names': function (browser) {
    const firstName = 'input[placeholder="firstname"]';
    const lastName = 'input[placeholder="lastname"]';
    const text = 'span';
    const button = 'button';
    const testFirstName = 'valid name';
    const testLastName = 'valid last name';

    browser.url('http://localhost:9090')
      .waitForElementPresent('body', 1500)
      .setValue(firstName, 'bbb')
      .setValue(lastName, 'bbb')
      .click('button')
      .setValue(firstName, 'aaa')
      .setValue(lastName, 'aaa')
      .click('button')
      .elements('css selector', text, (result) => {
        browser.assert.ok(result.value.length == 3);
      })
      .elements('css selector', button, (result) => {
        browser.elementIdClick(result.value[1].ELEMENT)
      })
      .elements('css selector', text, (result) => {
        browser.elementIdText(result.value[2].ELEMENT, (result) => {
          browser.assert.ok(result.value.includes('bbb'));
        })
      })
      .end()
  },
  'Huge value': function (browser) {
    const firstName = 'input[placeholder="firstname"]';
    const lastName = 'input[placeholder="lastname"]';
    const text = 'span';
    const button = 'button';
    const testFirstName = 'TestFirstNameTestFirstName';
    const testLastName = 'TestLastNameTestLastNameNe';

    browser.url('http://localhost:9090')
      .waitForElementPresent('body', 1500)
      .setValue(firstName, testFirstName)
      .setValue(lastName, '')
      .click('button')
      .elements('css selector', button, (result) => {
        browser.assert.ok(result.value.length == 1);
      })
      .setValue(lastName, testLastName)
      .click('button')
      .elements('css selector', text, (result) => {
        browser.assert.ok(result.value.length == 1);
      })
      .setValue(lastName, testLastName)
      .setValue(firstName, testLastName)
      .click('button')
      .elements('css selector', button, (result) => {
        browser.assert.ok(result.value.length == 1);
      })
      .end();
  }
};
