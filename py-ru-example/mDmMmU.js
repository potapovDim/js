function eventsTriger(node, {x, y}) {

  const {left, top, right, bottom} = node.getBoundingClientRect()

  const mouseDownEvent = document.createEvent("MouseEvents")

  const mouseMoveEvent = document.createEvent("MouseEvents")
  const mouseUpEvent = document.createEvent("MouseEvents")

  mouseUpEvent.initMouseEvent("mouseup", true, false, window, 1)

  mouseDownEvent.initMouseEvent(
    "mouseover",
    true,
    false,
    window,
    1, // detail : Event's mouse click count
    50, // screenX
    50, // screenY
    50, // clientX
    50, // clientY
    false, // ctrlKey
    false, // altKey
    false, // shiftKey
    false, // metaKey
    0, // button : 0 = click, 1 = middle button, 2 = right button
    null // relatedTarget : Only used with some event types (e.g. mouseover and mouseout). In other cases, pass null.
  )

  // mouseMoveEvent.initMouseEvent(
  //   "mousemove", //event type : click, mousedown, mouseup, mouseover, mousemove, mouseout.
  //   true, //canBubble
  //   false, //cancelable
  //   window, //event's AbstractView : should be window
  //   left + x,
  //   top + y,
  //   left + x,
  //   top + y,// clientY
  //   false, // ctrlKey
  //   false, // altKey
  //   false, // shiftKey
  //   false, // metaKey
  //   0, // button : 0 = click, 1 = middle button, 2 = right button
  //   null // relatedTarget : Only used with some event types (e.g. mouseover and mouseout). In other cases, pass null.
  // );

  node.dispatchEvent(mouseDownEvent)

  // document.dispatchEvent(mouseMoveEvent);
  document.dispatchEvent(mouseUpEvent)
}
