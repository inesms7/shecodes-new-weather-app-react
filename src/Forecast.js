/*import React, { useState } from "react";
import "./App.css";
import "./Forecast.css";
import axios from "axios";
import Icon from "./Icon";

export default function Forecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function showResponse(response) {
		setForecast(response.data);
		setLoaded(true);
	}

	function formatHours(date) {
		let hours = date.getHours();
		if (hours < 10) {
			hours = `0${hours}`;
		}
		let minutes = date.getMinutes();
		if (minutes < 10) {
			minutes = `0${minutes}`;
		}
		return `${hours}:${minutes}`;
	}

	if (loaded && forecast.city === props.city) {
		return (
			<div className="WeatherForecast row">
				{forecast.list.slice(0, 5).map(function (weather) {
					return (
						<div className="forecast">
							<div className="forecast-container">
								<div className="forecast-column">
									{formatHours(new Date(props.weather.dt * 1000))}
								</div>
								<div className="forecast-date">
									<Icon code={props.weather.weather[0].icon} />
								</div>
								<div className="forecast-temperature">
									{Math.round(props.weather)}°C
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	} else {
		/*let apiKey = "e8b7da95b38b721d120705f7518a1b9d";
		let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
		axios.get(weatherUrl).then(showResponse);

		return null;
	}
}
*/