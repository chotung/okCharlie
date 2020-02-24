import React from 'react';
import './App.css';
import SwipeContainer from "./containers/SwipeContainer";
 import {
   BrowserRouter as Router,
   Switch,
   Route,
  //  Link
 } from "react-router-dom";
import Header from './containers/Header';


function App() {

  return (
    <Router className="App">
      {/* <SwipeContainer /> */}
      <Header />

      <Switch>
        <Route path="/profilename">Profile</Route>
        <Route path="/matches">Private Messaging</Route>
        <Route path="/">
          <SwipeContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


