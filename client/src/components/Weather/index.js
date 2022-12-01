import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import WeatherData from '../WeatherData';

const Weather = () => {
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [searchedWeather, setWeather] = useState({});

  // console.log(Object.keys(searchedWeather).length === 1);
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'lat') {
      setLat(inputValue);
    }

    if (inputType === 'long') {
      setLong(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lat && long) {
      weatherCall();
    }
  };

  //   let lat = '39.7626';
  //   let long = '-105.3136';

  const weatherCall = async () => {
    try {
      const gridRes = await fetch(
        `https://api.weather.gov/points/${lat},${long}`
      );
      const gridData = await gridRes.json();

      const weatherRes = await fetch(
        `https://api.weather.gov/gridpoints/${gridData.properties.gridId}/${gridData.properties.gridX},${gridData.properties.gridY}`
      );

      const data = await weatherRes.json();

      const weatherData = {
        maxTemp: data.properties.maxTemperature.values[0],
        lal: data.properties.lightningActivityLevel.values[0],
        relativeHumidity: data.properties.relativeHumidity.values[0],
        twentyFootWindSpeed: data.properties.twentyFootWindSpeed.values[0],
        twentyFootWindDirection:
          data.properties.twentyFootWindDirection.values[0],
        hainesIndex: data.properties.hainesIndex.values[0],
        redFlagThreatIndex: data.properties.redFlagThreatIndex.values[0],
      };

      console.log(typeof weatherData);

      setWeather(weatherData);
      console.log(searchedWeather);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className='weather-form'>
        <h2>Enter your latitude and longitude in Decimal Degress</h2>
        <Form.Label htmlFor='latitude'>Latitude</Form.Label>
        <Form.Input
          type='text'
          value={lat}
          name='lat'
          placeholder='Latitude'
          onChange={handleInputChange}
        />
        <Form.Label htmlFor='longitude'>Longitude</Form.Label>
        <Form.Input
          type='text'
          value={long}
          name='long'
          placeholder='Longitude'
          onChange={handleInputChange}
        />

        <Button.Group
          style={{
            justifyContent: 'center',
            marginTop: '7px',
            marginBottom: '1px',
          }}
        >
          <Button className='button fire' onClick={handleSubmit}>
            Submit
          </Button>
        </Button.Group>
      </form>
      <div className='weather-data'>
        {Object.keys(searchedWeather).length === 0 ? (
          ''
        ) : (
          <WeatherData searchedWeather={searchedWeather} />
        )}
      </div>
    </>
  );
};

export default Weather;
