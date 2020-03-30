import React from 'react';
import './Hero.css';

import { Link } from "react-scroll";

function Hero(){
  return(
    <div className="__main-wrapper">
      <h1 className="__bold-title">APLIKACJE I STRONY WWW</h1>
      <h2 className="__light-subtitle">STWORZONE POD TWOJE POTRZEBY</h2>
      <p className="__paragraph-normal">Spełniające najnowsze standardy i wymagania</p>
      <Link to="offer"  
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}>
        <button className="btn-big">SPRAWDŹ NAS</button>
      </Link>
    </div>
  )
}

export default Hero;