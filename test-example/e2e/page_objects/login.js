const {elements, element} = require('../driver')

class Login {
  constructor() {
    this.root = element('.modal').waitForElement(1500)
    this.name = this.root.elements('input.form-control').get(0)
    this.password = this.root.elements('input.form-control').get(1)
    this.logButton = this.root.element('.btn.btn-primary')
  }
  async login({name, password}) {
    await this.name.sendKeys(name)
    await this.password.sendKeys(password)
    await this.logButton.click()
  }
}

module.exports = {
  Login
}