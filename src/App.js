import React from "react";
import Login from "./components/Login";
import TopNav from "./components/TopNav";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Signup from "./components/Signup";

export const App = () => {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/signup" component={Signup} />
          <Route
            exact
            path="/:anything"
            render={() => <h1>404, not found</h1>}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

// Email: carpenterwatts@enerforce.com
// Password: hello
