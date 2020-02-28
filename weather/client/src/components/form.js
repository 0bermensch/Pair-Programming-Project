import React from "react";

export default function Form() {
  return (
    <div className="weatherForm">
      <input
        type="text"
        className="weatherForm__input"
        placeholder="type in city"
      />
      <button className="weatherForm__button">search</button>
    </div>
  );
}
