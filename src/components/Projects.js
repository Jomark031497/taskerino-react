import React, { Component } from "react";

import Tasks from "./Tasks";
import ProjectItems from "./ProjectItems";
import uuid from "uuid";
import { LOCAL_STORAGE_PROJECTS, projectList } from "./Data";

export class Projects extends Component {
  state = {
    projects: projectList,
    activeTask: {
      id: "",
      name: "",
      tasks: [],
    },
  };

  saveToLocal = () => {
    localStorage.setItem(
      LOCAL_STORAGE_PROJECTS,
      JSON.stringify(this.state.projects)
    );
  };


  componentWillUpdate(nextProps,nextState){
    this.saveToLocal();
  }
 

  selectActive = (id) => {
    this.state.projects.map((project) => {
      if (id === project.id) {
        this.setState({
          activeTask: {
            id: project.id,
            name: project.name,
            tasks: project.tasks,
          },
        });
      }
      return project;
    });
  };

  toggleTask = (id) => {
    this.setState({
      projects: this.state.projects.map((proj) => {
        if (proj.id === this.state.activeTask.id) {
          proj.tasks.map((task) => {
            if (task.id === id) {
              task.isFinished = !task.isFinished;
            }
            return task;
          });
        }
        return proj;
      }),
    });
  };

  addProject = (name) => {
    const newProject = {
      id: uuid.v4(),
      name: name,
      isCompleted: false,
      tasks: [],
    };

    this.setState({ projects: [...this.state.projects, newProject] });
  };

  addTask = (name, priority, description, isFinished) => {
    const newTask = {
      id: uuid.v4(),
      name,
      priority,
      description,
      isFinished,
    };

    this.setState({
      projects: this.state.projects.map((project) => {
        if (project.id === this.state.activeTask.id) {
          project.tasks.push(newTask);
        }
        return project;
      }),
    });
  };

  deleteTask = (id) => {
    this.setState({
      projects: this.state.projects.map((project) => {
        if (project.id === this.state.activeTask.id) {
          project.tasks.map((task, index) => {
            if (task.id === id) {
              project.tasks.splice(index, 1);
            }
            return task;
          });
        }
        return project;
      }),
    });
  };

  render() {
    return (
      <div className="content-container">
        <ProjectItems
          projects={this.state.projects}
          selectActive={this.selectActive}
          addProject={this.addProject}
        />

        <Tasks
          activeTask={this.state.activeTask}
          toggleTask={this.toggleTask}
          addTask={this.addTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default Projects;
