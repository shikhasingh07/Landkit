import React from "react";
import Home from "./Compoent/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import New from "./Compoent/New";
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/New">
            <New />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
