import React, { useState } from "react";
import "./App.css";
import "./Forecast.css";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

export default function Forecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function showResponse(response) {
		setForecast(response.data);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="Forecast row">
				<WeatherForecastPreview data={forecast.list[0]} />
				<WeatherForecastPreview data={forecast.list[1]} />
				<WeatherForecastPreview data={forecast.list[2]} />
				<WeatherForecastPreview data={forecast.list[3]} />
				<WeatherForecastPreview data={forecast.list[4]} />
			</div>
		);
	} else {
		let apiKey = "3cfbc7eebafcf9149917ab5969c53e6c";
		let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
		axios.get(weatherUrl).then(showResponse);

		return null;
	}
}
