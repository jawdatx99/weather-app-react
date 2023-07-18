import React, { Component } from "react";
import "./Weather.css";

const Weather = (props) => {
  return (
    <div className="result">
      {props.city && <p>City : {props.city}</p>} 
      {props.temp && <p>Temp : {props.temp}</p>}
      {props.country && <p>Country : {props.country}</p>}
      {props.humidity && <p>Humidity : {props.humidity}</p>}
      {props.description && <p>Description : {props.description}</p>}
      {props.error && <p>Error : {props.error}</p>}
    </div>
  );
};
export default Weather;
