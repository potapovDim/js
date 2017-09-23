import * as React from 'react';
import { style } from 'typestyle';

import { DragSource, DropTarget } from 'react-dnd';

const dragSource = {
  beginDrag: function (props: any, monitor: any): any {

  }
};

function collect(connect: any, monitor: any) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

export const Box = DragSource('BOX', dragSource, collect)(({
  component,
  index,
  connectDragSource }: any) => connectDragSource(<div className={style({
    background: component, width: 30, height: 30, border: '2px solid yellow'
  })}>{index}</div>))

