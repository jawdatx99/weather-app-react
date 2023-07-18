import React, { Component } from "react";
import Form from "./Component/Form";
import Weather from "./Component/Weather";

const api_key = "9bce266c227fe284c9bdcdc468aa9827";

class App extends Component {
  state = {
    temp: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };

  getWeather = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${api_key}`
    );
    const data = await api.json();
    if (city && country) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temp: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please enter data !!",
      });
    }
  };

  render() {
    return (
      <div className="formContainer">
        <Form getWeather={this.getWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
