import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import Dashboard from './components/dashboard';
import TradeNow from './components/tradenow';
import About from './components/about';
import SignUp from './components/signup';
import Login from './components/login';
import "bootstrap/dist/css/bootstrap.min.css";
import './app.css';

const App = () => {

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/tradenow' exact component={TradeNow} />
          <Route path='/about' exact component={About} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/login' exact component={Login} />        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
