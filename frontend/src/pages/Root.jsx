import React from "react";
import {Outlet, useLoaderData, redirect} from 'react-router-dom'
import Header from '../components/Header'
import styles from '../App.module.css'
import {getTasks, checkLogin} from '../utils/master'

const rootLoader = async () => {
   console.log('ok');
   const tasks = await getTasks()
   const login = await checkLogin()
   
   if (!login) {
      return redirect('/')
   }

   return tasks
}

const Root = () => {
   const tasks = useLoaderData()
   return <div className={styles.root}>
      <Header />
      <div className={styles.container}>
         <aside className={styles.aside}>
            <h2>Tasks List</h2>
            <ul>
               {
                  tasks.map(el => <li key={el.id}>{el.title}</li>)
               }
            </ul>
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

export {rootLoader}
export default Root