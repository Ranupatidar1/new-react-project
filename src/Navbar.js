import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
const Navbar =()=>{
    return(
        <div className="nav-bar">
    <h2>NAVBAR</h2>
    <div id="nav-mobile" className="right">
    <NavLink to = "/" style={{textDecoration: "none"}}><span>HOME </span></NavLink> 
     <NavLink to = "/project" style={{textDecoration: "none"}}><span>PROJECT </span></NavLink> 
      <NavLink to = "/skills" style={{textDecoration: "none"}}><span> SKILLS</span></NavLink>
       <NavLink to = "/contact" style={{textDecoration: "none"}}><span>CONTACT</span></NavLink>
      
    </div>
  </div>
        
    )
}
export default Navbar;