import React from 'react';
import Weather from '../Weather';
const WeatherData = (props) => {
  console.log(props);
  return <h1>{props.searchedWeather.maxTemp.value}</h1>;
};

export default WeatherData;
