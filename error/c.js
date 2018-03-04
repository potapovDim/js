const GooDB = require('./b')

class GooDC {
  constructor() {
    this.bInstance = new GooDB()
  }

  firstF() {
    this.bInstance.firstF()
  }
}



module.exports = GooDC