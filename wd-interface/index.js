const fetch = require('node-fetch')

fetch('http://172.29.148.137:10260/wd/hub/session', {
  method: "POST",
  body: JSON.stringify({"desiredCapabilities": {"browserName": "internet explorer", "version": "11", "usePerProcessProxy": true, "browserCommandLineSwitches": "-private", "ensureCleanSession": true, "requireWindowFocus": false, "count": 1}})
}).then(rep => rep.text()).then(console.log)

