import React, { Component } from "react";

import AddProject from "./AddProject";

export class ProjectItems extends Component {
  addProject = (name) => {
    console.log(name);
    this.props.addProject(name);
  };

  render() {
    return (
      <div className="project-container">
        <ul className="project-list-container">
          {this.props.projects.map((project) => (
            <li
              key={project.id}
              id={project.id}
              onClick={this.props.selectActive.bind(this, project.id)}
            >
              {project.name}
            </li>
          ))}
        </ul>

        <AddProject addProject={this.addProject} />
      </div>
    );
  }
}

export default ProjectItems;
