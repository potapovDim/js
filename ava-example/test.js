import test from 'ava';
import { client, element } from 'wd-interface'


const browser = client().chrome(true)

test.before('set up', async () => {
  await browser.goTo('http://localhost:5555')
})

test.after.always('tears down', async () => {
  await browser.closeBrowser()
})

test('super tests', async t => {
  const initialMarks = await browser.executeScript(function () {
    return [].map.call(document.querySelectorAll('.active.brand'), (doc) => {
      return doc.innerText
    })
  })
  t.deepEqual(initialMarks.length, 79)
});

test('super tests', async t => {
  const initialMarks = await browser.executeScript(function () {
    return [].map.call(document.querySelectorAll('.active.brand'), (doc) => {
      return doc.innerText
    })
  })
  t.deepEqual(initialMarks.length, 79)
}); test('super tests', async t => {
  const initialMarks = await browser.executeScript(function () {
    return [].map.call(document.querySelectorAll('.active.brand'), (doc) => {
      return doc.innerText
    })
  })
  t.deepEqual(initialMarks.length, 79)
}); test('super tests', async t => {
  const initialMarks = await browser.executeScript(function () {
    return [].map.call(document.querySelectorAll('.active.brand'), (doc) => {
      return doc.innerText
    })
  })
  t.deepEqual(initialMarks.length, 79)
}); test('super tests', async t => {
  const initialMarks = await browser.executeScript(function () {
    return [].map.call(document.querySelectorAll('.active.brand'), (doc) => {
      return doc.innerText
    })
  })
  t.deepEqual(initialMarks.length, 79)
}); test('super tests', async t => {
  const initialMarks = await browser.executeScript(function () {
    return [].map.call(document.querySelectorAll('.active.brand'), (doc) => {
      return doc.innerText
    })
  })
  t.deepEqual(initialMarks.length, 79)
}); test('super tests', async t => {
  const initialMarks = await browser.executeScript(function () {
    return [].map.call(document.querySelectorAll('.active.brand'), (doc) => {
      return doc.innerText
    })
  })
  t.deepEqual(initialMarks.length, 79)
}); test('super tests', async t => {
  const initialMarks = await browser.executeScript(function () {
    return [].map.call(document.querySelectorAll('.active.brand'), (doc) => {
      return doc.innerText
    })
  })
  t.deepEqual(initialMarks.length, 79)
}); test('super tests', async t => {
  const initialMarks = await browser.executeScript(function () {
    return [].map.call(document.querySelectorAll('.active.brand'), (doc) => {
      return doc.innerText
    })
  })
  t.deepEqual(initialMarks.length, 79)
});