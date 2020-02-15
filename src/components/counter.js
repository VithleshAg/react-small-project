import React from "react";

export class Counter extends React.Component {
  state = {
    count: 100
  };

  //   state function only works in class not for function

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    console.log("Re-rendering when clicking increement or decreement");
    return (
      <div>
        <div>count: {this.state.count} </div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}
