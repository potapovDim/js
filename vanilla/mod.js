//facade pattern
const md = (function () {
  const __private = {
    i: 0,
    get: function () {
      return this.i
    },
    set: function (value) {
      this.i = value
    },
    run: function () {
      console.log('run facade')
    },
    jump: function () {
      console.log('process jump')
    }
  }
  return {
    facade: function (args) {
      __private.set(args)
      if (args.run) {
        __private.run()
      }
      if (args.get)
        return __private.get()
    }
  }
})()

const proc = md.facade({ a: 'b', run: true, get: true })
console.log(proc)
