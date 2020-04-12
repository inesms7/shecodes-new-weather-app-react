import React from "react";
import UpdatedDate from "./UpdatedDate";
import Icon from "./Icon";
import Convertor from "./Convertor";
import Forecast from "./Forecast";
import "./Forecast.css";

import "./App.css";

export default function Temperature(props) {
	return (
		<div className="container">
			<div className="column-one column">
				<Icon code={props.weather.icon} className="sun-img" />
			</div>
			<div className="column-two column">
				<Convertor celsius={props.weather.temperature} />
			</div>
			<div className="column-third column">
				<h1>{props.weather.city}</h1>
				<ul className="weather-conditions">
					<li>
						<span className="description">Wind:</span> {props.weather.wind} km/h{" "}
					</li>
					<li>
						<span className="description">Humidity:</span>{" "}
						{props.weather.humidity} %{" "}
					</li>
					<li>
						<span className="description">Description:</span>{" "}
						{props.weather.description}{" "}
					</li>
				</ul>
			</div>
			<div className="column-fourth column">
				<div>
					<p className="date">
						<UpdatedDate date={props.weather.date} />
					</p>
				</div>
			</div>
			<div className="NewForecast">
				<Forecast />
			</div>
		</div>
	);
}
