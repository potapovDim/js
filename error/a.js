const GoodError = require('./error')

class GooDA {
  constructor() { }

  firstF() {
    throw new GoodError('This is good error')
  }
}


module.exports = GooDA