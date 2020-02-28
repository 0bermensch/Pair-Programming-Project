const axios = require("axios");
const express = require("express");
const app = express();

let weatherApi = "09b61245aa361f8c44a4d476c72abfc2";
let city = "vancouver";

axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}`
  )
  .then(response => {
    console.log(response.data);
  });

const pokeFile = __dirname + "/models/pokemon.json";
const pokes = require(pokeFile);
const router = express.Router();

app.get("/", (req, res) => {
  const pokeList = pokes.map(poke => {
    return {
      id: poke.id,
      name: poke.name,
      image: poke.image,
      type: poke.type
    };
  });
  res.json(pokeList);
});
app.listen(5000, () => {
  console.log(`server is running at: abc`);
});
module.exports = router;

// .get(
//         `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=9c822b285d554271859bfbd3179f8d8f`).then(response =>
// let { lat, lng } = response.data.results[0].geometry);
// axios.get('second api, with lat and lng objects').then(response =>
//     console.log(response.data));
// console.log(response.data.timezone)d
