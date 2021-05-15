/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Profile from "./pages/Profile";
import './index.css';
import API from "./utils/API";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function App() {


  // Set login status
  const [loggedIn, setloggedIn] = useState({})

  // Call when components have loaded
  useEffect(() => {
    withAuth();
  }, [])

  function withAuth() {
    API.checkAuth()
      .then(res => {
        // If there's data, the user has a session and is logged in
        if (res.data) {
          setloggedIn(res.data);
        }
      })
  }


  return (
    <Router>
      <div data-component="DivInRouter">
        <Wrapper data-component="Wrapper">
          <Switch>
          <Route exact path="/login" component={Login}></Route>
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
    </Router>
  );

}


/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default App;
