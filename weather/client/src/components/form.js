import React from "react";
import Pokeball from "../assets/Icons/pokeball.png";

export default function form(props) {
  const eventHandler = event => {
    event.preventDefault();
    props.getWeather(event.target.city.value.toLowerCase());
    event.target.reset();
  };
  return (
    <form onSubmit={eventHandler} className="weatherForm">
      <input
        type="text"
        className="weatherForm__input"
        placeholder="type in city"
        name="city"
      />
      <input
        type="image"
        src={Pokeball}
        className="weatherForm__button"
      ></input>
    </form>
  );
}
