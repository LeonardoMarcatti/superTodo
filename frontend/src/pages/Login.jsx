import React from "react";
import {Form, NavLink} from 'react-router-dom'
import Input from '../components/UI/Input'
import Buttons from '../components/UI/Buttons'
import styles from '../App.module.css'

const Login = () => {
   return <div id={styles["login_container"]}>
      <h2>Login</h2>
      <Form method="post" >
         <Input label="Email" type="email" txt="email" />
         <Input label="" type="text" txt="device_name" value='mafagafoPC' hidden/>
         <Input  label="Senha" type="password" txt="password" />
         <div id={styles["form_bottom"]}>
            <Buttons submit="Login" reset="Cancelar"/>
            <NavLink to="/logup">Logup</NavLink>
         </div>
      </Form>
   </div>
}

export default Login