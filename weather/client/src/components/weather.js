import React from "react";

export default function weather(props) {
  return (
    <div className="weather">
      <p className="weather__city">City: {props.city}</p>
      <p className="weather__status">Current weather: {props.status}</p>
      <p className="weather__temp">Temperature: {props.temp}</p>
    </div>
  );
}
