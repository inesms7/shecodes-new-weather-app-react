import React from "react";

export default function Convertor(props) {
	function showCelsius(event) {
		event.preventDefault();
		return ((props.celsius - 32) * 5) / 9;
	}

	function showFahrenheit(event) {
		event.preventDefault();
		return (props.celsius * 9) / 5 + 32;
	}

	return (
		<div>
			<h2 className="temperature">
				{Math.round(props.celsius.temperature)}{" "}
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
		</div>
	);
}
