import React, { Component } from "react";
import Register from "../components/Register"
import Login from "../components/Login"
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Button } from "@material-ui/core"

// REGISTER | LOGIN WILL SET THE SESSION STORAGE

// SHOW EITHER ONE BASED ON A CLICK 

class Authenticate extends Component {
  state = {
    registerState: {
      name: "",
      title: "",
      password: "",
      description: ""
    },
    value: "female"
  };

  // const [value, setValue] = React.useState("female");

  handleChange = event => {
    const nameOfEle = event.target.name;
    const value = event.target.value;
    if (nameOfEle === "gender1") {
      this.setState({
        value
      });
    } else {
      this.setState(prevState => ({
        ...prevState,
        registerState: {
          ...prevState.registerState,
          [nameOfEle]: value
        }
      }));
    }
  };

  /**
   * {
        registerState: {
          [nameOfEle]: value
        }
      }
   */

  handleSubmit = event => {
    event.preventDefault();
    // grab the state in the submit
    // make the api call
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { value, registerState } = this.state;
    console.log(this.state);
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
            <Login />
          </Route>
          <Route path="/auth/register">
            <Register
              value={value}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              regiState={registerState}
            />
          </Route>
        </Switch>
        {/* {regiOrLog ? <Register /> : <Login />} */}
      </Router>
    );
  }
}

export default Authenticate;



/**
 *    name: "",
    title: "",
    password: "",
    description: ""
 */