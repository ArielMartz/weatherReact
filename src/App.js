import React from 'react';
import './App.css';
import Input from './components/Input';
import { WiDayLightWind } from "react-icons/wi";
function App() {
  return (
    <div className="App">
      <div className="weather">
        <Input/>
        <div className="weather-location">
        <h3>Clima en Rio de Janeiro</h3>

        <div>
        <h1 className='weather-degree'>12.80 °C</h1>
        </div>

        <div className='weather-description'>
          <div>
          <span className='weather-icon'>
          <WiDayLightWind/>
          </span>
          <h3>Almost sunny</h3>
          </div>

          <h3>Humedad: 63%</h3>
          <h3>Velocidad del viento: 20km/h</h3>
        </div>
        <div>
          <h3>JP</h3>
          <h3>12/09/2022, 22:20 PM</h3>
        </div>
      </div>

      
      </div>
    </div>
  );
}

export default App;
