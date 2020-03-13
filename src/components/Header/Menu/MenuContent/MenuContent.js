import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particle_params from './particle_params';
class MenuContent extends Component{
  render(){
    return (
      <>
        <Particles 
          params={particle_params}
          className="position-absolute w-100 h-100"/>
        <ul>
          <li>HOME</li>
          <li>OFERTA</li>
          <li>ZREALIZOWANE PROJEKTY</li>
          <li>OPINIE KLIENTÓW</li>
          <li>KONTAKT</li>
        </ul>
      </>
    );
  }
}

export default MenuContent;