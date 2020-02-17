import React from "react";

export default class Myform extends React.Component {
  state = {
    name: "",
    favName: "",
    rememberMe: false,
    selectMe: "Mrs."
  };

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <input
          name="favName"
          value={this.state.favName}
          onChange={this.handleChange}
        />
        <input
          name="rememberMe"
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleChange}
        />
        <div>
          <select
            name="selectMe"
            value={this.state.selectMe}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
            <option>Mss.</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
