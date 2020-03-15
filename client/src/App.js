import React, { Component } from "react";
import {  Switch, Route } from "react-router-dom"
import history from "./utils/history"
// Components
import Auth from "./components/Auth";
import Login from "./components/Login"
import Register from "./components/Register"
// Containers
import SwipeContainer from "./containers/SwipeContainer"




class App extends Component {
  // HOLD THE DATA FROM THE FORMS
  // THEN PASS IT TO MY API
  state = {
    login: {
      email: "",
      password: ""
    },
    register: {
      email: "",
      password: "",
      name: "",
      interestedIn: "male",
      sex: "female"
    },
    user: undefined,
    charlies: []
  }

  componentDidMount() {
    this.checkUser()
  }

  checkUser = () => {
    const { user } = this.state
    if (user) {
      // USER IS LOGGED IN
      history.push("/")
      console.log("send me home");
    } else {
      // check session storage
      console.log("send me to register/login");
      // They aren't log/signed in
      history.push("/auth/register")
    }
  }

  
  formValueUpdate = (e) => {
    // console.log(e.target)
    const relPath = window.location.pathname;
    const { value, name, } = e.target
    // console.log(value, name, relPath)
    if (relPath === "/login") {
      switch (name) {
        case "email":
          this.setState(prevState => ({
            login: {
              password: prevState.login.password,
              email: value
            }
          }));
          break
        case "password":
          this.setState(prevState => ({
            login: {
              password: value,
              email: prevState.login.email
            }
          }));
          break
        default:
          break
      }
    } else if (relPath === "/register") {
      switch (name) {
        case "email":
          this.setState(prevState => ({
            register: {
              password: prevState.register.password,
              name: prevState.register.name,
              email: value
            }
          }));
          break;
        case "password":
          this.setState(prevState => ({
            register: {
              name: prevState.register.name,
              password: value,
              email: prevState.register.email
            }
          }));
          break;
        case "name":
          this.setState(prevState => ({
            register: {
              name: value,
              password: prevState.register.password,
              email: prevState.register.email
            }
          }));
          break
        default:
          break;
      }
    }
  }

  submit = e => {
    // WHEN SUBMIT VALIDATE THE PASSWORD
    // const { createUser, loginUser } = this.props
    // const loginInfo = this.state.login
    // const registerInfo = this.state.register
    e.preventDefault();

    const btnType = e.target.children[1].dataset.type;
    // TAKES THE INFO AND SEND IT BACK POST REQUEST
    if (btnType === "register") {
      // DO API CALL FOR REGISTER ROUTE
      // DO CHECKS TO MAKE SURE IT'S NOT EMPTY WHEN THEY SUBMIT
      // createUser(registerInfo)
      console.log("register");
    } else {
      console.log("login");

      // loginUser(loginInfo)
      // DO API CALL FOR LOGIN ROUTE
      // DO CHECKS TO MAKE SURE IT'S NOT EMPTY WHEN THEY SUBMIT
    }

    // CONVERT INTO A SWITCH STATEMENT BASED OFF BTNTYPE -- LOGOUT BUTTON
  };


  render() {
    const { login, register } = this.state
    const { submit, formValueUpdate } = this
    console.log(this.state);
    return (
      // <Router history={history}>
      <div className="div">

        <Switch>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route path="/auth/register">
            <Auth />
            <Register submit={submit} registerInfo={register} update={formValueUpdate} />
          </Route>
          <Route path="/auth/login">
            <Auth />
            <Login 
              submit={submit}
              loginInfo={login}
              update={formValueUpdate}
              />
          </Route>
          <Route path="/">
            <SwipeContainer/>
          </Route>
      

          {/* <Route path="/swiper">
            Swipe for charlies
            </Route>
            <Route path="/login">
            login
            </Route>
            
            
            <Route exact path="/">
            { user ? <Redirect to="/swiper" /> : <Redirect to="/login"/> }
          </Route> */}
        </Switch>
      </div>
      // </Router>
    );
  }
}

export default App;