import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const OPEN_WEATHER_API_KEY = "e1c6d5eab1f6c4d3be688c849d4cdf5d";
 
class App extends React.Component{

  state = {
    city: undefined,
    temp: undefined,
    temp_max: undefined,
    temp_min: undefined,
    wind_speed: undefined,
    wind_deg: undefined,
    humidity: undefined,
    pressure: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`);
      const data = await api_url.json();
      this.setState({
        city: data.name,
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        wind_speed: data.wind.speed,
        wind_deg: data.wind.deg,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        error: undefined
      });
    } else{
      this.setState({
        city: undefined,
        temp: undefined,
        temp_max: undefined,
        temp_min: undefined,
        wind_speed: undefined,
        wind_deg: undefined,
        humidity: undefined,
        pressure: undefined,
        error: "Введите название города"
      });
    }
  }

  render(){
    return (
      <div>
        <Info />
        <Form weatherMethod = {this.gettingWeather} />
        <Weather 
          city = {this.state.city}
          temp = {this.state.temp}
          temp_max = {this.state.temp_max}
          temp_min = {this.state.temp_min}
          wind_speed = {this.state.wind_speed}
          wind_deg = {this.state.wind_deg}
          humidity = {this.state.humidity}
          pressure = {this.state.pressure}
          error = {this.state.error}
        />
      </div> 
    );
  }
}

export default App;