import React, { Component } from "react";

export class AddTask extends Component {
  state = {
    styleFlag: false,

    name: "",
    priority: "",
    description: "",
    isFinished: false,
  };

  handleClick = (e) => {
    this.setState({ styleFlag: !this.state.styleFlag });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(
      this.state.name,
      this.state.priority,
      this.state.description,
      this.state.isFinished
    );

    this.setState({
      name: "",
      priority: "",
      description: "",
      isFinished: false,
      styleFlag: false,
    });
  };

  render() {
    console.log(this.state.styleFlag);
    return (
      <div>
        <button onClick={this.handleClick} className="add-task-button">
          Add Task
        </button>
        <div className="task-form-container">
          <form
            className="task-add-form-container"
            style={{ display: this.state.styleFlag ? "block" : "none" }}
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="taskName">Task:</label>
            <br />
            <input
              type="text"
              placeholder="Task Name..."
              id="taskName"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
            <br />
            <label htmlFor="taskPriority">Priority: </label>
            <br />
            <select
              id="taskPriority"
              value={this.state.priority}
              onChange={this.handleChange}
              name="priority"
            >
              <option value="High">High</option>
              <option value="Normal">Normal</option>
              <option value="Low">Low</option>
            </select>
            <br />
            <label htmlFor="taskDescription">Description:</label> <br />
            <textarea
              placeholder="Description..."
              id="taskDescription"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
            ></textarea>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddTask;
