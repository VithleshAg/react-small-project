import React, { Component } from "react";
import "./App.css";
import { ImageSlider } from "./components/imageSlider";
import { Counter } from "./components/counter";
import { Header } from "./components/header";

class App extends Component {
  state = {
    visible: true,
    WhichComponentToShow: "ImageSlider"
  };
  render() {
    if (this.state.WhichComponentToShow === "ImageSlider") {
      return (
        <div>
          <ImageSlider />
          <button
            onClick={() => {
              this.setState({ WhichComponentToShow: "Counter" });
            }}
          >
            Show Counter
          </button>
        </div>
      );
    } else if (this.state.WhichComponentToShow === "Counter") {
      return (
        <div>
          <Counter />
          <button
            onClick={() => {
              this.setState({ WhichComponentToShow: "Header" });
            }}
          >
            Show Header
          </button>
        </div>
      );
    } else if (this.state.WhichComponentToShow === "Header") {
      return (
        <div>
          <Header />
          <button
            onClick={() => {
              this.setState({ WhichComponentToShow: "ImageSlider" });
            }}
          >
            Show Image Slider
          </button>
        </div>
      );
    } else return null;
  }
}

export default App;
