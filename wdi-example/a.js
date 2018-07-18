const fetch = require('node-fetch')

const sessionId = '715c8fd7-a441-471a-be8d-167abaaa91b2'


const ELEMENT = 'e3fee2e0-9d3e-45af-b2b2-535ebf5bda9f'
// sessions



const body = { using: "xpath", value: '//android.support.v7.widget.RecyclerView' }
const body1 = { using: "xpath", value: '//android.widget.TextView' }
const home = '\uE011'

const getter = async () => {

  const repsBase1 = await fetch(`http://localhost:4723/wd/hub/session/${sessionId}/back`, {
    method: 'POST',
  }).then(resp => resp.json())

  console.log(repsBase1)
  // for (const { ELEMENT } of repsBase1.value) {
  //   const repsBase2 = await fetch(`http://localhost:4723/wd/hub/session/${sessionId}/element/${ELEMENT}/elements`, {
  //     method: 'POST',
  //     body: JSON.stringify(body1)
  //   }).then(resp => resp.json())

  //   console.log(repsBase2)
  // }

  //android.widget.TextView[@resource-id="android:id/title"]

  // console.log(repsBase2)

  // const repsBase = await fetch(`http://localhost:4723/wd/hub/session/${sessionId}/appium/app/launch`, {
  //   method: 'POST',
  //   // body: JSON.stringify({
  //   //   // value: home
  //   //   // // appPackage: repsBase2.value,
  //   //   // // appActivity: repsBase1.value
  //   //   appPackage: 'com.avanatta.safetonet',
  //   //   appActivity: '.activities.AuthenticationActivity',
  //   // })
  // }).then(resp => resp.text())

  // console.log(repsBase)
}



//.browser.BrowserActivity
//com.avanatta.safetonet
getter()










// const tryElements = async () => {

//   const elementsRes = await fetch(`http://localhost:4723/wd/hub/session/${sessionId}/elements`, {
//     method: "POST", body: JSON.stringify({
//       "using": "xpath", "value": "//android.widget.ListView/android.widget.LinearLayout"
//     })
//   }).then(resp => resp.json())

//   for (const el of elementsRes.value) {
//     const textNodes = await fetch(`http://localhost:4723/wd/hub/session/${sessionId}/element/${el.ELEMENT}/elements`, {
//       method: 'POST', body: JSON.stringify({ "using": "xpath", "value": "//android.widget.TextView" })
//     }).then(resp => resp.json())

//     for (const childEl of textNodes.value) {
//       const text = await fetch(`http://localhost:4723/wd/hub/session/${sessionId}/element/${childEl.ELEMENT}/text`, {
//       }).then(resp => resp.json())

//       if (text.value === 'SafeToNet') {
//         await fetch(`http://localhost:4723/wd/hub/session/${sessionId}/element/${childEl.ELEMENT}/click`, {
//           method: "POST"
//         }).then(resp => resp.json())

//         return
//       }
//     }
//   }

// }

// tryElements()
// let PORT = 4723
// let HOST = 'localhost'
// let sessionId = 'fab53751-ca37-4875-9ee8-fe1e67c96edb'
// let elementId = '2fffb217-1ede-4254-a6c6-18e1b1667120'


// const assertStatus = (body) => { if (body.status !== 0) throw new Error('Swipe broken') }
// const toRound = (value) => Math.round(value)

// const element = {
//   getLocation: async () => {
//     const resp = await fetch(`http://${HOST}:${PORT}/wd/hub/session/${sessionId}/element/${elementId}/location`, {
//       method: 'GET'
//     }).then(resp => resp.json())
//     return resp.value
//   },
//   getSize: async () => {
//     const resp = await fetch(`http://${HOST}:${PORT}/wd/hub/session/${sessionId}/element/${elementId}/size`, {
//       method: 'GET'
//     }).then(resp => resp.json())
//     return resp.value
//   }
// }

// const positios = { xTo: 0, yTo: 25 }
// const fromCenter = async () => {
//   // const sessionId = driver.sessionID
//   const { x, y } = await element.getLocation()
//   const { width, height } = await element.getSize()
//   const center = { x: toRound(x + width / 2), y: toRound(y + height / 2) }

//   const down = { params: center }
//   console.log(down)
//   const bodyDown = await fetch(`http://${HOST}:${PORT}/wd/hub/session/${sessionId}/touch/down`, {
//     method: 'POST',
//     body: JSON.stringify(down)
//   }).then(resp => resp.json())

//   assertStatus(bodyDown)
//   const moveAndUp = { params: { x: center.x + positios.xTo, y: center.y + positios.yTo } }
//   const bodyMove = await fetch(`http://${HOST}:${PORT}/wd/hub/session/${sessionId}/touch/move`, {
//     method: 'POST',
//     body: JSON.stringify(moveAndUp)
//   }).then(resp => resp.json())
//   assertStatus(bodyMove)
//   const bodyUp = await fetch(`http://${HOST}:${PORT}/wd/hub/session/${sessionId}/touch/up`, {
//     method: 'POST',
//     body: JSON.stringify(moveAndUp)
//   }).then(resp => resp.json())
//   assertStatus(bodyMove)
// }

// // { params: { x: 540, y: 779 } }

// // { params: { x: 541, y: 759 } }


// // {"params":{"x":533,"y":776}}
// // {"params":{"x":535,"y":663}}
// // {"params":{"x":535,"y":663}}

// fromCenter()