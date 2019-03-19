import React from "react";

const Form = props => (
  <div className="col-sm-4">
    <form className="form-group" onSubmit = {props.weatherMethod}>
      <input className="m-1 form-control form-control-sm" type = "text" name = "city" placeholder = "Город"/>
      <button className="m-1 btn btn-sm btn-primary">Получить погоду</button>
    </form> 
  </div>
)

export default Form;