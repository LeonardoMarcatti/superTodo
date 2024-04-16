import React from "react";

const Select = ({label, value, txt, data}) => {
   return <div className="mb-3">
      <label htmlFor={txt} className="form-label">{label}</label>
      <select name={txt} id={txt} className="form-control" defaultValue={value ? value : ''}>
         {
            data && data.map(el => {
               return <option key={el.id} value={el.priority}>{el.priority}</option>
            })
         }
      </select>
   </div>
}

export default Select