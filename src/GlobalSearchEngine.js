import React, { useState } from "react";
import "./App.css";
import "./GlobalSearchEngine.css";
import Temperature from "./Temperature";


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

	function giveLocation(event) {
		event.preventDefault();
		navigator.geolocation.getCurrentPosition(showPosition);
	}

	function showPosition(position) {
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;

		let apiKey = "3cfbc7eebafcf9149917ab5969c53e6c";
		let weatherUrl = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

		axios.get(weatherUrl).then(showResponse);
	}

	function search() {
		let apiKey = "3cfbc7eebafcf9149917ab5969c53e6c";
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

						<button className="location" onClick={giveLocation}>
							Current Location
						</button>
					</form>
				</div>
			</div>
		);
	} else {
		search();
		return "Searching...";
	}
}
