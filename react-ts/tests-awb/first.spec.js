const awb = require('awb')
const http = require('http')

const defautlOpts = {
  withStandalone: true,
  remote: false,
  directConnect: false,
  desiredCapabilities: {
    javascriptEnabled: true,
    acceptSslCerts: true,
    platform: 'ANY',
    browserName: 'chrome'
  },
  host: 'localhost',
  port: 4444,
  timeout: 5000
}


const {client, element, elements} = awb(defautlOpts)

http.request = ((request) => (opts, ...args) => {
  console.log(opts.path)
  return request(opts, ...args)
})(http.request.bind(http.request));

describe('test', () => {
  const button = element('button')
  before(async () => {
    await client.goTo('http://localhost:9090')
  })

  after(async () => {
    await client.close()
  })

  it('initial test', async () => {
    await button.click()
    await client.refresh()
    await client.back()
    await client.forward()
    await client.waitForUrlIncludes('8080/', 1500)
    await button.click()
  })
})