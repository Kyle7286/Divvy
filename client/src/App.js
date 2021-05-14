/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  import Wrapper from "./components/Wrapper";
  import Home from "./pages/Home";
  import Test from "./pages/Test";
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
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Test}/>
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
