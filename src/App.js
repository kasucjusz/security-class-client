import './App.css';
import React, { Component }  from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignIn from "./components/usermanagement/SignIn/SignIn";
import SignUp from "./components/usermanagement/SinUp/SignUp";
import About from "./components/layout/About";
import Navbar from "./components/layout/Navbar"

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar/>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/about" component={About}/>
          </div>
      </Router>
  );
}

export default App;
