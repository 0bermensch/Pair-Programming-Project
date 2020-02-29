import React, { Component } from "react";
import Header from "./components/header";
import Form from "./components/form";
import Weather from "./components/weather";
import axios from "axios";
import Pokemon from "./components/Pokemon";

const $weatherApiKey = "09b61245aa361f8c44a4d476c72abfc2";
const $url = "https://api.openweathermap.org/data/2.5/weather?q=";

class App extends Component {
  state = {
    city: "vancouver",
    weather: "",
    currentTemp: 0,
    pokemons: []
  };

  componentDidMount() {
    this.getWeather(this.state.city);
    this.getPokemon();
  }

  getWeather = city => {
    axios.get(`${$url}${city}&appid=${$weatherApiKey}`).then(response => {
      const temp = Number(response.data.main.temp) - 273.15;
      this.setState({
        city: city,
        currentTemp: Math.floor(temp),
        weather: response.data.weather[0].main
      });
    });
  };

  getPokemon = () => {
    console.log("get pokemon");
    axios.get("/pokelist").then(res => {
      this.setState({
        pokemons: res.data
      });
    });
    // console.log(pokemons);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form getWeather={this.getWeather} />
        <Weather props={this.state} />
        <Pokemon props={this.state} pokemon={this.state.pokemons} />
      </div>
    );
  }
}
export default App;
