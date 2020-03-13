import React, { useState } from 'react';
import './Menu.css';
import MenuContent from './MenuContent/MenuContent'

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
        <MenuContent />
      </animated.div>
    </>
  )
}

export default Menu;