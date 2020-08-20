import React, { Component } from "react";
import {  Switch, Route } from "react-router-dom"
import history from "./utils/history"
// Components
import Auth from "./components/Auth";
import Login from "./components/Login"
import Register from "./components/Register"
// Containers
import SwipeContainer from "./containers/SwipeContainer"
import Axios from "axios";




class App extends Component {
  // HOLD THE DATA FROM THE FORMS
  // THEN PASS IT TO MY API
  state = {
    login: {
      email: "",
      password: ""
    },
    register: {
      title: "",
      description: "",
      email: "",
      password: "",
      passwordConfirmation: "",
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
    const storage = window.localStorage
    const user = JSON.parse(storage.getItem("user"))
    // const { user } = this.state
    // check local storage
    console.log("local", user)
    if (user) {
      // USER IS LOGGED IN
      history.push("/")
      // console.log("send me home");
    } else {
      // console.log("send me to register/login");
      // They aren't log/signed in
      history.push("/auth/register")
    }
  }

  
  formValueUpdate = (e) => {
    const relPath = window.location.pathname;
    const { value, name, } = e.target
    // console.log("value: ", value, "\n", "name: ", name, "\n", "relative path: ", relPath)
    if (relPath === "/auth/login") {
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
    } else if (relPath === "/auth/register") {
      switch (name) {
        case "email":
          this.setState(prevState => ({
            register: {
              password: prevState.register.password,
              name: prevState.register.name,
              passwordConfirmation: prevState.register.passwordConfirmation,
              email: value,
              interestedIn: prevState.register.interestedIn,
              sex: prevState.register.sex,
              title: prevState.register.title,
              description: prevState.register.description
            }
          }));
          break;
        case "password":
          this.setState(prevState => ({
            register: {
              name: prevState.register.name,
              password: value,
              passwordConfirmation: prevState.register.passwordConfirmation,
              email: prevState.register.email,
              interestedIn: prevState.register.interestedIn,
              sex: prevState.register.sex,
              title: prevState.register.title,
              description: prevState.register.description
            }
          }));
          break;
        case "confirm-password":
          this.setState(prevState => ({
            register: {
              name: prevState.register.name,
              password: prevState.register.password,
              passwordConfirmation: value,
              email: prevState.register.email,
              interestedIn: prevState.register.interestedIn,
              sex: prevState.register.sex,
              title: prevState.register.title,
              description: prevState.register.description
            }
          }));
          break;
        case "name":
          this.setState(prevState => ({
            register: {
              name: value,
              password: prevState.register.password,
              passwordConfirmation: prevState.register.passwordConfirmation,
              email: prevState.register.email,
              interestedIn: prevState.register.interestedIn,
              sex: prevState.register.sex,
              title: prevState.register.title,
              description: prevState.register.description
            }
          }));
          break
        case "sex":
          this.setState(prevState => ({
            register: {
              name: prevState.register.name,
              password: prevState.register.password,
              passwordConfirmation: prevState.register.passwordConfirmation,
              email: prevState.register.email,
              interestedIn: prevState.register.interestedIn,
              sex: value,
              title: prevState.register.title,
              description: prevState.register.description
            }
          }));
          break
        case "interestedIn":
          this.setState(prevState => ({
            register: {
              name: prevState.register.name,
              password: prevState.register.password,
              passwordConfirmation: prevState.register.passwordConfirmation,
              email: prevState.register.email,
              interestedIn: value,
              sex: prevState.register.sex,
              title: prevState.register.title,
              description: prevState.register.description
            }
          }));
          break
        case "title":
        this.setState(prevState => ({
          register: {
            name: prevState.register.name,
            password: prevState.register.password,
            passwordConfirmation: prevState.register.passwordConfirmation,
            email: prevState.register.email,
            interestedIn: prevState.register.interestedIn,
            sex: prevState.register.sex,
            title: value,
            description: prevState.register.description
          }
        }));
        break
        case "description":
        this.setState(prevState => ({
          register: {
            name: prevState.register.name,
            password: prevState.register.password,
            passwordConfirmation: prevState.register.passwordConfirmation,
            email: prevState.register.email,
            interestedIn: prevState.register.interestedIn,
            sex: prevState.register.sex,
            title: prevState.register.title,
            description: value
          }
        }));
        break
        default:
          break;
      }
    }
  }

  submit = e => {
    e.preventDefault();
    // WHEN SUBMIT VALIDATE THE PASSWORD
    const loginInfo = this.state.login
    const registerInfo = this.state.register
    // console.log("login information", loginInfo, "\n", "register info", registerInfo)
    const btnType = e.target.children[1].dataset.type;
    // TAKES THE INFO AND SEND IT BACK POST REQUEST
    if (btnType === "register") {
      // DO API CALL FOR REGISTER ROUTE
      // DO CHECKS TO MAKE SURE IT'S NOT EMPTY WHEN THEY SUBMIT
      // createUser(registerInfo)
      // console.log("register", registerInfo)

      Axios.post("/api/register", { registerInfo })
      .then(response => {
        // console.log(response)
        const { email, password} = response.data.user;
         this.setState({
           user: response.data.user
         });
        if(response.status === 200) {
            // const storage = window.localStorage
            // const userString = JSON.stringify(loginUser)
            // storage.setItem("user", userString)
            history.push("/auth/login")
        }
      })
      .catch(err => {
        const errorMsg = err.response.data.msg
        alert(errorMsg)
      })
    } else {
      // console.log(loginInfo)
      // console.log("login");
      Axios.post("/api/login", { loginInfo })
      .then(response => {
        console.log(response, "response ");
        if(response.status === 200) {
          // console.log(response.data.sessUser);
        }
      })
      // loginUser(loginInfo)
      // DO API CALL FOR LOGIN ROUTE
      // DO CHECKS TO MAKE SURE IT'S NOT EMPTY WHEN THEY SUBMIT
    }
    // CONVERT INTO A SWITCH STATEMENT BASED OFF BTNTYPE -- LOGOUT BUTTON
  };


  render() {
    const { login, register } = this.state
    const { submit, formValueUpdate } = this
    // console.log("STATE", this.state);
    console.log(this.state.user);

    return (
      <div className="App">
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
        </Switch>
      </div>
    );
  }
}

export default App;