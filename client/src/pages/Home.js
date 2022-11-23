import React from "react";
import "bulma/css/bulma.min.css";

function Home() {
  return (
    <div className="Home">
      <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        Weather Forecast API
      </div>
      <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        Date
        <br></br>
        Today's Calendar Events
        <br></br>
        <a href="https://www.nifc.gov/nicc/sitreprt.pdf" alt="Sit Report">
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

export default Home;
