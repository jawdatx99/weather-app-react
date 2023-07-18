import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input className="input" placeholder="city" name="city" />
      <input className="input" placeholder="country" name="country" />
      <button className="button">Get Weather</button>
    </form>
  );
};

export default Form;
