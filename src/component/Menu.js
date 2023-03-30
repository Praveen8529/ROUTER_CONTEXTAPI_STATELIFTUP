import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="route-container">
      <ul>
        <li>
          <Link to={"/"}>Login</Link>
        </li>
        <li>
          <Link to={"/Home"}>Home</Link>
        </li>
        <li>
          <Link to={"/MultipleEventHandlers"}>MultipleEventHandlers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
