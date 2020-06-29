import React, { Component } from "react";

export class TodoItems extends Component {
  completedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through",
    color: "#c1c1c1",
  };


  render() {
    return this.props.data.map((task) => (
      <div key={task.id} className="task-container">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={this.props.handleChange.bind(this, task.id)}
        />
        
        <span style={task.isCompleted ? this.completedStyle : null}>
          { task.taskName}
        </span>
      </div>
    ));
  }
}

export default TodoItems;
