const { doActionInModuleb } = require('./moduleb')
const requestInterface = require('./modulea')

class ModuleB {
  constructor(URL) {
    requestInterface.baseurl = URL
    console.log(requestInterface.baseurl)
  }

  someDo() {
    doActionInModuleb()
  }
}

module.exports = {
  ModuleB
}
