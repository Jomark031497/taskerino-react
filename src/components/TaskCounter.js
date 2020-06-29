import React, { Component } from "react";

export class TaskCounter extends Component {
  render() {
    return (
      <div>
        <h2>Task Count: {this.props.taskCount.length}</h2>
      </div>
    );
  }
}

export default TaskCounter;
