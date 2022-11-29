import React, { useState } from 'react';
import Auth from '../../utils/auth';
import './nav.css';
import PageChoice from '../PageChoice';
import Smokey from '../assets/smokey.png';
import LoggedPages from '../LoggedPages'

function Nav() {
  let [pageView, setPageView] = useState();


  const eventHandle = (e) => {
    setPageView(e.target.value);
  };
console.log(pageView)
  if (Auth.loggedIn()) {
    return (
      <div>
        <header>
          <nav>
            <h1>Smokey's Helper</h1>
            <img className='smokey' src={Smokey} alt='logo' />
            <ul className='buttonList'>
              <li>
                <button
                  className='button fire'
                  id={pageView === 'About' ? 'highlight' : ''}
                  value={'Dashboard'}
                  onClick={eventHandle}
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  className='button fire'
                  id={pageView === 'Projects' ? 'highlight' : ''}
                  value={'Calender'}
                  onClick={eventHandle}
                >
                  Calender
                </button>
              </li>
              <li>
                <button
                  className='button fire'
                  id={pageView === 'Projects' ? 'highlight' : ''}
                  value={'IQCS'}
                  onClick={eventHandle}
                >
                  IQCS
                </button>
              </li>
              <li>
                <button
                  className='button fire'
                  id={pageView === 'Projects' ? 'highlight' : ''}
                  value={'Donations'}
                  onClick={eventHandle}
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  className='button fire'
                  id={pageView === 'Projects' ? 'highlight' : ''}
                  value={'Logout'}
                  onClick={Auth.logout}
                  
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <LoggedPages pageView={pageView} />
      </div>
    );
  } else {
    return (
      <div>
        <header>
          <nav>
            <h1>Smokey's Helper</h1>
            <img className='smokey' src={Smokey} alt='logo' />
            <ul className='buttonList'>
              <li>
                <button
                  className='button fire'
                  id={pageView === 'About' ? 'highlight' : ''}
                  value={'Login'}
                  onClick={eventHandle}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className='button fire'
                  id={pageView === 'Projects' ? 'highlight' : ''}
                  value={'Signup'}
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
