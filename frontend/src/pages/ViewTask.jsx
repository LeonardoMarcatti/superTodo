import React from "react";
import { getTask } from "../utils/master";
import { useLoaderData } from "react-router-dom";


const viewLoader = async ({params}) => {
   const task = await getTask(params.id)
   return task
}

const ViewTask = () => {
   const task = useLoaderData()

   return <>
      <h1>{task.title}</h1>
      <h2>{task.desc}</h2>
      <h3>Deadline: </h3>
      <p>{task.deadLine}</p>
   </>
}

export {viewLoader}
export default ViewTask;