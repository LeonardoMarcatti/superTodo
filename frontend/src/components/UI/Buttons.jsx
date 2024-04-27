import React from "react";
import { NavLink } from "react-router-dom";

const Buttons = ({submit, reset, show, back, forward}) => {
   return <div>
      <NavLink to={forward}>
         <button type="submit" className="btn btn-primary" onClick={show} style={{marginRight: '10px'}}>{submit ? submit : 'Save'}</button>
      </NavLink>
      <NavLink to={back}>
         <button type="reset" className="btn btn-warning">{reset ? reset : 'Clear'}</button>
      </NavLink>
   </div>
}

export default Buttons