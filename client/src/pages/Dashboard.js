import React from 'react';
import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import '../pages/styles/Dashboard.css';
import { getCurrentDate } from '../utils/getCurrentDate';
import Weather from '../components/Weather';

function Dashboard(props) {
  // const [searchedWeather, setWeather] = useState({});

  // let lat = '39.7626';
  // let long = '-105.3136';

  // useEffect(() => {
  //   weatherCall();
  // }, []);

  // const weatherCall = async () => {
  //   try {
  //     const gridRes = await fetch(
  //       `https://api.weather.gov/points/${lat},${long}`
  //     );
  //     const gridData = await gridRes.json();

  //     const weatherRes = await fetch(
  //       `https://api.weather.gov/gridpoints/${gridData.properties.gridId}/${gridData.properties.gridX},${gridData.properties.gridY}`
  //     );

  //     const data = await weatherRes.json();

  //     const weatherData = {
  //       maxTemp: data.properties.maxTemperature.values[0],
  //       lal: data.properties.lightningActivityLevel.values[0],
  //     };

  //     setWeather({ weatherData });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const eventHandle = (e) => {
    props.setPageView(e.target.value);
  };

  // if (searchedWeather.weatherData !== undefined) {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className='column column-data is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
        Weather Forecast API
        <Weather />
        {/* <ul>
            <li>{searchedWeather.weatherData.maxTemp.value}</li>
            <li>{searchedWeather.weatherData.lal.value}</li>
          </ul> */}
      </div>

      <div className='column column-data is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
        <p>Today's Date: {getCurrentDate()}</p>
        Today's Calendar Events:
      </div>
      <div className='column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
        <a
          href='https://www.nifc.gov/nicc/sitreprt.pdf'
          className='sit-href'
          target='_blank'
          alt='Sit Report'
          rel='noreferrer'
        >
          <button className='dash-btn'>Sit Report Link</button>
        </a>
      </div>
      <div className='column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
        <a href='placeholder' alt='donation page'>
          <button
            className='dash-btn'
            value={'Donations'}
            onClick={eventHandle}
          >
            Donate To The Cause
          </button>
        </a>
      </div>
    </div>
  );
  // } else {
  //   return (
  //     <div className='dashboard'>
  //       <h1>Dashboard</h1>
  //       <div className='column column-data is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
  //         Weather Forecast API
  //       </div>
  //       <div className='column column-data is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
  //         <p>Today's Date: {getCurrentDate()}</p>
  //         Today's Calendar Events:
  //       </div>
  //       <div className='column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
  //         <a
  //           href='https://www.nifc.gov/nicc/sitreprt.pdf'
  //           className='sit-href'
  //           target='_blank'
  //           alt='Sit Report'
  //           rel='noreferrer'
  //         >
  //           <button className='dash-btn'>Sit Report Link</button>
  //         </a>
  //       </div>
  //       <div className='column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
  //         <a href='placeholder' alt='donation page'>
  //           <button
  //             className='dash-btn'
  //             value={'Donations'}
  //             onClick={eventHandle}
  //           >
  //             Donate To The Cause
  //           </button>
  //         </a>
  //       </div>
  //     </div>
  //   );
}

export default Dashboard;
