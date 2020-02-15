import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Body = props => (
  <div>
    <p className="App-intro">{props.text}</p>
    <p className="App-intro">{props.text2}</p>
    <p className="App-intro">{props.myFunction(567, 78)}</p>
  </div>
);

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

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <div>{this.props.num}</div>
        <div>{this.props.myArr[2]}</div>
        <div>{this.props.myObj.a}</div>
        <div>{this.props.myObj.b}</div>
        <div>{JSON.stringify(this.props.myObj)}</div>
        <div>{this.props.myFunction(100, 1299)}</div>
      </header>
    );
  }
}

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
      </div>
    );
  }
}

export default App;
