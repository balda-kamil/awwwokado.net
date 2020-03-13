import React, { useState } from 'react';
import './Menu.css';
import MenuContent from './MenuContent/MenuContent'

import { useSpring, animated }  from 'react-spring'

function Menu(){
  const [isActive, setActive] = useState(true)

  const fade = useSpring({
    opacity: isActive ? 0 : 1,
  })

  return(
    <>
    <div className="menu__hamburger_container" onClick={() => setActive(!isActive)}>
      <div className={ "stick stick-1 " + (isActive ? 'open_menu close_menu' : 'open_menu')}></div>
      <div className={ "stick stick-2 " + (isActive ? 'open_menu close_menu' : 'open_menu')}></div>
      <div className={ "stick stick-3 " + (isActive ? 'open_menu close_menu' : 'open_menu')}></div>
    </div>
      <animated.div style={fade} className="menu__expanded">
        <MenuContent />
      </animated.div>
    </>
  )
}

export default Menu;