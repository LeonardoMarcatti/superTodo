import React from "react";

const Input = ({label, type, txt, value, hidden}) => {
   return <div className="mb-3">
      <label htmlFor={txt} className="form-label" hidden={hidden}>{label}</label>
      <input type={type} name={txt} id={txt} className="form-control" defaultValue={value ? value : ''} hidden={hidden}/>
   </div>
}

export default Input