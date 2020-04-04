import React from "react";
import "./App.css";
import Forecast from "./Forecast";
import "./Forecast.css";

export default function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<div className="container">
					<div className="column-one column">
						<img
							src="https://i.dlpng.com/static/png/117769_preview.png"
							alt="sunny-day"
							width="80%"
							className="sun-img"
						/>
					</div>
					<div className="column-two column">
						<h2 className="temperature">
							150{" "}
							<span className="metrics">
								º<a href="#">C</a> | <a href="#">F</a>
							</span>
						</h2>
					</div>
					<div className="column-third column">
						<h1>Lisbon</h1>
						<ul className="weather-conditions">
							<li>Wind: </li>
							<li>Precipitation: </li>
							<li>Real Feel: </li>
						</ul>
					</div>
				</div>
        <Forecast />
			</div>
		</div>
	);
}
