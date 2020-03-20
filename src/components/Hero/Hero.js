import React from 'react';
import './Hero.css';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import ContactForm from '../ContactForm/ContactForm';

function Hero(){
  return(
    <div className="__main-wrapper">
      <h1 className="__bold-title">APLIKACJE I STRONY WWW</h1>
      <h2 className="__light-subtitle">STWORZONE POD TWOJE POTRZEBY</h2>
      <p className="__paragraph-normal">Spełniające najnowsze standardy i wymagania</p>
      <Link to="/formularz">
        <button className="btn-big">JAK MOŻEMY CI POMÓC?</button>
      </Link>
      <Router path="formularz" component={ContactForm}/>
    </div>
  )
}

export default Hero;