import React from "react";

export default function form(props) {
  return (
    <form onSubmit={props.onSubmit} className="weatherForm">
      <input
        type="text"
        className="weatherForm__input"
        placeholder="type in city"
      />
      <button className="weatherForm__button">search</button>
    </form>
  );
}
