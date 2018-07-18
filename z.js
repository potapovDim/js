const {exec} = require('child_process')
const http = require('http')
const querystring = require('querystring')

this.server = http.createServer((request, response) => {

  const query = querystring.parse(request.url)

  request.on('data', (chunk) => {
    requestBody += chunk.toString('utf8')
  }).on('end', () => {
    try {
      const ex = exec(`taskkill /F /IM ${query.browser}.exe`)
      ex.on('exit', () => {
        response.write('OK')
        response.end()
      })
    } catch(error) {
      console.error(error);
    }
  })
}).listen('0.0.0.0', 8081)