import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Offer from './components/Offer/Offer'
import Quotes from './components/Quotes/Quotes'

function App() {
  return (
    <>
    <div className="hero">
      <div className="container">
        <header className="row header">
          <Header/>
        </header>
      </div>
      <div className="container-fluid__hero-custom">
        <section className="row justify-center">
          <Hero/>
        </section>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <Offer/>
      </div>
    </div>
    <div className="container">
      <h2 className="t-center color-blue mb-100"><span className="__bold-title">KLIENCI </span><span className="__light-subtitle">o nas</span></h2>
      <div className="row justify-center">
        <Quotes/>
      </div>
    </div>
    </>
  );
}

export default App;
