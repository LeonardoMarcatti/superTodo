import React from "react";

const Buttons = ({submit, reset}) => {
   return <div>
      <button type="submit" className="btn btn-primary">{submit ? submit : 'Save'}</button>
      <button type="reset" className="btn btn-warning">{reset ? reset : 'Clear'}</button>
   </div>
}

export default Buttons