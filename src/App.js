import React from 'react';
import './App.css'
import Main from './components/Main/Main'

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
