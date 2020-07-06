import React, { Component } from "react";

export class AddProject extends Component {
  state = {
    projectName: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addProject(this.state.projectName);
    this.setState({ projectName: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-project-form">
        <input
          type="text"
          placeholder="Project Name.."
          value={this.state.projectName}
          onChange={this.handleChange}
          name="projectName"
        />
        <input type="submit" value="+" className="add-project-button"/>
      </form>
    );
  }
}

export default AddProject;
