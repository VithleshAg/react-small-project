import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/header";
import Body, { Body2, Body3 } from "./components/body";
import { Counter } from "./components/counter";

// const Body = () => {
//   return (
//     <p className="App-intro">
//       To get started,edit <code>src/App.js</code> and save to reload
//     </p>
//   );
// };

// function Body() {
//   return (
//     <p className="App-intro">
//       To get started,edit <code>src/App.js</code> and save to reload
//     </p>
//   );
// }

class App extends Component {
  add = (a, b) => {
    return a + b;
  };
  render() {
    return (
      <div className="App">
        <Header
          title="heyyyy"
          num={56}
          myArr={[1, 2, 3]}
          myObj={{ a: 1, b: 10 }}
          // myFunction={(a, b) => a + b}
          myFunction={this.add}
        />
        <Counter />
        <Body
          text="I am Alien"
          text2="I am alien tooooooo"
          myFunction={this.add}
        />
        <Body
          text="I am Alien"
          text2="I am alien tooooooo"
          myFunction={this.add}
        />
        <Body2
          text="I am Alien"
          text2="I am alien tooooooo"
          myFunction={this.add}
        />
        <Body3
          text="I am Alien"
          text2="I am alien tooooooo"
          myFunction={this.add}
        />
      </div>
    );
  }
}

export default App;
