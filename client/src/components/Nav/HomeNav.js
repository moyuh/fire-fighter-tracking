// This will be placed in the HomeNav.js
import 'bulma/css/bulma.min.css';

function HomeNav() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        {/* Will need to change this */}
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">{/* May want to add something here? */}</div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Home</strong>
              </a>
              <a class="button is-light">Calendar</a>
              <a class="button is-light">IQCS</a>
              <a class="button is-light">Donations</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
