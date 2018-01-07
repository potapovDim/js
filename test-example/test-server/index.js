const http = require('http')
let server

server = http.createServer(function (req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  let requestBody = ''

  if (req.method === 'GET') {
    res.writeHead(200)
    res.write(JSON.stringify({ a: '1' }))
    res.end()
  } else {
    req.on('data', (chunk) => {
      requestBody += chunk.toString('utf8')
    }).on('end', () => {
      res.writeHead(201)
      res.write(JSON.stringify({ work: true }))
      res.end()
    })
  }
})

server.listen(9090)