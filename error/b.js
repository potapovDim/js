const GooDA = require('./a')

class GooDB {
  constructor() {
    this.aInstance = new GooDA()
  }

  firstF() {
    this.aInstance.firstF()
  }
}

module.exports = GooDB