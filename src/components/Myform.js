import React from "react";

export default class Myform extends React.Component {
  state = {
    name: "",
    rememberMe: false,
    selectMe: "Mrs."
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleCheck = event => {
    this.setState({ rememberMe: event.target.checked });
  };

  handleSelect = event => {
    this.setState({ selectMe: event.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <br />
        <textarea value={this.state.name} />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheck}
        />
        <div>
          <select value={this.state.selectMe} onChange={this.handleSelect}>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
            <option>Mss.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
