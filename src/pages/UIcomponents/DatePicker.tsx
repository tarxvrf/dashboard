import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date: Date) => {
    setStartDate(date);
  };

  return (
    <div>
      <h2>Date Picker</h2>
      <DatePicker selected={startDate} onChange={handleChange as any} />
    </div>
  );
};

export default MyDatePicker;
