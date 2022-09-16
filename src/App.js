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
  const [dataFetched, setDataFetched] = useState(false)



const fetchData = async (e) => {
    e.preventDefault();


    try{
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
      const data = await res.data

      setDegrees(data.main.temp)
      setLocation(data.name)
      setDescription(data.weather[0].description)
      setIcon(data.weather[0].icon)
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      setCountry(data.sys.country)

      setDataFetched(true)
    }catch(err){
      console.log(err)
      alert("Please enter a valid location")
  }
}

const defaultDataFetched = async () =>{
  if(!dataFetched){
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=londres&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    const data = await res.data
  
    setDegrees(data.main.temp)
    setLocation(data.name)
    setDescription(data.weather[0].description)
    setIcon(data.weather[0].icon)
    setHumidity(data.main.humidity)
    setWind(data.wind.speed)
    setCountry(data.sys.country)
  }

}

const date = () => {
  let today = new Date();
  let day = today.getDay();
  let month = month.getMonth() + 1;
  let year = year.getYear();
  let date = day + '/' + month + '/' + year;
}



useEffect(() => {
  defaultDataFetched()
}, [])


  return (
    <div className="App">
      <div className="weather">
        <Input
          text={(e) => setuserLocation(e.target.value)}
          submit={fetchData}
          func={fetchData}
        />
        <div>
        <h3 className="weather-location">Weather in {location}</h3>

        <div>
        <h1 className='weather-degree'> {degrees} °C</h1>
        </div>

        <div className='weather-description'>
            <div className='weather-description-head'>
            <span className='weather-icon'>
              <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon" />
            </span>
            <h3>{description}</h3>
          </div>

          <h3>Humidity: {humidity}%</h3>
          <h3>Wind Speed: {wind}m/s</h3>
        </div>
        <div className='weather-country'>
          <h3>{country}</h3>
          <h2 className='weather-date'>{date}</h2>
        </div>
      </div>

      
      </div>
    </div>
  );
}

export default App;
