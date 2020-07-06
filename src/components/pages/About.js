import React from "react";

function About() {
  return (
    <div className="about-container">
      <div className="about-contents">
        <br />
        <h1>Project:Taskerino</h1>
        <h3>
          A Todo-list application based on the odin project lesson:{" "}
          <a href="https://www.theodinproject.com/courses/javascript/lessons/frameworks">
            The Odin Project:Frameworks
          </a>
        </h3>
        <br />
        <hr />
        <br />
        <h1>What I Learned</h1>
        <ul className="learned-list">
          <li>Deploy React Apps on Github using gh-pages</li>
          <li>Linting</li>
          <li>Dynamic User Interface Interactions</li>
          <li>Proper usage of forms</li>
          <li>
            <h4>Fundamentals of React</h4>
          </li>
        </ul>
        <br />
        <hr />
        <br />
        <h1>About Me</h1>
        <h3>Name:  Jomark Pangan</h3>
        <h3>Degree: BS Computer Engineering</h3>
        <h3>Contacts:</h3>
        <ul className="learned-list">
          <li>Phone: (+63) 995 - 7340 - 183</li>
          <li>Email: jomarkrazonpangan@gmail.com</li>
          <li>
            Github:{" "}
            <a href="https://github.com/jomark031497">
              https://github.com/jomark031497
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
