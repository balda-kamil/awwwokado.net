import React from 'react';
import './App.css'
import Main from './components/Main/Main'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-107689003-3');

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={ Main }/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
