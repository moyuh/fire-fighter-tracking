import React from "react";
import "bulma/css/bulma.min.css";
import "../pages/styles/Dashboard.css";
import { getCurrentDate } from "../utils/getCurrentDate";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        Weather Forecast API
      </div>
      <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <p>Today's Date: {getCurrentDate()}</p>
        Today's Calendar Events:
      </div>
      <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <a
          href="https://www.nifc.gov/nicc/sitreprt.pdf"
          className="sit-href"
          alt="Sit Report"
        >
          <button className="dash-btn">Sit Report Link</button>
        </a>
      </div>
      <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        {/* Need to redirect to donations page */}
        <a href="placeholder" alt="donation page">
          <button className="dash-btn">Donate To The Cause</button>
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
