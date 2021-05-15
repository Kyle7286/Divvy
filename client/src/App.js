/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Profile from "./pages/Profile"
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
            <Route exact path="/" component={Home}>
              {/* {loggedIn ? <Redirect to="/" /> : <Test />} */}
            </Route>
            <Route exact path="/team" component={Test}>
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
