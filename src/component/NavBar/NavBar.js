import React from "react";
import logo from "./logo.png";
import "./NavBar.css";
import Menu from "../Menu/Menu.js";


class NavBar extends React.Component {
  render() {
    return (
      <header >
        <br />
        <div className="header">
          <a href="/">
            <img src={logo} alt="" className="logo" />
          </a>
          <Menu
          link1={'Home'}
          link2={'Tienda'}
          link3={'Promociones'}
          link4={'Contacto'}
          />
       
        </div>
        
      </header>
    );
  }
}

export default NavBar;
