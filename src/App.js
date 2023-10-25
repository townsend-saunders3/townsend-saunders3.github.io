import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div className="sidebar">
          <h2>My Portfolio</h2>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to my portfolio!</h1>
      <button className="button">Click Me</button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <button className="button">Learn More</button>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <button className="button">See More</button>
    </div>
  );
}

export default App;
