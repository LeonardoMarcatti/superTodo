import React from "react";
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import styles from '../App.module.css'

const Root = () => {
   return <div className={styles.root}>
      <Header />
      <div className={styles.container}>
         <aside className={styles.aside}>
            <h2>Tasks List</h2>
         </aside>
         <main className={styles.main}>
             <Outlet />
         </main>
      </div>
      <footer className={styles.footer}>
         <small>Footer</small>
      </footer>
   </div>
}

export default Root