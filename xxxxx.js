const http = require('http')
const https = require('https')
const URL = require('url')
const fetch = require('node-fetch')

const browserHash = {

}

const urlsHash = {
  'internet explorer': 'http://localhost:9090',
  'chrome': 'http://localhost:4444',
  'firefox': 'http://localhost:4444',
}

const tryParse = (response) => {
  try {
    return JSON.parse(response)
  } catch(error) {
    return response
  }
}

this.server = http.createServer((request, response) => {
  let requestBody = ''
  const url = URL.parse(request.url)
  const METHOD = request.method
  const pathname = url.pathname
  const query = url.query

  request.on('data', (chunk) => {
    requestBody += chunk.toString('utf8')
  }).on('end', () => {
    let reqUr
    if(url.path === '/wd/hub/session' && METHOD === 'POST') {
      const bName = tryParse(requestBody).desiredCapabilities.browserName
      const r = tryParse(text)
      browserHash[r.sessionId] = bName
      reqUr = urlsHash[bName]
    } else {

    }

    return fetch(`http://localhost:9090${url.path}`, {
      method: METHOD,
      body: requestBody === '' ? null : requestBody
    }).then(resp => resp.text()).then((text) => {
      console.log(url.path)
      if(url.path === '/wd/hub/session' && METHOD === 'POST') {
        const bName = tryParse(requestBody).desiredCapabilities.browserName
        const r = tryParse(text)
        browserHash[r.sessionId] = bName
      }
      response.write(text)
      response.end()
    })
  })
}).listen(5555, '0.0.0.0')
