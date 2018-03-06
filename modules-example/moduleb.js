const { requester } = require('./modulea')

function doActionInModuleb() {
  requester()
}

module.exports = {
  doActionInModuleb
}