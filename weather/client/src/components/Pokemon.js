import React, { Component } from "react";

function Pokemon({ props }) {
  if (props.weather === "Clear") {
    let poke = props.id === "5";
  } else if (props.weather === "Clouds") {
    let poke = props.id === "1";
  } else if (props.weather === "Snow") {
    let poke = props.id === "7";
  } else if (props.weather === "Rain" || props.weather === "Drizzle") {
    let poke = props.id === "3";
  } else if (props.weather === "Wind") {
    let poke = props.id === "2";
  } else if (
    props.weather === "Fog" ||
    props.weather === "Haze" ||
    props.weather === "Smoke"
  ) {
    let poke = props.id === "6";
  } else if (props.weather === "Thunder") {
    let poke = props.id === "4";
  }

  if (props.pokemon === undefined) {
    return <p></p>;
  }

  const choosingPokes = props.pokemons.map((pokemon, index) => {
    return (
      <div className="pokemon">
        <h2 className="pokemon__name">{props.name}</h2>
        <p className="pokemon__type">{props.type}</p>
        <img className="pokemon__image" src={props.image} alt="poke image" />
      </div>
    );
  });
}

export default Pokemon;

// // const express = require("express");
// // const app = express();
// const pokeapi = "https://pokeapi.co/api/v2/pokemon/";
// const pokeInfo = "https://pokeapi.co/api/v2/pokemon/name";
// const pokeList = require(pokeapi);
// const onePokeInfo = require(pokeInfo);

// // router.get("/", (req, res) => {
// //   const allpokes = pokeList.map(pokeName => {
// //     return {
// //       name: pokeName.results.name
// //     };
// //   });
// // });

// // router.get("/", (req, res) => {
// //   const onepoke = onePokeInfo.map(thePokeInfo => {
// //     return {
// //       type: thePokeInfo.types.type,
// //       image: thePokeInfo.sprites.front_default
// //     };
// //   });
// // });
