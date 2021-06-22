import React from "react";
import "./Menu.css";
import CartWidget from "../CartWidget/CartWidget.js";
import {NavLink} from 'react-router-dom'

function Menu() {
  return (
    <div>
      <div className="navegacion">
        <NavLink className='link' activeStyle={{color: "#3c1b55"}} exact to='/'>Inicio</NavLink>
        <NavLink className='link' activeStyle={{color: "#3c1b55"}} to='/promociones'>Promociones</NavLink>
        <NavLink className='link' activeStyle={{color: "#3c1b55"}} to='/categorias'>Catergorias</NavLink>
        <NavLink className='link' activeStyle={{color: "#3c1b55"}} to='/contacto'>Contacto</NavLink>
        <li className="link">
        <CartWidget />
        </li>
        
      </div>
      
    </div>
  );
}

export default Menu;
