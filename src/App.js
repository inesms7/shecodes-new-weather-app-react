import React from "react";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<div className="container">
					<div className="column-one column">
						<img src="" alt="" />
					</div>
					<div className="column-two column">
						<h2 className="temperature">15 <span>º</span></h2>
					</div>
          <div className="column-third column">
            <h1>Lisbon</h1>	
					</div>
					<div className="column-fourthc column">
            <ul className="weather-conditions">
							<li>Wind</li>
							<li>Precipitation</li>
							<li>Real Feel</li>
						</ul>One</div>
					<div className="column-fifth column">One</div>
					<div className="column-six column">One</div>
				</div>
			</div>
		</div>
	);
}
