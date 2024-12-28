import { useState } from "react";
import "./Style.css";
import axios from "axios";

const Weather = () => {
    const[city,setcity]=useState("");
    const[weather,setWeather]=useState(null);

    const handleCityChange = (e)=>{
        // console.log(e.target.value);
        setcity(e.target.value);

    }
    const fetchWeather =async ()=>{
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'5cb8c306d944e70d34fd3527295ca783'}`)
            // console.log(response)
            setWeather(response);
        }
        catch(e){
            console.log('error in fetching weather data',e)
        }
    }

    const handleClick = ()=>{
        fetchWeather();
    }

  return (
    <>
      <div className="Weather-box">
           <div className="weather-container">
                <div className="input-box">
                    <input type="text" value={city} onChange={handleCityChange}/>
                </div>
                <div className="submit">
                <button className="submit-btn" onClick={handleClick}>Get Weather</button>
                </div >
                {weather && 
                <div className="weather-data">
                    <h3>{weather.data.name}</h3>
                    <p>temp is {weather.data.main.temp}</p>
                    <p>{weather.data.weather[0].description}</p>
                </div>
                }

           </div>

      </div>
    </>
  );
};
export default Weather;
