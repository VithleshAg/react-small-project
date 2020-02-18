import React from "react";

export class Counter extends React.Component {
  // state = {
  //   count: 0
  // };

  // //   state function only works in class not for function

  // componentWillUnmount = () => {
  //   console.log("unmounting.....");
  // };

  // componentDidMount = () => {
  //   console.log("mounting...");
  // };

  // increment = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };

  // decrement = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   });
  // };

  render() {
    console.log("Re-rendering when clicking increement or decreement");
    return (
      <div>
        <div>count: {this.props.count} </div>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
      </div>
    );
  }
}
