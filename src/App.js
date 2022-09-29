import React from "react";
import Home from "./Home";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Gallery from "./gallery";
import { Routes, Route } from 'react-router-dom';
const App=() =>{
  return (
    <div>

       <Routes>
       <Route path='/' element={<><Navbar/><Home/></>}></Route>
      <Route path="/project" element={<><Navbar/><Project/></>}></Route>
          <Route path='/skills' element={ <><Navbar/><Skills/></>}></Route>
        <Route path='/contact' element={<><Navbar/><Contact/></>}></Route>
        <Route path='/gallery' element={<><Navbar/><Gallery/></>}></Route>
          
      </Routes>
    </div>
  
    );
}

export default App;
