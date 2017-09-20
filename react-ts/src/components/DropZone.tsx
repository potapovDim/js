import * as React from "react";
import { style } from 'typestyle';
import { DropTarget } from 'react-dnd';


const TYPE = 'item';
type TYPE = typeof TYPE;

const dropZone: any = {
  canDrop(props: any, monitor: any) {
    const item = monitor.getItem();
  },
  drop(props: any, monitor: any, component: any) {
    const item = monitor.getItem();
    return { moved: true };
  }
};

const collect = (connect: any, monitor: any) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  canDrop: monitor.canDrop(),
  itemType: monitor.getItemType()
});


class DropZone extends React.Component<any, any> {


  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(<div className={style({
      background: 'rgba(100, 90, 1, 0.3)',
      width: '300px',
      minHeight: '30px'
    })}></div>)
  }
}

export default DropTarget(TYPE, dropZone, collect)(DropZone)