describe('Add name', () => {
  const input = 'input';
  const button = 'button';
  const text = 'span';
  const addNammeButton = 'button:nth-child(3)';
  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:9090');
    browser.driver.manage().window().setSize(1400, 900);
  });
  it('Success add name', () => {
    const testValue = 'test 1'
    const todoList = element.all(by.css(text));
    expect(todoList.count()).toEqual(1);
    element(by.css(input)).sendKeys(testValue);
    element(by.css(addNammeButton)).click();
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toContain(testValue);
  });
  it('Empty name', () => {
    const testValue = '';
    const todoList = element.all(by.css(text));
    expect(todoList.count()).toEqual(1);
    element(by.css(input)).sendKeys(testValue);
    element(by.css(addNammeButton)).click();
    expect(todoList.count()).toEqual(1);
  });
  it('Huge name', () => {
    const testValue = '12345678901234567890123456'
    const todoList = element.all(by.css(text));
    expect(todoList.count()).toEqual(1);
    element(by.css(input)).sendKeys(testValue);
    element(by.css(addNammeButton)).click();
    expect(todoList.count()).toEqual(1);
  });
});