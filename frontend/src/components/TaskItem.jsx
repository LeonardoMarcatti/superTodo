import React, {useContext} from "react";
import styles from './TaskItem.module.css'
import {NavLink, Form} from 'react-router-dom'
import ModalContext from "../../context/modalContext";
import Modal from "./Modal";


const TaskItem = ({title, id, show, onSetID}) => {
   const ctx = useContext(ModalContext)

   const handleCancel = () => {
      ctx.hideModal(); 
      ctx.setTaskID(null)
   }

   return <>
      {
         ctx.show && <Modal hideModal={ctx.hideModal} id="danger">
            <h2>Danger!</h2>
            <p>Task will be deleted!</p>
            <div className={styles.bottom}>
               <Form method="delete" onSubmit={ctx.hideModal}>
                  <input type="number" name="id" id="id" value={ctx.taskID} readOnly hidden/>
                  <button type="submit" className="btn btn-danger" style={{marginRight: '10px'}}>Delete</button>
               </Form>
               <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
            </div>
         </Modal>
      }

   
      <div className={styles.taskItem}>
         <div>
            <h3>{title}</h3>
         </div>
         <span>
            <NavLink to={`/app/task/edit/${id}`}>
               <button type="button" className="btn btn-warning">
                  <i className="fa-solid fa-pencil"></i> Edit
               </button>
            </NavLink>

            <button type="button" className="btn btn-danger" onClick={() => {onSetID(id); show()}}>
               <i className="fa-solid fa-ban"></i> Delete
            </button>
         </span>
      </div>   
   </>
}

export default TaskItem