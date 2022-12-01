import React from 'react';
import { useGeolocated } from 'react-geolocated';

const Geolocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
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
    <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <tbody>
        <tr>
          <td colSpan={2}>
            <h2>Your Current Location</h2>
          </td>
        </tr>
        <tr>
          <td>
            <h3>Latitude:</h3>
          </td>
          <td>
            <h3>{coords.latitude.toFixed(4)}</h3>
          </td>
        </tr>
        <tr>
          <td>
            <h3>Longitude:</h3>
          </td>
          <td>
            <h3>{coords.longitude.toFixed(4)}</h3>
          </td>
        </tr>
        <tr>
          <td>
            <h3>Altitude:</h3>
          </td>
          <td>
            <h3>{coords.altitude ? coords.altitude : 'Unavailable'}</h3>
          </td>
        </tr>
      </tbody>
    </table>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default Geolocation;
