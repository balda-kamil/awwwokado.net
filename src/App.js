import React from 'react';
import './App.css'
import Main from './components/Main/Main'

import ContactForm from './components/ContactForm/ContactForm'

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
        <Route path="/formularz" component={ ContactForm }/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
