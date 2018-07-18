const fetch = require('node-fetch')

const {expect} = require('chai')

describe('Machine test', () => {
  let tokenUser = null
  let initialLength = null

  it('login', async () => {
    const {token, stern_machines} = await fetch('http://localhost:9999/login', {
      method: "POST",
      body: JSON.stringify({name: 'test1', password: 'test1'})
    }).then((res) => res.json())
    Array.isArray(stern_machines) && stern_machines.forEach(element => {
      expect(element.brand).to.exist
    })
    initialLength = stern_machines.length
    tokenUser = token
  })

  it('remove', async () => {
    const {stern_machines, valid} = await fetch('http://localhost:9999/remove', {
      method: "POST",
      body: JSON.stringify({
        token: tokenUser
      })
    }).then(res => res.json())

    expect(valid).to.eql(true)
    expect(initialLength).to.not.eql(stern_machines.length)
  })
})