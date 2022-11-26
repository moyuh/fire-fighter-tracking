import React, { useState } from "react";
import Auth from "../../utils/auth";
// import { Link } from "react-router-dom" ....Incase we want to use it
import "./nav.css";
import PageChoice from "../PageChoice";

function Nav() {
  let [pageView, setPageView] = useState();
  if (!pageView) {
    setPageView("Landing");
  }

  const eventHandle = (e) => {
    setPageView(e.target.value);
  };

  if (Auth.loggedIn()) {
    return (
      <div>
        <header>
          <nav>
            <h1>Smokey's Helper</h1>
            <ul className="buttonList">
              <li>
                <button
                  className="button fire"
                  id={pageView === "About" ? "highlight" : ""}
                  value={"Home"}
                  onClick={eventHandle}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="button fire"
                  id={pageView === "Projects" ? "highlight" : ""}
                  value={"Calender"}
                  onClick={eventHandle}
                >
                  Calender
                </button>
              </li>
              <li>
                <button
                  className="button fire"
                  id={pageView === "Projects" ? "highlight" : ""}
                  value={"IQCS"}
                  onClick={eventHandle}
                >
                  IQCS
                </button>
              </li>
              <li>
                <button
                  className="button fire"
                  id={pageView === "Projects" ? "highlight" : ""}
                  value={"Donate"}
                  onClick={eventHandle}
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  className="button fire"
                  id={pageView === "Projects" ? "highlight" : ""}
                  value={"Logout"}
                  onClick={eventHandle}
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <PageChoice pageView={pageView} />
      </div>
    );
  } else {
    return (
      <div>
        <header>
          <nav>
            <h1>Smokey's Helper</h1>
            <ul className="buttonList">
              <li>
                <button
                  className="button fire"
                  id={pageView === "About" ? "highlight" : ""}
                  value={"Login"}
                  onClick={eventHandle}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className="button fire"
                  id={pageView === "Projects" ? "highlight" : ""}
                  value={"Signup"}
                  onClick={eventHandle}
                >
                  Signup
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <PageChoice pageView={pageView} />
      </div>
    );
  }
}

export default Nav;
