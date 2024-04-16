import React from "react";
import {useLoaderData} from 'react-router-dom'
const Tasks = () => {
   const data = useLoaderData()
   return <>
      <h2>Tasks</h2>
      <h3>{data.message}</h3>
   </>
}

export default Tasks