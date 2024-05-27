import React from "react";
import {useRouteError, Link} from 'react-router-dom'

const Error = () => {
   console.log('Error');

   return <>
      <h1>Error</h1>
      <h2>Please try again later</h2>
   </> 
   
}

export default Error