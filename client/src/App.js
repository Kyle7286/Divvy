/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard";
import Org from "./pages/Org";
import Team from "./pages/Team";
import './index.css';
import API from "./utils/API";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function App() {

   // set current user
   const [currentUser, setCurrentUser] = useState({})

  // Set login status
  const [loggedIn, setloggedIn] = useState({ loggedIn: false });

  function handleLogout() {
    console.log("App.js (handleLogout: ");
    API.logout()
      .then(response => {
        console.log("logout API: ", response.data);
        setloggedIn({ loggedIn: false });
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  // Call when components have loaded
  useEffect(() => {
    withAuth();
  }, [false])

  function withAuth() {
    API.checkAuth()
      .then(response => {
        console.log("front-end", response.data);
        if (response.data) {
          setloggedIn({ loggedIn: response.data });
        };
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }
  const { loggedIn: logStatus } = loggedIn;
  //console.log("App.js: ", logStatus);

  // Call when components have loaded
  useEffect(() => {
    getCurrentUser();
  }, [])

  // Set current User State
  function getCurrentUser() {
    API.getCurrentUser()
      .then(res => {
        console.log("APP.js CURRENT USER", res.data);
        setCurrentUser(res.data);
      }
      )
  }

  return (
    <Router>
      <div data-component="DivInRouter" className="my-0">
        <Wrapper data-component="Wrapper"
          handleLogout={handleLogout}
          currentUser={currentUser}
          loggedInStatus={loggedIn}
        >
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            {logStatus ?
              <>
                {/* <Route exact path="/logout" component={Logout}></Route> */}
                <Route exact path="/dashboard" component={Dashboard}></Route>
                <Route exact path="/org" component={Org}></Route>
                <Route exact path="/team" component={Team}></Route>
                <Route exact path="/profile" component={Profile} ></Route>
              </> :
              <Route path="" component={Home} ></Route>
            }
          </Switch>
        </Wrapper>
      </div>
    </Router >
  );
}


/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default App;
