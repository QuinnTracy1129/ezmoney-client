import React from "react";
import { Route, Switch } from "react-router-dom";
import UserHomePage from "./user/home";
import UserSettings from "./user/settings";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/home" component={UserHomePage} />
        <Route exact path="/home/settings" component={UserSettings} />
      </Switch>
    );
  }
}

export default Routes;
