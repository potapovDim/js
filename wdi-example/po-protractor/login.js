const Table = require('./table')

class Login {
  constructor() {
    this.username = $('[placeholder="ім\'я"]')
    this.password = $('[placeholder="пароль"]')
    this.loginButton = $('.btn.btn-primary')
  }

  async login(name, password) {
    await this.username.sendKeys(name)
    await this.password.sendKeys(password)
    await this.loginButton.click()
    return new Table()
  }
}

module.exports = Login