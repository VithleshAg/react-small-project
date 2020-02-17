import React, { Component } from "react";
import "./App.css";
import { Counter } from "./components/counter";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        {/* <div style={this.state.visible ? {} : { display: "none" }}> */}
        <div className={this.state.visible ? "visible" : "hidden"}>
          <Counter />
        </div>
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          toggle counter
        </button>
      </div>
    );
  }
}

export default App;
