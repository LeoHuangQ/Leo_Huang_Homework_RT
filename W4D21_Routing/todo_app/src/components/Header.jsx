import React from "react";
import { Link } from "react-router-dom";



function Header() {
  return (
   
        <div>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
       
   
  );
}

export default Header;
