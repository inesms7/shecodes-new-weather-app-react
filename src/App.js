import React from "react";
import "./App.css";
import "./Forecast.css";
import "./GlobalSearchEngine.css";
import GlobalSearchEngine from "./GlobalSearchEngine";
import Forecast from "./Forecast";


export default function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<GlobalSearchEngine />

			</div>
		</div>
	);
}
