import React from "react";
import UpdatedDate from "./UpdatedDate";

export default function Temperature(props) {

	return (
		<div className="container">
			<div className="column-one column">
				<img
					src={props.weather.icon}
					alt={props.weather.description}
					width="80%"
					className="sun-img"
				/>
			</div>
			<div className="column-two column">
				<h2 className="temperature">
					{Math.round(props.weather.temperature)}{" "}
					<span className="metrics">
						º<a href="#">C</a> | <a href="#">F</a>
					</span>
				</h2>
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
		</div>
	);
}
