import React from "react";
import {useLoaderData} from 'react-router-dom'
import TaskItem from "../components/TaskItem";

const Tasks = () => {
   const data = useLoaderData()
   return <>
      <h2>Tasks</h2>
      {
         data.map(el => <TaskItem key={el.id} title={el.title} desc={el.desc} /> )
      }
   </>
}

export default Tasks