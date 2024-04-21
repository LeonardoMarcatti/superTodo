import React from "react";
import {NavLink} from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
   return <header className={styles.menu}>
      <h1>ToDos</h1>
      <h3>Foto</h3>
      <nav>
         <NavLink to='/app'>Home</NavLink>
         <NavLink to='tasks'>Tasks</NavLink>
         <NavLink to='newTask'>New Task</NavLink>
      </nav> 
   </header>
}

export default Header