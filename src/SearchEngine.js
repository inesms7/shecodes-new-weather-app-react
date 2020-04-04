import React from "react";
import "./App.css";

export default function SearchEngine() {
	return (
		<div>
            <p className="date">4 de Abril, 2020 | <span className="time"> 10:00</span></p>
			<form className="search-form">
				<input type="text" className="form-input" />
				<button type="submit" className="submit-form">
					Search
				</button>
			</form>

            <button className="location">Current Location</button>
		</div>
	);
}
