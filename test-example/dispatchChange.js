function ReactChangeEvent(node, expectedValue) {

  node.value = expectedValue
  const nodeName = node.nodeName.toLowerCase()
  const type = node.type

  let event
  let initialValue

  const sefaDeleteProp = (elem, prop) => {
    const desc = Object.getOwnPropertyDescriptor(elem, prop)
    if (desc && desc.configurable) {
      Reflect.deleteProperty(elem, prop)
    }
  }

  const initialDescriptor = Object.getOwnPropertyDescriptor(node, 'value')

  event = document.createEvent('UIEvents')
  event.initEvent('focus', false, false)
  node.dispatchEvent(event)

  initialValue = node.value
  node.value = initialValue + ' '
  sefaDeleteProp(node, 'value')
  node.value = initialValue

  event = document.createEvent('HTMLEvents')
  event.initEvent('propertychange', false, false)
  event.propertyName = 'value'
  node.dispatchEvent(event)

  event = document.createEvent('HTMLEvents')
  event.initEvent('input', true, false)
  node.dispatchEvent(event)

  if (initialDescriptor) {
    Object.defineProperty(node, 'value', initialDescriptor)
  }
}