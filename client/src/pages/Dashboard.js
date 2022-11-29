import React from 'react';
import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

function Home() {
  const [searchedWeather, setWeather] = useState({});

  let lat = '39.7626';
  let long = '-105.3136';

  useEffect(() => {
    weatherCall();
  }, []);

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
      // console.log(data);
      // console.log(data.properties.lightningActivityLevel.values[0]);

      const weatherData = {
        maxTemp: data.properties.maxTemperature.values[0],
        lal: data.properties.lightningActivityLevel.values[0],
      };
      console.log(weatherData);

      setWeather({ weatherData });
    } catch (err) {
      console.error(err);
    }
  };
  if (searchedWeather !== {}) {
    return (
      <div className='Home'>
        <div className='column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
          Weather Forecast API
          <br />
          <ul>
            <li>{searchedWeather.weatherData.maxTemp.value}</li>
            <li>{searchedWeather.weatherData.lal.value}</li>
          </ul>
        </div>
        <div className='column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
          Date
          <br></br>
          Today's Calendar Events
          <br></br>
          <a href='https://www.nifc.gov/nicc/sitreprt.pdf' alt='Sit Report'>
            Sit Report Link
          </a>
          <br></br>
          Stripe Donation
          <br></br>
          Link to Grassroots
        </div>
      </div>
    );
  }
}
export default Home;
