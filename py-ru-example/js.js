function ReactChangeEvent(node, expectedValue) {

  node.value = expectedValue
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

const button = document.querySelector('.btn.btn-default');
const lengthBefore = document.querySelectorAll('.active.brand').length;
ReactChangeEvent(document.querySelector('[placeholder="марка"]'), 'ITALMIX');
button.click();
const lengthAfter = document.querySelectorAll('.active.brand').length;
ReactChangeEvent(document.querySelector('[placeholder="марка"]'), '');
button.click();
const lengthAfterClear = document.querySelectorAll('.active.brand').length;
return [lengthBefore, lengthAfter, lengthAfterClear];