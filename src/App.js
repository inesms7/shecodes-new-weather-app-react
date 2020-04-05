import React from "react";
import "./App.css";
import "./Forecast.css";
import "./SearchEngine.css";
import GlobalSearchEngine from "./GlobalSearchEngine";

export default function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<GlobalSearchEngine />
			</div>
		</div>
	);
}
