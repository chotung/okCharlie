import React, { useEffect, useState } from 'react';
import './App.css';
import SwipeContainer from "./containers/SwipeContainer";
 import {
   BrowserRouter as Router,
   Switch,
   Route,
  //  Link
 } from "react-router-dom";
import Header from './containers/Header';
import axios from 'axios';



const App = () => {

  const [charlie, setCharlie] = useState([]);

  useEffect(() => {
    getUser()
  }, []);
// =========================================
// Helper  function


  const getUser = async () => {
    const result = await axios("/users");
    setCharlie(result.data)
    return result.data
  };
    // console.log("Charlie", charlie);



  return (
    <Router className="App">
      {/* <SwipeContainer /> */}
      <Header />

      <Switch>
        <Route path="/profilename">Profile</Route>
        <Route path="/matches">Private Messaging</Route>
        <Route path="/">
          <SwipeContainer users={charlie} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



