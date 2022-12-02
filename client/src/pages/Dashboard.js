import React from 'react';
import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import '../pages/styles/Dashboard.css';
import { getCurrentDate } from '../utils/getCurrentDate';
import Weather from '../components/Weather';
import Geolocation from '../components/Geolocation';

function Dashboard(props) {
  const eventHandle = (e) => {
    props.setPageView(e.target.value);
  };

  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className='column column-data is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
        <h2>Weather Forecast API</h2>
        <Weather />
        <Geolocation />
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
}

export default Dashboard;
