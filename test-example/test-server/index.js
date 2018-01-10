const http = require('http')
let server

const specs = {
  login: {
    username: 'test1',
    password: 'test2'
  },
  submit_machine: {
    price: '1200',
    mass: '10',
    power: '1.4',
    length: '6.4',
    width: '2.5',
    mark: 'SUPER TEST MIX 1',
    volume: '5.6'
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
