import React, {useContext} from "react";
import {useLoaderData, redirect, useNavigate} from 'react-router-dom'
import TaskItem from "../components/TaskItem";
import ModalContext from "../../context/modalContext";
import Modal from "../components/Modal";
import { deleteTask } from "../utils/master";

const Tasks = () => {
   const data = useLoaderData('edit')
   const ctx = useContext(ModalContext)
   const navigate = useNavigate()

   const handleCancel = () => {
      ctx.hideModal(); 
      ctx.setTaskID(null)
   }

   const handleDelete = (id) => {
      const result = deleteTask(id)
      if (result) {
         ctx.hideModal(); 
         ctx.setTaskID(null)
         navigate(0)  
      }
   }

   return <>
      {
         ctx.show && <Modal hideModal={ctx.hideModal} id="danger">
            <h2>Danger!</h2>
            <p>Task will be deleted!</p>
            <div>
               <button type="button" onClick={() => handleDelete(ctx.taskID)} className="btn btn-danger" style={{marginRight: '10px'}}>Delete</button>
               <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
            </div>
         </Modal>
      }
      <h2>Tasks</h2>
      {
         data.map(el => <TaskItem key={el.id} title={el.title} desc={el.desc} id={el.id} show={ctx.showModal} onSetID={ctx.setTaskID}/> )
      }
   </>
}

export default Tasks