<<<<<<< HEAD
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/Calendar.css";
import { ADD_EVENT } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
=======
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React, { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import './styles/Calendar.css';
import { ADD_EVENT } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
>>>>>>> c936e69d74ccf129eec2d949e3d9ca7321d250cb
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function Calendar2() {
<<<<<<< HEAD
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);

  const [addEvent] = useMutation(ADD_EVENT);

  useEffect(() => {}, [allEvents]);

=======
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState([]);
  const [addEvent] = useMutation(ADD_EVENT);
  useEffect(() => {}, [allEvents]);

>>>>>>> c936e69d74ccf129eec2d949e3d9ca7321d250cb
  async function handleAddEvent(event) {
    event.preventDefault();

    try {
      setAllEvents([...allEvents, newEvent]);
      console.log(newEvent);
      await addEvent({
        variables: {
          name: newEvent.title,
          startDate: newEvent.start,
          endDate: newEvent.end,
        },
      });
<<<<<<< HEAD
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
=======
      console.log('hry dude');
      // const eventData = data.addEvent;
      // console.log(data.addEvent);
    } catch (err) {
      console.error('Dis an error ');
>>>>>>> c936e69d74ccf129eec2d949e3d9ca7321d250cb
    }
  }

  return (
<<<<<<< HEAD
    <div className="App">
=======
    <div className='App'>
>>>>>>> c936e69d74ccf129eec2d949e3d9ca7321d250cb
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <form>
        <input
<<<<<<< HEAD
          type="text"
          placeholder="Add Event"
          style={{ width: "20%", marginRight: "10px" }}
=======
          type='text'
          placeholder='Add Event'
          style={{ width: '20%', marginRight: '10px' }}
>>>>>>> c936e69d74ccf129eec2d949e3d9ca7321d250cb
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />

        <label>Start Date </label>
        <input
<<<<<<< HEAD
          type="date"
=======
          type='date'
>>>>>>> c936e69d74ccf129eec2d949e3d9ca7321d250cb
          selected={newEvent.start}
          onChange={(x) =>
            setNewEvent({ ...newEvent, start: new Date(x.target.value) })
          }
        ></input>

        <label>End Date </label>
        <input
<<<<<<< HEAD
          type="date"
=======
          type='date'
>>>>>>> c936e69d74ccf129eec2d949e3d9ca7321d250cb
          selected={newEvent.end}
          onChange={(end) =>
            setNewEvent({ ...newEvent, end: new Date(end.target.value) })
          }
        ></input>

<<<<<<< HEAD
        <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
=======
        <button stlye={{ marginTop: '10px' }} onClick={handleAddEvent}>
>>>>>>> c936e69d74ccf129eec2d949e3d9ca7321d250cb
          Add Event
        </button>
      </form>
      <Calendar
        localizer={localizer}
        events={allEvents}
<<<<<<< HEAD
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
=======
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500, margin: '50px' }}
>>>>>>> c936e69d74ccf129eec2d949e3d9ca7321d250cb
      />
    </div>
  );
}

export default Calendar2;
