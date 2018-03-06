const { expect } = require('chai')

const awb = require('awb')

const { client, element } = awb({})

describe('Google base example', () => {
  let browser = null
  const baseURL = 'localhost:9090'
  //elements
  const showVideo = element('.frame-open-button').waitForClicable(1500)
  const playVideo = element('.ytp-large-play-button.ytp-button').waitForClicable(25000)
  const newTabLink = element('a[href="/new-tab"]')

  before(async () => {
    await client.startDriver()
    await client.goTo(baseURL)
  })
  after(async () => {
    await client.closeBrowser()
    await client.stopDriver()
  })

  it('search git hub potapovDim', async () => {
    await showVideo.click()
    await client.switchToFrame('iframe')
    await client.sleep(2500)
    await playVideo.click()


    await client.switchBack()

    await newTabLink.click()
  })
})