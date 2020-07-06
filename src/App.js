import React, { Component } from "react";
import "./App.css";

//components
import Header from "./components/Header";
import Projects from "./components/Projects";


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
