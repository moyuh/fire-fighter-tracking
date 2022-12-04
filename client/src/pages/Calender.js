import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import './styles/Calendar.css';
import { ADD_EVENT } from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_EVENTS } from '../utils/queries';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import enUS from 'date-fns/locale/en-US';
import { v4 as uuidv4 } from 'uuid';

const locales = {
  'en-US': enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function Calendar2() {
  const [newEvent, setNewEvent] = useState({
    id: '',
    title: '',
    startDate: '',
    endDate: '',
  });

  const [allEvents, setAllEvents] = useState([]);
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  // useEffect(() => {}, [setAllEvents]);
  const [addEvent] = useMutation(ADD_EVENT);

  // const { data, loading } = useQuery(QUERY_EVENTS);
  console.log(data);

  // useEffect(() => {
  //   setAllEvents(data);
  // }, []);

  // console.log(allEvents)

  if (
    loading === false &&
    allEvents.length === 0 &&
    userData.event.length > 0
  ) {
    const george = [];
    for (let i = 0; i < userData.event.length; i++) {
      console.log('in the loop!');
      const loaded = {
        id: userData.event[i].id,
        title: userData.event[i].title,
        startDate: new Date(userData.event[i].startDate),
        endDate: new Date(userData.event[i].endDate),
      };
      george.push(loaded);
      console.log(loaded);
    }
    setAllEvents(george);
    console.log(allEvents);
  }

  console.log(allEvents);
  // setAllEvents(data.events[0])
  async function handleAddEvent(event) {
    event.preventDefault();
    setNewEvent({ ...newEvent, id: uuidv4() });

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      // setAllEvents([...allEvents, newEvent]);

      await addEvent({
        variables: {
          id: newEvent.id,
          title: newEvent.title,
          startDate: new Date(newEvent.startDate),
          endDate: new Date(newEvent.endDate),
        },
      });
      setAllEvents([...allEvents, newEvent]);
    } catch (err) {
      console.log(err);
      // console.log(JSON.stringify(err, null, 2));
    }
  }

  const handleSelect = (pEvent) => {
    console.log(pEvent);
    try {
      const r = window.confirm('Would you like to remove this event?');
      if (r === true) {
        //Need some logic to delete
        this.setState((prevState, props) => {
          const allEvents = [...prevState];
          const idx = allEvents.indexOf(pEvent);
          allEvents.splice(idx, 1);
          return { allEvents };
        });
        alert('logic to delete goes here');
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className='App'>
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <form>
        <input
          type='text'
          placeholder='Add Event'
          style={{ width: '20%', marginRight: '10px' }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />

        <label>Start Date </label>
        <input
          type='datetime-local'
          selected={newEvent.startDate}
          onChange={(x) =>
            setNewEvent({ ...newEvent, startDate: new Date(x.target.value) })
          }
        ></input>

        <label>End Date </label>
        <input
          type='datetime-local'
          selected={newEvent.endDate}
          onChange={(end) =>
            setNewEvent({ ...newEvent, endDate: new Date(end.target.value) })
          }
        ></input>

        <button style={{ marginTop: '10px' }} onClick={handleAddEvent}>
          Add Event
        </button>
      </form>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor='startDate'
        endAccessor='endDate'
        onSelectEvent={handleSelect}
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
}

export default Calendar2;
