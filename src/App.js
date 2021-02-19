import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
