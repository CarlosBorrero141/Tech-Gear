import React from "react";
import "./Menu.css";

function Menu({link1, link2, link3, link4}) {
  return (
    <div>
      <ul className="navegacion">
        <li className="link">
          <a href="/">{link1}</a>
        </li>
        <li className="link">
          <a href="/">{link2}</a>
        </li>
        <li className="link">
          <a href="/">{link3}</a>
        </li>
        <li className="link">
          <a href="/">{link4}</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
