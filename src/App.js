import React, { Component } from "react";
import "./App.css";
import { Counter } from "./components/counter";
import ValidationForm from "./components/validationForm";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <ValidationForm />
      </div>
    );
  }
}

export default App;
