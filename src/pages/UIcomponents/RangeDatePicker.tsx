import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import styles
import 'react-date-range/dist/theme/default.css'; // Import default theme

const MyDateRange: React.FC = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleDateChange = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  return (
    <div>
      <h2>Select Date Range</h2>
      <DateRange
        ranges={dateRange}
        onChange={handleDateChange}
        moveRangeOnFirstSelection={false}
      />
    </div>
  );
};

export default MyDateRange;
