import React, { useState } from "react";
import "./App.css";

export default function SearchEngine() {
	let apiKey = "3cfbc7eebafcf9149917ab5969c53e6c";
	let city = "Lisbon";
	let weatherUrl = `https: //api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	const [city, setCity] = useState(" ");

	function handleSubmit(event) {
		event.preventDefault();
	}

	function updateCity(event) {
		setCity(event.target.value);
	}

	return (
		<div>
			<p className="date">
				4 de Abril, 2020 | <span className="time"> 10:00</span>
			</p>
			<form className="search-form" onSubmit={handleSubmit}>
				<input type="search" className="form-input" onChange={updateCity} />
				<input type="submit" className="submit-form" value="Search" />>
			</form>

			<button className="location">Current Location</button>
		</div>
	);
}
