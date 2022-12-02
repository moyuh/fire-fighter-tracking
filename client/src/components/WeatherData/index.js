import React from 'react';
import './weatherData.css';
import { toFahrenheit } from '../../utils/toFahrenheit';
const WeatherData = (props) => {
  console.log(props);
  return (
    <>
      <h2 className='title'>Forecast Data</h2>
      <ul className='forecast-list'>
        <li>
          Max Temp:{' '}
          {toFahrenheit(props.searchedWeather.maxTemp.value.toFixed(0))}° F
        </li>
        <li>
          Relative Humidity: {props.searchedWeather.relativeHumidity.value}%
        </li>
        <li>
          20ft Winds:{' '}
          {props.searchedWeather.twentyFootWindDirection
            ? `${props.searchedWeather.twentyFootWindDirection} at`
            : 'Unavailable'}
          {props.searchedWeather.twentyFootWindSpeed
            ? props.searchedWeather.twentyFootWindSpeed
            : ''}
        </li>
        <li>
          LAL:{' '}
          {props.searchedWeather.lal.value
            ? props.searchedWeather.lal.value
            : 'Unavailable'}
        </li>
        <li>
          Haines:{' '}
          {props.searchedWeather.hainesIndex.value
            ? props.searchedWeather.hainesIndex.value
            : 'Unavailable'}
        </li>
        <li>
          Red Flag Threat Index:{' '}
          {props.searchedWeather.redFlagThreatIndex
            ? props.searchedWeather.redFlagThreatIndex
            : 'Unavailable'}
        </li>
      </ul>
    </>
  );
};

export default WeatherData;
