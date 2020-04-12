import React from "react";
import "./App.css";
import "./Forecast.css";
import "./Creator.css";
import "./GlobalSearchEngine.css";
import GlobalSearchEngine from "./GlobalSearchEngine";

export default function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<GlobalSearchEngine defaultCity="Lisbon" />

			</div>
			<div className="creator">
				<a href="https://github.com/inesms7/shecodes-new-weather-app-react">Open-source code</a>, by Inês Santos on <a href="https://www.shecodes.io/demos/react">She Codes React Course</a> 
			</div>
		</div>
	);
}
