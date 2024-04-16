import React from "react";
import {Form, NavLink} from 'react-router-dom'
import Input from '../components/UI/Input'
import Buttons from '../components/UI/Buttons'
import styles from '../App.module.css'


const Logup = () => {
   return <div id={styles["login_container"]}>
      <h2>Log<sup>up</sup></h2>
      <Form method="post" >
         <Input label="Name" type="text" txt="name" />
         <Input label="Email" type="email" txt="email" />
         <Input  label="Password" type="password" txt="password1" />
         <Input  label="Repeat password" type="password" txt="password2" />
         <div id={styles["form_bottom"]}>
            <Buttons submit="Login" reset="Cancelar"/>
            <NavLink to="/login">Login</NavLink>
         </div>
      </Form>
   </div>
}

export default Logup