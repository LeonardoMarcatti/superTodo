import React from "react";
import {Form, NavLink} from 'react-router-dom'
import Input from '../components/UI/Input'
import styles from '../App.module.css'

const Login = () => {
   console.log('login');
   return <div id={styles["login_container"]}>
      <h2>Login</h2>
      <Form method="post" >
         <Input label="Email" type="email" txt="email" />
         <Input  label="Senha" type="password" txt="password" />
         <div id={styles["form_bottom"]}>
            <div>
               <button type="submit" className="btn btn-primary">Login</button>
               <button type="reset" className="btn btn-warning">Cancel</button>
            </div>
            <NavLink to="/logup">Logup</NavLink>
         </div>
      </Form>
   </div>
}

export default Login