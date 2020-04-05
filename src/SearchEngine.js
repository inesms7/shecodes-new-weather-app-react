/*import React, { useState } from "react";
import "./App.css";
import Temperature from "./Temperature";
import Axios from "axios";

export default function SearchEngine() {
	const [ready, setReady] = useState(false);
	const[temperature, setTemperature] = useState(null);
	function handleResponse(response){
		setTemperature(response.data.main.temp);
		setReady(true);

	}
	
	if (ready) {
		return(
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
	);
	}else {
			let apiKey = "3cfbc7eebafcf9149917ab5969c53e6c";
			let city = "Lisbon";
			let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
			Axios.get(weatherUrl).then(handleResponse);

	return "loading..."

	}

	

}
