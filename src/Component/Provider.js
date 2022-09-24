import PackageContext from "./Context";
import React, {useState} from "react";
const Provider =(props)=>{
    let[intro]=useState({
        name:"Ranu Patidar",
         qualification :"B.Tech CSE",
         college: "SDBCE"
    })
    return(
     <PackageContext.Provider 
      value={
        {data:intro}
      }
      >
        {props.children}
      </PackageContext.Provider>

    )
}
export default Provider;