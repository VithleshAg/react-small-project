import React from "react";

export class ImageSlider extends React.Component {
  state = {
    images: [
      "/images/doll.jpg",
      "/images/panda.jps",
      "images/pikachu.jpg",
      "/images/shirt.jpg"
    ],
    idx: 0
  };

  handleNext = () => {
    console.log(this.state.idx);
    this.setState(
      {
        idx: this.state.idx + 1
      },
      () => console.log(this.state.idx)
    );
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ idx: this.state.idx - 1 });
          }}
        >
          previous
        </button>
        <img
          style={{ width: 100, height: 100 }}
          src={this.state.images[this.state.idx]}
        />
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}
