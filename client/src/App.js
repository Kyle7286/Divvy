/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useState } from 'react';
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

function App() {

  // Set login status
  const [loggedIn, setloggedIn] = useState( {loggedIn : false});

  function handleLogout() {
    setloggedIn({ loggedIn: false });
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

  return (
    <Router>
      <div data-component="DivInRouter">
        <Wrapper data-component="Wrapper"
          handleLogout={handleLogout}
          loggedInStatus={loggedIn}
        >
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/logout" component={Logout}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/" component={Home}>
            </Route>
            <Route exact path="/team" component={Team}>
            </Route>
            <Route exact path="/profile" component={Profile} />
            <Route path="" component={Home} />
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
