import React from "react";
import logo from "./logo.png";
import "./NavBar.css";
import Menu from "../Menu/Menu.js";
import {Link} from 'react-router-dom'


class NavBar extends React.Component {
  render() {
    return (
      <header >
        <br />
        <div className="header">
          <Link to='/'>
            <img src={logo} alt="" className="logo" />
          </Link>
          
          <Menu/>
       
        </div>
        
      </header>
    );
  }
}

export default NavBar;
