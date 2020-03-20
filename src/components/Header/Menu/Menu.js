import React, { useState } from 'react';
import './Menu.css';
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link } from "react-router-dom";

import { useSpring, animated }  from 'react-spring'

function Menu(){
  const [isActive, setActive] = useState(true)

  const fade = useSpring({
    config: { duration: 200 },
    config: { easing: 'ease-in' },
    transform: isActive ? 'scale(0)' : 'scale(1)',
    opacity: isActive ? 0 : 1
  })

  return(
    <>
      <a className="z-100" onClick={() => setActive(!isActive)}>
        <div className="menu__hamburger_container" >
          <div className={ "stick stick-1 " + (isActive ? 'open_menu close_menu' : 'open_menu')}></div>
          <div className={ "stick stick-2 " + (isActive ? 'open_menu close_menu' : 'open_menu')}></div>
          <div className={ "stick stick-3 " + (isActive ? 'open_menu close_menu' : 'open_menu')}></div>
        </div>
      </a>

      <animated.div config={{duration: 200}} style={fade} className="menu__expanded">
        <nav>
          <ul className="__light-subtitle">
            <li><Link onClick={() => setActive(!isActive)} to="hero">HOME</Link></li>
            <li><Link onClick={() => setActive(!isActive)} to="offer">OFERTA</Link></li>
            <li><Link onClick={() => setActive(!isActive)} to="quotes">OPINIE KLIENTÓW</Link></li>
            <li><Link onClick={() => setActive(!isActive)} to="contact">KONTAKT</Link></li>
          </ul>
        </nav>
      </animated.div>

    </>
  )
}

export default Menu;