import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SwipeContainer from "./containers/SwipeContainer";
 import {
   BrowserRouter as Router,
   Switch,
   Route,
  //  Redirect,
  //  useHistory,
  //  useLocation
 } from "react-router-dom";
// import Header from "./containers/Header";
import PrivateRoute from "./components/PrivateRoute"
import Authenticate from './containers/Authenticate';



class App extends Component {
  state = {
    charlies: [],
    user: {}
  };
  componentDidMount() {
    const { getCharlies } = this;
    getCharlies();
  }

  getCharlies = async () => {
    const results = await axios("/api/charlies");
    const data = await results.data
    this.setState({
      charlies: data
    });
  };
  

  render() {

    return (
      <Router className="App">
        <Switch>
          <Route path="/auth">
            <Authenticate />
          </Route>
          <Route path="/profilename">Profile</Route>
          <Route path="/matches">Private Messaging</Route>
          <PrivateRoute path="/">
            <SwipeContainer charlies={this.state.charlies} />
          </PrivateRoute>
        </Switch>
      </Router>
    );
  }
}
export default App;

        // <Header />;


// ================================