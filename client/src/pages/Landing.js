import 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../components/Nav/nav.css';
import React, { useState } from 'react';
import './styles/Landing.css';

function Landing() {
  return (
    <div className='landing'>
      <div className='row'>
        <div className='col-md-8'>
          <div className='pb-3'>
            Welcome to Smokey’s Helper for all of your Wildfire Fighting
            Resources and Tools. To access our tools please login or create an
            account by signing up.
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <button
                className='button fire'
                id='landing-login'
                // id={pageView === "About" ? "highlight" : ""}
                // value={"Login"}
                // onClick={eventHandle}
              >
                Login
              </button>
            </div>
            <div className='col-md-6'>
              <button
                className='button fire'
                id='landing-signup'
                // id={pageView === "Projects" ? "highlight" : ""}
                // value={"Signup"}
                // onClick={eventHandle}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <h3>Tools Offered:</h3>
          <ul>
            <li>Fire and Weather Updates</li>
            <li>Incident Management Situation Report</li>
            <li>IQCS Fillable Form</li>
            <li>Calendar Planning</li>
            <li>Note Taking For Job-Site Activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Landing;
