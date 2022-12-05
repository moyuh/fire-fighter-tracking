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
          Min Temp:{' '}
          {toFahrenheit(props.searchedWeather[0].minTemp.value.toFixed(0))}° F
        </li>
        <li>
          Max Temp:{' '}
          {toFahrenheit(props.searchedWeather[0].maxTemp.value.toFixed(0))}° F
        </li>
        <li>Current Temp: {props.searchedWeather[1].temp}° F</li>
        <li>
          Current Relative Humidity:{' '}
          {props.searchedWeather[0].relativeHumidity.value}%
        </li>
        <li>
          20ft Winds:{' '}
          {props.searchedWeather[0].twentyFootWindDirection
            ? `${props.searchedWeather[0].twentyFootWindDirection} at`
            : 'Unavailable'}
          {props.searchedWeather[0].twentyFootWindSpeed
            ? props.searchedWeather[0].twentyFootWindSpeed
            : ''}
        </li>
        <li>
          LAL:{' '}
          {props.searchedWeather[0].lal.value
            ? props.searchedWeather[0].lal.value
            : 'Unavailable'}
        </li>
        <li>
          Haines:{' '}
          {props.searchedWeather[0].hainesIndex.value
            ? props.searchedWeather[0].hainesIndex.value
            : 'Unavailable'}
        </li>
        <li>
          Red Flag Threat Index:{' '}
          {props.searchedWeather[0].redFlagThreatIndex
            ? props.searchedWeather[0].redFlagThreatIndex
            : 'Unavailable'}
        </li>
      </ul>
    </>
  );
};

export default WeatherData;
