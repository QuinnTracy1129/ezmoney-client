import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flyout">
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
