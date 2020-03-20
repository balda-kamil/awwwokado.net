import React from 'react';
import Header from './../Header/Header'
import Hero from './../Hero/Hero'
import Offer from './../Offer/Offer'
import Quotes from './../Quotes/Quotes'
import Logos from './../Logos/Logos'
import Footer from './../Footer/Footer'

function Main() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <header className="row header">
            <Header id="header"/>
          </header>
        </div>
        <div className="container-fluid__hero-custom">
          <section className="row justify-center">
            <Hero id="hero"/>
          </section>
        </div>
      </div>
      <section className="container">
        <div className="row">
          <Offer id="offer"/>
        </div>
      </section>
      <section className="container" id="quotes">
        <h2 className="t-center color-blue mb-100"><span className="__bold-title">KLIENCI </span><span className="__light-subtitle">o nas</span></h2>
        <div className="row justify-center">
          <Quotes/>
        </div>
      </section>
      <section className="container">
        <div className="row logos-row">
          <Logos id="logos"/>
        </div>
      </section>
      <footer className="background" id="contact">
        <div className="container">
          <Footer/>
        </div>
      </footer>
    </>
  );
}

export default Main;
