import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const OPEN_WEATHER_API_KEY = "e1c6d5eab1f6c4d3be688c849d4cdf5d";
 
class App extends React.Component{

  state = {
      temp: undefined,
      temp_max: undefined,
      temp_min: undefined,
      sunrise: undefined,
      sunset: undefined,
      humidity: undefined,
      pressure: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }

  render(){
    return (
      <div>
        <Info />
        <Form weatherMethod = {this.gettingWeather} />
        <Weather />
      </div> 
    );
  }
}

export default App;