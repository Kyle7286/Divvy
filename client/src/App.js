/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  import Wrapper from "./components/Wrapper";
  import Home from "./pages/Home";
  import Profile from "./pages/Profile";
  import Team from "./pages/Team";

  import './index.css';
  

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function App() {

  return (
    <Router>
      <div data-component="DivInRouter">
        <Wrapper data-component="Wrapper">
          <Switch>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/team" component={Team}/>
            <Route exact path="/" component={Home}/>
            <Route path="" component={Home}/>
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
