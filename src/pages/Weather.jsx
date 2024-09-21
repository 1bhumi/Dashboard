import "./Weather.css";
import { useState } from "react";

function Weather(){
    const[city,setCity]=useState();
    const[weather,setWeather]=useState();

    const citychange=(event)=>{
        setCity(event.target.value)
    }

    const changeweather= async ()=>{
        try{
            let x= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d49a3fb6f5cf321b6ab67e97109ce51a`);
            let data= await x.json();
            setWeather(data);
            console.log(data)
        }catch(error){
            console.log(error);
        }
    }
    
    return(
        <div className="weather-container">
            <input className="inpt" type="text" placeholder="Enter city name" value={city} onChange={citychange}></input>
            <button className="btn" onClick={changeweather}>Get Weather</button>
            {weather &&
            <div className="Des">
                <h3 className="nam">{weather.name}</h3>
                <p>Temperature is:  {(weather.main.temp - 273.15).toFixed(2)}°C</p>
                <p className="temp">{weather.weather[0].description}</p>

            </div>
            }
        </div>

    )
}

export default Weather;