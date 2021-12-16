import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Form from "./components/Login/Login";
import Dashboard from "../src/components/Home/Dashboard";

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Switch>
        <Route path="/Dashboard">
          {loggedIn ? <Dashboard /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          {loggedIn ? (
            <Redirect to="/Dashboard" />
          ) : (
            <Form parentCallback={callbackFunction} />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
