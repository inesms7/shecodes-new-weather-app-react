import React, { useState } from "react";
import "./App.css";
import "./GlobalSearchEngine.css";
import axios from "axios";

export default function GlobalSearchEngine() {
    const [weatherinfo, showWeatherInfo] = useState({ ready:false});

    function showResponse(response){
    showWeatherInfo({
			ready: true,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			city: response.data.name,
			//date: newDate(response.data.dt * 1000),
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
		});
    }

    if(weatherinfo.ready){
        return(
            <div className="container">
                <div className="column-one column">
                    <img
                        src={weatherinfo.iconUrl}
                        alt={weatherinfo.description}
                        width="80%"
                        className="sun-img"
                    />
                </div>
                <div className="column-two column">
                    <h2 className="temperature">
                        {Math.round(weatherinfo.temperature)}{" "}
                        <span className="metrics">
                            º<a href="#">C</a> | <a href="#">F</a>
                        </span>
                    </h2>
                </div>
                <div className="column-third column">
                    <h1>{weatherinfo.city}</h1>
                    <ul className="weather-conditions">
                        <li>Wind: {weatherinfo.wind} </li>
                        <li>Humidity: {weatherinfo.humidity} </li>
                        <li>Description: {weatherinfo.description} </li>
                    </ul>
                </div>
                <div className="column-fourth column">
                    <div>
                        <p className="date">
                            4 de Abril, 2020 | <span className="time"> 10:00</span>
                        </p>
                        <form className="search-form">
                            <input type="search" className="form-input" />
                            <input type="submit" className="submit-form" value="Search" />
                        </form>

                        <button className="location">Current Location</button>
                    </div>
                </div>
            </div>)
        } else {
        
        let apiKey = "3cfbc7eebafcf9149917ab5969c53e6c";
        let city = "Lisbon";
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(weatherUrl).then(showResponse);

        return("Loading...")

        } 
}
