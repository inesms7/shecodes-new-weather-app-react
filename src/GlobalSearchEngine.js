import React, { useState } from "react";
import "./App.css";
import "./GlobalSearchEngine.css";
import Axios from "axios";

export default function GlobalSearchEngine() {
	return (
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
					{}{" "}
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
			<div className="column-fourth column">
				<div>
					<p className="date">
						4 de Abril, 2020 | <span className="time"> 10:00</span>
					</p>
					<form className="search-form">
						<input type="search" className="form-input" />
						<input type="submit" className="submit-form" value="Search" />
					</form>

					<button className="location">Current Location</button>
				</div>
			</div>
		</div>
	);
}
