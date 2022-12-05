import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React, { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import './styles/Calendar.css';
import { v4 as uuidv4 } from 'uuid';
import { ADD_EVENT } from '../utils/mutations';
import { DELETE_EVENT } from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_EVENTS } from '../utils/queries';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import enUS from 'date-fns/locale/en-US';

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
    eventId: uuidv4(),
    title: '',
    startDate: '',
    endDate: '',
  });

  const [allEvents, setAllEvents] = useState([]);
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  // useEffect(() => {}, [setAllEvents]);
  const [addEvent] = useMutation(ADD_EVENT);
  const [deleteEvent] = useMutation(DELETE_EVENT);

  // const { data, loading } = useQuery(QUERY_EVENTS);
  console.log(data);

  // useEffect(() => {
  //   setAllEvents(data);
  // }, []);

  // console.log(allEvents)
  useEffect(() => {
    if (
      loading === false &&
      allEvents.length === 0 &&
      userData.event.length > 0
    ) {
      const george = [];
      for (let i = 0; i < userData.event.length; i++) {
        console.log('in the loop!');
        const loaded = {
          eventId: userData.event[i].eventId,
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
  }, [allEvents, loading, userData.event]);

  console.log(allEvents);
  // setAllEvents(data.events[0])
  const handleAddEvent = async (event) => {
    event.preventDefault();
    setNewEvent({ ...newEvent, eventId: uuidv4() });
    console.log(newEvent);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await addEvent({
        variables: {
          ...newEvent,
        },
      });
      setAllEvents([...allEvents, newEvent]);
    } catch (err) {
      console.log(err);
      // console.log(JSON.stringify(err, null, 2));
    }
  };

  const handleSelect = async (pEvent) => {
    console.log(pEvent);

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }

    try {
      const r = window.confirm('Would you like to remove this event?');
      if (r === true) {
        const eventId = pEvent.eventId;
        const { data } = await deleteEvent({
          variables: { eventId },
        });
        //Need some logic to delete
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
        onSelectEvent={(event) => {
          handleSelect(event);
        }}
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
}

export default Calendar2;
