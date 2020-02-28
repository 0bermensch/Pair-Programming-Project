import React from "react";
import sunny from "../assets/Icons/sun.png";
import foggy from "../assets/Icons/fog.png";
import windy from "../assets/Icons/wind.png";
import rainny from "../assets/Icons/rain.png";
import snowy from "../assets/Icons/snow.png";
import cloudy from "../assets/Icons/cloud.png";
import thuderstorm from "../assets/Icons/thunder.png";
import sunnypoke from "../assets/Icons/244.png";
import foggypoke from "../assets/Icons/MistyEP.png";
import windypoke from "../assets/Icons/249.png";
import thunderpoke from "../assets/Icons/025.png";
import rainpoke from "../assets/Icons/007.png";
import cloudpoke from "../assets/Icons/334.png";
import snowpoke from "../assets/Icons/144.png";

export default function weather({ props }) {
  const cityTemp = props.city[0].toUpperCase() + props.city.slice(1);
  let image = sunny;
  let pokemon = sunnypoke;
  if (props.weather === "Clear") {
    image = sunny;
    pokemon = sunnypoke;
  } else if (props.weather === "Clouds") {
    image = cloudy;
    pokemon = cloudpoke;
  } else if (props.weather === "Snow") {
    image = snowy;
    pokemon = snowpoke;
  } else if (props.weather === "Rain" || props.weather === "Drizzle") {
    image = rainny;
    pokemon = rainpoke;
  } else if (props.weather === "Wind") {
    image = windy;
    pokemon = windypoke;
  } else if (
    props.weather === "Fog" ||
    props.weather === "Haze" ||
    props.weather === "Smoke"
  ) {
    image = foggy;
    pokemon = foggypoke;
  } else if (props.weather === "Thunderstorm") {
    image = thuderstorm;
    pokemon = thunderpoke;
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
      <div className="weather__pokemon">
        <img src={pokemon} alt="pokemon" />
      </div>
    </div>
  );
}
