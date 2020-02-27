import React from "react";

export default function form() {
  return (
    <form className="weatherForm">
      <input
        type="text"
        className="weatherForm__input"
        placeholder="type in city"
      />
      <button className="wetherForm__button">search</button>
    </form>
  );
}
