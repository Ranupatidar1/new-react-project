import React from "react";
import PackageContext from "./Component/Context";
import "./home.css"
const Home = () =>{
    return(
        <PackageContext.Consumer>
          {
            (value)=>(
                <div className="image">
                   <h1>My Name is {value.data.name}</h1> 
                   <h2>My qualification is {value.data.qualification}</h2> 
                   <h2>My college name is {value.data.college}</h2> 
                   </div>
            )
          }
        </PackageContext.Consumer>
        
    )
}
export default Home;