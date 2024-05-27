import React, {useContext, Suspense} from "react";
import {useLoaderData, Await} from 'react-router-dom'
import TaskItem from "../components/TaskItem";
import ModalContext from "../../context/modalContext";
import { getTasks } from "../utils/master";

const Tasks = () => {
   const data = useLoaderData('edit')
   const ctx = useContext(ModalContext)
   console.log('tasks');
   return <>
      
      <h2>Tasks</h2>
      <Suspense fallback={<h2>Loading tasks...</h2>}>
         <Await resolve={data}>
            {
               data.length == 0 && <h3>No tasks at the moment!</h3>
            }
            {
               data.map(el => <TaskItem key={el.id} title={el.title} id={el.id} show={ctx.showModal} onSetID={ctx.setTaskID}/> )
            }
         </Await>
      </Suspense>
      
   </>
}

export {getTasks}
export default Tasks