import React, { Component } from "react";
import "./App.css";
import { Counter } from "./components/counter";
import Myform from "./components/Myform";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Myform />
      </div>
    );
  }
}

export default App;
