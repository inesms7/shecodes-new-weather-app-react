import React from "react";
import "./App.css";
import Forecast from "./Forecast";
import "./Forecast.css";
import SearchEngine from "./SearchEngine";
import "./SearchEngine.css";
import Temperature from "./Temperature";

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
						<Temperature temp="16"/>
					</div>
					<div className="column-third column">
						<h1>Lisbon</h1>
						<ul className="weather-conditions">
							<li>Wind: </li>
							<li>Precipitation: </li>
							<li>Real Feel: </li>
						</ul>
					</div>
					<div className="column-fourth column">
						<SearchEngine />
					</div>
				</div>
				<Forecast />
			</div>
		</div>
	);
}
