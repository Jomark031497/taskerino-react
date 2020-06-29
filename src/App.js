import React, { Component } from "react";
import "./App.css";

//Components
import { data } from "./components/Data";
import TodoItems from "./components/TodoItems";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskCounter from "./components/TaskCounter";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: data,
    };
  }

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((task) => {
        if (id === task.id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      }),
    });
  };

  addNewTask = (task) => {
    const newTask = {
      id: this.state.todos.length + 1,
      taskName: task,
      isCompleted: false,
    };
    this.setState({ todos: [...this.state.todos, newTask] });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
         
          <AddTask addNewTask={this.addNewTask} />
          <TaskCounter taskCount={this.state.todos} />
          <TodoItems data={this.state.todos} handleChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default App;
