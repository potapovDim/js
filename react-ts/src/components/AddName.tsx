import * as React from "react";

export class AddName extends React.Component<any, any> {
  state = {
    currentName: ''
  }
  onChange = (e: any) => {
    this.setState({ currentName: e.target.value });
  };
  addName = () => {
    const { addName } = this.props;
    const { currentName } = this.state;
    currentName != '' && 
    currentName.length != 0 && 
    currentName.length <= 25 && 
    addName && addName(this.state.currentName);
    this.setState({ currentName: '' });
  };
  render() {
    return (
      <div>
        <span>Enter new name :)</span>
        <input onChange={this.onChange} value={this.state.currentName}></input>
        <button onClick={this.addName}>Add new name</button>
      </div>
    );
  };
};
