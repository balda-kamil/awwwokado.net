import React from 'react';
import Particles from 'react-particles-js';

import particle_params from './particle_params'

function MenuContent() {
  return (
    <div className="menu__expanded">
      <Particles 
        params={particle_params}
        className="position-absolute"/>
      <ul>
        <li>HOME</li>
        <li>OFERTA</li>
        <li>ZREALIZOWANE PROJEKTY</li>
        <li>OPINIE KLIENTÓW</li>
        <li>KONTAKT</li>
      </ul>
    </div>
  );
}

export default MenuContent;