import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
  return (
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
  );
}

export default App;
