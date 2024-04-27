import React from "react";
import styles from './TaskItem.module.css'
import {NavLink} from 'react-router-dom'

const TaskItem = ({title, desc, id, show, onSetID}) => {

   return <div className={styles.taskItem}>
      <div>
         <h3>{title}</h3>
         <p>{desc}</p>
      </div>
      <span>
         <NavLink to={`/app/task/${id}/edit`}>
            <button type="button" className="btn btn-warning">
               <i className="fa-solid fa-pencil"></i> Edit
            </button>
         </NavLink>

            <button type="button" className="btn btn-danger" onClick={() => {onSetID(id); show()}}>
               <i className="fa-solid fa-ban"></i> Delete
            </button>
        

      </span>
   </div>
}

export default TaskItem