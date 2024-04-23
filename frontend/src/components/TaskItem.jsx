import React from "react";
import styles from './TaskItem.module.css'

const TaskItem = ({title, desc}) => {
   return <div className={styles.taskItem}>
      <div>
         <h3>{title}</h3>
         <p>{desc}</p>
      </div>
      <span>
         <button type="button" className="btn btn-warning"><i className="fa-solid fa-pencil"></i> Edit</button>
         <button type="button" className="btn btn-danger"><i className="fa-solid fa-ban"></i> Delete</button>

      </span>
   </div>
}

export default TaskItem