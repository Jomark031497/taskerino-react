import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

//components
import Header from "./layouts/Header";
import Projects from "./components/Projects";
import About from "./components/pages/About";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/taskerino-react"
            render={(props) => (
              <React.Fragment>
                <Projects />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
