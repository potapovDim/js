class GoodError extends Error {
  constructor(...args) {
    super(...args)
    Error.captureStackTrace(this, GoodError)
  }
}


module.exports = GoodError