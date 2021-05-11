import React, { Component } from 'react';
import './styles/headerStyle.css';
class Header extends Component{
  render() {
    return (
        <div className="head"> 
          <img className='logo' src='logo.png' alt='logo'></img>
          <div>
                  <h1 className='inst'>NAVASIKSHAN ERAS</h1>
                  <h2 className='inst'>A New Verge Of Learning...</h2>
          </div>
        </div> 
    );
  }
}
export default Header;
