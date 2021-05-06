/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  import Navbar from "./components/Navbar";
  import Wrapper from "./components/Wrapper";
  import Home from "./pages/Home";
  

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function App() {

  return (
    <Router>
      <div data-component="DivInRouter">
        <Navbar data-component="Navbar"/>
        <Wrapper data-component="Wrapper">
          <Switch>
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
