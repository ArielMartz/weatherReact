import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import './App.css';
import Input from './components/Input';


function App() {

  const [degrees, setDegrees] = useState(null);
  const [location, setLocation] = useState("");
  const [userLocation, setuserLocation] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [country, setCountry] = useState("");

const API_KEY = "654c975b7125167e9a7accd6467fdc48";

const fetchData = async (e) => {
    e.preventDefault();
  
    const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid={API key}&units=metric");
    const data = await res.data

    setDegrees(data.main.temp)
    setLocation(data.name)
    setDescription(data.weather[0].description)
    setIcon(data.weather[0].icon)
    setHumidity(data.main.humidity)
    setWind(data.wind.speed)
    setCountry(data.sys.country)

    console.log(data)
  }


useEffect(() => {
    fetchData()
    return () => {
      
    };
  }, []);


  return (
    <div className="App">
      <div className="weather">
        <Input
          text={(e) => setuserLocation(e.target.value)}
          submit={fetchData()}
        />
        <div>
        <h3 className="weather-location">Clima en {location}</h3>

        <div>
        <h1 className='weather-degree'> {degrees} °C</h1>
        </div>

        <div className='weather-description'>
          <div className='weather-description-head'>
          <span className='weather-icon'>
          
          </span>
          <h3>{description}</h3>
          </div>

          <h3>Humedad: {humidity}%</h3>
          <h3>Velocidad del viento: {wind} m/s</h3>
        </div>
        <div className='weather-country'>
          <h3>{country}</h3>
          <h2 className='weather-date'>12/09/2022, 22:20 PM</h2>
        </div>
      </div>

      
      </div>
    </div>
  );
}

export default App;
