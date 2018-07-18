const { expect } = require('chai');

describe('Add name', () => {
  const input = 'input';
  const button = 'button';
  const text = 'span';
  const addNammeButton = 'button:nth-child(3)';
  beforeEach(() => {
    browser.url('http://localhost:9090');
    browser.windowHandleSize({ width: 1400, height: 900 });
  })
  it('Success add name', () => {
    const testValue = 'test 1'
    expect(browser.elements(text).value.length).to.eql(1);
    browser.setValue(input, testValue);
    browser.click(addNammeButton);
    expect(browser.elements(text).value.length).to.eql(2);
    expect($$(text)[1].getText()).to.include(testValue);
  });
});