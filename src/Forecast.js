import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import "./Forecast.css";

export default function Forecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function showResponse(response) {
		setForecast(response.data);
		setLoaded(true);
	}

	if (loaded && props.city === forecast.city.name) {
		return (
			<div className="Forecast row">
				<ForecastPreview data={forecast.list[0]} />
				<ForecastPreview data={forecast.list[1]} />
				<ForecastPreview data={forecast.list[2]} />
				<ForecastPreview data={forecast.list[3]} />
				<ForecastPreview data={forecast.list[4]} />
			</div>
		);
	} else {
		let apiKey = "b7ce8037f12666f5cde15cb10f203a92";
		let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
		axios.get(weatherUrl).then(showResponse);

		return ("lisbon");
	}
}
