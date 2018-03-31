const {Login} = require('../page_objects/login')
const {client} = require('../driver')

describe('Login', () => {
  beforeEach(async () => {
    await client.startDriver()
    await client.goTo('http://localhost:5555/')
  })
  it('login test', async () => {
    await new Login().login({name: 'test', password: 'test'})
  })
  afterEach(async () => {
    await client.close()
    await client.stopDriver()
  })
})