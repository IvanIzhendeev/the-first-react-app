import React from "react";

const Weather = props => (
  <div className="col-sm-4">
    {props.city &&
      <div>
        <p>Город:{props.city}</p>
        <p>Температура:{props.temp}</p>
        <p>Максимальная температура:{props.temp_max}</p>
        <p>Минимальная температура:{props.temp_min}</p>
        <p>Скорость ветра:{props.wind_speed}</p>
        <p>Направление ветра:{props.wind_deg}</p>
        <p>Влажность:{props.humidity}</p>
        <p>Давление:{props.pressure}</p>
      </div>
    }
    <p>{props.error}</p>
  </div> 
)

export default Weather;