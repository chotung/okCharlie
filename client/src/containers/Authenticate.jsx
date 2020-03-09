import React, { Component } from "react";
import Register from "../components/Register"
import Login from "../components/Login"
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import { Button } from "@material-ui/core"
import axios from "axios"

// REGISTER | LOGIN WILL SET THE SESSION STORAGE

// SHOW EITHER ONE BASED ON A CLICK 

class Authenticate extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      registerState: {
        name: "",
        title: "",
        password: "",
        description: "",
        sex: "female",
        interestedIn: "male"
      }
    };
  }
  handleChange = event => {
    const nameOfEle = event.target.name;
    const value = event.target.value;

    this.setState(prevState => ({
      ...prevState,
      registerState: {
        ...prevState.registerState,
        [nameOfEle]: value
      }
    }));
  };

  handleSubmit = async event => {
    event.preventDefault();
    const data = this.state.registerState;
    try {
      // const registerUser = await axios({
      //   method: "POST",
      //   url: "/api/register",
      //   data
      // });

      // const login = await axios({
      //   method: "POST",
      //   url: "/api/login",
      //   data
      // })

      // const { sessUser } = await login.data
      // const parsedStrSess = JSON.stringify(sessUser)
      // sessionStorage.setItem("User", parsedStrSess)
   
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { registerState } = this.state;


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
