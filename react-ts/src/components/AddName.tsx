import * as React from "react";

export class AddName extends React.Component<any, any> {
  state = {
    currentName: ''
  }
  onChange = (e: any) => {
    this.setState({ currentName: e.target.value })
  };
  addName = () => {
    const {addName} = this.props
    addName && addName(this.state.currentName)
  }
  render() {
    return (
      <div>
        <span>Enter new name :)</span>
        <input onChange={this.onChange}></input>
        <button onClick={this.addName}>Add new name</button>
      </div>
    );
  };
};
