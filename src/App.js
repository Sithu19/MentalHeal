import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/header";
import StartingTest from "./Pages/testpage/Starting-test.component";
import Home from "./Pages/hompage/Home";
import Test from "./Pages/testpage/Test";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test" component={Test} />
          <Route path="/startingtest" component={StartingTest} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
