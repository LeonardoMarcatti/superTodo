import React from "react";

const Input = ({label, type, txt, value}) => {
   return <div className="mb-3">
      <label htmlFor={txt} className="form-label">{label}</label>
      <input type={type} name={txt} id={txt} className="form-control" defaultValue={value ? value : ''} />
   </div>
}

export default Input