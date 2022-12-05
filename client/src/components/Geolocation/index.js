import React from 'react';
import './geolocation.css';
import { useGeolocated } from 'react-geolocated';
import { toFt } from '../../utils/toFt';

const Geolocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
        timeout: 10000,
      },
      watchPosition: true,
      userDecisionTimeout: null,
      suppressLocationOnMount: false,
      geolocationProvider: navigator.geolocation,
      isOptimisticGeolocationEnabled: true,
    });

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <h2 className='title'>Your Current Location</h2>
      <ul className='location-list'>
        <li>Latitude: {coords.latitude.toFixed(4)}</li>
        <li>Longitude: {coords.longitude.toFixed(4)}</li>
        <li>
          Altitude:{' '}
          {coords.altitude ? toFt(coords.altitude).toFixed(2) : 'Unavailable'}
        </li>
      </ul>
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default Geolocation;
