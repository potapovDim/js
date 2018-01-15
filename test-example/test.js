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

const getPrices = () => {
  return [].map.call(document.querySelector('.active.price'), (price) => price.innerText)
}



const requestsArr = []

const serverConnect = async (data) => {
  const responseData = await fetch('http://localhost:9090/', {
    node: 'no-cors',
    method: "POST",
    body: JSON.stringify(data)
  }).then(resp => resp.json())
  return responseData
}


fetch = ((re) => (...args) => {
  if (!args[0].includes('9090')) {
    requestsArr.push(args)
  }
  return re(...args)
})(fetch)

async function startTest(params) {
  const domLoaded = await waitDomState(
    () => document.readyState === 'complete',
    500
  )
  if (domLoaded) {
    {
      const { run, spec } = await serverConnect({ url: window.location.href, readyTo: 'login' })
      if (run) {
        ReactChangeEvent(document.querySelector('[placeholder="ім\'я"]'), spec.username)
        ReactChangeEvent(document.querySelector('[placeholder="пароль"]'), spec.password)
        document.querySelector('button').click()
      }
    }
    {
      await waitDomState(
        () => document.querySelectorAll('[placeholder="Ціна"]').length > 0,
        500
      )
      const { run, spec } = await serverConnect({ url: window.location.href, readyTo: 'submit_machine' })
      if (run) {
        const tableLengthBeforAdd = document.querySelectorAll('.active.brand').length

        ReactChangeEvent(document.querySelector('[placeholder="Ціна"]'), spec.price)
        ReactChangeEvent(document.querySelector('[placeholder="Масса ,кг"]'), spec.mass)
        ReactChangeEvent(document.querySelector('[placeholder="Потужність трактора , кВт"]'), spec.power)
        ReactChangeEvent(document.querySelector('[placeholder="Довжина ,метрів"]'), spec.length)
        ReactChangeEvent(document.querySelector('[placeholder="Ширина ,метрів"]'), spec.width)
        ReactChangeEvent(document.querySelector('[placeholder="Марка"]'), spec.mark)
        ReactChangeEvent(document.querySelector('[placeholder="Робочий о\'єм , метрів кубічних"]'), spec.volume)
        document.querySelector('.btn.btn-success').click()

        const success = await waitDomState(() => document.querySelectorAll('.active.brand').length > tableLengthBeforAdd)

        const tableLengthAfterAdd = document.querySelectorAll('.active.brand').length
        if (!success) {
          await serverConnect({ url: window.location.href, error: 'machine_add_error' })
        }
      }
    }
  }
}

// startTest()


