import React from "react";

const Buttons = ({submit, reset}) => {
   return <div>
      <button type="submit" className="btn btn-primary">{submit ? submit : 'Salvar'}</button>
      <button type="reset" className="btn btn-warning">{reset ? reset : 'Salvar'}</button>
   </div>
}

export default Buttons