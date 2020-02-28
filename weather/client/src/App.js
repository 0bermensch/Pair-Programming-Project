import React, { Component } from "react";
import Header from "./components/header";
import Form from "./components/form";
import Weather from "./components/weather";
import axios from "axios";

const $weatherApiKey = "09b61245aa361f8c44a4d476c72abfc2";
const $url = "https://api.openweathermap.org/data/2.5/weather?q=";

class App extends Component {
  state = {
    city: "vancouver",
    weather: "",
    currentTemp: 0
  };

  componentDidMount() {
    axios
      .get(`${$url}${this.state.city}&appid=${$weatherApiKey}`)
      .then(response => {
        const temp = Number(response.data.main.temp) - 273.15;
        this.setState({ currentTemp: Math.floor(temp) });
        this.setState({ weather: response.data.weather[0].main });
        console.log(Math.floor(temp));
        console.log(response.data.weather[0].main);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Weather
          temp={this.state.currentTemp}
          status={this.state.weather}
          city={this.state.city}
        />
      </div>
    );
  }
}
export default App;
