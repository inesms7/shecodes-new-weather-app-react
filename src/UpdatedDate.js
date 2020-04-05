import React from "react";
import "./App.css";

export default function UpdatedDate(props) {
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let Tday = props.date.getDate();
	let day = days[props.date.getDay()];
	let hours = props.date.getHours();
	let minutes = props.date.getMinutes();

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	if (hours < 10) {
		hours = `0${hours}`;
	}

	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	let month = months[props.date.getMonth()];

	return (
		<div>
			{day}, {hours}:{minutes} <strong> | </strong> {Tday} of {month}
		</div>
	);
}
