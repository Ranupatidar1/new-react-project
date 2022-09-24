import React from "react";
import Provider from "./Component/Provider";
import Home from "./Home";
import Project from "./Project";
import Skills from "./Skills";
import Testimonal from "./Testimonal";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Routes, Route } from 'react-router-dom';
const App=() =>{
  return (
    <div>

       <Routes>
       <Route path='/' element={<><Navbar/> <Provider><Home/></Provider></>}></Route>
      <Route path="/project" element={<><Navbar/><Project/></>}></Route>
          <Route path='/skills' element={ <><Navbar/><Skills/></>}></Route>
          <Route path='/testimonal' element={<><Navbar/><Testimonal/></>}></Route>
        <Route path='/contact' element={<><Navbar/><Contact/></>}></Route>
          
      </Routes>
    </div>
  
    );
}

export default App;
