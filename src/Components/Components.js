import React from "react";
import MainModule from "./Main/Main.js";
import Home from "./Home/Home.js";
import AuthLogin from "./Auth/AuthLogin.js"
import AuthRegister from "./Auth/AuthRegister.js"
import Match from "./Match/Match.js"
import Profile from "./Profile/Profile.js";
import MainHome from "./Main/MainHome.js"
import MainGood from "./Main/MainGood.js"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

const Components = () => {
  return (
    <Router>
      <Switch>
        <Route path="/welcome" component={Home} />
        <Route path="/good" component={MainGood} />
        <Route path="/home" component={MainHome} />
        <Route path="/register" component={AuthRegister} />
        <Route path="/login" component={AuthLogin} />
        <Route path="/match" component={Match} />
        <Route path="/profile" component={Profile} />
        <Route path="/MainModule" component={MainModule} />
        <Redirect to="/welcome" />
      </Switch>
      {/* <Navigate to="/welcome" /> */}
    </Router>
  );
};

export default Components;