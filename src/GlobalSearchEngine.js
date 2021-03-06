import React, { useState } from "react";
import "./App.css";
import "./GlobalSearchEngine.css";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "./Forecast.css";

import axios from "axios";

export default function GlobalSearchEngine(props) {
	const [weatherInfo, showWeatherInfo] = useState({ ready: false });
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
		let apiKey = "2c876f18aa1c2ba359c8ad5bf9047e13";
		let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(weatherUrl).then(showResponse);
	}

	if (weatherInfo.ready) {
		return (
			<div>
				<div className="column-fourth column">
					<Temperature weather={weatherInfo} />
					<form className="search-form" onSubmit={handleSubmit}>
						<input type="search" className="form-input" onChange={findCity} />
						<input type="submit" className="submit-form" value="Search" />
					</form>
				</div>
				<div className="NewForecast">
					<Forecast city={city} />
				</div>
			</div>
		);
	} else {
		search();
		return "Searching...";
	}
}
