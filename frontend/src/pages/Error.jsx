import React from "react";
import {useRouteError} from 'react-router-dom'

const Error = () => {
   console.log('Error');
   const error = useRouteError()
   console.log(error);
   return <>
      <h1>Erro</h1>
   
   </> 
   
}

export default Error