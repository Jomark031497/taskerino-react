import React, { Component } from "react";
import uuid from "uuid";
import AddTask from "./AddTask";
import "../styles/tasks.css";

export class Tasks extends Component {
  render() {
    return (
      <div className="task-container">
        <h3 className="task-project-name">{this.props.activeTask.name}</h3>
        {this.props.activeTask.tasks.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          <ul className="task-list-container">
            {this.props.activeTask.tasks.map((task) => (
              <li
                key={uuid.v4()}
                id={task.id}
                style={{
                  textDecoration: task.isFinished ? "line-through" : "none",
                }}
              >
                <input
                  type="checkbox"
                  checked={task.isFinished}
                  onChange={this.props.toggleTask.bind(this, task.id)}
                  className="task-checkbox"
                />
                <p className="task-name">{task.name}</p>
                <p className="task-priority">Priority: {task.priority}</p>
                <p className="task-description">
                  Description: {task.description}
                </p>
                <button
                  className="task-delete"
                  style={{ textDecoration: "none" }}
                  onClick={this.props.deleteTask.bind(this, task.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        <AddTask addTask={this.props.addTask} />
      </div>
    );
  }
}

export default Tasks;
