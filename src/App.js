import React, { Component } from "react";
import "./App.css";
import { Counter } from "./components/counter";
import ValidationForm from "./components/validationForm";
import FetchRandomUser from "./components/fetchRandomUser";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <FetchRandomUser />
      </div>
    );
  }
}

export default App;
