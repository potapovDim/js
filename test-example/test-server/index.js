const http = require('http')
let server

const errors = {
  machine_add_error: {
    stack: 'Machine adding was broken'
  }
}

const specs = {
  login: {
    username: 'test1',
    password: 'test2'
  },
  submit_machine: {
    price: 'TEST PRICE',
    mass: 'TEST MASS',
    power: 'TEST POWER',
    length: 'TEST LENGTH',
    width: 'TEST WIDTH',
    mark: 'TEST MARK',
    volume: 'TEST VOLUME'
  }
}


server = http.createServer(function (req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  let requestBody = ''

  if (req.method === 'GET') {
    res.writeHead(200)
    res.end()
  } else {
    req.on('data', (chunk) => {
      requestBody += chunk.toString()
    }).on('end', () => {
      const { readyTo } = JSON.parse(requestBody)
      console.log(readyTo === 'login', readyTo, 'login', '!!!!!!!', { spec: specs['login'] }, specs[readyTo])
      res.writeHead(200)
      res.write(JSON.stringify({ spec: specs[readyTo], run: true }))
      res.end()
    })
  }

})

server.listen(9090)
