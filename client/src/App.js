/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Profile from "./pages/Profile";
import './index.css';
import API from "./utils/API";
import { makeRenderer } from 'react-table';

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.withAuth();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  // Set login status
  // const [loggedIn, setloggedIn] = useState()

  // Call when components have loaded
  //   useEffect(() => {
  //     // withAuth();
  //     withAuth();
  // console.log("After");
  // document.title = 'You are ' + loggedIn + ' !'
  //   }, [])

  withAuth() {
    API.checkAuth()
      // .then(res => {
      // If there's data, the user has a session and is logged in
      // console.log(res.data);
      // if (res.data) {
      //   setloggedIn({loggedIn: res.data});
      // }
      .then(response => {
        console.log("front-end", response.data);

        if (
          response.data &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (
          !response.data &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  render() {
    return (
      <Router>
        <div data-component="DivInRouter">
          <Wrapper data-component="Wrapper"
            handleLogout={this.handleLogout}
            loggedInStatus={this.state.loggedInStatus}>
            <Switch>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/logout" component={Logout}></Route>
              <Route exact path="/dashboard" component={Dashboard}></Route>
              <Route exact path="/" component={Home}>
                {/* {loggedIn ? <Redirect to="/" /> : <Test />} */}
              </Route>
              <Route exact path="/team" component={Team}>
                {/* {loggedIn ? <Redirect to="/" /> : <Test />} */}
              </Route>
              <Route exact path="/profile" component={Profile} />
              <Route path="" component={Home} />
            </Switch>
          </Wrapper>
        </div>
      </Router >
    );
  }
}


/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default App;
