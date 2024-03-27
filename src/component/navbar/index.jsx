import React from "react";
import './style.css';

import { Link } from "react-router-dom";
const Navbar = () => {
    return <>
    <section>
     <nav>
     <input type="checkbox" id="check"/>
        <label for="check" className="menu">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" className="menu-icon">
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
        </svg>
      </label>
        <div className="logo">
            <img src="https://assets.website-files.com/649189cd213c45a9d650f194/649274769d9c387565201023_logo.png" alt="" />
        </div>
      
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/page"}>Page</Link></li>
            <li><Link to={"/course"}>Course</Link></li>
            <li><Link to={"/Shop"}>Shop</Link></li>
            <li><Link to={"/Utility pages"}>Utility Pages</Link></li>
            <li><Link to={"/Blog"}>Blog</Link></li>
        </ul>
    </nav>
    </section>
   
        
        
    </>
}
export default Navbar;