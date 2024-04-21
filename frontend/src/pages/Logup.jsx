import React from "react";
import {Form, NavLink} from 'react-router-dom'
import Input from '../components/UI/Input'
import Buttons from '../components/UI/Buttons'
import styles from '../App.module.css'


const Logup = () => {
   return <div id={styles["login_container"]}>
      <h2>Log<sup>up</sup></h2>
      <Form method="post" >
         <Input label="device_name" type="text" txt="device_name" hidden value="pc"/>
         <Input label="Name" type="text" txt="name" />
         <Input label="User name" type="text" txt="username" />
         <Input label="Email" type="email" txt="email" />
         <Input  label="Password" type="password" txt="password" />
         <Input  label="Repeat password" type="password" txt="password_confirmation" />
         <div id={styles["form_bottom"]}>
            <Buttons submit="Register" reset="Cancel"/>
            <NavLink to="/">Login</NavLink>
         </div>
      </Form>
   </div>
}

export default Logup