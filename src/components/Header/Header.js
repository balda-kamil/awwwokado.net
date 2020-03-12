import React from 'react';
import Logo from '../../media/logo_small.png'
import './Header.css'
import Menu from './Menu/Menu'

const Header = () => {
  return(
    <div className="header_wrapper">
      <img src={Logo} alt="aWWWokado logo"/>
      <Menu/>
    </div>
  )
}

export default Header;