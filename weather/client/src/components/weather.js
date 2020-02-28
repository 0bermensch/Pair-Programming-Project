import React from "react";
import sunny from "../assets/Icons/sun.png";
import foggy from "../assets/Icons/fog.png";
import windy from "../assets/Icons/wind.png";
import rainny from "../assets/Icons/rain.png";
import snowy from "../assets/Icons/snow.png";
import cloudy from "../assets/Icons/cloud.png";
import thuderstorm from "../assets/Icons/thunder.png";

export default function weather({ props }) {
  const cityTemp = props.city[0].toUpperCase() + props.city.slice(1);
  let image = sunny;
  if (props.weather === "Clear") {
    image = sunny;
  } else if (props.weather === "Clouds") {
    image = cloudy;
  } else if (props.weather === "Snow") {
    image = snowy;
  } else if (props.weather === "Rain" || props.weather === "Drizzle") {
    image = rainny;
  } else if (props.weather === "Wind") {
    image = windy;
  } else if (
    props.weather === "Fog" ||
    props.weather === "Haze" ||
    props.weather === "Smoke"
  ) {
    image = foggy;
  } else if (props.weather === "Thunderstorm") {
    image = thuderstorm;
  }

  return (
    <div className="weather">
      <div className="weather__info">
        <p className="weather__city">{cityTemp}</p>
        <p className="weather__status">{props.weather}</p>
        <p className="weather__temp">{props.currentTemp} &#8451;</p>
      </div>
      <div className="weather__icons">
        <img src={image} alt="weatherIcon" />
      </div>
    </div>
  );
}
