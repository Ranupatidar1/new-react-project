import React from "react";
import "./home.css"
import { NavLink } from "react-router-dom";
const Home = () =>{
    return(
      <div className="main">
        <div className="imageSlider">
     </div>
     <NavLink to = "/gallery" style={{textDecoration: "none"}}>
        <button>Go to gallery</button></NavLink>
     </div>
      ) 
    }
            
                
export default Home;
