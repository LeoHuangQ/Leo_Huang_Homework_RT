import React from "react";
import { Link } from "react-router-dom";



function Header() {
  return (
   
        <div>
          <h1>
            Router App
          </h1>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
       
   
  );
}

export default Header;
