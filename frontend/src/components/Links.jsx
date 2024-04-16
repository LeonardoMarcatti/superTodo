import React from "react";
import {NavLink} from 'react-router-dom'
const Links = () => {
   return <nav>
            <ul>
               <li><NavLink>Home</NavLink></li>
               <li><NavLink>Tasks</NavLink></li>
               <li><NavLink>New Task</NavLink></li>
            </ul>
         </nav> 
   
}

export default Links