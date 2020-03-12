
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SwipeContainer from "./containers/SwipeContainer";
 import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
   useHistory,
   useLocation
 } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import Auth from "./containers/Auth"

// if not logged in
// show the register/logiin

const App = () => {

  const [charlies, setCharlie] = useState([])
  const [user, setUser] =  useState({})

  useEffect(() => {
    getCharlies()
  }, [])

  const getCharlies = async () => {
    const results = await axios("/api/charlies");
    const data = await results.data
    setCharlie({ data });
  };

  const auth = () => {

    // if its login button
    // do a login request to the backend
    // save userSession
    // else register 
    // get all the info
    // do a register API request
    // then update the session storage
    const userSession = JSON.parse(sessionStorage.getItem("User"))
    setUser(userSession)
  }
  
  
  console.log(charlies)
    return (
      <Router className="App">
        <Switch>
          <Route path="/okcharlie">
            <SwipeContainer auth={auth} /> 
          </Route>

          <Route path="/auth">
            <Auth/>
          </Route>
          <Route path="/profilename">Profile</Route>
          <Route path="/matches">Private Messaging</Route>
          <Route exact path="/">
            {/* <SwipeContainer charlies={charlies ? "Loading...": charlies} /> */}
            {/* {charlies.length === 0 ?<Redirect to="/auth"/> : <Redirect to="okcharlie"/> } */}
            {user ? <Redirect to="/okcharlie"/> : <Redirect to="/auth"/>}
          </Route>
        </Switch>
      </Router>
    );
}
export default App;

        // <Header />;


// ================================

/**
 * <Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route>
 */