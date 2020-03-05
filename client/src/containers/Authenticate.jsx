import React from "react";
import Register from "../components/Register"
import Login from "../components/Login"
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Button } from "@material-ui/core"

const regiOrLog = true


// REGISTER | LOGIN WILL SET THE SESSION STORAGE

// SHOW EITHER ONE BASED ON A CLICK 

const Authenticate = () => {
  return (
    <Router>
      <Link to="/auth/login">
        <Button>Login</Button>
      </Link>
      <Link to="/auth/register">
        <Button>Register</Button>
      </Link>

      <Switch>
        <Route path="/auth/login">
          <Login/>
        </Route>
        <Route path="/auth/register">
          <Register/>
        </Route>
      </Switch>
      {/* {regiOrLog ? <Register /> : <Login />} */}
    </Router>
  );
}

export default Authenticate;
