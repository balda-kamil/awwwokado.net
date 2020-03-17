import React from 'react';
import './Logos.css';

import ca30 from './../../media/ca30logo_black.png'
import adgents from './../../media/adgents_logo_black.png'
import mlipska from './../../media/kancelaria_lipska_logo.png'
import blueazurit from './../../media/blue_azurit.png'
import infoshare from './../../media/infoshare-logo.svg'
import klinikabalda from './../../media/klinika_balda.png'

function Logos(){
  return(
    <>
      <img src={ca30} alt="partner logo"/>
      <img src={adgents} alt="partner logo"/>
      <img src={mlipska} alt="partner logo"/>
      <img src={blueazurit} alt="partner logo"/>
      <img src={infoshare} alt="partner logo"/>
      <img src={klinikabalda} alt="partner logo"/>
    </>
  )
}

export default Logos;