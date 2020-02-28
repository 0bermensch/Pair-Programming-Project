import React from "react";

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
      <button className="weatherForm__button">search</button>
    </form>
  );
}
