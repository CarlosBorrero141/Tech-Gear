import React from "react";
import logo from "./logo.png";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <header className="header">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>

        <div>
          <ul className="navegacion">
            <li className='link'>
              <a href="">Home</a>
            </li>
            <li className='link'>
              <a href="">Tienda</a>
            </li>
            <li className='link'>
              <a href="">Promociones</a>
            </li>
            <li className='link'>
              <a href="">Contacto</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default NavBar;
