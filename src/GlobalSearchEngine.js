import React, { useState } from "react";
import "./App.css";
import "./GlobalSearchEngine.css";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import axios from "axios";

export default function GlobalSearchEngine(props) {
	const [weatherinfo, showWeatherInfo] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function showResponse(response) {
		showWeatherInfo({
			ready: true,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			city: response.data.name,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function findCity(event) {
		setCity(event.target.value);
	}

	function search() {
		let apiKey = "e8b7da95b38b721d120705f7518a1b9d";
		let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(weatherUrl).then(showResponse);
	}

	if (weatherinfo.ready) {
		return (
			<div>
				<div className="column-fourth column">
					<Temperature weather={weatherinfo} />
					<form className="search-form" onSubmit={handleSubmit}>
						<input type="search" className="form-input" onChange={findCity} />
						<input type="submit" className="submit-form" value="Search" />

						<button className="location">Current Location</button>
					</form>
				</div>
				<Forecast city={weatherinfo.city} weather={weatherinfo.temperature} />
			</div>
		);
	} else {
		search();
		return "Searching...";
	}
}

