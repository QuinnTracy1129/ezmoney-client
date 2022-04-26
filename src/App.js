import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {
  componentDidMount() {
    window.addEventListener("resize", () => window.location.reload());
  }
  render() {
    return (
      <Router>
        <div className="flyout">
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
