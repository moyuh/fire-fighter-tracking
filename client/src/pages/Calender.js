import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/Calendar.css";



const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022, 10, 1),
        end: new Date(2022, 10, 5),
    },
    {
        title: "Vacation",
        start: new Date(2022, 10, 7),
        end: new Date(2022, 10, 15),
    },
    {
        title: "Conference",
        start: new Date(2022, 10, 20),
        end: new Date(2022, 10, 23),
    },
];

function Calendar2() {
    
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState([]);
    
    useEffect(() => { 
       
    }, [allEvents])
    
    function handleAddEvent(event) {
    event.preventDefault();
        
        setAllEvents([...allEvents, newEvent]);
        console.log(allEvents)
    }

    return (
        <div className="App">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <form>
                <input type="text" placeholder="Add Event" style={{ width: "20%", marginRight: "10px" }} 
                value={newEvent.title} 
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />

                <label>Start Date </label>
                <input type='date'
                selected={newEvent.start}
                onChange={(x) => setNewEvent({ ...newEvent, start: new Date(x.target.value) })}></input>

                <label>End Date </label>
                <input type='date' 
                
                selected={newEvent.end} 
                onChange={(end) => setNewEvent({ ...newEvent, end: new Date(end.target.value) })}></input>

                <button stlye={{ marginTop: "10px" }} 
                onClick={handleAddEvent}>
                    Add Event
                </button>
            </form>
            <Calendar localizer={localizer} 
            events={allEvents} 
            startAccessor="start" 
            endAccessor="end" style={{ height: 500, margin: "50px" }} />
            
        </div>
    );
}


export default Calendar2;