import React, { useState } from "react";
import "./App.css";
import Axios from "axios";



export default function GlobalSearchEngine() {
    return(
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
				<div className="forecast">
                    <div className="forecast-container">
                        <div className="forecast-date">26 April</div>
                        <div className="forecast-date">27 April</div>
                        <div className="forecast-date">28 April</div>
                        <div className="forecast-date">29 April</div>
                        <div className="forecast-date">30 April</div>
                        <div className="forecast-date">1 May</div>
                        <div className="forecast-temperature">
                            <strong>10º</strong> 8º
                        </div>
                        <div className="forecast-temperature">
                            <strong>12º</strong> 10º
                        </div>
                        <div className="forecast-temperature">
                            <strong>9º</strong> 7º
                        </div>
                        <div className="forecast-temperature">
                            <strong>14º</strong> 10º
                        </div>
                        <div className="forecast-temperature">
                            <strong>18º</strong> 14º
                        </div>
                        <div className="forecast-temperature">
                            <strong>25º</strong> 20º
                        </div>
                        <div className="forecast-icon">
                            <img
                                src="https://i.dlpng.com/static/png/117769_preview.png"
                                alt=""
                                width="60px"
                            />
                        </div>
                        <div className="forecast-icon">
                            <img
                                src="https://i.dlpng.com/static/png/117769_preview.png"
                                alt=""
                                width="60px"
                            />
                        </div>
                        <div className="forecast-icon">
                            <img
                                src="https://i.dlpng.com/static/png/117769_preview.png"
                                alt=""
                                width="60px"
                            />
                        </div>
                        <div className="forecast-icon">
                            <img
                                src="https://i.dlpng.com/static/png/117769_preview.png"
                                alt=""
                                width="60px"
                            />
                        </div>
                        <div className="forecast-icon">
                            <img
                                src="https://i.dlpng.com/static/png/117769_preview.png"
                                alt=""
                                width="60px"
                            />
                        </div>
                        <div className="forecast-icon">
                            <img
                                src="https://i.dlpng.com/static/png/117769_preview.png"
                                alt=""
                                width="60px"
                            />
                        </div>
                    </div>
		        </div>
            </div>
          
    );
}