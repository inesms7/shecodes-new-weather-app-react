/*import React, { useState } from "react";

export default function Temperature(props) {
	const [temperature, setTemperature] = useState(props.temp);

	function showFahrenheit(event) {
		event.preventDefault();
		setTemperature((props.temp * 9) / 5 + 35);
	}

	function showCelsius(event) {
		event.preventDefault();
		setTemperature(((props.temp - 32) * 5) / 9);
	}

	return (
		<h2 className="temperature">
			{temperature}{" "}
			<span className="metrics">
				º
				<a href="#" onClick={showCelsius}>
					C
				</a>{" "}
				|{" "}
				<a href="#" onClick={showFahrenheit}>
					F
				</a>
			</span>
		</h2>
	);
}
