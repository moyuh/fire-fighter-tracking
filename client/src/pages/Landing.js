import "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../components/Nav/nav.css";
import React, { useState } from "react";

function Landing() {
  return (
    <div>
      <div class="row">
        <div class="col-md-8">
          <div class="pb-3">
            Welcome to Smokey’s Helper for all of your Wildfire Fighting
            Resources and Tools. To access our tools please login our create an
            account by signing up.
          </div>
          <div class="row">
            <div class="col-md-6">
              <button
                className="button fire"
                // id={pageView === "About" ? "highlight" : ""}
                // value={"Login"}
                // onClick={eventHandle}
              >
                Login
              </button>
            </div>
            <div class="col-md-6"><button
              className="button fire"
                // id={pageView === "Projects" ? "highlight" : ""}
                // value={"Signup"}
                // onClick={eventHandle}
              >
                Signup
              </button></div>
          </div>
        </div>
        <div class="col-md-4">
          <h6>Tools Provided:</h6>
          <ul>
            <li>Fire and Weather Updates</li>
            <li>Incident Management Situation Report</li>
            <li>IQCS Fillable Form</li>
            <li>Calendar Planning</li>
            <li>Note Taking For Job-Site Activities</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Landing;
