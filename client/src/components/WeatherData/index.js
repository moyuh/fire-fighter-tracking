import React from 'react';
const WeatherData = (props) => {
  console.log(props);
  return (
    <>
      <h2>Forecast Data</h2>
      <ul>
        <li>Max Temp: {props.searchedWeather.maxTemp.value}</li>
        <li>
          Relative Humidity: {props.searchedWeather.relativeHumidity.value}%
        </li>
        <li>
          20ft Winds: {props.searchedWeather.twentyFootWindDirection} at{' '}
          {props.searchedWeather.twentyFootWindSpeed} mph{' '}
        </li>
        <li>LAL: {props.searchedWeather.lal.value}</li>
        <li>Haines: {props.searchedWeather.hainesIndex.value}</li>
      </ul>
    </>
  );
};

export default WeatherData;
