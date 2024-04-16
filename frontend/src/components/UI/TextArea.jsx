import React from "react";

const TextArea = ({txt, label, value}) => {
   return <div className="mb-3">
      <label htmlFor={txt}  className="form-label">{label}</label>
      <textarea name={txt} id={txt} cols="30" rows="10"  className="form-control" defaultValue={value ? value : ''}></textarea>
   </div>
}

export default TextArea