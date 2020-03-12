import React, { Component } from 'react';
import './Menu.css';
import MenuContent from './MenuContent/MenuContent'

class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
      isActive: true
    }
  }

  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render(){
    return(
      <>
      <div className="menu__hamburger_container" onClick={this.handleClick}>
        <div className={ "stick stick-1 " + (this.state.isActive ? 'open_menu close_menu' : 'open_menu')}></div>
        <div className={ "stick stick-2 " + (this.state.isActive ? 'open_menu close_menu' : 'open_menu')}></div>
        <div className={ "stick stick-3 " + (this.state.isActive ? 'open_menu close_menu' : 'open_menu')}></div>
      </div>
        <MenuContent />
      </>
    )
  }
}

export default Menu;