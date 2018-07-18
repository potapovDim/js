const http = require('http')
let server

let tokens = []


const tokenGenerator = () => {
  const stringPass = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
  let tok = '';
  const rand = () => parseInt((Math.random() * 55).toFixed(0))
  for (let i = 0; i < 20; i++) {
    tok += stringPass[rand()]
  }
  return tok
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
    res.write(JSON.stringify({ get: true }))
    res.end()
  } else {
    req.on('data', (chunk) => {
      requestBody += chunk.toString('utf8')
    }).on('end', () => {
      switch (req.url) {
        case '/login': {
          res.writeHead(201)
          const { name } = requestBody
          const token = tokenGenerator()

          tokens.push({
            name,
            token,
            expired: +Date.now() + 10 * 60 * 1000 // 10 minutes
          })
          res.write(JSON.stringify({ token }))
          break
        }

        case '/logout': {
          const { token } = requestBody
          tokens = tokens.filter(tok => tok.token !== token)
          res.writeHead(200)
          res.write(JSON.stringify({ logout: true }))
          break
        }

        case '/resourses': {
          const { token } = requestBody
          if (!token) {
            res.writeHead(401)
            res.write(JSON.stringify({ unauthorized: true }))
            break
          }
          const [{ expired }] = tokens.filter(tok => tok.token === token)
          if (expired > +Date.now()) {
            res.writeHead(200)
            res.write(JSON.stringify({ data: 'SOME TEST' }))
            break
          } else {
            res.writeHead(404)
            res.write(JSON.stringify({ tokenErro: 'token expired' }))
            break
          }
        }






        default: {
          res.writeHead(201)
          res.write(JSON.stringify({ post: true }))
          break
        }
      }
      res.end()
    })
  }
})

server.listen(9999)