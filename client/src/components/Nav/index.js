import React from "react";
import Auth from "../../utils/auth";
// import { Link } from "react-router-dom" ....Incase we want to use it

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            {/* Will need to change this */}
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt=""
              />
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              {/* May want to add something here? */}
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Home</strong>
                  </a>
                  <a className="button is-light">Calendar</a>
                  <a className="button is-light">IQCS</a>
                  <a className="button is-light">Donations</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            {/* Will need to change this */}
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt=''
              />
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              {/* May want to add something here? */}
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    }
  }
  return (
    <header className="flex-row px-1">
      <h1>
        {/* Keeping this here just in case we need to use it */}
        {/* <Link to="/">
          <span role="img" aria-label="shopping bag">
            🛍️
          </span>
          -Shop-Shop
        </Link> */}
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
