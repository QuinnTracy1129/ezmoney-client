import React from "react";
import { Route, Switch } from "react-router-dom";
import MainHomePage from "./pages/home";
import LandingPage from "./pages/landing";
import Others from "./pages/others";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/others" component={Others} />
        <Route path="/home" component={MainHomePage} />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
