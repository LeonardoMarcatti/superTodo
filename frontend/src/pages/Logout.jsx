import React from "react";
import {NavLink} from 'react-router-dom'
const Logout = () => {
   return <>
      <h1>Logout</h1>
      <p>You have logged out</p>
      <p>Click <NavLink to="/">here</NavLink> to login again</p>
   </> 
   
}

export default Logout