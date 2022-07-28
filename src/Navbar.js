import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="main_navbar_container">
        <div className="nav_image_container">
          <img src="crop_imagee.png" alt="" />
        </div>
        <div className="nav_link_container">
          <NavLink to="">HOME</NavLink>
          <NavLink to="">ABOUT US</NavLink>
          <NavLink to="">SERVICES</NavLink>
          <NavLink to="">CONTACT</NavLink>
          <NavLink to="">LOG IN</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
