// basic usage for calendar able to add info to dates

import React, { useState } from 'react';
import Calendar from 'react-calendar';

const datesToAddContentTo = [tomorrow, in3Days, in5Days];

function tileContent({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
      return 'My content';
    }
  }
}

function CalendarPage() {
  const [value, setValue] = useState(new Date());

  return (
    <Calendar
      onChange={onChange}
      value={date}
      tileContent={tileContent}
    />
  );
}

export default CalendarPage;