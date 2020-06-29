import React, { Component } from "react";

export class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTask(this.state.task);
    this.setState({ task: "" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter task here..."
            value={this.state.task}
            onChange={this.handleChange}
            name="task"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddTask;
