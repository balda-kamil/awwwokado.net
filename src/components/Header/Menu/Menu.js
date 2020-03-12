import React, { Component } from 'react';
import './Menu.css';

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
        {
        this.state.isActive === false && 
          <div className="menu__expanded">
            <ul>
              <li>HOME</li>
              <li>OFERTA</li>
              <li>ZREALIZOWANE PROJEKTY</li>
              <li>OPINIE KLIENTÓW</li>
              <li>KONTAKT</li>
            </ul>
          </div>
        }
      </div>
      </>
    )
  }
}

export default Menu;