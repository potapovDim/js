function waitDomState(conditionFn, time) {
  const now = +Date.now()
  const callTime = 1

  function asyncCall(callback, timeout) {
    setTimeout(function () {
      return callback(conditionFn())
    }, callTime)
  }

  function recursiveCall(resolve) {
    const timeDiffState = (+Date.now() - now) < time
    asyncCall(function (data) {
      if (timeDiffState && !data) {
        recursiveCall(resolve)
      } else if (data) {
        resolve(data)
      } else {
        resolve(false)
      }
    }, callTime)
  }
  return new Promise(function (resolve) {
    recursiveCall(resolve)
  })
}

async function startTest(params) {
  const domLoaded = await waitDomState(
    () => document.readyState === 'complete',
    500
  )
  if (domLoaded) {
    const { work } = await fetch('http://localhost:9090/', {
      node: 'no-cors',
      method: "POST",
      body: JSON.stringify({ test: '' })
    }).then(resp => resp.json())
    if (work) {
      ReactChangeEvent(document.querySelector('[placeholder="ім\'я"]'), 'test')
      ReactChangeEvent(document.querySelector('[placeholder="пароль"]'), 'test')
      document.querySelector('button').click()
    }
  }
}

startTest()


