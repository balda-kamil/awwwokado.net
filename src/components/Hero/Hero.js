import React from 'react';
import './Hero.css';


function Hero(){
  return(
    <div className="__main-wrapper">
      <h1 className="__bold-title">APLIKACJE I STRONY WWW</h1>
      <h2 className="__light-subtitle">STWORZONE POD TWOJE POTRZEBY</h2>
      <p className="__paragraph-normal">Spełniające najnowsze standardy i wymagania</p>
      <button className="btn-big" onClick={() => console.log('dupa')}>JAK MOŻEMY CI POMÓC?</button>
    </div>
  )
}

export default Hero;