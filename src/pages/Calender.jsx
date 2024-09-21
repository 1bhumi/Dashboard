import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles for the calendar
import "./Calender.css"

const Calender = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="Page">
      
      <Calendar 
        onChange={onChange} 
        value={date}
      />
      <p className='date'>Date: {date.toDateString()}</p>
    </div>
  );
};

export default Calender;
