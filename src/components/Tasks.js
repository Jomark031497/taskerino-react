import React, { Component } from "react";
import uuid from "uuid";
import AddTask from "./AddTask";
import "../styles/tasks.css";

export class Tasks extends Component {
  render() {
    return (
      <div className="task-container">
        <div className="task-project-name">
          {this.props.activeTask.name === "" ? (
            <h2>Please select a project</h2>
          ) : (
            <h2>Project: {this.props.activeTask.name}</h2>
          )}
        </div>
        {this.props.activeTask.tasks.length === 0 ? (
          <h3>No tasks yet</h3>
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
