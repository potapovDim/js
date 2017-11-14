const mediator = (function () {
  const unsubscribe = function () {
    const [channel] = arguments
    if (mediator.chanenels[channel]) {
      Reflect.deleteProperty(mediator.chanenels, channel)
    }
  }
  const publish = function () {
    const [channel, ...rest] = arguments
    if (!mediator.chanenels[channel]) return false
    for (let i = 0, l = mediator.chanenels[channel].length; i < l; i++) {
      const subscription = mediator.chanenels[channel][i];
      subscription.callback.apply(subscription.context, rest)
    }
  }
  const subscribe = function () {
    const [channel, fn] = arguments
    if (!mediator.chanenels[channel]) {
      mediator.chanenels[channel] = []
      mediator.chanenels[channel].push({ context: this, callback: fn })
      return { unsubscribe: unsubscribe.bind(this, channel) }
    }
  }

  return {
    chanenels: {},
    publish: publish,
    subscribe: subscribe,
    installTo: function (obj) {
      obj.subscribe = subscribe
      obj.publish = public
    }
  }
}())

mediator.chanenels

const subscription = mediator.subscribe('test', (args) => {
  console.log(args)
})

mediator.publish('test', { 'test': 1 })
mediator.publish('test', { 'test': 2 })

subscription.unsubscribe()

mediator.publish('test', { 'test': 2 })