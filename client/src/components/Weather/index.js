import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import WeatherData from '../WeatherData';

const Weather = () => {
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [searchedWeather, setWeather] = useState({});

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

  const weatherCall = async () => {
    try {
      const gridRes = await fetch(
        `https://api.weather.gov/points/${lat},${long}`
      );
      const gridData = await gridRes.json();

      const weatherRes = await fetch(
        `https://api.weather.gov/gridpoints/${gridData.properties.gridId}/${gridData.properties.gridX},${gridData.properties.gridY}`
      );
      console.log(weatherRes);
      if (weatherRes.status === 200) {
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
        setWeather(weatherData);
      } else {
        alert(
          "Data unavailable at this time! It's only the US government, give 'em a break..."
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className='weather-form'>
        <h4>Enter your latitude and longitude in Decimal Degress</h4>
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
