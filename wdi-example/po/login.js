const { element, elements } = require('wd-interface')

const Table = require('./table')

class Login {
  constructor() {
    this.username = element('[placeholder="ім\'я"]')
    this.password = element('[placeholder="пароль"]')
    this.loginButton = element('.btn.btn-primary')
  }

  async login(name, password) {
    await this.username.sendKeys(name)
    await this.password.sendKeys(password)
    await this.loginButton.click()
    return new Table()
  }
}

module.exports = Login