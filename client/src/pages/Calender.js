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
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_EVENTS } from "../utils/queries";
import enUS from 'date-fns/locale/en-US'


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
  const [newEvent, setNewEvent] = useState({ title: "", startDate: "", endDate: "" });
  const  {data, loading}  = useQuery(QUERY_EVENTS);
  // console.log(data)
  const [allEvents, setAllEvents] = useState([]);
  const [addEvent] = useMutation(ADD_EVENT);
  useEffect(() => {}, [setAllEvents]);
 
  // console.log(allEvents)
  
if (loading === false && allEvents.length === 0) {
  const george = []
  for (let i = 0; i < data.events.length; i++) {
    console.log(data.events[i].title)
    
    const loaded = {
      title: data.events[i].title,
      startDate: new Date (data.events[i].startDate),
      endDate: new Date (data.events[i].endDate)
    }
    george.push(loaded)
    console.log(loaded)
    
  }
  setAllEvents(george)
    console.log(allEvents)
}
  console.log(allEvents)
  // setAllEvents(data.events[0])
  async function handleAddEvent(event) {
    event.preventDefault();

    try {
      setAllEvents([...allEvents, newEvent]);
      console.log(newEvent);
      await addEvent({
        variables: {
          title: newEvent.title,
          startDate: new Date (newEvent.startDate),
          endDate: new Date (newEvent.endDate),
        },
      });
      
      
    } catch (err) {
      console.log(err)
      // console.log(JSON.stringify(err, null, 2));
    }
  }

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <form>
        <input
          type="text"
          placeholder="Add Event"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />

        <label>Start Date </label>
        <input
          type="datetime-local"
          selected={newEvent.startDate}
          onChange={(x) =>
            setNewEvent({ ...newEvent, startDate: new Date(x.target.value) })
          }
        ></input>

        <label>End Date </label>
        <input
          type="datetime-local"
          selected={newEvent.endDate}
          onChange={(end) =>
            setNewEvent({ ...newEvent, endDate: new Date(end.target.value) })
          }
        ></input>

        <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </form>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="startDate"
        endAccessor="endDate"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default Calendar2;
